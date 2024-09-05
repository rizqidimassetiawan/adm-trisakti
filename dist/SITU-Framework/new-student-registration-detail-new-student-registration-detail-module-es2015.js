(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-student-registration-detail-new-student-registration-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"text-md-left\">\n      <div class=\"page-header-title\">\n        <h5>{{ \"MENU.new-student-detail\" | translate }}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card hidHeader=\"false\" [loading]=\"loadCard\">\n      <wizard #wizard class=\"arc-wizard\" navBarLayout=\"large-empty-symbols\">\n        <wizard-step stepTitle=\"{{'CONTENT.biodatas' | translate}}\" navigationSymbol=\"1\">\n          <div class=\"row\">\n            <div padding class=\"col-md-12\">\n              <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"biodatasForms\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <app-card cardTitle=\"{{'CONTENT.biodata' | translate}}\" headerClass=\"text-center text-md-left\" [options]=\"false\"\n                      [loading]=\"loadBiodata\">\n                      <div class=\"app-body\">\n                        <!-- Profile Picture -->\n                        <div class=\"user-profile user-card mt-5 mb-0\">\n                          <div class=\"card-body py-0\">\n                            <div class=\"user-about-block m-0\">\n                              <div class=\"row\">\n                                <div class=\"col-md-12 text-center mt-n5\">\n                                  <div class=\"change-profile text-center mb-2\">\n                                    <div class=\"dropdown w-auto d-inline-block\" ngbDropdown>\n                                      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" ngbDropdownToggle aria-haspopup=\"true\"\n                                        aria-expanded=\"false\">\n                                        <div class=\"profile-dp\">\n                                          <div class=\"position-fit d-inline-block\">\n                                            <img class=\"img-radius align-top m-r-15 wid-100 img-cover-fit\"\n                                              [src]=\"photoCard.photo_url ? photoCard.photo_url : 'https://cdndata.telkomuniversity.ac.id/situ-round.png'\"\n                                              alt=\"User image\">\n                                          </div>\n                                          <div class=\"overlay\">\n                                            <span>{{'CONTENT.change' | translate }}</span>\n                                          </div>\n                                        </div>\n                                        <input class=\"d-none\" id=\"fileInput\" type=\"file\" accept=\"image/jpg,image/jpeg,image/png\"\n                                          (change)=\"onUploadImagePhoto($event)\" />\n                                        <div class=\"certificated-badge\">\n                                          <i class=\"icofont icofont-camera bg-icon pointer-clicked\"></i>\n                                        </div>\n                                      </a>\n                                      <div class=\"dropdown-menu\" ngbDropdownMenu>\n                                        <a *ngIf=\"!isViewData\" class=\"dropdown-item\" href=\"javascript:\" (click)=\"openFile()\"><i\n                                            class=\"feather icon-upload-cloud mr-2\"></i>{{'CONTENT.change-photo' |\n                                          translate }}</a>\n                                        <a target=\"_blank\" class=\"dropdown-item\" [href]=\"photoCard.photo_url\"\n                                          *ngIf=\"!notHavePhoto\"><i class=\"feather icon-image mr-2\"></i>{{'CONTENT.view-photo' |\n                                          translate}}</a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"p-4 col-12\">\n                                  <app-alert type=\"warning\" *ngIf=\"notHavePhoto\">\n                                    <h6 class=\"text-dark text-center\">{{ 'CONTENT.photo-info' | translate }}</h6>\n                                    <div class=\"col-sm-12 text-center\">\n                                      <p>{{ 'CONTENT.photo-info-2' | translate }}<br>{{ 'CONTENT.photo-info-3' |\n                                        translate }}.<br>{{ 'CONTENT.photo-info-4' | translate }}.</p>\n                                      <br>\n                                      <p><i>{{ 'CONTENT.photo-info-5' | translate }}</i></p>\n                                    </div>\n                                  </app-alert>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div *ngIf=\"!notHavePhoto\" class=\"mt-0\">\n                          <span class=\"required mb-4\">\n                            <p>* Wajib diisi</p>\n                          </span>\n                          <div class=\"form-row\">\n                            <div class=\"form-group mb-2 col-md-12\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.fullname' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <input type=\"text\" class=\"form-control mt-1\" name=\"name\" required formControlName=\"fullname\"\n                                [readOnly]=\"isViewData\"\n                                [ngClass]=\"f.fullname.invalid && f.fullname.touched?'is-invalid':(f.fullname.valid?'is-valid':'')\"\n                                maxlength=\"100\">\n                              <label\n                                *ngIf=\"f.fullname.errors && f.fullname.errors.required && (f.fullname.touched || f.fullname.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                              <label\n                                *ngIf=\"f.fullname.errors && f.fullname.errors.maxlength && (f.fullname.touched || f.fullname.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-fullname' | translate\n                                }}</label>\n                              <label\n                                *ngIf=\"f.fullname.errors && f.fullname.errors.pattern && (f.fullname.touched || f.fullname.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.letter-only' | translate }}</label>\n                            </div>\n                          </div>\n                          <div class=\"form-row\">\n                            <div class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.gender' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.gender'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"gender\" [(ngModel)]=\"gender\"\n                                [ngClass]=\"!gender?'filter-dropdown is-invalid':(gender?'filter-dropdown is-valid':'filter-dropdown')\"\n                                [options]=\"listGender\" [disabled]=\"isViewData\"></ng-select>\n                              <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.gender.errors.required\">{{ 'CONTENT.gender' | translate }} {{\n                                  'CONTENT.is-required' | translate }}</div>\n                              </div>\n                            </div>\n                            <div class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.religion' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.religion'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"religion\" [(ngModel)]=\"religion\"\n                                [ngClass]=\"!religion?'filter-dropdown is-invalid':(religion?'filter-dropdown is-valid':'filter-dropdown')\"\n                                [options]=\"listReligion\" [disabled]=\"isViewData\">\n                              </ng-select>\n                              <label id=\"validation-religion-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.religion' | translate }}</label>\n                            </div>\n                            <div class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.birthdate' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <input [textMask]=\"{mask: maskDateSlash}\" type=\"text\" class=\"form-control mt-1\"\n                                formControlName=\"birthdate\" name=\"birthdate\" required\n                                [placeholder]=\"'CONTENT.date-validation'|translate\" [readOnly]=\"isViewData\"\n                                [ngClass]=\"f.birthdate.invalid && f.birthdate.touched?'is-invalid':(f.birthdate.valid?'is-valid':'')\" />\n                              <label\n                                *ngIf=\"f.birthdate.errors && f.birthdate.errors.required && (f.birthdate.touched || f.birthdate.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                            </div>\n                          </div>\n                          <div class=\"form-row\">\n                            <div class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.country_birth' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.country_birth'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"country_birth\"\n                                [(ngModel)]=\"countryBirth\"\n                                [ngClass]=\"!countryBirth?'filter-dropdown is-invalid':(countryBirth?'filter-dropdown is-valid':'filter-dropdown')\"\n                                [options]=\"listCountryBirth\" (ngModelChange)=\"changeProvinceBirth(countryBirth)\"\n                                [disabled]=\"isViewData\">\n                              </ng-select>\n                              <label id=\"validation-country-birth-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.country_birth' | translate }}</label>\n                            </div>\n                            <div [hidden]=\"!isIndonesiaBirthCountry\" class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.province_birth' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.province_birth'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"province_birth\"\n                                [(ngModel)]=\"provinceBirth\" [options]=\"listProvinceBirth\"\n                                [ngClass]=\"!provinceBirth?'filter-dropdown is-invalid':(provinceBirth?'filter-dropdown is-valid':'filter-dropdown')\"\n                                (ngModelChange)=\"loadCityBirthDataList(provinceBirth)\" [disabled]=\"isViewData\"></ng-select>\n                              <label id=\"validation-province-birth-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.province_birth' | translate }}</label>\n                            </div>\n                            <div [hidden]=\"isIndonesiaBirthCountry\" class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.province_birth' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <input type=\"text\" [placeholder]=\"'CONTENT.province_birth'|translate\" class=\"form-control mt-1\"\n                                name=\"province_birth\" formControlName=\"province_birth_other\" maxlength=\"100\" [readOnly]=\"isViewData\"\n                                [ngClass]=\"f.province_birth_other.invalid && f.province_birth_other.touched?'is-invalid':(f.province_birth_other.valid?'is-valid':'')\">\n                              <label\n                                *ngIf=\"f.province_birth_other.errors && f.province_birth_other.errors.required && (f.province_birth_other.touched || f.province_birth_other.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                            </div>\n                            <div [hidden]=\"!isIndonesiaBirthCountry\" class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.city_birth' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [disabled]=\"!provinceBirth\" [placeholder]=\"'CONTENT.city_birth'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"city_birth\" [(ngModel)]=\"cityBirth\"\n                                [ngClass]=\"!cityBirth?'filter-dropdown is-invalid':(cityBirth?'filter-dropdown is-valid':'filter-dropdown')\"\n                                [options]=\"listCityBirth\" [disabled]=\"isViewData\"></ng-select>\n                              <label id=\"validation-city-birth-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.city_birth' | translate }}</label>\n                            </div>\n                            <div [hidden]=\"isIndonesiaBirthCountry\" class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.city_birth' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <input type=\"text\" [placeholder]=\"'CONTENT.city_birth'|translate\" class=\"form-control mt-1\"\n                                name=\"city_birth_other\" formControlName=\"city_birth_other\" maxlength=\"100\" [readOnly]=\"isViewData\"\n                                [ngClass]=\"f.city_birth_other.invalid && f.city_birth_other.touched?'is-invalid':(f.city_birth_other.valid?'is-valid':'')\">\n                              <label\n                                *ngIf=\"f.city_birth_other.errors && f.city_birth_other.errors.required && (f.city_birth_other.touched || f.city_birth_other.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                            </div>\n                          </div>\n                          <div class=\"form-row\">\n                            <div class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.nationality' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.nationality'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"nationality\" [(ngModel)]=\"nationality\"\n                                [ngClass]=\"!nationality?'filter-dropdown is-invalid':(nationality?'filter-dropdown is-valid':'filter-dropdown')\"\n                                [options]=\"listNationality\" (ngModelChange)=\"changeNationality(nationality)\" [disabled]=\"isViewData\">\n                              </ng-select>\n                              <label id=\"validation-nationality-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.nationality' | translate }}</label>\n                            </div>\n                            <div class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.country_origin' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.country_origin'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"country_origin\"\n                                [(ngModel)]=\"countryOrigin\" [options]=\"listCountryBirth\" [disabled]=\"isViewData\"\n                                [ngClass]=\"!countryOrigin?'filter-dropdown is-invalid':(countryOrigin?'filter-dropdown is-valid':'filter-dropdown')\">\n                              </ng-select>\n                              <label id=\"validation-country-origin-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.country_origin' | translate }}</label>\n                            </div>\n                            <div *ngIf=\"isIndonesianNationality\" class=\"form-group mb-2 col-md-4\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.NIK' | translate }}\n                                <i class=\"icofont icofont-info-circle\" [placement]=\"'right'\"\n                                  ngbTooltip=\"NIK terdapat pada KTP atau Kartu Keluarga\"></i><span class=\"required\">*</span></label>\n                              <input type=\"text\" class=\"form-control mt-1\" name=\"NIK\" required formControlName=\"NIK\" minlength=\"16\"\n                                maxlength=\"16\" [readOnly]=\"isViewData\"\n                                [ngClass]=\"f.NIK.invalid && f.NIK.touched?'is-invalid':(f.NIK.valid?'is-valid':'')\">\n                              <label *ngIf=\"f.NIK.errors && f.NIK.errors.required && (f.NIK.touched || f.NIK.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                              <label *ngIf=\"f.NIK.errors && f.NIK.errors.minlength && (f.NIK.touched || f.NIK.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nik' | translate\n                                }}</label>\n                              <label *ngIf=\"f.NIK.errors && f.NIK.errors.maxlength && (f.NIK.touched || f.NIK.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nik' | translate\n                                }}</label>\n                              <label *ngIf=\"f.NIK.errors && f.NIK.errors.pattern && (f.NIK.touched || f.NIK.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n                            </div>\n                            <div *ngIf=\"!isIndonesianNationality\" class=\"form-group col-md-2\">\n                              <div><label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.passport_number' | translate\n                                  }}<span class=\"required\"> *</span></label></div>\n                              <input type=\"text\" class=\"form-control mt-1\" name=\"passport_number\" formControlName=\"passport_number\"\n                                required minlength=\"7\" maxlength=\"7\" [readOnly]=\"isViewData\"\n                                [ngClass]=\"f.passport_number.invalid && f.passport_number.touched?'is-invalid':(f.passport_number.valid?'is-valid':'')\">\n                              <label\n                                *ngIf=\"f.passport_number.errors && f.passport_number.errors.required && (f.passport_number.touched || f.passport_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                              <label\n                                *ngIf=\"f.passport_number.errors && f.passport_number.errors.minlength && (f.passport_number.touched || f.passport_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-passport' | translate\n                                }}</label>\n                              <label\n                                *ngIf=\"f.passport_number.errors && f.passport_number.errors.maxlength && (f.passport_number.touched || f.passport_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-passport' | translate\n                                }}</label>\n                              <label\n                                *ngIf=\"f.passport_number.errors && f.passport_number.errors.pattern && (f.passport_number.touched || f.passport_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                                }}</label>\n                            </div>\n                            <div *ngIf=\"!isIndonesianNationality\" class=\"form-group col-md-2\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.passport_expired_date' | translate\n                                }}<span class=\"required\"> *</span></label>\n                              <input type=\"date\" class=\"form-control mt-1\" name=\"passport_expired_date\" max=\"9999-12-31\"\n                                formControlName=\"passport_expiry_date\" required [readOnly]=\"isViewData\"> <label\n                                *ngIf=\"f.passport_expiry_date.errors && f.passport_expiry_date.errors.required && (f.passport_expiry_date.touched || f.passport_expiry_date.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </app-card>\n                  </div>\n                </div>\n                <div *ngIf=\"!notHavePhoto\" class=\"row\">\n                  <div class=\"col-md-12\">\n                    <app-card cardTitle=\"{{'CONTENT.education-data' | translate}}\" headerClass=\"text-center text-md-left\"\n                      [options]=\"false\" [loading]=\"loadBiodata\">\n                      <div class=\"app-body\">\n                        <div class=\"col-12\">\n                          <div class=\"row\">\n                            <div *ngIf=\"isIndonesianNationality\" class=\"form-group mb-2 col-md-4\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.nis' | translate }}\n                                <span class=\"required\">*</span>\n                              </label>\n                              <input type=\"text\" class=\"form-control mt-1\" name=\"nis\" required formControlName=\"nis\" minlength=\"8\"\n                                maxlength=\"8\" placeholder=\"{{'CONTENT.nis' | translate }}\"\n                                [ngClass]=\"f.nis.invalid && f.nis.touched?'is-invalid':(f.nis.valid?'is-valid':'')\"\n                                [readOnly]=\"isViewData\">\n                              <label *ngIf=\"f.nis.errors && f.nis.errors.required && (f.nis.touched || f.nis.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}\n                              </label>\n                              <label *ngIf=\"f.nis.errors && f.nis.errors.minlength && (f.nis.touched || f.nis.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.nis-validation' | translate}}\n                              </label>\n                              <label *ngIf=\"f.nis.errors && f.nis.errors.pattern && (f.nis.touched || f.nis.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}\n                              </label>\n                            </div>\n                            <div *ngIf=\"isIndonesianNationality\" class=\"form-group mb-2 col-md-4\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.nisn' | translate }}\n                                <span class=\"required\">*</span>\n                              </label>\n                              <input type=\"text\" class=\"form-control mt-1\" name=\"nisn\" required formControlName=\"nisn\" minlength=\"10\"\n                                maxlength=\"10\" placeholder=\"{{'CONTENT.nisn' | translate }}\"\n                                [ngClass]=\"f.nisn.invalid && f.nisn.touched?'is-invalid':(f.nisn.valid?'is-valid':'')\"\n                                [readOnly]=\"isViewData\">\n                              <label *ngIf=\"f.nisn.errors && f.nisn.errors.required && (f.nisn.touched || f.nisn.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}\n                              </label>\n                              <label *ngIf=\"f.nisn.errors && f.nisn.errors.minlength && (f.nisn.touched || f.nisn.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nisn' | translate}}\n                              </label>\n                              <label *ngIf=\"f.nisn.errors && f.nisn.errors.pattern && (f.nisn.touched || f.nisn.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}\n                              </label>\n                            </div>\n                            <div [class]=\"isIndonesianNationality ? 'form-group mb-2 col-md-4' : 'form-group mb-2 col-md-12'\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.ijazah-number' | translate }}\n                                <i class=\"icofont icofont-info-circle\" [placement]=\"'top'\"\n                                ngbTooltip=\"{{'CONTENT.ijazah-detail-number' | translate}}\"></i><span\n                                class=\"required\"> *</span></label>\n                              <input type=\"text\" class=\"form-control mt-1\" name=\"ijazah_number\" required formControlName=\"ijazah_number\" minlength=\"14\"\n                                maxlength=\"25\" placeholder=\"{{'CONTENT.ijazah-number' | translate }}\"\n                                [ngClass]=\"f.ijazah_number.invalid && f.ijazah_number.touched?'is-invalid':(f.ijazah_number.valid?'is-valid':'')\"\n                                [readOnly]=\"isViewData\">\n                              <label *ngIf=\"f.ijazah_number.errors && f.ijazah_number.errors.required && (f.ijazah_number.touched || f.ijazah_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}\n                              </label>\n                              <label *ngIf=\"f.ijazah_number.errors && f.ijazah_number.errors.minlength && (f.ijazah_number.touched || f.ijazah_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.ijazah-number-validation' | translate}}\n                              </label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </app-card>\n                  </div>\n                </div>\n                <div *ngIf=\"!notHavePhoto\" class=\"row\">\n                  <div class=\"col-md-6\">\n                    <app-card cardTitle=\"{{'CONTENT.disabilitas-data' | translate}}\" headerClass=\"text-center text-md-left\"\n                      [options]=\"false\" [loading]=\"loadBiodata\">\n                      <div class=\"col-12\">\n                        <div class=\"row\">\n                          <div class=\"form-group mb-2 col-md-12\">\n                            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.color-blind' | translate }}<span class=\"required\">\n                                *</span></label><br>\n                            <ng-select [(ngModel)]=\"colorBlind\" name=\"color_blind\" [allowClear]=\"false\" [options]=\"colorBlindList\"\n                              [placeholder]=\"'ROOT.choose' | translate\" [disabled]=\"isViewData\"\n                              [ngClass]=\"!colorBlind?'filter-dropdown is-invalid':(colorBlind?'filter-dropdown is-valid':'filter-dropdown')\"\n                              [notFoundMsg]=\"'ROOT.no_data_found' | translate\" formControlName=\"color_blind\">\n                            </ng-select>\n                            <label *ngIf=\"!colorBlind\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n                              translate }}</label>\n                          </div>\n                          <div class=\"form-group mb-0 col-12 col-md-12\">\n                            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.special-needs' | translate }}<span class=\"required\">\n                                *</span>\n                            </label><br>\n                            <ng-select [(ngModel)]=\"specialNeeds\" name=\"special_needs\" [allowClear]=\"false\"\n                              formControlName=\"special_needs\" [options]=\"listOptions\" [placeholder]=\"'ROOT.choose' | translate\"\n                              [ngClass]=\"!specialNeeds?'filter-dropdown is-invalid':(specialNeeds?'filter-dropdown is-valid':'filter-dropdown')\"\n                              [notFoundMsg]=\"'ROOT.no_data_found' | translate\" [disabled]=\"isViewData\"\n                              (ngModelChange)=\"changeSpecialNeeds(specialNeeds)\">\n                            </ng-select>\n                            <label *ngIf=\"!specialNeeds\" class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate\n                              }}</label>\n                          </div>\n                          <div class=\"form-group mb-2 col-md-12\">\n                          </div>\n                          <div class=\"form-group mb-2 col-md-12\" *ngIf=\"showSpecialNeeds\">\n                            <input type=\"text\" class=\"form-control mt-0\" formControlName=\"special_needs_text\"\n                              [placeholder]=\"'CONTENT.mention-special-needs' | translate\" [readOnly]=\"isViewData\"\n                              [ngClass]=\"f.special_needs_text.invalid && f.special_needs_text.touched?'is-invalid':(f.special_needs_text.valid?'is-valid':'')\">\n                            <label\n                              *ngIf=\"f.special_needs_text.errors && f.special_needs_text.errors.required && (f.special_needs_text.touched || f.special_needs_text.dirty)\"\n                              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                          </div>\n                        </div>\n                      </div>\n                    </app-card>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <app-card cardTitle=\"{{'CONTENT.contact_data' | translate}}\" headerClass=\"text-center text-md-left\"\n                      [options]=\"false\" [loading]=\"loadBiodata\">\n                      <div class=\"app-body\">\n                        <div class=\"col-12\">\n                          <div class=\"row\">\n                            <div class=\"form-group mb-0 col-md-12\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.email' | translate }}</label>\n                              <input type=\"text\" class=\"form-control mt-1\" formControlName=\"email\" readonly>\n                            </div>\n                            <div class=\"form-group mb-1 col-md-12\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.phone_number' | translate }} <span class=\"required\">\n                                  *</span></label>\n                              <input type=\"text\" class=\"form-control mt-1\" required formControlName=\"mobile_phone_number\"\n                                minlength=\"11\" maxlength=\"13\" [readOnly]=\"isViewData\"\n                                [ngClass]=\"f.mobile_phone_number.invalid && f.mobile_phone_number.touched?'is-invalid':(f.mobile_phone_number.valid?'is-valid':'')\">\n                              <label\n                                *ngIf=\"f.mobile_phone_number.errors && f.mobile_phone_number.errors.required && (f.mobile_phone_number.touched || f.mobile_phone_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                              <label\n                                *ngIf=\"f.mobile_phone_number.errors && f.mobile_phone_number.errors.minlength && (f.mobile_phone_number.touched || f.mobile_phone_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n                              <label\n                                *ngIf=\"f.mobile_phone_number.errors && f.mobile_phone_number.errors.pattern && (f.mobile_phone_number.touched || f.mobile_phone_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                                }}</label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </app-card>\n                  </div>\n                </div>\n                <div *ngIf=\"!notHavePhoto\" class=\"row\">\n                  <div class=\"col-12 col-md-12\">\n                   <!--Data Alamat-->\n                    <app-card cardTitle=\"{{'CONTENT.address_data' | translate}}\" headerClass=\"text-center text-md-left\"\n                      [options]=\"false\" [loading]=\"loadBiodata\">\n                      <div class=\"app-body\">\n                        <div class=\"col-12\">\n                          <div class=\"row\">\n                            <div class=\"form-group mb-2 col-md-12\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.country' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.country'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"address_country\" [(ngModel)]=\"country\"\n                                [options]=\"listCountryBirth\"\n                                [ngClass]=\"!country?'filter-dropdown is-invalid':(country?'filter-dropdown is-valid':'filter-dropdown')\"\n                                (selected)=\"changeCountryDataforProvince($event)\" [disabled]=\"isViewData\"></ng-select>\n                            </div>\n                          </div>\n                          <div *ngIf=\"!hiddenAddressDetail\" class=\"row\">\n                            <div class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.province' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.province'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"address_province\"\n                                [(ngModel)]=\"province\" [options]=\"listProvince\"\n                                [ngClass]=\"!province?'filter-dropdown is-invalid':(province?'filter-dropdown is-valid':'filter-dropdown')\"\n                                (selected)=\"changeProvinceDataforCity($event)\" [disabled]=\"isViewData\"></ng-select>\n                            </div>\n                            <div class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.city' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.city'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"address_city\" [(ngModel)]=\"city\"\n                                [options]=\"listCity\"\n                                [ngClass]=\"!city?'filter-dropdown is-invalid':(city?'filter-dropdown is-valid':'filter-dropdown')\"\n                                (selected)=\"changeCityDataforDistrict($event)\" [disabled]=\"isViewData\"></ng-select>\n                            </div>\n                            <div class=\"form-group col-md-4\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.district' | translate }}</label>\n                              <ng-select [placeholder]=\"'CONTENT.district'|translate\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n                                formControlName=\"address_district\" [(ngModel)]=\"district\" [options]=\"listDistrict\"\n                                [disabled]=\"isViewData\"\n                                [ngClass]=\"!district?'filter-dropdown is-invalid':(district?'filter-dropdown is-valid':'filter-dropdown')\">\n                              </ng-select>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"form-group mb-2 col-md-12\">\n                              <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.address' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <textarea class=\"form-control\" formControlName=\"address_detail\" maxlength=\"150\" required\n                                [readOnly]=\"isViewData\"\n                                [ngClass]=\"f.address_detail.invalid && f.address_detail.touched?'is-invalid':(f.address_detail.valid?'is-valid':'')\"></textarea>\n                              <label\n                                *ngIf=\"f.address_detail.errors && f.address_detail.errors.required && (f.address_detail.touched || f.address_detail.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                              <label\n                                *ngIf=\"f.address_detail.errors && f.address_detail.errors.maxlength && (f.address_detail.touched || f.address_detail.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-address-detail' |\n                                translate }}</label>\n                            </div>\n                          </div>\n                          <div *ngIf=\"!hiddenAddressDetail\" class=\"row\">\n                            <div class=\"form-group col-md-6\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.zipcode' | translate }}\n                                <span class=\"required\">*</span></label>\n                              <input type=\"text\" [placeholder]=\"'CONTENT.zipcode'|translate\" class=\"form-control mt-1\" name=\"zipcode\"\n                                maxlength=\"5\" minlength=\"5\" required formControlName=\"zipcode\" [readOnly]=\"isViewData\"\n                                [ngClass]=\"f.zipcode.invalid && f.zipcode.touched?'is-invalid':(f.zipcode.valid?'is-valid':'')\">\n                              <label *ngIf=\"f.zipcode.errors && f.zipcode.errors.required && (f.zipcode.touched || f.zipcode.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                              <label *ngIf=\"f.zipcode.errors && f.zipcode.errors.minlength && (f.zipcode.touched || f.zipcode.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-zipcode' | translate\n                                }}</label>\n                              <label *ngIf=\"f.zipcode.errors && f.zipcode.errors.pattern && (f.zipcode.touched || f.zipcode.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                                }}</label>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.home_number' | translate }}</label>\n                              <input type=\"text\" [placeholder]=\"'CONTENT.home_number'|translate\" class=\"form-control mt-1\"\n                                name=\"home_number\" formControlName=\"house_phone_number\" maxlength=\"11\" [readOnly]=\"isViewData\"\n                                [ngClass]=\"f.house_phone_number.invalid && f.house_phone_number.touched?'is-invalid':(f.house_phone_number.valid?'is-valid':'')\">\n                              <label\n                                *ngIf=\"f.house_phone_number.errors && f.house_phone_number.errors.maxlength && (f.house_phone_number.touched || f.house_phone_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-zipcode' | translate\n                                }}</label>\n                              <label\n                                *ngIf=\"f.house_phone_number.errors && f.house_phone_number.errors.pattern && (f.house_phone_number.touched || f.house_phone_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                                }}</label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </app-card>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"col-sm-12 centered-content\">\n            <button type=\"submit\" class=\"btn btn-outline-primary btn-sm\"\n              [disabled]=\"!biodatasForms.valid || loadBiodata \" (click)=\"!isViewData ? createBiodatas() : goToParentsData()\">\n              <span *ngIf=\"this.loadBiodata\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loadBiodata\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loadBiodata\" class=\"btn-text\">{{ 'ROOT.next' | translate }} <i\n                  class=\"icofont icofont-rounded-right\"></i></span>\n            </button>\n          </div>\n        </wizard-step>\n        <wizard-step stepTitle=\"{{'CONTENT.parents' | translate}}\" navigationSymbol=\"2\">\n          <div class=\"row\">\n            <div padding class=\"col-md-12\">\n              <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"parentsForm\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <app-card [hidHeader]=\"true\" headerClass=\"text-center text-md-left\"\n                      [options]=\"false\" [loading]=\"loadingParents\">\n                      <div class=\"app-body\">\n                        <div class=\"form-group mb-2\">\n                          <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.relationship' | translate }} <span\n                              class=\"required\">*</span></label>\n                          <ng-select [placeholder]=\"'CONTENT.relationship'|translate\"\n                            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"parents\"\n                            [(ngModel)]=\"realtionshipSelected\" [disabled]=\"isViewData\"\n                            [ngClass]=\"!realtionshipSelected?'filter-dropdown is-invalid':(realtionshipSelected?'filter-dropdown is-valid':'filter-dropdown')\"\n                            [options]=\"listFamilyRelationship\" (selected)=\"changeFamilyRelationship($event)\">\n                          </ng-select>\n                          <label class=\"error text-danger small form-text\"\n                            *ngIf=\"!realtionshipSelected\">{{'ROOT.required' | translate }}</label>\n                        </div>\n                      </div>\n                    </app-card>\n                  </div>\n                  <div class=\"col-12 col-md-6\" *ngIf=\"realtionshipSelected && haveParents\">\n                    <app-card cardTitle=\"{{'CONTENT.father' | translate}}\" headerClass=\"text-center text-md-left\"\n                    [options]=\"false\" [loading]=\"loadingParents\">\n                    <div class=\"form-group mb-2\">\n                      <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.fullname' | translate }} <span\n                          class=\"required\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" name=\"name\" required formControlName=\"fathersName\"\n                        placeholder=\"{{'CONTENT.fathers-name' | translate}}\" [readOnly]=\"isViewData\"\n                        [ngClass]=\"fp.fathersName.invalid && fp.fathersName.touched?'is-invalid':(fp.fathersName.valid?'is-valid':'')\"\n                        maxlength=\"100\">\n                      <label\n                        *ngIf=\"fp.fathersName.errors && fp.fathersName.errors.required && (fp.fathersName.touched || fp.fathersName.dirty)\"\n                        class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                      <label\n                        *ngIf=\"fp.fathersName.errors && fp.fathersName.errors.maxlength && (fp.fathersName.touched || fp.fathersName.dirty)\"\n                        class=\"error text-danger small form-text\">{{ 'CONTENT.validation-fullname' | translate\n                        }}</label>\n                      <label\n                        *ngIf=\"fp.fathersName.errors && fp.fathersName.errors.pattern && (fp.fathersName.touched || fp.fathersName.dirty)\"\n                        class=\"error text-danger small form-text\">{{ 'CONTENT.letter-only' | translate }}</label>\n                    </div>\n                    <div class=\"form-row\">\n                      <div class=\"form-group mb-2 col-md-6\">\n                        <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.handphone' | translate }} <span\n                            class=\"required\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" required formControlName=\"fathersPhone\"\n                          minlength=\"11\" maxlength=\"13\" placeholder=\"{{'CONTENT.placeholder-number' | translate}}\" [readOnly]=\"isViewData\"\n                          [ngClass]=\"fp.fathersPhone.invalid && fp.fathersPhone.touched?'is-invalid':(fp.fathersPhone.valid?'is-valid':'')\">\n                        <label\n                          *ngIf=\"fp.fathersPhone.errors && fp.fathersPhone.errors.required && (fp.fathersPhone.touched || fp.fathersPhone.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                        <label\n                          *ngIf=\"fp.fathersPhone.errors && fp.fathersPhone.errors.minlength && (fp.fathersPhone.touched || fp.fathersPhone.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n                        <label\n                          *ngIf=\"fp.fathersPhone.errors && fp.fathersPhone.errors.pattern && (fp.fathersPhone.touched || fp.fathersPhone.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                          }}</label>\n                      </div>\n                      <div class=\"form-group mb-2 col-md-6\">\n                        <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.NIK' | translate }}\n                          <i class=\"icofont icofont-info-circle\" [placement]=\"'top'\"\n                            ngbTooltip=\"NIK terdapat pada KTP atau Kartu Keluarga\"></i><span\n                            class=\"required\"> *</span></label>\n                        <input type=\"text\" class=\"form-control\" name=\"NIK\"\n                          placeholder=\"{{'CONTENT.nik-father' | translate}}\" required\n                          formControlName=\"fathersIdentityNumber\" minlength=\"16\" maxlength=\"16\" [readOnly]=\"isViewData\"\n                          [ngClass]=\"fp.fathersIdentityNumber.invalid && fp.fathersIdentityNumber.touched?'is-invalid':(fp.fathersIdentityNumber.valid?'is-valid':'')\">\n                        <label\n                          *ngIf=\"fp.fathersIdentityNumber.errors && fp.fathersIdentityNumber.errors.required && (fp.fathersIdentityNumber.touched || fp.fathersIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                        <label\n                          *ngIf=\"fp.fathersIdentityNumber.errors && fp.fathersIdentityNumber.errors.minlength && (fp.fathersIdentityNumber.touched || fp.fathersIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nik' | translate\n                          }}</label>\n                        <label\n                          *ngIf=\"fp.fathersIdentityNumber.errors && fp.fathersIdentityNumber.errors.maxlength && (fp.fathersIdentityNumber.touched || fp.fathersIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nik' | translate\n                          }}</label>\n                        <label\n                          *ngIf=\"fp.fathersIdentityNumber.errors && fp.fathersIdentityNumber.errors.pattern && (fp.fathersIdentityNumber.touched || fp.fathersIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                          }}</label>\n                      </div>\n                    </div>\n                    </app-card>\n                  </div>\n                  <div class=\"col-12 col-md-6\" *ngIf=\"realtionshipSelected && haveParents\">\n                    <app-card cardTitle=\"{{'CONTENT.mother' | translate}}\" headerClass=\"text-center text-md-left\"\n                    [options]=\"false\" [loading]=\"loadingParents\">\n                    <div class=\"form-group mb-2\">\n                      <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.fullname' | translate }} <span\n                          class=\"required\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" name=\"name\" required formControlName=\"mothersName\" [readOnly]=\"isViewData\"\n                        placeholder=\"{{'CONTENT.mothers-name' | translate}}\"\n                        [ngClass]=\"fp.mothersName.invalid && fp.mothersName.touched?'is-invalid':(fp.mothersName.valid?'is-valid':'')\"\n                        maxlength=\"100\">\n                      <label\n                        *ngIf=\"fp.mothersName.errors && fp.mothersName.errors.required && (fp.mothersName.touched || fp.mothersName.dirty)\"\n                        class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                      <label\n                        *ngIf=\"fp.mothersName.errors && fp.mothersName.errors.maxlength && (fp.mothersName.touched || fp.mothersName.dirty)\"\n                        class=\"error text-danger small form-text\">{{ 'CONTENT.validation-fullname' | translate\n                        }}</label>\n                      <label\n                        *ngIf=\"fp.mothersName.errors && fp.mothersName.errors.pattern && (fp.mothersName.touched || fp.mothersName.dirty)\"\n                        class=\"error text-danger small form-text\">{{ 'CONTENT.letter-only' | translate }}</label>\n                    </div>\n                    <div class=\"form-row\">\n                      <div class=\"form-group mb-2 col-md-6\">\n                        <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.handphone' | translate }} <span\n                            class=\"required\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" required formControlName=\"mothersPhone\" [readOnly]=\"isViewData\"\n                          minlength=\"11\" maxlength=\"13\" placeholder=\"{{'CONTENT.placeholder-number' | translate}}\"\n                          [ngClass]=\"fp.mothersPhone.invalid && fp.mothersPhone.touched?'is-invalid':(fp.mothersPhone.valid?'is-valid':'')\">\n                        <label\n                          *ngIf=\"fp.mothersPhone.errors && fp.mothersPhone.errors.required && (fp.mothersPhone.touched || fp.mothersPhone.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                        <label\n                          *ngIf=\"fp.mothersPhone.errors && fp.mothersPhone.errors.minlength && (fp.mothersPhone.touched || fp.mothersPhone.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n                        <label\n                          *ngIf=\"fp.mothersPhone.errors && fp.mothersPhone.errors.pattern && (fp.mothersPhone.touched || fp.mothersPhone.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                          }}</label>\n                      </div>\n                      <div class=\"form-group mb-2 col-md-6\">\n                        <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.NIK' | translate }}\n                          <i class=\"icofont icofont-info-circle\" [placement]=\"'top'\"\n                            ngbTooltip=\"NIK terdapat pada KTP atau Kartu Keluarga\"></i><span\n                            class=\"required\"> *</span></label>\n                        <input type=\"text\" class=\"form-control\" name=\"NIK\" required [readOnly]=\"isViewData\"\n                          formControlName=\"mothersIdentityNumber\" minlength=\"16\" maxlength=\"16\"\n                          placeholder=\"{{'CONTENT.nik-mother' | translate}}\"\n                          [ngClass]=\"fp.mothersIdentityNumber.invalid && fp.mothersIdentityNumber.touched?'is-invalid':(fp.mothersIdentityNumber.valid?'is-valid':'')\">\n                        <label\n                          *ngIf=\"fp.mothersIdentityNumber.errors && fp.mothersIdentityNumber.errors.required && (fp.mothersIdentityNumber.touched || fp.mothersIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                        <label\n                          *ngIf=\"fp.mothersIdentityNumber.errors && fp.mothersIdentityNumber.errors.minlength && (fp.mothersIdentityNumber.touched || fp.mothersIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nik' | translate\n                          }}</label>\n                        <label\n                          *ngIf=\"fp.mothersIdentityNumber.errors && fp.mothersIdentityNumber.errors.maxlength && (fp.mothersIdentityNumber.touched || fp.mothersIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nik' | translate\n                          }}</label>\n                        <label\n                          *ngIf=\"fp.mothersIdentityNumber.errors && fp.mothersIdentityNumber.errors.pattern && (fp.mothersIdentityNumber.touched || fp.mothersIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                          }}</label>\n                      </div>\n                    </div>\n                    </app-card>\n                  </div>\n                  <div class=\"col-12 col-md-12\" *ngIf=\"realtionshipSelected && !haveParents\">\n                    <app-card cardTitle=\"{{'CONTENT.male-relatives' | translate}}\" headerClass=\"text-center text-md-left\"\n                    [options]=\"false\" [loading]=\"loadingParents\">\n                    <div class=\"form-group mb-2\">\n                      <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.fullname' | translate }} <span\n                          class=\"required\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" name=\"name\" required\n                        formControlName=\"maleRelativesName\" [readOnly]=\"isViewData\"\n                        placeholder=\"{{'CONTENT.male-relative-name' | translate}}\"\n                        [ngClass]=\"fp.maleRelativesName.invalid && fp.maleRelativesName.touched?'is-invalid':(fp.maleRelativesName.valid?'is-valid':'')\"\n                        maxlength=\"100\">\n                      <label\n                        *ngIf=\"fp.maleRelativesName.errors && fp.maleRelativesName.errors.required && (fp.maleRelativesName.touched || fp.maleRelativesName.dirty)\"\n                        class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                      <label\n                        *ngIf=\"fp.maleRelativesName.errors && fp.maleRelativesName.errors.maxlength && (fp.maleRelativesName.touched || fp.maleRelativesName.dirty)\"\n                        class=\"error text-danger small form-text\">{{ 'CONTENT.validation-fullname' | translate\n                        }}</label>\n                      <label\n                        *ngIf=\"fp.maleRelativesName.errors && fp.maleRelativesName.errors.pattern && (fp.maleRelativesName.touched || fp.maleRelativesName.dirty)\"\n                        class=\"error text-danger small form-text\">{{ 'CONTENT.letter-only' | translate }}</label>\n                    </div>\n                    <div class=\"form-row\">\n                      <div class=\"form-group mb-2 col-md-6\">\n                        <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.handphone' | translate }}\n                          <span class=\"required\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" required formControlName=\"maleRelativesPhone\" [readOnly]=\"isViewData\"\n                          minlength=\"11\" maxlength=\"13\" placeholder=\"{{'CONTENT.placeholder-number' | translate}}\"\n                          [ngClass]=\"fp.maleRelativesPhone.invalid && fp.maleRelativesPhone.touched?'is-invalid':(fp.maleRelativesPhone.valid?'is-valid':'')\">\n                        <label\n                          *ngIf=\"fp.maleRelativesPhone.errors && fp.maleRelativesPhone.errors.required && (fp.maleRelativesPhone.touched || fp.maleRelativesPhone.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                        <label\n                          *ngIf=\"fp.maleRelativesPhone.errors && fp.maleRelativesPhone.errors.minlength && (fp.maleRelativesPhone.touched || fp.maleRelativesPhone.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n                        <label\n                          *ngIf=\"fp.maleRelativesPhone.errors && fp.maleRelativesPhone.errors.pattern && (fp.maleRelativesPhone.touched || fp.maleRelativesPhone.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                          }}</label>\n                      </div>\n                      <div class=\"form-group mb-2 col-md-6\">\n                        <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.NIK' | translate }}\n                          <i class=\"icofont icofont-info-circle\" [placement]=\"'top'\"\n                            ngbTooltip=\"NIK terdapat pada KTP atau Kartu Keluarga\"></i> <span\n                            class=\"required\">*</span></label>\n                        <input type=\"text\" class=\"form-control\" name=\"NIK\" required\n                          formControlName=\"maleRelativesIdentityNumber\" minlength=\"16\" maxlength=\"16\"\n                          placeholder=\"{{'CONTENT.nik-malerelative' | translate}}\" [readOnly]=\"isViewData\"\n                          [ngClass]=\"fp.maleRelativesIdentityNumber.invalid && fp.maleRelativesIdentityNumber.touched?'is-invalid':(fp.maleRelativesIdentityNumber.valid?'is-valid':'')\">\n                        <label\n                          *ngIf=\"fp.maleRelativesIdentityNumber.errors && fp.maleRelativesIdentityNumber.errors.required && (fp.maleRelativesIdentityNumber.touched || fp.maleRelativesIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                        <label\n                          *ngIf=\"fp.maleRelativesIdentityNumber.errors && fp.maleRelativesIdentityNumber.errors.minlength && (fp.maleRelativesIdentityNumber.touched || fp.maleRelativesIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nik' | translate\n                          }}</label>\n                        <label\n                          *ngIf=\"fp.maleRelativesIdentityNumber.errors && fp.maleRelativesIdentityNumber.errors.maxlength && (fp.maleRelativesIdentityNumber.touched || fp.maleRelativesIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nik' | translate\n                          }}</label>\n                        <label\n                          *ngIf=\"fp.maleRelativesIdentityNumber.errors && fp.maleRelativesIdentityNumber.errors.pattern && (fp.maleRelativesIdentityNumber.touched || fp.maleRelativesIdentityNumber.dirty)\"\n                          class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                          }}</label>\n                      </div>\n                    </div>\n                    </app-card>\n                  </div>\n                    <div class=\"col-sm-12 centered-content\">\n                      <button type=\"button\" class=\"btn btn-outline-secondary btn-sm m-1\" previousStep><i\n                          class=\"icofont icofont-rounded-left\"></i> {{ 'ROOT.back' | translate }}\n                      </button>\n                      <button type=\"submit\" class=\"btn btn-outline-primary btn-sm m-1\" (click)=\"!isViewData ? createParents() : gotoStepDocument()\" [disabled]=\"!parentsForm.valid || loadingParents\">\n                        <span *ngIf=\"this.loadingParents\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                        <span *ngIf=\"this.loadingParents\" class=\"load-text\"> Loading...</span>\n                        <span *ngIf=\"!this.loadingParents\" class=\"btn-text\">{{ 'ROOT.next' | translate }} <i\n                            class=\"icofont icofont-rounded-right\"></i></span>\n                      </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </wizard-step>\n        <wizard-step stepTitle=\"{{'CONTENT.documents' | translate}}\" navigationSymbol=\"3\">\n          <div padding class=\"col-md-12\">\n            <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"parentsForm\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <app-alert type=\"warning\" *ngIf=\"!isViewData\">\n                    <i class=\"icofont icofont-warning\"></i> <b> {{'CONTENT.warning' | translate }}!</b> <br>{{'CONTENT.warning-new-student-data' | translate}}\n                  </app-alert>\n                  <app-card cardTitle=\"Data {{'CONTENT.documents' | translate}}\" headerClass=\"text-center text-md-left\"\n                    [options]=\"false\" [loading]=\"loadTableDocument\">\n                    <div class=\"table-responsive pb-1 mt-2\">\n                      <table datatable class=\"table table-striped mb-0 table-sm\" [dtOptions]=\"dtOptions[0]\"\n                        [dtTrigger]=\"dtTrigger\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.no' | translate }}</th>\n                            <th scope=\"col\">{{ 'CONTENT.document-name' | translate }}</th>\n                            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.status-document' | translate }}</th>\n                            <th scope=\"col\" class=\"text-center col-width filter-dropdown-style\">{{ 'CONTENT.status-approved' |\n                              translate }}</th>\n                              <th scope=\"col\" class=\"text-center col-width\">{{ 'CONTENT.action' | translate }}</th>\n                          </tr>\n                        </thead>\n                        <tbody *ngIf=\"tableDocument?.length != 0\">\n                          <tr *ngFor=\"let data of tableDocument; let i = index;\">\n                            <th scope=\"row\" style=\"padding-left: 10px; text-align:center \">{{i+1}}</th>\n                            <td>\n                              {{data.new_student_document_type}}\n                            </td>\n                            <td class=\"text-center\">\n                              <span *ngIf=\"data.document != null &&  data.document_type_id !== 7\"\n                                [class]=\"data.document.url == null ? 'badge badge-light-danger' : 'badge badge-light-success'\">\n                                <i\n                                  [class]=\"data.document.url == null ? 'icofont icofont-error' : 'icofont icofont-tick-mark'\"></i>\n                                {{ data.document.url == null ? ('CONTENT.not-complete' | translate) : ('CONTENT.complete' | translate) }}\n                              </span>\n                              <span *ngIf=\"data.document == [] && data.document_type_id !== 7\" [class]=\"'badge badge-light-danger'\">\n                                <i [class]=\"'icofont icofont-error'\"></i> {{ 'CONTENT.not-complete' | translate }}\n                              </span>\n                              <span *ngIf=\"data.document == null && data.document_type_id !== 7\" class=\"badge badge-light-danger\">\n                                <i [class]=\"'icofont icofont-error'\"></i> {{ 'CONTENT.not-complete' | translate }}\n                              </span>\n                            </td>\n                            <td class=\"text-center\">\n                              <div *ngIf=\"data.document != null && data.document_type_id != 7\">\n                                <span *ngIf=\"data.document.approval_final_status == true\" class=\"badge badge-success\">{{ 'CONTENT.approve' |\n                                  translate }}</span>\n                                <span *ngIf=\"data.document.approval_final_status == false\" class=\"badge badge-danger\">{{\n                                  'ROOT.rejected' | translate }}</span>\n                                <span *ngIf=\"data.document.approval_final_status == null\" class=\"badge badge-secondary\">{{\n                                  'CONTENT.not-specified' | translate }}</span>\n                                </div>\n                                <div *ngIf=\"data.document == null && data.document_type_id != 7\">\n                                  <span class=\"badge badge-secondary\">{{\n                                    'CONTENT.not-specified' | translate }}</span>\n                                  </div>\n                            </td>\n                            <td class=\"text-center\">\n                              <button [hidden]=\"data.document_type_id == 7\" type=\"button\" class=\"btn btn-outline-primary btn-sm m-1\" [placement]=\"'left'\"\n                                (click)=\"downloadDocument(data)\" [disabled]=\"loadingDownload\"\n                                [ngbTooltip]=\"'CONTENT.download-document' | translate\">\n                                <span *ngIf=\"this.loadingDownload\" class=\"spinner-border spinner-border-sm\"\n                                  role=\"status\"></span>\n                                <span *ngIf=\"this.loadingDownload\" class=\"load-text\"> Loading...</span>\n                                <span *ngIf=\"!this.loadingDownload\" class=\"btn-text\"><i\n                                    class=\"feather icon-download\"></i>\n                                </span>\n                              </button>\n                              <button type=\"button\" [class]=\"data.document_type_id == 7 ? 'btn btn-outline-info btn-sm m-1' : 'btn btn-outline-warning btn-sm m-1'\" [placement]=\"'left'\"\n                                (click)=\"uploadDocumentData(data)\"\n                                [ngbTooltip]=\"data.document_type_id == 7 ? ('CONTENT.view-document-info' | translate) : ('CONTENT.change-document-info' | translate)\">\n                                <i [class]=\"data.document_type_id == 7 ? 'icofont icofont-info-circle' : 'fas fa-cloud-upload-alt'\"></i>\n                              </button>\n                              <button type=\"button\" *ngIf=\"data.document_type_id != 7 && data.document != null && data.document.approval_final_status == false\" class=\"btn btn-outline-info btn-sm m-1\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.rejected-info' | translate\"\n                                (click)=\"revisedData(data)\"><i\n                                  class=\"fas fa-eye\"></i></button>\n                            </td>\n                          </tr>\n                        </tbody>\n                        <tbody *ngIf=\"tableDocument?.length == 0 && !loadTableDocument\">\n                          <tr>\n                            <td colspan=\"5\" class=\"no-data-available text-center\">\n                              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n                            </td>\n                            <td class=\"hidden\"></td>\n                            <td class=\"hidden\"></td>\n                            <td class=\"hidden\"></td>\n                            <td class=\"hidden\"></td>\n                          </tr>\n                        </tbody>\n                        <tbody *ngIf=\"tableDocument?.length == 0 && loadTableDocument\">\n                          <tr>\n                            <td colspan=\"5\" class=\"no-data-available text-center\">\n                              <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n                            </td>\n                            <td class=\"hidden\"></td>\n                            <td class=\"hidden\"></td>\n                            <td class=\"hidden\"></td>\n                            <td class=\"hidden\"></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </app-card>\n                  <div class=\"col-sm-12 centered-content\">\n                    <button type=\"button\" class=\"btn btn-outline-secondary btn-sm m-1\" previousStep><i\n                        class=\"icofont icofont-rounded-left\"></i> {{ 'ROOT.back' | translate }}\n                    </button>\n                    <button *ngIf=\"isComplete\" type=\"button\" class=\"btn btn-outline-primary btn-sm m-1\" (click)=\"createMappingNewStepDocument()\" [disabled]=\"loadTableDocument\">\n                      <span *ngIf=\"this.loadTableDocument\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                      <span *ngIf=\"this.loadTableDocument\" class=\"load-text\"> Loading...</span>\n                      <span *ngIf=\"!this.loadTableDocument\" class=\"btn-text\">{{ 'ROOT.next' | translate }} <i\n                          class=\"icofont icofont-rounded-right\"></i></span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </wizard-step>\n        <wizard-step stepTitle=\"{{'CONTENT.berita-acara' | translate}}\" navigationSymbol=\"4\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-6 p-4 text-center middle-content\">\n                <img *ngIf=\"haveNimEmail\" src=\"assets/images/vector/done-vector.svg\" class=\"vector-styling center image-size\" alt=\"\">\n                <img *ngIf=\"!haveNimEmail\" src=\"assets/images/vector/loading-vector.svg\" class=\"vector-styling center image-size\" alt=\"\">\n              </div>\n              <div class=\"col-12 col-lg-6 p-4 text-left middle-content text-justify\">\n                <span class=\"head-home\">\n                  <app-alert *ngIf=\"haveNimEmail\" type=\"success\">\n                    <p class=\"text-center\">\n                      <b>Well Done!</b> <br>\n                      {{ 'CONTENT.document-step-approved' | translate }} <br>\n                      {{ 'CONTENT.nim-institusi' | translate}} : <br>\n                      <b>{{ dataEmail.student_id ? dataEmail.student_id : '-'}}</b> <br>\n                      {{ 'CONTENT.email-institusi' | translate}} : <br>\n                      <b>{{ dataEmail.university_email ? dataEmail.university_email : '-' }}</b>\n                    </p>\n                  </app-alert>\n                  <app-alert *ngIf=\"!haveNimEmail\" type=\"primary\">\n                    <p class=\"text-center\">\n                      <!-- <b>{{ 'CONTENT.information' | translate }}</b> <br> -->\n                      {{ 'CONTENT.document-complete' | translate }}<br>\n                      {{ 'CONTENT.nim-institusi' | translate}} : <br>\n                      <b>{{ 'CONTENT.not-specified' | translate }}</b> <br>\n                      {{ 'CONTENT.email-institusi' | translate}} : <br>\n                      <b>{{ 'CONTENT.not-specified' | translate }}</b>\n                    </p>\n                  </app-alert>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"rpw\">\n            <div class=\"col-sm-12 centered-content\">\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-sm m-1\" previousStep><i\n                  class=\"icofont icofont-rounded-left\"></i> {{ 'ROOT.back' | translate }}\n              </button>\n              <button *ngIf=\"haveNimEmail\" type=\"button\" class=\"btn btn-outline-success btn-sm m-1\" routerLink=\"/new-student-registration\">\n                <span *ngIf=\"this.submitloader\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.submitloader\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.submitloader\" class=\"btn-text\">{{ 'ROOT.finish' | translate }} <i\n                    class=\"icofont icofont-racing-flag-alt\"></i></span>\n              </button>\n              <button *ngIf=\"!haveNimEmail\"  type=\"button\" class=\"btn btn-outline-dark btn-sm m-1\" routerLink=\"/new-student-registration\">\n                <span *ngIf=\"this.submitloader\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                <span *ngIf=\"this.submitloader\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.submitloader\" class=\"btn-text\">{{ 'ROOT.close' | translate }} <i\n                    class=\"icofont icofont-close-circled\"></i></span>\n              </button>\n            </div>\n          </div>\n        </wizard-step>\n      </wizard>\n    </app-card>\n  </div>\n</div>\n\n<app-ui-modal #modalPreview [containerClick]=\"false\" [dialogClass]=\"'modal-md'\" [hideFooter]=\"false\"\n  [loading]=\"loadingSaveGambar\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{'CONTENT.preview-image' | translate}}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"modalPreview.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"row pb-3\">\n      <div class=\"col-12 text-center\">\n        <img id=\"photo\" [src]=\"previewPhoto\" alt=\"user image\" class=\"img-radius align-top m-r-15 wid-40 img-cover-fit\"\n          style=\"width:150px; height:150px; margin-left:15px; margin-right:15px;\">\n      </div>\n    </div>\n    <app-alert type=\"info\" *ngIf=\"!notHavePhoto\">\n      <div class=\"col-sm-12 text-center\">\n        <p><b>{{'CONTENT.provision' |translate}}</b> <br>{{ 'CONTENT.photo-info-2' | translate }}<br>{{\n          'CONTENT.photo-info-3' | translate }}.<br>{{ 'CONTENT.photo-info-4' | translate }}. <br><br><i>{{\n            'CONTENT.photo-info-5' | translate }}</i></p>\n      </div>\n    </app-alert>\n    <div class=\"row align-items-center\">\n      <div class=\"col-12 text-center\">\n        <button class=\"btn btn-success btn-sm btn-round has-ripple\" (click)=\"saveImg()\">\n          {{'ROOT.save' | translate}}\n        </button>\n      </div>\n    </div>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #uploadDocumentModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.change-document-info' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"uploadDocumentClose()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"uploadFileForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.upload-file' | translate }} <span class=\"required\">*</span></label>\n            <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n              accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadUrl($event)\" required\n              [ngClass]=\"fuf.url.invalid && fuf.url.touched?'is-invalid':(fuf.url.valid?'is-valid':'')\" />\n            <p class=\"error text-danger small form-text\">\n              {{fuf.url.errors && fuf.url.errors.required && (fuf.url.touched || fuf.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n          <div class=\"form-group mb-0 text-right\">\n            <button type=\"submit\" class=\"btn btn-success btn-sm\" (click)=\"createDocParticipant()\"\n            [disabled]=\"uploadFileForm.invalid || this.loadingUpload\">\n            <span *ngIf=\"this.loadingUpload\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loadingUpload\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loadingUpload\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n              class=\"icofont icofont-location-arrow\"></i></span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #showTableDoc [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-lg\"\n  [hideFooter]=\"true\" [loading]=\"loadTableRaport\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.raport-document-info' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"showTableDocClose()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"table-responsive pb-1\">\n      <table class=\"table table-borderless table-sm table-boder-radius dataTable\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" class=\"custom-no\">{{ 'CONTENT.no' | translate}}</th>\n            <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.semester' | translate}}</th>\n            <th scope=\"col\" class=\"text-center\">{{ 'CONTENT.status-document' | translate }}</th>\n            <th scope=\"col\" class=\"text-center col-width filter-dropdown-style table-custom\">{{ 'CONTENT.status-approved' | translate}}</th>\n            <th scope=\"col\" style=\"text-align:center\">{{ 'CONTENT.action' | translate}}</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableDataRaport?.length != 0\">\n          <tr\n          *ngFor=\"let data of tableDataRaport; let i = index\">\n            <th scope=\"row\" class=\"custom-no\">{{ i+1 }}</th>\n            <td class=\"text-center\">Semester {{ data.semester_id }} </td>\n            <td class=\"text-center\">\n              <span\n                [class]=\"data.url == null ? 'badge badge-light-danger' : 'badge badge-light-success'\">\n                <i\n                  [class]=\"data.url == null ? 'icofont icofont-error' : 'icofont icofont-tick-mark'\"></i>\n                {{ data.url == null ? ('CONTENT.not-complete' | translate) : ('CONTENT.complete' | translate) }}\n              </span>\n            </td>\n            <td class=\"text-center\">\n              <div *ngIf=\"data.document_id != null\">\n                <span *ngIf=\"data.approval_final_status == true\" class=\"badge badge-success\">{{ 'CONTENT.approve' |\n                  translate }}</span>\n                <span *ngIf=\"data.approval_final_status == false\" class=\"badge badge-danger\">{{\n                  'ROOT.rejected' | translate }}</span>\n                <span *ngIf=\"data.approval_final_status == null\" class=\"badge badge-secondary\">{{\n                  'CONTENT.not-specified' | translate }}</span>\n                </div>\n            </td>\n            <td class=\"text-center\">\n              <button type=\"button\" class=\"btn btn-outline-primary btn-sm m-1\" [placement]=\"'left'\"\n                (click)=\"downloadDocumentRaport(data)\" [disabled]=\"loadingDownload\"\n                [ngbTooltip]=\"'CONTENT.download-document' | translate\">\n                <span *ngIf=\"this.loadingDownload\" class=\"spinner-border spinner-border-sm\"\n                  role=\"status\"></span>\n                <span *ngIf=\"this.loadingDownload\" class=\"load-text\"> Loading...</span>\n                <span *ngIf=\"!this.loadingDownload\" class=\"btn-text\"><i\n                    class=\"feather icon-download\"></i>\n                </span>\n              </button>\n              <button type=\"button\" [class]=\"'btn btn-outline-warning btn-sm m-1'\" [placement]=\"'left'\"\n                (click)=\"uploadDocumentDataRaport(data)\"\n                [ngbTooltip]=\"'CONTENT.change-document-info' | translate\">\n                <i [class]=\"'fas fa-cloud-upload-alt'\"></i>\n              </button>\n              <button type=\"button\" *ngIf=\"data.approval_final_status == false\" class=\"btn btn-outline-info btn-sm m-1\" [placement]=\"'left'\" [ngbTooltip]=\"'CONTENT.rejected-info' | translate\"\n                (click)=\"revisedDataRaport(data)\"><i\n                class=\"fas fa-eye\"></i></button>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableDataRaport?.length == 0 && !loadTableRaport\">\n          <tr>\n            <td colspan=\"5\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableDataRaport?.length == 0 && loadTableRaport\">\n          <tr>\n            <td colspan=\"5\" class=\"no-data-available text-center\">\n              <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n            </td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n            <td class=\"hidden\"></td>\n          </tr>\n        </tbody>\n      </table>\n      <ngb-pagination *ngIf=\"tableDataRaport.length == 0\" class=\"d-flex justify-content-center\" [(page)]=\"pageDocument\" [pageSize]=\"10\"\n        [collectionSize]=\"tableDataRaport.length\" [maxSize]=\"3\" [boundaryLinks]=\"true\">\n      </ngb-pagination>\n    </div>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #showTableDocDetails [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\"\n  [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.change-document-info' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"showTableDocDetailsClose()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"uploadRaportFileForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.upload-file' | translate }} <span class=\"required\">*</span></label>\n            <input class=\"form-control\" id=\"url\" type=\"file\" name=\"url\" formControlName=\"url\"\n              accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"uploadRaportUrl($event)\" required\n              [ngClass]=\"fur.url.invalid && fur.url.touched?'is-invalid':(fur.url.valid?'is-valid':'')\" />\n            <p class=\"error text-danger small form-text\">\n              {{fur.url.errors && fur.url.errors.required && (fur.url.touched || fur.url.dirty) ? ('CONTENT.required' |\n              translate) : ''}}\n              {{ errSize?('CONTENT.invalid-size-file' | translate):(errType?('CONTENT.invalid-format-file' |\n              translate):'') }} {{'CONTENT.format-file-1' | translate}} {{'CONTENT.size-file-maximum' | translate}} 2\n              Mb.</p>\n          </div>\n          <div class=\"form-group mb-0 text-right\">\n            <button type=\"submit\" class=\"btn btn-success btn-sm\" (click)=\"createRaportDocument()\"\n            [disabled]=\"uploadRaportFileForm.invalid || this.loadingUploadRaport\">\n            <span *ngIf=\"this.loadingUploadRaport\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loadingUploadRaport\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loadingUploadRaport\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n              class=\"icofont icofont-location-arrow\"></i></span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<app-ui-modal #revisedModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{ 'CONTENT.revised-title' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeRevisedModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"rejectedForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.status-approved' | translate }} </label> <br>\n            <span class=\"badge badge-light-danger\">{{ 'ROOT.rejected' | translate}}</span>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.notes' | translate }} </label> <br>\n            <label>{{ dataRevised.approval_final_comment }}</label>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n");

