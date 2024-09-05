(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~new-student-registration-detail-new-student-registration-detail-module~questionnaire-data-st~ce6a8729"],{

/***/ "./node_modules/ng2-archwizard/dist/archwizard.module.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/archwizard.module.js ***!
  \***************************************************************/
/*! exports provided: ArchwizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchwizardModule", function() { return ArchwizardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/wizard.component */ "./node_modules/ng2-archwizard/dist/components/wizard.component.js");
/* harmony import */ var _components_wizard_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/wizard-navigation-bar.component */ "./node_modules/ng2-archwizard/dist/components/wizard-navigation-bar.component.js");
/* harmony import */ var _components_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/wizard-step.component */ "./node_modules/ng2-archwizard/dist/components/wizard-step.component.js");
/* harmony import */ var _components_wizard_completion_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/wizard-completion-step.component */ "./node_modules/ng2-archwizard/dist/components/wizard-completion-step.component.js");
/* harmony import */ var _directives_next_step_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/next-step.directive */ "./node_modules/ng2-archwizard/dist/directives/next-step.directive.js");
/* harmony import */ var _directives_previous_step_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/previous-step.directive */ "./node_modules/ng2-archwizard/dist/directives/previous-step.directive.js");
/* harmony import */ var _directives_optional_step_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/optional-step.directive */ "./node_modules/ng2-archwizard/dist/directives/optional-step.directive.js");
/* harmony import */ var _directives_go_to_step_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/go-to-step.directive */ "./node_modules/ng2-archwizard/dist/directives/go-to-step.directive.js");
/* harmony import */ var _directives_wizard_step_title_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/wizard-step-title.directive */ "./node_modules/ng2-archwizard/dist/directives/wizard-step-title.directive.js");
/* harmony import */ var _directives_enable_back_links_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/enable-back-links.directive */ "./node_modules/ng2-archwizard/dist/directives/enable-back-links.directive.js");
/* harmony import */ var _directives_wizard_step_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/wizard-step.directive */ "./node_modules/ng2-archwizard/dist/directives/wizard-step.directive.js");
/* harmony import */ var _directives_wizard_completion_step_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/wizard-completion-step.directive */ "./node_modules/ng2-archwizard/dist/directives/wizard-completion-step.directive.js");
/* harmony import */ var _directives_selected_step_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/selected-step.directive */ "./node_modules/ng2-archwizard/dist/directives/selected-step.directive.js");
/* harmony import */ var _directives_reset_wizard_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/reset-wizard.directive */ "./node_modules/ng2-archwizard/dist/directives/reset-wizard.directive.js");
















/**
 * The module defining all the content inside `ng2-archwizard`
 *
 * @author Marc Arndt
 */
var ArchwizardModule = /** @class */ (function () {
    function ArchwizardModule() {
    }
    /* istanbul ignore next */
    ArchwizardModule.forRoot = function () {
        return { ngModule: ArchwizardModule, providers: [] };
    };
    ArchwizardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        _components_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"],
                        _components_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__["WizardStepComponent"],
                        _components_wizard_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["WizardNavigationBarComponent"],
                        _components_wizard_completion_step_component__WEBPACK_IMPORTED_MODULE_5__["WizardCompletionStepComponent"],
                        _directives_go_to_step_directive__WEBPACK_IMPORTED_MODULE_9__["GoToStepDirective"],
                        _directives_next_step_directive__WEBPACK_IMPORTED_MODULE_6__["NextStepDirective"],
                        _directives_previous_step_directive__WEBPACK_IMPORTED_MODULE_7__["PreviousStepDirective"],
                        _directives_optional_step_directive__WEBPACK_IMPORTED_MODULE_8__["OptionalStepDirective"],
                        _directives_wizard_step_title_directive__WEBPACK_IMPORTED_MODULE_10__["WizardStepTitleDirective"],
                        _directives_enable_back_links_directive__WEBPACK_IMPORTED_MODULE_11__["EnableBackLinksDirective"],
                        _directives_wizard_step_directive__WEBPACK_IMPORTED_MODULE_12__["WizardStepDirective"],
                        _directives_wizard_completion_step_directive__WEBPACK_IMPORTED_MODULE_13__["WizardCompletionStepDirective"],
                        _directives_selected_step_directive__WEBPACK_IMPORTED_MODULE_14__["SelectedStepDirective"],
                        _directives_reset_wizard_directive__WEBPACK_IMPORTED_MODULE_15__["ResetWizardDirective"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ],
                    exports: [
                        _components_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"],
                        _components_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__["WizardStepComponent"],
                        _components_wizard_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["WizardNavigationBarComponent"],
                        _components_wizard_completion_step_component__WEBPACK_IMPORTED_MODULE_5__["WizardCompletionStepComponent"],
                        _directives_go_to_step_directive__WEBPACK_IMPORTED_MODULE_9__["GoToStepDirective"],
                        _directives_next_step_directive__WEBPACK_IMPORTED_MODULE_6__["NextStepDirective"],
                        _directives_previous_step_directive__WEBPACK_IMPORTED_MODULE_7__["PreviousStepDirective"],
                        _directives_optional_step_directive__WEBPACK_IMPORTED_MODULE_8__["OptionalStepDirective"],
                        _directives_wizard_step_title_directive__WEBPACK_IMPORTED_MODULE_10__["WizardStepTitleDirective"],
                        _directives_enable_back_links_directive__WEBPACK_IMPORTED_MODULE_11__["EnableBackLinksDirective"],
                        _directives_wizard_step_directive__WEBPACK_IMPORTED_MODULE_12__["WizardStepDirective"],
                        _directives_wizard_completion_step_directive__WEBPACK_IMPORTED_MODULE_13__["WizardCompletionStepDirective"],
                        _directives_selected_step_directive__WEBPACK_IMPORTED_MODULE_14__["SelectedStepDirective"],
                        _directives_reset_wizard_directive__WEBPACK_IMPORTED_MODULE_15__["ResetWizardDirective"]
                    ]
                },] },
    ];
    /** @nocollapse */
    ArchwizardModule.ctorParameters = function () { return []; };
    return ArchwizardModule;
}());

//# sourceMappingURL=archwizard.module.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/components/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/components/index.js ***!
  \**************************************************************/
/*! exports provided: WizardComponent, WizardCompletionStepComponent, WizardNavigationBarComponent, WizardStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wizard.component */ "./node_modules/ng2-archwizard/dist/components/wizard.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return _wizard_component__WEBPACK_IMPORTED_MODULE_0__["WizardComponent"]; });

/* harmony import */ var _wizard_completion_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wizard-completion-step.component */ "./node_modules/ng2-archwizard/dist/components/wizard-completion-step.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStepComponent", function() { return _wizard_completion_step_component__WEBPACK_IMPORTED_MODULE_1__["WizardCompletionStepComponent"]; });

/* harmony import */ var _wizard_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard-navigation-bar.component */ "./node_modules/ng2-archwizard/dist/components/wizard-navigation-bar.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardNavigationBarComponent", function() { return _wizard_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__["WizardNavigationBarComponent"]; });

