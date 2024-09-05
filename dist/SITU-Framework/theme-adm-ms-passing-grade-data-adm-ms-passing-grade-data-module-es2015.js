(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-adm-ms-passing-grade-data-adm-ms-passing-grade-data-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>Program Data Management works!</p> -->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-card cardTitle=\"Bobot Penilaian USM dan Rapor\" cardClass=\"card-datatable\"\n      headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"false\"\n      [loading]=\"loadTablePassingGrade\">\n      <app-filter-container [loading]=\"false\">\n        <div class=\"col-12 col-md-3\">\n          <ng-select name=\"year\" [allowClear]=\"false\"\n          [placeholder]=\"'CONTENT.selection-path-choosing' | translate\" [ngClass]=\"'filter'\"\n          [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"selectionPathSelected\"\n          [options]=\"listSelectionPath\" (selected)=\"loadFiterMappingPath($event)\"></ng-select>\n        </div>\n        <div class=\"col-12 col-md-2\">\n          <ng-select name=\"year\" [disabled]=\"!selectionPathSelected\" [allowClear]=\"false\" [placeholder]=\"'CONTENT.selection-year-choosing' | translate\"\n            [ngClass]=\"'filter'\" [notFoundMsg]=\"'ROOT.no_data_found'|translate\" [(ngModel)]=\"mappingPathYearSelected\"\n            [options]=\"listSelectionYear\" (selected)=\"loadMappingPathYearId($event)\"></ng-select>\n        </div>\n        <div class=\"col-12 col-md-3 ml-auto\">\n          <div class=\"row pl-3 pr-3\">\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-outline-warning btn-sm btn-block\" [disabled]=\"!mappingPathYearSelected\" (click)=\"resetFilters()\">\n                <i class=\"icofont icofont-refresh\"></i> {{ 'CONTENT.reset-filter' | translate }}\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-outline-info btn-sm btn-block\" [disabled]=\"!mappingPathYearSelected\" (click)=\"applyFilters(mappingPathYearSelected)\">\n                <i class=\"icofont icofont-filter\"></i> {{ 'CONTENT.apply-filter' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </app-filter-container>\n      <div *ngIf=\"isApplyFilter\" class=\"table-responsive pb-6\">\n        <div class=\"row align-items-center p-2\">\n         <div class=\"col-12 text-center text-md-right\">\n           <button class=\"btn btn-outline-success btn-sm btn-round has-ripple ml-2\"\n             (click)=\"openPassingGradeModals(null, 'input')\">\n             <i class=\"icofont icofont-plus\"></i> {{'ROOT.add' | translate}} {{'CONTENT.passing-grade' | translate}}\n           </button>\n         </div>\n       </div>\n        <table datatable class=\"table table-hover\" [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\" colspan=\"1\" rowspan=\"2\" class=\"center-table\" style=\"padding-left: 10px\">{{ 'CONTENT.no' | translate}}\n              </th>\n              <th scope=\"col\" colspan=\"1\" rowspan=\"2\" class=\"center-table\">{{ 'CONTENT.study-program-name' | translate}}</th>\n              <th scope=\"col\" colspan=\"13\" rowspan=\"1\" class=\"center-table\">Bobot Penilaian (Total 100%)</th>\n              <th scope=\"col\" colspan=\"1\" rowspan=\"2\" class=\"center-table\">Minimum Grade Value</th>\n              <th scope=\"col\" colspan=\"1\" rowspan=\"2\" class=\"center-table\">{{ 'CONTENT.action' | translate}}</th>\n              </tr>\n              <tr>\n              <th scope=\"col\" class=\"center-table\">Pelajaran Umum (%)</th>\n              <th scope=\"col\" class=\"center-table\">Matematika (%)</th>\n              <th scope=\"col\" class=\"center-table\">Bahasa Inggris (%)</th>\n              <th scope=\"col\" class=\"center-table\">Fisika (%)</th>\n              <th scope=\"col\" class=\"center-table\">Kimia (%)</th>\n              <th scope=\"col\" class=\"center-table\">Biologi (%)</th>\n              <th scope=\"col\" class=\"center-table\">Geografi (%)</th>\n              <th scope=\"col\" class=\"center-table\">Ekonomi (%)</th>\n              <th scope=\"col\" class=\"center-table\">Sosiologi (%)</th>\n              <th scope=\"col\" class=\"center-table\">Sejarah (%)</th>\n              <th scope=\"col\" class=\"center-table\">TPA (%)</th>\n              <th scope=\"col\" class=\"center-table\">Menggambar (%)</th>\n              <th scope=\"col\" class=\"center-table\">Pengetahuan Fotografi (%)</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"tablePassingGrade?.length != 0\">\n            <tr *ngFor=\"let data of tablePassingGrade; let i = index;\">\n              <th scope=\"row\" style=\"padding-left: 10px\">{{ i+1 }}</th>\n              <td>{{ data.program_study_name ? data.program_study_name.replace('amp;', ' ') : '-' }}</td>\n              <td class=\"center-table\">{{ data.general_knowledge ? data.general_knowledge : '-' }}</td>\n              <td class=\"center-table\">{{ data.math ? data.math : '-' }}</td>\n              <td class=\"center-table\">{{ data.english ? data.english : '-' }}</td>\n              <td class=\"center-table\">{{ data.physics ? data.physics : '-' }}</td>\n              <td class=\"center-table\">{{ data.chemical ? data.chemical : '-' }}</td>\n              <td class=\"center-table\">{{ data.biology ? data.biology : '-' }}</td>\n              <td class=\"center-table\">{{ data.geography ? data.geography : '-' }}</td>\n              <td class=\"center-table\">{{ data.economy ? data.economy : '-' }}</td>\n              <td class=\"center-table\">{{ data.sociological ? data.sociological : '-' }}</td>\n              <td class=\"center-table\">{{ data.historical ? data.historical : '-' }}</td>\n              <td class=\"center-table\">{{ data.tpa ? data.tpa : '-' }}</td>\n              <td class=\"center-table\">{{ data.drawing ? data.drawing : '-' }}</td>\n              <td class=\"center-table\">{{ data.photography_knowledge ? data.photography_knowledge : '-' }}</td>\n              <td class=\"center-table\">{{ data.min_grade_value ? data.min_grade_value : '-' }}</td>\n              <td class=\"center-table\">\n                <button class=\"btn btn-outline-danger btn-sm btn-round has-ripple\" [placement]=\"'left'\" (click)=\"deletePassingGrade(data)\"\n                  ngbTooltip=\"{{'ROOT.delete' | translate}}\">\n                  <i class=\"ti-trash\"></i>\n                </button>\n                <!-- <button class=\"btn btn-outline-warning btn-sm btn-round has-ripple\" [placement]=\"'left'\" (click)=\"openPassingGradeModals(data, 'edit')\"\n                  ngbTooltip=\"{{'ROOT.edit' | translate}}\">\n                  <i class=\"ti-pencil\"></i>\n                </button> -->\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tablePassingGrade?.length == 0 && !loadTablePassingGrade\">\n            <tr>\n              <td colspan=\"17\" class=\"no-data-available text-center\">\n                <app-no-data-found message=\"{{ 'ROOT.no_data_found' | translate }}\"></app-no-data-found>\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"tablePassingGrade?.length == 0 && loadTablePassingGrade\">\n            <tr>\n              <td colspan=\"17\" class=\"no-data-available text-center\">\n                <app-no-data-found message=\"{{ 'ROOT.loading' | translate }}\"></app-no-data-found>\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"!isApplyFilter\" class=\"text-center\">\n        <div class=\"col-12 text-center pt-3 pb-1\">\n          <app-no-data-found message=\"{{ 'CONTENT.choose_approval_filter' | translate }}\"></app-no-data-found>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n<app-ui-modal #passingGradeModals [containerClick]=\"false\" dialogClass=\"modal-dialog-centered modal-l\" [hideFooter]=\"true\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">\n      {{ formType === \"edit\" ? (\"ROOT.edit\" | translate)\n      : (\"ROOT.add\" | translate)\n      }} {{'CONTENT.passing-grade' | translate }}</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\n      (click)=\"closePassingGradeModals()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <form class=\"md-float-material form-material\" action=\"javascript:\" [formGroup]=\"passingGradeForm\">\n      <div class=\"row\">\n        <div class=\"col-md-12 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.study-program' | translate }}  <span\n            class=\"required\">*</span></label>\n          <ng-select [placeholder]=\"'CONTENT.choose-study-program'|translate\" [ngClass]=\"'custom bg-white'\"\n            formControlName=\"program_study_id\" required [(ngModel)]=\"studyProgramSelected\"\n           [options]=\"listStudyProgram\"></ng-select>\n          <label *ngIf=\"!studyProgramSelected\" class=\"error text-danger small form-text\">\n            {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.study-program' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.general-knowledge' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"general_knowledge\"\n            [placeholder]=\"'CONTENT.general-knowledge'|translate\" min=\"0\" max=\"100\" maxlength=\"3\" [disabled]=\"!studyProgramSelected\">\n          <label *ngIf=\"fpg.general_knowledge.errors && fpg.general_knowledge.errors.required && (fpg.general_knowledge.touched || fpg.general_knowledge.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.general_knowledge.errors && fpg.general_knowledge.errors.max && (fpg.general_knowledge.touched || fpg.general_knowledge.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.general_knowledge.errors && fpg.general_knowledge.errors.min && (fpg.general_knowledge.touched || fpg.general_knowledge.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.general_knowledge.errors && fpg.general_knowledge.errors.pattern && (fpg.general_knowledge.touched || fpg.general_knowledge.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.math' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"math\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.math'|translate\"min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.math.errors && fpg.math.errors.required && (fpg.math.touched || fpg.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.math.errors && fpg.math.errors.max && (fpg.math.touched || fpg.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.math.errors && fpg.math.errors.pattern && (fpg.math.touched || fpg.math.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.english' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"english\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.english'|translate\"min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.english.errors && fpg.english.errors.required && (fpg.english.touched || fpg.english.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.english.errors && fpg.english.errors.max && (fpg.english.touched || fpg.english.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.english.errors && fpg.english.errors.patterb && (fpg.english.touched || fpg.english.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.physics' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"physics\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.physics'|translate\" min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.physics.errors && fpg.physics.errors.required && (fpg.physics.touched || fpg.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.physics.errors && fpg.physics.errors.max && (fpg.physics.touched || fpg.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.physics.errors && fpg.physics.errors.pattern && (fpg.physics.touched || fpg.physics.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.chemical' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"chemical\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.chemical'|translate\" min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.chemical.errors && fpg.chemical.errors.required && (fpg.chemical.touched || fpg.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.chemical.errors && fpg.chemical.errors.max && (fpg.chemical.touched || fpg.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.chemical' | translate }}\n          </label>\n          <label *ngIf=\"fpg.chemical.errors && fpg.chemical.errors.pattern && (fpg.chemical.touched || fpg.chemical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.biology' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"biology\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.biology'|translate\" min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.biology.errors && fpg.biology.errors.required && (fpg.biology.touched || fpg.biology.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.biology.errors && fpg.biology.errors.max && (fpg.biology.touched || fpg.biology.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.biology.errors && fpg.biology.errors.pattern && (fpg.biology.touched || fpg.biology.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.bahasa' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"bahasa\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.bahasa'|translate\" min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.bahasa.errors && fpg.bahasa.errors.required && (fpg.bahasa.touched || fpg.bahasa.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.bahasa.errors && fpg.bahasa.errors.max && (fpg.bahasa.touched || fpg.bahasa.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.bahasa.errors && fpg.bahasa.errors.pattern && (fpg.bahasa.touched || fpg.bahasa.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.economy' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"economy\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.economy'|translate\" min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.economy.errors && fpg.economy.errors.required && (fpg.economy.touched || fpg.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.economy.errors && fpg.economy.errors.max && (fpg.economy.touched || fpg.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.economy.errors && fpg.economy.errors.pattern && (fpg.economy.touched || fpg.economy.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.sociological' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"sociological\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.sociological'|translate\" min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.sociological.errors && fpg.sociological.errors.required && (fpg.sociological.touched || fpg.sociological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.sociological.errors && fpg.sociological.errors.max && (fpg.sociological.touched || fpg.sociological.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.tpa.errors && fpg.tpa.errors.pattern && (fpg.tpa.touched || fpg.tpa.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.geography' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"geography\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.geography'|translate\" min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.geography.errors && fpg.geography.errors.required && (fpg.geography.touched || fpg.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.geography.errors && fpg.geography.errors.max && (fpg.geography.touched || fpg.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.geography.errors && fpg.geography.errors.pattern && (fpg.geography.touched || fpg.geography.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.historical' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"historical\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.historical'|translate\" min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.historical.errors && fpg.historical.errors.required && (fpg.historical.touched || fpg.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.historical.errors && fpg.historical.errors.max && (fpg.historical.touched || fpg.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.historical.errors && fpg.historical.errors.pattern && (fpg.historical.touched || fpg.historical.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.tpa' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"tpa\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.tpa'|translate\" min=\"0\" max=\"800\" maxlength=\"3\">\n          <label *ngIf=\"fpg.tpa.errors && fpg.tpa.errors.required && (fpg.tpa.touched || fpg.tpa.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.tpa.errors && fpg.tpa.errors.max && (fpg.tpa.touched || fpg.tpa.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-tpa-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.tpa.errors && fpg.tpa.errors.pattern && (fpg.tpa.touched || fpg.tpa.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.drawing' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"drawing\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.drawing'|translate\"min=\"0\" max=\"100\" maxlength=\"3\">\n          <label *ngIf=\"fpg.drawing.errors && fpg.drawing.errors.required && (fpg.drawing.touched || fpg.drawing.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.drawing.errors && fpg.drawing.errors.max && (fpg.drawing.touched || fpg.drawing.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.drawing.errors && fpg.drawing.errors.pattern && (fpg.drawing.touched || fpg.drawing.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.photography-knowledge' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"photography_knowledge\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.photography-knowledge'|translate\" min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.photography_knowledge.errors && fpg.photography_knowledge.errors.required && (fpg.photography_knowledge.touched || fpg.photography_knowledge.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.photography_knowledge.errors && fpg.photography_knowledge.errors.max && (fpg.photography_knowledge.touched || fpg.photography_knowledge.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.passing-grade-validation' | translate }}\n          </label>\n          <label *ngIf=\"fpg.photography_knowledge.errors && fpg.photography_knowledge.errors.pattern && (fpg.photography_knowledge.touched || fpg.photography_knowledge.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <div class=\"col-md-6 form-group mb-2\">\n          <label class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.minimum-grade-value' | translate }}  <span\n            class=\"required\">*</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"quota\" required formControlName=\"minimum_grade_value\" [disabled]=\"!studyProgramSelected\"\n            [placeholder]=\"'CONTENT.minimum-grade-value'|translate\" min=\"0\" max=\"100\"   maxlength=\"3\">\n          <label *ngIf=\"fpg.minimum_grade_value.errors && fpg.minimum_grade_value.errors.required && (fpg.minimum_grade_value.touched || fpg.minimum_grade_value.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'ROOT.required' | translate }}\n          </label>\n          <label *ngIf=\"fpg.minimum_grade_value.errors && fpg.minimum_grade_value.errors.max && (fpg.minimum_grade_value.touched || fpg.minimum_grade_value.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.minimum-grade-value' | translate }}\n          </label>\n          <label *ngIf=\"fpg.minimum_grade_value.errors && fpg.minimum_grade_value.errors.pattern && (fpg.minimum_grade_value.touched || fpg.minimum_grade_value.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.number-only' | translate }}\n          </label>\n        </div>\n        <!-- <div class=\" col-md-4 form-group mb-2\">\n          <h6 class=\"form-label m-b-0 f-w-600\">{{ 'CONTENT.active-status'| translate}} <span\n            class=\"required\">*</span></h6><br>\n          <div class=\"custom-control custom-radio custom-control-inline\">\n            <input type=\"radio\" id=\"active_status1\" name=\"active_status\" class=\"custom-control-input\" value=\"1\"\n              formControlName=\"active_status\" required>\n            <label class=\"custom-control-label \" for=\"active_status1\">{{ 'ROOT.yes' | translate }}</label>\n          </div>\n          <div class=\"custom-control custom-radio custom-control-inline\">\n            <input type=\"radio\" id=\"active_status2\" name=\"active_status\" class=\"custom-control-input\" value=\"0\"\n               formControlName=\"active_status\" required>\n            <label class=\"custom-control-label\" for=\"active_status2\">{{ 'ROOT.no' | translate }}</label>\n          </div>\n          <label\n            *ngIf=\"fpg.active_status.errors && fpg.active_status.errors.required && (fpg.active_status.touched || fpg.active_status.dirty)\"\n            class=\"error text-danger small form-text\">\n            {{ 'CONTENT.please-input' | translate }}{{ 'CONTENT.active-status' | translate }}\n          </label>\n        </div> -->\n        <div class=\"col-12 form-group mb-0 mt-4 text-right\">\n          <div class=\"btn-group\">\n            <button type=\"button\" (click)=\"closePassingGradeModals()\" [disabled]=\"this.loading\"\n              class=\"btn btn-secondary btn-sm\">\n              <i class=\"icofont icofont-logout\"></i> {{ 'ROOT.exit' | translate }}\n            </button>\n            <button type=\"submit\" [class]=\"this.formType === 'edit' ? 'btn btn-warning btn-sm' : 'btn btn-primary btn-sm'\"\n            [disabled]=\"passingGradeForm.invalid || loading\" (click)=\"createPassingGradeData()\">\n            <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n            <span *ngIf=\"this.loading\" class=\"load-text\"> Loading...</span>\n            <span *ngIf=\"!this.loading\" class=\"btn-text\">\n            <i [class]=\"this.formType === 'edit' ? 'ti-pencil' : 'ti-save'\"></i> {{ formType === 'edit' ? ('ROOT.edit' | translate) : ('ROOT.save' | translate) }}\n            </span>\n          </button>\n          </div>\n        </div>\n        </div>\n      </form>\n  </div>\n</app-ui-modal>");

