(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-sample-page-sample-page-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableDirective.prototype, "dtOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], DataTableDirective.prototype, "dtTrigger", void 0);
    DataTableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[datatable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DataTableDirective);
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule_1 = DataTablesModule;
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule_1
        };
    };
    var DataTablesModule_1;
    DataTablesModule = DataTablesModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
            exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
        })
    ], DataTablesModule);
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/sample-page/sample-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/sample-page/sample-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row\">\n  <div class=\"col-12\">\n    <app-card cardTitle=\"{{'ROOT.sample_page' | translate}}\" cardClass=\"card-datatable\" headerClass=\"text-center text-md-left\" [hidHeader]=\"false\" [options]=\"true\" [loading]=\"loadTable\">\n      <p class=\"m-t-5 m-b-5 p-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n      <form [formGroup]=\"formPlayers\" class=\"md-float-material form-material\" action=\"javascript:\">\n        <div class=\"col-12\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-4\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'ROOT.player_name' | translate }}</label>\n                <ng-select name=\"name\" formControlName=\"person\" [options]=\"playersOption\" [allowClear]=\"true\"\n                  [placeholder]=\"'ROOT.select_one'|translate\" [ngClass]=\"fp.person.invalid && fp.person.touched?'custom is-invalid':(fp.person.valid?'custom is-valid':'custom')\"\n                  [notFoundMsg]=\"'ROOT.no_data_found'|translate\">\n                </ng-select>\n                <label *ngIf=\"fp.person.errors?.required && fp.person.touched\" class=\"invalid-feedback\">Please input position!</label>\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'ROOT.position' | translate }}</label>\n                <input type=\"text\" class=\"form-control\" name=\"position\" required formControlName=\"position\" [ngClass]=\"fp.position.invalid && fp.position.touched?'is-invalid':(fp.position.valid?'is-valid':'')\">\n                <label *ngIf=\"fp.position.errors?.required && fp.position.touched\" class=\"invalid-feedback\">Please input position!</label>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-md-2\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'ROOT.country' | translate }}</label>\n                <input type=\"text\" class=\"form-control\" name=\"country\" required formControlName=\"country\" [ngClass]=\"fp.country.invalid && fp.country.touched?'is-invalid':(fp.country.valid?'is-valid':'')\">\n                <label *ngIf=\"fp.country.errors?.required && fp.country.touched\" class=\"invalid-feedback\">Please input country!</label>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-md-2\">\n              <div class=\"form-group mb-2\">\n                <label class=\"form-label m-b-0 f-w-600\">{{ 'ROOT.nns' | translate }}</label>\n                <input type=\"number\" min=\"1\" max=\"99\" class=\"form-control\" name=\"number\" required formControlName=\"number\" [ngClass]=\"fp.number.invalid && fp.number.touched?'is-invalid':(fp.number.valid?'is-valid':'')\">\n                <label *ngIf=\"fp.number.errors?.required && fp.number.touched\" class=\"invalid-feedback\">Please input number!</label>\n                <label *ngIf=\"fp.number.errors?.max && fp.number.touched\" class=\"invalid-feedback\">Maximum number is 99!</label>\n              </div>\n            </div>\n            <div class=\"col-12 text-right\">\n              <div class=\"form-group mb-2\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" (click)=\"resetForm()\" class=\"btn btn-warning btn-sm\">\n                    <i class=\"icofont icofont-refresh\"></i> {{ 'ROOT.reset' | translate }}\n                  </button>\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"formPlayers.invalid\">\n                    <i class=\"ti-save\"></i> {{ 'ROOT.save' | translate }}\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <div class=\"table-responsive pb-1 p-2\">\n        <table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th width=\"10\" scope=\"col\" style=\"padding-left: 10px\">No.</th>\n              <th scope=\"col\">ID</th>\n              <th scope=\"col\">Question</th>\n              <th scope=\"col\">Answer</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"dataFaq?.data?.length != 0\">\n            <tr *ngFor=\"let data of dataFaq?.data; let i = index;\">\n              <th scope=\"row\" style=\"padding-left: 10px\">{{ dataFaq?.from + i }}</th>\n              <td>{{ data.id }}</td>\n              <td>{{ data.question }}</td>\n              <td>{{ data.answer }}</td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"dataFaq?.data?.length == 0 && !loadTable\">\n            <tr>\n              <td colspan=\"4\" class=\"no-data-available text-center\">\n                <div class=\"col-12 text-center pt-3 pb-1\">\n                  <app-no-data-found></app-no-data-found>\n                </div>\n              </td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"dataFaq?.data?.length == 0 && loadTable\">\n            <tr>\n              <td colspan=\"4\" class=\"no-data-available text-center\">{{ 'ROOT.loading_data' | translate }}....</td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n              <td class=\"hidden\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n -->\n");

