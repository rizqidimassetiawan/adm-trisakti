(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-new-registration-new-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/new-registration/new-registration.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/new-registration/new-registration.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"div-merah col-12 col-md-12 mb-4\">\n      <div class=\"row\">\n        <img src=\"assets/images/vector/information.svg\" alt=\"user image\" class=\"align-top m-r-15 wid-40 img-cover-fit\"\n          style=\"width:150px; height:150px; margin-left:40px; margin-right:15px;\">\n        <div class=\"text-justify p-3 mt-3 middle-content\">\n          <h6 class=\"font-weight-bold p-color\">{{'CONTENT.information' | translate}}<br>\n            {{'CONTENT.sentence_of_reghistory2' | translate}}</h6>\n        </div>\n      </div>\n    </div>\n    <div></div>\n    <app-card cardTitle=\"{{'CONTENT.order_form' | translate}}\" headerClass=\"text-center text-md-left\"  [options]=\"false\" [loading]=\"loading\" [hidHeader]=\"false\">\n      <div class=\"app-body\">\n        <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"registrationDataForm\"\n          (ngSubmit)=\"checkParticipantWithSelectionPath();\">\n          <div class=\"form-group\" >\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.selection-path' | translate }}</label>\n            <!-- <ng-select *ngIf=\"!selectionProgram\" [disabled]=\"!selectionProgram\" [placeholder]=\"'CONTENT.selection-path-placeholder'|translate\" [ngClass]=\"'custom bg-white'\"></ng-select> -->\n            <ng-select name=\"selectionPath\" formControlName=\"selection_path_id\"\n              [placeholder]=\"'CONTENT.selection-path'|translate\" required\n              [(ngModel)]=\"selectionPath\" [options]=\"listSelectionPath\"\n              (selected)=\"changeSelectionPath($event)\"\n              [ngClass]=\"!selectionPath?'custom is-invalid':(selectionPath?'custom is-valid':'custom')\"></ng-select>\n            <label *ngIf=\"!selectionPath\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n              'CONTENT.please-choose' | translate }}{{ 'CONTENT.selection-path' | translate }}</label>\n          </div>\n          <div class=\"form-group\" [hidden]=\"!selectionPath\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.description' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"notes\"  readonly>\n           </div>\n          <div class=\"div-merah1 col-12 col-md-12 mt-2\">\n            <div class=\"form-group form-check\">\n              <input class=\"form-check-input ml-2\" style=\"z-index: auto;\" type=\"checkbox\" [(ngModel)]=\"checklist\"\n                [ngModelOptions]=\"{standalone: true}\" name=\"checklist\">\n              <h6 class=\"text-light text-setting ml-3 pt-3\">{{ 'CONTENT.sentence_tac_newreg' | translate }}</h6>\n              <div *ngIf=\"!checklist\" class=\"invalid-feedback\">Mohon diceklis</div>\n            </div>\n          </div>\n\n          <div class=\"form-group mb-0 mt-4 text-right\">\n              <button type=\"submit\" class=\"btn btn-success btn-sm\"\n              [disabled]=\"registrationDataForm.invalid || !selectionPath || !checklist  || this.loading\">\n                <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i> </span>\n              </button>\n              <br>\n          </div>\n        </form>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n<app-ui-modal #modalStudent [dialogClass]=\"'modal-xl btn-page'\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title text-primary text-center\">{{ 'CONTENT.info' | translate }}</h5>\n    <!-- <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalStudent.hide()\"><span aria-hidden=\"true\">&times;</span></button> -->\n  </div>\n  <div class=\"app-modal-body\">\n    <h6>{{ 'CONTENT.sentence_form_order' | translate }}</h6>\n    <h6>{{ 'CONTENT.fullname' | translate }} : </h6>\n    <h6>{{ 'CONTENT.NIK' | translate }} : </h6>\n    <h6>{{ 'CONTENT.order_number' | translate }} : </h6>\n    <h6>{{ 'CONTENT.save_orderform' | translate }}</h6>\n    <br>\n    <h6>{{ 'CONTENT.nextstep' | translate }} </h6>\n    <!--Harusnya Collapse-->\n    <div>\n      <div>\n        <div class=\"card-header\">\n          <label>{{ 'CONTENT.complete_reg_data' | translate }}</label>\n        </div>\n        <div>\n          <p class=\"mb-0\">{{ 'CONTENT.sentence_complete_regdata' | translate }}</p>\n        </div>\n      </div>\n      <div>\n        <div class=\"card-header\">\n          <label>{{ 'CONTENT.from_reg_payment' | translate }}</label>\n        </div>\n        <div>\n          <p class=\"mb-0\">{{ 'CONTENT.sentence_reg_payment' | translate }}</p>\n          <br>\n          <div class=\"col-sm-6 text-right\">\n            <button class=\"btn btn-primary btn-sm btn-round has-ripple\" (click)=\"goToStudentProfile()\">{{\n              'CONTENT.complete_reg_data' | translate }}</button>\n            <button class=\"btn btn-primary btn-sm btn-round has-ripple\" (click)=\"goToRegistrationHistory()\"> {{\n              'CONTENT.complete_reg_payment' | translate }}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #modalOrderForm  [loading]=\"loadingCard\" [dialogClass]=\"'modal-lg'\" [containerClick]=\"false\" [hideFooter]=\"true\" [hideHeader]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 style=\"text-align:center\">{{ 'CONTENT.info' | translate }}</h5>\n  </div>\n  <div class=\"app-modal-body\">\n          <form [formGroup]=\"registrationParticipantDataForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n        <h6 style=\"text-align:center\" class=\"mt-1\">\n          <i class=\"icofont icofont-check-circled text-success\"></i>\n           {{ 'CONTENT.sentence_form_order' | translate }}\n        </h6>\n        <div class=\"form-group row mt-1\">\n          <label for=\"fullname\" class=\"col-sm-4 col-form-label\">{{'CONTENT.fullname' | translate}}</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" id=\"fullname\" formControlName=\"fullname\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label *ngIf=\"!showPassport\" for=\"NIK\" class=\"col-sm-4 col-form-label\">{{'CONTENT.NIK' | translate}}</label>\n          <label *ngIf=\"showPassport\" for=\"NIK\" class=\"col-sm-4 col-form-label\">{{'CONTENT.passport_number' | translate}}</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" id=\"NIK\" formControlName=\"NIK\" >\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"registration_number\" class=\"col-sm-4 col-form-label\"><b>{{'CONTENT.registration-number' | translate}} </b></label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" id=\"registration_number\" formControlName=\"registration_number\" >\n            <h6 style=\"color:red\">{{ 'CONTENT.save_orderform' | translate }}</h6>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"payment_methodd\" class=\"col-sm-4 col-form-label\">{{'CONTENT.payment-method' | translate}} </label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" id=\"payment_methodd\" formControlName=\"payment_methodd\" >\n          </div>\n        </div>\n        <div  [hidden]=\"!isNotFinpay\" class=\"form-group row\">\n          <label for=\"payment_code\" class=\"col-sm-4 col-form-label\"> <b>{{'CONTENT.payment-code' | translate}}</b></label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" id=\"payment_code\" formControlName=\"payment_code\" >\n          </div>\n        </div>\n        <!-- <div class=\"col-12 col-sm-12 text-center\">\n          <button class=\"btn btn-primary btn-sm btn-round has-ripple col-12 col-md-4 mb-2\">{{\n          'MENU.registration_history' | translate }}</button>\n      </div> -->\n        <!-- <h6 style=\"text-align:center\">{{ 'CONTENT.nextstep' | translate }} </h6> -->\n      </form>\n    <div [hidden]=\"!isNotFinpay\" class=\"row mt-3\">\n      <div class=\"col-sm-12\">\n        <app-card [hidHeader]=\"true\">\n          <a href=\"javascript:\" *ngIf=\"isCollapseReg\" class=\"text-dark\" (click)=\"isCollapseReg = !isCollapseReg\"\n            [attr.aria-expanded]=\"!isCollapseReg\" aria-controls=\"collapseExample\">\n            <h6>\n              <b>{{ 'CONTENT.panduan-pembayaran' | translate }}\n                <i class=\"feather icon-chevron-down\"></i>\n              </b>\n            </h6>\n          </a>\n          <div id=\"collapseExample\" [ngbCollapse]=\"isCollapseReg\">\n            <a href=\"javascript:\" class=\"text-dark\" *ngIf=\"!isCollapseReg\" (click)=\"isCollapseReg = !isCollapseReg\"\n              [attr.aria-expanded]=\"!isCollapseReg\" aria-controls=\"collapseExample\">\n              <h6>\n                <b>{{ 'CONTENT.panduan-pembayaran' | translate }}\n                  <i class=\"feather icon-chevron-up\"></i>\n                </b>\n              </h6>\n            </a>\n            <hr>\n            <p class=\"font\">{{ 'CONTENT.cara-bayar' | translate }}</p>\n            <div style=\"text-align: center;\">\n              <a href=\"https://smb.telkomuniversity.ac.id/wp-content/uploads/2020/11/PANDUAN-PEMBAYARAN-PIN-PENDAFTARAN.pdf\" target=\"_blank\" type=\"button\" class=\"btn btn-sm btn-primary text-center col-12 col-sm-5 col-md-5 button-margin-top button-margin rounded\"\n                ><i class=\"icofont icofont-bank\"></i> {{'CONTENT.panduan-pembayaran' |\n                translate}}</a>\n            </div>\n          </div>\n        </app-card>\n      </div>\n    </div>\n    <!-- <div class=\"row\"> -->\n      <div class=\"text-right\">\n          <a class=\"btn btn-primary btn-sm btn-round has-ripple col-12 col-md-3 mt-1 mb-2\"\n          href=\"/admission/registration-history\">{{\n          'MENU.registration_history' | translate }}</a>\n      </div>\n    <!-- </div> -->\n  </div>\n</app-ui-modal>\n");