/***/ }),

/***/ "./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdmMsPassingGradeDataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMsPassingGradeDataRoutingModule", function() { return AdmMsPassingGradeDataRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adm_ms_passing_grade_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-ms-passing-grade-data.component */ "./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _adm_ms_passing_grade_data_component__WEBPACK_IMPORTED_MODULE_2__["AdmMsPassingGradeDataComponent"]
    }
];
let AdmMsPassingGradeDataRoutingModule = class AdmMsPassingGradeDataRoutingModule {
};
AdmMsPassingGradeDataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AdmMsPassingGradeDataRoutingModule);



/***/ }),

/***/ "./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\nth {\n  table-layout: fixed;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.center-table {\n  text-align: center; }\n\n.width {\n  max-width: 370px;\n  text-align: justify; }\n\n.required {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvdGhlbWUvYWRtLW1zLXBhc3NpbmctZ3JhZGUtZGF0YS9hZG0tbXMtcGFzc2luZy1ncmFkZS1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxtQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNDLGtCQUFrQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9hZG0tbXMtcGFzc2luZy1ncmFkZS1kYXRhL2FkbS1tcy1wYXNzaW5nLWdyYWRlLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbnRoe1xuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmNlbnRlci10YWJsZXtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2lkdGh7XG4gIG1heC13aWR0aDogMzcwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4ucmVxdWlyZWQge1xuICBjb2xvcjogcmVkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdmMsPassingGradeDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMsPassingGradeDataComponent", function() { return AdmMsPassingGradeDataComponent; });
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












