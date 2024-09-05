(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-student-profile-student-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/student-profile/student-profile.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/student-profile/student-profile.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card hidHeader=\"false\">\n      <wizard #wizard class=\"arc-wizard\" navBarLayout=\"large-empty-symbols\">\n        <!--Wizard Step 1 Data Diri-->\n        <wizard-step stepTitle=\"{{'CONTENT.biodata' | translate}}\" navigationSymbol=\"1\">\n          <!--Data Diri-->\n          <div class=\"row\">\n            <div padding class=\"col-md-12\">\n              <form class=\"md-float-material form-material\" action=\"javascript:\"\n                [formGroup]=\"registrationParticipantDataForm\" (ngSubmit)=\"createParticipantData()\">\n                <div class=\"row\" [ngSwitch]=\"edit\">\n                  <div class=\"col-sm-12\" *ngSwitchDefault>\n                    <app-card cardTitle=\"{{'CONTENT.biodata' | translate}}\" headerClass=\"text-center text-md-left\"\n                      [options]=\"false\" [loading]=\"loadDataDiri\">\n                      <div class=\"app-body\">\n                        <!-- Profile Picture -->\n                        <div class=\"user-profile user-card mt-5 mb-4\">\n                          <div class=\"card-body py-0\">\n                            <div class=\"user-about-block m-0\">\n                              <div class=\"row\">\n                                <div class=\"col-md-12 text-center mt-n5\">\n                                  <div class=\"change-profile text-center mb-2\">\n                                    <div class=\"dropdown w-auto d-inline-block\" ngbDropdown>\n                                      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" ngbDropdownToggle\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\n                                        <div class=\"profile-dp\">\n                                          <div class=\"position-fit d-inline-block\">\n                                            <img class=\"img-radius align-top m-r-15 wid-100 img-cover-fit\"\n                                              [src]=\"photoData.photo_url ? photoData.photo_url : 'https://cdndata.telkomuniversity.ac.id/situ-round.png'\"\n                                              alt=\"User image\">\n                                          </div>\n                                          <div class=\"overlay\">\n                                            <span>{{'CONTENT.change' | translate }}</span>\n                                          </div>\n                                        </div>\n                                        <input class=\"d-none\" id=\"fileInput\" type=\"file\"\n                                          accept=\"image/jpg,image/jpeg,image/png\"\n                                          (change)=\"onUploadImagePhoto($event)\" />\n                                        <div class=\"certificated-badge\">\n                                          <i class=\"icofont icofont-camera bg-icon pointer-clicked\"></i>\n                                        </div>\n                                      </a>\n                                      <div class=\"dropdown-menu\" ngbDropdownMenu>\n                                        <a class=\"dropdown-item\" href=\"javascript:\" (click)=\"openFile()\"><i\n                                            class=\"feather icon-upload-cloud mr-2\"></i>{{'CONTENT.change-photo' |\n                                          translate }}</a>\n                                        <a target=\"_blank\" class=\"dropdown-item\" [href]=\"photoData.photo_url\"\n                                          [hidden]=\"notHavePhoto\"><i\n                                            class=\"feather icon-image mr-2\"></i>{{'CONTENT.view-photo' | translate}}</a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"p-4 col-12\">\n                                  <app-alert type=\"warning\" [hidden]=\"!notHavePhoto\">\n                                    <h6 class=\"text-dark text-center\">{{ 'CONTENT.photo-info' | translate }}</h6>\n                                    <div class=\"col-sm-12 text-center\">\n                                      <p>{{ 'CONTENT.photo-info-2' | translate }}<br>{{ 'CONTENT.photo-info-3' |\n                                        translate }}.<br>{{ 'CONTENT.photo-info-4' | translate }}.</p>\n                                      <br>\n                                      <p><i>{{ 'CONTENT.photo-info-5' | translate }}</i></p>\n                                    </div>\n                                  </app-alert>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div [hidden]=\"notHavePhoto\">\n                          <span class=\"required mb-4\">* Wajib diisi</span>\n                          <div class=\"form-group mb-2\">\n                            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.fullname' | translate }} <span\n                                class=\"required\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" name=\"name\" required formControlName=\"fullname\"\n                              [ngClass]=\"f.fullname.invalid && f.fullname.touched?'is-invalid':(f.fullname.valid?'is-valid':'')\"\n                              maxlength=\"100\">\n                            <label\n                              *ngIf=\"f.fullname.errors && f.fullname.errors.required && (f.fullname.touched || f.fullname.dirty)\"\n                              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                            <label\n                              *ngIf=\"f.fullname.errors && f.fullname.errors.maxlength && (f.fullname.touched || f.fullname.dirty)\"\n                              class=\"error text-danger small form-text\">{{ 'CONTENT.validation-fullname' | translate\n                              }}</label>\n                            <label\n                              *ngIf=\"f.fullname.errors && f.fullname.errors.pattern && (f.fullname.touched || f.fullname.dirty)\"\n                              class=\"error text-danger small form-text\">{{ 'CONTENT.letter-only' | translate }}</label>\n                          </div>\n                          <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.gender' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.gender'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"gender\"\n                                [(ngModel)]=\"gender\"\n                                [ngClass]=\"!gender?'filter-dropdown is-invalid':(gender?'filter-dropdown is-valid':'filter-dropdown')\"\n                                [options]=\"listGender\"></ng-select>\n                              <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.gender.errors.required\">{{ 'CONTENT.gender' | translate }} {{\n                                  'CONTENT.is-required' | translate }}</div>\n                              </div>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.religion' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.religion'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"religion\"\n                                [(ngModel)]=\"religion\"\n                                [ngClass]=\"!religion?'filter-dropdown is-invalid':(religion?'filter-dropdown is-valid':'filter-dropdown')\"\n                                [options]=\"listReligion\">\n                              </ng-select>\n                              <label id=\"validation-religion-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.religion' | translate }}</label>\n                            </div>\n                          </div>\n                          <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.country_birth' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.country_birth'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"country_birth\"\n                                [(ngModel)]=\"countryBirth\"\n                                [ngClass]=\"!countryBirth?'filter-dropdown is-invalid':(countryBirth?'filter-dropdown is-valid':'filter-dropdown')\"\n                                [options]=\"listCountryBirth\" (ngModelChange)=\"changeProvinceBirth(countryBirth)\">\n                              </ng-select>\n                              <label id=\"validation-country-birth-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.country_birth' | translate }}</label>\n                            </div>\n                            <div *ngIf=\"isIndonesiaBirthCountry\" class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.province_birth' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.province_birth'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"province_birth\"\n                                [(ngModel)]=\"provinceBirth\" [options]=\"listProvinceBirth\"\n                                [ngClass]=\"!provinceBirth?'filter-dropdown is-invalid':(provinceBirth?'filter-dropdown is-valid':'filter-dropdown')\"\n                                (ngModelChange)=\"loadCityBirthDataFilter(provinceBirth)\"></ng-select>\n                              <label id=\"validation-province-birth-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.province_birth' | translate }}</label>\n                            </div>\n                            <div *ngIf=\"!isIndonesiaBirthCountry\" class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.province_birth' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <input type=\"text\" [placeholder]=\"'CONTENT.province_birth'|translate\" class=\"form-control mt-0\"\n                                name=\"province_birth\" formControlName=\"province_birth_other\" maxlength=\"100\"\n                                [ngClass]=\"f.province_birth_other.invalid && f.province_birth_other.touched?'is-invalid':(f.province_birth_other.valid?'is-valid':'')\">\n                              <label\n                                *ngIf=\"f.province_birth_other.errors && f.province_birth_other.errors.required && (f.province_birth_other.touched || f.province_birth_other.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                            </div>\n                          </div>\n                          <div class=\"form-row mb-0\">\n                            <div *ngIf=\"isIndonesiaBirthCountry\" class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.city_birth' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [disabled]=\"!provinceBirth\" [placeholder]=\"'CONTENT.city_birth'|translate\"\n                                required [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"city_birth\"\n                                [(ngModel)]=\"cityBirth\"\n                                [ngClass]=\"!cityBirth?'filter-dropdown is-invalid':(cityBirth?'filter-dropdown is-valid':'filter-dropdown')\"\n                                [options]=\"listCityBirth\"></ng-select>\n                              <label id=\"validation-city-birth-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.city_birth' | translate }}</label>\n                            </div>\n                            <div *ngIf=\"!isIndonesiaBirthCountry\" class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.city_birth' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <input type=\"text\" [placeholder]=\"'CONTENT.city_birth'|translate\" class=\"form-control mt-0\"\n                                name=\"city_birth_other\" formControlName=\"city_birth_other\" maxlength=\"100\"\n                                [ngClass]=\"f.city_birth_other.invalid && f.city_birth_other.touched?'is-invalid':(f.city_birth_other.valid?'is-valid':'')\">\n                              <label\n                                *ngIf=\"f.city_birth_other.errors && f.city_birth_other.errors.required && (f.city_birth_other.touched || f.city_birth_other.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                              <label class=\"form-label mb-0 f-w-600\">{{ 'CONTENT.birthdate' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <input type=\"date\" class=\"form-control mt-0\"\n                                formControlName=\"birthdate\" name=\"birthdate\" required\n                                [placeholder]=\"'CONTENT.date-validation'|translate\"\n                                [ngClass]=\"f.birthdate.invalid && f.birthdate.touched?'is-invalid':(f.birthdate.valid?'is-valid':'')\" />\n                              <label\n                                *ngIf=\"f.birthdate.errors && f.birthdate.errors.required && (f.birthdate.touched || f.birthdate.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                            </div>\n                          </div>\n                          <div class=\"form-row mt-0\">\n                            <div class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.nationality' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.nationality'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"nationality\"\n                                [(ngModel)]=\"nationality\"\n                                [ngClass]=\"!nationality?'filter-dropdown is-invalid':(nationality?'filter-dropdown is-valid':'filter-dropdown')\"\n                                [options]=\"listNationality\" (ngModelChange)=\"changeNationality(nationality)\">\n                              </ng-select>\n                              <label id=\"validation-nationality-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.nationality' | translate }}</label>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.country_origin' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.country_origin'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"country_origin\"\n                                [(ngModel)]=\"countryOrigin\" [options]=\"listCountry\"\n                                [ngClass]=\"!countryOrigin?'filter-dropdown is-invalid':(countryOrigin?'filter-dropdown is-valid':'filter-dropdown')\">\n                              </ng-select>\n                              <label id=\"validation-country-origin-error\"\n                                class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n                                'CONTENT.please-input' | translate }}{{ 'CONTENT.country_origin' | translate }}</label>\n                            </div>\n                          </div>\n                          <div class=\"form-row\">\n                            <div  *ngIf=\"isIndonesianNationality\" class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.NIK' | translate }}\n                                <i class=\"icofont icofont-info-circle\" [placement]=\"'right'\"\n                                  ngbTooltip=\"NIK terdapat pada KTP atau Kartu Keluarga\"></i><span\n                                  class=\"required\">*</span></label>\n                              <input type=\"text\" class=\"form-control\" name=\"NIK\" required formControlName=\"NIK\"\n                                minlength=\"16\" maxlength=\"16\"\n                                [ngClass]=\"f.NIK.invalid && f.NIK.touched?'is-invalid':(f.NIK.valid?'is-valid':'')\">\n                              <label *ngIf=\"f.NIK.errors && f.NIK.errors.required && (f.NIK.touched || f.NIK.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                              <label *ngIf=\"f.NIK.errors && f.NIK.errors.minlength && (f.NIK.touched || f.NIK.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nik' | translate\n                                }}</label>\n                              <label *ngIf=\"f.NIK.errors && f.NIK.errors.maxlength && (f.NIK.touched || f.NIK.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-nik' | translate\n                                }}</label>\n                              <label *ngIf=\"f.NIK.errors && f.NIK.errors.pattern && (f.NIK.touched || f.NIK.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n                              </div>\n                            <div *ngIf=\"!isIndonesianNationality\" class=\"form-group col-md-6\">\n                              <div><label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.passport_number' | translate\n                                  }}<span class=\"required\">*</span></label></div>\n                              <input type=\"text\" class=\"form-control\" name=\"passport_number\"\n                                formControlName=\"passport_number\" required minlength=\"7\" maxlength=\"7\"\n                                [ngClass]=\"f.passport_number.invalid && f.passport_number.touched?'is-invalid':(f.passport_number.valid?'is-valid':'')\">\n                              <label\n                                *ngIf=\"f.passport_number.errors && f.passport_number.errors.required && (f.passport_number.touched || f.passport_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                              <label\n                                *ngIf=\"f.passport_number.errors && f.passport_number.errors.minlength && (f.passport_number.touched || f.passport_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-passport' | translate\n                                }}</label>\n                              <label\n                                *ngIf=\"f.passport_number.errors && f.passport_number.errors.maxlength && (f.passport_number.touched || f.passport_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-passport' | translate\n                                }}</label>\n                              <label\n                                *ngIf=\"f.passport_number.errors && f.passport_number.errors.pattern && (f.passport_number.touched || f.passport_number.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                                }}</label>\n                            </div>\n                            <div *ngIf=\"!isIndonesianNationality\" class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.passport_expired_date' | translate\n                                }}<span class=\"required\">*</span></label>\n                              <input type=\"date\" class=\"form-control\" name=\"passport_expired_date\" max=\"9999-12-31\"\n                                formControlName=\"passport_expiry_date\" required> <label\n                                *ngIf=\"f.passport_expiry_date.errors && f.passport_expiry_date.errors.required && (f.passport_expiry_date.touched || f.passport_expiry_date.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                            </div>\n                            <div *ngIf=\"isIndonesianNationality\" class=\"form-group col-md-6\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.nis' | translate }}<span\n                                  class=\"required\">*</span></label>\n                              <input type=\"text\" class=\"form-control\" name=\"NIS\" required formControlName=\"nis\"\n                                minlength=\"8\" maxlength=\"8\" placeholder=\"{{'CONTENT.nis' | translate }}\"\n                                [ngClass]=\"f.nis.invalid && f.nis.touched?'is-invalid':(f.nis.valid?'is-valid':'')\">\n                              <label *ngIf=\"f.nis.errors && f.nis.errors.required && (f.nis.touched || f.nis.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                              <label *ngIf=\"f.nis.errors && f.nis.errors.minlength && (f.nis.touched || f.nis.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.nis-validation' | translate\n                                }}</label>\n                              <label *ngIf=\"f.nis.errors && f.nis.errors.maxlength && (f.nis.touched || f.nis.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.nis-validation' | translate\n                                }}</label>\n                              <label *ngIf=\"f.nis.errors && f.nis.errors.pattern && (f.nis.touched || f.nis.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </app-card>\n\n                    <!--Data Alamat-->\n                    <app-card cardTitle=\"{{'CONTENT.address_data' | translate}}\" headerClass=\"text-center text-md-left\"\n                      [options]=\"false\" [loading]=\"loadDataDiri\" [hidden]=\"notHavePhoto\">\n                      <div class=\"app-body\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-12\">\n                            <div class=\"form-group mb-2\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.country' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.country'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"address_country\"\n                                [(ngModel)]=\"country\" [options]=\"listCountry\"\n                                [ngClass]=\"!country?'filter-dropdown is-invalid':(country?'filter-dropdown is-valid':'filter-dropdown')\"\n                                (selected)=\"changeCountryDataforProvince($event)\"></ng-select>\n                            </div>\n                            <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group mb-2\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.province' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <ng-select [placeholder]=\"'CONTENT.province'|translate\" required\n                                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"address_province\"\n                                [(ngModel)]=\"province\" [options]=\"listProvince\"\n                                [ngClass]=\"!province?'filter-dropdown is-invalid':(province?'filter-dropdown is-valid':'filter-dropdown')\"\n                                (selected)=\"changeProvinceDataforCity($event)\"></ng-select>\n                            </div>\n                            <div *ngIf=\"!hiddenAddressDetail\" class=\"form-row\">\n                              <div class=\"form-group col-md-6\">\n                                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.city' | translate }} <span\n                                    class=\"required\">*</span></label>\n                                <ng-select [placeholder]=\"'CONTENT.city'|translate\" required\n                                  [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"address_city\"\n                                  [(ngModel)]=\"city\" [options]=\"listCity\"\n                                  [ngClass]=\"!city?'filter-dropdown is-invalid':(city?'filter-dropdown is-valid':'filter-dropdown')\"\n                                  (selected)=\"changeCityDataforDistrict($event)\"></ng-select>\n                              </div>\n                              <div *ngIf=\"!hiddenAddressDetail\" class=\"form-group col-md-6\">\n                                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.district' | translate }}</label>\n                                <ng-select [placeholder]=\"'CONTENT.district'|translate\"\n                                  [notFoundMsg]=\"'ROOT.no_data_found'|translate\" formControlName=\"address_district\"\n                                  [(ngModel)]=\"district\" [options]=\"listDistrict\"\n                                  [ngClass]=\"!district?'filter-dropdown is-invalid':(district?'filter-dropdown is-valid':'filter-dropdown')\">\n                                </ng-select>\n                              </div>\n                            </div>\n                            <div class=\"form-group mb-2\">\n                              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.address' | translate }} <span\n                                  class=\"required\">*</span></label>\n                              <textarea class=\"form-control\" formControlName=\"address_detail\" maxlength=\"150\" required\n                                [ngClass]=\"f.address_detail.invalid && f.address_detail.touched?'is-invalid':(f.address_detail.valid?'is-valid':'')\"></textarea>\n                              <label\n                                *ngIf=\"f.address_detail.errors && f.address_detail.errors.required && (f.address_detail.touched || f.address_detail.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                              <label\n                                *ngIf=\"f.address_detail.errors && f.address_detail.errors.maxlength && (f.address_detail.touched || f.address_detail.dirty)\"\n                                class=\"error text-danger small form-text\">{{ 'CONTENT.validation-address-detail' |\n                                translate }}</label>\n                            </div>\n                            <div *ngIf=\"!hiddenAddressDetail\" class=\"form-row\">\n                              <div class=\"form-group col-md-6\">\n                                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.zipcode' | translate }}\n                                  <span class=\"required\">*</span></label>\n                                <input type=\"text\" [placeholder]=\"'CONTENT.zipcode'|translate\" class=\"form-control\"\n                                  name=\"zipcode\" maxlength=\"5\" minlength=\"5\" required formControlName=\"zipcode\"\n                                  [ngClass]=\"f.zipcode.invalid && f.zipcode.touched?'is-invalid':(f.zipcode.valid?'is-valid':'')\">\n                                <label\n                                  *ngIf=\"f.zipcode.errors && f.zipcode.errors.required && (f.zipcode.touched || f.zipcode.dirty)\"\n                                  class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                                <label\n                                  *ngIf=\"f.zipcode.errors && f.zipcode.errors.minlength && (f.zipcode.touched || f.zipcode.dirty)\"\n                                  class=\"error text-danger small form-text\">{{ 'CONTENT.validation-zipcode' | translate\n                                  }}</label>\n                                <label\n                                  *ngIf=\"f.zipcode.errors && f.zipcode.errors.pattern && (f.zipcode.touched || f.zipcode.dirty)\"\n                                  class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                                  }}</label>\n                              </div>\n                              <div class=\"form-group col-md-6\">\n                                <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.home_number' | translate }}</label>\n                                <input type=\"text\" [placeholder]=\"'CONTENT.home_number'|translate\" class=\"form-control\"\n                                  name=\"home_number\" formControlName=\"house_phone_number\" maxlength=\"11\"\n                                  [ngClass]=\"f.house_phone_number.invalid && f.house_phone_number.touched?'is-invalid':(f.house_phone_number.valid?'is-valid':'')\">\n                                <label\n                                  *ngIf=\"f.house_phone_number.errors && f.house_phone_number.errors.maxlength && (f.house_phone_number.touched || f.house_phone_number.dirty)\"\n                                  class=\"error text-danger small form-text\">{{ 'CONTENT.validation-zipcode' | translate\n                                  }}</label>\n                                <label\n                                  *ngIf=\"f.house_phone_number.errors && f.house_phone_number.errors.pattern && (f.house_phone_number.touched || f.house_phone_number.dirty)\"\n                                  class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                                  }}</label>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </app-card>\n                  </div>\n                  <!-- Disabilitas Data -->\n                  <div class=\"col-md-6\">\n                    <app-card cardTitle=\"{{'CONTENT.disabilitas-data' | translate}}\" headerClass=\"text-center text-md-left\"\n                      [options]=\"false\" [loading]=\"loadDataDiri\" [hidden]=\"notHavePhoto\">\n                      <div class=\"col-md-12\">\n                        <div class=\"row\">\n                          <div class=\"form-group mb-2 col-md-12\">\n                            <label class=\"form-label mb-1 f-w-600\">{{ 'CONTENT.color-blind' | translate }}<span\n                                class=\"required\">*</span></label><br>\n                            <ng-select [(ngModel)]=\"colorBlind\" name=\"color_blind\" [allowClear]=\"false\" [options]=\"colorBlindList\"\n                              [placeholder]=\"'ROOT.choose' | translate\"\n                              [ngClass]=\"!colorBlind?'filter-dropdown is-invalid':(colorBlind?'filter-dropdown is-valid':'filter-dropdown')\"\n                              [notFoundMsg]=\"'ROOT.no_data_found' | translate\" [ngModelOptions]=\"{ standalone: true }\">\n                            </ng-select>\n                            <label *ngIf=\"!colorBlind\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n                              translate }}</label>\n                          </div>\n                          <div class=\"form-group mb-1 col-md-12\">\n                            <label class=\"form-label mb-2 f-w-600\">{{ 'CONTENT.special-needs' | translate }}<span class=\"required\"> *</span>\n                            </label><br>\n                            <ng-select [(ngModel)]=\"specialNeeds\" name=\"special_needs\" [allowClear]=\"false\"\n                              formControlName=\"special_needs\" [options]=\"listOptions\" [placeholder]=\"'ROOT.choose' | translate\"\n                              [ngClass]=\"!specialNeeds?'filter-dropdown is-invalid':(specialNeeds?'filter-dropdown is-valid':'filter-dropdown')\"\n                              [notFoundMsg]=\"'ROOT.no_data_found' | translate\" (ngModelChange)=\"changeSpecialNeeds(specialNeeds)\">\n                            </ng-select>\n                            <label *ngIf=\"!specialNeeds\" class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate\n                              }}</label>\n                          </div>\n                          <div class=\"form-group mb-2 col-md-12\">\n                          </div>\n                          <div class=\"form-group mb-1 col-md-12\" *ngIf=\"showSpecialNeeds\">\n                            <input type=\"text\" class=\"form-control mt-0\" formControlName=\"special_needs_text\"\n                              [placeholder]=\"'CONTENT.mention-special-needs' | translate\"\n                              [ngClass]=\"f.special_needs_text.invalid && f.special_needs_text.touched?'is-invalid':(f.special_needs_text.valid?'is-valid':'')\">\n                            <label\n                              *ngIf=\"f.special_needs_text.errors && f.special_needs_text.errors.required && (f.special_needs_text.touched || f.special_needs_text.dirty)\"\n                              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                          </div>\n                        </div>\n                      </div>\n                    </app-card>\n                  </div>\n\n                  <!--Data Kontak-->\n                  <div class=\"col-md-6\">\n                  <app-card cardTitle=\"{{'CONTENT.contact_data' | translate}}\" headerClass=\"text-center text-md-left\"\n                    [options]=\"false\" [loading]=\"loadDataDiri\" [hidden]=\"notHavePhoto\">\n                    <div class=\"app-body\">\n                      <div class=\"col-sm-12\">\n                      <div class=\"row\">\n                          <div class=\"form-group mb-0 col-md-12\">\n                            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.email' | translate }}</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"email\" readonly>\n                          </div>\n                          <div class=\"form-group mb-1 col-md-12\">\n                            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.phone_number' | translate }} <span\n                                class=\"required\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" required formControlName=\"mobile_phone_number\"\n                              minlength=\"11\" maxlength=\"13\"\n                              [ngClass]=\"f.mobile_phone_number.invalid && f.mobile_phone_number.touched?'is-invalid':(f.mobile_phone_number.valid?'is-valid':'')\">\n                            <label\n                              *ngIf=\"f.mobile_phone_number.errors && f.mobile_phone_number.errors.required && (f.mobile_phone_number.touched || f.mobile_phone_number.dirty)\"\n                              class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n                            <label\n                              *ngIf=\"f.mobile_phone_number.errors && f.mobile_phone_number.errors.minlength && (f.mobile_phone_number.touched || f.mobile_phone_number.dirty)\"\n                              class=\"error text-danger small form-text\">{{ 'CONTENT.min-length' | translate }}</label>\n                            <label\n                              *ngIf=\"f.mobile_phone_number.errors && f.mobile_phone_number.errors.pattern && (f.mobile_phone_number.touched || f.mobile_phone_number.dirty)\"\n                              class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n                              }}</label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </app-card>\n                </div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <br>\n          <div [hidden]=\"notHavePhoto\" class=\"col-sm-12 centered-content\">\n            <button type=\"button\" class=\"btn btn-outline-primary btn-sm\"\n              [disabled]=\"!registrationParticipantDataForm.valid || loadDataDiri || !colorBlind || !specialNeeds || submitloader\"\n              (click)=\"createParticipantData()\">\n              <span *ngIf=\"this.submitloader\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.submitloader\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.submitloader\" class=\"btn-text\">{{ 'ROOT.next' | translate }} <i\n                  class=\"icofont icofont-rounded-right\"></i></span>\n            </button>\n          </div>\n        </wizard-step>\n\n        <!--Wizard Step 2 Data Pendidikan-->\n        <wizard-step stepTitle=\"{{'CONTENT.education_data' | translate}}\" navigationSymbol=\"2\">\n          <app-card cardTitle=\"{{'CONTENT.education_data' | translate}}\" headerClass=\"text-center text-md-left\"\n            [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loadtableEducationHistory\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-12 text-center text-md-right\">\n                <button class=\"btn btn-sm btn-outline-success btn-round has-ripple m-2\"\n                  (click)=\"loadInputEducationHistoryData()\">\n                  <i class=\"icofont icofont-plus\"></i> {{'ROOT.add' | translate}} {{'CONTENT.education_data' |\n                  translate}}\n                </button>\n              </div>\n            </div>\n            <div class=\"table-responsive pb-1\">\n              <table datatable class=\"table table-hover\" [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.no' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.educational_stage' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.institution_name' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.department_name' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.graduate_year' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate }}</th>\n                  </tr>\n                </thead>\n                <tbody *ngIf=\"tableData?.length != 0\">\n                  <tr *ngFor=\"let data of tableData; let i = index;\">\n                    <th scope=\"row\" class=\"center-table\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                    <td class=\"center-table\">{{ data.level }}</td>\n                    <td class=\"center-table\">{{ data.school_name }}</td>\n                    <td class=\"center-table\">{{ data.major }}</td>\n                    <td scope=\"col\" class=\"center-table\">{{ data.graduate_year }}</td>\n                    <td class=\"center-table\">\n                      <a aria-label=\"detail\" href=\"javascript:\" [placement]=\"'top'\"\n                        ngbTooltip=\"{{ 'ROOT.detail' | translate }}\" class=\"mr-2\"\n                        (click)=\"loadViewEducationHistory(data)\">\n                        <i class=\"ti-eye f-w-600 f-16 text-c-blue\"></i>\n                      </a>\n                      <a aria-label=\"detail\" href=\"javascript:\" [placement]=\"'top'\"\n                        ngbTooltip=\"{{ 'ROOT.delete' | translate }}\" class=\"mr-2\" (click)=\"deleteEducation(data)\">\n                        <i class=\"ti-trash f-w-600 f-16 text-c-red\"></i>\n                      </a>\n                    </td>\n                  </tr>\n                </tbody>\n                <tbody *ngIf=\"tableData?.length == 0 && !loadtableEducationHistory\">\n                  <tr>\n                    <td colspan=\"6\" class=\"no-data-available text-center\">\n                      <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n                    </td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                  </tr>\n                </tbody>\n                <tbody *ngIf=\"tableData?.length == 0 && loadtableEducationHistory\">\n                  <tr>\n                    <td colspan=\"6\" class=\"no-data-available text-center\">\n                      <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n                    </td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </app-card>\n          <br>\n          <div class=\"col-sm-12 centered-content\">\n            <button type=\"button\" class=\"btn btn-outline-secondary btn-sm m-1\" previousStep><i\n                class=\"icofont icofont-rounded-left\"></i> {{ 'ROOT.back' | translate }}</button>\n            <button [hidden]=\"isEducationDataEmpty\" type=\"button\" class=\"btn btn-outline-primary btn-sm m-1\" nextStep>{{\n              'ROOT.next' | translate }} <i class=\"icofont icofont-rounded-right\"></i></button>\n            <button [hidden]=\"!isEducationDataEmpty\" type=\"button\" class=\"btn btn-outline-primary btn-sm m-1\"\n              disabled>{{\n              'ROOT.next' | translate }} <i class=\"icofont icofont-rounded-right\"></i>\n            </button>\n          </div>\n        </wizard-step>\n\n        <!--Wizard Step 3 Data Keluarga-->\n        <wizard-step stepTitle=\"{{'CONTENT.family_data' | translate}}\" navigationSymbol=\"3\">\n          <!--Data Orang Tua-->\n          <app-card cardTitle=\"{{'CONTENT.parents_data' | translate}}\" headerClass=\"text-center text-md-left\"\n            [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loadtableParentsData\">\n            <div class=\"row align-items-center mb-2 mt-3\">\n              <div class=\"col-12 text-center text-md-right\">\n                <button class=\"btn btn-outline-success btn-sm btn-round has-ripple\" (click)=\"loadInputParentsData()\">\n                  <i class=\"icofont icofont-plus\"></i> {{'ROOT.add' | translate}} {{'CONTENT.parents_data' | translate}}\n                </button>\n              </div>\n            </div>\n            <div class=\"table-responsive\">\n              <table datatable id=\"report-table\" class=\"table table-striped mb-0\" [dtOptions]=\"dtOptions[1]\"\n                [dtTrigger]=\"dtTrigger1\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.no' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.relationship' | translate }}</th>\n                    <th scope=\"col\">{{ 'CONTENT.parent_name' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.last_education' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.work_type' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate }}</th>\n                  </tr>\n                </thead>\n                <tbody *ngIf=\"tableData1?.length != 0\">\n                  <tr *ngFor=\"let data of tableData1; let i = index;\">\n                    <th scope=\"row\" class=\"center-table\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                    <td scope=\"col\" class=\"center-table\">{{ data.relationship }}</td>\n                    <td>{{ data.family_name }}</td>\n                    <td class=\"center-table\">{{ data.education_degree_name }}</td>\n                    <td class=\"center-table\">{{ data.work_type_name }}</td>\n                    <td class=\"center-table\">\n                      <a aria-label=\"detail\" href=\"javascript:\" [placement]=\"'top'\"\n                        ngbTooltip=\"{{ 'ROOT.detail' | translate }}\" class=\"mr-2\" (click)=\"loadDetailParentsData(data)\">\n                        <i class=\"ti-eye f-w-600 f-16 text-c-blue\"></i>\n                      </a>\n                      <a aria-label=\"detail\" href=\"javascript:\" [placement]=\"'top'\"\n                        ngbTooltip=\"{{ 'ROOT.delete' | translate }}\" class=\"mr-2\" (click)=\"deleteParentsData(data)\">\n                        <i class=\"ti-trash f-w-600 f-16 text-c-red\"></i>\n                      </a>\n                    </td>\n                  </tr>\n                </tbody>\n                <tbody *ngIf=\"tableData1?.length == 0 && !loadtableParentsData\">\n                  <tr>\n                    <td colspan=\"7\" class=\"no-data-available text-center\">\n                      <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n                    </td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                  </tr>\n                </tbody>\n                <tbody *ngIf=\"tableData1?.length == 0 && loadtableParentsData\">\n                  <tr>\n                    <td colspan=\"7\" class=\"no-data-available text-center\">\n                      <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n                    </td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </app-card>\n          <div class=\"col-sm-12 centered-content\">\n            <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" previousStep><i\n                class=\"icofont icofont-rounded-left\"></i> {{ 'ROOT.back' | translate }}</button>\n            <button type=\"button\" class=\"btn btn-outline-primary btn-sm m-1\" nextStep>{{ 'ROOT.next' | translate }} <i\n                class=\"icofont icofont-rounded-right\"></i></button>\n          </div>\n        </wizard-step>\n\n        <!--Wizard Step 4 Data Pekerjaan-->\n        <wizard-step stepTitle=\"{{'CONTENT.work_data' | translate}}\" navigationSymbol=\"4\">\n          <app-alert type=\"warning\" class=\"text-justify\">{{ 'CONTENT.work-history-info' | translate}}</app-alert>\n          <app-card cardTitle=\"{{'CONTENT.work_data' | translate}}\" headerClass=\"text-center text-md-left\"\n            [hidHeader]=\"false\" [options]=\"false\" [loading]=\"loadtableWorkHistory\">\n            <div class=\"row align-items-center mb-2 mt-3\">\n              <div class=\"col-12 text-center text-md-right\">\n                <button class=\"btn btn-outline-success btn-sm btn-round has-ripple\"\n                  (click)=\"loadInputWorkHistoryData()\">\n                  <i class=\"icofont icofont-plus\"></i> {{'ROOT.add' | translate}} {{'CONTENT.work_data' | translate}}\n                </button>\n              </div>\n            </div>\n            <div class=\"table-responsive\">\n              <table datatable id=\"report-table\" class=\"table table-striped mb-0\" [dtOptions]=\"dtOptions[2]\"\n                [dtTrigger]=\"dtTrigger2\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.no' | translate }}</th>\n                    <th scope=\"col\">{{ 'CONTENT.company_name' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.position' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.work_start_date' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.work_end_date' | translate }}</th>\n                    <th scope=\"col\" class=\"center-table\">{{ 'CONTENT.action' | translate }}</th>\n                  </tr>\n                </thead>\n                <tbody *ngIf=\"tableData2?.length != 0\">\n                  <tr *ngFor=\"let data of tableData2; let i = index;\">\n                    <th scope=\"row\" class=\"center-table\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n                    <td>{{ data.company_name }}</td>\n                    <td class=\"center-table\">{{ data.work_position }}</td>\n                    <td class=\"center-table\">{{ data.work_start_date | slice:0:10 | date:'dd/MM/yyyy'}}</td>\n                    <td *ngIf=\"data.work_end_date === null\" class=\"center-table\">-</td>\n                    <td *ngIf=\"data.work_end_date !== null\" class=\"center-table\">{{ data.work_end_date | slice:0:10 |\n                      date:'dd/MM/yyyy'}}</td>\n                    <td class=\"center-table\">\n                      <a aria-label=\"detail\" href=\"javascript:\" [placement]=\"'top'\"\n                        ngbTooltip=\"{{ 'ROOT.detail' | translate }}\" class=\"mr-2\"\n                        (click)=\"loadDetailWorkHistoryData(data)\">\n                        <i class=\"ti-eye f-w-600 f-16 text-c-blue\"></i>\n                      </a>\n                      <a aria-label=\"detail\" href=\"javascript:\" [placement]=\"'top'\"\n                        ngbTooltip=\"{{ 'ROOT.delete' | translate }}\" class=\"mr-2\" (click)=\"deleteWorkHistoryData(data)\">\n                        <i class=\"ti-trash f-w-600 f-16 text-c-red\"></i>\n                      </a>\n                    </td>\n                  </tr>\n                </tbody>\n                <tbody *ngIf=\"tableData2?.length == 0 && !loadtableWorkHistory\">\n                  <tr>\n                    <td colspan=\"7\" class=\"no-data-available text-center\">\n                      <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n                    </td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                  </tr>\n                </tbody>\n                <tbody *ngIf=\"tableData2?.length == 0 && loadtableWorkHistory\">\n                  <tr>\n                    <td colspan=\"7\" class=\"no-data-available text-center\">\n                      <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n                    </td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                    <td class=\"hidden\"></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </app-card>\n          <br>\n          <div class=\"col-sm-12 centered-content\">\n            <button type=\"button\" class=\"btn btn-outline-secondary btn-sm m-1\" previousStep><i\n                class=\"icofont icofont-rounded-left\"></i> {{ 'ROOT.back' | translate }}</button>\n            <button type=\"button\" class=\"btn btn-outline-success btn-sm m-1\" (click)=\"goToRegistrationStep();\">{{\n              'ROOT.finish' | translate }}\n              <i class=\"icofont icofont-racing-flag-alt\"></i>\n            </button>\n          </div>\n        </wizard-step>\n      </wizard>\n    </app-card>\n  </div>\n</div>\n\n<!-- Forms Modal Education -->\n<app-ui-modal #modalStudent dialogClass=\"modal-dialog-centered modal-l\" [containerClick]=\"false\" [hideFooter]=\"true\"\n  [loading]=\"loadEducationModal\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ \"ROOT.add\" | translate }} {{ 'CONTENT.education_data' | translate }}\n    </h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"hideModalEducation()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"educationHistoryDataForm\"\n      (ngSubmit)=\"createEducationHistoryData()\">\n      <div class=\"row\" [ngSwitch]=\"edit\">\n        <div class=\"col-sm-12\" *ngSwitchDefault>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.foreign_student' | translate }} <span\n                class=\"required\">*</span> </label>\n            <ng-select [placeholder]=\"'CONTENT.foreign_student'|translate\" formControlName=\"student_foreign\"\n              [(ngModel)]=\"isForeign\" [ngClass]=\"!isForeign?'filter-dropdown is-invalid':(isForeign?'filter-dropdown is-valid':'filter-dropdown')\"\n              [notFoundMsg]=\"'ROOT.no_data_found'|translate\" name=\"student_foreign\" [options]=\"foreignStudentList\"\n              (selected)=\"changeTypeStudent($event)\"></ng-select>\n            <label *ngIf=\"!isForeign\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n              translate }}</label>\n          </div>\n          <div [hidden]=\"!isForeign \">\n            <div class=\"form-group mb-2\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.last_education' | translate }} <span\n                  class=\"required\">*</span> </label>\n              <ng-select [placeholder]=\"'ROOT.choose'|translate\" formControlName=\"education_degree_id\"\n                [notFoundMsg]=\"'ROOT.no_data_found'|translate\" name=\"educationDegree\"\n                [(ngModel)]=\"educationDegreeStudent\"\n                [ngClass]=\"!educationDegreeStudent?'filter-dropdown is-invalid':(educationDegreeStudent?'filter-dropdown is-valid':'filter-dropdown')\"\n                [options]=\"listEducationDegree\" (selected)=\"changeSchool($event)\">\n              </ng-select>\n              <label *ngIf=\"!educationDegreeStudent\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n                translate }}</label>\n            </div>\n            <div [hidden]=\"isForeignStudent || hiddenInstitutionandMajor\" class=\"form-group mb-2\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.city' | translate }} <span class=\"required\">*</span>\n              </label>\n              <ng-select *ngIf=\"!educationDegreeStudent\" [ngClass]=\"'filter-dropdown'\"\n                [placeholder]=\"'CONTENT.city-education-placeholder'|translate\" [disabled]=\"!educationDegree\">\n              </ng-select>\n              <ng-select *ngIf=\"educationDegreeStudent\" [placeholder]=\"'CONTENT.city'|translate\"\n                formControlName=\"city_edu\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" name=\"city_edu\"\n                [(ngModel)]=\"cityEdu\" [ngClass]=\"!cityEdu?'filter-dropdown is-invalid':(cityEdu?'filter-dropdown is-valid':'filter-dropdown')\"\n                [options]=\"listCityAll\" (selected)=\"changeSchoolCity(cityEdu)\">\n              </ng-select>\n              <label *ngIf=\"!cityEdu\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n                translate }}</label>\n            </div>\n            <div [hidden]=\"isForeignStudent || hiddenInstitutionandMajor\" class=\"form-group mb-2\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.institution_name' | translate }} <span\n                  class=\"required\">*</span></label>\n              <ng-select *ngIf=\"cityEdu\" [placeholder]=\"'CONTENT.institution_name'|translate\"\n                formControlName=\"school_id\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" name=\"school_id\"\n                [allowClear]=\"true\" [(ngModel)]=\"school\"\n                [ngClass]=\"!school?'filter-dropdown is-invalid':(school?'filter-dropdown is-valid':'filter-dropdown')\"\n                [disabled]=\"educationHistoryDataForm.controls.school_detail.value || isViewEducation || !cityEdu\"\n                [options]=\"listSchool\">\n              </ng-select>\n              <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.institution_name_not_found'|translate\"\n                formControlName=\"school_detail\" [readonly]=\"school || isViewEducation\">\n            </div>\n            <div [hidden]=\"isForeignStudent || hiddenInstitutionandMajor || hiddenMajor\" class=\"form-group mb-2\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.department_name' | translate }} <span\n                  class=\"required\">*</span></label>\n              <ng-select [placeholder]=\"'CONTENT.department_name'|translate\" formControlName=\"education_major_id\"\n                name=\"major_id\" [(ngModel)]=\"educationMajor\"\n                [ngClass]=\"!educationMajor?'filter-dropdown is-invalid':(educationMajor?'filter-dropdown is-valid':'filter-dropdown')\"\n                [options]=\"listEducationMajor\">\n              </ng-select>\n              <label *ngIf=\"!educationMajor\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n                translate }}</label>\n            </div>\n            <div *ngIf=\"isForeignStudent || hiddenInstitutionandMajor\" class=\"form-group mb-2\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.institution_name' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.institution_name'|translate\"\n                maxlength=\"100\" formControlName=\"school_detail\"\n                [ngClass]=\"educationHistoryDataForm.controls.school_detail.invalid && educationHistoryDataForm.controls.school_detail.touched?'is-invalid':(educationHistoryDataForm.controls.school_detail.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"educationHistoryDataForm.controls.school_detail.errors && educationHistoryDataForm.controls.school_detail.errors.required && (educationHistoryDataForm.controls.school_detail.touched || educationHistoryDataForm.controls.school_detail.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            </div>\n            <div *ngIf=\"isForeignStudent || hiddenInstitutionandMajor || hiddenMajor\" class=\"form-group mb-2\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.department_name' | translate }} <span\n                  class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" required [placeholder]=\"'CONTENT.department_name'|translate\"\n                maxlength=\"100\" formControlName=\"major_detail\"\n                [ngClass]=\"educationHistoryDataForm.controls.major_detail.invalid && educationHistoryDataForm.controls.major_detail.touched?'is-invalid':(educationHistoryDataForm.controls.major_detail.valid?'is-valid':'')\">\n              <label\n                *ngIf=\"educationHistoryDataForm.controls.major_detail.errors && educationHistoryDataForm.controls.major_detail.errors.required && (educationHistoryDataForm.controls.major_detail.touched || educationHistoryDataForm.controls.major_detail.dirty)\"\n                class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n            </div>\n            <div class=\"form-group mb-2\">\n              <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.graduate_year' | translate }} <span\n                  class=\"required\">*</span></label>\n              <ng-select [placeholder]=\"'CONTENT.graduate_year'|translate\" formControlName=\"graduate_year\"\n                name=\"graduate_year\" [(ngModel)]=\"educationYears\"\n                [ngClass]=\"!educationYears?'filter-dropdown is-invalid':(educationYears?'filter-dropdown is-valid':'filter-dropdown')\"\n                [options]=\"listYears\">\n              </ng-select>\n              <label *ngIf=\"!educationYears\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n                translate }}</label>\n            </div>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <button type=\"button\" (click)=\"hideModalEducation()\" [disabled]=\"this.loadingEdu\"\n              class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button>\n            <button *ngIf=\"edit == 'input'\" type=\"submit\" class=\"btn btn-success btn-sm ml-2\"\n              [disabled]=\"educationHistoryDataForm.invalid || loadingEdu\">\n              <span *ngIf=\"this.loadingEdu\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n              <span *ngIf=\"this.loadingEdu\" class=\"load-text\"> Loading...</span>\n              <span *ngIf=\"!this.loadingEdu\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n                  class=\"icofont icofont-location-arrow\"></i></span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\">\n  </div>\n</app-ui-modal>\n\n<!-- Forms View Modal Education -->\n<app-ui-modal #modalViewStudent dialogClass=\"modal-dialog-centered modal-l\" [containerClick]=\"false\" [hideFooter]=\"true\"\n  [loading]=\"loadEducationModal\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{\"ROOT.detail\" | translate }}\n      {{ 'CONTENT.education_data' | translate }}\n    </h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closeModalStudentView()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"educationHistoryDataForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.foreign_student' | translate }} </label>\n            <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.institution_name'|translate\"\n              formControlName=\"student_foreign\" readonly>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.last_education' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.last_education'|translate\"\n              formControlName=\"education_degree_id\" readonly>\n          </div>\n          <div [hidden]=\"hiddenCity\" class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.city' | translate }}\n            </label>\n            <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.city'|translate\" formControlName=\"city\"\n              readonly>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.institution_name' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.institution_name'|translate\"\n              formControlName=\"school_detail\" readonly>\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.department_name' | translate }}</label>\n            <input type=\"text\" class=\"form-control\" readonly [placeholder]=\"'CONTENT.department_name'|translate\"\n              formControlName=\"major_detail\">\n          </div>\n          <div class=\"form-group mb-2\">\n            <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.graduate_year' | translate }} </label>\n            <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.graduate_year'|translate\"\n              formControlName=\"graduate_year\" readonly>\n          </div>\n          <div class=\"form-group mb-0 mt-4 text-right\">\n            <button type=\"button\" (click)=\"closeModalStudentView()\" class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\">\n  </div>\n</app-ui-modal>\n\n<!-- Forms Modal add Parents-->\n<app-ui-modal #modalParents dialogClass=\"modal-dialog-centered modal-lg\" [containerClick]=\"false\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ isViewParentsData ? (\"ROOT.detail\" | translate) : (\"ROOT.add\" | translate) }} {{'CONTENT.parents_data' |\n      translate}}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"modalParentsClose()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"parentsDataForm\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-12 mb-1\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.relationship' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select [placeholder]=\"'CONTENT.relationship'|translate\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            formControlName=\"relationship_id\" [(ngModel)]=\"familyRelationshipParent\"\n            [ngClass]=\"!familyRelationshipParent?'filter-dropdown is-invalid':(familyRelationshipParent?'filter-dropdown is-valid':'filter-dropdown')\"\n            [options]=\"listFamilyRelationshipParent\" [disabled]=\"isViewParentsData\"></ng-select>\n          <label *ngIf=\"!familyRelationshipParent\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n        <div class=\"form-group col-md-12 mb-1\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.fullname' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.fullname' | translate\"\n            formControlName=\"family_name\" maxlength=\"50\" [readonly]=\"isViewParentsData\"\n            [ngClass]=\"fpf.family_name.invalid && fpf.family_name.touched?'is-invalid':(fpf.family_name.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"fpf.family_name.errors && fpf.family_name.errors.required && (fpf.family_name.touched || fpf.family_name.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"fpf.family_name.errors && fpf.family_name.errors.pattern && (fpf.family_name.touched || fpf.family_name.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.validation-company-name' | translate }}</label>\n        </div>\n        <div class=\"form-group col-md-6 mb-1\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.email' | translate }}</label>\n          <input type=\"email\" class=\"form-control\" [placeholder]=\"'CONTENT.email' | translate\" formControlName=\"email\"\n            oninput=\"setCustomValidity('')\" [readonly]=\"isViewParentsData\"\n            pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)+$\"\n            [ngClass]=\"fpf.email.invalid && fpf.email.touched?'is-invalid':(fpf.email.valid?'is-valid':'')\">\n          <label *ngIf=\"fpf.email.errors && fpf.email.errors.pattern && (fpf.email.touched || fpf.email.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.email-match' | translate }}</label>\n        </div>\n        <div class=\"form-group col-md-6 mb-1\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.phone_number' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.phone_number' | translate\"\n            formControlName=\"mobile_phone_number\" minlength=\"10\" maxlength=\"15\" [readonly]=\"isViewParentsData\"\n            [ngClass]=\"fpf.mobile_phone_number.invalid && fpf.mobile_phone_number.touched?'is-invalid':(fpf.mobile_phone_number.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"fpf.mobile_phone_number.errors && fpf.mobile_phone_number.errors.pattern && (fpf.mobile_phone_number.touched || fpf.mobile_phone_number.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate }}</label>\n          <label\n            *ngIf=\"fpf.mobile_phone_number.errors && fpf.mobile_phone_number.errors.required && (fpf.mobile_phone_number.touched || fpf.mobile_phone_number.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"fpf.mobile_phone_number.errors && fpf.mobile_phone_number.errors.minlength && (fpf.mobile_phone_number.touched || fpf.mobile_phone_number.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.min-length-phone-parents' | translate }}</label>\n        </div>\n        <div class=\"form-group col-md-6 mb-1\">\n          <label class=\"form-label m-b-1 f-w-600\">{{ 'CONTENT.birth_place' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select [placeholder]=\"'CONTENT.city'|translate\" required formControlName=\"birth_place\"\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" name=\"birth-place\" [(ngModel)]=\"birthPlace\"\n            [options]=\"listCityAll\" [ngClass]=\"!birthPlace?'filter-dropdown is-invalid':(birthPlace?'filter-dropdown is-valid':'filter-dropdown')\"\n            [disabled]=\"isViewParentsData\">\n          </ng-select>\n          <label *ngIf=\"!birthPlace\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n        <div class=\"form-group col-md-6 mb-1\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.birthdate' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"date\" class=\"form-control\" [placeholder]=\"'CONTENT.birthdate' | translate\"\n            formControlName=\"birth_date\" max=\"9999-12-31\" [readonly]=\"isViewParentsData\"\n            [ngClass]=\"fpf.birth_date.invalid && fpf.birth_date.touched?'is-invalid':(fpf.birth_date.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"fpf.birth_date.errors && fpf.birth_date.errors.required && (fpf.birth_date.touched || fpf.birth_date.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group col-md-6 mb-1\">\n          <label class=\"form-label m-b-1 f-w-600\">{{ 'CONTENT.last_education' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select [placeholder]=\"'CONTENT.last_education'|translate\" required formControlName=\"education_degree_id\"\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" name=\"educationDegree\" [(ngModel)]=\"educationDegree\"\n            [ngClass]=\"!educationDegree?'filter-dropdown is-invalid':(educationDegree?'filter-dropdown is-valid':'filter-dropdown')\"\n            [options]=\"listEducationDegree\" [disabled]=\"isViewParentsData\"></ng-select>\n          <label *ngIf=\"!educationDegree\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n        <div class=\"form-group col-md-6 mb-1\">\n          <label class=\"form-label m-b-1 f-w-600\">{{ 'CONTENT.work_type' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select [placeholder]=\"'CONTENT.work_type' |translate\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            formControlName=\"work_type_id\" [(ngModel)]=\"workType\" [options]=\"listWorkType\"\n            [disabled]=\"isViewParentsData\"\n            [ngClass]=\"!workType?'filter-dropdown is-invalid':(workType?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!workType\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n      </div>\n      <div\n        *ngIf=\"workType == '1' || workType == '2' || workType == '3' || workType == '4'|| workType == '5'|| workType == '6'|| workType == '8'|| workType == '9'|| workType == '11'\"\n        class=\"row mt-2\">\n        <div class=\"form-group col-md-6 mb-1\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.company' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.company' | translate\"\n            formControlName=\"company_name\" maxlength=\"50\" [readonly]=\"isViewParentsData\"\n            [ngClass]=\"fpf.company_name.invalid && fpf.company_name.touched?'is-invalid':(fpf.company_name.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"fpf.company_name.errors && fpf.company_name.errors.pattern && (fpf.company_name.touched || fpf.company_name.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.validation-company-name' | translate\n            }}</label>\n        </div>\n        <div class=\"form-group col-md-6 mb-1\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.position' | translate }}</label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.position' | translate\"\n            formControlName=\"work_position\" maxlength=\"50\" [readonly]=\"isViewParentsData\"\n            [ngClass]=\"fpf.work_position.invalid && fpf.work_position.touched?'is-invalid':(fpf.work_position.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"fpf.work_position.errors && fpf.work_position.errors.pattern && (fpf.work_position.touched || fpf.work_position.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.validation-company-name' | translate\n            }}</label>\n        </div>\n        <div class=\"form-group col-md-6 mb-1\">\n          <label class=\"form-label m-b-1 f-w-600\">{{ 'CONTENT.work_field' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select [placeholder]=\"'CONTENT.work_field'|translate\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            formControlName=\"work_field_id\" [(ngModel)]=\"workField\" [options]=\"listWorkField\"\n            [disabled]=\"isViewParentsData\"\n            [ngClass]=\"!workField?'filter-dropdown is-invalid':(workField?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!workField\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n        <div class=\"form-group col-md-6 mb-1\">\n          <label class=\"form-label m-b-1 f-w-600\">{{ 'CONTENT.income_range' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select [placeholder]=\"'CONTENT.income_range'|translate\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\"\n            formControlName=\"work_income_range_id\" [(ngModel)]=\"incomeRange\" [options]=\"listIncomeRange\"\n            [disabled]=\"isViewParentsData\"\n            [ngClass]=\"!incomeRange?'filter-dropdown is-invalid':(incomeRange?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!incomeRange\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group mb-0 mt-4 text-right col-12\">\n          <button type=\"button\" (click)=\"modalParentsClose()\" [disabled]=\"this.loadingParents\"\n            class=\"btn btn-secondary btn-sm\">\n            <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n          </button>\n          <button *ngIf=\"!isViewParentsData\" type=\"submit\" class=\"btn btn-success btn-sm m-1\"\n            (click)=\"createParentsData()\" [disabled]=\"parentsDataForm.invalid || this.loadingParents\">\n            <span *ngIf=\"this.loadingParents\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loadingParents\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loadingParents\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n                class=\"icofont icofont-location-arrow\"></i></span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</app-ui-modal>\n\n<!-- Forms Modal works story-->\n<app-ui-modal #modalWorkStory dialogClass=\"modal-dialog-centered modal-lg\" [containerClick]=\"false\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{\n      this.isViewWorkHistory === true\n      ? (\"ROOT.detail\" | translate)\n      : (\"ROOT.add\" | translate)\n      }} {{'CONTENT.work_data' | translate}}\n    </h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"modalWorkStoryClose()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"workHistoryDataForm\"\n      (ngSubmit)=\"createWorkHistoryData();\">\n      <div class=\"row\">\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-1 f-w-600\">{{ 'CONTENT.work_type' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select [placeholder]=\"'CONTENT.work_type' |translate\" required formControlName=\"work_type_id\"\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"workType\" [options]=\"listWorkType\"\n            [ngClass]=\"!workType?'filter-dropdown is-invalid':(workType?'filter-dropdown is-valid':'filter-dropdown')\"\n            [disabled]=\"isViewWorkHistory\">\n          </ng-select>\n          <label *ngIf=\"!workType\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-1 f-w-600\">{{ 'CONTENT.company-field' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select [placeholder]=\"'CONTENT.company-field' |translate\" required formControlName=\"work_field_id\"\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"workField\" [options]=\"listWorkField\"\n            [disabled]=\"isViewWorkHistory\"\n            [ngClass]=\"!workField?'filter-dropdown is-invalid':(workField?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!workField\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.company_name'| translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.company_name'|translate\" required\n            [readonly]=\"isViewWorkHistory\" maxlength=\"100\" formControlName=\"company_name\"\n            [ngClass]=\"fwh.company_name.invalid && fwh.company_name.touched?'is-invalid':(fwh.company_name.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"fwh.company_name.errors && fwh.company_name.errors.required && (fwh.company_name.touched || fwh.company_name.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"fwh.company_name.errors && fwh.company_name.errors.maxlength && (fwh.company_name.touched || fwh.company_name.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.validation-company-name' | translate\n            }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.position' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" [placeholder]=\"'CONTENT.position' | translate\" required\n            [readonly]=\"isViewWorkHistory\" formControlName=\"work_position\" maxlength=\"100\"\n            [ngClass]=\"fwh.work_position.invalid && fwh.work_position.touched?'is-invalid':(fwh.work_position.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"fwh.work_position.errors && fwh.work_position.errors.required && (fwh.work_position.touched || fwh.work_position.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"fwh.work_position.errors && fwh.work_position.errors.maxlength && (fwh.work_position.touched || fwh.work_position.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.validation-company-name' | translate\n            }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-1 f-w-600\">{{ 'CONTENT.income_range' | translate }} <span\n              class=\"required\">*</span></label>\n          <ng-select [placeholder]=\"'CONTENT.income_range' |translate\" required formControlName=\"work_income_range_id\"\n            [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"incomeRange\" [options]=\"listIncomeRange\"\n            [disabled]=\"isViewWorkHistory\"\n            [ngClass]=\"!incomeRange?'filter-dropdown is-invalid':(incomeRange?'filter-dropdown is-valid':'filter-dropdown')\">\n          </ng-select>\n          <label *ngIf=\"!incomeRange\" class=\"error text-danger small form-text\">{{ 'ROOT.required' |\n            translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.start-date' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"date\" class=\"form-control\" [placeholder]=\"'ROOT.choose_start_date' | translate\" required\n            [readonly]=\"isViewWorkHistory\" formControlName=\"work_start_date\" max=\"9999-12-31\"\n            [ngClass]=\"fwh.work_start_date.invalid && fwh.work_start_date.touched?'is-invalid':(fwh.work_start_date.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"fwh.work_start_date.errors && fwh.work_start_date.errors.required && (fwh.work_start_date.touched || fwh.work_start_date.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-6\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.end-date' | translate }}</label>\n          <input type=\"date\" class=\"form-control\" [placeholder]=\"'ROOT.choose_end_date' | translate\"\n            [readonly]=\"isViewWorkHistory\" formControlName=\"work_end_date\" max=\"9999-12-31\"\n            [ngClass]=\"fwh.work_end_date.invalid && fwh.work_end_date.touched?'is-invalid':(fwh.work_end_date.valid?'is-valid':'')\">\n          <label id=\"validation-email-error\" class=\"error jquery-validation-error small form-text invalid-feedback\">{{\n            'CONTENT.please-input' |\n            translate }}{{ 'CONTENT.end-date' | translate }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.company-phone' | translate }} <span\n              class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" required [placeholder]=\"'CONTENT.company-phone' | translate\"\n            [readonly]=\"isViewWorkHistory\" formControlName=\"company_phone_number\" maxlength=\"15\"\n            [ngClass]=\"fwh.company_phone_number.invalid && fwh.company_phone_number.touched?'is-invalid':(fwh.company_phone_number.valid?'is-valid':'')\">\n          <label\n            *ngIf=\"fwh.company_phone_number.errors && fwh.company_phone_number.errors.required && (fwh.company_phone_number.touched || fwh.company_phone_number.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"fwh.company_phone_number.errors && fwh.company_phone_number.errors.maxlength && (fwh.company_phone_number.touched || fwh.company_phone_number.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.validation-company-number' | translate\n            }}</label>\n          <label\n            *ngIf=\"fwh.company_phone_number.errors && fwh.company_phone_number.errors.pattern && (fwh.company_phone_number.touched || fwh.company_phone_number.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.number-only' | translate\n            }}</label>\n        </div>\n        <div class=\"form-group mb-2 col-md-12\">\n          <label class=\"form-label m-b-1 f-w-600\">{{ 'CONTENT.company-address' | translate }} <span\n              class=\"required\">*</span></label>\n          <textarea class=\"form-control\" formControlName=\"company_address\" maxlength=\"150\" required\n            [ngClass]=\"fwh.company_address.invalid && fwh.company_address.touched?'is-invalid':(fwh.company_address.valid?'is-valid':'')\"\n            [readonly]=\"isViewWorkHistory\">\n            </textarea>\n          <label\n            *ngIf=\"fwh.company_address.errors && fwh.company_address.errors.required && (fwh.company_address.touched || fwh.company_address.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'ROOT.required' | translate }}</label>\n          <label\n            *ngIf=\"fwh.company_address.errors && fwh.company_address.errors.maxlength && (fwh.company_address.touched || fwh.company_address.dirty)\"\n            class=\"error text-danger small form-text\">{{ 'CONTENT.validation-company-address' | translate\n            }}</label>\n          </div>\n      </div>\n      <div class=\"row\">\n      <div class=\"mb-0 text-right col-12\">\n        <button type=\"button\" (click)=\"modalWorkStoryClose()\" [disabled]=\"this.loadingWork\"\n          class=\"btn btn-secondary btn-sm\">\n          <i class=\"icofont icofont-close\"></i> {{ 'ROOT.close' | translate }}\n        </button>\n        <button *ngIf=\"!isViewWorkHistory\" type=\"submit\" class=\"btn btn-success btn-sm m-1\"\n          [disabled]=\"workHistoryDataForm.invalid || this.loadingWork\">\n          <span *ngIf=\"this.loadingWork\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.loadingWork\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.loadingWork\" class=\"btn-text\">{{ 'ROOT.submit' | translate }} <i\n              class=\"icofont icofont-location-arrow\"></i></span>\n        </button>\n      </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"app-modal-footer\"></div>\n</app-ui-modal>\n\n<app-ui-modal #modalPreview [containerClick]=\"false\" [dialogClass]=\"'modal-md'\" [hideFooter]=\"false\"\n  [loading]=\"loadingSaveGambar\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">{{'CONTENT.preview-image' | translate}}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"modalPreview.hide();\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"row pb-3\">\n      <div class=\"col-12 text-center\">\n        <img id=\"photo\" [src]=\"previewPhoto\" alt=\"user image\" class=\"img-radius align-top m-r-15 wid-40 img-cover-fit\"\n          style=\"width:150px; height:150px; margin-left:15px; margin-right:15px;\">\n      </div>\n    </div>\n    <app-alert type=\"info\" [hidden]=\"notHavePhoto\">\n      <div class=\"col-sm-12 text-center\">\n        <p><b>{{'CONTENT.provision' |translate}}</b> <br>{{ 'CONTENT.photo-info-2' | translate }}<br>{{\n          'CONTENT.photo-info-3' | translate }}.<br>{{ 'CONTENT.photo-info-4' | translate }}. <br><br><i>{{\n            'CONTENT.photo-info-5' | translate }}</i></p>\n      </div>\n    </app-alert>\n    <div class=\"row align-items-center\">\n      <div class=\"col-12 text-center\">\n        <button class=\"btn btn-success btn-sm btn-round has-ripple\" (click)=\"saveImg()\">\n          {{'ROOT.save' | translate}}\n        </button>\n      </div>\n    </div>\n  </div>\n</app-ui-modal>\n");

