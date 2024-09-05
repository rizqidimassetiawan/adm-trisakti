(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~approval-data-detail-approval-data-detail-module~registration-data-registration-data-module~~6741a029"], {
  /***/
  "./node_modules/angular-datatables/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/angular-datatables/index.js ***!
    \**************************************************/

  /*! exports provided: DataTableDirective, DataTablesModule */

  /***/
  function node_modulesAngularDatatablesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./src/angular-datatables.directive */
    "./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"];
    });
    /* harmony import */


    var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./src/angular-datatables.module */
    "./node_modules/angular-datatables/src/angular-datatables.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"];
    });
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

    /***/

  },

  /***/
  "./node_modules/angular-datatables/src/angular-datatables.directive.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
    \*****************************************************************************/

  /*! exports provided: DataTableDirective */

  /***/
  function node_modulesAngularDatatablesSrcAngularDatatablesDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
      return DataTableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var DataTableDirective =
    /** @class */
    function () {
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
        } else {
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

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], DataTableDirective.prototype, "dtOptions", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])], DataTableDirective.prototype, "dtTrigger", void 0);

      DataTableDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[datatable]'
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])], DataTableDirective);
      return DataTableDirective;
    }(); //# sourceMappingURL=angular-datatables.directive.js.map

    /***/

  },

  /***/
  "./node_modules/angular-datatables/src/angular-datatables.module.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
    \**************************************************************************/

  /*! exports provided: DataTablesModule */

  /***/
  function node_modulesAngularDatatablesSrcAngularDatatablesModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
      return DataTablesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./angular-datatables.directive */
    "./node_modules/angular-datatables/src/angular-datatables.directive.js");
    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var DataTablesModule =
    /** @class */
    function () {
      function DataTablesModule() {}

      DataTablesModule_1 = DataTablesModule;

      DataTablesModule.forRoot = function () {
        return {
          ngModule: DataTablesModule_1
        };
      };

      var DataTablesModule_1;
      DataTablesModule = DataTablesModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
        exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
      })], DataTablesModule);
      return DataTablesModule;
    }(); //# sourceMappingURL=angular-datatables.module.js.map

    /***/

  },

  /***/
  "./node_modules/ng2-currency-mask/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/ng2-currency-mask/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNg2CurrencyMaskIndexJs(module, exports, __webpack_require__) {
    "use strict";

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./src/currency-mask.directive */
    "./node_modules/ng2-currency-mask/src/currency-mask.directive.js"));

    __export(__webpack_require__(
    /*! ./src/currency-mask.module */
    "./node_modules/ng2-currency-mask/src/currency-mask.module.js")); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/ng2-currency-mask/src/currency-mask.config.js":
  /*!********************************************************************!*\
    !*** ./node_modules/ng2-currency-mask/src/currency-mask.config.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNg2CurrencyMaskSrcCurrencyMaskConfigJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    exports.CURRENCY_MASK_CONFIG = new core_1.InjectionToken("currency.mask.config"); //# sourceMappingURL=currency-mask.config.js.map

    /***/
  },

  /***/
  "./node_modules/ng2-currency-mask/src/currency-mask.directive.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/ng2-currency-mask/src/currency-mask.directive.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNg2CurrencyMaskSrcCurrencyMaskDirectiveJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var currency_mask_config_1 = __webpack_require__(
    /*! ./currency-mask.config */
    "./node_modules/ng2-currency-mask/src/currency-mask.config.js");

    var input_handler_1 = __webpack_require__(
    /*! ./input.handler */
    "./node_modules/ng2-currency-mask/src/input.handler.js");

    exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
      provide: forms_1.NG_VALUE_ACCESSOR,
      useExisting: core_1.forwardRef(function () {
        return CurrencyMaskDirective;
      }),
      multi: true
    };

    var CurrencyMaskDirective = function () {
      function CurrencyMaskDirective(currencyMaskConfig, elementRef, keyValueDiffers) {
        this.currencyMaskConfig = currencyMaskConfig;
        this.elementRef = elementRef;
        this.keyValueDiffers = keyValueDiffers;
        this.options = {};
        this.optionsTemplate = {
          align: "right",
          allowNegative: true,
          decimal: ".",
          precision: 2,
          prefix: "$ ",
          suffix: "",
          thousands: ","
        };

        if (currencyMaskConfig) {
          this.optionsTemplate = currencyMaskConfig;
        }

        this.keyValueDiffer = keyValueDiffers.find({}).create();
      }

      CurrencyMaskDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
      };

      CurrencyMaskDirective.prototype.ngDoCheck = function () {
        if (this.keyValueDiffer.diff(this.options)) {
          this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
          this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
      };

      CurrencyMaskDirective.prototype.ngOnInit = function () {
        this.inputHandler = new input_handler_1.InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
      };

      CurrencyMaskDirective.prototype.handleBlur = function (event) {
        this.inputHandler.getOnModelTouched().apply(event);
      };

      CurrencyMaskDirective.prototype.handleClick = function (event) {
        this.inputHandler.handleClick(event, this.isChromeAndroid());
      };

      CurrencyMaskDirective.prototype.handleCut = function (event) {
        if (!this.isChromeAndroid()) {
          this.inputHandler.handleCut(event);
        }
      };

      CurrencyMaskDirective.prototype.handleInput = function (event) {
        if (this.isChromeAndroid()) {
          this.inputHandler.handleInput(event);
        }
      };

      CurrencyMaskDirective.prototype.handleKeydown = function (event) {
        if (!this.isChromeAndroid()) {
          this.inputHandler.handleKeydown(event);
        }
      };

      CurrencyMaskDirective.prototype.handleKeypress = function (event) {
        if (!this.isChromeAndroid()) {
          this.inputHandler.handleKeypress(event);
        }
      };

      CurrencyMaskDirective.prototype.handleKeyup = function (event) {
        if (!this.isChromeAndroid()) {
          this.inputHandler.handleKeyup(event);
        }
      };

      CurrencyMaskDirective.prototype.handlePaste = function (event) {
        if (!this.isChromeAndroid()) {
          this.inputHandler.handlePaste(event);
        }
      };

      CurrencyMaskDirective.prototype.isChromeAndroid = function () {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
      };

      CurrencyMaskDirective.prototype.registerOnChange = function (callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
      };

      CurrencyMaskDirective.prototype.registerOnTouched = function (callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
      };

      CurrencyMaskDirective.prototype.setDisabledState = function (value) {
        this.elementRef.nativeElement.disabled = value;
      };

      CurrencyMaskDirective.prototype.validate = function (abstractControl) {
        var result = {};

        if (abstractControl.value > this.max) {
          result.max = true;
        }

        if (abstractControl.value < this.min) {
          result.min = true;
        }

        return result != {} ? result : null;
      };

      CurrencyMaskDirective.prototype.writeValue = function (value) {
        this.inputHandler.setValue(value);
      };

      return CurrencyMaskDirective;
    }();

    CurrencyMaskDirective.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[currencyMask]",
        providers: [exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR, {
          provide: forms_1.NG_VALIDATORS,
          useExisting: CurrencyMaskDirective,
          multi: true
        }]
      }]
    }];
    /** @nocollapse */

    CurrencyMaskDirective.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: core_1.Optional
        }, {
          type: core_1.Inject,
          args: [currency_mask_config_1.CURRENCY_MASK_CONFIG]
        }]
      }, {
        type: core_1.ElementRef
      }, {
        type: core_1.KeyValueDiffers
      }];
    };

    CurrencyMaskDirective.propDecorators = {
      'max': [{
        type: core_1.Input
      }],
      'min': [{
        type: core_1.Input
      }],
      'options': [{
        type: core_1.Input
      }],
      'handleBlur': [{
        type: core_1.HostListener,
        args: ["blur", ["$event"]]
      }],
      'handleClick': [{
        type: core_1.HostListener,
        args: ["click", ["$event"]]
      }],
      'handleCut': [{
        type: core_1.HostListener,
        args: ["cut", ["$event"]]
      }],
      'handleInput': [{
        type: core_1.HostListener,
        args: ["input", ["$event"]]
      }],
      'handleKeydown': [{
        type: core_1.HostListener,
        args: ["keydown", ["$event"]]
      }],
      'handleKeypress': [{
        type: core_1.HostListener,
        args: ["keypress", ["$event"]]
      }],
      'handleKeyup': [{
        type: core_1.HostListener,
        args: ["keyup", ["$event"]]
      }],
      'handlePaste': [{
        type: core_1.HostListener,
        args: ["paste", ["$event"]]
      }]
    };
    exports.CurrencyMaskDirective = CurrencyMaskDirective; //# sourceMappingURL=currency-mask.directive.js.map

    /***/
  },

  /***/
  "./node_modules/ng2-currency-mask/src/currency-mask.module.js":
  /*!********************************************************************!*\
    !*** ./node_modules/ng2-currency-mask/src/currency-mask.module.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNg2CurrencyMaskSrcCurrencyMaskModuleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var currency_mask_directive_1 = __webpack_require__(
    /*! ./currency-mask.directive */
    "./node_modules/ng2-currency-mask/src/currency-mask.directive.js");

    var CurrencyMaskModule = function () {
      function CurrencyMaskModule() {}

      return CurrencyMaskModule;
    }();

    CurrencyMaskModule.decorators = [{
      type: core_1.NgModule,
      args: [{
        imports: [common_1.CommonModule, forms_1.FormsModule],
        declarations: [currency_mask_directive_1.CurrencyMaskDirective],
        exports: [currency_mask_directive_1.CurrencyMaskDirective]
      }]
    }];
    /** @nocollapse */

    CurrencyMaskModule.ctorParameters = function () {
      return [];
    };

    exports.CurrencyMaskModule = CurrencyMaskModule; //# sourceMappingURL=currency-mask.module.js.map

    /***/
  },

  /***/
  "./node_modules/ng2-currency-mask/src/input.handler.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ng2-currency-mask/src/input.handler.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNg2CurrencyMaskSrcInputHandlerJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var input_service_1 = __webpack_require__(
    /*! ./input.service */
    "./node_modules/ng2-currency-mask/src/input.service.js");

    var InputHandler = function () {
      function InputHandler(htmlInputElement, options) {
        this.inputService = new input_service_1.InputService(htmlInputElement, options);
        this.htmlInputElement = htmlInputElement;
      }

      InputHandler.prototype.handleClick = function (event, chromeAndroid) {
        var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart); //if there is no selection and the value is not null, the cursor position will be fixed. if the browser is chrome on android, the cursor will go to the end of the number.

        if (selectionRangeLength == 0 && !isNaN(this.inputService.value)) {
          this.inputService.fixCursorPosition(chromeAndroid);
        }
      };

      InputHandler.prototype.handleCut = function (event) {
        var _this = this;

        if (this.isReadOnly()) {
          return;
        }

        setTimeout(function () {
          _this.inputService.updateFieldValue();

          _this.setValue(_this.inputService.value);

          _this.onModelChange(_this.inputService.value);
        }, 0);
      };

      InputHandler.prototype.handleInput = function (event) {
        if (this.isReadOnly()) {
          return;
        }

        var keyCode = this.getNewKeyCode(this.inputService.storedRawValue, this.inputService.rawValue);
        var rawValueLength = this.inputService.rawValue.length;
        var rawValueSelectionEnd = this.inputService.inputSelection.selectionEnd;
        var rawValueWithoutSuffixEndPosition = this.inputService.getRawValueWithoutSuffixEndPosition();
        var storedRawValueLength = this.inputService.storedRawValue.length;
        this.inputService.rawValue = this.inputService.storedRawValue;

        if ((rawValueSelectionEnd != rawValueWithoutSuffixEndPosition || Math.abs(rawValueLength - storedRawValueLength) != 1) && storedRawValueLength != 0) {
          this.setCursorPosition(event);
          return;
        }

        if (rawValueLength < storedRawValueLength) {
          if (this.inputService.value != 0) {
            this.inputService.removeNumber(8);
          } else {
            this.setValue(null);
          }
        }

        if (rawValueLength > storedRawValueLength) {
          switch (keyCode) {
            case 43:
              this.inputService.changeToPositive();
              break;

            case 45:
              this.inputService.changeToNegative();
              break;

            default:
              if (!this.inputService.canInputMoreNumbers || isNaN(this.inputService.value) && String.fromCharCode(keyCode).match(/\d/) == null) {
                return;
              }

              this.inputService.addNumber(keyCode);
          }
        }

        this.setCursorPosition(event);
        this.onModelChange(this.inputService.value);
      };

      InputHandler.prototype.handleKeydown = function (event) {
        if (this.isReadOnly()) {
          return;
        }

        var keyCode = event.which || event.charCode || event.keyCode;

        if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
          event.preventDefault();
          var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);

          if (selectionRangeLength == this.inputService.rawValue.length || this.inputService.value == 0) {
            this.setValue(null);
            this.onModelChange(this.inputService.value);
          }

          if (selectionRangeLength == 0 && !isNaN(this.inputService.value)) {
            this.inputService.removeNumber(keyCode);
            this.onModelChange(this.inputService.value);
          }

          if ((keyCode === 8 || keyCode === 46) && selectionRangeLength != 0 && !isNaN(this.inputService.value)) {
            this.inputService.removeNumber(keyCode);
            this.onModelChange(this.inputService.value);
          }
        }
      };

      InputHandler.prototype.handleKeypress = function (event) {
        if (this.isReadOnly()) {
          return;
        }

        var keyCode = event.which || event.charCode || event.keyCode;

        if (keyCode == undefined || [9, 13].indexOf(keyCode) != -1 || this.isArrowEndHomeKeyInFirefox(event)) {
          return;
        }

        switch (keyCode) {
          case 43:
            this.inputService.changeToPositive();
            break;

          case 45:
            this.inputService.changeToNegative();
            break;

          default:
            if (this.inputService.canInputMoreNumbers && (!isNaN(this.inputService.value) || String.fromCharCode(keyCode).match(/\d/) != null)) {
              this.inputService.addNumber(keyCode);
            }

        }

        event.preventDefault();
        this.onModelChange(this.inputService.value);
      };

      InputHandler.prototype.handleKeyup = function (event) {
        this.inputService.fixCursorPosition();
      };

      InputHandler.prototype.handlePaste = function (event) {
        var _this = this;

        if (this.isReadOnly()) {
          return;
        }

        setTimeout(function () {
          _this.inputService.updateFieldValue();

          _this.setValue(_this.inputService.value);

          _this.onModelChange(_this.inputService.value);
        }, 1);
      };

      InputHandler.prototype.updateOptions = function (options) {
        this.inputService.updateOptions(options);
      };

      InputHandler.prototype.getOnModelChange = function () {
        return this.onModelChange;
      };

      InputHandler.prototype.setOnModelChange = function (callbackFunction) {
        this.onModelChange = callbackFunction;
      };

      InputHandler.prototype.getOnModelTouched = function () {
        return this.onModelTouched;
      };

      InputHandler.prototype.setOnModelTouched = function (callbackFunction) {
        this.onModelTouched = callbackFunction;
      };

      InputHandler.prototype.setValue = function (value) {
        this.inputService.value = value;
      };

      InputHandler.prototype.getNewKeyCode = function (oldString, newString) {
        if (oldString.length > newString.length) {
          return null;
        }

        for (var x = 0; x < newString.length; x++) {
          if (oldString.length == x || oldString[x] != newString[x]) {
            return newString.charCodeAt(x);
          }
        }
      };

      InputHandler.prototype.isArrowEndHomeKeyInFirefox = function (event) {
        if ([35, 36, 37, 38, 39, 40].indexOf(event.keyCode) != -1 && (event.charCode == undefined || event.charCode == 0)) {
          return true;
        }

        return false;
      };

      InputHandler.prototype.isReadOnly = function () {
        return this.htmlInputElement && this.htmlInputElement.readOnly;
      };

      InputHandler.prototype.setCursorPosition = function (event) {
        var rawValueWithoutSuffixEndPosition = this.inputService.getRawValueWithoutSuffixEndPosition();
        setTimeout(function () {
          event.target.setSelectionRange(rawValueWithoutSuffixEndPosition, rawValueWithoutSuffixEndPosition);
        }, 0);
      };

      return InputHandler;
    }();

    exports.InputHandler = InputHandler; //# sourceMappingURL=input.handler.js.map

    /***/
  },

  /***/
  "./node_modules/ng2-currency-mask/src/input.manager.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ng2-currency-mask/src/input.manager.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNg2CurrencyMaskSrcInputManagerJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var InputManager = function () {
      function InputManager(htmlInputElement) {
        this.htmlInputElement = htmlInputElement;
      }

      InputManager.prototype.setCursorAt = function (position) {
        if (this.htmlInputElement.setSelectionRange) {
          this.htmlInputElement.focus();
          this.htmlInputElement.setSelectionRange(position, position);
        } else if (this.htmlInputElement.createTextRange) {
          var textRange = this.htmlInputElement.createTextRange();
          textRange.collapse(true);
          textRange.moveEnd("character", position);
          textRange.moveStart("character", position);
          textRange.select();
        }
      };

      InputManager.prototype.updateValueAndCursor = function (newRawValue, oldLength, selectionStart) {
        this.rawValue = newRawValue;
        var newLength = newRawValue.length;
        selectionStart = selectionStart - (oldLength - newLength);
        this.setCursorAt(selectionStart);
      };

      Object.defineProperty(InputManager.prototype, "canInputMoreNumbers", {
        get: function get() {
          var haventReachedMaxLength = !(this.rawValue.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
          var selectionStart = this.inputSelection.selectionStart;
          var selectionEnd = this.inputSelection.selectionEnd;
          var haveNumberSelected = selectionStart != selectionEnd && this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/\d/) ? true : false;
          var startWithZero = this.htmlInputElement.value.substring(0, 1) == "0";
          return haventReachedMaxLength || haveNumberSelected || startWithZero;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(InputManager.prototype, "inputSelection", {
        get: function get() {
          var selectionStart = 0;
          var selectionEnd = 0;

          if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
            selectionStart = this.htmlInputElement.selectionStart;
            selectionEnd = this.htmlInputElement.selectionEnd;
          } else {
            var range = document.getSelection().baseNode;

            if (range && range.firstChild == this.htmlInputElement) {
              var lenght = this.htmlInputElement.value.length;
              var normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
              var startRange = this.htmlInputElement.createTextRange();
              var endRange = this.htmlInputElement.createTextRange();
              endRange.collapse(false);

              if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                selectionStart = selectionEnd = lenght;
              } else {
                selectionStart = -startRange.moveStart("character", -lenght);
                selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;

                if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                  selectionEnd = lenght;
                } else {
                  selectionEnd = -startRange.moveEnd("character", -lenght);
                  selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
                }
              }
            }
          }

          return {
            selectionStart: selectionStart,
            selectionEnd: selectionEnd
          };
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(InputManager.prototype, "rawValue", {
        get: function get() {
          return this.htmlInputElement && this.htmlInputElement.value;
        },
        set: function set(value) {
          this._storedRawValue = value;

          if (this.htmlInputElement) {
            this.htmlInputElement.value = value;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(InputManager.prototype, "storedRawValue", {
        get: function get() {
          return this._storedRawValue;
        },
        enumerable: true,
        configurable: true
      });
      return InputManager;
    }();

    exports.InputManager = InputManager; //# sourceMappingURL=input.manager.js.map

    /***/
  },

  /***/
  "./node_modules/ng2-currency-mask/src/input.service.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ng2-currency-mask/src/input.service.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNg2CurrencyMaskSrcInputServiceJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var input_manager_1 = __webpack_require__(
    /*! ./input.manager */
    "./node_modules/ng2-currency-mask/src/input.manager.js");

    var InputService = function () {
      function InputService(htmlInputElement, options) {
        this.htmlInputElement = htmlInputElement;
        this.options = options;
        this.inputManager = new input_manager_1.InputManager(htmlInputElement);
      }

      InputService.prototype.addNumber = function (keyCode) {
        if (!this.rawValue) {
          this.rawValue = this.applyMask(false, "0");
        }

        var keyChar = String.fromCharCode(keyCode);
        var selectionStart = this.inputSelection.selectionStart;
        var selectionEnd = this.inputSelection.selectionEnd;
        this.rawValue = this.rawValue.substring(0, selectionStart) + keyChar + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart + 1);
      };

      InputService.prototype.applyMask = function (isNumber, rawValue) {
        var _a = this.options,
            allowNegative = _a.allowNegative,
            decimal = _a.decimal,
            precision = _a.precision,
            prefix = _a.prefix,
            suffix = _a.suffix,
            thousands = _a.thousands;
        rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
        var onlyNumbers = rawValue.replace(/[^0-9]/g, "");

        if (!onlyNumbers) {
          return "";
        }

        var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision).replace(/^0*/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, thousands);

        if (integerPart == "") {
          integerPart = "0";
        }

        var newRawValue = integerPart;
        var decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);

        if (precision > 0) {
          decimalPart = "0".repeat(precision - decimalPart.length) + decimalPart;
          newRawValue += decimal + decimalPart;
        }

        var isZero = parseInt(integerPart) == 0 && (parseInt(decimalPart) == 0 || decimalPart == "");
        var operator = rawValue.indexOf("-") > -1 && allowNegative && !isZero ? "-" : "";
        return operator + prefix + newRawValue + suffix;
      };

      InputService.prototype.clearMask = function (rawValue) {
        if (rawValue == null || rawValue == "") {
          return null;
        }

        var value = rawValue.replace(this.options.prefix, "").replace(this.options.suffix, "");

        if (this.options.thousands) {
          value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
        }

        if (this.options.decimal) {
          value = value.replace(this.options.decimal, ".");
        }

        return parseFloat(value);
      };

      InputService.prototype.changeToNegative = function () {
        if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
          var selectionStart = this.inputSelection.selectionStart;
          this.rawValue = "-" + this.rawValue;
          this.updateFieldValue(selectionStart + 1);
        }
      };

      InputService.prototype.changeToPositive = function () {
        var selectionStart = this.inputSelection.selectionStart;
        this.rawValue = this.rawValue.replace("-", "");
        this.updateFieldValue(selectionStart - 1);
      };

      InputService.prototype.fixCursorPosition = function (forceToEndPosition) {
        var currentCursorPosition = this.inputSelection.selectionStart; //if the current cursor position is after the number end position, it is moved to the end of the number, ignoring the prefix or suffix. this behavior can be forced with forceToEndPosition flag

        if (currentCursorPosition > this.getRawValueWithoutSuffixEndPosition() || forceToEndPosition) {
          this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition()); //if the current cursor position is before the number start position, it is moved to the start of the number, ignoring the prefix or suffix
        } else if (currentCursorPosition < this.getRawValueWithoutPrefixStartPosition()) {
          this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition());
        }
      };

      InputService.prototype.getRawValueWithoutSuffixEndPosition = function () {
        return this.rawValue.length - this.options.suffix.length;
      };

      InputService.prototype.getRawValueWithoutPrefixStartPosition = function () {
        return this.value != null && this.value < 0 ? this.options.prefix.length + 1 : this.options.prefix.length;
      };

      InputService.prototype.removeNumber = function (keyCode) {
        var _a = this.options,
            decimal = _a.decimal,
            thousands = _a.thousands;
        var selectionEnd = this.inputSelection.selectionEnd;
        var selectionStart = this.inputSelection.selectionStart;

        if (selectionStart > this.rawValue.length - this.options.suffix.length) {
          selectionEnd = this.rawValue.length - this.options.suffix.length;
          selectionStart = this.rawValue.length - this.options.suffix.length;
        } //there is no selection


        if (selectionEnd == selectionStart) {
          //delete key and the target digit is a number
          if ((keyCode == 46 || keyCode == 63272) && /^\d+$/.test(this.rawValue.substring(selectionStart, selectionEnd + 1))) {
            selectionEnd = selectionEnd + 1;
          } //delete key and the target digit is the decimal or thousands divider


          if ((keyCode == 46 || keyCode == 63272) && (this.rawValue.substring(selectionStart, selectionEnd + 1) == decimal || this.rawValue.substring(selectionStart, selectionEnd + 1) == thousands)) {
            selectionEnd = selectionEnd + 2;
            selectionStart = selectionStart + 1;
          } //backspace key and the target digit is a number


          if (keyCode == 8 && /^\d+$/.test(this.rawValue.substring(selectionStart - 1, selectionEnd))) {
            selectionStart = selectionStart - 1;
          } //backspace key and the target digit is the decimal or thousands divider


          if (keyCode == 8 && (this.rawValue.substring(selectionStart - 1, selectionEnd) == decimal || this.rawValue.substring(selectionStart - 1, selectionEnd) == thousands)) {
            selectionStart = selectionStart - 2;
            selectionEnd = selectionEnd - 1;
          }
        }

        this.rawValue = this.rawValue.substring(0, selectionStart) + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart);
      };

      InputService.prototype.updateFieldValue = function (selectionStart) {
        var newRawValue = this.applyMask(false, this.rawValue || "");
        selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
        this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
      };

      InputService.prototype.updateOptions = function (options) {
        var value = this.value;
        this.options = options;
        this.value = value;
      };

      Object.defineProperty(InputService.prototype, "canInputMoreNumbers", {
        get: function get() {
          return this.inputManager.canInputMoreNumbers;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(InputService.prototype, "inputSelection", {
        get: function get() {
          return this.inputManager.inputSelection;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(InputService.prototype, "rawValue", {
        get: function get() {
          return this.inputManager.rawValue;
        },
        set: function set(value) {
          this.inputManager.rawValue = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(InputService.prototype, "storedRawValue", {
        get: function get() {
          return this.inputManager.storedRawValue;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(InputService.prototype, "value", {
        get: function get() {
          return this.clearMask(this.rawValue);
        },
        set: function set(value) {
          this.rawValue = this.applyMask(true, "" + value);
        },
        enumerable: true,
        configurable: true
      });
      return InputService;
    }();

    exports.InputService = InputService; //# sourceMappingURL=input.service.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~approval-data-detail-approval-data-detail-module~registration-data-registration-data-module~~6741a029-es5.js.map