/***/ }),

/***/ "./src/app/theme/sample-page/sample-page-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/sample-page/sample-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SamplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageRoutingModule", function() { return SamplePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-page.component */ "./src/app/theme/sample-page/sample-page.component.ts");




const routes = [
    {
        path: '',
        component: _sample_page_component__WEBPACK_IMPORTED_MODULE_3__["SamplePageComponent"]
    }
];
let SamplePageRoutingModule = class SamplePageRoutingModule {
};
SamplePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SamplePageRoutingModule);



/***/ }),

/***/ "./src/app/theme/sample-page/sample-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/theme/sample-page/sample-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NhbXBsZS1wYWdlL3NhbXBsZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/theme/sample-page/sample-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/sample-page/sample-page.component.ts ***!
  \************************************************************/
/*! exports provided: SamplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageComponent", function() { return SamplePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/broadcaster.service */ "./src/app/_services/broadcaster.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/app.service */ "./src/app/_services/app.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let SamplePageComponent = class SamplePageComponent {
    constructor(broadcasterService, translateService, appService, fb) {
        this.broadcasterService = broadcasterService;
        this.translateService = translateService;
        this.appService = appService;
        this.fb = fb;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.toastData = {};
        this.loadTable = false;
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(res => {
            translateService.setDefaultLang(res.lang);
        });
        this.playersOption = [
            { value: '0', label: 'Lionel Messi' },
            { value: '1', label: 'Andres Iniesta' },
            { value: '2', label: 'Xavi Hernandes' },
            { value: '3', label: 'Carles Puyol' },
            { value: '4', label: 'Sergio Busquets' },
            { value: '5', label: 'Pedro' },
            { value: '6', label: 'David Villa' },
            { value: '7', label: 'Dani Alves' },
            { value: '8', label: 'Victor Valdes' },
            { value: '9', label: 'Jordi Alba' },
            { value: '10', label: 'Gerard Pique' },
            { value: '11', label: 'Cesc Fabregas' },
            { value: '12', label: 'Joseph Guardiola' }
        ];
        this.formPlayers = this.fb.group({
            person: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(99)])
        });
    }
    get fp() { return this.formPlayers.controls; }
    ngOnInit() {
        // this.loadData();
    }
};
SamplePageComponent.ctorParameters = () => [
    { type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__["BroadcasterService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
], SamplePageComponent.prototype, "dtElement", void 0);
SamplePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sample-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sample-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/sample-page/sample-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sample-page.component.scss */ "./src/app/theme/sample-page/sample-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__["BroadcasterService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], SamplePageComponent);



/***/ }),

/***/ "./src/app/theme/sample-page/sample-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/sample-page/sample-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SamplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageModule", function() { return SamplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample-page-routing.module */ "./src/app/theme/sample-page/sample-page-routing.module.ts");
/* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-page.component */ "./src/app/theme/sample-page/sample-page.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");








let SamplePageModule = class SamplePageModule {
};
SamplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [_sample_page_component__WEBPACK_IMPORTED_MODULE_2__["SamplePageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyModule"].forRoot(),
            _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["SamplePageRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], SamplePageModule);



/***/ })

}]);
//# sourceMappingURL=theme-sample-page-sample-page-module-es2015.js.map