/* harmony import */ var _wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard-step.component */ "./node_modules/ng2-archwizard/dist/components/wizard-step.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardStepComponent", function() { return _wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/components/wizard-completion-step.component.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/components/wizard-completion-step.component.js ***!
  \*****************************************************************************************/
/*! exports provided: WizardCompletionStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStepComponent", function() { return WizardCompletionStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/wizard-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js");
/* harmony import */ var _util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/wizard-completion-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-completion-step.interface.js");
/**
 * Created by marc on 20.05.17.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * The `wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `wizard-completion-step` automatically sets the `wizard` amd all steps inside the `wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-completion-step [stepTitle]="title of the wizard step" [navigationSymbol]="navigation symbol"
 *    [navigationSymbolFontFamily]="navigation symbol font family"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <wizard-completion-step stepTitle="Step 1" navigationSymbol="1">
 *    ...
 * </wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <wizard-completion-step stepTitle="Step 1" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepComponent = /** @class */ (function (_super) {
    __extends(WizardCompletionStepComponent, _super);
    function WizardCompletionStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'wizard-completion-step',
                    template: "\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    :host {\n      height: auto;\n      width: 100%;\n    }\n  "],
                    providers: [
                        { provide: _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__["WizardStep"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return WizardCompletionStepComponent; }) },
                        { provide: _util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__["WizardCompletionStep"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return WizardCompletionStepComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardCompletionStepComponent.ctorParameters = function () { return []; };
    return WizardCompletionStepComponent;
}(_util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__["WizardCompletionStep"]));

//# sourceMappingURL=wizard-completion-step.component.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/components/wizard-navigation-bar.component.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/components/wizard-navigation-bar.component.js ***!
  \****************************************************************************************/
/*! exports provided: WizardNavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardNavigationBarComponent", function() { return WizardNavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/wizard-state.model */ "./node_modules/ng2-archwizard/dist/navigation/wizard-state.model.js");


/**
 * The `wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-navigation-bar></wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
var WizardNavigationBarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state the wizard currently resides in
     */
    function WizardNavigationBarComponent(wizardState) {
        this.wizardState = wizardState;
        /**
         * The direction in which the wizard steps should be shown in the navigation bar.
         * This value can be either `left-to-right` or `right-to-left`
         */
        this.direction = 'left-to-right';
    }
    Object.defineProperty(WizardNavigationBarComponent.prototype, "navigationMode", {
        /**
         * The navigation mode
         *
         * @returns {NavigationMode}
         */
        get: function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationBarComponent.prototype, "wizardSteps", {
        /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @returns {Array<WizardStep>} An array containing all [[WizardStep]]s
         */
        get: function () {
            switch (this.direction) {
                case 'right-to-left':
                    return this.wizardState.wizardSteps.reverse();
                case 'left-to-right':
                default:
                    return this.wizardState.wizardSteps;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationBarComponent.prototype, "numberOfWizardSteps", {
        /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @returns {number} The number of wizard steps to be displayed
         */
        get: function () {
            return this.wizardState.wizardSteps.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as current
     */
    WizardNavigationBarComponent.prototype.isCurrent = function (wizardStep) {
        return wizardStep.selected && !wizardStep.completed && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as done
     */
    WizardNavigationBarComponent.prototype.isDone = function (wizardStep) {
        return (wizardStep.completed && !wizardStep.selected) || this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as default
     */
    WizardNavigationBarComponent.prototype.isDefault = function (wizardStep) {
        return !wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as editing
     */
    WizardNavigationBarComponent.prototype.isEditing = function (wizardStep) {
        return wizardStep.selected && wizardStep.completed && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as optional
     */
    WizardNavigationBarComponent.prototype.isOptional = function (wizardStep) {
        return wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as navigable
     */
    WizardNavigationBarComponent.prototype.isNavigable = function (wizardStep) {
        return !wizardStep.selected && !this.wizardState.disableNavigationBar &&
            this.navigationMode.isNavigable(this.wizardState.getIndexOfStep(wizardStep));
    };
    WizardNavigationBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'wizard-navigation-bar',
                    template: "\n    <ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n      <li *ngFor=\"let step of wizardSteps\"\n          [attr.step-symbol]=\"step.navigationSymbol\"\n          [ngStyle]=\"{\n            'font-family': step.navigationSymbolFontFamily\n          }\"\n          [ngClass]=\"{\n            default: isDefault(step),\n            current: isCurrent(step),\n            done: isDone(step),\n            editing: isEditing(step),\n            optional: isOptional(step),\n            navigable: isNavigable(step)\n      }\">\n        <div>\n          <a [goToStep]=\"step\">\n            <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\n            <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n          </a>\n        </div>\n      </li>\n    </ul>\n  ",
                    styles: ["\n    /*\n     color definitions\n     */\n    /*\n     dot definitions\n     */\n    /*\n     extra distance between the bottom of the dots and the baseline texts\n     */\n    :host.horizontal.small ul.steps-indicator {\n      padding: 24px 0 10px 0;\n    }\n    :host.horizontal.small ul.steps-indicator li:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 14px);\n      top: -7px;\n      left: calc(50% + 7px);\n    }\n    :host.horizontal.small ul.steps-indicator li:after {\n      position: absolute;\n      top: -14px;\n      left: calc(50% - 7px);\n      width: 14px;\n      height: 14px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 14px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    :host.horizontal.small ul.steps-indicator li.default a:hover {\n      color: #808080;\n    }\n    :host.horizontal.small ul.steps-indicator li.current:after {\n      background-color: #808080;\n    }\n    :host.horizontal.small ul.steps-indicator li.done:after {\n      background-color: #339933;\n    }\n    :host.horizontal.small ul.steps-indicator li.optional:after {\n      background-color: #38ef38;\n    }\n    :host.horizontal.small ul.steps-indicator li.editing:after {\n      background-color: #FF0000;\n    }\n    :host.horizontal.large-filled ul.steps-indicator {\n      padding: 60px 0 10px 0;\n    }\n    :host.horizontal.large-filled ul.steps-indicator li:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    :host.horizontal.large-filled ul.steps-indicator li:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    :host.horizontal.large-filled ul.steps-indicator li.default a:hover {\n      color: #808080;\n    }\n    :host.horizontal.large-filled ul.steps-indicator li.current:after {\n      background-color: #808080;\n    }\n    :host.horizontal.large-filled ul.steps-indicator li.done:after {\n      background-color: #339933;\n    }\n    :host.horizontal.large-filled ul.steps-indicator li.optional:after {\n      background-color: #38ef38;\n    }\n    :host.horizontal.large-filled ul.steps-indicator li.editing:after {\n      background-color: #FF0000;\n    }\n    :host.horizontal.large-empty ul.steps-indicator {\n      padding: 60px 0 10px 0;\n    }\n    :host.horizontal.large-empty ul.steps-indicator li:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    :host.horizontal.large-empty ul.steps-indicator li:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n    }\n    :host.horizontal.large-empty ul.steps-indicator li.default a:hover {\n      color: #808080;\n    }\n    :host.horizontal.large-empty ul.steps-indicator li.current:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n    }\n    :host.horizontal.large-empty ul.steps-indicator li.done:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n    }\n    :host.horizontal.large-empty ul.steps-indicator li.optional:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n    }\n    :host.horizontal.large-empty ul.steps-indicator li.editing:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n    }\n    :host.horizontal.large-filled-symbols ul.steps-indicator {\n      padding: 60px 0 10px 0;\n    }\n    :host.horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    :host.horizontal.large-filled-symbols ul.steps-indicator li:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n      color: black;\n      content: attr(step-symbol);\n    }\n    :host.horizontal.large-filled-symbols ul.steps-indicator li.default a:hover {\n      color: #808080;\n    }\n    :host.horizontal.large-filled-symbols ul.steps-indicator li.current:after {\n      background-color: #808080;\n      color: black;\n    }\n    :host.horizontal.large-filled-symbols ul.steps-indicator li.done:after {\n      background-color: #339933;\n      color: black;\n    }\n    :host.horizontal.large-filled-symbols ul.steps-indicator li.optional:after {\n      background-color: #38ef38;\n      color: black;\n    }\n    :host.horizontal.large-filled-symbols ul.steps-indicator li.editing:after {\n      background-color: #FF0000;\n      color: black;\n    }\n    :host.horizontal.large-empty-symbols ul.steps-indicator {\n      padding: 60px 0 10px 0;\n    }\n    :host.horizontal.large-empty-symbols ul.steps-indicator li:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    :host.horizontal.large-empty-symbols ul.steps-indicator li:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n      color: #E6E6E6;\n      content: attr(step-symbol);\n    }\n    :host.horizontal.large-empty-symbols ul.steps-indicator li.default a:hover {\n      color: #808080;\n    }\n    :host.horizontal.large-empty-symbols ul.steps-indicator li.current:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n      color: #808080;\n    }\n    :host.horizontal.large-empty-symbols ul.steps-indicator li.done:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n      color: #339933;\n    }\n    :host.horizontal.large-empty-symbols ul.steps-indicator li.optional:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n      color: #38ef38;\n    }\n    :host.horizontal.large-empty-symbols ul.steps-indicator li.editing:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n      color: #FF0000;\n    }\n    :host.horizontal ul.steps-indicator {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: 0;\n      width: 100%;\n      list-style: none;\n      /* --- http://www.paulirish.com/2012/box-sizing-border-box-ftw/ ---- */\n    }\n    :host.horizontal ul.steps-indicator.steps-2:before {\n      left: 25%;\n      right: 25%;\n    }\n    :host.horizontal ul.steps-indicator.steps-2 li {\n      width: 50%;\n    }\n    :host.horizontal ul.steps-indicator.steps-3:before {\n      left: 16.66666667%;\n      right: 16.66666667%;\n    }\n    :host.horizontal ul.steps-indicator.steps-3 li {\n      width: 33.33333333%;\n    }\n    :host.horizontal ul.steps-indicator.steps-4:before {\n      left: 12.5%;\n      right: 12.5%;\n    }\n    :host.horizontal ul.steps-indicator.steps-4 li {\n      width: 25%;\n    }\n    :host.horizontal ul.steps-indicator.steps-5:before {\n      left: 10%;\n      right: 10%;\n    }\n    :host.horizontal ul.steps-indicator.steps-5 li {\n      width: 20%;\n    }\n    :host.horizontal ul.steps-indicator.steps-6:before {\n      left: 8.33333333%;\n      right: 8.33333333%;\n    }\n    :host.horizontal ul.steps-indicator.steps-6 li {\n      width: 16.66666667%;\n    }\n    :host.horizontal ul.steps-indicator.steps-7:before {\n      left: 7.14285714%;\n      right: 7.14285714%;\n    }\n    :host.horizontal ul.steps-indicator.steps-7 li {\n      width: 14.28571429%;\n    }\n    :host.horizontal ul.steps-indicator.steps-8:before {\n      left: 6.25%;\n      right: 6.25%;\n    }\n    :host.horizontal ul.steps-indicator.steps-8 li {\n      width: 12.5%;\n    }\n    :host.horizontal ul.steps-indicator.steps-9:before {\n      left: 5.55555556%;\n      right: 5.55555556%;\n    }\n    :host.horizontal ul.steps-indicator.steps-9 li {\n      width: 11.11111111%;\n    }\n    :host.horizontal ul.steps-indicator.steps-10:before {\n      left: 5%;\n      right: 5%;\n    }\n    :host.horizontal ul.steps-indicator.steps-10 li {\n      width: 10%;\n    }\n    :host.horizontal ul.steps-indicator * {\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n    }\n    :host.horizontal ul.steps-indicator li {\n      position: relative;\n      margin: 0;\n      padding: 10px 0 0 0;\n      pointer-events: none;\n    }\n    :host.horizontal ul.steps-indicator li div {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    :host.horizontal ul.steps-indicator li div a {\n      color: #808080;\n      line-height: 14px;\n      font-size: 14px;\n      text-decoration: none;\n      text-transform: uppercase;\n      text-align: center;\n      font-weight: bold;\n      transition: 0.25s;\n      cursor: pointer;\n    }\n    :host.horizontal ul.steps-indicator li div a:hover {\n      color: #4d4d4d;\n    }\n    :host.horizontal ul.steps-indicator li.navigable {\n      pointer-events: auto;\n    }\n    /*\n     color definitions\n     */\n    /*\n     dot definitions\n     */\n    /*\n     extra distance between the bottom of the dots and the baseline texts\n     */\n    :host.vertical {\n      max-width: 280px;\n      width: 20%;\n      height: 100%;\n      position: sticky;\n      top: 0;\n    }\n    :host.vertical.small ul.steps-indicator {\n      padding: 5px 5px 5px 19px;\n    }\n    :host.vertical.small ul.steps-indicator li:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -7px;\n      top: 14px;\n      height: calc(100% - 14px);\n      width: 1px;\n    }\n    :host.vertical.small ul.steps-indicator li:after {\n      position: absolute;\n      top: 0;\n      left: -14px;\n      width: 14px;\n      height: 14px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 14px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    :host.vertical.small ul.steps-indicator li div {\n      min-height: 14px;\n    }\n    :host.vertical.small ul.steps-indicator li.default a:hover {\n      color: #808080;\n    }\n    :host.vertical.small ul.steps-indicator li.current:after {\n      background-color: #808080;\n    }\n    :host.vertical.small ul.steps-indicator li.done:after {\n      background-color: #339933;\n    }\n    :host.vertical.small ul.steps-indicator li.optional:after {\n      background-color: #38ef38;\n    }\n    :host.vertical.small ul.steps-indicator li.editing:after {\n      background-color: #FF0000;\n    }\n    :host.vertical.large-filled ul.steps-indicator {\n      padding: 5px 5px 5px 55px;\n    }\n    :host.vertical.large-filled ul.steps-indicator li:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    :host.vertical.large-filled ul.steps-indicator li:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    :host.vertical.large-filled ul.steps-indicator li div {\n      min-height: 50px;\n    }\n    :host.vertical.large-filled ul.steps-indicator li.default a:hover {\n      color: #808080;\n    }\n    :host.vertical.large-filled ul.steps-indicator li.current:after {\n      background-color: #808080;\n    }\n    :host.vertical.large-filled ul.steps-indicator li.done:after {\n      background-color: #339933;\n    }\n    :host.vertical.large-filled ul.steps-indicator li.optional:after {\n      background-color: #38ef38;\n    }\n    :host.vertical.large-filled ul.steps-indicator li.editing:after {\n      background-color: #FF0000;\n    }\n    :host.vertical.large-empty ul.steps-indicator {\n      padding: 5px 5px 5px 55px;\n    }\n    :host.vertical.large-empty ul.steps-indicator li:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    :host.vertical.large-empty ul.steps-indicator li:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n    }\n    :host.vertical.large-empty ul.steps-indicator li div {\n      min-height: 54px;\n    }\n    :host.vertical.large-empty ul.steps-indicator li.default a:hover {\n      color: #808080;\n    }\n    :host.vertical.large-empty ul.steps-indicator li.current:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n    }\n    :host.vertical.large-empty ul.steps-indicator li.done:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n    }\n    :host.vertical.large-empty ul.steps-indicator li.optional:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n    }\n    :host.vertical.large-empty ul.steps-indicator li.editing:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n    }\n    :host.vertical.large-filled-symbols ul.steps-indicator {\n      padding: 5px 5px 5px 55px;\n    }\n    :host.vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    :host.vertical.large-filled-symbols ul.steps-indicator li:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n      color: black;\n      content: attr(step-symbol);\n    }\n    :host.vertical.large-filled-symbols ul.steps-indicator li div {\n      min-height: 50px;\n    }\n    :host.vertical.large-filled-symbols ul.steps-indicator li.default a:hover {\n      color: #808080;\n    }\n    :host.vertical.large-filled-symbols ul.steps-indicator li.current:after {\n      background-color: #808080;\n      color: black;\n    }\n    :host.vertical.large-filled-symbols ul.steps-indicator li.done:after {\n      background-color: #339933;\n      color: black;\n    }\n    :host.vertical.large-filled-symbols ul.steps-indicator li.optional:after {\n      background-color: #38ef38;\n      color: black;\n    }\n    :host.vertical.large-filled-symbols ul.steps-indicator li.editing:after {\n      background-color: #FF0000;\n      color: black;\n    }\n    :host.vertical.large-empty-symbols ul.steps-indicator {\n      padding: 5px 5px 5px 55px;\n    }\n    :host.vertical.large-empty-symbols ul.steps-indicator li:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    :host.vertical.large-empty-symbols ul.steps-indicator li:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n      color: #E6E6E6;\n      content: attr(step-symbol);\n    }\n    :host.vertical.large-empty-symbols ul.steps-indicator li div {\n      min-height: 54px;\n    }\n    :host.vertical.large-empty-symbols ul.steps-indicator li.default a:hover {\n      color: #808080;\n    }\n    :host.vertical.large-empty-symbols ul.steps-indicator li.current:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n      color: #808080;\n    }\n    :host.vertical.large-empty-symbols ul.steps-indicator li.done:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n      color: #339933;\n    }\n    :host.vertical.large-empty-symbols ul.steps-indicator li.optional:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n      color: #38ef38;\n    }\n    :host.vertical.large-empty-symbols ul.steps-indicator li.editing:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n      color: #FF0000;\n    }\n    :host.vertical ul.steps-indicator {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      list-style: none;\n      margin: auto;\n      /* --- http://www.paulirish.com/2012/box-sizing-border-box-ftw/ ---- */\n    }\n    :host.vertical ul.steps-indicator * {\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n    }\n    :host.vertical ul.steps-indicator li {\n      position: relative;\n      pointer-events: none;\n    }\n    :host.vertical ul.steps-indicator li:not(:last-child) {\n      margin-bottom: 0;\n      padding-bottom: 10px;\n    }\n    :host.vertical ul.steps-indicator li div {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n    :host.vertical ul.steps-indicator li div a {\n      color: #808080;\n      margin-left: 15px;\n      line-height: 14px;\n      font-size: 14px;\n      text-decoration: none;\n      text-transform: uppercase;\n      text-align: left;\n      font-weight: bold;\n      transition: 0.25s;\n      cursor: pointer;\n    }\n    :host.vertical ul.steps-indicator li div a:hover {\n      color: #4d4d4d;\n    }\n    :host.vertical ul.steps-indicator li.navigable {\n      pointer-events: auto;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    WizardNavigationBarComponent.ctorParameters = function () { return [
        { type: _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_1__["WizardState"], },
    ]; };
    WizardNavigationBarComponent.propDecorators = {
        'direction': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WizardNavigationBarComponent;
}());

//# sourceMappingURL=wizard-navigation-bar.component.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/components/wizard-step.component.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/components/wizard-step.component.js ***!
  \******************************************************************************/
/*! exports provided: WizardStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepComponent", function() { return WizardStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/wizard-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The `wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` input:
 *
 * ```html
 * <wizard-step [stepTitle]="step title" [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </wizard-step>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <wizard-step [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template wizardStepTitle>
 *        step title
 *    </ng-template>
 *    ...
 * </wizard-step>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` input:
 *
 * ```html
 * <wizard-step stepTitle="Address information" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </wizard-step>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <wizard-step navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    <ng-template wizardStepTitle>
 *        Address information
 *    </ng-template>
 * </wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepComponent = /** @class */ (function (_super) {
    __extends(WizardStepComponent, _super);
    function WizardStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'wizard-step',
                    template: "\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    :host {\n      height: auto;\n      width: 100%;\n    }\n  "],
                    providers: [
                        { provide: _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__["WizardStep"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return WizardStepComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardStepComponent.ctorParameters = function () { return []; };
    return WizardStepComponent;
}(_util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__["WizardStep"]));

//# sourceMappingURL=wizard-step.component.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/components/wizard.component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/components/wizard.component.js ***!
  \*************************************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/wizard-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js");
/* harmony import */ var _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/wizard-state.model */ "./node_modules/ng2-archwizard/dist/navigation/wizard-state.model.js");



/**
 * The `wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <wizard navBarLocation="top" navBarLayout="small">
 *     <wizard-step>...</wizard-step>
 *     <wizard-step>...</wizard-step>
 * </wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <wizard navBarLocation="top" navBarLayout="small">
 *     <wizard-step>...</wizard-step>
 *     <wizard-step>...</wizard-step>
 *     <wizard-completion-step>...</wizard-completion-step>
 * </wizard>
 * ```
 *
 * @author Marc Arndt
 */
var WizardComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param {WizardState} model The model for this wizard component
     */
    function WizardComponent(model) {
        this.model = model;
        /**
         * The location of the navigation bar inside the wizard.
         * This location can be either top, bottom, left or right
         *
         * @type {string}
         */
        this.navBarLocation = 'top';
        /**
         * The layout of the navigation bar inside the wizard.
         * The layout can be either small, large-filled, large-empty or large-symbols
         *
         * @type {string}
         */
        this.navBarLayout = 'small';
        /**
         * The direction in which the steps inside the navigation bar should be shown.
         * The direction can be either `left-to-right` or `right-to-left`
         *
         * @type {string}
         */
        this.navBarDirection = 'left-to-right';
        /**
         * The navigation mode used for transitioning between different steps.
         * The navigation mode can be either `strict`, `semi-strict` or `free`
         *
         * @type {string}
         */
        this.navigationMode = 'strict';
        /**
         * The initially selected step, represented by its index
         *
         * @type {number}
         */
        this.defaultStepIndex = 0;
        /**
         * True, if the navigation bar shouldn't be used for navigating
         *
         * @type {boolean}
         */
        this.disableNavigationBar = false;
    }
    Object.defineProperty(WizardComponent.prototype, "horizontalOrientation", {
        /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @returns {boolean} True if this wizard uses a horizontal orientation
         */
        get: function () {
            return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "verticalOrientation", {
        /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @returns {boolean} True if this wizard uses a vertical orientation
         */
        get: function () {
            return this.navBarLocation === 'left' || this.navBarLocation === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "navigation", {
        /**
         * The navigation mode for this wizard
         *
         * @returns {NavigationMode}
         */
        get: function () {
            return this.model.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialization work
     */
    WizardComponent.prototype.ngAfterContentInit = function () {
        this.model.initialize(this.wizardSteps, this.navigationMode, this.defaultStepIndex, this.disableNavigationBar);
    };
    WizardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'wizard',
                    template: "\n    <wizard-navigation-bar\n      [direction]=\"navBarDirection\"\n      *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n      [ngClass]=\"{\n        vertical: navBarLocation == 'left',\n        horizontal: navBarLocation == 'top',\n        small: navBarLayout == 'small',\n        'large-filled': navBarLayout == 'large-filled',\n        'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n        'large-empty': navBarLayout == 'large-empty',\n        'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n      }\">\n    </wizard-navigation-bar>\n\n    <div [ngClass]=\"{\n      'wizard-steps': true,\n      vertical: navBarLocation == 'left' || navBarLocation == 'right',\n      horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\n    }\">\n      <ng-content></ng-content>\n    </div>\n\n    <wizard-navigation-bar\n      [direction]=\"navBarDirection\"\n      *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n      [ngClass]=\"{\n        vertical: navBarLocation == 'right',\n        horizontal: navBarLocation == 'bottom',\n        small: navBarLayout == 'small',\n        'large-filled': navBarLayout == 'large-filled',\n        'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n        'large-empty': navBarLayout == 'large-empty',\n        'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n      }\">\n    </wizard-navigation-bar>\n  ",
                    styles: ["\n    :host {\n      display: flex;\n      justify-content: flex-start;\n    }\n    :host.vertical {\n      flex-direction: row;\n    }\n    :host.horizontal {\n      flex-direction: column;\n    }\n    :host .wizard-steps {\n      top: 0;\n      display: flex;\n    }\n    :host .wizard-steps.vertical {\n      min-width: calc(100% - 280px);\n      width: 80%;\n      height: 100%;\n      flex-direction: column;\n    }\n    :host .wizard-steps.horizontal {\n      width: 100%;\n      flex-direction: row;\n    }\n  "],
                    providers: [_navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_2__["WizardState"]]
                },] },
    ];
    /** @nocollapse */
    WizardComponent.ctorParameters = function () { return [
        { type: _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_2__["WizardState"], },
    ]; };
    WizardComponent.propDecorators = {
        'wizardSteps': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__["WizardStep"],] },],
        'navBarLocation': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'navBarLayout': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'navBarDirection': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'navigationMode': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'defaultStepIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'disableNavigationBar': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'horizontalOrientation': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.horizontal',] },],
        'verticalOrientation': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.vertical',] },],
    };
    return WizardComponent;
}());

//# sourceMappingURL=wizard.component.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/enable-back-links.directive.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/enable-back-links.directive.js ***!
  \************************************************************************************/
/*! exports provided: EnableBackLinksDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableBackLinksDirective", function() { return EnableBackLinksDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/wizard-completion-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-completion-step.interface.js");


/**
 * The `enableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-completion-step enableBackLinks (stepExit)="exit function">
 *     ...
 * </wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <wizard-completion-step stepTitle="Final step" enableBackLinks>
 *     ...
 * </wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var EnableBackLinksDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param completionStep The wizard completion step, which should be exitable
     */
    function EnableBackLinksDirective(completionStep) {
        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         *
         * @type {EventEmitter<MovingDirection>}
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Initialization work
     */
    EnableBackLinksDirective.prototype.ngOnInit = function () {
        this.completionStep.canExit = true;
        this.completionStep.stepExit = this.stepExit;
    };
    EnableBackLinksDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[enableBackLinks]'
                },] },
    ];
    /** @nocollapse */
    EnableBackLinksDirective.ctorParameters = function () { return [
        { type: _util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_1__["WizardCompletionStep"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
    ]; };
    EnableBackLinksDirective.propDecorators = {
        'stepExit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return EnableBackLinksDirective;
}());

//# sourceMappingURL=enable-back-links.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/go-to-step.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/go-to-step.directive.js ***!
  \*****************************************************************************/
/*! exports provided: GoToStepDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToStepDirective", function() { return GoToStepDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_step_offset_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/step-offset.interface */ "./node_modules/ng2-archwizard/dist/util/step-offset.interface.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/wizard-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js");
/* harmony import */ var _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/wizard-state.model */ "./node_modules/ng2-archwizard/dist/navigation/wizard-state.model.js");
/**
 * Created by marc on 09.01.17.
 */





/**
 * The `goToStep` directive can be used to navigate to a given step.
 * This step can be defined in one of multiple formats
 *
 * ### Syntax
 *
 * With absolute step index:
 *
 * ```html
 * <button [goToStep]="absolute step index" (finalize)="finalize method">...</button>
 * ```
 *
 * With a wizard step object:
 *
 * ```html
 * <button [goToStep]="wizard step object" (finalize)="finalize method">...</button>
 * ```
 *
 * With an offset to the defining step
 *
 * ```html
 * <button [goToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var GoToStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    function GoToStepDirective(wizardState, wizardStep) {
        this.wizardState = wizardState;
        this.wizardStep = wizardStep;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         *
         * @type {EventEmitter}
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         *
         * @type {EventEmitter}
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(GoToStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: function () {
            return this.preFinalize;
        },
        /**
         * A convenience name for `preFinalize`
         *
         * @param {EventEmitter<void>} emitter The [[EventEmitter]] to be set
         */
        set: function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoToStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         *
         * @returns {NavigationMode}
         */
        get: function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoToStepDirective.prototype, "destinationStep", {
        /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @returns {number} The index of the destination step
         * @throws If `goToStep` is of an unknown type an `Error` is thrown
         */
        get: function () {
            var destinationStep;
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(this.goToStep)) {
                destinationStep = this.goToStep;
            }
            else if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isString"])(this.goToStep)) {
                destinationStep = parseInt(this.goToStep, 10);
            }
            else if (Object(_util_step_offset_interface__WEBPACK_IMPORTED_MODULE_1__["isStepOffset"])(this.goToStep) && this.wizardStep !== null) {
                destinationStep = this.wizardState.getIndexOfStep(this.wizardStep) + this.goToStep.stepOffset;
            }
            else if (this.goToStep instanceof _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_3__["WizardStep"]) {
                destinationStep = this.wizardState.getIndexOfStep(this.goToStep);
            }
            else {
                throw new Error("Input 'goToStep' is neither a WizardStep, StepOffset, number or string");
            }
            return destinationStep;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    GoToStepDirective.prototype.onClick = function () {
        this.navigationMode.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    };
    GoToStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[goToStep]'
                },] },
    ];
    /** @nocollapse */
    GoToStepDirective.ctorParameters = function () { return [
        { type: _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_4__["WizardState"], },
        { type: _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_3__["WizardStep"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    GoToStepDirective.propDecorators = {
        'preFinalize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'postFinalize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'finalize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'goToStep': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'onClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return GoToStepDirective;
}());

//# sourceMappingURL=go-to-step.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/index.js ***!
  \**************************************************************/
/*! exports provided: EnableBackLinksDirective, GoToStepDirective, NextStepDirective, OptionalStepDirective, PreviousStepDirective, ResetWizardDirective, SelectedStepDirective, WizardCompletionStepDirective, WizardStepDirective, WizardStepTitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enable_back_links_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enable-back-links.directive */ "./node_modules/ng2-archwizard/dist/directives/enable-back-links.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnableBackLinksDirective", function() { return _enable_back_links_directive__WEBPACK_IMPORTED_MODULE_0__["EnableBackLinksDirective"]; });

/* harmony import */ var _go_to_step_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./go-to-step.directive */ "./node_modules/ng2-archwizard/dist/directives/go-to-step.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoToStepDirective", function() { return _go_to_step_directive__WEBPACK_IMPORTED_MODULE_1__["GoToStepDirective"]; });

/* harmony import */ var _next_step_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./next-step.directive */ "./node_modules/ng2-archwizard/dist/directives/next-step.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NextStepDirective", function() { return _next_step_directive__WEBPACK_IMPORTED_MODULE_2__["NextStepDirective"]; });

