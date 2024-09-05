function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selection-data-selection-data-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-selection-data/selection-data/selection-data.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-selection-data/selection-data/selection-data.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeAdmMsSelectionDataSelectionDataSelectionDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"pageTypeInit === 'edit'\" class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"text-md-left\">\n      <div class=\"page-header-title\">\n        <h5>{{ \"MENU.manage-selection-data\" | translate }}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12 col-md-12\">\n    <app-card hidHeader=\"true\">\n      <wizard #wizard class=\"arc-wizard\" navBarLayout=\"large-empty-symbols\">\n        <wizard-step stepTitle=\"{{'CONTENT.selection-path-detail' | translate}}\" navigationSymbol=\"1\">\n          <app-card cardClass=\"card-datatable\" cardTitle=\"{{ 'CONTENT.selection-path-detail' | translate }}\"\n            [loading]=\"loadingCard\" [options]=\"false\" [hidHeader]=\"true\">\n            <form [formGroup]=\"formDetailStep1\" class=\"md-float-material form-material\" action=\"javascript:\">\n              <div class=\"row\">\n                <div class=\"col-md-12 m-2\">\n                  <span class=\"required\"><p>* Wajib diisi</p></span>\n                  <div class=\"form-group mb-2\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.selection-path-name' | translate }} <span\n                        class=\"required\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" name=\"name\" required formControlName=\"name\" maxlength=\"150\"\n                      placeholder=\"{{ 'CONTENT.selection-path-name' | translate }}\">\n                    <label *ngIf=\"fd.name.errors && fd.name.errors.required && (fd.name.touched || fd.name.dirty)\"\n                      class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                    <label *ngIf=\"fd.name.errors && fd.name.errors.maxlength && (fd.name.touched || fd.name.dirty)\"\n                      class=\"error text-danger small form-text\">{{ 'CONTENT.character-maximum' | translate }}</label>\n                  </div>\n                  <div class=\"form-group mb-2\">\n                    <label class=\"form-label m-b-0 f-w-600\">{{\n                      'CONTENT.category-test-type' | translate\n                      }} <span class=\"required\">*</span></label>\n                    <ng-select [(ngModel)]=\"examType\" name=\"exam_type\" [allowClear]=\"true\" [options]=\"listCategoryId\"\n                      [placeholder]=\"'ROOT.choose' | translate\" [ngClass]=\"'custom bg-white'\"\n                      [notFoundMsg]=\"'ROOT.no_data_found' | translate\" [ngModelOptions]=\"{ standalone: true }\" (selected)=\"examStatusChanged($event)\">\n                    </ng-select>\n                    <label *ngIf=\"!examType\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n                      translate }}</label>\n                  </div>\n                  <div class=\"form-group mb-2\">\n                    <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.active-status'| translate}} <span\n                        class=\"required\">*</span></h6>\n                    <div class=\"custom-control custom-radio custom-control-inline mt-2\">\n                      <input type=\"radio\" id=\"active_status1\" name=\"active_status\" class=\"custom-control-input\"\n                        value=\"1\" formControlName=\"active_status\" required>\n                      <label class=\"custom-control-label \" for=\"active_status1\">{{ 'ROOT.yes' | translate }}</label>\n                    </div>\n                    <div class=\"custom-control custom-radio custom-control-inline\">\n                      <input type=\"radio\" id=\"active_status2\" name=\"active_status\" class=\"custom-control-input\"\n                        value=\"0\" formControlName=\"active_status\" required>\n                      <label class=\"custom-control-label\" for=\"active_status2\">{{ 'ROOT.no' | translate }}</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </app-card>\n          <div class=\"col mt-3 text-center\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" routerLink=\"/adm-ms-selection-data\">\n              <i class=\"icofont icofont icofont-exit\"></i> {{'ROOT.exit' | translate}}</button>\n            <button type=\"button\" class=\"btn btn-primary btn-sm m-1\"\n              [disabled]=\"formDetailStep1.invalid || !examType  || loadingCard\" (click)=\"createSelectionData()\">\n              <span *ngIf=\"loadingCard\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n              <span *ngIf=\"loadingCard\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!loadingCard\" class=\"btn-text\">\n                {{'ROOT.next' | translate}} <i class=\"icofont icofont-curved-right\"></i>\n              </span>\n            </button>\n          </div>\n        </wizard-step>\n        <wizard-step stepTitle=\"{{'CONTENT.exam-schedule' | translate}}\" navigationSymbol=\"2\">\n          <app-card cardClass=\"card-datatable\" cardTitle=\"{{ 'CONTENT.exam-cbt' | translate }}\" [options]=\"false\"\n            [loading]=\"loadtableExamCBT\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-12\">\n                <div class=\"row align-items-center mb-2 mt-3 pr-2\">\n                  <div class=\"col-12 text-center text-md-right\">\n                    <button class=\"btn btn-success btn-sm btn-round has-ripple\" (click)=\"openFormCBTData(null, 'input')\"\n                      [disabled]=\"hiddenTime\">\n                      <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-exam-path' | translate}}\n                    </button>\n                  </div>\n                </div>\n                <div class=\"table-responsive pb-2\">\n                  <table datatable class=\"table table-striped table-hover\" [dtOptions]=\"dtOptions[0]\"\n                    [dtTrigger]=\"dtTrigger\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.exam_type' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.month' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.exam-date' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.quota' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tableExamCBT?.length != 0\">\n                      <tr *ngFor=\"let data of tableExamCBT; let i = index;\">\n                        <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                        <td class=\"center-table\">{{ data.exam_type }}</td>\n                        <td class=\"center-table\">{{ data.exam_date | date: 'MMMM' }}</td>\n                        <td class=\"center-table\">{{ data.exam_date | date: 'dd/MM/yyyy' }}</td>\n                        <td class=\"center-table\">{{ data.quota }}</td>\n                        <td class=\"center-table\">\n                          <button class=\"btn btn-primary btn-sm btn-round has-ripple\"\n                            (click)=\"openFormCBTData(data, 'view');\">\n                            <i class=\"ti-eye\"></i> <span class=\"d-sm-none\"> {{'ROOT.view' |\n                              translate}}</span>\n                          </button>\n                          <button class=\"btn btn-danger btn-sm btn-round has-ripple m-1\"\n                            (click)=\"deleteExamsCBTDatas(data)\">\n                            <i class=\"icofont icofont-ui-delete\"></i> <span class=\"d-sm-none\"> {{'ROOT.delete' |\n                              translate}}</span>\n                          </button>\n                          <button class=\"btn btn-info btn-sm btn-round has-ripple\"\n                            (click)=\"openDetailsCBTDatas(data)\">\n                            <i class=\"feather icon-info\"></i> <span class=\"d-sm-none\"> {{'ROOT.detail' | translate}}</span>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableExamCBT?.length == 0 && !loadtableExamCBT\">\n                      <tr>\n                        <td colspan=\"6\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableExamCBT?.length == 0 && loadtableExamCBT\">\n                      <tr>\n                        <td colspan=\"6\" class=\"no-data-available text-center\">Loading Data....</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </app-card>\n          <!-- <app-card cardClass=\"card-datatable\" cardTitle=\"{{ 'CONTENT.exam-psikotest' | translate }}\" [options]=\"false\"\n            [loading]=\"loadtableExamPsikotest\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-12\">\n                <div class=\"row align-items-center mb-2 mt-3 pr-2\">\n                  <div class=\"col-12 text-center text-md-right\">\n                    <button class=\"btn btn-success btn-sm btn-round has-ripple\"\n                      (click)=\"openFormTypeDataPsikotest(null, 'input')\" [disabled]=\"hiddenTime\">\n                      <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-exam-path' | translate}}\n                    </button>\n                  </div>\n                </div>\n                <div class=\"table-responsive pb-2\">\n                  <table datatable class=\"table table-striped table-hover\" [dtOptions]=\"dtOptions[1]\"\n                    [dtTrigger]=\"dtTrigger1\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.exam_type' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.month' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.exam-date' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.quota' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tableExamPsikotest?.length != 0\">\n                      <tr *ngFor=\"let data of tableExamPsikotest; let i = index;\">\n                        <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                        <td class=\"center-table\">{{ data.exam_type }}</td>\n                        <td class=\"center-table\">{{ data.exam_date | date: 'MMMM' }}</td>\n                        <td class=\"center-table\">{{ data.exam_date | date: 'dd/MM/yyyy' }}</td>\n                        <td class=\"center-table\">{{ data.quota }}</td>\n                        <td class=\"center-table\">\n                          <button class=\"btn btn-warning btn-sm btn-round has-ripple\"\n                            (click)=\"openFormTypeDataPsikotest(data, 'edit');\">\n                            <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' |\n                              translate}}</span>\n                          </button>\n                          <button class=\"btn btn-danger btn-sm btn-round has-ripple m-1\"\n                            (click)=\"deleteExamsPsikotestDatas(data)\">\n                            <i class=\"icofont icofont-ui-delete\"></i> <span class=\"d-sm-none\"> {{'ROOT.delete' |\n                              translate}}</span>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableExamPsikotest?.length == 0 && !loadtableExamPsikotest\">\n                      <tr>\n                        <td colspan=\"6\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableExamPsikotest?.length == 0 && loadtableExamPsikotest\">\n                      <tr>\n                        <td colspan=\"6\" class=\"no-data-available text-center\">Loading Data....</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </app-card>\n          <app-card cardClass=\"card-datatable\" cardTitle=\"{{ 'CONTENT.exam-interview' | translate }}\" [options]=\"false\"\n            [loading]=\"loadtableExamInterview\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-12\">\n                <div class=\"row align-items-center mb-2 mt-3 pr-2\">\n                  <div class=\"col-12 text-center text-md-right\">\n                    <button class=\"btn btn-success btn-sm btn-round has-ripple\"\n                      (click)=\"openFormTypeDataInterview(null, 'input')\" [disabled]=\"hiddenTime\">\n                      <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-exam-path' | translate}}\n                    </button>\n                  </div>\n                </div>\n                <div class=\"table-responsive pb-2\">\n                  <table datatable class=\"table table-striped table-hover\" [dtOptions]=\"dtOptions[2]\"\n                    [dtTrigger]=\"dtTrigger2\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.exam_type' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.month' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.exam-date' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.quota' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tableExamInterview?.length != 0\">\n                      <tr *ngFor=\"let data of tableExamInterview; let i = index;\">\n                        <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                        <td class=\"center-table\">{{ data.exam_type }}</td>\n                        <td class=\"center-table\">{{ data.exam_date | date: 'MMMM' }}</td>\n                        <td class=\"center-table\">{{ data.exam_date | date: 'dd/MM/yyyy' }}</td>\n                        <td class=\"center-table\">{{ data.quota }}</td>\n                        <td class=\"center-table\">\n                          <button class=\"btn btn-warning btn-sm btn-round has-ripple\"\n                            (click)=\"openFormTypeDataInterview(data, 'edit');\">\n                            <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' |\n                              translate}}</span>\n                          </button>\n                          <button class=\"btn btn-danger btn-sm btn-round has-ripple m-1\"\n                            (click)=\"deleteExamsInterviewDatas(data)\">\n                            <i class=\"icofont icofont-ui-delete\"></i> <span class=\"d-sm-none\"> {{'ROOT.delete' |\n                              translate}}</span>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableExamInterview?.length == 0 && !loadtableExamInterview\">\n                      <tr>\n                        <td colspan=\"6\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableExamInterview?.length == 0 && loadtableExamInterview\">\n                      <tr>\n                        <td colspan=\"6\" class=\"no-data-available text-center\">Loading Data....</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </app-card>\n          <app-card cardClass=\"card-datatable\" cardTitle=\"{{ 'CONTENT.exam-tpa' | translate }}\" [options]=\"false\"\n            [loading]=\"loadtableExamTPA\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-12\">\n                <div class=\"row align-items-center mb-2 mt-3 pr-2\">\n                  <div class=\"col-12 text-center text-md-right\">\n                    <button class=\"btn btn-success btn-sm btn-round has-ripple\"\n                      (click)=\"openFormTypeDataTPA(null, 'input')\" [disabled]=\"hiddenTime\">\n                      <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-exam-path' | translate}}\n                    </button>\n                  </div>\n                </div>\n                <div class=\"table-responsive pb-2\">\n                  <table datatable class=\"table table-striped table-hover\" [dtOptions]=\"dtOptions[3]\"\n                    [dtTrigger]=\"dtTrigger3\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.exam_type' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.month' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.exam-date' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.quota' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tableExamTPA?.length != 0\">\n                      <tr *ngFor=\"let data of tableExamTPA; let i = index;\">\n                        <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                        <td class=\"center-table\">{{ data.exam_type }}</td>\n                        <td class=\"center-table\">{{ data.exam_date | date: 'MMMM' }}</td>\n                        <td class=\"center-table\">{{ data.exam_date | date: 'dd/MM/yyyy' }}</td>\n                        <td class=\"center-table\">{{ data.quota }}</td>\n                        <td class=\"center-table\">\n                          <button class=\"btn btn-warning btn-sm btn-round has-ripple\"\n                            (click)=\"openFormTypeDataTPA(data, 'edit');\">\n                            <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' |\n                              translate}}</span>\n                          </button>\n                          <button class=\"btn btn-danger btn-sm btn-round has-ripple m-1\"\n                            (click)=\"deleteExamsTPADatas(data)\">\n                            <i class=\"icofont icofont-ui-delete\"></i> <span class=\"d-sm-none\"> {{'ROOT.delete' |\n                              translate}}</span>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableExamTPA?.length == 0 && !loadtableExamTPA\">\n                      <tr>\n                        <td colspan=\"6\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableExamTPA?.length == 0 && loadtableExamTPA\">\n                      <tr>\n                        <td colspan=\"6\" class=\"no-data-available text-center\">Loading Data....</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </app-card> -->\n          <div class=\"col text-center mt-3\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep><i\n                class=\"icofont icofont-curved-left\"></i> {{'ROOT.back' | translate}}</button>\n            <button type=\"button\" class=\"btn btn-primary btn-sm m-1\" (click)=\"goToStep3()\"\n              [disabled]=\"loadtableExamLocData || loadtableExamTimeData\">\n              {{'ROOT.next' | translate}} <i class=\"icofont icofont-curved-right\"></i></button>\n          </div>\n        </wizard-step>\n        <wizard-step stepTitle=\"{{'CONTENT.document-requirements' | translate}}\" navigationSymbol=\"3\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-12\">\n              <app-card cardTitle=\"{{ 'CONTENT.document-requirements' | translate }}\" cardClass=\"card-datatable\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\"\n                [loading]=\"loadtableSelectionDocumentData\">\n                <form class=\"md-float-material form-material\" action=\"javascript:\">\n                  <div class=\"row p-2\">\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group mb-2\">\n                        <ng-select name=\"activeStatusStep4\" [allowClear]=\"false\"\n                          [placeholder]=\"'CONTENT.active-status' | translate\" [ngClass]=\"'custom bg-white'\"\n                          [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"activeStatusStep4\"\n                          (deselected)=\"onDeselected('activeStatusStep4')\" [options]=\"listActiveStatusFilters\"\n                          (selected)=\"applyFiltersDocumentReq(activeStatusStep4)\"></ng-select>\n                      </div>\n                    </div>\n                    <div class=\"col-9 text-center text-md-right\">\n                      <button class=\"btn btn-success btn-sm btn-round has-ripple\"\n                        (click)=\"openFormDocument(null, 'input')\">\n                        <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-document' | translate}}\n                      </button>\n                    </div>\n                  </div>\n                </form>\n                <div class=\"table-responsive pb-4\">\n                  <table datatable class=\"table table-striped table-hover\" [dtOptions]=\"dtOptions[4]\"\n                    [dtTrigger]=\"dtTrigger4\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                        <th scope=\"col\">{{ 'CONTENT.document-name' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.document-type' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">\n                          {{ 'CONTENT.active-status' | translate}}\n                        </th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tableDocumentReq?.length != 0\">\n                      <tr *ngFor=\"let data of tableDocumentReq; let i = index;\">\n                        <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                        <td>{{ data.document_name }}</td>\n                        <td class=\"center-table\">\n                          <span class=\"badge badge-{{ data.required === true ? 'primary' : 'secondary' }}\">{{\n                            data.required === true ? ('CONTENT.mandatory-required' | translate) :\n                            ('CONTENT.mandatory-not-required' | translate)\n                            }}\n                          </span>\n                        <td class=\"center-table\">\n                          <span class=\"badge badge-{{ data.active_status === true ? 'success' : 'danger' }}\">{{\n                            data.active_status === true ? ('ROOT.active' | translate) : ('ROOT.nonactive' | translate)\n                            }}\n                          </span>\n                        <td class=\"center-table\">\n                          <button class=\"btn btn-warning btn-sm btn-round has-ripple\" [placement]=\"'top'\"\n                            ngbTooltip=\"{{'ROOT.edit' | translate}}\" (click)=\"openFormDocument(data, 'edit')\">\n                            <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' |\n                              translate}}</span>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableDocumentReq?.length == 0 && !loadtableSelectionDocumentData\">\n                      <tr>\n                        <td colspan=\"5\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableDocumentReq?.length == 0 && loadtableSelectionDocumentData\">\n                      <tr>\n                        <td colspan=\"5\" class=\"no-data-available text-center\">Loading Data....</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </app-card>\n              <div class=\"col text-center\">\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep><i\n                    class=\"icofont icofont-curved-left\"></i> {{'ROOT.back' | translate}}</button>\n                <button type=\"button\" class=\"btn btn-primary btn-sm m-1\" (click)=\"goToStep5()\"\n                  [disabled]=\"loadtableSelectionDocumentData\">\n                  {{'ROOT.next' | translate}} <i class=\"icofont icofont-curved-right\"></i></button>\n              </div>\n            </div>\n          </div>\n        </wizard-step>\n        <wizard-step stepTitle=\"{{'CONTENT.pin-price-data' | translate}}\" navigationSymbol=\"4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-alert type=\"info\" class=\"text-justify\">{{ 'CONTENT.info-pin-price-active' | translate}}</app-alert>\n              <app-card cardTitle=\"{{ 'CONTENT.pin-price-data' | translate }}\" cardClass=\"card-datatable\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\"\n                [loading]=\"loadtablePINPriceData\">\n                <form class=\"md-float-material form-material\" action=\"javascript:\">\n                  <div class=\"row p-2\">\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group mb-2\">\n                        <ng-select name=\"activeStatusStep5\" [allowClear]=\"false\"\n                          [placeholder]=\"'CONTENT.active-status' | translate\" [ngClass]=\"'custom bg-white'\"\n                          [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"activeStatusStep5\"\n                          (deselected)=\"onDeselected('activeStatusStep5')\" [options]=\"listActiveStatusFilters\"\n                          (selected)=\"applyFiltersPinPrice(activeStatusStep5)\"></ng-select>\n                      </div>\n                    </div>\n                    <div class=\"col-9 text-center text-md-right\">\n                      <button class=\"btn btn-success btn-sm btn-round has-ripple\"\n                        (click)=\"openFormPinPrice(null, 'input')\" [disabled]=\"isDataPinPriceActive\">\n                        <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-pin-price' | translate}}\n                      </button>\n                    </div>\n                  </div>\n                </form>\n                <div class=\"table-responsive pb-5\">\n                  <table datatable class=\"table table-striped table-hover\" [dtOptions]=\"dtOptions[5]\"\n                    [dtTrigger]=\"dtTrigger5\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.medical-type' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.pin-price' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.max-program-study' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.active-status' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tablePinPrice?.length != 0\">\n                      <tr *ngFor=\"let data of tablePinPrice; let i = index;\">\n                        <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                        <td class=\"center-table\">{{ data.is_medical === true ? 'Medis' : 'Non Medis'}}</td>\n                        <td class=\"center-table\">{{ data.price | currency:'Rp':'symbol':'1.0-0' }}</td>\n                        <td class=\"center-table\">{{ data.maks_study_program }}</td>\n                        <td class=\"center-table\">\n                          <span class=\"badge badge-{{ data.active_status === true ? 'success' : 'danger' }}\">{{\n                            data.active_status === true ? ('ROOT.active' | translate) : ('ROOT.nonactive' | translate)\n                            }}\n                          </span>\n                        </td>\n                        <td class=\"center-table\">\n                          <button class=\"btn btn-warning btn-sm btn-round has-ripple\" [placement]=\"'top'\"\n                            ngbTooltip=\"{{'ROOT.edit' | translate}}\" (click)=\"openFormPinPrice(data, 'edit')\">\n                            <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' |\n                              translate}}</span>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tablePinPrice?.length == 0 && !loadtablePINPriceData\">\n                      <tr>\n                        <td colspan=\"6\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tablePinPrice?.length == 0 && loadtablePINPriceData\">\n                      <tr>\n                        <td colspan=\"6\" class=\"no-data-available text-center\">Loading Data....</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </app-card>\n            </div>\n          </div>\n          <div class=\"col text-center\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep><i\n                class=\"icofont icofont-curved-left\"></i> {{'ROOT.back' | translate}}</button>\n            <button type=\"button\" class=\"btn btn-primary btn-sm m-1\" (click)=\"goToStep6()\"\n              [disabled]=\"loadtablePINPriceData || disabledGotoMapingProdi\">\n              {{'ROOT.next' | translate}} <i class=\"icofont icofont-curved-right\"></i></button>\n          </div>\n        </wizard-step>\n        <wizard-step stepTitle=\"{{'CONTENT.study-program-data' | translate}}\" navigationSymbol=\"5\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-card cardTitle=\"{{ 'CONTENT.study-program-data' | translate }}\" cardClass=\"card-datatable\"\n                headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\"\n                [loading]=\"loadtableMappStudyProgramData\">\n                <div class=\"row align-items-center p-2\">\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group mb-0\">\n                      <ng-select name=\"active_status\" [allowClear]=\"false\"\n                        [placeholder]=\"'CONTENT.active-status' | translate\" [ngClass]=\"'custom bg-white'\"\n                        [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"statusfilter\"\n                        (deselected)=\"onDeselected('statusfilter')\" [options]=\"listActiveStatusFilters\"\n                        (selected)=\"applyFilter(statusfilter)\"></ng-select>\n                    </div>\n                  </div>\n                  <div class=\"col-9 text-center text-md-right\">\n                    <button class=\"btn btn-primary btn-sm btn-round has-ripple \"\n                      (click)=\"openFormMappingDataProdi('input')\">\n                      <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-study-program-all' | translate}}\n                    </button>\n                    <button class=\"btn btn-success btn-sm btn-round has-ripple ml-2\"\n                      (click)=\"openFormStudyProgram(null, 'input')\">\n                      <i class=\"icofont icofont-plus\"></i> {{'CONTENT.add-study-program' | translate}}\n                    </button>\n                  </div>\n                </div>\n                <div class=\"table-responsive pb-6\">\n                  <table datatable class=\"table table-hover\" [dtOptions]=\"dtOptions[6]\" [dtTrigger]=\"dtTrigger6\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" class=\"center-table\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}\n                        </th>\n                        <th scope=\"col\">{{ 'CONTENT.faculty-name' | translate}}</th>\n                        <th scope=\"col\">{{ 'CONTENT.study-program-name' | translate}}</th>\n                        <th scope=\"col\">{{ 'CONTENT.is-technic' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.min-SDP2' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.quota' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.active-status' | translate}}</th>\n                        <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n                      </tr>\n                    </thead>\n                    <tbody *ngIf=\"tableStudyProgram?.length != 0\">\n                      <tr *ngFor=\"let data of tableStudyProgram; let i = index;\">\n                        <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                        <td>{{ data.faculty_name }}</td>\n                        <td>{{ data.study_program_name ? data.study_program_name.replace('amp;', ' ') : '-' }}</td>\n                        <td>\n                          <span class=\"badge badge-light-{{ data.is_technic === true ? 'primary' : 'dark' }}\">{{\n                            data.is_technic === true ? ('CONTENT.technic' | translate) : ('CONTENT.non-technic' |\n                            translate)\n                            }}\n                          </span>\n                        </td>\n                        <td class=\"center-table\">{{ data.minimum_donation | currency:'Rp':'symbol':'1.0-0' }}</td>\n                        <td class=\"center-table\">{{ data.quota }}</td>\n                        <td class=\"center-table\">\n                          <span class=\"badge badge-{{ data.active_status === true ? 'success' : 'danger' }}\">{{\n                            data.active_status === true ? ('ROOT.active' | translate) : ('ROOT.nonactive' | translate)\n                            }}\n                          </span>\n                        </td>\n                        <td class=\"center-table\">\n                          <button class=\"btn btn-warning btn-sm btn-round has-ripple\" [placement]=\"'top'\"\n                            ngbTooltip=\"{{'ROOT.edit' | translate}}\" (click)=\"openFormStudyProgram(data, 'edit')\">\n                            <i class=\"icofont icofont-ui-edit\"></i> <span class=\"d-sm-none\"> {{'ROOT.edit' |\n                              translate}}</span>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableStudyProgram?.length == 0 && !loadtableMappStudyProgramData\">\n                      <tr>\n                        <td colspan=\"8\" class=\"no-data-available text-center\">Data tidak ditemukan!</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                    <tbody *ngIf=\"tableStudyProgram?.length == 0 && loadtableMappStudyProgramData\">\n                      <tr>\n                        <td colspan=\"8\" class=\"no-data-available text-center\">Loading Data....</td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                        <td class=\"hidden\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </app-card>\n            </div>\n          </div>\n          <div class=\"col text-center\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep><i\n                class=\"icofont icofont-curved-left\"></i> {{'ROOT.back' | translate}}</button>\n            <button type=\"button\" class=\"btn btn-success btn-sm m-1\" routerLink=\"/adm-ms-selection-data\"\n              [disabled]=\"loadtableMappStudyProgramData\">{{'ROOT.finish' | translate}}\n              <i class=\"icofont icofont-racing-flag-alt\"></i> </button>\n            </div>\n        </wizard-step>\n      </wizard>\n    </app-card>\n  </div>\n</div>\n\n<!-- Forms Modal -->\n<app-ui-modal #examLocModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.add-exam-location' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"examLocModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"examLocMappingDataForm\"\n      (ngSubmit)=\"createExamLocationData()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-location' | translate }}</label>\n            <ng-select name=\"exam_location_id\" [placeholder]=\"'CONTENT.choose-exam-location'|translate\"\n              [ngClass]=\"'custom bg-white'\" formControlName=\"exam_location_id\"\n              [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"locationTime\" [options]=\"listExamLocation\">\n            </ng-select>\n            <label *ngIf=\"!locationTime\" id=\"validation-email-error\"\n              class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'CONTENT.please-choose' |\n              translate }}{{ 'CONTENT.exam-location' | translate }}</label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"examLocModal.hide()\"\n                [disabled]=\"!examLocMappingDataForm.valid || !locationTime\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n\n<!-- Forms Modal -->\n<app-ui-modal #cbtModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\" [loading]=\"loading\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ formType === \"view\" ? (\"ROOT.detail\" | translate)\n      : (\"ROOT.add\" | translate)\n      }} {{'CONTENT.exam-scheduled' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeModalCBT()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"examCbtDataForm\"\n      (ngSubmit)=\"createCBTData()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam_type' | translate }}</label>\n            <!-- <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.exam_type' | translate\" required\n              formControlName=\"exam_type\" readonly> -->\n              <ng-select [(ngModel)]=\"exampSheduler\" name=\"exam_type\" [allowClear]=\"true\" [options]=\"listSettingUjianId\"\n                  [placeholder]=\"'ROOT.choose' | translate\" [ngClass]=\"'custom bg-white'\"\n                  [notFoundMsg]=\"'ROOT.no_data_found' | translate\" [ngModelOptions]=\"{ standalone: true }\"\n                  (selected)=\"examStatusChanged($event)\">\n                </ng-select>\n                \n          </div>\n          <div class=\"form-row\" *ngIf=\"exampSheduler != 1\">\n            <div class=\"form-group col-md-6\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.range-time' | translate }}</label>\n              <input type=\"time\" class=\"form-control\" required formControlName=\"start_date\">\n              <label\n                *ngIf=\"fps.start_date.errors && fps.start_date.errors.required && (fps.start_date.touched || fps.start_date.dirty)\"\n                class=\"error text-danger small form-text\">\n                {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.range-time' | translate }}\n              </label>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label class=\"form-label m-b-0 f-w-600\"></label>\n              <input type=\"time\" class=\"form-control\" required formControlName=\"end_date\" step=\"900\">\n              <label *ngIf=\"fps.end_date.errors && fps.end_date.errors.required && (fps.end_date.touched || fps.end_date.dirty)\"\n                class=\"error text-danger small form-text\">\n                {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.range-time' | translate }}\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-date' | translate }} <span class=\"required\">*</span></label>\n            <input type=\"date\" class=\"form-control\" [placeholder]=\"'CONTENT.exam-date' | translate\" required [readonly]=\"formType === 'view'\"\n              formControlName=\"exam_date\" (change)=\"changeDateCbt($event)\">\n            <label\n              *ngIf=\"fcbt.exam_date.errors && fcbt.exam_date.errors.required && (fcbt.exam_date.touched || fcbt.exam_date.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.exam-date' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.quota' | translate }} <span class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"quota\" min=\"0\" maxlength=\"5\" [readonly]=\"formType === 'view'\">\n            <label *ngIf=\"fcbt.quota.errors && fcbt.quota.errors.required && (fcbt.quota.touched || fcbt.quota.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.quota' |\n              translate }}</label>\n            <label *ngIf=\"fcbt.quota.errors && fcbt.quota.errors.pattern && (fcbt.quota.touched || fcbt.quota.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.number-only' | translate}}\n            </label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"closeModalCBT()\">\n              <i class=\"ti-close\"></i> {{ 'ROOT.close' | translate }}\n            </button>\n              <button *ngIf=\"formType === 'input'\" type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!examCbtDataForm.valid || loading || haveNoDataCbt\">\n                <span *ngIf=\"loading\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n                <span *ngIf=\"loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!loading\" class=\"btn-text\">\n                  <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n                </span>\n              </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #cbtDetailsModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-lg\" [hideFooter]=\"true\"\n  [loading]=\"loadtableExamCBTDetails || loadingSection\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.session' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeCbtModalsDetails()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\">\n      <div *ngIf=\"!isRaportCategory\" class=\"row align-items-center mb-2 mt-1 pr-2\">\n        <div class=\"col-12 text-center text-md-right\">\n          <button class=\"btn btn-success btn-sm btn-round has-ripple\" (click)=\"createMoodleGroup()\" [disabled]=\"haveMoodleGroup\">\n            <i class=\"icofont icofont-check-circled\"></i> {{'CONTENT.moodle-group' | translate}}\n          </button>\n        </div>\n      </div>\n      <div class=\"table-responsive pb-6\">\n        <table class=\"table table-striped table-hover table-sm\">\n          <thead class=\"thead-light bg-primarys\">\n            <tr>\n              <th scope=\"col\" class=\"center-table\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n              <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.session' | translate}}</th>\n              <th class=\"center-table\" scope=\"col\">{{ 'CONTENT.start-time' | translate}}</th>\n              <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.end-time' | translate}}</th>\n              <th class=\"center-table\" scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tableExamCBTDetails?.length != 0\">\n            <tr *ngFor=\"let data of tableExamCBTDetails; let i = index;\">\n              <th class=\"center-table\" scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n              <td class=\"center-table\">\n                <span *ngIf=\"data.type === '1'\">Sesi 1</span>\n                <span *ngIf=\"data.type === '2'\">Sesi 2</span>\n                <span *ngIf=\"data.type === '3'\">Sesi 3</span>\n              </td>\n              <td class=\"center-table\">{{ data.session_start }}</td>\n              <td class=\"center-table\">{{ data.session_end }}</td>\n              <td class=\"center-table\">\n                <button *ngIf=\"data.session_start == null && data.session_end == null\" class=\"btn btn-warning btn-sm btn-round has-ripple\" (click)=\"openDetailsCBTForm(data, 'edit')\">\n                  <i class=\"icofont icofont-ui-edit\"></i>\n                </button>\n                <button *ngIf=\"data.session_start !== null && data.session_end !== null\" class=\"btn btn-primary btn-sm btn-round has-ripple\" (click)=\"openDetailsCBTForm(data, 'view')\">\n                  <i class=\"icofont icofont-eye-alt\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"!isRaportCategory\">\n        <app-alert *ngIf=\"!haveDataSessionOneTwoThree && !haveMoodleGroup\" type=\"warning\" class=\"text-justify\">\n          {{ 'CONTENT.warning' | translate}} <br> {{ 'CONTENT.info-cbt-data-1' | translate}} {{'CONTENT.moodle-group' | translate }}!</app-alert>\n        <app-alert *ngIf=\"haveDataSessionOneTwoThree && !haveMoodleGroup\" type=\"success\" class=\"text-justify\">\n          {{ 'CONTENT.success' | translate}} <br> {{ 'CONTENT.info-cbt-data-2' | translate}} {{'CONTENT.moodle-group' | translate }}!</app-alert>\n        <app-alert *ngIf=\"haveMoodleGroup\" type=\"primary\" class=\"text-justify\">\n          {{ 'CONTENT.info' | translate}}! <br> {{ 'CONTENT.info-cbt-data-3' | translate}}.</app-alert>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #cbtSessionModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ formType == 'edit' ? (\"ROOT.edit\" | translate) : ('ROOT.detail' | translate) }} {{'CONTENT.add-exam-time' | translate}} </h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeDetailsCBTSession()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"examCbtDetailsDataForm\"\n      (ngSubmit)=\"createCBTDetailsDataSession()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <app-alert *ngIf=\"formType == 'edit'\" type=\"warning\" class=\"text-justify\">\n            {{ 'CONTENT.warning' | translate}} <br> {{ 'CONTENT.info-cbt-data' | translate}}</app-alert>\n         \n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.start-time' | translate }} <span\n              class=\"required\">*</span></label>\n            <input type=\"time\" class=\"form-control\" name=\"session_start_time\" required\n              formControlName=\"session_start_time\" [readonly]=\"formType == 'view'\">\n            <label\n              *ngIf=\"fcbtdet.session_start_time.errors && fcbtdet.session_start_time.errors.required && (fcbtdet.session_start_time.touched || fcbtdet.session_start_time.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.start-time'\n              | translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.end-time' | translate }} <span\n              class=\"required\">*</span></label>\n            <input type=\"time\" class=\"form-control\" name=\"session_end_time\" required formControlName=\"session_end_time\" [readonly]=\"formType == 'view'\">\n            <label\n              *ngIf=\"fcbtdet.session_end_time.errors && fcbtdet.session_end_time.errors.required && (fcbtdet.session_end_time.touched || fcbtdet.session_end_time.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.end-time' |\n              translate }}</label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <button *ngIf=\"formType ==='view'\" type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"closeDetailsCBTSession()\">\n              <i class=\"ti-close\"></i> {{ 'ROOT.close' | translate }}\n          </button>\n              <button *ngIf=\"formType ==='edit'\" type=\"submit\" class=\"btn btn-warning btn-sm\" [disabled]=\"loading ||examCbtDetailsDataForm.invalid\">\n                <span *ngIf=\"loading\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n                <span *ngIf=\"loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!loading\" class=\"btn-text\">\n                  <i class=\"ti-pencil\"></i> {{ 'ROOT.edit' | translate }}\n                </span>\n              </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #psikotestModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ formType === \"edit\" ? (\"ROOT.edit\" | translate)\n      : (\"ROOT.add\" | translate)\n      }} {{'CONTENT.add-exam-time' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closePsikotestModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"examPsikotestDataForm\"\n      (ngSubmit)=\"createPsikotestData()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam_type' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.exam_type' | translate\" required\n              formControlName=\"exam_type\" readonly>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-date' | translate }}</label>\n            <input type=\"date\" class=\"form-control\" [placeholder]=\"'CONTENT.exam-date' | translate\" required\n              formControlName=\"exam_date\">\n            <label\n              *ngIf=\"fps.exam_date.errors && fps.exam_date.errors.required && (fps.exam_date.touched || fps.exam_date.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.exam-date' | translate }}\n            </label>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.range-time' | translate }}</label>\n              <input type=\"time\" class=\"form-control\" required formControlName=\"start_date\">\n              <label\n                *ngIf=\"fps.start_date.errors && fps.start_date.errors.required && (fps.start_date.touched || fps.start_date.dirty)\"\n                class=\"error text-danger small form-text\">\n                {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.range-time' | translate }}\n              </label>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label class=\"form-label m-b-0 f-w-600\"></label>\n              <input type=\"time\" class=\"form-control\" required formControlName=\"end_date\" step=\"900\">\n              <label\n                *ngIf=\"fps.end_date.errors && fps.end_date.errors.required && (fps.end_date.touched || fps.end_date.dirty)\"\n                class=\"error text-danger small form-text\">\n                {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.range-time' | translate }}\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.quota' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" name=\"quota\" required formControlName=\"quota\" min=\"1\" max=\"32767\"\n              oninput=\"this.value=this.value.replace(/[^0-9]/g,'');\">\n            <label *ngIf=\"fps.quota.errors && fps.quota.errors.required && (fps.quota.touched || fps.quota.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.quota' |\n              translate }}</label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!examPsikotestDataForm.valid || loading\">\n                <span *ngIf=\"loading\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n                <span *ngIf=\"loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!loading\" class=\"btn-text\">\n                  <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n                </span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #interviewModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ formType === \"edit\" ? (\"ROOT.edit\" | translate)\n      : (\"ROOT.add\" | translate)\n      }} {{'CONTENT.add-exam-time' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeInterviewModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"examInterviewDataForm\"\n      (ngSubmit)=\"createInterviewData()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam_type' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.exam_type' | translate\" required\n              formControlName=\"exam_type\" readonly>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-date' | translate }}</label>\n            <input type=\"date\" class=\"form-control\" [placeholder]=\"'CONTENT.exam-date' | translate\" required\n              formControlName=\"exam_date\">\n            <label\n              *ngIf=\"fint.exam_date.errors && fint.exam_date.errors.required && (fint.exam_date.touched || fint.exam_date.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.exam-date' | translate }}\n            </label>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.range-time' | translate }}</label>\n              <input type=\"time\" class=\"form-control\" required formControlName=\"start_date\">\n              <label\n                *ngIf=\"fint.start_date.errors && fint.start_date.errors.required && (fint.start_date.touched || fint.start_date.dirty)\"\n                class=\"error text-danger small form-text\">\n                {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.range-time' | translate }}\n              </label>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label class=\"form-label m-b-0 f-w-600\"></label>\n              <input type=\"time\" class=\"form-control\" required formControlName=\"end_date\" step=\"900\">\n              <label\n                *ngIf=\"fint.end_date.errors && fint.end_date.errors.required && (fint.end_date.touched || fint.end_date.dirty)\"\n                class=\"error text-danger small form-text\">\n                {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.range-time' | translate }}\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.quota' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" name=\"quota\" required formControlName=\"quota\" min=\"1\" max=\"32767\"\n              oninput=\"this.value=this.value.replace(/[^0-9]/g,'');\">\n            <label *ngIf=\"fint.quota.errors && fint.quota.errors.required && (fint.quota.touched || fint.quota.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.quota' |\n              translate }}</label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!examInterviewDataForm.valid || loading\">\n                <span *ngIf=\"loading\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n                <span *ngIf=\"loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!loading\" class=\"btn-text\">\n                  <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n                </span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #tpaModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ formType === \"edit\" ? (\"ROOT.edit\" | translate)\n      : (\"ROOT.add\" | translate)\n      }} {{'CONTENT.add-exam-time' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeTPAModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"examTPADataForm\"\n      (ngSubmit)=\"createTPAData()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam_type' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.exam_type' | translate\" required\n              formControlName=\"exam_type\" readonly>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-date' | translate }}</label>\n            <input type=\"date\" class=\"form-control\" [placeholder]=\"'CONTENT.exam-date' | translate\" required\n              formControlName=\"exam_date\">\n            <label\n              *ngIf=\"ftpa.exam_date.errors && ftpa.exam_date.errors.required && (ftpa.exam_date.touched || ftpa.exam_date.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.exam-date' | translate }}\n            </label>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.range-time' | translate }}</label>\n              <input type=\"time\" class=\"form-control\" required formControlName=\"start_date\">\n              <label\n                *ngIf=\"ftpa.start_date.errors && ftpa.start_date.errors.required && (ftpa.start_date.touched || ftpa.start_date.dirty)\"\n                class=\"error text-danger small form-text\">\n                {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.range-time' | translate }}\n              </label>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label class=\"form-label m-b-0 f-w-600\"></label>\n              <input type=\"time\" class=\"form-control\" required formControlName=\"end_date\" step=\"900\">\n              <label\n                *ngIf=\"ftpa.end_date.errors && ftpa.end_date.errors.required && (ftpa.end_date.touched || ftpa.end_date.dirty)\"\n                class=\"error text-danger small form-text\">\n                {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.range-time' | translate }}\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.quota' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" name=\"quota\" required formControlName=\"quota\" min=\"1\" max=\"32767\"\n              oninput=\"this.value=this.value.replace(/[^0-9]/g,'');\">\n            <label *ngIf=\"ftpa.quota.errors && ftpa.quota.errors.required && (ftpa.quota.touched || ftpa.quota.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.quota' |\n              translate }}</label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!examTPADataForm.valid || loading\">\n                <span *ngIf=\"loading\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n                <span *ngIf=\"loading\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!loading\" class=\"btn-text\">\n                  <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n                </span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #examTimeModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ formType === \"edit\" ? (\"ROOT.edit\" | translate)\n      : (\"ROOT.add\" | translate)\n      }} {{'CONTENT.add-exam-time' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"examTimeModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"examTimeMappingDataForm\"\n      (ngSubmit)=\"createExamTimeData()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.exam-date' | translate }}</label>\n            <input type=\"date\" class=\"form-control\" [placeholder]=\"'CONTENT.exam-date' | translate\" required\n              formControlName=\"exam_date\">\n            <label\n              *ngIf=\"fet.exam_date.errors && fet.exam_date.errors.required && (fet.exam_date.touched || fet.exam_date.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.exam-date' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.session' | translate }}</label>\n            <ng-select name=\"session\" [placeholder]=\"'CONTENT.session'|translate\" [ngClass]=\"'custom bg-white'\"\n              formControlName=\"session\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"session\"\n              [options]=\"listSession\"></ng-select>\n            <label *ngIf=\"!session\" id=\"validation-email-error\"\n              class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.required' |\n              translate }}</label>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.range-time' | translate }}</label>\n              <input type=\"time\" class=\"form-control\" required formControlName=\"start_date\">\n              <label\n                *ngIf=\"fet.start_date.errors && fet.start_date.errors.required && (fet.start_date.touched || fet.start_date.dirty)\"\n                class=\"error text-danger small form-text\">\n                {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.range-time' | translate }}\n              </label>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label class=\"form-label m-b-0 f-w-600\"></label>\n              <input type=\"time\" class=\"form-control\" required formControlName=\"end_date\" step=\"900\">\n              <label\n                *ngIf=\"fet.end_date.errors && fet.end_date.errors.required && (fet.end_date.touched || fet.end_date.dirty)\"\n                class=\"error text-danger small form-text\">\n                {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.range-time' | translate }}\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.quota' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" name=\"quota\" required formControlName=\"quota\" min=\"1\" max=\"32767\"\n              oninput=\"this.value=this.value.replace(/[^0-9]/g,'');\">\n            <label *ngIf=\"fet.quota.errors && fet.quota.errors.required && (fet.quota.touched || fet.quota.dirty)\"\n              class=\"error text-danger small form-text\">{{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.quota' |\n              translate }}</label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"examTimeModal.hide()\"\n                [disabled]=\"!examTimeMappingDataForm.valid || !session\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #documentRequirementsModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [loading]=\"loadingModals\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ formType === \"edit\" ? (\"ROOT.edit\" | translate)\n      : (\"ROOT.add\" | translate)\n      }}\n      {{ 'CONTENT.add-document-requirements' | translate }}\n    </h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeDocumentReqModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"documentRequirementsForm\"\n      (ngSubmit)=\"createDocumentRequirementsData()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.choose-document-type' | translate }}</label>\n            <ng-select name=\"document_type\" [placeholder]=\"'CONTENT.choose-document-type' | translate\"\n              [ngClass]=\"'custom bg-white index-up'\" required formControlName=\"document_type_id\"\n              [(ngModel)]=\"documentType\" (selected)=\"changeDocumentRequirementType($event)\"\n              [options]=\"listDocumentType\"></ng-select>\n            <label *ngIf=\"!documentType\" class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.document-type' | translate }}\n            </label>\n            <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n              'CONTENT.please-choose' | translate }} {{ 'CONTENT.document-type' | translate }}</label>\n          </div>\n          <div *ngIf=\"isReport || isUtbkDocument\" class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label ml-1 m-b-0 f-w-600\">{{ isUtbkDocument === true ? ('CONTENT.saintek' | translate) : ('CONTENT.technic' | translate) }}</label>\n                <div class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck1\" formControlName=\"math\"\n                    (change)=\"onCheckMath($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck1\">Matematika</label>\n                </div>\n                <div [hidden]=\"isUtbkDocument\" class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck2\" formControlName=\"bahasa\"\n                    (change)=\"onCheckBahasa($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck2\">Bahasa</label>\n                </div>\n                <div [hidden]=\"isUtbkDocument\"  class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck3\" formControlName=\"eng\"\n                    (change)=\"onCheckEnglish($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck3\">English</label>\n                </div>\n                <div class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck4\" formControlName=\"physics\"\n                    (change)=\"onCheckPhysics($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck4\">Fisika</label>\n                </div>\n                <div class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck5\" formControlName=\"chemicals\"\n                    (change)=\"onCheckChemical($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck5\">Kimia</label>\n                </div>\n                <div class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck6\" formControlName=\"biology\"\n                    (change)=\"onCheckBiology($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck6\">Biologi</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group mb-2 m\">\n                <label class=\"form-label ml-1 m-b-0 f-w-600\">{{isUtbkDocument === true ? ('CONTENT.soshum' | translate) : ('CONTENT.non-technic' | translate)}}</label>\n                <div class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck7\" formControlName=\"math2\"\n                    (change)=\"onCheckMathNonTechnic($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck7\">Matematika</label>\n                </div>\n                <div [hidden]=\"isUtbkDocument\"  class=\"form-check  ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck8\" formControlName=\"bahasa2\"\n                    (change)=\"onCheckBahasaNonTechnic($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck8\">Bahasa</label>\n                </div>\n                <div [hidden]=\"isUtbkDocument\" class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck9\" formControlName=\"eng2\"\n                    (change)=\"onCheckEnglishNonTechnic($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck9\">English</label>\n                </div>\n                <div class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck10\" formControlName=\"economy\"\n                    (change)=\"onCheckEconomyNonTechnic($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck10\">Ekonomi</label>\n                </div>\n                <div class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck11\" formControlName=\"sosiology\"\n                    (change)=\"onCheckSociologicalNonTechnic($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck11\">Sosiologi</label>\n                </div>\n                <div class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck12\" formControlName=\"geography\"\n                    (change)=\"onCheckGeographyNonTechnic($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck12\">Geografi</label>\n                </div>\n                <div *ngIf=\"isUtbkDocument\" class=\"form-check ml-4\">\n                  <input class=\"form-check-input mt-0\" type=\"checkbox\" id=\"gridCheck13\" formControlName=\"sejarah\"\n                    (change)=\"onSejarahNonTechnic($event)\">\n                  <label class=\"form-check-label\" for=\"gridCheck13\">Sejarah</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group mb-2\">\n            <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.active-status'| translate}}</h6> <br>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"active_status1\" name=\"active_status\" class=\"custom-control-input\" value=\"1\"\n                formControlName=\"active_status\" required>\n              <label class=\"custom-control-label \" for=\"active_status1\">{{ 'ROOT.yes' | translate }}</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"active_status2\" name=\"active_status\" class=\"custom-control-input\" value=\"0\"\n                [checked]=\"true\" formControlName=\"active_status\" required>\n              <label class=\"custom-control-label\" for=\"active_status2\">{{ 'ROOT.no' | translate }}</label>\n            </div>\n            <label\n              *ngIf=\"fdr.active_status.errors && fdr.active_status.errors.required && (fdr.active_status.touched || fdr.active_status.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.active-status' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.mandatory-doc'| translate}}</h6> <br>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"mandatory\" name=\"mandatory_doc\" class=\"custom-control-input\" value=\"1\"\n                formControlName=\"mandatory_doc\" required>\n              <label class=\"custom-control-label \" for=\"mandatory\">{{ 'ROOT.yes' | translate }}</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"mandatory2\" name=\"mandatory_doc\" class=\"custom-control-input\" value=\"0\"\n                [checked]=\"true\" formControlName=\"mandatory_doc\" required>\n              <label class=\"custom-control-label\" for=\"mandatory2\">{{ 'ROOT.no' | translate }}</label>\n            </div>\n            <label\n              *ngIf=\"fdr.mandatory_doc.errors && fdr.mandatory_doc.errors.required && (fdr.mandatory_doc.touched || fdr.mandatory_doc.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.mandatory-doc' | translate }}\n            </label>\n          </div>\n          <div *ngIf=\"isTranscriptDocument\" class=\"form-group mb-2\">\n            <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.input-nilai'| translate}}</h6> <br>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"inputNilai\" name=\"is_input_nilai\" class=\"custom-control-input\" value=\"1\"\n                formControlName=\"is_input_nilai\" required>\n              <label class=\"custom-control-label \" for=\"inputNilai\">{{ 'ROOT.yes' | translate }}</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"inputNilai2\" name=\"is_input_nilai\" class=\"custom-control-input\" value=\"0\"\n                formControlName=\"is_input_nilai\" required>\n              <label class=\"custom-control-label\" for=\"inputNilai2\">{{ 'ROOT.no' | translate }}</label>\n            </div>\n            <label\n              *ngIf=\"fdr.is_input_nilai.errors && fdr.is_input_nilai.errors.required && (fdr.is_input_nilai.touched || fdr.is_input_nilai.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.input-nilai' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"documentRequirementsForm.invalid\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #pinPriceDataModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ formType === \"edit\" ? (\"ROOT.edit\" | translate)\n      : (\"ROOT.add\" | translate)\n      }}\n      {{ 'CONTENT.pin-price-data' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"pinPriceDataModal.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"pinPriceForm\"\n      (ngSubmit)=\"createDetailPINPriceData()\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.medical-type' | translate }}</label>\n            <ng-select name=\"is_medical\" [placeholder]=\"'CONTENT.medical-type'|translate\" [ngClass]=\"'custom bg-white'\"\n              formControlName=\"is_medical\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"isMedical\"\n              [options]=\"listMedical\"></ng-select>\n            <label *ngIf=\"!isMedical\" id=\"validation-email-error\"\n              class=\"error jquery-validation-error small form-text invalid-feedback\">{{ 'ROOT.required' |\n              translate }}</label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.pin-price' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"pinPrice\" required formControlName=\"price\" currencyMask\n              [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\"\n              [placeholder]=\"'CONTENT.pin-price'|translate\">\n            <label *ngIf=\"fpp.price.errors && fpp.price.errors.required && (fpp.price.touched || fpp.price.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.pin-price' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.max-program-study' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" required formControlName=\"maks_study_program\"\n              [placeholder]=\"'CONTENT.max-program-study'|translate\" min=\"1\" max=\"5\" maxlength=\"1\"\n              oninput=\"this.value=this.value.replace(/[^0-9]/g,'');\">\n            <label\n              *ngIf=\"fpp.maks_study_program.errors && fpp.maks_study_program.errors.required && (fpp.maks_study_program.touched || fpp.maks_study_program.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.max-program-study' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.active-status'| translate}}</h6> <br>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"active_status1\" name=\"active_status\" class=\"custom-control-input\" value=\"1\"\n                formControlName=\"active_status\" required>\n              <label class=\"custom-control-label \" for=\"active_status1\">{{ 'ROOT.yes' | translate }}</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"active_status2\" name=\"active_status\" class=\"custom-control-input\" value=\"0\"\n                [checked]=\"true\" formControlName=\"active_status\" required>\n              <label class=\"custom-control-label\" for=\"active_status2\">{{ 'ROOT.no' | translate }}</label>\n            </div>\n            <label\n              *ngIf=\"fpp.active_status.errors && fpp.active_status.errors.required && (fpp.active_status.touched || fpp.active_status.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.active-status' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"pinPriceDataModal.hide()\"\n                [disabled]=\"pinPriceForm.invalid\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<!-- Forms Modal -->\n<app-ui-modal #studyProgramDataModal [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ formType === \"edit\" ? (\"ROOT.edit\" | translate)\n      : (\"ROOT.add\" | translate)\n      }} {{ 'CONTENT.study-program-data' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"studyProgramDataModal.hide(); \"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"studyProgramForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.study-program' | translate }}</label>\n            <ng-select [placeholder]=\"'CONTENT.choose-study-program'|translate\" [ngClass]=\"'custom bg-white'\"\n              formControlName=\"program_study_id\" required [(ngModel)]=\"studyProgram\"\n              (deselected)=\"onDeselected('studyProgram')\" [options]=\"listStudyProgram\"></ng-select>\n            <label *ngIf=\"!studyProgram\" class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.study-program' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.is-technic' | translate }}</label>\n            <ng-select [placeholder]=\"'CONTENT.is-technic'|translate\" [ngClass]=\"'custom bg-white'\"\n              formControlName=\"is_technic\" required [(ngModel)]=\"isTechnic\" [options]=\"listTechnic\"></ng-select>\n            <label *ngIf=\"!isTechnic\" class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.is-technic' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.quota' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" name=\"quota\" required formControlName=\"quota\"\n              [placeholder]=\"'CONTENT.quota'|translate\" min=\"1\" max=\"32767\"\n              oninput=\"this.value=this.value.replace(/[^0-9]/g,'');\">\n            <label *ngIf=\"fsp.quota.errors && fsp.quota.errors.required && (fsp.quota.touched || fsp.quota.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.quota' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.min-SDP2' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" name=\"minimum_donation\" required formControlName=\"minimum_donation\"\n              [placeholder]=\"'CONTENT.min-SDP2'|translate\" currencyMask\n              [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n            <label\n              *ngIf=\"fsp.minimum_donation.errors && fsp.minimum_donation.errors.required && (fsp.minimum_donation.touched || fsp.minimum_donation.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.min-SDP2' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-2\">\n            <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.active-status'| translate}}</h6> <br>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"active_status1\" name=\"active_status\" class=\"custom-control-input\" value=\"1\"\n                formControlName=\"active_status\" required>\n              <label class=\"custom-control-label \" for=\"active_status1\">{{ 'ROOT.yes' | translate }}</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" id=\"active_status2\" name=\"active_status\" class=\"custom-control-input\" value=\"0\"\n                [checked]=\"true\" formControlName=\"active_status\" required>\n              <label class=\"custom-control-label\" for=\"active_status2\">{{ 'ROOT.no' | translate }}</label>\n            </div>\n            <label\n              *ngIf=\"fsp.active_status.errors && fsp.active_status.errors.required && (fsp.active_status.touched || fsp.active_status.dirty)\"\n              class=\"error text-danger small form-text\">\n              {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.active-status' | translate }}\n            </label>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <div class=\"btn-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"createDetailStudyProgramMappingData1()\"\n                [disabled]=\"studyProgramForm.invalid || !studyProgram || !isTechnic\">\n                <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #studyProgramMappingData [containerClick]=\"false\" [dialogClass]=\"'modal-xl'\" [hideFooter]=\"true\"\n  [loading]=\"loadTableMapping\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.add' | translate }} {{ 'CONTENT.study-program-data' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeStudyProgramMapping()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"mappingStudyProgramForm\">\n      <div class=\"table-responsive pb-6\">\n        <table datatable class=\"table table-striped table-hover\" [dtOptions]=\"dtOptions[7]\" [dtTrigger]=\"dtTrigger7\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" class=\"center-table\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}</th>\n              <th scope=\"col\">{{ 'CONTENT.faculty-name' | translate}}</th>\n              <th scope=\"col\">{{ 'CONTENT.study-program-name' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.is-technic' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.quota' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.min-SDP2' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.active-status' | translate}}</th>\n              <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tableStudyProgramMapping?.length != 0\">\n            <tr *ngFor=\"let data of tableStudyProgramMapping; let i = index;\">\n              <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n              <td>{{ data.faculty_name }}</td>\n              <td>{{ data.study_program_name }}</td>\n              <td class=\"center-table\">\n                <ng-select [placeholder]=\"'CONTENT.is-technic'|translate\" [ngClass]=\"'custom bg-white'\"\n                  formControlName=\"is_technic_mapp\" id=\"select{{data.id}}\" (selected)=\"addTechnic($event)\"\n                  [options]=\"listTechnic\"></ng-select>\n              </td>\n              <td class=\"center-table\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"quota\"\n                  [placeholder]=\"'CONTENT.quota'|translate\">\n              </td>\n              <td class=\"center-table\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"sdp\"\n                  [placeholder]=\"'CONTENT.min-SDP2'|translate\" currencyMask\n                  [options]=\"{prefix: 'Rp', allowZero: true, align: 'left', precision: 0 }\">\n              </td>\n              <td class=\"center-table\">\n                <div class=\"form-group\">\n                  <div class=\"switch switch-success d-inline m-r-10\">\n                    <input type=\"checkbox\" formControlName=\"active_status\" id=\"switch-s-1{{data.id}}\" [checked]=\"checks\"\n                      (change)=\"changeSwitch(data.id, $event)\">\n                    <label for=\"switch-s-1{{data.id}}\" class=\"cr\">\n                    </label>\n                  </div>\n                  <!-- <label for=\"switch-s-1{{data.id}}\" *ngIf=\"checksTechnic2\">Teknik</label> -->\n                  <!-- <label for=\"switch-s-1{{data.id}}\" *ngIf=\"!checksTechnic2\">Non Teknik</label> -->\n                </div>\n                <!-- <div class=\"custom-control custom-switch text-center\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"activeStatus{{ data.id}}\" [value]=\"data.id\"\n                    formControlName=\"active_status\" [checked]=\"checks\" (change)=\"changeSwitch(data.id, $event)\">\n                    <label class=\"custom-control-label\" for=\"activeStatus{{ data.id }}\"></label>\n                  </div> -->\n              </td>\n              <td class=\"center-table\">\n                <button id=\"{{ data.id}}\" class=\"btn btn-primary btn-sm btn-round has-ripple\" [placement]=\"'top'\"\n                  [disabled]=\"mappingStudyProgramForm.invalid\" ngbTooltip=\"{{'ROOT.edit' | translate}}\"\n                  (click)=\"createMappingAllStudyProgram(data);\">\n                  <i class=\"icofont icofont-ui-save\"></i> <span class=\"d-sm-none\"></span> {{'ROOT.save' | translate}}\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n";
    /***/
  },

  /***/
  "./src/app/theme/adm-ms-selection-data/selection-data/selection-data-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/theme/adm-ms-selection-data/selection-data/selection-data-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SelectionDataRoutingModule */

  /***/
  function srcAppThemeAdmMsSelectionDataSelectionDataSelectionDataRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionDataRoutingModule", function () {
      return SelectionDataRoutingModule;
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


    var _selection_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./selection-data.component */
    "./src/app/theme/adm-ms-selection-data/selection-data/selection-data.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _selection_data_component__WEBPACK_IMPORTED_MODULE_2__["SelectionDataComponent"]
    }];

    var SelectionDataRoutingModule = function SelectionDataRoutingModule() {
      _classCallCheck(this, SelectionDataRoutingModule);
    };

    SelectionDataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], SelectionDataRoutingModule);
    /***/
  },

  /***/
  "./src/app/theme/adm-ms-selection-data/selection-data/selection-data.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/theme/adm-ms-selection-data/selection-data/selection-data.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeAdmMsSelectionDataSelectionDataSelectionDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.center-table {\n  text-align: center;\n}\n\n.width-mapping-table {\n  max-width: 200px;\n}\n\n.width-mapping-table-quota {\n  max-width: 100px;\n}\n\n.index-up {\n  z-index: 2 !important;\n}\n\n.required {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL2FkbS1tcy1zZWxlY3Rpb24tZGF0YS9zZWxlY3Rpb24tZGF0YS9zZWxlY3Rpb24tZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvYWRtLW1zLXNlbGVjdGlvbi1kYXRhL3NlbGVjdGlvbi1kYXRhL3NlbGVjdGlvbi1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7QUNLRjs7QURIQTtFQUNFLHFCQUFBO0FDTUY7O0FESkE7RUFDRSxVQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9hZG0tbXMtc2VsZWN0aW9uLWRhdGEvc2VsZWN0aW9uLWRhdGEvc2VsZWN0aW9uLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbnRoe1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmNlbnRlci10YWJsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbi53aWR0aC1tYXBwaW5nLXRhYmxlIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cbi53aWR0aC1tYXBwaW5nLXRhYmxlLXF1b3RhIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cbi5pbmRleC11cCB7XG4gIHotaW5kZXg6IDIgIWltcG9ydGFudDtcbn1cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG4iLCJ0ZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG50aCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uY2VudGVyLXRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2lkdGgtbWFwcGluZy10YWJsZSB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi53aWR0aC1tYXBwaW5nLXRhYmxlLXF1b3RhIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmluZGV4LXVwIHtcbiAgei1pbmRleDogMiAhaW1wb3J0YW50O1xufVxuXG4ucmVxdWlyZWQge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/adm-ms-selection-data/selection-data/selection-data.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/theme/adm-ms-selection-data/selection-data/selection-data.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: SelectionDataComponent */

  /***/
  function srcAppThemeAdmMsSelectionDataSelectionDataSelectionDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionDataComponent", function () {
      return SelectionDataComponent;
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


    var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/admin-management.service */
    "./src/app/_services/admin-management.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/broadcaster.service */
    "./src/app/_services/broadcaster.service.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-archwizard/dist */
    "./node_modules/ng2-archwizard/dist/index.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_12__);

    var SelectionDataComponent =
    /*#__PURE__*/
    function () {
      function SelectionDataComponent(translate, broadcasterService, fb, route, router, chartService, currencyPipe) {
        var _this = this;

        _classCallCheck(this, SelectionDataComponent);

        this.translate = translate;
        this.broadcasterService = broadcasterService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.chartService = chartService;
        this.currencyPipe = currencyPipe;
        this.type = 'default';
        this.dtOptions = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtTrigger3 = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtTrigger4 = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtTrigger5 = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtTrigger6 = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtTrigger7 = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        translate.setDefaultLang(localStorage.getItem('lang'));
        this.translate.get('ROOT.no').subscribe(function (l) {
          _this.no = l;
        });
        this.translate.get('ROOT.yes').subscribe(function (l) {
          _this.yes = l;
        });
        this.translate.get('ROOT.delete_failed').subscribe(function (l) {
          _this.failedDel = l;
        });
        this.translate.get('ROOT.delete_confirmation').subscribe(function (l) {
          _this.sure = l;
        });
        this.translate.get('ROOT.confirmation').subscribe(function (l) {
          _this.confirmation = l;
        });
        this.translate.get('ROOT.delete_success').subscribe(function (l) {
          _this.successDel = l;
        });
        this.translate.get('CONTENT.warning').subscribe(function (l) {
          _this.warning = l;
        });
        this.translate.get('CONTENT.mapping-group-text').subscribe(function (l) {
          _this.mappingGrupText = l;
        });
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translate.setDefaultLang(res.lang);

          _this.translate.get('ROOT.no').subscribe(function (l) {
            _this.no = l;
          });

          _this.translate.get('ROOT.yes').subscribe(function (l) {
            _this.yes = l;
          });

          _this.translate.get('ROOT.delete_failed').subscribe(function (l) {
            _this.failedDel = l;
          });

          _this.translate.get('ROOT.delete_confirmation').subscribe(function (l) {
            _this.sure = l;
          });

          _this.translate.get('ROOT.confirmation').subscribe(function (l) {
            _this.confirmation = l;
          });

          _this.translate.get('ROOT.delete_success').subscribe(function (l) {
            _this.successDel = l;
          });

          _this.translate.get('CONTENT.warning').subscribe(function (l) {
            _this.warning = l;
          });

          _this.translate.get('CONTENT.mapping-group-text').subscribe(function (l) {
            _this.mappingGrupText = l;
          });
        });
        this.formDetailStep1 = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)]),
          category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          // exam_type: new FormControl(''),
          active_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        });
        this.examLocMappingDataForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_location_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        this.examCbtDataForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          quota: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])
        });
        this.examCbtDetailsDataForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          session_start_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          session_end_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          session: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        this.examTypeMappingDataForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          quota: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(32767)])
        });
        this.examInterviewDataForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          quota: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(32767)])
        });
        this.examPsikotestDataForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          quota: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(32767)])
        });
        this.examTPADataForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          quota: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(32767)])
        });
        this.examTimeMappingDataForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          session: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          exam_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          quota: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(32767)])
        });
        this.registrationStepForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          registration_step_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          ordering: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(32767)]),
          active_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        });
        this.documentRequirementsForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          document_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          active_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          mandatory_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          math: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          eng: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          bahasa: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          math2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          eng2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          bahasa2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          physics: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          biology: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          chemicals: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          geography: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          sosiology: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          economy: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          sejarah: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          is_technic: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          is_input_nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        this.mappingStudyProgramForm = fb.group({
          selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          is_technic_mapp: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          quota: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          sdp: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
          study_program: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
          active_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        this.listSession = [{
          value: '1',
          label: 'Sesi 1'
        }, {
          value: '2',
          label: 'Sesi 2'
        }, {
          value: '3',
          label: 'Sesi 3'
        }];
        this.listTechnic = [{
          value: '1',
          label: 'Teknik'
        }, {
          value: '2',
          label: 'Non Teknik'
        }];
        this.listCategoryId = [{
          value: '1',
          label: 'Rapor'
        }, {
          value: '2',
          label: 'CBT'
        }, {
          value: '3',
          label: 'Beasiswa'
        }, {
          value: '4',
          label: 'Portofolio'
        }, {
          value: '5',
          label: 'Transfer'
        }, {
          value: '6',
          label: 'Perolehan Credit'
        }, {
          value: '7',
          label: 'UTBK'
        }];
        this.listSettingUjianId = [{
          value: '1',
          label: 'Pengaturan jadwal ujian CBT'
        }, {
          value: '2',
          label: 'Pengaturan jadwal ujian Psikotes'
        }, {
          value: '3',
          label: 'Pengaturan jadwal ujian wawancara'
        }, {
          value: '4',
          label: 'Pengaturan jadwal ujian TPA'
        }, {
          value: '5',
          label: 'Transfer'
        }, {
          value: '6',
          label: 'Perolehan Credit'
        }, {
          value: '7',
          label: 'UTBK'
        }];
        this.listMedical = [{
          value: '0',
          label: 'Non Medis'
        }, {
          value: '1',
          label: 'Medis'
        }];
        this.pageType = '';
        this.pageTypeInit = '';
        this.resetWizard = false;
        this.loading = false;
        this.loadingCard = false;
        this.loadFilter = false;
        this.loadtableExamTimeData = false;
        this.loadtableSelectionStepData = false;
        this.loadtableSelectionDocumentData = false;
        this.loadtableMappStudyProgramData = false;
        this.loadTableMappingAllStudyProgramData = false;
        this.loadtablePINPriceData = false;
        this.loadTableMapping = false;
        this.checks = true;
        this.checksTechnic = false;
        this.checksTechnic2 = false;
        this.isDataPinPriceActive = false;
        this.isHiddenLoc = false;
        this.isPsikotest = false;
        this.isInterview = false;
        this.isTPA = false;
        this.isReport = false;
        this.isTranscriptDocument = false;
        this.isUtbkDocument = false;
        this.isTranscriptDocument = false;
        this.isReport = false;
        this.isBackStep = false;
        this.isApplyFilter = false;
        this.haveDataSessionOneTwoThree = false;
        this.haveMoodleGroup = false;
        this.tableExamCBT = [];
        this.tableExamPsikotest = [];
        this.tableExamInterview = []; // this.tableExamCBTDetails = [];

        this.tableDocumentReq = [];
        this.tableExamTPA = [];
        this.tablePinPrice = [];
        this.tableStudyProgram = [];
        this.mappingTechnic = [{
          math: false,
          physics: false,
          biology: false,
          chemical: false,
          bahasa: false,
          english: false,
          economy: false,
          geography: false,
          sociological: false,
          historical: false
        }];
        this.mappingNonTechnic = [{
          math: false,
          physics: false,
          biology: false,
          chemical: false,
          bahasa: false,
          english: false,
          economy: false,
          geography: false,
          sociological: false,
          historical: false
        }];
        this.mappingUtbkScience = [{
          math: false,
          physics: false,
          biology: false,
          chemical: false,
          economy: false,
          geography: false,
          sociological: false,
          historical: false
        }];
        this.mappingUtbkNonScience = [{
          math: false,
          physics: false,
          biology: false,
          chemical: false,
          economy: false,
          geography: false,
          sociological: false,
          historical: false
        }];
        this.id = this.route.snapshot.paramMap.get('id');
        this.activestatusid = this.route.snapshot.paramMap.get('activestatusid');
        this.listActiveStatusFilters = [{
          label: 'ALL',
          value: ''
        }, {
          label: 'ACTIVE',
          value: '1'
        }, {
          label: 'NONACTIVE',
          value: '0'
        }];
      }

      _createClass(SelectionDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageType = this.id ? 'edit' : 'create';
          this.pageTypeInit = this.id ? 'edit' : 'create';
          this.pinPriceForm = this.fb.group({
            selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            maks_study_program: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(1)])),
            active_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_medical: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
          });
          this.studyProgramForm = this.fb.group({
            selection_path_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            program_study_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_technic: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            minimum_donation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            quota: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            active_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
          });
          this.dtOptions[0] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            initComplete: function initComplete() {}
          };
          this.dtOptions[1] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            initComplete: function initComplete() {}
          };
          this.dtOptions[2] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            initComplete: function initComplete() {}
          };
          this.dtOptions[3] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            initComplete: function initComplete() {}
          };
          this.dtOptions[4] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            initComplete: function initComplete() {}
          };
          this.dtOptions[5] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            initComplete: function initComplete() {}
          };
          this.dtOptions[6] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            initComplete: function initComplete() {}
          };
          this.dtOptions[7] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            initComplete: function initComplete() {}
          };
          this.dtOptions[8] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            initComplete: function initComplete() {}
          };
          this.dtOptions[9] = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            destroy: true,
            language: {
              info: 'Show _START_ to _END_ from _TOTAL_ data',
              zeroRecords: 'Data yang anda cari tidak ditemukan!',
              emptyTable: 'Data tidak ditemukan!',
              lengthMenu: 'Show _MENU_ data',
              processing: 'Loading . . . . .',
              infoFiltered: '',
              infoEmpty: ''
            },
            initComplete: function initComplete() {}
          }; // this.dtTrigger.next();
          // this.dtTrigger1.next();
          // this.dtTrigger2.next();
          // this.dtTrigger3.next();
          // this.dtTrigger4.next();
          // this.dtTrigger5.next();
          // this.dtTrigger6.next();
          // this.dtTrigger7.next();
          // this.dtTrigger8.next();
          // this.dtTrigger9.next();
          // filtering list dropdown

          this.loadRegistrationStepData();
          this.loadDocumentTypeData();
          this.loadFacultyData(); // this.loadExamTypeDataFilter();

          this.pageType === 'edit' && this.loadDetailSelectionPath();
        }
      }, {
        key: "addTechnic",
        value: function addTechnic(val) {
          this.isTechnicMapp = val.value;
        }
      }, {
        key: "onDeselected",
        value: function onDeselected(val) {
          switch (val) {
            case 'activeStatusStep3':
              this.activeStatusStep3 = '1';
          }
        }
      }, {
        key: "loadCityData",
        value: function loadCityData() {
          var _this2 = this;

          this.loadFilter = true;
          this.chartService.getCityData('').subscribe(function (filterArray) {
            var dataCity = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id,
                label: filterArray[i].city
              };
              dataCity.push(x);
              _this2.listCity = dataCity;
            }

            _this2.loadFilter = false;
          }, function (err) {
            _this2.loadError();

            _this2.loadFilter = false;
          });
        }
      }, {
        key: "loadExamDetailData",
        value: function loadExamDetailData() {
          var _this3 = this;

          this.loadFilter = true;
          var data = {
            filter: ''
          };
          this.chartService.getExamLocationData(data).subscribe(function (filterArray) {
            var dataExamLocation = [];
            var x;

            for (var i = 0; i < filterArray.data.length; i++) {
              x = {
                value: filterArray.data[i].id,
                label: filterArray.data[i].location
              };
              dataExamLocation.push(x);
              _this3.listExamLocation = dataExamLocation;
            }

            _this3.loadFilter = false;
          }, function (err) {
            _this3.loadError();

            _this3.loadFilter = false;
          });
        }
      }, {
        key: "loadRegistrationStepData",
        value: function loadRegistrationStepData() {
          var _this4 = this;

          this.loadFilter = true;
          this.chartService.getRegistrationStepData().subscribe(function (filterArray) {
            var dataRegistrationStep = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].step
              };
              dataRegistrationStep.push(x);
              _this4.listRegistrationStep = dataRegistrationStep;
            }

            _this4.loadFilter = false;
          }, function (err) {
            _this4.loadError();

            _this4.loadFilter = false;
          });
        }
      }, {
        key: "loadDocumentTypeData",
        value: function loadDocumentTypeData() {
          var _this5 = this;

          this.loadFilter = true;
          var data = {
            nama_dokumen: ''
          };
          this.chartService.getDocumentTypeData(data).subscribe(function (filterArray) {
            var dataDocumentType = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].name
              };
              dataDocumentType.push(x);
              _this5.listDocumentType = dataDocumentType;
            }

            _this5.loadFilter = false;
          }, function (err) {
            _this5.loadError();

            _this5.loadFilter = false;
          });
        }
      }, {
        key: "loadStudyProgramData",
        value: function loadStudyProgramData() {
          var _this6 = this;

          this.loadFilter = true;
          this.chartService.getProgramStudyDataWithParams("?selection_path_id=".concat(this.id, "&show_all=1")).subscribe(function (filterArray) {
            var dataStudyProgram = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].study_program_name
              };
              dataStudyProgram.push(x);
              _this6.listStudyProgram = dataStudyProgram;
            }

            _this6.loadFilter = false;
          }, function (err) {
            _this6.loadError();

            _this6.loadFilter = false;
          });
        }
      }, {
        key: "loadFacultyData",
        value: function loadFacultyData() {
          var _this7 = this;

          this.loadFilter = true;
          this.chartService.getFacultyData().subscribe(function (filterArray) {
            var dataFaculty = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].faculty_name
              };
              dataFaculty.push(x);
              _this7.listFaculty = dataFaculty;
            }

            _this7.loadFilter = false;
          }, function (err) {
            _this7.loadError();

            _this7.loadFilter = false;
          });
        }
      }, {
        key: "loadExamDetailAdressData",
        value: function loadExamDetailAdressData() {
          var _this8 = this;

          this.loadFilter = true;
          var data = {
            filter: ''
          };
          this.chartService.getExamLocationData(data).subscribe(function (result) {
            _this8.examLocationSelectionAddress = result.address;
          }, function (err) {
            _this8.loadError();

            _this8.loadFilter = false;
          });
        }
      }, {
        key: "loadExamTypeDataFilter",
        value: function loadExamTypeDataFilter() {
          var _this9 = this;

          this.loadFilter = true;
          this.chartService.getExamTypeData().subscribe(function (filterArray) {
            var dataExamType = [];
            var x;

            for (var i = 0; i < filterArray.length; i++) {
              x = {
                value: filterArray[i].id.toString(),
                label: filterArray[i].name
              };
              dataExamType.push(x);
              _this9.listExamType = dataExamType;
            }

            _this9.loadFilter = false;
          }, function (err) {
            _this9.loadError();

            _this9.loadFilter = false;
          });
        } // loadCategoryIdDataFilter() { // Pilihan CategoryId
        //   this.loadFilter = true;
        //   this.chartService.getCategoryIdData().subscribe((filterArray) => {
        //     const dataCategoryId = [];
        //     let x: any;
        //     for (let i = 0; i < filterArray.length; i++) {
        //       x = {
        //         value: filterArray[i].id.toString(),
        //         label: filterArray[i].name
        //       };
        //       dataCategoryId.push(x);
        //       this.listCategoryId = dataCategoryId;
        //     }
        //     this.loadFilter = false;
        //   }, err => {
        //     this.loadError();
        //     this.loadFilter = false;
        //   });
        // }

      }, {
        key: "loadError",
        value: function loadError() {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: 'Terjadi kesalahan sistem',
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        }
      }, {
        key: "loadSuccess",
        value: function loadSuccess() {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Success',
            msg: 'Data yang anda masukkan sudah tersimpan',
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'success'
          });
        }
      }, {
        key: "changeSelectionTestType",
        value: function changeSelectionTestType() {
          if (this.examType !== '') {
            if (this.examType === '1') {
              this.isLocHidden = false;
              this.hiddenTime = false;
            } else if (this.examType === '2') {
              this.isLocHidden = true;
              this.hiddenTime = false;
            } else {
              this.isLocHidden = true;
              this.hiddenTime = true;
            }
          } else {
            this.isLocHidden = true;
          }
        }
      }, {
        key: "examStatusChanged",
        value: function examStatusChanged(event) {
          var value = event.value;

          if (value == '1') {
            this.isRaportCategory = true;
          } else {
            this.isRaportCategory = false;
          }
        } // for Edit mode step 1

      }, {
        key: "loadDetailSelectionPath",
        value: function loadDetailSelectionPath() {
          var _this10 = this;

          this.loadingCard = true;

          if (this.id == '0') {
            this.pageType = 'input';
            this.loadingCard = false;
          } else if (this.id != '0') {
            this.pageType = 'edit';
            this.loadStudyProgramData();
            this.chartService.getSelectionPathAdmin("?selection_path_id=".concat(this.id, "&active_status=").concat(this.activestatusid === '1' ? true : false)).subscribe(function (result) {
              if (result) {
                _this10.loadingCard = false;
                var _result$ = result[0],
                    selection_path_id = _result$.selection_path_id,
                    category_id = _result$.category_id,
                    name = _result$.name,
                    exam_status_id = _result$.exam_status_id,
                    active_status = _result$.active_status,
                    active_status_name = _result$.active_status_name;

                _this10.formDetailStep1.patchValue({
                  name: name
                });

                _this10.selectionPathName = name;

                if (active_status === '1') {
                  _this10.formDetailStep1.patchValue({
                    active_status: '1'
                  });
                } else if (active_status === '0') {
                  _this10.formDetailStep1.patchValue({
                    active_status: '0'
                  });
                } else {
                  _this10.formDetailStep1.patchValue({
                    active_status: '0'
                  });
                }

                _this10.examType = exam_status_id && exam_status_id.toString();

                if (exam_status_id == 1) {
                  _this10.isRaportCategory = true;
                } else {
                  _this10.isRaportCategory = false;
                }
              }

              _this10.loadingCard = false;
            }, function (err) {
              _this10.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: err.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });

              _this10.loadingCard = false;
            });
          }
        } // edit step 2 location

      }, {
        key: "openFormExamLocData",
        value: function openFormExamLocData(data, type) {
          this.formType = type;

          if (type === 'edit') {
            this.loading = false;
            this.loadExamDetailData();
            this.id = data.selection_path_id;
            this.examLocMappingDataForm.patchValue({
              selection_path_id: this.id
            });
            this.locationTime = data.location_exam_id && data.location_exam_id.toString();
          } else {
            this.loadExamDetailData();
            this.examLocModal.show();
            this.examLocMappingDataForm.reset();
          }

          this.examLocModal.show();
        }
      }, {
        key: "openFormCBTData",
        value: function openFormCBTData(data, type) {
          this.formType = type;

          if (type === 'view') {
            this.examId = data.id;
            this.loading = false;
            this.id = data.selection_path_id;
            this.cbtModals.show();
            this.examCbtDataForm.patchValue({
              exam_type: data.exam_type
            });
            this.examCbtDataForm.patchValue({
              exam_date: data.exam_date
            });
            this.examCbtDataForm.patchValue({
              start_date: data.exam_start_date
            });
            this.examCbtDataForm.patchValue({
              quota: data.quota
            });
          } else {
            this.examCbtDataForm.patchValue({
              exam_type: 'CBT'
            });
            this.cbtModals.show();
            this.loading = false;
          }
        }
      }, {
        key: "closeModalCBT",
        value: function closeModalCBT() {
          this.examCbtDataForm.reset();
          this.cbtModals.hide();
        }
      }, {
        key: "changeDateCbt",
        value: function changeDateCbt(evnt) {
          var _this11 = this;

          this.loading = true;
          var x = new Date(evnt.target.value);
          var dateMonth = x.getMonth() + 1;
          var dateYear = x.getFullYear();
          var dateYearMonth = dateYear + ' ' + dateMonth;
          this.chartService.getExamTimeDatas("selection_path_id=".concat(this.id, "&active_status=1&exam_type_id=1")).subscribe(function (response) {
            if (response.data !== 0) {
              var getYearMonth = underscore__WEBPACK_IMPORTED_MODULE_12__["findWhere"](response.data, {
                exam_month_year: dateYearMonth
              });

              if (getYearMonth !== undefined) {
                _this11.haveNoDataCbt = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                  position: 'center',
                  type: 'warning',
                  title: 'Perhatian!',
                  text: 'Anda telah memiliki data CBT di bulan dan tahun yang sama. Silakan menambahkan data di bulan selanjutnya atau menghapus data yang sudah ada!',
                  showConfirmButton: true
                });

                _this11.examCbtDataForm.controls.exam_date.reset();

                _this11.loading = false;
              } else {
                _this11.haveNoDataCbt = false;
                _this11.loading = false;
              }
            }
          });
        }
      }, {
        key: "openDetailsCBTDatas",
        value: function openDetailsCBTDatas(data) {
          this.examId = data.id;
          this.loadDetailsCBTData(this.examId);
          this.cbtDetailsModals.show();
        }
      }, {
        key: "loadMoodleCourse",
        value: function loadMoodleCourse() {
          var _this12 = this;

          this.chartService.getMoodleCourse("?selection_path_id=".concat(this.id, "&path_exam_detail_id=").concat(this.examId)).subscribe(function (resp) {
            if (resp.length !== 0) {
              _this12.moodleCourseId = resp[0].id;
              var moodleCourseId = resp[0].id;

              _this12.loadSectionId(moodleCourseId);

              _this12.loadMoodleGroup();
            }
          });
        }
      }, {
        key: "loadMoodleGroup",
        value: function loadMoodleGroup() {
          var _this13 = this;

          this.chartService.getMoodleGroup("?moodle_course_id=".concat(this.moodleCourseId)).subscribe(function (resp) {
            if (resp.length !== 0) {
              _this13.haveMoodleGroup = true;
              _this13.loadtableExamCBTDetails = false;
            } else {
              _this13.haveMoodleGroup = false;
              _this13.loadtableExamCBTDetails = false;
            }
          });
        }
      }, {
        key: "closeCbtModalsDetails",
        value: function closeCbtModalsDetails() {
          this.cbtDetailsModals.hide();
          this.haveDataSessionOneTwoThree = false;
          this.enableMoodleGroup = false;
          this.haveMoodleGroup = false;
        }
      }, {
        key: "openDetailsCBTForm",
        value: function openDetailsCBTForm(data, type) {
          this.cbtId = data.id;
          this.typeCbtData = data.type;
          this.formType = type;

          if (this.formType == 'edit') {
            this.loading = false;
            this.examCbtDetailsDataForm.patchValue({
              session: data.type
            });
            this.examCbtDetailsDataForm.patchValue({
              session_start_time: data.session_start
            });
            this.examCbtDetailsDataForm.patchValue({
              session_end_time: data.session_end
            });
            this.cbtSessionModals.show();
          } else {
            this.loading = false;
            this.examCbtDetailsDataForm.patchValue({
              session: data.type
            });
            this.examCbtDetailsDataForm.patchValue({
              session_start_time: data.session_start
            });
            this.examCbtDetailsDataForm.patchValue({
              session_end_time: data.session_end
            });
            this.cbtSessionModals.show();
          }
        }
      }, {
        key: "closeDetailsCBTSession",
        value: function closeDetailsCBTSession() {
          this.cbtSessionModals.hide();
          this.examCbtDetailsDataForm.reset();
          this.typeCbtData = '';
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "loadDetailsCBTData",
        value: function loadDetailsCBTData(id) {
          var _this14 = this;

          this.loadtableExamCBTDetails = true;
          this.chartService.getSessionPathExamDetails("?selection_path_id=".concat(this.id, "&active_status=1&exam_type_id=1&id=").concat(id)).subscribe(function (response) {
            _this14.tableExamCBTDetails = response ? response : [];

            if (_this14.isRaportCategory) {
              _this14.loadingSection = false;
            } else {
              if (response.length != 0) {
                _this14.loadMoodleCourse();
              } else {
                _this14.loadingSection = false;
              }
            }

            _this14.loadtableExamCBTDetails = false;
            _this14.loadingSection = false;
          }, function (err) {
            _this14.loadtableExamCBTDetails = false;
            _this14.loadingSection = false;
          });
        }
      }, {
        key: "openFormTypeDataPsikotest",
        value: function openFormTypeDataPsikotest(data, type) {
          this.formType = type;

          if (type === 'edit') {
            this.loading = false;
            this.examId = data.id;
            this.id = data.selection_path_id;
            this.examPsikotestDataForm.patchValue({
              exam_type: data.exam_type
            });
            this.examPsikotestDataForm.patchValue({
              exam_date: data.exam_date
            });
            this.examPsikotestDataForm.patchValue({
              start_date: data.exam_start_date
            });
            this.examPsikotestDataForm.patchValue({
              end_date: data.exam_end_date
            });
            this.examPsikotestDataForm.patchValue({
              quota: data.quota
            });
            this.psikotestModals.show();
          } else {
            this.examPsikotestDataForm.patchValue({
              exam_type: 'Psikotest'
            });
            this.psikotestModals.show();
            this.loading = false;
          }
        }
      }, {
        key: "closePsikotestModals",
        value: function closePsikotestModals() {
          this.examPsikotestDataForm.reset();
          this.psikotestModals.hide();
        }
      }, {
        key: "openFormTypeDataInterview",
        value: function openFormTypeDataInterview(data, type) {
          this.formType = type;

          if (type === 'edit') {
            this.loading = false;
            this.examId = data.id;
            this.id = data.selection_path_id;
            this.examInterviewDataForm.patchValue({
              exam_type: data.exam_type
            });
            this.examInterviewDataForm.patchValue({
              exam_date: data.exam_date
            });
            this.examInterviewDataForm.patchValue({
              start_date: data.exam_start_date
            });
            this.examInterviewDataForm.patchValue({
              end_date: data.exam_end_date
            });
            this.examInterviewDataForm.patchValue({
              quota: data.quota
            });
            this.interviewModals.show();
          } else {
            this.loading = false;
            this.examInterviewDataForm.patchValue({
              exam_type: 'Interview'
            });
            this.interviewModals.show();
          }
        }
      }, {
        key: "closeInterviewModals",
        value: function closeInterviewModals() {
          this.examInterviewDataForm.reset();
          this.interviewModals.hide();
        }
      }, {
        key: "openFormTypeDataTPA",
        value: function openFormTypeDataTPA(data, type) {
          this.formType = type;

          if (type === 'edit') {
            this.examId = data.id;
            this.loading = false;
            this.id = data.selection_path_id;
            this.examTPADataForm.patchValue({
              exam_type: data.exam_type
            });
            this.examTPADataForm.patchValue({
              exam_date: data.exam_date
            });
            this.examTPADataForm.patchValue({
              start_date: data.exam_start_date
            });
            this.examTPADataForm.patchValue({
              end_date: data.exam_end_date
            });
            this.examTPADataForm.patchValue({
              quota: data.quota
            });
            this.tpaModals.show();
          } else {
            this.loading = false;
            this.examTPADataForm.patchValue({
              exam_type: 'TPA'
            });
            this.tpaModals.show();
          }
        }
      }, {
        key: "closeTPAModals",
        value: function closeTPAModals() {
          this.examTPADataForm.reset();
          this.tpaModals.hide();
        } // edit step 2 time

      }, {
        key: "openFormExamTimeData",
        value: function openFormExamTimeData(data, type) {
          this.formType = type;

          if (type === 'edit') {
            this.loadExamDetailData();
            this.examTimeId = data.id;
            this.examTimeMappingDataForm.patchValue({
              selection_path_id: this.id
            });
            this.examTimeMappingDataForm.patchValue({
              exam_date: data.exam_date
            });
            this.examTimeMappingDataForm.patchValue({
              start_date: data.exam_start_date
            });
            this.examTimeMappingDataForm.patchValue({
              end_date: data.exam_end_date
            });
            this.examTimeMappingDataForm.patchValue({
              quota: data.quota
            });
            this.session = data && data.session.toString();
          } else {
            this.loadExamDetailData();
            this.examTimeModal.show();
            this.session = '';
            this.examTimeMappingDataForm.reset();
          }

          this.examTimeModal.show();
        } // edit step 3

      }, {
        key: "openFormDetailRegStep",
        value: function openFormDetailRegStep(data, type) {
          this.formType = type;

          if (type === 'edit') {
            this.selectionStepId = data.id;
            this.registrationStepForm.patchValue({
              registration_step_id: data.step_id
            });
            this.registrationStepForm.patchValue({
              ordering: data.ordering
            });

            if (data.active_status === '1') {
              this.registrationStepForm.patchValue({
                active_status: '1'
              });
            } else {
              this.registrationStepForm.patchValue({
                active_status: '0'
              });
            }
          } else {
            this.registrationStepForm.reset();
            this.regStepModal.show();
          }

          this.regStepModal.show();
        } // edit step 4

      }, {
        key: "openFormDocument",
        value: function openFormDocument(data, type) {
          var _this15 = this;

          this.formType = type;
          this.loadingModals = true;

          if (type === 'edit') {
            this.documentSelectionId = data.id;
            this.documentRequirementsForm.patchValue({
              document_type_id: data.document_type_id && data.document_type_id.toString()
            });

            if (data.active_status === true) {
              this.documentRequirementsForm.patchValue({
                active_status: '1'
              });
            } else {
              this.documentRequirementsForm.patchValue({
                active_status: '0'
              });
            }

            if (data.required === true) {
              this.documentRequirementsForm.patchValue({
                mandatory_doc: '1'
              });
            } else {
              this.documentRequirementsForm.patchValue({
                mandatory_doc: '0'
              });
            }

            if (data.document_type_id === 7) {
              this.isReport = true;
              this.isTranscriptDocument = false;
              this.isUtbkDocument = false;
              this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
              this.documentRequirementsForm.get('is_input_nilai').clearValidators();
              this.documentRequirementsForm.controls.is_input_nilai.reset();
              this.chartService.getRaportRequirementDocument("?selection_path_id=".concat(this.id, "&document_type_id=7&active_status=true")).subscribe(function (response) {
                _this15.mappingTechnicId = response.mapping_report_subject_path_technic.id;
                _this15.mappingNonTechnicId = response.mapping_report_subject_path_non_technic.id;
                _this15.loadingModals = false;

                if (response.mapping_report_subject_path_non_technic.math === true) {
                  _this15.documentRequirementsForm.patchValue({
                    math2: '1'
                  });

                  _this15.mappingNonTechnic.map(function (x) {
                    x.math = true;
                  });
                } else {
                  _this15.mappingNonTechnic.map(function (x) {
                    x.math = false;
                  });
                }

                if (response.mapping_report_subject_path_non_technic.bahasa === true) {
                  _this15.documentRequirementsForm.patchValue({
                    bahasa2: '1'
                  });

                  _this15.mappingNonTechnic.map(function (x) {
                    x.bahasa = true;
                  });
                } else {
                  _this15.mappingNonTechnic.map(function (x) {
                    x.bahasa = false;
                  });
                }

                if (response.mapping_report_subject_path_non_technic.english === true) {
                  _this15.documentRequirementsForm.patchValue({
                    eng2: '1'
                  });

                  _this15.mappingNonTechnic.map(function (x) {
                    x.english = true;
                  });
                } else {
                  _this15.mappingNonTechnic.map(function (x) {
                    x.english = false;
                  });
                }

                if (response.mapping_report_subject_path_non_technic.sociological === true) {
                  _this15.documentRequirementsForm.patchValue({
                    sosiology: '1'
                  });

                  _this15.mappingNonTechnic.map(function (x) {
                    x.sociological = true;
                  });
                } else if (response.mapping_report_subject_path_non_technic.sociological === false) {
                  _this15.mappingNonTechnic.map(function (x) {
                    x.sociological = false;
                  });
                }

                if (response.mapping_report_subject_path_non_technic.economy === true) {
                  _this15.documentRequirementsForm.patchValue({
                    economy: '1'
                  });

                  _this15.mappingNonTechnic.map(function (x) {
                    x.economy = true;
                  });
                } else {
                  _this15.mappingNonTechnic.map(function (x) {
                    x.economy = false;
                  });
                }

                if (response.mapping_report_subject_path_non_technic.geography === true) {
                  _this15.documentRequirementsForm.patchValue({
                    geography: '1'
                  });

                  _this15.mappingNonTechnic.map(function (x) {
                    x.geography = true;
                  });
                } else {
                  _this15.mappingNonTechnic.map(function (x) {
                    x.geography = false;
                  });
                }

                if (response.mapping_report_subject_path_technic.math === true) {
                  _this15.documentRequirementsForm.patchValue({
                    math: '1'
                  });

                  _this15.mappingTechnic.map(function (x) {
                    x.math = true;
                  });
                } else {
                  _this15.mappingTechnic.map(function (x) {
                    x.math = false;
                  });
                }

                if (response.mapping_report_subject_path_technic.english === true) {
                  _this15.documentRequirementsForm.patchValue({
                    eng: '1'
                  });

                  _this15.mappingTechnic.map(function (x) {
                    x.english = true;
                  });
                } else {
                  _this15.mappingTechnic.map(function (x) {
                    x.english = false;
                  });
                }

                if (response.mapping_report_subject_path_technic.bahasa === true) {
                  _this15.documentRequirementsForm.patchValue({
                    bahasa: '1'
                  });

                  _this15.mappingTechnic.map(function (x) {
                    x.bahasa = true;
                  });
                } else {
                  _this15.mappingTechnic.map(function (x) {
                    x.bahasa = false;
                  });
                }

                if (response.mapping_report_subject_path_technic.physics === true) {
                  _this15.documentRequirementsForm.patchValue({
                    physics: '1'
                  });

                  _this15.mappingTechnic.map(function (x) {
                    x.physics = true;
                  });
                } else {
                  _this15.mappingTechnic.map(function (x) {
                    x.physics = false;
                  });
                }

                if (response.mapping_report_subject_path_technic.chemical === true) {
                  _this15.documentRequirementsForm.patchValue({
                    chemicals: '1'
                  });

                  _this15.mappingTechnic.map(function (x) {
                    x.chemical = true;
                  });
                } else {
                  _this15.mappingTechnic.map(function (x) {
                    x.chemical = false;
                  });
                }

                if (response.mapping_report_subject_path_technic.biology === true) {
                  _this15.documentRequirementsForm.patchValue({
                    biology: '1'
                  });

                  _this15.mappingTechnic.map(function (x) {
                    x.biology = true;
                  });
                } else {
                  _this15.mappingTechnic.map(function (x) {
                    x.biology = false;
                  });
                }

                if (response.mapping_report_subject_path_technic.historical === true) {
                  _this15.documentRequirementsForm.patchValue({
                    sejarah: '1'
                  });

                  _this15.mappingTechnic.map(function (x) {
                    x.historical = true;
                  });
                } else {
                  _this15.mappingTechnic.map(function (x) {
                    x.historical = false;
                  });
                }
              });
            } else if (data.document_type_id === 25) {
              this.isUtbkDocument = false;
              this.isReport = false;
              this.isTranscriptDocument = true;
              this.loadingModals = false;

              if (data.is_value === true) {
                this.documentRequirementsForm.patchValue({
                  is_input_nilai: '1'
                });
              } else {
                this.documentRequirementsForm.patchValue({
                  is_input_nilai: '0'
                });
              }
            } else if (data.document_type_id === 12) {
              this.isUtbkDocument = true;
              this.isReport = false;
              this.isTranscriptDocument = false;
              this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
              this.documentRequirementsForm.get('is_input_nilai').clearValidators();
              this.documentRequirementsForm.controls.is_input_nilai.reset();
              this.chartService.getUtbkRequirementDocument("?selection_path_id=".concat(this.id, "&document_type_id=12&active_status=true")).subscribe(function (response) {
                _this15.mappingTechnicId = response.mapping_utbk_path_science.id;
                _this15.mappingNonTechnicId = response.mapping_utbk_path_non_science.id;
                _this15.loadingModals = false;

                if (response.mapping_utbk_path_non_science.math === true) {
                  _this15.documentRequirementsForm.patchValue({
                    math2: '1'
                  });

                  _this15.mappingUtbkNonScience.map(function (x) {
                    x.math = true;
                  });
                } else {
                  _this15.mappingUtbkNonScience.map(function (x) {
                    x.math = false;
                  });
                }

                if (response.mapping_utbk_path_non_science.sociological === true) {
                  _this15.documentRequirementsForm.patchValue({
                    sosiology: '1'
                  });

                  _this15.mappingUtbkNonScience.map(function (x) {
                    x.sociological = true;
                  });
                } else {
                  _this15.mappingUtbkNonScience.map(function (x) {
                    x.sociological = false;
                  });
                }

                if (response.mapping_utbk_path_non_science.economy === true) {
                  _this15.documentRequirementsForm.patchValue({
                    economy: '1'
                  });

                  _this15.mappingUtbkNonScience.map(function (x) {
                    x.economy = true;
                  });
                } else {
                  _this15.mappingUtbkNonScience.map(function (x) {
                    x.economy = false;
                  });
                }

                if (response.mapping_utbk_path_non_science.geography === true) {
                  _this15.documentRequirementsForm.patchValue({
                    geography: '1'
                  });

                  _this15.mappingUtbkNonScience.map(function (x) {
                    x.geography = true;
                  });
                } else {
                  _this15.mappingUtbkNonScience.map(function (x) {
                    x.geography = false;
                  });
                }

                if (response.mapping_utbk_path_non_science.historical === true) {
                  _this15.documentRequirementsForm.patchValue({
                    sejarah: '1'
                  });

                  _this15.mappingUtbkNonScience.map(function (x) {
                    x.historical = true;
                  });
                } else {
                  _this15.mappingUtbkNonScience.map(function (x) {
                    x.historical = false;
                  });
                }

                if (response.mapping_utbk_path_science.math === true) {
                  _this15.documentRequirementsForm.patchValue({
                    math: '1'
                  });

                  _this15.mappingUtbkScience.map(function (x) {
                    x.math = true;
                  });
                } else {
                  _this15.mappingUtbkScience.map(function (x) {
                    x.math = false;
                  });
                }

                if (response.mapping_utbk_path_science.physics === true) {
                  _this15.documentRequirementsForm.patchValue({
                    physics: '1'
                  });

                  _this15.mappingUtbkScience.map(function (x) {
                    x.physics = true;
                  });
                } else {
                  _this15.mappingUtbkScience.map(function (x) {
                    x.physics = false;
                  });
                }

                if (response.mapping_utbk_path_science.chemical === true) {
                  _this15.documentRequirementsForm.patchValue({
                    chemicals: '1'
                  });

                  _this15.mappingUtbkScience.map(function (x) {
                    x.chemical = true;
                  });
                } else {
                  _this15.mappingUtbkScience.map(function (x) {
                    x.chemical = false;
                  });
                }

                if (response.mapping_utbk_path_science.biology === true) {
                  _this15.documentRequirementsForm.patchValue({
                    biology: '1'
                  });

                  _this15.mappingUtbkScience.map(function (x) {
                    x.biology = true;
                  });
                } else {
                  _this15.mappingUtbkScience.map(function (x) {
                    x.biology = false;
                  });
                }
              });
            } else {
              this.loadingModals = false;
              this.isUtbkDocument = false;
              this.isReport = false;
              this.isTranscriptDocument = false;
              this.documentRequirementsForm.get('is_input_nilai').clearValidators();
              this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
            }
          } else {
            this.loadingModals = false;
            this.documentRequirementsForm.reset();
          }

          this.documentRequirementsModal.show();
        }
      }, {
        key: "changeDocumentRequirementType",
        value: function changeDocumentRequirementType(event) {
          if (event.value === '7') {
            this.isReport = true;
            this.isTranscriptDocument = false;
            this.isUtbkDocument = false;
            this.documentRequirementsForm.controls.math.reset();
            this.documentRequirementsForm.controls.eng.reset();
            this.documentRequirementsForm.controls.bahasa.reset();
            this.documentRequirementsForm.controls.math2.reset();
            this.documentRequirementsForm.controls.eng2.reset();
            this.documentRequirementsForm.controls.bahasa2.reset();
            this.documentRequirementsForm.controls.physics.reset();
            this.documentRequirementsForm.controls.biology.reset();
            this.documentRequirementsForm.controls.chemicals.reset();
            this.documentRequirementsForm.controls.geography.reset();
            this.documentRequirementsForm.controls.sosiology.reset();
            this.documentRequirementsForm.controls.economy.reset();
            this.documentRequirementsForm.controls.sejarah.reset();
            this.documentRequirementsForm.controls.active_status.reset();
            this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
            this.documentRequirementsForm.get('is_input_nilai').clearValidators();
            this.documentRequirementsForm.get('sejarah').updateValueAndValidity();
            this.documentRequirementsForm.get('sejarah').clearValidators();
            this.documentRequirementsForm.controls.is_input_nilai.reset();
            this.documentRequirementsForm.controls.is_technic.reset();
            this.documentRequirementsForm.controls.mandatory_doc.reset();
          } else if (event.value === '25') {
            this.isReport = false;
            this.isTranscriptDocument = true;
            this.isUtbkDocument = false;
            this.documentRequirementsForm.controls.mandatory_doc.reset();
            this.documentRequirementsForm.controls.active_status.reset();
            this.documentRequirementsForm.controls.is_input_nilai.reset();
            this.documentRequirementsForm.controls.is_technic.reset();
            this.documentRequirementsForm.controls.math.reset();
            this.documentRequirementsForm.controls.eng.reset();
            this.documentRequirementsForm.controls.bahasa.reset();
            this.documentRequirementsForm.controls.math2.reset();
            this.documentRequirementsForm.controls.eng2.reset();
            this.documentRequirementsForm.controls.bahasa2.reset();
            this.documentRequirementsForm.controls.physics.reset();
            this.documentRequirementsForm.controls.biology.reset();
            this.documentRequirementsForm.controls.chemicals.reset();
            this.documentRequirementsForm.controls.geography.reset();
            this.documentRequirementsForm.controls.sosiology.reset();
            this.documentRequirementsForm.controls.economy.reset();
            this.documentRequirementsForm.controls.sejarah.reset();
            this.documentRequirementsForm.controls.active_status.reset();
            this.documentRequirementsForm.get('math2').updateValueAndValidity();
            this.documentRequirementsForm.get('math2').clearValidators();
            this.documentRequirementsForm.get('bahasa2').updateValueAndValidity();
            this.documentRequirementsForm.get('bahasa2').clearValidators();
            this.documentRequirementsForm.get('eng2').updateValueAndValidity();
            this.documentRequirementsForm.get('eng2').clearValidators();
            this.documentRequirementsForm.get('math').updateValueAndValidity();
            this.documentRequirementsForm.get('math').clearValidators();
            this.documentRequirementsForm.get('bahasa').updateValueAndValidity();
            this.documentRequirementsForm.get('bahasa').clearValidators();
            this.documentRequirementsForm.get('eng').updateValueAndValidity();
            this.documentRequirementsForm.get('eng').clearValidators();
            this.documentRequirementsForm.get('physics').updateValueAndValidity();
            this.documentRequirementsForm.get('physics').clearValidators();
            this.documentRequirementsForm.get('biology').updateValueAndValidity();
            this.documentRequirementsForm.get('biology').clearValidators();
            this.documentRequirementsForm.get('chemicals').updateValueAndValidity();
            this.documentRequirementsForm.get('chemicals').clearValidators();
            this.documentRequirementsForm.get('sosiology').updateValueAndValidity();
            this.documentRequirementsForm.get('sosiology').clearValidators();
            this.documentRequirementsForm.get('geography').updateValueAndValidity();
            this.documentRequirementsForm.get('geography').clearValidators();
            this.documentRequirementsForm.get('economy').updateValueAndValidity();
            this.documentRequirementsForm.get('economy').clearValidators();
            this.documentRequirementsForm.get('sejarah').updateValueAndValidity();
            this.documentRequirementsForm.get('sejarah').clearValidators();
            this.documentRequirementsForm.get('is_input_nilai').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
          } else if (event.value === '12') {
            this.isReport = false;
            this.isTranscriptDocument = false;
            this.isUtbkDocument = true;
            this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
            this.documentRequirementsForm.get('is_input_nilai').clearValidators();
            this.documentRequirementsForm.controls.mandatory_doc.reset();
            this.documentRequirementsForm.controls.active_status.reset();
            this.documentRequirementsForm.controls.is_input_nilai.reset();
            this.documentRequirementsForm.controls.math.reset();
            this.documentRequirementsForm.controls.eng.reset();
            this.documentRequirementsForm.controls.bahasa.reset();
            this.documentRequirementsForm.controls.math2.reset();
            this.documentRequirementsForm.controls.eng2.reset();
            this.documentRequirementsForm.controls.bahasa2.reset();
            this.documentRequirementsForm.controls.physics.reset();
            this.documentRequirementsForm.controls.biology.reset();
            this.documentRequirementsForm.controls.chemicals.reset();
            this.documentRequirementsForm.controls.geography.reset();
            this.documentRequirementsForm.controls.sosiology.reset();
            this.documentRequirementsForm.controls.economy.reset();
            this.documentRequirementsForm.controls.sejarah.reset();
            this.documentRequirementsForm.controls.active_status.reset();
          } else {
            this.isReport = false;
            this.isTranscriptDocument = false;
            this.isUtbkDocument = false;
            this.documentRequirementsForm.get('math2').updateValueAndValidity();
            this.documentRequirementsForm.get('math2').clearValidators();
            this.documentRequirementsForm.get('bahasa2').updateValueAndValidity();
            this.documentRequirementsForm.get('bahasa2').clearValidators();
            this.documentRequirementsForm.get('eng2').updateValueAndValidity();
            this.documentRequirementsForm.get('eng2').clearValidators();
            this.documentRequirementsForm.get('math').updateValueAndValidity();
            this.documentRequirementsForm.get('math').clearValidators();
            this.documentRequirementsForm.get('bahasa').updateValueAndValidity();
            this.documentRequirementsForm.get('bahasa').clearValidators();
            this.documentRequirementsForm.get('eng').updateValueAndValidity();
            this.documentRequirementsForm.get('eng').clearValidators();
            this.documentRequirementsForm.get('physics').updateValueAndValidity();
            this.documentRequirementsForm.get('physics').clearValidators();
            this.documentRequirementsForm.get('biology').updateValueAndValidity();
            this.documentRequirementsForm.get('biology').clearValidators();
            this.documentRequirementsForm.get('chemicals').updateValueAndValidity();
            this.documentRequirementsForm.get('chemicals').clearValidators();
            this.documentRequirementsForm.get('sosiology').updateValueAndValidity();
            this.documentRequirementsForm.get('sosiology').clearValidators();
            this.documentRequirementsForm.get('geography').updateValueAndValidity();
            this.documentRequirementsForm.get('geography').clearValidators();
            this.documentRequirementsForm.get('economy').updateValueAndValidity();
            this.documentRequirementsForm.get('economy').clearValidators();
            this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
            this.documentRequirementsForm.get('is_input_nilai').clearValidators();
            this.documentRequirementsForm.controls.mandatory_doc.reset();
            this.documentRequirementsForm.controls.active_status.reset();
            this.documentRequirementsForm.controls.math.reset();
            this.documentRequirementsForm.controls.eng.reset();
            this.documentRequirementsForm.controls.bahasa.reset();
            this.documentRequirementsForm.controls.math2.reset();
            this.documentRequirementsForm.controls.eng2.reset();
            this.documentRequirementsForm.controls.bahasa2.reset();
            this.documentRequirementsForm.controls.physics.reset();
            this.documentRequirementsForm.controls.biology.reset();
            this.documentRequirementsForm.controls.chemicals.reset();
            this.documentRequirementsForm.controls.geography.reset();
            this.documentRequirementsForm.controls.sosiology.reset();
            this.documentRequirementsForm.controls.economy.reset();
            this.documentRequirementsForm.controls.sejarah.reset();
            this.documentRequirementsForm.controls.active_status.reset();
            this.documentRequirementsForm.controls.is_input_nilai.reset();
          }
        }
      }, {
        key: "onCheckMath",
        value: function onCheckMath(event) {
          if (event.target.checked) {
            if (this.isReport) {
              this.mappingTechnic.map(function (x) {
                x.math = true;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkScience.map(function (x) {
                x.math = true;
              });
            }
          } else {
            if (this.isReport) {
              this.mappingTechnic.map(function (x) {
                x.math = false;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkScience.map(function (x) {
                x.math = false;
              });
            }
          }
        }
      }, {
        key: "onCheckBahasa",
        value: function onCheckBahasa(event) {
          if (event.target.checked) {
            this.mappingTechnic.map(function (x) {
              x.bahasa = true;
            });
          } else {
            this.mappingTechnic.map(function (x) {
              x.bahasa = false;
            });
          }
        }
      }, {
        key: "onCheckEnglish",
        value: function onCheckEnglish(event) {
          if (event.target.checked) {
            this.mappingTechnic.map(function (x) {
              x.english = true;
            });
          } else {
            this.mappingTechnic.map(function (x) {
              x.english = false;
            });
          }
        }
      }, {
        key: "onCheckBiology",
        value: function onCheckBiology(event) {
          if (event.target.checked) {
            if (this.isReport) {
              this.mappingTechnic.map(function (x) {
                x.biology = true;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkScience.map(function (x) {
                x.biology = true;
              });
            }
          } else {
            if (this.isReport) {
              this.mappingTechnic.map(function (x) {
                x.biology = false;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkScience.map(function (x) {
                x.biology = false;
              });
            }
          }
        }
      }, {
        key: "onCheckPhysics",
        value: function onCheckPhysics(event) {
          if (event.target.checked) {
            if (this.isReport) {
              this.mappingTechnic.map(function (x) {
                x.physics = true;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkScience.map(function (x) {
                x.physics = true;
              });
            }
          } else {
            if (this.isReport) {
              this.mappingTechnic.map(function (x) {
                x.physics = false;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkScience.map(function (x) {
                x.physics = false;
              });
            }
          }
        }
      }, {
        key: "onCheckChemical",
        value: function onCheckChemical(event) {
          if (event.target.checked) {
            if (this.isReport) {
              this.mappingTechnic.map(function (x) {
                x.chemical = true;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkScience.map(function (x) {
                x.chemical = true;
              });
            }
          } else {
            if (this.isReport) {
              this.mappingTechnic.map(function (x) {
                x.chemical = false;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkScience.map(function (x) {
                x.chemical = false;
              });
            }
          }
        }
      }, {
        key: "onCheckMathNonTechnic",
        value: function onCheckMathNonTechnic(event) {
          if (event.target.checked) {
            if (this.isReport) {
              this.mappingNonTechnic.map(function (x) {
                x.math = true;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkNonScience.map(function (x) {
                x.math = true;
              });
            }
          } else {
            if (this.isReport) {
              this.mappingNonTechnic.map(function (x) {
                x.math = false;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkNonScience.map(function (x) {
                x.math = false;
              });
            }
          }
        }
      }, {
        key: "onCheckBahasaNonTechnic",
        value: function onCheckBahasaNonTechnic(event) {
          if (event.target.checked) {
            this.mappingNonTechnic.map(function (x) {
              x.bahasa = true;
            });
          } else {
            this.mappingNonTechnic.map(function (x) {
              x.bahasa = false;
            });
          }
        }
      }, {
        key: "onCheckEnglishNonTechnic",
        value: function onCheckEnglishNonTechnic(event) {
          if (event.target.checked) {
            this.mappingNonTechnic.map(function (x) {
              x.english = true;
            });
          } else {
            this.mappingNonTechnic.map(function (x) {
              x.english = false;
            });
          }
        }
      }, {
        key: "onCheckEconomyNonTechnic",
        value: function onCheckEconomyNonTechnic(event) {
          if (event.target.checked) {
            if (this.isReport) {
              this.mappingNonTechnic.map(function (x) {
                x.economy = true;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkNonScience.map(function (x) {
                x.economy = true;
              });
            }
          } else {
            if (this.isReport) {
              this.mappingNonTechnic.map(function (x) {
                x.economy = false;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkNonScience.map(function (x) {
                x.economy = false;
              });
            }
          }
        }
      }, {
        key: "onCheckGeographyNonTechnic",
        value: function onCheckGeographyNonTechnic(event) {
          if (event.target.checked) {
            if (this.isReport) {
              this.mappingNonTechnic.map(function (x) {
                x.geography = true;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkNonScience.map(function (x) {
                x.geography = true;
              });
            }
          } else {
            if (this.isReport) {
              this.mappingNonTechnic.map(function (x) {
                x.geography = false;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkNonScience.map(function (x) {
                x.geography = false;
              });
            }
          }
        }
      }, {
        key: "onCheckSociologicalNonTechnic",
        value: function onCheckSociologicalNonTechnic(event) {
          if (event.target.checked) {
            if (this.isReport) {
              this.mappingNonTechnic.map(function (x) {
                x.sociological = true;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkNonScience.map(function (x) {
                x.sociological = true;
              });
            }
          } else {
            if (this.isReport) {
              this.mappingNonTechnic.map(function (x) {
                x.sociological = false;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkNonScience.map(function (x) {
                x.sociological = false;
              });
            }
          }
        }
      }, {
        key: "onSejarahNonTechnic",
        value: function onSejarahNonTechnic(event) {
          if (event.target.checked) {
            if (this.isReport) {
              this.mappingNonTechnic.map(function (x) {
                x.historical = true;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkNonScience.map(function (x) {
                x.historical = true;
              });
            }
          } else {
            if (this.isReport) {
              this.mappingNonTechnic.map(function (x) {
                x.historical = false;
              });
            } else if (this.isUtbkDocument) {
              this.mappingUtbkNonScience.map(function (x) {
                x.historical = false;
              });
            }
          }
        }
      }, {
        key: "closeDocumentReqModals",
        value: function closeDocumentReqModals() {
          this.documentRequirementsModal.hide();
          this.isReport = false;
          this.isTranscriptDocument = false;
          this.isUtbkDocument = false;
          this.loadingModals = false;
          this.mappingTechnicId = [];
          this.mappingNonTechnicId = [];
        } // edit step 5

      }, {
        key: "openFormPinPrice",
        value: function openFormPinPrice(data, type) {
          this.formType = type;

          if (type === 'edit') {
            this.pinPriceId = data.id;

            if (data.is_medical === false) {
              this.isMedical = '0';
            } else {
              this.isMedical = '1';
            }

            this.pinPriceForm.patchValue({
              price: data.price
            });
            this.pinPriceForm.patchValue({
              price: data.price
            });
            this.pinPriceForm.patchValue({
              maks_study_program: data.maks_study_program
            });

            if (data.active_status === true) {
              this.pinPriceForm.patchValue({
                active_status: '1'
              });
            } else {
              this.pinPriceForm.patchValue({
                active_status: '0'
              });
            }
          } else {
            this.pinPriceForm.reset();
            this.pinPriceDataModal.show();
          }

          this.pinPriceDataModal.show();
        } // edit step 6

      }, {
        key: "openFormStudyProgram",
        value: function openFormStudyProgram(data, type) {
          this.formType = type;

          if (type === 'edit') {
            this.studyProgramId = data.id;

            if (data.is_technic === true) {
              this.isTechnic = '1';
            } else if (data.is_technic === false) {
              this.isTechnic = '2';
            }

            this.studyProgramForm.patchValue({
              program_study_id: data.study_program_id.toString()
            });
            this.studyProgramForm.patchValue({
              minimum_donation: data.minimum_donation
            });
            this.studyProgramForm.patchValue({
              quota: data.quota
            });

            if (data.active_status === true) {
              this.studyProgramForm.patchValue({
                active_status: '1'
              });
            } else {
              this.studyProgramForm.patchValue({
                active_status: '0'
              });
            }
          } else {
            this.studyProgramForm.reset();
          }

          this.studyProgramDataModal.show();
        } // tambah data study program all

      }, {
        key: "openFormMappingDataProdi",
        value: function openFormMappingDataProdi(type) {
          this.formType = type;

          if (type === 'input') {
            this.studyProgramMappingData.show();
            this.mappingStudyProgramForm.patchValue({
              quota: ''
            });
            this.mappingStudyProgramForm.patchValue({
              sdp: ''
            });
            this.mappingStudyProgramForm.patchValue({
              is_technic_mapp: ''
            });
            this.getTableStudyProgramAll();
          }
        } // create step 1

      }, {
        key: "createSelectionData",
        value: function createSelectionData() {
          var _this16 = this;

          this.loadingCard = true;

          switch (this.pageType) {
            case 'create':
              this.activeStatusStep3 = '1';
              var data = {
                name: this.formDetailStep1.controls['name'].value,
                active_status: this.formDetailStep1.controls['active_status'].value,
                selection_program_id: this.selectionProgram,
                exam_status: this.examType,
                category_id: this.categoryId
              };
              this.chartService.postSelectionPathData(data).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    _this16.idSelectionPath = res.selection_path_id;
                    _this16.id = res.selection_path_id;
                    _this16.selectionPathName = _this16.formDetailStep1.controls['name'].value;

                    if (!_this16.isRaportCategory) {
                      var payloadMoodle = {
                        selection_path_id: res.selection_path_id
                      };

                      _this16.chartService.createMoodleCategory(payloadMoodle).subscribe(function (resp) {
                        if (resp.status == 'Success') {
                          _this16.loadSuccess();

                          _this16.pageType = 'edit';

                          _this16.createSelectionData();

                          _this16.loadingCard = false;
                        } else {
                          _this16.loadingCard = false;

                          _this16.broadcasterService.notifBroadcast(true, {
                            title: resp.status,
                            msg: resp.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                          });
                        }
                      });
                    } else {
                      _this16.loadSuccess();

                      _this16.pageType = 'edit';

                      _this16.createSelectionData();

                      _this16.loadingCard = false;
                    }
                  } else {
                    _this16.broadcasterService.notifBroadcast(true, {
                      title: res.status,
                      msg: res.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });

                    _this16.loadingCard = false;
                  }
                } else {
                  _this16.loadingCard = false;

                  _this16.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                }
              }, function (reason) {
                _this16.broadcasterService.notifBroadcast(true, {
                  title: 'Gagal',
                  msg: reason.err.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });
              });
              break;

            case 'edit':
              this.activeStatusStep3 = '1';
              var dataUpdate = {
                id: this.id,
                name: this.formDetailStep1.value.name,
                active_status: this.formDetailStep1.value.active_status,
                exam_status: this.examType
              };
              this.chartService.updSelectionPathData(dataUpdate).subscribe(function (res) {
                if (res != null) {
                  if (res.status === 'Success') {
                    if (!_this16.isRaportCategory) {
                      _this16.chartService.getCategoryMoodle("?selection_path_id=".concat(_this16.id)).subscribe(function (resp) {
                        if (resp.length == 0) {
                          var payloadMoodle = {
                            selection_path_id: _this16.id
                          };

                          _this16.chartService.createMoodleCategory(payloadMoodle).subscribe(function (response) {
                            if (response.status == 'Success') {
                              _this16.loadSuccess();

                              _this16.goToStep1();

                              _this16.loadingCard = false;
                            } else {
                              _this16.loadingCard = false;

                              _this16.broadcasterService.notifBroadcast(true, {
                                title: resp.status,
                                msg: resp.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                              });
                            }
                          });
                        } else {
                          _this16.loadSuccess();

                          _this16.goToStep1();

                          _this16.loadingCard = false;
                        }
                      });
                    } else {
                      _this16.chartService.getCategoryMoodle("?selection_path_id=".concat(_this16.id)).subscribe(function (resp) {
                        if (resp.length == 0) {
                          _this16.loadSuccess();

                          _this16.goToStep1();

                          _this16.loadingCard = false;
                        } else {
                          var deleteMoodle = {
                            selection_path_id: _this16.id
                          };

                          _this16.chartService.deleteMoodleCategory(deleteMoodle).subscribe(function (resp) {
                            if (resp.status == 'Success') {
                              _this16.loadSuccess();

                              _this16.goToStep1();

                              _this16.loadingCard = false;
                            } else {
                              _this16.loadingCard = false;

                              _this16.broadcasterService.notifBroadcast(true, {
                                title: resp.status,
                                msg: resp.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'error'
                              });
                            }
                          });
                        }
                      });
                    }
                  } else {
                    _this16.loadError();

                    _this16.loadingCard = false;
                  }
                } else {
                  _this16.loadError();

                  _this16.loading = false;
                }
              }, function (reason) {
                _this16.loadError();

                _this16.loadingCard = false;
              });
              break;

            default:
              break;
          }
        } // create step 2

      }, {
        key: "createExamLocationData",
        value: function createExamLocationData() {
          var _this17 = this;

          if (this.examLocMappingDataForm.valid) {
            this.loading = true;

            switch (this.formType) {
              case 'input':
                var data = {
                  selection_path_id: this.id,
                  location_exam_id: this.locationTime,
                  active_status: '1'
                };
                this.chartService.postExamLocationSelectionData(data).subscribe(function (res) {
                  if (res.status == 'Success') {
                    _this17.loadSuccess(); // this.examLocModal.hide();


                    _this17.createSelectionData();
                  } else {
                    _this17.loadError();
                  }
                });
                break;

              case 'edit':
                var datas = {
                  id: this.examLocationSelectionId,
                  selection_path_id: this.id,
                  location_exam_id: this.locationTime,
                  active_status: '1'
                };
                this.chartService.updExamLocationSelectionData(datas).subscribe(function (res) {
                  if (res.status == 'Success') {
                    _this17.loadSuccess();

                    _this17.examLocModal.hide(); // this.renderLocation();


                    _this17.createSelectionData();
                  } else {
                    _this17.loadError();
                  }
                });
                break;

              default:
                break;
            }
          }
        } // create step 2

      }, {
        key: "createCBTData",
        value: function createCBTData() {
          var _this18 = this;

          if (this.examCbtDataForm.valid) {
            this.loading = true;
            var dataCreate = {
              selection_path_id: this.id,
              exam_type_id: 1,
              start_date: this.examCbtDataForm.controls['exam_date'].value,
              quota: this.examCbtDataForm.controls['quota'].value,
              active_status: '1'
            };
            var startdate = this.examCbtDataForm.controls['exam_date'].value;
            var enddate = this.examCbtDataForm.controls['exam_date'].value;
            var timestartdate = startdate.concat(" ", '00:00:00');
            var timeenddate = enddate.concat(" ", '23:59:59');
            this.chartService.postExamTimeData(dataCreate).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  _this18.examId = res.id;

                  if (!_this18.isRaportCategory) {
                    _this18.chartService.getCategoryMoodle("?selection_path_id=".concat(_this18.id)).subscribe(function (resp) {
                      if (resp.length !== 0) {
                        _this18.categoryMoodleId = resp[0].id;
                        var payloadMoodleCategory = {
                          moodle_category_id: _this18.categoryMoodleId,
                          start_date: timestartdate,
                          end_date: timeenddate,
                          path_exam_detail_id: _this18.examId
                        };

                        _this18.chartService.insertMoodleCourse(payloadMoodleCategory).subscribe(function (response) {
                          if (response.status == 'Success') {
                            _this18.moodleCourseId = response.response.data[0].id;

                            _this18.loadSuccess();

                            _this18.closeModalCBT();

                            _this18.renderExamTimeCBT();
                          } else {
                            _this18.loadSuccess();

                            _this18.closeModalCBT();

                            _this18.renderExamTimeCBT();
                          }
                        });
                      } else {
                        _this18.broadcasterService.notifBroadcast(true, {
                          title: resp.status,
                          msg: resp.message,
                          timeout: 5000,
                          theme: 'default',
                          position: 'top-right',
                          type: 'error'
                        });

                        _this18.loading = false;
                      }
                    });
                  } else {
                    _this18.loadSuccess();

                    _this18.renderExamTimeCBT();

                    _this18.closeModalCBT();
                  }
                } else {
                  _this18.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });

                  _this18.loading = false;
                }
              } else {
                _this18.loadError();

                _this18.loading = false;
              }
            }, function (reason) {
              _this18.loading = false;

              _this18.broadcasterService.notifBroadcast(true, {
                title: reason.err.status,
                msg: reason.err.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
            });
          }
        }
      }, {
        key: "deleteExamsCBTDatas",
        value: function deleteExamsCBTDatas(data) {
          var _this19 = this;

          var datas = {
            id: data.id,
            active_status: "0",
            selection_path_id: data.selection_path_id,
            start_date: data.origin_start_date,
            exam_type_id: 1
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
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
              _this19.loadtableExamCBT = true;

              _this19.chartService.updExamTimeData(datas).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    if (!_this19.isRaportCategory) {
                      _this19.chartService.getMoodleCourse("?selection_path_id=".concat(_this19.id)).subscribe(function (resp) {
                        if (resp.length !== 0) {
                          var deleteCourse = {
                            moodle_course_id: resp[0].id
                          };

                          _this19.chartService.deleteMoodleCourse(deleteCourse).subscribe(function (response) {
                            if (response.status == 'Success') {
                              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                                position: 'center',
                                type: 'success',
                                title: _this19.successDel,
                                showConfirmButton: false,
                                timer: 2000
                              });

                              _this19.examCbtDataForm.reset();

                              _this19.renderExamTimeCBT();

                              _this19.loadtableExamCBT = false;
                              _this19.haveDataSessionOneTwoThree = false;
                              _this19.enableMoodleGroup = false;
                            } else {
                              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                                position: 'center',
                                type: 'error',
                                title: _this19.failedDel,
                                showConfirmButton: false,
                                timer: 2000
                              });

                              _this19.examCbtDataForm.reset();

                              _this19.loadtableExamCBT = false;
                              _this19.haveDataSessionOneTwoThree = false;
                              _this19.enableMoodleGroup = false;
                            }
                          });
                        } else {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                            position: 'center',
                            type: 'success',
                            title: _this19.successDel,
                            showConfirmButton: false,
                            timer: 2000
                          });

                          _this19.renderExamTimeCBT();

                          _this19.loadtableExamCBT = false;

                          _this19.examCbtDataForm.reset();
                        }
                      });
                    } else {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                        position: 'center',
                        type: 'success',
                        title: _this19.successDel,
                        showConfirmButton: false,
                        timer: 2000
                      });

                      _this19.renderExamTimeCBT();

                      _this19.loadtableExamCBT = false;

                      _this19.examCbtDataForm.reset();
                    }
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'error',
                      title: _this19.failedDel,
                      showConfirmButton: false,
                      timer: 2000
                    });
                    _this19.loadtableExamCBT = false;
                  }
                } else {
                  _this19.loadError();
                }
              }, function (reason) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                  position: 'center',
                  type: 'error',
                  text: reason.err.message,
                  title: _this19.failedDel,
                  showConfirmButton: false,
                  timer: 2000
                });
                _this19.loadtableExamCBT = false;
              });
            }
          });
        }
      }, {
        key: "createCBTDetailsDataSession",
        value: function createCBTDetailsDataSession() {
          var _this20 = this;

          if (this.examCbtDetailsDataForm.valid) {
            this.loading = true;
            var data = {
              id: this.cbtId
            };
            var dataCreate = {};
            var moodleSection1 = {
              moodle_course_id: this.moodleCourseId
            };
            var moodleSection2 = {};

            if (this.typeCbtData == '1') {
              dataCreate = Object.assign({}, data, {
                session_one_start: this.examCbtDetailsDataForm.value.session_start_time,
                session_one_end: this.examCbtDetailsDataForm.value.session_end_time
              });
              moodleSection2 = Object.assign({}, moodleSection1, {
                section_name: 'Sesi 1'
              });
            } else if (this.typeCbtData == '2') {
              dataCreate = Object.assign({}, data, {
                session_two_start: this.examCbtDetailsDataForm.value.session_start_time,
                session_two_end: this.examCbtDetailsDataForm.value.session_end_time
              });
              moodleSection2 = Object.assign({}, moodleSection1, {
                section_name: 'Sesi 2'
              });
            } else if (this.typeCbtData == '3') {
              dataCreate = Object.assign({}, data, {
                session_three_start: this.examCbtDetailsDataForm.value.session_start_time,
                session_three_end: this.examCbtDetailsDataForm.value.session_end_time
              });
              moodleSection2 = Object.assign({}, moodleSection1, {
                section_name: 'Sesi 3'
              });
            }

            this.chartService.createOrUpdateSessionPathExamDetails(dataCreate).subscribe(function (res) {
              if (res != null) {
                if (res.status == 'Success') {
                  if (!_this20.isRaportCategory) {
                    _this20.chartService.insertMoodleSection(moodleSection2).subscribe(function (response) {
                      if (response.status == 'Success') {
                        var sectionMoodleId = response.response.data[0].id;
                        var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
                        ;
                        var date = new Date();
                        var getCurrentMonth = months[date.getMonth()];
                        var payloadQuizMoodle = {
                          moodle_course_id: _this20.moodleCourseId,
                          moodle_section_id: sectionMoodleId,
                          name: 'Moodle Section' + ' ' + _this20.selectionPathName + ' ' + getCurrentMonth,
                          description: 'Moodle Section' + ' ' + _this20.selectionPathName + ' ' + getCurrentMonth,
                          timeopen: _this20.examCbtDetailsDataForm.value.session_start_time,
                          timeclose: _this20.examCbtDetailsDataForm.value.session_end_time
                        };

                        _this20.chartService.insertMoodleQuiz(payloadQuizMoodle).subscribe(function (response2) {
                          if (response2.status == 'Success') {
                            _this20.loadSuccess();

                            _this20.loading = false;

                            _this20.closeDetailsCBTSession();

                            _this20.loadDetailsCBTData(_this20.cbtId);
                          } else {
                            _this20.broadcasterService.notifBroadcast(true, {
                              title: response.status,
                              msg: response.message,
                              timeout: 5000,
                              theme: 'default',
                              position: 'top-right',
                              type: 'error'
                            });

                            _this20.loading = false;
                          }
                        });
                      } else {
                        _this20.broadcasterService.notifBroadcast(true, {
                          title: response.status,
                          msg: response.message,
                          timeout: 5000,
                          theme: 'default',
                          position: 'top-right',
                          type: 'error'
                        });

                        _this20.loading = false;
                      }
                    });
                  } else {
                    _this20.loadSuccess();

                    _this20.loading = false;

                    _this20.closeDetailsCBTSession();

                    _this20.loadDetailsCBTData(_this20.cbtId);
                  }
                } else {
                  _this20.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });

                  _this20.loading = false;
                }
              } else {
                _this20.broadcasterService.notifBroadcast(true, {
                  title: res.status,
                  msg: res.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });

                _this20.loading = false;
                _this20.loading = false;
              }
            }, function (reason) {
              _this20.broadcasterService.notifBroadcast(true, {
                title: reason.err.status,
                msg: reason.err.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });

              _this20.loading = false;
            });
          }
        }
      }, {
        key: "loadSectionId",
        value: function loadSectionId(moodleCourseId) {
          var _this21 = this;

          this.loadingSection = true;
          this.chartService.getMoodleSection("?moodle_course_id=".concat(moodleCourseId)).subscribe(function (response) {
            if (response.length !== 0) {
              for (var i = 0; i < response.length; i++) {
                if (response[i].name == 'Sesi 1') {
                  _this21.moodleSectionSession1Id = response[i].id;
                } else if (response[i].name == 'Sesi 2') {
                  _this21.moodleSectionSession2Id = response[i].id;
                } else if (response[i].name == 'Sesi 3') {
                  _this21.moodleSectionSession3Id = response[i].id;
                }
              }

              if (response.length == 3) {
                _this21.loadingSection = false;
                _this21.loadtableExamCBTDetails = false;
                _this21.haveDataSessionOneTwoThree = true;
                _this21.enableMoodleGroup = true;
              } else {
                _this21.loadingSection = false;
                _this21.loadtableExamCBTDetails = false;
                _this21.haveDataSessionOneTwoThree = false;
                _this21.enableMoodleGroup = false;
              }
            } else {
              _this21.loadingSection = false;
              _this21.loadtableExamCBTDetails = false;
            }
          });
        }
      }, {
        key: "createMoodleGroup",
        value: function createMoodleGroup() {
          var _this22 = this;

          this.loading = true;

          if (this.enableMoodleGroup) {
            var moodleGroupArrays = {
              moodle_course_id: this.moodleCourseId,
              path_exam_detail_id: this.examId,
              sections: [{
                moodle_section_id: this.moodleSectionSession1Id,
                increment: 1
              }, {
                moodle_section_id: this.moodleSectionSession2Id,
                increment: 2
              }, {
                moodle_section_id: this.moodleSectionSession3Id,
                increment: 3
              }]
            };
            var jsonGroup = JSON.stringify(moodleGroupArrays);
            var payload = {
              json: jsonGroup
            };
            this.chartService.insertMoodleGroup(payload).subscribe(function (response) {
              if (response.status == 'Success') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                  position: 'center',
                  type: 'success',
                  title: response.status,
                  text: response.message,
                  showConfirmButton: true,
                  allowOutsideClick: false
                });
                _this22.loading = false;
                _this22.haveMoodleGroup = true;
              } else {
                _this22.broadcasterService.notifBroadcast(true, {
                  title: response.status,
                  msg: response.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });

                _this22.loading = false;
              }
            }, function (reason) {
              _this22.broadcasterService.notifBroadcast(true, {
                title: reason.err.status,
                msg: reason.err.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });

              _this22.loading = false;
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              position: 'center',
              type: 'warning',
              title: this.warning,
              text: this.mappingGrupText,
              showConfirmButton: true,
              allowOutsideClick: false
            });
            this.loading = false;
          }
        }
      }, {
        key: "createPsikotestData",
        value: function createPsikotestData() {
          var _this23 = this;

          if (this.examPsikotestDataForm.valid) {
            this.loading = true;

            switch (this.formType) {
              case 'input':
                var dataCreate = {};
                dataCreate = {
                  selection_path_id: this.id,
                  exam_type_id: 2,
                  start_date: this.examPsikotestDataForm.controls['exam_date'].value + " " + this.examPsikotestDataForm.controls['start_date'].value,
                  end_date: this.examPsikotestDataForm.controls['exam_date'].value + " " + this.examPsikotestDataForm.controls['end_date'].value,
                  quota: this.examPsikotestDataForm.controls['quota'].value,
                  active_status: '1'
                };
                this.chartService.postExamTimeData(dataCreate).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this23.loadSuccess();

                      _this23.renderExamTimePsikotest();

                      _this23.closePsikotestModals();
                    } else {
                      _this23.loadError();
                    }
                  } else {
                    _this23.loadError();
                  }
                }, function (reason) {
                  _this23.loadError();
                });
                break;

              case 'edit':
                var dataUpdate = {};
                dataUpdate = {
                  id: this.examId,
                  selection_path_id: this.id,
                  start_date: this.examPsikotestDataForm.value.exam_date + " " + this.examPsikotestDataForm.value.start_date,
                  end_date: this.examPsikotestDataForm.value.exam_date + " " + this.examPsikotestDataForm.value.end_date,
                  quota: this.examPsikotestDataForm.controls['quota'].value,
                  active_status: '1',
                  exam_type_id: 2
                };
                this.chartService.updExamTimeData(dataUpdate).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this23.loadSuccess();

                      _this23.renderExamTimePsikotest();

                      _this23.closePsikotestModals();
                    } else {
                      _this23.loadError();
                    }
                  } else {
                    _this23.loadError();
                  }
                }, function (reason) {
                  _this23.loadError();
                });
                break;

              default:
                break;
            }
          }
        }
      }, {
        key: "deleteExamsPsikotestDatas",
        value: function deleteExamsPsikotestDatas(data) {
          var _this24 = this;

          var datas = {
            id: data.id,
            active_status: "0",
            selection_path_id: data.selection_path_id,
            start_date: data.origin_start_date,
            exam_type_id: 2
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
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
              _this24.loadtableExamPsikotest = true;

              _this24.chartService.updExamTimeData(datas).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'success',
                      title: _this24.successDel,
                      showConfirmButton: false,
                      timer: 2000
                    });

                    _this24.renderExamTimePsikotest();

                    _this24.loadtableExamPsikotest = false;
                    _this24;
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'error',
                      title: _this24.failedDel,
                      showConfirmButton: false,
                      timer: 2000
                    });
                    _this24.loadtableExamPsikotest = false;
                  }
                } else {
                  _this24.loadError();
                }
              }, function (reason) {
                _this24.loadError();
              });
            }
          });
        }
      }, {
        key: "createInterviewData",
        value: function createInterviewData() {
          var _this25 = this;

          if (this.examInterviewDataForm.valid) {
            this.loading = true;

            switch (this.formType) {
              case 'input':
                var dataCreate = {};
                dataCreate = {
                  selection_path_id: this.id,
                  exam_type_id: 3,
                  start_date: this.examInterviewDataForm.controls['exam_date'].value + " " + this.examInterviewDataForm.controls['start_date'].value,
                  end_date: this.examInterviewDataForm.controls['exam_date'].value + " " + this.examInterviewDataForm.controls['end_date'].value,
                  quota: this.examInterviewDataForm.controls['quota'].value,
                  active_status: '1'
                };
                this.chartService.postExamTimeData(dataCreate).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this25.loadSuccess();

                      _this25.renderExamTimeInterview();

                      _this25.closeInterviewModals();
                    } else {
                      _this25.loadError();
                    }
                  } else {
                    _this25.loadError();
                  }
                }, function (reason) {
                  _this25.loadError();
                });
                break;

              case 'edit':
                var dataUpdate = {};
                dataUpdate = {
                  id: this.examId,
                  selection_path_id: this.id,
                  start_date: this.examInterviewDataForm.value.exam_date + " " + this.examInterviewDataForm.value.start_date,
                  end_date: this.examInterviewDataForm.value.exam_date + " " + this.examInterviewDataForm.value.end_date,
                  quota: this.examInterviewDataForm.controls['quota'].value,
                  active_status: '1',
                  exam_type_id: 3
                };
                this.chartService.updExamTimeData(dataUpdate).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this25.loadSuccess();

                      _this25.renderExamTimeInterview();

                      _this25.closeInterviewModals();
                    } else {
                      _this25.loadError();
                    }
                  } else {
                    _this25.loadError();
                  }
                }, function (reason) {
                  _this25.loadError();
                });
                break;

              default:
                break;
            }
          }
        }
      }, {
        key: "deleteExamsInterviewDatas",
        value: function deleteExamsInterviewDatas(data) {
          var _this26 = this;

          var datas = {
            id: data.id,
            active_status: "0",
            selection_path_id: data.selection_path_id,
            start_date: data.origin_start_date,
            exam_type_id: 3
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
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
              _this26.loadtableExamInterview = true;

              _this26.chartService.updExamTimeData(datas).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'success',
                      title: _this26.successDel,
                      showConfirmButton: false,
                      timer: 2000
                    });

                    _this26.renderExamTimeInterview();

                    _this26.loadtableExamInterview = false;
                    _this26;
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'error',
                      title: _this26.failedDel,
                      showConfirmButton: false,
                      timer: 2000
                    });
                    _this26.loadtableExamInterview = false;
                  }
                } else {
                  _this26.loadError();
                }
              }, function (reason) {
                _this26.loadError();
              });
            }
          });
        }
      }, {
        key: "createTPAData",
        value: function createTPAData() {
          var _this27 = this;

          if (this.examTPADataForm.valid) {
            this.loading = true;

            switch (this.formType) {
              case 'input':
                var dataCreate = {};
                dataCreate = {
                  selection_path_id: this.id,
                  exam_type_id: 4,
                  start_date: this.examTPADataForm.controls['exam_date'].value + " " + this.examTPADataForm.controls['start_date'].value,
                  end_date: this.examTPADataForm.controls['exam_date'].value + " " + this.examTPADataForm.controls['end_date'].value,
                  quota: this.examTPADataForm.controls['quota'].value,
                  active_status: '1'
                };
                this.chartService.postExamTimeData(dataCreate).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this27.loadSuccess();

                      _this27.renderExamTimeTPA();

                      _this27.closeTPAModals();
                    } else {
                      _this27.loadError();
                    }
                  } else {
                    _this27.loadError();
                  }
                }, function (reason) {
                  _this27.loadError();
                });
                break;

              case 'edit':
                var dataUpdate = {};
                dataUpdate = {
                  id: this.examId,
                  selection_path_id: this.id,
                  start_date: this.examTPADataForm.value.exam_date + " " + this.examTPADataForm.value.start_date,
                  end_date: this.examTPADataForm.value.exam_date + " " + this.examTPADataForm.value.end_date,
                  quota: this.examTPADataForm.controls['quota'].value,
                  active_status: '1',
                  exam_type_id: 4
                };
                this.chartService.updExamTimeData(dataUpdate).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this27.loadSuccess();

                      _this27.renderExamTimeTPA();

                      _this27.closeTPAModals();
                    } else {
                      _this27.loadError();
                    }
                  } else {
                    _this27.loadError();
                  }
                }, function (reason) {
                  _this27.loadError();
                });
                break;

              default:
                break;
            }
          }
        }
      }, {
        key: "deleteExamsTPADatas",
        value: function deleteExamsTPADatas(data) {
          var _this28 = this;

          var datas = {
            id: data.id,
            active_status: "0",
            selection_path_id: data.selection_path_id,
            start_date: data.origin_start_date,
            exam_type_id: 4
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
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
              _this28.loadtableExamTPA = true;

              _this28.chartService.updExamTimeData(datas).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'success',
                      title: _this28.successDel,
                      showConfirmButton: false,
                      timer: 2000
                    });

                    _this28.renderExamTimeTPA();

                    _this28.loadtableExamTPA = false;
                    _this28;
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'error',
                      title: _this28.failedDel,
                      showConfirmButton: false,
                      timer: 2000
                    });
                    _this28.loadtableExamTPA = false;
                  }
                } else {
                  _this28.loadError();
                }
              }, function (reason) {
                _this28.loadError();
              });
            }
          });
        } // create step 2

      }, {
        key: "createExamTimeData",
        value: function createExamTimeData() {
          var _this29 = this;

          if (this.examTimeMappingDataForm.valid) {
            this.loading = true;

            switch (this.formType) {
              case 'input':
                var dataCreate = {
                  selection_path_id: this.id,
                  start_date: this.examTimeMappingDataForm.controls['exam_date'].value + " " + this.examTimeMappingDataForm.controls['start_date'].value,
                  end_date: this.examTimeMappingDataForm.controls['exam_date'].value + " " + this.examTimeMappingDataForm.controls['end_date'].value,
                  quota: this.examTimeMappingDataForm.controls['quota'].value,
                  active_status: '1',
                  session: this.session
                };
                this.chartService.postExamTimeData(dataCreate).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this29.loadSuccess();

                      _this29.loading = false;

                      _this29.examTimeModal.hide(); // this.renderExamTime();
                      // this.renderLocation();


                      _this29.createSelectionData();

                      _this29.activeStatusStep3 = '1'; // this.loadExamLocationSelectionData();
                    } else {
                      _this29.loadError();
                    }
                  } else {
                    _this29.loadError();
                  }
                }, function (reason) {
                  _this29.loadError();
                });
                break;

              case 'edit':
                var data = {
                  id: this.examTimeId,
                  selection_path_id: this.id,
                  start_date: this.examTimeMappingDataForm.value.exam_date + " " + this.examTimeMappingDataForm.value.start_date,
                  end_date: this.examTimeMappingDataForm.value.exam_date + " " + this.examTimeMappingDataForm.value.end_date,
                  quota: this.examTimeMappingDataForm.controls['quota'].value,
                  active_status: '1',
                  session: this.session
                };
                this.chartService.updExamTimeData(data).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this29.loadSuccess();

                      _this29.activeStatusStep3 = '1';

                      _this29.examTimeModal.hide(); // this.renderExamTime();
                      // this.renderLocation();


                      _this29.createSelectionData();

                      _this29.loading = false; // this.renderExamLocation();
                      // this.loadExamLocationSelectionData();
                    } else {
                      _this29.loadError();
                    }
                  } else {
                    _this29.loadError();
                  }
                }, function (reason) {
                  _this29.loadError();
                });
                break;

              default:
                break;
            }
          }
        } // delete step 2

      }, {
        key: "deleteExamsLocDatas",
        value: function deleteExamsLocDatas(data) {
          var _this30 = this;

          var datas = {
            id: data.id,
            active_status: "0",
            selection_path_id: data.selection_path_id,
            location_exam_id: this.locationTime
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
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
              _this30.loadtableExamLocData = true;

              _this30.chartService.updExamLocationSelectionData(datas).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'success',
                      title: _this30.successDel,
                      showConfirmButton: false,
                      timer: 2000
                    }); // this.renderLocation();

                    _this30.createSelectionData();

                    _this30.loadtableExamLocData = false;
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'error',
                      title: _this30.failedDel,
                      showConfirmButton: false,
                      timer: 2000
                    });
                    _this30.loadtableExamLocData = false;
                  }
                } else {
                  _this30.loadError();
                }
              }, function (reason) {
                _this30.loadError();
              });
            }
          });
        } // delete step 2

      }, {
        key: "deleteExamsTimeDatas",
        value: function deleteExamsTimeDatas(data) {
          var _this31 = this;

          var datas = {
            id: data.id,
            active_status: "0",
            selection_path_id: data.selection_path_id,
            start_date: data.origin_start_date,
            end_date: data.origin_end_date
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
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
              _this31.loadtableExamTimeData = true;

              _this31.chartService.updExamTimeData(datas).subscribe(function (res) {
                if (res != null) {
                  if (res.status == 'Success') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'success',
                      title: _this31.successDel,
                      showConfirmButton: false,
                      timer: 2000
                    }); // this.renderExamTime();

                    _this31.createSelectionData();

                    _this31.loadtableExamTimeData = false;
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      position: 'center',
                      type: 'error',
                      title: _this31.failedDel,
                      showConfirmButton: false,
                      timer: 2000
                    });
                    _this31.loadtableExamTimeData = false;
                  }
                } else {
                  _this31.loadError();
                }
              }, function (reason) {
                _this31.loadError();
              });
            }
          });
        } // create step 4

      }, {
        key: "createDocumentRequirementsData",
        value: function createDocumentRequirementsData() {
          var _this32 = this;

          if (this.documentRequirementsForm.valid) {
            this.loading = true;

            if (this.isReport) {
              switch (this.formType) {
                case 'input':
                  var arrayToObjectTechnic = Object.assign.apply(Object, [{}].concat(_toConsumableArray(this.mappingTechnic)));
                  var arrayToObjectNonTechnic = Object.assign.apply(Object, [{}].concat(_toConsumableArray(this.mappingNonTechnic)));
                  var dataCreate = {};
                  dataCreate = {
                    selection_path_id: this.id,
                    document_type_id: this.documentType,
                    active_status: this.documentRequirementsForm.value.active_status === '1' ? true : false,
                    required: this.documentRequirementsForm.value.mandatory_doc === '1' ? true : false,
                    mapping_report_subject_path_technic: arrayToObjectTechnic,
                    mapping_report_subject_path_non_technic: arrayToObjectNonTechnic
                  };
                  var myJson = JSON.stringify(dataCreate);
                  var payload = {
                    json: myJson
                  };
                  this.chartService.createRaportRequirementDocument(payload).subscribe(function (res) {
                    if (res != null) {
                      if (res.status == 'Success') {
                        _this32.loadSuccess();

                        _this32.documentRequirementsModal.hide();

                        _this32.renderDocumentRequirements();

                        _this32.documentRequirementsForm.reset();
                      } else {
                        _this32.loadError();
                      }
                    } else {
                      _this32.loadError();
                    }
                  }, function (reason) {
                    _this32.loadError();
                  });
                  break;

                case 'edit':
                  this.mappingTechnic.map(function (x) {
                    x.id = _this32.mappingTechnicId, x.selection_path_id = _this32.id, x.active_status = _this32.documentRequirementsForm.value.active_status === '1' ? true : false, x.is_technic = true;
                  });
                  this.mappingNonTechnic.map(function (y) {
                    y.id = _this32.mappingNonTechnicId, y.selection_path_id = _this32.id, y.active_status = _this32.documentRequirementsForm.value.active_status === '1' ? true : false, y.is_technic = false;
                  });
                  var arrayToObjectTechnicUpd = Object.assign.apply(Object, [{}].concat(_toConsumableArray(this.mappingTechnic)));
                  var arrayToObjectNonTechnicUpd = Object.assign.apply(Object, [{}].concat(_toConsumableArray(this.mappingNonTechnic)));
                  var dataUpdate = {};
                  dataUpdate = {
                    id: this.documentSelectionId,
                    selection_path_id: this.id,
                    document_type_id: this.documentType,
                    active_status: this.documentRequirementsForm.value.active_status === '1' ? true : false,
                    required: this.documentRequirementsForm.value.mandatory_doc === '1' ? true : false,
                    mapping_report_subject_path_technic: arrayToObjectTechnicUpd,
                    mapping_report_subject_path_non_technic: arrayToObjectNonTechnicUpd
                  };
                  var myJsonUpdate = JSON.stringify(dataUpdate);
                  var payloadUpdate = {
                    json: myJsonUpdate
                  };
                  this.chartService.updateRaportRequirementDocument(payloadUpdate).subscribe(function (res) {
                    if (res != null) {
                      if (res.status == 'Success') {
                        _this32.loadSuccess();

                        _this32.documentRequirementsModal.hide();

                        _this32.renderDocumentRequirements();

                        _this32.documentRequirementsForm.reset();
                      } else {
                        _this32.loadError();
                      }
                    } else {
                      _this32.loadError();
                    }
                  }, function (reason) {
                    _this32.loadError();
                  });
                  break;

                default:
                  break;
              }
            } else if (this.isUtbkDocument) {
              switch (this.formType) {
                case 'input':
                  var arrayToObjectScience = Object.assign.apply(Object, [{}].concat(_toConsumableArray(this.mappingUtbkScience)));
                  var arrayToObjectNonScience = Object.assign.apply(Object, [{}].concat(_toConsumableArray(this.mappingUtbkNonScience)));
                  var _dataCreate = {};
                  _dataCreate = {
                    selection_path_id: this.id,
                    document_type_id: this.documentType,
                    active_status: this.documentRequirementsForm.value.active_status === '1' ? true : false,
                    required: this.documentRequirementsForm.value.mandatory_doc === '1' ? true : false,
                    mapping_utbk_path_science: arrayToObjectScience,
                    mapping_utbk_path_non_science: arrayToObjectNonScience
                  };

                  var _myJson = JSON.stringify(_dataCreate);

                  var _payload = {
                    json: _myJson
                  };
                  this.chartService.createUtbkRequirementDocument(_payload).subscribe(function (res) {
                    if (res != null) {
                      if (res.status == 'Success') {
                        _this32.loadSuccess();

                        _this32.closeDocumentReqModals();

                        _this32.renderDocumentRequirements();
                      } else {
                        _this32.loadError();
                      }
                    } else {
                      _this32.loadError();
                    }
                  }, function (reason) {
                    _this32.loadError();
                  });
                  break;

                case 'edit':
                  this.mappingUtbkScience.map(function (x) {
                    x.id = _this32.mappingTechnicId, x.selection_path_id = _this32.id, x.active_status = _this32.documentRequirementsForm.value.active_status === '1' ? true : false, x.is_science = true;
                  });
                  this.mappingUtbkNonScience.map(function (y) {
                    y.id = _this32.mappingNonTechnicId, y.selection_path_id = _this32.id, y.active_status = _this32.documentRequirementsForm.value.active_status === '1' ? true : false, y.is_science = false;
                  });

                  var _arrayToObjectTechnicUpd = Object.assign.apply(Object, [{}].concat(_toConsumableArray(this.mappingUtbkScience)));

                  var _arrayToObjectNonTechnicUpd = Object.assign.apply(Object, [{}].concat(_toConsumableArray(this.mappingUtbkNonScience)));

                  var _dataUpdate = {};
                  _dataUpdate = {
                    id: this.documentSelectionId,
                    selection_path_id: this.id,
                    document_type_id: this.documentType,
                    active_status: this.documentRequirementsForm.value.active_status === '1' ? true : false,
                    required: this.documentRequirementsForm.value.mandatory_doc === '1' ? true : false,
                    mapping_utbk_path_science: _arrayToObjectTechnicUpd,
                    mapping_utbk_path_non_science: _arrayToObjectNonTechnicUpd
                  };

                  var _myJsonUpdate = JSON.stringify(_dataUpdate);

                  var _payloadUpdate = {
                    json: _myJsonUpdate
                  };
                  this.chartService.updateUtbkRequirementDocument(_payloadUpdate).subscribe(function (res) {
                    if (res != null) {
                      if (res.status == 'Success') {
                        _this32.loadSuccess();

                        _this32.renderDocumentRequirements();

                        _this32.closeDocumentReqModals();
                      } else {
                        _this32.loadError();
                      }
                    } else {
                      _this32.loadError();
                    }
                  }, function (reason) {
                    _this32.loadError();
                  });
                  break;

                default:
                  break;
              }
            } else {
              switch (this.formType) {
                case 'input':
                  var _payload2 = {};
                  var data = {
                    selection_path_id: this.id,
                    document_type_id: this.documentRequirementsForm.controls['document_type_id'].value,
                    active_status: this.documentRequirementsForm.controls['active_status'].value,
                    required: this.documentRequirementsForm.controls['mandatory_doc'].value,
                    is_value: this.documentRequirementsForm.controls['is_input_nilai'].value
                  };
                  this.chartService.postSelectionDocument(data).subscribe(function (res) {
                    if (res != null) {
                      if (res.status == 'Success') {
                        _this32.loadSuccess();

                        _this32.documentRequirementsModal.hide();

                        _this32.documentRequirementsForm.reset();

                        _this32.renderDocumentRequirements();
                      } else {
                        _this32.loadError();
                      }
                    } else {
                      _this32.loadError();
                    }
                  }, function (reason) {
                    _this32.loadError();
                  });
                  break;

                case 'edit':
                  var _dataUpdate2 = {
                    id: this.documentSelectionId,
                    selection_path_id: this.id,
                    document_type_id: this.documentRequirementsForm.value.document_type_id,
                    active_status: this.documentRequirementsForm.value.active_status,
                    required: this.documentRequirementsForm.value.mandatory_doc,
                    is_value: this.documentRequirementsForm.controls['is_input_nilai'].value
                  };
                  this.chartService.updSelectionDocument(_dataUpdate2).subscribe(function (res) {
                    if (res != null) {
                      if (res.status == 'Success') {
                        _this32.loadSuccess();

                        _this32.documentRequirementsModal.hide();

                        _this32.documentRequirementsForm.reset();

                        _this32.renderDocumentRequirements();
                      } else {
                        _this32.loadError();
                      }
                    } else {
                      _this32.loadError();
                    }
                  }, function (reason) {
                    _this32.loadError();
                  });
                  break;

                default:
                  break;
              }
            }
          }
        } // create step 5

      }, {
        key: "createDetailPINPriceData",
        value: function createDetailPINPriceData() {
          var _this33 = this;

          if (this.pinPriceForm.valid) {
            this.loading = true;

            switch (this.formType) {
              case 'input':
                var data = {
                  selection_path_id: this.id,
                  price: this.pinPriceForm.controls['price'].value,
                  maks_study_program: this.pinPriceForm.controls['maks_study_program'].value,
                  active_status: this.pinPriceForm.controls['active_status'].value,
                  // category: this.categoryFormPrice,
                  is_medical: this.isMedical
                };
                this.chartService.postPINPriceData(data).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this33.loadSuccess();

                      _this33.pinPriceDataModal.hide();

                      _this33.renderDetailPINPrice();

                      _this33.checkActivePinPrice();

                      _this33.loading = false;
                    } else {
                      _this33.loadError();

                      _this33.loading = false;
                    }
                  } else {
                    _this33.loadError();

                    _this33.loading = false;
                  }
                }, function (reason) {
                  _this33.loadError();
                });
                break;

              case 'edit':
                var dataUpdate = {
                  id: this.pinPriceId,
                  selection_path_id: this.id,
                  price: this.pinPriceForm.value.price,
                  maks_study_program: this.pinPriceForm.value.maks_study_program,
                  active_status: this.pinPriceForm.value.active_status,
                  is_medical: this.isMedical
                };
                this.chartService.updPINPriceData(dataUpdate).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this33.loadSuccess();

                      _this33.pinPriceDataModal.hide();

                      _this33.renderDetailPINPrice();

                      _this33.checkActivePinPrice();

                      _this33.loading = false;
                    } else {
                      _this33.loadError();

                      _this33.loading = false;
                    }
                  } else {
                    _this33.loadError();

                    _this33.loading = false;
                  }
                }, function (reason) {
                  _this33.loadError();
                });
                break;

              default:
                break;
            }
          }
        } // create step 6

      }, {
        key: "createDetailStudyProgramMappingData1",
        value: function createDetailStudyProgramMappingData1() {
          var _this34 = this;

          if (this.studyProgramForm.valid) {
            switch (this.formType) {
              case 'input':
                var dataCreate = {
                  selection_path_id: this.id,
                  program_study_id: this.studyProgramForm.controls['program_study_id'].value,
                  is_technic: this.isTechnic === '1' ? 'true' : 'false',
                  minimum_donation: this.studyProgramForm.controls['minimum_donation'].value,
                  quota: this.studyProgramForm.controls['quota'].value,
                  active_status: this.studyProgramForm.controls['active_status'].value
                };
                this.chartService.postMappingProgramStudyData(dataCreate).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this34.loadSuccess();

                      _this34.studyProgramDataModal.hide();

                      _this34.renderDetailStudyProgramMapping();
                    } else {
                      _this34.loadError();
                    }
                  } else {
                    _this34.loadError();
                  }
                }, function (reason) {
                  _this34.loadError();
                });
                break;

              case 'edit':
                var dataUpdate = {
                  id: this.studyProgramId,
                  selection_path_id: this.id,
                  program_study_id: this.studyProgramForm.value.program_study_id,
                  is_technic: this.isTechnic === '1' ? 'true' : 'false',
                  minimum_donation: this.studyProgramForm.controls['minimum_donation'].value,
                  quota: this.studyProgramForm.value.quota,
                  active_status: this.studyProgramForm.value.active_status
                };
                this.chartService.updMappingProgramStudyData(dataUpdate).subscribe(function (res) {
                  if (res != null) {
                    if (res.status == 'Success') {
                      _this34.loadSuccess();

                      _this34.studyProgramDataModal.hide();

                      _this34.renderDetailStudyProgramMapping();
                    } else {
                      _this34.loadError();
                    }
                  } else {
                    _this34.loadError();
                  }
                }, function (reason) {
                  _this34.loadError();
                });
                break;
            }
          }
        } // Change status aktif in modal mapping study program all

      }, {
        key: "changeSwitch",
        value: function changeSwitch(id, e) {
          if (e.target.checked === true) {
            this.statusChecked = '1';
          } else if (e.target.checked === false) {
            this.statusChecked = '0';
          } else {
            this.statusChecked = '1';
          }
        } // Change is technic in modal mapping study program all

      }, {
        key: "changeTechnic",
        value: function changeTechnic(id, e) {
          if (e.target.checked === true) {
            this.isTechnicChecked = '1';
            this.checksTechnic2 = true;
          } else if (e.target.checked === false) {
            this.isTechnicChecked = '0';
            this.checksTechnic2 = false;
          } else {
            this.isTechnicChecked = '0';
            this.checksTechnic2 = false;
          }
        } // Create data mapping all study program

      }, {
        key: "createMappingAllStudyProgram",
        value: function createMappingAllStudyProgram(data) {
          var _this35 = this;

          this.loadTableMapping = true;
          var dataCreate = {
            selection_path_id: this.id,
            program_study_id: data.id,
            is_technic: this.isTechnicMapp === '1' ? 'true' : 'false',
            quota: this.mappingStudyProgramForm.controls['quota'].value,
            minimum_donation: this.mappingStudyProgramForm.controls['sdp'].value,
            active_status: this.statusChecked ? this.statusChecked : '1'
          };
          this.chartService.postMappingProgramStudyData(dataCreate).subscribe(function (res) {
            if (res != null) {
              if (res.status == 'Success') {
                _this35.loadTableMapping = false;

                _this35.mappingStudyProgramForm.reset();

                _this35.loadSuccess();

                _this35.renderDetailStudyProgramMapping();

                _this35.getTableStudyProgramAll();

                _this35.renderMappStudyProgramForm();

                _this35.statusChecked = '1';
                _this35.checks = true;
              } else {
                _this35.loadError();
              }
            } else {
              _this35.loadError();
            }
          }, function (reason) {
            _this35.loadError();
          });
        } // apply filter step 4

      }, {
        key: "applyFiltersDocumentReq",
        value: function applyFiltersDocumentReq(activeStatusStep4) {
          this.loadtableSelectionDocumentData = true;

          if (this.activeStatusStep4 === '1') {
            this.renderDocumentRequirements();
          } else if (this.activeStatusStep4 === '0') {
            this.renderDocumentRequirements();
          } else {
            this.renderDocumentRequirements();
          }
        } // apply filter step 5

      }, {
        key: "applyFiltersPinPrice",
        value: function applyFiltersPinPrice(activeStatusStep5) {
          this.loadtablePINPriceData = true;
          this.activeStatusStep5 = activeStatusStep5;
          this.renderDetailPINPrice();
        } // apply filter step 6

      }, {
        key: "applyFilter",
        value: function applyFilter(statusfilter) {
          this.loadtableMappStudyProgramData = true;
          this.statusfilter = statusfilter;
          this.renderDetailStudyProgramMapping();
        }
      }, {
        key: "goToStep1",
        value: function goToStep1() {
          this.wizard.navigation.goToStep(1);
          this.renderExamTimeCBT();
          this.renderExamTimePsikotest();
          this.renderExamTimeInterview();
          this.renderExamTimeTPA(); // this.renderExamTimeCBTDetails();
          // this.dtTrigger5.next();

          this.tableExamCBTDetails = [];
        }
      }, {
        key: "goToStep2",
        value: function goToStep2() {
          var _this36 = this;

          this.wizard.navigation.goToStep(1);
          this.loadtableExamTimeData = true;
          this.chartService.getExamTimeDatas("selection_path_id=".concat(this.id, "&active_status=1")).subscribe(function (response) {
            setTimeout(function () {
              _this36.dtTrigger1.next();

              _this36.loadtableExamTimeData = false;
            }, 3000);
          }, function (err) {
            _this36.loadtableExamTimeData = false;
          });
        }
      }, {
        key: "goToStep3",
        value: function goToStep3() {
          this.wizard.navigation.goToStep(2);
          this.activeStatusStep4 = '1';
          this.renderDocumentRequirements();
        }
      }, {
        key: "goToStep5",
        value: function goToStep5() {
          this.wizard.navigation.goToStep(3);
          this.activeStatusStep5 = '1';
          this.renderDetailPINPrice();
          this.checkActivePinPrice();
        }
      }, {
        key: "goToStep6",
        value: function goToStep6() {
          this.wizard.navigation.goToStep(4);
          this.statusfilter = '1';
          this.renderDetailStudyProgramMapping();
          this.loadStudyProgramData();
        }
      }, {
        key: "getTableExamCBT",
        value: function getTableExamCBT() {
          var _this37 = this;

          this.loadtableExamCBT = true;
          this.chartService.getExamTimeDatas("selection_path_id=".concat(this.id, "&active_status=1&exam_type_id=1")).subscribe(function (response) {
            _this37.tableExamCBT = response.data;

            _this37.dtTrigger.next();

            _this37.loadtableExamCBT = false;
          }, function (err) {
            _this37.loadtableExamCBT = false;
          });
        }
      }, {
        key: "getTableExamPsikotest",
        value: function getTableExamPsikotest() {
          var _this38 = this;

          this.loadtableExamPsikotest = true;
          this.chartService.getExamTimeDatas("selection_path_id=".concat(this.id, "&active_status=1&exam_type_id=2")).subscribe(function (response) {
            _this38.tableExamPsikotest = response.data;

            _this38.dtTrigger1.next();

            _this38.loadtableExamPsikotest = false;
          }, function (err) {
            _this38.loadtableExamPsikotest = false;
          });
        }
      }, {
        key: "getTableExamInterview",
        value: function getTableExamInterview() {
          var _this39 = this;

          this.loadtableExamInterview = true;
          this.chartService.getExamTimeDatas("selection_path_id=".concat(this.id, "&active_status=1&exam_type_id=3")).subscribe(function (response) {
            _this39.tableExamInterview = response.data;

            _this39.dtTrigger2.next();

            _this39.loadtableExamInterview = false;
          }, function (err) {
            _this39.loadtableExamInterview = false;
          });
        }
      }, {
        key: "getTableExamTPA",
        value: function getTableExamTPA() {
          var _this40 = this;

          this.loadtableExamTPA = true;
          this.chartService.getExamTimeDatas("selection_path_id=".concat(this.id, "&active_status=1&exam_type_id=4")).subscribe(function (response) {
            _this40.tableExamTPA = response.data;

            _this40.dtTrigger3.next();

            _this40.loadtableExamTPA = false;
          }, function (err) {
            _this40.loadtableExamTPA = false;
          });
        } // load table step 4

      }, {
        key: "getTableDocument",
        value: function getTableDocument() {
          var _this41 = this;

          this.loadtableSelectionDocumentData = true;

          if (this.activeStatusStep4 === '1') {
            this.chartService.getSelectionDocument("selection_id=".concat(this.id, "&active_status=true")).subscribe(function (response) {
              _this41.tableDocumentReq = response.data;

              _this41.dtTrigger4.next();

              _this41.loadtableSelectionDocumentData = false;
            }, function (err) {
              _this41.loadtableSelectionDocumentData = false;
            });
          } else if (this.activeStatusStep4 === '0') {
            this.chartService.getSelectionDocument("selection_id=".concat(this.id, "&active_status=false")).subscribe(function (response) {
              _this41.tableDocumentReq = response.data;

              _this41.dtTrigger4.next();

              _this41.loadtableSelectionDocumentData = false;
            }, function (err) {
              _this41.loadtableSelectionDocumentData = false;
            });
          } else {
            this.chartService.getSelectionDocument("selection_id=".concat(this.id)).subscribe(function (response) {
              _this41.tableDocumentReq = response.data;

              _this41.dtTrigger4.next();

              _this41.loadtableSelectionDocumentData = false;
            }, function (err) {
              _this41.loadtableSelectionDocumentData = false;
            });
          }
        } // load table step 5

      }, {
        key: "getTablePinPrice",
        value: function getTablePinPrice() {
          var _this42 = this;

          this.loadtablePINPriceData = true;

          if (this.activeStatusStep5 === '1' || this.activeStatusStep5 === '0') {
            this.chartService.getPINPriceData("selection_path_id=".concat(this.id, "&active_status=").concat(this.activeStatusStep5 === '1' ? 'true' : 'false')).subscribe(function (response) {
              setTimeout(function () {
                _this42.tablePinPrice = response.data;

                _this42.dtTrigger5.next();

                _this42.loadtablePINPriceData = false;
              }, 3000);
            }, function (err) {
              _this42.loadtablePINPriceData = false;
            });
          } else {
            this.chartService.getPINPriceData("selection_path_id=".concat(this.id)).subscribe(function (response) {
              setTimeout(function () {
                _this42.tablePinPrice = response.data;

                _this42.dtTrigger5.next();

                _this42.loadtablePINPriceData = false;
              }, 3000);
            }, function (err) {
              _this42.loadtablePINPriceData = false;
            });
          }
        } // load table step 6

      }, {
        key: "getTableStudyProgram",
        value: function getTableStudyProgram() {
          var _this43 = this;

          this.loadtableMappStudyProgramData = true;

          if (this.statusfilter == '1' || this.statusfilter == '0') {
            this.chartService.getMappingProgramStudyData("selection_path_id=".concat(this.id, "&active_status=").concat(this.statusfilter === '1' ? 'true' : 'false')).subscribe(function (response) {
              setTimeout(function () {
                _this43.tableStudyProgram = response.data;

                _this43.dtTrigger6.next();

                _this43.loadtableMappStudyProgramData = false;
              }, 3000);
            }, function (err) {
              _this43.loadtableMappStudyProgramData = false;
            });
          } else {
            this.chartService.getMappingProgramStudyData("selection_path_id=".concat(this.id)).subscribe(function (response) {
              setTimeout(function () {
                _this43.tableStudyProgram = response.data;

                _this43.dtTrigger6.next();

                _this43.loadtableMappStudyProgramData = false;
              }, 3000);
            }, function (err) {
              _this43.loadtableMappStudyProgramData = false;
            });
          }
        }
      }, {
        key: "getTableStudyProgramAll",
        value: function getTableStudyProgramAll() {
          var _this44 = this;

          this.loadTableMapping = true;
          this.chartService.getProgramStudyDataWithParams("?selection_path_id=".concat(this.id, "&show_all=0")).subscribe(function (response) {
            setTimeout(function () {
              _this44.tableStudyProgramMapping = response;

              _this44.dtTrigger7.next();

              _this44.loadTableMapping = false;
            }, 3000);
          }, function (err) {
            _this44.loadTableMapping = false;
          });
        } // check length active data pin price in step 4

      }, {
        key: "checkActivePinPrice",
        value: function checkActivePinPrice() {
          var _this45 = this;

          this.chartService.getPINPriceData("selection_path_id=".concat(this.id, "&active_status=true")).subscribe(function (response) {
            if (response.data.length === 2) {
              _this45.isDataPinPriceActive = true;
              _this45.disabledGotoMapingProdi = false;
            } else {
              _this45.isDataPinPriceActive = false;
              _this45.disabledGotoMapingProdi = true;
            }
          });
        } // load table step 6 -- button mapping all

      }, {
        key: "getTableStudyProgramMappingData",
        value: function getTableStudyProgramMappingData() {
          var _this46 = this;

          this.loadTableMapping = true; // Check jika pada api ini ada studi program yg aktif

          this.chartService.getMappingProgramStudyData("selection_path_id=".concat(this.id, "&active_status=true")).subscribe(function (response) {
            if (response.data.length !== 0) {
              var dataProdiMappingBefore = response.data;
              var obj = {};
              dataProdiMappingBefore.forEach(function (o) {
                return obj[o.id] = o;
              });
              var unique_array2 = Object.keys(obj).map(function (k) {
                return obj[k];
              });
              var matches = []; // Check jika id prodi telah digunakan pada api diatas dan slice jika datanya sudah ada

              _this46.chartService.getProgramStudyData().subscribe(function (response) {
                var dataMappingProdiAfter = response; // this.dtTrigger5.next();

                dataMappingProdiAfter.forEach(function (o1) {
                  return unique_array2.forEach(function (o2) {
                    if (o1.id == o2.study_program_id) {
                      matches.push(o1);

                      _this46.chartService.getProgramStudyData().subscribe(function (resp) {
                        var dataMappingCheck = resp;

                        if (matches.length !== 0) {
                          var _loop = function _loop(i) {
                            var findIndexStudyProgram = dataMappingCheck.findIndex(function (x) {
                              return x.id === matches[i].id;
                            });

                            if (findIndexStudyProgram > -1) {
                              dataMappingCheck.splice(findIndexStudyProgram, 1);
                              _this46.tableStudyProgramMapping = dataMappingCheck;
                              _this46.loadTableMapping = false;
                            }
                          };

                          for (var i = 0; i < matches.length; i++) {
                            _loop(i);
                          }
                        }
                      });
                    }
                  });
                });
              });
            } else {
              _this46.chartService.getProgramStudyData().subscribe(function (response) {
                setTimeout(function () {
                  _this46.tableStudyProgramMapping = response;

                  _this46.dtTrigger7.next();

                  _this46.loadTableMapping = false;
                }, 3000);
              }, function (err) {
                _this46.loadTableMapping = false;
              });
            }
          });
        }
      }, {
        key: "closeStudyProgramMapping",
        value: function closeStudyProgramMapping() {
          this.studyProgramMappingData.hide();
          this.mappingStudyProgramForm.patchValue({
            quota: ''
          });
          this.mappingStudyProgramForm.patchValue({
            sdp: ''
          });
          this.renderMappStudyProgramForm();
        } // render table location step 2

      }, {
        key: "renderExamTimeCBT",
        value: function renderExamTimeCBT() {
          var _this47 = this;

          if (this.tableExamCBT.length === 0) {
            this.getTableExamCBT();
          } else {
            this.dtElements.forEach(function (dtElement, index) {
              if (index == 0) {
                dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this47.getTableExamCBT();
                });
              }
            });
          }
        } // renderExamTimeCBTDetails(): void {
        //   if (this.tableExamCBTDetails.length == 0) {
        //     this.loadDetailsCBTData(this.examId);
        //   } else {
        //     this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        //       if (index == 4) {
        //         dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //           dtInstance.destroy();
        //           this.loadDetailsCBTData(this.examId);
        //         });
        //       }
        //     });
        //   }
        // }
        // render table exam time step 2

      }, {
        key: "renderExamTimePsikotest",
        value: function renderExamTimePsikotest() {
          var _this48 = this;

          if (this.tableExamPsikotest.length === 0) {
            this.getTableExamPsikotest();
          } else {
            this.dtElements.forEach(function (dtElement, index) {
              if (index == 1) {
                dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this48.getTableExamPsikotest();
                });
              }
            });
          }
        }
      }, {
        key: "renderExamTimeInterview",
        value: function renderExamTimeInterview() {
          var _this49 = this;

          if (this.tableExamInterview.length === 0) {
            this.getTableExamInterview();
          } else {
            this.dtElements.forEach(function (dtElement, index) {
              if (index == 2) {
                dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this49.getTableExamInterview();
                });
              }
            });
          }
        }
      }, {
        key: "renderExamTimeTPA",
        value: function renderExamTimeTPA() {
          var _this50 = this;

          if (this.tableExamTPA.length === 0) {
            this.getTableExamTPA();
          } else {
            this.dtElements.forEach(function (dtElement, index) {
              if (index == 3) {
                dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this50.getTableExamTPA();
                });
              }
            });
          }
        } // render table registration steps step 3
        // renderRegStep(): void {
        //   this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        //     if (index == 2) {
        //       dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //         dtInstance.destroy();
        //       });
        //     }
        //   });
        // }
        // render table document requirements step 4

      }, {
        key: "renderDocumentRequirements",
        value: function renderDocumentRequirements() {
          var _this51 = this;

          if (this.tableDocumentReq.length == 0) {
            this.getTableDocument();
          } else {
            this.dtElements.forEach(function (dtElement, index) {
              if (index == 4) {
                dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this51.getTableDocument();
                });
              }
            });
          }
        } // render table pin price step 5

      }, {
        key: "renderDetailPINPrice",
        value: function renderDetailPINPrice() {
          var _this52 = this;

          if (this.tablePinPrice.length == 0) {
            this.getTablePinPrice();
          } else {
            this.dtElements.forEach(function (dtElement, index) {
              if (index == 5) {
                dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this52.getTablePinPrice();
                });
              }
            });
          }
        } // render table mapping study step 6

      }, {
        key: "renderDetailStudyProgramMapping",
        value: function renderDetailStudyProgramMapping() {
          var _this53 = this;

          if (this.tableStudyProgram.length == 0) {
            this.getTableStudyProgram();
          } else {
            this.dtElements.forEach(function (dtElement, index) {
              if (index == 6) {
                dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();

                  _this53.getTableStudyProgram();
                });
              }
            });
          }
        } // render table mapping study all step 6

      }, {
        key: "renderMappStudyProgramForm",
        value: function renderMappStudyProgramForm() {
          this.dtElements.forEach(function (dtElement, index) {
            if (index == 7) {
              dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              });
            }
          });
        }
      }, {
        key: "fd",
        get: function get() {
          return this.formDetailStep1.controls;
        }
      }, {
        key: "fcbt",
        get: function get() {
          return this.examCbtDataForm.controls;
        }
      }, {
        key: "fcbtdet",
        get: function get() {
          return this.examCbtDetailsDataForm.controls;
        }
      }, {
        key: "fps",
        get: function get() {
          return this.examPsikotestDataForm.controls;
        }
      }, {
        key: "fint",
        get: function get() {
          return this.examInterviewDataForm.controls;
        }
      }, {
        key: "ftpa",
        get: function get() {
          return this.examTPADataForm.controls;
        }
      }, {
        key: "fet",
        get: function get() {
          return this.examTimeMappingDataForm.controls;
        }
      }, {
        key: "frs",
        get: function get() {
          return this.registrationStepForm.controls;
        }
      }, {
        key: "fdr",
        get: function get() {
          return this.documentRequirementsForm.controls;
        }
      }, {
        key: "fpp",
        get: function get() {
          return this.pinPriceForm.controls;
        }
      }, {
        key: "fsp",
        get: function get() {
          return this.studyProgramForm.controls;
        }
      }]);

      return SelectionDataComponent;
    }();

    SelectionDataComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_2__["AdminManagementService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_11__["WizardComponent"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_11__["WizardComponent"])], SelectionDataComponent.prototype, "wizard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('examLocModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "examLocModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cbtModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "cbtModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cbtDetailsModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "cbtDetailsModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cbtSessionModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "cbtSessionModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('psikotestModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "psikotestModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('interviewModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "interviewModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tpaModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "tpaModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('examTypeModals', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "examTypeModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('examTimeModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "examTimeModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteExamTimeModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "deleteExamTimeModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('regStepModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "regStepModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('documentRequirementsModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "documentRequirementsModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pinPriceDataModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "pinPriceDataModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studyProgramDataModal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "studyProgramDataModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studyProgramMappingData', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectionDataComponent.prototype, "studyProgramMappingData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], SelectionDataComponent.prototype, "dtElements", void 0);
    SelectionDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-selection-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./selection-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-selection-data/selection-data/selection-data.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./selection-data.component.scss */
      "./src/app/theme/adm-ms-selection-data/selection-data/selection-data.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_2__["AdminManagementService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]])], SelectionDataComponent);
    /***/
  },

  /***/
  "./src/app/theme/adm-ms-selection-data/selection-data/selection-data.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/theme/adm-ms-selection-data/selection-data/selection-data.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: SelectionDataModule */

  /***/
  function srcAppThemeAdmMsSelectionDataSelectionDataSelectionDataModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionDataModule", function () {
      return SelectionDataModule;
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


    var _selection_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./selection-data.component */
    "./src/app/theme/adm-ms-selection-data/selection-data/selection-data.component.ts");
    /* harmony import */


    var _selection_data_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./selection-data-routing.module */
    "./src/app/theme/adm-ms-selection-data/selection-data/selection-data-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-archwizard/dist */
    "./node_modules/ng2-archwizard/dist/index.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng2-currency-mask */
    "./node_modules/ng2-currency-mask/index.js");
    /* harmony import */


    var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);

    var SelectionDataModule = function SelectionDataModule() {
      _classCallCheck(this, SelectionDataModule);
    };

    SelectionDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_selection_data_component__WEBPACK_IMPORTED_MODULE_3__["SelectionDataComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _selection_data_routing_module__WEBPACK_IMPORTED_MODULE_4__["SelectionDataRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_6__["ArchwizardModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]]
    })], SelectionDataModule);
    /***/
  }
}]);
//# sourceMappingURL=selection-data-selection-data-module-es5.js.map