function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-adm-map-prodi-category-document-adm-map-prodi-category-document-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeAdmMapProdiCategoryDocumentAdmMapProdiCategoryDocumentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n   <div class=\"col-12\">\n    <app-card cardTitle=\"Mapping Prodi to Dokumen\" cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\"\n      [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loader\">\n      <form class=\"md-float-material form-material\" [formGroup]=\"documentRequirementsForm\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-3 pl-5\">\n            <label class=\"label\">Pilih Prodi</label>\n            <ng-select [(ngModel)]=\"selectionProdiSelected\" name=\"year\" [options]=\"listSelectionProdi\"\n               [ngClass]=\"'filter'\" [ngModelOptions]=\"{ standalone: true }\" (selected)=\"searchByProdiFk($event)\"></ng-select>\n          </div>\n\n          <div class=\"col-9\" style=\"align-self: center;\">\n            <div class=\"row\">\n              <div class=\"col-10 text-md-right\">\n                <button class=\"btn btn-secondary btn-sm btn-round has-ripple btn-sm \"\n                  (click)=\"goBack()\">\n                  <i class=\"icofont icofont-arrow-left pr-3\"></i> Kembali\n                </button>\n              </div>\n              <div class=\"col-2 text-md-left\">\n                <button class=\"btn btn-outline-success btn-sm btn-round has-ripple btn-sm \"\n                  (click)=\"simpanMapping()\">\n                  <i class=\"icofont icofont-save pr-2\"></i> Simpan\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row set-center\">\n            <div class=\"col-12 col-md-5 divider\"></div>\n            <span class=\"badge badge-success\" style=\"position: relative;top: 8px;\">List Dokumen</span>\n            <div class=\"col-12 col-md-5 divider\"></div>\n        </div>\n        <div class=\"row p-4\">\n          <div class=\"col-12 col-md-4 pt-2\" *ngFor=\"let document of documents; let i = index\">\n            <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" style=\"cursor: pointer;\" [disabled]=\"!selectionProdiSelected\" class=\"custom-control-input\" [id]=\"'customSwitch' + i\" [value]=\"document.id\"\n                (change)=\"onCheckboxChange($event)\" [checked]=\"selectionProdiSelected != null && document.prodi_fk == selectionProdiSelected\">\n              <label class=\"custom-control-label\" [for]=\"'customSwitch' + i\" style=\"cursor: pointer;\">{{ document.title }}</label>\n            </div>\n            <div class=\"row pt-2 pl-5 pr-5 pb-3\">\n              <div class=\"col-6\">\n                <label class=\"custom-control custom-radio custom-control-inline mb-0\">\n                  <input type=\"radio\" class=\"custom-control-input\" [name]=\"'radioGroup' + document.id\" value=\"1\" [disabled]=\"!document.isChecked\" \n                    (change)=\"onRadioChange($event, document.id)\" [checked]=\"selectionProdiSelected != null && document.selectedStatus === 1\">\n                  <label class=\"custom-control-label\">Optional</label>\n                </label>\n              </div>\n              <div class=\"col-6\">\n                <label class=\"custom-control custom-radio custom-control-inline mb-0\">\n                  <input type=\"radio\" class=\"custom-control-input\" [name]=\"'radioGroup' + document.id\" value=\"2\" [disabled]=\"!document.isChecked\"\n                    (change)=\"onRadioChange($event, document.id)\" [checked]=\"selectionProdiSelected != null && document.selectedStatus === 2\">\n                  <label class=\"custom-control-label \">Required</label>\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </app-card>\n   </div>\n </div>";
    /***/
  },

  /***/
  "./src/app/_services/map-category-document.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/_services/map-category-document.service.ts ***!
    \************************************************************/

  /*! exports provided: MapCategoryDocumentService */

  /***/
  function srcApp_servicesMapCategoryDocumentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapCategoryDocumentService", function () {
      return MapCategoryDocumentService;
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

    var MapCategoryDocumentService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(MapCategoryDocumentService, _base_service__WEBPAC);

      function MapCategoryDocumentService(http) {
        var _this;

        _classCallCheck(this, MapCategoryDocumentService);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MapCategoryDocumentService).call(this, http));
        _this.namespace = "map_category_document";
        return _this;
      }

      _createClass(MapCategoryDocumentService, [{
        key: "getListDocument",
        value: function getListDocument() {
          return this.getApi('fake-data/document-list_id.json');
        }
      }, {
        key: "getListProdi",
        value: function getListProdi() {
          return this.getApi('fake-data/prodi-list_id.json');
        }
      }, {
        key: "getListMap",
        value: function getListMap() {
          return this.getApi('fake-data/map-prodi-category.json');
        }
      }]);

      return MapCategoryDocumentService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

    MapCategoryDocumentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    MapCategoryDocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], MapCategoryDocumentService);
    /***/
  },

  /***/
  "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document-routing.module.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document-routing.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: AdmMapProdiCategoryDocumentRoutingModule */

  /***/
  function srcAppThemeAdmMapProdiCategoryDocumentAdmMapProdiCategoryDocumentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmMapProdiCategoryDocumentRoutingModule", function () {
      return AdmMapProdiCategoryDocumentRoutingModule;
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


    var _adm_map_prodi_category_document_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adm-map-prodi-category-document.component */
    "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _adm_map_prodi_category_document_component__WEBPACK_IMPORTED_MODULE_2__["AdmMapProdiCategoryDocumentComponent"]
    }];

    var AdmMapProdiCategoryDocumentRoutingModule = function AdmMapProdiCategoryDocumentRoutingModule() {
      _classCallCheck(this, AdmMapProdiCategoryDocumentRoutingModule);
    };

    AdmMapProdiCategoryDocumentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AdmMapProdiCategoryDocumentRoutingModule);
    /***/
  },

  /***/
  "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeAdmMapProdiCategoryDocumentAdmMapProdiCategoryDocumentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.center-table {\n  text-align: center;\n}\n\n.center-text {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: center;\n}\n\n.divider {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.set-center {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL2FkbS1tYXAtcHJvZGktY2F0ZWdvcnktZG9jdW1lbnQvYWRtLW1hcC1wcm9kaS1jYXRlZ29yeS1kb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvYWRtLW1hcC1wcm9kaS1jYXRlZ29yeS1kb2N1bWVudC9hZG0tbWFwLXByb2RpLWNhdGVnb3J5LWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNDLDZDQUFBO0FDQ0Q7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvYWRtLW1hcC1wcm9kaS1jYXRlZ29yeS1kb2N1bWVudC9hZG0tbWFwLXByb2RpLWNhdGVnb3J5LWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxudGgge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLmNlbnRlci10YWJsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbnRlci10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdmlkZXJ7XG4gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpOyBcbn1cblxuLnNldC1jZW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG59IiwidGQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxudGgge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLmNlbnRlci10YWJsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbnRlci10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG5cbi5zZXQtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: AdmMapProdiCategoryDocumentComponent */

  /***/
  function srcAppThemeAdmMapProdiCategoryDocumentAdmMapProdiCategoryDocumentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmMapProdiCategoryDocumentComponent", function () {
      return AdmMapProdiCategoryDocumentComponent;
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


    var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/admin-management.service */
    "./src/app/_services/admin-management.service.ts");
    /* harmony import */


    var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/participant.service */
    "./src/app/_services/participant.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_services_map_category_document_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/_services/map-category-document.service */
    "./src/app/_services/map-category-document.service.ts");

    var AdmMapProdiCategoryDocumentComponent =
    /*#__PURE__*/
    function () {
      function AdmMapProdiCategoryDocumentComponent(translateService, broadcasterService, chartService, userService, fb, location, mapCategoryDocumentService // private mapCategoryDocumentService: MapCategoryDocumentService
      ) {
        _classCallCheck(this, AdmMapProdiCategoryDocumentComponent);

        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.userService = userService;
        this.fb = fb;
        this.location = location;
        this.mapCategoryDocumentService = mapCategoryDocumentService;
        this.documents = [];
        this.terpilih = [];
        this.filteredData = [];
        this.checkedDocuments = [];
        this.dtOptions = [];
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translateService.setDefaultLang(res.lang);
        });
        this.documentRequirementsForm = this.fb.group({
          selectionProdi: [''],
          sifatDokumen: this.fb.array([]),
          selectedDocuments: this.fb.array([]) // FormArray untuk checkbox

        });
        this.programActive = 0;
        this.selectionPathActive = 0;
        this.loader = false;
        this.loading = false; // this.selectedSelectionPath = '';

        this.selectedSelectionPathParticipant = '';
      }

      _createClass(AdmMapProdiCategoryDocumentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.loadProfile();
          this.loadDokument();
          this.mapCategoryDocumentService.getListProdi().subscribe(function (item) {
            _this2.listSelectionProdi = item.data.map(function (e) {
              return {
                value: e.id,
                label: e.nama_prodi
              };
            });
          });
          this.mapCategoryDocumentService.getListMap().subscribe(function (item) {
            _this2.listSelectionMap = item.datas; //  this.listSelectionMap = item.data.map((e)=>{
            //   return { value : e.id, label : e.nama_prodi}
            //  })
          });
        }
      }, {
        key: "loadDokument",
        value: function loadDokument() {
          var _this3 = this;

          this.mapCategoryDocumentService.getListDocument().subscribe(function (item) {
            _this3.documents = item.data;
          });
        } // onRadioChange(event: Event, documentId: number) {
        //     const input = event.target as HTMLInputElement;
        //     const status = input.value;
        //     const document = this.documents.find(doc => doc.id === documentId);
        //     if (document) {
        //       document.selectedStatus = status;
        //     }
        //     console.log(document)
        //   }

      }, {
        key: "simpanMapping",
        value: function simpanMapping() {
          if (this.terpilih.length == 0) {
            this.broadcasterService.notifBroadcast(true, {
              title: "Gagal",
              msg: "Mapping Dokumen Tidak Boleh Kosong !",
              timeout: 3000,
              theme: "default",
              position: "top-right",
              type: "error"
            });
            return;
          }

          var result = {
            prodi: this.selectionProdiSelected,
            terpilih: this.terpilih
          };
          console.log(result);
        }
      }, {
        key: "onCheckboxChange",
        value: function onCheckboxChange(event) {
          var input = event.target;
          var isChecked = input.checked;
          var documentId = Number(input.value);

          if (isChecked) {
            // Jika checkbox di-check, tambahkan dokumen ke array 'terpilih'
            var document = this.documents.find(function (doc) {
              return doc.id === documentId;
            });

            if (document) {
              this.terpilih.push({
                dokumen_id: documentId,
                sifatdokumen: document.selectedStatus || 0 // Default to 0 if no status is selected

              });
              document.isChecked = true; // Track checkbox state
            }
          } else {
            // Jika checkbox di-uncheck, hapus dokumen dari array 'terpilih'
            this.terpilih = this.terpilih.filter(function (doc) {
              return doc.dokumen_id !== documentId;
            }); // Reset status dokumen dan nonaktifkan radio button

            var _document = this.documents.find(function (doc) {
              return doc.id === documentId;
            });

            if (_document) {
              _document.selectedStatus = 0; // Reset status

              _document.isChecked = false; // Track checkbox state
            }
          }
        }
      }, {
        key: "onRadioChange",
        value: function onRadioChange(event, documentId) {
          var input = event.target;
          var status = Number(input.value);
          var document = this.documents.find(function (doc) {
            return doc.id === documentId;
          });

          if (document) {
            document.selectedStatus = status; // Perbarui status dokumen di array 'terpilih'

            var index = this.terpilih.findIndex(function (doc) {
              return doc.dokumen_id === documentId;
            });

            if (index !== -1) {
              this.terpilih[index].sifatdokumen = status;
            } else {
              // Jika dokumen belum ada dalam 'terpilih', tambahkan
              this.terpilih.push({
                dokumen_id: documentId,
                sifatdokumen: status
              });
            }
          }
        }
      }, {
        key: "searchByProdiFk",
        value: function searchByProdiFk(prodi_fk) {
          var _this4 = this;

          this.selectionProdiSelected = prodi_fk.value;
          this.filteredData = this.listSelectionMap.filter(function (item) {
            return item.prodi_fk === prodi_fk.value;
          });

          if (this.filteredData.length > 0) {
            this.documents.forEach(function (doc) {
              var match = _this4.filteredData.find(function (element) {
                return element.dokumen_fk === doc.id;
              });

              if (match) {
                doc.prodi_fk = match.prodi_fk;
                doc.isChecked = true;
                doc.selectedStatus = match.selectedStatus; // Update or add to terpilih

                var existingIndex = _this4.terpilih.findIndex(function (d) {
                  return d.dokumen_id === doc.id;
                });

                if (existingIndex !== -1) {
                  _this4.terpilih[existingIndex].sifatdokumen = doc.selectedStatus;
                } else {
                  _this4.terpilih.push({
                    dokumen_id: doc.id,
                    sifatdokumen: doc.selectedStatus
                  });
                }
              } else {
                doc.isChecked = false;
                doc.selectedStatus = 0;
              }
            });
          } else {
            this.documents.forEach(function (doc) {
              doc.selectedStatus = 0; // Reset status

              doc.isChecked = false;
            });
            this.terpilih = [];
          }

          console.log(this.documents);
        }
      }, {
        key: "loadProfile",
        value: function loadProfile() {
          var _this5 = this;

          this.userData = JSON.parse(localStorage.getItem('userProfile'));

          if (this.userData.username.includes("@")) {
            this.userType = 0;
            this.loading = true;
            this.userService.getParticipantDetailData(this.userData.email).subscribe(function (res) {
              _this5.userService.getRegistrationListParticipantData("participant_id=".concat(res.participant_id)).subscribe(function (response) {
                if (response.data.length != 0) {
                  _this5.participantFlag = 1;
                  _this5.loading = false;
                } else {
                  _this5.participantFlag = 0;
                  _this5.loading = false;
                }
              });
            });
          } else {
            this.userType = 1;
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return AdmMapProdiCategoryDocumentComponent;
    }();

    AdmMapProdiCategoryDocumentComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"]
      }, {
        type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"]
      }, {
        type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }, {
        type: src_app_services_map_category_document_service__WEBPACK_IMPORTED_MODULE_9__["MapCategoryDocumentService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AdmMapProdiCategoryDocumentComponent.prototype, "dtElements", void 0);
    AdmMapProdiCategoryDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adm-map-prodi-category-document',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adm-map-prodi-category-document.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adm-map-prodi-category-document.component.scss */
      "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"], src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"], src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_app_services_map_category_document_service__WEBPACK_IMPORTED_MODULE_9__["MapCategoryDocumentService"] // private mapCategoryDocumentService: MapCategoryDocumentService
    ])], AdmMapProdiCategoryDocumentComponent);
    /***/
  },

  /***/
  "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: AdmMapProdiCategoryDocumentModule */

  /***/
  function srcAppThemeAdmMapProdiCategoryDocumentAdmMapProdiCategoryDocumentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmMapProdiCategoryDocumentModule", function () {
      return AdmMapProdiCategoryDocumentModule;
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


    var _adm_map_prodi_category_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adm-map-prodi-category-document.component */
    "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.ts");
    /* harmony import */


    var _adm_map_prodi_category_document_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./adm-map-prodi-category-document-routing.module */
    "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document-routing.module.ts");
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

    var AdmMapProdiCategoryDocumentModule = function AdmMapProdiCategoryDocumentModule() {
      _classCallCheck(this, AdmMapProdiCategoryDocumentModule);
    };

    AdmMapProdiCategoryDocumentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_adm_map_prodi_category_document_component__WEBPACK_IMPORTED_MODULE_3__["AdmMapProdiCategoryDocumentComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _adm_map_prodi_category_document_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdmMapProdiCategoryDocumentRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__["AngularDualListBoxModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"], ng_select__WEBPACK_IMPORTED_MODULE_10__["SelectModule"]]
    })], AdmMapProdiCategoryDocumentModule);
    /***/
  }
}]);
//# sourceMappingURL=theme-adm-map-prodi-category-document-adm-map-prodi-category-document-module-es5.js.map