/* harmony import */ var _optional_step_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./optional-step.directive */ "./node_modules/ng2-archwizard/dist/directives/optional-step.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionalStepDirective", function() { return _optional_step_directive__WEBPACK_IMPORTED_MODULE_3__["OptionalStepDirective"]; });

/* harmony import */ var _previous_step_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./previous-step.directive */ "./node_modules/ng2-archwizard/dist/directives/previous-step.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviousStepDirective", function() { return _previous_step_directive__WEBPACK_IMPORTED_MODULE_4__["PreviousStepDirective"]; });

/* harmony import */ var _reset_wizard_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-wizard.directive */ "./node_modules/ng2-archwizard/dist/directives/reset-wizard.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetWizardDirective", function() { return _reset_wizard_directive__WEBPACK_IMPORTED_MODULE_5__["ResetWizardDirective"]; });

/* harmony import */ var _selected_step_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selected-step.directive */ "./node_modules/ng2-archwizard/dist/directives/selected-step.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectedStepDirective", function() { return _selected_step_directive__WEBPACK_IMPORTED_MODULE_6__["SelectedStepDirective"]; });

/* harmony import */ var _wizard_completion_step_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wizard-completion-step.directive */ "./node_modules/ng2-archwizard/dist/directives/wizard-completion-step.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStepDirective", function() { return _wizard_completion_step_directive__WEBPACK_IMPORTED_MODULE_7__["WizardCompletionStepDirective"]; });