/***/ }),

/***/ "./src/app/theme/new-registration/new-registration-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/new-registration/new-registration-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: NewRegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRegistrationRoutingModule", function() { return NewRegistrationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _new_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-registration.component */ "./src/app/theme/new-registration/new-registration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




// import { PaymentRegistrationComponent } from './payment-registration/payment-registration.component';
const routes = [
    {
        path: '',
        component: _new_registration_component__WEBPACK_IMPORTED_MODULE_2__["NewRegistrationComponent"]
    }
    // {
    //     path: 'formasi-jabatan',
    //     loadChildren: './formasi-jabatan/formasi-jabatan.module#FormasiJabatanModule',
    //     data: { animation: '2' }
    // },
];
let NewRegistrationRoutingModule = class NewRegistrationRoutingModule {
};
NewRegistrationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], NewRegistrationRoutingModule);



/***/ }),

/***/ "./src/app/theme/new-registration/new-registration.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/theme/new-registration/new-registration.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=text], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\n.div-merah {\n  background: #1d4ea5;\n  margin-bottom: auto;\n  border-radius: 5px;\n  display: inline-block; }\n\n.p-color {\n  color: white; }\n\n.div-merah1 {\n  background: linear-gradient(to right, #153374 0%, #4680ff 100%) !important;\n  border-radius: 5px;\n  display: inline-block; }\n\n.text-setting {\n  font-size: 10pt; }\n\n.index-up4 {\n  z-index: 4; }\n\n.index-up3 {\n  z-index: 3; }\n\n.index-up {\n  z-index: 1; }\n\n.font {\n  font-size: 10pt; }\n\n.middle-content {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvdGhlbWUvbmV3LXJlZ2lzdHJhdGlvbi9uZXctcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsMEVBQTBFO0VBQzFFLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL25ldy1yZWdpc3RyYXRpb24vbmV3LXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZGl2LW1lcmFoe1xuICBiYWNrZ3JvdW5kOiAjMWQ0ZWE1O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wLWNvbG9ye1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGl2LW1lcmFoMXtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTUzMzc0IDAlLCAjNDY4MGZmIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnRleHQtc2V0dGluZ3tcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uaW5kZXgtdXA0IHtcbiAgei1pbmRleDogNDtcbn1cbi5pbmRleC11cDMge1xuICB6LWluZGV4OiAzO1xufVxuLmluZGV4LXVwIHtcbiAgei1pbmRleDogMTtcbn1cbi5mb250IHtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuLm1pZGRsZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/new-registration/new-registration.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/new-registration/new-registration.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRegistrationComponent", function() { return NewRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/participant.service */ "./src/app/_services/participant.service.ts");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);