/***/ }),

/***/ "./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail-routing.module.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail-routing.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: NewStudentRegistrationDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStudentRegistrationDetailRoutingModule", function() { return NewStudentRegistrationDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _new_student_registration_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-student-registration-detail.component */ "./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _new_student_registration_detail_component__WEBPACK_IMPORTED_MODULE_2__["NewStudentRegistrationDetailComponent"]
    }
];
let NewStudentRegistrationDetailRoutingModule = class NewStudentRegistrationDetailRoutingModule {
};
NewStudentRegistrationDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], NewStudentRegistrationDetailRoutingModule);



/***/ }),

/***/ "./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=text] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=number] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=email] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=date] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ntextarea {\n  width: 100%;\n  height: 70px;\n  padding: 5px 5px;\n  padding-top: 2px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: transparent;\n  font-size: 13px;\n  color: grey;\n  resize: none;\n}\n\n.required {\n  color: red;\n}\n\n.col-width {\n  width: 30px;\n}\n\n.custom-style {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.image-size {\n  height: 400px;\n  width: 400px;\n}\n\n.no-border {\n  border: none;\n}\n\n.center-table {\n  margin-left: auto;\n  margin-right: auto;\n  border: none;\n  width: auto;\n}\n\n.middle-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.middle-content > img {\n  max-width: 100%;\n}\n\n@media (min-width: 992px) {\n  span.head-home {\n    padding-right: 3rem !important;\n  }\n}\n\n.img-alert {\n  max-width: 90%;\n}\n\n@media (min-width: 576px) {\n  .img-alert {\n    max-width: 30%;\n  }\n}\n\n.img-alert .img-center {\n  display: inline-block;\n  width: 70%;\n}\n\n.vector-styling {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.table-custom {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.custom-no {\n  width: auto;\n  max-width: 10px;\n  text-align: center;\n}\n\n.table-boder-radius {\n  border-collapse: collapse;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n\n.table-boder-radius tr:hover {\n  color: #4680ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL25ldy1zdHVkZW50LXJlZ2lzdHJhdGlvbi9uZXctc3R1ZGVudC1yZWdpc3RyYXRpb24tZGV0YWlsL25ldy1zdHVkZW50LXJlZ2lzdHJhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL25ldy1zdHVkZW50LXJlZ2lzdHJhdGlvbi9uZXctc3R1ZGVudC1yZWdpc3RyYXRpb24tZGV0YWlsL25ldy1zdHVkZW50LXJlZ2lzdHJhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNHSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQUU7RUFDRSxVQUFBO0FDR0o7O0FEQUU7RUFDRSxXQUFBO0FDR0o7O0FEQUU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNHSjs7QURBRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQUU7RUFDRSxZQUFBO0FDR0o7O0FEREU7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNJTjs7QURERTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7QUNHSjs7QURGSTtFQUNFLGVBQUE7QUNJTjs7QURERTtFQUNFO0lBQ0UsOEJBQUE7RUNJSjtBQUNGOztBRERFO0VBQ0UsY0FBQTtBQ0dKOztBREZJO0VBRkY7SUFHSSxjQUFBO0VDS0o7QUFDRjs7QURISTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQ0tOOztBRERFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURERTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0lKOztBRERFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0lKOztBRERFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FESEk7RUFDRSxjQUFBO0FDS04iLCJmaWxlIjoic3JjL2FwcC90aGVtZS9uZXctc3R1ZGVudC1yZWdpc3RyYXRpb24vbmV3LXN0dWRlbnQtcmVnaXN0cmF0aW9uLWRldGFpbC9uZXctc3R1ZGVudC1yZWdpc3RyYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPW51bWJlcl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGlucHV0W3R5cGU9ZGF0ZV0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6Z3JleTtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cbiAgXG4gIC5yZXF1aXJlZCB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5jb2wtd2lkdGgge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG5cbiAgLmN1c3RvbS1zdHlsZSB7XG4gICAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIH1cblxuICAuaW1hZ2Utc2l6ZSB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC5uby1ib3JkZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuY2VudGVyLXRhYmxlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgXG4gIC5taWRkbGUtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgID4gaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgc3Bhbi5oZWFkLWhvbWUge1xuICAgICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgLmltZy1hbGVydCB7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICB9XG4gIFxuICAgIC5pbWctY2VudGVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICB9XG4gIFxuICAudmVjdG9yLXN0eWxpbmd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnRhYmxlLWN1c3RvbXtcbiAgICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgfVxuXG4gIC5jdXN0b20tbm97XG4gICAgd2lkdGg6YXV0bztcbiAgICBtYXgtd2lkdGg6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnRhYmxlLWJvZGVyLXJhZGl1cyB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cjpob3ZlciB7XG4gICAgICBjb2xvcjogIzQ2ODBmZjtcbiAgICB9XG4gIH1cbiAgIiwiaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dFt0eXBlPWVtYWlsXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1kYXRlXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmV5O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5jb2wtd2lkdGgge1xuICB3aWR0aDogMzBweDtcbn1cblxuLmN1c3RvbS1zdHlsZSB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uaW1hZ2Utc2l6ZSB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLm5vLWJvcmRlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNlbnRlci10YWJsZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5taWRkbGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWlkZGxlLWNvbnRlbnQgPiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBzcGFuLmhlYWQtaG9tZSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG59XG4uaW1nLWFsZXJ0IHtcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmltZy1hbGVydCB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gIH1cbn1cbi5pbWctYWxlcnQgLmltZy1jZW50ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi52ZWN0b3Itc3R5bGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udGFibGUtY3VzdG9tIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5jdXN0b20tbm8ge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJsZS1ib2Rlci1yYWRpdXMge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFibGUtYm9kZXItcmFkaXVzIHRyOmhvdmVyIHtcbiAgY29sb3I6ICM0NjgwZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: NewStudentRegistrationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStudentRegistrationDetailComponent", function() { return NewStudentRegistrationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/admin-management.service */ "./src/app/_services/admin-management.service.ts");
/* harmony import */ var src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/participant.service */ "./src/app/_services/participant.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-archwizard/dist */ "./node_modules/ng2-archwizard/dist/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_13__);














