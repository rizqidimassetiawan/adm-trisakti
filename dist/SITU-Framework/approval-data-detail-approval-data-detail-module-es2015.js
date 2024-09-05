(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approval-data-detail-approval-data-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>Approval Data Management works!</p> -->\n<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"text-md-left\">\n      <div class=\"page-header-title\">\n        <h5>{{ 'MENU.approval-data'| translate}}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"{{ 'MENU.approval-data' | translate }}\" cardClass=\"card-datatable\"\n      headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loadtableApprovalData\">\n      <div class=\"row align-items-center mb-2\">\n        <div class=\"col-12 col-md-6 text-left text-md-left\">\n          <button class=\"btn btn-secondary btn-sm btn-round has-ripple col-md-3\" routerLink=\"/adm-mp-approval-data\">\n            <i class=\"feather icon-chevron-left\"></i> {{'ROOT.back' | translate}}\n          </button>\n        </div>\n        <!-- pascasarjana -->\n        <div class=\"col-12 col-md-6 text-right text-md-right\">\n          <button [hidden]=\"!isPasca\" class=\"btn btn-success btn-sm btn-round has-ripple col-md-5 button-margin-top\"\n            (click)=\"exportPostGraduateExcel()\" [disabled]=\"loadExportReg || !selectionYear\">\n            <span *ngIf=\"loadExportReg\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n            <span *ngIf=\"loadExportReg\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!loadExportReg\" class=\"btn-text\"><i class=\"ti-download\"></i>\n              {{'CONTENT.export-approval-data-excel' | translate}}\n            </span>\n          </button>\n          <!-- non pascasarjana -->\n          <button [hidden]=\"isPasca\" class=\"btn btn-success btn-sm btn-round has-ripple col-md-5 button-margin-top\"\n            (click)=\"exportParticipantRegistration()\" [disabled]=\"loadExportReg\">\n            <span *ngIf=\"loadExportReg\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n            <span *ngIf=\"loadExportReg\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!loadExportReg\" class=\"btn-text\">\n              <i class=\"ti-upload\"></i>\n              {{'CONTENT.export-approval-data-excel' | translate}}\n            </span>\n          </button>\n          <button [disabled]=\"!selectionYear\" class=\"btn btn-primary btn-sm btn-round has-ripple col-md-6 button-margin button-margin-top \"\n            (click)=\"importExcelApprovalData()\"> <i class=\"ti-download\"></i>\n             {{'CONTENT.import-approval-data-excel' | translate}}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-8 mt-2 mb-2 text-left text-md-left\">\n          <form class=\"md-float-material form-material\" action=\"javascript:\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group mb-0 pl-2\">\n                  <ng-select name=\"year\" [allowClear]=\"true\"\n                    [placeholder]=\"'CONTENT.selection-year-choosing' | translate\" [ngClass]=\"'custom'\"\n                    [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectionYear\"\n                    [options]=\"listSelectionYear\" (selected)=\"mappingPathYearChanged($event)\"></ng-select>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div [hidden]=\"!isApplyFilter\" class=\"col-12 col-md-4 text-right text-md-right mt-2\">\n          <form class=\"md-float-material form-material\" action=\"javascript:\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"search\" class=\"form-control\"\n                    [placeholder]=\"'CONTENT.placeholder-registration-number'| translate\" [(ngModel)]=\"searching\"\n                    [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"searchData(searching)\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn color-searching\" type=\"button\" (click)=\"searchData(searching)\"><i\n                        class=\"fas fa-search\"></i></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div [hidden]=\"!isApplyFilter\" class=\"table-responsive pb-1\">\n        <table class=\"table table-hover\">\n          <thead class=\"thead-dark\">\n            <tr>\n              <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n              <th scope=\"col\">{{ 'CONTENT.registration-number' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.selection-path' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.study-program' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.study-program-transfer' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.total-score' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.approval-status' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"dataResult?.length != 0\">\n            <tr *ngFor=\"let data of dataResult | slice: (currentPage-currentPage) * pageSize; let i = index\">\n              <th scope=\"row\" style=\"padding-left: 10px\">{{ i+from }}</th>\n              <td>{{ data.registration_number }}</td>\n              <td>{{ data.selection_path_name }}</td>\n              <td class=\"center-table\">{{ data.study_program_name ? data.study_program_name : '-' }}</td>\n              <td class=\"center-table\">{{ data.transfer_program_study_name ? data.transfer_program_study_name : '-' }}</td>\n              <td class=\"center-table\">{{ data.total_score ? data.total_score : '-' }}</td>\n              <td class=\"center-table\">\n                <span\n                  class=\"badge badge-{{ data.pass_status == false ? 'danger' : (data.pass_status == 1 ? 'success' : 'secondary') }}\">{{\n                  data.pass_status == false ? ('ROOT.not_pass' | translate) : (data.pass_status == 1 ? 'ROOT.pass' :\n                  'CONTENT.pending_pass')\n                  | translate}}\n                </span>\n              </td>\n              <td class=\"center-table\">\n                <button class=\"btn btn-warning btn-sm btn-round has-ripple\" (click)=\"loadDetailApprovalData(data)\">\n                  <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' | translate}}</span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"dataResult.length == 0 && !loadtableApprovalData\">\n            <tr>\n              <td colspan=\"9\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"dataResult.length == 0  && loadtableApprovalData\">\n            <tr>\n              <td colspan=\"9\" class=\"no-data-available text-center\">Loading Data....</td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"horizontal-scroll\">\n          <div class=\"row col-12\">\n            <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"collectionSize\" [boundaryLinks]=\"true\" [maxSize]=\"5\"\n              [(page)]=\"currentPage\" (pageChange)=\"changePage($event)\">\n            </ngb-pagination>\n\n          </div>\n        </div>\n      </div>\n      <div [hidden]=\"isApplyFilter\" class=\"text-center\">\n        <img src=\"assets/images/maintenance/no-data-found.jpg\" alt=\"\" style=\"max-width: 30%;\">\n        <h6 style=\"color: red; font-style: italic;\">Silakan memilih filter terlebih dahulu</h6>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n<app-ui-modal #importApprovalModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.import-approval-data-excel' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" (click)=\"hideExcelForm()\"\n      aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"importDataForm\"\n      (ngSubmit)=\"createImportDataExcel()\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.council-date' | translate }} <span\n                class=\"required\">*</span></label> <br>\n                <input type=\"date\" class=\"form-control\" name=\"council_date\" required\n                formControlName=\"council_date\" required>\n            <label\n              *ngIf=\"fi.council_date.errors && fi.council_date.errors.required && (fi.council_date.touched || fi.council_date.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n              'CONTENT.council-date'\n              | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.step-1-end-date' | translate }} <span\n                class=\"required\">*</span></label> <br>\n            <input type=\"date\" class=\"form-control\" name=\"step_1_end_date\" required\n              formControlName=\"step_1_end_date\" required>\n            <label\n              *ngIf=\"fi.step_1_end_date.errors && fi.step_1_end_date.errors.required && (fi.step_1_end_date.touched || fi.step_1_end_date.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n              'CONTENT.step-1-end-date'\n              | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.step-2-end-date' | translate }} <span\n                class=\"required\">*</span></label> <br>\n            <input type=\"date\" class=\"form-control\" name=\"step_2_end_date\" required formControlName=\"step_2_end_date\"\n              required>\n            <label\n              *ngIf=\"fi.step_2_end_date.errors && fi.step_2_end_date.errors.required && (fi.step_2_end_date.touched || fi.step_2_end_date.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n              'CONTENT.step-2-end-date'\n              | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.step-3-start-date' | translate }} <span\n                class=\"required\">*</span></label> <br>\n            <input type=\"date\" class=\"form-control\" name=\"step_3_start_date\" required formControlName=\"step_3_start_date\"\n              required>\n            <label\n              *ngIf=\"fi.step_3_start_date.errors && fi.step_3_start_date.errors.required && (fi.step_3_start_date.touched || fi.step_3_start_date.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n              'CONTENT.step-3-start-date'\n              | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.step-3-end-date' | translate }} <span\n                class=\"required\">*</span></label> <br>\n            <input type=\"date\" class=\"form-control\" name=\"step_3_end_date\" required formControlName=\"step_3_end_date\"\n              required>\n            <label\n              *ngIf=\"fi.step_3_end_date.errors && fi.step_3_end_date.errors.required && (fi.step_3_end_date.touched || fi.step_3_end_date.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n              'CONTENT.step-3-end-date'\n              | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-2 f-w-600\">{{'CONTENT.upload-file' | translate}} <span\n              class=\"required\">*</span></label>\n            <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\" accept=\".xlsx\"\n              (change)=\"changeImportFile($event)\" />\n            <div *ngIf=\"errSize\" class=\"text-danger mt-4 ml-1\">Max 2MB!</div>\n            <div *ngIf=\"errType\" class=\"text-danger mt-4 ml-1\">Error file!</div>\n            <label\n              *ngIf=\"importDataForm.controls.url.errors && importDataForm.controls.url.errors.required && (importDataForm.controls.url.touched || importDataForm.controls.url.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group mb-0 mt-4 text-right\">\n        <div class=\"btn-group\">\n          <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"importDataForm.invalid || loadingImport\">\n            <span *ngIf=\"loadingImport\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"loadingImport\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!loadingImport\" class=\"btn-text\">\n              <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }} </span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #myPersistenceModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-xl\"\n  [hideFooter]=\"true\" [loading]=\"loadingModals\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'MENU.approval-data' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" (click)=\"myPersistenceModal.hide()\"\n      aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"approvalDetailDataForm\"\n      (ngSubmit)=\"createDetailSelectionStepData()\">\n      <div class=\"row\" [ngSwitch]=\"edit\">\n        <div class=\"col-sm-12\" *ngSwitchDefault>\n          <div class=\"col-12 shadow bg-white rounded p-3 mt-1\">\n            <div class=\"row\">\n              <div class=\"col-6 text-left pt-2\">\n                <h6>{{ 'MENU.approval-data' | translate }}</h6>\n              </div>\n            </div>\n            <hr>\n            <span class=\"required mt-2 mb-2\">* Wajib diisi</span>\n            <div class=\"row\">\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.registration-number' | translate }}</label>\n                <input type=\"text\" readonly class=\"form-control\" name=\"name\" formControlName=\"registration_number\">\n                <label id=\"validation-email-error\"\n                  class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                  'CONTENT.please-input' | translate }}{{ 'CONTENT.registration-number' | translate }}</label>\n                </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.selection-path' | translate }}</label>\n                <input type=\"text\" readonly class=\"form-control\" name=\"name\" formControlName=\"selection_path_name\">\n                <label id=\"validation-email-error\"\n                  class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                  'CONTENT.please-choose' | translate }}{{ 'CONTENT.selection-path' | translate }}</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group mb-2 col-md-3\">\n                <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.approval-status'| translate}} <span\n                    class=\"required\">*</span></h6> <br>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" id=\"approval-status1\" class=\"custom-control-input\" value=\"1\"\n                    formControlName=\"pass_status\" [(ngModel)]=\"passStatus\"\n                    (ngModelChange)=\"passStatusChange(passStatus)\">\n                  <label class=\"custom-control-label \" for=\"approval-status1\">{{ 'CONTENT.pass' | translate }}</label>\n                </div>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" id=\"approval-status2\" class=\"custom-control-input\" value=\"0\"\n                    formControlName=\"pass_status\" [(ngModel)]=\"passStatus\"\n                    (ngModelChange)=\"passStatusChange(passStatus)\">\n                  <label class=\"custom-control-label\" for=\"approval-status2\">{{ 'CONTENT.not-pass' | translate\n                    }}</label>\n                </div>\n              </div>\n              <div class=\"form-group mb-2 col-md-3\">\n                <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.transfer-status'| translate}} <span\n                    class=\"required\">*</span></h6> <br>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" id=\"transfer-status1\" class=\"custom-control-input\" value=\"1\"\n                    formControlName=\"transfer_status\"  [(ngModel)]=\"transferStatus\"\n                    (ngModelChange)=\"passStatusCheck(transferStatus)\">\n                  <label class=\"custom-control-label \" for=\"transfer-status1\">{{ 'ROOT.yes' | translate }}</label>\n                </div>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" id=\"transfer-status2\" class=\"custom-control-input\" value=\"0\"\n                    formControlName=\"transfer_status\"  [(ngModel)]=\"transferStatus\"\n                    (ngModelChange)=\"passStatusCheck(transferStatus)\">\n                  <label class=\"custom-control-label\" for=\"transfer-status2\">{{ 'ROOT.no' | translate\n                    }}</label>\n                </div>\n              </div>\n              <div class=\"form-group mb-2 col-md-2\">\n                <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-status'| translate}} <span\n                    class=\"required\">*</span></h6> <br>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" id=\"publication-status1\" class=\"custom-control-input\" value=\"1\"\n                    formControlName=\"publication_status\">\n                  <label class=\"custom-control-label \" for=\"publication-status1\">{{ 'ROOT.yes' | translate }}</label>\n                </div>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" id=\"publication-status2\" class=\"custom-control-input\" value=\"0\"\n                    formControlName=\"publication_status\">\n                  <label class=\"custom-control-label\" for=\"publication-status2\">{{ 'ROOT.no' | translate\n                    }}</label>\n                </div>\n              </div>\n              <div class=\"form-group mb-2 col-md-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.publication-date' | translate }} <span\n                    class=\"required\">*</span></label>\n                <input type=\"date\" class=\"form-control\" name=\"publication_date\" required\n                  formControlName=\"publication_date\" required>\n                <label\n                  *ngIf=\"fap.publication_date.errors && fap.publication_date.errors.required && (fap.publication_date.touched || fap.publication_date.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.publication-date'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.total-score' | translate }} <span\n                    class=\"required\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" name=\"total-score\" [readonly]=\"!raportPath\"\n                    [placeholder]=\"'CONTENT.placeholder-score' | translate\" required formControlName=\"total_score\">\n                    <span *ngIf=\"!raportPath && !loadingCbt\" class=\"badge badge-primary cursor-custom\" (click)=\"generateScoreCbt()\"><i class=\"icofont icofont-refresh\"></i> {{ 'CONTENT.generate-score' | translate}}</span>\n                    <span *ngIf=\"!raportPath && loadingCbt\" class=\"badge badge-primary cursor-custom\">Loading..</span>\n                <label\n                  *ngIf=\"fap.total_score.errors && fap.total_score.errors.required && (fap.total_score.touched || fap.total_score.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.total-score'\n                  | translate }}\n                </label>\n              </div>\n            </div>\n            <div *ngIf=\"showProgramStudy\" class=\"row\">\n              <div *ngIf=\"!isTransferStatus || isPassStatuTransferStatus \" class=\"form-group mb-2 col-md-12\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.study-program' | translate }} <span\n                    class=\"required\">*</span></label>\n                <ng-select [placeholder]=\"'CONTENT.study-program'|translate\" [ngClass]=\"'custom bg-white'\"\n                  [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"mapping_registration_program_study_id\"\n                  [(ngModel)]=\"programStudy\" [options]=\"listProgramStudy\" (selected)=\"getSpecializationStudyProgram(programStudy)\">\n                </ng-select>\n                <label *ngIf=\"!programStudy\" class=\"error text-danger small form-text\">{{ 'CONTENT.please-choose' |\n                  translate }}</label>\n              </div>\n              <div *ngIf=\"isTransferStatus\" class=\"form-group mb-2 col-md-12\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.study-program-transfer' | translate }} <span\n                    class=\"required\">*</span></label>\n                <ng-select [placeholder]=\"'CONTENT.study-program'|translate\" [ngClass]=\"'custom bg-white'\"\n                  [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"transfer_status_study_program_id\"\n                  [(ngModel)]=\"programStudyTransfer\" [options]=\"listProgramStudy\" (selected)=\"getSpecializationStudyProgram(programStudyTransfer)\">\n                </ng-select>\n                <label *ngIf=\"!programStudyTransfer\" class=\"error text-danger small form-text\">{{ 'CONTENT.please-choose' |\n                  translate }}</label>\n              </div>\n            </div>\n            <div [hidden]=\"!showProgramStudy\" class=\"row\">\n              <div class=\"form-group mb-2 col-md-12\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.specialization' | translate }} <span\n                    class=\"required\">*</span></label> <br>\n                    <ng-select [placeholder]=\"'CONTENT.specialization'|translate\" [ngClass]=\"'custom bg-white'\"\n                    [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"specialization_id\"\n                    [(ngModel)]=\"specialization\" [options]=\"listSpecialization\">\n                  </ng-select>\n                  <label *ngIf=\"!specialization\" class=\"error text-danger small form-text\">{{ 'CONTENT.please-choose' |\n                    translate }}</label>\n              </div>\n            </div>\n            <div [hidden]=\"!showProgramStudy\" class=\"row\">\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.school-year' | translate }} <span\n                    class=\"required\">*</span></label> <br>\n                <input type=\"text\" class=\"form-control\" name=\"school_year\"\n                  [placeholder]=\"'CONTENT.placeholder-school-year' | translate\" formControlName=\"school_year\" required>\n                <label\n                  *ngIf=\"fap.school_year.errors && fap.school_year.errors.required && (fap.school_year.touched || fap.school_year.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.school-year'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.council-date' | translate }} <span\n                    class=\"required\">*</span></label> <br>\n                    <input type=\"date\" class=\"form-control\" name=\"council_date\" required\n                    formControlName=\"council_date\" required>\n                <label\n                  *ngIf=\"fap.council_date.errors && fap.council_date.errors.required && (fap.council_date.touched || fap.council_date.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.council-date'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.beasiswa-id' | translate }} <span\n                    class=\"required\">*</span></label> <br>\n                <input type=\"text\" class=\"form-control\" name=\"beasiswa_id\" formControlName=\"beasiswa_id\" required>\n                <label\n                  *ngIf=\"fap.beasiswa_id.errors && fap.beasiswa_id.errors.required && (fap.beasiswa_id.touched || fap.beasiswa_id.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.beasiswa-id'\n                  | translate }}\n                </label>\n              </div>\n            </div>\n            <div [hidden]=\"!showProgramStudy\" class=\"row\">\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.reference-number' | translate }} <span\n                    class=\"required\">*</span></label> <br>\n                <input type=\"text\" class=\"form-control\" name=\"reference_number\"\n                  [placeholder]=\"'CONTENT.placeholder-ref-number' | translate\" formControlName=\"reference_number\"\n                  required>\n                <label\n                  *ngIf=\"fap.reference_number.errors && fap.reference_number.errors.required && (fap.reference_number.touched || fap.reference_number.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.reference-number'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.old-student-id' | translate }}</label> <br>\n                <input type=\"text\" class=\"form-control\" name=\"old_student_id\"\n                  [placeholder]=\"'CONTENT.old-student-id'  | translate\" formControlName=\"old_student_id\">\n              </div>\n            </div>\n            <div [hidden]=\"!showProgramStudy\" class=\"row\">\n              <div class=\"form-group mb-2 col-md-12\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.semester' | translate }} </label><span\n                  class=\"required\">*</span> <br>\n                <input type=\"text\" class=\"form-control\" name=\"semester\"\n                  [placeholder]=\"'CONTENT.semesters-info' | translate\" formControlName=\"semester\" maxlength=\"1\">\n              </div>\n            </div>\n          </div>\n          <!-- <div [hidden]=\"!showProgramStudy\" class=\"col-12 shadow bg-white rounded p-3 mt-4\">\n            <div class=\"row\">\n              <div class=\"col-6 text-left pt-2\">\n                <h6>{{ 'CONTENT.cost' | translate }}</h6>\n              </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.up3-nominal' | translate }} <span\n                    class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"up3\" required formControlName=\"up3\"\n                  [placeholder]=\"'CONTENT.placeholder-biaya' | translate\" currencyMask\n                  [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n                <label *ngIf=\"fap.up3.errors && fap.up3.errors.required && (fap.up3.touched || fap.up3.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.up3-nominal'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.bpp-nominal' | translate }} <span\n                    class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"bpp\" required formControlName=\"bpp\"\n                  [placeholder]=\"'CONTENT.placeholder-biaya' | translate\" currencyMask\n                  [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n                <label *ngIf=\"fap.bpp.errors && fap.bpp.errors.required && (fap.bpp.touched || fap.bpp.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.bpp-nominal'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sdp2-nominal' | translate }} <span\n                    class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"sdp2\" formControlName=\"sdp2\" required\n                  currencyMask [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n                <label *ngIf=\"fap.sdp2.errors && fap.sdp2.errors.required && (fap.sdp2.touched || fap.sdp2.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.sdp2-nominal'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.dormitory-nominal' | translate }} <span\n                    class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"dormitory\" required formControlName=\"dormitory\"\n                  [placeholder]=\"'CONTENT.placeholder-biaya' | translate\" required currencyMask\n                  [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n                <label\n                  *ngIf=\"fap.dormitory.errors && fap.dormitory.errors.required && (fap.dormitory.touched || fap.dormitory.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.dormitory-nominal'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.up3-nominal-discount' | translate }} <span\n                    class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"up3_disc\" required formControlName=\"up3_disc\"\n                  [placeholder]=\"'CONTENT.placeholder-biaya' | translate\" required currencyMask\n                  [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n                <label\n                  *ngIf=\"fap.up3_disc.errors && fap.up3_disc.errors.required && (fap.up3_disc.touched || fap.up3_disc.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.up3-nominal-discount'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.bpp-nominal-discount' | translate }} <span\n                    class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"bpp_disc\" required formControlName=\"bpp_disc\"\n                  [placeholder]=\"'CONTENT.placeholder-biaya' | translate\" required currencyMask\n                  [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n                <label\n                  *ngIf=\"fap.bpp_disc.errors && fap.bpp_disc.errors.required && (fap.bpp_disc.touched || fap.bpp_disc.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.bpp-nominal-discount'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sdp2-nominal-discount' | translate }} <span\n                    class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"sdp2_disc\" required formControlName=\"sdp2_disc\"\n                  [placeholder]=\"'CONTENT.placeholder-biaya' | translate\" required currencyMask\n                  [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n                <label\n                  *ngIf=\"fap.sdp2_disc.errors && fap.sdp2_disc.errors.required && (fap.sdp2_disc.touched || fap.sdp2_disc.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.sdp2-nominal-discount'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.dormitory-nominal-discount' | translate }} <span\n                    class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"dormitory_disc\" required formControlName=\"dormitory_disc\"\n                  [placeholder]=\"'CONTENT.placeholder-biaya' | translate\" currencyMask\n                  [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n                <label\n                  *ngIf=\"fap.dormitory_disc.errors && fap.dormitory_disc.errors.required && (fap.dormitory_disc.touched || fap.dormitory_disc.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.dormitory-nominal-discount'\n                  | translate }}\n                </label>\n              </div>\n              <div class=\"form-group mb-2 col-md-3\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.insurance' | translate }} <span\n                    class=\"required\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"insurance\" required formControlName=\"insurance\"\n                  [placeholder]=\"'CONTENT.placeholder-biaya' | translate\" currencyMask\n                  [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n                <label\n                  *ngIf=\"fap.insurance.errors && fap.insurance.errors.required && (fap.insurance.touched || fap.insurance.dirty)\"\n                  class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                  'CONTENT.insurance'\n                  | translate }}\n                </label>\n              </div>\n            </div>\n          </div> -->\n          <div [hidden]=\"!showProgramStudy\" class=\"col-12 shadow bg-white rounded p-3 mt-4\">\n            <div class=\"row\">\n              <div class=\"col-6 text-left pt-2\">\n                <h6>{{ 'CONTENT.payment-schedule' | translate }}</h6>\n              </div>\n            </div>\n            <hr>\n            <div class=\"col-md-12 mt-1 row\">\n              <div class=\"col-md-6\">\n                <h6 class=\"mb-2 text-center\">{{ 'CONTENT.up3-payment-date' | translate }}</h6>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"form-group mb-2 col-md-6\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.start-date' | translate }} <span\n                        class=\"required\">*</span></label> <br>\n                    <input type=\"date\" class=\"form-control\" name=\"up3_start_date\" required\n                      formControlName=\"up3_start_date\" required>\n                    <label\n                      *ngIf=\"fap.up3_start_date.errors && fap.up3_start_date.errors.required && (fap.up3_start_date.touched || fap.up3_start_date.dirty)\"\n                      class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                      'CONTENT.start-date'\n                      | translate }}\n                    </label>\n                  </div>\n                  <div class=\"form-group mb-2 col-md-6\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.end-date' | translate }} <span\n                        class=\"required\">*</span></label> <br>\n                    <input type=\"date\" class=\"form-control\" name=\"up3_end_date\" required formControlName=\"up3_end_date\"\n                      required>\n                    <label\n                      *ngIf=\"fap.up3_end_date.errors && fap.up3_end_date.errors.required && (fap.up3_end_date.touched || fap.up3_end_date.dirty)\"\n                      class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                      'CONTENT.end-date'\n                      | translate }}\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <h6 class=\"mb-2 text-center\">{{ 'CONTENT.bpp-payment-date' | translate }}</h6>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"form-group mb-2 col-md-6\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.start-date' | translate }} <span\n                        class=\"required\">*</span></label> <br>\n                    <input type=\"date\" class=\"form-control\" name=\"bpp_start_date\" required\n                      formControlName=\"bpp_start_date\" required>\n                    <label\n                      *ngIf=\"fap.up3_start_date.errors && fap.bpp_start_date.errors.required && (fap.bpp_start_date.touched || fap.bpp_start_date.dirty)\"\n                      class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                      'CONTENT.start-date'\n                      | translate }}\n                    </label>\n                  </div>\n                  <div class=\"form-group mb-2 col-md-6\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.end-date' | translate }} <span\n                        class=\"required\">*</span></label> <br>\n                    <input type=\"date\" class=\"form-control\" name=\"bpp_end_date\" required formControlName=\"bpp_end_date\"\n                      required>\n                    <label\n                      *ngIf=\"fap.bpp_end_date.errors && fap.bpp_end_date.errors.required && (fap.bpp_end_date.touched || fap.bpp_end_date.dirty)\"\n                      class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                      'CONTENT.end-date'\n                      | translate }}\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12 row\">\n              <div class=\"col-md-12\">\n                <h6 class=\"mb-2 mt-1 text-center\">{{ 'CONTENT.sdp2-payment-date' | translate }}</h6>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"form-group mb-2 col-md-6\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.start-date' | translate }} <span\n                        class=\"required\">*</span></label>\n                    <input type=\"date\" class=\"form-control\" name=\"bpp_start_date\" required\n                      formControlName=\"sdp2_start_date\" required>\n                    <label\n                      *ngIf=\"fap.sdp2_start_date.errors && fap.sdp2_start_date.errors.required && (fap.sdp2_start_date.touched || fap.sdp2_start_date.dirty)\"\n                      class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                      'CONTENT.start-date'\n                      | translate }}\n                    </label>\n                  </div>\n                  <div class=\"form-group mb-2 col-md-6\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.end-date' | translate }} <span\n                        class=\"required\">*</span></label>\n                    <input type=\"date\" class=\"form-control\" name=\"sdp2_end_date\" required\n                      formControlName=\"sdp2_end_date\" required>\n                    <label\n                      *ngIf=\"fap.sdp2_end_date.errors && fap.sdp2_end_date.errors.required && (fap.sdp2_end_date.touched || fap.sdp2_end_date.dirty)\"\n                      class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{\n                      'CONTENT.end-date'\n                      | translate }}\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button *ngIf=\"edit == 'input'\" type=\"button\" (click)=\"myPersistenceModal.hide()\"\n                class=\"btn btn-secondary btn-sm\">\n                <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n              </button>\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"myPersistenceModal.hide()\"\n                [disabled]=\" approvalDetailDataForm.invalid\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n\n<ng-template #showLoading>\n  <div class=\"d-flex justify-content-center\">\n    <div class=\"spinner-border text-primary\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ApprovalDataDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalDataDetailRoutingModule", function() { return ApprovalDataDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _approval_data_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approval-data-detail.component */ "./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _approval_data_detail_component__WEBPACK_IMPORTED_MODULE_2__["ApprovalDataDetailComponent"]
    }
];
let ApprovalDataDetailRoutingModule = class ApprovalDataDetailRoutingModule {
};
ApprovalDataDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ApprovalDataDetailRoutingModule);