/* harmony import */ var _wizard_step_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wizard-step.directive */ "./node_modules/ng2-archwizard/dist/directives/wizard-step.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardStepDirective", function() { return _wizard_step_directive__WEBPACK_IMPORTED_MODULE_8__["WizardStepDirective"]; });

/* harmony import */ var _wizard_step_title_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wizard-step-title.directive */ "./node_modules/ng2-archwizard/dist/directives/wizard-step-title.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardStepTitleDirective", function() { return _wizard_step_title_directive__WEBPACK_IMPORTED_MODULE_9__["WizardStepTitleDirective"]; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/next-step.directive.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/next-step.directive.js ***!
  \****************************************************************************/
/*! exports provided: NextStepDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextStepDirective", function() { return NextStepDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/wizard-state.model */ "./node_modules/ng2-archwizard/dist/navigation/wizard-state.model.js");


/**
 * The `nextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button nextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var NextStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function NextStepDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         *
         * @type {EventEmitter}
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         *
         * @type {EventEmitter}
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(NextStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: function () {
            return this.preFinalize;
        },
        /**
         * A convenience name for `preFinalize`
         *
         * @param {EventEmitter<void>} emitter The [[EventEmitter]] to be set
         */
        set: function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NextStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         *
         * @returns {NavigationMode}
         */
        get: function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    NextStepDirective.prototype.onClick = function () {
        this.navigationMode.goToNextStep(this.preFinalize, this.postFinalize);
    };
    NextStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[nextStep]'
                },] },
    ];
    /** @nocollapse */
    NextStepDirective.ctorParameters = function () { return [
        { type: _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_1__["WizardState"], },
    ]; };
    NextStepDirective.propDecorators = {
        'preFinalize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'postFinalize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'finalize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'onClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return NextStepDirective;
}());