let AdmMsPassingGradeDataComponent = class AdmMsPassingGradeDataComponent {
    constructor(translate, broadcasterService, chartService, appService, router, fb, http) {
        this.translate = translate;
        this.broadcasterService = broadcasterService;
        this.chartService = chartService;
        this.appService = appService;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.type = 'default';
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
        this.passingGradeForm = fb.group({
            program_study_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            general_knowledge: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            math: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            english: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            physics: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            chemical: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            biology: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            drawing: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            bahasa: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            economy: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            sociological: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            historical: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            geography: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            tpa: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(800), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            photography_knowledge: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            minimum_grade_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')]),
            active_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
        this.listActiveStatusFilters = [
            {
                label: 'ACTIVE',
                value: '1',
            },
            {
                label: 'NONACTIVE',
                value: '0',
            }
        ];
        this.isApplyFilter = false;
        this.loadTablePassingGrade = false;
        this.loading = false;
        this.tablePassingGrade = [];
    }
    get fpg() {
        return this.passingGradeForm.controls;
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
            initComplete: () => {
            }
        };
        this.loadFilterSelectionPath();
    }
    openPassingGradeModals(data, type) {
        this.formType = type;
        if (type === 'edit') {
            this.loading = false;
            this.passingGradeId = data.id;
            this.studyProgramSelected = data.program_study_id && data.program_study_id.toString();
            this.passingGradeForm.patchValue({ general_knowledge: data.general_knowledge });
            this.passingGradeForm.patchValue({ math: data.math });
            this.passingGradeForm.patchValue({ english: data.english });
            this.passingGradeForm.patchValue({ physics: data.physics });
            this.passingGradeForm.patchValue({ chemical: data.chemical });
            this.passingGradeForm.patchValue({ biology: data.biology });
            this.passingGradeForm.patchValue({ economy: data.economy });
            this.passingGradeForm.patchValue({ bahasa: data.bahasa });
            this.passingGradeForm.patchValue({ geography: data.geography });
            this.passingGradeForm.patchValue({ sociological: data.sociological });
            this.passingGradeForm.patchValue({ historical: data.historical });
            this.passingGradeForm.patchValue({ tpa: data.tpa });
            this.passingGradeForm.patchValue({ drawing: data.drawing });
            this.passingGradeForm.patchValue({ photography_knowledge: data.photography_knowledge });
            this.passingGradeForm.patchValue({ minimum_grade_value: data.min_grade_value });
            if (data.active_status == true) {
                this.passingGradeForm.patchValue({ active_status: '1' });
            }
            else {
                this.passingGradeForm.patchValue({ active_status: '0' });
            }
        }
        else {
            this.loading = false;
            this.passingGradeForm.patchValue({ general_knowledge: '0' });
            this.passingGradeForm.patchValue({ math: '0' });
            this.passingGradeForm.patchValue({ english: '0' });
            this.passingGradeForm.patchValue({ physics: '0' });
            this.passingGradeForm.patchValue({ chemical: '0' });
            this.passingGradeForm.patchValue({ biology: '0' });
            this.passingGradeForm.patchValue({ historical: '0' });
            this.passingGradeForm.patchValue({ sociological: '0' });
            this.passingGradeForm.patchValue({ bahasa: '0' });
            this.passingGradeForm.patchValue({ tpa: '0' });
            this.passingGradeForm.patchValue({ economy: '0' });
            this.passingGradeForm.patchValue({ geography: '0' });
            this.passingGradeForm.patchValue({ drawing: '0' });
            this.passingGradeForm.patchValue({ photography_knowledge: '0' });
            this.passingGradeForm.patchValue({ minimum_grade_value: '0' });
        }
        this.passingGradeModals.show();
    }
    closePassingGradeModals() {
        this.studyProgramSelected = '';
        this.passingGradeModals.hide();
        this.passingGradeForm.reset();
        this.loading = false;
    }
    loadFiterMappingPath(event) {
        this.id = event.value;
        this.mappingPathYearSelected = '';
        this.chartService.getMappingPathYearIntake(`?active_status=true&selection_path_id=${this.id}`).subscribe((res) => {
            this.listSelectionYear = res && res.map((value) => {
                const { id, year, mapping_path_year_id } = value;
                return { value: id.toString(), label: year, mapping_path_year_id: mapping_path_year_id };
            });
        });
    }
    loadMappingPathYearId(event) {
        this.mappingPathYearId = event.mapping_path_year_id;
    }
    loadActiveStatusFilters(event) {
        this.id = event.value;
        this.activeStatusPassingGradeSelected = '';
        this.mappingPathYearSelected = '';
    }
    loadFilterSelectionPath() {
        this.chartService.getSelectionPathAdmin(`?active_status=1`).subscribe((res) => {
            this.listSelectionPath = res && res.map((value) => {
                const { selection_path_id, name } = value;
                return { value: selection_path_id.toString(), label: name };
            });
        });
    }
    loadStudyProgramData(id) {
        this.chartService.getStudyProgramPassingGrade(`?selection_path_id=${id}`).subscribe((response) => {
            // this.chartService.getMappingProgramStudyData(`selection_path_id=${id}&active_status=true`).subscribe((response) => {
            this.listStudyProgram = response && response.map((value) => {
                const { id, study_program_name } = value;
                return { value: id.toString(), label: study_program_name };
            });
        }, err => {
            this.loadError();
        });
    }
    resetFilters() {
        this.selectionPathSelected = '';
        this.mappingPathYearSelected = '';
    }
    applyFilters(year) {
        this.mappingPathYearSelected = year;
        this.getTablePassingGrade();
        this.loadStudyProgramData(this.id);
        this.isApplyFilter = true;
    }
    // load table step 7
    getTablePassingGrade() {
        this.loadTablePassingGrade = true;
        this.chartService.getPassingGradeData(`?active_status=true&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(response => {
            // this.chartService.getPassingGradeData(`?active_status=${this.activeStatusPassingGradeSelected}&mapping_path_year_id=${this.mappingPathYearSelected}&study_program_id=${this.studyProgramSelected}`).subscribe(response => {
            this.tablePassingGrade = response;
            this.dtTrigger.next();
            this.loadTablePassingGrade = false;
        }, err => {
            this.loadTablePassingGrade = false;
        });
    }
    createPassingGradeData() {
        if (this.passingGradeForm.valid) {
            switch (this.formType) {
                case 'input':
                    this.loading = true;
                    const { general_knowledge, math, english, physics, chemical, biology, bahasa, economy, sociological, historical, tpa, drawing, geography, photography_knowledge, minimum_grade_value, active_status } = this.passingGradeForm.value;
                    let payloadInput = {
                        program_study_id: this.studyProgramSelected,
                        mapping_path_year_id: this.mappingPathYearId,
                        general_knowledge: general_knowledge,
                        math: math,
                        english: english,
                        physics: physics,
                        chemical: chemical,
                        biology: biology,
                        bahasa: bahasa,
                        economy: economy,
                        sociological: sociological,
                        historical: historical,
                        geography: geography,
                        tpa: tpa,
                        drawing: drawing,
                        photography_knowledge: photography_knowledge,
                        min_grade_value: minimum_grade_value,
                        active_status: '1'
                    };
                    this.chartService.createPassingGrade(payloadInput).subscribe(res => {
                        if (res != null) {
                            if (res.status == 'Success') {
                                this.loadSuccess();
                                this.passingGradeModals.hide();
                                this.passingGradeForm.reset();
                                this.renderPassingGradeTable();
                                this.loadStudyProgramData(this.id);
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
                        this.loadError();
                        this.loading = false;
                    });
                    break;
                case 'edit':
                    this.loading = true;
                    let payloadEdit = {
                        id: this.passingGradeId,
                        program_study_id: this.studyProgramSelected,
                        mapping_path_year_id: this.mappingPathYearId,
                        general_knowledge: this.passingGradeForm.controls['general_knowledge'].value,
                        bahasa: this.passingGradeForm.controls['bahasa'].value,
                        math: this.passingGradeForm.controls['math'].value,
                        english: this.passingGradeForm.controls['english'].value,
                        physics: this.passingGradeForm.controls['physics'].value,
                        chemical: this.passingGradeForm.controls['chemical'].value,
                        biology: this.passingGradeForm.controls['biology'].value,
                        economy: this.passingGradeForm.controls['economy'].value,
                        sociological: this.passingGradeForm.controls['sociological'].value,
                        geography: this.passingGradeForm.controls['geography'].value,
                        historical: this.passingGradeForm.controls['historical'].value,
                        tpa: this.passingGradeForm.controls['tpa'].value,
                        drawing: this.passingGradeForm.controls['drawing'].value,
                        photography_knowledge: this.passingGradeForm.controls['photography_knowledge'].value,
                        min_grade_value: this.passingGradeForm.controls['minimum_grade_value'].value,
                        active_status: this.passingGradeForm.controls['active_status'].value
                    };
                    this.chartService.updatePassingGrade(payloadEdit).subscribe(res => {
                        if (res != null) {
                            if (res.status == 'Success') {
                                this.loading = false;
                                this.loadSuccess();
                                this.passingGradeModals.hide();
                                this.passingGradeForm.reset();
                                this.renderPassingGradeTable();
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
                            msg: reason.err.message,
                            timeout: 5000,
                            theme: 'default',
                            position: 'top-right',
                            type: 'error'
                        });
                        this.loading = false;
                    });
                    break;
                    deafult: break;
            }
        }
    }
    deletePassingGrade(data) {
        const datas = {
            id: data.id,
            active_status: 'false'
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
                this.loading = true;
                this.chartService.updatePassingGrade(datas).subscribe(res => {
                    if (res != null) {
                        if (res.status == 'Success') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                                position: 'center',
                                type: 'success',
                                title: this.successDel,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.renderPassingGradeTable();
                            this.loadStudyProgramData(this.id);
                            this.loading = false;
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
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
                        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                            position: 'center',
                            type: 'error',
                            title: this.failedDel,
                            showConfirmButton: false,
                            timer: 2000
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
    renderPassingGradeTable() {
        if (this.tablePassingGrade.length == 0) {
            this.getTablePassingGrade();
        }
        else {
            this.dtElements.forEach((dtElement, index) => {
                if (index == 0) {
                    dtElement.dtInstance.then((dtInstance) => {
                        dtInstance.destroy();
                        this.getTablePassingGrade();
                    });
                }
            });
        }
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
};
AdmMsPassingGradeDataComponent.ctorParameters = () => [
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
], AdmMsPassingGradeDataComponent.prototype, "dtElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
], AdmMsPassingGradeDataComponent.prototype, "dtElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myPersistenceModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdmMsPassingGradeDataComponent.prototype, "myPersistenceModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteProgramModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdmMsPassingGradeDataComponent.prototype, "deleteProgramModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passingGradeModals', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdmMsPassingGradeDataComponent.prototype, "passingGradeModals", void 0);
AdmMsPassingGradeDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adm-ms-selection-schedule-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adm-ms-passing-grade-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adm-ms-passing-grade-data.component.scss */ "./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_6__["BroadcasterService"],
        src_app_services_admin_management_service__WEBPACK_IMPORTED_MODULE_4__["AdminManagementService"],
        src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
], AdmMsPassingGradeDataComponent);



/***/ }),

/***/ "./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AdmMsPassingGradeDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMsPassingGradeDataModule", function() { return AdmMsPassingGradeDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _adm_ms_passing_grade_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adm-ms-passing-grade-data.component */ "./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.component.ts");
/* harmony import */ var _adm_ms_passing_grade_data_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adm-ms-passing-grade-data-routing.module */ "./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/fesm2015/ng-select.js");














let AdmMsPassingGradeDataModule = class AdmMsPassingGradeDataModule {
};
AdmMsPassingGradeDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_adm_ms_passing_grade_data_component__WEBPACK_IMPORTED_MODULE_4__["AdmMsPassingGradeDataComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _adm_ms_passing_grade_data_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmMsPassingGradeDataRoutingModule"],
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
], AdmMsPassingGradeDataModule);



/***/ })

}]);
//# sourceMappingURL=theme-adm-ms-passing-grade-data-adm-ms-passing-grade-data-module-es2015.js.map