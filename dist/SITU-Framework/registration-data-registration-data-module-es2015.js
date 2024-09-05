(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-data-registration-data-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/registration-history/registration-data/registration-data.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/registration-history/registration-data/registration-data.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"text-md-left\">\n      <div class=\"page-header-title\">\n        <h5>{{ 'CONTENT.reg-data'| translate}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-card cardTitle=\"{{'CONTENT.complete-registration' | translate}}\" headerClass=\"text-center text-md-left\"\n      [options]=\"false\" [loading]=\"loadingStudyPrograms\">\n      <wizard #wizard class=\"arc-wizard\" navBarLayout=\"large-empty-symbols\">\n        <wizard-step stepTitle=\"{{'CONTENT.choose-study-program' | translate}}\" navigationSymbol=\"1\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-card headerClass=\"text-center text-md-left\" [hidHeader]=\"true\">\n                <div class=\"app-body\">\n                  <form [formGroup]=\"registrationDataForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n                    <div class=\"row\">\n                      <div class=\"form-group col-md-6\">\n                        <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.registration-number' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\" readonly\n                          formControlName=\"registration_number\">\n                      </div>\n                      <div class=\"form-group col-md-6\">\n                        <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.selection-path' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\" readonly formControlName=\"selection_path\">\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </app-card>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-card cardTitle=\"{{ 'CONTENT.choose-study-program' | translate }}\" cardClass=\"card-datatable\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\"\n                [loading]=\"loadtableRegistrationProgramStudyData\">\n                <div *ngIf=\"!hiddenStudyProgram\" class=\"row align-items-center mb-2 mt-3\">\n                  <div class=\"col-12 text-center text-md-right\">\n                    <button class=\"btn btn-outline-success btn-sm btn-round has-ripple\"\n                      (click)=\"showStudyProgram()\" [disabled]=\"loadingMaximunStudy\">\n                      <span *ngIf=\"this.loadingMaximunStudy\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                      <span *ngIf=\"this.loadingMaximunStudy\" class=\"load-text\"> Loading...</span>\n                      <span *ngIf=\"!this.loadingMaximunStudy\" class=\"btn-text\">\n                      <i class=\"icofont icofont-plus\"></i> {{'ROOT.add' | translate}} {{'CONTENT.study-program-data' |\n                      translate}}</span>\n                    </button>\n                    <button class=\"btn btn-outline-danger btn-sm btn-round has-ripple m-1\"\n                      (click)=\"resetMappingstudyProgram()\" [disabled]=\"disabledNextStepProdi || loading\">\n                      <i class=\"icofont icofont-trash\"></i> {{'CONTENT.reset-study-program-data' | translate}}\n                    </button>\n                  </div>\n                </div>\n                <div class=\"table-responsive pb-1\">\n                  <table datatable class=\"table table-hover table-sm\" [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.priority' | translate}}\n                        </th>\n                        <th scope=\"col\">{{ 'CONTENT.faculty' | translate}}</th>\n                        <th scope=\"col\">{{ 'CONTENT.study-program' | translate}}</th>\n                        <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.concentration' | translate }}</th>\n                        <th scope=\"col\" class=\"text-center\">{{'CONTENT.class-type' | translate }}</th>\n                        <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.SDP2' | translate}}</th>\n                        <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.action' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tableData?.length != 0\">\n                      <tr *ngFor=\"let data of tableData; let i = index;\">\n                        <td class=\"text-center\">{{ data.priority }}</td>\n                        <td>{{ data.faculty_name }}</td>\n                        <td>{{ data.study_program_name }}</td>\n                        <td class=\"text-center\">{{ data.specialization_name }}</td>\n                        <td class=\"text-center\">{{ data.class_type }}</td>\n                        <td class=\"text-center\">Rp{{ data.sdp_total }}</td>\n                        <td class=\"text-center\">\n                          <button class=\"btn btn-outline-primary btn-sm btn-round has-ripple\"\n                            (click)=\"loadViewMappingStudyProgram(data)\" [placement]=\"'left'\"\n                            ngbTooltip=\"{{'CONTENT.detail-study-program' | translate}}\">\n                            <i class=\"icofont icofont-eye\"></i> <span class=\"d-sm-none\"> {{'ROOT.view' |\n                              translate}}</span>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableData?.length == 0 && !loadtableRegistrationProgramStudyData\">\n                      <tr>\n                        <td colspan=\"7\" class=\"no-data-available text-center\">\n                          <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n                        </td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableData?.length == 0 && loadtableRegistrationProgramStudyData\">\n                      <tr>\n                        <td colspan=\"7\" class=\"no-data-available text-center\">\n                          <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n                        </td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </app-card>\n            </div>\n          </div>\n          <div class=\"col text-center\">\n            <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" routerLink=\"/registration-history\">\n              <i class=\"icofont icofont-rounded-left\"></i> {{'ROOT.back' |\n              translate}}</button>\n            <button type=\"submit\" class=\"btn btn-outline-primary btn-sm m-1\" (click)=\"gotoStep1()\"\n              [disabled]=\"disabledNextStepProdi || this.loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.next' | translate }} <i\n                class=\"icofont icofont-rounded-right\"></i></span>\n            </button>\n          </div>\n        </wizard-step>\n        <wizard-step stepTitle=\"Bayar Formulir\" navigationSymbol=\"2\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-card headerClass=\"text-center text-md-left\" [hidHeader]=\"true\">\n                <div class=\"app-body\">\n                  <form [formGroup]=\"registrationDataForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n                    <div class=\"row\">\n                      <div class=\"form-group col-md-6\">\n                        <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.registration-number' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\" readonly\n                          formControlName=\"registration_number\">\n                      </div>\n                      <div class=\"form-group col-md-6\">\n                        <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.selection-path' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\" readonly formControlName=\"selection_path\">\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </app-card>\n              <app-card cardTitle=\"Pembayaran Formulir\" cardClass=\"card-datatable\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\"\n                [loading]=\"loadingPinPriceCard\">\n                <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"registrationDataForm2\">\n                  <app-alert *ngIf=\"!disabledPayment\" type=\"warning\">\n                    {{ 'CONTENT.warning' | translate}}! <br>\n                    {{ 'CONTENT.payment-validation-information' | translate}}\n                  </app-alert>\n                  <div class=\"form-group\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pin-price' | translate }}</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"pin_price\" readonly\n                    currencyMask [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\" >\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.payment-method' | translate }}</label>\n                    <div *ngIf=\"disabledPayment\" class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" formControlName=\"payment_method_name\" readonly>\n                    </div>\n                    <ng-select *ngIf=\"!disabledPayment\" name=\"payment-method\" [allowClear]=\"false\"\n                      formControlName=\"payment_method\" [placeholder]=\"'CONTENT.payment-method' | translate\"\n                      [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n                      [(ngModel)]=\"paymentMethod\" [options]=\"listPaymentMethod\" [ngClass]=\"!paymentMethod?'custom is-invalid':(paymentMethod?'custom is-valid':'custom')\"></ng-select>\n                    <div *ngIf=\"!paymentMethod\" class=\"invalid-feedback\">{{ 'CONTENT.please-input' | translate }}{{\n                      'CONTENT.payment-method' | translate }}</div>\n                  </div>\n                </form>\n              </app-card>\n            </div>\n            <div class=\"col text-center\">\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" previousStep><i class=\"icofont icofont-rounded-left\"></i> {{'ROOT.back' | translate}}</button>\n              <button [hidden]=\"disabledPayment\" type=\"submit\" class=\"btn btn-success btn-sm m-1\"\n                (click)=\"createRegistrationPayment()\" [disabled]=\"!paymentMethod || this.loading\">\n                <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i></span>\n              </button>\n              <button [hidden]=\"disabledNextStepDocument\" type=\"submit\" class=\"btn btn-outline-primary btn-sm m-1\"\n                (click)=\"gotoStep2()\" [disabled]=\" this.loading\">\n                <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.next' | translate }} <i class=\"icofont icofont-rounded-right\"></i> </span>\n              </button>\n            </div>\n          </div>\n        </wizard-step>\n        <wizard-step stepTitle=\"{{'CONTENT.document-requirements' | translate}}\" navigationSymbol=\"3\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-card headerClass=\"text-center text-md-left\" [hidHeader]=\"true\">\n                <div class=\"app-body\">\n                  <form [formGroup]=\"registrationDataForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n                    <div class=\"row\">\n                      <div class=\"form-group col-md-6\">\n                        <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.registration-number' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\" readonly\n                          formControlName=\"registration_number\">\n                      </div>\n                      <div class=\"form-group col-md-6\">\n                        <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.selection-path' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\" readonly formControlName=\"selection_path\">\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </app-card>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-card cardTitle=\"{{ 'CONTENT.document-requirements' | translate }}\" cardClass=\"card-datatable\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\"\n                [loading]=\"loadtableSelectionDocumentData\">\n                <div class=\"table-responsive pb-1\">\n                  <table datatable class=\"table table-striped table-hover table-sm\" [dtOptions]=\"dtOptions[1]\"\n                    [dtTrigger]=\"dtTrigger1\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" class=\"col-size pr-0\">{{ 'CONTENT.no' | translate}}</th>\n                        <th class=\"col-size-doc\">{{ 'CONTENT.document-requirements' | translate}}</th>\n                        <th scope=\"col\" class=\"col-size-doc-2\">{{ 'CONTENT.action' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tableData1?.length != 0\">\n                      <tr *ngFor=\"let data of tableData1; let i = index;\">\n                        <th>{{ i+1 }}</th>\n                        <td>\n                          <div>\n                            <p class=\"mb-0 bold\" style=\"font-size: 11pt;\">{{ data.document_name }} <span\n                                style=\"color: red;\" *ngIf=\"data.required == 1\">*</span>\n                            </p>\n                            <p class=\"mb-0 bold text-warning\" *ngIf=\"data.document_type_id == 7\">\n                              {{'CONTENT.raport-document-required-semester' | translate}}</p>\n                          </div>\n                        </td>\n                        <td class=\"text-center\">\n                          <button class=\"btn btn-outline-warning btn-sm btn-round has-ripple \" [disabled]=\"loadingDocumentCard\"\n                            (click)=\"loadDetailDocumentRequirementData(data.document_type_id);\">\n                            <span *ngIf=\"this.loadingDocumentCard\" class=\"spinner-border spinner-border-sm\"\n                              role=\"status\"></span>\n                            <span *ngIf=\"!this.loadingDocumentCard\" class=\"btn-text\"><i\n                                class=\"icofont icofont-ui-edit\"></i> {{'CONTENT.edit-file'| translate}} <span class=\"d-sm-none\">{{ 'ROOT.edit' | translate\n                                }}</span></span>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableData1?.length == 0 && !loadtableSelectionDocumentData\">\n                      <tr>\n                        <td colspan=\"3\" class=\"no-data-available text-center\">\n                          <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n                        </td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableData1?.length == 0 && loadtableSelectionDocumentData\">\n                      <tr>\n                        <td colspan=\"3\" class=\"no-data-available text-center\">\n                          <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n                        </td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </app-card>\n            </div>\n          </div>\n          <app-alert *ngIf=\"disabledNextStep || loadingCardCheckDoc\" type=\"danger\" class=\"mt-2\">\n            <h6>{{'CONTENT.required-doc-participant' | translate}} <span class=\"required\">*</span></h6>\n          </app-alert>\n          <div class=\"col text-center mt-2\">\n            <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" previousStep><i class=\"icofont icofont-rounded-left\"></i> {{'ROOT.back' | translate}}</button>\n            <button *ngIf=\"!hiddenLoc\" (click)=\"goToCetakKartuPeserta()\" type=\"submit\"\n              class=\"btn btn-outline-primary btn-sm m-1\" [disabled]=\"disabledNextStep || loadingCardCheckDoc || loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.next' | translate }} <i class=\"icofont icofont-rounded-right\"></i></span>\n            </button>\n            <button *ngIf=\"hiddenLoc\" type=\"submit\" class=\"btn btn-outline-primary btn-sm m-1\" (click)=\"goToCetakKartuPeserta()\"\n              [disabled]=\"disabledNextStep || loadingCardCheckDoc || this.loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.next' | translate }} <i class=\"icofont icofont-rounded-right\"></i></span>\n            </button>\n          </div>\n        </wizard-step>\n        <wizard-step stepTitle=\"{{'CONTENT.print-participant-cards' | translate}}\" navigationSymbol=\"4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-alert type=\"warning\">\n                <b>{{'CONTENT.warning' | translate }} <br> {{'CONTENT.check-card' | translate}}</b>\n              </app-alert>\n              <app-card cardTitle=\"{{'MENU.participant-data' | translate}}\" headerClass=\"text-center text-md-left\"\n                [hidHeader]=\"false\" [options]=\"false\">\n                <div class=\"app-body\">\n                  <form [formGroup]=\"participantDetailDataForm\" class=\"md-float-material form-material\"\n                    action=\"javascript:\">\n                    <div class=\"col-12 col-md-12\">\n                      <div class=\"row\">\n                        <div class=\"form-group col-md-6\">\n                          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.registration-number' | translate\n                            }}</label>\n                          <input type=\"text\" class=\"form-control\" name=\"registration_number\" readonly\n                            formControlName=\"registration_number\">\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.fullname' | translate }}</label>\n                          <input type=\"text\" class=\"form-control\" name=\"registration_number\" readonly\n                            formControlName=\"fullname\">\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"form-group col-md-6\">\n                          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.phone_number' | translate }}</label>\n                          <input type=\"text\" class=\"form-control\" name=\"phone_number\" readonly\n                            formControlName=\"mobile_phone_number\">\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.selection-path' | translate }}</label>\n                          <input type=\"text\" class=\"form-control\" name=\"selection-path\" readonly\n                            formControlName=\"selection_path\">\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </app-card>\n              <app-card cardTitle=\"{{'CONTENT.choice-of-study-program' | translate}}\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\"\n                [loading]=\"loadtableRegistrationProgramStudyData\">\n                <table class=\"table table-sm table-boder-radius dataTable\">\n                  <thead class=\"thead-light\">\n                    <tr>\n                      <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.priority' | translate}}</th>\n                      <th scope=\"col\">{{ 'CONTENT.faculty' | translate}}</th>\n                      <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.study-program' | translate}}</th>\n                      <th [hidden]=\"isOtherProgram\" scope=\"col\" class=\"text-center\">{{ isPjjProgram === true ?\n                        ('CONTENT.sks' | translate ) : ('CONTENT.concentration' | translate )}}</th>\n                      <th [hidden]=\"isOtherProgram\" scope=\"col\" class=\"text-center\">{{ 'CONTENT.class-type' |\n                        translate}}</th>\n                      <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.SDP2' | translate}}</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"tableData4?.length != 0\">\n                    <tr *ngFor=\"let data of tableData4; let i = index;\">\n                      <td class=\"text-center\">{{ data.priority }}</td>\n                      <td>{{ data.faculty_name }}</td>\n                      <td class=\"text-center\">{{ data.study_program_name }}</td>\n                      <td [hidden]=\"isOtherProgram\" class=\"text-center\">{{ data.specialization_name }}</td>\n                      <td [hidden]=\"isOtherProgram\" class=\"text-center\">{{ data.class_type }}</td>\n                      <td class=\"text-center\">Rp{{ data.sdp_total }}</td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"tableData4?.length == 0 && !loadtableRegistrationProgramStudyData\">\n                    <tr>\n                      <td colspan=\"4\" class=\"no-data-available text-center\">\n                        <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n                      </td>\n                      <td class=\"hidden\"></td>\n                      <td class=\"hidden\"></td>\n                      <td class=\"hidden\"></td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"tableData4?.length == 0 && loadtableRegistrationProgramStudyData\">\n                    <tr>\n                      <td colspan=\"4\" class=\"no-data-available text-center\">\n                        <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n                      </td>\n                      <td class=\"hidden\"></td>\n                      <td class=\"hidden\"></td>\n                      <td class=\"hidden\"></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </app-card>\n              <app-card *ngIf=\"!isRaportCategory\" cardTitle=\"{{'CONTENT.choose-path-exam-details' | translate}}\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\">\n                <div class=\"app-body\">\n                  <form class=\"md-float-material form-material\" action=\"javascript:\">\n                    <div class=\"form-group col-md-12\">\n                      <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-scheduled' | translate }} <span\n                        class=\"required\">*</span></label>\n                      <ng-select name=\"pathExamDetail\" [placeholder]=\"'CONTENT.choose-path-exam-details'|translate\"\n                        required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n                        [(ngModel)]=\"pathExamDetailSelected\" (selected)=\"changeScheduleExamSelected($event)\"\n                        [options]=\"listPathExamDetail\"  [ngClass]=\"!pathExamDetailSelected?'custom is-invalid':(pathExamDetailSelected?'custom is-valid':'custom')\"></ng-select>\n                      <label *ngIf=\"!pathExamDetailSelected\"\n                        class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-choose' |\n                        translate }} {{ 'CONTENT.exam-scheduled' | translate }}</label>\n                    </div>\n                  </form>\n                </div>\n              </app-card>\n            </div>\n          </div>\n          <div class=\"col text-center\">\n            <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" previousStep><i class=\"icofont icofont-rounded-left\"></i> {{'ROOT.back' | translate}}</button>\n            <button type=\"submit\" (click)=\"popUpPrintRegistrationCard()\" class=\"btn btn-success btn-sm m-1\"\n              [disabled]=\"isRaportCategory ? this.loadingRegCard : this.loadingRegCard || !pathExamDetailSelected\">\n              <span *ngIf=\"this.loadingRegCard\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loadingRegCard\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loadingRegCard\" class=\"btn-text\">\n                {{'CONTENT.print-participant-cards' | translate}} <i class=\"icofont icofont-id-card\"></i></span>\n            </button>\n          </div>\n        </wizard-step>\n      </wizard>\n    </app-card>\n  </div>\n</div>\n\n<!-- Forms Modal -->\n<app-ui-modal #studyProgramModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [loading]=\"loadStudyProgram\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.choose-study-program' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"studyProgramModalClose()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"studyProgramDataForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row\">\n        <label class=\"form-label required col-md-12\">* {{'ROOT.required' | translate}}</label>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.study-program' | translate }} <span\n              class=\"required\">*</span></label>\n          <input [hidden]=\"!isViewData\" type=\"text\" class=\"form-control\" name=\"studyprogram_name\"\n            formControlName=\"studyprogram_name\" readonly>\n          <ng-select [hidden]=\"isViewData\" name=\"studyProgram\" [placeholder]=\"'CONTENT.study-program'|translate\"\n            formControlName=\"mapping_path_program_study_id\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"studyProgram\"\n            [ngClass]=\"!studyProgram?'custom is-invalid':(studyProgram?'custom is-valid':'custom')\"\n            [options]=\"dataProdi\" (selected)=\"loadBesaranSdp(studyProgram)\"></ng-select>\n          <label *ngIf=\"!studyProgram\" id=\"validation-email-error\"\n            class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-choose' |\n            translate }} {{ 'CONTENT.study-program' | translate }}</label>\n        </div>\n        <div class=\"col-md-12 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sdp' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" name=\"sdp_default\" formControlName=\"sdp_default\" currencyMask\n            [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\"\n            [placeholder]=\"'CONTENT.sdp'|translate\" readonly>\n        </div>\n        <div class=\"col-md-12 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.education-fund' | translate }} <span\n              *ngIf=\"!educationFundHidden\" class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"minimumDonation\" name=\"minimum_donation\"\n            [placeholder]=\"'CONTENT.education-fund'|translate\" formControlName=\"minimum_donation\" currencyMask\n            [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\"\n            (ngModelChange)=\"checkValueMinDonation(minimumDonation)\" [readonly]=\"isViewData\" required\n            [disabled]=\"educationFundHidden\"\n            [ngClass]=\"fprodi.minimum_donation.invalid && fprodi.minimum_donation.touched?'is-invalid':(fprodi.minimum_donation.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"fprodi.minimum_donation.errors && fprodi.minimum_donation.errors.required && (fprodi.minimum_donation.touched || fprodi.minimum_donation.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"fprodi.minimum_donation.errors && fprodi.minimum_donation.errors.min && (fprodi.minimum_donation.touched || fprodi.minimum_donation.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-minimum-donation' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{'CONTENT.specialization' | translate}} <span\n              class=\"required\">*</span></label>\n          <input [hidden]=\"!isViewData\" type=\"text\" class=\"form-control\" name=\"specialization_name\"\n            formControlName=\"specialization_name\" readonly>\n          <ng-select [hidden]=\"isViewData\" name=\"specialization\"\n            placeholder=\"{{'ROOT.choose'|translate}} {{'CONTENT.specialization'|translate}}\"\n            formControlName=\"specialization\" required [disabled]=\"!studyProgram\"\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectedSpecialization\"\n            [options]=\"listSpecialization\" (selected)=\"getStudyProgramClass($event)\"\n            [ngClass]=\"!selectedSpecialization?'custom is-invalid':(selectedSpecialization?'custom is-valid':'custom')\">\n          </ng-select>\n          <label *ngIf=\"!selectedSpecialization\" id=\"validation-email-error\"\n            class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{'CONTENT.class-type' | translate}} <span\n              class=\"required\">*</span></label>\n          <input [hidden]=\"!isViewData\" type=\"text\" class=\"form-control\" name=\"class_type\" formControlName=\"class_type\"\n            readonly>\n          <ng-select [hidden]=\"isViewData\" name=\"class_name\"\n            placeholder=\"{{'ROOT.choose'|translate}} {{'CONTENT.class-type'|translate}}\" formControlName=\"class_name\"\n            required [disabled]=\"!selectedSpecialization\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"selectedClass\" [options]=\"listClass\"\n            [ngClass]=\"!selectedClass?'custom is-invalid':(selectedClass?'custom is-valid':'custom')\"></ng-select>\n          <label *ngIf=\"!selectedClass\" id=\"validation-email-error\"\n            class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n        <div class=\"form-group mb-0 mt-4 col-md-12 text-right\">\n          <button type=\"button\" (click)=\"studyProgramModalClose()\" class=\"btn btn-secondary btn-sm\"\n            [disabled]=\"this.loading\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n          <button type=\"submit\" [hidden]=\"isViewData\" class=\"btn btn-success btn-sm m-1\"\n            [disabled]=\"studyProgramDataForm.invalid || !studyProgram || this.loading\"\n            (click)=\"createStudyProgramData()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n                class=\"icofont icofont-location-arrow\"></i></span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #deleteStudyProgramMappingModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.delete' | translate }} {{ 'MENU.study-program-choosen' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"deleteStudyProgramMappingModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 text-center\">\n          <img src=\"assets/images/delete.png\" alt=\"\" style=\"max-width: 20%;\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 text-center\">\n          <br>\n          <h6>{{ 'CONTENT.delete-study-program-choosen' | translate }}</h6>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-0 mt-4 text-center\">\n            <div class=\"btn-group\">\n              <button (click)=\"deleteDetailStudyProgramData()\" class=\"btn btn-danger btn-sm\">\n                {{ 'ROOT.yes' | translate }}\n              </button>\n              &nbsp;\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"deleteStudyProgramMappingModal.hide()\">\n                {{ 'ROOT.no' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #transcriptCreditTransferRequirementModal [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"transcriptCreditTransferRequirementModalClose();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataFormCredit\">\n      <div class=\"col-md-12S\">\n        <form [formGroup]=\"dynamicForm\" (ngSubmit)=\"createTranscriptDocumentCreditTransfer()\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"document_name\" value=\"Transkip Nilai\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">SKS yang telah diampu</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"total_credit\" required\n                  placeholder=\"{{'CONTENT.placeholder-total-credit' | translate }}\">\n                <label\n                  *ngIf=\"f.total_credit.errors && f.total_credit.errors.required && (f.total_credit.touched || f.total_credit.dirty)\"\n                  class=\"error text-danger small form-text\">\n                  {{ 'ROOT.required' | translate }}\n                </label>\n                <label\n                  *ngIf=\"f.total_credit.errors && f.total_credit.errors.pattern && (f.total_credit.touched || f.total_credit.dirty)\"\n                  class=\"error text-danger small form-text\">\n                  {{ 'CONTENT.number-only' | translate }}\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">Total Mata Kuliah</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"total_course\"\n                  (input)=\"onChangeCourseTotal($event)\" required\n                  placeholder=\"{{'CONTENT.placeholder-total-course' | translate }}\" min=\"1\" max=\"100\" minlength=\"1\"\n                  maxlength=\"3\">\n                <label\n                  *ngIf=\"f.total_course.errors && f.total_course.errors.required && (f.total_course.touched || f.total_course.dirty)\"\n                  class=\"error text-danger small form-text\">\n                  {{ 'ROOT.required' | translate }}\n                </label>\n                <label\n                  *ngIf=\"f.total_course.errors && f.total_course.errors.max && (f.total_course.touched || f.total_course.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.sks-max' | translate }}\n                </label>\n                <label\n                  *ngIf=\"f.total_course.errors && f.total_course.errors.min && (f.total_course.touched || f.total_course.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.sks-max' | translate }}\n                </label>\n                <label\n                  *ngIf=\"f.total_course.errors && f.total_course.errors.pattern && (f.total_course.touched || f.total_course.dirty)\"\n                  class=\"error text-danger small form-text\">\n                  {{ 'CONTENT.number-only' | translate }}\n                </label>\n              </div>\n            </div>\n          </div>\n          <div *ngFor=\"let ticket of t.controls; let i = index\" class=\"list-group list-group-flush\">\n            <div class=\"list-group-item\">\n              <h5 class=\"card-title\">Mata Kuliah {{i + 1}}</h5>\n              <div [formGroup]=\"ticket\" class=\"form-row\">\n                <div class=\"form-group col-2\">\n                  <label>{{'CONTENT.course-code' | translate}}</label>\n                  <input type=\"text\" formControlName=\"course_code\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.course_code.errors }\"\n                    placeholder=\"{{'CONTENT.placeholder-course-code' | translate }}\" />\n                  <div *ngIf=\"submitted && f.course_code.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.course_code.errors.required\">{{'ROOT.required' | translate}}</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-6\">\n                  <label>{{'CONTENT.course-name' | translate}}</label>\n                  <input type=\"text\" formControlName=\"course_name\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.course_name.errors }\"\n                    placeholder=\"{{'CONTENT.placeholder-course-name' | translate }}\" />\n                  <div *ngIf=\"submitted && f.course_name.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.course_name.errors.required\">{{'ROOT.required' | translate}}</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-2\">\n                  <label>{{'CONTENT.credit-hour' | translate}}</label>\n                  <input type=\"text\" formControlName=\"credit_hour\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.credit_hour.errors }\"\n                    placeholder=\"{{'CONTENT.placeholder-credit-hour-2' | translate }}\" />\n                  <div *ngIf=\"submitted && f.credit_hour.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.credit_hour.errors.required\">{{'ROOT.required' | translate}}</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-2\">\n                  <label>{{'CONTENT.grade' | translate}}</label>\n                  <input type=\"text\" formControlName=\"grade\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.grade.errors }\"\n                    placeholder=\"{{'CONTENT.placeholder-grade' | translate }}\" maxlength=\"3\" />\n                  <div *ngIf=\"submitted && f.grade.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.grade.errors.required\">{{'ROOT.required' | translate}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"courseTotal\" class=\"form-group mb-0 mt-2 text-right\">\n            <button class=\"btn btn-outline-secondary btn-sm\" type=\"reset\" (click)=\"onReset() \"\n              [disabled]=\" this.loading\">{{ 'CONTENT.reset-data' | translate }}\n            </button>\n            <button type=\"button\" class=\"btn btn-outline-danger btn-sm m-1\" (click)=\"onClear()\"\n              [disabled]=\" this.loading\">{{ 'CONTENT.clear-data' | translate }}\n            </button>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <div *ngIf=\"formType == 'input'\">\n                  <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.upload-file' | translate}}</label>\n                  <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n                    accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadTranscriptFile($event)\" required />\n                  <div *ngIf=\"errSize\" class=\"text-danger mt-4 ml-1\">Max 2MB!</div>\n                  <div *ngIf=\"errType\" class=\"text-danger mt-4 ml-1\">Error file!</div>\n                  <label *ngIf=\"f.url.errors && f.url.errors.required && (f.url.touched || f.url.dirty)\"\n                    class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" [disabled]=\" this.loading\"\n              (click)=\"transcriptCreditTransferRequirementModalClose()\"><i class=\"ti-close\"></i> {{ 'ROOT.close' | translate }}\n            </button>\n            <button type=\"submit\" class=\"btn btn-primary btn-sm ml-1\" [disabled]=\"dynamicForm.invalid || this.loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}</span>\n            </button>\n          </div>\n        </form>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #transcriptRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeTranscriptModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataForm\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"haveTranscriptDoc\">{{ 'CONTENT.complete' |\n              translate}}</span>\n            <span class=\"badge badge-light-danger\" *ngIf=\"!haveTranscriptDoc\">{{ 'CONTENT.not-complete' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n          </div>\n        </div>\n      </div>\n      <div [hidden]=\"isTranscript\" class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ipk-score' | translate }} <span\n                class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"gpa\" placeholder=\"3.55\"\n            [ngClass]=\"ftd.gpa.invalid && ftd.gpa.touched?'is-invalid':(ftd.gpa.valid?'is-valid':'')\" required max=\"4\" maxlength=\"4\">\n            <label\n              *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.required && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label\n              *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.max && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n            <label\n              *ngIf=\"ftd.gpa.errors && ftd.gpa.errors.pattern && (ftd.gpa.touched || ftd.gpa.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-0\">\n            <div>\n              <label class=\"form-label mb-0 f-w-600\">{{isUpdatedTranscript == true ? ('CONTENT.edit-file' | translate) : ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isUpdatedTranscript\"  class=\"required\">*</span></label>\n              <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n                accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadTranscriptFiles($event)\" [ngClass]=\"ftd.url.invalid && ftd.url.touched?'is-invalid':(ftd.url.valid?'is-valid':'')\"/>\n                <p class=\"error text-danger small form-text\">\n                  {{ftd.url.errors && ftd.url.errors.required && (ftd.url.touched || ftd.url.dirty) ? ('CONTENT.required' | translate) : ''}}\n                  {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' | translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.</p>\n              </div>\n          </div>\n        </div>\n        <div *ngIf=\"formType === 'edit'\" class=\"col-md-12\">\n          <div class=\"form-group mb-0\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataTranscriptUrlDoc.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataTranscriptUrlDoc\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataTranscriptUrlDoc.length == 0\" class=\"row\">\n              <div class=\"col-12 ml-2\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 text-right\">\n        <button type=\"button\" (click)=\"closeTranscriptModals()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button>\n          <button type=\"submit\" class=\"btn btn-success btn-sm m-1\" (click)=\"createReportCardDocument()\"\n            [disabled]=\"transcriptDataForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i></span>\n          </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #transcriptRequirementModalView [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"transcriptRequirementModalView.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"transcriptDataForm\">\n      <div class=\"col-md-12S\">\n        <form [formGroup]=\"transcriptFormlView\">\n          <div class=\"form-group mb-0 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-danger btn-sm\" (click)=\"deleteTranscriptDocument()\">\n                <i class=\"ti-trash\"></i> {{ 'ROOT.delete' | translate }} {{'CONTENT.transcript-data' | translate}}\n              </button>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">SKS yang telah diampu</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"totalCredit\" readonly>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">Total Mata Kuliah</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"totalCourse\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n                </label>\n                <div *ngIf=\"dataTranscriptUrl.length !== 0\" class=\"row\">\n                  <div class=\"col-12 col-xs-12 col-md-12\">\n                    <div *ngIf=\"dataTranscriptUrl == null\">\n                      <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                    </div>\n                    <div *ngIf=\"dataTranscriptUrl != null\">\n                      <div class=\"card text-left mb-3\">\n                        <div class=\"card-body p-2\">\n                          <a [href]=\"dataTranscriptUrl\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                              class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                            <p class=\"card-text pl-1 mb-0\"> Transkrip Nilai Pendidikan Terakhir\n                            </p>\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div *ngIf=\"dataTranscriptUrl.length == 0\" class=\"row\">\n                  <div class=\"col-12 ml-2\"> Data Tidak Ditemukan!\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive pb-6\">\n            <table class=\"table table-striped table-hover table-sm\">\n              <thead class=\"thead-light bg-primarys\">\n                <tr>\n                  <th scope=\"col\" class=\"center-table\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.course-code' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.course-name' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.credit-hour' | translate}}</th>\n                  <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.grade' | translate}}</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"tableTranscript?.length != 0\">\n                <tr *ngFor=\"let data of tableTranscript; let i = index;\">\n                  <th class=\"center-table\" scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                  <td class=\"center-table\">{{data.course_code}}\n                  </td>\n                  <td class=\"center-table\">{{ data.course_name }}</td>\n                  <td class=\"center-table\">{{ data.credit_hour }}</td>\n                  <td class=\"center-table\">{{ data.grade }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </form>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #paymentAbilityModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"paymentAbilityModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"abilityDataForm\" class=\"md-float-material form-material\" action=\"javascript:\"\n      (ngSubmit)=\"createSupportingDocument();\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"haveAbilityDocument\">{{ 'CONTENT.complete' |\n              translate}}</span>\n            <span class=\"badge badge-light-danger\" *ngIf=\"!haveAbilityDocument\">{{ 'CONTENT.not-complete' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-requirements' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"document-requirements\" required formControlName=\"name\"\n              readonly>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-2 f-w-600\">{{formTypeAbility == 'edit' ? ('CONTENT.edit-file' | translate) : ('CONTENT.upload-file' | translate) }} <span *ngIf=\"formTypePersonal == 'input'\"  class=\"required\">*</span></label>              <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n                accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadAbilityPayment($event)\" />\n                <p class=\"error text-danger small form-text\">\n                  {{fad.url.errors && fad.url.errors.required && (fad.url.touched || fad.url.dirty) ? ('CONTENT.required' | translate) : ''}}\n                  {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' | translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.</p>\n          </div>\n        </div>\n        <div *ngIf=\"formTypeAbility === 'edit'\" class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataAbilityUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataAbilityUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataAbilityUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <div class=\"btn-group\">\n          <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"abilityDataForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}</span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #reportCardRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog modal-dialog-centered modal-xl\" [hideFooter]=\"true\" [loading]=\"loadtableReportCardData\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.school-report' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"reportCardRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"form-group mb-3 text-right\">\n        <button class=\"btn btn-outline-success btn-sm\" (click)=\"loadReportCardDetailFileData(null, 'input')\">\n          <i class=\"icofont icofont-plus\"></i> {{ 'ROOT.add' | translate }} {{ 'CONTENT.school-report' | translate }}\n        </button>\n      </div>\n        <div class=\"table-responsive pb-1\">\n          <table class=\"table table-sm table-boder-radius dataTable\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.no' | translate}}</th>\n                <th scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.semester' | translate}}</th>\n                <th *ngIf=\"isMathStudy\" scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.math-score' | translate}}</th>\n                <th *ngIf=\"isBahasaStudy\" scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.indo-score' | translate}}</th>\n                <th *ngIf=\"isEnglishStudy\" scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.english-score' | translate}}\n                </th>\n                <th *ngIf=\"physicsStudy\" scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.physics-score' | translate}}\n                </th>\n                <th *ngIf=\"biologyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.biology-score' | translate}}\n                </th>\n                <th *ngIf=\"chemicalStudy\" scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.chemical-score' | translate}}\n                </th>\n                <th *ngIf=\"sociologicalStudy\" scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.sociology-score' |\n                  translate}}</th>\n                <th *ngIf=\"economyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.economy-score' | translate}}\n                </th>\n                <th *ngIf=\"geographyStudy\" scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.geography-score' |\n                  translate}}</th>\n                <th scope=\"col\" class=\"text-center pl-1 pr-1\" style=\"max-width:auto;\">{{ 'CONTENT.action' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"tableData2?.length != 0\">\n              <tr *ngFor=\"let data of tableData2; let i = index;\">\n                <td class=\"text-center pl-1 pr-1\">{{ i+1 }}.</td>\n                <td class=\"text-center pl-1 pr-1\">{{ data.semesters }}</td>\n                <td *ngIf=\"isMathStudy\" class=\"text-center pl-1 pr-1\">{{ data.math ? data.math : '-' }}</td>\n                <td *ngIf=\"isBahasaStudy\" class=\"text-center pl-1 pr-1\">{{ data.bahasa ? data.bahasa : '-'}}</td>\n                <td *ngIf=\"isEnglishStudy\" class=\"text-center pl-1 pr-1\">{{ data.english ? data.english : '-' }}</td>\n                <td *ngIf=\"physicsStudy\" class=\"text-center pl-1 pr-1\">{{ data.physics ? data.physics : '-' }}</td>\n                <td *ngIf=\"biologyStudy\" class=\"text-center pl-1 pr-1\">{{ data.biology ? data.biology : '-' }}</td>\n                <td *ngIf=\"chemicalStudy\" class=\"text-center pl-1 pr-1\">{{ data.chemical ? data.chemical : '-' }}</td>\n                <td *ngIf=\"sociologicalStudy\" class=\"text-center pl-1 pr-1\">{{ data.sociological ? data.sociological : '-' }}\n                </td>\n                <td *ngIf=\"economyStudy\" class=\"text-center pl-1 pr-1\">{{ data.economy ? data.economy : '-'}}</td>\n                <td *ngIf=\"geographyStudy\" class=\"text-center pl-1 pr-1\">{{ data.geography ? data.geography : '-' }}</td>\n                <td class=\"text-center pl-1 pr-1\">\n                  <a aria-label=\"detail\" href=\"javascript:\" [placement]=\"'top'\"\n                    ngbTooltip=\"{{ 'ROOT.detail' | translate }}\" class=\"mr-2\" (click)=\"loadReportCardDetailFileData(data, 'view')\">\n                    <i class=\"ti-eye f-w-600 f-16 text-c-blue\"></i>\n                  </a>\n                  <a aria-label=\"detail\" href=\"javascript:\" [placement]=\"'top'\"\n                    ngbTooltip=\"{{ 'ROOT.delete' | translate }}\" class=\"mr-2\" (click)=\"deleteReportCardData(data)\">\n                    <i class=\"ti-trash f-w-600 f-16 text-c-red\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"tableData2?.length == 0 && !loadtableReportCardData\">\n              <tr>\n                <td colspan=\"12\" class=\"no-data-available text-center\">\n                  <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n                </td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"tableData2?.length == 0 && loadtableReportCardData\">\n              <tr>\n                <td colspan=\"12\" class=\"no-data-available text-center\">\n                  <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n                </td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n                <td class=\"hidden\"></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #certificateRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog modal-dialog-centered modal-xl\" [hideFooter]=\"true\" [loading]=\"loadtableCertificateData\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.certificate' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"certificateRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"form-group mb-2 text-right\">\n      <button class=\"btn btn-outline-success btn-sm\" (click)=\"loadCertificateDetailFileData(null, 'input')\">\n        <i class=\"icofont icofont-plus\"></i> {{ 'ROOT.upload' | translate }} {{ 'CONTENT.certificate' | translate }}\n      </button>\n    </div>\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-sm table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" class=\"text-center pl-1\">{{ 'CONTENT.no' | translate}}</th>\n            <th scope=\"col\">{{ 'CONTENT.certificate-level' | translate}}</th>\n            <th scope=\"col\">{{ 'CONTENT.certificate-type' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-year' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.certificate-score' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.action' | translate}}</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableData3?.length != 0\">\n          <tr *ngFor=\"let data of tableData3; let i = index;\">\n            <td class=\"text-center pl-1\">{{i+1}}.</td>\n            <td>{{ data.certificate_level }}</td>\n            <td>{{ data.certificate_type }}</td>\n            <td class=\"text-center\">{{ data.publication_year }}</td>\n            <td class=\"text-center\">{{ data.certificate_score }}</td>\n            <td class=\"text-center\">\n              <a aria-label=\"detail\" href=\"javascript:\" [placement]=\"'top'\"\n                ngbTooltip=\"{{ 'ROOT.detail' | translate }}\" class=\"mr-2\" (click)=\"loadCertificateDetailFileData(data, 'view')\">\n                <i class=\"ti-eye f-w-600 f-16 text-c-blue\"></i>\n              </a>\n              <a aria-label=\"detail\" href=\"javascript:\" [placement]=\"'top'\"\n                ngbTooltip=\"{{ 'ROOT.delete' | translate }}\" class=\"mr-2\" (click)=\"deleteCertificateDocument(data)\">\n                <i class=\"ti-trash f-w-600 f-16 text-c-red\"></i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableData3?.length == 0 && !loadtableCertificateData\">\n          <tr>\n            <td colspan=\"6\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableData3?.length == 0 && loadtableCertificateData\">\n          <tr>\n            <td colspan=\"6\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #recommendationLetterRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"recommendationLetterRequirementModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"supportingDataForm\"\n      (ngSubmit)=\"createSupportingDocument();\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"haveSupportingDocument\">{{ 'CONTENT.complete' |\n              translate}}</span>\n            <span class=\"badge badge-light-danger\" *ngIf=\"!haveSupportingDocument\">{{ 'CONTENT.not-complete' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-name' | translate }} <span\n              class=\"required\">*</span> </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"pic_name\" name=\"picName\" required maxlength=\"100\"  [placeholder]=\"'CONTENT.pic-name' | translate\"\n            [ngClass]=\"fsd.pic_name.invalid && fsd.pic_name.touched?'is-invalid':(fsd.pic_name.valid?'is-valid':'')\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">\n              {{ 'ROOT.required' | translate }}</label>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-phone-number' | translate }} <span\n              class=\"required\">*</span> </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"pic_phone_number\" name=\"picPhoneNumber\" required  minlength=\"11\" maxlength=\"13\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\" [ngClass]=\"fsd.pic_phone_number.invalid && fsd.pic_phone_number.touched?'is-invalid':(fsd.pic_phone_number.valid?'is-valid':'')\">\n            <label\n            *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.required && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.pattern && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n          <label\n            *ngIf=\"fsd.pic_phone_number.errors && fsd.pic_phone_number.errors.minlength && (fsd.pic_phone_number.touched || fsd.pic_phone_number.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n            </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-email' | translate }} <span\n              class=\"required\">*</span> </label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"pic_email_address\" name=\"picEmail\" required pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\" placeholder=\"xxx@gmail.com\"\n            oninput=\"setCustomValidity('')\" [ngClass]=\"fsd.pic_email_address.invalid && fsd.pic_email_address.touched?'is-invalid':(fsd.pic_email_address.valid?'is-valid':'')\" maxlength=\"150\">\n            <label\n            *ngIf=\"fsd.pic_email_address.invalid && (fsd.pic_email_address.dirty || fsd.pic_email_address.touched )\"\n            id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.email-match' | translate}}</label>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pic-address' | translate }} <span\n              class=\"required\">*</span> </label>\n            <textarea type=\"text\" class=\"form-control\" formControlName=\"pic_address\" required maxlength=\"150\" [placeholder]=\"'CONTENT.pic-address' | translate\"\n            [ngClass]=\"fsd.pic_address.invalid && fsd.pic_address.touched?'is-invalid':(fsd.pic_address.valid?'is-valid':'')\"></textarea>\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.required' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-0 f-w-600\">{{isUisRecommendationUpdated == true ? ('CONTENT.edit-file' | translate) : ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isUisRecommendationUpdated\"  class=\"required\">*</span></label>\n              <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\" [ngClass]=\"fsd.url.invalid && fsd.url.touched?'is-invalid':(fsd.url.valid?'is-valid':'')\"\n                accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadSupportingFile($event)\" />\n                <p class=\"error text-danger small form-text\">\n                  {{fsd.url.errors && fsd.url.errors.required && (fsd.url.touched || fsd.url.dirty) ? ('CONTENT.required' | translate) : ''}}\n                  {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' | translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.</p>\n           </div>\n        </div>\n        <div *ngIf=\"formTypeRecommendation === 'edit'\" class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRecommendationUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRecommendationUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.supporting_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.supporting_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.supporting_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRecommendationUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <button type=\"button\" (click)=\"recommendationLetterRequirementModal.hide();\" [disabled]=\"this.loading\"\n        class=\"btn btn-secondary btn-sm\">\n        <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n      </button>\n          <button type=\"submit\" class=\"btn btn-success btn-sm m-1\" [disabled]=\"supportingDataForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i></span>\n          </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #documentRequirementModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"documentRequirementModalClose();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"participantDocumentForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"haveDocumentPersonal\">{{ 'CONTENT.complete' |\n              translate}}</span>\n            <span class=\"badge badge-light-danger\" *ngIf=\"!haveDocumentPersonal\">{{ 'CONTENT.not-complete' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-req-name' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" readonly formControlName=\"name\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"isShowIdentityNumber\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.identity-number' | translate }} <span class=\"required\">*</span></label>\n            <input type=\"text\" style=\"text-transform: uppercase;\" class=\"form-control\" name=\"number\" minlength=\"7\"\n              maxlength=\"16\" formControlName=\"number\" placeholder=\"{{ 'CONTENT.identity-number' | translate }}\"\n              [ngClass]=\"fpd.number.invalid && fpd.number.touched?'is-invalid':(fpd.number.valid?'is-valid':'')\">\n            <label\n              *ngIf=\"fpd.number.errors && fpd.number.errors.required && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            <label\n              *ngIf=\"fpd.number.errors && fpd.number.errors.minlength && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.identity-number-validation' | translate }}</label>\n            <label\n              *ngIf=\"fpd.number.errors && fpd.number.errors.maxlength && (fpd.number.touched || fpd.number.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.identity-number-validation' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-2 f-w-600\">{{formTypePersonal == 'edit' ? ('CONTENT.edit-file' | translate) : ('CONTENT.upload-file' | translate) }} <span *ngIf=\"formTypePersonal == 'input'\"  class=\"required\">*</span></label>\n            <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n              accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadRequirementDocument($event)\"  [ngClass]=\"fpd.url.invalid && fpd.url.touched?'is-invalid':(fpd.url.valid?'is-valid':'')\"/>\n             <p class=\"error text-danger small form-text\">\n                  {{fpd.url.errors && fpd.url.errors.required && (fpd.url.touched || fpd.url.dirty) ? ('CONTENT.required' | translate) : ''}}\n                  {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' | translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.</p>\n          </div>\n        </div>\n        <div *ngIf=\"formTypePersonal === 'edit'\" class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n            </label>\n            <div *ngIf=\"dataRequirementUrl.length !== 0\" class=\"row\">\n              <div *ngFor=\"let e of dataRequirementUrl\" class=\"col-12 col-xs-12 col-md-12\">\n                <div *ngIf=\"e.document_url === null\">\n                  <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                </div>\n                <div *ngIf=\"e.document_url !== null\">\n                  <div class=\"card text-left mb-3\">\n                    <div class=\"card-body p-2\">\n                      <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                          class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                        <p class=\"card-text pl-1 mb-0\"> {{e.document_name ? e.document_name : e.document_type |\n                          shortener:[55, '..']}}\n                        </p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"dataRequirementUrl.length == 0\" class=\"row\">\n              <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 text-right\">\n        <button type=\"button\" (click)=\"documentRequirementModalClose()\" [disabled]=\"this.loading\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button>\n          <button type=\"submit\" class=\"btn btn-success btn-sm m-1\"\n            [disabled]=\"participantDocumentForm.invalid || this.loading\" (click)=\"createPersonalDocumentParticipant()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i></span>\n          </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #reportCardDetailModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\"\n  [loading]=\"loadingSemester\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ isViewRaport ? ('ROOT.detail' | translate) : ('ROOT.add' | translate) }} {{ 'CONTENT.school-report' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRaportModalDetail();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"reportCardDataForm\"\n      (ngSubmit)=\"createReportCardDocument();\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\" *ngIf=\"!isNotHaveMappingData\">\n          <p class=\"mb-0\"><span class=\"required\">* Wajib diisi</span></p>\n          <div *ngIf=\"!isViewRaport\" class=\"form-group mb-2\">\n            <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.semester' | translate }} <span\n                class=\"required\">*</span></label>\n            <ng-select name=\"semester\" formControlName=\"semester_id\" [placeholder]=\"'CONTENT.semester'|translate\"\n              [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"semester\"\n              [options]=\"listSemester\" (selected)=\"changeSemesters($event)\"\n              [ngClass]=\"!semester?'filter-dropdown is-invalid':(semester?'filter-dropdown is-valid':'filter-dropdown')\">\n            </ng-select>\n            <label *ngIf=\"!semester\" id=\"validation-email-error\"\n              class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-choose' |\n              translate }} {{ 'CONTENT.semester' | translate }}</label>\n          </div>\n          <div *ngIf=\"isViewRaport\" class=\"form-group mb-1\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.semester' | translate }} <span\n                class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control is-valid\" formControlName=\"semester_name\" name=\"semester_name\" readonly>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"isBahasaStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.indo-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"bahasa\" name=\"indoScore\" minlength=\"0\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required [readonly]=\"isViewRaport\"\n                [ngClass]=\"fraport.bahasa.invalid && fraport.bahasa.touched?'is-invalid':(fraport.bahasa.valid?'is-valid':'')\"\n                >\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.required && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.min && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.max && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.bahasa.errors && fraport.bahasa.errors.pattern && (fraport.bahasa.touched || fraport.bahasa.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"isEnglishStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.english-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"english\" name=\"englishScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required [readonly]=\"isViewRaport\"\n                [ngClass]=\"fraport.english.invalid && fraport.english.touched?'is-invalid':(fraport.english.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.required && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.min && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.max && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.english.errors && fraport.english.errors.pattern && (fraport.english.touched || fraport.english.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"isMathStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.math-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"math\" name=\"mathScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required [readonly]=\"isViewRaport\"\n                [ngClass]=\"fraport.math.invalid && fraport.math.touched?'is-invalid':(fraport.math.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.required && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.min && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.max && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.math.errors && fraport.math.errors.pattern && (fraport.math.touched || fraport.math.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"physicsStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.physics-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"physics\" name=\"physicsScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required [readonly]=\"isViewRaport\"\n                [ngClass]=\"fraport.physics.invalid && fraport.physics.touched?'is-invalid':(fraport.physics.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.required && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.min && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.max && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.physics.errors && fraport.physics.errors.pattern && (fraport.physics.touched || fraport.physics.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"chemicalStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.chemical-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"chemical\" name=\"chemicalScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required [readonly]=\"isViewRaport\"\n                [ngClass]=\"fraport.chemical.invalid && fraport.chemical.touched?'is-invalid':(fraport.chemical.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.required && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.min && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.max && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.chemical.errors && fraport.chemical.errors.pattern && (fraport.chemical.touched || fraport.chemical.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"biologyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.biology-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"biology\" name=\"biologyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required [readonly]=\"isViewRaport\"\n                [ngClass]=\"fraport.biology.invalid && fraport.biology.touched?'is-invalid':(fraport.biology.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.required && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.min && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.max && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.biology.errors && fraport.biology.errors.pattern && (fraport.biology.touched || fraport.biology.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"sociologicalStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sociology-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"sociological\" name=\"sociologicalScore\"\n                minlength=\"1\" maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\"\n                required [readonly]=\"isViewRaport\" [ngClass]=\"fraport.sociological.invalid && fraport.sociological.touched?'is-invalid':(fraport.sociological.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.required && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.min && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.max && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.sociological.errors && fraport.sociological.errors.pattern && (fraport.sociological.touched || fraport.sociological.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"economyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.economy-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"economy\" name=\"economyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required [readonly]=\"isViewRaport\"\n                [ngClass]=\"fraport.economy.invalid && fraport.economy.touched?'is-invalid':(fraport.economy.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.required && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.min && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.max && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.economy.errors && fraport.economy.errors.pattern && (fraport.economy.touched || fraport.economy.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n            <div *ngIf=\"geographyStudy\" class=\"form-group col-md-4 mb-1\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.geography-score' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"geography\" name=\"geographyScore\" minlength=\"1\"\n                maxlength=\"3\" min=\"0\" max=\"100\" placeholder=\"{{'CONTENT.mapel_placeholder' | translate}}\" required [readonly]=\"isViewRaport\"\n                [ngClass]=\"fraport.geography.invalid && fraport.geography.touched?'is-invalid':(fraport.geography.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.required && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.min && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.min-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.max && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.max-range-score' | translate }}</label>\n              <label\n                *ngIf=\"fraport.geography.errors && fraport.geography.errors.pattern && (fraport.geography.touched || fraport.geography.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"form-row mt-0 mb-0\">\n            <div *ngIf=\"!isViewRaport\" class=\"form-group mb-1 col-md-12\">\n              <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.upload-file-raport' | translate}} <span\n                  class=\"required\">*</span></label>\n              <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n                accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadReportCardFile($event)\" />\n               <p class=\"error text-danger small form-text\">\n                {{ 'CONTENT.file-raport-requirement' | translate}} <br>\n                  {{fraport.url.errors && fraport.url.errors.required && (fraport.url.touched || fraport.url.dirty) ? ('CONTENT.required' | translate) : ''}}\n                  {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' | translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.</p>\n\n              <label\n                *ngIf=\"fraport.url.errors && fraport.url.errors.required && (fraport.url.touched || fraport.url.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            </div>\n            <div *ngIf=\"isViewRaport\" class=\"form-group col-md-12 mb-1\">\n              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.report-card-file' | translate }}\n              </label>\n              <div *ngIf=\"listDocumentReport.length !== 0\" class=\"row\">\n                <div *ngFor=\"let e of listDocumentReport\" class=\"col-12 col-xs-12 col-md-12\">\n                  <div *ngIf=\"e.url === null\">\n                    <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n                  </div>\n                  <div *ngIf=\"e.url !== null\">\n                    <div class=\"card text-left mb-3\">\n                      <div class=\"card-body p-2\">\n                        <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                            class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                          <p class=\"card-text pl-1 mb-0\"> {{e.semesters | shortener:[55, '..']}}\n                          </p>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"listDocumentReport.length == 0\" class=\"row\">\n                <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showMapel\" class=\"row\">\n            <div ngif class=\"col-md-12 mb-0 mt-0 text-right\">\n                <button type=\"button\" (click)=\"closeRaportModalDetail()\" [disabled]=\"this.loading\"\n                  class=\"btn btn-secondary btn-sm\">\n                  <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n                </button>\n                <button *ngIf=\"!isViewRaport\" type=\"submit\" class=\"btn btn-success btn-sm m-1\"\n                  [disabled]=\"reportCardDataForm.invalid || this.loading\">\n                  <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                  <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n                  <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i></span>\n                </button>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"isNotHaveMappingData\" class=\"col-md-12\">\n          <app-alert type=\"warning\">{{'CONTENT.not-have-mapping-admin' | translate }}</app-alert>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #certificateDetailModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ isViewCertificate ? ('ROOT.detail' | translate) : ('ROOT.add' | translate) }} {{ 'CONTENT.certificate' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeCertificateModalDetail();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"certificateDataForm\"\n      (ngSubmit)=\"createCertificateDocument()\">\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-level' | translate }}</label>\n          <ng-select name=\"certificate-level\" formControlName=\"certificate_level_id\"\n            [placeholder]=\"'CONTENT.certificate-level'|translate\" required [disabled]=\"isViewCertificate\"\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"certificateLevel\" [options]=\"listCertificateLevel\"\n            [ngClass]=\"!certificateLevel?'filter-dropdown is-invalid':(certificateLevel?'filter-dropdown is-valid':'filter-dropdown')\">>\n          </ng-select>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-level' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-type' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select name=\"certificate-type\" formControlName=\"certificate_type_id\"\n            [placeholder]=\"'CONTENT.certificate-type'|translate\" required [disabled]=\"isViewCertificate\"\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"certificateType\"\n            [options]=\"listCertificateType\" [ngClass]=\"!certificateType?'filter-dropdown is-invalid':(certificateType?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-type' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-name' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"description\"\n            [placeholder]=\"'CONTENT.certificate-name'|translate\" required [readonly]=\"isViewCertificate\"\n            [ngClass]=\"fcertif.name.invalid && fcertif.name.touched?'is-invalid':(fcertif.name.valid?'is-valid':'')\"/>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-name' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.certificate-description' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"description\" name=\"description\"\n            [placeholder]=\"'CONTENT.certificate-description'|translate\" required [readonly]=\"isViewCertificate\"\n            [ngClass]=\"fcertif.description.invalid && fcertif.description.touched?'is-invalid':(fcertif.description.valid?'is-valid':'')\">\n          </textarea>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.description' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-year' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"publication_year\" name=\"publicationYear\"\n            [placeholder]=\"'CONTENT.publication-year'|translate\" maxlength=\"4\" required [readonly]=\"isViewCertificate\"\n            [ngClass]=\"fcertif.publication_year.invalid && fcertif.publication_year.touched?'is-invalid':(fcertif.publication_year.valid?'is-valid':'')\"/>\n          <label\n            *ngIf=\"fcertif.publication_year.errors && fcertif.publication_year.errors.maxlength && (fcertif.publication_year.touched || fcertif.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.year-validators' | translate }}</label>\n          <label\n            *ngIf=\"fcertif.publication_year.errors && fcertif.publication_year.errors.pattern && (fcertif.publication_year.touched || fcertif.publication_year.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only-1' | translate }}</label>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.publication-year' | translate }} </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.certificate-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"certificate_score\" name=\"certificateScore\"\n            [placeholder]=\"'CONTENT.certificate-score'|translate\" required maxlength=\"3\" [readonly]=\"isViewCertificate\"\n            [ngClass]=\"fcertif.certificate_score.invalid && fcertif.certificate_score.touched?'is-invalid':(fcertif.certificate_score.valid?'is-valid':'')\"/>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-choose' | translate }} {{ 'CONTENT.certificate-score' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div *ngIf=\"!isViewCertificate\" class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label mb-0 f-w-600\">{{'CONTENT.upload-file' | translate}} <span class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadCertificateFile($event)\"\n            [ngClass]=\"fcertif.url.invalid && fcertif.url.touched?'is-invalid':(fcertif.url.valid?'is-valid':'')\"/>\n            <p class=\"error text-danger small form-text\">\n              {{fcertif.url.errors && fcertif.url.errors.required && (fcertif.url.touched || fcertif.url.dirty) ? ('CONTENT.required' | translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' | translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.</p>\n        </div>\n        <div *ngIf=\"isViewCertificate\" class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.certificate-file' | translate }}\n          </label>\n          <div *ngIf=\"listDocumentCertificate.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of listDocumentCertificate\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.certificate_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.certificate_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.certificate_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.certificate_name | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"listDocumentCertificate.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 mt-0 text-right col-md-12\">\n            <button type=\"button\" (click)=\"closeCertificateModalDetail()\" [disabled]=\"this.loading\"\n              class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button>\n            <button *ngIf=\"!isViewCertificate\" type=\"submit\" class=\"btn btn-success btn-sm m-1\" [disabled]=\"certificateDataForm.invalid || this.loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i></span>\n            </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #recommendationS2Modal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\"\n  [loading]=\"loadingRecommendation\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.recommendation-document-S2' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"recommendationS2Modal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"recommendationS2Form\"\n      (ngSubmit)=\"createRecommendationdocument()\">\n      <app-alert type=\"warning\">\n        <div class=\"col-sm-12 text-center\">\n          <h6>{{ 'CONTENT.send-email-recommendation-info' | translate }}</h6>\n        </div>\n      </app-alert>\n      <div class=\"row\">\n        <h5 class=\"col-md-12\">Rekomendasi Pertama\n          <hr>\n        </h5>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.name' | translate}} <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name_rec1\" name=\"name_rec1\"\n            [placeholder]=\"'CONTENT.recommendation_name_1'|translate\" required maxlength=\"150\"\n            [ngClass]=\"frod.name_rec1.invalid && frod.name_rec1.touched?'is-invalid':(frod.name_rec1.valid?'is-valid':'')\"\n            [readonly]=\"viewRecommendationS2\">\n          <label\n            *ngIf=\"frod.name_rec1.errors && frod.name_rec1.errors.required && (frod.name_rec1.touched || frod.name_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.handphone' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"handphone_rec1\" name=\"handphone_rec1\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\" minlength=\"11\" maxlength=\"13\" required\n            [readonly]=\"viewRecommendationS2\" [ngClass]=\"frod.handphone_rec1.invalid && frod.handphone_rec1.touched?'is-invalid':(frod.handphone_rec1.valid?'is-valid':'')\"\n            >\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.required && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.pattern && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec1.errors && frod.handphone_rec1.errors.minlength && (frod.handphone_rec1.touched || frod.handphone_rec1.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.email' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email_rec1\"\n            pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\"\n            oninput=\"setCustomValidity('')\" name=\"email_rec1\" [placeholder]=\"'CONTENT.recommendation_email_1'|translate\"\n            required [readonly]=\"viewRecommendationS2\" maxlength=\"150\"\n            [ngClass]=\"frod.email_rec1.invalid && (frod.email_rec1.dirty || frod.email_rec1.touched)?'is-invalid':(frod.email_rec1.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.email_rec1.invalid && (frod.email_rec1.dirty || frod.email_rec1.touched )\"\n            id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.email-match' | translate}}</label>\n        </div>\n        <h5 class=\"mt-3 col-md-12\">Rekomendasi Kedua\n          <hr>\n        </h5>\n        <hr>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.name' | translate}} <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name_rec2\" name=\"name_rec2\"\n            [placeholder]=\"'CONTENT.recommendation_name_1'|translate\" required maxlength=\"150\"\n            [readonly]=\"viewRecommendationS2\" [ngClass]=\"frod.name_rec2.invalid && frod.name_rec2.touched?'is-invalid':(frod.name_rec2.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.name_rec2.errors && frod.name_rec2.errors.required && (frod.name_rec2.touched || frod.name_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.handphone' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"handphone_rec2\" name=\"handphone_rec2\"\n            [placeholder]=\"'CONTENT.placeholder-number' | translate\" minlength=\"11\" maxlength=\"13\" required\n            [readonly]=\"viewRecommendationS2\" [ngClass]=\"frod.handphone_rec2.invalid && frod.handphone_rec2.touched?'is-invalid':(frod.handphone_rec2.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.required && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.pattern && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n          <label\n            *ngIf=\"frod.handphone_rec2.errors && frod.handphone_rec2.errors.minlength && (frod.handphone_rec2.touched || frod.handphone_rec2.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.email' | translate}} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [readonly]=\"viewRecommendationS2\" formControlName=\"email_rec2\"\n            pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\"\n            oninput=\"setCustomValidity('')\" name=\"email_rec2\" [placeholder]=\"'CONTENT.recommendation_email_1'|translate\"\n            required maxlength=\"150\"\n            [ngClass]=\"frod.email_rec2.invalid && (frod.email_rec2.dirty || frod.email_rec2.touched)?'is-invalid':(frod.email_rec2.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"frod.email_rec2.invalid && (frod.email_rec2.dirty || frod.email_rec2.touched )\"\n            id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.email-match' | translate}}</label>\n        </div>\n        <div class=\"col-md-12 text-right\">\n            <button type=\"button\" (click)=\"recommendationS2Modal.hide();\" [disabled]=\"this.loading\"\n              class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button>\n            <button [hidden]=\"viewRecommendationS2\" type=\"submit\" class=\"btn btn-primary btn-sm ml-1\"\n              [disabled]=\"recommendationS2Form.invalid || this.loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i class=\"icofont icofont-location-arrow\"></i></span>\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-sm ml-1\" (click)=\"sendEmailRecommendationS2()\"\n              [disabled]=\"formTypeRecommendationS2 === 'input'\" [disabled]=\"this.loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\"> <i class=\"ti-email\"></i> {{'CONTENT.send-email' | translate }}</span>\n            </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #modalOrderForm [loading]=\"loadingCard\" [dialogClass]=\"'modal-lg'\" [containerClick]=\"false\"\n  [hideFooter]=\"true\" [hideHeader]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"text-center\">{{ 'CONTENT.info' | translate }}</h5>\n  </div>\n  <div class=\"app-modal-body\">\n    <form [formGroup]=\"registrationParticipantDataForm\" class=\"md-float-material form-material\" action=\"javascript:\">\n      <h6 class=\"text-center\" class=\"mt-1\">\n        <i class=\"icofont icofont-check-circled text-success\"></i>\n        {{ 'CONTENT.sentence_form_order' | translate }}\n      </h6>\n      <app-alert *ngIf=\"isVirtualAccount\" type=\"warning\" class=\"text-justify\">Silakan Cek Email untuk melihat detail\n        pembayaran Anda!</app-alert>\n      <div class=\"form-group row mt-1\">\n        <label for=\"fullname\" class=\"col-sm-4 col-form-label\">{{'CONTENT.fullname' | translate}}</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" id=\"fullname\" formControlName=\"fullname\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label *ngIf=\"!showPassport\" for=\"NIK\" class=\"col-sm-4 col-form-label\">{{'CONTENT.NIK' | translate}}</label>\n        <label *ngIf=\"showPassport\" for=\"NIK\" class=\"col-sm-4 col-form-label\">{{'CONTENT.passport_number' |\n          translate}}</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" id=\"NIK\" formControlName=\"NIK\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"registration_number\" class=\"col-sm-4 col-form-label\"><b>{{'CONTENT.registration-number' |\n            translate}} </b></label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" id=\"registration_number\" formControlName=\"registration_number\">\n          <h6 style=\"color:red\">{{ 'CONTENT.save_orderform' | translate }}</h6>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"payment_methodd\" class=\"col-sm-4 col-form-label\">{{'CONTENT.payment-method' | translate}} </label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" id=\"payment_methodd\" formControlName=\"payment_methodd\">\n        </div>\n      </div>\n      <div [hidden]=\"!isVirtualAccount\" class=\"form-group row\">\n        <label for=\"payment_code\" class=\"col-sm-4 col-form-label\"> <b>{{'CONTENT.payment-code' | translate}}</b></label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" id=\"payment_code\" formControlName=\"payment_code\">\n        </div>\n      </div>\n    </form>\n    <!-- <div [hidden]=\"!isNotFinpay\" class=\"row mt-3\">\n      <div class=\"col-sm-12\">\n        <app-card [hidHeader]=\"true\">\n          <a href=\"javascript:\" *ngIf=\"isCollapseReg\" class=\"text-dark\" (click)=\"isCollapseReg = !isCollapseReg\"\n            [attr.aria-expanded]=\"!isCollapseReg\" aria-controls=\"collapseExample\">\n            <h6>\n              <b>{{ 'CONTENT.panduan-pembayaran' | translate }}\n                <i class=\"feather icon-chevron-down\"></i>\n              </b>\n            </h6>\n          </a>\n          <div id=\"collapseExample\" [ngbCollapse]=\"isCollapseReg\">\n            <a href=\"javascript:\" class=\"text-dark\" *ngIf=\"!isCollapseReg\" (click)=\"isCollapseReg = !isCollapseReg\"\n              [attr.aria-expanded]=\"!isCollapseReg\" aria-controls=\"collapseExample\">\n              <h6>\n                <b>{{ 'CONTENT.panduan-pembayaran' | translate }}\n                  <i class=\"feather icon-chevron-up\"></i>\n                </b>\n              </h6>\n            </a>\n            <hr>\n            <p class=\"font\">{{ 'CONTENT.cara-bayar' | translate }}</p>\n            <div class=\"text-center\">\n              <a href=\"https://smb.telkomuniversity.ac.id/wp-content/uploads/2020/11/PANDUAN-PEMBAYARAN-PIN-PENDAFTARAN.pdf\"\n                target=\"_blank\" type=\"button\"\n                class=\"btn btn-sm btn-primary text-center col-12 col-sm-5 col-md-5 button-margin-top button-margin rounded\"><i\n                  class=\"icofont icofont-bank\"></i> {{'CONTENT.panduan-pembayaran' |\n                translate}}</a>\n            </div>\n          </div>\n        </app-card>\n      </div>\n    </div> -->\n    <!-- <div class=\"row\"> -->\n    <div class=\"text-right\">\n      <a class=\"btn btn-primary btn-sm btn-round has-ripple col-12 col-md-3 mt-1 mb-2\" href=\"/registration-history\">{{\n        'MENU.registration_history' | translate }}</a>\n    </div>\n    <!-- </div> -->\n  </div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #utbkModals [containerClick]=\"false\" [dialogClass]=\"'modal-lg'\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeUtbkModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"utbkForm\"\n      (ngSubmit)=\"createUtbkDocument()\">\n      <div class=\"row\">\n        <p class=\"col-md-12\"><span class=\"required\">* Wajib diisi</span></p>\n        <h5 class=\"col-md-12 text-center\">{{'CONTENT.common-value' | translate}} <span class=\"required\">*</span></h5>\n      </div>\n      <hr class=\"text-bold\">\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.kpu-score' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"KPUScore\" name=\"KPUScore\" min=\"0\" max=\"1000\"\n            minlength=\"1\" maxlength=\"6\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\" required>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.required && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.max && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KPUScore.errors && futbk.KPUScore.errors.pattern && (futbk.KPUScore.touched || futbk.KPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pk-score' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"PKScore\" name=\"PKScore\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.required && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.max && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PKScore.errors && futbk.PKScore.errors.pattern && (futbk.PKScore.touched || futbk.PKScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pdpu-score' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"PDPUScore\" name=\"PDPUScore\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.required && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.max && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.PDPUScore.errors && futbk.PDPUScore.errors.pattern && (futbk.PDPUScore.touched || futbk.PDPUScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.kmbdm-score' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"KMBDMScore\" name=\"KMBDMScore\" required min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\">\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.required && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.max && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.KMBDMScore.errors && futbk.KMBDMScore.errors.pattern && (futbk.KMBDMScore.touched || futbk.KMBDMScore.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.category-utbk' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"exam-location\" [placeholder]=\"'CONTENT.category-utbk'|translate\"\n            [ngClass]=\"'custom'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectedCategoryUtbk\"\n            [options]=\"listCategoryUtbk\" [ngModelOptions]=\"{standalone: true}\" (selected)=\"changeCategoryUtbk($event)\">\n          </ng-select>\n          <label *ngIf=\"!selectedCategoryUtbk\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n      </div>\n      <div *ngIf=\"selectedCategoryUtbk\" class=\"row\">\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.math-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"math\" name=\"math\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.required && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.max && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label *ngIf=\"futbk.math.errors && futbk.math.errors.pattern && (futbk.math.touched || futbk.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.physics-score' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"physics\"\n            [placeholder]=\"'CONTENT.placeholder-utbk'|translate\" name=\"physics\" min=\"0\" max=\"1000\" minlength=\"1\"\n            maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.required && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.max && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.physics.errors && futbk.physics.errors.pattern && (futbk.physics.touched || futbk.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.chemical' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"chemical\" name=\"chemical\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.required && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.max && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.chemical.errors && futbk.chemical.errors.pattern && (futbk.chemical.touched || futbk.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.biology' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"biological\" name=\"biological\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.required && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.max && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.biological.errors && futbk.biological.errors.pattern && (futbk.biological.touched || futbk.biological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.geography' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"geography\" name=\"geography\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.required && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.max && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.geography.errors && futbk.geography.errors.pattern && (futbk.geography.touched || futbk.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.historical' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"historical\" name=\"historical\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.required && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.max && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.historical.errors && futbk.historical.errors.pattern && (futbk.historical.touched || futbk.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sociological' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"sociological\" name=\"sociological\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.required && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.max && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.sociological.errors && futbk.sociological.errors.pattern && (futbk.sociological.touched || futbk.sociological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n        <div *ngIf=\"!isSaintek\" class=\"form-group mb-2 col-md-3\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.economy' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.placeholder-utbk'|translate\"\n            formControlName=\"economy\" name=\"economy\" min=\"0\" max=\"1000\" minlength=\"1\" maxlength=\"6\" required>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.required && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.max && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.score-max-utbk' | translate }}\n          </label>\n          <label\n            *ngIf=\"futbk.economy.errors && futbk.economy.errors.pattern && (futbk.economy.touched || futbk.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only-comma' | translate }}\n          </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.upload-file' | translate}} <span\n              [hidden]=\"formTypeUtbk === 'edit'\" class=\"required\">*</span></label>\n          <input id=\"utbkFile\" class=\"form-control\" type=\"file\" name=\"utbkFile\" formControlName=\"url\"\n            [required]=\"!isUtbkUpdated\" accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadUtbkDocument($event)\" />\n          <div *ngIf=\"errSize\" class=\"text-danger mt-4 ml-1\">Max 2 MB!</div>\n          <div *ngIf=\"errType\" class=\"text-danger mt-4 ml-1\">Error file!</div>\n        </div>\n        <div *ngIf=\"formTypeUtbk === 'edit'\" class=\"form-group col-md-6\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.evidence' | translate }}\n          </label>\n          <div *ngIf=\"dataUtbkUrl.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataUtbkUrl\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> Nilai UTBK\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataUtbkUrl.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 mt-2 text-right col-md-12\">\n          <div class=\"btn-group\">\n            <button type=\"button\" (click)=\"closeUtbkModals();\" [disabled]=\"this.loading\"\n              class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button>\n            <button type=\"submit\" class=\"btn btn-primary btn-sm\"\n              [disabled]=\"utbkForm.invalid || !selectedCategoryUtbk || this.loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\"><i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #eprtAndTpaModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeEprtTpaModals();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"eprtAndTpaForm\"\n      (ngSubmit)=\"createEprtTpaDocument()\">\n      <div class=\"row\">\n        <app-alert *ngIf=\"isEPRTDocument || isTPADocument\" type=\"primary\" class=\"text-center col-md-12\">\n          {{isTPADocument ? ('CONTENT.tpa-information' | translate) : ('CONTENT.eprt-information' | translate)}} <br>\n          <a *ngIf=\"isEPRTDocument\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm m-1\"\n            ><i class=\"icofont icofont-prescription\"></i> {{'CONTENT.eprt-test' | translate}}</a>\n          <a *ngIf=\"isTPADocument\" href=\"https://tinyurl.com/documenttmp\" target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm m-1\"\n            ><i class=\"icofont icofont-prescription\"></i> {{'CONTENT.tpa-test' | translate}} </a>\n        </app-alert>\n      </div>\n      <div class=\"row align-items-center\">\n          <div class=\"text-left col-12 col-md-6 mb-1\">\n            <a *ngIf=\"isResidensi\"\n            href=\"https://tinyurl.com/documenttmp\"\n            target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm\">\n           <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isSuratIjinAtasan\"\n            href=\"https://tinyurl.com/documenttmp\"\n            target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isPromotor\"\n            href=\"https://tinyurl.com/documenttmp\"\n            target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          <a *ngIf=\"isCoPromotor\"\n            href=\"https://tinyurl.com/documenttmp\"\n            target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-sm\">\n            <i class=\"icofont icofont-cloud-download\"></i> {{ 'CONTENT.template-download' | translate }}\n          </a>\n          </div>\n          <div class=\"text-right col-12 col-md-6\">\n            <p>{{'CONTENT.completeness-document' | translate}}:\n              <span class=\"badge badge-light-success\" *ngIf=\"haveDocumentStudy\">{{ 'CONTENT.complete' |\n                translate}}</span>\n              <span class=\"badge badge-light-danger\" *ngIf=\"!haveDocumentStudy\">{{ 'CONTENT.not-complete' |\n                translate}}</span>\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"isPromotor || isCoPromotor|| isResidensi || isSuratIjinAtasan\" class=\"form-group mb-2 col-md-12\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-req-name' | translate }} </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" readonly>\n          </div>\n          <div *ngIf=\"isCoPromotor\" class=\"form-group mb-2 col-md-12\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.name-co-promotor' | translate }}\n              <span class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"nameCoPromotor\" name=\"nameCoPromotor\"\n              [placeholder]=\"'CONTENT.name-co-promotor'|translate\" [ngClass]=\"fed.nameCoPromotor.invalid && fed.nameCoPromotor.touched?'is-invalid':(fed.nameCoPromotor.valid?'is-valid':'')\">\n              <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.required' | translate }} </label>\n          </div>\n          <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isIPKDocument\"\n            class=\"form-group mb-2 col-md-12\">\n            <label *ngIf=\"isEPRTDocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.eprt-publication-year' | translate\n              }} <span class=\"required\">*</span></label>\n            <label *ngIf=\"isTPADocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa-publication-year' | translate }}\n              <span class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"publication_year\" name=\"publicationYear\"\n              [placeholder]=\"'CONTENT.pub-year'|translate\" maxlength=\"4\" required [ngClass]=\"fed.publication_year.invalid && fed.publication_year.touched?'is-invalid':(fed.publication_year.valid?'is-valid':'')\">\n            <label\n              *ngIf=\"eprtAndTpaForm.controls.publication_year.errors && eprtAndTpaForm.controls.publication_year.errors.maxlength && (eprtAndTpaForm.controls.publication_year.touched || eprtAndTpaForm.controls.publication_year.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.year-validators' | translate }}</label>\n            <label\n              *ngIf=\"eprtAndTpaForm.controls.publication_year.errors && eprtAndTpaForm.controls.publication_year.errors.pattern && (eprtAndTpaForm.controls.publication_year.touched || eprtAndTpaForm.controls.publication_year.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.number-only-1' | translate }}</label>\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.required' | translate }} </label>\n\n          </div>\n          <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isIPKDocument\" class=\"form-group mb-2 col-md-12\">\n            <label *ngIf=\"isEPRTDocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.eprt-score' | translate }} <span\n                class=\"required\">*</span></label>\n            <label *ngIf=\"isTPADocument\" class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa-score' | translate }} <span\n                class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"eprt_tpa_score\" name=\"certificateScore\" maxlength=\"3\"\n              [placeholder]=\"'CONTENT.score'|translate\" required  [ngClass]=\"fed.eprt_tpa_score.invalid && fed.eprt_tpa_score.touched?'is-invalid':(fed.eprt_tpa_score.valid?'is-valid':'')\">\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.required' | translate }} </label>\n          </div>\n          <div [hidden]=\"isPromotor || isCoPromotor || isResidensi || isSuratIjinAtasan || isEPRTDocument || isTPADocument\" class=\"form-group mb-2 col-md-12\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.ipk-score' | translate }} <span\n                class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"gpa\" placeholder=\"3.55\"\n                [ngClass]=\"fed.gpa.invalid && fed.gpa.touched?'is-invalid':(fed.gpa.valid?'is-valid':'')\" required max=\"4\" maxlength=\"4\">\n                <label\n                  *ngIf=\"fed.gpa.errors && fed.gpa.errors.required && (fed.gpa.touched || fed.gpa.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                <label\n                  *ngIf=\"fed.gpa.errors && fed.gpa.errors.max && (fed.gpa.touched || fed.gpa.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n                <label\n                  *ngIf=\"fed.gpa.errors && fed.gpa.errors.pattern && (fed.gpa.touched || fed.gpa.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.gpa-validation-pattern' | translate }}</label>\n              </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 col-md-12\">\n          <label class=\"form-label mb-0 f-w-600\">{{isEprtUpdated == true ? ('CONTENT.edit-file' | translate) : ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isEprtUpdated\"  class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadStudyDocumentEprt($event)\"\n            [ngClass]=\"fed.url.invalid && fed.url.touched?'is-invalid':(fed.url.valid?'is-valid':'')\"/>\n            <p class=\"error text-danger small form-text\">\n              {{fed.url.errors && fed.url.errors.required && (fed.url.touched || fed.url.dirty) ? ('CONTENT.required' | translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' | translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.</p>\n         </div>\n        <div *ngIf=\"formTypeStudy === 'edit'\" class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataStudyUrl.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataStudyUrl\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_name !== null ? (e.document_name | shortener:[55, '..']) : 'Data Dokumen'}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataStudyUrl.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n            <button type=\"button\" (click)=\"closeEprtTpaModals();\" [disabled]=\"this.loading\"\n              class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button>\n            <button type=\"submit\" class=\"btn btn-success btn-sm m-1\" [disabled]=\"eprtAndTpaForm.invalid || this.loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i></span>\n            </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #proposalModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"proposalModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"proposalForm\"\n      (ngSubmit)=\"createProposalDocument()\">\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.proposal-title' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"title\"\n            [placeholder]=\"'CONTENT.proposal-title'|translate\" required maxlength=\"1000\"\n            [ngClass]=\"fprd.title.invalid && fprd.title.touched?'is-invalid':(fprd.title.valid?'is-valid':'')\"></textarea>\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.required' | translate }} </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 col-md-12\">\n          <label class=\"form-label mb-0 f-w-600\">{{isEprtUpdated == true ? ('CONTENT.edit-file' | translate) : ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isEprtUpdated\"  class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"certificateDetail\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadProposalDocument($event)\"\n            [ngClass]=\"fprd.url.invalid && fprd.url.touched?'is-invalid':(fprd.url.valid?'is-valid':'')\"/>\n            <p class=\"error text-danger small form-text\">\n              {{fprd.url.errors && fprd.url.errors.required && (fprd.url.touched || fprd.url.dirty) ? ('CONTENT.required' | translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' | translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.</p>\n        </div>\n        <div *ngIf=\"formTypeProposal === 'edit'\" class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataProposal.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataProposal\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_name | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataProposal.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <button type=\"button\" (click)=\"proposalModal.hide();\" [disabled]=\"this.loading\"\n          class=\"btn btn-secondary btn-sm\">\n          <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n        </button>\n        <button type=\"submit\" class=\"btn btn-success btn-sm m-1\" [disabled]=\"proposalForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i></span>\n        </button>\n      </div>\n    </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #publicationDataModals [containerClick]=\"false\" dialogClass=\"modal-dialog modal-dialog-centered modal-xl\" [hideFooter]=\"true\" [loading]=\"loadTablePublication\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.detail' | translate }} {{ 'CONTENT.publication' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"publicationDataModals.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"form-group mb-2 text-right\">\n      <button class=\"btn btn-outline-success btn-sm\" (click)=\"loadPublicationDataDetails(null, 'input')\">\n        <i class=\"icofont icofont-plus\"></i> {{ 'ROOT.add' | translate }} {{ 'CONTENT.publication' | translate }}\n      </button>\n    </div>\n    <div class=\"table-responsive pb-1\">\n        <table class=\"table table-sm table-boder-radius dataTable\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" class=\"text-center pl-1 pr-1\">{{ 'CONTENT.no' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-name' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-position' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-title' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.writer-type' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.publication-date' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.link' | translate}}</th>\n              <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.action' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tableDataPublication?.length != 0\">\n            <tr *ngFor=\"let data of tableDataPublication | slice: (pageDocument-1) * 10 : pageDocument * 10; let i = index;\">\n              <td class=\"text-center pl-1 pr-1\">{{ (pageDocument-1) * 10 + (i + 1) }}.</td>\n              <td>{{ data.writer_name }}</td>\n              <td class=\"text-center\">{{ data.publication_writer_position }}</td>\n              <td class=\"text-center\">{{ data.title }}</td>\n              <td class=\"text-center\">{{ data.publication_type }}</td>\n              <td class=\"text-center\">{{ data.publish_date | date: 'dd/MM/yyyy' }}</td>\n              <td class=\"text-center\">\n                <a [href]=\"data.publication_link\" target=\"_blank\"class=\"btn btn-sm btn-outline-primary\">\n                  {{'CONTENT.link' | translate}}</a>\n              </td>\n              <td class=\"text-center\">\n                <!-- <button class=\"btn btn-warning btn-sm btn-round has-ripple\"\n                  (click)=\"loadPublicationDataDetails(data, 'edit')\">\n                  <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n                </button> -->\n                <button class=\"btn btn-outline-danger btn-sm btn-round has-ripple m-1\" (click)=\"deletePublicationData(data)\">\n                  <i class=\"icofont icofont-trash\"></i> <span class=\"d-sm-none\"> {{'ROOT.delete' | translate}}</span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableDataPublication?.length == 0 && !loadTablePublication\">\n            <tr>\n              <td colspan=\"8\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tableDataPublication?.length == 0 && loadTablePublication\">\n            <tr>\n              <td colspan=\"8\" class=\"no-data-available text-center\">\n                <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n        </table>\n        <ngb-pagination class=\"d-flex justify-content-center\" [(page)]=\"pageDocument\" [pageSize]=\"10\"\n          [collectionSize]=\"tableDataPublication.length\" [maxSize]=\"3\" [boundaryLinks]=\"true\">\n        </ngb-pagination>\n    </div>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #ijazahModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.upload' | translate }} {{ 'CONTENT.document-requirements' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeIjazahModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"ijazahForm\"\n      (ngSubmit)=\"createIjazahDocument()\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 text-right\">\n          <p>{{'CONTENT.completeness-document' | translate}}:\n            <span class=\"badge badge-light-success\" *ngIf=\"haveDocumentIjazah\">{{ 'CONTENT.complete' |\n              translate}}</span>\n            <span class=\"badge badge-light-danger\" *ngIf=\"!haveDocumentIjazah\">{{ 'CONTENT.not-complete' |\n              translate}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.document-name' | translate }} </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\"\n            [placeholder]=\"'CONTENT.document-name'| translate\" readonly>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-12 mb-0\">\n          <label class=\"form-label mb-0 f-w-600\">{{isIjazahUpdated == true ? ('CONTENT.edit-file' | translate) : ('CONTENT.upload-file' | translate) }} <span *ngIf=\"!isUpdatedTranscript\"  class=\"required\">*</span></label>\n          <input id=\"certificateDetail\" class=\"form-control\" type=\"file\" name=\"ijazahDoc\" formControlName=\"url\"\n            accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadIjazahDocument($event)\"\n            [ngClass]=\"fid.url.invalid && fid.url.touched?'is-invalid':(fid.url.valid?'is-valid':'')\" />\n            <p class=\"error text-danger small form-text mb-2\">\n              {{fid.url.errors && fid.url.errors.required && (fid.url.touched || fid.url.dirty) ? ('CONTENT.required' | translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' | translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2 Mb.</p>\n        </div>\n        <div *ngIf=\"formTypeIjazah === 'edit'\" class=\"form-group col-md-12\">\n          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.berkas_persyaratan' | translate }}\n          </label>\n          <div *ngIf=\"dataIjazah.length !== 0\" class=\"row\">\n            <div *ngFor=\"let e of dataIjazah\" class=\"col-12 col-xs-12 col-md-12\">\n              <div *ngIf=\"e.document_url === null\">\n                <div class=\"col-12 mt-1 row\"> Data Tidak Ditemukan!</div>\n              </div>\n              <div *ngIf=\"e.document_url !== null\">\n                <div class=\"card text-left mb-3\">\n                  <div class=\"card-body p-2\">\n                    <a [href]=\"e.document_url\" target=\"_blank\" class=\"d-flex flex-row\" title=\"Download\"><i\n                        class=\"icofont icofont-file-document f-40 ml-0\"></i>\n                      <p class=\"card-text pl-1 mb-0\"> {{e.document_type | shortener:[55, '..']}}\n                      </p>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"dataIjazah.length == 0\" class=\"row\">\n            <div class=\"col-12 mt-3 row\"> Data Tidak Ditemukan!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 text-right col-md-12\">\n          <button type=\"button\" (click)=\"closeIjazahModals()\" [disabled]=\"this.loading\"\n          class=\"btn btn-secondary btn-sm\">\n          <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n        </button>\n        <button type=\"submit\" class=\"btn btn-success btn-sm m-1\" [disabled]=\"ijazahForm.invalid || this.loading\">\n          <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i></span>\n        </button>\n      </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #publikasiModals [containerClick]=\"false\"  dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.add' | translate }} {{ 'CONTENT.publication' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closePublikasiModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"publikasiForm\"\n      (ngSubmit)=\"createPublicationData()\">\n      <div class=\"row\">\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-name' | translate }} <span class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" maxlength=\"150\"\n          placeholder=\"{{ 'CONTENT.writer-name' | translate }}\"\n          [ngClass]=\"fpubd.name.invalid && fpubd.name.touched?'is-invalid':(fpubd.name.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"publikasiForm.controls.name.errors && publikasiForm.controls.name.errors.required && (publikasiForm.controls.name.touched || publikasiForm.controls.name.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-position' | translate }} <span class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"writer-type\" [placeholder]=\"'CONTENT.writer-type' |translate\"\n            formControlName=\"position\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"selectedWriterPosition\" [options]=\"listWriterPosition\"\n            [ngClass]=\"!selectedWriterPosition?'filter-dropdown is-invalid':(selectedWriterPosition?'filter-dropdown is-valid':'filter-dropdown')\"></ng-select>\n          <label *ngIf=\"!selectedWriterPosition\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-title' | translate }} <span class=\"required\">*</span></label> <br>\n          <textarea class=\"form-control\" formControlName=\"title\" maxlength=\"500\" required\n          placeholder=\"{{ 'CONTENT.publication-title' | translate }}\"\n          [ngClass]=\"fpubd.title.invalid && fpubd.title.touched?'is-invalid':(fpubd.title.valid?'is-valid':'')\"\n            ></textarea>\n          <label\n            *ngIf=\"publikasiForm.controls.title.errors && publikasiForm.controls.title.errors.required && (publikasiForm.controls.title.touched || publikasiForm.controls.title.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.writer-type' | translate }} <span class=\"required\">*</span></label>\n          <ng-select class=\"index-up\" name=\"writer-type\" [placeholder]=\"'CONTENT.writer-type' |translate\"\n            formControlName=\"type\" required [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            [(ngModel)]=\"selectedPublicationType\" [options]=\"listPublicationType\"\n            [ngClass]=\"!selectedPublicationType?'filter-dropdown is-invalid':(selectedPublicationType?'filter-dropdown is-valid':'filter-dropdown')\"></ng-select>\n          <label *ngIf=\"!selectedPublicationType\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate}}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-date' | translate }} <span class=\"required\">*</span></label>\n          <input type=\"date\" class=\"form-control\" formControlName=\"publication_date\" name=\"publication_date\"\n          [ngClass]=\"fpubd.publication_date.invalid && fpubd.publication_date.touched?'is-invalid':(fpubd.publication_date.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"publikasiForm.controls.publication_date.errors && publikasiForm.controls.publication_date.errors.required && (publikasiForm.controls.publication_date.touched || publikasiForm.controls.publication_date.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-1 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.link' | translate }} <span class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"link\" name=\"link\" maxlength=\"100\"\n          placeholder=\"{{ 'CONTENT.link' | translate }}\"\n          [ngClass]=\"fpubd.link.invalid && fpubd.link.touched?'is-invalid':(fpubd.link.valid?'is-valid':'')\">\n          </textarea>\n          <label\n            *ngIf=\"fpubd.link.errors && fpubd.link.errors.required && (fpubd.link.touched || fpubd.link.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"mb-0 text-right col-md-12\">\n            <button type=\"button\" (click)=\"closePublikasiModals()\" [disabled]=\"this.loading\"\n              class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button>\n            <button type=\"submit\" class=\"btn btn-success btn-sm m-1\" [disabled]=\"publikasiForm.invalid || this.loading\">\n              <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loading\" class=\"btn-text\">{{ 'ROOT.submit' | translate }}  <i class=\"icofont icofont-location-arrow\"></i></span>\n            </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n");

/***/ }),

