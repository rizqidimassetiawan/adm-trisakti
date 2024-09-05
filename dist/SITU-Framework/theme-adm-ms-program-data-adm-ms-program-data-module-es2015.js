(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-adm-ms-program-data-adm-ms-program-data-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-program-data/adm-ms-program-data.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-program-data/adm-ms-program-data.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>Program Data Management works!</p> -->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-card cardTitle=\"{{ 'MENU.program-data' | translate }}\" cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loadtableProgramData\">\n      <form class=\"md-float-material form-material\" action=\"javascript:\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <!-- <div class=\"form-group mb-0\">\n                <ng-select name=\"active_status\" [allowClear]=\"false\" [placeholder]=\"'CONTENT.active-status' | translate\" [ngClass]=\"'custom bg-white'\"[notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"activeStatus\" (deselected)=\"onDeselected('activeStatus')\"  [options]=\"listActiveStatusFilters\" (selected)=\"applyProgramDataFilters(activeStatus)\"></ng-select>\n              </div> -->\n            </div>\n            <div class=\"col-9 text-center text-md-right\">\n              <button class=\"btn btn-success btn-sm btn-round has-ripple btn-sm mt-1\"\n              (click)=\"showModalInputProgramData(null);\">\n                <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-data' | translate}}\n              </button>\n            </div>\n          </div>\n      </form>\n      <br>\n      <div class=\"table-responsive pb-1\" >\n        <table datatable  class=\"table table-hover\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" style=\"padding-left: 10px;text-align:center\">{{ 'CONTENT.no' | translate}}</th>\n              <th scope=\"col\">{{ 'CONTENT.program-name' | translate}}</th>\n              <th scope=\"col\">{{ 'CONTENT.program-description' | translate}}</th>\n              <!-- <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.active-status' | translate}}</th> -->\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tableData?.length != 0\">\n            <tr *ngFor=\"let data of tableData; let i = index;\">\n              <th scope=\"row\" style=\"padding-left: 10px; text-align:center \">{{ i+1 }}</th>\n              <td>{{ data.name }}</td>\n              <td class=\"width\">{{ data.description }}\n            </td>\n              <!-- <td class=\"center-table\">{{ data.active_status_name }}</td> -->\n              <td class=\"center-table\">\n                <button class=\"btn btn-warning btn-sm btn-round has-ripple\" [placement]=\"'top'\" ngbTooltip=\"{{'ROOT.edit' | translate}}\" (click)=\"loadDetailProgramData(data);\">\n                  <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n                </button>\n                <button class=\"btn btn-danger btn-sm btn-round has-ripple\" (click)=\"deleteProgramData(data);\">\n                  <i class=\"icofont icofont-ui-delete\"></i> <span class=\"d-sm-none\"> {{'ROOT.delete' | translate}}</span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n<!-- Forms Modal -->\n<app-ui-modal #myPersistenceModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [loading]=\"loading\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\" >\n      {{\n        edit === \"edit\"\n          ? (\"ROOT.edit\" | translate)\n          : (\"ROOT.add\" | translate)\n      }}\n      {{ 'CONTENT.add-program-data' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"myPersistenceModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup] = \"programDataForm\" (ngSubmit)= \"createProgramData()\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row\" [ngSwitch]=\"edit\">\n        <div class=\"col-sm-12\" *ngSwitchDefault>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.program-name' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" required formControlName=\"name\" [placeholder]=\"'CONTENT.program-name' | translate\"\n            maxlength=\"50\"\n            >\n            <label\n          *ngIf=\"f.name.errors && f.name.errors.required && (f.name.touched || f.name.dirty)\"\n          class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.program-name' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.program-category' | translate }}</label>\n            <ng-select name=\"certificate-level\" formControlName=\"category_program\"\n            [placeholder]=\"'CONTENT.program-category'|translate\" [ngClass]=\"'custom bg-white'\" required\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"category\"\n            [options]=\"listCategoryProgram\"></ng-select>\n            <label\n          *ngIf=\"f.category_program.errors && f.category_program.errors.required && (f.category_program.touched || f.category_program.dirty)\"\n          class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.program-category' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.program-description' | translate }}</label>\n            <textarea\n            class=\"form-control\"\n            name=\"description\"\n            formControlName=\"description\"\n            [placeholder]=\"'CONTENT.program-description' | translate\"\n            maxlength=\"150\" required\n          ></textarea>\n          <label\n          *ngIf=\"f.description.errors && f.description.errors.required && (f.description.touched || f.description.dirty)\"\n          class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.program-description' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button *ngIf=\"edit == 'input'\" type=\"button\" (click)=\"myPersistenceModal.hide()\" class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.cancel' | translate }}\n              </button>\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"myPersistenceModal.hide()\" [disabled] =\"!programDataForm.valid\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<ng-template #showLoading>\n  <div class=\"d-flex justify-content-center\">\n    <div class=\"spinner-border text-primary\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/theme/adm-ms-program-data/adm-ms-program-data-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/adm-ms-program-data/adm-ms-program-data-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdmMsProgramDataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMsProgramDataRoutingModule", function() { return AdmMsProgramDataRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adm_ms_program_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-ms-program-data.component */ "./src/app/theme/adm-ms-program-data/adm-ms-program-data.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _adm_ms_program_data_component__WEBPACK_IMPORTED_MODULE_2__["AdmMsProgramDataComponent"]
    }
];
let AdmMsProgramDataRoutingModule = class AdmMsProgramDataRoutingModule {
};
AdmMsProgramDataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AdmMsProgramDataRoutingModule);



