(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-adm-master-type-examp-adm-master-type-examp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-master-type-examp/adm-master-type-examp.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-master-type-examp/adm-master-type-examp.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-12\">\n    <app-card cardTitle=\"Master Tipe Ujian\" cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\"\n      [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loader\">\n\n      <div class=\"row p-4\">\n        <div class=\"col-12 col-md-8\">\n          <div class=\"table-responsive pb-1 pr-5\">\n            <table datatable class=\"table table-hover\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                  <th scope=\"col\">{{ 'CONTENT.category-examp' | translate}}</th>\n                  <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.active-status' | translate}}</th>\n                  <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"tableData?.length != 0\">\n                <tr *ngFor=\"let data of tableData; let i = index;\">\n                  <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                  <td>{{ data.nama }}</td>\n                  <td class=\"center-table\">\n                    <span class=\"badge badge-{{ data.status == 1 ? 'success' : 'danger' }}\">{{\n                      data.status == 1 ? ('ROOT.active' | translate) : ('ROOT.nonactive' | translate)}}\n                    </span>\n                  </td>\n                  <td class=\"center-table\">\n                    <button class=\"btn btn-warning btn-sm btn-round has-ripple\" [placement]=\"'top'\"\n                      ngbTooltip=\"{{'ROOT.edit' | translate}}\" (click)=\"editData(data);\">\n                      <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n                    </button>\n                    <button class=\"btn btn-danger btn-sm btn-round has-ripple m-1\" [placement]=\"'top'\"\n                      ngbTooltip=\"{{'ROOT.delete' | translate}}\" (click)=\"deleteDataDocument(data)\">\n                      <i class=\"icofont icofont-ui-delete\"></i> <span class=\"d-sm-none\"> {{'ROOT.detail' | translate}}</span>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n              <tbody *ngIf=\"tableData?.length == 0 && !loadtableApprovalData\">\n                <tr>\n                  <td colspan=\"4\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                </tr>\n              </tbody>\n              <tbody *ngIf=\"tableData?.length == 0 && loadtableApprovalData\">\n                <tr>\n                  <td colspan=\"4\" class=\"no-data-available text-center\">Loading Data....</td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                  <td class=\"hidden\"></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <app-card cardTitle=\"{{'CONTENT.form-data' | translate }}\" [hidHeader]=\"false\" [options]=\"false\">\n            <div class=\"col-12 pt-3\">\n              <form  [formGroup]=\"DataFormExamp\" (ngSubmit)=\"createDataDocument()\" class=\"md-float-material form-material\" action=\"javascript:\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group mb-2\">\n                      <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.category-examp' | translate }}</label>\n                      <input type=\"text\" class=\"form-control uppercase\" name=\"name\" formControlName=\"name\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-12 pt-3 pl-4 pr-4 pb-2\">\n                  <button class=\"btn btn-info btn-round btn-md btn-block\" [disabled]=\"!DataFormExamp.valid\">\n                    <i class=\"icofont icofont-save pr-2\"></i> Simpan\n                  </button>\n                </div>\n              </form>\n              <div class=\"col-12 pl-4 pr-4\">\n                <button class=\"btn btn-outline-danger btn-round btn-md btn-block\" (click)=\"batal()\" [disabled]=\"!DataFormExamp.valid\">\n                  <i class=\"icofont icofont-save pr-2\"></i> Batal\n                </button>\n              </div>\n            </div>\n          </app-card>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/theme/adm-master-type-examp/adm-master-type-examp-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/adm-master-type-examp/adm-master-type-examp-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AdmMasterTypeExampRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMasterTypeExampRoutingModule", function() { return AdmMasterTypeExampRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adm_master_type_examp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm-master-type-examp.component */ "./src/app/theme/adm-master-type-examp/adm-master-type-examp.component.ts");




const routes = [
    {
        path: '',
        component: _adm_master_type_examp_component__WEBPACK_IMPORTED_MODULE_3__["AdmMasterTypeExampComponent"]
    }
];
let AdmMasterTypeExampRoutingModule = class AdmMasterTypeExampRoutingModule {
};
AdmMasterTypeExampRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdmMasterTypeExampRoutingModule);



/***/ }),