let NewRegistrationComponent = class NewRegistrationComponent {
    constructor(translateService, broadcasterService, userService, chartService, route, router, fb, datePipe) {
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.userService = userService;
        this.chartService = chartService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.datePipe = datePipe;
        this.registrationParticipantDataForm = this.fb.group({
            fullname: ({ value: '', disabled: true }),
            NIK: ({ value: '', disabled: true }),
            registration_number: ({ value: '', disabled: true }),
            payment_methodd: ({ value: '', disabled: true }),
            payment_code: ({ value: '', disabled: true })
        });
        this.registrationDataForm = this.fb.group({
            participant_id: [''],
            semester_intake: [''],
            notes: [''],
            selection_path_id: [''],
            pin_price: [''],
            checklist: [''],
            payment_method: ['']
        });
        translateService.setDefaultLang(localStorage.getItem('lang'));
        this.translateService.get('CONTENT.alert-validate-participant-with-selection-path').subscribe((l) => { this.alertValidationParticipantWithSelectionPath = l; });
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translateService.setDefaultLang(res.lang);
            this.translateService.get('CONTENT.alert-validate-participant-with-selection-path').subscribe((l) => { this.alertValidationParticipantWithSelectionPath = l; });
        });
        this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
        this.selectionProgram = '';
        this.selectionPath = '';
        this.pinPrice = '';
        this.idPinPrice = '';
        this.isCollapse = true;
        this.isCollapseReg = true;
        this.isEducationDataEmpty = false;
        this.loading = false;
        this.loadingCard = false;
        this.isNotFinpay = false;
        this.showPassport = false;
    }
    ngOnInit() {
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapseReg = true;
        this.checkEducationData();
        this.loadPaymentMethodDataFilter();
        this.changeSelectionProgram();
    }
    mode(param) {
        this.edit = param;
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
    // loadDetailParticipantData(registrationNumber) {
    //   this.loadingCard = true;
    //   this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    //   if (this.userProfile.email !== undefined) {
    //     this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
    //       this.registrationParticipantDataForm.patchValue({ fullname: res.fullname });
    //       this.registrationParticipantDataForm.patchValue({ NIK: res.identify_number ? res.identify_number : res.passport_number  });
    //       this.registrationParticipantDataForm.patchValue({ registration_number: registrationNumber });
    //       this.registrationParticipantDataForm.patchValue({ payment_code: this.payment_code });
    //       if (res[0].identify_number == null) {
    //         this.showPassport = true;
    //       } else {
    //         this.showPassport = false;
    //       }
    //       this.userService.getRegistrationListParticipantData(`registration_number=${registrationNumber}`).subscribe(result => {
    //         const {
    //           payment_method
    //         } = result.data[0];
    //         this.registrationParticipantDataForm.patchValue({ payment_methodd: payment_method });
    //         this.loadingCard = false;
    //       });
    //     });
    //   } else {
    //     const unameEx = this.userProfile.username + '@gmail.com';
    //     this.userService.getParticipantDetailData(unameEx).subscribe(res => {
    //       this.registrationParticipantDataForm.patchValue({ fullname: res.fullname });
    //       this.registrationParticipantDataForm.patchValue({ NIK: res.identify_number.toString() });
    //       this.registrationParticipantDataForm.patchValue({ registration_number: registrationNumber });
    //       this.registrationParticipantDataForm.patchValue({ payment_code: this.payment_code });
    //       this.userService.getRegistrationListParticipantData(`registration_number=${registrationNumber}`).subscribe(result => {
    //         const {
    //           payment_method
    //         } = result.data[0];
    //         this.registrationParticipantDataForm.patchValue({ payment_methodd: payment_method });
    //         this.loadingCard = false;
    //       });
    //     });
    //   }
    // }
    getPaymentUrl() {
        window.open(this.url_payment).focus();
    }
    loadDataDiri() {
        this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
            this.participantId = res.participant_id;
            this.loadEducationData();
        });
    }
    loadEducationData() {
        this.userService.getEducationHistoryData(`${this.participantId}`).subscribe(response => {
            if (response.data.length === 0) {
                this.isEducationDataEmpty = true;
                this.loading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    title: 'Warning!',
                    text: "Mohon Maaf, Anda harus melengkapi data diri dan data pendidikan terlebih dahulu sebelum melakukan pemesanan formulir",
                    type: 'warning',
                    showConfirmButton: true,
                    allowOutsideClick: false
                }).then((confirm) => {
                    if (confirm.value) {
                        this.router.navigate(['/student-profile']);
                    }
                });
            }
            else {
                this.loading = false;
                this.isEducationDataEmpty = false;
                this.checkQuestionnaire();
            }
        });
    }
    // api untuk pengecekan data pendidikan
    checkEducationData() {
        this.loading = true;
        if (this.userProfile.email !== undefined) {
            this.loadDataDiri();
        }
        else {
            const unameEx = this.userProfile.username + '@gmail.com';
            this.userService.getParticipantDetailData(unameEx).subscribe(res => {
                this.participantId = res.participant_id;
                this.userService.getEducationHistoryData(`${this.participantId}`).subscribe(response => {
                    if (response.data.length === 0) {
                        this.loading = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                            title: 'Warning!',
                            text: "Mohon Maaf, Anda harus melengkapi data diri dan data pendidikan terlebih dahulu sebelum melakukan pemesanan formulir",
                            type: 'warning',
                            showConfirmButton: true,
                            allowOutsideClick: false
                        }).then((confirm) => {
                            if (confirm.value) {
                                this.router.navigate(['/student-profile']);
                            }
                        });
                        this.isEducationDataEmpty = true;
                    }
                    else {
                        this.isEducationDataEmpty = false;
                        this.loading = false;
                    }
                });
            });
        }
    }
    loadPaymentMethodDataFilter() {
        this.loadFilter = true;
        this.chartService.getPaymentMethodData().subscribe((filterArray) => {
            const dataPaymentMethod = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].method
                };
                dataPaymentMethod.push(x);
                this.listPaymentMethod = dataPaymentMethod;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    goToReg() {
        window.open('/registration-history').focus();
    }
    createRegistrationData() {
        this.loading = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        // pengecekan jika user adalah admin dan maba
        if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.participantId = res.participant_id;
                this.email = res.username;
                this.fullname = res.fullname;
                this.phonenumber = res.mobile_phone_number;
                const data = {
                    participant_id: this.participantId,
                    selection_path_id: this.registrationDataForm.controls['selection_path_id'].value,
                    mapping_path_year_id: this.mappingPathYearId,
                    mapping_path_year_intake_id: this.mappingPathYearIntakeId,
                };
                this.userService.postRegistrationDetailData(data).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.registration_number = res.registration_number;
                            const data = {
                                registration_number: this.registration_number,
                                registration_step_id: 1
                            };
                            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                                title: res.status,
                                text: 'Pemesanan Formulir telah berhasil selanjutnya klik disini untuk melanjutkan tahapan registrasi',
                                type: 'success',
                                showConfirmButton: true,
                                allowOutsideClick: false,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#ffba57',
                            }).then((confirm) => {
                                if (confirm.value) {
                                    this.router.navigate(['registration-history/registration-data/' + this.registration_number]);
                                }
                            });
                            this.loading = false;
                        }
                        else {
                            this.loadError();
                            this.loading = false;
                        }
                    }
                    else {
                        this.loadError();
                        this.loading = false;
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
            });
        }
    }
    changeSelectionProgram() {
        this.loadFilter = true;
        this.loadSelectionPath = true;
        this.userService.getSelectionPathData(`active_status=1`).subscribe((resp) => {
            this.listSelectionPath =
                resp &&
                    resp.map((value) => {
                        return {
                            value: value && value.selection_path_id.toString(),
                            label: value.selection_path_name + ' ' + '-' + ' SEMESTER' + ' ' + value.semester_name,
                            intake: value.mapping_path_year_intake_id,
                            path_year: value.mapping_path_year_id,
                            notes: value.notes
                        };
                    });
            this.loadFilter = false;
            this.loadPin = true;
            this.loadSelectionPath = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    changeSelectionPath(event) {
        this.selectionPath = event.value;
        this.loadPin = true;
        if (this.selectionPath !== '') {
            this.mappingPathYearId = event.path_year;
            this.mappingPathYearIntakeId = event.intake;
            this.registrationDataForm.patchValue({ notes: event.notes });
        }
        else {
            this.loadPin = false;
            this.registrationDataForm.patchValue({ pin_price: 0 });
        }
    }
    checkParticipantWithSelectionPath() {
        this.userService.getValidateParticipantWithSelectionPath(`?participant_id=${this.participantId}&selection_path_id=${this.selectionPath}&mapping_path_year_id=${this.mappingPathYearId}&mapping_path_year_intake_id=${this.mappingPathYearIntakeId}`).subscribe(res => {
            if (res.status == 'Failed') {
                if (res.available == false) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                        title: res.status,
                        text: res.message,
                        type: 'error',
                        showConfirmButton: true,
                        allowOutsideClick: false
                    });
                }
            }
            else {
                this.createRegistrationData();
            }
        });
    }
    updatePinPrice(idPin) {
        const pinPrice = [];
        this.chartService.getPINPriceData(`id=${idPin}`).subscribe((response) => {
            if (response.data.length !== 0) {
                let pinPrice = response.data[0].price;
                this.registrationDataForm.patchValue({ pin_price: pinPrice });
            }
        });
    }
    goToStudentProfile() {
        this.router.navigate(['/student-profile']);
    }
    goToRegistrationHistory() {
        this.router.navigate(['/registration-history/payment-registration/' + this.registration_number]);
    }
    checkQuestionnaire() {
        if (this.userProfile.email !== undefined) {
            this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.participantId = res.participant_id;
                this.userService.getStatusQuestionnaireData(`participant_id=${this.participantId}`).subscribe(res => {
                    if (res.status == 0) {
                        this.router.navigate(['/', 'questionnaire-data-participant']);
                    }
                }, (reason) => {
                    this.router.navigate(['/', 'home']);
                });
            });
        }
    }
};
NewRegistrationComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__["AdminManagementService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalOrderForm', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NewRegistrationComponent.prototype, "modalOrderForm", void 0);
NewRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/new-registration/new-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-registration.component.scss */ "./src/app/theme/new-registration/new-registration.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_3__["BroadcasterService"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__["AdminManagementService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
], NewRegistrationComponent);



/***/ }),

/***/ "./src/app/theme/new-registration/new-registration.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/new-registration/new-registration.module.ts ***!
  \*******************************************************************/
/*! exports provided: NewRegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRegistrationModule", function() { return NewRegistrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _new_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-registration.component */ "./src/app/theme/new-registration/new-registration.component.ts");
/* harmony import */ var _new_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-registration-routing.module */ "./src/app/theme/new-registration/new-registration-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let NewRegistrationModule = class NewRegistrationModule {
};
NewRegistrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_new_registration_component__WEBPACK_IMPORTED_MODULE_3__["NewRegistrationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _new_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewRegistrationRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAccordionModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"]
        ]
    })
], NewRegistrationModule);



/***/ })

}]);
//# sourceMappingURL=theme-new-registration-new-registration-module-es2015.js.map