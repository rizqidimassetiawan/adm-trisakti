(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-adm-mr-new-student-data-adm-mr-new-student-data-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-card [hidHeader]=\"true\" cardTitle=\"{{ 'MENU.program-data' | translate }}\" cardClass=\"card-datatable\"\n      headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loadtableProgramData\">\n      <form class=\"md-float-material form-material\" action=\"javascript:\">\n        <app-filter-container [loading]=\"false\">\n          <div class=\"col-12 col-md-3\">\n            <ng-select name=\"year\" [allowClear]=\"false\" [placeholder]=\"'CONTENT.selection-path-choosing' | translate\"\n              [ngClass]=\"'filter'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectionPathSelected\"\n              [options]=\"listSelectionPath\" (selected)=\"applyFilter($event)\" [ngModelOptions]=\"{standalone: true}\">\n            </ng-select>\n          </div>\n          <!-- <div class=\"col-12 col-md-3 ml-auto\">\n          <div class=\"row pl-3 pr-3\">\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-outline-warning btn-sm btn-block\" [disabled]=\"!selectionPathSelected || !mappingPathYearSelected\" (click)=\"resetFilters()\">\n                <i class=\"icofont icofont-refresh\"></i> {{ 'CONTENT.reset-filter' | translate }}\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-outline-info btn-sm btn-block\" [disabled]=\"!selectionPathSelected || !mappingPathYearSelected\" (click)=\"applyFilters(activeStatusPassingGradeSelected, mappingPathYearSelected)\">\n                <i class=\"icofont icofont-filter\"></i> {{ 'CONTENT.apply-filter' | translate }}\n              </button>\n            </div>\n          </div>\n        </div> -->\n        </app-filter-container>\n        <div *ngIf=\"isApplyFilter\" class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-3\"></div>\n          <div class=\"col-12 col-md-9 text-center text-md-right\">\n            <button class=\"btn btn-outline-success btn-sm btn-round has-ripple btn-sm\"\n              (click)=\"showModalDocument()\">\n              <i class=\"icofont icofont-plus\"></i>\n              {{ \"CONTENT.add-data\" | translate }}\n            </button>\n          </div>\n        </div>\n        </div>\n      </form>\n      <br />\n      <div *ngIf=\"isApplyFilter\" class=\"table-responsive pb-1\">\n        <table datatable class=\"table table-hover\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" style=\"padding-left: 10px; text-align: center\">\n                {{ \"CONTENT.no\" | translate }}\n              </th>\n              <th scope=\"col\">{{ \"CONTENT.document-requirement\" | translate }}</th>\n              <th scope=\"col\" class=\"center-table\">\n                {{ \"CONTENT.action\" | translate }}\n              </th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tableData?.length != 0\">\n            <tr *ngFor=\"let data of tableData; let i = index\">\n              <th scope=\"row\" style=\"padding-left: 10px; text-align: center\">\n                {{ i + 1 }}\n              </th>\n              <td>{{ data.new_student_document_type }}</td>\n              <td class=\"center-table\">\n                <button class=\"btn btn-outline-danger btn-sm btn-round has-ripple\" (click)=\"deleteDocumentData(data)\" [placement]=\"'left'\"  ngbTooltip=\"{{'CONTENT.delete-requirement-doc' | translate}}\">\n                  <i class=\"icofont icofont-ui-delete\"></i>\n                  <span class=\"d-sm-none\">\n                    {{ \"ROOT.delete\" | translate }}</span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableData?.length == 0 && !loadtableProgramData\">\n            <tr>\n              <td colspan=\"3\" class=\"no-data-available text-center\">\n                <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableData?.length == 0 && loadtableProgramData\">\n            <tr>\n              <td colspan=\"3\" class=\"no-data-available text-center\">\n                Loading Data....\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"!isApplyFilter\" class=\"text-center\">\n        <div class=\"col-12 text-center pt-3 pb-1\">\n          <app-no-data-found message=\"{{ 'CONTENT.choose_approval_filter' | translate }}\"></app-no-data-found>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n<!-- Forms Modal -->\n<app-ui-modal #myPersistenceModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [loading]=\"loading\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ \"ROOT.add\" | translate}} {{ \"MENU.document-new-student\" | translate }}\n    </h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeModalDocument()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"documentForm\" (ngSubmit)=\"createDocumentData()\" class=\"md-float-material form-material\"\n      action=\"javascript:\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group col-md-12\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ \"CONTENT.document-requirement\" | translate\n              }}<span style=\"color: red\">*</span></label>\n              <ng-select [placeholder]=\"'CONTENT.document-requirement'|translate\" formControlName=\"docname\"\n              [(ngModel)]=\"documentSelected\" [ngClass]=\"!documentSelected?'filter-dropdown is-invalid':(documentSelected?'filter-dropdown is-valid':'filter-dropdown')\"\n              [notFoundMsg]=\"'CONTENT.document-name'|translate\" name=\"student_foreign\" [options]=\"listDocuments\">\n            </ng-select>\n            <label *ngIf=\"!documentSelected\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n              translate }}</label>\n          </div>\n          <div class=\"form-group mb-0 mt-2 text-right\">\n              <button type=\"submit\" class=\"btn btn-success btn-sm m-1\" [disabled]=\"!documentForm.valid || loading\">\n                <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n                  class=\"icofont icofont-location-arrow\"></i></span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n");

