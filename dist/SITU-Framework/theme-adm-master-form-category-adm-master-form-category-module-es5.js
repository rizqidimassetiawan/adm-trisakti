function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-adm-master-form-category-adm-master-form-category-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-master-form-category/adm-master-form-category.component.html": (
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-master-form-category/adm-master-form-category.component.html ***!
    \******************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_theme_admMasterFormCategory_admMasterFormCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-12\">\n    <app-card cardTitle=\"Master Kategori Formulir\" cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\"\n      [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loader\">\n\n      <div class=\"row p-4\">\n        <div class=\"col-12 col-md-8\">\n          <div class=\"table-responsive pb-1 pr-5\">\n            <table datatable class=\"table table-hover\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                  <th scope=\"col\">{{ 'CONTENT.form-kategory' | translate}}</th>\n                  <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.active-status' | translate}}</th>\n                  <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"tableData?.length != 0\">\n                <tr *ngFor=\"let data of tableData; let i = index;\">\n                  <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                  <td>{{ data.nama }}</td>\n                  <td class=\"center-table\">\n                    <span class=\"badge badge-{{ data.status == 1 ? 'success' : 'danger' }}\">{{\n                      data.status == 1 ? ('ROOT.active' | translate) : ('ROOT.nonactive' | translate)}}\n                    </span>\n                  </td>\n                  <td class=\"center-table\">\n                    <button class=\"btn btn-warning btn-sm btn-round has-ripple\" [placement]=\"'top'\"\n                      ngbTooltip=\"{{'ROOT.edit' | translate}}\" (click)=\"editData(data);\">\n                      <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n                    </button>\n                    <button class=\"btn btn-danger btn-sm btn-round has-ripple m-1\" [placement]=\"'top'\"\n                      ngbTooltip=\"{{'ROOT.delete' | translate}}\" (click)=\"deleteDataDocument(data)\">\n                      <i class=\"icofont icofont-ui-delete\"></i> <span class=\"d-sm-none\"> {{'ROOT.detail' | translate}}</span>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n              <tbody *ngIf=\"tableData?.length == 0 && !loadtableApprovalData\">\n                <tr>\n                  <td colspan=\"4\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                </tr>\n              </tbody>\n              <tbody *ngIf=\"tableData?.length == 0 && loadtableApprovalData\">\n                <tr>\n                  <td colspan=\"4\" class=\"no-data-available text-center\">Loading Data....</td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <app-card cardTitle=\"{{'CONTENT.form-data' | translate }}\" [hidHeader]=\"false\" [options]=\"false\">\n            <div class=\"col-12 pt-3\">\n              <form [formGroup]=\"DataFormFormulir\" (ngSubmit)=\"createDataDocument()\" class=\"md-float-material form-material\" action=\"javascript:\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group mb-2\">\n                      <label class=\"form-label m-b-0 f-w-400\">{{ 'CONTENT.form-kategory' | translate }}</label>\n                      <input type=\"text\" class=\"form-control uppercase\" name=\"name\" formControlName=\"name\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-12 pt-3 pl-4 pr-4 pb-2\">\n                  <button class=\"btn btn-info btn-round btn-md btn-block\" [disabled]=\"!DataFormFormulir.valid\">\n                    <i class=\"icofont icofont-save pr-2\"></i> Simpan\n                  </button>\n                </div>\n              </form>\n                <div class=\"col-12 pl-4 pr-4\">\n                  <button class=\"btn btn-outline-danger btn-round btn-md btn-block\" (click)=\"batal()\" [disabled]=\"!DataFormFormulir.valid\">\n                    <i class=\"icofont icofont-save pr-2\"></i> Batal\n                  </button>\n                </div>\n            </div>\n          </app-card>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>";

    /***/
  }),
  /***/"./src/app/theme/adm-master-form-category/adm-master-form-category-routing.module.ts": (
  /*!*******************************************************************************************!*\
    !*** ./src/app/theme/adm-master-form-category/adm-master-form-category-routing.module.ts ***!
    \*******************************************************************************************/
  /*! exports provided: AdmMasterFormCategoryRoutingModule */
  /***/
  function _src_app_theme_admMasterFormCategory_admMasterFormCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdmMasterFormCategoryRoutingModule", function () {
      return AdmMasterFormCategoryRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _adm_master_form_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./adm-master-form-category.component */"./src/app/theme/adm-master-form-category/adm-master-form-category.component.ts");
    var routes = [{
      path: '',
      component: _adm_master_form_category_component__WEBPACK_IMPORTED_MODULE_3__["AdmMasterFormCategoryComponent"]
    }];
    var AdmMasterFormCategoryRoutingModule = /*#__PURE__*/_createClass(function AdmMasterFormCategoryRoutingModule() {
      _classCallCheck(this, AdmMasterFormCategoryRoutingModule);
    });
    AdmMasterFormCategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdmMasterFormCategoryRoutingModule);

    /***/
  }),
  /***/"./src/app/theme/adm-master-form-category/adm-master-form-category.component.scss": (
  /*!****************************************************************************************!*\
    !*** ./src/app/theme/adm-master-form-category/adm-master-form-category.component.scss ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_theme_admMasterFormCategory_admMasterFormCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2FkbS1tYXN0ZXItZm9ybS1jYXRlZ29yeS9hZG0tbWFzdGVyLWZvcm0tY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  }),
  /***/"./src/app/theme/adm-master-form-category/adm-master-form-category.component.ts": (
  /*!**************************************************************************************!*\
    !*** ./src/app/theme/adm-master-form-category/adm-master-form-category.component.ts ***!
    \**************************************************************************************/
  /*! exports provided: AdmMasterFormCategoryComponent */
  /***/
  function _src_app_theme_admMasterFormCategory_admMasterFormCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdmMasterFormCategoryComponent", function () {
      return AdmMasterFormCategoryComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! angular-datatables */"./node_modules/angular-datatables/index.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! src/app/_services/admin-management.service */"./src/app/_services/admin-management.service.ts");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    var AdmMasterFormCategoryComponent = /*#__PURE__*/function () {
      function AdmMasterFormCategoryComponent(translate, adminManagementService, broadcasterService, fb) {
        var _this = this;
        _classCallCheck(this, AdmMasterFormCategoryComponent);
        this.translate = translate;
        this.adminManagementService = adminManagementService;
        this.broadcasterService = broadcasterService;
        this.fb = fb;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.DataFormFormulir = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        translate.setDefaultLang(localStorage.getItem('lang'));
        this.translate.get('ROOT.no').subscribe(function (l) {
          _this.no = l;
        });
        this.translate.get('ROOT.yes').subscribe(function (l) {
          _this.yes = l;
        });
        this.translate.get('ROOT.delete_failed').subscribe(function (l) {
          _this.failedDel = l;
        });
        this.translate.get('ROOT.delete_confirmation').subscribe(function (l) {
          _this.sure = l;
        });
        this.translate.get('ROOT.confirmation').subscribe(function (l) {
          _this.confirmation = l;
        });
        this.translate.get('ROOT.delete_success').subscribe(function (l) {
          _this.successDel = l;
        });
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translate.setDefaultLang(res.lang);
          _this.translate.get('ROOT.no').subscribe(function (l) {
            _this.no = l;
          });
          _this.translate.get('ROOT.yes').subscribe(function (l) {
            _this.yes = l;
          });
          _this.translate.get('ROOT.delete_failed').subscribe(function (l) {
            _this.failedDel = l;
          });
          _this.translate.get('ROOT.delete_confirmation').subscribe(function (l) {
            _this.sure = l;
          });
          _this.translate.get('ROOT.confirmation').subscribe(function (l) {
            _this.confirmation = l;
          });
          _this.translate.get('ROOT.delete_success').subscribe(function (l) {
            _this.successDel = l;
          });
        });
      }
      return _createClass(AdmMasterFormCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadScheduleDataTable();
        }
      }, {
        key: "createDataDocument",
        value: function createDataDocument() {
          var _this2 = this;
          var nama = this.DataFormFormulir.get('name').value;
          // Memeriksa apakah ID ada untuk menentukan apakah ini operasi edit atau tambah
          if (this.selectionScheduleId !== undefined && this.selectionScheduleId !== '') {
            // Mengedit data yang ada berdasarkan ID
            this.tableData = this.tableData.map(function (item) {
              if (item.id === _this2.selectionScheduleId) {
                return Object.assign({}, item, {
                  nama: nama,
                  status: 1
                }); // Update data yang sesuai dengan ID
              }
              return item; // Kembalikan data lainnya tanpa perubahan
            });
          } else {
            // Menambah data baru jika ID tidak ada
            this.tableData.push({
              id: this.tableData.length + 1,
              nama: nama,
              status: 1
            });
          }
          this.DataFormFormulir.reset();
        }
      }, {
        key: "loadScheduleDataTable",
        value: function loadScheduleDataTable() {
          var _this3 = this;
          this.loadtableProgramData = true;
          this.adminManagementService.getDataFormulir().subscribe(function (response) {
            if (response !== null) {
              _this3.tableData = response.datas;
              _this3.dtTrigger.next(); // Trigger for load datatable
              _this3.loadtableProgramData = false;
            } else {
              _this3.loadtableProgramData = false;
              _this3.tableData = [];
              _this3.dtTrigger.next(); // Trigger for load datatable
            }
          }, function (err) {
            _this3.loadtableProgramData = false;
          });
        }
      }, {
        key: "renderProgramDataTable",
        value: function renderProgramDataTable() {
          this.dtElements.forEach(function (dtElement, index) {
            if (index == 0) {
              dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              });
            }
          });
        }
      }, {
        key: "editData",
        value: function editData(e) {
          this.selectionScheduleId = e.id;
          this.DataFormFormulir.patchValue({
            name: e.nama
          });
        }
      }, {
        key: "batal",
        value: function batal() {
          this.selectionScheduleId = '';
          this.DataFormFormulir.reset();
        }
      }, {
        key: "deleteDataDocument",
        value: function deleteDataDocument(data) {
          var _this4 = this;
          var datas = {
            id: data.id
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.confirmation,
            text: this.sure,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
          }).then(function (confirm) {
            if (confirm.value) {
              _this4.tableData = _this4.tableData.filter(function (item) {
                return item.id !== data.id;
              });
            }
          });
        }
      }]);
    }();
    AdmMasterFormCategoryComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_7__["AdminManagementService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])], AdmMasterFormCategoryComponent.prototype, "dtElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])], AdmMasterFormCategoryComponent.prototype, "dtElement", void 0);
    AdmMasterFormCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-adm-master-form-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./adm-master-form-category.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-master-form-category/adm-master-form-category.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./adm-master-form-category.component.scss */"./src/app/theme/adm-master-form-category/adm-master-form-category.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_7__["AdminManagementService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], AdmMasterFormCategoryComponent);

    /***/
  }),
  /***/"./src/app/theme/adm-master-form-category/adm-master-form-category.module.ts": (
  /*!***********************************************************************************!*\
    !*** ./src/app/theme/adm-master-form-category/adm-master-form-category.module.ts ***!
    \***********************************************************************************/
  /*! exports provided: AdmMasterFormCategoryModule */
  /***/
  function _src_app_theme_admMasterFormCategory_admMasterFormCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdmMasterFormCategoryModule", function () {
      return AdmMasterFormCategoryModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _adm_master_form_category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./adm-master-form-category-routing.module */"./src/app/theme/adm-master-form-category/adm-master-form-category-routing.module.ts");
    /* harmony import */
    var _adm_master_form_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./adm-master-form-category.component */"./src/app/theme/adm-master-form-category/adm-master-form-category.component.ts");
    /* harmony import */
    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/shared/shared.module */"./src/app/shared/shared.module.ts");
    /* harmony import */
    var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! angular-datatables */"./node_modules/angular-datatables/index.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! angular-dual-listbox */"./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
    /* harmony import */
    var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ngx-chips */"./node_modules/ngx-chips/fesm2015/ngx-chips.js");
    /* harmony import */
    var ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ng-select */"./node_modules/ng-select/fesm2015/ng-select.js");
    var AdmMasterFormCategoryModule = /*#__PURE__*/_createClass(function AdmMasterFormCategoryModule() {
      _classCallCheck(this, AdmMasterFormCategoryModule);
    });
    AdmMasterFormCategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_adm_master_form_category_component__WEBPACK_IMPORTED_MODULE_4__["AdmMasterFormCategoryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _adm_master_form_category_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdmMasterFormCategoryRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__["AngularDualListBoxModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"], ng_select__WEBPACK_IMPORTED_MODULE_10__["SelectModule"]]
    })], AdmMasterFormCategoryModule);

    /***/
  })
}]);
//# sourceMappingURL=theme-adm-master-form-category-adm-master-form-category-module-es5.js.map