/***/ }),

/***/ "./src/app/theme/student-profile/student-profile-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/student-profile/student-profile-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: StudentProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentProfileRoutingModule", function() { return StudentProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-profile.component */ "./src/app/theme/student-profile/student-profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _student_profile_component__WEBPACK_IMPORTED_MODULE_2__["StudentProfileComponent"]
    },
];
let StudentProfileRoutingModule = class StudentProfileRoutingModule {
};
StudentProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], StudentProfileRoutingModule);



/***/ }),

/***/ "./src/app/theme/student-profile/student-profile.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/theme/student-profile/student-profile.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=text] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=number] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=email] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ninput[type=date] {\n  width: 100%;\n  padding: 5px 5px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ntextarea {\n  width: 100%;\n  height: 70px;\n  padding: 5px 5px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: transparent;\n  font-size: 13px;\n  color: grey;\n  resize: none;\n}\n\n.required {\n  color: red;\n}\n\ntd {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n.center-table {\n  text-align: center;\n}\n\n.pointer-clicked {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRG9jdW1lbnRzL2FkbS10cmlzYWt0aS9zcmMvYXBwL3RoZW1lL3N0dWRlbnQtcHJvZmlsZS9zdHVkZW50LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL3N0dWRlbnQtcHJvZmlsZS9zdHVkZW50LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBREFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNJRjs7QURGQTtFQUNDLGtCQUFBO0FDS0Q7O0FERkE7RUFDRSxlQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zdHVkZW50LXByb2ZpbGUvc3R1ZGVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaW5wdXRbdHlwZT1lbWFpbF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5pbnB1dFt0eXBlPWRhdGVdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6Z3JleTtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ucmVxdWlyZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG50ZHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbnRoe1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmNlbnRlci10YWJsZXtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb2ludGVyLWNsaWNrZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiIsImlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1lbWFpbF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JleTtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ucmVxdWlyZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG50ZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG50aCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uY2VudGVyLXRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9pbnRlci1jbGlja2VkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/theme/student-profile/student-profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/student-profile/student-profile.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentProfileComponent", function() { return StudentProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_oauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_services/oauth.service */ "./src/app/_services/oauth.service.ts");
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
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-archwizard/dist */ "./node_modules/ng2-archwizard/dist/index.js");

















