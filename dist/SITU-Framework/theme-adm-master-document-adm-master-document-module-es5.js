function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-adm-master-document-adm-master-document-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-master-document/adm-master-document.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-master-document/adm-master-document.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeAdmMasterDocumentAdmMasterDocumentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-12\">\n    <app-card cardTitle=\"Master Dokumen\" cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\"\n      [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loader\">\n\n      <div class=\"row p-4\">\n        <div class=\"col-12 col-md-8\">\n          <div class=\"table-responsive pb-1 pr-5\">\n            <table datatable class=\"table table-hover\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                  <th scope=\"col\">{{ 'CONTENT.document-name' | translate}}</th>\n                  <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.active-status' | translate}}</th>\n                  <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"tableData?.length != 0\">\n                <tr *ngFor=\"let data of tableData; let i = index;\">\n                  <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                  <td>{{ data.title }}</td>\n                  <td class=\"center-table\">\n                    <span class=\"badge badge-{{ data.status == 1 ? 'success' : 'danger' }}\">{{\n                      data.status == 1 ? ('ROOT.active' | translate) : ('ROOT.nonactive' | translate)}}\n                    </span>\n                  </td>\n                  <td class=\"center-table\">\n                    <button class=\"btn btn-warning btn-sm btn-round has-ripple\" [placement]=\"'top'\" ngbTooltip=\"{{'ROOT.edit' | translate}}\"\n                      (click)=\"editData(data, 'edit');\">\n                      <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n                    </button>\n                    <button class=\"btn btn-danger btn-sm btn-round has-ripple m-1\" [placement]=\"'top'\"\n                      ngbTooltip=\"{{'ROOT.delete' | translate}}\" (click)=\"deleteDataDocument(data)\">\n                      <i class=\"icofont icofont-ui-delete\"></i> <span class=\"d-sm-none\"> {{'ROOT.detail' | translate}}</span>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n              <tbody *ngIf=\"tableData?.length == 0 && !loadtableApprovalData\">\n                <tr>\n                  <td colspan=\"4\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                </tr>\n              </tbody>\n              <tbody *ngIf=\"tableData?.length == 0 && loadtableApprovalData\">\n                <tr>\n                  <td colspan=\"4\" class=\"no-data-available text-center\">Loading Data....</td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <app-card cardTitle=\"{{'CONTENT.form-data' | translate }}\" [hidHeader]=\"false\" [options]=\"false\">\n            <div class=\"col-12 pt-3\">\n              <form [formGroup]=\"DataFormDocument\" (ngSubmit)=\"createDataDocument()\" class=\"md-float-material form-material\" action=\"javascript:\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group mb-2\">\n                      <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-name' | translate }}</label>\n                      <input type=\"text\" class=\"form-control uppercase\"  name=\"document-name\" required maxlength=\"50\" formControlName=\"name\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-12 pt-3 pl-4 pr-4 pb-2\">\n                  <button class=\"btn btn-info btn-round btn-md btn-block\" [disabled]=\"!DataFormDocument.valid\">\n                    <i class=\"icofont icofont-save pr-2\"></i> Simpan\n                  </button>\n                </div>\n              </form>\n              <div class=\"col-12 pl-4 pr-4\">\n                <button class=\"btn btn-outline-danger btn-round btn-md btn-block \" (click)=\"batal()\" [disabled]=\"!DataFormDocument.valid\">\n                  <i class=\"icofont icofont-close-circled\"></i> Batal\n                </button>\n              </div>\n            </div>\n          </app-card>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/_services/document.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_services/document.service.ts ***!
    \***********************************************/

  /*! exports provided: DocumentService */

  /***/
  function srcApp_servicesDocumentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
      return DocumentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/_services/base.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocumentService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(DocumentService, _base_service__WEBPAC);

      function DocumentService(http) {
        var _this;

        _classCallCheck(this, DocumentService);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(DocumentService).call(this, http));
        _this.namespace = "document";
        return _this;
      }

      _createClass(DocumentService, [{
        key: "getDocuments",
        value: function getDocuments() {
          return this.getApi('fake-data/document-list_id.json');
        }
      }]);

      return DocumentService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

    DocumentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], DocumentService);
    /***/
  },

  /***/
  "./src/app/theme/adm-master-document/adm-master-document-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/theme/adm-master-document/adm-master-document-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: AdmMasterDocumentRoutingModule */

  /***/
  function srcAppThemeAdmMasterDocumentAdmMasterDocumentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmMasterDocumentRoutingModule", function () {
      return AdmMasterDocumentRoutingModule;
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
    /* harmony import */


    var _adm_master_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adm-master-document.component */
    "./src/app/theme/adm-master-document/adm-master-document.component.ts");

    var routes = [{
      path: '',
      component: _adm_master_document_component__WEBPACK_IMPORTED_MODULE_3__["AdmMasterDocumentComponent"]
    }];

    var AdmMasterDocumentRoutingModule = function AdmMasterDocumentRoutingModule() {
      _classCallCheck(this, AdmMasterDocumentRoutingModule);
    };

    AdmMasterDocumentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdmMasterDocumentRoutingModule);
    /***/
  },

  /***/
  "./src/app/theme/adm-master-document/adm-master-document.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/theme/adm-master-document/adm-master-document.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeAdmMasterDocumentAdmMasterDocumentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-title .card-header {\n  border-left: solid #b8d7a3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL2FkbS1tYXN0ZXItZG9jdW1lbnQvYWRtLW1hc3Rlci1kb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvYWRtLW1hc3Rlci1kb2N1bWVudC9hZG0tbWFzdGVyLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2FkbS1tYXN0ZXItZG9jdW1lbnQvYWRtLW1hc3Rlci1kb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGl0bGV7XG4gIC5jYXJkLWhlYWRlcntcbiAgICBib3JkZXItbGVmdDogc29saWQgI2I4ZDdhMztcbiAgfVxufSIsIi5oZWFkZXItdGl0bGUgLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkICNiOGQ3YTM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/theme/adm-master-document/adm-master-document.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/theme/adm-master-document/adm-master-document.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AdmMasterDocumentComponent */

  /***/
  function srcAppThemeAdmMasterDocumentAdmMasterDocumentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmMasterDocumentComponent", function () {
      return AdmMasterDocumentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var src_app_services_document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/document.service */
    "./src/app/_services/document.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_services/broadcaster.service */
    "./src/app/_services/broadcaster.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

    var AdmMasterDocumentComponent =
    /*#__PURE__*/
    function () {
      function AdmMasterDocumentComponent(translate, broadcasterService, DocumentService, fb) {
        var _this2 = this;

        _classCallCheck(this, AdmMasterDocumentComponent);

        this.translate = translate;
        this.broadcasterService = broadcasterService;
        this.DocumentService = DocumentService;
        this.fb = fb;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectionScheduleId = '';
        this.DataFormDocument = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
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
        });
      }

      _createClass(AdmMasterDocumentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dtOptions = {
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
            initComplete: function initComplete() {}
          };
          this.loadScheduleDataTable(); // this.DocumentService.getDocuments().subscribe(item => {
          //    this.dataSource = item.data;
          // })
        }
      }, {
        key: "loadScheduleDataTable",
        value: function loadScheduleDataTable() {
          var _this3 = this;

          this.loadtableProgramData = true;
          this.DocumentService.getDocuments().subscribe(function (response) {
            if (response !== null) {
              console.log(response);
              _this3.tableData = response.data;

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
          console.log(this.tableData);
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
        key: "createDataDocument",
        value: function createDataDocument() {
          var _this4 = this;

          var nama = this.DataFormDocument.get('name').value; // Memeriksa apakah ID ada untuk menentukan apakah ini operasi edit atau tambah

          if (this.selectionScheduleId !== undefined && this.selectionScheduleId !== '') {
            // Mengedit data yang ada berdasarkan ID
            this.tableData = this.tableData.map(function (item) {
              if (item.id === _this4.selectionScheduleId) {
                return Object.assign({}, item, {
                  title: nama,
                  status: 1
                }); // Update data yang sesuai dengan ID
              }

              return item; // Kembalikan data lainnya tanpa perubahan
            });
          } else {
            // Menambah data baru jika ID tidak ada
            this.tableData.push({
              id: this.tableData.length + 1,
              title: nama,
              status: 1
            });
          }

          this.DataFormDocument.reset();
        }
      }, {
        key: "editData",
        value: function editData(e) {
          this.DataFormDocument.patchValue({
            id: e.id,
            name: e.title
          });
        }
      }, {
        key: "batal",
        value: function batal() {
          this.selectionScheduleId = '';
          this.DataFormDocument.reset();
        }
      }, {
        key: "deleteDataDocument",
        value: function deleteDataDocument(data) {
          var _this5 = this;

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
              _this5.tableData = _this5.tableData.filter(function (item) {
                return item.id !== data.id;
              });
            }
          });
        }
      }]);

      return AdmMasterDocumentComponent;
    }();

    AdmMasterDocumentComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__["BroadcasterService"]
      }, {
        type: src_app_services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])], AdmMasterDocumentComponent.prototype, "dtElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])], AdmMasterDocumentComponent.prototype, "dtElement", void 0);
    AdmMasterDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-adm-master-document',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adm-master-document.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-master-document/adm-master-document.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adm-master-document.component.scss */
      "./src/app/theme/adm-master-document/adm-master-document.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_7__["BroadcasterService"], src_app_services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], AdmMasterDocumentComponent);
    /***/
  },

  /***/
  "./src/app/theme/adm-master-document/adm-master-document.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/theme/adm-master-document/adm-master-document.module.ts ***!
    \*************************************************************************/

  /*! exports provided: AdmMasterDocumentModule */

  /***/
  function srcAppThemeAdmMasterDocumentAdmMasterDocumentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmMasterDocumentModule", function () {
      return AdmMasterDocumentModule;
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


    var _adm_master_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adm-master-document.component */
    "./src/app/theme/adm-master-document/adm-master-document.component.ts");
    /* harmony import */


    var _adm_master_document_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./adm-master-document-routing.module */
    "./src/app/theme/adm-master-document/adm-master-document-routing.module.ts");
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


    var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-dual-listbox */
    "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
    /* harmony import */


    var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-chips */
    "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
    /* harmony import */


    var ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-select */
    "./node_modules/ng-select/fesm2015/ng-select.js");

    var AdmMasterDocumentModule = function AdmMasterDocumentModule() {
      _classCallCheck(this, AdmMasterDocumentModule);
    };

    AdmMasterDocumentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_adm_master_document_component__WEBPACK_IMPORTED_MODULE_3__["AdmMasterDocumentComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _adm_master_document_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdmMasterDocumentRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__["AngularDualListBoxModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"], ng_select__WEBPACK_IMPORTED_MODULE_10__["SelectModule"]]
    })], AdmMasterDocumentModule);
    /***/
  }
}]);
//# sourceMappingURL=theme-adm-master-document-adm-master-document-module-es5.js.map