/***/ "./src/app/theme/registration-history/registration-data/registration-data-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/registration-history/registration-data/registration-data-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: RegistrationDataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationDataRoutingModule", function() { return RegistrationDataRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _registration_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-data.component */ "./src/app/theme/registration-history/registration-data/registration-data.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _registration_data_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationDataComponent"]
    },
];
let RegistrationDataRoutingModule = class RegistrationDataRoutingModule {
};
RegistrationDataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], RegistrationDataRoutingModule);



/***/ }),

/***/ "./src/app/theme/registration-history/registration-data/registration-data.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/theme/registration-history/registration-data/registration-data.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-merah {\n  background-color: #e01a3f;\n  border-radius: 5px;\n}\n\ntd {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.required {\n  color: red;\n}\n\n.col-size {\n  width: auto;\n  max-width: 7px;\n}\n\n.col-size-doc {\n  width: auto !important;\n  max-width: 50px;\n}\n\n.col-size-doc-2 {\n  max-width: 20px;\n  width: auto !important;\n  text-align: center;\n}\n\ninput[type=text] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=number] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ntextarea {\n  width: 100%;\n  height: 70px;\n  padding: 5px 5px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: transparent;\n  font-size: 13px;\n  color: grey;\n  resize: none;\n}\n\n.index-up {\n  z-index: 3;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 90px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #FF586B;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #0CC27E;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(55px);\n}\n\n/*------ ADDED CSS ---------*/\n\n.on {\n  display: none;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n}\n\n.on {\n  left: 45%;\n}\n\n.off {\n  left: 55%;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n/*--------- END --------*/\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.table-boder-radius {\n  border-collapse: collapse;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n\n.table-boder-radius tr:hover {\n  color: #4680ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL3JlZ2lzdHJhdGlvbi1oaXN0b3J5L3JlZ2lzdHJhdGlvbi1kYXRhL3JlZ2lzdHJhdGlvbi1kYXRhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9yZWdpc3RyYXRpb24taGlzdG9yeS9yZWdpc3RyYXRpb24tZGF0YS9yZWdpc3RyYXRpb24tZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQ0E7RUFDRSxVQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFBZSxhQUFBO0FDR2Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSx5QkFBQTtBQ0lGOztBRERBO0VBQ0UsMkJBQUE7QUNJRjs7QUREQTtFQUNFLG1DQUFBO0VBRUEsMkJBQUE7QUNJRjs7QUREQSw2QkFBQTs7QUFDQTtFQUVFLGFBQUE7QUNHRjs7QURBQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxRQUFBO0FDRUY7O0FEQ0E7RUFFRSxTQUFBO0FDQ0Y7O0FERUE7RUFFRSxTQUFBO0FDQUY7O0FER0E7RUFDQyxjQUFBO0FDQUQ7O0FERUE7RUFDQyxhQUFBO0FDQ0Q7O0FEQ0EseUJBQUE7O0FBRUEsb0JBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREFFO0VBQ0UsY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvcmVnaXN0cmF0aW9uLWhpc3RvcnkvcmVnaXN0cmF0aW9uLWRhdGEvcmVnaXN0cmF0aW9uLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LW1lcmFoe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTAxYTNmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbnRke1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxudGh7XG4gIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5jb2wtc2l6ZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDdweDtcbn1cblxuLmNvbC1zaXplLWRvYyB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuLmNvbC1zaXplLWRvYy0yIHtcbiAgbWF4LXdpZHRoOiAyMHB4O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjpncmV5O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5pbmRleC11cCB7XG4gIHotaW5kZXg6IDM7XG59XG5cbi8vIG11bHRpcGxlIHJvd1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTg2QjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQ0MyN0U7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbn1cblxuLyotLS0tLS0gQURERUQgQ1NTIC0tLS0tLS0tLSovXG4ub25cbntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9uLCAub2ZmXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICB0b3A6IDUwJTtcbn1cblxuLm9uIFxue1xuICBsZWZ0OiA0NSU7XG59XG5cbi5vZmYgXG57XG4gIGxlZnQ6IDU1JTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cbntkaXNwbGF5OiBibG9jazt9XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcbntkaXNwbGF5OiBub25lO31cblxuLyotLS0tLS0tLS0gRU5EIC0tLS0tLS0tKi9cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50YWJsZS1ib2Rlci1yYWRpdXMge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyOmhvdmVyIHtcbiAgICBjb2xvcjogIzQ2ODBmZjtcbiAgfVxufVxuIiwiLmRpdi1tZXJhaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDFhM2Y7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxudGQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxudGgge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLnJlcXVpcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNvbC1zaXplIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogN3B4O1xufVxuXG4uY29sLXNpemUtZG9jIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA1MHB4O1xufVxuXG4uY29sLXNpemUtZG9jLTIge1xuICBtYXgtd2lkdGg6IDIwcHg7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyZXk7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmluZGV4LXVwIHtcbiAgei1pbmRleDogMztcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjU4NkI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDQzI3RTtcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xufVxuXG4vKi0tLS0tLSBBRERFRCBDU1MgLS0tLS0tLS0tKi9cbi5vbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vbiwgLm9mZiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG59XG5cbi5vbiB7XG4gIGxlZnQ6IDQ1JTtcbn1cblxuLm9mZiB7XG4gIGxlZnQ6IDU1JTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKi0tLS0tLS0tLSBFTkQgLS0tLS0tLS0qL1xuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50YWJsZS1ib2Rlci1yYWRpdXMge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFibGUtYm9kZXItcmFkaXVzIHRyOmhvdmVyIHtcbiAgY29sb3I6ICM0NjgwZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/theme/registration-history/registration-data/registration-data.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/theme/registration-history/registration-data/registration-data.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RegistrationDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationDataComponent", function() { return RegistrationDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_oauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../_services/oauth.service */ "./src/app/_services/oauth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/participant.service */ "./src/app/_services/participant.service.ts");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-archwizard/dist */ "./node_modules/ng2-archwizard/dist/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_14__);


