//# sourceMappingURL=next-step.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/optional-step.directive.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/optional-step.directive.js ***!
  \********************************************************************************/
/*! exports provided: OptionalStepDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionalStepDirective", function() { return OptionalStepDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/wizard-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js");


/**
 * The `optionalStep` directive can be used to define an optional `wizard-step`.
 * An optional `wizard-step` is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-step optionalStep>
 *     ...
 * </wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <wizard-step stepTitle="Second step" optionalStep>
 *     ...
 * </wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var OptionalStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    function OptionalStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    OptionalStepDirective.prototype.ngOnInit = function () {
        this.wizardStep.optional = true;
    };
    OptionalStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[optionalStep]'
                },] },
    ];
    /** @nocollapse */
    OptionalStepDirective.ctorParameters = function () { return [
        { type: _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__["WizardStep"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
    ]; };
    return OptionalStepDirective;
}());

//# sourceMappingURL=optional-step.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/previous-step.directive.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/previous-step.directive.js ***!
  \********************************************************************************/
/*! exports provided: PreviousStepDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousStepDirective", function() { return PreviousStepDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/wizard-state.model */ "./node_modules/ng2-archwizard/dist/navigation/wizard-state.model.js");


/**
 * The `previousStep` directive can be used to navigate to the previous step.
 * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
 *
 * ### Syntax
 *
 * ```html
 * <button previousStep>...</button>
 * ```
 *
 * @author Marc Arndt
 */
var PreviousStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function PreviousStepDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         *
         * @type {EventEmitter}
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         *
         * @type {EventEmitter}
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(PreviousStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: function () {
            return this.preFinalize;
        },
        /**
         * A convenience field for `preFinalize`
         *
         * @param {EventEmitter<void>} emitter The [[EventEmitter]] to be set
         */
        set: function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreviousStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         *
         * @returns {NavigationMode}
         */
        get: function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    PreviousStepDirective.prototype.onClick = function () {
        this.navigationMode.goToPreviousStep(this.preFinalize, this.postFinalize);
    };
    PreviousStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[previousStep]'
                },] },
    ];
    /** @nocollapse */
    PreviousStepDirective.ctorParameters = function () { return [
        { type: _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_1__["WizardState"], },
    ]; };
    PreviousStepDirective.propDecorators = {
        'preFinalize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'postFinalize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'finalize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'onClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return PreviousStepDirective;
}());

//# sourceMappingURL=previous-step.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/reset-wizard.directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/reset-wizard.directive.js ***!
  \*******************************************************************************/
/*! exports provided: ResetWizardDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetWizardDirective", function() { return ResetWizardDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/wizard-state.model */ "./node_modules/ng2-archwizard/dist/navigation/wizard-state.model.js");


/**
 * The `resetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button resetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var ResetWizardDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     */
    function ResetWizardDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ResetWizardDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         *
         * @returns {NavigationMode}
         */
        get: function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the wizard
     */
    ResetWizardDirective.prototype.onClick = function () {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.navigationMode.reset();
    };
    ResetWizardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[resetWizard]'
                },] },
    ];
    /** @nocollapse */
    ResetWizardDirective.ctorParameters = function () { return [
        { type: _navigation_wizard_state_model__WEBPACK_IMPORTED_MODULE_1__["WizardState"], },
    ]; };
    ResetWizardDirective.propDecorators = {
        'finalize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'onClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return ResetWizardDirective;
}());

//# sourceMappingURL=reset-wizard.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/selected-step.directive.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/selected-step.directive.js ***!
  \********************************************************************************/
/*! exports provided: SelectedStepDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedStepDirective", function() { return SelectedStepDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/wizard-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js");


/**
 * The `selectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-step stepTitle="Step title" selected>
 *     ...
 * </wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var SelectedStepDirective = /** @class */ (function () {
    /**
     * Constructor
     * @param wizardStep The wizard step, which should be selected by default
     */
    function SelectedStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    SelectedStepDirective.prototype.ngOnInit = function () {
        this.wizardStep.defaultSelected = true;
    };
    SelectedStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[selectedStep]'
                },] },
    ];
    /** @nocollapse */
    SelectedStepDirective.ctorParameters = function () { return [
        { type: _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__["WizardStep"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
    ]; };
    return SelectedStepDirective;
}());

//# sourceMappingURL=selected-step.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/wizard-completion-step.directive.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/wizard-completion-step.directive.js ***!
  \*****************************************************************************************/
/*! exports provided: WizardCompletionStepDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStepDirective", function() { return WizardCompletionStepDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/wizard-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js");
/* harmony import */ var _util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/wizard-completion-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-completion-step.interface.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * The `wizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard` amd all steps inside the `wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div wizardCompletionStep [stepTitle]="title of the wizard step" [navigationSymbol]="navigation symbol"
 *    [navigationSymbolFontFamily]="navigation symbol font family"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div wizardCompletionStep stepTitle="Step 1" navigationSymbol="1">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div wizardCompletionStep stepTitle="Step 1" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepDirective = /** @class */ (function (_super) {
    __extends(WizardCompletionStepDirective, _super);
    function WizardCompletionStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[wizardCompletionStep]',
                    providers: [
                        { provide: _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__["WizardStep"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return WizardCompletionStepDirective; }) },
                        { provide: _util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__["WizardCompletionStep"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return WizardCompletionStepDirective; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardCompletionStepDirective.ctorParameters = function () { return []; };
    return WizardCompletionStepDirective;
}(_util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__["WizardCompletionStep"]));

//# sourceMappingURL=wizard-completion-step.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/wizard-step-title.directive.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/wizard-step-title.directive.js ***!
  \************************************************************************************/
/*! exports provided: WizardStepTitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepTitleDirective", function() { return WizardStepTitleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * Created by marc on 01.06.17.
 */

/**
 * The `wizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template wizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepTitleDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    function WizardStepTitleDirective(templateRef) {
        this.templateRef = templateRef;
    }
    WizardStepTitleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'ng-template[stepTitle], ng-template[wizardStepTitle]'
                },] },
    ];
    /** @nocollapse */
    WizardStepTitleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return WizardStepTitleDirective;
}());

//# sourceMappingURL=wizard-step-title.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/directives/wizard-step.directive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/directives/wizard-step.directive.js ***!
  \******************************************************************************/