/***/ "./src/app/theme/adm-master-type-examp/adm-master-type-examp.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/adm-master-type-examp/adm-master-type-examp.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2FkbS1tYXN0ZXItdHlwZS1leGFtcC9hZG0tbWFzdGVyLXR5cGUtZXhhbXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/theme/adm-master-type-examp/adm-master-type-examp.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/adm-master-type-examp/adm-master-type-examp.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdmMasterTypeExampComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMasterTypeExampComponent", function() { return AdmMasterTypeExampComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let AdmMasterTypeExampComponent = class AdmMasterTypeExampComponent {
    constructor(translate, adminManagementService, broadcasterService, fb) {
        this.translate = translate;
        this.adminManagementService = adminManagementService;
        this.broadcasterService = broadcasterService;
        this.fb = fb;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.DataFormExamp = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
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
    }
    ngOnInit() {
        this.loadScheduleDataTable();
    }
    createDataDocument() {
        let nama = this.DataFormExamp.get('name').value;
        // Memeriksa apakah ID ada untuk menentukan apakah ini operasi edit atau tambah
        if (this.selectionScheduleId !== undefined && this.selectionScheduleId !== '') {
            // Mengedit data yang ada berdasarkan ID
            this.tableData = this.tableData.map(item => {
                if (item.id === this.selectionScheduleId) {
                    return Object.assign({}, item, { nama: nama, status: 1 }); // Update data yang sesuai dengan ID
                }
                return item; // Kembalikan data lainnya tanpa perubahan
            });
        }
        else {
            // Menambah data baru jika ID tidak ada
            this.tableData.push({
                id: this.tableData.length + 1,
                nama: nama,
                status: 1
            });
        }
        console.log(this.tableData);
        this.DataFormExamp.reset();
    }
    loadScheduleDataTable() {
        this.loadtableProgramData = true;
        this.adminManagementService.getDataTipeUjian().subscribe(response => {
            if (response !== null) {
                this.tableData = response.datas;
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
    renderProgramDataTable() {
        this.dtElements.forEach((dtElement, index) => {
            if (index == 0) {
                dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            }
        });
    }
    editData(e) {
        this.selectionScheduleId = e.id;
        this.DataFormExamp.patchValue({ name: e.nama });
    }
    batal() {
        this.selectionScheduleId = '';
        this.DataFormExamp.reset();
    }
    deleteDataDocument(data) {
        const datas = {
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
        }).then((confirm) => {
            if (confirm.value) {
                this.tableData = this.tableData.filter(item => item.id !== data.id);
            }
        });
    }
};
AdmMasterTypeExampComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_7__["AdminManagementService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
], AdmMasterTypeExampComponent.prototype, "dtElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
], AdmMasterTypeExampComponent.prototype, "dtElement", void 0);
AdmMasterTypeExampComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-adm-master-type-examp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adm-master-type-examp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-master-type-examp/adm-master-type-examp.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adm-master-type-examp.component.scss */ "./src/app/theme/adm-master-type-examp/adm-master-type-examp.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_7__["AdminManagementService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], AdmMasterTypeExampComponent);



/***/ }),

/***/ "./src/app/theme/adm-master-type-examp/adm-master-type-examp.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/adm-master-type-examp/adm-master-type-examp.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdmMasterTypeExampModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMasterTypeExampModule", function() { return AdmMasterTypeExampModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _adm_master_type_examp_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm-master-type-examp-routing.module */ "./src/app/theme/adm-master-type-examp/adm-master-type-examp-routing.module.ts");
/* harmony import */ var _adm_master_type_examp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adm-master-type-examp.component */ "./src/app/theme/adm-master-type-examp/adm-master-type-examp.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/fesm2015/ng-select.js");











let AdmMasterTypeExampModule = class AdmMasterTypeExampModule {
};
AdmMasterTypeExampModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_adm_master_type_examp_component__WEBPACK_IMPORTED_MODULE_4__["AdmMasterTypeExampComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _adm_master_type_examp_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdmMasterTypeExampRoutingModule"],
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
], AdmMasterTypeExampModule);



/***/ })

}]);
//# sourceMappingURL=theme-adm-master-type-examp-adm-master-type-examp-module-es2015.js.map