function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.component.html": (
  /*!************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.component.html ***!
    \************************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_theme_admMrVerificationDocumentData_admMrDetailVerificationDocumentData_admMrDetailVerificationDocumentDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"text-md-left\">\n      <div class=\"page-header-title\">\n        <h5>{{ \"MENU.verification-detail-document\" | translate }}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-card cardTitle=\"{{ 'MENU.participant-data' | translate }}\" cardClass=\"card-datatable\"\n      headerClass=\"text-center text-md-left\" [options]=\"false\" [loading]=\"loading\" [hidHeader]=\"true\">\n      <div class=\"col-sm-12\">\n        <ngb-tabset [activeId]=\"selectedTab\" (tabChange)=\"changeTab($event.nextId)\">\n          <ngb-tab id=\"tabBiodata\" title=\"Data Diri\">\n            <ng-template ngbTabContent>\n              <div class=\"row m-1\">\n                <div class=\"user-profile user-card mt-2 p-2 mb-0 col-md-12 text-left\">\n                  <div class=\"card-body py-0\">\n                    <div class=\"user-about-block m-0\">\n                      <div class=\"row\">\n                        <div class=\"col-md-12 text-left\">\n                          <div class=\"change-profile text-left m-3\">\n                                <div class=\"profile-dp\">\n                                  <div class=\"position-fit d-inline-block\">\n                                    <img class=\"img-radius align-top m-r-15 wid-100 img-cover-fit\"\n                                      [src]=\"dataBiodatas.photo_url ? dataBiodatas.photo_url : 'https://cdndata.telkomuniversity.ac.id/situ-round.png'\"\n                                      alt=\"User image\">\n                                  </div>\n                                </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <h4 class=\"col-md-12 mt-3 mb-3 font-family-custom\">Data Pribadi</h4>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.fullname' | translate }}</label> <br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.fullname}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.gender' | translate }}</label> <br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.gender_name == 'FEMALE' ? 'Wanita' :\n                    'Pria'}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.religion' | translate }}</label> <br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.religion_name}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.country_birth' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.birth_country_name}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.province_birth' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.birth_province_name}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.city_birth' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.birth_city_name}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.birthdate' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.birth_date | date:'dd/MM/yyyy'}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.country_origin' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.origin_country_name}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.nationality' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.nationality_name}}</label>\n                </div>\n                <div [hidden]=\"!isIndonesianNationality\" class=\"form-group mb-2 col-md-12\">\n                  <label class=\"mb-1\">{{ 'CONTENT.NIK' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.identify_number}}</label>\n                </div>\n                <div [hidden]=\"isIndonesianNationality\" class=\"form-group mb-2 col-md-3\">\n                  <label class=\"mb-1\">{{ 'CONTENT.passport_number' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.passport_number }}</label>\n                </div>\n                <div [hidden]=\"isIndonesianNationality\" class=\"form-group mb-2 col-md-3\">\n                  <label class=\"fmb-1\">{{ 'CONTENT.passport_expired_date' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.passport_expiry_date != '-' ?\n                    (dataBiodatas.passport_expiry_date | date:'dd/MM/yyyy') : '-'}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.color-blind' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.color_blind}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.special-needs' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.special_needs !== null ?\n                    dataBiodatas.special_needs : 'Tidak'}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.phone_number' | translate }}</label> <br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.mobile_phone_number}}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.email' | translate }}</label> <br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.username}}</label>\n                </div>\n                <div class=\"col-md-12\">\n                  <hr>\n                </div>\n                <h4 class=\"col-md-12 mt-3 mb-3 font-family-custom\">{{'CONTENT.education-data' | translate}}</h4>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.ijazah-number' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.diploma_number ? dataBiodatas.diploma_number : '-' }}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-3\">\n                  <label class=\"mb-1\">{{ 'CONTENT.nis' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.nis ? dataBiodatas.nis : '-' }}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-3\">\n                  <label class=\"mb-1\">{{ 'CONTENT.nisn' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.nisn ? dataBiodatas.nisn : '-' }}</label>\n                </div>\n                <div class=\"col-md-12\">\n                  <hr>\n                </div>\n                <h4 class=\"col-md-12 mt-3 mb-3 font-family-custom\">Data Alamat</h4>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.country' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.address_country_name }}</label>\n                </div>\n                <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.province' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.address_province_name }}</label>\n                </div>\n                <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.city' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.address_city_name }}</label>\n                </div>\n                <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.district' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.address_disctrict_name }}</label>\n                </div>\n                <div class=\"form-group mb-2 col-md-6\">\n                  <label class=\"mb-1\">{{ 'CONTENT.address' | translate }}</label><br>\n                  <label class=\"form-label f-w-600 text-wrap\">{{ dataBiodatas.address_detail }}</label>\n                </div>\n                <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2 col-md-3\">\n                  <label class=\"mb-1\">{{ 'CONTENT.zipcode' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.address_postal_code }}</label>\n                </div>\n                <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2 col-md-3\">\n                  <label class=\"mb-1\">{{ 'CONTENT.home_number' | translate }}</label><br>\n                  <label class=\"form-label f-w-600\">{{ dataBiodatas.house_phone_number ?\n                    dataBiodatas.house_phone_number : '-' }}</label>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab id=\"tabParent\" title=\"Data Orang Tua\">\n            <ng-template ngbTabContent>\n              <div class=\"row m-1\">\n                <div class=\"col-12 col-md-6\" *ngIf=\"haveParents\">\n                  <app-card cardTitle=\"{{'CONTENT.father' | translate}}\" headerClass=\"text-center text-md-left\" [loading]=\"loadingParent\"\n                    [options]=\"false\">\n                    <div class=\"col-md-12\">\n                      <div class=\"row\">\n                        <div class=\"form-group mb-2 col-md-12\">\n                          <label class=\"mb-1\">{{ 'CONTENT.fathers-name' | translate }}</label> <br>\n                          <label class=\"form-label f-w-600\">{{ dataParents.father_name}}</label>\n                        </div>\n                        <div class=\"form-group mb-2 col-md-6\">\n                          <label class=\"mb-1\">{{ 'CONTENT.handphone' | translate }}</label> <br>\n                          <label class=\"form-label f-w-600\">{{ dataParents.father_mobile_phone_number}}</label>\n                        </div>\n                        <div class=\"form-group mb-2 col-md-6\">\n                          <label class=\"mb-1\">{{ 'CONTENT.nik-father' | translate }}</label> <br>\n                          <label class=\"form-label f-w-600\">{{ dataParents.father_identify_number}}</label>\n                        </div>\n                      </div>\n                    </div>\n                  </app-card>\n                </div>\n                <div class=\"col-12 col-md-6\" *ngIf=\"haveParents\">\n                  <app-card cardTitle=\"{{'CONTENT.mother' | translate}}\" headerClass=\"text-center text-md-left\" [loading]=\"loadingParent\"\n                    [options]=\"false\">\n                    <div class=\"col-md-12\">\n                      <div class=\"row\">\n                        <div class=\"form-group mb-2 col-md-12\">\n                          <label class=\"mb-1\">{{ 'CONTENT.mothers-name' | translate }}</label> <br>\n                          <label class=\"form-label f-w-600\">{{ dataParents.mother_name}}</label>\n                        </div>\n                        <div class=\"form-group mb-2 col-md-6\">\n                          <label class=\"mb-1\">{{ 'CONTENT.handphone' | translate }}</label> <br>\n                          <label class=\"form-label f-w-600\">{{ dataParents.mother_mobile_phone_number}}</label>\n                        </div>\n                        <div class=\"form-group mb-2 col-md-6\">\n                          <label class=\"mb-1\">{{ 'CONTENT.nik-mother' | translate }}</label> <br>\n                          <label class=\"form-label f-w-600\">{{ dataParents.mother_identify_number}}</label>\n                        </div>\n                      </div>\n                    </div>\n                  </app-card>\n                </div>\n                <div class=\"col-12 col-md-12\" *ngIf=\"!haveParents\">\n                  <app-card cardTitle=\"{{'CONTENT.male-relatives' | translate}}\" headerClass=\"text-center text-md-left\" [loading]=\"loadingParent\"\n                    [options]=\"false\">\n                    <div class=\"col-md-12\">\n                      <div class=\"row\">\n                        <div class=\"form-group mb-2 col-md-12\">\n                          <label class=\"mb-1\">{{ 'CONTENT.fullname' | translate }}</label> <br>\n                          <label class=\"form-label f-w-600\">{{ dataParents.guardian_name}}</label>\n                        </div>\n                        <div class=\"form-group mb-2 col-md-6\">\n                          <label class=\"mb-1\">{{ 'CONTENT.handphone' | translate }}</label> <br>\n                          <label class=\"form-label f-w-600\">{{ dataParents.guardian_mobile_phone_number}}</label>\n                        </div>\n                        <div class=\"form-group mb-2 col-md-6\">\n                          <label class=\"mb-1\">{{ 'CONTENT.NIK' | translate }}</label> <br>\n                          <label class=\"form-label f-w-600\">{{ dataParents.guardian_identify_number}}</label>\n                        </div>\n                      </div>\n                    </div>\n                  </app-card>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab id=\"tabDocument\" title=\"Dokumen\">\n            <ng-template ngbTabContent>\n              <div class=\"col-md-12 mt-2\">\n                <app-card headerClass=\"text-center text-md-left\" [hidHeader]=\"true\" [options]=\"false\"\n                  [loading]=\"loadTableDocument\">\n                  <div class=\"table-responsive pb-1 mt-2\">\n                    <table class=\"table table-striped mb-0 table-sm dataTable\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.no' | translate }}</th>\n                          <th scope=\"col\">{{ 'CONTENT.document-name' | translate }}</th>\n                          <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.status-document' | translate }}</th>\n                          <th scope=\"col\" class=\"text-center col-width filter-dropdown-style\">{{\n                            'CONTENT.status-approved' |\n                            translate }}</th>\n                          <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.approved' | translate}}</th>\n                          <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.action' | translate }}</th>\n                        </tr>\n                      </thead>\n                      <tbody *ngIf=\"tableDocument?.length != 0\">\n                        <tr *ngFor=\"let data of tableDocument | slice: (pageDocumentTable-1) * 10 : pageDocumentTable * 10; let i = index;\">\n                          <td class=\"text-center pl-1 pr-1\">{{ (pageDocumentTable-1) * 10 + (i + 1) }}.</td>\n                          <td>\n                            {{data.new_student_document_type}}\n                          </td>\n                          <td class=\"text-center\">\n                            <span *ngIf=\"data.document != null &&  data.document_type_id !== 7\"\n                              [class]=\"data.document.url == null ? 'badge badge-light-danger' : 'badge badge-light-success'\">\n                              <i\n                                [class]=\"data.document.url == null ? 'icofont icofont-error' : 'icofont icofont-tick-mark'\"></i>\n                              {{ data.document.url == null ? ('CONTENT.not-complete' | translate) : ('CONTENT.complete'\n                              | translate) }}\n                            </span>\n                            <span *ngIf=\"data.document == [] && data.document_type_id !== 7\"\n                              [class]=\"'badge badge-light-danger'\">\n                              <i [class]=\"'icofont icofont-error'\"></i> {{ 'CONTENT.not-complete' | translate }}\n                            </span>\n                            <span *ngIf=\"data.document == null && data.document_type_id !== 7\"\n                              class=\"badge badge-light-danger\">\n                              <i [class]=\"'icofont icofont-error'\"></i> {{ 'CONTENT.not-complete' | translate }}\n                            </span>\n                          </td>\n                          <td class=\"center-table font-styling\">\n                            <div *ngIf=\"data.document != null && data.document_type_id != 7\">\n                              <span *ngIf=\"data.document.approval_final_status == true\" class=\"badge badge-success\">{{ 'CONTENT.approve' |\n                                translate }}</span>\n                              <span *ngIf=\"data.document.approval_final_status == false\" class=\"badge badge-danger\">{{\n                                'ROOT.rejected' | translate }}</span>\n                              <span *ngIf=\"data.document.approval_final_status == null\" class=\"badge badge-secondary\">{{\n                                'CONTENT.not-specified' | translate }}</span>\n                              </div>\n                              <div *ngIf=\"data.document == null && data.document_type_id != 7\">\n                                <span class=\"badge badge-secondary\">{{\n                                  'CONTENT.not-specified' | translate }}</span>\n                                </div>\n                          </td>\n                          <td class=\"text-center\">\n                            <div *ngIf=\"data.document != null\">\n                              <a *ngIf=\"data.document_type_id != 7\" class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.setujui' | translate\"\n                                (click)=\"submitDocumentApproval(data)\"><i\n                                  class=\"icofont icofont-check-circled f-w-600 f-16 text-c-green\"></i></a>\n                              <a *ngIf=\"data.document_type_id != 7\" class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.tolak' | translate\"\n                                (click)=\"showRejected(data)\"><i\n                                  class=\"icofont icofont-close-circled f-w-600 f-16 text-c-red\"></i></a>\n                              <a *ngIf=\"data.document != null && data.document_type_id != 7 && data.document.approval_final_status == false\" class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.rejected-info' | translate\"\n                                (click)=\"revisedData(data.document)\"><i\n                                  class=\"icofont icofont-info-circle f-w-600 f-16 text-warning\"></i></a>\n                            </div>\n                          </td>\n                          <td class=\"text-center\">\n                            <a *ngIf=\"data.document != null && data.document_type_id != 7\" class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.download' | translate\"\n                            (click)=\"downloadDocument(data)\"><i\n                              class=\"fas fa-cloud-download-alt f-w-600 f-16 text-primary\"></i></a>\n                            <a *ngIf=\"data.document != null && data.document_type_id == 7\" class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.detail' | translate\"\n                            (click)=\"showTableDocument(data)\"><i\n                              class=\"fas fa-eye f-w-600 f-16 text-info\"></i></a>\n                          </td>\n                        </tr>\n                      </tbody>\n                      <tbody *ngIf=\"tableDocument?.length == 0 && !loadTableDocument\">\n                        <tr>\n                          <td colspan=\"5\" class=\"no-data-available text-center\">\n                            <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n                          </td>\n                          <td class=\"hidden\"></td>\n                          <td class=\"hidden\"></td>\n                          <td class=\"hidden\"></td>\n                          <td class=\"hidden\"></td>\n                        </tr>\n                      </tbody>\n                      <tbody *ngIf=\"tableDocument?.length == 0 && loadTableDocument\">\n                        <tr>\n                          <td colspan=\"5\" class=\"no-data-available text-center\">\n                            <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n                          </td>\n                          <td class=\"hidden\"></td>\n                          <td class=\"hidden\"></td>\n                          <td class=\"hidden\"></td>\n                          <td class=\"hidden\"></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <ngb-pagination class=\"d-flex justify-content-center\" [(page)]=\"pageDocumentTable\" [pageSize]=\"10\"\n                      [collectionSize]=\"tableDocument.length\" [maxSize]=\"3\" [boundaryLinks]=\"true\">\n                    </ngb-pagination>\n                  </div>\n                </app-card>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab id=\"tabNim\" title=\"Generate Nim\">\n            <ng-template ngbTabContent>\n            <div class=\"row m-1\">\n              <div class=\"form-group mt-2 mb-2 col-md-12 text-right\">\n                <button class=\"btn btn-success btn-sm btn-round has-ripple btn-sm \" (click)=\"generateNimEmail()\" [disabled]=\"loading\">\n                  <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                  <span *ngIf=\"loading\" class=\"load-text\"> Loading...</span>\n                  <span *ngIf=\"!loading\" class=\"btn-text\">\n                  <i class=\"fas fa-paper-plane\"></i>  {{'CONTENT.generate-email-nim' | translate}}\n                  </span>\n                </button>\n              </div>\n              <h4 class=\"col-md-12 mb-3 font-family-custom\">Data Mahasiswa</h4>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.fullname' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ dataEmailNim.account_name}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.registration-number' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ dataEmailNim.registration_number }}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.selection-path' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ dataEmailNim.selection_path_name}}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.study-program' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ dataEmailNim.study_program_branding_name }}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.nim-institusi' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ dataEmailNim.student_id  ? dataEmailNim.student_id : '-' }}</label>\n              </div>\n              <div class=\"form-group mb-2 col-md-6\">\n                <label class=\"mb-1\">{{ 'CONTENT.email-institusi' | translate }}</label> <br>\n                <label class=\"form-label f-w-600\">{{ dataEmailNim.university_email ? dataEmailNim.university_email : '-' }}</label>\n              </div>\n            </div>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </app-card>\n\n  </div>\n</div>\n\n<app-ui-modal #showTableDoc [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-lg\" [hideFooter]=\"true\"\n  [loading]=\"loadTableRaport\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.raport-document-info' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"showTableDocClose()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-borderless table-sm table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" class=\"custom-no\">{{ 'CONTENT.no' | translate}}</th>\n            <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.semester' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.status-document' | translate }}</th>\n            <th scope=\"col\" class=\"text-center\">{{\n              'CONTENT.status-approved' | translate}}\n            </th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.approved' | translate}}</th>\n            <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.action' | translate}}</th>\n            </tr>\n        </thead>\n        <tbody *ngIf=\"tableRaport?.length != 0\">\n          <tr *ngFor=\"let data of tableRaport; let i = index\">\n            <th scope=\"row\" class=\"custom-no\">{{ i+1 }}</th>\n            <td class=\"text-center\">Semester {{ data.semester_id }} </td>\n            <td class=\"text-center\">\n              <span [class]=\"data.url == null ? 'badge badge-light-danger' : 'badge badge-light-success'\">\n                <i [class]=\"data.url == null ? 'icofont icofont-error' : 'icofont icofont-tick-mark'\"></i>\n                {{ data.url == null ? ('CONTENT.not-complete' | translate) : ('CONTENT.complete' | translate) }}\n              </span>\n            </td>\n            <td class=\"center-table font-styling\">\n              <div *ngIf=\"data.document_id != null\">\n                <span *ngIf=\"data.approval_final_status == true\" class=\"badge badge-success\">{{ 'CONTENT.approve' |\n                  translate }}</span>\n                <span *ngIf=\"data.approval_final_status == false\" class=\"badge badge-danger\">{{\n                  'ROOT.rejected' | translate }}</span>\n                <span *ngIf=\"data.approval_final_status == null\" class=\"badge badge-secondary\">{{\n                  'CONTENT.not-specified' | translate }}</span>\n                </div>\n            </td>\n            <td class=\"text-center\">\n              <div *ngIf=\"data.document_id != null\">\n                <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.setujui' | translate\"\n                  (click)=\"submitDocumentApprovalRaport(data)\"><i\n                    class=\"icofont icofont-check-circled f-w-600 f-16 text-c-green\"></i></a>\n                <a class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.tolak' | translate\"\n                  (click)=\"showRejectedReport(data)\"><i\n                    class=\"icofont icofont-close-circled f-w-600 f-16 text-c-red\"></i></a>\n                <a *ngIf=\"data.approval_final_status == false\" class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.rejected-info' | translate\"\n                  (click)=\"revisedDataReport(data)\"><i\n                    class=\"icofont icofont-info-circle f-w-600 f-16 text-warning\"></i></a>\n              </div>\n            </td>\n            <td class=\"text-center\">\n              <a *ngIf=\"data.document_id != null\" class=\"mr-2 pointer-custom\" [placement]=\"'left'\" [ngbTooltip]=\"'ROOT.download' | translate\"\n              (click)=\"downloadDocumentRaport(data)\"><i\n                class=\"fas fa-cloud-download-alt f-w-600 f-16 text-primary\"></i></a>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableRaport?.length == 0 && !loadTableRaport\">\n          <tr>\n            <td colspan=\"4\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableRaport?.length == 0 && loadTableRaport\">\n          <tr>\n            <td colspan=\"4\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n      </table>\n      <ngb-pagination *ngIf=\"tableRaport.length == 0\" class=\"d-flex justify-content-center\" [(page)]=\"pageDocument\"\n        [pageSize]=\"10\" [collectionSize]=\"tableRaport.length\" [maxSize]=\"3\" [boundaryLinks]=\"true\">\n      </ngb-pagination>\n    </div>\n  </div>\n</app-ui-modal>\n\n\n<app-ui-modal #revisedModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'ROOT.add' | translate }} {{ 'CONTENT.revised' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRevisedModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"rejectedForm\">\n      <div class=\"row mt-0\">\n        <div class=\"col-sm-12\">\n          <!-- <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.status-approved' | translate }} </label> <br>\n            <span class=\"badge badge-light-danger\">{{ 'ROOT.rejected' | translate}}</span>\n          </div> -->\n          <div class=\"form-group mb-2\">\n            <!-- <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.notes' | translate }} </label> -->\n            <textarea class=\"form-control\" formControlName=\"desc_rejected\" placeholder=\"{{'CONTENT.rejected-placeholder' | translate}}\" maxlength=\"150\" required>\n            </textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 mb-0 mt-0 text-right\">\n          <button type=\"submit\" class=\"btn btn-success btn-sm\" (click)=\"submitDocumentRejected()\"\n            [disabled]=\"rejectedForm.invalid || this.loading\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">\n              <i class=\"icofont icofont-location-arrow\"></i> {{ 'ROOT.submit' | translate }}</span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #revisedModalsInfo [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.revised-title' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRevisedInfoModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"mb-1\">{{ 'CONTENT.notes' | translate }} </label> <br>\n            <label class=\"form-label f-w-600\">{{ dataApproval.approval_final_comment }}</label>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>";

    /***/
  }),
  /***/"./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data-routing.module.ts": (
  /*!*************************************************************************************************************************************************************!*\
    !*** ./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data-routing.module.ts ***!
    \*************************************************************************************************************************************************************/
  /*! exports provided: AdmMrDetailVerificationDocumentDataRoutingModule */
  /***/
  function _src_app_theme_admMrVerificationDocumentData_admMrDetailVerificationDocumentData_admMrDetailVerificationDocumentDataRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdmMrDetailVerificationDocumentDataRoutingModule", function () {
      return AdmMrDetailVerificationDocumentDataRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _adm_mr_detail_verification_document_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./adm-mr-detail-verification-document-data.component */"./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var routes = [{
      path: '',
      component: _adm_mr_detail_verification_document_data_component__WEBPACK_IMPORTED_MODULE_2__["AdmMrDetailVerificationDocumentDataComponent"]
    }];
    var AdmMrDetailVerificationDocumentDataRoutingModule = /*#__PURE__*/_createClass(function AdmMrDetailVerificationDocumentDataRoutingModule() {
      _classCallCheck(this, AdmMrDetailVerificationDocumentDataRoutingModule);
    });
    AdmMrDetailVerificationDocumentDataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AdmMrDetailVerificationDocumentDataRoutingModule);

    /***/
  }),
  /***/"./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.component.scss": (
  /*!**********************************************************************************************************************************************************!*\
    !*** ./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.component.scss ***!
    \**********************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_theme_admMrVerificationDocumentData_admMrDetailVerificationDocumentData_admMrDetailVerificationDocumentDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.center-table {\n  text-align: center; }\n\n.width {\n  max-width: 370px;\n  text-align: justify; }\n\ntextarea {\n  width: 100%;\n  height: 70px;\n  padding: 5px 5px;\n  padding-top: 2px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: transparent;\n  font-size: 13px;\n  color: grey;\n  resize: none; }\n\na {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvdGhlbWUvYWRtLW1yLXZlcmlmaWNhdGlvbi1kb2N1bWVudC1kYXRhL2FkbS1tci1kZXRhaWwtdmVyaWZpY2F0aW9uLWRvY3VtZW50LWRhdGEvYWRtLW1yLWRldGFpbC12ZXJpZmljYXRpb24tZG9jdW1lbnQtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsbUJBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDQyxrQkFBa0IsRUFBQTs7QUFFbkI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsV0FBVTtFQUNWLFlBQVksRUFBQTs7QUFFZDtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2FkbS1tci12ZXJpZmljYXRpb24tZG9jdW1lbnQtZGF0YS9hZG0tbXItZGV0YWlsLXZlcmlmaWNhdGlvbi1kb2N1bWVudC1kYXRhL2FkbS1tci1kZXRhaWwtdmVyaWZpY2F0aW9uLWRvY3VtZW50LWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbnRoe1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmNlbnRlci10YWJsZXtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2lkdGh7XG4gIG1heC13aWR0aDogMzcwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6Z3JleTtcbiAgcmVzaXplOiBub25lO1xufVxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.component.ts": (
  /*!********************************************************************************************************************************************************!*\
    !*** ./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.component.ts ***!
    \********************************************************************************************************************************************************/
  /*! exports provided: AdmMrDetailVerificationDocumentDataComponent */
  /***/
  function _src_app_theme_admMrVerificationDocumentData_admMrDetailVerificationDocumentData_admMrDetailVerificationDocumentDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdmMrDetailVerificationDocumentDataComponent", function () {
      return AdmMrDetailVerificationDocumentDataComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! angular-datatables */"./node_modules/angular-datatables/index.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/_services/admin-management.service */"./src/app/_services/admin-management.service.ts");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! src/app/_services/app.service */"./src/app/_services/app.service.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */
    var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! src/app/_services/participant.service */"./src/app/_services/participant.service.ts");
    /* harmony import */
    var underscore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! underscore */"./node_modules/underscore/underscore.js");
    /* harmony import */
    var underscore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_13__);
    var AdmMrDetailVerificationDocumentDataComponent = /*#__PURE__*/function () {
      function AdmMrDetailVerificationDocumentDataComponent(translate, broadcasterService, chartService, appService, userService, route, router, fb, http) {
        var _this = this;
        _classCallCheck(this, AdmMrDetailVerificationDocumentDataComponent);
        this.translate = translate;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.appService = appService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
        this.translate.get('CONTENT.approve-question').subscribe(function (l) {
          _this.approve = l;
        });
        this.translate.get('CONTENT.rejected-question').subscribe(function (l) {
          _this.rejected = l;
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
          _this.translate.get('CONTENT.approve-question').subscribe(function (l) {
            _this.approve = l;
          });
          _this.translate.get('CONTENT.rejected-question').subscribe(function (l) {
            _this.rejected = l;
          });
        });
        this.rejectedForm = this.fb.group({
          desc_rejected: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(150)]))
        });
        this.registrationNumber = this.route.snapshot.paramMap.get('registrationnumber');
        this.newstudentId = this.route.snapshot.paramMap.get('id');
        this.participantID = this.route.snapshot.paramMap.get('participantId');
        this.tableData = [];
        this.dataBiodatas = [];
        this.dataParents = [];
        this.tableDocument = [];
        this.tableRaport = [];
        this.dataApproval = [];
        this.photoCard = [];
        this.dataEmailNim = [];
        this.loadingDownload = false;
        this.loadTableDocument = false;
        this.loadingParent = false;
        this.isApprovalData = false;
        this.loading = false;
        this.pageDocument = 1;
        this.pageDocumentTable = 1;
      }
      return _createClass(AdmMrDetailVerificationDocumentDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            retrieve: true,
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
            initComplete: function initComplete() {}
          };
          this.getBiodatas();
        }
      }, {
        key: "getBiodatas",
        value: function getBiodatas() {
          var _this2 = this;
          this.loading = true;
          this.userService.getPartcipantNewstudent("?participant_id=".concat(this.participantID)).subscribe(function (res) {
            _this2.loading = false;
            _this2.dataBiodatas = res;
            if (res.nationality == 98) {
              _this2.isIndonesianNationality = true;
            } else {
              _this2.isIndonesianNationality = false;
            }
            if (res.address_country == 1) {
              _this2.hiddenAddressDetail = false;
            } else {
              _this2.hiddenAddressDetail = true;
            }
          }, function (reason) {
            _this2.loading = false;
            _this2.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
        }
      }, {
        key: "getParents",
        value: function getParents() {
          var _this3 = this;
          this.loadingParent = true;
          this.userService.getFamilyNewstudent("?participant_id=".concat(this.participantID)).subscribe(function (res) {
            _this3.dataParents = res;
            _this3.loadingParent = false;
            if (res.is_guardian == false) {
              _this3.haveParents = true;
            } else {
              _this3.haveParents = false;
            }
          }, function (reason) {
            _this3.loadingParent = false;
            _this3.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
        }
      }, {
        key: "getDocument",
        value: function getDocument() {
          this.getDocumentRegistrationTable();
        }
      }, {
        key: "getEmailNim",
        value: function getEmailNim() {
          var _this4 = this;
          this.loading = true;
          this.userService.getNewStudentRegistration("?participant_id=".concat(this.participantID, "&registration_number=").concat(this.registrationNumber)).subscribe(function (res) {
            _this4.loading = false;
            _this4.dataEmailNim = res[0];
            _this4.idStudent = res[0].id;
          });
        }
      }, {
        key: "checkDocumentStatusApproval",
        value: function checkDocumentStatusApproval() {
          var _this5 = this;
          this.loading = true;
          this.userService.getNewStudentDocumentStatus("?registration_number=".concat(this.registrationNumber)).subscribe(function (res) {
            if (res.length != 0) {
              var docAppovalFalse = underscore__WEBPACK_IMPORTED_MODULE_13__["findWhere"](res, {
                approval_final_status: false
              });
              var docAppovalNull = underscore__WEBPACK_IMPORTED_MODULE_13__["findWhere"](res, {
                approval_final_status: null
              });
              if (docAppovalNull == undefined) {
                if (docAppovalFalse == undefined) {
                  _this5.loading = false;
                  _this5.isApprovalData = true;
                } else {
                  _this5.loadTableDocument = false;
                  _this5.isApprovalData = false;
                }
              } else {
                _this5.loadTableDocument = false;
                _this5.isApprovalData = false;
              }
            } else {
              _this5.isApprovalData = false;
            }
          });
        }
      }, {
        key: "generateNimEmail",
        value: function generateNimEmail() {
          var _this6 = this;
          this.loading = true;
          if (this.isApprovalData) {
            var payload = {
              id: this.idStudent
            };
            this.chartService.insertStudentIdEmailStudent(payload).subscribe(function (resp) {
              if (resp.status == 'Success') {
                _this6.loading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                  title: resp.status,
                  text: resp.message,
                  type: 'success',
                  allowOutsideClick: false
                });
                _this6.getEmailNim();
              } else {
                _this6.loading = false;
                _this6.broadcasterService.notifBroadcast(true, {
                  title: resp.status,
                  msg: resp.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });
              }
            }, function (reason) {
              _this6.loading = false;
              _this6.broadcasterService.notifBroadcast(true, {
                title: "Gagal",
                msg: reason.error.message,
                timeout: 5000,
                theme: "default",
                position: "top-right",
                type: "error"
              });
              _this6.loadTableDocument = false;
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
              title: 'Info!',
              text: 'Tidak dapat melakukan generate email karena dokumen Mahasiswa belum lengkap / belum di approved',
              type: 'info',
              allowOutsideClick: false
            });
            this.loading = false;
          }
        }
      }, {
        key: "changeTab",
        value: function changeTab(event) {
          this.loading = true;
          if (event == 'tabParent') {
            this.loading = false;
            this.getParents();
          } else if (event == 'tabDocument') {
            this.loading = false;
            this.getDocument();
          } else if (event == 'tabBiodata') {
            this.loading = false;
            this.getBiodatas();
          } else if (event == 'tabNim') {
            this.loading = false;
            this.getEmailNim();
            this.checkDocumentStatusApproval();
          }
        }
      }, {
        key: "getDocumentRegistrationTable",
        value: function getDocumentRegistrationTable() {
          var _this7 = this;
          this.loadTableDocument = true;
          this.userService.getNewStudentDocument("?id=".concat(this.newstudentId)).subscribe(function (response) {
            _this7.tableDocument = response;
            // this.dtTrigger.next();
            _this7.loadTableDocument = false;
          }, function (reason) {
            _this7.loadTableDocument = false;
            _this7.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
        }
      }, {
        key: "getRaportTableDocument",
        value: function getRaportTableDocument() {
          var _this8 = this;
          this.loadTableRaport = true;
          this.userService.getNewStudentDocument("?id=".concat(this.newstudentId, "&document_type_id=7")).subscribe(function (response) {
            _this8.tableRaport = response[0].document;
            _this8.loadTableRaport = false;
          }, function (reason) {
            _this8.loadTableDocument = false;
            _this8.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
        }
      }, {
        key: "submitDocumentApprovalRaport",
        value: function submitDocumentApprovalRaport(data) {
          var _this9 = this;
          var payload = {
            document_id: data.document_id
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
          }).then(function (confirm) {
            if (confirm.value) {
              _this9.loadTableDocument = true;
              _this9.chartService.updateApprovalStatusDocumentStudent(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this9.broadcasterService.notifBroadcast(true, {
                    title: 'Success',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'success'
                  });
                  _this9.loadTableDocument = false;
                  _this9.getRaportTableDocument();
                } else {
                  _this9.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                  _this9.loadTableDocument = false;
                }
              }, function (reason) {
                _this9.broadcasterService.notifBroadcast(true, {
                  title: "Gagal",
                  msg: reason.error.message,
                  timeout: 5000,
                  theme: "default",
                  position: "top-right",
                  type: "error"
                });
                _this9.loadTableDocument = false;
              });
            }
          });
        }
      }, {
        key: "submitDocumentApproval",
        value: function submitDocumentApproval(data) {
          var _this10 = this;
          var payload = {
            document_id: data.document.document_id
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.confirmation,
            text: this.approve,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ffba57',
            confirmButtonText: this.yes,
            cancelButtonText: this.no
          }).then(function (confirm) {
            if (confirm.value) {
              _this10.loadTableDocument = true;
              _this10.chartService.updateApprovalStatusDocumentStudent(payload).subscribe(function (res) {
                if (res.status == 'Success') {
                  _this10.broadcasterService.notifBroadcast(true, {
                    title: 'Success',
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'success'
                  });
                  _this10.loadTableDocument = false;
                  _this10.getDocumentRegistrationTable();
                } else {
                  _this10.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                  _this10.loadTableDocument = false;
                }
              }, function (reason) {
                _this10.broadcasterService.notifBroadcast(true, {
                  title: "Gagal",
                  msg: reason.error.message,
                  timeout: 5000,
                  theme: "default",
                  position: "top-right",
                  type: "error"
                });
                _this10.loadTableDocument = false;
              });
            }
          });
        }
      }, {
        key: "showRejectedReport",
        value: function showRejectedReport(data) {
          this.revisedModals.show();
          this.documentId = data.document_id;
        }
      }, {
        key: "showRejected",
        value: function showRejected(data) {
          this.revisedModals.show();
          this.documentId = data.document.document_id;
        }
      }, {
        key: "submitDocumentRejected",
        value: function submitDocumentRejected() {
          var _this11 = this;
          this.loading = true;
          var payload = {
            document_id: this.documentId,
            approval_final_comment: this.rejectedForm.controls.desc_rejected.value
          };
          this.chartService.updateRejectedStatusDocumentStudent(payload).subscribe(function (res) {
            if (res.status == 'Success') {
              _this11.broadcasterService.notifBroadcast(true, {
                title: 'Success',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'success'
              });
              _this11.loading = false;
              _this11.getDocumentRegistrationTable();
              _this11.getRaportTableDocument();
              _this11.closeRevisedModals();
            } else {
              _this11.broadcasterService.notifBroadcast(true, {
                title: res.status,
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              _this11.loading = false;
            }
          }, function (reason) {
            _this11.broadcasterService.notifBroadcast(true, {
              title: "Gagal",
              msg: reason.error.message,
              timeout: 5000,
              theme: "default",
              position: "top-right",
              type: "error"
            });
            _this11.loading = false;
          });
        }
      }, {
        key: "showTableDocument",
        value: function showTableDocument() {
          this.getRaportTableDocument();
          this.showTableDoc.show();
        }
      }, {
        key: "showTableDocClose",
        value: function showTableDocClose() {
          document.querySelector('body').classList.add('modal-open');
          this.showTableDoc.hide();
        }
      }, {
        key: "showTableDocDetailsClose",
        value: function showTableDocDetailsClose() {
          // this.isUpdatedRaport = false;
          this.showTableDocDetails.hide();
        }
      }, {
        key: "downloadDocument",
        value: function downloadDocument(data) {
          this.loadingDownload = true;
          if (data.document == null) {
            this.loadingDownload = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
              title: 'Failed',
              text: 'Tidak ada dokumen',
              type: 'error',
              allowOutsideClick: false
            });
          } else {
            if (data.document.url != null) {
              this.loadingDownload = false;
              window.open(data.document.url, 'blank');
            } else {
              this.loadingDownload = false;
              sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                title: 'Failed',
                text: 'Tidak ada dokumen',
                type: 'error',
                allowOutsideClick: false
              });
            }
          }
        }
      }, {
        key: "downloadDocumentRaport",
        value: function downloadDocumentRaport(data) {
          this.loadingDownload = true;
          if (data.url != null) {
            this.loadingDownload = false;
            window.open(data.url, 'blank');
          } else {
            this.loadingDownload = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
              title: 'Failed',
              text: 'Tidak ada dokumen',
              type: 'error',
              allowOutsideClick: false
            });
          }
        }
      }, {
        key: "revisedData",
        value: function revisedData(data) {
          this.dataApproval = data;
          this.revisedModalsInfo.show();
        }
      }, {
        key: "revisedDataReport",
        value: function revisedDataReport(data) {
          this.dataApproval = data;
          this.revisedModalsInfo.show();
        }
      }, {
        key: "closeRevisedModals",
        value: function closeRevisedModals() {
          this.revisedModals.hide();
          this.rejectedForm.reset();
        }
      }, {
        key: "closeRevisedInfoModals",
        value: function closeRevisedInfoModals() {
          this.revisedModalsInfo.hide();
        }
        // renderDocument(): void {
        //   if (this.tableDocument.length == 0) {
        //     this.getDocumentRegistrationTable();
        //   } else {
        //     this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        //       if (index == 0) {
        //         dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //           dtInstance.destroy();
        //           this.getDocumentRegistrationTable();
        //         });
        //       }
        //     });
        //   }
        // }
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
      }]);
    }();
    AdmMrDetailVerificationDocumentDataComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"]
      }, {
        type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"]
      }, {
        type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"]
      }, {
        type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_12__["ParticipantService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])], AdmMrDetailVerificationDocumentDataComponent.prototype, "dtElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showTableDoc', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AdmMrDetailVerificationDocumentDataComponent.prototype, "showTableDoc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showTableDocDetails', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AdmMrDetailVerificationDocumentDataComponent.prototype, "showTableDocDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('revisedModals', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AdmMrDetailVerificationDocumentDataComponent.prototype, "revisedModals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('revisedModalsInfo', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AdmMrDetailVerificationDocumentDataComponent.prototype, "revisedModalsInfo", void 0);
    AdmMrDetailVerificationDocumentDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adm-mr-detail-verification-document-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./adm-mr-detail-verification-document-data.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./adm-mr-detail-verification-document-data.component.scss */"./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"], src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"], src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"], src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_12__["ParticipantService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])], AdmMrDetailVerificationDocumentDataComponent);

    /***/
  }),
  /***/"./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.module.ts": (
  /*!*****************************************************************************************************************************************************!*\
    !*** ./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.module.ts ***!
    \*****************************************************************************************************************************************************/
  /*! exports provided: AdmMrDetailVerificationDocumentDataModule */
  /***/
  function _src_app_theme_admMrVerificationDocumentData_admMrDetailVerificationDocumentData_admMrDetailVerificationDocumentDataModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdmMrDetailVerificationDocumentDataModule", function () {
      return AdmMrDetailVerificationDocumentDataModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var ng2_toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ng2-toasty */"./node_modules/ng2-toasty/index.js");
    /* harmony import */
    var _adm_mr_detail_verification_document_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./adm-mr-detail-verification-document-data.component */"./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.component.ts");
    /* harmony import */
    var _adm_mr_detail_verification_document_data_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./adm-mr-detail-verification-document-data-routing.module */"./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data-routing.module.ts");
    /* harmony import */
    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! src/app/shared/shared.module */"./src/app/shared/shared.module.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! angular-datatables */"./node_modules/angular-datatables/index.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! angular-dual-listbox */"./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
    /* harmony import */
    var ngx_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ngx-chips */"./node_modules/ngx-chips/fesm2015/ngx-chips.js");
    /* harmony import */
    var ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ng-select */"./node_modules/ng-select/fesm2015/ng-select.js");
    var AdmMrDetailVerificationDocumentDataModule = /*#__PURE__*/_createClass(function AdmMrDetailVerificationDocumentDataModule() {
      _classCallCheck(this, AdmMrDetailVerificationDocumentDataModule);
    });
    AdmMrDetailVerificationDocumentDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_adm_mr_detail_verification_document_data_component__WEBPACK_IMPORTED_MODULE_4__["AdmMrDetailVerificationDocumentDataComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _adm_mr_detail_verification_document_data_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmMrDetailVerificationDocumentDataRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__["AngularDualListBoxModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_12__["TagInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_3__["ToastyModule"].forRoot(), ng_select__WEBPACK_IMPORTED_MODULE_13__["SelectModule"]]
    })], AdmMrDetailVerificationDocumentDataModule);

    /***/
  })
}]);
//# sourceMappingURL=adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module-es5.js.map