/*! exports provided: WizardStepDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepDirective", function() { return WizardStepDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/wizard-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The `wizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` input:
 *
 * ```html
 * <div wizardStep [stepTitle]="step title" [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <div wizardStep [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template wizardStepTitle>
 *        step title
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` input:
 *
 * ```html
 * <div wizardStep stepTitle="Address information" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </div>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <div wizardStep navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    <ng-template wizardStepTitle>
 *        Address information
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepDirective = /** @class */ (function (_super) {
    __extends(WizardStepDirective, _super);
    function WizardStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[wizardStep]',
                    providers: [
                        { provide: _util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__["WizardStep"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return WizardStepDirective; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardStepDirective.ctorParameters = function () { return []; };
    return WizardStepDirective;
}(_util_wizard_step_interface__WEBPACK_IMPORTED_MODULE_1__["WizardStep"]));

//# sourceMappingURL=wizard-step.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/index.js ***!
  \***************************************************/
/*! exports provided: ArchwizardModule, WizardComponent, WizardCompletionStepComponent, WizardNavigationBarComponent, WizardStepComponent, EnableBackLinksDirective, GoToStepDirective, NextStepDirective, OptionalStepDirective, PreviousStepDirective, ResetWizardDirective, SelectedStepDirective, WizardCompletionStepDirective, WizardStepDirective, WizardStepTitleDirective, FreeNavigationMode, NavigationMode, SemiStrictNavigationMode, StrictNavigationMode, WizardState, MovingDirection, WizardCompletionStep, WizardStep, navigationModeFactory, isStepOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/ng2-archwizard/dist/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["WizardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStepComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["WizardCompletionStepComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardNavigationBarComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["WizardNavigationBarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardStepComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["WizardStepComponent"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ "./node_modules/ng2-archwizard/dist/directives/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnableBackLinksDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["EnableBackLinksDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoToStepDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["GoToStepDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NextStepDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["NextStepDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionalStepDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["OptionalStepDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviousStepDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["PreviousStepDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetWizardDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["ResetWizardDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectedStepDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["SelectedStepDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStepDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["WizardCompletionStepDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardStepDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["WizardStepDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardStepTitleDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["WizardStepTitleDirective"]; });

/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./node_modules/ng2-archwizard/dist/navigation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FreeNavigationMode", function() { return _navigation__WEBPACK_IMPORTED_MODULE_2__["FreeNavigationMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationMode", function() { return _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SemiStrictNavigationMode", function() { return _navigation__WEBPACK_IMPORTED_MODULE_2__["SemiStrictNavigationMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StrictNavigationMode", function() { return _navigation__WEBPACK_IMPORTED_MODULE_2__["StrictNavigationMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardState", function() { return _navigation__WEBPACK_IMPORTED_MODULE_2__["WizardState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigationModeFactory", function() { return _navigation__WEBPACK_IMPORTED_MODULE_2__["navigationModeFactory"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/ng2-archwizard/dist/util/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovingDirection", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["MovingDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStep", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["WizardCompletionStep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardStep", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["WizardStep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStepOffset", function() { return _util__WEBPACK_IMPORTED_MODULE_3__["isStepOffset"]; });

/* harmony import */ var _archwizard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./archwizard.module */ "./node_modules/ng2-archwizard/dist/archwizard.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArchwizardModule", function() { return _archwizard_module__WEBPACK_IMPORTED_MODULE_4__["ArchwizardModule"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/navigation/free-navigation-mode.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/navigation/free-navigation-mode.js ***!
  \*****************************************************************************/
/*! exports provided: FreeNavigationMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeNavigationMode", function() { return FreeNavigationMode; });
/* harmony import */ var _navigation_mode_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-mode.interface */ "./node_modules/ng2-archwizard/dist/navigation/navigation-mode.interface.js");
/* harmony import */ var _util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/moving-direction.enum */ "./node_modules/ng2-archwizard/dist/util/moving-direction.enum.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
var FreeNavigationMode = /** @class */ (function (_super) {
    __extends(FreeNavigationMode, _super);
    /**
     * Constructor
     *
     * @param {WizardState} wizardState The model/state of the wizard, that is configured with this navigation mode
     */
    function FreeNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param {number} destinationIndex The index of the destination wizard step
     * @returns {boolean} True if the destination wizard step can be entered, false otherwise
     */
    FreeNavigationMode.prototype.canGoToStep = function (destinationIndex) {
        var _this = this;
        var hasStep = this.wizardState.hasStep(destinationIndex);
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        var canExitCurrentStep = function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        };
        var canEnterDestinationStep = function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        };
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {number} destinationIndex The index of the destination wizard step, which should be entered
     * @param {EventEmitter<void>} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {EventEmitter<void>} postFinalize An event emitter, to be called after the step has been transitioned
     */
    FreeNavigationMode.prototype.goToStep = function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then(function (navigationAllowed) {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(_util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Stay);
                _this.wizardState.currentStep.enter(_util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Stay);
            }
        });
    };
    FreeNavigationMode.prototype.isNavigable = function (destinationIndex) {
        return true;
    };
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     */
    FreeNavigationMode.prototype.reset = function () {
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach(function (step) {
            step.completed = false;
            step.selected = false;
        });
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(_util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Forwards);
    };
    return FreeNavigationMode;
}(_navigation_mode_interface__WEBPACK_IMPORTED_MODULE_0__["NavigationMode"]));

//# sourceMappingURL=free-navigation-mode.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/navigation/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/navigation/index.js ***!
  \**************************************************************/
/*! exports provided: FreeNavigationMode, NavigationMode, SemiStrictNavigationMode, StrictNavigationMode, WizardState, navigationModeFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_navigation_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-navigation-mode */ "./node_modules/ng2-archwizard/dist/navigation/free-navigation-mode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FreeNavigationMode", function() { return _free_navigation_mode__WEBPACK_IMPORTED_MODULE_0__["FreeNavigationMode"]; });

/* harmony import */ var _navigation_mode_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-mode.interface */ "./node_modules/ng2-archwizard/dist/navigation/navigation-mode.interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationMode", function() { return _navigation_mode_interface__WEBPACK_IMPORTED_MODULE_1__["NavigationMode"]; });

/* harmony import */ var _navigation_mode_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-mode.provider */ "./node_modules/ng2-archwizard/dist/navigation/navigation-mode.provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigationModeFactory", function() { return _navigation_mode_provider__WEBPACK_IMPORTED_MODULE_2__["navigationModeFactory"]; });

/* harmony import */ var _semi_strict_navigation_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./semi-strict-navigation-mode */ "./node_modules/ng2-archwizard/dist/navigation/semi-strict-navigation-mode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SemiStrictNavigationMode", function() { return _semi_strict_navigation_mode__WEBPACK_IMPORTED_MODULE_3__["SemiStrictNavigationMode"]; });

/* harmony import */ var _strict_navigation_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strict-navigation-mode */ "./node_modules/ng2-archwizard/dist/navigation/strict-navigation-mode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StrictNavigationMode", function() { return _strict_navigation_mode__WEBPACK_IMPORTED_MODULE_4__["StrictNavigationMode"]; });

/* harmony import */ var _wizard_state_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wizard-state.model */ "./node_modules/ng2-archwizard/dist/navigation/wizard-state.model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardState", function() { return _wizard_state_model__WEBPACK_IMPORTED_MODULE_5__["WizardState"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/navigation/navigation-mode.interface.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/navigation/navigation-mode.interface.js ***!
  \**********************************************************************************/
/*! exports provided: NavigationMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationMode", function() { return NavigationMode; });
/**
 * An interface describing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * @author Marc Arndt
 */
var NavigationMode = /** @class */ (function () {
    function NavigationMode(wizardState) {
        this.wizardState = wizardState;
    }
    /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     */
    NavigationMode.prototype.goToPreviousStep = function (preFinalize, postFinalize) {
        if (this.wizardState.hasPreviousStep()) {
            this.goToStep(this.wizardState.currentStepIndex - 1, preFinalize, postFinalize);
        }
    };
    /**
     * Tries to transition the wizard to the next step from the `currentStep`
     */
    NavigationMode.prototype.goToNextStep = function (preFinalize, postFinalize) {
        if (this.wizardState.hasNextStep()) {
            this.goToStep(this.wizardState.currentStepIndex + 1, preFinalize, postFinalize);
        }
    };
    return NavigationMode;
}());

//# sourceMappingURL=navigation-mode.interface.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/navigation/navigation-mode.provider.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/navigation/navigation-mode.provider.js ***!
  \*********************************************************************************/
/*! exports provided: navigationModeFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationModeFactory", function() { return navigationModeFactory; });
/* harmony import */ var _free_navigation_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-navigation-mode */ "./node_modules/ng2-archwizard/dist/navigation/free-navigation-mode.js");
/* harmony import */ var _semi_strict_navigation_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./semi-strict-navigation-mode */ "./node_modules/ng2-archwizard/dist/navigation/semi-strict-navigation-mode.js");
/* harmony import */ var _strict_navigation_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strict-navigation-mode */ "./node_modules/ng2-archwizard/dist/navigation/strict-navigation-mode.js");



/**
 * A factory method used to create [[NavigationMode]] instances
 *
 * @param {WizardComponent} wizard The wizard, for which a navigation mode will be created
 * @param {WizardState} wizardState The wizard state of the wizard
 * @returns {NavigationMode} The created [[NavigationMode]]
 */
function navigationModeFactory(navigationMode, wizardState) {
    switch (navigationMode) {
        case 'free':
            return new _free_navigation_mode__WEBPACK_IMPORTED_MODULE_0__["FreeNavigationMode"](wizardState);
        case 'semi-strict':
            return new _semi_strict_navigation_mode__WEBPACK_IMPORTED_MODULE_1__["SemiStrictNavigationMode"](wizardState);
        case 'strict':
        default:
            return new _strict_navigation_mode__WEBPACK_IMPORTED_MODULE_2__["StrictNavigationMode"](wizardState);
    }
}
;
//# sourceMappingURL=navigation-mode.provider.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/navigation/semi-strict-navigation-mode.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/navigation/semi-strict-navigation-mode.js ***!
  \************************************************************************************/
