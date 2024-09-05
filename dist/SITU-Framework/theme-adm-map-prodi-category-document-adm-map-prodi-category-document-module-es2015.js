(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-adm-map-prodi-category-document-adm-map-prodi-category-document-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n   <div class=\"col-12\">\n    <app-card cardTitle=\"Mapping Prodi to Dokumen\" cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\"\n      [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loader\">\n      <form class=\"md-float-material form-material\" [formGroup]=\"documentRequirementsForm\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-3 pl-5\">\n            <label class=\"label\">Pilih Prodi</label>\n            <ng-select [(ngModel)]=\"selectionProdiSelected\" name=\"year\" [options]=\"listSelectionProdi\"\n               [ngClass]=\"'filter'\" [ngModelOptions]=\"{ standalone: true }\" (selected)=\"searchByProdiFk($event)\"></ng-select>\n          </div>\n\n          <div class=\"col-9\" style=\"align-self: center;\">\n            <div class=\"row\">\n              <div class=\"col-10 text-md-right\">\n                <button class=\"btn btn-secondary btn-sm btn-round has-ripple btn-sm \"\n                  (click)=\"goBack()\">\n                  <i class=\"icofont icofont-arrow-left pr-3\"></i> Kembali\n                </button>\n              </div>\n              <div class=\"col-2 text-md-left\">\n                <button class=\"btn btn-outline-success btn-sm btn-round has-ripple btn-sm \"\n                  (click)=\"simpanMapping()\">\n                  <i class=\"icofont icofont-save pr-2\"></i> Simpan\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row set-center\">\n            <div class=\"col-12 col-md-5 divider\"></div>\n            <span class=\"badge badge-success\" style=\"position: relative;top: 8px;\">List Dokumen</span>\n            <div class=\"col-12 col-md-5 divider\"></div>\n        </div>\n        <div class=\"row p-4\">\n          <div class=\"col-12 col-md-4 pt-2\" *ngFor=\"let document of documents; let i = index\">\n            <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" style=\"cursor: pointer;\" [disabled]=\"!selectionProdiSelected\" class=\"custom-control-input\" [id]=\"'customSwitch' + i\" [value]=\"document.id\"\n                (change)=\"onCheckboxChange($event)\" [checked]=\"selectionProdiSelected != null && document.prodi_fk == selectionProdiSelected\">\n              <label class=\"custom-control-label\" [for]=\"'customSwitch' + i\" style=\"cursor: pointer;\">{{ document.title }}</label>\n            </div>\n            <div class=\"row pt-2 pl-5 pr-5 pb-3\">\n              <div class=\"col-6\">\n                <label class=\"custom-control custom-radio custom-control-inline mb-0\">\n                  <input type=\"radio\" class=\"custom-control-input\" [name]=\"'radioGroup' + document.id\" value=\"1\" [disabled]=\"!document.isChecked\" \n                    (change)=\"onRadioChange($event, document.id)\" [checked]=\"selectionProdiSelected != null && document.selectedStatus === 1\">\n                  <label class=\"custom-control-label\">Optional</label>\n                </label>\n              </div>\n              <div class=\"col-6\">\n                <label class=\"custom-control custom-radio custom-control-inline mb-0\">\n                  <input type=\"radio\" class=\"custom-control-input\" [name]=\"'radioGroup' + document.id\" value=\"2\" [disabled]=\"!document.isChecked\"\n                    (change)=\"onRadioChange($event, document.id)\" [checked]=\"selectionProdiSelected != null && document.selectedStatus === 2\">\n                  <label class=\"custom-control-label \">Required</label>\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </app-card>\n   </div>\n </div>");

/***/ }),

/***/ "./src/app/_services/map-category-document.service.ts":
/*!************************************************************!*\
  !*** ./src/app/_services/map-category-document.service.ts ***!
  \************************************************************/
/*! exports provided: MapCategoryDocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCategoryDocumentService", function() { return MapCategoryDocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/_services/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let MapCategoryDocumentService = class MapCategoryDocumentService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http);
        this.namespace = "map_category_document";
    }
    getListDocument() {
        return this.getApi('fake-data/document-list_id.json');
    }
    getListProdi() {
        return this.getApi('fake-data/prodi-list_id.json');
    }
    getListMap() {
        return this.getApi('fake-data/map-prodi-category.json');
    }
};
MapCategoryDocumentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MapCategoryDocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], MapCategoryDocumentService);



/***/ }),

