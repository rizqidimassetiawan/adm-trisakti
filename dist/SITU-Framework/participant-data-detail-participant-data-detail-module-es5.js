function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["participant-data-detail-participant-data-detail-module"], {
  /***/"./node_modules/angular-datatables/index.js": (
  /*!**************************************************!*\
    !*** ./node_modules/angular-datatables/index.js ***!
    \**************************************************/
  /*! exports provided: DataTableDirective, DataTablesModule */
  /***/
  function _node_modules_angularDatatables_indexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./src/angular-datatables.directive */"./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"];
    });

    /* harmony import */
    var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./src/angular-datatables.module */"./node_modules/angular-datatables/src/angular-datatables.module.js");
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
  }),
  /***/"./node_modules/angular-datatables/src/angular-datatables.directive.js": (
  /*!*****************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
    \*****************************************************************************/
  /*! exports provided: DataTableDirective */
  /***/
  function _node_modules_angularDatatables_src_angularDatatablesDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return DataTableDirective;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
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
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var DataTableDirective = /** @class */function () {
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
    }();

    //# sourceMappingURL=angular-datatables.directive.js.map

    /***/
  }),
  /***/"./node_modules/angular-datatables/src/angular-datatables.module.js": (
  /*!**************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
    \**************************************************************************/
  /*! exports provided: DataTablesModule */
  /***/
  function _node_modules_angularDatatables_src_angularDatatablesModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return DataTablesModule;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./angular-datatables.directive */"./node_modules/angular-datatables/src/angular-datatables.directive.js");
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
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var DataTablesModule = /** @class */function () {
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
    }();

    //# sourceMappingURL=angular-datatables.module.js.map

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.component.html": (
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.component.html ***!
    \****************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_theme_admMpParticipantData_participantDataDetail_participantDataDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<!-- <p>Participant Data Management works!</p> -->\n<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"text-md-left\">\n      <div class=\"page-header-title\">\n        <h5>{{ 'MENU.participant-data'| translate}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<app-card cardTitle=\"{{ 'MENU.participant-data' | translate }}\" cardClass=\"card-datatable\"\n  headerClass=\"text-center text-md-left\" [options]=\"false\" [loading]=\"loadingParticipant\"\n  [hidHeader]=\"true\">\n  <!-- <div class=\"row\"> -->\n  <!-- <div class=\"col-12\">\n      <div class=\"row align-items-center mb-2 pl-3 pr-3\">\n        <div class=\"col-12 col-md-6 text-left\">\n          <button class=\"btn btn-outline-secondary btn-sm btn-round has-ripple\" routerLink=\"/adm-mp-participant-data\">\n            <i class=\"ti-angle-left\"></i>\n            {{'ROOT.back' | translate}}\n          </button>\n        </div>\n      </div>\n    </div> -->\n  <div class=\"col-sm-12\">\n    <ngb-tabset>\n      <ngb-tab title=\"Data Diri\">\n        <ng-template ngbTabContent>\n          <form class=\"md-float-material form-material\" action=\"javascript:\"\n            [formGroup]=\"registrationParticipantDataForm\">\n            <div class=\"row m-1\">\n              <h4 class=\"col-md-12 mt-3 mb-3 font-family-custom\">Data Pribadi</h4>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.fullname' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.fullname}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.nis' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.nis}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.gender' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.gender_name == 'FEMALE' ? 'Wanita' :\n                  'Pria'}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.religion' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.religion_name}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.country_birth' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.birth_country_name}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.province_birth' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.birth_province_name}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.city_birth' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.birth_city_name}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.birthdate' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.birth_date | date:'dd/MM/yyyy'}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.country_origin' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.origin_country_name}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.nationality' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.nationality_name}}</label>\n              </div>\n              <div [hidden]=\"!isIndonesianNationality\" class=\"form-group mb-2 col-md-12\">\n                <label class=\"mb-1\">{{ 'CONTENT.NIK' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.identify_number}}</label>\n              </div>\n              <div [hidden]=\"isIndonesianNationality\" class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.passport_number' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.passport_number }}</label>\n              </div>\n              <div [hidden]=\"isIndonesianNationality\" class=\"form-group mb-2 col-md-6\">\n                <label class=\"fmb-1\">{{ 'CONTENT.passport_expired_date' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.passport_expiry_date != null ?\n                  (participantBiodatas.passport_expiry_date | date:'dd/MM/yyyy') : '-'}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.color-blind' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.color_blind}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.special-needs' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.special_needs !== null ?\n                  participantBiodatas.special_needs : 'Tidak'}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.phone_number' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.mobile_phone_number}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.email' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.username}}</label>\n              </div>\n              <div class=\"col-md-12\">\n                <hr>\n              </div>\n              <h4 class=\"col-md-12 mt-3 mb-3 font-family-custom\">Data Alamat</h4>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.country' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.address_country_name }}</label>\n              </div>\n              <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.province' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.address_province_name }}</label>\n              </div>\n              <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.city' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.address_city_name }}</label>\n              </div>\n              <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.district' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.address_disctrict_name }}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.address' | translate }}</label><br>\n                <label class=\"form-label f-w-600 text-wrap\">{{ participantBiodatas.address_detail }}</label>\n              </div>\n              <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2 col-md-3\">\n                <label class=\"mb-1\">{{ 'CONTENT.zipcode' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.address_postal_code }}</label>\n              </div>\n              <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2 col-md-3\">\n                <label class=\"mb-1\">{{ 'CONTENT.home_number' | translate }}</label><br>\n                <label class=\"form-label f-w-600\">{{ participantBiodatas.house_phone_number ?\n                  participantBiodatas.house_phone_number : '-' }}</label>\n              </div>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Program Studi\">\n        <ng-template ngbTabContent>\n          <div class=\"row m-1\">\n            <h4 class=\"col-md-12 mt-3 mb-3 font-family-custom\">Pilihan Program Studi</h4>\n            <div class=\"form-group mb-2 col-md-6\">\n              <label class=\"mb-1\">{{ 'CONTENT.registration-number' | translate }}</label> <br>\n              <label class=\"form-label f-w-600\">{{ participantRegistration.registration_number}}</label>\n            </div>\n            <div class=\"form-group mb-2 col-md-6\">\n              <label class=\"mb-1\">{{ 'CONTENT.selection-path' | translate }}</label> <br>\n              <label class=\"form-label f-w-600\">{{ participantRegistration.selection_path_name }}</label>\n            </div>\n              <div class=\"table-responsive pb-1 mt-2\">\n                <table class=\"table table-boder-radius dataTable\">\n                  <thead class=\"thead-light\">\n                    <tr>\n                      <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.studyprogram_choosen' | translate}}</th>\n                      <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.faculty' | translate}}</th>\n                      <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.study-program' | translate}}</th>\n                      <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.SDP2' | translate}}</th>\n                      <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.education-fund' | translate}}</th>\n                      <th scope=\"col\" class=\"center-table\">Total</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"tableData?.length != 0\">\n                    <tr *ngFor=\"let data of tableData; let i = index;\">\n                      <td style=\"padding-left: 10px;\" class=\"center-table\">{{ data.priority }}</td>\n                      <td class=\"center-table\">{{ data.faculty_name }}</td>\n                      <td class=\"center-table\">{{ data.study_program_name }}</td>\n                      <td class=\"center-table\">{{data.minimum_donation | currency:'Rp':'symbol':'1.0-0'}}</td>\n                      <td class=\"center-table\">{{data.education_fund | currency:'Rp':'symbol':'1.0-0'}}</td>\n                      <td class=\"center-table\"><b>Rp{{data.sdp_total}}</b></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Dokumen\">\n        <ng-template ngbTabContent>\n          <div class=\"row m-1\">\n            <h4 class=\"col-md-12 mt-3 mb-3 font-family-custom\">Dokumen Persyaratan</h4>\n            <div class=\"col-md-12 text-center\">\n              <button class=\"btn btn-outline-primary btn-sm btn-round has-ripple\" (click)=\"gotoDocument()\" >\n                <i class=\"fas fa-file-alt\"></i> {{'MENU.document-data' | translate}}\n              </button>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</app-card>\n\n<!-- Forms Modal -->\n<app-ui-modal #registrationDocumentModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\"\n  [loading]=\"loading\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.document-verification' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" (click)=\"registrationDocumentModal.hide()\"\n      aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"registrationDocumentForm\"\n      (ngSubmit)=\"createRegistrationDocumentData()\">\n      <div class=\"row\" [ngSwitch]=\"edit\">\n        <div class=\"col-sm-12\" *ngSwitchDefault>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-name' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"document-name\" required formControlName=\"name\">\n          </div>\n          <div *ngIf=\"participantForm\" class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRequirementUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRequirementUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.document_url === null\">\n                  <!-- <div class=\"col-12 mt-1 row\"> -->\n                  <p class=\"card-text mb-2\">\n                    {{ 'ROOT.no_data_found' | translate }}\n                  </p>\n                  <!-- </div> -->\n                </div>\n                <div *ngIf=\"e.document_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name ? e.document_name : e.document_type|\n                          shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRequirementUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3\">\n                <p class=\"card-text pl-1 mb-0 mt-1 text-center\">\n                  {{ 'ROOT.no_data_found' | translate }}\n                </p>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"supportingForm\" class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRequirementUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRequirementUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <!-- <div class=\"col-12 mt-1 row\"> -->\n                  <p class=\"card-text mb-2\">\n                    {{ 'ROOT.no_data_found' | translate }}\n                  </p>\n                  <!-- </div> -->\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRequirementUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3\">\n                <p class=\"card-text pl-1 mb-0 mt-1 text-center\">\n                  {{ 'ROOT.no_data_found' | translate }}\n                </p>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"transcripForm\" class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRequirementUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRequirementUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.url === null\">\n                  <!-- <div class=\"col-12 mt-1 row\"> -->\n                  <p class=\"card-text mb-2\">\n                    {{ 'ROOT.no_data_found' | translate }}\n                  </p>\n                  <!-- </div> -->\n                </div>\n                <div *ngIf=\"e.url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai Pendidikan Terakhir\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRequirementUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3\">\n                <p class=\"card-text pl-1 mb-0 mt-1 text-center\">\n                  {{ 'ROOT.no_data_found' | translate }}\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.verification-status'| translate}}</h6> <br>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"verification-status1\" class=\"custom-control-input\" value=\"1\"\n                formControlName=\"approval_final_status\">\n              <label class=\"custom-control-label \" for=\"verification-status1\">{{ 'CONTENT.approve' | translate\n                }}</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"verification-status2\" class=\"custom-control-input\" value=\"0\" [checked]=\"true\"\n                formControlName=\"approval_final_status\">\n              <label class=\"custom-control-label\" for=\"verification-status2\">{{ 'CONTENT.not-approve' | translate\n                }}</label>\n            </div>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"registrationDocumentModal.hide()\"\n                [disabled]=\"noDataDocument\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #reportCardRequirementModal [containerClick]=\"false\"\n  dialogClass=\"modal-dialog modal-dialog-centered modal-xl\" [hideFooter]=\"true\" [loading]=\"loadtableReportCardData\">\n  <div class=\"app-modal-header\">\n    <h6 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.school-report' | translate }}</h6>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"reportCardRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-striped table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.no' | translate}}</th>\n            <th class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.semester' | translate}}</th>\n            <th *ngIf=\"isMathStudy\" scope=\"col \" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.math-score' |\n              translate}}</th>\n            <th *ngIf=\"isBahasaStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.indo-score' |\n              translate}}</th>\n            <th *ngIf=\"isEnglishStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.english-score'\n              | translate}}\n            </th>\n            <th *ngIf=\"physicsStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.physics-score' |\n              translate}}\n            </th>\n            <th *ngIf=\"biologyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.biology-score' |\n              translate}}\n            </th>\n            <th *ngIf=\"chemicalStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.chemical-score'\n              | translate}}\n            </th>\n            <th *ngIf=\"sociologicalStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{\n              'CONTENT.sociology-score' |\n              translate}}</th>\n            <th *ngIf=\"economyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{ 'CONTENT.economy-score' |\n              translate}}\n            </th>\n            <th *ngIf=\"geographyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\">{{\n              'CONTENT.geography-score' |\n              translate}}</th>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\" style=\"max-width:auto;\">{{\n              'CONTENT.approved-status' | translate}}</th>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\" style=\"max-width:auto;\">{{ 'CONTENT.approved' |\n              translate}}</th>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1 font-styling\" style=\"max-width:auto;\">{{ 'CONTENT.action' |\n              translate}}</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableData2?.length != 0\">\n          <tr *ngFor=\"let data of tableData2; let i = index;\">\n            <td class=\"text-center pl-1 pr-1 font-styling\">{{ i+1 }}.</td>\n            <td class=\"text-center pl-1 pr-1 font-styling\">{{ data.semesters }}</td>\n            <td *ngIf=\"isMathStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.math ? data.math : '-' }}</td>\n            <td *ngIf=\"isBahasaStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.bahasa ? data.bahasa : '-'}}\n            </td>\n            <td *ngIf=\"isEnglishStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.english ? data.english : '-'\n              }}</td>\n            <td *ngIf=\"physicsStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.physics ? data.physics : '-' }}\n            </td>\n            <td *ngIf=\"biologyStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.biology ? data.biology : '-' }}\n            </td>\n            <td *ngIf=\"chemicalStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.chemical ? data.chemical : '-'\n              }}</td>\n            <td *ngIf=\"sociologicalStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.sociological ?\n              data.sociological : '-' }}\n            </td>\n            <td *ngIf=\"economyStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.economy ? data.economy : '-'}}\n            </td>\n            <td *ngIf=\"geographyStudy\" class=\"text-center pl-1 pr-1 font-styling\">{{ data.geography ? data.geography :\n              '-' }}</td>\n            <td class=\"center-table font-styling\">\n              <span *ngIf=\"data.document_status == 'approved'\" class=\"badge badge-light-success\">{{ 'CONTENT.approve' |\n                translate }}</span>\n              <span *ngIf=\"data.document_status == 'waiting for approved'\" class=\"badge badge-light-secondary\">{{\n                'CONTENT.not-specified' | translate }}</span>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.setujui' | translate\"\n                (click)=\"submitReportApprovedDocument(data)\"><i\n                  class=\"icofont icofont-check-circled f-w-600 f-16 text-c-green\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.tolak' | translate\"\n                (click)=\"submitRejectReportApprovedDocument(data)\"><i\n                  class=\"icofont icofont-close-circled f-w-600 f-16 text-c-red\"></i></a>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.download' | translate\"\n                (click)=\"downloadReportCardData(data)\"><i\n                  class=\"fas fa-cloud-download-alt f-w-600 f-16 text-muted\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.edit' | translate\"\n                (click)=\"openformRaport(data)\"><i class=\"fas fa-pencil-alt f-w-600 f-16 text-warning\"></i></a>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableData2?.length == 0 && !loadtableReportCardData\">\n          <tr>\n            <td colspan=\"14\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableData2?.length == 0 && loadtableReportCardData\">\n          <tr>\n            <td colspan=\"14\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #certificateRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-xl\"\n  [hideFooter]=\"true\" [loading]=\"loadtableCertificateData\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.certificate' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"certificateRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-striped table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.no' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.certificate-level' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.certificate-type' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.publication-year' | translate}}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.certificate-score' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.approved-status' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.approved' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.action' | translate}}</th>\n\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableData3?.length != 0\">\n          <tr *ngFor=\"let data of tableData3; let i = index;\">\n            <td class=\"center-table\">{{i+1}}</td>\n            <td class=\"center-table\">{{ data.certificate_level }}</td>\n            <td class=\"center-table\">{{ data.certificate_type }}</td>\n            <td class=\"center-table\">{{ data.publication_year }}</td>\n            <td class=\"center-table\">{{ data.certificate_score }}</td>\n            <td class=\"center-table font-styling\">\n              <span *ngIf=\"data.document_status == 'approved'\" class=\"badge badge-light-success\">{{ 'CONTENT.approve' |\n                translate }}</span>\n              <span *ngIf=\"data.document_status == 'waiting for approved'\" class=\"badge badge-light-secondary\">{{\n                'CONTENT.not-specified' | translate }}</span>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.setujui' | translate\"\n                (click)=\"submitCertificateApprovedDocument(data)\"><i\n                  class=\"icofont icofont-check-circled f-w-600 f-16 text-c-green\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.tolak' | translate\"\n                (click)=\"submitRejectCertificateApprovedDocument(data)\"><i\n                  class=\"icofont icofont-close-circled f-w-600 f-16 text-c-red\"></i></a>\n            </td>\n            <td class=\"center-table font-styling\">\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.download' | translate\"\n                (click)=\"downloadCertificateData(data)\"><i\n                  class=\"fas fa-cloud-download-alt f-w-600 f-16 text-muted\"></i></a>\n              <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.edit' | translate\"\n                (click)=\"loadCertificateDetailFileData(data)\"><i\n                  class=\"fas fa-pencil-alt f-w-600 f-16 text-warning\"></i></a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<ng-template #showLoading>\n  <div class=\"d-flex justify-content-center\">\n    <div class=\"spinner-border text-primary\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</ng-template>\n\n<!-- Forms Modal -->\n<app-ui-modal #reportCardDetailModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\" [loading]=\"loadingSemester\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.edit' | translate }} {{ 'CONTENT.school-report' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRaportModalDetail();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"reportCardDataForm\"\n      (ngSubmit)=\"createReportCardDocument();\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\" *ngIf=\"!isNotHaveMappingData\">\n          <p class=\"mb-0\"><span class=\"required\">* Wajib diisi</span></p>\n          <div class=\"form-group mb-1\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.semester' | translate }} </label>\n            <input type=\"text\" class=\"form-control is-valid\" formControlName=\"semester_name\" name=\"semester_name\"\n              readonly>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"isBahasaStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.indo-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"bahasa\" name=\"indoScore\" minlength=\"0\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.bahasa.invalid && fraport.bahasa.touched?'is-invalid':(fraport.bahasa.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.required && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.min && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.max && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.pattern && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"isEnglishStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.english-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"english\" name=\"englishScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.english.invalid && fraport.english.touched?'is-invalid':(fraport.english.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.required && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.min && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.max && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.pattern && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"isMathStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.math-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"math\" name=\"mathScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.math.invalid && fraport.math.touched?'is-invalid':(fraport.math.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.required && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.min && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.max && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.pattern && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"physicsStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.physics-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"physics\" name=\"physicsScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.physics.invalid && fraport.physics.touched?'is-invalid':(fraport.physics.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.required && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.min && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.max && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.pattern && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"chemicalStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.chemical-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"chemical\" name=\"chemicalScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.chemical.invalid && fraport.chemical.touched?'is-invalid':(fraport.chemical.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.required && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.min && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.max && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.pattern && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"biologyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.biology-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"biology\" name=\"biologyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.biology.invalid && fraport.biology.touched?'is-invalid':(fraport.biology.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.required && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.min && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.max && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.pattern && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"sociologicalStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sociology-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"sociological\" name=\"sociologicalScore\"\n                minlength=\"1\" maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\"\n                required\n                [ngClass]=\"fraport.sociological.invalid && fraport.sociological.touched?'is-invalid':(fraport.sociological.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.required && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.min && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.max && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.pattern && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"economyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.economy-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"economy\" name=\"economyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.economy.invalid && fraport.economy.touched?'is-invalid':(fraport.economy.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.required && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.min && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.max && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.pattern && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"geographyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.geography-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"geography\" name=\"geographyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required\n                [ngClass]=\"fraport.geography.invalid && fraport.geography.touched?'is-invalid':(fraport.geography.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.required && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.min && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.max && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.pattern && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div class=\"form-group mb-0 col-md-12\">\n              <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.upload-file-raport' | translate}} <span\n                  class=\"required\">*</span></label>\n              <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n                accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadReportCardFile($event)\" />\n              <p class=\"error text-danger small form-text mb-1\">\n                {{ 'CONTENT.file-raport-requirement' | translate}} <br>\n                {{fraport.url.errors && fraport.url.errors.required && (fraport.url.touched || fraport.url.dirty) ?\n                ('CONTENT.required' | translate) : ''}}\n                {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n                translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n                Mb.</p>\n\n              <label\n                *ngIf=\"fraport.url.errors && fraport.url.errors.required && (fraport.url.touched || fraport.url.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"row\">\n            <div ngif class=\"col-md-12 mb-0 mt-0 text-right\">\n              <button type=\"button\" (click)=\"closeRaportModalDetail()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button>\n              <button type=\"submit\" class=\"btn btn-success btn-sm m-1\"\n                [disabled]=\"reportCardDataForm.invalid || this.loading\">\n                <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n                    class=\"icofont icofont-location-arrow\"></i></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- <div *ngIf=\"isNotHaveMappingData\" class=\"col-md-12\">\n          <app-alert type=\"warning\">{{'CONTENT.not-have-mapping-admin' | translate }}</app-alert>\n        </div> -->\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #certificateDetailModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.edit' | translate }} {{ 'CONTENT.certificate' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeCertificateModalDetail();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"certificateDataForm\"\n      (ngSubmit)=\"createCertificateDocument()\">\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-level' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select name=\"certificate-level\" formControlName=\"certificate_level_id\"\n            [placeholder]=\"'CONTENT.certificate-level'|translate\" required\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"certificateLevel\"\n            [options]=\"listCertificateLevel\"\n            [ngClass]=\"!certificateLevel?'filter-dropdown is-invalid':(certificateLevel?'filter-dropdown is-valid':'filter-dropdown')\">\n            >\n          </ng-select>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-level' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-type' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select name=\"certificate-type\" formControlName=\"certificate_type_id\"\n            [placeholder]=\"'CONTENT.certificate-type'|translate\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"certificateType\" [options]=\"listCertificateType\"\n            [ngClass]=\"!certificateType?'filter-dropdown is-invalid':(certificateType?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-type' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-name' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"description\"\n            [placeholder]=\"'CONTENT.certificate-name'|translate\" required\n            [ngClass]=\"fcertif.name.invalid && fcertif.name.touched?'is-invalid':(fcertif.name.valid?'is-valid':'')\" />\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-name' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.certificate-description' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"description\" name=\"description\"\n            [placeholder]=\"'CONTENT.certificate-description'|translate\" required\n            [ngClass]=\"fcertif.description.invalid && fcertif.description.touched?'is-invalid':(fcertif.description.valid?'is-valid':'')\">\n          </textarea>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.description' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-year' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"publication_year\" name=\"publicationYear\"\n            [placeholder]=\"'CONTENT.publication-year'|translate\" maxlength=\"4\" required\n            [ngClass]=\"fcertif.publication_year.invalid && fcertif.publication_year.touched?'is-invalid':(fcertif.publication_year.valid?'is-valid':'')\" />\n          <label\n            *ngIf=\"fcertif.publication_year.errors && fcertif.publication_year.errors.maxlength && (fcertif.publication_year.touched || fcertif.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.year-validators' | translate }}</label>\n          <label\n            *ngIf=\"fcertif.publication_year.errors && fcertif.publication_year.errors.pattern && (fcertif.publication_year.touched || fcertif.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only-1' | translate }}</label>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.publication-year' | translate }} </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"certificate_score\" name=\"certificateScore\"\n            [placeholder]=\"'CONTENT.certificate-score'|translate\" required maxlength=\"3\"\n            [ngClass]=\"fcertif.certificate_score.invalid && fcertif.certificate_score.touched?'is-invalid':(fcertif.certificate_score.valid?'is-valid':'')\" />\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-score' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12 mb-0\">\n          <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.upload-file' | translate}} <span\n              class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadCertificateFile($event)\"\n            [ngClass]=\"fcertif.url.invalid && fcertif.url.touched?'is-invalid':(fcertif.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text mb-1\">\n            {{fcertif.url.errors && fcertif.url.errors.required && (fcertif.url.touched || fcertif.url.dirty) ?\n            ('CONTENT.required' | translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 mt-0 text-right col-md-12\">\n          <button type=\"button\" (click)=\"closeCertificateModalDetail()\" [disabled]=\"this.loading\"\n            class=\"btn btn-secondary btn-sm\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n          <button type=\"submit\" class=\"btn btn-success btn-sm m-1\"\n            [disabled]=\"certificateDataForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n                class=\"icofont icofont-location-arrow\"></i></span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #publicationDataModals [containerClick]=\"false\" dialogClass=\"modal-dialog modal-dialog-centered modal-xl\"\n  [hideFooter]=\"true\" [loading]=\"loadTablePublication\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.publication' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"publicationDataModals.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-sm table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.no' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-name' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-position' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-title' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-type' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-date' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.link' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.action' | translate}}</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableDataPublication?.length != 0\">\n          <tr\n            *ngFor=\"let data of tableDataPublication | slice: (pageDocument-1) * 10 : pageDocument * 10; let i = index;\">\n            <td class=\"text-center pl-1 pr-1\">{{ (pageDocument-1) * 10 + (i + 1) }}.</td>\n            <td>{{ data.writer_name }}</td>\n            <td class=\"text-center\">{{ data.publication_writer_position }}</td>\n            <td class=\"text-center\">{{ data.title }}</td>\n            <td class=\"text-center\">{{ data.publication_type }}</td>\n            <td class=\"text-center\">{{ data.publish_date | date: 'dd/MM/yyyy' }}</td>\n            <td class=\"text-center\">\n              <a [href]=\"data.publication_link\" target=\"_blank\" class=\"btn btn-sm btn-outline-primary\">\n                {{'CONTENT.link' | translate}}</a>\n            </td>\n            <td class=\"text-center\">\n              <button class=\"btn btn-outline-warning btn-sm btn-round has-ripple\"\n                (click)=\"loadPublicationDataDetails(data)\">\n                <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n              </button>\n              <!-- <button class=\"btn btn-outline-danger btn-sm btn-round has-ripple m-1\" (click)=\"deletePublicationData(data)\">\n                  <i class=\"icofont icofont-trash\"></i> <span class=\"d-sm-none\"> {{'ROOT.delete' | translate}}</span>\n                </button> -->\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableDataPublication?.length == 0 && !loadTablePublication\">\n          <tr>\n            <td colspan=\"8\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableDataPublication?.length == 0 && loadTablePublication\">\n          <tr>\n            <td colspan=\"8\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n      </table>\n      <ngb-pagination class=\"d-flex justify-content-center\" [(page)]=\"pageDocument\" [pageSize]=\"10\"\n        [collectionSize]=\"tableDataPublication.length\" [maxSize]=\"3\" [boundaryLinks]=\"true\">\n      </ngb-pagination>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #publikasiModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.add' | translate }} {{ 'CONTENT.publication' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closePublikasiModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"publikasiForm\"\n      (ngSubmit)=\"createPublicationData()\">\n      <div class=\"row\">\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-name' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" maxlength=\"150\"\n            placeholder=\"{{ 'CONTENT.writer-name' | translate }}\"\n            [ngClass]=\"fpubd.name.invalid && fpubd.name.touched?'is-invalid':(fpubd.name.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"publikasiForm.controls.name.errors && publikasiForm.controls.name.errors.required && (publikasiForm.controls.name.touched || publikasiForm.controls.name.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-position' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"writer-type\" [placeholder]=\"'CONTENT.writer-type' |translate\"\n            formControlName=\"position\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"selectedWriterPosition\" [options]=\"listWriterPosition\"\n            [ngClass]=\"!selectedWriterPosition?'filter-dropdown is-invalid':(selectedWriterPosition?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!selectedWriterPosition\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-title' | translate }} <span\n              class=\"required\">*</span></label> <br>\n          <textarea class=\"form-control\" formControlName=\"title\" maxlength=\"500\" required\n            placeholder=\"{{ 'CONTENT.publication-title' | translate }}\"\n            [ngClass]=\"fpubd.title.invalid && fpubd.title.touched?'is-invalid':(fpubd.title.valid?'is-valid':'')\"></textarea>\n          <label\n            *ngIf=\"publikasiForm.controls.title.errors && publikasiForm.controls.title.errors.required && (publikasiForm.controls.title.touched || publikasiForm.controls.title.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-type' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"writer-type\" [placeholder]=\"'CONTENT.writer-type' |translate\"\n            formControlName=\"type\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"selectedPublicationType\" [options]=\"listPublicationType\"\n            [ngClass]=\"!selectedPublicationType?'filter-dropdown is-invalid':(selectedPublicationType?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!selectedPublicationType\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-date' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"date\" class=\"form-control\" formControlName=\"publication_date\" name=\"publication_date\"\n            [ngClass]=\"fpubd.publication_date.invalid && fpubd.publication_date.touched?'is-invalid':(fpubd.publication_date.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"publikasiForm.controls.publication_date.errors && publikasiForm.controls.publication_date.errors.required && (publikasiForm.controls.publication_date.touched || publikasiForm.controls.publication_date.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.link' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"link\" name=\"link\" maxlength=\"100\"\n            placeholder=\"{{ 'CONTENT.link' | translate }}\"\n            [ngClass]=\"fpubd.link.invalid && fpubd.link.touched?'is-invalid':(fpubd.link.valid?'is-valid':'')\">\n          </textarea>\n          <label *ngIf=\"fpubd.link.errors && fpubd.link.errors.required && (fpubd.link.touched || fpubd.link.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"mb-0 text-right col-md-12\">\n          <button type=\"button\" (click)=\"closePublikasiModals()\" [disabled]=\"this.loading\"\n            class=\"btn btn-secondary btn-sm\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n          <button type=\"submit\" class=\"btn btn-success btn-sm m-1\" [disabled]=\"publikasiForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n                class=\"icofont icofont-location-arrow\"></i></span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #eprtAndTpaModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeEprtTpaModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"eprtAndTpaForm\"\n      (ngSubmit)=\"createEprtTpaDocument()\">\n      <div class=\"row\">\n        <app-alert *ngIf=\"isEPRTDocument || isTPADocument\" type=\"primary\" class=\"text-center col-md-12\">\n          {{isTPADocument ? ('CONTENT.tpa-information' | translate) : ('CONTENT.eprt-information' | translate)}} <br>\n          <a *ngIf=\"isEPRTDocument\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm m-1\"><i class=\"icofont icofont-prescription\"></i> {{'CONTENT.eprt-test' |\n            translate}}</a>\n          <a *ngIf=\"isTPADocument\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm m-1\"><i class=\"icofont icofont-prescription\"></i> {{'CONTENT.tpa-test' |\n            translate}} </a>\n        </app-alert>\n      </div>\n      <div class=\"row align-items-center\">\n        <div class=\"text-left col-12 col-md-6 mb-1\">\n          <a *ngIf=\"isResidensi\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isSuratIjinAtasan\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isPromotor\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isCoPromotor\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\"\n            class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n        </div>\n        <div class=\"text-right col-12 col-md-6\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div *ngIf=\"isPromotor || isCoPromotor|| isResidensi || isSuratIjinAtasan\" class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-req-name' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" readonly>\n        </div>\n        <div *ngIf=\"isCoPromotor\" class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.name-co-promotor' | translate }}\n            <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"nameCoPromotor\" name=\"nameCoPromotor\"\n            [placeholder]=\"'CONTENT.name-co-promotor'|translate\"\n            [ngClass]=\"fed.nameCoPromotor.invalid && fed.nameCoPromotor.touched?'is-invalid':(fed.nameCoPromotor.valid?'is-valid':'')\">\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n        </div>\n        <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isIPKDocument\"\n          class=\"form-group mb-2 col-md-12\">\n          <label *ngIf=\"isEPRTDocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.eprt-publication-year' | translate\n            }} <span class=\"required\">*</span></label>\n          <label *ngIf=\"isTPADocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa-publication-year' | translate }}\n            <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"publication_year\" name=\"publicationYear\"\n            [placeholder]=\"'CONTENT.pub-year'|translate\" maxlength=\"4\" required\n            [ngClass]=\"fed.publication_year.invalid && fed.publication_year.touched?'is-invalid':(fed.publication_year.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"eprtAndTpaForm.controls.publication_year.errors && eprtAndTpaForm.controls.publication_year.errors.maxlength && (eprtAndTpaForm.controls.publication_year.touched || eprtAndTpaForm.controls.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.year-validators' | translate }}</label>\n          <label\n            *ngIf=\"eprtAndTpaForm.controls.publication_year.errors && eprtAndTpaForm.controls.publication_year.errors.pattern && (eprtAndTpaForm.controls.publication_year.touched || eprtAndTpaForm.controls.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only-1' | translate }}</label>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n\n        </div>\n        <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isIPKDocument\"\n          class=\"form-group mb-2 col-md-12\">\n          <label *ngIf=\"isEPRTDocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.eprt-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <label *ngIf=\"isTPADocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"eprt_tpa_score\" name=\"certificateScore\" maxlength=\"3\"\n            [placeholder]=\"'CONTENT.score'|translate\" required\n            [ngClass]=\"fed.eprt_tpa_score.invalid && fed.eprt_tpa_score.touched?'is-invalid':(fed.eprt_tpa_score.valid?'is-valid':'')\">\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n        </div>\n        <div\n          [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isEPRTDocument || isTPADocument\"\n          class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ipk-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"gpa\" placeholder=\"3.55\"\n            [ngClass]=\"fed.gpa.invalid && fed.gpa.touched?'is-invalid':(fed.gpa.valid?'is-valid':'')\" required max=\"4\"\n            maxlength=\"4\">\n          <label *ngIf=\"fed.gpa.errors && fed.gpa.errors.required && (fed.gpa.touched || fed.gpa.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label *ngIf=\"fed.gpa.errors && fed.gpa.errors.max && (fed.gpa.touched || fed.gpa.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n          <label *ngIf=\"fed.gpa.errors && fed.gpa.errors.pattern && (fed.gpa.touched || fed.gpa.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 col-md-12\">\n          <label class=\"form-label mb-0 f-w-600\">{{isEprtUpdated == true ? ('CONTENT.edit-file' | translate) :\n            ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isEprtUpdated\" class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadStudyDocumentEprt($event)\"\n            [ngClass]=\"fed.url.invalid && fed.url.touched?'is-invalid':(fed.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text mb-1\">\n            {{fed.url.errors && fed.url.errors.required && (fed.url.touched || fed.url.dirty) ? ('CONTENT.required' |\n            translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.\n          </p>\n        </div>\n        <div *ngIf=\"formTypeStudy === 'edit'\" class=\"form-group col-md-12 mt-0\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataStudyUrl.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataStudyUrl\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_name !== null ? (e.document_name | shortener:[55,\n                        '..']) : 'Data Dokumen'}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataStudyUrl.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <!-- <button type=\"button\" (click)=\"closeEprtTpaModals();\" [disabled]=\"this.loading\"\n              class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button> -->\n          <button *ngIf=\"haveDocumentStudy\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n            [disabled]=\"this.loading\" (click)=\"submitRejectStudyDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{\n              'CONTENT.tolak' | translate }} </span>\n          </button>\n          <button *ngIf=\"haveDocumentStudy\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n            [disabled]=\"this.loading\" (click)=\"submitStudyDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n              'CONTENT.setujui' | translate }}</span>\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"eprtAndTpaForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.edit' | translate }} <i\n                class=\"icofont icofont-location-arrow\"></i></span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #ijazahModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeIjazahModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"ijazahForm\"\n      (ngSubmit)=\"createIjazahDocument()\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-name' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\"\n            [placeholder]=\"'CONTENT.document-name'| translate\" readonly>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12 mb-0\">\n          <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.edit-file' | translate }} <span *ngIf=\"!isUpdatedTranscript\"\n              class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"ijazahDoc\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadIjazahDocument($event)\"\n            [ngClass]=\"fid.url.invalid && fid.url.touched?'is-invalid':(fid.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text mb-2\">\n            {{fid.url.errors && fid.url.errors.required && (fid.url.touched || fid.url.dirty) ? ('CONTENT.required' |\n            translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.\n          </p>\n        </div>\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataIjazah.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataIjazah\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_type | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataIjazah.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <!-- <button type=\"button\" (click)=\"closeIjazahModals()\" [disabled]=\"this.loading\"\n          class=\"btn btn-secondary btn-sm\">\n          <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n        </button> -->\n          <button *ngIf=\"haveDocumentIjazah\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n            [disabled]=\"this.loading\" (click)=\"submitIjazahRejectedDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{\n              'CONTENT.tolak' | translate }} </span>\n          </button>\n          <button *ngIf=\"haveDocumentIjazah\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n            [disabled]=\"this.loading\" (click)=\"submitIjazahDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n              'CONTENT.setujui' | translate }}</span>\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm m-1\" [disabled]=\"ijazahForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.edit' | translate }} <i\n                class=\"icofont icofont-location-arrow\"></i></span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n\n<app-ui-modal #transcriptRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeTranscriptModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataForm\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n          </div>\n        </div>\n      </div>\n      <div [hidden]=\"isTranscript\" class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ipk-score' | translate }} <span\n                class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"gpa\" placeholder=\"3.55\"\n              [ngClass]=\"ftd.gpa.invalid && ftd.gpa.touched?'is-invalid':(ftd.gpa.valid?'is-valid':'')\" required max=\"4\"\n              maxlength=\"4\">\n            <label *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.required && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.max && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n            <label *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.pattern && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-0\">\n            <div>\n              <label class=\"form-label mb-0 f-w-600\">{{isUpdatedTranscript == true ? ('CONTENT.edit-file' | translate) :\n                ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isUpdatedTranscript\"\n                  class=\"required\">*</span></label>\n              <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n                accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadTranscriptFiles($event)\"\n                [ngClass]=\"ftd.url.invalid && ftd.url.touched?'is-invalid':(ftd.url.valid?'is-valid':'')\" />\n              <p class=\"error text-danger small form-text\">\n                {{ftd.url.errors && ftd.url.errors.required && (ftd.url.touched || ftd.url.dirty) ? ('CONTENT.required'\n                | translate) : ''}}\n                {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n                translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n                Mb.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-0\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataTranscriptUrlDoc.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataTranscriptUrlDoc\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataTranscriptUrlDoc.length == 0\" class=\"row\">\n              <div class=\"col-12 ml-2\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 text-right\">\n        <!-- <button type=\"button\" (click)=\"closeTranscriptModals()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button> -->\n        <button *ngIf=\"haveTranscriptDoc\" type=\"button\" class=\"btn btn-outline-danger btn-sm\" [disabled]=\"this.loading\"\n          (click)=\"submitRejectTranscriptDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveTranscriptDoc\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitApprovalTranscriptDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm m-1\" (click)=\"createReportCardDocument()\"\n          [disabled]=\"transcriptDataForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n              class=\"icofont icofont-location-arrow\"></i></span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #documentRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"documentRequirementModalClose();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"participantDocumentForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-req-name' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" readonly formControlName=\"name\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"isShowIdentityNumber\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.identity-number' | translate }} <span\n                class=\"required\">*</span></label>\n            <input type=\"text\" style=\"text-transform: uppercase;\" class=\"form-control\" name=\"number\" minlength=\"7\"\n              maxlength=\"16\" formControlName=\"number\" placeholder=\"{{ 'CONTENT.identity-number' | translate }}\"\n              [ngClass]=\"fpd.number.invalid && fpd.number.touched?'is-invalid':(fpd.number.valid?'is-valid':'')\">\n            <label *ngIf=\"fpd.number.errors && fpd.number.errors.required && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label *ngIf=\"fpd.number.errors && fpd.number.errors.minlength && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.identity-number-validation' | translate }}</label>\n            <label *ngIf=\"fpd.number.errors && fpd.number.errors.maxlength && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.identity-number-validation' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-2 f-w-600\">{{formTypePersonal == 'edit' ? ('CONTENT.edit-file' | translate) :\n              ('CONTENT.upload-file' | translate) }} <span *ngIf=\"formTypePersonal == 'input'\"\n                class=\"required\">*</span></label>\n            <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n              accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadRequirementDocument($event)\"\n              [ngClass]=\"fpd.url.invalid && fpd.url.touched?'is-invalid':(fpd.url.valid?'is-valid':'')\" />\n            <p class=\"error text-danger small form-text\">\n              {{fpd.url.errors && fpd.url.errors.required && (fpd.url.touched || fpd.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRequirementUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRequirementUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.document_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.document_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name ? e.document_name : e.document_type |\n                          shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRequirementUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 text-right\">\n        <!-- <button type=\"button\" (click)=\"documentRequirementModalClose()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button> -->\n        <button *ngIf=\"haveDocumentPersonal\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n          [disabled]=\"this.loading\" (click)=\"submitRejectParticipantDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveDocumentPersonal\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitApprovalParticipantDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm\"\n          [disabled]=\"participantDocumentForm.invalid || this.loading\" (click)=\"createPersonalDocumentParticipant()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.edit' | translate }} <i\n              class=\"icofont icofont-location-arrow\"></i></span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #paymentAbilityModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"paymentAbilityModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"abilityDataForm\" class=\"md-float-material form-material\" action=\"javascript:\"\n      (ngSubmit)=\"createSupportingDocument();\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"document-requirements\" required formControlName=\"name\"\n              readonly>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-2 f-w-600\">{{formTypeAbility == 'edit' ? ('CONTENT.edit-file' | translate) :\n              ('CONTENT.upload-file' | translate) }} <span *ngIf=\"formTypePersonal == 'input'\"\n                class=\"required\">*</span></label> <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\"\n              formControlName=\"url\" accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadAbilityPayment($event)\" />\n            <p class=\"error text-danger small form-text\">\n              {{fad.url.errors && fad.url.errors.required && (fad.url.touched || fad.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataAbilityUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataAbilityUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataAbilityUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <button *ngIf=\"haveAbilityDocument\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n          [disabled]=\"this.loading\" (click)=\"submitRejectAbilityDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveAbilityDocument\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitApprovalAbilityDocument()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"abilityDataForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}</span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #recommendationLetterRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"recommendationLetterRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"supportingDataForm\"\n      (ngSubmit)=\"createSupportingDocument();\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-name' | translate }} <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"pic_name\" name=\"picName\" required maxlength=\"100\"\n              [placeholder]=\"'CONTENT.pic-name' | translate\"\n              [ngClass]=\"fsd.pic_name.invalid && fsd.pic_name.touched?'is-invalid':(fsd.pic_name.valid?'is-valid':'')\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">\n              {{ 'ROOT.required' | translate }}</label>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-phone-number' | translate }} <span\n                class=\"required\">*</span> </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"pic_phone_number\" name=\"picPhoneNumber\" required\n              minlength=\"11\" maxlength=\"13\" [placeholder]=\"'CONTENT.placeholder-number' | translate\"\n              [ngClass]=\"fsd.pic_phone_number.invalid && fsd.pic_phone_number.touched?'is-invalid':(fsd.pic_phone_number.valid?'is-valid':'')\">\n            <label\n              *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.required && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label\n              *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.pattern && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            <label\n              *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.minlength && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-email' | translate }} <span\n                class=\"required\">*</span> </label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"pic_email_address\" name=\"picEmail\" required\n              pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\" placeholder=\"xxx@gmail.com\"\n              oninput=\"setCustomValidity('')\"\n              [ngClass]=\"fsd.pic_email_address.invalid && fsd.pic_email_address.touched?'is-invalid':(fsd.pic_email_address.valid?'is-valid':'')\"\n              maxlength=\"150\">\n            <label\n              *ngIf=\"fsd.pic_email_address.invalid && (fsd.pic_email_address.dirty || fsd.pic_email_address.touched )\"\n              id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n              'CONTENT.email-match' | translate}}</label>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-address' | translate }} <span\n                class=\"required\">*</span> </label>\n            <textarea type=\"text\" class=\"form-control\" formControlName=\"pic_address\" required maxlength=\"150\"\n              [placeholder]=\"'CONTENT.pic-address' | translate\"\n              [ngClass]=\"fsd.pic_address.invalid && fsd.pic_address.touched?'is-invalid':(fsd.pic_address.valid?'is-valid':'')\"></textarea>\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n              'ROOT.required' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.edit-file' | translate }} </label>\n            <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n              [ngClass]=\"fsd.url.invalid && fsd.url.touched?'is-invalid':(fsd.url.valid?'is-valid':'')\"\n              accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadSupportingFile($event)\" />\n            <p class=\"error text-danger small form-text\">\n              {{fsd.url.errors && fsd.url.errors.required && (fsd.url.touched || fsd.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRecommendationUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRecommendationUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRecommendationUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <!-- <button type=\"button\" (click)=\"recommendationLetterRequirementModal.hide();\" [disabled]=\"this.loading\"\n        class=\"btn btn-secondary btn-sm\">\n        <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n      </button> -->\n        <button *ngIf=\"haveSupportingDocument\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n          [disabled]=\"this.loading\" (click)=\"submitSupportingRejected()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{ 'CONTENT.tolak'\n            | translate }} </span>\n        </button>\n        <button *ngIf=\"haveSupportingDocument\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n          [disabled]=\"this.loading\" (click)=\"submitSupportingApproved()\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n            'CONTENT.setujui' | translate }}</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"supportingDataForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n              class=\"icofont icofont-location-arrow\"></i></span>\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #transcriptRequirementModalView [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"transcriptRequirementModalView.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataForm\">\n      <div class=\"col-md-12S\">\n        <form [formGroup]=\"transcriptFormlView\">\n          <!-- <div class=\"form-group mb-0 mt-0 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-danger btn-sm\" (click)=\"deleteTranscriptDocument()\">\n                <i class=\"ti-trash\"></i> {{ 'ROOT.delete' | translate }} {{'CONTENT.transcript-data' | translate}}\n              </button>\n            </div>\n          </div> -->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">SKS yang telah diampu</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"totalCredit\" readonly>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">Total Mata Kuliah</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"totalCourse\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n                </label>\n                <div *ngIf=\"dataTranscriptUrl.length !== 0\" class=\"row\">\n                  <div class=\"col-12 col-xs-12 col-md-12\">\n                    <div *ngIf=\"dataTranscriptUrl == null\">\n                      <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                    </div>\n                    <div *ngIf=\"dataTranscriptUrl != null\">\n                      <div class=\"card text-left mb-3\">\n                        <div class=\"card-body p-2\">\n                          <a [href]=\"dataTranscriptUrl\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                              class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                            <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai Pendidikan Terakhir\n                            </p>\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div *ngIf=\"dataTranscriptUrl.length == 0\" class=\"row\">\n                  <div class=\"col-12 ml-2\"> Data Tidak Ditemukan!\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive pb-6\">\n            <table class=\"table table-striped table-hover table-sm\">\n              <thead class=\"thead-light bg-primarys\">\n                <tr>\n                  <th scope=\"col\" class=\"center-table\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.course-code' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.course-name' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.credit-hour' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.grade' | translate}}</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"tableTranscript?.length != 0\">\n                <tr *ngFor=\"let data of tableTranscript; let i = index;\">\n                  <th class=\"center-table\" scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                  <td class=\"center-table\">{{data.course_code}}\n                  </td>\n                  <td class=\"center-table\">{{ data.course_name }}</td>\n                  <td class=\"center-table\">{{ data.credit_hour }}</td>\n                  <td class=\"center-table\">{{ data.grade }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </form>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #utbkModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeUtbkModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"utbkForm\"\n      (ngSubmit)=\"createUtbkDocument()\">\n      <div class=\"row\">\n        <p class=\"col-md-12 mb-0\"><span class=\"required\"><b>* {{'ROOT.required' | translate }}</b></span></p>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.kpu-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"KPUScore\" name=\"KPUScore\" min=\"0\" max=\"1000\"\n            minlength=\"1\" maxlength=\"6\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\" required>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.required && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.max && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.pattern && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pk-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"PKScore\" name=\"PKScore\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.required && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.max && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.pattern && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pdpu-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"PDPUScore\" name=\"PDPUScore\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.required && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.max && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.pattern && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.kmbdm-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"KMBDMScore\" name=\"KMBDMScore\" required min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\">\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.required && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.max && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.pattern && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.category-utbk' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"exam-location\" [placeholder]=\"'CONTENT.category-utbk'|translate\"\n            [ngClass]=\"'custom'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectedCategoryUtbk\"\n            [options]=\"listCategoryUtbk\" [ngModelOptions]=\"{standalone: true}\" (selected)=\"changeCategoryUtbk($event)\">\n          </ng-select>\n          <label *ngIf=\"!selectedCategoryUtbk\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n      </div>\n      <div *ngIf=\"selectedCategoryUtbk\" class=\"row\">\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.math-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"math\" name=\"math\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.required && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.max && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.pattern && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.physics-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"physics\"\n            [placeholder]=\"'CONTENT.placeholder-utbk'|translate\" name=\"physics\" min=\"0\" max=\"1000\" minlength=\"1\"\n            maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.required && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.max && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.pattern && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.chemical' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"chemical\" name=\"chemical\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.required && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.max && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.pattern && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.biology' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"biological\" name=\"biological\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.required && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.max && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.pattern && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.geography' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"geography\" name=\"geography\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.required && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.max && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.pattern && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.historical' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"historical\" name=\"historical\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.required && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.max && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.pattern && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sociological' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"sociological\" name=\"sociological\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.required && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.max && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.pattern && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.economy' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"economy\" name=\"economy\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.required && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.max && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.pattern && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.upload-file' | translate}} </label>\n          <input id=\"utbkFile\" class=\"form-control\" type=\"file\" name=\"utbkFile\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadUtbkDocument($event)\" />\n          <div *ngIf=\"errSize\" class=\"text-danger mt-4 ml-1\">Max 2 MB!</div>\n          <div *ngIf=\"errType\" class=\"text-danger mt-4 ml-1\">Error file!</div>\n        </div>\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.evidence' | translate }}\n          </label>\n          <div *ngIf=\"dataUtbkUrl.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataUtbkUrl\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> Nilai UTBK\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataUtbkUrl.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 mt-2 text-right col-md-12\">\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\"\n            [disabled]=\"utbkForm.invalid || !selectedCategoryUtbk || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' |\n              translate }}</span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #recommendationS2Modal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\" [loading]=\"loadingRecommendation\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.recommendation-document-S2' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"recommendationS2Modal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"recommendationS2Form\">\n      <app-alert type=\"warning\">\n        <div class=\"col-sm-12 text-center\">\n          <h6>{{ 'CONTENT.send-email-recommendation-info' | translate }}</h6>\n        </div>\n      </app-alert>\n      <div class=\"row\">\n        <h5 class=\"col-md-12\">Rekomendasi Pertama\n          <hr>\n        </h5>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.name' | translate}} <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name_rec1\" name=\"name_rec1\"\n            [placeholder]=\"'CONTENT.recommendation_name_1'|translate\" required maxlength=\"150\"\n            [ngClass]=\"frod.name_rec1.invalid && frod.name_rec1.touched?'is-invalid':(frod.name_rec1.valid?'is-valid':'')\"\n            [readonly]=\"viewRecommendationS2\">\n          <label\n            *ngIf=\"frod.name_rec1.errors && frod.name_rec1.errors.required && (frod.name_rec1.touched || frod.name_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.handphone' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"handphone_rec1\" name=\"handphone_rec1\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\" minlength=\"11\" maxlength=\"13\" required\n            [readonly]=\"viewRecommendationS2\"\n            [ngClass]=\"frod.handphone_rec1.invalid && frod.handphone_rec1.touched?'is-invalid':(frod.handphone_rec1.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.required && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.pattern && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.minlength && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.email' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email_rec1\"\n            pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\"\n            oninput=\"setCustomValidity('')\" name=\"email_rec1\" [placeholder]=\"'CONTENT.recommendation_email_1'|translate\"\n            required [readonly]=\"viewRecommendationS2\" maxlength=\"150\"\n            [ngClass]=\"frod.email_rec1.invalid && (frod.email_rec1.dirty || frod.email_rec1.touched)?'is-invalid':(frod.email_rec1.valid?'is-valid':'')\">\n          <label *ngIf=\"frod.email_rec1.invalid && (frod.email_rec1.dirty || frod.email_rec1.touched )\"\n            id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.email-match' | translate}}</label>\n        </div>\n        <h5 class=\"mt-3 col-md-12\">Rekomendasi Kedua\n          <hr>\n        </h5>\n        <hr>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.name' | translate}} <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name_rec2\" name=\"name_rec2\"\n            [placeholder]=\"'CONTENT.recommendation_name_1'|translate\" required maxlength=\"150\"\n            [readonly]=\"viewRecommendationS2\"\n            [ngClass]=\"frod.name_rec2.invalid && frod.name_rec2.touched?'is-invalid':(frod.name_rec2.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.name_rec2.errors && frod.name_rec2.errors.required && (frod.name_rec2.touched || frod.name_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.handphone' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"handphone_rec2\" name=\"handphone_rec2\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\" minlength=\"11\" maxlength=\"13\" required\n            [readonly]=\"viewRecommendationS2\"\n            [ngClass]=\"frod.handphone_rec2.invalid && frod.handphone_rec2.touched?'is-invalid':(frod.handphone_rec2.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.required && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.pattern && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.minlength && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.email' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [readonly]=\"viewRecommendationS2\" formControlName=\"email_rec2\"\n            pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\"\n            oninput=\"setCustomValidity('')\" name=\"email_rec2\" [placeholder]=\"'CONTENT.recommendation_email_1'|translate\"\n            required maxlength=\"150\"\n            [ngClass]=\"frod.email_rec2.invalid && (frod.email_rec2.dirty || frod.email_rec2.touched)?'is-invalid':(frod.email_rec2.valid?'is-valid':'')\">\n          <label *ngIf=\"frod.email_rec2.invalid && (frod.email_rec2.dirty || frod.email_rec2.touched )\"\n            id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.email-match' | translate}}</label>\n        </div>\n        <div class=\"col-md-12 text-right\">\n          <button type=\"button\" (click)=\"recommendationS2Modal.hide();\" [disabled]=\"this.loading\"\n            class=\"btn btn-secondary btn-sm\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n          <button [hidden]=\"viewRecommendationS2\" type=\"submit\" class=\"btn btn-primary btn-sm ml-1\"\n            [disabled]=\"recommendationS2Form.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n                class=\"icofont icofont-location-arrow\"></i></span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #proposalModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"proposalModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"proposalForm\"\n      (ngSubmit)=\"createProposalDocument()\">\n      <div class=\"row align-items-center\">\n        <div class=\"text-right col-12 col-md-12\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"approvedStatus\">{{ 'CONTENT.approve' |\n              translate}}</span>\n            <span class=\"badge badge-light-secondary\" *ngIf=\"!approvedStatus\">{{ 'CONTENT.not-specified' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.proposal-title' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"title\" [placeholder]=\"'CONTENT.proposal-title'|translate\"\n            required maxlength=\"1000\"\n            [ngClass]=\"fprd.title.invalid && fprd.title.touched?'is-invalid':(fprd.title.valid?'is-valid':'')\"></textarea>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'ROOT.required' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 col-md-12\">\n          <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.edit-file' | translate }} </label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadProposalDocument($event)\"\n            [ngClass]=\"fprd.url.invalid && fprd.url.touched?'is-invalid':(fprd.url.valid?'is-valid':'')\" />\n          <p class=\"error text-danger small form-text\">\n            {{fprd.url.errors && fprd.url.errors.required && (fprd.url.touched || fprd.url.dirty) ? ('CONTENT.required'\n            | translate) : ''}}\n            {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n            translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 5 Mb.\n          </p>\n        </div>\n        <div class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataProposal.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataProposal\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataProposal.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <!-- <button type=\"button\" (click)=\"proposalModal.hide();\" [disabled]=\"this.loading\"\n          class=\"btn btn-secondary btn-sm\">\n          <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n        </button> -->\n          <button *ngIf=\"haveDocumentData\" type=\"button\" class=\"btn btn-outline-danger btn-sm\" [disabled]=\"this.loading\"\n            (click)=\"submitRejectProposalDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-close-circled\"></i> {{\n              'CONTENT.tolak' | translate }} </span>\n          </button>\n          <button *ngIf=\"haveDocumentData\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\"\n            [disabled]=\"this.loading\" (click)=\"submitApprovalProposalDocument()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-check-circled\"></i> {{\n              'CONTENT.setujui' | translate }}</span>\n          </button>\n          <button type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"proposalForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"icofont icofont-ui-edit\"></i> {{ 'ROOT.edit' |\n              translate }}</span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>";

    /***/
  }),
  /***/"./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail-routing.module.ts": (
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail-routing.module.ts ***!
    \*****************************************************************************************************************/
  /*! exports provided: ParticipantDataDetailRoutingModule */
  /***/
  function _src_app_theme_admMpParticipantData_participantDataDetail_participantDataDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ParticipantDataDetailRoutingModule", function () {
      return ParticipantDataDetailRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _participant_data_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./participant-data-detail.component */"./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var routes = [{
      path: '',
      component: _participant_data_detail_component__WEBPACK_IMPORTED_MODULE_2__["ParticipantDataDetailComponent"]
    }];
    var ParticipantDataDetailRoutingModule = /*#__PURE__*/_createClass(function ParticipantDataDetailRoutingModule() {
      _classCallCheck(this, ParticipantDataDetailRoutingModule);
    });
    ParticipantDataDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ParticipantDataDetailRoutingModule);

    /***/
  }),
  /***/"./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.component.scss": (
  /*!**************************************************************************************************************!*\
    !*** ./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.component.scss ***!
    \**************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_theme_admMpParticipantData_participantDataDetail_participantDataDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.center-table {\n  text-align: center; }\n\ninput[type=text] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\ninput[type=number] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\n.index-up {\n  z-index: 3; }\n\n.required {\n  color: red; }\n\n.table-boder-radius {\n  border-collapse: collapse;\n  border-radius: 0.5rem;\n  overflow: hidden; }\n\n.table-boder-radius tr:hover {\n    color: #4680ff; }\n\n.pointer-custom {\n  cursor: pointer; }\n\n.font-styling {\n  font-size: 11px; }\n\n.font-family-custom {\n  font-family: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvdGhlbWUvYWRtLW1wLXBhcnRpY2lwYW50LWRhdGEvcGFydGljaXBhbnQtZGF0YS1kZXRhaWwvcGFydGljaXBhbnQtZGF0YS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLG1CQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTs7QUFIbEI7SUFLSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2FkbS1tcC1wYXJ0aWNpcGFudC1kYXRhL3BhcnRpY2lwYW50LWRhdGEtZGV0YWlsL3BhcnRpY2lwYW50LWRhdGEtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGR7XG4gIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG50aHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5jZW50ZXItdGFibGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG5cbiBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmluZGV4LXVwIHtcbiAgei1pbmRleDogMztcbn1cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG4udGFibGUtYm9kZXItcmFkaXVzIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cjpob3ZlciB7XG4gICAgY29sb3I6ICM0NjgwZmY7XG4gIH1cbn1cbi5wb2ludGVyLWN1c3RvbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb250LXN0eWxpbmcge1xuICBmb250LXNpemU6IDExcHg7XG59XG4uZm9udC1mYW1pbHktY3VzdG9tIHtcbiAgZm9udC1mYW1pbHk6IGF1dG87XG59Il19 */";

    /***/
  }),
  /***/"./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.component.ts": (
  /*!************************************************************************************************************!*\
    !*** ./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.component.ts ***!
    \************************************************************************************************************/
  /*! exports provided: ParticipantDataDetailComponent */
  /***/
  function _src_app_theme_admMpParticipantData_participantDataDetail_participantDataDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ParticipantDataDetailComponent", function () {
      return ParticipantDataDetailComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! angular-datatables */"./node_modules/angular-datatables/index.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/_services/admin-management.service */"./src/app/_services/admin-management.service.ts");
    /* harmony import */
    var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/_services/participant.service */"./src/app/_services/participant.service.ts");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
    var ParticipantDataDetailComponent = /*#__PURE__*/function () {
      function ParticipantDataDetailComponent(translate, broadcasterService, chartService, userService, route, router, fb) {
        var _this2 = this;
        _classCallCheck(this, ParticipantDataDetailComponent);
        this.translate = translate;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.dtOptions = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.formDataCertificateUpdated = new FormData();
        this.formDataUpdate = new FormData();
        this.formData = new FormData();
        this.type = 'default';
        this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTrigger3 = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
        this.registrationDocumentForm = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          url: [''],
          description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          approval_final_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
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
        this.edit = 'input';
        this.loading = false;
        this.loadingCard = false;
        this.supportingForm = false;
        this.transcripForm = false;
        this.participantForm = false;
        this.noDataDocument = false;
        this.errSize = false;
        this.errType = false;
        this.isUpdatedReport = false;
        this.isCollapsed = false;
        this.isIndonesianNationality = false;
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
        this.isIndonesiaCountry = false;
        this.hiddenAddressDetail = false;
        this.loadingParticipant = false;
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
        this.participantRegistration = [];
        this.tableDataPublication = [];
        this.dataIjazah = [];
        this.tableTranscript = [];
        this.dataTranscriptUrlDoc = [];
        this.dataAbilityUrl = [];
        this.dataUtbkUrl = [];
        this.searching = '';
        this.listCategoryUtbk = [{
          value: '1',
          label: 'SAINTEK'
        }, {
          value: '2',
          label: 'SOSHUM'
        }];
      }
      return _createClass(ParticipantDataDetailComponent, [{
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
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dtOptions[0] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            retrieve: true,
            // paging:true,
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
          this.dtOptions[1] = {
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
          this.dtOptions[2] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            retrieve: true,
            // destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            order: [[0, 'asc']],
            initComplete: function initComplete() {}
          };
          this.dtOptions[3] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            retrieve: true,
            // paging:true,
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
          this.loadRegistrationProgramStudyData();
          this.loadRegistrationDocumentData();
          this.loadDetailParticipantData();
          this.loadSemesterDataFilter();
          this.loadRangeScoreDataFilter();
          this.loadCertificateLevelDataFilter();
          this.loadCertificateTypeDataFilter();
        }
      }, {
        key: "gotoDocument",
        value: function gotoDocument() {
          this.router.navigate(['adm-mp-document-data/document-data-detail/' + this.registration_number + '/' + this.participantId]);
        }
      }, {
        key: "mode",
        value: function mode(param) {
          this.edit = param;
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
        key: "onDeselected",
        value: function onDeselected(val) {
          switch (val) {
            case 'gender':
              this.gender = '0';
              break;
            case 'selectionPath':
              this.selectionPath = '0';
              break;
            case 'telutizenStatus':
              this.telutizenStatus = '0';
              break;
            case 'nationality':
              this.nationality = '0';
              break;
          }
        }
      }, {
        key: "getPublicationTypeLists",
        value: function getPublicationTypeLists() {
          var _this3 = this;
          this.userService.getPublicationTypeList().subscribe(function (response) {
            _this3.listPublicationType = response && response.map(function (value) {
              return {
                value: value.id.toString(),
                label: value.type
              };
            });
          }, function (err) {
            _this3.loadError();
          });
        }
      }, {
        key: "getPublicationPositionLists",
        value: function getPublicationPositionLists() {
          var _this4 = this;
          this.userService.getPublicationPositionList().subscribe(function (response) {
            _this4.listWriterPosition = response && response.map(function (value) {
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
        key: "loadCertificateLevelDataFilter",
        value: function loadCertificateLevelDataFilter() {
          var _this5 = this;
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
              _this5.listCertificateLevel = dataCertificateLevel;
            }
            _this5.loadFilter = false;
          }, function (err) {
            _this5.loadError();
            _this5.loadFilter = false;
          });
          this.loading = false;
        }
      }, {
        key: "loadCertificateTypeDataFilter",
        value: function loadCertificateTypeDataFilter() {
          var _this6 = this;
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
              _this6.listCertificateType = dataCertificateType;
            }
            _this6.loadFilter = false;
          }, function (err) {
            _this6.loadError();
            _this6.loadFilter = false;
          });
          this.loading = false;
        }
      }, {
        key: "loadDetailParticipantData",
        value: function loadDetailParticipantData() {
          var _this7 = this;
          this.loadingParticipant = true;
          this.chartService.getParticipantListDetail("".concat(this.registration_number)).subscribe(function (response) {
            _this7.participantRegistration = response.data[0];
            _this7.participantId = response.data[0].participant_id;
            _this7.chartService.getParticipantDetailData("".concat(_this7.participantId)).subscribe(function (res) {
              _this7.loadingParticipant = false;
              _this7.participantBiodatas = res;
              if (res.nationality == 98) {
                _this7.isIndonesianNationality = true;
              } else {
                _this7.isIndonesianNationality = false;
              }
              if (res.address_country == 1) {
                _this7.hiddenAddressDetail = false;
                _this7.isIndonesiaCountry = true;
              } else {
                _this7.hiddenAddressDetail = true;
                _this7.isIndonesiaCountry = false;
              }
            });
          });
        }
      }, {
        key: "loadRegistrationProgramStudyData",
        value: function loadRegistrationProgramStudyData() {
          var _this8 = this;
          this.loadingParticipant = true;
          this.chartService.getRegistrationProgramStudy("".concat(this.registration_number)).subscribe(function (response) {
            _this8.tableData = response.data;
            _this8.loadingParticipant = false;
          }, function (err) {
            // this.loadError();
            _this8.loadingParticipant = false;
          });
        }
      }, {
        key: "loadRegistrationDocumentData",
        value: function loadRegistrationDocumentData() {
          var _this9 = this;
          this.loadtableRegistrationDocument = true;
          this.userService.getRegistrationListParticipantData("registration_number=".concat(this.registration_number)).subscribe(function (result) {
            _this9.chartService.getSelectionDocument("selection_id=".concat(result.data[0]['selection_path_id'], "&active_status=true")).subscribe(function (response) {
              setTimeout(function () {
                _this9.tableData1 = response.data;
                _this9.dtTrigger.next(); // Trigger for load datatable
                _this9.loadtableRegistrationDocument = false;
              }, 3000);
            }, function (err) {
              // this.loadError();
              _this9.loadtableRegistrationDocument = false;
            });
          });
        }
        // render(): void {
        //   if (this.tableData1.length == 0) {
        //     this.loadRegistrationDocumentData();
        //   } else {
        //     this.dtElement1.dtInstance.then((dtInstance: DataTables.Api) => {
        //       dtInstance.destroy();
        //       this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
        //         this.chartService.getSelectionDocument(result.data[0]['selection_path_id']).subscribe(response => {
        //           if (result.data.length > 0) {
        //             this.tableData1 = result.data;
        //             this.dtTrigger1.next();
        //           } else {
        //             this.tableData1 = result.data;
        //           }
        //         });
        //       });
        //     });
        //   }
        // }
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
        key: "loadDetailRegistrationDocumentData",
        value: function loadDetailRegistrationDocumentData(data) {
          var _this10 = this;
          this.loading = true;
          this.documentId = data.document_id;
          if (data.document_type_id == 6) {
            this.chartService.getRegistrationDocument("".concat(this.registration_number, "&document_type_id=6")).subscribe(function (response2) {
              if (response2.data.length !== 0) {
                _this10.loading = false;
                _this10.loadingDocumentCard = false;
                _this10.documentTypePersonal = response2.data[0].document_type_id;
                _this10.documentidPersonal = response2.data[0].document_id;
                _this10.isUpdatedRequirement = true;
                if (response2.data[0].url !== null) {
                  _this10.haveDocumentPersonal = true;
                } else {
                  _this10.haveDocumentPersonal = false;
                }
                _this10.participantDocumentForm.get('url').clearValidators();
                _this10.participantDocumentForm.get('url').updateValueAndValidity();
                _this10.dataRequirementUrl = response2.data;
                _this10.documentRequirementModal.show();
                _this10.participantDocumentForm.patchValue({
                  name: response2.data[0].document_type
                });
                _this10.participantDocumentForm.patchValue({
                  url: ''
                });
                _this10.participantDocumentForm.get('url').reset();
                if (response2.data[0].document_url !== null) {
                  _this10.haveDocumentPersonal = true;
                } else {
                  _this10.haveDocumentPersonal = false;
                }
                if (response2.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
              } else {
                _this10.noDataFoundAlert();
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
                _this10.loading = false;
                _this10.transcriptRequirementModal.show();
                _this10.formType = 'edit';
                _this10.loadingDocumentCard = false;
                _this10.isUpdatedTranscript = true;
                _this10.isTranscript = true;
                _this10.documentTypeId = 8;
                _this10.documentTranscriptId = res.data[0].document_id;
                _this10.documentReportTranscriptId = res.data[0].document_report_card_id;
                _this10.transcriptDataForm.patchValue({
                  name: 'Transkrip Nilai Pendidikan Terakhir'
                });
                _this10.transcriptDataForm.get('url').clearValidators();
                _this10.transcriptDataForm.get('url').updateValueAndValidity();
                _this10.transcriptDataForm.get('gpa').clearValidators();
                _this10.transcriptDataForm.get('gpa').updateValueAndValidity();
                _this10.dataTranscriptUrlDoc = res.data;
                if (res.data[0].url !== null) {
                  _this10.haveTranscriptDoc = true;
                } else {
                  _this10.haveTranscriptDoc = false;
                }
                if (res.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
              } else {
                _this10.noDataFoundAlert();
              }
            }, function (reason) {
              _this10.loadError();
              _this10.loading = false;
            });
          } else if (data.document_type_id == 9) {
            this.userService.getDocumentSupportingData("registration_number=".concat(this.registration_number, "&document_type_id=9")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this10.documentRecommendationId = response.data[0].document_id;
                _this10.documentSupportingId = response.data[0].document_supporting_id;
                _this10.supportingDataForm.patchValue({
                  name: 'Surat Rekomendasi'
                });
                _this10.supportingDataForm.patchValue({
                  pic_email_address: response.data[0].pic_email_address
                });
                _this10.supportingDataForm.patchValue({
                  pic_name: response.data[0].pic_name
                });
                _this10.supportingDataForm.patchValue({
                  pic_phone_number: response.data[0].pic_phone_number
                });
                _this10.supportingDataForm.patchValue({
                  pic_address: response.data[0].pic_address
                });
                _this10.supportingDataForm.get('url').clearValidators();
                _this10.supportingDataForm.get('url').updateValueAndValidity();
                _this10.dataRecommendationUrl = response.data;
                _this10.haveSupportingDocument = true;
                _this10.recommendationLetterRequirementModal.show();
                _this10.loadingDocumentCard = false;
                _this10.loading = false;
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
              } else {
                _this10.noDataFoundAlert();
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
                _this10.loading = false;
                _this10.documentAbilitytId = res.data[0].document_id;
                _this10.documentAbilitySupportingId = res.data[0].document_supporting_id;
                _this10.abilityDataForm.patchValue({
                  name: 'Surat Kemampuan Pembayaran'
                });
                _this10.abilityDataForm.get('url').clearValidators();
                _this10.abilityDataForm.get('url').updateValueAndValidity();
                _this10.dataAbilityUrl = res.data;
                _this10.loadingDocumentCard = false;
                _this10.haveAbilityDocument = true;
                _this10.paymentAbilityModal.show();
                if (res.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
              } else {
                _this10.noDataFoundAlert();
              }
            }, function (reason) {
              _this10.loadError();
              _this10.loading = false;
            });
          } else if (data.document_type_id == 12) {
            this.userService.getUtbkDocument("?registration_number=".concat(this.registration_number)).subscribe(function (response) {
              if (response.length !== 0) {
                _this10.loading = false;
                _this10.documentTypeUtbk = 12;
                _this10.documentId = response[0].document_id;
                _this10.documentUtbkId = response[0].id;
                _this10.utbkForm.patchValue({
                  KPUScore: response[0].general_reasoning
                });
                _this10.utbkForm.patchValue({
                  PKScore: response[0].quantitative_knowledge
                });
                _this10.utbkForm.patchValue({
                  PDPUScore: response[0].comprehension_general_knowledge
                });
                _this10.utbkForm.patchValue({
                  KMBDMScore: response[0].comprehension_reading_knowledge
                });
                _this10.utbkForm.patchValue({
                  math: response[0].math
                });
                _this10.utbkForm.patchValue({
                  physics: response[0].physics
                });
                _this10.utbkForm.patchValue({
                  biological: response[0].biology
                });
                _this10.utbkForm.patchValue({
                  chemical: response[0].chemical
                });
                _this10.utbkForm.patchValue({
                  geography: response[0].geography
                });
                _this10.utbkForm.patchValue({
                  economy: response[0].economy
                });
                _this10.utbkForm.patchValue({
                  historical: response[0].historical
                });
                _this10.utbkForm.patchValue({
                  sociological: response[0].sociological
                });
                _this10.utbkForm.patchValue({
                  url: ''
                });
                _this10.dataUtbkUrl = response;
                _this10.selectedCategoryUtbk = response[0].major_type && response[0].major_type.toString();
                if (response[0].major_type === 1) {
                  _this10.isSaintek = true;
                } else {
                  _this10.isSaintek = false;
                }
                if (response[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.utbkModals.show();
              }
            });
          } else if (data.document_type_id == 13) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=13")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this10.documentTypeStudy = response.data[0].document_type_id;
                _this10.isTPADocument = true;
                _this10.isCoPromotor = false;
                _this10.isIPKDocument = false;
                _this10.isEPRTDocument = false;
                _this10.isPromotor = false;
                _this10.loadingDocumentCard = false;
                _this10.loading = false;
                _this10.documentStudyId = response.data[0].document_study_id;
                _this10.docid = response.data[0].document_id;
                _this10.eprtAndTpaForm.patchValue({
                  name: 'TPA'
                });
                _this10.eprtAndTpaForm.patchValue({
                  eprt_tpa_score: response.data[0].score
                });
                _this10.eprtAndTpaForm.patchValue({
                  publication_year: response.data[0].year
                });
                _this10.eprtAndTpaForm.get('url').clearValidators();
                _this10.eprtAndTpaForm.get('url').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('gpa').clearValidators();
                _this10.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                _this10.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                _this10.dataStudyUrl = response.data;
                if (response.data[0].document_url !== null) {
                  _this10.haveDocumentStudy = true;
                } else {
                  _this10.haveDocumentStudy = false;
                }
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.eprtAndTpaModal.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 14) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=14")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this10.documentTypeStudy = response.data[0].document_type_id;
                _this10.isIPKDocument = true;
                _this10.isTPADocument = false;
                _this10.isEPRTDocument = false;
                _this10.isCoPromotor = false;
                _this10.isPromotor = false;
                _this10.loadingDocumentCard = false;
                _this10.loading = false;
                _this10.documentStudyId = response.data[0].document_study_id;
                _this10.docid = response.data[0].document_id;
                _this10.eprtAndTpaForm.patchValue({
                  name: 'IPK'
                });
                _this10.eprtAndTpaForm.patchValue({
                  eprt_tpa_score: ''
                });
                _this10.eprtAndTpaForm.patchValue({
                  gpa: response.data[0].score
                });
                _this10.eprtAndTpaForm.get('url').clearValidators();
                _this10.eprtAndTpaForm.get('url').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
                _this10.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                _this10.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('publication_year').clearValidators();
                _this10.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                _this10.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                _this10.dataStudyUrl = response.data;
                if (response.data[0].document_url !== null) {
                  _this10.haveDocumentStudy = true;
                } else {
                  _this10.haveDocumentStudy = false;
                }
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.eprtAndTpaModal.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 15) {
            this.userService.getDocumentRecommendation("?registration_number=".concat(this.registration_number)).subscribe(function (response) {
              if (response.length !== 0) {
                _this10.loading = false;
                _this10.loadingRecommendation = false;
                _this10.formTypeRecommendationS2 = 'view';
                _this10.viewRecommendationS2 = true;
                _this10.loadingDocumentCard = false;
                _this10.idRecommendation1 = response[0].id;
                _this10.idRecommendation2 = response[1].id;
                _this10.recommendationS2Form.patchValue({
                  name_rec1: response[0].name
                });
                _this10.recommendationS2Form.patchValue({
                  handphone_rec1: response[0].handphone
                });
                _this10.recommendationS2Form.patchValue({
                  email_rec1: response[0].email
                });
                _this10.recommendationS2Form.patchValue({
                  name_rec2: response[1].name
                });
                _this10.recommendationS2Form.patchValue({
                  handphone_rec2: response[1].handphone
                });
                _this10.recommendationS2Form.patchValue({
                  email_rec2: response[1].email
                });
                _this10.recommendationS2Modal.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 16) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=16")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this10.haveDocumentData = true;
                _this10.documentTypeStudy = response.data[0].document_type_id;
                _this10.isCoPromotor = false;
                _this10.isPromotor = true;
                _this10.isIPKDocument = false;
                _this10.isTPADocument = false;
                _this10.isEPRTDocument = false;
                _this10.loading = false;
                _this10.loadingDocumentCard = false;
                _this10.documentStudyId = response.data[0].document_study_id;
                _this10.docid = response.data[0].document_id;
                _this10.eprtAndTpaForm.patchValue({
                  name: 'Kesediaan Promotor'
                });
                _this10.eprtAndTpaForm.get('url').clearValidators();
                _this10.eprtAndTpaForm.get('url').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                _this10.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('gpa').clearValidators();
                _this10.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('publication_year').clearValidators();
                _this10.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                _this10.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                _this10.dataStudyUrl = response.data;
                if (response.data[0].document_url !== null) {
                  _this10.haveDocumentStudy = true;
                } else {
                  _this10.haveDocumentStudy = false;
                }
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.eprtAndTpaModal.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 17) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=17")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this10.haveDocumentData = true;
                _this10.documentTypeStudy = response.data[0].document_type_id;
                _this10.isEprtUpdated = true;
                _this10.isProposal = true;
                _this10.loadingDocumentCard = false;
                _this10.loading = false;
                _this10.documentStudyId = response.data[0].document_study_id;
                _this10.docid = response.data[0].document_id;
                _this10.proposalForm.patchValue({
                  title: response.data[0].title
                });
                _this10.proposalForm.get('url').clearValidators();
                _this10.proposalForm.get('url').updateValueAndValidity();
                _this10.proposalForm.get('title').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(1000)]));
                _this10.proposalForm.get('title').updateValueAndValidity();
                _this10.dataProposal = response.data;
                if (response.data[0].document_url !== null) {
                  _this10.haveProposalDocument = true;
                } else {
                  _this10.haveProposalDocument = true;
                }
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.proposalModal.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 18) {
            this.chartService.getRegistrationDocument("".concat(this.registration_number, "&document_type_id=18")).subscribe(function (response2) {
              if (response2.data.length !== 0) {
                _this10.isIjazahS1 = true;
                _this10.isIjazahS2 = false;
                _this10.isPortofolio = false;
                _this10.loadingDocumentCard = false;
                _this10.loading = false;
                _this10.documentTypeIjazah = response2.data[0].document_type_id;
                _this10.docid = response2.data[0].document_id;
                _this10.ijazahForm.patchValue({
                  name: response2.data[0].document_type
                });
                _this10.ijazahForm.get('url').clearValidators();
                _this10.ijazahForm.get('url').updateValueAndValidity();
                _this10.dataIjazah = response2.data;
                if (response2.data[0].document_url !== null) {
                  _this10.haveDocumentIjazah = true;
                } else {
                  _this10.haveDocumentIjazah = false;
                }
                if (response2.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.ijazahModals.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 19) {
            this.chartService.getRegistrationDocument("".concat(this.registration_number, "&document_type_id=18")).subscribe(function (response2) {
              if (response2.data.length !== 0) {
                _this10.isIjazahS1 = false;
                _this10.isIjazahS2 = true;
                _this10.isPortofolio = false;
                _this10.loadingDocumentCard = false;
                _this10.documentTypeIjazah = response2.data[0].document_type_id;
                _this10.docid = response2.data[0].document_id;
                _this10.ijazahForm.patchValue({
                  name: response2.data[0].document_type
                });
                _this10.ijazahForm.get('url').clearValidators();
                _this10.ijazahForm.get('url').updateValueAndValidity();
                _this10.dataIjazah = response2.data;
                if (response2.data[0].document_url !== null) {
                  _this10.haveDocumentIjazah = true;
                } else {
                  _this10.haveDocumentIjazah = false;
                }
                if (response2.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.ijazahModals.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 20) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=20")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this10.loading = false;
                _this10.formTypeStudy = 'edit';
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.haveDocumentData = true;
                _this10.documentTypeStudy = response.data[0].document_type_id;
                _this10.isEprtUpdated = true;
                _this10.isPromotor = false;
                _this10.isResidensi = true;
                _this10.isSuratIjinAtasan = false;
                _this10.isCoPromotor = false;
                _this10.isIPKDocument = false;
                _this10.isTPADocument = false;
                _this10.loadingDocumentCard = false;
                _this10.isEPRTDocument = false;
                _this10.documentStudyId = response.data[0].document_study_id;
                _this10.docid = response.data[0].document_id;
                _this10.eprtAndTpaForm.patchValue({
                  name: response.data[0].document_name
                });
                _this10.eprtAndTpaForm.get('url').clearValidators();
                _this10.eprtAndTpaForm.get('url').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                _this10.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('gpa').clearValidators();
                _this10.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('publication_year').clearValidators();
                _this10.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                _this10.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                _this10.dataStudyUrl = response.data;
                if (response.data[0].document_url !== null) {
                  _this10.haveDocumentStudy = true;
                } else {
                  _this10.haveDocumentStudy = false;
                }
                _this10.eprtAndTpaModal.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 21) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=21")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this10.loading = false;
                _this10.formTypeStudy = 'edit';
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.haveDocumentData = true;
                _this10.documentTypeStudy = response.data[0].document_type_id;
                _this10.isEprtUpdated = true;
                _this10.isPromotor = false;
                _this10.isResidensi = false;
                _this10.isSuratIjinAtasan = true;
                _this10.isCoPromotor = false;
                _this10.isIPKDocument = false;
                _this10.isTPADocument = false;
                _this10.loadingDocumentCard = false;
                _this10.isEPRTDocument = false;
                _this10.documentStudyId = response.data[0].document_study_id;
                _this10.docid = response.data[0].document_id;
                _this10.eprtAndTpaForm.patchValue({
                  name: response.data[0].document_name
                });
                _this10.eprtAndTpaForm.get('url').clearValidators();
                _this10.eprtAndTpaForm.get('url').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                _this10.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('gpa').clearValidators();
                _this10.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('publication_year').clearValidators();
                _this10.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                _this10.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                _this10.dataStudyUrl = response.data;
                if (response.data[0].document_url !== null) {
                  _this10.haveDocumentStudy = true;
                } else {
                  _this10.haveDocumentStudy = false;
                }
                _this10.eprtAndTpaModal.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 22) {
            this.chartService.getRegistrationDocument("".concat(this.registration_number, "&document_type_id=22")).subscribe(function (response2) {
              if (response2.data.length !== 0) {
                _this10.haveDocumentIjazah = true;
                _this10.loading = false;
                _this10.isIjazahS1 = false;
                _this10.isIjazahS2 = false;
                _this10.isPortofolio = true;
                _this10.loadingDocumentCard = false;
                if (response2.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.documentTypeIjazah = response2.data[0].document_type_id;
                _this10.docid = response2.data[0].document_id;
                _this10.ijazahForm.patchValue({
                  link_document: response2.data[0].document_url
                });
                _this10.ijazahForm.patchValue({
                  name: response2.data[0].document_type
                });
                _this10.ijazahForm.get('url').clearValidators();
                _this10.ijazahForm.get('url').updateValueAndValidity();
                _this10.ijazahForm.get('name').clearValidators();
                _this10.ijazahForm.get('name').updateValueAndValidity();
                _this10.dataIjazah = response2.data;
                _this10.ijazahModals.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 23) {
            this.userService.getReportCardData("registration_number=".concat(this.registration_number, "&document_type_id=23")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this10.transcriptRequirementModal.show();
                _this10.documentTypeId = 23;
                _this10.loading = false;
                _this10.isTranscript = false;
                _this10.loadingDocumentCard = false;
                _this10.documentTranscriptId = response.data[0].document_id;
                _this10.documentReportTranscriptId = response.data[0].document_report_card_id;
                _this10.transcriptDataForm.patchValue({
                  name: 'Transkrip Ijazah S1'
                });
                _this10.transcriptDataForm.patchValue({
                  gpa: response.data[0].gpa
                });
                _this10.transcriptDataForm.get('url').clearValidators();
                _this10.transcriptDataForm.get('url').updateValueAndValidity();
                _this10.transcriptDataForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
                _this10.transcriptDataForm.get('gpa').updateValueAndValidity();
                _this10.dataTranscriptUrlDoc = response.data;
                if (response.data[0].url !== null) {
                  _this10.haveTranscriptDoc = true;
                } else {
                  _this10.haveTranscriptDoc = false;
                }
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 24) {
            this.userService.getReportCardData("registration_number=".concat(this.registration_number, "&document_type_id=24")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this10.transcriptRequirementModal.show();
                _this10.documentTypeId = 24;
                _this10.loading = false;
                _this10.isTranscript = false;
                _this10.loadingDocumentCard = false;
                _this10.documentTranscriptId = response.data[0].document_id;
                _this10.documentReportTranscriptId = response.data[0].document_report_card_id;
                _this10.transcriptDataForm.patchValue({
                  name: 'Transkrip Ijazah S2'
                });
                _this10.transcriptDataForm.patchValue({
                  gpa: response.data[0].gpa
                });
                _this10.transcriptDataForm.get('url').clearValidators();
                _this10.transcriptDataForm.get('url').updateValueAndValidity();
                _this10.transcriptDataForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9.]*$')]);
                _this10.transcriptDataForm.get('gpa').updateValueAndValidity();
                _this10.dataTranscriptUrlDoc = response.data;
                if (response.data[0].url !== null) {
                  _this10.haveTranscriptDoc = true;
                } else {
                  _this10.haveTranscriptDoc = false;
                }
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 25) {
            this.userService.getTranscriptDocument("?registration_number=".concat(this.registration_number)).subscribe(function (response) {
              if (response.length !== 0) {
                var x = response[0].id;
                _this10.userService.getTranscriptDocumentDetails("?document_transcript_id=".concat(x)).subscribe(function (response) {
                  if (response.length !== 0) {
                    _this10.formType = 'view';
                    _this10.tableTranscript = response.courses;
                    _this10.isUpdatedTranscript = true;
                    _this10.documentTranscriptId = response.id;
                    _this10.transcriptFormlView.patchValue({
                      name: 'Transkrip Nilai Pendidikan Terakhir'
                    });
                    _this10.transcriptFormlView.patchValue({
                      totalCredit: response.total_credit
                    });
                    _this10.transcriptFormlView.patchValue({
                      totalCourse: response.total_course
                    });
                    _this10.dataTranscriptUrl = response.url;
                    _this10.loadingDocumentCard = false;
                    _this10.transcriptRequirementModalView.show();
                    _this10.loading = false;
                  }
                });
              } else {
                _this10.noDataFoundAlert();
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
                _this10.haveDocumentData = true;
                _this10.documentTypeStudy = response.data[0].document_type_id;
                _this10.isCoPromotor = true;
                _this10.isPromotor = false;
                _this10.isIPKDocument = false;
                _this10.isTPADocument = false;
                _this10.loadingDocumentCard = false;
                _this10.isEPRTDocument = false;
                _this10.isResidensi = false;
                _this10.isSuratIjinAtasan = false;
                _this10.loading = false;
                _this10.documentStudyId = response.data[0].document_study_id;
                _this10.docid = response.data[0].document_id;
                _this10.eprtAndTpaForm.patchValue({
                  nameCoPromotor: response.data[0].document_name
                });
                _this10.eprtAndTpaForm.patchValue({
                  name: response.data[0].document_description
                });
                _this10.eprtAndTpaForm.get('url').clearValidators();
                _this10.eprtAndTpaForm.get('url').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                _this10.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('gpa').clearValidators();
                _this10.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('publication_year').clearValidators();
                _this10.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                _this10.dataStudyUrl = response.data;
                if (response.data[0].document_url !== null) {
                  _this10.haveDocumentStudy = true;
                } else {
                  _this10.haveDocumentStudy = false;
                }
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.eprtAndTpaModal.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 28) {
            this.userService.getDocumentStudy("?registration_number=".concat(this.registration_number, "&document_type_id=28")).subscribe(function (response) {
              if (response.data.length !== 0) {
                _this10.haveDocumentData = true;
                _this10.documentTypeStudy = response.data[0].document_type_id;
                _this10.isCoPromotor = false;
                _this10.isPromotor = false;
                _this10.isIPKDocument = false;
                _this10.isTPADocument = false;
                _this10.loadingDocumentCard = false;
                _this10.isEPRTDocument = true;
                _this10.isResidensi = false;
                _this10.isSuratIjinAtasan = false;
                _this10.loading = false;
                _this10.documentStudyId = response.data[0].document_study_id;
                _this10.docid = response.data[0].document_id;
                _this10.eprtAndTpaForm.patchValue({
                  name: response.data[0].document_name
                });
                _this10.eprtAndTpaForm.patchValue({
                  eprt_tpa_score: response.data[0].score
                });
                _this10.eprtAndTpaForm.patchValue({
                  publication_year: response.data[0].year
                });
                _this10.eprtAndTpaForm.get('url').clearValidators();
                _this10.eprtAndTpaForm.get('url').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('gpa').clearValidators();
                _this10.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                _this10.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                _this10.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                _this10.dataStudyUrl = response.data;
                if (response.data[0].document_url !== null) {
                  _this10.haveDocumentStudy = true;
                } else {
                  _this10.haveDocumentStudy = false;
                }
                if (response.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
                _this10.eprtAndTpaModal.show();
              } else {
                _this10.noDataFoundAlert();
              }
            });
          } else if (data.document_type_id == 1 || data.document_type_id == 2 || data.document_type_id == 3 || data.document_type_id == 4 || data.document_type_id == 5) {
            this.userService.getPersonalDocumentData("".concat(this.participantId, "&document_type_id=").concat(data.document_type_id)).subscribe(function (res) {
              if (res.data.length !== 0) {
                _this10.loading = false;
                _this10.loadingDocumentCard = false;
                _this10.documentTypePersonal = res.data[0].document_type_id;
                _this10.documentidPersonal = res.data[0].document_id;
                _this10.isUpdatedRequirement = true;
                _this10.participantDocumentForm.get('url').clearValidators();
                _this10.participantDocumentForm.get('url').updateValueAndValidity();
                _this10.dataRequirementUrl = res.data;
                _this10.documentRequirementModal.show();
                _this10.participantDocumentForm.patchValue({
                  name: res.data[0].document_name
                });
                _this10.participantDocumentForm.patchValue({
                  url: ''
                });
                if (_this10.documentTypePersonal == 1) {
                  _this10.participantDocumentForm.patchValue({
                    number: res.data[0].number
                  });
                  _this10.participantDocumentForm.get('number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(16)]));
                  _this10.participantDocumentForm.get('number').updateValueAndValidity();
                  _this10.isShowIdentityNumber = true;
                } else {
                  _this10.isShowIdentityNumber = false;
                  _this10.participantDocumentForm.patchValue({
                    number: ''
                  });
                  _this10.participantDocumentForm.get('number').clearValidators();
                  _this10.participantDocumentForm.get('number').updateValueAndValidity();
                }
                if (res.data[0].document_url !== null) {
                  _this10.haveDocumentPersonal = true;
                } else {
                  _this10.haveDocumentPersonal = false;
                }
                if (res.data[0].document_status == 'approved') {
                  _this10.approvedStatus = true;
                } else {
                  _this10.approvedStatus = false;
                }
              } else {
                _this10.noDataFoundAlert();
              }
            });
          }
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
        key: "documentRequirementModalClose",
        value: function documentRequirementModalClose() {
          this.documentRequirementModal.hide();
          this.participantDocumentForm.reset();
          !this.haveDocumentPersonal;
        }
      }, {
        key: "createEprtTpaDocument",
        value: function createEprtTpaDocument() {
          var _this11 = this;
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
            this.formDataStudyUpd.append('number', '');
            // this.formDataStudy.append('url', this.documentTypeStudy);
            this.formDataStudyUpd.append('registration_number', this.registration_number);
            this.userService.updDocumentStudy(this.formDataStudyUpd).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this11.loadSuccess();
                  _this11.formDataStudyUpd["delete"]('registration_number');
                  _this11.formDataStudyUpd["delete"]('name');
                  _this11.formDataStudyUpd["delete"]('document_type_id');
                  _this11.formDataStudyUpd["delete"]('document_id');
                  _this11.formDataStudyUpd["delete"]('number');
                  _this11.formDataStudyUpd["delete"]('description');
                  _this11.formDataStudyUpd["delete"]('score');
                  _this11.formDataStudyUpd["delete"]('year');
                  _this11.formDataStudyUpd["delete"]('url');
                  _this11.loading = false;
                  _this11.closeEprtTpaModals();
                  _this11.renderTable1();
                  _this11.loadRegistrationDocumentData();
                } else {
                  _this11.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                  _this11.loading = false;
                }
              } else {
                _this11.loadError();
                _this11.loading = false;
              }
            }, function (reason) {
              _this11.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              _this11.loading = false;
            });
          }
        }
      }, {
        key: "createIjazahDocument",
        value: function createIjazahDocument() {
          var _this12 = this;
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
                _this12.formDataIjazahUpd["delete"]('document_id');
                _this12.formDataIjazahUpd["delete"]('document_type_id');
                _this12.formDataIjazahUpd["delete"]('name');
                _this12.formDataIjazahUpd["delete"]('url');
                _this12.formDataIjazahUpd["delete"]('url_portofolio');
                _this12.formDataIjazahUpd["delete"]('participant_id');
                _this12.loadSuccess();
                _this12.loading = false;
                _this12.closeIjazahModals();
                _this12.renderTable1();
                _this12.loadRegistrationDocumentData();
              } else {
                _this12.broadcasterService.notifBroadcast(true, {
                  title: res.status,
                  msg: res.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });
                _this12.loading = false;
              }
            }, function (reason) {
              _this12.loading = false;
              _this12.broadcasterService.notifBroadcast(true, {
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
        key: "closeIjazahModals",
        value: function closeIjazahModals() {
          this.ijazahModals.hide();
          this.ijazahForm.reset();
          this.isIjazahS1 = false;
          this.isIjazahS2 = false;
          this.isPortofolio = false;
        }
      }, {
        key: "closeUtbkModals",
        value: function closeUtbkModals() {
          this.utbkForm.reset();
          this.utbkModals.hide();
          this.dataUtbkUrl = [];
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
        key: "createUtbkDocument",
        value: function createUtbkDocument() {
          var _this13 = this;
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
                _this13.loadSuccess();
                _this13.formDataUtbkUpd["delete"]('registration_number');
                _this13.formDataUtbkUpd["delete"]('name');
                _this13.formDataUtbkUpd["delete"]('document_id');
                _this13.formDataUtbkUpd["delete"]('utbk_id');
                _this13.formDataUtbkUpd["delete"]('description');
                _this13.formDataUtbkUpd["delete"]('general_reasoning');
                _this13.formDataUtbkUpd["delete"]('quantitative_knowledge');
                _this13.formDataUtbkUpd["delete"]('comprehension_general_knowledge');
                _this13.formDataUtbkUpd["delete"]('comprehension_reading_knowledge');
                _this13.formDataUtbkUpd["delete"]('math');
                _this13.formDataUtbkUpd["delete"]('geography');
                _this13.formDataUtbkUpd["delete"]('historical');
                _this13.formDataUtbkUpd["delete"]('sociological');
                _this13.formDataUtbkUpd["delete"]('economy');
                _this13.formDataUtbkUpd["delete"]('physics');
                _this13.formDataUtbkUpd["delete"]('chemical');
                _this13.formDataUtbkUpd["delete"]('biology');
                _this13.formDataUtbkUpd["delete"]('major_type');
                _this13.formDataUtbkUpd["delete"]('url');
                _this13.utbkModals.hide();
                _this13.loading = false;
                _this13.renderTable1();
                _this13.loadRegistrationDocumentData();
              } else {
                _this13.broadcasterService.notifBroadcast(true, {
                  title: 'Gagal',
                  msg: res.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });
                _this13.loading = false;
              }
            } else {
              _this13.loadError();
              _this13.loading = false;
            }
          }, function (reason) {
            _this13.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            _this13.loading = false;
          });
        }
      }, {
        key: "getTablePublication",
        value: function getTablePublication() {
          var _this14 = this;
          this.loadTablePublication = true;
          this.userService.getDocumentPublication("?participant_id=".concat(this.participantId)).subscribe(function (response) {
            _this14.tableDataPublication = response;
            _this14.totalRecord = response.length;
            _this14.loadTablePublication = false;
          }, function (err) {
            _this14.loadError();
            _this14.loadTablePublication = false;
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
        key: "closePublikasiModals",
        value: function closePublikasiModals() {
          this.publikasiForm.reset();
          this.publikasiModals.hide();
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "loadDetailReportCardFileData",
        value: function loadDetailReportCardFileData(registration_number) {
          var _this15 = this;
          this.loadtableReportCardData = true;
          this.userService.getReportCardData("registration_number=".concat(registration_number, "&document_type_id=7")).subscribe(function (response) {
            _this15.tableData2 = response.data;
            _this15.loadtableReportCardData = false;
            if (response.data.length !== 0) {
              _this15.noDataDocument = false;
              if (response.data[0].document_status !== 'approved') {
                _this15.registrationDocumentForm.patchValue({
                  approval_final_status: '0'
                });
              } else {
                _this15.registrationDocumentForm.patchValue({
                  approval_final_status: '1'
                });
              }
            } else {
              _this15.noDataDocument = true;
            }
          }, function (err) {
            _this15.loadError();
            _this15.loadtableReportCardData = false;
          });
        }
      }, {
        key: "loadDetailCertificateFileData",
        value: function loadDetailCertificateFileData(registration_number) {
          var _this16 = this;
          this.loadtableCertificateData = true;
          this.userService.getDocumentCertificateData("registration_number=".concat(registration_number)).subscribe(function (response) {
            _this16.tableData3 = response.data;
            _this16.loadtableCertificateData = false;
            if (response.data.length !== 0) {
              _this16.noDataDocument = false;
              if (response.data[0].document_status !== 'approved') {
                _this16.registrationDocumentForm.patchValue({
                  approval_final_status: '0'
                });
              } else {
                _this16.registrationDocumentForm.patchValue({
                  approval_final_status: '1'
                });
              }
            } else {
              _this16.noDataDocument = true;
            }
          }, function (err) {
            _this16.loadError();
            _this16.loadtableCertificateData = false;
          });
        }
      }, {
        key: "loadSemesterChecked",
        value: function loadSemesterChecked() {
          var _this17 = this;
          this.userService.getRaportSemesters("?registration_number=".concat(this.registration_number, "&is_checked=1")).subscribe(function (res) {
            if (res.length !== 0) {
              for (var i = 0; i < res.length; i++) {
                var x = res[i].key_name;
                if (x == 'math') {
                  _this17.isMathStudy = true;
                  _this17.reportCardDataForm.get('math').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                  _this17.reportCardDataForm.get('math').updateValueAndValidity();
                } else if (x == 'bahasa') {
                  _this17.isBahasaStudy = true;
                  _this17.reportCardDataForm.get('bahasa').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                  _this17.reportCardDataForm.get('bahasa').updateValueAndValidity();
                } else if (x == 'english') {
                  _this17.isEnglishStudy = true;
                  _this17.reportCardDataForm.get('english').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                  _this17.reportCardDataForm.get('english').updateValueAndValidity();
                } else if (x == 'chemical') {
                  _this17.chemicalStudy = true;
                  _this17.reportCardDataForm.get('chemical').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                  _this17.reportCardDataForm.get('chemical').updateValueAndValidity();
                } else if (x == 'biology') {
                  _this17.biologyStudy = true;
                  _this17.reportCardDataForm.get('biology').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                  _this17.reportCardDataForm.get('biology').updateValueAndValidity();
                } else if (x == 'physics') {
                  _this17.physicsStudy = true;
                  _this17.reportCardDataForm.get('physics').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                  _this17.reportCardDataForm.get('physics').updateValueAndValidity();
                } else if (x == 'economy') {
                  _this17.economyStudy = true;
                  _this17.reportCardDataForm.get('economy').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                  _this17.reportCardDataForm.get('economy').updateValueAndValidity();
                } else if (x == 'sociological') {
                  _this17.sociologicalStudy = true;
                  _this17.reportCardDataForm.get('sociological').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                  _this17.reportCardDataForm.get('sociological').updateValueAndValidity();
                } else if (x == 'geography') {
                  _this17.geographyStudy = true;
                  _this17.reportCardDataForm.get('geography').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]*$')]));
                  _this17.reportCardDataForm.get('geography').updateValueAndValidity();
                }
              }
              _this17.keyName = res;
            }
          });
        }
      }, {
        key: "submitReportApprovedDocument",
        value: function submitReportApprovedDocument(data) {
          var _this18 = this;
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
              _this18.loading = true;
              var payload = {
                document_id: data.document_id,
                approval_final_status: 1
              };
              _this18.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this18.loadSuccess();
                  _this18.loading = false;
                  _this18.loadDetailReportCardFileData(_this18.registration_number);
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
        key: "submitRejectReportApprovedDocument",
        value: function submitRejectReportApprovedDocument(data) {
          var _this19 = this;
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
              _this19.loading = true;
              var payload = {
                document_id: data.document_id,
                approval_final_status: 'false'
              };
              _this19.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this19.loadSuccess();
                  _this19.loading = false;
                  _this19.loadDetailReportCardFileData(_this19.registration_number);
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
        key: "submitCertificateApprovedDocument",
        value: function submitCertificateApprovedDocument(data) {
          var _this20 = this;
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
              _this20.loading = true;
              var payload = {
                document_id: data.document_id,
                approval_final_status: 1
              };
              _this20.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this20.loadSuccess();
                  _this20.loading = false;
                  _this20.loadDetailCertificateFileDataTable(_this20.registration_number);
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
        key: "submitRejectCertificateApprovedDocument",
        value: function submitRejectCertificateApprovedDocument(data) {
          var _this21 = this;
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
              _this21.loading = true;
              var payload = {
                document_id: data.document_id,
                approval_final_status: 'false'
              };
              _this21.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this21.loadSuccess();
                  _this21.loading = false;
                  _this21.loadDetailCertificateFileDataTable(_this21.registration_number);
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
        key: "submitStudyDocument",
        value: function submitStudyDocument() {
          var _this22 = this;
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
              _this22.loading = true;
              var payload = {
                document_id: _this22.docid,
                approval_final_status: 1
              };
              _this22.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this22.loadSuccess();
                  _this22.loading = false;
                  _this22.closeEprtTpaModals();
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
        key: "submitRejectStudyDocument",
        value: function submitRejectStudyDocument() {
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
                document_id: _this23.docid,
                approval_final_status: 'false'
              };
              _this23.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this23.loadSuccess();
                  _this23.loading = false;
                  _this23.closeEprtTpaModals();
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
        key: "submitIjazahDocument",
        value: function submitIjazahDocument() {
          var _this24 = this;
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
              _this24.loading = true;
              var payload = {
                document_id: _this24.docid,
                approval_final_status: 1
              };
              _this24.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this24.loadSuccess();
                  _this24.loading = false;
                  _this24.closeIjazahModals();
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
        key: "submitIjazahRejectedDocument",
        value: function submitIjazahRejectedDocument() {
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
                document_id: _this25.docid,
                approval_final_status: 'false'
              };
              _this25.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this25.loadSuccess();
                  _this25.loading = false;
                  _this25.closeIjazahModals();
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
        key: "submitApprovalTranscriptDocument",
        value: function submitApprovalTranscriptDocument() {
          var _this26 = this;
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
              _this26.loading = true;
              var payload = {
                document_id: _this26.documentTranscriptId,
                approval_final_status: 1
              };
              _this26.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this26.loadSuccess();
                  _this26.loading = false;
                  _this26.closeTranscriptModals();
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
        key: "submitRejectTranscriptDocument",
        value: function submitRejectTranscriptDocument() {
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
                document_id: _this27.documentTranscriptId,
                approval_final_status: 'false'
              };
              _this27.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this27.loadSuccess();
                  _this27.loading = false;
                  _this27.closeTranscriptModals();
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
        key: "submitApprovalParticipantDocument",
        value: function submitApprovalParticipantDocument() {
          var _this28 = this;
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
              _this28.loading = true;
              var payload = {
                document_id: _this28.documentidPersonal,
                approval_final_status: 1
              };
              _this28.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this28.loadSuccess();
                  _this28.loading = false;
                  _this28.documentRequirementModalClose();
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
        key: "submitRejectParticipantDocument",
        value: function submitRejectParticipantDocument() {
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
                document_id: _this29.documentidPersonal,
                approval_final_status: 'false'
              };
              _this29.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this29.loadSuccess();
                  _this29.loading = false;
                  _this29.documentRequirementModalClose();
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
        key: "submitApprovalAbilityDocument",
        value: function submitApprovalAbilityDocument() {
          var _this30 = this;
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
              _this30.loading = true;
              var payload = {
                document_id: _this30.documentAbilitytId,
                approval_final_status: 1
              };
              _this30.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this30.loadSuccess();
                  _this30.loading = false;
                  _this30.paymentAbilityModal.hide();
                  _this30.abilityDataForm.reset();
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
        key: "submitRejectAbilityDocument",
        value: function submitRejectAbilityDocument() {
          var _this31 = this;
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
              _this31.loading = true;
              var payload = {
                document_id: _this31.documentAbilitytId,
                approval_final_status: 'false'
              };
              _this31.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this31.loadSuccess();
                  _this31.loading = false;
                  _this31.paymentAbilityModal.hide();
                  _this31.abilityDataForm.reset();
                  _this31.approvedStatus = false;
                  _this31.renderTable1();
                  _this31.loadRegistrationDocumentData();
                } else {
                  _this31.loading = false;
                  _this31.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this31.loading = false;
                _this31.broadcasterService.notifBroadcast(true, {
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
          var _this32 = this;
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
              _this32.loading = true;
              var payload = {
                document_id: _this32.documentRecommendationId,
                approval_final_status: 1
              };
              _this32.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this32.loadSuccess();
                  _this32.loading = false;
                  _this32.recommendationLetterRequirementModal.hide();
                  _this32.supportingDataForm.reset();
                  _this32.approvedStatus = false;
                  _this32.renderTable1();
                  _this32.loadRegistrationDocumentData();
                } else {
                  _this32.loading = false;
                  _this32.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this32.loading = false;
                _this32.broadcasterService.notifBroadcast(true, {
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
          var _this33 = this;
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
              _this33.loading = true;
              var payload = {
                document_id: _this33.documentRecommendationId,
                approval_final_status: 'false'
              };
              _this33.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this33.loadSuccess();
                  _this33.loading = false;
                  _this33.recommendationLetterRequirementModal.hide();
                  _this33.supportingDataForm.reset();
                  _this33.approvedStatus = false;
                  _this33.renderTable1();
                  _this33.loadRegistrationDocumentData();
                } else {
                  _this33.loading = false;
                  _this33.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
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
          });
        }
      }, {
        key: "submitApprovalProposalDocument",
        value: function submitApprovalProposalDocument() {
          var _this34 = this;
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
              _this34.loading = true;
              var payload = {
                document_id: _this34.docid,
                approval_final_status: 1
              };
              _this34.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this34.loadSuccess();
                  _this34.loading = false;
                  _this34.proposalModal.hide();
                  _this34.proposalForm.reset();
                  _this34.approvedStatus = false;
                  _this34.renderTable1();
                  _this34.loadRegistrationDocumentData();
                } else {
                  _this34.loading = false;
                  _this34.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this34.loading = false;
                _this34.broadcasterService.notifBroadcast(true, {
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
          var _this35 = this;
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
              _this35.loading = true;
              var payload = {
                document_id: _this35.docid,
                approval_final_status: 'false'
              };
              _this35.userService.updPersonalDocumentData(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this35.loadSuccess();
                  _this35.loading = false;
                  _this35.proposalModal.hide();
                  _this35.proposalForm.reset();
                  _this35.approvedStatus = false;
                  _this35.renderTable1();
                  _this35.loadRegistrationDocumentData();
                } else {
                  _this35.loading = false;
                  _this35.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
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
          });
        }
      }, {
        key: "createPublicationData",
        value: function createPublicationData() {
          var _this36 = this;
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
              _this36.loadSuccess();
              _this36.loading = false;
              _this36.getTablePublication();
              _this36.closePublikasiModals();
            } else {
              _this36.loading = false;
              _this36.broadcasterService.notifBroadcast(true, {
                title: response.status,
                msg: response.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
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
      }, {
        key: "createRegistrationDocumentData",
        value: function createRegistrationDocumentData() {
          var _this37 = this;
          this.loading = true;
          if (this.edit == 'edit') {
            var status_approve = '';
            if (this.registrationDocumentForm.value.approval_final_status === '0') {
              status_approve = 'false';
            } else {
              status_approve = '1';
            }
            var data = {
              document_id: this.documentId,
              name: this.registrationDocumentForm.value.name,
              description: this.registrationDocumentForm.value.name,
              approval_final_status: status_approve
              // url: this.registrationDocumentForm.value.url,
            };
            this.userService.updPersonalDocumentData(data).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this37.loadSuccess();
                  _this37.loading = false;
                  _this37.registrationDocumentModal.hide();
                  _this37.loadRegistrationDocumentData();
                  _this37.renderTable1();
                  // this.render();
                } else {
                  _this37.loadError();
                  _this37.loading = false;
                }
              } else {
                _this37.loadError();
                _this37.loading = false;
              }
            }, function (reason) {
              _this37.loadError();
              _this37.loading = false;
            });
          }
        }
      }, {
        key: "createPersonalDocumentParticipant",
        value: function createPersonalDocumentParticipant() {
          var _this38 = this;
          this.loading = true;
          if (this.participantDocumentForm.valid) {
            this.formDataPersonalUpd.append('document_id', this.documentidPersonal);
            this.formDataPersonalUpd.append('name', this.participantDocumentForm.controls['name'].value);
            this.formDataPersonalUpd.append('description', this.participantDocumentForm.controls['name'].value);
            this.formDataPersonalUpd.append('number', this.participantDocumentForm.controls['number'].value);
            this.userService.updPersonalDocumentData(this.formDataPersonalUpd).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this38.formDataPersonalUpd["delete"]('document_id');
                  _this38.formDataPersonalUpd["delete"]('name');
                  _this38.formDataPersonalUpd["delete"]('description');
                  _this38.formDataPersonalUpd["delete"]('number');
                  _this38.formDataPersonalUpd["delete"]('url');
                  _this38.loadSuccess();
                  _this38.documentRequirementModalClose();
                  _this38.renderTable1();
                  _this38.loadRegistrationDocumentData();
                  _this38.loading = false;
                } else {
                  _this38.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              } else {
                _this38.loadError();
              }
            }, function (reason) {
              _this38.loading = false;
              _this38.broadcasterService.notifBroadcast(true, {
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
          var _this39 = this;
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
                  _this39.formData2Update["delete"]('registration_number');
                  _this39.formData2Update["delete"]('support_id');
                  _this39.formData2Update["delete"]('document_id');
                  _this39.formData2Update["delete"]('name');
                  _this39.formData2Update["delete"]('description');
                  _this39.formData2Update["delete"]('pic_name');
                  _this39.formData2Update["delete"]('pic_phone_number');
                  _this39.formData2Update["delete"]('pic_email_address');
                  _this39.formData2Update["delete"]('pic_address');
                  _this39.formData2Update["delete"]('url');
                  _this39.loadSuccess();
                  _this39.recommendationLetterRequirementModal.hide();
                  _this39.renderTable1();
                  _this39.loadRegistrationDocumentData();
                  _this39.loading = false;
                } else {
                  _this39.loadError();
                  _this39.loading = false;
                }
              } else {
                _this39.loading = false;
                _this39.loadError();
              }
            }, function (reason) {
              _this39.loading = false;
              _this39.broadcasterService.notifBroadcast(true, {
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
                  _this39.formDataAbilityUpd["delete"]('registration_number');
                  _this39.formDataAbilityUpd["delete"]('support_id');
                  _this39.formDataAbilityUpd["delete"]('document_id');
                  _this39.formDataAbilityUpd["delete"]('document_type_id');
                  _this39.formDataAbilityUpd["delete"]('description');
                  _this39.formDataAbilityUpd["delete"]('name');
                  _this39.formDataAbilityUpd["delete"]('url');
                  _this39.loadSuccess();
                  _this39.paymentAbilityModal.hide();
                  _this39.renderTable1();
                  _this39.loadRegistrationDocumentData();
                  _this39.loading = false;
                } else {
                  _this39.loadError();
                  _this39.loading = false;
                }
              } else {
                _this39.loadError();
                _this39.loading = false;
              }
            }, function (reason) {
              _this39.loading = false;
              _this39.broadcasterService.notifBroadcast(true, {
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
          var _this40 = this;
          if (this.proposalForm.valid) {
            this.loading = true;
            this.formDataProposalUpd.append('title', this.proposalForm.controls['title'].value);
            this.formDataProposalUpd.append('document_id', this.docid);
            this.formDataProposalUpd.append('document_study_id', this.documentStudyId);
            this.userService.updDocumentProposal(this.formDataProposalUpd).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this40.loadSuccess();
                  _this40.formDataProposalUpd["delete"]('title');
                  _this40.formDataProposalUpd["delete"]('document_study_id');
                  _this40.formDataProposalUpd["delete"]('document_id');
                  _this40.formDataProposalUpd["delete"]('url');
                  _this40.proposalModal.hide();
                  _this40.loading = false;
                  _this40.renderTable1();
                  _this40.loadRegistrationDocumentData();
                } else {
                  _this40.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                  _this40.loading = false;
                }
              } else {
                _this40.loadError();
                _this40.loading = false;
              }
            }, function (reason) {
              _this40.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              _this40.loading = false;
            });
          }
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
          var _this41 = this;
          this.userService.getReportCardData("registration_number=".concat(this.registration_number, "&document_type_id=7&document_report_card_id=").concat(this.documentReportCardId)).subscribe(function (response) {
            if (response.data.length !== 0) {
              _this41.listDocumentReport = response.data;
            } else {
              _this41.listDocumentReport = '';
            }
          });
        }
      }, {
        key: "loadSemesterDataFilter",
        value: function loadSemesterDataFilter() {
          var _this42 = this;
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
              _this42.listSemester = dataSemester;
            }
            _this42.loadFilter = false;
          }, function (err) {
            _this42.loadError();
            _this42.loadFilter = false;
          });
          this.loading = false;
        }
      }, {
        key: "loadRangeScoreDataFilter",
        value: function loadRangeScoreDataFilter() {
          var _this43 = this;
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
              _this43.listRangeScore = dataRangeScore;
            }
            _this43.loadFilter = false;
          }, function (err) {
            _this43.loadError();
            _this43.loadFilter = false;
          });
          this.loading = false;
        }
      }, {
        key: "createReportCardDocument",
        value: function createReportCardDocument() {
          var _this44 = this;
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
                  _this44.formDataUpdate["delete"]('registration_number');
                  _this44.formDataUpdate["delete"]('document_type_id');
                  _this44.formDataUpdate["delete"]('report_id');
                  _this44.formDataUpdate["delete"]('document_id');
                  _this44.formDataUpdate["delete"]('semester_id');
                  _this44.formDataUpdate["delete"]('physics');
                  _this44.formDataUpdate["delete"]('math');
                  _this44.formDataUpdate["delete"]('bahasa');
                  _this44.formDataUpdate["delete"]('english');
                  _this44.formDataUpdate["delete"]('economy');
                  _this44.formDataUpdate["delete"]('geography');
                  _this44.formDataUpdate["delete"]('sociological');
                  _this44.formDataUpdate["delete"]('biology');
                  _this44.formDataUpdate["delete"]('chemical');
                  _this44.formDataUpdate["delete"]('url');
                  _this44.formDataUpdate["delete"]('url');
                  _this44.loadSuccess();
                  _this44.reportCardDetailModal.hide();
                  _this44.loadDetailReportCardFileData(_this44.registration_number);
                  _this44.renderTable2();
                  _this44.loading = false;
                  _this44.closeRaportModalDetail();
                } else {
                  _this44.loadError();
                  _this44.loading = false;
                }
              } else {
                _this44.loadError();
                _this44.loading = false;
              }
            }, function (reason) {
              _this44.loadError();
              _this44.loading = false;
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
                    _this44.formData3Updated["delete"]('document_id');
                    _this44.formData3Updated["delete"]('report_id');
                    _this44.formData3Updated["delete"]('registration_number');
                    _this44.formData3Updated["delete"]('document_type_id');
                    _this44.formData3Updated["delete"]('gpa');
                    _this44.loadSuccess();
                    _this44.loading = false;
                    _this44.renderTable1();
                    _this44.loadRegistrationDocumentData();
                    _this44.closeTranscriptModals();
                  } else {
                    _this44.loadError();
                    _this44.loading = false;
                  }
                } else {
                  _this44.loadError();
                  _this44.loading = false;
                }
              }, function (reason) {
                _this44.loading = false;
                _this44.broadcasterService.notifBroadcast(true, {
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
          var _this45 = this;
          this.loadtableCertificateData = true;
          this.userService.getDocumentCertificateData("registration_number=".concat(registration_number)).subscribe(function (response) {
            _this45.tableData3 = response.data;
            _this45.loadtableCertificateData = false;
          }, function (err) {
            _this45.loadError();
            _this45.loadtableCertificateData = false;
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
          var _this46 = this;
          this.userService.getDocumentCertificateData("registration_number=".concat(this.registration_number, "&document_certificate_id=").concat(this.documentCertificateId)).subscribe(function (response) {
            if (response.data.length !== 0) {
              _this46.listDocumentCertificate = response.data;
            } else {
              _this46.listDocumentCertificate = '';
            }
          });
        }
      }, {
        key: "createCertificateDocument",
        value: function createCertificateDocument() {
          var _this47 = this;
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
                  _this47.loadSuccess();
                  _this47.formDataCertificateUpdated["delete"]('registration_number');
                  _this47.formDataCertificateUpdated["delete"]('document_type_id');
                  _this47.formDataCertificateUpdated["delete"]('certificate_id');
                  _this47.formDataCertificateUpdated["delete"]('document_id');
                  _this47.formDataCertificateUpdated["delete"]('name');
                  _this47.formDataCertificateUpdated["delete"]('description');
                  _this47.formDataCertificateUpdated["delete"]('certificate_type_id');
                  _this47.formDataCertificateUpdated["delete"]('certificate_level_id');
                  _this47.formDataCertificateUpdated["delete"]('publication_year');
                  _this47.formDataCertificateUpdated["delete"]('certificate_score');
                  _this47.formDataCertificateUpdated["delete"]('url');
                  _this47.loading = false;
                  _this47.closeCertificateModalDetail();
                  _this47.loadDetailCertificateFileDataTable(_this47.registration_number);
                } else {
                  _this47.loadError();
                }
              } else {
                _this47.loadError();
              }
            }, function (reason) {
              _this47.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              _this47.loading = false;
            });
          }
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
                this.formDataPersonalUpd["delete"]('url');
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
        key: "renderTable2",
        value: function renderTable2() {
          this.dtElements.forEach(function (dtElement, index) {
            if (index == 2) {
              dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              });
            }
          });
        }
      }, {
        key: "renderTable3",
        value: function renderTable3() {
          this.dtElements.forEach(function (dtElement, index) {
            if (index == 3) {
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
        key: "noDataFoundAlert",
        value: function noDataFoundAlert() {
          this.loadingDocumentCard = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Info',
            text: 'Tidak ada data ditemukan',
            type: 'error'
          });
        }
      }]);
    }();
    ParticipantDataDetailComponent.ctorParameters = function () {
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], ParticipantDataDetailComponent.prototype, "dtElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registrationDocumentModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "registrationDocumentModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportCardDetailModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "reportCardDetailModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateDetailModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "certificateDetailModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publikasiModals', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "publikasiModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publicationDataModals', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "publicationDataModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eprtAndTpaModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "eprtAndTpaModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ijazahModals', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "ijazahModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transcriptRequirementModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "transcriptRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paymentAbilityModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "paymentAbilityModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recommendationLetterRequirementModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "recommendationLetterRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transcriptRequirementModalView', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "transcriptRequirementModalView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('utbkModals', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "utbkModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recommendationS2Modal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "recommendationS2Modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proposalModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "proposalModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportCardRequirementModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "reportCardRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateRequirementModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "certificateRequirementModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('documentRequirementModal', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ParticipantDataDetailComponent.prototype, "documentRequirementModal", void 0);
    ParticipantDataDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-participant-data-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./participant-data-detail.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./participant-data-detail.component.scss */"./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__["BroadcasterService"], src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"], src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])], ParticipantDataDetailComponent);

    /***/
  }),
  /***/"./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.module.ts": (
  /*!*********************************************************************************************************!*\
    !*** ./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.module.ts ***!
    \*********************************************************************************************************/
  /*! exports provided: ParticipantDataDetailModule */
  /***/
  function _src_app_theme_admMpParticipantData_participantDataDetail_participantDataDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ParticipantDataDetailModule", function () {
      return ParticipantDataDetailModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _participant_data_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./participant-data-detail.component */"./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.component.ts");
    /* harmony import */
    var _participant_data_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./participant-data-detail-routing.module */"./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail-routing.module.ts");
    /* harmony import */
    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/shared/shared.module */"./src/app/shared/shared.module.ts");
    /* harmony import */
    var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! angular-datatables */"./node_modules/angular-datatables/index.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    var ParticipantDataDetailModule = /*#__PURE__*/_createClass(function ParticipantDataDetailModule() {
      _classCallCheck(this, ParticipantDataDetailModule);
    });
    ParticipantDataDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_participant_data_detail_component__WEBPACK_IMPORTED_MODULE_3__["ParticipantDataDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _participant_data_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["ParticipantDataDetailRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"]]
    })], ParticipantDataDetailModule);

    /***/
  })
}]);
//# sourceMappingURL=participant-data-detail-participant-data-detail-module-es5.js.map