/***/ }),

/***/ "./src/app/theme/adm-ms-program-data/adm-ms-program-data.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/adm-ms-program-data/adm-ms-program-data.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.center-table {\n  text-align: center;\n}\n\n.width {\n  max-width: 370px;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL2FkbS1tcy1wcm9ncmFtLWRhdGEvYWRtLW1zLXByb2dyYW0tZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvYWRtLW1zLXByb2dyYW0tZGF0YS9hZG0tbXMtcHJvZ3JhbS1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURBQTtFQUNDLGtCQUFBO0FDR0Q7O0FEREE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9hZG0tbXMtcHJvZ3JhbS1kYXRhL2FkbS1tcy1wcm9ncmFtLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbnRoe1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmNlbnRlci10YWJsZXtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2lkdGh7XG4gIG1heC13aWR0aDogMzcwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4iLCJ0ZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG50aCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uY2VudGVyLXRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2lkdGgge1xuICBtYXgtd2lkdGg6IDM3MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/theme/adm-ms-program-data/adm-ms-program-data.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/adm-ms-program-data/adm-ms-program-data.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdmMsProgramDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMsProgramDataComponent", function() { return AdmMsProgramDataComponent; });
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












let AdmMsProgramDataComponent = class AdmMsProgramDataComponent {
    constructor(translate, broadcasterService, chartService, appService, router, fb, http) {
        this.translate = translate;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.appService = appService;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.programDataForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            category_program: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            active_status: ['']
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
        this.loading = false;
        this.edit = 'input';
        this.activeStatus = '1';
    }
    get f() { return this.programDataForm.controls; }
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
        // this.loadProgramData();
        this.loadProgramDataTable();
        this.loadActiveStatusDataFilter();
        this.loadCategoryFilter();
        // this.createProgramData();
    }
    createProgramData() {
        if (this.programDataForm.valid) {
            this.loading = true;
            if (this.edit == 'input') {
                const data = {
                    name: this.programDataForm.controls['name'].value,
                    description: this.programDataForm.controls['description'].value,
                    active_status: '1',
                    category: this.category
                    // active_status : this.programDataForm.controls['active_status'].value
                };
                this.chartService.postProgramData(data).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.myPersistenceModal.hide();
                            this.reset();
                            this.renderProgramDataTable();
                            this.loadProgramDataTable();
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
            else if (this.edit == 'edit') {
                const data = {
                    id: this.programId,
                    name: this.programDataForm.value.name,
                    description: this.programDataForm.value.description,
                    active_status: '1',
                    category: this.category
                };
                // console.warn(this.programDataForm.value);
                this.chartService.updProgramData(data).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.myPersistenceModal.hide();
                            this.reset();
                            this.loadProgramDataTable();
                            this.renderProgramDataTable();
                            this.loading = false;
                        }
                        else {
                            this.loadError();
                            this.loading = false;
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
    }
    loadProgramData() {
        this.loadtableProgramData = true;
        const data = {
            active_status: this.activeStatus
        };
        console.warn(data);
        this.chartService.getProgramData(data).subscribe(response => {
            setTimeout(() => {
                this.tableData = response.data;
                this.dtTrigger.next(); // Trigger for load datatable
                this.loadtableProgramData = false;
            }, 3000);
        }, err => {
            // this.loadError();
            this.loadtableProgramData = false;
        });
    }
    loadProgramDataTable() {
        this.loadtableProgramData = true;
        const data = {
            active_status: this.activeStatus ? this.activeStatus : '1'
        };
        this.chartService.getProgramData(data).subscribe(response => {
            setTimeout(() => {
                this.tableData = response.data;
                this.dtTrigger.next();
                this.loadtableProgramData = false;
            }, 3000);
        }, err => {
            this.loadError();
            this.loadtableProgramData = false;
        });
    }
    applyProgramDataFilters(activeStatus) {
        const data = {
            active_status: activeStatus
        };
        this.loadtableProgramData = true;
        this.chartService.getProgramData(data).subscribe(response => {
            setTimeout(() => {
                this.tableData = response.data;
                this.dtTrigger.next();
                this.loadtableProgramData = false;
            }, 3000);
        }, err => {
            this.loadError();
            this.loadtableProgramData = false;
        });
        this.renderProgramDataTable();
    }
    loadDetailProgramData(data) {
        this.mode('edit');
        this.programId = data.id;
        this.category = data.category && data.category;
        this.programDataForm.patchValue({ name: data.name });
        this.programDataForm.patchValue({ description: data.description });
        if (data.active_status === false) {
            this.programDataForm.patchValue({ active_status: '0' });
        }
        else {
            this.programDataForm.patchValue({ active_status: data.active_status });
        }
        this.myPersistenceModal.show();
    }
    showModalInputProgramData(data) {
        this.mode('input');
        this.myPersistenceModal.show();
        this.reset();
        this.category = '';
    }
    mode(param) {
        this.edit = param;
    }
    reset() {
        this.programDataForm.reset();
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
    renderProgramDataTable() {
        this.dtElements.forEach((dtElement, index) => {
            if (index == 0) {
                dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            }
        });
    }
    loadForDeleteProgramData(data) {
        this.programId = data.id;
        this.programName = data.name;
        this.programDesc = data.description;
        this.deleteProgramModal.show();
    }
    deleteProgramData(data) {
        const datas = {
            id: data.id,
            active_status: "0",
            name: data.name,
            description: data.description
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
                this.chartService.updProgramData(datas).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                                position: 'center',
                                type: 'success',
                                title: this.successDel,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            // this.deleteProgramModal.hide();
                            this.renderProgramDataTable();
                            this.loadProgramDataTable();
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
                    this.loadError();
                });
            }
        });
    }
    onDeselected(val) {
        switch (val) {
            case 'activeStatus':
                this.activeStatus = '1';
                break;
        }
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
    loadCategoryFilter() {
        this.chartService.getCategorySelectionProgram().subscribe((resp) => {
            this.listCategoryProgram =
                resp &&
                    resp.map((value) => {
                        return {
                            value: value.category,
                            label: value.category,
                        };
                    });
        });
    }
};
AdmMsProgramDataComponent.ctorParameters = () => [
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
], AdmMsProgramDataComponent.prototype, "dtElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
], AdmMsProgramDataComponent.prototype, "dtElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myPersistenceModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdmMsProgramDataComponent.prototype, "myPersistenceModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteProgramModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdmMsProgramDataComponent.prototype, "deleteProgramModal", void 0);
AdmMsProgramDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adm-ms-program-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adm-ms-program-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-program-data/adm-ms-program-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adm-ms-program-data.component.scss */ "./src/app/theme/adm-ms-program-data/adm-ms-program-data.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"],
        src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
], AdmMsProgramDataComponent);



/***/ }),

/***/ "./src/app/theme/adm-ms-program-data/adm-ms-program-data.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/adm-ms-program-data/adm-ms-program-data.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdmMsProgramDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMsProgramDataModule", function() { return AdmMsProgramDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _adm_ms_program_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adm-ms-program-data.component */ "./src/app/theme/adm-ms-program-data/adm-ms-program-data.component.ts");
/* harmony import */ var _adm_ms_program_data_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adm-ms-program-data-routing.module */ "./src/app/theme/adm-ms-program-data/adm-ms-program-data-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/fesm2015/ng-select.js");














let AdmMsProgramDataModule = class AdmMsProgramDataModule {
};
AdmMsProgramDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_adm_ms_program_data_component__WEBPACK_IMPORTED_MODULE_4__["AdmMsProgramDataComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _adm_ms_program_data_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmMsProgramDataRoutingModule"],
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
], AdmMsProgramDataModule);



/***/ })

}]);
//# sourceMappingURL=theme-adm-ms-program-data-adm-ms-program-data-module-es2015.js.map