/***/ }),

/***/ "./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdmMrNewStudentDataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMrNewStudentDataRoutingModule", function() { return AdmMrNewStudentDataRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adm_mr_new_student_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-mr-new-student-data.component */ "./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _adm_mr_new_student_data_component__WEBPACK_IMPORTED_MODULE_2__["AdmMrNewStudentDataComponent"]
    }
];
let AdmMrNewStudentDataRoutingModule = class AdmMrNewStudentDataRoutingModule {
};
AdmMrNewStudentDataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AdmMrNewStudentDataRoutingModule);



/***/ }),

/***/ "./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.center-table {\n  text-align: center;\n}\n\n.width {\n  max-width: 370px;\n  text-align: justify;\n}\n\ntextarea {\n  width: 100%;\n  height: 70px;\n  padding: 5px 5px;\n  padding-top: 2px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: transparent;\n  font-size: 13px;\n  color: grey;\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL2FkbS1tci1uZXctc3R1ZGVudC1kYXRhL2FkbS1tci1uZXctc3R1ZGVudC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9hZG0tbXItbmV3LXN0dWRlbnQtZGF0YS9hZG0tbXItbmV3LXN0dWRlbnQtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFDQyxrQkFBQTtBQ0dEOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2FkbS1tci1uZXctc3R1ZGVudC1kYXRhL2FkbS1tci1uZXctc3R1ZGVudC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGR7XG4gIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG50aHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5jZW50ZXItdGFibGV7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndpZHRoe1xuICBtYXgtd2lkdGg6IDM3MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOmdyZXk7XG4gIHJlc2l6ZTogbm9uZTtcbn0iLCJ0ZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG50aCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uY2VudGVyLXRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2lkdGgge1xuICBtYXgtd2lkdGg6IDM3MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyZXk7XG4gIHJlc2l6ZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdmMrNewStudentDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMrNewStudentDataComponent", function() { return AdmMrNewStudentDataComponent; });
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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let AdmMrNewStudentDataComponent = class AdmMrNewStudentDataComponent {
    constructor(translate, broadcasterService, chartService, appService, router, fb, http) {
        this.translate = translate;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.appService = appService;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.documentForm = this.fb.group({
            docname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
        translate.setDefaultLang(localStorage.getItem('lang'));
        this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
        this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
        this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
        this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
        this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
        this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translate.setDefaultLang(res.lang);
            this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
            this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
            this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
            this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
            this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
            this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
        });
        this.loading = false;
        this.isApplyFilter = false;
        this.tableData = [];
    }
    get f() { return this.documentForm.controls; }
    ngOnInit() {
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
            initComplete: () => {
            }
        };
        this.loadFilterSelectionPath();
        this.loadFilterDocument();
    }
    loadFilterSelectionPath() {
        this.chartService.getSelectionPathAdmin(`?active_status=1`).subscribe((res) => {
            this.listSelectionPath = res && res.map((value) => {
                const { selection_path_id, name } = value;
                return { value: selection_path_id.toString(), label: name };
            });
        });
    }
    loadFilterDocument() {
        this.chartService.getNewStudentDocument().subscribe((res) => {
            this.listDocuments = res && res.map((value) => {
                const { id, name } = value;
                return { value: id.toString(), label: name };
            });
        });
    }
    applyFilter(event) {
        this.isApplyFilter = true;
        this.selectionPathId = event.value;
        this.renderDocumentDataTable();
    }
    showModalDocument() {
        this.myPersistenceModal.show();
    }
    closeModalDocument() {
        this.myPersistenceModal.hide();
        this.documentForm.reset();
    }
    createDocumentData() {
        if (this.documentForm.valid) {
            this.loading = true;
            const payload = {
                selection_path_id: this.selectionPathId,
                new_student_document_type_id: this.documentSelected
            };
            this.chartService.createMappingDocNewStudent(payload).subscribe(res => {
                if (res.status == 'Success') {
                    this.loading = false;
                    this.renderDocumentDataTable();
                    this.closeModalDocument();
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Sukses',
                        msg: res.message,
                        timeout: 5000,
                        theme: "default",
                        position: "top-right",
                        type: "success",
                    });
                }
                else {
                    this.loading = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: res.status,
                        msg: res.message,
                        timeout: 5000,
                        theme: "default",
                        position: "top-right",
                        type: "error",
                    });
                }
            }, (reason) => {
                this.broadcasterService.notifBroadcast(true, {
                    title: "Gagal",
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: "default",
                    position: "top-right",
                    type: "error",
                });
                this.loading = false;
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                title: 'Failed',
                text: 'Masih ada data yang belum lengkap',
                type: 'error',
                allowOutsideClick: false,
            });
        }
    }
    loadDocumentDataTable() {
        this.loadtableProgramData = true;
        this.chartService.getDocumentNewStudent(`?selection_path_id=${this.selectionPathId}`).subscribe(response => {
            if (response !== null) {
                this.tableData = response;
                this.dtTrigger.next(); // Trigger for load datatable
                this.loadtableProgramData = false;
            }
            else {
                this.loadtableProgramData = false;
                this.tableData = [];
                this.dtTrigger.next(); // Trigger for load datatable
            }
        }, err => {
            this.loadtableProgramData = false;
        });
    }
    reset() {
        this.documentForm.reset();
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
    renderDocumentDataTable() {
        if (this.tableData.length == 0) {
            this.loadDocumentDataTable();
        }
        else {
            this.dtElements.forEach((dtElement, index) => {
                if (index == 0) {
                    dtElement.dtInstance.then((dtInstance) => {
                        dtInstance.destroy();
                        this.loadDocumentDataTable();
                    });
                }
            });
        }
    }
    deleteDocumentData(data) {
        const datas = {
            id: data.id
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.confirmation,
            text: this.sure,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
        }).then((confirm) => {
            if (confirm.value) {
                this.loadtableProgramData = true;
                this.chartService.deleteMappingDocNewStudent(datas).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                                position: 'center',
                                type: 'success',
                                title: this.successDel,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.renderDocumentDataTable();
                            this.loadtableProgramData = false;
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                                position: 'center',
                                type: 'error',
                                title: this.failedDel,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.loadtableProgramData = false;
                        }
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                            position: 'center',
                            type: 'error',
                            title: this.failedDel,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        this.loadtableProgramData = false;
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
};
AdmMrNewStudentDataComponent.ctorParameters = () => [
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
], AdmMrNewStudentDataComponent.prototype, "dtElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
], AdmMrNewStudentDataComponent.prototype, "dtElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myPersistenceModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdmMrNewStudentDataComponent.prototype, "myPersistenceModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteProgramModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdmMrNewStudentDataComponent.prototype, "deleteProgramModal", void 0);
AdmMrNewStudentDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adm-mr-new-student-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adm-mr-new-student-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adm-mr-new-student-data.component.scss */ "./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"],
        src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
], AdmMrNewStudentDataComponent);



/***/ }),

/***/ "./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdmMrNewStudentDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMrNewStudentDataModule", function() { return AdmMrNewStudentDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _adm_mr_new_student_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adm-mr-new-student-data.component */ "./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.component.ts");
/* harmony import */ var _adm_mr_new_student_data_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adm-mr-new-student-data-routing.module */ "./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/fesm2015/ng-select.js");














let AdmMrNewStudentDataModule = class AdmMrNewStudentDataModule {
};
AdmMrNewStudentDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_adm_mr_new_student_data_component__WEBPACK_IMPORTED_MODULE_4__["AdmMrNewStudentDataComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _adm_mr_new_student_data_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmMrNewStudentDataRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"],
            angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__["AngularDualListBoxModule"],
            ngx_chips__WEBPACK_IMPORTED_MODULE_12__["TagInputModule"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_3__["ToastyModule"].forRoot(),
            ng_select__WEBPACK_IMPORTED_MODULE_13__["SelectModule"]
        ]
    })
], AdmMrNewStudentDataModule);



/***/ })

}]);
//# sourceMappingURL=theme-adm-mr-new-student-data-adm-mr-new-student-data-module-es2015.js.map