let StudentProfileComponent = class StudentProfileComponent {
    constructor(translateService, broadcasterService, userService, chartService, oauthService, route, fb, datePipe, router) {
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.userService = userService;
        this.chartService = chartService;
        this.oauthService = oauthService;
        this.route = route;
        this.fb = fb;
        this.datePipe = datePipe;
        this.router = router;
        this.myDate = new Date();
        this.maskDateSlash = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.formData = new FormData();
        this.formData1 = new FormData();
        this.payloadRegistration = new FormData();
        this.payloadUpdateParent = new FormData();
        this.dtOptions = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dtTrigger3 = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null);
        this.getYear = new Date();
        this.registrationParticipantDataForm = this.fb.group({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(`^[a-zA-Z' ]*$`)])),
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            country_birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            province_birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            province_birth_other: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            city_birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            city_birth_other: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
            nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            country_origin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            NIK: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
            nis: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
            address_country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            address_province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            address_city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            address_district: [''],
            address_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])),
            zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
            house_phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]),
            mobile_phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            color_blind: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            special_needs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            special_needs_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            passport_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            passport_expiry_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
        });
        this.educationHistoryDataForm = this.fb.group({
            education_degree_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            education_major_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            city_edu: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            school_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            school_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            major_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
            graduate_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            student_foreign: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
        });
        this.parentsDataForm = this.fb.group({
            relationship_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            family_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(50)])),
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)],
            mobile_phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')])),
            work_field_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            work_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            work_income_range_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            birth_place: [''],
            birth_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            education_degree_id: [''],
            work_position: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(50)])),
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(50)])),
        });
        this.workHistoryDataForm = this.fb.group({
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)])),
            work_field_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            work_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            work_income_range_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            work_position: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)])),
            work_start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            work_end_date: [''],
            company_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])),
            company_phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
        });
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
        this.edit = 'input';
        this.photoData = [];
        this.errSize = false;
        this.errType = false;
        this.isReload = false;
        this.loadingCity = false;
        this.loading = false;
        this.loadingParents = false;
        this.loadingEdu = false;
        this.loadingWork = false;
        this.loadingSaveGambar = false;
        this.loadDataDiri = false;
        this.educationDegree = '0';
        this.familyRelationshipParent = '0';
        this.familyRelationshipSibling = '0';
        this.workField = '0';
        this.workType = '0';
        this.incomeRange = '0';
        this.submitted = false;
        this.isEducationDataEmpty = false;
        this.isIndonesiaCountry = false;
        this.loadEducationModal = false;
        this.submitloader = false;
        this.hiddenAddressDetail = true;
        this.hiddenInstitutionandMajor = false;
        this.hiddenMajor = false;
        this.showSpecialNeeds = false;
        this.isIndonesianNationality = false;
        this.isIndonesiaBirthCountry = false;
        this.isViewParentsData = false;
        this.isViewWorkHistory = false;
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
        this.foreignStudentList = [
            {
                value: '1',
                label: 'Ya'
            },
            {
                value: '0',
                label: 'Tidak'
            }
        ];
    }
    get f() {
        return this.registrationParticipantDataForm.controls;
    }
    get fpf() {
        return this.parentsDataForm.controls;
    }
    get fwh() {
        return this.workHistoryDataForm.controls;
    }
    ngOnInit() {
        this.formatMyDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(this.myDate, 'yyyy', 'en-US');
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        this.emailUser = this.userProfile.email;
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
            order: [[0, 'asc']],
            initComplete: () => { }
        };
        this.dtOptions[1] = {
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
            initComplete: () => { }
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
            initComplete: () => { }
        };
        this.dtOptions[3] = {
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
            initComplete: () => { }
        };
        this.dtOptions[4] = {
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
            initComplete: () => { }
        };
        this.loadDetailParticipantData();
        //filtering (dropdown select)
        this.loadGenderDataFilter();
        this.loadReligionDataFilter();
        this.loadNationalityDataFilter();
        this.loadCountryDataFilter();
        this.loadCountryBirthDataFilter();
        this.loadEducationDegreeDataFilter();
        this.loadEducationMajorDataFilter();
        this.loadFamilyRelationshipParentDataFilter();
        this.loadWorkFieldDataFilter();
        this.loadWorkTypeDataFilter();
        this.loadIncomeRangeDataFilter();
        this.getListCity();
        //table
        this.loadEducationHistoryData();
        this.loadParentsData();
        this.loadWorkHistory();
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
    loadDelete() {
        this.broadcasterService.notifBroadcast(true, {
            title: 'Success',
            msg: 'Data telah terhapus',
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
            case 'gender':
                this.gender = '0';
                break;
            case 'religion':
                this.religion = '0';
                break;
            case 'nationality':
                this.nationality = '0';
                break;
            case 'country':
                this.country = '0';
                break;
            case 'countryBirth':
                this.countryBirth = '0';
                break;
            case 'province':
                this.province = '0';
                break;
            case 'provinceBirth':
                this.provinceBirth = '0';
                break;
            case 'city':
                this.city = '0';
                break;
            case 'cityBirth':
                this.cityBirth = '0';
                break;
            case 'marriageStatus':
                this.marriageStatus = '0';
                break;
            case 'educationDegree':
                this.educationDegree = '0';
                break;
            case 'educationMajor':
                this.educationMajor = '0';
                break;
            case 'educationYears':
                this.educationYears = '0';
                break;
            case 'familyRelationshipParent':
                this.familyRelationshipParent = '0';
                break;
            case 'familyRelationshipSibling':
                this.familyRelationshipSibling = '0';
                break;
            case 'workField':
                this.workField = '0';
                break;
            case 'workType':
                this.workType = '0';
                break;
            case 'incomeRange':
                this.incomeRange = '0';
                break;
        }
    }
    loadDetailParticipantData() {
        this.mode('edit');
        this.loadDataDiri = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.userData = res;
                this.photoData = res;
                this.photoCheck = res.photo_url;
                if (this.photoCheck == null || this.photoCheck == '') {
                    this.photoFlag = 0;
                    this.notHavePhoto = true;
                }
                else if (this.photoCheck != null || this.photoCheck != '') {
                    this.photoFlag = 1;
                    this.notHavePhoto = false;
                }
                this.loadDataDiri = false;
                const changeBirthDateFormat = res.birth_date && moment_moment__WEBPACK_IMPORTED_MODULE_13__(res.birth_date).format('YYYY-MM-DD');
                this.registrationParticipantDataForm.patchValue({ fullname: res.fullname });
                this.registrationParticipantDataForm.patchValue({ birthdate: changeBirthDateFormat });
                this.registrationParticipantDataForm.patchValue({ NIK: res.identify_number });
                this.registrationParticipantDataForm.patchValue({ nis: res.nis });
                this.registrationParticipantDataForm.patchValue({ passport_number: res.passport_number });
                this.registrationParticipantDataForm.patchValue({ address_detail: res.address_detail });
                if (res.house_phone_number == 'null') {
                    this.registrationParticipantDataForm.patchValue({ house_phone_number: '' });
                }
                else {
                    this.registrationParticipantDataForm.patchValue({ house_phone_number: res.house_phone_number });
                }
                this.registrationParticipantDataForm.patchValue({ mobile_phone_number: res.mobile_phone_number });
                this.registrationParticipantDataForm.patchValue({ email: res.username });
                this.colorBlind = res.color_blind;
                if (res.passport_expiry_date == ' - ') {
                    this.registrationParticipantDataForm.patchValue({ passport_expiry_date: '' });
                }
                else {
                    const changePassportFormat = res.passport_expiry_date && moment_moment__WEBPACK_IMPORTED_MODULE_13__(res.passport_expiry_date).format('YYYY-MM-DD');
                    this.registrationParticipantDataForm.patchValue({ passport_expiry_date: changePassportFormat });
                }
                if (res.gender == null) {
                    this.registrationParticipantDataForm.patchValue({ gender: '0' });
                }
                else {
                    this.registrationParticipantDataForm.patchValue({ gender: res.gender && res.gender.toString() });
                }
                if (res.religion == null) {
                    this.registrationParticipantDataForm.patchValue({ religion: '0' });
                }
                else {
                    this.registrationParticipantDataForm.patchValue({ religion: res.religion && res.religion.toString() });
                }
                if (res.birth_country == null) {
                    this.registrationParticipantDataForm.patchValue({ country_birth: '0' });
                }
                else {
                    this.registrationParticipantDataForm.patchValue({ country_birth: res.birth_country && res.birth_country.toString() });
                }
                if (res.birth_province == null) {
                    this.registrationParticipantDataForm.patchValue({ province_birth: '0' });
                    this.registrationParticipantDataForm.patchValue({ province_birth_other: res.birth_province_name });
                    this.provinceBirth = '';
                }
                else {
                    this.registrationParticipantDataForm.patchValue({ province_birth: res.birth_province && res.birth_province.toString() });
                    this.provinceBirth = res.birth_province && res.birth_province.toString();
                    this.registrationParticipantDataForm.patchValue({ province_birth_other: '' });
                }
                if (res.birth_city == null) {
                    this.registrationParticipantDataForm.patchValue({ city_birth: '0' });
                    this.registrationParticipantDataForm.patchValue({ city_birth_other: res.birth_city_name });
                    this.cityBirth = '';
                }
                else {
                    this.registrationParticipantDataForm.patchValue({ city_birth: res.birth_city && res.birth_city.toString() });
                    this.cityBirth = res.birth_city && res.birth_city.toString();
                    this.registrationParticipantDataForm.patchValue({ city_birth_other: '' });
                }
                if (res.nationality == null) {
                    this.registrationParticipantDataForm.patchValue({ nationality: '0' });
                }
                else {
                    this.registrationParticipantDataForm.patchValue({ nationality: res.nationality && res.nationality.toString() });
                }
                if (res.origin_country == null) {
                    this.registrationParticipantDataForm.patchValue({ country_origin: '0' });
                }
                else {
                    this.registrationParticipantDataForm.patchValue({ country_origin: res.origin_country && res.origin_country.toString() });
                }
                if (res.address_country == null) {
                    this.registrationParticipantDataForm.patchValue({ address_country: '0' });
                }
                else {
                    this.registrationParticipantDataForm.patchValue({ address_country: res.address_country && res.address_country.toString() });
                }
                if (res.special_needs !== null) {
                    this.showSpecialNeeds = true;
                    this.specialNeeds = '1';
                    this.registrationParticipantDataForm.patchValue({ special_needs_text: res.special_needs });
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
                    this.registrationParticipantDataForm.patchValue({ zipcode: res.address_postal_code });
                    this.hiddenAddressDetail = false;
                    this.isIndonesiaCountry = true;
                }
                else {
                    this.province = '';
                    this.city = '';
                    this.district = '';
                    this.registrationParticipantDataForm.patchValue({ zipcode: '' });
                    this.hiddenAddressDetail = true;
                    this.isIndonesiaCountry = false;
                    this.registrationParticipantDataForm.get('address_province').clearValidators();
                    this.registrationParticipantDataForm.get('address_province').updateValueAndValidity();
                    this.registrationParticipantDataForm.get('address_city').clearValidators();
                    this.registrationParticipantDataForm.get('address_city').updateValueAndValidity();
                    this.registrationParticipantDataForm.get('zipcode').clearValidators();
                    this.registrationParticipantDataForm.get('zipcode').updateValueAndValidity();
                }
            });
        }
    }
    changeNationality(value) {
        if (value == 98) {
            this.isIndonesianNationality = true;
            this.registrationParticipantDataForm.get('NIK').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
            this.registrationParticipantDataForm.get('NIK').updateValueAndValidity();
            this.registrationParticipantDataForm.get('nis').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
            this.registrationParticipantDataForm.get('nis').updateValueAndValidity();
            this.registrationParticipantDataForm.get('passport_number').clearValidators();
            this.registrationParticipantDataForm.get('passport_number').updateValueAndValidity();
            this.registrationParticipantDataForm.get('passport_expiry_date').clearValidators();
            this.registrationParticipantDataForm.get('passport_expiry_date').updateValueAndValidity();
            this.registrationParticipantDataForm.get('passport_number').reset();
            this.registrationParticipantDataForm.get('passport_expiry_date').reset();
        }
        else {
            this.isIndonesianNationality = false;
            this.registrationParticipantDataForm.get('NIK').clearValidators();
            this.registrationParticipantDataForm.get('NIK').updateValueAndValidity();
            this.registrationParticipantDataForm.get('nis').clearValidators();
            this.registrationParticipantDataForm.get('nis').updateValueAndValidity();
            this.registrationParticipantDataForm.get('passport_number').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$')]));
            this.registrationParticipantDataForm.get('passport_number').updateValueAndValidity();
            this.registrationParticipantDataForm.get('passport_expiry_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.registrationParticipantDataForm.get('passport_expiry_date').updateValueAndValidity();
            this.registrationParticipantDataForm.get('NIK').reset();
            this.registrationParticipantDataForm.get('nis').reset();
        }
    }
    changeSpecialNeeds(value) {
        if (value == 1) {
            this.showSpecialNeeds = true;
            this.registrationParticipantDataForm.get('special_needs_text').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.registrationParticipantDataForm.get('special_needs_text').updateValueAndValidity();
        }
        else {
            this.showSpecialNeeds = false;
            this.registrationParticipantDataForm.patchValue({ special_needs_text: '' });
            this.registrationParticipantDataForm.get('special_needs_text').clearValidators();
            this.registrationParticipantDataForm.get('special_needs_text').updateValueAndValidity();
        }
    }
    createParticipantData() {
        this.loadingParticipantDetail = true;
        this.submitloader = true;
        this.submitted = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.registrationParticipantDataForm.valid) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.participantId = res.participant_id;
                this.email = res.username;
                const { address_city, address_country, address_detail, address_district, zipcode, address_province, city_birth, city_birth_other, country_birth, birthdate, province_birth, province_birth_other, fullname, gender, house_phone_number, identify_number, mobile_phone_number, nationality, country_origin, religion, email, NIK, passport_expiry_date, passport_number, special_needs_text, nis } = this.registrationParticipantDataForm.value;
                this.dateTransform = birthdate.split("-").reverse().join("-");
                let payload = {
                    id: this.participantId,
                    address_city: address_city,
                    address_country: address_country,
                    address_detail: address_detail,
                    address_disctrict: address_district,
                    address_postal_code: zipcode,
                    address_province: address_province,
                    birth_city: city_birth,
                    birth_city_foreign: city_birth_other,
                    birth_country: country_birth,
                    birth_date: this.dateTransform,
                    birth_province: province_birth,
                    birth_province_foreign: province_birth_other,
                    fullname: fullname,
                    gender: gender,
                    house_phone_number: house_phone_number,
                    marriage_status: 0,
                    mobile_phone_number: mobile_phone_number,
                    nationality: nationality,
                    origin_country: country_origin,
                    passport_number: passport_number ? passport_number : '0',
                    religion: religion,
                    username: email,
                    passport_expiry_date: passport_expiry_date,
                    identify_number: NIK ? NIK : '0',
                    color_blind: this.colorBlind,
                    special_needs: this.specialNeeds == '1' ? special_needs_text : '',
                    nis: nis,
                };
                this.userService.postParticipantDetailData(payload).subscribe(res => {
                    if (res.status === 'Success') {
                        this.wizard.navigation.goToStep(1);
                        this.broadcasterService.notifBroadcast(true, {
                            title: res.status,
                            msg: res.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'success'
                        });
                        this.submitloader = false;
                        this.loadingParticipantDetail = false;
                        this.loadDataDiri = false;
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
                        this.submitloader = false;
                        this.loadingParticipantDetail = false;
                        this.loadDataDiri = false;
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
                    this.submitloader = false;
                    this.loadDataDiri = false;
                    this.loadingParticipantDetail = false;
                });
            });
        }
    }
    uploadParticipantData(event) {
        this.errSize = false;
        this.errType = false;
        const elem = event.target;
        const files = elem.files[0].name;
        const fileType = files.substr(files.lastIndexOf('.') + 1);
        const size = elem.files[0].size;
        if (elem.files.length > 0) {
            if (fileType == 'JPG' || fileType == 'jpg' || fileType == 'jpeg' ||
                fileType == 'png' || fileType == 'PNG' || fileType == 'JPEG') {
                if (size < 2000000) {
                    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
                    this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                        this.participantId = res.participant_id;
                        this.email = res.username;
                        // foto baru rolin komen buat cek update data
                        // this.formData1.append('photo_url', elem.files[0]);
                    });
                }
                else {
                    this.errSize = true;
                    // this.registrationParticipantDataForm.get('photo_url').patchValue('');
                }
            }
            else {
                this.errType = true;
                // this.registrationParticipantDataForm.get('photo_url').patchValue('');
            }
        }
    }
    loadGenderDataFilter() {
        this.loadingParticipantDetail = true;
        this.chartService.getGender().subscribe((filterArray) => {
            const dataGender = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].gender
                };
                dataGender.push(x);
                this.listGender = dataGender;
            }
            this.loadingParticipantDetail = false;
        }, err => {
            this.loadError();
            this.loadingParticipantDetail = false;
        });
    }
    loadReligionDataFilter() {
        this.loadingParticipantDetail = true;
        this.userService.getReligionData().subscribe((filterArray) => {
            const dataReligion = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].religion
                };
                dataReligion.push(x);
                this.listReligion = dataReligion;
            }
            this.loadingParticipantDetail = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    loadNationalityDataFilter() {
        this.loadingParticipantDetail = true;
        this.chartService.getNationalityData().subscribe((filterArray) => {
            const dataNationality = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].nationality
                };
                dataNationality.push(x);
                this.listNationality = dataNationality;
            }
            this.loadingParticipantDetail = false;
        }, err => {
            this.loadError();
            this.loadingParticipantDetail = false;
        });
    }
    loadCountryDataFilter() {
        this.loadingParticipantDetail = true;
        this.userService.getCountryData().subscribe((filterArray) => {
            const dataCountry = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].detail_name
                };
                dataCountry.push(x);
                this.listCountry = dataCountry;
            }
            this.loadingParticipantDetail = false;
        }, err => {
            this.loadError();
            this.loadingParticipantDetail = false;
        });
    }
    loadCountryBirthDataFilter() {
        this.loadingParticipantDetail = true;
        this.userService.getCountryData().subscribe((filterArray) => {
            const dataCountry = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].detail_name
                };
                dataCountry.push(x);
                this.listCountryBirth = dataCountry;
            }
            this.loadingParticipantDetail = false;
        }, err => {
            this.loadError();
            this.loadingParticipantDetail = false;
        });
    }
    changeCountryDataforProvince(evnt) {
        this.country = evnt.value;
        this.loadingParticipantDetail = true;
        if (evnt.value != '1') {
            this.hiddenAddressDetail = true;
            this.isIndonesiaCountry = false;
            this.registrationParticipantDataForm.get('address_province').clearValidators();
            this.registrationParticipantDataForm.get('address_province').updateValueAndValidity();
            this.registrationParticipantDataForm.get('address_city').clearValidators();
            this.registrationParticipantDataForm.get('address_city').updateValueAndValidity();
            this.registrationParticipantDataForm.get('zipcode').clearValidators();
            this.registrationParticipantDataForm.get('zipcode').updateValueAndValidity();
        }
        else {
            this.hiddenAddressDetail = false;
            this.isIndonesiaCountry = true;
            this.registrationParticipantDataForm.get('address_province').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.registrationParticipantDataForm.get('address_province').updateValueAndValidity();
            this.registrationParticipantDataForm.get('address_city').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.registrationParticipantDataForm.get('address_city').updateValueAndValidity();
            this.registrationParticipantDataForm.get('zipcode').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]));
            this.registrationParticipantDataForm.get('zipcode').updateValueAndValidity();
            this.userService.getProvinceData(`?country_id=${this.country}`).subscribe((filterArray) => {
                const dataProvince = [];
                let x;
                for (let i = 0; i < filterArray.length; i++) {
                    x = {
                        value: filterArray[i].id.toString(),
                        label: filterArray[i].detail_name
                    };
                    dataProvince.push(x);
                    this.listProvince = dataProvince;
                }
                this.loadingParticipantDetail = false;
            }, err => {
                this.loadError();
                this.loadingParticipantDetail = false;
            });
        }
    }
    changeProvinceDataforCity(event) {
        this.province = event.value;
        this.loadingParticipantDetail = true;
        if (this.province != undefined) {
            this.chartService.getCityData(`?province_id=${this.province}`).subscribe((filterArray) => {
                const dataCity = [];
                let x;
                for (let i = 0; i < filterArray.length; i++) {
                    x = {
                        value: filterArray[i].id.toString(),
                        label: filterArray[i].city
                    };
                    dataCity.push(x);
                    this.listCity = dataCity;
                }
                this.loadingParticipantDetail = false;
            }, err => {
                this.loadError();
                this.loadingParticipantDetail = false;
            });
        }
        else {
            this.listCity = [];
            this.loadingParticipantDetail = false;
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
    getYearlist() {
        this.formatMyDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(this.myDate, 'yyyy', 'en-US');
        const year = new Date();
        const maxYear = year.getFullYear() + 1;
        const minYear = year.getFullYear() - 21;
        const listYear = [];
        let x;
        for (let i = maxYear; i >= minYear; i--) {
            x = {
                value: i.toString(),
                label: i
            };
            listYear.push(x);
            this.listYears = listYear;
        }
    }
    getYearlistHighSchool() {
        this.formatMyDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(this.myDate, 'yyyy', 'en-US');
        const year = new Date();
        const maxYear = year.getFullYear() + 1;
        const minYear = year.getFullYear() - 7;
        const listYear = [];
        let x;
        for (let i = maxYear; i >= minYear; i--) {
            x = {
                value: i.toString(),
                label: i
            };
            listYear.push(x);
            this.listYears = listYear;
        }
    }
    getYearListPascasarjana() {
        this.formatMyDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(this.myDate, 'yyyy', 'en-US');
        const year = new Date();
        const maxYear = year.getFullYear() + 1;
        const minYear = year.getFullYear() - 61;
        const listYear = [];
        let x;
        for (let i = maxYear; i >= minYear; i--) {
            x = {
                value: i.toString(),
                label: i
            };
            listYear.push(x);
            this.listYears = listYear;
        }
    }
    getListCity() {
        this.loadEducationModal = true;
        this.chartService.getCityData('').subscribe((res) => {
            this.listCityAll = res && res.map((value) => {
                const { id, city } = value;
                return { value: id.toString(), label: city };
            });
            this.loadEducationModal = false;
        }, err => {
        });
    }
    changeCityDataforDistrict(event) {
        this.district = event.value;
        this.loadingParticipantDetail = true;
        if (this.district == undefined) {
            this.listDistrict = [];
            this.loadingParticipantDetail = false;
        }
        else {
            this.userService.getDistrictData(`?city_region_id=${this.district}`).subscribe((filterArray) => {
                this.listDistrict = filterArray && filterArray.map((value) => {
                    const { id, detail_name } = value;
                    return { value: id.toString(), label: detail_name };
                });
                this.loadingParticipantDetail = false;
            }, err => {
                this.loadingParticipantDetail = false;
            });
        }
    }
    changeProvinceBirth(value) {
        this.loadingParticipantDetail = true;
        if (value !== undefined) {
            if (value == 1) {
                this.loadingParticipantDetail = false;
                this.loadProvinceBirthDataFilter();
                this.isIndonesiaBirthCountry = true;
                this.registrationParticipantDataForm.get('province_birth').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                this.registrationParticipantDataForm.get('province_birth').updateValueAndValidity();
                this.registrationParticipantDataForm.get('city_birth').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                this.registrationParticipantDataForm.get('city_birth').updateValueAndValidity();
                this.registrationParticipantDataForm.get('province_birth_other').clearValidators();
                this.registrationParticipantDataForm.get('province_birth_other').updateValueAndValidity();
                this.registrationParticipantDataForm.get('city_birth_other').clearValidators();
                this.registrationParticipantDataForm.get('city_birth_other').updateValueAndValidity();
                this.registrationParticipantDataForm.get('city_birth_other').reset();
                this.registrationParticipantDataForm.get('province_birth_other').reset();
            }
            else {
                this.loadingParticipantDetail = false;
                this.registrationParticipantDataForm.get('province_birth').clearValidators();
                this.registrationParticipantDataForm.get('province_birth').updateValueAndValidity();
                this.registrationParticipantDataForm.get('city_birth').clearValidators();
                this.registrationParticipantDataForm.get('city_birth').updateValueAndValidity();
                this.registrationParticipantDataForm.get('province_birth_other').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                this.registrationParticipantDataForm.get('province_birth_other').updateValueAndValidity();
                this.registrationParticipantDataForm.get('city_birth_other').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                this.registrationParticipantDataForm.get('city_birth_other').updateValueAndValidity();
                this.registrationParticipantDataForm.get('city_birth').reset();
                this.registrationParticipantDataForm.get('province_birth').reset();
                this.isIndonesiaBirthCountry = false;
            }
        }
    }
    loadProvinceBirthDataFilter() {
        this.loadingParticipantDetail = true;
        this.userService.getProvinceData(`?country_id=1`).subscribe((filterArray) => {
            const dataProvince = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].detail_name
                };
                dataProvince.push(x);
                this.listProvinceBirth = dataProvince;
            }
            this.loadingParticipantDetail = false;
        }, err => {
            this.loadError();
            this.loadingParticipantDetail = false;
        });
    }
    loadCityBirthDataFilter(value) {
        if (value !== undefined) {
            this.loadingParticipantDetail = true;
            this.chartService.getCityData(`?province_id=${value}`).subscribe((filterArray) => {
                const dataCity = [];
                let x;
                for (let i = 0; i < filterArray.length; i++) {
                    x = {
                        value: filterArray[i].id.toString(),
                        label: filterArray[i].city
                    };
                    dataCity.push(x);
                    this.listCityBirth = dataCity;
                }
                this.loadingParticipantDetail = false;
            }, err => {
                this.loadError();
                this.loadingParticipantDetail = false;
            });
        }
    }
    loadEducationDegreeDataFilter() {
        this.loadFilter = true;
        this.userService.getEducationDegreeData().subscribe((filterArray) => {
            const dataEducationDegree = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].level,
                    subitem: filterArray[i].type
                };
                dataEducationDegree.push(x);
                this.listEducationDegree = dataEducationDegree;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    loadEducationMajorDataFilter() {
        this.loadFilter = true;
        this.userService.getSchoolMajorData().subscribe((filterArray) => {
            const dataEducationMajor = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].major
                };
                dataEducationMajor.push(x);
                this.listEducationMajor = dataEducationMajor;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    loadFamilyRelationshipParentDataFilter() {
        this.loadFilter = true;
        this.familyRelationshipFilter = 'parent';
        this.userService.getFamilyRelationshipData(`${this.familyRelationshipFilter}`).subscribe((filterArray) => {
            const dataFamilyRelationshipParent = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].relationship
                };
                dataFamilyRelationshipParent.push(x);
                this.listFamilyRelationshipParent = dataFamilyRelationshipParent;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    loadWorkFieldDataFilter() {
        this.loadFilter = true;
        this.userService.getWorkFieldData().subscribe((filterArray) => {
            const dataWorkField = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].field
                };
                dataWorkField.push(x);
                this.listWorkField = dataWorkField;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    loadWorkTypeDataFilter() {
        this.loadFilter = true;
        this.userService.getWorkTypeData(`is_productive=1`).subscribe((filterArray) => {
            const dataWorkType = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].name
                };
                dataWorkType.push(x);
                this.listWorkType = dataWorkType;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    loadIncomeRangeDataFilter() {
        this.loadFilter = true;
        this.userService.getIncomeRangeData().subscribe((filterArray) => {
            const dataIncomeRange = [];
            let x;
            for (let i = 0; i < filterArray.length; i++) {
                x = {
                    value: filterArray[i].id.toString(),
                    label: filterArray[i].range
                };
                dataIncomeRange.push(x);
                this.listIncomeRange = dataIncomeRange;
            }
            this.loadFilter = false;
        }, err => {
            this.loadError();
            this.loadFilter = false;
        });
    }
    changeSchoolCity(val) {
        if (!val) {
            this.listSchool = [];
        }
        else {
            this.userService.getSchoolData(`city_region_id=${val}&type=${this.educationDegreeType}`).subscribe((filterArray) => {
                if (this.educationDegreeType == 'he') {
                    this.listSchool = filterArray && filterArray.map((value) => {
                        const { id, name, npsn } = value;
                        return { value: npsn.toString(), label: name, npsn: npsn };
                    });
                    this.isNpsn = true;
                }
                else {
                    this.isNpsn = false;
                    this.listSchool = filterArray && filterArray.map((value) => {
                        const { id, name, npsn } = value;
                        return { value: id.toString(), label: name, npsn: npsn };
                    });
                }
            }, err => {
                this.loadError();
            });
        }
    }
    changeTypeStudent(event) {
        if (event.value == '1') {
            this.isForeignStudent = true;
            this.educationDegreeStudent = '';
            this.cityEdu = '';
            this.educationMajor = '';
            this.school = '';
            this.educationHistoryDataForm.get('city_edu').clearValidators();
            this.educationHistoryDataForm.get('city_edu').updateValueAndValidity();
            this.educationHistoryDataForm.get('education_major_id').clearValidators();
            this.educationHistoryDataForm.get('education_major_id').updateValueAndValidity();
            this.educationHistoryDataForm.get('school_detail').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]));
            this.educationHistoryDataForm.get('school_detail').updateValueAndValidity();
            this.educationHistoryDataForm.get('major_detail').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]));
            this.educationHistoryDataForm.get('major_detail').updateValueAndValidity();
        }
        else {
            this.educationHistoryDataForm.get('school_detail').clearValidators();
            this.educationHistoryDataForm.get('school_detail').updateValueAndValidity();
            this.isForeignStudent = false;
            this.educationDegreeStudent = '';
        }
    }
    changeSchool(data) {
        this.educationDegreeType = data.subitem;
        const dataSchool = data.value;
        if (this.isForeignStudent) {
            this.hiddenInstitutionandMajor = true;
            this.hiddenMajor = true;
            this.isForeignSchool = true;
            this.isNotHighSchool = true;
            this.cityEdu = '';
            this.school = '';
            this.educationHistoryDataForm.get('city_edu').clearValidators();
            this.educationHistoryDataForm.get('city_edu').updateValueAndValidity();
            this.educationHistoryDataForm.get('education_major_id').clearValidators();
            this.educationHistoryDataForm.get('education_major_id').updateValueAndValidity();
            this.educationHistoryDataForm.get('major_detail').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.educationHistoryDataForm.get('major_detail').updateValueAndValidity();
            if (dataSchool === '7' || dataSchool === '8' || dataSchool === '9' || dataSchool === '10' || dataSchool === '11') {
                this.getYearListPascasarjana();
            }
            else {
                this.getYearlistHighSchool();
            }
        }
        else {
            if (this.educationDegreeType == 'he') {
                this.hiddenMajor = true;
                this.hiddenInstitutionandMajor = false;
                this.isNotHighSchool = true;
                this.isForeignSchool = false;
                this.cityEdu = '';
                this.school = '';
                this.educationHistoryDataForm.get('city_edu').clearValidators();
                this.educationHistoryDataForm.get('city_edu').updateValueAndValidity();
                this.educationHistoryDataForm.get('education_major_id').clearValidators();
                this.educationHistoryDataForm.get('education_major_id').updateValueAndValidity();
                this.educationHistoryDataForm.get('major_detail').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                this.educationHistoryDataForm.get('major_detail').updateValueAndValidity();
                this.educationHistoryDataForm.patchValue({ major_detail: '' });
                this.educationHistoryDataForm.patchValue({ school_detail: data.school_name });
                this.loadFilter = false;
                this.getYearListPascasarjana();
            }
            else {
                this.getYearlistHighSchool();
                this.cityEdu = '';
                this.school = '';
                this.hiddenInstitutionandMajor = false;
                this.hiddenMajor = false;
                this.isForeignSchool = false;
                this.isNotHighSchool = false;
                this.educationHistoryDataForm.get('city_edu').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                this.educationHistoryDataForm.get('city_edu').updateValueAndValidity();
                this.educationHistoryDataForm.get('education_major_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                this.educationHistoryDataForm.get('education_major_id').updateValueAndValidity();
                this.educationHistoryDataForm.get('major_detail').clearValidators();
                this.educationHistoryDataForm.get('major_detail').updateValueAndValidity();
            }
        }
    }
    loadEducationHistoryData() {
        this.loadtableEducationHistory = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userProfile.email !== undefined) {
            this.unameEmailAdmin = this.userProfile.email;
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.participantId = res.participant_id;
                this.userService.getEducationHistoryData(`${this.participantId}`).subscribe(response => {
                    this.tableData = response.data;
                    this.dtTrigger.next();
                    this.loadtableEducationHistory = false;
                    if (response.data.length === 0) {
                        this.isEducationDataEmpty = true;
                    }
                    else {
                        this.isEducationDataEmpty = false;
                    }
                }, err => {
                    this.loadError();
                    this.loadtableEducationHistory = false;
                });
            });
        }
    }
    renderEducationHistory() {
        this.dtElements.forEach((dtElement, index) => {
            if (index == 0) {
                dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            }
        });
    }
    loadViewEducationHistory(data) {
        this.mode('view');
        this.isViewEducation = true;
        this.educationHistoryDataForm.patchValue({ graduate_year: data.graduate_year });
        this.educationHistoryDataForm.patchValue({ major_detail: data.major });
        this.educationHistoryDataForm.patchValue({ school_detail: data.school_name });
        this.educationHistoryDataForm.patchValue({ city: data.city_region });
        this.educationHistoryDataForm.patchValue({ education_degree_id: data.level });
        if (data.student_foreign == false) {
            this.educationHistoryDataForm.patchValue({ student_foreign: 'Tidak' });
            this.hiddenCity = false;
        }
        else if (data.student_foreign == true) {
            this.educationHistoryDataForm.patchValue({ student_foreign: 'Ya' });
            this.hiddenCity = true;
        }
        else if (data.student_foreign == null) {
            this.educationHistoryDataForm.patchValue({ student_foreign: '-' });
        }
        this.modalViewStudent.show();
    }
    closeModalStudentView() {
        this.modalViewStudent.hide();
        this.educationHistoryDataForm.reset();
    }
    loadInputEducationHistoryData() {
        this.mode('input');
        this.isEditEducation = false;
        this.isViewEducation = false;
        this.educationDegree = '';
        this.educationMajor = '';
        this.educationYears = '';
        this.school = '';
        this.city = '';
        this.cityEdu = '';
        this.educationMajor = '';
        this.educationMajor = '';
        this.isForeign = '';
        this.educationHistoryDataForm.reset();
        this.educationHistoryDataForm.patchValue({ graduate_year: '' });
        this.modalStudent.show();
    }
    hideModalEducation() {
        this.modalStudent.hide();
        this.educationHistoryDataForm.reset();
    }
    deleteEducation(data) {
        this.educationHistoryId = data.id;
        const payload = {
            id: this.educationHistoryId
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: this.confirmation,
            text: this.confirmationText,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: "#ffba57",
            confirmButtonText: this.yes,
            cancelButtonText: this.no,
            allowOutsideClick: false
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                this.userService.deleteEducationHistoryData(payload).subscribe(res => {
                    if (res.status === 'Success') {
                        this.loading = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: res.status,
                            text: res.message,
                            type: 'success',
                            timer: 5000
                        });
                        this.renderEducationHistory();
                        this.loadEducationHistoryData();
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                            title: res.status,
                            text: res.message,
                            type: 'error',
                            timer: 5000
                        });
                        this.loading = false;
                    }
                });
            }
        });
    }
    createEducationHistoryData() {
        this.loadingEdu = true;
        if (this.edit == 'input') {
            this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
            if (this.userProfile.email !== undefined) {
                this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                    this.participantId = res.participant_id;
                });
                const data = {
                    participant_id: this.participantId,
                    education_degree_id: this.educationDegreeStudent,
                    education_major_id: this.educationMajor,
                    school_id: '',
                    npsn_he: '',
                    school: this.educationHistoryDataForm.controls['school_detail'].value,
                    education_major: this.educationHistoryDataForm.controls['major_detail'].value,
                    graduate_year: this.educationHistoryDataForm.controls['graduate_year'].value,
                    student_id: '0',
                    last_score: '0',
                    student_foreign: this.isForeign,
                    city_id: this.cityEdu
                };
                let datas = {};
                if (this.isNpsn) {
                    datas = Object.assign({}, data, { school_id: '', npsn_he: this.school });
                }
                else {
                    datas = Object.assign({}, data, { school_id: this.school, npsn_he: '' });
                }
                this.userService.postEducationHistoryData(datas).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            this.broadcasterService.notifBroadcast(true, {
                                title: res.status,
                                msg: res.message,
                                timeout: 5000,
                                theme: 'default',
                                position: 'top-right',
                                type: 'success'
                            });
                            this.hideModalEducation();
                            this.renderEducationHistory();
                            this.loadEducationHistoryData();
                            this.loadingEdu = false;
                        }
                        else {
                            this.loadError();
                            this.loadingEdu = false;
                        }
                    }
                    else {
                        this.loadError();
                        this.loadingEdu = false;
                    }
                }, (reason) => {
                    this.loadingEdu = false;
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
    }
    loadParentsData() {
        this.loadtableParentsData = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.participantId = res.participant_id;
                this.userService.getParentsData(`${this.participantId}`).subscribe(response => {
                    this.tableData1 = response.data;
                    this.dtTrigger1.next(); // Trigger for load datatable
                    this.loadtableParentsData = false;
                }, err => {
                    this.loadError();
                    this.loadtableParentsData = false;
                });
            });
        }
    }
    renderParentsData() {
        this.dtElements.forEach((dtElement, index) => {
            if (index == 1) {
                dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            }
        });
    }
    loadDetailParentsData(data) {
        this.isViewParentsData = true;
        this.parentId = data.id;
        this.workField = data.work_field_id && data.work_field_id.toString();
        this.incomeRange = data.work_income_range_id && data.work_income_range_id.toString();
        this.parentsDataForm.patchValue({ relationship_id: data.family_relationship_id && data.family_relationship_id.toString() });
        this.parentsDataForm.patchValue({ family_name: data.family_name });
        this.parentsDataForm.patchValue({ email: data.email ? data.email : '' });
        this.parentsDataForm.patchValue({ mobile_phone_number: data.mobile_phone_number });
        this.parentsDataForm.patchValue({ work_field_id: data.work_field_id && data.work_field_id.toString() });
        this.parentsDataForm.patchValue({ work_type_id: data.work_type_id && data.work_type_id.toString() });
        this.parentsDataForm.patchValue({ work_income_range_id: data.work_income_range_id && data.work_income_range_id.toString() });
        this.birthPlace = data.birth_city && data.birth_city.toString();
        this.parentsDataForm.patchValue({ birth_date: data.birth_date && moment_moment__WEBPACK_IMPORTED_MODULE_13__(data.birth_date).format('YYYY-MM-DD') });
        this.parentsDataForm.patchValue({ education_degree_id: data.education_degree && data.education_degree.toString() });
        this.parentsDataForm.patchValue({ work_position: data.work_position });
        this.parentsDataForm.patchValue({ company_name: data.company_name });
        this.modalParents.show();
    }
    loadInputParentsData() {
        this.isViewParentsData = false;
        this.educationDegree = '';
        this.familyRelationshipParent = '';
        this.workField = '';
        this.workType = '';
        this.birthPlace = '';
        this.incomeRange = '';
        this.parentsDataForm.patchValue({ family_name: '' });
        this.parentsDataForm.patchValue({ email: '' });
        this.parentsDataForm.patchValue({ mobile_phone_number: '' });
        this.parentsDataForm.patchValue({ birth_date: '' });
        this.parentsDataForm.patchValue({ work_position: '' });
        this.parentsDataForm.patchValue({ company_name: '' });
        this.modalParents.show();
    }
    modalParentsClose() {
        this.modalParents.hide();
        this.parentsDataForm.reset();
        this.isViewParentsData = false;
    }
    deleteParentsData(data) {
        this.parentId = data.id;
        const payload = {
            id: this.parentId
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: this.confirmation,
            text: this.confirmationText,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: "#ffba57",
            confirmButtonText: this.yes,
            cancelButtonText: this.no,
            allowOutsideClick: false
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                this.userService.deleteParentsData(payload).subscribe(res => {
                    if (res.status === 'Success') {
                        this.loading = false;
                        this.loadDelete();
                        this.renderParentsData();
                        this.loadParentsData();
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                });
            }
        });
    }
    createParentsData() {
        this.loadingParents = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.participantId = res.participant_id;
            });
            const data = {
                participant_id: this.participantId,
                family_relationship_id: this.parentsDataForm.controls['relationship_id'].value,
                family_name: this.parentsDataForm.controls['family_name'].value,
                email: this.parentsDataForm.controls['email'].value,
                mobile_phone_number: this.parentsDataForm.controls['mobile_phone_number'].value,
                birth_place: this.birthPlace,
                birth_date: this.parentsDataForm.controls['birth_date'].value,
                education_degree_id: this.parentsDataForm.controls['education_degree_id'].value,
                work_field_id: this.parentsDataForm.controls['work_field_id'].value,
                work_type_id: this.parentsDataForm.controls['work_type_id'].value,
                work_position: this.parentsDataForm.controls['work_position'].value,
                work_income_range_id: this.parentsDataForm.controls['work_income_range_id'].value,
                company_name: this.parentsDataForm.controls['company_name'].value
            };
            this.userService.postParentsData(data).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.modalParentsClose();
                        this.renderParentsData();
                        this.loadParentsData();
                        this.loadingParents = false;
                    }
                    else {
                        this.loadError();
                        this.loadingParents = false;
                    }
                }
                else {
                    this.loadError();
                    this.loadingParents = false;
                }
            }, (reason) => {
                this.loadingParents = false;
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
    openFile() {
        document.getElementById('fileInput').click();
    }
    onUploadImagePhoto(e) {
        let file = e.target.files[0];
        if (file.type.includes('image/jp') || file.type.includes('image/png')) {
            if (file.size > 1024000) {
                this.filesControl.setValue([]);
                return sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
            return sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({ title: this.confirmation, text: 'gagal', type: 'error', showConfirmButton: true, });
        }
    }
    saveImg() {
        this.loadingSaveGambar = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
            let username = res.username;
            this.participantId = res.participant_id;
            let formDataPhoto = new FormData();
            formDataPhoto.append('username', username);
            formDataPhoto.append('participant_id', this.participantId);
            formDataPhoto.append('photo_url', this.urlPhoto);
            this.userService.postParticipantDetailData(formDataPhoto).subscribe(res => {
                if (res && res.status === 'Success') {
                    this.loadingSaveGambar = false;
                    this.modalPreview.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
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
                    this.loadError();
                }
                this.loadingSaveGambar = false;
            }, () => { this.modalPreview.hide(); this.loadingSaveGambar = false; });
        });
    }
    loadWorkHistory() {
        this.loadtableWorkHistory = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.participantId = res.participant_id;
                this.userService.getWorkHistoryData(`${this.participantId}`).subscribe(response => {
                    this.tableData2 = response.data;
                    this.dtTrigger2.next();
                    this.loadtableWorkHistory = false;
                }, err => {
                    this.loadError();
                    this.loadtableWorkHistory = false;
                });
            });
        }
        else {
            const unameEx = this.userProfile.username + '@gmail.com';
            this.userService.getParticipantDetailData(unameEx).subscribe(res => {
                this.participantId = res.participant_id;
                this.userService.getWorkHistoryData(`${this.participantId}`).subscribe(response => {
                    setTimeout(() => {
                        this.tableData2 = response.data;
                        this.dtTrigger2.next(); // Trigger for load datatable
                        this.loadtableWorkHistory = false;
                    }, 3000);
                }, err => {
                    this.loadError();
                    this.loadtableWorkHistory = false;
                });
            });
        }
    }
    renderWorkHistoryData() {
        this.dtElements.forEach((dtElement, index) => {
            if (index == 2) {
                dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            }
        });
    }
    loadDetailWorkHistoryData(data) {
        this.isViewWorkHistory = true;
        this.workId = data.id;
        this.workHistoryDataForm.patchValue({ company_name: data.company_name });
        this.workHistoryDataForm.patchValue({ work_field_id: data.work_field_id.toString() });
        this.workHistoryDataForm.patchValue({ work_type_id: data.work_type_id.toString() });
        this.workHistoryDataForm.patchValue({ work_income_range_id: data.work_income_range_id.toString() });
        this.workHistoryDataForm.patchValue({ work_position: data.work_position });
        const changestartdate = data.work_start_date && moment_moment__WEBPACK_IMPORTED_MODULE_13__(data.work_start_date).format('YYYY-MM-DD');
        this.workHistoryDataForm.patchValue({ work_start_date: changestartdate });
        this.workHistoryDataForm.patchValue({ work_end_date: data.work_end_date && moment_moment__WEBPACK_IMPORTED_MODULE_13__(data.work_end_date).format('YYYY-MM-DD') });
        this.workHistoryDataForm.patchValue({ company_address: data.company_address });
        this.workHistoryDataForm.patchValue({ company_phone_number: data.company_phone_number });
        this.modalWorkStory.show();
    }
    loadInputWorkHistoryData() {
        this.workHistoryDataForm.reset();
        this.modalWorkStory.show();
        this.isViewWorkHistory = false;
    }
    modalWorkStoryClose() {
        this.modalWorkStory.hide();
        this.workHistoryDataForm.reset();
        this.isViewWorkHistory = false;
    }
    deleteWorkHistoryData(data) {
        this.workId = data.id;
        const payload = {
            id: this.workId
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: this.confirmation,
            text: this.confirmationText,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: "#ffba57",
            confirmButtonText: this.yes,
            cancelButtonText: this.no,
            allowOutsideClick: false
        }).then((confirm) => {
            if (confirm.value) {
                this.loading = true;
                this.userService.deleteWorkHistoryData(payload).subscribe(res => {
                    if (res.status === 'Success') {
                        this.loading = false;
                        this.loadDelete();
                        this.renderWorkHistoryData();
                        this.loadWorkHistory();
                    }
                    else {
                        this.loadError();
                        this.loading = false;
                    }
                });
            }
        });
    }
    createWorkHistoryData() {
        this.loadingWork = true;
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (this.userProfile.email !== undefined) {
            this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.participantId = res.participant_id;
            });
            const data = {
                participant_id: this.participantId,
                company_name: this.workHistoryDataForm.controls['company_name'].value,
                work_type_id: this.workHistoryDataForm.controls['work_type_id'].value,
                work_income_range_id: this.workHistoryDataForm.controls['work_income_range_id'].value,
                work_field_id: this.workHistoryDataForm.controls['work_field_id'].value,
                work_position: this.workHistoryDataForm.controls['work_position'].value,
                work_start_date: this.workHistoryDataForm.controls['work_start_date'].value,
                work_end_date: this.workHistoryDataForm.controls['work_end_date'].value,
                company_address: this.workHistoryDataForm.controls['company_address'].value,
                company_phone_number: this.workHistoryDataForm.controls['company_phone_number'].value
            };
            this.userService.postWorkHistoryData(data).subscribe(res => {
                if (res != null) {
                    if (res.status == 'Success') {
                        this.loadSuccess();
                        this.renderWorkHistoryData();
                        this.loadWorkHistory();
                        this.modalWorkStoryClose();
                        this.loadingWork = false;
                    }
                    else {
                        this.loadError();
                        this.loadingWork = false;
                    }
                }
                else {
                    this.loadingWork = false;
                    this.loadError();
                }
            }, (reason) => {
                this.loadingWork = false;
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
    goToRegistrationStep() {
        this.router.navigate(['/', 'new-registration']);
    }
};
StudentProfileComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"] },
    { type: src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"] },
    { type: src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_6__["AdminManagementService"] },
    { type: _services_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OauthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
], StudentProfileComponent.prototype, "dtElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"])
], StudentProfileComponent.prototype, "dtElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"])
], StudentProfileComponent.prototype, "dtElement1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"])
], StudentProfileComponent.prototype, "dtElement4", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalPreview', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentProfileComponent.prototype, "modalPreview", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalStudent', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentProfileComponent.prototype, "modalStudent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalViewStudent', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentProfileComponent.prototype, "modalViewStudent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalParents', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentProfileComponent.prototype, "modalParents", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalBrosist', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentProfileComponent.prototype, "modalBrosist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalWorkStory', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentProfileComponent.prototype, "modalWorkStory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalPersonalDocument', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentProfileComponent.prototype, "modalPersonalDocument", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_14__["WizardComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_14__["WizardComponent"])
], StudentProfileComponent.prototype, "wizard", void 0);
StudentProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-student-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/student-profile/student-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-profile.component.scss */ "./src/app/theme/student-profile/student-profile.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"],
        src_app_services_participant_service__WEBPACK_IMPORTED_MODULE_5__["ParticipantService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_6__["AdminManagementService"],
        _services_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OauthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], StudentProfileComponent);



/***/ }),

/***/ "./src/app/theme/student-profile/student-profile.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/student-profile/student-profile.module.ts ***!
  \*****************************************************************/
/*! exports provided: StudentProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentProfileModule", function() { return StudentProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _student_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-profile.component */ "./src/app/theme/student-profile/student-profile.component.ts");
/* harmony import */ var _student_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-profile-routing.module */ "./src/app/theme/student-profile/student-profile-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-archwizard/dist */ "./node_modules/ng2-archwizard/dist/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/fesm2015/ng-select.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);















let StudentProfileModule = class StudentProfileModule {
};
StudentProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_student_profile_component__WEBPACK_IMPORTED_MODULE_3__["StudentProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _student_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["StudentProfileRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ng2_archwizard_dist__WEBPACK_IMPORTED_MODULE_6__["ArchwizardModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"],
            angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__["AngularDualListBoxModule"],
            ngx_chips__WEBPACK_IMPORTED_MODULE_12__["TagInputModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_13__["SelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"]
        ]
    })
], StudentProfileModule);



/***/ })

}]);
//# sourceMappingURL=theme-student-profile-student-profile-module-es2015.js.map