/*! exports provided: SemiStrictNavigationMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemiStrictNavigationMode", function() { return SemiStrictNavigationMode; });
/* harmony import */ var _navigation_mode_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-mode.interface */ "./node_modules/ng2-archwizard/dist/navigation/navigation-mode.interface.js");
/* harmony import */ var _util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/moving-direction.enum */ "./node_modules/ng2-archwizard/dist/util/moving-direction.enum.js");
/* harmony import */ var _util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/wizard-completion-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-completion-step.interface.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * A [[NavigationMode]], which allows the user to navigate with some limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - a completion step can only be entered, if all "normal" wizard steps have been completed
 *
 * @author Marc Arndt
 */
var SemiStrictNavigationMode = /** @class */ (function (_super) {
    __extends(SemiStrictNavigationMode, _super);
    /**
     * Constructor
     *
     * @param {WizardState} wizardState The model/state of the wizard, that is configured with this navigation mode
     */
    function SemiStrictNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
     *
     * @param {number} destinationIndex The index of the destination wizard step
     * @returns {boolean} True if the destination wizard step can be entered, false otherwise
     */
    SemiStrictNavigationMode.prototype.canGoToStep = function (destinationIndex) {
        var _this = this;
        var hasStep = this.wizardState.hasStep(destinationIndex);
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        var canExitCurrentStep = function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        };
        var canEnterDestinationStep = function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        };
        // provide the destination step as a lambda in case the index doesn't exist (i.e. hasStep === false)
        var destinationStep = function (previous) {
            if (previous) {
                var allNormalStepsCompleted = _this.wizardState.wizardSteps
                    .filter(function (step, index) { return index < destinationIndex; })
                    .every(function (step) { return step.completed || step.optional || step.selected; });
                return Promise.resolve(!(_this.wizardState.getStepAtIndex(destinationIndex) instanceof _util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__["WizardCompletionStep"]) || allNormalStepsCompleted);
            }
            else {
                return Promise.resolve(false);
            }
        };
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep)
            .then(destinationStep);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {number} destinationIndex The index of the destination wizard step, which should be entered
     * @param {EventEmitter<void>} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {EventEmitter<void>} postFinalize An event emitter, to be called after the step has been transitioned
     */
    SemiStrictNavigationMode.prototype.goToStep = function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then(function (navigationAllowed) {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(_util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Stay);
                _this.wizardState.currentStep.enter(_util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Stay);
            }
        });
    };
    /**
     * @inheritDoc
     */
    SemiStrictNavigationMode.prototype.isNavigable = function (destinationIndex) {
        if (this.wizardState.getStepAtIndex(destinationIndex) instanceof _util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__["WizardCompletionStep"]) {
            // a completion step can only be entered, if all previous steps have been completed, are optional, or selected
            return this.wizardState.wizardSteps.filter(function (step, index) { return index < destinationIndex; })
                .every(function (step) { return step.completed || step.optional || step.selected; });
        }
        else {
            // a "normal" step can always be entered
            return true;
        }
    };
    /**
     * @inheritDoc
     */
    SemiStrictNavigationMode.prototype.reset = function () {
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // the default step is a completion step and the wizard contains more than one step
        var defaultCompletionStep = this.wizardState.getStepAtIndex(this.wizardState.defaultStepIndex) instanceof _util_wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__["WizardCompletionStep"] &&
            this.wizardState.wizardSteps.length !== 1;
        if (defaultCompletionStep) {
            throw new Error("The default step index " + this.wizardState.defaultStepIndex + " references a completion step");
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach(function (step) {
            step.completed = false;
            step.selected = false;
        });
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(_util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Forwards);
    };
    return SemiStrictNavigationMode;
}(_navigation_mode_interface__WEBPACK_IMPORTED_MODULE_0__["NavigationMode"]));

//# sourceMappingURL=semi-strict-navigation-mode.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/navigation/strict-navigation-mode.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/navigation/strict-navigation-mode.js ***!
  \*******************************************************************************/
/*! exports provided: StrictNavigationMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictNavigationMode", function() { return StrictNavigationMode; });
/* harmony import */ var _navigation_mode_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-mode.interface */ "./node_modules/ng2-archwizard/dist/navigation/navigation-mode.interface.js");
/* harmony import */ var _util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/moving-direction.enum */ "./node_modules/ng2-archwizard/dist/util/moving-direction.enum.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
var StrictNavigationMode = /** @class */ (function (_super) {
    __extends(StrictNavigationMode, _super);
    /**
     * Constructor
     *
     * @param {WizardState} wizardState The state of the wizard, that is configured with this navigation mode
     */
    function StrictNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param {number} destinationIndex The index of the destination wizard step
     * @returns {boolean} True if the destination wizard step can be entered, false otherwise
     */
    StrictNavigationMode.prototype.canGoToStep = function (destinationIndex) {
        var _this = this;
        var hasStep = this.wizardState.hasStep(destinationIndex);
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        var canExitCurrentStep = function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        };
        var canEnterDestinationStep = function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        };
        var allPreviousStepsComplete = function (previous) {
            if (previous) {
                return Promise.resolve(_this.wizardState.wizardSteps
                    .filter(function (step, index) { return index < destinationIndex && index !== _this.wizardState.currentStepIndex; })
                    .every(function (step) { return step.completed || step.optional; }));
            }
            else {
                return Promise.resolve(false);
            }
        };
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep)
            .then(allPreviousStepsComplete);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {number} destinationIndex The index of the destination wizard step, which should be entered
     * @param {EventEmitter<void>} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {EventEmitter<void>} postFinalize An event emitter, to be called after the step has been transitioned
     */
    StrictNavigationMode.prototype.goToStep = function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then(function (navigationAllowed) {
            if (navigationAllowed) {
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                // set all steps after the destination step to incomplete
                _this.wizardState.wizardSteps
                    .filter(function (step, index) { return _this.wizardState.currentStepIndex > destinationIndex && index > destinationIndex; })
                    .forEach(function (step) { return step.completed = false; });
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(_util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Stay);
                _this.wizardState.currentStep.enter(_util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Stay);
            }
        });
    };
    StrictNavigationMode.prototype.isNavigable = function (destinationIndex) {
        // a wizard step can be navigated to through the navigation bar, iff it's located before the current wizard step
        return destinationIndex < this.wizardState.currentStepIndex;
    };
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     */
    StrictNavigationMode.prototype.reset = function () {
        var _this = this;
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // at least one step is before the default step, that is not optional
        var illegalDefaultStep = this.wizardState.wizardSteps
            .filter(function (step, index) { return index < _this.wizardState.defaultStepIndex; })
            .some(function (step) { return !step.optional; });
        if (illegalDefaultStep) {
            throw new Error("The default step index " + this.wizardState.defaultStepIndex + " is located after a non optional step");
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach(function (step) {
            step.completed = false;
            step.selected = false;
        });
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(_util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Forwards);
    };
    return StrictNavigationMode;
}(_navigation_mode_interface__WEBPACK_IMPORTED_MODULE_0__["NavigationMode"]));

//# sourceMappingURL=strict-navigation-mode.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/navigation/wizard-state.model.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/navigation/wizard-state.model.js ***!
  \***************************************************************************/
/*! exports provided: WizardState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardState", function() { return WizardState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/moving-direction.enum */ "./node_modules/ng2-archwizard/dist/util/moving-direction.enum.js");
/* harmony import */ var _navigation_mode_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-mode.provider */ "./node_modules/ng2-archwizard/dist/navigation/navigation-mode.provider.js");



/**
 * The internal model/state of a wizard.
 * This model contains:
 * - an array with all steps the wizard contains
 * - the index of the step the wizard currently resides inside
 * - information about the completeness of the wizard
 * - some additional helper methods
 *
 * @author Marc Arndt
 */