let RegistrationDataComponent = class RegistrationDataComponent {
    constructor(translate, broadcasterService, userService, chartService, route, fb, datePipe, router, currencyPipe, injector) {
        this.translate = translate;
        this.broadcasterService = broadcasterService;
        this.userService = userService;
        this.chartService = chartService;
        this.route = route;
        this.fb = fb;
        this.datePipe = datePipe;
        this.router = router;
        this.currencyPipe = currencyPipe;
        this.injector = injector;
        this.formDataUtbk = new FormData();
        this.formDataUtbkUpd = new FormData();
        this.formDataTranscript = new FormData();
        this.dtOptions = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dtTrigger3 = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dtTrigger4 = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dtTrigger5 = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.type = 'default';
        this.formData = new FormData();
        this.formDataUpdate = new FormData();
        this.formData1 = new FormData();
        this.formDataCertificateUpdated = new FormData();
        this.formData2 = new FormData();
        this.formData2Update = new FormData();
        this.formData3 = new FormData();
        this.formData3Updated = new FormData();
        this.formDataPersonal = new FormData();
        this.formDataPersonalUpdated = new FormData();
        this.formDataPersonalUpd = new FormData();
        this.formDataAbilityUpd = new FormData();
        this.formDataAbility = new FormData();
        this.formDataRaport = new FormData();
        this.formDataStudy = new FormData();
        this.formDataStudyUpd = new FormData();
        this.formDataRecommendationS2 = new FormData();
        this.formDataProposal = new FormData();
        this.formDataProposalUpd = new FormData();
        this.formDataIjazah = new FormData();
        this.formDataIjazahUpd = new FormData();
        this.submitted = false;
        this.pageDocument = 1;
        this.registrationDataForm = this.fb.group({
            registration_number: ({ value: '', disabled: true }),
            program: ({ value: '', disabled: true }),
            selection_path: ({ value: '', disabled: true }),
        });
        this.participantDetailDataForm = this.fb.group({
            registration_number: ({ value: '', disabled: true }),
            participant_id: [''],
            fullname: ({ value: '', disabled: true }),
            mobile_phone_number: ({ value: '', disabled: true }),
            selection_path: ({ value: '', disabled: true }),
            selection_program: ({ value: '', disabled: true }),
            exam_location: ({ value: '', disabled: true }),
            exam_address: ({ value: '', disabled: true }),
            exam_date: ({ value: '', disabled: true }),
            exam_start_time: ({ value: '', disabled: true }),
            exam_end_time: ({ value: '', disabled: true }),
            session: ({ value: '', disabled: true })
        });
        this.registrationParticipantDataForm = this.fb.group({
            fullname: ({ value: '', disabled: true }),
            NIK: ({ value: '', disabled: true }),
            registration_number: ({ value: '', disabled: true }),
            payment_methodd: ({ value: '', disabled: true }),
            payment_code: ({ value: '', disabled: true })
        });
        this.documentRequirementDataForm = this.fb.group({
            document_id: [''],
            document_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
        this.reportCardDataForm = this.fb.group({
            registration_number: [''],
            name: [''],
            document_type_id: [''],
            description: [''],
            number: [''],
            url: [''],
            document_id: [''],
            semester_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
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
            geography: [''],
        });
        this.participantDocumentForm = this.fb.group({
            document_type_id: [''],
            name: [''],
            description: [''],
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(16)])),
            url: ['']
        });
        this.transcriptDataFormCredit = this.fb.group({
            document_id: [''],
            registration_number: [''],
            name: [''],
            sks: [''],
            total_mata_kuliah: [''],
            document_type_id: [''],
            url: ['']
        });
        this.transcriptDataForm = this.fb.group({
            document_id: [''],
            registration_number: [''],
            name: [''],
            document_type_id: [''],
            url: [''],
            gpa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]]
        });
        this.utbkForm = this.fb.group({
            KPUScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]),
            PKScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]),
            PDPUScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]),
            KMBDMScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]),
            math: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            geography: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            historical: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            sociological: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            economy: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            physics: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            chemical: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            biological: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
        });
        this.certificateDataForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])),
            number: [''],
            url: [''],
            certificate_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            certificate_level_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            publication_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
            certificate_score: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3)])),
        });
        this.eprtAndTpaForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            number: [''],
            url: [''],
            eprt_tpa_type_id: [''],
            eprt_tpa_level_id: [''],
            publication_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
            nameCoPromotor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)])),
            eprt_tpa_score: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
            gpa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]]
        });
        this.proposalForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(1000)])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            number: [''],
            url: [''],
        });
        this.supportingDataForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: [''],
            description: [''],
            number: [''],
            url: [''],
            pic_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)])],
            pic_phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])],
            pic_email_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])],
            pic_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])],
        });
        this.abilityDataForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: [''],
            description: [''],
            number: [''],
            url: ['']
        });
        this.locationExamDataForm = this.fb.group({
            registration_number: [''],
            location_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            location_address: [''],
            location_date: [''],
            path_exam_detail: ['']
        });
        this.registrationDataForm2 = this.fb.group({
            participant_id: [''],
            selection_path_id: [''],
            pin_price: [''],
            checklist: [''],
            payment_method: [''],
            payment_method_name: [''],
        });
        this.recommendationS2Form = this.fb.group({
            name_rec1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])),
            handphone_rec1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
            email_rec1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])),
            name_rec2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])),
            handphone_rec2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
            email_rec2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])),
        });
        this.transcriptFormlView = this.fb.group({
            name: [''],
            totalCredit: [''],
            totalCourse: ['']
        });
        this.ijazahForm = this.fb.group({
            registration_number: [''],
            document_type_id: [''],
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            url: [''],
            link_document: ['']
        });
        this.publikasiForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(500)])),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            publication_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)])),
        });
        translate.setDefaultLang(localStorage.getItem('lang'));
        this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
        this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
        this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
        this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
        this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
        this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
        this.translate.get('CONTENT.url-sent-to-recommender').subscribe((l) => { this.successSendEmail = l; });
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translate.setDefaultLang(res.lang);
            this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
            this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
            this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
            this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
            this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
            this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
            this.translate.get('CONTENT.url-sent-to-recommender').subscribe((l) => { this.successSendEmail = l; });
        });
        this.addForm = this.fb.group({
            items: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            items_value: ['no', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
        this.rows = this.fb.array([]);
        this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
        // this.examLocation = '0';
        this.edit = 'input';
        this.isMaxStudy = false;
        this.isIdGet = false;
        this.isViewData = false;
        this.loadingCard = false;
        this.loadingCardCheckDoc = false;
        this.isViewRaport = false;
        this.isViewCertificate = false;
        this.isUpdatedRequirement = false;
        this.isUpdatedTranscript = false;
        this.isUisRecommendationUpdated = false;
        this.isEprtUpdated = false;
        this.hiddenLoc = false;
        this.hiddenTime = false;
        this.noEducationFund = false;
        this.disabledNextStep = false;
        this.disabledNextStepProdi = false;
        this.disabledRaportDoc = false;
        this.loadDisableNextStep = false;
        this.isShowIdentityNumber = false;
        this.loadingSemester = false;
        this.loadStudyProgram = false;
        this.isPjjProgram = false;
        this.isOtherProgram = false;
        this.isPascasarjanaProgram = false;
        this.haveDocumentData = false;
        this.isPaid = false;
        this.loadingData = false;
        this.loadTableTranscript = false;
        this.isMathStudy = false;
        this.isBahasaStudy = false;
        this.isEnglishStudy = false;
        this.chemicalStudy = false;
        this.biologyStudy = false;
        this.physicsStudy = false;
        this.economyStudy = false;
        this.sociologicalStudy = false;
        this.geographyStudy = false;
        this.loadingDocumentCard = false;
        this.loadingRegCard = false;
        this.haveDocumentPersonal = false;
        this.haveTranscriptDoc = false;
        this.haveDocumentStudy = false;
        this.haveProposalDocument = false;
        this.loadingMaximunStudy = false;
        this.rangeScoreIndex = false;
        this.isNotHaveMappingData = false;
        this.listDocumentReport = [];
        this.dataRequirementUrl = [];
        this.dataAbilityUrl = [];
        this.dataRecommendationUrl = [];
        this.dataTranscriptUrl = [];
        this.dataTranscriptUrlDoc = [];
        this.listDocumentCertificate = [];
        this.listDocumentStudy = [];
        this.dataSession = [];
        this.semesterList = [];
        this.tableData = [];
        this.tableData1 = [];
        this.tableData2 = [];
        this.tableData3 = [];
        this.tableData4 = [];
        this.tableDataTranscript = [];
        this.keyName = [];
        this.tableTranscript = [];
        this.tableDataPublication = [];
        this.reportSemestersArray = [
            {
                semester_id: 1,
                range_score: 2,
                math: '',
                physics: '',
                bahasa: '',
                english: '',
                biology: '',
                economy: '',
                geography: '',
                sociological: '',
                historical: '',
                registration_number: ''
            }
        ],
            this.listCategoryUtbk = [
                {
                    value: '1',
                    label: 'SAINTEK'
                },
                {
                    value: '2',
                    label: 'SOSHUM'
                }
            ];
    }
    get fpd() {
        return this.participantDocumentForm.controls;
    }
    get fsd() {
        return this.supportingDataForm.controls;
    }
    get fad() {
        return this.abilityDataForm.controls;
    }
    get frod() {
        return this.recommendationS2Form.controls;
    }
    get fpubd() {
        return this.publikasiForm.controls;
    }
    get fid() {
        return this.ijazahForm.controls;
    }
    get fprd() {
        return this.proposalForm.controls;
    }
    get fed() {
        return this.eprtAndTpaForm.controls;
    }
    get ftd() {
        return this.transcriptDataForm.controls;
    }
    get futbk() {
        return this.utbkForm.controls;
    }
    get fprodi() {
        return this.studyProgramDataForm.controls;
    }
    get fraport() {
        return this.reportCardDataForm.controls;
    }
    get fcertif() {
        return this.certificateDataForm.controls;
    }
    ngOnInit() {
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapseReg = true;
        this.dynamicForm = this.fb.group({
            url: [''],
            total_credit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]],
            document_name: [''],
            registration_number: [''],
            document_type_id: [''],
            document_description: [''],
            total_course: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]],
            ticket: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormArray"]([])
        });
        this.addForm.get("items").valueChanges.subscribe(val => {
            if (val === true) {
                this.addForm.get("items_value").setValue("yes");
                this.addForm.addControl('rows', this.rows);
            }
            if (val === false) {
                this.addForm.get("items_value").setValue("no");
                this.addForm.removeControl('rows');
            }
        });
        this.studyProgramDataForm = this.fb.group({
            mapping_path_program_study_id: [''],
            registration_number: [''],
            studyprogram_id: [''],
            studyprogram_name: [''],
            sks: [''],
            sdp_default: ({ value: '' }),
            specialization: [''],
            specialization_name: [''],
            class_name: [''],
            class_type: [''],
            minimum_donation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
        });
        this.dtOptions[0] = {
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
        this.dtOptions[1] = {
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
            initComplete: () => {
            }
        };
        this.dtOptions[2] = {
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
        this.dtOptions[3] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            retrieve: true,
            order: [[0, 'asc']],
            destroy: true,
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
            initComplete: () => {
            }
        };
        this.dtOptions[4] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            retrieve: true,
            order: [[0, 'asc']],
            destroy: true,
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
            initComplete: () => {
            }
        };
        this.dtOptions[5] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            retrieve: true,
            order: [[0, 'asc']],
            destroy: true,
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
        this.loadDetailParticipantDatas();
        this.checkRegistrationData();
        this.chartService.getRegistrationDocument(`${this.registration_number}`).subscribe(response2 => {
        });
    }
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f.ticket; }
    mode(param) {
        this.edit = param;
    }
    loadDetailParticipantDatas() {
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        this.userService.getParticipantDetailData(`${this.userProfile.email}`).subscribe(res => {
            this.userData = res.participant_id;
            this.email = res.username;
            this.fullname = res.fullname;
            this.phonenumber = res.mobile_phone_number;
        });
    }
    checkRegistrationData() {
        this.userService.getRegistrationHistory(`registration_number=${this.registration_number}`).subscribe(result => {
            for (let i = 0; i < result.length; i++) {
                if (result[i].registration_step_id == 7 && result[i].status == "Done") {
                    // if (result[i].registration_step_id == 7 && result[i].status != "Done") {
                    this.router.navigate([`/registration-history`]);
                }
                else if (result[i].registration_step_id == 7 && result[i].status != "Done") {
                    // } else if (result[i].registration_step_id == 7 && result[i].status == "Done") {
                    this.loadPaymentMethodDataFilter();
                    this.loadFacultyDataFilter();
                    this.loadStudyProgramDataFilter();
                    this.loadProgramStudyData();
                    this.loadSemesterDataFilter();
                    this.loadCertificateLevelDataFilter();
                    this.loadCertificateTypeDataFilter();
                    this.loadExamDetailData();
                    this.loadProgramStudyData();
                    this.loadDataSemesterFilter();
                    //Data
                    this.loadDetailRegistration(this.registration_number);
                    this.renderSelectionDocumentData();
                    this.loadRegistrationProgramStudyData(this.registration_number);
                    this.loadRegistrationProgramStudyData2(this.registration_number);
                    this.loadDetailParticipant();
                    this.loadExamData(this.registration_number);
                    this.checkRequiredDocument();
                    //Table
                    this.loadDetailCertificateFileDataTable(this.registration_number);
                }
            }
        });
    }
    loadExamData(registration_number) {
        this.userService.getRegistrationListParticipantData(`registration_number=${registration_number}`).subscribe(result => {
            if (result) {
                if (result.data[0].mapping_location_selection_id !== null) {
                    this.examLocation = result.data[0].mapping_location_selection_id.toString();
                }
            }
        });
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
    onDeselected(val) {
        switch (val) {
            case 'paymentMethod':
                this.paymentMethod = '0';
                break;
            case 'faculty':
                this.faculty = '0';
                break;
            case 'semester':
                this.semester = '0';
                break;
            case 'certificateLevel':
                this.certificateLevel = '0';
                break;
            case 'certificateType':
                this.certificateType = '0';
                break;
            case 'examLocation':
                this.examLocation = '0';
                break;
            case 'examDate':
                this.examDate = '0';
                break;
        }
    }
    changeTestType(event) {
        if (event.value === 'saintek') {
            this.isSaintek = true;
        }
        else {
            this.isSaintek = false;
        }
    }
    changeSemesters(event) {
        if (event.value) {
            this.showMapel = true;
        }
        else {
            this.showMapel = false;
        }
    }
    loadPinPrice() {
        this.loadingPinPriceCard = true;
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
            const pMethod = result.data[0].payment_method_id;
            this.selectionPathId = result.data[0].selection_path_id;
            if (pMethod == null) {
                this.loadPayment();
                this.disabledPayment = false;
                this.disabledNextStepDocument = true;
                this.loading = false;
            }
            else {
                this.registrationDataForm2.patchValue({ selection_path_name: result.data[0]['selection_path'] });
                this.registrationDataForm2.patchValue({ pin_price: result.data[0]['price'] });
                this.registrationDataForm2.patchValue({ payment_method_name: result.data[0]['payment_method'] });
                this.paymentMethod = result.data[0].payment_method_id && result.data[0].payment_method_id.toString();
                this.disabledPayment = true;
                if (result.data[0]['payment_receipt_status'] === 'Belum Lunas' || result.data[0]['payment_receipt_status'] === 'In Progress') {
                    this.disabledNextStepDocument = true;
                    this.loading = false;
                    this.loadingPinPriceCard = false;
                }
                else if (result.data[0].payment_receipt_status === 'Lunas') {
                    this.disabledNextStepDocument = false;
                    this.loading = false;
                    this.loadingPinPriceCard = false;
                }
            }
        });
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
    loadFacultyDataFilter() {
        this.loadFilter = true;
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
            this.selectionPathId = result.data[0]['selection_path_id'];
            this.chartService.getMappingProgramStudyData(`${this.selectionPathId}`).subscribe((filterArray) => {
                const dataFaculty = [];
                let x;
                for (let i = 0; i < filterArray.data.length; i++) {
                    x = {
                        value: filterArray.data[i].faculty_id.toString(),
                        label: filterArray.data[i].faculty_name
                    };
                    dataFaculty.push(x);
                    this.listFaculty = dataFaculty;
                }
                this.loadFilter = false;
            }, err => {
                this.loadError();
                this.loadFilter = false;
            });
            this.loading = false;
        }, err => {
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: err.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loading = false;
        });
    }
    loadStudyProgramDataFilter() {
        this.loadFilter = true;
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
            this.selectionPathId = result.data[0]['selection_path_id'];
            this.chartService.getMappingProgramStudyData(`selection_path_id=${this.selectionPathId}`).subscribe((filterArray) => {
                const dataStudyProgram = [];
                let x;
                for (let i = 0; i < filterArray.data.length; i++) {
                    x = {
                        value: filterArray.data[i].id.toString(),
                        label: filterArray.data[i].study_program_name
                    };
                    dataStudyProgram.push(x);
                    this.listStudyProgram = dataStudyProgram;
                }
                this.loadFilter = false;
            }, err => {
                this.loadError();
                this.loadFilter = false;
            });
            this.loading = false;
        }, err => {
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: err.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loading = false;
        });
    }
    loadProgramStudyData() {
        this.loadStudyProgram = true;
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
            this.selectionPathId = result.data[0]['selection_path_id'];
            this.mappingPathYearId = result.data[0]['mapping_path_year_id'];
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.userData = res.participant_id;
                this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(resp => {
                    if (resp !== null) {
                        if (resp.data.length !== 0) {
                            const programStudyDataUser = resp.data;
                            const obj = {};
                            programStudyDataUser.forEach(o => obj[o.study_program_id] = o);
                            const unique_array2 = Object.keys(obj).map(k => obj[k]);
                            const matches = [];
                            this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(response => {
                                let prodi = response;
                                prodi.forEach(o1 => unique_array2.forEach(o2 => {
                                    if (o1.study_program_id == o2.study_program_id) {
                                        matches.push(o1);
                                        this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(res => {
                                            let prodi1 = res;
                                            var c = underscore__WEBPACK_IMPORTED_MODULE_14__["difference"](prodi1.map(e => e.study_program_id), matches.map(e => e.study_program_id));
                                            var array = [];
                                            array = prodi1.map(e => {
                                                if (c.includes(e.study_program_id)) {
                                                    return e;
                                                }
                                            }).filter(r => r);
                                            this.dataProdi = array && array.map((value) => {
                                                this.loadStudyProgram = false;
                                                const { mapping_path_program_study_id, study_program_name } = value;
                                                return { value: mapping_path_program_study_id.toString(), label: study_program_name };
                                            });
                                            this.loadStudyProgram = false;
                                        });
                                    }
                                    else {
                                        this.loadStudyProgram = false;
                                    }
                                }));
                            });
                        }
                        else {
                            this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(response => {
                                if (response.length !== 0) {
                                    let prodi = response;
                                    this.dataProdi = response && response.map((value) => {
                                        this.loadStudyProgram = false;
                                        const { mapping_path_program_study_id, study_program_name } = value;
                                        return { value: mapping_path_program_study_id.toString(), label: study_program_name };
                                    });
                                }
                                else {
                                    this.loadStudyProgram = false;
                                }
                            });
                        }
                    }
                });
            });
        });
    }
    loadStudyDataFilter() {
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
            this.selectionPathId = result.data[0]['selection_path_id'];
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.userData = res.participant_id;
                this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(resp => {
                    if (resp.data.length !== 0) {
                        const prodi2 = resp.data;
                        const obj = {};
                        prodi2.forEach(o => obj[o.study_program_id] = o);
                        const unique_array2 = Object.keys(obj).map(k => obj[k]);
                        const matches = [];
                        this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}`).subscribe(response => {
                            let prodi = response;
                            prodi.forEach(o1 => unique_array2.forEach(o2 => {
                                if (o1.study_program_id == o2.study_program_id) {
                                    matches.push(o1);
                                    this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(response => {
                                        let prodi1 = response;
                                        if (matches.length !== 0) {
                                            for (let i = 0; i < matches.length; i++) {
                                                const findIndexPRodi = prodi1.findIndex(x => x.study_program_id === matches[i].study_program_id);
                                                if (findIndexPRodi > -1) {
                                                    prodi1.splice(findIndexPRodi, 1);
                                                    // prodi1 = _.without(prodi1, _.findWhere(prodi1, {
                                                    //   id: id
                                                    // }));
                                                    this.dataProdi = prodi1 && prodi1.map((value) => {
                                                        const { mapping_path_program_study_id, study_program_name } = value;
                                                        return { value: mapping_path_program_study_id.toString(), label: study_program_name };
                                                    });
                                                }
                                            }
                                        }
                                    });
                                }
                            }));
                        });
                    }
                    else {
                        this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(response => {
                            let prodi = response;
                            this.dataProdi = response && response.map((value) => {
                                const { mapping_path_program_study_id, study_program_name } = value;
                                return { value: mapping_path_program_study_id.toString(), label: study_program_name };
                            });
                        });
                    }
                });
            });
        }, err => {
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: 'Terjadi kesalahan sistem',
                timeout: 3000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
        });
    }
    loadSemesterDataFilter() {
        this.loadFilter = true;
        this.userService.getSemesterData().subscribe((filterArray) => {
            const dataSemester = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].name
                };
                dataSemester.push(x);
                this.listSemester = dataSemester;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
        this.loading = false;
    }
    // loadRangeScore() {
    //   this.userService.getRangeScoreData().subscribe(res => {
    //     this.listRangeScore = res && res.map((value) => {
    //       const { id, name } = value;
    //       return { value: id.toString(), label: name }
    //     });
    //   })
    // }
    loadDataSemesterFilter() {
        this.loadingSemester = true;
        this.loadSemesterChecked();
        this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=7`).subscribe(response => {
            if (response.data.length !== 0) {
                const dataRaportUsers = response.data;
                const obj = {};
                dataRaportUsers.forEach(o => obj[o.semester_id] = o);
                const unique_array2 = Object.keys(obj).map(k => obj[k]);
                const matches = [];
                this.userService.getSemesterData().subscribe(resp => {
                    let dataSemester = resp;
                    dataSemester.forEach(o1 => unique_array2.forEach(o2 => {
                        if (o1.id == o2.semester_id) {
                            matches.push(o1);
                            this.userService.getSemesterData().subscribe(res => {
                                let dataSemester1 = res;
                                var c = underscore__WEBPACK_IMPORTED_MODULE_14__["difference"](dataSemester1.map(e => e.id), matches.map(e => e.id));
                                var array = [];
                                array = dataSemester1.map(e => {
                                    if (c.includes(e.id)) {
                                        return e;
                                    }
                                }).filter(r => r);
                                this.listSemester = array && array.map((value) => {
                                    this.loadingSemester = false;
                                    const { id, name } = value;
                                    return { value: id.toString(), label: name };
                                });
                            });
                        }
                        else {
                            this.loadingSemester = false;
                        }
                    }));
                });
            }
            else {
                this.userService.getSemesterData().subscribe(res => {
                    this.listSemester = res && res.map((value) => {
                        this.loadingSemester = false;
                        const { id, name } = value;
                        return { value: id.toString(), label: name };
                    });
                });
            }
        });
    }
    loadGroupWithPathExam() {
        this.userService.getGroupWithPathExamDetails(`?registration_number=${this.registration_number}&selection_path_id=${this.selectionPathId}`).subscribe(res => {
            this.listPathExamDetail = res && res.map((value) => {
                this.loadingSemester = false;
                const { id, fullname, moodle_group_ids, path_exam_detail_id } = value;
                return { value: id.toString(), label: fullname, group: moodle_group_ids, pathExam: path_exam_detail_id };
            });
        });
    }
    changeScheduleExamSelected(event) {
        this.courseId = event.value;
        this.moodleGroupId = event.group;
        this.pathExamDetailID = event.pathExam;
    }
    createMoodleUserMemberAndEnrol() {
        const payloadRegistration = {
            path_exam_detail: this.pathExamDetailID,
            registration_number: this.registration_number
        };
        this.loadingRegCard = true;
        this.chartService.upRegistrationData(payloadRegistration).subscribe(rspnse => {
            if (rspnse.status == 'Success') {
                const payloadMoodleUser = {
                    participant_id: this.participantId
                };
                this.userService.postMoodleUser(payloadMoodleUser).subscribe(response1 => {
                    if (response1.status == 'Success') {
                        const moodleUserId = response1.moodle_user_id;
                        const payloadMoodleMember = {
                            moodle_group_ids: this.moodleGroupId,
                            moodle_user_id: moodleUserId
                        };
                        const payloadMoodleEnrollment = {
                            moodle_group_ids: this.moodleGroupId,
                            moodle_user_id: moodleUserId,
                            moodle_course_id: this.courseId
                        };
                        this.userService.postMoodleEnrollment(payloadMoodleEnrollment).subscribe(resp => {
                            if (resp.status == 'Success') {
                                this.userService.postMoodleMember(payloadMoodleMember).subscribe(res => {
                                    if (res.status == 'Success') {
                                        this.createRegistrationCard();
                                        this.loadSuccess();
                                        this.loadingRegCard = false;
                                    }
                                    else {
                                        this.broadcasterService.notifBroadcast(true, {
                                            title: res.status,
                                            msg: res.message,
                                            timeout: 5000,
                                            theme: 'default',
                                            position: 'top-right',
                                            type: 'error'
                                        });
                                        this.loadingRegCard = false;
                                    }
                                }, (reason) => {
                                    this.broadcasterService.notifBroadcast(true, {
                                        title: 'Gagal',
                                        msg: reason.error.message,
                                        timeout: 5000,
                                        theme: 'default',
                                        position: 'top-right',
                                        type: 'error'
                                    });
                                    this.loadingRegCard = false;
                                });
                            }
                            else {
                                this.broadcasterService.notifBroadcast(true, {
                                    title: resp.status,
                                    msg: resp.message,
                                    timeout: 5000,
                                    theme: 'default',
                                    position: 'top-right',
                                    type: 'error'
                                });
                                this.loadingRegCard = false;
                            }
                        }, (reason) => {
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Gagal',
                                msg: reason.error.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                            });
                            this.loadingRegCard = false;
                        });
                    }
                    else {
                        this.broadcasterService.notifBroadcast(true, {
                            title: response1.status,
                            msg: response1.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loadingRegCard = false;
                    }
                }, (reason) => {
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                    this.loadingRegCard = false;
                });
            }
            else {
                this.loadingRegCard = false;
                this.broadcasterService.notifBroadcast(true, {
                    title: rspnse.status,
                    msg: rspnse.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
            }
        }, (reason) => {
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loadingRegCard = false;
        });
    }
    loadCertificateLevelDataFilter() {
        this.loadFilter = true;
        this.userService.getCertificateLevelData().subscribe((filterArray) => {
            if (filterArray !== null) {
                const dataCertificateLevel = [];
                let x;
                for (let i = 0; i < filterArray.length; i++) {
                    x = {
                        value: filterArray[i].id.toString(),
                        label: filterArray[i].type
                    };
                    dataCertificateLevel.push(x);
                    this.listCertificateLevel = dataCertificateLevel;
                }
                this.loadFilter = false;
            }
            else {
                this.listCertificateLevel = [];
                this.loadFilter = false;
            }
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
        this.loading = false;
    }
    loadCertificateTypeDataFilter() {
        this.loadFilter = true;
        this.userService.getCertificateTypeData().subscribe((filterArray) => {
            if (filterArray !== null) {
                const dataCertificateType = [];
                let x;
                for (let i = 0; i < filterArray.length; i++) {
                    x = {
                        value: filterArray[i].id.toString(),
                        label: filterArray[i].type
                    };
                    dataCertificateType.push(x);
                    this.listCertificateType = dataCertificateType;
                }
                this.loadFilter = false;
            }
            else {
                this.listCertificateType = [];
                this.loadFilter = false;
            }
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
        this.loading = false;
    }
    loadDetailRegistration(registration_number) {
        this.loadingStudyPrograms = true;
        this.edit = 'edit';
        this.userService.getRegistrationListParticipantData(`registration_number=${registration_number}`).subscribe(result => {
            if (result) {
                this.checkStudyProgramsWithPaymentReceiptStatus();
                this.registrationDataForm.patchValue({ registration_number: result.data[0]['registration_number'] });
                this.registrationDataForm.patchValue({ program: result.data[0]['selection_program'] });
                this.registrationDataForm.patchValue({ selection_path: result.data[0]['selection_path'] });
                this.registrationDataForm.patchValue({ payment_method: result.data[0]['payment_method'] });
            }
        }, err => {
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: err.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loadingCard = false;
        });
    }
    loadSelectionDocumentData(registration_number) {
        this.tableData1 = [];
        this.loadtableSelectionDocumentData = true;
        this.userService.getRegistrationListParticipantData(`registration_number=${registration_number}`).subscribe(result => {
            this.chartService.getSelectionDocument(`selection_id=${result.data[0]['selection_path_id']}&active_status=true`).subscribe(response => {
                if (response.data.length > 0) {
                    this.tableData1 = response.data;
                    this.loadtableSelectionDocumentData = false;
                    this.dtTrigger1.next(); // Trigger for load datatable
                }
                else {
                    this.tableData1 = [];
                    this.dtTrigger1.next(); // Trigger for load datatable
                    this.loadtableSelectionDocumentData = false;
                }
            }, err => {
                this.loadtableSelectionDocumentData = false;
            });
        });
    }
    renderSelectionDocumentData() {
        if (this.tableData1.length == 0) {
            this.loadSelectionDocumentData(this.registration_number);
        }
        else {
            this.dtElements.forEach((dtElement, index) => {
                if (index == 1) {
                    dtElement.dtInstance.then((dtInstance) => {
                        dtInstance.destroy();
                        this.loadSelectionDocumentData(this.registration_number);
                    });
                }
            });
        }
    }
    loadRegistrationProgramStudyData(registration_number) {
        this.loadtableRegistrationProgramStudyData = true;
        this.loading = true;
        this.edit = 'edit';
        this.chartService.getRegistrationProgramStudy(registration_number).subscribe(response => {
            if (response !== null) {
                this.tableData = response.data;
                if (response.data.length === 0) {
                    this.disabledNextStepProdi = true;
                }
                else {
                    this.disabledNextStepProdi = false;
                }
                this.dtTrigger.next(); // Trigger for load datatable
                this.loading = false;
                this.loadtableRegistrationProgramStudyData = false;
            }
            else {
                this.tableData = [];
                this.disabledNextStepProdi = false;
                this.loading = false;
                this.dtTrigger.next(); // Trigger for load datatable
                this.loadtableRegistrationProgramStudyData = false;
            }
        }, err => {
            this.loadError();
            this.loadtableRegistrationProgramStudyData = false;
        });
        this.loading = false;
    }
    loadRegistrationProgramStudyData2(registration_number) {
        this.loadtableRegistrationProgramStudyData = true;
        this.loading = true;
        this.chartService.getRegistrationProgramStudy(registration_number).subscribe(response => {
            if (response !== null) {
                this.tableData4 = response.data;
                this.loadtableRegistrationProgramStudyData = false;
            }
            else {
                this.tableData4 = [];
                this.loadtableRegistrationProgramStudyData = false;
                this.loading = false;
            }
        }, err => {
            this.loadError();
            this.loadtableRegistrationProgramStudyData = false;
        });
        this.loading = false;
    }
    loadDetailParticipant() {
        this.loading = true;
        this.edit = 'edit';
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.userData = res.participant_id;
                this.participantDetailDataForm.patchValue({ fullname: res.fullname });
                this.fullname = res.fullname;
                this.phonenumber = res.mobile_phone_number;
                this.email = res.username;
                this.participantId = res.participant_id;
                this.participantDetailDataForm.patchValue({ mobile_phone_number: res.mobile_phone_number });
                this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
                    this.participantDetailDataForm.patchValue({ registration_number: this.registration_number });
                    this.participantDetailDataForm.patchValue({ selection_path: result.data[0].selection_path });
                    if (result.data[0].exam_status == 1) {
                        this.isRaportCategory = true;
                    }
                    else {
                        this.isRaportCategory = false;
                    }
                    this.selectionPathId = result.data[0].selection_path_id;
                    this.mappingPathYearId = result.data[0].mapping_path_year_id;
                    // this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(response => {
                    //   const data = response.data.length;
                    //   if (data !== 0) {
                    //     // this.getMaximunStudyPrograms();
                    //   } else {
                    //     this.isMaxStudy = false;
                    //     this.loading = false;
                    //   }
                    // });
                    // this.getSession();
                });
            });
        }
        else {
            const unameEx = this.userProfile.username + '@gmail.com';
            this.userService.getParticipantDetailData(unameEx).subscribe(res => {
                this.userData = res.participant_id;
                this.participantDetailDataForm.patchValue({ fullname: res.fullname });
                this.participantDetailDataForm.patchValue({ mobile_phone_number: res.mobile_phone_number });
                this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
                    this.participantDetailDataForm.patchValue({ registration_number: this.registration_number });
                    this.participantDetailDataForm.patchValue({ selection_path: result.data[0].selection_path });
                    this.participantDetailDataForm.patchValue({ selection_program: result.data[0].selection_program });
                    this.participantDetailDataForm.patchValue({ exam_location: result.data[0].location });
                    this.participantDetailDataForm.patchValue({ exam_address: result.data[0].address });
                    this.participantDetailDataForm.patchValue({ exam_date: result.data[0].exam_date });
                    this.participantDetailDataForm.patchValue({ exam_start_time: result.data[0].exam_start_date });
                    this.participantDetailDataForm.patchValue({ exam_end_time: result.data[0].exam_end_date });
                    this.selectionPathId = result.data[0].selection_path_id;
                    if (result.data[0].maks_study_program === '1') {
                        this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(response => {
                            const data = response.data.length;
                            if (data === 1) {
                                this.isMaxStudy = true;
                            }
                            else {
                                this.isMaxStudy = false;
                            }
                        });
                    }
                    else if (result.data[0].maks_study_program === '5') {
                        this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(response => {
                            const data = response.data.length;
                            if (data === 5) {
                                this.isMaxStudy = true;
                            }
                            else {
                                this.isMaxStudy = false;
                            }
                        });
                        this.isMaxStudy = false;
                    }
                });
            });
        }
    }
    checkStudyProgramsWithPaymentReceiptStatus() {
        this.loadingStudyPrograms = true;
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
            if (result.length !== 0) {
                if (result.data[0].payment_receipt_status == 'Lunas') {
                    this.hiddenStudyProgram = true;
                    this.loadingStudyPrograms = false;
                }
                else if (result.data[0].payment_receipt_status == 'Belum Lunas' || result.data[0].payment_receipt_status == 'In Progress') {
                    this.loadingStudyPrograms = false;
                    this.hiddenStudyProgram = false;
                }
                else if (result.data[0].payment_receipt_status == null) {
                    this.loadingStudyPrograms = false;
                    this.hiddenStudyProgram = false;
                }
            }
            else {
                this.hiddenStudyProgram = false;
            }
        });
    }
    loadPayment() {
        this.loadingPinPriceCard = false;
        this.userService.getStudyProgramWithPin(`?registration_number=${this.registration_number}`).subscribe(response => {
            if (response.length !== 0) {
                if (response.mapping_registration_program_study.length !== 0) {
                    if (response.maks_study_program == response.mapping_registration_program_study.length) {
                        this.idPinPrice = response.mapping_path_price_id;
                        this.loadingPinPriceCard = false;
                        this.loading = false;
                        this.registrationDataForm2.patchValue({ pin_price: response.price });
                    }
                    else {
                        this.loading = false;
                        this.loadingPinPriceCard = false;
                        this.idPinPrice = response.mapping_path_price_id;
                        this.registrationDataForm2.patchValue({ pin_price: response.price });
                    }
                }
                else {
                    this.loadingPinPriceCard = false;
                }
            }
            else {
                this.registrationDataForm2.patchValue({ pin_price: '0' });
            }
        });
    }
    getMaximunStudyPrograms() {
        this.loadingMaximunStudy = true;
        this.userService.getStudyProgramWithPin(`?registration_number=${this.registration_number}`).subscribe(response => {
            if (response.length !== 0) {
                if (response.mapping_registration_program_study.length !== 0) {
                    if (response.maks_study_program == response.mapping_registration_program_study.length) {
                        this.isMaxStudy = true;
                        this.loadingMaximunStudy = false;
                        this.loading = false;
                        this.popUpMaxProdi();
                    }
                    else {
                        this.loadingMaximunStudy = false;
                        this.isMaxStudy = false;
                        this.loading = false;
                        this.showModalProgramStudy();
                    }
                }
                else {
                    this.loadingMaximunStudy = false;
                    this.isMaxStudy = false;
                    this.showModalProgramStudy();
                }
            }
            else {
                this.registrationDataForm2.patchValue({ pin_price: '0' });
                this.loadingMaximunStudy = false;
            }
        });
    }
    getSession() {
        this.userService.getExamSession(`?registration_number=${this.registration_number}`).subscribe(res => {
            this.dataSession = res;
            if (res.length !== 0) {
                this.participantDetailDataForm.patchValue({ exam_start_time: res[0].exam_start_date });
                this.participantDetailDataForm.patchValue({ exam_end_time: res[0].exam_end_date });
                this.participantDetailDataForm.patchValue({ session: res[0].session });
                this.loading = false;
            }
            else {
                this.loading = false;
            }
        });
    }
    popUpMaxProdi() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: 'Warning',
            text: 'Anda Tidak dapat menambahkan program studi lagi',
            type: 'warning'
        });
    }
    loadDetailDocumentRequirementData(data) {
        this.loadingDocumentCard = true;
        this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=${data}`).subscribe(response2 => {
            this.documentTypeId = data;
            if (this.documentTypeId == 6) {
                if (response2.data.length !== 0) {
                    if (response2.data[0].document_id === null) {
                        this.formTypePersonal = 'input';
                        this.loadingDocumentCard = false;
                        this.documentTypePersonal = this.documentTypeId;
                        this.isUpdatedRequirement = false;
                        if (this.documentTypePersonal == 1) {
                            this.isShowIdentityNumber = true;
                            this.participantDocumentForm.get('number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(16)]));
                            this.participantDocumentForm.get('number').updateValueAndValidity();
                        }
                        else {
                            this.isShowIdentityNumber = false;
                            this.participantDocumentForm.get('number').clearValidators();
                            this.participantDocumentForm.get('number').updateValueAndValidity();
                        }
                        this.participantDocumentForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.participantDocumentForm.get('url').updateValueAndValidity();
                        this.participantDocumentForm.patchValue({ name: 'Ijazah Pendidikan Terakhir atau Surat Keterangan Lulus' });
                        this.participantDocumentForm.patchValue({ url: '' });
                        this.dataRequirementUrl = '';
                        this.haveDocumentPersonal = false;
                        this.documentRequirementModal.show();
                    }
                    else {
                        this.formTypePersonal = 'edit';
                        this.loadingDocumentCard = false;
                        this.documentTypePersonal = response2.data[0].document_type_id;
                        this.documentidPersonal = response2.data[0].document_id;
                        this.isUpdatedRequirement = true;
                        if (response2.data[0].url !== null) {
                            this.haveDocumentPersonal = true;
                        }
                        else {
                            this.haveDocumentPersonal = false;
                        }
                        this.participantDocumentForm.get('url').clearValidators();
                        this.participantDocumentForm.get('url').updateValueAndValidity();
                        this.dataRequirementUrl = response2.data;
                        this.documentRequirementModal.show();
                        this.participantDocumentForm.patchValue({ name: response2.data[0].document_type });
                        this.participantDocumentForm.patchValue({ url: '' });
                        this.participantDocumentForm.get('url').reset();
                        if (this.documentTypePersonal == 1) {
                            this.participantDocumentForm.patchValue({ number: '' });
                            this.participantDocumentForm.get('number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(16)]));
                            this.participantDocumentForm.get('number').updateValueAndValidity();
                            this.isShowIdentityNumber = true;
                        }
                        else {
                            this.isShowIdentityNumber = false;
                            this.participantDocumentForm.patchValue({ number: '' });
                            this.participantDocumentForm.get('number').clearValidators();
                            this.participantDocumentForm.get('number').updateValueAndValidity();
                        }
                        if (response2.data[0].document_url !== null) {
                            this.haveDocumentPersonal = true;
                        }
                        else {
                            this.haveDocumentPersonal = false;
                        }
                    }
                }
                else {
                    this.formTypePersonal = 'input';
                    this.documentTypePersonal = this.documentTypeId;
                    this.isUpdatedRequirement = false;
                    this.isShowIdentityNumber = false;
                    this.participantDocumentForm.get('number').clearValidators();
                    this.participantDocumentForm.get('number').updateValueAndValidity();
                    this.participantDocumentForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                    this.participantDocumentForm.get('url').updateValueAndValidity();
                    this.participantDocumentForm.patchValue({ name: 'Ijazah Pendidikan Terakhir atau Surat Keterangan Lulus' });
                    this.participantDocumentForm.patchValue({ url: '' });
                    this.dataRequirementUrl = '';
                    this.haveDocumentPersonal = false;
                    this.documentRequirementModal.show();
                    this.loadingDocumentCard = false;
                }
            }
            else if (this.documentTypeId == 7) {
                this.mode('input');
                this.reportCardRequirementModal.show();
                this.loadingDocumentCard = false;
                this.loadDetailReportCardFileData();
            }
            else if (this.documentTypeId == 8) {
                this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=8`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.transcriptRequirementModal.show();
                        this.formType = 'edit';
                        this.loadingDocumentCard = false;
                        this.isUpdatedTranscript = true;
                        this.isTranscript = true;
                        this.documentTypeId = 8;
                        this.documentTranscriptId = response.data[0].document_id;
                        this.documentReportTranscriptId = response.data[0].document_report_card_id;
                        this.transcriptDataForm.patchValue({ name: 'Transkrip Nilai Pendidikan Terakhir' });
                        this.transcriptDataForm.get('url').clearValidators();
                        this.transcriptDataForm.get('url').updateValueAndValidity();
                        this.transcriptDataForm.get('gpa').clearValidators();
                        this.transcriptDataForm.get('gpa').updateValueAndValidity();
                        this.dataTranscriptUrlDoc = response.data;
                        if (response.data[0].url !== null) {
                            this.haveTranscriptDoc = true;
                        }
                        else {
                            this.haveTranscriptDoc = false;
                        }
                    }
                    else {
                        this.formType = 'input';
                        this.isTranscript = true;
                        this.isUpdatedTranscript = false;
                        this.loadingDocumentCard = false;
                        this.documentTypeId = 8;
                        this.transcriptRequirementModal.show();
                        this.transcriptDataForm.patchValue({ name: 'Transkrip Nilai Pendidikan Terakhir' });
                        this.transcriptDataForm.get('gpa').clearValidators();
                        this.transcriptDataForm.get('gpa').updateValueAndValidity();
                        this.transcriptDataForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.transcriptDataForm.get('url').updateValueAndValidity();
                        this.dataTranscriptUrlDoc = [];
                        this.haveTranscriptDoc = false;
                        this.transcriptDataForm.patchValue({ url: '' });
                    }
                });
            }
            else if (this.documentTypeId == 9) {
                this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=9`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.formTypeRecommendation = 'edit';
                        this.isUisRecommendationUpdated = true;
                        this.documentRecommendationId = response.data[0].document_id;
                        this.documentSupportingId = response.data[0].document_supporting_id;
                        this.supportingDataForm.patchValue({ name: 'Surat Rekomendasi' });
                        this.supportingDataForm.patchValue({ pic_email_address: response.data[0].pic_email_address });
                        this.supportingDataForm.patchValue({ pic_name: response.data[0].pic_name });
                        this.supportingDataForm.patchValue({ pic_phone_number: response.data[0].pic_phone_number });
                        this.supportingDataForm.patchValue({ pic_address: response.data[0].pic_address });
                        this.supportingDataForm.get('url').clearValidators();
                        this.supportingDataForm.get('url').updateValueAndValidity();
                        this.dataRecommendationUrl = response.data;
                        this.haveSupportingDocument = true;
                        this.recommendationLetterRequirementModal.show();
                        this.loadingDocumentCard = false;
                    }
                    else {
                        this.formTypeRecommendation = 'input';
                        this.isUisRecommendationUpdated = false;
                        this.haveSupportingDocument = false;
                        this.supportingDataForm.patchValue({ name: 'Surat Rekomendasi' });
                        this.supportingDataForm.reset();
                        this.supportingDataForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.supportingDataForm.get('url').updateValueAndValidity();
                        this.recommendationLetterRequirementModal.show();
                        this.loadingDocumentCard = false;
                    }
                });
            }
            else if (this.documentTypeId == 10) {
                this.loadDetailCertificateFileDataTable(this.registration_number);
                this.certificateRequirementModal.show();
                this.loadingDocumentCard = false;
            }
            else if (this.documentTypeId == 11) {
                this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=11`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.formTypeAbility = 'edit';
                        this.isUpdatedAbilityPayment = true;
                        this.documentAbilitytId = response.data[0].document_id;
                        this.documentAbilitySupportingId = response.data[0].document_supporting_id;
                        this.abilityDataForm.patchValue({ name: 'Surat Kemampuan Pembayaran' });
                        this.abilityDataForm.get('url').clearValidators();
                        this.abilityDataForm.get('url').updateValueAndValidity();
                        this.dataAbilityUrl = response.data;
                        this.loadingDocumentCard = false;
                        this.haveAbilityDocument = true;
                        this.paymentAbilityModal.show();
                    }
                    else {
                        this.formTypeAbility = 'input';
                        this.isUpdatedAbilityPayment = false;
                        this.abilityDataForm.patchValue({ name: 'Surat Kemampuan Pembayaran' });
                        this.abilityDataForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.abilityDataForm.get('url').updateValueAndValidity();
                        this.paymentAbilityModal.show();
                        this.haveAbilityDocument = false;
                        this.loadingDocumentCard = false;
                    }
                });
            }
            else if (this.documentTypeId == 12) {
                this.userService.getUtbkDocument(`?registration_number=${this.registration_number}`).subscribe(response => {
                    if (response.length !== 0) {
                        this.formTypeUtbk = 'edit';
                        this.documentTypeUtbk = 12;
                        this.isUtbkUpdated = true;
                        this.documentId = response[0].document_id;
                        this.documentUtbkId = response[0].id;
                        this.utbkForm.patchValue({ KPUScore: response[0].general_reasoning });
                        this.utbkForm.patchValue({ PKScore: response[0].quantitative_knowledge });
                        this.utbkForm.patchValue({ PDPUScore: response[0].comprehension_general_knowledge });
                        this.utbkForm.patchValue({ KMBDMScore: response[0].comprehension_reading_knowledge });
                        this.utbkForm.patchValue({ math: response[0].math });
                        this.utbkForm.patchValue({ physics: response[0].physics });
                        this.utbkForm.patchValue({ biological: response[0].biology });
                        this.utbkForm.patchValue({ chemical: response[0].chemical });
                        this.utbkForm.patchValue({ geography: response[0].geography });
                        this.utbkForm.patchValue({ economy: response[0].economy });
                        this.utbkForm.patchValue({ historical: response[0].historical });
                        this.utbkForm.patchValue({ sociological: response[0].sociological });
                        this.utbkForm.patchValue({ url: '' });
                        this.dataUtbkUrl = response;
                        this.selectedCategoryUtbk = response[0].major_type && response[0].major_type.toString();
                        if (response[0].major_type === 1) {
                            this.isSaintek = true;
                        }
                        else {
                            this.isSaintek = false;
                        }
                        this.loadingDocumentCard = false;
                        this.utbkModals.show();
                    }
                    else {
                        this.formTypeUtbk = 'input';
                        this.documentTypeUtbk = 12;
                        this.isUtbkUpdated = false;
                        this.dataUtbkUrl = '';
                        this.loadingDocumentCard = false;
                        this.utbkModals.show();
                    }
                });
            }
            else if (this.documentTypeId == 13) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=13`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.formTypeStudy = 'edit';
                        this.documentTypeStudy = response.data[0].document_type_id;
                        this.isEprtUpdated = true;
                        this.isTPADocument = true;
                        this.isCoPromotor = false;
                        this.isIPKDocument = false;
                        this.isEPRTDocument = false;
                        this.isPromotor = false;
                        this.loadingDocumentCard = false;
                        this.documentStudyId = response.data[0].document_study_id;
                        this.docid = response.data[0].document_id;
                        this.eprtAndTpaForm.patchValue({ name: 'TPA' });
                        this.eprtAndTpaForm.patchValue({ eprt_tpa_score: response.data[0].score });
                        this.eprtAndTpaForm.patchValue({ publication_year: response.data[0].year });
                        this.eprtAndTpaForm.get('url').clearValidators();
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.dataStudyUrl = response.data;
                        if (response.data[0].document_url !== null) {
                            this.haveDocumentStudy = true;
                        }
                        else {
                            this.haveDocumentStudy = false;
                        }
                        this.eprtAndTpaModal.show();
                    }
                    else {
                        this.formTypeStudy = 'input';
                        this.documentTypeStudy = this.documentTypeId;
                        this.isEprtUpdated = false;
                        this.isTPADocument = true;
                        this.isPromotor = false;
                        this.isCoPromotor = false;
                        this.isIPKDocument = false;
                        this.isEPRTDocument = false;
                        this.loadingDocumentCard = false;
                        this.haveDocumentStudy = false;
                        this.eprtAndTpaForm.patchValue({ name: 'TPA' });
                        this.eprtAndTpaForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.eprtAndTpaForm.reset();
                        this.eprtAndTpaModal.show();
                    }
                });
            }
            else if (this.documentTypeId == 14) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=14`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.formTypeStudy = 'edit';
                        this.documentTypeStudy = response.data[0].document_type_id;
                        this.isEprtUpdated = true;
                        this.isIPKDocument = true;
                        this.isTPADocument = false;
                        this.isEPRTDocument = false;
                        this.isCoPromotor = false;
                        this.isPromotor = false;
                        this.loadingDocumentCard = false;
                        this.documentStudyId = response.data[0].document_study_id;
                        this.docid = response.data[0].document_id;
                        this.eprtAndTpaForm.patchValue({ name: 'IPK' });
                        this.eprtAndTpaForm.patchValue({ eprt_tpa_score: '' });
                        this.eprtAndTpaForm.patchValue({ gpa: response.data[0].score });
                        this.eprtAndTpaForm.get('url').clearValidators();
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                        this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                        this.eprtAndTpaForm.get('publication_year').clearValidators();
                        this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.dataStudyUrl = response.data;
                        if (response.data[0].document_url !== null) {
                            this.haveDocumentStudy = true;
                        }
                        else {
                            this.haveDocumentStudy = false;
                        }
                        this.eprtAndTpaModal.show();
                    }
                    else {
                        this.formTypeStudy = 'input';
                        this.documentTypeStudy = this.documentTypeId;
                        this.isEprtUpdated = false;
                        this.isIPKDocument = true;
                        this.isPromotor = false;
                        this.isTPADocument = false;
                        this.isEPRTDocument = false;
                        this.isCoPromotor = false;
                        this.loadingDocumentCard = false;
                        this.haveDocumentStudy = false;
                        this.eprtAndTpaForm.patchValue({ name: 'IPK' });
                        this.eprtAndTpaForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                        this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                        this.eprtAndTpaForm.get('publication_year').clearValidators();
                        this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.eprtAndTpaForm.reset();
                        this.eprtAndTpaModal.show();
                    }
                });
            }
            else if (this.documentTypeId == 15) {
                this.userService.getDocumentRecommendation(`?registration_number=${this.registration_number}`).subscribe(response => {
                    if (response.length !== 0) {
                        this.loading = false;
                        this.loadingRecommendation = false;
                        this.formTypeRecommendationS2 = 'view';
                        this.viewRecommendationS2 = true;
                        this.loadingDocumentCard = false;
                        this.idRecommendation1 = response[0].id;
                        this.idRecommendation2 = response[1].id;
                        this.recommendationS2Form.patchValue({ name_rec1: response[0].name });
                        this.recommendationS2Form.patchValue({ handphone_rec1: response[0].handphone });
                        this.recommendationS2Form.patchValue({ email_rec1: response[0].email });
                        this.recommendationS2Form.patchValue({ name_rec2: response[1].name });
                        this.recommendationS2Form.patchValue({ handphone_rec2: response[1].handphone });
                        this.recommendationS2Form.patchValue({ email_rec2: response[1].email });
                        this.recommendationS2Modal.show();
                    }
                    else {
                        this.formTypeRecommendationS2 = 'input';
                        this.viewRecommendationS2 = false;
                        this.loadingRecommendation = false;
                        this.documentTypeId = 15;
                        this.loadingDocumentCard = false;
                        this.recommendationS2Modal.show();
                    }
                });
            }
            else if (this.documentTypeId == 16) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=16`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.formTypeStudy = 'edit';
                        this.haveDocumentData = true;
                        this.documentTypeStudy = response.data[0].document_type_id;
                        this.isEprtUpdated = true;
                        this.isCoPromotor = false;
                        this.isPromotor = true;
                        this.isIPKDocument = false;
                        this.isTPADocument = false;
                        this.isEPRTDocument = false;
                        this.loadingDocumentCard = false;
                        this.documentStudyId = response.data[0].document_study_id;
                        this.docid = response.data[0].document_id;
                        this.eprtAndTpaForm.patchValue({ name: 'Kesediaan Promotor' });
                        this.eprtAndTpaForm.get('url').clearValidators();
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                        this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('publication_year').clearValidators();
                        this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.dataStudyUrl = response.data;
                        if (response.data[0].document_url !== null) {
                            this.haveDocumentStudy = true;
                        }
                        else {
                            this.haveDocumentStudy = false;
                        }
                        this.eprtAndTpaModal.show();
                    }
                    else {
                        this.formTypeStudy = 'input';
                        this.documentTypeStudy = this.documentTypeId;
                        this.isPromotor = true;
                        this.isCoPromotor = false;
                        this.isEprtUpdated = false;
                        this.isIPKDocument = false;
                        this.isTPADocument = false;
                        this.isEPRTDocument = false;
                        this.loadingDocumentCard = false;
                        this.haveDocumentStudy = false;
                        this.eprtAndTpaForm.patchValue({ name: 'Kesediaan Promotor' });
                        this.eprtAndTpaForm.get('publication_year').clearValidators();
                        this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                        this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                        this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.eprtAndTpaForm.get('url').reset();
                        this.eprtAndTpaModal.show();
                    }
                });
            }
            else if (this.documentTypeId == 17) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=17`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.formTypeProposal = 'edit';
                        this.haveDocumentData = true;
                        this.documentTypeStudy = response.data[0].document_type_id;
                        this.isEprtUpdated = true;
                        this.isProposal = true;
                        this.loadingDocumentCard = false;
                        this.documentStudyId = response.data[0].document_study_id;
                        this.docid = response.data[0].document_id;
                        this.proposalForm.patchValue({ title: response.data[0].title });
                        this.proposalForm.get('url').clearValidators();
                        this.proposalForm.get('url').updateValueAndValidity();
                        this.proposalForm.get('title').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(1000)]));
                        this.proposalForm.get('title').updateValueAndValidity();
                        this.dataProposal = response.data;
                        if (response.data[0].document_url !== null) {
                            this.haveProposalDocument = true;
                        }
                        else {
                            this.haveProposalDocument = true;
                        }
                        this.proposalModal.show();
                    }
                    else {
                        this.formTypeProposal = 'input';
                        this.documentTypeStudy = this.documentTypeId;
                        this.isProposal = true;
                        this.loadingDocumentCard = false;
                        this.proposalForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.proposalForm.get('url').updateValueAndValidity();
                        this.proposalForm.get('title').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(1000)]));
                        this.proposalForm.get('title').updateValueAndValidity();
                        this.proposalModal.show();
                        this.proposalForm.reset();
                    }
                });
            }
            else if (this.documentTypeId == 18) {
                this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=18`).subscribe(response2 => {
                    if (response2.data.length !== 0) {
                        this.formTypeIjazah = 'edit';
                        this.isIjazahS1 = true;
                        this.isIjazahS2 = false;
                        this.isPortofolio = false;
                        this.isIjazahUpdated = true;
                        this.loadingDocumentCard = false;
                        this.documentTypeIjazah = response2.data[0].document_type_id;
                        this.docid = response2.data[0].document_id;
                        this.ijazahForm.patchValue({ name: response2.data[0].document_type });
                        this.ijazahForm.get('url').clearValidators();
                        this.ijazahForm.get('url').updateValueAndValidity();
                        this.dataIjazah = response2.data;
                        if (response2.data[0].document_url !== null) {
                            this.haveDocumentIjazah = true;
                        }
                        else {
                            this.haveDocumentIjazah = false;
                        }
                        this.ijazahModals.show();
                    }
                    else {
                        this.formTypeIjazah = 'input';
                        this.isIjazahS1 = true;
                        this.isIjazahS2 = false;
                        this.isPortofolio = false;
                        this.isIjazahUpdated = false;
                        this.haveDocumentIjazah = false;
                        this.loadingDocumentCard = false;
                        this.ijazahForm.patchValue({ name: 'Ijazah S1' });
                        this.documentTypeIjazah = this.documentTypeId;
                        this.ijazahForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.ijazahForm.get('url').updateValueAndValidity();
                        this.ijazahModals.show();
                    }
                });
            }
            else if (this.documentTypeId == 19) {
                this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=19`).subscribe(response2 => {
                    if (response2.data.length !== 0) {
                        this.formTypeIjazah = 'edit';
                        this.isIjazahS1 = false;
                        this.isIjazahS2 = true;
                        this.isPortofolio = false;
                        this.isIjazahUpdated = true;
                        this.haveDocumentIjazah = true;
                        this.loadingDocumentCard = false;
                        this.documentTypeIjazah = response2.data[0].document_type_id;
                        this.docid = response2.data[0].document_id;
                        this.ijazahForm.patchValue({ name: response2.data[0].document_type });
                        this.ijazahForm.get('url').clearValidators();
                        this.ijazahForm.get('url').updateValueAndValidity();
                        this.dataIjazah = response2.data;
                        this.ijazahModals.show();
                    }
                    else {
                        this.formTypeIjazah = 'input';
                        this.isIjazahUpdated = false;
                        this.isIjazahS1 = false;
                        this.isIjazahS2 = true;
                        this.isPortofolio = false;
                        this.haveDocumentIjazah = false;
                        this.loadingDocumentCard = false;
                        this.documentTypeIjazah = this.documentTypeId;
                        this.ijazahForm.patchValue({ name: 'Ijazah S2' });
                        this.ijazahForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.ijazahForm.get('url').updateValueAndValidity();
                        this.ijazahModals.show();
                    }
                });
            }
            else if (this.documentTypeId == 20) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=20`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.formTypeStudy = 'edit';
                        this.haveDocumentData = true;
                        this.documentTypeStudy = response.data[0].document_type_id;
                        this.isEprtUpdated = true;
                        this.isPromotor = false;
                        this.isResidensi = true;
                        this.isSuratIjinAtasan = false;
                        this.isCoPromotor = false;
                        this.isIPKDocument = false;
                        this.isTPADocument = false;
                        this.loadingDocumentCard = false;
                        this.isEPRTDocument = false;
                        this.documentStudyId = response.data[0].document_study_id;
                        this.docid = response.data[0].document_id;
                        this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
                        this.eprtAndTpaForm.get('url').clearValidators();
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                        this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('publication_year').clearValidators();
                        this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.dataStudyUrl = response.data;
                        if (response.data[0].document_url !== null) {
                            this.haveDocumentStudy = true;
                        }
                        else {
                            this.haveDocumentStudy = false;
                        }
                        this.eprtAndTpaModal.show();
                    }
                    else {
                        this.formTypeStudy = 'input';
                        this.documentTypeStudy = this.documentTypeId;
                        this.isPromotor = false;
                        this.isResidensi = true;
                        this.isSuratIjinAtasan = false;
                        this.isEprtUpdated = false;
                        this.isIPKDocument = false;
                        this.isTPADocument = false;
                        this.isEPRTDocument = false;
                        this.loadingDocumentCard = false;
                        this.isCoPromotor = false;
                        this.haveDocumentStudy = false;
                        this.eprtAndTpaForm.patchValue({ name: 'Surat Kesediaan Residensi' });
                        this.eprtAndTpaForm.get('publication_year').clearValidators();
                        this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                        this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                        this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.eprtAndTpaForm.get('url').reset();
                        this.eprtAndTpaModal.show();
                    }
                });
            }
            else if (this.documentTypeId == 21) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=21`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.formTypeStudy = 'edit';
                        this.haveDocumentData = true;
                        this.documentTypeId = response.data[0].document_type_id;
                        this.isEprtUpdated = true;
                        this.isPromotor = false;
                        this.isResidensi = false;
                        this.isSuratIjinAtasan = true;
                        this.isIPKDocument = false;
                        this.isTPADocument = false;
                        this.loadingDocumentCard = false;
                        this.isEPRTDocument = false;
                        this.isCoPromotor = false;
                        this.documentStudyId = response.data[0].document_study_id;
                        this.docid = response.data[0].document_id;
                        this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
                        this.eprtAndTpaForm.get('url').clearValidators();
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                        this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('publication_year').clearValidators();
                        this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.dataStudyUrl = response.data;
                        if (response.data[0].document_url !== null) {
                            this.haveDocumentStudy = true;
                        }
                        else {
                            this.haveDocumentStudy = false;
                        }
                        this.eprtAndTpaModal.show();
                    }
                    else {
                        this.formTypeStudy = 'input';
                        this.documentTypeStudy = this.documentTypeId;
                        this.isPromotor = false;
                        this.isCoPromotor = false;
                        this.isResidensi = false;
                        this.isSuratIjinAtasan = true;
                        this.isEprtUpdated = false;
                        this.isIPKDocument = false;
                        this.isTPADocument = false;
                        this.loadingDocumentCard = false;
                        this.isEPRTDocument = false;
                        this.haveDocumentStudy = false;
                        this.eprtAndTpaForm.patchValue({ name: 'Surat Ijin Atasan Langsung' });
                        this.eprtAndTpaForm.get('publication_year').clearValidators();
                        this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                        this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                        this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.eprtAndTpaForm.get('url').reset();
                        this.eprtAndTpaModal.show();
                    }
                });
            }
            else if (this.documentTypeId == 22) {
                // Portofolio
                this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=22`).subscribe(response2 => {
                    if (response2.data.length !== 0) {
                        this.formTypeIjazah = 'edit';
                        this.haveDocumentIjazah = true;
                        this.isIjazahS1 = false;
                        this.isIjazahS2 = false;
                        this.isPortofolio = true;
                        this.loadingDocumentCard = false;
                        this.documentTypeIjazah = response2.data[0].document_type_id;
                        this.docid = response2.data[0].document_id;
                        this.ijazahForm.patchValue({ link_document: response2.data[0].document_url });
                        this.ijazahForm.patchValue({ name: response2.data[0].document_type });
                        this.ijazahForm.get('url').clearValidators();
                        this.ijazahForm.get('url').updateValueAndValidity();
                        this.ijazahForm.get('name').clearValidators();
                        this.ijazahForm.get('name').updateValueAndValidity();
                        this.isIjazahUpdated = true;
                        this.dataIjazah = response2.data;
                        this.ijazahModals.show();
                    }
                    else {
                        this.formTypeIjazah = 'input';
                        this.isIjazahS1 = false;
                        this.isIjazahS2 = false;
                        this.isPortofolio = true;
                        this.loadingDocumentCard = false;
                        this.haveDocumentIjazah = false;
                        this.documentTypeIjazah = this.documentTypeId;
                        this.ijazahForm.patchValue({ name: 'Portofolio' });
                        this.ijazahForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.ijazahForm.get('url').updateValueAndValidity();
                        this.ijazahForm.get('name').clearValidators();
                        this.ijazahForm.get('name').updateValueAndValidity();
                        this.ijazahModals.show();
                    }
                });
            }
            else if (this.documentTypeId == 23) {
                this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=23`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.transcriptRequirementModal.show();
                        this.formType = 'edit';
                        this.documentTypeId = 23;
                        this.isTranscript = false;
                        this.isUpdatedTranscript = true;
                        this.loadingDocumentCard = false;
                        this.documentTranscriptId = response.data[0].document_id;
                        this.documentReportTranscriptId = response.data[0].document_report_card_id;
                        this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S1' });
                        this.transcriptDataForm.patchValue({ gpa: response.data[0].gpa });
                        this.transcriptDataForm.get('url').clearValidators();
                        this.transcriptDataForm.get('url').updateValueAndValidity();
                        this.transcriptDataForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
                        this.transcriptDataForm.get('gpa').updateValueAndValidity();
                        this.dataTranscriptUrlDoc = response.data;
                        if (response.data[0].url !== null) {
                            this.haveTranscriptDoc = true;
                        }
                        else {
                            this.haveTranscriptDoc = false;
                        }
                    }
                    else {
                        this.formType = 'input';
                        this.documentTypeId = 23;
                        this.isUpdatedTranscript = false;
                        this.isTranscript = false;
                        this.loadingDocumentCard = false;
                        this.haveTranscriptDoc = false;
                        this.transcriptRequirementModal.show();
                        this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S1' });
                        this.transcriptDataForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.transcriptDataForm.get('url').updateValueAndValidity();
                        this.transcriptDataForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
                        this.transcriptDataForm.get('gpa').updateValueAndValidity();
                        this.dataTranscriptUrlDoc = '';
                        this.transcriptDataForm.patchValue({ url: '' });
                    }
                });
            }
            else if (this.documentTypeId == 24) {
                this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=24`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.transcriptRequirementModal.show();
                        this.formType = 'edit';
                        this.isTranscript = false;
                        this.isUpdatedTranscript = true;
                        this.loadingDocumentCard = false;
                        this.documentTranscriptId = response.data[0].document_id;
                        this.documentTypeId = 24;
                        this.documentReportTranscriptId = response.data[0].document_report_card_id;
                        this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S2' });
                        this.transcriptDataForm.patchValue({ gpa: response.data[0].gpa });
                        this.transcriptDataForm.get('url').clearValidators();
                        this.transcriptDataForm.get('url').updateValueAndValidity();
                        this.transcriptDataForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
                        this.transcriptDataForm.get('gpa').updateValueAndValidity();
                        this.dataTranscriptUrlDoc = response.data;
                        if (response.data[0].url !== null) {
                            this.haveTranscriptDoc = true;
                        }
                        else {
                            this.haveTranscriptDoc = false;
                        }
                    }
                    else {
                        this.formType = 'input';
                        this.isUpdatedTranscript = false;
                        this.isTranscript = false;
                        this.loadingDocumentCard = false;
                        this.documentTypeId = 24;
                        this.transcriptRequirementModal.show();
                        this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S2' });
                        this.transcriptDataForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.transcriptDataForm.get('url').updateValueAndValidity();
                        this.transcriptDataForm.get('gpa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
                        this.transcriptDataForm.get('gpa').updateValueAndValidity();
                        this.dataTranscriptUrlDoc = '';
                        this.haveTranscriptDoc = false;
                        this.transcriptDataForm.patchValue({ url: '' });
                    }
                });
            }
            else if (this.documentTypeId == 25) {
                this.userService.getTranscriptDocument(`?registration_number=${this.registration_number}`).subscribe(response => {
                    if (response.length !== 0) {
                        const x = response[0].id;
                        this.userService.getTranscriptDocumentDetails(`?document_transcript_id=${x}`).subscribe(response => {
                            if (response.length !== 0) {
                                this.formType = 'view';
                                this.tableTranscript = response.courses;
                                this.isUpdatedTranscript = true;
                                this.documentTranscriptId = response.id;
                                this.transcriptFormlView.patchValue({ name: 'Transkrip Nilai Kredit Transfer' });
                                this.transcriptFormlView.patchValue({ totalCredit: response.total_credit });
                                this.transcriptFormlView.patchValue({ totalCourse: response.total_course });
                                this.dataTranscriptUrl = response.url;
                                this.loadingDocumentCard = false;
                                this.transcriptRequirementModalView.show();
                            }
                        });
                    }
                    else {
                        this.formType = 'input';
                        this.dynamicForm.patchValue({ registrationNumber: this.registration_number });
                        this.dynamicForm.patchValue({ documentId: this.documentTypeId });
                        this.dynamicForm.patchValue({ document_name: 'Transkrip Nilai Kredit Transfer' });
                        this.transcriptCreditTransferRequirementModal.show();
                        this.transcriptDataFormCredit.patchValue({ name: 'Transkrip Nilai Kredit Transfer' });
                        this.transcriptDataFormCredit.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.transcriptDataFormCredit.get('url').updateValueAndValidity();
                        this.dataTranscriptUrl = '';
                        this.transcriptDataFormCredit.patchValue({ url: '' });
                        this.loadingDocumentCard = false;
                    }
                });
            }
            else if (this.documentTypeId == 26) {
                this.getTablePublication();
                this.publicationDataModals.show();
                this.documentPublicationTypeId = 26;
                this.loadingDocumentCard = false;
            }
            else if (this.documentTypeId == 27) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=27`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.formTypeStudy = 'edit';
                        this.haveDocumentData = true;
                        this.documentTypeStudy = response.data[0].document_type_id;
                        this.isEprtUpdated = true;
                        this.isCoPromotor = true;
                        this.isPromotor = false;
                        this.isIPKDocument = false;
                        this.isTPADocument = false;
                        this.loadingDocumentCard = false;
                        this.isEPRTDocument = false;
                        this.isResidensi = false;
                        this.isSuratIjinAtasan = false;
                        this.documentStudyId = response.data[0].document_study_id;
                        this.docid = response.data[0].document_id;
                        this.eprtAndTpaForm.patchValue({ nameCoPromotor: response.data[0].document_name });
                        this.eprtAndTpaForm.patchValue({ name: response.data[0].document_description });
                        this.eprtAndTpaForm.get('url').clearValidators();
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                        this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('publication_year').clearValidators();
                        this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                        this.dataStudyUrl = response.data;
                        if (response.data[0].document_url !== null) {
                            this.haveDocumentStudy = true;
                        }
                        else {
                            this.haveDocumentStudy = false;
                        }
                        this.eprtAndTpaModal.show();
                    }
                    else {
                        this.formTypeStudy = 'input';
                        this.documentTypeStudy = this.documentTypeId;
                        this.isPromotor = false;
                        this.isCoPromotor = true;
                        this.isEprtUpdated = false;
                        this.isIPKDocument = false;
                        this.isTPADocument = false;
                        this.isEPRTDocument = false;
                        this.loadingDocumentCard = false;
                        this.haveDocumentStudy = false;
                        this.isResidensi = false;
                        this.isSuratIjinAtasan = false;
                        this.eprtAndTpaForm.patchValue({ name: 'Kesediaan Co-Promotor' });
                        this.eprtAndTpaForm.get('publication_year').clearValidators();
                        this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
                        this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
                        this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.eprtAndTpaForm.get('url').reset();
                        this.eprtAndTpaModal.show();
                    }
                });
            }
            else if (this.documentTypeId == 28) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=28`).subscribe(response => {
                    if (response.data.length !== 0) {
                        this.formTypeStudy = 'edit';
                        this.documentTypeStudy = response.data[0].document_type_id;
                        this.isEprtUpdated = true;
                        this.isTPADocument = false;
                        this.isEPRTDocument = true;
                        this.isIPKDocument = false;
                        this.loadingDocumentCard = false;
                        this.isPromotor = false;
                        this.isResidensi = false;
                        this.isSuratIjinAtasan = false;
                        this.isCoPromotor = false;
                        this.documentStudyId = response.data[0].document_study_id;
                        this.docid = response.data[0].document_id;
                        this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
                        this.eprtAndTpaForm.patchValue({ eprt_tpa_score: response.data[0].score });
                        this.eprtAndTpaForm.patchValue({ publication_year: response.data[0].year });
                        this.eprtAndTpaForm.get('url').clearValidators();
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.dataStudyUrl = response.data;
                        if (response.data[0].document_url !== null) {
                            this.haveDocumentStudy = true;
                        }
                        else {
                            this.haveDocumentStudy = false;
                        }
                        this.eprtAndTpaModal.show();
                    }
                    else {
                        this.formTypeStudy = 'input';
                        this.documentTypeStudy = this.documentTypeId;
                        this.isEprtUpdated = false;
                        this.isTPADocument = false;
                        this.isPromotor = false;
                        this.isResidensi = false;
                        this.isSuratIjinAtasan = false;
                        this.loadingDocumentCard = false;
                        this.isIPKDocument = false;
                        this.isEPRTDocument = true;
                        this.isCoPromotor = false;
                        this.haveDocumentStudy = false;
                        this.eprtAndTpaForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.eprtAndTpaForm.get('url').updateValueAndValidity();
                        this.eprtAndTpaForm.get('gpa').clearValidators();
                        this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
                        this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
                        this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
                        this.eprtAndTpaForm.reset();
                        this.eprtAndTpaModal.show();
                    }
                });
            }
            else if (this.documentTypeId == 1 || this.documentTypeId == 2 || this.documentTypeId == 3 || this.documentTypeId == 4 || this.documentTypeId == 5) {
                this.userService.getPersonalDocumentData(`${this.userData}&document_type_id=${this.documentTypeId}`).subscribe(res => {
                    if (res.data.length !== 0) {
                        if (res.data[0].document_id === null) {
                            this.formTypePersonal = 'input';
                            this.loadingDocumentCard = false;
                            this.documentTypePersonal = this.documentTypeId;
                            this.isUpdatedRequirement = false;
                            if (this.documentTypePersonal == 1) {
                                this.isShowIdentityNumber = true;
                                this.participantDocumentForm.get('number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(16)]));
                                this.participantDocumentForm.get('number').updateValueAndValidity();
                            }
                            else {
                                this.isShowIdentityNumber = false;
                                this.participantDocumentForm.get('number').clearValidators();
                                this.participantDocumentForm.get('number').updateValueAndValidity();
                                this.participantDocumentForm.patchValue({ number: '' });
                            }
                            this.participantDocumentForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                            this.participantDocumentForm.get('url').updateValueAndValidity();
                            this.participantDocumentForm.patchValue({ name: res.data[0].document_name });
                            this.participantDocumentForm.patchValue({ url: '' });
                            this.dataRequirementUrl = '';
                            this.haveDocumentPersonal = false;
                            this.documentRequirementModal.show();
                        }
                        else {
                            this.formTypePersonal = 'edit';
                            this.loadingDocumentCard = false;
                            this.documentTypePersonal = res.data[0].document_type_id;
                            this.documentidPersonal = res.data[0].document_id;
                            this.isUpdatedRequirement = true;
                            this.participantDocumentForm.get('url').clearValidators();
                            this.participantDocumentForm.get('url').updateValueAndValidity();
                            this.dataRequirementUrl = res.data;
                            this.documentRequirementModal.show();
                            this.participantDocumentForm.patchValue({ name: res.data[0].document_name });
                            this.participantDocumentForm.patchValue({ url: '' });
                            if (this.documentTypePersonal == 1) {
                                this.participantDocumentForm.patchValue({ number: res.data[0].number });
                                this.participantDocumentForm.get('number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(16)]));
                                this.participantDocumentForm.get('number').updateValueAndValidity();
                                this.isShowIdentityNumber = true;
                            }
                            else {
                                this.isShowIdentityNumber = false;
                                this.participantDocumentForm.patchValue({ number: '' });
                                this.participantDocumentForm.get('number').clearValidators();
                                this.participantDocumentForm.get('number').updateValueAndValidity();
                            }
                            if (response2.data[0].document_url !== null) {
                                this.haveDocumentPersonal = true;
                            }
                            else {
                                this.haveDocumentPersonal = false;
                            }
                        }
                    }
                    else {
                        this.formTypePersonal = 'input';
                        this.loadingDocumentCard = false;
                        this.documentTypePersonal = this.documentTypeId;
                        this.isUpdatedRequirement = false;
                        this.isShowIdentityNumber = false;
                        this.participantDocumentForm.get('number').clearValidators();
                        this.participantDocumentForm.get('number').updateValueAndValidity();
                        this.participantDocumentForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.participantDocumentForm.get('url').updateValueAndValidity();
                        this.participantDocumentForm.patchValue({ name: 'Ijazah Pendidikan Terakhir atau Surat Keterangan Lulus' });
                        this.participantDocumentForm.patchValue({ url: '' });
                        this.dataRequirementUrl = '';
                        this.documentRequirementModal.show();
                        this.participantDocumentForm.reset();
                    }
                });
            }
            else {
                this.noDataFoundAlert();
                this.loadingDocumentCard = false;
            }
        });
    }
    closeTranscriptModals() {
        this.transcriptRequirementModal.hide();
        this.isTranscript = false;
        this.transcriptDataForm.reset();
    }
    deleteTranscriptDocument() {
        const data = {
            document_transcript_id: this.documentTranscriptId
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                this.loading = true;
                this.userService.delTranscriptDocument(data).subscribe(response => {
                    if (response.status === 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.renderSelectionDocumentData();
                        this.checkRequiredDocument();
                        this.transcriptRequirementModalView.hide();
                        this.loadingCard = false;
                        this.dynamicForm.reset();
                        this.courseTotal = false;
                        for (let i = this.t.length; i >= 0; i--) {
                            this.t.removeAt(i);
                        }
                    }
                    else {
                        this.broadcasterService.notifBroadcast(true, {
                            title: response.status,
                            msg: response.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loadingCard = false;
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
                    this.loadingCard = false;
                });
            }
        });
    }
    noDataFoundAlert() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: 'Info',
            text: 'Data Dokumen Tidak Ada / Belum ditambahkan ',
            type: 'error'
        });
    }
    closeEprtTpaModals() {
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
    deleteRequirementDocument(data) {
        this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=${data}`).subscribe(response => {
            this.documentTypeId = data;
            if (this.documentTypeId == 6) {
                if (response.data.length !== 0) {
                    if (response.data[0].document_id === null) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: 'Warning',
                            text: 'Anda harus mengunggah dokumen terlebih dahulu',
                            type: 'warning'
                        });
                    }
                    else {
                        const data = {
                            id: response.data[0].document_id
                        };
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                                this.loading = true;
                                this.userService.deletePersonalDocumentData(data).subscribe(res => {
                                    if (res.status == 'Success') {
                                        this.loadSuccess();
                                        this.loading = false;
                                        this.renderSelectionDocumentData();
                                        this.checkRequiredDocument();
                                    }
                                    else {
                                        this.broadcasterService.notifBroadcast(true, {
                                            title: res.status,
                                            msg: res.message,
                                            timeout: 5000,
                                            theme: 'default',
                                            position: 'top-right',
                                            type: 'error'
                                        });
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
                            }
                        });
                    }
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                        title: 'Warning',
                        text: 'Anda harus mengunggah dokumen terlebih dahulu',
                        type: 'warning'
                    });
                }
            }
            else if (this.documentTypeId == 7) {
                // raport
            }
            else if (this.documentTypeId == 8) {
                this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=8`).subscribe(response => {
                    if (response.data.length !== 0) {
                        const data = {
                            id: response.data[0].document_report_card_id
                        };
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                                this.loading = true;
                                this.userService.deletePersonalDocumentData(data).subscribe(res => {
                                    if (res.status == 'Success') {
                                        this.loadSuccess();
                                        this.loading = false;
                                        this.renderSelectionDocumentData();
                                        this.checkRequiredDocument();
                                    }
                                    else {
                                        this.broadcasterService.notifBroadcast(true, {
                                            title: res.status,
                                            msg: res.message,
                                            timeout: 5000,
                                            theme: 'default',
                                            position: 'top-right',
                                            type: 'error'
                                        });
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
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: 'Warning',
                            text: 'Anda harus mengunggah dokumen terlebih dahulu',
                            type: 'warning'
                        });
                    }
                });
            }
            else if (this.documentTypeId == 9) {
                this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=9`).subscribe(response => {
                    if (response.data.length !== 0) {
                        const data = {
                            id: response.data[0].document_supporting_id
                        };
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                                this.loading = true;
                                this.userService.deleteDocumentSupportingData(data).subscribe(res => {
                                    if (res.status == 'Success') {
                                        this.loadSuccess();
                                        this.loading = false;
                                        this.renderSelectionDocumentData();
                                        this.checkRequiredDocument();
                                    }
                                    else {
                                        this.broadcasterService.notifBroadcast(true, {
                                            title: res.status,
                                            msg: res.message,
                                            timeout: 5000,
                                            theme: 'default',
                                            position: 'top-right',
                                            type: 'error'
                                        });
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
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: 'Warning',
                            text: 'Anda harus mengunggah dokumen terlebih dahulu',
                            type: 'warning'
                        });
                    }
                });
            }
            else if (this.documentTypeId == 10) {
                // certificate
            }
            else if (this.documentTypeId == 11) {
                this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=11`).subscribe(response => {
                    if (response.data.length !== 0) {
                        const data = {
                            id: response.data[0].document_supporting_id
                        };
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                                this.loading = true;
                                this.userService.deleteDocumentSupportingData(data).subscribe(res => {
                                    if (res.status == 'Success') {
                                        this.loadSuccess();
                                        this.loading = false;
                                        this.renderSelectionDocumentData();
                                        this.checkRequiredDocument();
                                    }
                                    else {
                                        this.broadcasterService.notifBroadcast(true, {
                                            title: res.status,
                                            msg: res.message,
                                            timeout: 5000,
                                            theme: 'default',
                                            position: 'top-right',
                                            type: 'error'
                                        });
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
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: 'Warning',
                            text: 'Anda harus mengunggah dokumen terlebih dahulu',
                            type: 'warning'
                        });
                    }
                });
            }
            else if (this.documentTypeId == 12) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=12`).subscribe(response => {
                    if (response.data.length !== 0) {
                        const data = {
                            id: response.data[0].document_study_id
                        };
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                                this.loading = true;
                                this.userService.deleteDocumentStudy(data).subscribe(res => {
                                    if (res.status == 'Success') {
                                        this.loadSuccess();
                                        this.loading = false;
                                        this.renderSelectionDocumentData();
                                        this.checkRequiredDocument();
                                    }
                                    else {
                                        this.broadcasterService.notifBroadcast(true, {
                                            title: res.status,
                                            msg: res.message,
                                            timeout: 5000,
                                            theme: 'default',
                                            position: 'top-right',
                                            type: 'error'
                                        });
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
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: 'Warning',
                            text: 'Anda harus mengunggah dokumen terlebih dahulu',
                            type: 'warning'
                        });
                    }
                });
            }
            else if (this.documentTypeId == 13) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=13`).subscribe(response => {
                    if (response.data.length !== 0) {
                        const data = {
                            id: response.data[0].document_study_id
                        };
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                                this.loading = true;
                                this.userService.deleteDocumentStudy(data).subscribe(res => {
                                    if (res.status == 'Success') {
                                        this.loadSuccess();
                                        this.loading = false;
                                        this.renderSelectionDocumentData();
                                        this.checkRequiredDocument();
                                    }
                                    else {
                                        this.broadcasterService.notifBroadcast(true, {
                                            title: res.status,
                                            msg: res.message,
                                            timeout: 5000,
                                            theme: 'default',
                                            position: 'top-right',
                                            type: 'error'
                                        });
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
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: 'Warning',
                            text: 'Anda harus mengunggah dokumen terlebih dahulu',
                            type: 'warning'
                        });
                    }
                });
            }
            else if (this.documentTypeId == 14) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=14`).subscribe(response => {
                    if (response.data.length !== 0) {
                        const data = {
                            id: response.data[0].document_study_id
                        };
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                                this.loading = true;
                                this.userService.deleteDocumentStudy(data).subscribe(res => {
                                    if (res.status == 'Success') {
                                        this.loadSuccess();
                                        this.loading = false;
                                        this.renderSelectionDocumentData();
                                        this.checkRequiredDocument();
                                    }
                                    else {
                                        this.broadcasterService.notifBroadcast(true, {
                                            title: res.status,
                                            msg: res.message,
                                            timeout: 5000,
                                            theme: 'default',
                                            position: 'top-right',
                                            type: 'error'
                                        });
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
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: 'Warning',
                            text: 'Anda harus mengunggah dokumen terlebih dahulu',
                            type: 'warning'
                        });
                    }
                });
            }
            else if (this.documentTypeId == 16) {
                this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=16`).subscribe(response => {
                    if (response.data.length !== 0) {
                        const data = {
                            id: response.data[0].document_study_id
                        };
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                                this.loading = true;
                                this.userService.deleteDocumentStudy(data).subscribe(res => {
                                    if (res.status == 'Success') {
                                        this.loadSuccess();
                                        this.loading = false;
                                        this.renderSelectionDocumentData();
                                        this.checkRequiredDocument();
                                    }
                                    else {
                                        this.broadcasterService.notifBroadcast(true, {
                                            title: res.status,
                                            msg: res.message,
                                            timeout: 5000,
                                            theme: 'default',
                                            position: 'top-right',
                                            type: 'error'
                                        });
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
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: 'Warning',
                            text: 'Anda harus mengunggah dokumen terlebih dahulu',
                            type: 'warning'
                        });
                    }
                });
            }
            else {
                this.userService.getPersonalDocumentData(`${this.userData}&document_type_id=${this.documentTypeId}`).subscribe(res => {
                    if (res.data.length !== 0) {
                        if (res.data[0].document_id === null) {
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                                title: 'Warning',
                                text: 'Anda harus mengunggah dokumen terlebih dahulu',
                                type: 'warning'
                            });
                        }
                    }
                });
            }
        });
    }
    changeCategoryUtbk(event) {
        if (event.value === '1') {
            this.isSaintek = true;
            this.utbkForm.get('math').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^.[0-9.]*$')]);
            this.utbkForm.get('math').updateValueAndValidity();
            this.utbkForm.get('physics').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('physics').updateValueAndValidity();
            this.utbkForm.get('biological').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('biological').updateValueAndValidity();
            this.utbkForm.get('chemical').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
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
        }
        else {
            this.isSaintek = false;
            this.utbkForm.get('sociological').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('sociological').updateValueAndValidity();
            this.utbkForm.get('historical').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('historical').updateValueAndValidity();
            this.utbkForm.get('geography').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
            this.utbkForm.get('geography').updateValueAndValidity();
            this.utbkForm.get('economy').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9.]*$')]);
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
    loadAllDocument() {
    }
    loadDetailDocumentRequirementUrlData(data) {
        this.mode('edit');
        this.documentRequirementDataForm.patchValue({ document_url: data.document_url });
        this.documentUrl = data.document_url;
    }
    showStudyProgram() {
        this.getMaximunStudyPrograms();
    }
    showModalProgramStudy() {
        this.mode('input');
        this.studyProgram = '';
        this.studyProgramModal.show();
        this.isViewData = false;
        this.loadProgramStudyData();
    }
    loadDetailStudyProgramData(data) {
        this.mode('edit');
        this.mappingStudyProgramReg = data.id;
        this.studyProgramDataForm.patchValue({ mapping_path_program_study_id: data.mapping_path_program_study_id.toString() });
        this.studyProgramDataForm.patchValue({ faculty_id: data.faculty_id.toString() });
        this.studyProgramDataForm.patchValue({ studyprogram_id: data.study_program_id.toString() });
        this.studyProgramDataForm.patchValue({ priority: data.priority });
        this.studyProgramDataForm.patchValue({ sdp_default: data.minimum_donation });
        this.studyProgramModal.show();
    }
    loadViewMappingStudyProgram(data) {
        this.loadStudyProgram = false;
        this.isViewData = true;
        this.studyProgramDataForm.get('minimum_donation').clearValidators();
        this.studyProgramDataForm.get('minimum_donation').updateValueAndValidity();
        this.studyProgramDataForm.get('mapping_path_program_study_id').clearValidators();
        this.studyProgramDataForm.get('mapping_path_program_study_id').updateValueAndValidity();
        this.studyProgramDataForm.get('specialization').clearValidators();
        this.studyProgramDataForm.get('specialization').updateValueAndValidity();
        this.studyProgramDataForm.get('class_name').clearValidators();
        this.studyProgramDataForm.get('class_name').updateValueAndValidity();
        this.dataMappingProdi = data;
        this.mappingStudyProgramReg = data.id;
        this.studyProgram = data.study_program_id.toString();
        this.studyProgramDataForm.patchValue({ studyprogram_name: data.study_program_name });
        this.studyProgramDataForm.patchValue({ sdp_default: data.minimum_donation });
        this.studyProgramDataForm.patchValue({ minimum_donation: data.education_fund ? data.education_fund : '0' });
        if (data.education_fund == null) {
            this.educationFundHidden = true;
        }
        else {
            this.educationFundHidden = false;
        }
        this.studyProgramDataForm.patchValue({ specialization_name: data.specialization_name });
        this.studyProgramDataForm.patchValue({ class_type: data.class_type });
        this.studyProgramDataForm.patchValue({ class_name: data.class_type });
        this.studyProgramDataForm.patchValue({ specialization: data.specialization_name });
        this.studyProgramModal.show();
    }
    studyProgramModalClose() {
        this.studyProgramDataForm.reset();
        this.studyProgramModal.hide();
        this.educationFundHidden = false;
    }
    loadBesaranSdp(studyProgram) {
        const study_program = studyProgram ? studyProgram : '0';
        const selection_path = this.selectionPathId ? this.selectionPathId : '0';
        if (studyProgram !== undefined) {
            this.chartService.getMappingProgramStudyData(`selection_path_id=${selection_path}&id=${study_program}`).subscribe((res) => {
                if (res.data.length !== 0) {
                    this.studyProgramId = res.data[0].study_program_id;
                    this.getStudyProgramSpecial(this.studyProgramId);
                    let idr = res.data[0].minimum_donation;
                    this.getStudyProgramSpecial(this.studyProgramId);
                    this.studyProgramDataForm.patchValue({ sdp_default: idr });
                    if (idr == 0) {
                        this.educationFundHidden = true;
                        this.studyProgramDataForm.get('minimum_donation').clearValidators();
                        this.studyProgramDataForm.get('minimum_donation').updateValueAndValidity();
                    }
                    else {
                        this.educationFundHidden = false;
                        this.studyProgramDataForm.get('minimum_donation').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        this.studyProgramDataForm.get('minimum_donation').updateValueAndValidity();
                    }
                }
                else {
                    this.studyProgramDataForm.patchValue({ sdp_default: '10000000' });
                }
            });
        }
    }
    getStudyProgramSpecial(studyProgramId) {
        this.studyProgramId = studyProgramId;
        this.loadStudyProgram = true;
        this.userService.getStudyProgramSpecializationName(`?program_study_id=${studyProgramId}`).subscribe(response => {
            this.loadStudyProgram = false;
            this.listSpecialization = response && response.map((value) => {
                return { value: value.specialization_name.toString(), label: value.specialization_name };
            });
        }, err => {
            this.loadError();
        });
    }
    getStudyProgramClass(val) {
        const specialization_name = val.label;
        this.loadStudyProgram = true;
        this.userService.getClassPasca(`?program_study_id=${this.studyProgramId}&specialization_name=${specialization_name}`).subscribe(response => {
            this.loadStudyProgram = false;
            this.listClass = response && response.map((value) => {
                return { value: value.id.toString(), label: value.class_type };
            });
        }, err => {
            this.loadError();
        });
    }
    onChangeCourseTotal(event) {
        if (event.target.value !== '') {
            if (event.target.value == '0') {
                this.courseTotal = false;
            }
            else {
                this.courseTotal = true;
            }
        }
        else {
            this.courseTotal = false;
        }
        const coursesTotal = event.target.value || 0;
        if (this.t.length < coursesTotal) {
            for (let i = this.t.length; i < coursesTotal; i++) {
                this.t.push(this.fb.group({
                    course_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    course_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    credit_hour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    grade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(2)]],
                }));
            }
        }
        else {
            for (let i = this.t.length; i >= coursesTotal; i--) {
                this.t.removeAt(i);
            }
        }
    }
    onReset() {
        this.submitted = false;
        this.dynamicForm.controls.total_credit.reset();
        this.dynamicForm.controls.total_course.reset();
        this.dynamicForm.controls.url.reset();
        this.t.clear();
        this.courseTotal = false;
    }
    onClear() {
        // clear errors and reset ticket fields
        this.submitted = false;
        this.t.reset();
    }
    checkValueMinDonation(value) {
        if (value == '0') {
            this.studyProgramDataForm.get('minimum_donation').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
            this.studyProgramDataForm.get('minimum_donation').updateValueAndValidity();
        }
        else {
            this.studyProgramDataForm.get('minimum_donation').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1000000), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
            this.studyProgramDataForm.get('minimum_donation').updateValueAndValidity();
        }
    }
    createStudyProgramData() {
        this.loading = true;
        if (this.edit == 'input') {
            this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(res => {
                const dataProdi = res.data.length + 1;
                let data = {
                    program_study_id: this.studyProgramId,
                    registration_number: this.registration_number,
                    mapping_path_study_program_id: this.studyProgramDataForm.controls['mapping_path_program_study_id'].value,
                    priority: dataProdi,
                    education_fund: this.minimumDonation,
                    study_program_specialization_id: this.selectedClass ? this.selectedClass : 0
                };
                this.userService.postStudyProgramRegistrationData(data).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.loadDetailParticipant();
                            this.studyProgramModalClose();
                            this.renderStudyProgramData();
                            this.loadRegistrationProgramStudyData(this.registration_number);
                            this.loading = false;
                            this.loadProgramStudyData();
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
        else if (this.edit == 'edit') {
            const data = {
                program_study_id: this.studyProgramId,
                id: this.mappingStudyProgramReg,
                registration_number: this.registration_number,
                mapping_path_study_program_id: this.studyProgramDataForm.controls['mapping_path_program_study_id'].value,
                education_fund: this.studyProgramDataForm.controls['minimum_donation'].value
            };
            this.userService.updStudyProgramRegistrationData(data).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.studyProgramModalClose();
                        this.renderStudyProgramData();
                        this.loadProgramStudyData();
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
        }
    }
    resetMappingstudyProgram() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: 'Warning',
            text: 'Apakah anda yakin ingin menghapus semua data program studi yang telah anda pilih ?',
            type: 'warning',
            showConfirmButton: true,
            showCloseButton: true,
            showCancelButton: true
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                let payload = {
                    registration_number: this.registration_number
                };
                this.userService.deleteMappingStudyProgram(payload).subscribe(res => {
                    if (res.status == 'Success') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: res.status,
                            text: res.message,
                            type: 'success',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        this.loading = false;
                        this.renderStudyProgramData();
                        this.loadRegistrationProgramStudyData(this.registration_number);
                        this.loadProgramStudyData();
                        this.loadDetailParticipant();
                        this.deleteRegistrationHistorySteps6();
                    }
                    else {
                        this.loading = false;
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                    title: 'Data anda aman',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        });
    }
    loadForDeleteDetailStudyProgramData(data) {
        this.mappingStudyProgramReg = data.id;
        this.deleteStudyProgramMappingModal.show();
    }
    deleteDetailStudyProgramData() {
        this.loading = true;
        const data = {
            id: this.mappingStudyProgramReg
        };
        this.userService.delStudyProgramRegistrationData(data).subscribe(res => {
            if (res.status == 'Success') {
                this.loadSuccess();
                this.renderStudyProgramData();
                this.loadDetailParticipant();
                this.loadRegistrationProgramStudyData(this.registration_number);
                this.deleteRegistrationHistorySteps6();
                this.getMaximunStudyPrograms();
                this.loading = false;
            }
            else {
                this.loadError();
                this.loading = false;
            }
        }, (reason) => {
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loading = false;
        });
        this.deleteStudyProgramMappingModal.hide();
    }
    deleteRegistrationHistorySteps6() {
        const data = {
            registration_number: this.registration_number,
            registration_step: 6
        };
        this.userService.deleteRegistrationSteps(data).subscribe(res => {
            if (res.status == 'Success') {
                this.loadSuccess();
            }
            else {
                this.loadError();
            }
        });
    }
    createTranscriptDocumentCreditTransfer() {
        this.loading = true;
        this.submitted = true;
        if (this.dynamicForm.valid) {
            this.submitted = false;
            const { total_course, total_credit, ticket } = this.dynamicForm.value;
            const objectJson = {
                document_type_id: '25',
                document_name: 'Transkrip Nilai Alih Kredit Transfer',
                document_description: 'Transkrip Nilai Alih Kredit Transfer',
                registration_number: this.registration_number,
                total_course: total_course,
                total_credit: total_credit,
                courses: ticket
            };
            const myJson = JSON.stringify(objectJson, null, 4);
            this.formDataTranscript.append('json', myJson);
            this.userService.postTranscriptDocument(this.formDataTranscript).subscribe(response => {
                if (response !== null) {
                    if (response.status == 'Success') {
                        this.loadSuccess();
                        this.formDataTranscript.delete('url');
                        this.formDataTranscript.delete('json');
                        this.loading = false;
                        this.submitted = false;
                        this.renderSelectionDocumentData();
                        this.checkRequiredDocument();
                        this.transcriptCreditTransferRequirementModalClose();
                    }
                    else {
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: response.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loading = false;
                        this.submitted = false;
                    }
                }
                else {
                    this.loadError();
                    this.loading = false;
                    this.submitted = false;
                }
            }, (reason) => {
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
                this.loading = false;
                this.submitted = false;
            });
        }
        else {
            return;
        }
    }
    loadDetailParticipantData(registrationNumber) {
        this.loadingCard = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.registrationParticipantDataForm.patchValue({ fullname: res.fullname });
                this.registrationParticipantDataForm.patchValue({ NIK: res.identify_number ? res.identify_number : res.passport_number });
                this.registrationParticipantDataForm.patchValue({ registration_number: registrationNumber });
                this.registrationParticipantDataForm.patchValue({ payment_code: this.payment_code });
                if (res.identify_number == null) {
                    this.showPassport = true;
                }
                else {
                    this.showPassport = false;
                }
                this.userService.getRegistrationListParticipantData(`registration_number=${registrationNumber}`).subscribe(result => {
                    const { payment_method } = result.data[0];
                    this.registrationParticipantDataForm.patchValue({ payment_methodd: payment_method });
                    this.loadingCard = false;
                });
            });
        }
        else {
            const unameEx = this.userProfile.username + '@gmail.com';
            this.userService.getParticipantDetailData(unameEx).subscribe(res => {
                this.registrationParticipantDataForm.patchValue({ fullname: res.fullname });
                this.registrationParticipantDataForm.patchValue({ NIK: res.identify_number.toString() });
                this.registrationParticipantDataForm.patchValue({ registration_number: registrationNumber });
                this.registrationParticipantDataForm.patchValue({ payment_code: this.payment_code });
                this.userService.getRegistrationListParticipantData(`registration_number=${registrationNumber}`).subscribe(result => {
                    const { payment_method } = result.data[0];
                    this.registrationParticipantDataForm.patchValue({ payment_methodd: payment_method });
                    this.loadingCard = false;
                });
            });
        }
    }
    onAddRow() {
        this.rows.push(this.createItemFormGroup());
    }
    onRemoveRow(rowIndex) {
        this.rows.removeAt(rowIndex);
    }
    createItemFormGroup() {
        return this.fb.group({
            name: null,
            description: null,
            qty: null
        });
    }
    renderStudyProgramData() {
        this.dtElements.forEach((dtElement, index) => {
            if (index == 0) {
                dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            }
        });
    }
    createReportCardDocument() {
        this.loading = true;
        if (this.documentTypeId == 7) {
            if (this.reportCardDataForm.valid) {
                switch (this.formType) {
                    case 'input':
                        this.formData.append('registration_number', this.registration_number);
                        this.formData.append('document_type_id', this.documentTypeId);
                        this.formData.append('semester_id', this.semester);
                        this.formData.append('range_score', '2');
                        this.formData.append('physics', this.reportCardDataForm.controls['physics'].value ? this.reportCardDataForm.controls['physics'].value : 0);
                        this.formData.append('math', this.reportCardDataForm.controls['math'].value ? this.reportCardDataForm.controls['math'].value : 0);
                        this.formData.append('bahasa', this.reportCardDataForm.controls['bahasa'].value ? this.reportCardDataForm.controls['bahasa'].value : 0);
                        this.formData.append('english', this.reportCardDataForm.controls['english'].value ? this.reportCardDataForm.controls['english'].value : 0);
                        this.formData.append('economy', this.reportCardDataForm.controls['economy'].value ? this.reportCardDataForm.controls['economy'].value : 0);
                        this.formData.append('sociological', this.reportCardDataForm.controls['sociological'].value ? this.reportCardDataForm.controls['sociological'].value : 0);
                        this.formData.append('geography', this.reportCardDataForm.controls['geography'].value ? this.reportCardDataForm.controls['geography'].value : 0);
                        this.formData.append('chemical', this.reportCardDataForm.controls['chemical'].value ? this.reportCardDataForm.controls['chemical'].value : 0);
                        this.formData.append('biology', this.reportCardDataForm.controls['biology'].value ? this.reportCardDataForm.controls['biology'].value : 0);
                        this.userService.postDocumentReportCardData(this.formData).subscribe(res => {
                            if (res != null) {
                                if (res.status == 'Success') {
                                    this.formData.delete('registration_number');
                                    this.formData.delete('document_type_id');
                                    this.formData.delete('semester_id');
                                    this.formData.delete('range_score');
                                    this.formData.delete('physics');
                                    this.formData.delete('math');
                                    this.formData.delete('bahasa');
                                    this.formData.delete('english');
                                    this.formData.delete('economy');
                                    this.formData.delete('geography');
                                    this.formData.delete('sociological');
                                    this.formData.delete('biology');
                                    this.formData.delete('chemical');
                                    this.formData.delete('url');
                                    this.loadSuccess();
                                    this.documentReportCardId = res.report_id;
                                    this.closeRaportModalDetail();
                                    this.loadDetailReportCardFileData();
                                    this.renderSelectionDocumentData();
                                    this.checkRequiredDocument();
                                    this.loading = false;
                                }
                                else {
                                    this.loadError();
                                    this.loading = false;
                                    this.formData.delete('registration_number');
                                    this.formData.delete('document_type_id');
                                    this.formData.delete('semester_id');
                                    this.formData.delete('range_score');
                                    this.formData.delete('physics');
                                    this.formData.delete('math');
                                    this.formData.delete('bahasa');
                                    this.formData.delete('english');
                                    this.formData.delete('economy');
                                    this.formData.delete('geography');
                                    this.formData.delete('sociological');
                                    this.formData.delete('biology');
                                    this.formData.delete('chemical');
                                    this.formData.delete('url');
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
                        break;
                    default: break;
                }
            }
        }
        else if (this.documentTypeId == 8 || this.documentTypeId == 23 || this.documentTypeId == 24) {
            if (this.transcriptDataForm.valid) {
                switch (this.formType) {
                    case 'input':
                        this.formData3.append('registration_number', this.registration_number);
                        this.formData3.append('document_type_id', this.documentTypeId);
                        if (this.documentTypeId == 23) {
                            this.formData3.append('gpa', this.transcriptDataForm.value.gpa);
                        }
                        else if (this.documentTypeId == 24) {
                            this.formData3.append('gpa', this.transcriptDataForm.value.gpa);
                        }
                        this.userService.postDocumentReportCardData(this.formData3).subscribe(res => {
                            if (res != null) {
                                if (res.status == 'Success') {
                                    this.loadSuccess();
                                    this.formData3.delete('registration_number');
                                    this.formData3.delete('document_type_id');
                                    this.formData3.delete('gpa');
                                    this.documentTranscriptId = res.report_id;
                                    this.renderSelectionDocumentData();
                                    this.checkRequiredDocument();
                                    this.closeTranscriptModals();
                                    this.loading = false;
                                }
                                else {
                                    this.loadError();
                                    this.loading = false;
                                }
                            }
                            else {
                                this.loading = false;
                                this.loadError();
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
                        break;
                    case 'edit':
                        this.formData3Updated.append('document_id', this.documentTranscriptId);
                        this.formData3Updated.append('report_id', this.documentReportTranscriptId);
                        this.formData3Updated.append('registration_number', this.registration_number);
                        this.formData3Updated.append('document_type_id', this.documentTypeId);
                        if (this.documentTypeId == 23) {
                            this.formData3Updated.append('gpa', this.transcriptDataForm.value.gpa);
                        }
                        else if (this.documentTypeId == 24) {
                            this.formData3Updated.append('gpa', this.transcriptDataForm.value.gpa);
                        }
                        this.userService.updDocumentReportCardData(this.formData3Updated).subscribe(res => {
                            if (res != null) {
                                if (res.status == 'Success') {
                                    this.formData3Updated.delete('document_id');
                                    this.formData3Updated.delete('report_id');
                                    this.formData3Updated.delete('registration_number');
                                    this.formData3Updated.delete('document_type_id');
                                    this.formData3Updated.delete('gpa');
                                    this.loadSuccess();
                                    this.loading = false;
                                    this.renderSelectionDocumentData();
                                    this.closeTranscriptModals();
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
                        break;
                    default: break;
                }
            }
        }
    }
    uploadReportCardFile(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
            fileType == 'png') {
            if (size < 2000000) {
                this.formData.append('url', elem.files[0]);
            }
            else {
                this.errSize = true;
                this.reportCardDataForm.get('url').patchValue('');
            }
        }
        else {
            this.errType = true;
            this.reportCardDataForm.get('url').patchValue('');
        }
    }
    uploadRequirementDocument(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    if (this.isUpdatedRequirement === true) {
                        this.formDataPersonalUpd.delete('url');
                        this.formDataPersonalUpd.append('url', elem.files[0]);
                    }
                    else {
                        this.formDataPersonal.delete('url');
                        this.formDataPersonal.append('url', elem.files[0]);
                    }
                }
                else {
                    this.errSize = true;
                    this.participantDocumentForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.participantDocumentForm.get('url').patchValue('');
            }
        }
    }
    uploadProposalDocument(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 5000000) {
                    if (this.isEprtUpdated === true) {
                        this.formDataProposalUpd.append('url', elem.files[0]);
                    }
                    else {
                        this.formDataProposal.append('url', elem.files[0]);
                    }
                }
                else {
                    this.errSize = true;
                    this.proposalForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.proposalForm.get('url').patchValue('');
            }
        }
    }
    uploadUtbkDocument(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
                if (size < 2000000) {
                    if (this.isUtbkUpdated) {
                        this.formDataUtbkUpd.append('url', elem.files[0]);
                    }
                    else {
                        this.formDataUtbk.append('url', elem.files[0]);
                    }
                }
                else {
                    this.errSize = true;
                    this.utbkForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.utbkForm.get('url').patchValue('');
            }
        }
    }
    uploadTranscriptFile(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    this.formDataTranscript.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                }
            }
            else {
                this.errType = true;
            }
        }
    }
    uploadTranscriptFiles(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
                if (size < 2000000) {
                    if (this.isUpdatedTranscript) {
                        this.formData3Updated.append('url', elem.files[0]);
                    }
                    else {
                        this.formData3.append('url', elem.files[0]);
                    }
                }
                else {
                    this.errSize = true;
                    this.transcriptDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.transcriptDataForm.get('url').patchValue('');
            }
        }
    }
    uploadIjazahDocument(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
                if (size < 2000000) {
                    if (this.isIjazahUpdated) {
                        this.formDataIjazahUpd.append('url', elem.files[0]);
                    }
                    else {
                        this.formDataIjazah.append('url', elem.files[0]);
                    }
                }
                else {
                    this.errSize = true;
                    this.ijazahForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.ijazahForm.get('url').patchValue('');
            }
        }
    }
    // edit data raport
    loadReportCardDetailFileData(data, type) {
        this.loadDataSemesterFilter();
        this.formType = type;
        if (type === 'view') {
            this.loadSemesterChecked();
            this.showMapel = true;
            this.documentTypeId = 7;
            this.isViewRaport = true;
            this.reportCardDataForm.get('url').clearValidators();
            this.reportCardDataForm.get('url').updateValueAndValidity();
            this.reportCardDataForm.get('semester_id').clearValidators();
            this.reportCardDataForm.get('semester_id').updateValueAndValidity();
            this.documentIdCheck = data.document_id;
            this.documentReportCardId = data.document_report_card_id;
            this.reportCardDataForm.patchValue({ registration_number: this.registration_number });
            this.reportCardDataForm.patchValue({ document_type_id: this.documentTypeId });
            // this.reportCardDataForm.patchValue({ semester_id: data.semester_id && data.semester_id.toString() });
            this.reportCardDataForm.patchValue({ semester_name: data.semesters });
            this.reportCardDataForm.patchValue({ range_score: data.range_score && data.range_score.toString() });
            this.reportCardDataForm.patchValue({ math: data.math });
            this.reportCardDataForm.patchValue({ physics: data.physics });
            this.reportCardDataForm.patchValue({ bahasa: data.bahasa });
            this.reportCardDataForm.patchValue({ english: data.english });
            this.reportCardDataForm.patchValue({ sociological: data.sociological });
            this.reportCardDataForm.patchValue({ economy: data.economy });
            this.reportCardDataForm.patchValue({ geography: data.geography });
            this.reportCardDataForm.patchValue({ biology: data.biology });
            this.reportCardDataForm.patchValue({ chemical: data.chemical });
            this.viewDocumentReport();
        }
        else {
            this.isViewRaport = false;
            this.documentTypeId = 7;
            this.reportCardDataForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.reportCardDataForm.get('url').updateValueAndValidity();
            this.reportCardDataForm.get('semester_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.reportCardDataForm.get('semester_id').updateValueAndValidity();
        }
        this.reportCardDetailModal.show();
    }
    loadSemesterChecked() {
        this.userService.getRaportSemesters(`?registration_number=${this.registration_number}&is_checked=1`).subscribe(res => {
            if (res.length !== 0) {
                this.isNotHaveMappingData = false;
                for (let i = 0; i < res.length; i++) {
                    let x = res[i].key_name;
                    if (x == 'math') {
                        this.isMathStudy = true;
                        this.reportCardDataForm.get('math').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('math').updateValueAndValidity();
                    }
                    else if (x == 'bahasa') {
                        this.isBahasaStudy = true;
                        this.reportCardDataForm.get('bahasa').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('bahasa').updateValueAndValidity();
                    }
                    else if (x == 'english') {
                        this.isEnglishStudy = true;
                        this.reportCardDataForm.get('english').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('english').updateValueAndValidity();
                    }
                    else if (x == 'chemical') {
                        this.chemicalStudy = true;
                        this.reportCardDataForm.get('chemical').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('chemical').updateValueAndValidity();
                    }
                    else if (x == 'biology') {
                        this.biologyStudy = true;
                        this.reportCardDataForm.get('biology').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('biology').updateValueAndValidity();
                    }
                    else if (x == 'physics') {
                        this.physicsStudy = true;
                        this.reportCardDataForm.get('physics').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('physics').updateValueAndValidity();
                    }
                    else if (x == 'economy') {
                        this.economyStudy = true;
                        this.reportCardDataForm.get('economy').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('economy').updateValueAndValidity();
                    }
                    else if (x == 'sociological') {
                        this.sociologicalStudy = true;
                        this.reportCardDataForm.get('sociological').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('sociological').updateValueAndValidity();
                    }
                    else if (x == 'geography') {
                        this.geographyStudy = true;
                        this.reportCardDataForm.get('geography').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
                        this.reportCardDataForm.get('geography').updateValueAndValidity();
                    }
                }
                this.keyName = res;
            }
            else {
                this.isNotHaveMappingData = true;
            }
        });
    }
    deleteReportCardData(data) {
        const datas = {
            id: data.document_report_card_id
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                this.loading = true;
                this.userService.deleteReportCard(datas).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                                position: 'center',
                                type: 'success',
                                title: this.successDel,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.closeRaportModalDetail();
                            this.loadDetailReportCardFileData();
                            this.renderSelectionDocumentData();
                            this.checkRequiredDocument();
                            this.loading = false;
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                                position: 'center',
                                type: 'error',
                                title: this.failedDel,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.loading = false;
                        }
                    }
                    else {
                        this.loading = false;
                        this.loadError();
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
    viewDocumentReport() {
        this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=7&document_report_card_id=${this.documentReportCardId}`).subscribe(response => {
            if (response.data.length !== 0) {
                this.listDocumentReport = response.data;
            }
            else {
                this.listDocumentReport = '';
            }
        });
    }
    loadDetailReportCardFileData() {
        this.loadtableReportCardData = true;
        this.loadSemesterChecked();
        this.tableData2 = [];
        this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=7`).subscribe(response => {
            this.tableData2 = response.data;
            this.dtTrigger2.next(); // Trigger for load datatable
            this.loadtableReportCardData = false;
        }, err => {
            this.loadError();
            this.loadtableReportCardData = false;
        });
    }
    createCertificateDocument() {
        this.loading = true;
        if (this.certificateDataForm.valid) {
            switch (this.formTypeCertificate) {
                case 'input':
                    this.formData1.append('registration_number', this.registration_number);
                    this.formData1.append('certificate_id', this.documentCertificateId);
                    this.formData1.append('name', this.certificateDataForm.controls['name'].value);
                    this.formData1.append('description', this.certificateDataForm.controls['description'].value);
                    this.formData1.append('certificate_type_id', this.certificateDataForm.controls['certificate_type_id'].value);
                    this.formData1.append('certificate_level_id', this.certificateDataForm.controls['certificate_level_id'].value);
                    this.formData1.append('publication_year', this.certificateDataForm.controls['publication_year'].value);
                    this.formData1.append('certificate_score', this.certificateDataForm.controls['certificate_score'].value);
                    this.formData1.append('document_type_id', this.documentTypeId);
                    this.userService.postDocumentCertificateData(this.formData1).subscribe(res => {
                        if (res != null) {
                            if (res.status == 'Success') {
                                this.loadSuccess();
                                this.formData1.delete('registration_number');
                                this.formData1.delete('certificate_id');
                                this.formData1.delete('name');
                                this.formData1.delete('description');
                                this.formData1.delete('certificate_type_id');
                                this.formData1.delete('certificate_level_id');
                                this.formData1.delete('publication_year');
                                this.formData1.delete('document_type_id');
                                this.formData1.delete('url');
                                this.documentCertificateId = res.document_certificate_id;
                                this.loadDetailCertificateFileDataTable(this.registration_number);
                                this.renderSelectionDocumentData();
                                this.checkRequiredDocument();
                                this.closeCertificateModalDetail();
                                this.loading = false;
                                this.certificateDataForm.reset();
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
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: reason.error.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loading = false;
                    });
                    break;
                default: break;
            }
        }
    }
    uploadCertificateFile(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    this.formData1.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.certificateDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.certificateDataForm.get('url').patchValue('');
            }
        }
    }
    loadDetailCertificateFileDataTable(registration_number) {
        this.loadtableCertificateData = true;
        this.userService.getDocumentCertificateData(`registration_number=${registration_number}`).subscribe(response => {
            this.tableData3 = response.data;
            this.loadtableCertificateData = false;
        }, err => {
            this.loadError();
            this.loadtableCertificateData = false;
        });
    }
    loadCertificateDetailFileData(data, type) {
        this.formTypeCertificate = type;
        if (type === 'view') {
            this.isViewCertificate = true;
            this.certificateDataForm.get('url').clearValidators();
            this.certificateDataForm.get('url').updateValueAndValidity();
            this.documentIdCheck = data.document_id;
            this.documentCertificateId = data.document_certificate_id;
            this.certificateDataForm.patchValue({ registration_number: this.registration_number });
            this.certificateDataForm.patchValue({ document_type_id: this.documentTypeId });
            this.certificateDataForm.patchValue({ certificate_level_id: data.certificate_level_id.toString() });
            this.certificateDataForm.patchValue({ certificate_type_id: data.certificate_type_id && data.certificate_type_id.toString() });
            this.certificateDataForm.patchValue({ name: data.certificate_name });
            this.certificateDataForm.patchValue({ certificate_score: data.certificate_score });
            this.certificateDataForm.patchValue({ publication_year: data.publication_year });
            this.certificateDataForm.patchValue({ description: data.description });
            this.viewDocumentCertificate();
        }
        else {
            this.isViewCertificate = false;
            this.certificateDataForm.reset();
            this.certificateDataForm.get('url').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.certificateDataForm.get('url').updateValueAndValidity();
        }
        this.certificateDetailModal.show();
    }
    deleteCertificateDocument(data) {
        const certificateData = {
            id: data.document_certificate_id
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                this.loading = true;
                this.userService.deleteDocumentCertificate(certificateData).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                                position: 'center',
                                type: 'success',
                                title: this.successDel,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.loadDetailCertificateFileDataTable(this.registration_number);
                            this.renderSelectionDocumentData();
                            this.checkRequiredDocument();
                            this.closeCertificateModalDetail();
                            this.loading = false;
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                                position: 'center',
                                type: 'error',
                                title: this.failedDel,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.loading = false;
                        }
                    }
                    else {
                        this.loading = false;
                        this.loadError();
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
    viewDocumentCertificate() {
        this.userService.getDocumentCertificateData(`registration_number=${this.registration_number}&document_certificate_id=${this.documentCertificateId}`).subscribe(response => {
            if (response.data.length !== 0) {
                this.listDocumentCertificate = response.data;
            }
            else {
                this.listDocumentCertificate = '';
            }
        });
    }
    createIjazahDocument() {
        switch (this.formTypeIjazah) {
            case 'input':
                this.loading = true;
                this.formDataIjazah.append('document_type_id', this.documentTypeIjazah);
                if (this.documentTypeId == 18) {
                    this.formDataIjazah.append('name', 'Ijazah S1');
                    this.formDataIjazah.append('participant_id', this.userData);
                }
                else if (this.documentTypeId == 19) {
                    this.formDataIjazah.append('name', 'Ijazah S2');
                    this.formDataIjazah.append('participant_id', this.userData);
                }
                else if (this.documentTypeId == 22) {
                    this.formDataIjazah.append('name', 'Portofolio');
                    this.formDataIjazah.append('participant_id', this.userData);
                    // this.formDataIjazah.append('url_portofolio', this.ijazahForm.value.link_document);
                }
                this.userService.postPersonalDocumentData(this.formDataIjazah).subscribe(res => {
                    if (res.status == 'Success') {
                        this.formDataIjazah.delete('document_type_id');
                        this.formDataIjazah.delete('name');
                        this.formDataIjazah.delete('url');
                        this.formDataIjazah.delete('url_portofolio');
                        this.formDataIjazah.delete('participant_id');
                        this.loadSuccess();
                        this.loading = false;
                        this.closeIjazahModals();
                        this.renderSelectionDocumentData();
                        this.checkRequiredDocument();
                    }
                    else {
                        this.broadcasterService.notifBroadcast(true, {
                            title: res.status,
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
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
                break;
            case 'edit':
                this.loading = true;
                this.formDataIjazahUpd.append('document_type_id', this.documentTypeIjazah);
                this.formDataIjazahUpd.append('document_id', this.docid);
                if (this.documentTypeId == 18) {
                    this.formDataIjazahUpd.append('name', 'Ijazah S1');
                    this.formDataIjazahUpd.append('participant_id', this.userData);
                }
                else if (this.documentTypeId == 19) {
                    this.formDataIjazahUpd.append('name', 'Ijazah S2');
                    this.formDataIjazahUpd.append('participant_id', this.userData);
                }
                else if (this.documentTypeId == 22) {
                    this.formDataIjazahUpd.append('name', 'Portofolio');
                    this.formDataIjazahUpd.append('participant_id', this.userData);
                    // this.formDataIjazahUpd.append('url_portofolio', this.ijazahForm.value.link_document);
                }
                this.userService.updPersonalDocumentData(this.formDataIjazahUpd).subscribe(res => {
                    if (res.status == 'Success') {
                        this.formDataIjazahUpd.delete('document_id');
                        this.formDataIjazahUpd.delete('document_type_id');
                        this.formDataIjazahUpd.delete('name');
                        this.formDataIjazahUpd.delete('url');
                        this.formDataIjazahUpd.delete('url_portofolio');
                        this.formDataIjazahUpd.delete('participant_id');
                        this.loadSuccess();
                        this.loading = false;
                        this.closeIjazahModals();
                        this.renderSelectionDocumentData();
                        this.checkRequiredDocument();
                    }
                    else {
                        this.broadcasterService.notifBroadcast(true, {
                            title: res.status,
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
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
                break;
            default:
                break;
        }
    }
    closeIjazahModals() {
        this.ijazahModals.hide();
        this.ijazahForm.reset();
        this.isIjazahS1 = false;
        this.isIjazahS2 = false;
        this.isPortofolio = false;
    }
    getTablePublication() {
        this.loadTablePublication = true;
        this.userService.getDocumentPublication(`?participant_id=${this.userData}`).subscribe(response => {
            this.tableDataPublication = response;
            this.totalRecord = response.length;
            this.loadTablePublication = false;
        }, err => {
            this.loadError();
            this.loadTablePublication = false;
        });
    }
    loadPublicationDataDetails(data, type) {
        this.formType = type;
        if (type === 'edit') {
            this.docid = data.id;
            this.documentPublicationTypeId = data.document_type_id;
            this.publicationID = data.document_id;
            this.selectedWriterPosition = data.publication_writer_position_id && data.publication_writer_position_id.toString();
            this.selectedPublicationType = data.publication_type_id && data.publication_type_id.toString();
            this.publikasiForm.patchValue({ name: data.writer_name });
            this.publikasiForm.patchValue({ title: data.title });
            this.publikasiForm.patchValue({ publication_date: data.publish_date });
            this.publikasiForm.patchValue({ link: data.publication_link });
            this.haveLinkPublication = true;
        }
        else {
            this.selectedPublicationType = '';
            this.selectedWriterPosition = '';
            this.haveLinkPublication = false;
        }
        this.publikasiModals.show();
    }
    closePublikasiModals() {
        this.publikasiForm.reset();
        this.publikasiModals.hide();
        document.querySelector('body').classList.add('modal-open');
    }
    deletePublicationData(data) {
        const datas = {
            document_publication_id: data.id
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                this.loading = true;
                this.userService.deleteDocumentPublication(datas).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                                position: 'center',
                                type: 'success',
                                title: this.successDel,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.closePublikasiModals();
                            this.getTablePublication();
                            this.renderSelectionDocumentData();
                            this.checkRequiredDocument();
                            this.loading = false;
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                                position: 'center',
                                type: 'error',
                                title: this.failedDel,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.loading = false;
                        }
                    }
                    else {
                        this.loading = false;
                        this.loadError();
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
    getPublicationTypeLists() {
        this.userService.getPublicationTypeList().subscribe(response => {
            this.listPublicationType = response && response.map((value) => {
                return { value: value.id.toString(), label: value.type };
            });
        }, err => {
            this.loadError();
        });
    }
    getPublicationPositionLists() {
        this.userService.getPublicationPositionList().subscribe(response => {
            this.listWriterPosition = response && response.map((value) => {
                return { value: value.id.toString(), label: value.type };
            });
        }, err => {
            this.loadError();
        });
    }
    createPublicationData() {
        switch (this.formType) {
            case 'input':
                this.loading = true;
                const payload = {
                    document_type_id: this.documentPublicationTypeId,
                    participant_id: this.userData,
                    publication_type_id: this.selectedPublicationType,
                    publication_writer_position_id: this.selectedWriterPosition,
                    writer_name: this.publikasiForm.controls['name'].value,
                    name: 'Dokumen Publikasi',
                    title: this.publikasiForm.controls['title'].value,
                    publish_date: this.publikasiForm.controls['publication_date'].value,
                    publication_link: this.publikasiForm.controls['link'].value,
                };
                this.userService.postDocumentPublication(payload).subscribe(response => {
                    if (response.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.getTablePublication();
                        this.renderSelectionDocumentData();
                        this.closePublikasiModals();
                        this.checkRequiredDocument();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: response.status,
                            msg: response.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
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
                break;
            case 'edit':
                this.loading = true;
                const payloadUpd = {
                    document_publication_id: this.docid,
                    participant_id: this.userData,
                    document_id: this.publicationiD,
                    document_type_id: this.documentPublicationTypeId,
                    publication_type_id: this.selectedPublicationType,
                    publication_writer_position_id: this.selectedWriterPosition,
                    writer_name: this.publikasiForm.controls['name'].value,
                    name: 'Dokumen Publikasi',
                    title: this.publikasiForm.controls['title'].value,
                    publish_date: this.publikasiForm.controls['publication_date'].value,
                    publication_link: this.publikasiForm.controls['link'].value,
                };
                this.userService.updDocumentPublication(payloadUpd).subscribe(response => {
                    if (response.status == 'Success') {
                        this.loadSuccess();
                        this.loading = false;
                        this.getTablePublication();
                        this.renderSelectionDocumentData();
                        this.closePublikasiModals();
                        this.checkRequiredDocument();
                    }
                    else {
                        this.loading = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: response.status,
                            msg: response.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
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
                break;
            default:
                break;
        }
    }
    createPersonalDocumentParticipant() {
        this.loading = true;
        switch (this.formTypePersonal) {
            case 'input':
                this.formDataPersonal.append('document_type_id', this.documentTypePersonal);
                this.formDataPersonal.append('name', this.participantDocumentForm.controls['name'].value);
                this.formDataPersonal.append('description', this.participantDocumentForm.controls['name'].value);
                this.formDataPersonal.append('number', this.participantDocumentForm.controls['number'].value);
                this.formDataPersonal.append('participant_id', this.userData);
                this.userService.postPersonalDocumentData(this.formDataPersonal).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.formDataPersonal.delete('document_type_id');
                            this.formDataPersonal.delete('name');
                            this.formDataPersonal.delete('description');
                            this.formDataPersonal.delete('number');
                            this.formDataPersonal.delete('url');
                            this.formDataPersonal.delete('participant_id');
                            this.loadSuccess();
                            this.loading = false;
                            this.renderSelectionDocumentData();
                            this.documentRequirementModalClose();
                            this.checkRequiredDocument();
                        }
                        else {
                            this.broadcasterService.notifBroadcast(true, {
                                title: res.status,
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                            });
                            this.loading = false;
                        }
                    }
                    else {
                        this.loading = false;
                        this.loadError();
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
                break;
            case 'edit':
                this.formDataPersonalUpd.append('document_id', this.documentidPersonal);
                this.formDataPersonalUpd.append('name', this.participantDocumentForm.controls['name'].value);
                this.formDataPersonalUpd.append('description', this.participantDocumentForm.controls['name'].value);
                this.formDataPersonalUpd.append('number', this.participantDocumentForm.controls['number'].value);
                this.userService.updPersonalDocumentData(this.formDataPersonalUpd).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.formDataPersonalUpd.delete('document_id');
                            this.formDataPersonalUpd.delete('name');
                            this.formDataPersonalUpd.delete('description');
                            this.formDataPersonalUpd.delete('number');
                            this.formDataPersonalUpd.delete('url');
                            this.loadSuccess();
                            this.documentRequirementModalClose();
                            this.renderSelectionDocumentData();
                            this.loading = false;
                        }
                        else {
                            this.broadcasterService.notifBroadcast(true, {
                                title: res.status,
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                            });
                        }
                    }
                    else {
                        this.loadError();
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
                break;
            default: break;
        }
    }
    createUtbkDocument() {
        switch (this.formTypeUtbk) {
            case 'input':
                this.loading = true;
                this.formDataUtbk.append('document_type_id', this.documentTypeUtbk);
                this.formDataUtbk.append('name', 'Nilai UTBK');
                this.formDataUtbk.append('general_reasoning', this.utbkForm.controls['KPUScore'].value);
                this.formDataUtbk.append('quantitative_knowledge', this.utbkForm.controls['PKScore'].value);
                this.formDataUtbk.append('comprehension_general_knowledge', this.utbkForm.controls['PDPUScore'].value);
                this.formDataUtbk.append('comprehension_reading_knowledge', this.utbkForm.controls['KMBDMScore'].value);
                this.formDataUtbk.append('math', this.utbkForm.controls['math'].value ? this.utbkForm.controls['math'].value : '0');
                this.formDataUtbk.append('physics', this.utbkForm.controls['physics'].value ? this.utbkForm.controls['physics'].value : '0');
                this.formDataUtbk.append('chemical', this.utbkForm.controls['chemical'].value ? this.utbkForm.controls['chemical'].value : '0');
                this.formDataUtbk.append('biology', this.utbkForm.controls['biological'].value ? this.utbkForm.controls['biological'].value : '0');
                this.formDataUtbk.append('geography', this.utbkForm.controls['geography'].value ? this.utbkForm.controls['geography'].value : '0');
                this.formDataUtbk.append('historical', this.utbkForm.controls['historical'].value ? this.utbkForm.controls['historical'].value : '0');
                this.formDataUtbk.append('sociological', this.utbkForm.controls['sociological'].value ? this.utbkForm.controls['sociological'].value : '0');
                this.formDataUtbk.append('economy', this.utbkForm.controls['economy'].value ? this.utbkForm.controls['economy'].value : '0');
                this.formDataUtbk.append('registration_number', this.registration_number);
                this.formDataUtbk.append('major_type', this.selectedCategoryUtbk);
                this.userService.postUtbkDocument(this.formDataUtbk).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.formDataUtbk.delete('registration_number');
                            this.formDataUtbk.delete('name');
                            this.formDataUtbk.delete('document_type_id');
                            this.formDataUtbk.delete('description');
                            this.formDataUtbk.delete('general_reasoning');
                            this.formDataUtbk.delete('quantitative_knowledge');
                            this.formDataUtbk.delete('comprehension_general_knowledge');
                            this.formDataUtbk.delete('comprehension_reading_knowledge');
                            this.formDataUtbk.delete('math');
                            this.formDataUtbk.delete('geography');
                            this.formDataUtbk.delete('historical');
                            this.formDataUtbk.delete('sociological');
                            this.formDataUtbk.delete('economy');
                            this.formDataUtbk.delete('physics');
                            this.formDataUtbk.delete('chemical');
                            this.formDataUtbk.delete('biology');
                            this.formDataUtbk.delete('major_type');
                            this.formDataUtbk.delete('url');
                            this.utbkModals.hide();
                            this.loading = false;
                            this.renderSelectionDocumentData();
                            this.checkRequiredDocument();
                        }
                        else {
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Gagal',
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                            });
                            this.loading = false;
                        }
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                }, (reason) => {
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                    this.loading = false;
                });
                break;
            case 'edit':
                this.loading = true;
                this.formDataUtbkUpd.append('utbk_id', this.documentUtbkId);
                this.formDataUtbkUpd.append('document_id', this.documentId);
                // this.formDataUtbkUpd.append('document_type_id', this.documentTypeId);
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
                this.userService.updUtbkdocument(this.formDataUtbkUpd).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.formDataUtbkUpd.delete('registration_number');
                            this.formDataUtbkUpd.delete('name');
                            this.formDataUtbkUpd.delete('document_id');
                            this.formDataUtbkUpd.delete('utbk_id');
                            this.formDataUtbkUpd.delete('description');
                            this.formDataUtbkUpd.delete('general_reasoning');
                            this.formDataUtbkUpd.delete('quantitative_knowledge');
                            this.formDataUtbkUpd.delete('comprehension_general_knowledge');
                            this.formDataUtbkUpd.delete('comprehension_reading_knowledge');
                            this.formDataUtbkUpd.delete('math');
                            this.formDataUtbkUpd.delete('geography');
                            this.formDataUtbkUpd.delete('historical');
                            this.formDataUtbkUpd.delete('sociological');
                            this.formDataUtbkUpd.delete('economy');
                            this.formDataUtbkUpd.delete('physics');
                            this.formDataUtbkUpd.delete('chemical');
                            this.formDataUtbkUpd.delete('biology');
                            this.formDataUtbkUpd.delete('major_type');
                            this.formDataUtbkUpd.delete('url');
                            this.utbkModals.hide();
                            this.loading = false;
                            this.renderSelectionDocumentData();
                            this.checkRequiredDocument();
                        }
                        else {
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Gagal',
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                            });
                            this.loading = false;
                        }
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                }, (reason) => {
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                    this.loading = false;
                });
                break;
            default:
                break;
        }
    }
    createSupportingDocument() {
        this.loading = true;
        if (this.documentTypeId == 9) {
            switch (this.formTypeRecommendation) {
                case 'input':
                    this.formData2.append('registration_number', this.registration_number);
                    this.formData2.append('document_type_id', this.documentTypeId);
                    this.formData2.append('name', 'Surat Rekomendasi');
                    this.formData2.append('description', 'Surat Rekomendasi');
                    this.formData2.append('pic_name', this.supportingDataForm.controls['pic_name'].value);
                    this.formData2.append('pic_phone_number', this.supportingDataForm.controls['pic_phone_number'].value);
                    this.formData2.append('pic_email_address', this.supportingDataForm.controls['pic_email_address'].value);
                    this.formData2.append('pic_address', this.supportingDataForm.controls['pic_address'].value);
                    this.userService.postDocumentSupportingData(this.formData2).subscribe(res => {
                        if (res != null) {
                            if (res.status == 'Success') {
                                this.formData2.delete('registration_number');
                                this.formData2.delete('name');
                                this.formData2.delete('description');
                                this.formData2.delete('pic_name');
                                this.formData2.delete('pic_phone_number');
                                this.formData2.delete('pic_email_address');
                                this.formData2.delete('pic_address');
                                this.formData2.delete('url');
                                this.loadSuccess();
                                this.documentRecommendationId = res.document_id;
                                this.recommendationLetterRequirementModal.hide();
                                this.renderSelectionDocumentData();
                                this.checkRequiredDocument();
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
                    break;
                case 'edit':
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
                    this.userService.updDocumentSupportingData(this.formData2Update).subscribe(res => {
                        if (res != null) {
                            if (res.status == 'Success') {
                                this.formData2Update.delete('registration_number');
                                this.formData2Update.delete('support_id');
                                this.formData2Update.delete('document_id');
                                this.formData2Update.delete('name');
                                this.formData2Update.delete('description');
                                this.formData2Update.delete('pic_name');
                                this.formData2Update.delete('pic_phone_number');
                                this.formData2Update.delete('pic_email_address');
                                this.formData2Update.delete('pic_address');
                                this.formData2Update.delete('url');
                                this.loadSuccess();
                                this.recommendationLetterRequirementModal.hide();
                                this.renderSelectionDocumentData();
                                this.loading = false;
                            }
                            else {
                                this.loadError();
                                this.loading = false;
                            }
                        }
                        else {
                            this.loading = false;
                            this.loadError();
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
                    break;
                default: break;
            }
        }
        else if (this.documentTypeId == 11) {
            switch (this.formTypeAbility) {
                case 'input':
                    this.formDataAbility.append('registration_number', this.registration_number);
                    this.formDataAbility.append('document_type_id', this.documentTypeId);
                    this.formDataAbility.append('name', this.abilityDataForm.controls['name'].value);
                    this.formDataAbility.append('description', this.abilityDataForm.controls['name'].value);
                    this.userService.postDocumentSupportingData(this.formDataAbility).subscribe(res => {
                        if (res != null) {
                            if (res.status == 'Success') {
                                this.formDataAbility.delete('registration_number');
                                this.formDataAbility.delete('document_type_id');
                                this.formDataAbility.delete('description');
                                this.formDataAbility.delete('name');
                                this.formDataAbility.delete('url');
                                this.loadSuccess();
                                this.documentAbilitytId = res.document_id;
                                this.paymentAbilityModal.hide();
                                this.renderSelectionDocumentData();
                                this.loading = false;
                            }
                            else {
                                this.loading = false;
                                this.loadError();
                            }
                        }
                        else {
                            this.loading = false;
                            this.loadError();
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
                    break;
                case 'edit':
                    this.formDataAbilityUpd.append('registration_number', this.registration_number);
                    this.formDataAbilityUpd.append('support_id', this.documentAbilitySupportingId);
                    this.formDataAbilityUpd.append('document_id', this.documentAbilitytId);
                    this.formDataAbilityUpd.append('document_type_id', this.documentTypeId);
                    this.formDataAbilityUpd.append('name', this.abilityDataForm.controls['name'].value);
                    this.formDataAbilityUpd.append('description', this.abilityDataForm.controls['name'].value);
                    this.userService.updDocumentSupportingData(this.formDataAbilityUpd).subscribe(res => {
                        if (res != null) {
                            if (res.status == 'Success') {
                                this.formDataAbilityUpd.delete('registration_number');
                                this.formDataAbilityUpd.delete('support_id');
                                this.formDataAbilityUpd.delete('document_id');
                                this.formDataAbilityUpd.delete('document_type_id');
                                this.formDataAbilityUpd.delete('description');
                                this.formDataAbilityUpd.delete('name');
                                this.formDataAbilityUpd.delete('url');
                                this.loadSuccess();
                                this.paymentAbilityModal.hide();
                                this.renderSelectionDocumentData();
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
                    break;
                default: break;
            }
        }
    }
    createEprtTpaDocument() {
        switch (this.formTypeStudy) {
            case 'input':
                this.loading = true;
                this.formDataStudy.append('document_type_id', this.documentTypeStudy);
                if (this.documentTypeId == 28) {
                    this.formDataStudy.append('name', 'Dokumen TOEFL');
                    this.formDataStudy.append('description', 'Dokumen TOEFL');
                    this.formDataStudy.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
                    this.formDataStudy.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
                }
                else if (this.documentTypeId == 13) {
                    this.formDataStudy.append('name', 'Dokumen TPA');
                    this.formDataStudy.append('description', 'Dokumen TPA');
                    this.formDataStudy.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
                    this.formDataStudy.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
                }
                else if (this.documentTypeId == 14) {
                    this.formDataStudy.append('name', 'Dokumen IPK');
                    this.formDataStudy.append('description', 'Dokumen IPK');
                    this.formDataStudy.append('year', '');
                    this.formDataStudy.append('score', this.eprtAndTpaForm.controls['gpa'].value);
                }
                else if (this.documentTypeId == 16) {
                    this.formDataStudy.append('name', 'Kesediaan Promotor');
                    this.formDataStudy.append('description', 'Kesediaan Promotor');
                    this.formDataStudy.append('year', '');
                    this.formDataStudy.append('score', '');
                }
                else if (this.documentTypeId == 20) {
                    this.formDataStudy.append('name', 'Surat Kesediaan Residensi');
                    this.formDataStudy.append('description', 'Surat Kesediaan Residensi');
                    this.formDataStudy.append('year', '');
                    this.formDataStudy.append('score', '');
                }
                else if (this.documentTypeId == 21) {
                    this.formDataStudy.append('name', 'Surat Ijin Atasan Langsung');
                    this.formDataStudy.append('description', 'Surat Ijin Atasan Langsung');
                    this.formDataStudy.append('year', '');
                    this.formDataStudy.append('score', '');
                }
                else if (this.documentTypeId == 27) {
                    this.formDataStudy.append('name', this.eprtAndTpaForm.controls['nameCoPromotor'].value);
                    this.formDataStudy.append('description', 'Kesediaan Co-Promotor');
                    this.formDataStudy.append('year', '');
                    this.formDataStudy.append('score', '');
                }
                this.formDataStudy.append('number', '');
                this.formDataStudy.append('registration_number', this.registration_number);
                this.userService.postDocumentStudy(this.formDataStudy).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.loading = false;
                            this.formDataStudy.delete('registration_number');
                            this.formDataStudy.delete('name');
                            this.formDataStudy.delete('document_type_id');
                            this.formDataStudy.delete('description');
                            this.formDataStudy.delete('score');
                            this.formDataStudy.delete('year');
                            this.formDataStudy.delete('url');
                            this.closeEprtTpaModals();
                            this.renderSelectionDocumentData();
                            this.checkRequiredDocument();
                        }
                        else {
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Gagal',
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                            });
                            this.loading = false;
                        }
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                }, (reason) => {
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                    this.loading = false;
                });
                break;
            case 'edit':
                this.loading = true;
                if (this.documentTypeId == 28) {
                    this.formDataStudyUpd.append('document_type_id', '28');
                    this.formDataStudyUpd.append('name', 'Document TOEFL');
                    this.formDataStudyUpd.append('description', 'Dokumen TOEFL');
                    this.formDataStudyUpd.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
                    this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
                }
                else if (this.documentTypeId == 13) {
                    this.formDataStudyUpd.append('document_type_id', '13');
                    this.formDataStudyUpd.append('name', 'Dokumen TPA');
                    this.formDataStudyUpd.append('description', 'Dokumen TPA');
                    this.formDataStudyUpd.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
                    this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['gpa'].value);
                }
                else if (this.documentTypeId == 14) {
                    this.formDataStudyUpd.append('document_type_id', '14');
                    this.formDataStudyUpd.append('name', 'Dokumen IPK');
                    this.formDataStudyUpd.append('description', 'Dokumen IPK');
                    this.formDataStudyUpd.append('year', '');
                    this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
                }
                else if (this.documentTypeId == 16) {
                    this.formDataStudyUpd.append('document_type_id', '16');
                    this.formDataStudyUpd.append('name', 'Kesediaan Promotor');
                    this.formDataStudyUpd.append('description', 'Kesediaan Promotor');
                    this.formDataStudyUpd.append('year', '');
                    this.formDataStudyUpd.append('score', '');
                }
                else if (this.documentTypeId == 20) {
                    this.formDataStudyUpd.append('document_type_id', '20');
                    this.formDataStudyUpd.append('name', 'Surat Kesediaan Residensi');
                    this.formDataStudyUpd.append('description', 'Surat Kesediaan Residensi');
                    this.formDataStudyUpd.append('year', '');
                    this.formDataStudyUpd.append('score', '');
                }
                else if (this.documentTypeId == 21) {
                    this.formDataStudyUpd.append('document_type_id', '21');
                    this.formDataStudyUpd.append('name', 'Surat Ijin Atasan Langsung');
                    this.formDataStudyUpd.append('description', 'Surat Ijin Atasan Langsung');
                    this.formDataStudyUpd.append('year', '');
                    this.formDataStudyUpd.append('score', '');
                }
                else if (this.documentTypeId == 27) {
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
                this.userService.updDocumentStudy(this.formDataStudyUpd).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.formDataStudyUpd.delete('registration_number');
                            this.formDataStudyUpd.delete('name');
                            this.formDataStudyUpd.delete('document_type_id');
                            this.formDataStudyUpd.delete('document_id');
                            this.formDataStudyUpd.delete('number');
                            this.formDataStudyUpd.delete('description');
                            this.formDataStudyUpd.delete('score');
                            this.formDataStudyUpd.delete('year');
                            this.formDataStudyUpd.delete('url');
                            this.loading = false;
                            this.closeEprtTpaModals();
                            this.renderSelectionDocumentData();
                            this.checkRequiredDocument();
                        }
                        else {
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Gagal',
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                            });
                            this.loading = false;
                        }
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                }, (reason) => {
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                    this.loading = false;
                });
                break;
        }
    }
    createProposalDocument() {
        switch (this.formTypeProposal) {
            case 'input':
                this.loading = true;
                this.formDataProposal.append('name', 'Dokumen Proposal');
                this.formDataProposal.append('description', 'Dokumen Proposal');
                this.formDataProposal.append('title', this.proposalForm.controls['title'].value);
                this.formDataProposal.append('registration_number', this.registration_number);
                this.formDataProposal.append('document_type_id', this.documentTypeId);
                this.userService.postDocumentProposal(this.formDataProposal).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.formDataProposal.delete('name');
                            this.formDataProposal.delete('description');
                            this.formDataProposal.delete('title');
                            this.formDataProposal.delete('registration_number');
                            this.formDataProposal.delete('document_type_id');
                            this.formDataProposal.delete('url');
                            this.proposalModal.hide();
                            this.loading = false;
                            this.renderSelectionDocumentData();
                            this.checkRequiredDocument();
                        }
                        else {
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Gagal',
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                            });
                            this.loading = false;
                        }
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                }, (reason) => {
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                    this.loading = false;
                });
                break;
            case 'edit':
                this.loading = true;
                this.formDataProposalUpd.append('title', this.proposalForm.controls['title'].value);
                this.formDataProposalUpd.append('document_id', this.docid);
                this.formDataProposalUpd.append('document_study_id', this.documentStudyId);
                this.userService.updDocumentProposal(this.formDataProposalUpd).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.loadSuccess();
                            this.formDataProposalUpd.delete('title');
                            this.formDataProposalUpd.delete('document_study_id');
                            this.formDataProposalUpd.delete('document_id');
                            this.formDataProposalUpd.delete('url');
                            this.proposalModal.hide();
                            this.loading = false;
                            this.renderSelectionDocumentData();
                            this.checkRequiredDocument();
                        }
                        else {
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Gagal',
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                            });
                            this.loading = false;
                        }
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                }, (reason) => {
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Gagal',
                        msg: reason.error.message,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'error'
                    });
                    this.loading = false;
                });
                break;
            default:
                break;
        }
    }
    createRecommendationdocument() {
        switch (this.formTypeRecommendationS2) {
            case 'input':
                this.loading = true;
                const { name_rec1, handphone_rec1, email_rec1, name_rec2, handphone_rec2, email_rec2 } = this.recommendationS2Form.value;
                const dataRec1 = {
                    document_type_id: this.documentTypeId,
                    document_name: 'Rekomendasi S2',
                    description: 'Rekomendasi S2',
                    registration_number: this.registration_number,
                    name: name_rec1,
                    handphone: handphone_rec1,
                    email: email_rec1
                };
                const dataRec2 = {
                    document_type_id: this.documentTypeId,
                    document_name: 'Rekomendasi S2',
                    description: 'Rekomendasi S2',
                    registration_number: this.registration_number,
                    name: name_rec2,
                    handphone: handphone_rec2,
                    email: email_rec2
                };
                this.userService.postDocumentRecommendation(dataRec1).subscribe(res => {
                    if (res.status == 'Success') {
                        this.userService.postDocumentRecommendation(dataRec2).subscribe(res => {
                            if (res.status == 'Success') {
                                // this.broadcasterService.notifBroadcast(true, {
                                //   title: 'Success',
                                //   msg: 'Data yang anda masukkan sudah tersimpan',
                                //   timeout: 5000,
                                //   theme: 'default',
                                //   position: 'top-right',
                                //   type: 'success'
                                // });
                                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                                    title: res.status,
                                    text: 'Anda telah berhasil mengisi form rekomendasi. Selanjutnya anda harus mengirimkan link rekomendasi kepada rekomendator dengan mengklik button kirim email pada form ini',
                                    type: 'success',
                                    showConfirmButton: true
                                });
                                this.loading = true;
                                this.loadingRecommendation = true;
                                this.userService.getDocumentRecommendation(`?registration_number=${this.registration_number}`).subscribe(response => {
                                    this.formTypeRecommendationS2 = 'view';
                                    this.loadingRecommendation = false;
                                    this.loading = false;
                                    this.viewRecommendationS2 = true;
                                    this.idRecommendation1 = response[0].id;
                                    this.idRecommendation2 = response[1].id;
                                    this.recommendationS2Form.patchValue({ name_rec1: response[0].name });
                                    this.recommendationS2Form.patchValue({ handphone_rec1: response[0].handphone });
                                    this.recommendationS2Form.patchValue({ email_rec1: response[0].email });
                                    this.recommendationS2Form.patchValue({ name_rec2: response[1].name });
                                    this.recommendationS2Form.patchValue({ handphone_rec2: response[1].handphone });
                                    this.recommendationS2Form.patchValue({ email_rec2: response[1].email });
                                    this.recommendationS2Modal.show();
                                });
                                // this.recommendationS2Modal.hide();
                                this.renderSelectionDocumentData();
                                this.checkRequiredDocument();
                            }
                            else {
                                this.broadcasterService.notifBroadcast(true, {
                                    title: 'Success',
                                    msg: res.status,
                                    timeout: 5000,
                                    theme: 'default',
                                    position: 'top-right',
                                    type: 'error'
                                });
                                this.loading = false;
                            }
                        });
                    }
                    else {
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.status,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loading = false;
                    }
                });
                break;
            default:
                break;
        }
    }
    sendEmailRecommendationS2() {
        const dataRec1 = {
            id: this.idRecommendation1
        };
        const dataRec2 = {
            id: this.idRecommendation2
        };
        this.loading = true;
        this.userService.postSendUrlRecommendation(dataRec1).subscribe(res => {
            if (res.status == 'Success') {
                this.userService.postSendUrlRecommendation(dataRec2).subscribe(res => {
                    if (res.status == 'Success') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            position: 'center',
                            type: 'success',
                            title: res.status,
                            text: this.successSendEmail,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        this.loading = false;
                    }
                    else {
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: res.status,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loading = false;
                    }
                });
            }
            else {
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.status,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
                this.loading = false;
            }
        });
    }
    uploadSupportingFile(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    if (this.isUisRecommendationUpdated) {
                        this.formData2Update.append('url', elem.files[0]);
                    }
                    else {
                        this.formData2.append('url', elem.files[0]);
                    }
                }
                else {
                    this.errSize = true;
                    this.supportingDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.supportingDataForm.get('url').patchValue('');
            }
        }
    }
    uploadStudyDocumentEprt(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    if (this.isEprtUpdated) {
                        this.formDataStudyUpd.append('url', elem.files[0]);
                    }
                    else {
                        this.formDataStudy.append('url', elem.files[0]);
                    }
                }
                else {
                    this.errSize = true;
                    this.eprtAndTpaForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.eprtAndTpaForm.get('url').patchValue('');
            }
        }
    }
    uploadAbilityPayment(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    if (this.isUpdatedAbilityPayment) {
                        this.formDataAbilityUpd.append('url', elem.files[0]);
                    }
                    else {
                        this.formDataAbility.append('url', elem.files[0]);
                    }
                }
                else {
                    this.errSize = true;
                    this.abilityDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.abilityDataForm.get('url').patchValue('');
            }
        }
    }
    uploadFile(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png') {
                if (size < 2000000) {
                    this.formDataRaport.append('url', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    // this.supportingDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                // this.supportingDataForm.get('url').patchValue('');
            }
        }
    }
    semesters1Changed(key, event) {
        const data = event.target.value;
    }
    loadDetailSupportingFileData(registration_number) {
        this.mode('edit');
        this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=${this.documentTypeId}`).subscribe(res => {
            this.documentSupportingId = res.data[0].document_supporting_id;
            this.supportingDataForm.patchValue({ pic_name: res.data[0].pic_name });
            this.supportingDataForm.patchValue({ pic_phone_number: res.data[0].pic_phone_number });
            this.supportingDataForm.patchValue({ pic_email_address: res.data[0].pic_email_address });
            this.supportingDataForm.patchValue({ pic_address: res.data[0].pic_address });
            this.supportingDataForm.patchValue({ url: res.data[0].url });
            if (this.documentTypeId == 9) {
                this.recommendationLetterRequirementModal.show();
            }
            else if (this.documentTypeId == 11) {
                this.paymentAbilityModal.show();
            }
        }, (reason) => {
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
    popUpPrintRegistrationCard() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: 'Warning',
            text: 'Apakah anda yakin ingin mencetak kartu peserta ? Setelah mencetak kartu peserta, anda tidak dapat mengubah data apapun lagi',
            type: 'warning',
            showConfirmButton: true,
            showCloseButton: true,
            showCancelButton: true
        }).then((confirm) => {
            if (confirm.value) {
                this.printRegistrationCard();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                    title: 'Data anda aman',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        });
    }
    createRegistrationHistory_7() {
        const datax = {
            registration_number: this.registration_number.toString(),
            registration_step_id: 7
        };
        this.userService.postRegistrationHistoryData(datax).subscribe(result => {
            if (result != null) {
                if (result.status != 'Success') {
                    this.loadError();
                }
            }
            else {
                this.loadError();
            }
        }, (reason) => {
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
    createRegistrationPayment() {
        this.loading = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(`${this.userProfile.email}`).subscribe(res => {
                this.userData = res.participant_id;
                this.email = res.username;
                this.fullname = res.fullname;
                this.phonenumber = res.mobile_phone_number;
                let dataPasca = {};
                dataPasca = {
                    registration_number: this.registration_number,
                    payment_method: this.registrationDataForm2.controls['payment_method'].value,
                    payment_status: 2,
                    selection_path_id: this.selectionPathId,
                    mapping_path_price_id: this.idPinPrice,
                };
                this.paymentMethodId = this.registrationDataForm2.controls['payment_method'].value;
                let pinprice = this.registrationDataForm2.controls['pin_price'].value;
                // edit data registrasi
                this.chartService.upRegistrationData(dataPasca).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.registration_number = res.registration_number;
                            // Cek Get Payment Method terlebih dahulu
                            if (this.paymentMethodId === '1') {
                                // Hit api RequestPinTransaction
                                const token = this.injector.get(_services_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OauthService"]).retrieveAccessToken();
                                const dataPin = {
                                    registration_number: this.registration_number,
                                    amount: pinprice,
                                    add_info1: 'Pembelian Pin Admisi Trisakti',
                                    participant_phone_number: this.phonenumber,
                                    participant_name: this.fullname,
                                    participant_email: this.email,
                                    token: token.token,
                                };
                                this.userService.postPinTransaction(dataPin).subscribe(resp => {
                                    if (resp !== null) {
                                        if (resp.status == 'Success') {
                                            this.payment_code = resp.result.request_body.virtual_account;
                                            this.loadSuccess();
                                            this.isVirtualAccount = true;
                                            this.loadDetailParticipantData(this.registration_number);
                                            this.modalOrderForm.show();
                                            this.loading = false;
                                        }
                                        else {
                                            this.loading = false;
                                            this.loadError();
                                        }
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
                            else {
                                this.loadSuccess();
                                this.loadDetailParticipantData(this.registration_number);
                                this.modalOrderForm.show();
                                this.loading = false;
                                this.isVirtualAccount = false;
                            }
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
    /*Choose Exam Location */
    loadExamDetailData() {
        this.loadFilter = true;
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
            if (result) {
                this.selection_path_id = result.data[0]['selection_path_id'];
                this.chartService.getExamTimeDatas(`selection_path_id=${this.selection_path_id}&active_status=1`).subscribe((filterArray) => {
                    const dataExamLocation = [];
                    let x;
                    for (let i = 0; i < filterArray.data.length; i++) {
                        x = {
                            value: filterArray.data[i].id,
                            label: filterArray.data[i].exam_date.concat(" ", filterArray.data[i].exam_hour),
                        };
                        dataExamLocation.push(x);
                        this.listExamLocation = dataExamLocation;
                    }
                    this.loadFilter = false;
                }, err => {
                    this.loadError();
                    this.loadFilter = false;
                });
            }
        });
    }
    printRegistrationCard() {
        if (this.isRaportCategory) {
            this.getAverageParticipantReportCard();
        }
        else {
            this.createMoodleUserMemberAndEnrol();
        }
    }
    getAverageParticipantReportCard() {
        this.loadingRegCard = true;
        this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=7`).subscribe((res) => {
            if (res.data.length !== 0) {
                const raportCountData = res.data.length;
                this.userService.getAverageParticipantRaportCard(`?registration_number=${this.registration_number}&required_total_semester=${raportCountData}`).subscribe((resp) => {
                    if (resp.length !== 0) {
                        const biology = resp.biology;
                        const chemistry = resp.chemical;
                        const physics = resp.physics;
                        const sociology = resp.sociological;
                        const historical = resp.historical;
                        const economy = resp.economy;
                        const geography = resp.geography;
                        const english = resp.english;
                        const math = resp.math;
                        const bahasa = resp.bahasa;
                        const payload = {
                            registration_number: this.registration_number,
                            math: math,
                            physics: physics,
                            bahasa: bahasa,
                            english: english,
                            biology: biology,
                            economy: economy,
                            geography: geography,
                            sociological: sociology,
                            historical: historical,
                            chemical: chemistry,
                            general_knowledge: 0,
                            photography_knowledge: 0,
                            tpa: 0,
                            grade_final: 0,
                        };
                        this.userService.postParticipantGrade(payload).subscribe((response) => {
                            if (response.status == 'Success') {
                                this.createRegistrationCard();
                                this.loadSuccess();
                            }
                            else {
                                this.broadcasterService.notifBroadcast(true, {
                                    title: response.status,
                                    msg: response.message,
                                    timeout: 5000,
                                    theme: 'default',
                                    position: 'top-right',
                                    type: 'error'
                                });
                                this.loadingRegCard = false;
                            }
                        });
                    }
                });
            }
        });
    }
    createRegistrationCard() {
        this.loadingRegCard = true;
        this.userService.getRegistrationCard(`registration_number=${this.registration_number}`).subscribe((res) => {
            window.open(res.urls, "_blank");
            this.router.navigate([`/registration-history`]);
            this.createRegistrationHistory_7();
            this.loadingRegCard = false;
        }, err => {
            this.broadcasterService.notifBroadcast(true, {
                title: err.response.status,
                msg: err.response.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loadingRegCard = false;
        });
    }
    // loadExamDateData() {
    //   this.loadFilter = true;
    //   this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
    //     if (result) {
    //       this.selection_path_id = result.data[0]['selection_path_id'];
    //       this.chartService.getExamTimeData(`${this.selection_path_id}`).subscribe((filterArray) => {
    //         const dataExamDate = [];
    //         let x: any;
    //         for (let i = 0; i < filterArray.data.length; i++) {
    //           x = {
    //             value: filterArray.data[i].id,
    //             label: filterArray.data[i].exam_date + '-' + filterArray.data[i].exam_hour,
    //           };
    //           dataExamDate.push(x);
    //           this.listExamDate = dataExamDate;
    //         }
    //         this.loadFilter = false;
    //       }, err => {
    //         this.loadError();
    //         this.loadFilter = false;
    //       });
    //     }
    //   });
    // }
    changeExamLocation(val) {
        this.examLocation = val;
        this.loadFilter = true;
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
            if (result) {
                this.selection_path_id = result.data[0]['selection_path_id'];
                this.chartService.getExamTimeData(`${this.selection_path_id}&exam_location_id=${this.examLocation}`).subscribe((filterArray) => {
                    (filterArray);
                    const dataExamDate = [];
                    let x;
                    for (let i = 0; i < filterArray.data.length; i++) {
                        x = {
                            value: filterArray.data[i].id,
                            label: filterArray.data[i].exam_date + '-' + filterArray.data[i].exam_hour,
                        };
                        dataExamDate.push(x);
                        this.listExamDate = dataExamDate;
                    }
                    this.loadFilter = false;
                }, err => {
                    this.loadError();
                    this.loadFilter = false;
                });
            }
        });
    }
    checkRequiredDocument() {
        this.loadingCardCheckDoc = true;
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
            this.selectionPathId = result.data[0]['selection_path_id'];
            this.selectionProgramId = result.data[0]['selection_program_id'];
            // Jika selection program adalah pascasarjana & ekstensi
            if (result.data[0].category === 'PASCASARJANA' || result.data[0].category === 'EKSTENSI') {
                this.userService.getDocumentParticipantStatus(`?selection_path_id=${this.selectionPathId}&registration_number=${this.registration_number}&required=true`).subscribe(res => {
                    let dataDocument = res;
                    const dataNull = dataDocument.find(x => x.document_id === null);
                    const doctype = dataDocument.find(y => y.document_type_id == 10);
                    const doctypeRecommendation = dataDocument.find(data => data.document_type_id == 15);
                    if (dataNull !== undefined) {
                        if (dataNull.document_id === null) {
                            this.disabledNextStep = true;
                            this.loadingCardCheckDoc = false;
                        }
                        else {
                            this.disabledNextStep = false;
                            this.loadingCardCheckDoc = false;
                        }
                    }
                    else {
                        if (doctype !== undefined) {
                            this.userService.getDocumentCertificateData(`registration_number=${this.registration_number}`).subscribe(res => {
                                if (res.length !== 0) {
                                    const typeCertificate = res.data.find(x => x.certificate_type_id == 1);
                                    const typeCertificate2 = res.data.find(x => x.certificate_type_id == 2);
                                    if (typeCertificate !== undefined) {
                                        if (typeCertificate2 != undefined) {
                                            this.disabledNextStep = false;
                                            this.loadingCardCheckDoc = false;
                                        }
                                        else {
                                            this.disabledNextStep = true;
                                            this.loadingCardCheckDoc = false;
                                        }
                                    }
                                    else if (typeCertificate2.length !== 0) {
                                        if (typeCertificate.length !== 0) {
                                            this.disabledNextStep = false;
                                            this.loadingCardCheckDoc = false;
                                        }
                                        else {
                                            this.disabledNextStep = true;
                                            this.disabledRaportDoc = false;
                                            this.loadingCardCheckDoc = false;
                                        }
                                    }
                                    else {
                                        this.disabledNextStep = true;
                                        this.loadingCardCheckDoc = false;
                                    }
                                }
                                else {
                                    this.disabledNextStep = true;
                                    this.loadingCardCheckDoc = false;
                                }
                            });
                        }
                        else {
                            this.disabledNextStep = false;
                            this.loadingCardCheckDoc = false;
                        }
                    }
                });
            }
            else {
                this.userService.getDocumentParticipantStatus(`?selection_path_id=${this.selectionPathId}&registration_number=${this.registration_number}&required=true`).subscribe(res => {
                    let dataDocument = res;
                    // Check apakah ada document id ada yang null
                    const dataNull = dataDocument.find(x => x.document_id === null);
                    if (dataNull !== undefined) {
                        if (dataNull.document_id === null) {
                            this.disabledNextStep = true;
                            this.loadingCardCheckDoc = false;
                        }
                        else {
                            this.disabledNextStep = false;
                            this.loadingCardCheckDoc = false;
                        }
                    }
                    else {
                        // Check document raport
                        this.userService.getDocumentParticipantStatus(`?selection_path_id=${this.selectionPathId}&registration_number=${this.registration_number}&required=true`).subscribe(res => {
                            if (res.length !== 0) {
                                const documentTypeRaport = underscore__WEBPACK_IMPORTED_MODULE_14__["find"](res, { document_type_id: 7 });
                                if (documentTypeRaport !== undefined) {
                                    this.userService.getDocumentRequirementRaport(`?registration_number=${this.registration_number}&semester_id=1`).subscribe(res => {
                                        if (res[0].status == false) {
                                            this.disabledNextStep = true;
                                            this.loadingCardCheckDoc = true;
                                        }
                                        else {
                                            this.userService.getDocumentRequirementRaport(`?registration_number=${this.registration_number}&semester_id=2`).subscribe(res => {
                                                if (res[0].status == false) {
                                                    this.disabledNextStep = true;
                                                    this.loadingCardCheckDoc = true;
                                                }
                                                else {
                                                    this.userService.getDocumentRequirementRaport(`?registration_number=${this.registration_number}&semester_id=3`).subscribe(res => {
                                                        if (res[0].status == false) {
                                                            this.disabledNextStep = true;
                                                            this.loadingCardCheckDoc = true;
                                                        }
                                                        else {
                                                            this.userService.getDocumentRequirementRaport(`?registration_number=${this.registration_number}&semester_id=4`).subscribe(res => {
                                                                if (res[0].status == false) {
                                                                    this.disabledNextStep = true;
                                                                    this.loadingCardCheckDoc = true;
                                                                }
                                                                else {
                                                                    this.disabledNextStep = false;
                                                                    this.loadingCardCheckDoc = false;
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                                else {
                                    this.disabledNextStep = false;
                                    this.loadingCardCheckDoc = false;
                                }
                            }
                            else {
                                this.disabledNextStep = false;
                                this.loadingCardCheckDoc = false;
                            }
                        });
                    }
                });
            }
        });
    }
    goToProdiStep() {
        this.wizard.navigation.goToStep(1);
        this.loadDetailParticipant();
        this.loading = false;
    }
    gotoStep1() {
        this.wizard.navigation.goToStep(1);
        this.loadPinPrice();
    }
    gotoStep2() {
        this.wizard.navigation.goToStep(2);
        this.loadDetailParticipant();
        this.getPublicationPositionLists();
        this.getPublicationTypeLists();
        this.loading = false;
    }
    goToExamTime() {
        this.wizard.navigation.goToStep(2);
        this.loadDetailParticipant();
        this.loading = false;
    }
    goTopPaymentStep() {
        this.wizard.navigation.goToStep(3);
        this.loadDetailParticipant();
        this.loading = false;
    }
    goToCetakKartuPeserta() {
        this.wizard.navigation.goToStep(3);
        this.loadGroupWithPathExam();
        this.loadRegistrationProgramStudyData2(this.registration_number);
        this.loadDetailParticipant();
        this.loading = false;
    }
    closeUtbkModals() {
        this.utbkForm.reset();
        this.utbkModals.hide();
        this.dataUtbkUrl = [];
    }
    transcriptCreditTransferRequirementModalClose() {
        this.dynamicForm.reset();
        this.courseTotal = false;
        for (let i = this.t.length; i >= 0; i--) {
            this.t.removeAt(i);
        }
        this.transcriptCreditTransferRequirementModal.hide();
    }
    closeRaportModalDetail() {
        this.reportCardDetailModal.hide();
        this.showMapel = false;
        this.reportCardDataForm.reset();
        // this.isMathStudy = false;
        // this.isBahasaStudy = false;
        // this.isEnglishStudy = false;
        // this.chemicalStudy = false;
        // this.biologyStudy = false;
        // this.physicsStudy = false;
        // this.economyStudy = false;
        // this.sociologicalStudy = false;
        // this.geographyStudy = false;
        this.reportCardDataForm.get('math').clearValidators();
        this.reportCardDataForm.get('math').updateValueAndValidity();
        this.reportCardDataForm.get('bahasa').clearValidators();
        this.reportCardDataForm.get('bahasa').updateValueAndValidity();
        this.reportCardDataForm.get('english').clearValidators();
        this.reportCardDataForm.get('english').updateValueAndValidity();
        this.reportCardDataForm.get('biology').clearValidators();
        this.reportCardDataForm.get('biology').updateValueAndValidity();
        this.reportCardDataForm.get('chemical').clearValidators();
        this.reportCardDataForm.get('chemical').updateValueAndValidity();
        this.reportCardDataForm.get('physics').clearValidators();
        this.reportCardDataForm.get('physics').updateValueAndValidity();
        this.reportCardDataForm.get('chemical').clearValidators();
        this.reportCardDataForm.get('economy').updateValueAndValidity();
        this.reportCardDataForm.get('economy').clearValidators();
        this.reportCardDataForm.get('geography').updateValueAndValidity();
        this.reportCardDataForm.get('geography').clearValidators();
        this.reportCardDataForm.get('sociological').updateValueAndValidity();
        this.reportCardDataForm.get('sociological').clearValidators();
        document.querySelector('body').classList.add('modal-open');
    }
    closeCertificateModalDetail() {
        this.certificateDetailModal.hide();
        document.querySelector('body').classList.add('modal-open');
    }
    documentRequirementModalClose() {
        this.documentRequirementModal.hide();
        this.participantDocumentForm.reset();
        !this.haveDocumentPersonal;
    }
};
RegistrationDataComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_6__["AdminManagementService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalOrderForm', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "modalOrderForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_13__["WizardComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_13__["WizardComponent"])
], RegistrationDataComponent.prototype, "wizard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
], RegistrationDataComponent.prototype, "dtElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('documentRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "documentRequirementModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('reportCardRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "reportCardRequirementModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('certificateRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "certificateRequirementModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('transcriptRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "transcriptRequirementModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('transcriptCreditTransferRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "transcriptCreditTransferRequirementModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('paymentAbilityModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "paymentAbilityModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('recommendationLetterRequirementModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "recommendationLetterRequirementModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('studyProgramModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "studyProgramModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('deleteStudyProgramMappingModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "deleteStudyProgramMappingModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('reportCardDetailModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "reportCardDetailModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('certificateDetailModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "certificateDetailModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('eprtAndTpaModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "eprtAndTpaModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ipkModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "ipkModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('recommendationS2Modal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "recommendationS2Modal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('proposalModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "proposalModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('utbkModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "utbkModals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('transcriptRequirementModalView', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "transcriptRequirementModalView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ijazahModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "ijazahModals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('publikasiModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "publikasiModals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('publicationDataModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegistrationDataComponent.prototype, "publicationDataModals", void 0);
RegistrationDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-registration-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/registration-history/registration-data/registration-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration-data.component.scss */ "./src/app/theme/registration-history/registration-data/registration-data.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_6__["AdminManagementService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])
], RegistrationDataComponent);



/***/ }),

/***/ "./src/app/theme/registration-history/registration-data/registration-data.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/registration-history/registration-data/registration-data.module.ts ***!
  \******************************************************************************************/
/*! exports provided: RegistrationDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationDataModule", function() { return RegistrationDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _registration_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-data.component */ "./src/app/theme/registration-history/registration-data/registration-data.component.ts");
/* harmony import */ var _registration_data_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-data-routing.module */ "./src/app/theme/registration-history/registration-data/registration-data-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-archwizard/dist */ "./node_modules/ng2-archwizard/dist/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");












let RegistrationDataModule = class RegistrationDataModule {
};
RegistrationDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_registration_data_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationDataComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _registration_data_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationDataRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_7__["ArchwizardModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltipModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]]
    })
], RegistrationDataModule);



/***/ })

}]);
//# sourceMappingURL=registration-data-registration-data-module-es2015.js.map