let NewStudentRegistrationDetailComponent = class NewStudentRegistrationDetailComponent {
    constructor(translateService, broadcasterService, chartService, userService, router, fb, route) {
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = [];
        this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null);
        this.pageDocument = 1;
        this.maskDateSlash = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        translateService.setDefaultLang(localStorage.getItem('lang'));
        this.translateService.get('ROOT.no').subscribe((l) => { this.no = l; });
        this.translateService.get('ROOT.yes').subscribe((l) => { this.yes = l; });
        this.translateService.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
        this.translateService.get('ROOT.delete_confirmation').subscribe((l) => { this.confirmationText = l; });
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translateService.setDefaultLang(res.lang);
            this.translateService.get('ROOT.no').subscribe((l) => { this.no = l; });
            this.translateService.get('ROOT.yes').subscribe((l) => { this.yes = l; });
            this.translateService.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
            this.translateService.get('ROOT.delete_confirmation').subscribe((l) => { this.confirmationText = l; });
        });
        const data = JSON.parse(localStorage.getItem('userProfile'));
        this.username = data.email;
        this.registrationNumber = this.route.snapshot.paramMap.get('registrationnumber');
        this.newstudentId = this.route.snapshot.paramMap.get('id');
        this.biodatasForms = this.fb.group({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')])),
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country_birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            province_birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            province_birth_other: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city_birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city_birth_other: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country_origin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            NIK: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            address_country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address_province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address_city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address_district: [''],
            address_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(150)])),
            zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            house_phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]),
            mobile_phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            color_blind: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            special_needs: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            special_needs_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            passport_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            passport_expiry_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nisn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            nis: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            ijazah_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(14), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)])),
        });
        this.parentsForm = this.fb.group({
            parents: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            mothersName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')])),
            fathersName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')])),
            maleRelativesName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')])),
            mothersPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            fathersPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            maleRelativesPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            mothersIdentityNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            fathersIdentityNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
            maleRelativesIdentityNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])),
        });
        this.formDataDocument = new FormData();
        this.formDataDocumentCreate = new FormData();
        this.formRaportInput = new FormData();
        this.formRaportEdit = new FormData();
        this.rejectedForm = this.fb.group({
            desc_rejected: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.uploadFileForm = this.fb.group({
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.uploadRaportFileForm = this.fb.group({
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.listOptions = [
            {
                value: '0',
                label: 'Tidak'
            },
            {
                value: '1',
                label: 'Ya'
            },
        ];
        this.colorBlindList = [
            {
                value: 'Tidak',
                label: 'Tidak'
            },
            {
                value: 'Ya',
                label: 'Ya'
            },
            {
                value: 'Parsial',
                label: 'Parsial'
            },
        ];
        this.listFamilyRelationship = [
            {
                value: '1',
                label: 'Orang Tua'
            },
            {
                value: '2',
                label: 'Wali'
            }
        ];
        this.loadingUpload = false;
        this.loadingDownload = false;
        this.loadBiodata = false;
        this.notHavePhoto = false;
        this.showSpecialNeeds = false;
        this.showSpecialNeeds = false;
        this.isIndonesianNationality = false;
        this.isIndonesiaBirthCountry = false;
        this.loadingSaveGambar = false;
        this.isIndonesiaCountry = false;
        this.hiddenAddressDetail = true;
        this.loadingParents = false;
        this.isUpdatedRaport = false;
        this.isUpdatedDoc = false;
        this.loadTableRaport = false;
        this.loadingUploadRaport = false;
        this.loadTableDocument = false;
        this.isViewData = false;
        this.loadCard = false;
        this.haveNimEmail = false;
        this.isComplete = false;
        this.tableDataRaport = [];
        this.photoCard = [];
        this.tableDocument = [];
        this.dataEmail = [];
        this.dataRevised = [];
    }
    get f() {
        return this.biodatasForms.controls;
    }
    get fp() {
        return this.parentsForm.controls;
    }
    get fuf() {
        return this.uploadFileForm.controls;
    }
    get fur() {
        return this.uploadRaportFileForm.controls;
    }
    ngOnInit() {
        this.loadReligionDataList();
        this.loadGenderDataList();
        this.loadNationalityDataList();
        this.loadCountryBirthDataList();
        this.loadProvinceBirthDataList();
        this.getParticipantId();
    }
    getParticipantId() {
        this.loadBiodata = true;
        this.userService.getParticipantDataInformation(`?username=${this.username}`).subscribe(resp => {
            if (resp.length !== 0) {
                this.participantId = resp.participant_id;
                this.loadBiodata = false;
                this.checkIsApprovedDoc();
                this.getBiodatas();
            }
            else {
                this.loadBiodata = false;
            }
        });
    }
    checkIsApprovedDoc() {
        this.checkDocumentStatusApproval();
    }
    goToParentsData() {
        this.wizard.navigation.goToStep(1);
        this.getParents();
    }
    getParents() {
        this.loadingParents = true;
        this.userService.getFamilyNewstudent(`?participant_id=${this.participantId}`).subscribe(res => {
            if (res.is_guardian == false) {
                this.loadingParents = false;
                this.realtionshipSelected = '1';
                this.haveParents = true;
                this.parentsForm.patchValue({ fathersName: res.father_name ? res.father_name : '' });
                this.parentsForm.patchValue({ fathersPhone: res.father_mobile_phone_number ? res.father_mobile_phone_number : '' });
                this.parentsForm.patchValue({ fathersIdentityNumber: res.father_identify_number ? res.father_identify_number : '' });
                this.parentsForm.patchValue({ mothersName: res.mother_name ? res.mother_name : '' });
                this.parentsForm.patchValue({ mothersPhone: res.mother_mobile_phone_number ? res.mother_mobile_phone_number : '' });
                this.parentsForm.patchValue({ mothersIdentityNumber: res.mother_identify_number ? res.mother_identify_number : '' });
                this.parentsForm.get('maleRelativesName').clearValidators();
                this.parentsForm.get('maleRelativesName').updateValueAndValidity();
                this.parentsForm.get('maleRelativesPhone').clearValidators();
                this.parentsForm.get('maleRelativesPhone').updateValueAndValidity();
                this.parentsForm.get('maleRelativesIdentityNumber').clearValidators();
                this.parentsForm.get('maleRelativesIdentityNumber').updateValueAndValidity();
            }
            else if (res.is_guardian == true) {
                this.realtionshipSelected = '2';
                this.haveParents = false;
                this.loadingParents = false;
                this.parentsForm.patchValue({ maleRelativesName: res.guardian_name ? res.guardian_name : '' });
                this.parentsForm.patchValue({ maleRelativesPhone: res.guardian_mobile_phone_number ? res.guardian_mobile_phone_number : '' });
                this.parentsForm.patchValue({ maleRelativesIdentityNumber: res.guardian_identify_number ? res.guardian_identify_number : '' });
                this.parentsForm.get('fathersName').clearValidators();
                this.parentsForm.get('fathersName').updateValueAndValidity();
                this.parentsForm.get('fathersPhone').clearValidators();
                this.parentsForm.get('fathersPhone').updateValueAndValidity();
                this.parentsForm.get('fathersIdentityNumber').clearValidators();
                this.parentsForm.get('fathersIdentityNumber').updateValueAndValidity();
                this.parentsForm.get('mothersName').clearValidators();
                this.parentsForm.get('mothersName').updateValueAndValidity();
                this.parentsForm.get('mothersPhone').clearValidators();
                this.parentsForm.get('mothersPhone').updateValueAndValidity();
                this.parentsForm.get('mothersIdentityNumber').clearValidators();
                this.parentsForm.get('mothersIdentityNumber').updateValueAndValidity();
            }
            else {
                this.loadingParents = false;
            }
        });
    }
    gotoStepDocument() {
        this.wizard.navigation.goToStep(2);
        this.checkDocumentStatusApproval();
        this.checkCompletenessDocument();
        this.renderDocument();
    }
    goToNim() {
        this.wizard.navigation.goToStep(3);
        this.getNim();
    }
    getNim() {
        this.loadCard = true;
        this.userService.getNewStudentRegistration(`?participant_id=${this.participantId}&registration_number=${this.registrationNumber}`).subscribe(res => {
            this.loadCard = false;
            this.dataEmail = res[0];
            if (res.length != 0) {
                if (res[0].university_email != null && res[0].student_id != null) {
                    this.haveNimEmail = true;
                }
                else {
                    this.haveNimEmail = false;
                }
            }
            else {
                this.haveNimEmail = false;
            }
        });
    }
    loadGenderDataList() {
        this.loadBiodata = true;
        this.chartService.getGender().subscribe((res) => {
            this.loadBiodata = false;
            this.listGender = res && res.map((value) => {
                const { id, gender } = value;
                return { value: id.toString(), label: gender };
            });
        }, (reason) => {
            this.loadBiodata = false;
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
    loadReligionDataList() {
        this.loadBiodata = true;
        this.userService.getReligionData().subscribe((res) => {
            this.loadBiodata = false;
            this.listReligion = res && res.map((value) => {
                const { id, religion } = value;
                return { value: id.toString(), label: religion };
            });
        }, (reason) => {
            this.loadBiodata = false;
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
    loadNationalityDataList() {
        this.loadBiodata = true;
        this.chartService.getNationalityData().subscribe((res) => {
            this.listNationality = res && res.map((value) => {
                const { id, nationality } = value;
                return { value: id.toString(), label: nationality };
            });
            this.loadBiodata = false;
        }, (reason) => {
            this.loadBiodata = false;
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
    loadCountryBirthDataList() {
        this.loadBiodata = true;
        this.userService.getCountryData().subscribe((res) => {
            this.listCountryBirth = res && res.map((value) => {
                const { id, detail_name } = value;
                return { value: id.toString(), label: detail_name };
            });
            this.loadBiodata = false;
        }, (reason) => {
            this.loadBiodata = false;
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
    changeProvinceBirth(value) {
        this.loadBiodata = true;
        if (value !== undefined) {
            if (value == 1) {
                this.loadBiodata = false;
                this.loadProvinceBirthDataList();
                this.isIndonesiaBirthCountry = true;
                this.biodatasForms.get('province_birth').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                this.biodatasForms.get('province_birth').updateValueAndValidity();
                this.biodatasForms.get('city_birth').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                this.biodatasForms.get('city_birth').updateValueAndValidity();
                this.biodatasForms.get('province_birth_other').clearValidators();
                this.biodatasForms.get('province_birth_other').updateValueAndValidity();
                this.biodatasForms.get('city_birth_other').clearValidators();
                this.biodatasForms.get('city_birth_other').updateValueAndValidity();
                this.biodatasForms.get('city_birth_other').reset();
                this.biodatasForms.get('province_birth_other').reset();
            }
            else {
                this.loadBiodata = false;
                this.biodatasForms.get('province_birth').clearValidators();
                this.biodatasForms.get('province_birth').updateValueAndValidity();
                this.biodatasForms.get('city_birth').clearValidators();
                this.biodatasForms.get('city_birth').updateValueAndValidity();
                this.biodatasForms.get('province_birth_other').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                this.biodatasForms.get('province_birth_other').updateValueAndValidity();
                this.biodatasForms.get('city_birth_other').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                this.biodatasForms.get('city_birth_other').updateValueAndValidity();
                this.biodatasForms.get('city_birth').reset();
                this.biodatasForms.get('province_birth').reset();
                this.isIndonesiaBirthCountry = false;
            }
        }
    }
    loadProvinceBirthDataList() {
        this.loadBiodata = true;
        this.userService.getProvinceData(`?country_id=1`).subscribe((res) => {
            this.listProvinceBirth = res && res.map((value) => {
                const { id, detail_name } = value;
                return { value: id.toString(), label: detail_name };
            });
            this.loadBiodata = false;
        }, (err) => {
            this.loadBiodata = false;
            this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: err.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
            });
        });
    }
    loadCityBirthDataList(value) {
        this.loadBiodata = true;
        if (value != undefined) {
            this.chartService.getCityData(`?province_id=${value}`).subscribe((res) => {
                this.listCityBirth = res && res.map((value) => {
                    const { id, city } = value;
                    return { value: id.toString(), label: city };
                });
                this.loadBiodata = false;
            }, (err) => {
                this.loadBiodata = false;
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: err.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
            });
        }
        else {
            this.listCityBirth = [];
            this.loadBiodata = false;
        }
    }
    changeNationality(value) {
        if (value == 98) {
            this.isIndonesianNationality = true;
            this.biodatasForms.get('NIK').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]));
            this.biodatasForms.get('NIK').updateValueAndValidity();
            this.biodatasForms.get('nis').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]));
            this.biodatasForms.get('nis').updateValueAndValidity();
            this.biodatasForms.get('nisn').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]));
            this.biodatasForms.get('nisn').updateValueAndValidity();
            this.biodatasForms.get('passport_number').clearValidators();
            this.biodatasForms.get('passport_number').updateValueAndValidity();
            this.biodatasForms.get('passport_expiry_date').clearValidators();
            this.biodatasForms.get('passport_expiry_date').updateValueAndValidity();
            this.biodatasForms.get('passport_number').reset();
            this.biodatasForms.get('passport_expiry_date').reset();
        }
        else {
            this.isIndonesianNationality = false;
            this.biodatasForms.get('NIK').clearValidators();
            this.biodatasForms.get('NIK').updateValueAndValidity();
            this.biodatasForms.get('nis').clearValidators();
            this.biodatasForms.get('nis').updateValueAndValidity();
            this.biodatasForms.get('nisn').clearValidators();
            this.biodatasForms.get('nisn').updateValueAndValidity();
            this.biodatasForms.get('passport_number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]));
            this.biodatasForms.get('passport_number').updateValueAndValidity();
            this.biodatasForms.get('passport_expiry_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.biodatasForms.get('passport_expiry_date').updateValueAndValidity();
            this.biodatasForms.get('NIK').reset();
            this.biodatasForms.get('nis').reset();
            this.biodatasForms.get('nisn').reset();
        }
    }
    changeSpecialNeeds(value) {
        if (value == 1) {
            this.showSpecialNeeds = true;
            this.biodatasForms.get('special_needs_text').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.biodatasForms.get('special_needs_text').updateValueAndValidity();
        }
        else {
            this.showSpecialNeeds = false;
            this.biodatasForms.patchValue({ special_needs_text: '' });
            this.biodatasForms.get('special_needs_text').clearValidators();
            this.biodatasForms.get('special_needs_text').updateValueAndValidity();
        }
    }
    changeCountryDataforProvince(evnt) {
        this.country = evnt.value;
        this.loadBiodata = true;
        if (evnt.value != '1') {
            this.hiddenAddressDetail = true;
            this.isIndonesiaCountry = false;
            this.loadBiodata = false;
            this.biodatasForms.get('address_province').clearValidators();
            this.biodatasForms.get('address_province').updateValueAndValidity();
            this.biodatasForms.get('address_city').clearValidators();
            this.biodatasForms.get('address_city').updateValueAndValidity();
            this.biodatasForms.get('zipcode').clearValidators();
            this.biodatasForms.get('zipcode').updateValueAndValidity();
        }
        else {
            this.hiddenAddressDetail = false;
            this.isIndonesiaCountry = true;
            this.biodatasForms.get('address_province').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.biodatasForms.get('address_province').updateValueAndValidity();
            this.biodatasForms.get('address_city').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.biodatasForms.get('address_city').updateValueAndValidity();
            this.biodatasForms.get('zipcode').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
            this.biodatasForms.get('zipcode').updateValueAndValidity();
            this.userService.getProvinceData(`?country_id=${this.country}`).subscribe((res) => {
                this.listProvince = res && res.map((value) => {
                    const { id, detail_name } = value;
                    return { value: id.toString(), label: detail_name };
                });
                this.loadBiodata = false;
            }, (err) => {
                this.loadBiodata = false;
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: err.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
            });
        }
    }
    changeProvinceDataforCity(event) {
        this.province = event.value;
        this.loadBiodata = true;
        if (this.province != undefined) {
            this.chartService.getCityData(`?province_id=${this.province}`).subscribe((res) => {
                this.listCity = res && res.map((value) => {
                    const { id, city } = value;
                    return { value: id.toString(), label: city };
                });
                this.loadBiodata = false;
            }, (err) => {
                this.loadBiodata = false;
                this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: err.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                });
            });
        }
        else {
            this.listCity = [];
            this.loadBiodata = false;
        }
    }
    changeCityDataforDistrict(event) {
        this.district = event.value;
        this.loadBiodata = true;
        if (this.district == undefined) {
            this.listDistrict = [];
            this.loadBiodata = false;
        }
        else {
            this.userService.getDistrictData(`?city_region_id=${this.district}`).subscribe((filterArray) => {
                this.listDistrict = filterArray && filterArray.map((value) => {
                    const { id, detail_name } = value;
                    return { value: id.toString(), label: detail_name };
                });
                this.loadBiodata = false;
            }, err => {
                this.loadBiodata = false;
            });
        }
    }
    getProvinceIndonesian(country) {
        this.userService.getProvinceData(`?country_id=${country}`).subscribe((res) => {
            this.listProvince = res && res.map((value) => {
                const { id, detail_name } = value;
                return { value: id.toString(), label: detail_name };
            });
            this.loadEducationModal = false;
        }, err => {
        });
    }
    getCityIndonesian(province) {
        this.chartService.getCityData(`?province_id=${province}`).subscribe((res) => {
            this.listCity = res && res.map((value) => {
                const { id, city } = value;
                return { value: id.toString(), label: city };
            });
            this.loadEducationModal = false;
        }, err => {
        });
    }
    getDistrictIndonesian(city) {
        this.userService.getDistrictData(`?city_region_id=${city}`).subscribe((res) => {
            this.listDistrict = res && res.map((value) => {
                const { id, detail_name } = value;
                return { value: id.toString(), label: detail_name };
            });
            this.loadEducationModal = false;
        }, err => {
        });
    }
    getBiodatas() {
        this.loadBiodata = true;
        this.userService.getPartcipantNewstudent(`?username=${this.username}`).subscribe(res => {
            this.loadBiodata = false;
            this.photoCard = res;
            if (res.photo_url == null || res.photo_url == '') {
                this.notHavePhoto = true;
            }
            else if (res.photo_url != null || res.photo_url != '') {
                this.notHavePhoto = false;
            }
            const changeBirthDateFormat = res.birth_date && moment__WEBPACK_IMPORTED_MODULE_12__(res.birth_date).format('DD-MM-YYYY');
            this.biodatasForms.patchValue({ fullname: res.fullname });
            this.biodatasForms.patchValue({ birthdate: changeBirthDateFormat });
            this.biodatasForms.patchValue({ NIK: res.identify_number });
            this.biodatasForms.patchValue({ nis: res.nis });
            this.biodatasForms.patchValue({ ijazah_number: res.diploma_number });
            this.biodatasForms.patchValue({ passport_number: res.passport_number });
            this.biodatasForms.patchValue({ address_detail: res.address_detail });
            this.biodatasForms.patchValue({ nisn: res.nisn });
            if (res.house_phone_number == 'null') {
                this.biodatasForms.patchValue({ house_phone_number: '' });
            }
            else {
                this.biodatasForms.patchValue({ house_phone_number: res.house_phone_number });
            }
            this.biodatasForms.patchValue({ mobile_phone_number: res.mobile_phone_number });
            this.biodatasForms.patchValue({ email: res.username });
            this.colorBlind = res.color_blind;
            if (res.passport_expiry_date == ' - ') {
                this.biodatasForms.patchValue({ passport_expiry_date: '' });
            }
            else {
                const changePassportFormat = res.passport_expiry_date && moment__WEBPACK_IMPORTED_MODULE_12__(res.passport_expiry_date).format('YYYY-MM-DD');
                this.biodatasForms.patchValue({ passport_expiry_date: changePassportFormat });
            }
            if (res.gender == null) {
                this.biodatasForms.patchValue({ gender: '0' });
            }
            else {
                this.biodatasForms.patchValue({ gender: res.gender && res.gender.toString() });
            }
            if (res.religion == null) {
                this.biodatasForms.patchValue({ religion: '0' });
            }
            else {
                this.biodatasForms.patchValue({ religion: res.religion && res.religion.toString() });
            }
            if (res.birth_country == null) {
                this.biodatasForms.patchValue({ country_birth: '0' });
            }
            else {
                this.biodatasForms.patchValue({ country_birth: res.birth_country && res.birth_country.toString() });
            }
            if (res.birth_province == null) {
                this.biodatasForms.patchValue({ province_birth: '0' });
                this.biodatasForms.patchValue({ province_birth_other: res.birth_province_name });
            }
            else {
                this.biodatasForms.patchValue({ province_birth: res.birth_province && res.birth_province.toString() });
                this.biodatasForms.patchValue({ province_birth_other: '' });
            }
            if (res.birth_city == null) {
                this.biodatasForms.patchValue({ city_birth: '0' });
                this.biodatasForms.patchValue({ city_birth_other: res.birth_city_name });
            }
            else {
                this.biodatasForms.patchValue({ city_birth: res.birth_city && res.birth_city.toString() });
                this.biodatasForms.patchValue({ city_birth_other: '' });
            }
            if (res.nationality == null) {
                this.biodatasForms.patchValue({ nationality: '0' });
            }
            else {
                this.biodatasForms.patchValue({ nationality: res.nationality && res.nationality.toString() });
            }
            if (res.origin_country == null) {
                this.biodatasForms.patchValue({ country_origin: '0' });
            }
            else {
                this.biodatasForms.patchValue({ country_origin: res.origin_country && res.origin_country.toString() });
            }
            if (res.address_country == null) {
                this.biodatasForms.patchValue({ address_country: '0' });
            }
            else {
                this.biodatasForms.patchValue({ address_country: res.address_country && res.address_country.toString() });
            }
            if (res.special_needs !== null) {
                this.showSpecialNeeds = true;
                this.specialNeeds = '1';
                this.biodatasForms.patchValue({ special_needs_text: res.special_needs });
            }
            else {
                this.specialNeeds = '0';
                this.showSpecialNeeds = false;
            }
            if (res.address_country == 1) {
                const country = res.address_country;
                const province = res.address_province;
                const city = res.address_city;
                this.getProvinceIndonesian(country);
                this.getCityIndonesian(province);
                this.getDistrictIndonesian(city);
                this.province = res.address_province && res.address_province.toString();
                this.city = res.address_city && res.address_city.toString();
                this.district = res.address_disctrict && res.address_disctrict.toString();
                this.biodatasForms.patchValue({ zipcode: res.address_postal_code });
                this.hiddenAddressDetail = false;
                this.isIndonesiaCountry = true;
            }
            else {
                this.province = '';
                this.city = '';
                this.district = '';
                this.biodatasForms.get('address_province').clearValidators();
                this.biodatasForms.get('address_province').updateValueAndValidity();
                this.biodatasForms.get('address_city').clearValidators();
                this.biodatasForms.get('address_city').updateValueAndValidity();
                this.biodatasForms.get('zipcode').clearValidators();
                this.biodatasForms.get('zipcode').updateValueAndValidity();
                this.biodatasForms.patchValue({ zipcode: '' });
                this.hiddenAddressDetail = true;
                this.isIndonesiaCountry = false;
            }
        });
    }
    // photo details
    openFile() {
        document.getElementById('fileInput').click();
    }
    onUploadImagePhoto(e) {
        let file = e.target.files[0];
        if (file.type.includes('image/jp') || file.type.includes('image/png')) {
            if (file.size > 1024000) {
                this.filesControl.setValue([]);
                return sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    title: this.confirmation,
                    text: 'gagal', type: 'error', showConfirmButton: true,
                });
            }
            else {
                this.urlPhoto = e.target.files[0];
                let reader = new FileReader();
                reader.onload = function (ev) {
                    this.previewPhoto = ev.target.result;
                }.bind(this);
                reader.readAsDataURL(e.target.files[0]);
                this.modalPreview.show();
            }
        }
        else {
            this.filesControl.setValue([]);
            return sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({ title: this.confirmation, text: 'gagal', type: 'error', showConfirmButton: true, });
        }
    }
    saveImg() {
        this.loadingSaveGambar = true;
        let formDataPhoto = new FormData();
        formDataPhoto.append('username', this.username);
        formDataPhoto.append('photo_url', this.urlPhoto);
        this.userService.updateParticipantNewStudent(formDataPhoto).subscribe(res => {
            if (res && res.status === 'Success') {
                this.loadingSaveGambar = false;
                this.modalPreview.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    title: res.status,
                    text: res.message,
                    type: 'success',
                    allowOutsideClick: false,
                    showConfirmButton: true
                }).then((confirm) => {
                    if (confirm.value) {
                        window.location.reload();
                    }
                });
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
                this.loadingSaveGambar = false;
            }
            this.loadingSaveGambar = false;
        }, () => { this.modalPreview.hide(); this.loadingSaveGambar = false; });
    }
    createBiodatas() {
        if (this.biodatasForms.valid) {
            const { address_city, address_country, address_detail, address_district, zipcode, address_province, city_birth, city_birth_other, country_birth, birthdate, province_birth, province_birth_other, fullname, gender, house_phone_number, mobile_phone_number, nationality, country_origin, religion, email, NIK, passport_expiry_date, passport_number, special_needs_text, nisn, nis, ijazah_number } = this.biodatasForms.value;
            this.dateTransform = birthdate.split("-").reverse().join("-");
            let payload = {
                username: this.username,
                fullname: fullname,
                gender: gender,
                religion: religion,
                birth_country: country_birth,
                birth_province: province_birth,
                birth_city: city_birth,
                birth_date: this.dateTransform,
                nationality: nationality,
                origin_country: country_origin,
                identify_number: NIK ? NIK : '0',
                passport_number: passport_number ? passport_number : '0',
                passport_expiry_date: passport_expiry_date,
                address_country: address_country,
                address_province: address_province,
                address_city: address_city,
                address_district: address_district,
                address_detail: address_detail,
                address_postal_code: zipcode,
                house_phone_number: house_phone_number,
                mobile_phone_number: mobile_phone_number,
                color_blind: this.colorBlind,
                special_needs: this.specialNeeds == '1' ? special_needs_text : '',
                birth_province_foreign: province_birth_other,
                birth_city_foreign: city_birth_other,
                nisn: nisn,
                nis: nis,
                diploma_number: ijazah_number,
            };
            this.userService.updateParticipantNewStudent(payload).subscribe(res => {
                if (res.status == 'Success') {
                    this.createMappingNewStep();
                }
                else {
                    this.loadBiodata = false;
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
                this.loadBiodata = false;
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
    createMappingNewStep() {
        this.loadBiodata = true;
        const steps = {
            new_student_id: this.newstudentId,
            new_student_step_id: 1
        };
        this.userService.createMappingNewStudentStep(steps).subscribe((res) => {
            if (res.status == "Success") {
                this.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: "default",
                    position: "top-right",
                    type: "success",
                });
                this.loadBiodata = false;
                this.goToParentsData();
            }
            else {
                this.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: "default",
                    position: "top-right",
                    type: "error",
                });
                this.loadBiodata = false;
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
            this.loadBiodata = false;
        });
    }
    createMappingNewStepParents() {
        this.loadingParents = true;
        const steps = {
            new_student_id: this.newstudentId,
            new_student_step_id: 2
        };
        this.userService.createMappingNewStudentStep(steps).subscribe((res) => {
            if (res.status == "Success") {
                this.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: "default",
                    position: "top-right",
                    type: "success",
                });
                this.loadingParents = false;
                this.gotoStepDocument();
            }
            else {
                this.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: "default",
                    position: "top-right",
                    type: "error",
                });
                this.loadingParents = false;
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
            this.loadingParents = false;
        });
    }
    createMappingNewStepDocument() {
        this.loadTableDocument = true;
        const steps = {
            new_student_id: this.newstudentId,
            new_student_step_id: 3
        };
        this.userService.createMappingNewStudentStep(steps).subscribe((res) => {
            if (res.status == "Success") {
                this.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: "default",
                    position: "top-right",
                    type: "success",
                });
                this.loadTableDocument = false;
                this.goToNim();
            }
            else {
                this.broadcasterService.notifBroadcast(true, {
                    title: res.status,
                    msg: res.message,
                    timeout: 5000,
                    theme: "default",
                    position: "top-right",
                    type: "error",
                });
                this.loadTableDocument = false;
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
            this.loadingParents = false;
        });
    }
    createParents() {
        if (this.parentsForm.valid) {
            this.loadingParents = true;
            const payload = {
                participant_id: this.participantId,
                father_name: this.parentsForm.value.fathersName ? this.parentsForm.value.fathersName : '',
                father_mobile_phone_number: this.parentsForm.value.fathersPhone ? this.parentsForm.value.fathersPhone : '',
                father_identify_number: this.parentsForm.value.fathersIdentityNumber ? this.parentsForm.value.fathersIdentityNumber : '',
                mother_name: this.parentsForm.value.mothersName ? this.parentsForm.value.mothersName : '',
                mother_mobile_phone_number: this.parentsForm.value.mothersPhone ? this.parentsForm.value.mothersPhone : '',
                mother_identify_number: this.parentsForm.value.mothersIdentityNumber ? this.parentsForm.value.mothersIdentityNumber : '',
                guardian_name: this.parentsForm.value.maleRelativesName ? this.parentsForm.value.maleRelativesName : '',
                guardian_mobile_phone_number: this.parentsForm.value.maleRelativesPhone ? this.parentsForm.value.maleRelativesPhone : '',
                guardian_identify_number: this.parentsForm.value.maleRelativesIdentityNumber ? this.parentsForm.value.maleRelativesIdentityNumber : '',
                is_guardian: this.realtionshipSelected == '1' ? false : true
            };
            this.userService.updateFamilyNewStudent(payload).subscribe(res => {
                if (res.status == 'Success') {
                    this.createMappingNewStepParents();
                }
                else {
                    this.broadcasterService.notifBroadcast(true, {
                        title: res.status,
                        msg: res.message,
                        timeout: 5000,
                        theme: "default",
                        position: "top-right",
                        type: "error",
                    });
                    this.loadingParents = false;
                }
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
    downloadDocument(data) {
        this.loadingDownload = true;
        if (data.document == null) {
            this.loadingDownload = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                title: 'Failed',
                text: 'Tidak ada dokumen',
                type: 'error',
                allowOutsideClick: false,
            });
        }
        else {
            if (data.document.url != null) {
                this.loadingDownload = false;
                window.open(data.document.url, 'blank');
            }
            else {
                this.loadingDownload = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    title: 'Failed',
                    text: 'Tidak ada dokumen',
                    type: 'error',
                    allowOutsideClick: false,
                });
            }
        }
    }
    downloadDocumentRaport(data) {
        this.loadingDownload = true;
        if (data.url != null) {
            this.loadingDownload = false;
            window.open(data.url, 'blank');
        }
        else {
            this.loadingDownload = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                title: 'Failed',
                text: 'Tidak ada dokumen',
                type: 'error',
                allowOutsideClick: false,
            });
        }
    }
    uploadDocumentData(data) {
        if (data.document != null) {
            if (data.document.approval_final_status == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    title: 'Warning',
                    text: 'Anda tidak dapat mengubah dokumen karena status dokumen anda telah disetujui!',
                    type: 'warning',
                    allowOutsideClick: false,
                });
            }
            else {
                // edit document
                this.documentTypeId = data.document_type_id;
                if (this.documentTypeId == 1 || this.documentTypeId == 2 || this.documentTypeId == 4 || this.documentTypeId == 5 || this.documentTypeId == 6 || this.documentTypeId == 29 || this.documentTypeId == 30 || this.documentTypeId == 31 || this.documentTypeId == 32 || this.documentTypeId == 33) {
                    this.isUpdatedDoc = true;
                    this.documentId = data.document.id;
                    this.uploadDocumentModals.show();
                }
                else if (this.documentTypeId == 7) {
                    this.showTableDocument();
                }
                else if (this.documentTypeId == 12) {
                    this.isUpdatedDoc = true;
                    this.documentTypeId = 12;
                    this.utbkID = data.document.id;
                    this.documentId = data.document.document_id;
                    this.uploadDocumentModals.show();
                }
            }
        }
        else {
            // input all document
            this.isUpdatedDoc = false;
            this.documentTypeId = data.document_type_id;
            this.documentName = data.new_student_document_type;
            this.uploadDocumentModals.show();
        }
    }
    uploadDocumentClose() {
        this.uploadDocumentModals.hide();
        this.uploadFileForm.reset();
        this.isUpdatedDoc = false;
    }
    uploadUrl(event) {
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
                    if (this.isUpdatedDoc) {
                        this.formDataDocument.append('url', elem.files[0]);
                    }
                    else {
                        this.formDataDocumentCreate.append('url', elem.files[0]);
                    }
                }
                else {
                    this.errSize = true;
                    this.uploadFileForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.uploadFileForm.get('url').patchValue('');
            }
        }
    }
    uploadRaportUrl(event) {
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
                    if (this.isUpdatedRaport) {
                        this.formRaportEdit.append('url', elem.files[0]);
                    }
                    else {
                        this.formRaportInput.append('url', elem.files[0]);
                    }
                }
                else {
                    this.errSize = true;
                    this.uploadRaportFileForm.get('url').patchValue('');
                }
            }
            else {
                this.errType = true;
                this.uploadRaportFileForm.get('url').patchValue('');
            }
        }
    }
    createDocParticipant() {
        if (this.uploadFileForm.valid) {
            if (this.isUpdatedDoc) {
                this.loadingUpload = true;
                if (this.documentTypeId == 12) {
                    this.formDataDocument.append('document_id', this.documentId);
                    this.formDataDocument.append('utbk_id', this.utbkID);
                    this.formDataDocument.append('registration_number', this.registrationNumber);
                    this.userService.updUtbkdocument(this.formDataDocument).subscribe(res => {
                        if (res.status == 'Success') {
                            this.formDataDocument.delete('document_id');
                            this.formDataDocument.delete('utbk_id');
                            this.formDataDocument.delete('registration_number');
                            this.formDataDocument.delete('url');
                            this.renderDocument();
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Sukses',
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'success'
                            });
                            this.loadingUpload = false;
                            this.uploadDocumentClose();
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
                            this.loadingUpload = false;
                            this.formDataDocument.delete('document_id');
                            this.formDataDocument.delete('utbk_id');
                            this.formDataDocument.delete('registration_number');
                            this.formDataDocument.delete('url');
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
                        this.loadingUpload = false;
                    });
                }
                else if (this.documentTypeId == 1 || this.documentTypeId == 2 || this.documentTypeId == 4 || this.documentTypeId == 5 || this.documentTypeId == 6 || this.documentTypeId == 29 || this.documentTypeId == 30 || this.documentTypeId == 31 || this.documentTypeId == 32 || this.documentTypeId == 33) {
                    this.formDataDocument.append('id', this.documentId);
                    this.userService.updateDocumentNewStudent(this.formDataDocument).subscribe(res => {
                        if (res.status == 'Success') {
                            this.formDataDocument.delete('id');
                            this.formDataDocument.delete('url');
                            this.renderDocument();
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Sukses',
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'success'
                            });
                            this.loadingUpload = false;
                            this.uploadDocumentClose();
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
                            this.loadingUpload = false;
                            this.formDataDocument.delete('id');
                            this.formDataDocument.delete('url');
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
                        this.loadingUpload = false;
                    });
                }
            }
            else {
                this.loadingUpload = true;
                if (this.documentTypeId == 12) {
                    this.formDataDocumentCreate.append('document_type_id', '12');
                    this.formDataDocumentCreate.append('registration_number', this.registrationNumber);
                    this.userService.postUtbkDocument(this.formDataDocumentCreate).subscribe(res => {
                        if (res.status == 'Success') {
                            this.formDataDocumentCreate.delete('document_type_id');
                            this.formDataDocumentCreate.delete('registration_number');
                            this.formDataDocumentCreate.delete('url');
                            this.renderDocument();
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Sukses',
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'success'
                            });
                            this.loadingUpload = false;
                            this.uploadDocumentClose();
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
                            this.formDataDocumentCreate.delete('document_type_id');
                            this.formDataDocumentCreate.delete('registration_number');
                            this.formDataDocumentCreate.delete('url');
                            this.loadingUpload = false;
                        }
                    }, (reason) => {
                        this.loadBiodata = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: reason.error.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loadingUpload = false;
                    });
                }
                else if (this.documentTypeId == 1 || this.documentTypeId == 2 || this.documentTypeId == 4 || this.documentTypeId == 5 || this.documentTypeId == 6 || this.documentTypeId == 29 || this.documentTypeId == 30 || this.documentTypeId == 31 || this.documentTypeId == 32 || this.documentTypeId == 33) {
                    this.formDataDocumentCreate.append('document_type_id', this.documentTypeId);
                    this.formDataDocumentCreate.append('name', this.documentName);
                    this.formDataDocumentCreate.append('participant_id', this.participantId);
                    this.userService.postPersonalDocumentData(this.formDataDocumentCreate).subscribe(res => {
                        if (res.status == 'Success') {
                            this.formDataDocumentCreate.delete('document_type_id');
                            this.formDataDocumentCreate.delete('name');
                            this.formDataDocumentCreate.delete('participant_id');
                            this.formDataDocumentCreate.delete('url');
                            this.renderDocument();
                            this.broadcasterService.notifBroadcast(true, {
                                title: 'Sukses',
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'success'
                            });
                            this.loadingUpload = false;
                            this.uploadDocumentClose();
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
                            this.formDataDocumentCreate.delete('document_type_id');
                            this.formDataDocumentCreate.delete('name');
                            this.formDataDocumentCreate.delete('participant_id');
                            this.formDataDocumentCreate.delete('url');
                            this.loadingUpload = false;
                        }
                    }, (reason) => {
                        this.loadBiodata = false;
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Gagal',
                            msg: reason.error.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loadingUpload = false;
                    });
                }
            }
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
    createRaportDocument() {
        if (this.uploadRaportFileForm.valid) {
            if (this.isUpdatedRaport) {
                this.loadingUploadRaport = true;
                this.formRaportEdit.append('document_id', this.documentIdRaport);
                this.formRaportEdit.append('document_type_id', this.documentTypeIdRaport);
                this.formRaportEdit.append('semester_id', this.semesterID);
                this.formRaportEdit.append('registration_number', this.registrationNumber);
                this.formRaportEdit.append('report_id', this.reportID);
                this.userService.updDocumentReportCardData(this.formRaportEdit).subscribe(res => {
                    if (res.status == 'Success') {
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Sukses',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'success'
                        });
                        this.showTableDocDetailsClose();
                        this.loadingUploadRaport = false;
                        this.formRaportEdit.delete('document_id');
                        this.formRaportEdit.delete('document_type_id');
                        this.formRaportEdit.delete('semester_id');
                        this.formRaportEdit.delete('registration_number');
                        this.formRaportEdit.delete('report_id');
                        this.getRaportTableDocument();
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
                        this.loadingUploadRaport = false;
                        this.formRaportEdit.delete('document_id');
                        this.formRaportEdit.delete('document_type_id');
                        this.formRaportEdit.delete('semester_id');
                        this.formRaportEdit.delete('registration_number');
                        this.formRaportEdit.delete('report_id');
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
                    this.loadingUploadRaport = false;
                });
            }
            else {
                this.loadingUploadRaport = true;
                this.formRaportInput.append('document_type_id', this.documentTypeIdRaport);
                this.formRaportInput.append('semester_id', this.semesterID);
                this.formRaportInput.append('registration_number', this.registrationNumber);
                this.userService.postDocumentReportCardData(this.formRaportInput).subscribe(res => {
                    if (res.status == 'Success') {
                        this.broadcasterService.notifBroadcast(true, {
                            title: 'Sukses',
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'success'
                        });
                        this.showTableDocDetailsClose();
                        this.loadingUploadRaport = false;
                        this.formRaportEdit.delete('document_type_id');
                        this.formRaportEdit.delete('semester_id');
                        this.formRaportEdit.delete('registration_number');
                        this.getRaportTableDocument();
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
                        this.loadingUploadRaport = false;
                        this.formRaportEdit.delete('document_type_id');
                        this.formRaportEdit.delete('semester_id');
                        this.formRaportEdit.delete('registration_number');
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
                    this.loadingUploadRaport = false;
                });
            }
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
    submitDocument() {
        this.loadingUpload = false;
        this.uploadDocumentClose();
        this.renderDocument();
    }
    revisedDataRaport(data) {
        this.revisedModals.show();
        this.dataRevised = data;
        // this.rejectedForm.patchValue({ desc_rejected: data.document.approval_final_comment });
    }
    revisedData(data) {
        this.dataRevised = data.document;
        this.revisedModals.show();
    }
    closeRevisedModals() {
        this.revisedModals.hide();
        this.rejectedForm.reset();
    }
    changeFamilyRelationship(event) {
        if (event.value !== null) {
            if (event.value == '2') {
                this.haveParents = false;
                this.parentsForm.controls.mothersName.reset();
                this.parentsForm.controls.fathersName.reset();
                this.parentsForm.controls.mothersPhone.reset();
                this.parentsForm.controls.fathersPhone.reset();
                this.parentsForm.controls.mothersIdentityNumber.reset();
                this.parentsForm.controls.fathersIdentityNumber.reset();
                this.parentsForm.get('fathersName').clearValidators();
                this.parentsForm.get('fathersName').updateValueAndValidity();
                this.parentsForm.get('fathersPhone').clearValidators();
                this.parentsForm.get('fathersPhone').updateValueAndValidity();
                this.parentsForm.get('fathersIdentityNumber').clearValidators();
                this.parentsForm.get('fathersIdentityNumber').updateValueAndValidity();
                this.parentsForm.get('mothersName').clearValidators();
                this.parentsForm.get('mothersName').updateValueAndValidity();
                this.parentsForm.get('mothersPhone').clearValidators();
                this.parentsForm.get('mothersPhone').updateValueAndValidity();
                this.parentsForm.get('mothersIdentityNumber').clearValidators();
                this.parentsForm.get('mothersIdentityNumber').updateValueAndValidity();
                this.parentsForm.get('maleRelativesName').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]));
                this.parentsForm.get('maleRelativesPhone').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]));
                this.parentsForm.get('maleRelativesIdentityNumber').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]));
            }
            else if (event.value == '1') {
                this.haveParents = true;
                this.parentsForm.get('maleRelativesName').clearValidators();
                this.parentsForm.get('maleRelativesName').updateValueAndValidity();
                this.parentsForm.get('maleRelativesPhone').clearValidators();
                this.parentsForm.get('maleRelativesPhone').updateValueAndValidity();
                this.parentsForm.get('maleRelativesIdentityNumber').clearValidators();
                this.parentsForm.get('maleRelativesIdentityNumber').updateValueAndValidity();
                this.parentsForm.get('fathersName').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]));
                this.parentsForm.get('fathersPhone').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]));
                this.parentsForm.get('fathersIdentityNumber').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]));
                this.parentsForm.get('mothersName').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]));
                this.parentsForm.get('mothersPhone').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]));
                this.parentsForm.get('mothersIdentityNumber').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]));
                this.parentsForm.controls.maleRelativesName.reset();
                this.parentsForm.controls.maleRelativesPhone.reset();
                this.parentsForm.controls.maleRelativesIdentityNumber.reset();
            }
        }
    }
    getDocumentRegistrationTable() {
        this.loadTableDocument = true;
        this.userService.getNewStudentDocument(`?id=${this.newstudentId}`).subscribe(response => {
            this.tableDocument = response;
            this.dtTrigger.next();
            this.loadTableDocument = false;
        }, (reason) => {
            this.loadTableDocument = false;
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
    getRaportTableDocument() {
        this.loadTableRaport = true;
        this.userService.getNewStudentDocument(`?id=${this.newstudentId}&document_type_id=7`).subscribe(response => {
            this.tableDataRaport = response[0].document;
            this.loadTableRaport = false;
        }, (reason) => {
            this.loadTableDocument = false;
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
    showTableDocument() {
        this.getRaportTableDocument();
        this.showTableDoc.show();
    }
    showTableDocClose() {
        document.querySelector('body').classList.add('modal-open');
        this.showTableDoc.hide();
    }
    showTableDocDetailsClose() {
        this.isUpdatedRaport = false;
        this.uploadRaportFileForm.reset();
        this.showTableDocDetails.hide();
    }
    uploadDocumentDataRaport(data) {
        if (data.url != null) {
            if (data.approval_final_status == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    title: 'Warning',
                    text: 'Anda tidak dapat mengubah dokumen karena status dokumen anda telah disetujui!',
                    type: 'warning',
                    allowOutsideClick: false,
                });
            }
            else {
                // edit raport document
                this.documentIdRaport = data.document_id;
                this.documentTypeIdRaport = data.document_type_id;
                this.isUpdatedRaport = true;
                this.semesterID = data.semester_id;
                this.reportID = data.id;
                this.showTableDocDetails.show();
            }
        }
        else {
            // input raport
            this.documentTypeIdRaport = 7;
            this.isUpdatedRaport = false;
            this.semesterID = data.semester_id;
            this.showTableDocDetails.show();
        }
    }
    checkDocumentStatusApproval() {
        this.loadTableDocument = true;
        this.userService.getNewStudentDocumentStatus(`?registration_number=${this.registrationNumber}`).subscribe(res => {
            if (res.length != 0) {
                const docAppovalFalse = underscore__WEBPACK_IMPORTED_MODULE_13__["findWhere"](res, { approval_final_status: false });
                const docAppovalNull = underscore__WEBPACK_IMPORTED_MODULE_13__["findWhere"](res, { approval_final_status: null });
                const notHaveDoc = underscore__WEBPACK_IMPORTED_MODULE_13__["findWhere"](res, { url: null });
                if (docAppovalNull == undefined) {
                    if (docAppovalFalse == undefined) {
                        this.loadTableDocument = false;
                        this.isViewData = true;
                    }
                    else {
                        this.loadTableDocument = false;
                        this.isViewData = false;
                    }
                }
                else {
                    this.loadTableDocument = false;
                    this.isViewData = false;
                }
            }
        });
    }
    checkCompletenessDocument() {
        this.loadTableDocument = true;
        this.userService.getNewStudentDocumentStatus(`?registration_number=${this.registrationNumber}`).subscribe(res => {
            if (res.length != 0) {
                const notHaveDoc = underscore__WEBPACK_IMPORTED_MODULE_13__["findWhere"](res, { url: null });
                if (notHaveDoc == undefined) {
                    this.loadTableDocument = false;
                    this.isComplete = true;
                }
                else {
                    this.loadTableDocument = false;
                    this.isComplete = false;
                }
            }
        });
    }
    renderDocument() {
        if (this.tableDocument.length == 0) {
            this.getDocumentRegistrationTable();
        }
        else {
            this.dtElements.forEach((dtElement, index) => {
                if (index == 0) {
                    dtElement.dtInstance.then((dtInstance) => {
                        dtInstance.destroy();
                        this.getDocumentRegistrationTable();
                    });
                }
            });
        }
    }
};
NewStudentRegistrationDetailComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__["AdminManagementService"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_6__["ParticipantService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_10__["WizardComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_10__["WizardComponent"])
], NewStudentRegistrationDetailComponent.prototype, "wizard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('uploadDocumentModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NewStudentRegistrationDetailComponent.prototype, "uploadDocumentModals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('showTableDoc', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NewStudentRegistrationDetailComponent.prototype, "showTableDoc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalPreview', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NewStudentRegistrationDetailComponent.prototype, "modalPreview", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('revisedModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NewStudentRegistrationDetailComponent.prototype, "revisedModals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('showTableDocDetails', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NewStudentRegistrationDetailComponent.prototype, "showTableDocDetails", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
], NewStudentRegistrationDetailComponent.prototype, "dtElements", void 0);
NewStudentRegistrationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-student-registration-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-student-registration-detail.component.scss */ "./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_5__["AdminManagementService"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_6__["ParticipantService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
], NewStudentRegistrationDetailComponent);



/***/ }),

/***/ "./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: NewStudentRegistrationDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStudentRegistrationDetailModule", function() { return NewStudentRegistrationDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _new_student_registration_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-student-registration-detail.component */ "./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.component.ts");
/* harmony import */ var _new_student_registration_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-student-registration-detail-routing.module */ "./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/fesm2015/ng-select.js");
/* harmony import */ var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-archwizard/dist */ "./node_modules/ng2-archwizard/dist/index.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__);













let NewStudentRegistrationDetailModule = class NewStudentRegistrationDetailModule {
};
NewStudentRegistrationDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_new_student_registration_detail_component__WEBPACK_IMPORTED_MODULE_3__["NewStudentRegistrationDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _new_student_registration_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewStudentRegistrationDetailRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"],
            angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__["AngularDualListBoxModule"],
            ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_10__["SelectModule"],
            ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_11__["ArchwizardModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["TextMaskModule"]
        ]
    })
], NewStudentRegistrationDetailModule);



/***/ })

}]);
//# sourceMappingURL=new-student-registration-detail-new-student-registration-detail-module-es2015.js.map