/***/ }),

/***/ "./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.center-table {\n  text-align: center;\n}\n\n.color-searching {\n  background-color: #D0D3D4;\n}\n\ninput[type=text] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=search] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  display: inline-block;\n}\n\n.input-type-border {\n  box-sizing: border-box;\n  border: red;\n}\n\ninput[type=number] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=date] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ntextarea {\n  width: 100%;\n  height: 150px;\n  padding: 5px 5px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 12px;\n  color: grey;\n  resize: none;\n}\n\n.required {\n  color: red;\n}\n\n@media (max-width: 575px) {\n  .button-margin-top {\n    margin-top: 7px;\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .img-size {\n    width: 50px;\n  }\n\n  .text-margin {\n    margin-bottom: 5px;\n  }\n}\n\n@media (min-width: 576px) {\n  .button-margin {\n    margin-left: 10px;\n  }\n\n  .button-size-input {\n    width: 220px;\n  }\n\n  .img-size-md {\n    width: 60px;\n  }\n}\n\n@media (min-width: 768px) {\n  .button-size-md {\n    width: 120px;\n  }\n\n  .button-margin {\n    margin-left: 10px;\n  }\n\n  .button-margin-group {\n    margin-left: 10px;\n  }\n}\n\n.cursor-custom {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL2FkbS1tcC1hcHByb3ZhbC1kYXRhL2FwcHJvdmFsLWRhdGEtZGV0YWlsL2FwcHJvdmFsLWRhdGEtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9hZG0tbXAtYXBwcm92YWwtZGF0YS9hcHByb3ZhbC1kYXRhLWRldGFpbC9hcHByb3ZhbC1kYXRhLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFDQyxrQkFBQTtBQ0dEOztBRERBO0VBQ0UseUJBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0tGOztBREhBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNNRjs7QURKQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNTRjs7QURQQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNTRjs7QURQQTtFQUNFLFVBQUE7QUNVRjs7QURSQTtFQUNFO0lBQ0UsZUFBQTtFQ1dGOztFRFRBO0lBQ0Usa0JBQUE7RUNZRjs7RURWQTtJQUNFLFdBQUE7RUNhRjs7RURYQTtJQUVFLGtCQUFBO0VDYUY7QUFDRjs7QURWQTtFQUNFO0lBQ0UsaUJBQUE7RUNZRjs7RURWQTtJQUNFLFlBQUE7RUNhRjs7RURYQTtJQUNFLFdBQUE7RUNjRjtBQUNGOztBRFpBO0VBQ0U7SUFDRSxZQUFBO0VDY0Y7O0VEWkE7SUFDRSxpQkFBQTtFQ2VGOztFRGJBO0lBQ0UsaUJBQUE7RUNnQkY7QUFDRjs7QURkQTtFQUNFLGVBQUE7QUNnQkYiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9hZG0tbXAtYXBwcm92YWwtZGF0YS9hcHByb3ZhbC1kYXRhLWRldGFpbC9hcHByb3ZhbC1kYXRhLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRke1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxudGh7XG4gIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4uY2VudGVyLXRhYmxle1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb2xvci1zZWFyY2hpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNEMEQzRDQ7XG59XG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaW5wdXQtdHlwZS1ib3JkZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IHJlZDtcbn1cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmlucHV0W3R5cGU9ZGF0ZV0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6Z3JleTtcbiAgcmVzaXplOiBub25lO1xufVxuLnJlcXVpcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuYnV0dG9uLW1hcmdpbi10b3B7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICB9XG4gIC50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmltZy1zaXple1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC50ZXh0LW1hcmdpbntcbiAgICAvLyBtYXJnaW4tbGVmdDogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmJ1dHRvbi1tYXJnaW57XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmJ1dHRvbi1zaXplLWlucHV0IHtcbiAgICB3aWR0aDogMjIwcHg7XG4gIH1cbiAgLmltZy1zaXplLW1ke1xuICAgIHdpZHRoOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmJ1dHRvbi1zaXplLW1kIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbiAgLmJ1dHRvbi1tYXJnaW57XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmJ1dHRvbi1tYXJnaW4tZ3JvdXB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbi5jdXJzb3ItY3VzdG9tIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwidGQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxudGgge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLmNlbnRlci10YWJsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbG9yLXNlYXJjaGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMEQzRDQ7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW5wdXQtdHlwZS1ib3JkZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IHJlZDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dFt0eXBlPWRhdGVdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyZXk7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLnJlcXVpcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5idXR0b24tbWFyZ2luLXRvcCB7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICB9XG5cbiAgLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaW1nLXNpemUge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLnRleHQtbWFyZ2luIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuYnV0dG9uLW1hcmdpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAuYnV0dG9uLXNpemUtaW5wdXQge1xuICAgIHdpZHRoOiAyMjBweDtcbiAgfVxuXG4gIC5pbWctc2l6ZS1tZCB7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYnV0dG9uLXNpemUtbWQge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgfVxuXG4gIC5idXR0b24tbWFyZ2luIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5idXR0b24tbWFyZ2luLWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuLmN1cnNvci1jdXN0b20ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ApprovalDataDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalDataDetailComponent", function() { return ApprovalDataDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/participant.service */ "./src/app/_services/participant.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











let ApprovalDataDetailComponent = class ApprovalDataDetailComponent {
    constructor(translateService, broadcasterService, chartService, route, fb, userService, datePipe) {
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.route = route;
        this.fb = fb;
        this.userService = userService;
        this.datePipe = datePipe;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.formData = new FormData();
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translateService.setDefaultLang(res.lang);
        });
        this.importDataForm = this.fb.group({
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            council_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            step_1_end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            step_2_end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            step_3_start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            step_3_end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
        });
        this.approvalDetailDataForm = this.fb.group({
            registration_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](['']),
            selection_program_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](['']),
            selection_program_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](['']),
            selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](['']),
            selection_path_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](['']),
            study_program_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](['']),
            total_score: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])),
            mapping_registration_program_study_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            transfer_status_study_program_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pass_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            publication_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            transfer_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            publication_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            council_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            specialization_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            // up3: new FormControl('', [Validators.required]),
            // bpp: new FormControl('', [Validators.required]),
            // sdp2: new FormControl('', [Validators.required]),
            // dormitory: new FormControl('', [Validators.required]),
            // up3_disc: new FormControl('', [Validators.required]),
            // bpp_disc: new FormControl('', [Validators.required]),
            // sdp2_disc: new FormControl('', [Validators.required]),
            // dormitory_disc: new FormControl('', [Validators.required]),
            up3_start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            up3_end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            bpp_start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            bpp_end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            sdp2_start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            sdp2_end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            school_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            // insurance: new FormControl('', [Validators.required]),
            beasiswa_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')])),
            old_student_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')),
            semester: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(1)])),
            reference_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')])),
        });
        this.selectionPathid = +this.route.snapshot.paramMap.get('id');
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        this.showProgramStudy = false;
        this.loadingImport = false;
        this.loadExportReg = false;
        this.isApplyFilter = false;
        this.isChangePage = false;
        this.isTabledata = false;
        this.loadingModals = false;
        this.isPasca = false;
        this.loadingCbt = false;
        this.raportPath = false;
        this.searching = '';
        this.dataResult = [];
    }
    get fap() {
        return this.approvalDetailDataForm.controls;
    }
    get fi() {
        return this.importDataForm.controls;
    }
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
            order: [[0, 'asc']],
            initComplete: () => {
            }
        };
        // this.loadApprovalData(this.selectionPathid);
        this.yearList(this.selectionPathid);
        this.loadTypeApproval();
    }
    loadTypeApproval() {
        this.chartService.getParticipantRegistApprove(`?selection_path=${this.selectionPathid}`).subscribe(response => {
            this.approvalData = response.data[0].category;
            if (this.approvalData === 'PASCASARJANA' || this.approvalData === 'EKSTENSI' || this.approvalData === 'PJJ-ONLINE') {
                this.isPasca = true;
            }
            else {
                this.isPasca = false;
            }
        });
    }
    mappingPathYearChanged(event) {
        this.selectionYear = event.value;
        this.pathYearId = event.pathYear;
        this.examStatus = event.exam_status;
        if (this.examStatus == 1) {
            this.raportPath = true;
        }
        else {
            this.raportPath = false;
        }
        this.applyFilter();
    }
    generateScoreCbt() {
        this.loadingCbt = true;
        this.chartService.getMoodleExamGrades(`?registration_number=${this.registrationNumber}`).subscribe(res => {
            this.loadingCbt = false;
            this.gradeCbt = res.grade ? res.grade : '0';
            this.approvalDetailDataForm.patchValue({ total_score: this.gradeCbt });
        }, (reason) => {
            this.loadingCbt = false;
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loadingImport = false;
        });
    }
    applyFilter() {
        this.dataResult = [];
        this.loadtableApprovalData = true;
        if (this.pageNumber !== undefined) {
            this.chartService.getResultPagination(`?page=${this.pageNumber}&selection_path=${this.selectionPathid}&mapping_path_year_id=${this.pathYearId}&registration_number=${this.searching}`).subscribe(response => {
                this.dataResult = response.data;
                this.isChangePage = false;
                this.isApplyFilter = true;
                this.currentPage = response.current_page;
                this.totalRecord = response.data.length;
                this.collectionSize = response.total;
                this.pageSize = response.per_page;
                this.loadtableApprovalData = false;
                this.dataResult.slice((response.current_page - response.current_page) * this.pageSize);
            });
        }
        else {
            this.chartService.getResultPagination(`?selection_path=${this.selectionPathid}&mapping_path_year_id=${this.pathYearId}&registration_number=${this.searching}`).subscribe(response => {
                this.dataResult = response.data;
                this.from = response.from;
                this.isChangePage = false;
                this.isApplyFilter = true;
                this.loadtableApprovalData = false;
                this.currentPage = response.current_page;
                this.totalRecord = response.data.length;
                this.collectionSize = response.total;
                this.pageSize = response.per_page;
                const to = response.to;
            });
        }
    }
    changePage(e) {
        this.pageNumber = e;
        this.applyFilter();
    }
    yearList(selectionPathid) {
        this.chartService.getMappingPathYearIntake(`?active_status=true&selection_path_id=${selectionPathid}`).subscribe((res) => {
            this.listSelectionYear = res && res.map((value) => {
                const { id, year, mapping_path_year_id, exam_status } = value;
                return { value: id.toString(), label: year, pathYear: mapping_path_year_id, exam_status: exam_status };
            });
        });
    }
    getSpecializationStudyProgram(evt) {
        this.userService.getStudyProgramSpecialization(`?program_study_id=${evt}`).subscribe((res) => {
            this.listSpecialization = res && res.map((value) => {
                const { id, specialization_name } = value;
                return { value: id.toString(), label: specialization_name };
            });
        });
    }
    onDeselected(val) {
        switch (val) {
            case 'programStudy':
                this.programStudy = '0';
        }
    }
    searchData(value) {
        this.searching = value;
        this.applyFilter();
    }
    loadMinimumSdp(value) {
        if (!value) {
            this.approvalDetailDataForm.patchValue({ sdp2: 0 });
        }
        else {
            this.chartService.getRegistrationProgramStudy(`${this.registrationNumber}&study_program_id=${value}`).subscribe((res) => {
                if (res.data.length !== 0) {
                    this.approvalDetailDataForm.patchValue({ sdp2: res.data[0].minimum_donation });
                    this.studyProgramName = res.data[0].study_program_name;
                }
            });
        }
    }
    renderTable() {
        this.dtElements.forEach((dtElement, index) => {
            if (index == 0) {
                dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            }
        });
    }
    loadProgramStudyRegistrationDataFilter() {
        this.loadingModals = true;
        this.chartService.getStudyPrograms().subscribe((res) => {
            // this.chartService.getRegistrationProgramStudy(registrationNumber).subscribe((res) => {
            this.loadingModals = false;
            this.listProgramStudy = res && res.map((value) => {
                const { id, study_program_name } = value;
                return { value: id.toString(), label: study_program_name };
            });
        });
    }
    importExcelApprovalData() {
        this.importApprovalModal.show();
    }
    hideExcelForm() {
        this.importDataForm.patchValue({ url: '' });
        this.importApprovalModal.hide();
    }
    changeImportFile(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'xlsx') {
                if (size < 2000000) {
                    this.formData = new FormData;
                    this.formData.append('excel', elem.files[0]);
                }
                else {
                    this.errSize = true;
                    this.importDataForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.importDataForm.get('url').patchValue('');
            }
        }
    }
    passStatusChange(value) {
        if (value == 1) {
            this.isPassStatus = true;
            this.transferStatus = '';
        }
        else {
            this.isPassStatus = false;
            this.transferStatus = '';
        }
    }
    passStatusCheck(value) {
        if (value == 1) {
            if (this.isPassStatus === true) {
                this.isTransferStatus = true;
                this.isPassStatuTransferStatus = true;
                this.showProgramStudy = true;
                this.approvalDetailDataForm.get('mapping_registration_program_study_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('mapping_registration_program_study_id').updateValueAndValidity();
                this.approvalDetailDataForm.get('transfer_status_study_program_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('transfer_status_study_program_id').updateValueAndValidity();
                // this.approvalDetailDataForm.get('up3').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('up3').updateValueAndValidity();
                // this.approvalDetailDataForm.get('bpp').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('bpp').updateValueAndValidity();
                // this.approvalDetailDataForm.get('sdp2').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('sdp2').updateValueAndValidity();
                // this.approvalDetailDataForm.get('dormitory').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('dormitory').updateValueAndValidity();
                // this.approvalDetailDataForm.get('up3_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('up3_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('bpp_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('bpp_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('sdp2_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('sdp2_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('dormitory_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('dormitory_disc').updateValueAndValidity();
                this.approvalDetailDataForm.get('up3_start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('up3_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('up3_end_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('up3_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('bpp_start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('bpp_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('bpp_end_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('bpp_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('sdp2_start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('sdp2_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('sdp2_end_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('sdp2_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('school_year').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('school_year').updateValueAndValidity();
                this.approvalDetailDataForm.get('council_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('council_date').updateValueAndValidity();
                // this.approvalDetailDataForm.get('insurance').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('insurance').updateValueAndValidity();
                this.approvalDetailDataForm.get('beasiswa_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]));
                this.approvalDetailDataForm.get('beasiswa_id').updateValueAndValidity();
                this.approvalDetailDataForm.get('reference_number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]));
                this.approvalDetailDataForm.get('reference_number').updateValueAndValidity();
                this.approvalDetailDataForm.get('semester').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(1)]));
                this.approvalDetailDataForm.get('semester').updateValueAndValidity();
            }
            else {
                this.showProgramStudy = true;
                this.approvalDetailDataForm.get('mapping_registration_program_study_id').clearValidators();
                this.approvalDetailDataForm.get('mapping_registration_program_study_id').updateValueAndValidity();
                this.approvalDetailDataForm.get('transfer_status_study_program_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('transfer_status_study_program_id').updateValueAndValidity();
                // this.approvalDetailDataForm.get('up3').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('up3').updateValueAndValidity();
                // this.approvalDetailDataForm.get('bpp').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('bpp').updateValueAndValidity();
                // this.approvalDetailDataForm.get('sdp2').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('sdp2').updateValueAndValidity();
                // this.approvalDetailDataForm.get('dormitory').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('dormitory').updateValueAndValidity();
                // this.approvalDetailDataForm.get('up3_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('up3_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('bpp_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('bpp_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('sdp2_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('sdp2_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('dormitory_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('dormitory_disc').updateValueAndValidity();
                this.approvalDetailDataForm.get('up3_start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('up3_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('up3_end_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('up3_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('bpp_start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('bpp_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('bpp_end_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('bpp_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('sdp2_start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('sdp2_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('sdp2_end_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('sdp2_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('school_year').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('school_year').updateValueAndValidity();
                this.approvalDetailDataForm.get('council_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('council_date').updateValueAndValidity();
                // this.approvalDetailDataForm.get('insurance').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('insurance').updateValueAndValidity();
                this.approvalDetailDataForm.get('beasiswa_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]));
                this.approvalDetailDataForm.get('beasiswa_id').updateValueAndValidity();
                this.approvalDetailDataForm.get('reference_number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]));
                this.approvalDetailDataForm.get('reference_number').updateValueAndValidity();
                this.approvalDetailDataForm.get('semester').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(1)]));
                this.approvalDetailDataForm.get('semester').updateValueAndValidity();
                this.isTransferStatus = true;
                this.isPassStatuTransferStatus = false;
            }
        }
        else {
            if (this.isPassStatus === true) {
                this.showProgramStudy = true;
                this.approvalDetailDataForm.get('mapping_registration_program_study_id').clearValidators();
                this.approvalDetailDataForm.get('mapping_registration_program_study_id').updateValueAndValidity();
                this.approvalDetailDataForm.get('transfer_status_study_program_id').clearValidators();
                this.approvalDetailDataForm.get('transfer_status_study_program_id').updateValueAndValidity();
                // this.approvalDetailDataForm.get('up3').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('up3').updateValueAndValidity();
                // this.approvalDetailDataForm.get('bpp').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('bpp').updateValueAndValidity();
                // this.approvalDetailDataForm.get('sdp2').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('sdp2').updateValueAndValidity();
                // this.approvalDetailDataForm.get('dormitory').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('dormitory').updateValueAndValidity();
                // this.approvalDetailDataForm.get('up3_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('up3_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('bpp_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('bpp_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('sdp2_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('sdp2_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('dormitory_disc').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('dormitory_disc').updateValueAndValidity();
                this.approvalDetailDataForm.get('up3_start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('up3_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('up3_end_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('up3_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('bpp_start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('bpp_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('bpp_end_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('bpp_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('sdp2_start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('sdp2_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('sdp2_end_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('sdp2_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('school_year').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('school_year').updateValueAndValidity();
                this.approvalDetailDataForm.get('council_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
                this.approvalDetailDataForm.get('council_date').updateValueAndValidity();
                // this.approvalDetailDataForm.get('insurance').setValidators(Validators.required);
                // this.approvalDetailDataForm.get('insurance').updateValueAndValidity();
                this.approvalDetailDataForm.get('beasiswa_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]));
                this.approvalDetailDataForm.get('beasiswa_id').updateValueAndValidity();
                this.approvalDetailDataForm.get('reference_number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]));
                this.approvalDetailDataForm.get('reference_number').updateValueAndValidity();
                this.approvalDetailDataForm.get('semester').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(1)]));
                this.approvalDetailDataForm.get('semester').updateValueAndValidity();
                this.isTransferStatus = false;
                this.isPassStatuTransferStatus = false;
            }
            else {
                this.showProgramStudy = false;
                this.isTransferStatus = false;
                this.isPassStatuTransferStatus = false;
                this.approvalDetailDataForm.get('mapping_registration_program_study_id').clearValidators();
                this.approvalDetailDataForm.get('mapping_registration_program_study_id').updateValueAndValidity();
                this.approvalDetailDataForm.get('transfer_status_study_program_id').clearValidators();
                this.approvalDetailDataForm.get('transfer_status_study_program_id').updateValueAndValidity();
                // this.approvalDetailDataForm.get('up3').clearValidators();
                // this.approvalDetailDataForm.get('up3').updateValueAndValidity();
                // this.approvalDetailDataForm.get('bpp').clearValidators();
                // this.approvalDetailDataForm.get('bpp').updateValueAndValidity();
                // this.approvalDetailDataForm.get('sdp2').clearValidators();
                // this.approvalDetailDataForm.get('sdp2').updateValueAndValidity();
                // this.approvalDetailDataForm.get('dormitory').clearValidators();
                // this.approvalDetailDataForm.get('dormitory').updateValueAndValidity();
                // this.approvalDetailDataForm.get('up3_disc').clearValidators();
                // this.approvalDetailDataForm.get('up3_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('bpp_disc').clearValidators();
                // this.approvalDetailDataForm.get('bpp_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('sdp2_disc').clearValidators();
                // this.approvalDetailDataForm.get('sdp2_disc').updateValueAndValidity();
                // this.approvalDetailDataForm.get('dormitory_disc').clearValidators();
                // this.approvalDetailDataForm.get('dormitory_disc').updateValueAndValidity();
                this.approvalDetailDataForm.get('up3_start_date').clearValidators();
                this.approvalDetailDataForm.get('up3_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('up3_end_date').clearValidators();
                this.approvalDetailDataForm.get('up3_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('bpp_start_date').clearValidators();
                this.approvalDetailDataForm.get('bpp_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('bpp_end_date').clearValidators();
                this.approvalDetailDataForm.get('bpp_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('sdp2_start_date').clearValidators();
                this.approvalDetailDataForm.get('sdp2_start_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('sdp2_end_date').clearValidators();
                this.approvalDetailDataForm.get('sdp2_end_date').updateValueAndValidity();
                this.approvalDetailDataForm.get('school_year').clearValidators();
                this.approvalDetailDataForm.get('school_year').updateValueAndValidity();
                this.approvalDetailDataForm.get('council_date').clearValidators();
                this.approvalDetailDataForm.get('council_date').updateValueAndValidity();
                // this.approvalDetailDataForm.get('insurance').clearValidators();
                // this.approvalDetailDataForm.get('insurance').updateValueAndValidity();
                this.approvalDetailDataForm.get('beasiswa_id').clearValidators();
                this.approvalDetailDataForm.get('beasiswa_id').updateValueAndValidity();
                this.approvalDetailDataForm.get('reference_number').clearValidators();
                this.approvalDetailDataForm.get('reference_number').updateValueAndValidity();
                this.approvalDetailDataForm.get('semester').clearValidators();
                this.approvalDetailDataForm.get('semester').updateValueAndValidity();
                this.approvalDetailDataForm.get('specialization_id').clearValidators();
                this.approvalDetailDataForm.get('specialization_id').updateValueAndValidity();
            }
        }
    }
    loadApprovalData(selectionPathid) {
        this.loadtableApprovalData = true;
        this.chartService.getParticipantPassData(`selection_path=${this.selectionPathid}`).subscribe(response => {
            setTimeout(() => {
                this.tableData = response.data;
                this.dtTrigger.next(); // Trigger for load datatable
                this.loadtableApprovalData = false;
            }, 3000);
        }, err => {
            this.loadtableApprovalData = false;
        });
    }
    loadDetailApprovalData(data) {
        this.mode('edit');
        this.loadingModals = false;
        this.approvalId = data.result_id;
        this.participantId = data.participant_id;
        this.selectionProgramId = data.selection_program_id;
        this.chartService.getParticipantDetailData(this.participantId).subscribe(res => {
            this.name = res.fullname;
            this.handphone = res.mobile_phone_number;
            this.email = res.username;
            this.birthCity = res.birth_city;
            this.dateofbirth = res.birth_date;
            this.gender = res.gender;
            this.address = res.address_detail;
            this.city = res.address_city;
            this.province = res.address_province;
            this.postalcode = res.address_postal_code;
        });
        this.chartService.getEducationLast(`?participant_id=${this.participantId}`).subscribe(response => {
            this.lastEducation = response.schools;
            this.lastEducationCity = response.school_city;
            this.lastEducationProvince = response.school_province;
        });
        this.programStudy = data.study_program_id && data.study_program_id.toString();
        if (data.pass_status == true && data.transfer_status == true && data.transfer_program_study_id != null) {
            this.getSpecializationStudyProgram(data.transfer_program_study_id);
        }
        else if (data.pass_status == true && data.transfer_status == '0' && data.study_program_id != null) {
            this.getSpecializationStudyProgram(data.study_program_id);
        }
        else if (data.pass_status == true && data.transfer_status == null && data.study_program_id != null) {
            this.getSpecializationStudyProgram(data.study_program_id);
        }
        this.specialization = data.specialization_id && data.specialization_id.toString();
        this.programStudyTransfer = data.transfer_program_study_id && data.transfer_program_study_id.toString();
        this.registrationNumber = data.registration_number;
        this.approvalDetailDataForm.patchValue({ registration_number: data.registration_number });
        this.approvalDetailDataForm.patchValue({ selection_program_name: data.program_name });
        this.approvalDetailDataForm.patchValue({ selection_path_name: data.selection_path_name });
        this.approvalDetailDataForm.patchValue({ study_program_name: data.study_program_id && data.study_program_id.toString() });
        if (data.pass_status == true) {
            this.approvalDetailDataForm.patchValue({ pass_status: '1' });
        }
        else if (data.pass_status == '0' || data.pass_status == null) {
            this.approvalDetailDataForm.patchValue({ pass_status: '0' });
        }
        if (data.transfer_status == true) {
            this.approvalDetailDataForm.patchValue({ transfer_status: '1' });
        }
        else if (data.transfer_status == '0' || data.transfer_status == null) {
            this.approvalDetailDataForm.patchValue({ transfer_status: '0' });
        }
        if (data.publication_status == true) {
            this.approvalDetailDataForm.patchValue({ publication_status: '1' });
        }
        else if (data.publication_status == '0' || data.publication_status == null) {
            this.approvalDetailDataForm.patchValue({ publication_status: '0' });
        }
        this.approvalDetailDataForm.patchValue({ total_score: data.total_score });
        this.approvalDetailDataForm.patchValue({ beasiswa_id: data.schoolarship_id ? data.schoolarship_id : 0 });
        this.approvalDetailDataForm.patchValue({ up3: data.up3 });
        this.approvalDetailDataForm.patchValue({ bpp: data.bpp });
        this.approvalDetailDataForm.patchValue({ sdp2: data.sdp2 });
        this.approvalDetailDataForm.patchValue({ dormitory: data.dormitory });
        this.approvalDetailDataForm.patchValue({ up3_disc: data.up3discount });
        this.approvalDetailDataForm.patchValue({ bpp_disc: data.bppdiscount });
        this.approvalDetailDataForm.patchValue({ sdp2_disc: data.sdp2discount });
        this.approvalDetailDataForm.patchValue({ dormitory_disc: data.dormitorydiscount });
        this.approvalDetailDataForm.patchValue({ insurance: data.insurance });
        this.approvalDetailDataForm.patchValue({ school_year: data.schoolyear });
        this.approvalDetailDataForm.patchValue({ old_student_id: data.oldstudentid });
        this.approvalDetailDataForm.patchValue({ semester: data.semester });
        this.approvalDetailDataForm.patchValue({ reference_number: data.reference_number });
        this.approvalDetailDataForm.patchValue({ council_date: this.datePipe.transform(data.council_date, 'yyyy-MM-dd') });
        this.approvalDetailDataForm.patchValue({ publication_date: this.datePipe.transform(data.publication_date, 'yyyy-MM-dd') });
        this.approvalDetailDataForm.patchValue({ up3_start_date: this.datePipe.transform(data.start_date_1, 'yyyy-MM-dd') });
        this.approvalDetailDataForm.patchValue({ bpp_start_date: this.datePipe.transform(data.start_date_2, 'yyyy-MM-dd') });
        this.approvalDetailDataForm.patchValue({ sdp2_start_date: this.datePipe.transform(data.start_date_3, 'yyyy-MM-dd') });
        this.approvalDetailDataForm.patchValue({ up3_end_date: this.datePipe.transform(data.end_date_1, 'yyyy-MM-dd') });
        this.approvalDetailDataForm.patchValue({ bpp_end_date: this.datePipe.transform(data.end_date_2, 'yyyy-MM-dd') });
        this.approvalDetailDataForm.patchValue({ sdp2_end_date: this.datePipe.transform(data.end_date_3, 'yyyy-MM-dd') });
        this.myPersistenceModal.show();
        this.loadProgramStudyRegistrationDataFilter();
    }
    mode(param) {
        this.edit = param;
    }
    createImportDataExcel() {
        this.loadingImport = true;
        this.formData.append('council_date', this.importDataForm.get('council_date').value);
        this.formData.append('step_1_end_date', this.importDataForm.get('step_1_end_date').value);
        this.formData.append('step_2_end_date', this.importDataForm.get('step_2_end_date').value);
        this.formData.append('step_3_start_date', this.importDataForm.get('step_3_start_date').value);
        this.formData.append('step_3_end_date', this.importDataForm.get('step_3_end_date').value);
        this.chartService.insertBulkRegistrationResult(this.formData).subscribe(res => {
            if (res !== null) {
                if (res.status == 'Success') {
                    this.loadingImport = false;
                    this.broadcasterService.notifBroadcast(true, {
                        title: 'Success',
                        msg: res.msg,
                        timeout: 5000,
                        theme: 'default',
                        position: 'top-right',
                        type: 'success'
                    });
                    this.applyFilter();
                    this.importApprovalModal.hide();
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
                    this.loadingImport = false;
                }
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
                this.loadingImport = false;
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
            this.loadingImport = false;
        });
    }
    createDetailSelectionStepData() {
        this.loading = true;
        if (this.edit == 'edit') {
            const { reference_number } = this.approvalDetailDataForm.value;
            let datas = {};
            let data = {};
            let payloadInput = {};
            data = {
                registration_number: this.approvalDetailDataForm.value.registration_number,
                pass_status: this.approvalDetailDataForm.value.pass_status,
                publication_status: 1,
                selection_path_id: this.selectionPathid,
                program_study_id: '',
                program_study_name: '',
                transfer_program_study_id: '',
                transfer_status: '',
                schoolarship_id: this.approvalDetailDataForm.value.beasiswa_id,
                specialization_id: this.approvalDetailDataForm.value.specialization_id,
                // up3: this.approvalDetailDataForm.value.up3 ? this.approvalDetailDataForm.value.up3 : 0,
                // bpp: this.approvalDetailDataForm.value.bpp ? this.approvalDetailDataForm.value.bpp : 0,
                // sdp2: this.approvalDetailDataForm.value.sdp2 ? this.approvalDetailDataForm.value.sdp2 : 0,
                // dormitory: this.approvalDetailDataForm.value.dormitory ? this.approvalDetailDataForm.value.dormitory : 0,
                // up3discount: this.approvalDetailDataForm.value.up3_disc ? this.approvalDetailDataForm.value.up3_disc : 0,
                // bppdiscount: this.approvalDetailDataForm.value.bpp_disc ? this.approvalDetailDataForm.value.bpp_disc : 0,
                // sdp2discount: this.approvalDetailDataForm.value.sdp2_disc ? this.approvalDetailDataForm.value.sdp2_disc : 0,
                // dormitorydiscount: this.approvalDetailDataForm.value.dormitory_disc ? this.approvalDetailDataForm.value.dormitory_disc : 0,
                semester: this.approvalDetailDataForm.value.semester,
                // insurance: this.approvalDetailDataForm.value.insurance ? this.approvalDetailDataForm.value.insurance : 0,
                notes: this.approvalDetailDataForm.value.notes,
                start_date_1: this.approvalDetailDataForm.value.up3_start_date,
                start_date_2: this.approvalDetailDataForm.value.bpp_start_date,
                start_date_3: this.approvalDetailDataForm.value.sdp2_start_date,
                end_date_1: this.approvalDetailDataForm.value.up3_end_date,
                end_date_2: this.approvalDetailDataForm.value.bpp_end_date,
                end_date_3: this.approvalDetailDataForm.value.sdp2_end_date,
                schoolyear: this.approvalDetailDataForm.value.school_year,
                type: this.approvalDetailDataForm.value.type,
                oldstudentid: this.approvalDetailDataForm.value.old_student_id,
                reference_number: reference_number,
                selection_program_name: this.approvalDetailDataForm.value.selection_program_name,
                selection_program_id: this.selectionProgramId,
                password: this.approvalDetailDataForm.value.password,
                publication_date: this.approvalDetailDataForm.value.publication_date,
                council_date: this.approvalDetailDataForm.value.council_date,
                participant_id: this.participantId,
            };
            if (this.isPassStatus === true) {
                if (this.isTransferStatus === true) {
                    datas = Object.assign({}, data, { transfer_program_study_id: this.programStudyTransfer, transfer_status: true, program_study_id: this.programStudy, program_study_name: this.studyProgramName });
                }
                else {
                    datas = Object.assign({}, data, { program_study_id: this.programStudy, program_study_name: this.studyProgramName, transfer_status: false });
                }
            }
            else {
                if (this.isTransferStatus === true) {
                    datas = Object.assign({}, data, { transfer_program_study_id: this.programStudyTransfer, transfer_status: true });
                }
                else {
                    datas = Object.assign({}, data, { transfer_status: false });
                }
            }
            if (this.raportPath) {
                payloadInput = Object.assign({}, datas, { total_score: this.approvalDetailDataForm.value.total_score });
            }
            else {
                payloadInput = Object.assign({}, datas, { total_score: this.gradeCbt });
            }
            this.chartService.postupdRegistrationResultData(payloadInput).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.loading = false;
                        this.loadSuccess();
                        this.myPersistenceModal.hide();
                        this.applyFilter();
                        // this.renderTable();
                        // this.loadApprovalData(this.selectionPathid);
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
        }
    }
    exportParticipantRegistration() {
        this.loadExportReg = true;
        const data = {
            selection_path: this.selectionPathid
        };
        this.chartService.exportParticipantRegistrationExcel(data).subscribe(res => {
            window.open(res.urls, "_blank");
            this.loadExportReg = false;
        }, (reason) => {
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loadExportReg = false;
        });
    }
    exportPostGraduateExcel() {
        this.loadExportReg = true;
        const data = {
            selection_path: this.selectionPathid,
            mapping_path_year_id: this.selectionYear
        };
        this.chartService.exportPostGraduateExcel(data).subscribe(res => {
            window.open(res.urls, "_blank");
            this.loadExportReg = false;
        }, (reason) => {
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
            this.loadExportReg = false;
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
};
ApprovalDataDetailComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_9__["ParticipantService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], ApprovalDataDetailComponent.prototype, "dtElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myPersistenceModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApprovalDataDetailComponent.prototype, "myPersistenceModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('importApprovalModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApprovalDataDetailComponent.prototype, "importApprovalModal", void 0);
ApprovalDataDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-approval-data-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./approval-data-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./approval-data-detail.component.scss */ "./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_9__["ParticipantService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]])
], ApprovalDataDetailComponent);



/***/ }),

/***/ "./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ApprovalDataDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalDataDetailModule", function() { return ApprovalDataDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _approval_data_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approval-data-detail.component */ "./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.component.ts");
/* harmony import */ var _approval_data_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approval-data-detail-routing.module */ "./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");









let ApprovalDataDetailModule = class ApprovalDataDetailModule {
};
ApprovalDataDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_approval_data_detail_component__WEBPACK_IMPORTED_MODULE_3__["ApprovalDataDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _approval_data_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["ApprovalDataDetailRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"]
        ]
    })
], ApprovalDataDetailModule);



/***/ })

}]);
//# sourceMappingURL=approval-data-detail-approval-data-detail-module-es2015.js.map