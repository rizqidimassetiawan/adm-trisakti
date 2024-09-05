(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-_home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/_home/home.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/_home/home.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"userType === 1\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"{{ 'ROOT.home' | translate }}\" hidHeader=\"true\" [loading]=\"loadingAdmin\">\n      <div class=\"row\">\n        <div class=\"col-12 col-lg-6 p-4 text-center middle-content\">\n          <img src=\"assets/images/vector/home-vector.svg\"  class=\"vector-styling center\" alt=\"\">\n        </div>\n        <div class=\"col-12 col-lg-6 p-4 text-left middle-content\">\n          <span class=\"head-home\">\n            <h4>{{ 'LOGIN.welcome_to' | translate }} {{ 'CONTENT.app-name' | translate }}</h4>\n            <hr class=\"head\">\n            <p *ngIf=\"isSuperadmin\" class=\"text-justify\">{{ 'CONTENT.welcome-superadmin' | translate }}</p>\n            <p *ngIf=\"isFacultyAdmin\" class=\"text-justify\">{{ 'CONTENT.welcome-facultyadmin' | translate }}</p>\n            <p *ngIf=\"isUniversityAdmin\" class=\"text-justify\">{{ 'CONTENT.welcome-universityadmin' | translate }}</p>\n            <p *ngIf=\"isParticipantAdmin\" class=\"text-justify\">{{ 'CONTENT.welcome-participantadmin' | translate }}</p>\n            <p *ngIf=\"isAdmissionAdmin\" class=\"text-justify\">{{ 'CONTENT.welcome-admissionadmin' | translate }}</p>\n          </span>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n\n<div class=\"row\" *ngIf=\"userType !== 1\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\" [loading]=\"loadtableRegistrationHistory\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"row\">\n            <div class=\"col-12 col-lg-6 p-4 text-center middle-content\">\n              <img src=\"assets/images/vector/home-vector.svg\" class=\"vector-styling center\" alt=\"\">\n            </div>\n            <div class=\"col-12 col-lg-6 p-4 text-left middle-content\">\n              <span class=\"head-home\">\n                <h4>{{'CONTENT.halo' | translate}} {{ userFullname }} <br> {{ 'LOGIN.welcome_to' | translate }} {{ 'CONTENT.app-name' | translate }}</h4>\n                <hr class=\"head\">\n                <p class=\"text-justify welcome-text\">\n                  {{ 'CONTENT.welcome' | translate }} <br> <br>\n                  {{ 'CONTENT.welcome-home-1' | translate }} <br> <br>\n                  {{ 'CONTENT.welcome-home-2' | translate }}\n                </p>\n                  <p class=\"welcome-text text-center register-custom\"><b>Tunggu apalagi, Daftar sekarang juga </b><br>\n                  <button class=\"btn btn-outline-primary btn-sm btn-round has-ripple mt-1\" (click)=\"goToNewRegistration()\" >\n                    <i\n                    class=\"icofont icofont-ui-note\"></i> {{'CONTENT.order_form' | translate}}\n                  </button>\n                </p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <app-card cardTitle=\"{{'CONTENT.sentence_of_dashboard' | translate}}\" [hidden]=\"!isMoreThanOneData\" [options]=\"false\">\n        <div class=\"col-12 col-md-12\">\n        <p class=\"welcome-text mt-2\">{{'CONTENT.sentence-of-dashboard-content' | translate}} <br> {{'CONTENT.sentence-of-dashboard-content-2' | translate}}\n          <a routerLink=\"/registration-history\">klik disini\n          </a> {{'CONTENT.info-registration-history' | translate}}\n        </p>\n        <table datatable class=\"table table-hover\" [dtOptions]=\"dtOptions[6]\" [dtTrigger]=\"dtTrigger6\">\n          <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" class=\"center-table\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n            <th scope=\"col\">{{ 'CONTENT.detail-pemesanan' | translate }}</th>\n            <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.approval-status' | translate }}</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableData6?.length != 0\">\n          <tr *ngFor=\"let data of tableData6; let i = index;\">\n            <th scope=\"row\" class=\"center-table\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n            <td>\n              <div class=\"d-inline-block\">\n                <p class=\"m-b-0\"><b>{{ 'CONTENT.registration-number' | translate }}.\n                    {{data.registration_number}}</b>\n                </p>\n                <p class=\"text-muted m-b-0\">{{ 'CONTENT.selection-path' | translate }} {{data.selection_path ?\n                  data.selection_path : \"-\" }}</p>\n              </div>\n            </td>\n            <td class=\"center-table\">\n              <div [hidden]=\"data.transfer_status == '1'\">\n                <span class=\"badge badge-light-success\" *ngIf=\"data.pass_status == 'Lulus'\">{{ 'CONTENT.pass' |\n                  translate}}</span>\n              </div>\n              <div [hidden]=\"data.transfer_status == '1'\">\n                <span class=\"badge badge-light-danger\" *ngIf=\"data.pass_status == 'Tidak Lulus'\">{{\n                  'CONTENT.not-pass' | translate}}</span>\n              </div>\n              <div [hidden]=\"data.transfer_status == '1'\">\n                <span class=\"badge badge-light-secondary \" *ngIf=\"data.pass_status== '-'\">{{\n                  'CONTENT.pending_pass' | translate}}</span>\n              </div>\n              <span class=\"badge badge-light-warning\" *ngIf=\"data.transfer_status == '1'\">{{\n                'CONTENT.pass-offered' | translate}}</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/theme/_home/home-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/theme/_home/home-routing.module.ts ***!
  \****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/theme/_home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/theme/_home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/theme/_home/home.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.center-table {\n  text-align: center; }\n\n.center-text {\n  display: inline-flex;\n  text-align: center; }\n\n.middle-content {\n  display: flex;\n  align-items: center; }\n\n.middle-content > img {\n    max-width: 80%; }\n\n@media (min-width: 992px) {\n  span.head-home {\n    padding-right: 3rem !important; } }\n\n.img-alert {\n  max-width: 90%; }\n\n@media (min-width: 576px) {\n    .img-alert {\n      max-width: 30%; } }\n\n.img-alert .img-center {\n    display: inline-block;\n    width: 100%; }\n\n.taskboard-wrapper.pb-5 {\n  padding-bottom: 6rem !important; }\n\n.welcome-text {\n  font-size: 14px; }\n\n.vector-styling {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.register-custom {\n  color: #4680ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvdGhlbWUvX2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsbUJBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDQyxrQkFBa0IsRUFBQTs7QUFFbkI7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYTtFQUViLG1CQUFtQixFQUFBOztBQUhyQjtJQUtJLGNBQWMsRUFBQTs7QUFHbEI7RUFDRTtJQUNFLDhCQUE4QixFQUFBLEVBQy9COztBQUdIO0VBQ0UsY0FBYyxFQUFBOztBQUNkO0lBRkY7TUFHSSxjQUFjLEVBQUEsRUFPakI7O0FBVkQ7SUFPSSxxQkFBcUI7SUFDckIsV0FBVyxFQUFBOztBQUlmO0VBQ0UsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvX2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRke1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxudGh7XG4gIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4uY2VudGVyLXRhYmxle1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jZW50ZXItdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5taWRkbGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICA+IGltZyB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBzcGFuLmhlYWQtaG9tZSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5pbWctYWxlcnQge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gIH1cblxuICAuaW1nLWNlbnRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi50YXNrYm9hcmQtd3JhcHBlci5wYi01IHtcbiAgcGFkZGluZy1ib3R0b206IDZyZW0gIWltcG9ydGFudDtcbn1cblxuLndlbGNvbWUtdGV4dHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udmVjdG9yLXN0eWxpbmd7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucmVnaXN0ZXItY3VzdG9te1xuICBjb2xvcjogIzQ2ODBmZjtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/theme/_home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/_home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/participant.service */ "./src/app/_services/participant.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let HomeComponent = class HomeComponent {
    constructor(translateService, broadcasterService, chartService, userService, router) {
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.userService = userService;
        this.router = router;
        this.dtOptions = [];
        this.dtTrigger6 = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translateService.setDefaultLang(res.lang);
        });
        // broadcasterService.scopeBroadcast$.subscribe(res => {
        //   this.loadProfile();
        // });
        this.programActive = 0;
        this.selectionPathActive = 0;
        this.loader = false;
        this.loading = false;
        this.isMoreThanOneData = false;
        this.isSuperadmin = false;
        this.isFacultyAdmin = false;
        this.isUniversityAdmin = false;
        this.isAdmissionAdmin = false;
        this.isParticipantAdmin = false;
        this.loadingAdmin = false;
    }
    ngOnInit() {
        this.loadProfile();
        if (this.userType != 1) {
            this.dtOptions[6] = {
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
            this.loadReportingRegistrationHistory();
        }
        else {
        }
    }
    loadProfile() {
        this.userData = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userData.username.includes("@")) {
            this.userType = 0;
            this.loading = true;
        }
        else {
            this.loadingAdmin = true;
            //as admin
            this.userType = 1;
            this.getScope();
            this.broadcasterService.scopeBroadcast$.subscribe(res => {
                this.getScope();
            });
        }
    }
    getScope() {
        const scopeAccount = JSON.parse(localStorage.getItem('scope'));
        if (scopeAccount !== null) {
            if (scopeAccount.length != 0) {
                this.loadingAdmin = false;
                this.scope = scopeAccount.toString();
                if (this.scope == 'admission-faculty') {
                    this.isFacultyAdmin = true;
                }
                else if (this.scope == 'admission-university') {
                    this.isUniversityAdmin = true;
                }
                else if (this.scope == 'admission-admisi') {
                    this.isAdmissionAdmin = true;
                }
                else if (this.scope == 'admission-admin-participant') {
                    this.isParticipantAdmin = true;
                }
                else if (this.scope == 'admission-admin') {
                    this.isSuperadmin = true;
                    this.loadingAdmin = false;
                }
            }
        }
    }
    loadReportingRegistrationHistory() {
        this.loadtableRegistrationHistory = true;
        this.userData = JSON.parse(localStorage.getItem('userProfile'));
        this.userService.getParticipantDetailData(this.userData.email).subscribe(res => {
            this.userFullname = res.fullname;
            this.userService.getRegistrationListParticipantData(`participant_id=${res.participant_id}`).subscribe(response => {
                setTimeout(() => {
                    this.tableData6 = response.data;
                    this.dtTrigger6.next();
                    this.loadtableRegistrationHistory = false;
                    if (response.data.length > 0) {
                        this.isMoreThanOneData = true;
                        this.loadingParticipantHome = false;
                    }
                    else {
                        this.loadingParticipantHome = false;
                        this.isMoreThanOneData = false;
                    }
                }, 3000);
            }, err => {
                this.loadError();
                this.loadtableRegistrationHistory = false;
            });
        });
    }
    goToNewRegistration() {
        this.router.navigate(['/new-registration']);
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
    renderTable6() {
        this.dtElements.forEach((dtElement, index) => {
            if (index == 6) {
                dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], HomeComponent.prototype, "dtElements", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/_home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/theme/_home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/theme/_home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/theme/_home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/theme/_home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/theme/_home/home-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/fesm2015/ng-select.js");











let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
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
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=theme-_home-home-module-es2015.js.map