/***/ "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AdmMapProdiCategoryDocumentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMapProdiCategoryDocumentRoutingModule", function() { return AdmMapProdiCategoryDocumentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adm_map_prodi_category_document_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-map-prodi-category-document.component */ "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _adm_map_prodi_category_document_component__WEBPACK_IMPORTED_MODULE_2__["AdmMapProdiCategoryDocumentComponent"]
    }
];
let AdmMapProdiCategoryDocumentRoutingModule = class AdmMapProdiCategoryDocumentRoutingModule {
};
AdmMapProdiCategoryDocumentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AdmMapProdiCategoryDocumentRoutingModule);



/***/ }),

/***/ "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.center-table {\n  text-align: center; }\n\n.center-text {\n  display: inline-flex;\n  text-align: center; }\n\n.divider {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n\n.set-center {\n  display: flex;\n  justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvdGhlbWUvYWRtLW1hcC1wcm9kaS1jYXRlZ29yeS1kb2N1bWVudC9hZG0tbWFwLXByb2RpLWNhdGVnb3J5LWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDQyw2Q0FBNkMsRUFBQTs7QUFHOUM7RUFDRSxhQUFhO0VBQ2IsNkJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9hZG0tbWFwLXByb2RpLWNhdGVnb3J5LWRvY3VtZW50L2FkbS1tYXAtcHJvZGktY2F0ZWdvcnktZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG50aCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uY2VudGVyLXRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2VudGVyLXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2aWRlcntcbiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7IFxufVxuXG4uc2V0LWNlbnRlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AdmMapProdiCategoryDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMapProdiCategoryDocumentComponent", function() { return AdmMapProdiCategoryDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/participant.service */ "./src/app/_services/participant.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_map_category_document_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/map-category-document.service */ "./src/app/_services/map-category-document.service.ts");










let AdmMapProdiCategoryDocumentComponent = class AdmMapProdiCategoryDocumentComponent {
    constructor(translateService, broadcasterService, chartService, userService, fb, location, mapCategoryDocumentService
    // private mapCategoryDocumentService: MapCategoryDocumentService
    ) {
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
        broadcasterService.changeLangBroadcast$.subscribe(res => {
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
        this.loading = false;
        // this.selectedSelectionPath = '';
        this.selectedSelectionPathParticipant = '';
    }
    ngOnInit() {
        this.loadProfile();
        this.loadDokument();
        this.mapCategoryDocumentService.getListProdi().subscribe(item => {
            this.listSelectionProdi = item.data.map((e) => {
                return { value: e.id, label: e.nama_prodi };
            });
        });
        this.mapCategoryDocumentService.getListMap().subscribe(item => {
            this.listSelectionMap = item.datas;
            //  this.listSelectionMap = item.data.map((e)=>{
            //   return { value : e.id, label : e.nama_prodi}
            //  })
        });
    }
    loadDokument() {
        this.mapCategoryDocumentService.getListDocument().subscribe(item => {
            this.documents = item.data;
        });
    }
    // onRadioChange(event: Event, documentId: number) {
    //     const input = event.target as HTMLInputElement;
    //     const status = input.value;
    //     const document = this.documents.find(doc => doc.id === documentId);
    //     if (document) {
    //       document.selectedStatus = status;
    //     }
    //     console.log(document)
    //   }
    simpanMapping() {
        if (this.terpilih.length == 0) {
            this.broadcasterService.notifBroadcast(true, {
                title: "Gagal",
                msg: "Mapping Dokumen Tidak Boleh Kosong !",
                timeout: 3000,
                theme: "default",
                position: "top-right",
                type: "error",
            });
            return;
        }
        const result = {
            prodi: this.selectionProdiSelected,
            terpilih: this.terpilih
        };
        console.log(result);
    }
    onCheckboxChange(event) {
        const input = event.target;
        const isChecked = input.checked;
        const documentId = Number(input.value);
        if (isChecked) {
            // Jika checkbox di-check, tambahkan dokumen ke array 'terpilih'
            const document = this.documents.find(doc => doc.id === documentId);
            if (document) {
                this.terpilih.push({
                    dokumen_id: documentId,
                    sifatdokumen: document.selectedStatus || 0 // Default to 0 if no status is selected
                });
                document.isChecked = true; // Track checkbox state
            }
        }
        else {
            // Jika checkbox di-uncheck, hapus dokumen dari array 'terpilih'
            this.terpilih = this.terpilih.filter(doc => doc.dokumen_id !== documentId);
            // Reset status dokumen dan nonaktifkan radio button
            const document = this.documents.find(doc => doc.id === documentId);
            if (document) {
                document.selectedStatus = 0; // Reset status
                document.isChecked = false; // Track checkbox state
            }
        }
    }
    onRadioChange(event, documentId) {
        const input = event.target;
        const status = Number(input.value);
        const document = this.documents.find(doc => doc.id === documentId);
        if (document) {
            document.selectedStatus = status;
            // Perbarui status dokumen di array 'terpilih'
            const index = this.terpilih.findIndex(doc => doc.dokumen_id === documentId);
            if (index !== -1) {
                this.terpilih[index].sifatdokumen = status;
            }
            else {
                // Jika dokumen belum ada dalam 'terpilih', tambahkan
                this.terpilih.push({
                    dokumen_id: documentId,
                    sifatdokumen: status
                });
            }
        }
    }
    searchByProdiFk(prodi_fk) {
        this.selectionProdiSelected = prodi_fk.value;
        this.filteredData = this.listSelectionMap.filter(item => item.prodi_fk === prodi_fk.value);
        if (this.filteredData.length > 0) {
            this.documents.forEach(doc => {
                const match = this.filteredData.find(element => element.dokumen_fk === doc.id);
                if (match) {
                    doc.prodi_fk = match.prodi_fk;
                    doc.isChecked = true;
                    doc.selectedStatus = match.selectedStatus;
                    // Update or add to terpilih
                    const existingIndex = this.terpilih.findIndex(d => d.dokumen_id === doc.id);
                    if (existingIndex !== -1) {
                        this.terpilih[existingIndex].sifatdokumen = doc.selectedStatus;
                    }
                    else {
                        this.terpilih.push({
                            dokumen_id: doc.id,
                            sifatdokumen: doc.selectedStatus
                        });
                    }
                }
                else {
                    doc.isChecked = false;
                    doc.selectedStatus = 0;
                }
            });
        }
        else {
            this.documents.forEach(doc => {
                doc.selectedStatus = 0; // Reset status
                doc.isChecked = false;
            });
            this.terpilih = [];
        }
        console.log(this.documents);
    }
    loadProfile() {
        this.userData = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userData.username.includes("@")) {
            this.userType = 0;
            this.loading = true;
            this.userService.getParticipantDetailData(this.userData.email).subscribe(res => {
                this.userService.getRegistrationListParticipantData(`participant_id=${res.participant_id}`).subscribe(response => {
                    if (response.data.length != 0) {
                        this.participantFlag = 1;
                        this.loading = false;
                    }
                    else {
                        this.participantFlag = 0;
                        this.loading = false;
                    }
                });
            });
        }
        else {
            this.userType = 1;
        }
    }
    goBack() {
        this.location.back();
    }
};
AdmMapProdiCategoryDocumentComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: src_app_services_map_category_document_service__WEBPACK_IMPORTED_MODULE_9__["MapCategoryDocumentService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], AdmMapProdiCategoryDocumentComponent.prototype, "dtElements", void 0);
AdmMapProdiCategoryDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adm-map-prodi-category-document',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adm-map-prodi-category-document.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adm-map-prodi-category-document.component.scss */ "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
        src_app_services_map_category_document_service__WEBPACK_IMPORTED_MODULE_9__["MapCategoryDocumentService"]
        // private mapCategoryDocumentService: MapCategoryDocumentService
    ])
], AdmMapProdiCategoryDocumentComponent);



/***/ }),

/***/ "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: AdmMapProdiCategoryDocumentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMapProdiCategoryDocumentModule", function() { return AdmMapProdiCategoryDocumentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _adm_map_prodi_category_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm-map-prodi-category-document.component */ "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.component.ts");
/* harmony import */ var _adm_map_prodi_category_document_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adm-map-prodi-category-document-routing.module */ "./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/fesm2015/ng-select.js");











let AdmMapProdiCategoryDocumentModule = class AdmMapProdiCategoryDocumentModule {
};
AdmMapProdiCategoryDocumentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_adm_map_prodi_category_document_component__WEBPACK_IMPORTED_MODULE_3__["AdmMapProdiCategoryDocumentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _adm_map_prodi_category_document_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdmMapProdiCategoryDocumentRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"],
            angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__["AngularDualListBoxModule"],
            ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_10__["SelectModule"]
        ]
    })
], AdmMapProdiCategoryDocumentModule);



/***/ })

}]);
//# sourceMappingURL=theme-adm-map-prodi-category-document-adm-map-prodi-category-document-module-es2015.js.map