var WizardState = /** @class */ (function () {
    /**
     * Constructor
     */
    function WizardState() {
        /**
         * The initial step index, as taken from the [[WizardComponent]]
         */
        this._defaultStepIndex = 0;
        /**
         * The index of the currently visible and selected step inside the wizardSteps QueryList.
         * If this wizard contains no steps, currentStepIndex is -1
         */
        this.currentStepIndex = -1;
    }
    Object.defineProperty(WizardState.prototype, "wizardSteps", {
        /**
         * An array representation of all wizard steps belonging to this model
         */
        get: function () {
            /* istanbul ignore else */
            if (this._wizardSteps) {
                return this._wizardSteps.toArray();
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardState.prototype, "defaultStepIndex", {
        /**
         * The initial step index.
         * This value can be either:
         * - the index of a wizard step with a `selected` directive, or
         * - the default step index, set in the [[WizardComponent]]
         */
        get: function () {
            var foundDefaultStep = this.wizardSteps.find(function (step) { return step.defaultSelected; });
            if (foundDefaultStep) {
                return this.getIndexOfStep(foundDefaultStep);
            }
            else {
                return this._defaultStepIndex;
            }
        },
        /**
         * Sets the initial default step.
         * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
         *
         * @param defaultStepIndex The new default wizard step index
         */
        set: function (defaultStepIndex) {
            this._defaultStepIndex = defaultStepIndex;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WizardState.prototype, "currentStep", {
        /**
         * The WizardStep object belonging to the currently visible and selected step.
         * The currentStep is always the currently selected wizard step.
         * The currentStep can be either completed, if it was visited earlier,
         * or not completed, if it is visited for the first time or its state is currently out of date.
         *
         * If this wizard contains no steps, currentStep is null
         */
        get: function () {
            if (this.hasStep(this.currentStepIndex)) {
                return this.wizardSteps[this.currentStepIndex];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardState.prototype, "completed", {
        /**
         * The completeness of the wizard.
         * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
         */
        get: function () {
            return this.wizardSteps.every(function (step) { return step.completed || step.optional; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initializes the wizard state with the given array of wizard steps.
     * This process contains a reset of the wizard
     *
     * @param {QueryList<WizardStep>} wizardSteps The wizard steps
     * @param {string} navigationMode The name of the navigation mode to be set
     * @param {string} defaultStepIndex The default step index, to be used during the initialisation
     * @param {boolean} disableNavigationBar True, if the navigation bar should be disabled, i.e. not be used for navigating
     */
    WizardState.prototype.initialize = function (wizardSteps, navigationMode, defaultStepIndex, disableNavigationBar) {
        this._wizardSteps = wizardSteps;
        this._defaultStepIndex = defaultStepIndex;
        this.disableNavigationBar = disableNavigationBar;
        this.navigationMode = Object(_navigation_mode_provider__WEBPACK_IMPORTED_MODULE_2__["navigationModeFactory"])(navigationMode, this);
        this.navigationMode.reset();
    };
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param stepIndex The to be checked index of a step inside this wizard
     * @returns {boolean} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    WizardState.prototype.hasStep = function (stepIndex) {
        return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
    };
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @returns {boolean} True if this wizard has a previous step before the current step
     */
    WizardState.prototype.hasPreviousStep = function () {
        return this.hasStep(this.currentStepIndex - 1);
    };
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @returns {boolean} True if this wizard has a next step after the current step
     */
    WizardState.prototype.hasNextStep = function () {
        return this.hasStep(this.currentStepIndex + 1);
    };
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @returns {boolean} True if the wizard is currently inside its last step
     */
    WizardState.prototype.isLastStep = function () {
        return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
    };
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @param stepIndex The given index
     * @returns {undefined|WizardStep} The found [[WizardStep]] at the given index `stepIndex`
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     */
    WizardState.prototype.getStepAtIndex = function (stepIndex) {
        if (!this.hasStep(stepIndex)) {
            throw new Error("Expected a known step, but got stepIndex: " + stepIndex + ".");
        }
        return this.wizardSteps[stepIndex];
    };
    /**
     * Find the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param step The given [[WizardStep]]
     * @returns {number} The found index of `step` or `-1` if the step is not included in the wizard
     */
    WizardState.prototype.getIndexOfStep = function (step) {
        return this.wizardSteps.indexOf(step);
    };
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param destinationStep The given destination step
     * @returns {MovingDirection} The calculated [[MovingDirection]]
     */
    WizardState.prototype.getMovingDirection = function (destinationStep) {
        var movingDirection;
        if (destinationStep > this.currentStepIndex) {
            movingDirection = _util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Forwards;
        }
        else if (destinationStep < this.currentStepIndex) {
            movingDirection = _util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Backwards;
        }
        else {
            movingDirection = _util_moving_direction_enum__WEBPACK_IMPORTED_MODULE_1__["MovingDirection"].Stay;
        }
        return movingDirection;
    };
    WizardState.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    WizardState.ctorParameters = function () { return []; };
    return WizardState;
}());

//# sourceMappingURL=wizard-state.model.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/util/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/util/index.js ***!
  \********************************************************/
/*! exports provided: MovingDirection, WizardCompletionStep, WizardStep, isStepOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moving_direction_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-direction.enum */ "./node_modules/ng2-archwizard/dist/util/moving-direction.enum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovingDirection", function() { return _moving_direction_enum__WEBPACK_IMPORTED_MODULE_0__["MovingDirection"]; });

/* harmony import */ var _step_offset_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-offset.interface */ "./node_modules/ng2-archwizard/dist/util/step-offset.interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStepOffset", function() { return _step_offset_interface__WEBPACK_IMPORTED_MODULE_1__["isStepOffset"]; });

/* harmony import */ var _wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard-completion-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-completion-step.interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStep", function() { return _wizard_completion_step_interface__WEBPACK_IMPORTED_MODULE_2__["WizardCompletionStep"]; });

/* harmony import */ var _wizard_step_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardStep", function() { return _wizard_step_interface__WEBPACK_IMPORTED_MODULE_3__["WizardStep"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/util/moving-direction.enum.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/util/moving-direction.enum.js ***!
  \************************************************************************/
/*! exports provided: MovingDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingDirection", function() { return MovingDirection; });
/**
 * The direction in which a step transition was made
 *
 * @author Marc Arndt
 */
/**
 * This enum contains the different possible moving directions in which a wizard can be traversed
 *
 * @author Marc Arndt
 */
var MovingDirection;
(function (MovingDirection) {
    /**
     * A forward step transition
     */
    MovingDirection[MovingDirection["Forwards"] = 0] = "Forwards";
    /**
     * A backward step transition
     */
    MovingDirection[MovingDirection["Backwards"] = 1] = "Backwards";
    /**
     * No step transition was done
     */
    MovingDirection[MovingDirection["Stay"] = 2] = "Stay";
})(MovingDirection || (MovingDirection = {}));
//# sourceMappingURL=moving-direction.enum.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/util/step-offset.interface.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/util/step-offset.interface.js ***!
  \************************************************************************/
/*! exports provided: isStepOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStepOffset", function() { return isStepOffset; });
/**
 * Checks wether the given `value` implements the interface [[StepOffset]].
 *
 * @param value The value to be checked
 * @returns {boolean} True if the given value implements [[StepOffset]] and false otherwise
 */
function isStepOffset(value) {
    return value.hasOwnProperty('stepOffset');
}
//# sourceMappingURL=step-offset.interface.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/util/wizard-completion-step.interface.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/util/wizard-completion-step.interface.js ***!
  \***********************************************************************************/
/*! exports provided: WizardCompletionStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStep", function() { return WizardCompletionStep; });
/* harmony import */ var _wizard_step_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wizard-step.interface */ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 */
var WizardCompletionStep = /** @class */ (function (_super) {
    __extends(WizardCompletionStep, _super);
    function WizardCompletionStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @inheritDoc
         */
        _this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @inheritDoc
         */
        _this.canExit = false;
        return _this;
    }
    /**
     * @inheritDoc
     */
    WizardCompletionStep.prototype.enter = function (direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    };
    /**
     * @inheritDoc
     */
    WizardCompletionStep.prototype.exit = function (direction) {
        // set this completion step as incomplete
        this.completed = false;
        this.stepExit.emit(direction);
    };
    return WizardCompletionStep;
}(_wizard_step_interface__WEBPACK_IMPORTED_MODULE_0__["WizardStep"]));

//# sourceMappingURL=wizard-completion-step.interface.js.map

/***/ }),

/***/ "./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-archwizard/dist/util/wizard-step.interface.js ***!
  \************************************************************************/
/*! exports provided: WizardStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStep", function() { return WizardStep; });
/* harmony import */ var _directives_wizard_step_title_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/wizard-step-title.directive */ "./node_modules/ng2-archwizard/dist/directives/wizard-step-title.directive.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 */
var WizardStep = /** @class */ (function () {
    function WizardStep() {
        /**
         * A step title property, which contains the visible header title of the step.
         * This title is then shown inside the navigation bar.
         * Compared to `stepTitle` this property can contain any html content and not only plain text
         */
        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * If no navigation symbol is specified, an empty string should be used
         */
        this.navigationSymbol = '';
        /**
         * A boolean describing if the wizard step has been completed
         */
        this.completed = false;
        /**
         * A boolean describing if the wizard step is currently selected
         */
        this.selected = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */
        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */
        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */
        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */
        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */
        this.stepEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(WizardStep.prototype, "hidden", {
        /**
         * Returns if this wizard step should be visible to the user.
         * If the step should be visible to the user false is returned, otherwise true
         *
         * @returns {boolean}
         */
        get: function () {
            return !this.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @param condition A condition variable, deciding if the step can be transitioned
     * @param direction The direction in which this step should be transitioned
     * @returns {Promise<boolean>} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     */
    WizardStep.canTransitionStep = function (condition, direction) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isBoolean"])(condition)) {
            return Promise.resolve(condition);
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error("Input value '" + condition + "' is neither a boolean nor a function"));
        }
    };
    /**
     * A function called when the step is entered
     *
     * @param direction The direction in which the step is entered
     */
    WizardStep.prototype.enter = function (direction) {
        this.stepEnter.emit(direction);
    };
    /**
     * A function called when the step is exited
     *
     * @param direction The direction in which the step is exited
     */
    WizardStep.prototype.exit = function (direction) {
        this.stepExit.emit(direction);
    };
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be entered
     * @returns {Promise<boolean>} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     */
    WizardStep.prototype.canEnterStep = function (direction) {
        return WizardStep.canTransitionStep(this.canEnter, direction);
    };
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be left
     * @returns {Promise<boolean>} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     */
    WizardStep.prototype.canExitStep = function (direction) {
        return WizardStep.canTransitionStep(this.canExit, direction);
    };
    WizardStep.propDecorators = {
        'stepTitleTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_directives_wizard_step_title_directive__WEBPACK_IMPORTED_MODULE_0__["WizardStepTitleDirective"],] },],
        'stepTitle': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        'navigationSymbol': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        'navigationSymbolFontFamily': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        'canEnter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        'canExit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        'stepEnter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        'stepExit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        'hidden': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['hidden',] },],
    };
    return WizardStep;
}());

//# sourceMappingURL=wizard-step.interface.js.map

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ })

}]);
//# sourceMappingURL=default~new-student-registration-detail-new-student-registration-detail-module~questionnaire-data-st~ce6a8729-es2015.js.map