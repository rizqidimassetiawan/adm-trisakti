function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports, __webpack_require__) {
    var map = {
      "./403/403.module": ["./src/app/theme/error/403/403.module.ts", "403-403-module"],
      "./404/404.module": ["./src/app/theme/error/404/404.module.ts", "404-404-module"],
      "./activation-account/activation-account.module": ["./src/app/theme/auth/activation-account/activation-account.module.ts", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "activation-account-activation-account-module"],
      "./adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.module": ["./src/app/theme/adm-mr-verification-document-data/adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module"],
      "./approval-data-detail/approval-data-detail.module": ["./src/app/theme/adm-mp-approval-data/approval-data-detail/approval-data-detail.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~approval-data-detail-approval-data-detail-module~registration-data-registration-data-module~~6741a029", "approval-data-detail-approval-data-detail-module"],
      "./document-data-detail/document-data-detail.module": ["./src/app/theme/adm-mp-document-data/document-data-detail/document-data-detail.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "document-data-detail-document-data-detail-module"],
      "./login/login.module": ["./src/app/theme/auth/login/login.module.ts", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~login-login-module~reset-password-reset-password-module~signup-signup-module", "login-login-module"],
      "./maintenance/maintenance.module": ["./src/app/theme/error/maintenance/maintenance.module.ts", "maintenance-maintenance-module"],
      "./new-student-registration-detail/new-student-registration-detail.module": ["./src/app/theme/new-student-registration/new-student-registration-detail/new-student-registration-detail.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "default~new-student-registration-detail-new-student-registration-detail-module~questionnaire-data-st~ce6a8729", "default~new-student-registration-detail-new-student-registration-detail-module~theme-adm-ms-selectio~b3a206b8", "default~new-student-registration-detail-new-student-registration-detail-module~theme-student-profile~600c4ae8", "new-student-registration-detail-new-student-registration-detail-module"],
      "./participant-data-detail/participant-data-detail.module": ["./src/app/theme/adm-mp-participant-data/participant-data-detail/participant-data-detail.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "participant-data-detail-participant-data-detail-module"],
      "./payment-registration/payment-registration.module": ["./src/app/theme/registration-history/payment-registration/payment-registration.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "payment-registration-payment-registration-module"],
      "./questionnaire-data-step/questionnaire-data-step.module": ["./src/app/theme/adm-ms-questionnaire-data/questionnaire-data-step/questionnaire-data-step.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~new-student-registration-detail-new-student-registration-detail-module~questionnaire-data-st~ce6a8729", "questionnaire-data-step-questionnaire-data-step-module"],
      "./registration-data/registration-data.module": ["./src/app/theme/registration-history/registration-data/registration-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~new-student-registration-detail-new-student-registration-detail-module~questionnaire-data-st~ce6a8729", "default~approval-data-detail-approval-data-detail-module~registration-data-registration-data-module~~6741a029", "registration-data-registration-data-module"],
      "./reset-password/reset-password.module": ["./src/app/theme/auth/reset-password/reset-password.module.ts", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~login-login-module~reset-password-reset-password-module~signup-signup-module", "reset-password-reset-password-module"],
      "./selection-data/selection-data.module": ["./src/app/theme/adm-ms-selection-data/selection-data/selection-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~new-student-registration-detail-new-student-registration-detail-module~questionnaire-data-st~ce6a8729", "default~approval-data-detail-approval-data-detail-module~registration-data-registration-data-module~~6741a029", "selection-data-selection-data-module"],
      "./signup/signup.module": ["./src/app/theme/auth/signup/signup.module.ts", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~login-login-module~reset-password-reset-password-module~signup-signup-module", "signup-signup-module"],
      "./theme/_home/home.module": ["./src/app/theme/_home/home.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-_home-home-module"],
      "./theme/adm-dashboard/adm-dashboard.module": ["./src/app/theme/adm-dashboard/adm-dashboard.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-dashboard-adm-dashboard-module"],
      "./theme/adm-map-prodi-category-document/adm-map-prodi-category-document.module": ["./src/app/theme/adm-map-prodi-category-document/adm-map-prodi-category-document.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-map-prodi-category-document-adm-map-prodi-category-document-module"],
      "./theme/adm-master-document/adm-master-document.module": ["./src/app/theme/adm-master-document/adm-master-document.module.ts", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-master-document-adm-master-document-module"],
      "./theme/adm-master-form-category/adm-master-form-category.module": ["./src/app/theme/adm-master-form-category/adm-master-form-category.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-master-form-category-adm-master-form-category-module"],
      "./theme/adm-master-schedules/adm-master-schedules.module": ["./src/app/theme/adm-master-schedules/adm-master-schedules.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-master-schedules-adm-master-schedules-module"],
      "./theme/adm-master-selection-category/adm-master-selection-category.module": ["./src/app/theme/adm-master-selection-category/adm-master-selection-category.module.ts", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-master-selection-category-adm-master-selection-category-module"],
      "./theme/adm-master-student-interes/adm-master-student-interes.module": ["./src/app/theme/adm-master-student-interes/adm-master-student-interes.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-master-student-interes-adm-master-student-interes-module"],
      "./theme/adm-master-type-examp/adm-master-type-examp.module": ["./src/app/theme/adm-master-type-examp/adm-master-type-examp.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-master-type-examp-adm-master-type-examp-module"],
      "./theme/adm-mp-approval-data/adm-mp-approval-data.module": ["./src/app/theme/adm-mp-approval-data/adm-mp-approval-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "theme-adm-mp-approval-data-adm-mp-approval-data-module"],
      "./theme/adm-mp-approval-participant-score-data/adm-mp-approval-participant-score-data.module": ["./src/app/theme/adm-mp-approval-participant-score-data/adm-mp-approval-participant-score-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-mp-approval-participant-score-data-adm-mp-approval-participant-score-data-module"],
      "./theme/adm-mp-credit-transfer/adm-mp-credit-transfer.module": ["./src/app/theme/adm-mp-credit-transfer/adm-mp-credit-transfer.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-mp-credit-transfer-adm-mp-credit-transfer-module"],
      "./theme/adm-mp-document-data/adm-mp-document-data.module": ["./src/app/theme/adm-mp-document-data/adm-mp-document-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "theme-adm-mp-document-data-adm-mp-document-data-module"],
      "./theme/adm-mp-participant-data/adm-mp-participant-data.module": ["./src/app/theme/adm-mp-participant-data/adm-mp-participant-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "theme-adm-mp-participant-data-adm-mp-participant-data-module"],
      "./theme/adm-mp-participant-score-data/adm-mp-participant-score-data.module": ["./src/app/theme/adm-mp-participant-score-data/adm-mp-participant-score-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-mp-participant-score-data-adm-mp-participant-score-data-module"],
      "./theme/adm-mp-payment-data/adm-mp-payment-data.module": ["./src/app/theme/adm-mp-payment-data/adm-mp-payment-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "theme-adm-mp-payment-data-adm-mp-payment-data-module"],
      "./theme/adm-mr-new-student-data/adm-mr-new-student-data.module": ["./src/app/theme/adm-mr-new-student-data/adm-mr-new-student-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-mr-new-student-data-adm-mr-new-student-data-module"],
      "./theme/adm-mr-verification-document-data/adm-mr-verification-document-data.module": ["./src/app/theme/adm-mr-verification-document-data/adm-mr-verification-document-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-mr-verification-document-data-adm-mr-verification-document-data-module"],
      "./theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.module": ["./src/app/theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "theme-adm-ms-exam-detail-data-adm-ms-exam-detail-data-module"],
      "./theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.module": ["./src/app/theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-ms-passing-grade-data-adm-ms-passing-grade-data-module"],
      "./theme/adm-ms-program-data/adm-ms-program-data.module": ["./src/app/theme/adm-ms-program-data/adm-ms-program-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-ms-program-data-adm-ms-program-data-module"],
      "./theme/adm-ms-questionnaire-data/adm-ms-questionnaire-data.module": ["./src/app/theme/adm-ms-questionnaire-data/adm-ms-questionnaire-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "theme-adm-ms-questionnaire-data-adm-ms-questionnaire-data-module"],
      "./theme/adm-ms-selection-data/adm-ms-selection-data.module": ["./src/app/theme/adm-ms-selection-data/adm-ms-selection-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "theme-adm-ms-selection-data-adm-ms-selection-data-module"],
      "./theme/adm-ms-selection-intake-data/adm-ms-selection-intake-data.module": ["./src/app/theme/adm-ms-selection-intake-data/adm-ms-selection-intake-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "default~new-student-registration-detail-new-student-registration-detail-module~theme-adm-ms-selectio~b3a206b8", "theme-adm-ms-selection-intake-data-adm-ms-selection-intake-data-module"],
      "./theme/adm-ms-selection-schedule-data/adm-ms-selection-schedule-data.module": ["./src/app/theme/adm-ms-selection-schedule-data/adm-ms-selection-schedule-data.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-adm-ms-selection-schedule-data-adm-ms-selection-schedule-data-module"],
      "./theme/auth/authentication.module": ["./src/app/theme/auth/authentication.module.ts", "theme-auth-authentication-module"],
      "./theme/error/error.module": ["./src/app/theme/error/error.module.ts", "theme-error-error-module"],
      "./theme/new-registration/new-registration.module": ["./src/app/theme/new-registration/new-registration.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "theme-new-registration-new-registration-module"],
      "./theme/new-student-registration/new-student-registration.module": ["./src/app/theme/new-student-registration/new-student-registration.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-new-student-registration-new-student-registration-module"],
      "./theme/postgraduate-participant/postgraduate-participant.module": ["./src/app/theme/postgraduate-participant/postgraduate-participant.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-postgraduate-participant-postgraduate-participant-module"],
      "./theme/questionnaire-data-participant/questionnaire-data-participant.module": ["./src/app/theme/questionnaire-data-participant/questionnaire-data-participant.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~new-student-registration-detail-new-student-registration-detail-module~questionnaire-data-st~ce6a8729", "theme-questionnaire-data-participant-questionnaire-data-participant-module"],
      "./theme/recommendation/recommendation.module": ["./src/app/theme/recommendation/recommendation.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "theme-recommendation-recommendation-module"],
      "./theme/registration-history/registration-history.module": ["./src/app/theme/registration-history/registration-history.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~new-student-registration-detail-new-student-registration-detail-module~questionnaire-data-st~ce6a8729", "theme-registration-history-registration-history-module"],
      "./theme/registration-report/registration-report.module": ["./src/app/theme/registration-report/registration-report.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "theme-registration-report-registration-report-module"],
      "./theme/sample-page/sample-page.module": ["./src/app/theme/sample-page/sample-page.module.ts", "theme-sample-page-sample-page-module"],
      "./theme/student-profile/student-profile.module": ["./src/app/theme/student-profile/student-profile.module.ts", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~44b5c1c1", "default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d", "default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~new~dda64002", "default~new-student-registration-detail-new-student-registration-detail-module~questionnaire-data-st~ce6a8729", "default~new-student-registration-detail-new-student-registration-detail-module~theme-adm-ms-selectio~b3a206b8", "default~new-student-registration-detail-new-student-registration-detail-module~theme-student-profile~600c4ae8", "theme-student-profile-student-profile-module"]
    };
    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }
      var ids = map[req],
        id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }
    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };
    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_appComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet #o=\"outlet\">\n  <app-spinner></app-spinner>\n</router-outlet>\n<app-toast-show></app-toast-show>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/admin.component.html": (
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/admin.component.html ***!
    \*****************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_adminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-navigation class=\"cust pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.nextConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (NavMobCollapse)=\"navMobClick()\"></app-navigation>\n<app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light header-blue\" (NavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (NavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\n<div class=\"pcoded-main-container\">\n    <div class=\"pcoded-content\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\n      <app-breadcrumb class=\"change-breadcrum\"></app-breadcrumb>\n      <div [@routeAnimations]=\"prepareRoute(outlet)\" >\n        <router-outlet #outlet=\"outlet\"></router-outlet>\n      </div>\n    </div>\n</div>\n<app-configuration></app-configuration>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/configuration/configuration.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/configuration/configuration.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_configuration_configurationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div *ngIf=\"this.isConfig\" id=\"styleSelector\" class=\"menu-styler\" [ngClass]=\"{'open': styleSelectorToggle}\">\n  <div class=\"style-toggler\">\n    <a href=\"javascript:\" (click)=\"styleSelectorToggle = !styleSelectorToggle;\"></a>\n  </div>\n  <div class=\"style-block\">\n    <h4 class=\"mb-2\"><i>situ</i>\n      <small class=\"font-weight-normal\"> Customizer</small>\n    </h4>\n    <hr/>\n    <perfect-scrollbar [style.max-height]=\"'100%'\">\n      <div class=\"m-style-scroller\">\n      <h6>Layouts</h6>\n      <div class=\"theme-color layout-type\">\n        <a href=\"javascript:\" [ngClass]=\"{'active': layoutType === 'menu-dark'}\" (click)=\"setLayout('menu-dark')\" data-value=\"menu-dark\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': layoutType === 'menu-light'}\" (click)=\"setLayout('menu-light')\" data-value=\"menu-light\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': layoutType === 'dark'}\" (click)=\"setLayout('dark')\" data-value=\"dark\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': layoutType === 'reset'}\" (click)=\"setLayout('reset')\" data-value=\"reset\">Reset to Default</a>\n      </div>\n      <h6>Background Color</h6>\n      <div class=\"theme-color background-color flat\">\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-red'}\" (click)=\"setHeaderBackground('background-red');\" data-value=\"background-red\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-info'}\" (click)=\"setHeaderBackground('background-info');\" data-value=\"background-info\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-blue'}\" (click)=\"setHeaderBackground('background-blue');\" data-value=\"background-blue\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-purple'}\" (click)=\"setHeaderBackground('background-purple');\" data-value=\"background-purple\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-green'}\" (click)=\"setHeaderBackground('background-green');\" data-value=\"background-green\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-dark'}\" (click)=\"setHeaderBackground('background-dark');\" data-value=\"background-dark\"><span></span><span></span></a>\n      </div>\n      <h6>Background Gradient</h6>\n      <div class=\"theme-color background-color gradient\">\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-telu'}\" (click)=\"setHeaderBackground('background-grd-telu');\" data-value=\"background-grd-telu\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-red'}\" (click)=\"setHeaderBackground('background-grd-red');\" data-value=\"background-grd-red\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-blue'}\" (click)=\"setHeaderBackground('background-grd-blue');\" data-value=\"background-grd-blue\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-purple'}\" (click)=\"setHeaderBackground('background-grd-purple');\" data-value=\"background-grd-purple\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-green'}\" (click)=\"setHeaderBackground('background-grd-green');\" data-value=\"background-grd-green\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-dark'}\" (click)=\"setHeaderBackground('background-grd-dark');\" data-value=\"background-grd-dark\"><span></span><span></span></a>\n      </div>\n      <h6>Background Image</h6>\n      <div class=\"theme-color background-color image\">\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-7'}\" (click)=\"setHeaderBackground('background-img-7');\" data-value=\"background-img-7\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-5'}\" (click)=\"setHeaderBackground('background-img-5');\" data-value=\"background-img-5\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-4'}\" (click)=\"setHeaderBackground('background-img-4');\" data-value=\"background-img-4\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-1'}\" (click)=\"setHeaderBackground('background-img-1');\" data-value=\"background-img-1\"><span></span><span></span></a>\n        <!-- <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-2'}\" (click)=\"setHeaderBackground('background-img-2');\" data-value=\"background-img-2\"><span></span><span></span></a> -->\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-3'}\" (click)=\"setHeaderBackground('background-img-3');\" data-value=\"background-img-3\"><span></span><span></span></a>\n        <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-6'}\" (click)=\"setHeaderBackground('background-img-6');\" data-value=\"background-img-6\"><span></span><span></span></a>\n      </div>\n      <div class=\"form-group mb-2\" *ngIf=\"nextConfig['layout'] !== 'horizontal'\">\n        <div class=\"switch switch-primary d-inline m-r-10\">\n          <input type=\"checkbox\" id=\"theme-rtl\" [(ngModel)]='rtlLayout' (change)=\"setRtlLayout($event)\">\n          <label for=\"theme-rtl\" class=\"cr\"></label>\n        </div>\n        <label>RTL</label>\n      </div>\n      <div class=\"form-group mb-2\" *ngIf=\"nextConfig['layout'] !== 'horizontal' && !nextConfig['boxLayout']\">\n        <div class=\"switch switch-primary d-inline m-r-10\">\n          <input type=\"checkbox\" id=\"menu-fixed\" [(ngModel)]='menuFixedLayout' (change)=\"setMenuFixedLayout($event)\">\n          <label for=\"menu-fixed\" class=\"cr\"></label>\n        </div>\n        <label>Menu Fixed</label>\n      </div>\n      <div class=\"form-group mb-2\" *ngIf=\"nextConfig['layout'] !== 'horizontal' && !nextConfig['boxLayout']\">\n        <div class=\"switch switch-primary d-inline m-r-10\">\n          <input type=\"checkbox\" id=\"header-fixed\" [(ngModel)]='headerFixedLayout' (change)=\"setHeaderFixedLayout($event)\">\n          <label for=\"header-fixed\" class=\"cr\"></label>\n        </div>\n        <label>Header Fixed</label>\n      </div>\n      <!-- <div class=\"form-group mb-2\" *ngIf=\"nextConfig['layout'] !== 'horizontal'\">\n        <div class=\"switch switch-primary d-inline m-r-10\">\n          <input type=\"checkbox\" id=\"box-layouts\" [(ngModel)]='breadcumb' (change)=\"setBreadcumb($event)\">\n          <label for=\"breadcumb\" class=\"cr\"></label>\n        </div>\n        <label>Breadcumb Sticky</label>\n      </div> -->\n      <div class=\"form-group mb-2\" *ngIf=\"nextConfig['layout'] !== 'horizontal' && !nextConfig['boxLayout']\">\n        <div class=\"switch switch-primary d-inline m-r-10\">\n          <input type=\"checkbox\" id=\"bredcrum\" [(ngModel)]='breadcumb' (change)=\"setBreadcumb($event)\">\n          <label for=\"bredcrum\" class=\"cr\"></label>\n        </div>\n        <label>Breadcumb Sticky</label>\n      </div>\n    </div>\n    </perfect-scrollbar>\n    <!-- <a href=\"https://themeforest.net/user/phoenixcoded\" class=\"btn btn-success btn-block m-r-15 m-t-10 m-b-10\">Profile</a>\n    <a href=\"http://ableproadmin.com/doc-7.0/\" target=\"_blank\" class=\"btn btn-primary btn-block m-r-15 m-t-5 m-b-10 \">Online Documentation</a>\n    <div class=\"text-center\">\n      <span class=\"text-center f-18 m-t-15 m-b-15 d-block\">Thank you for sharing !</span>\n      <a href=\"https://www.facebook.com/Phoenixcoded/\" target=\"_blank\" class=\"btn text-white bg-facebook btn-icon m-b-20\"><i class=\"feather icon-facebook\"></i></a>\n      <a href=\"https://twitter.com/phoenixcoded\" target=\"_blank\" class=\"btn text-white bg-twitter btn-icon m-l-20 m-b-20\"><i class=\"feather icon-twitter\"></i></a>\n    </div>\n  </div> -->\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-bar.component.html": (
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-bar.component.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_navBar_navBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'; else mainHeader\">\n  <ng-container *ngTemplateOutlet=\"mainHeader\"></ng-container>\n</div>\n<ng-template #mainHeader>\n  <div class=\"m-header\">\n    <a href=\"javascript:\" class=\"mobile-menu\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\n    <a [routerLink]=\"['/']\" class=\"b-brand\">\n      <!-- <img id=\"main-logo\" src=\"assets/images/logo.png\" alt=\"\" class=\"logo situ-main\"> -->\n      <div class=\"main-logo\">\n        <img src=\"assets/images/SITU-icon.png\"> Admission\n      </div>\n      <img src=\"assets/images/logo-icon.png\" alt=\"\" class=\"logo-thumb\">\n    </a>\n    <a class=\"mob-toggler\" [ngClass]=\"{'on' : this.menuClass}\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i class=\"feather icon-more-vertical\"></i></a>\n  </div>\n  <div class=\"collapse navbar-collapse\" [style.display]=\"this.collapseStyle\">\n    <app-nav-left class=\"mr-auto\"></app-nav-left>\n    <app-nav-right class=\"ml-auto\"></app-nav-right>\n  </div>\n</ng-template>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-left/nav-left.component.html": (
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-left/nav-left.component.html ***!
    \*************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_navBar_navLeft_navLeftComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ul class=\"navbar-nav mr-auto\">\n  <!-- <li class=\"nav-item\">\n    <app-nav-search></app-nav-search>\n  </li> -->\n</ul>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html": (
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html ***!
    \**************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_navBar_navLeft_navSearch_navSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<a href=\"javascript:\" class=\"pop-search\" (click)=\"isSearch = true\"><i class=\"feather icon-search\"></i></a>\n<div class=\"search-bar\" *ngIf=\"isSearch\" [style.display]=\"'block'\">\n  <input type=\"text\" class=\"form-control border-0 shadow-none\" placeholder=\"Search hear\">\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"isSearch = false\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-right/nav-right.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-right/nav-right.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_navBar_navRight_navRightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ul class=\"navbar-nav ml-auto\">\n  <li class=\"lang\">\n    <ng-select [ngClass]=\"'ng-select'\" [options]=\"countries\" [allowClear]=\"true\" [(ngModel)]=\"selectedCountry\" (ngModelChange)=\"changeLang()\">\n      <ng-template #optionTemplate let-option=\"option\">\n        <div class=\"famfamfam-flags {{option?.lang.toLowerCase()}}\"></div>\n        {{option?.value.toUpperCase()}}\n      </ng-template>\n    </ng-select>\n  </li>\n  <!-- <li>\n    <div class=\"dropdown\" ngbDropdown placement=\"auto\">\n      <a ngbDropdownToggle href=\"javascript:\" data-toggle=\"dropdown\"><i class=\"icon feather icon-bell\"></i></a>\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notification\">\n        <div class=\"noti-head\">\n          <h6 class=\"d-inline-block m-b-0\">Notifications</h6>\n          <div class=\"float-right\">\n            <a href=\"javascript:\" class=\"m-r-10\">mark as read</a>\n            <a href=\"javascript:\">clear all</a>\n          </div>\n        </div>\n        <perfect-scrollbar [style.max-height]=\"'300px'\">\n        <ul class=\"noti-body\">\n          <li class=\"n-title\">\n            <p class=\"m-b-0\">NEW</p>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>John Doe</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>5 min</span></p>\n                <p>New ticket Added</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"n-title\">\n            <p class=\"m-b-0\">EARLIER</p>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Joseph William</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>10 min</span></p>\n                <p>Prchace New Theme and make payment</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Sara Soudein</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>12 min</span></p>\n                <p>currently login</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Joseph William</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>Prchace New Theme and make payment</p>\n              </div>\n            </div>\n          </li>\n        </ul>\n        </perfect-scrollbar>\n        <div class=\"noti-footer\">\n          <a href=\"javascript:\">show all</a>\n        </div>\n      </div>\n    </div>\n  </li> -->\n  <li>\n    <div class=\"dropdown drp-user\" ngbDropdown placement=\"auto\">\n      <a href=\"javascript:\" ngbDropdownToggle data-toggle=\"dropdown\">\n        <i class=\"icofont icofont-user-male\"></i>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification\" ngbDropdownMenu>\n        <div class=\"row pro-head\">\n          <div class=\"col pr-0\">\n            <img [src]=\"userProfile.photo\" class=\"img-radius\" alt=\"User-Profile-Image\">\n          </div>\n          <div class=\"col pl-0 align-middle\">\n            <span>{{userProfile.fullname}}</span>\n          </div>\n          <!-- <a href=\"javascript:\" (click)=\"logout()\" class=\"dud-logout\" title=\"Logout\">\n            <i class=\"icofont icofont-logout\"></i>\n          </a> -->\n        </div>\n        <ul class=\"pro-body\">\n          <!-- <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Profile</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-mail\"></i> My Messages</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-lock\"></i> Lock Screen</a></li> -->\n          <li><a href=\"javascript:\" (click)=\"logout()\" class=\"dropdown-item\"><i class=\"icofont icofont-power\"></i> {{ 'ROOT.logout' | translate }}</a></li>\n        </ul>\n      </div>\n    </div>\n  </li>\n</ul>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html": (
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
    \************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_navigation_navContent_navCollapse_navCollapseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\n  <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <li *ngIf=\"themeLayout === 'vertical'\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a id=\"nav-link-id\" [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <ng-template #itemContent>\n      <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\n        <i class=\"{{item.icon}}\"></i>\n      </span>\n      <span class=\"pcoded-mtext\">{{item.title | translate}}\n        <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n          {{item.badge.title | translate}}\n        </span>\n      </span>\n      <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n        {{item.badge.title | translate}}\n      </span>\n  </ng-template>\n  <ng-template #subMenuContent>\n    <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\n      <ng-container *ngFor=\"let item of item.children\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </ng-template>\n</ng-container>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-content.component.html": (
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-content.component.html ***!
    \**********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_navigation_navContent_navContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<perfect-scrollbar *ngIf=\"this.nextConfig['layout'] === 'vertical'\" (clickOutside)=\"navMob()\" [excludeBeforeClick]=\"true\" [exclude]=\"'#mobile-collapse'\" id=\"nav-ps-next\" ngClass=\"able-pro-scroll\" [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'next'\" [disabled]=\"null\">\n  <div class=\"navbar-content\">\n    <div class=\"\">\n      <div class=\"main-menu-header\">\n        <img class=\"img-radius\" [src]=\"userProfile.photo\" alt=\"User-Profile-Image\">\n        <div class=\"text-center mt-2\">\n          <span *ngIf=\"isAdminFaculty\" class=\"badge badge-light-danger\" >{{'CONTENT.admin-faculty' | translate}}</span>\n          <span *ngIf=\"isAdminUniversity\" class=\"badge badge-light-danger\" >{{'CONTENT.admin-university' | translate}}</span>\n          <span *ngIf=\"isAdminAdmission\" class=\"badge badge-light-danger\" >{{'CONTENT.admin-admission' | translate}}</span>\n          <span *ngIf=\"isAdminParticipant\" class=\"badge badge-light-danger\" >{{'CONTENT.admin-admission-participant' | translate}}</span>\n          <span *ngIf=\"isParticipant\" class=\"badge badge-light-primary\" >{{'CONTENT.participant' | translate}}</span>\n          <span *ngIf=\"isNewstudent\" class=\"badge badge-light-success\" >{{'CONTENT.new-student' | translate}}</span>\n          <span *ngIf=\"isSuperadmin\" class=\"badge badge-light-danger\" >{{'CONTENT.superadmin' | translate}}</span>\n        </div>\n        <div class=\"user-details mt-2\" (click)=\"isNavProfile = !isNavProfile; adjustContainer()\">\n          <div *ngIf=\"isAdminFaculty || isAdminUniversity || isAdminAdmission || isAdminParticipant || isSuperadmin\" id=\"more-details\">{{ userProfile.numberid }} <br> {{ userProfile.fullname }} <i class=\"icofont icofont-caret-down\" [ngClass]=\"{'icofont-caret-up': isNavProfile }\"></i>\n          </div>\n          <div *ngIf=\"isParticipant\" id=\"more-details\">{{ userProfile.fullname }} <i class=\"icofont icofont-caret-down\" [ngClass]=\"{'icofont-caret-up': isNavProfile }\"></i>\n            <p class=\"participant-email-custom text-muted\">{{ userProfile.email }}</p>\n          </div>\n            <div *ngIf=\"isNewstudent\" id=\"more-details\">{{ userProfile.fullname }} <i class=\"icofont icofont-caret-down\" [ngClass]=\"{'icofont-caret-up': isNavProfile }\"></i>\n              <p class=\"participant-email-custom text-muted\">{{ userProfile.email }}</p>\n            </div>\n        </div>\n        </div>\n      <div class=\"collapse\" id=\"nav-user-link\" *ngIf=\"isNavProfile\" [class.show]=\"isNavProfile\">\n        <ul class=\"list-unstyled\">\n          <li class=\"list-group-item\"><a href=\"javascript:\" (click)=\"logout()\"><i class=\"icofont icofont-power m-r-5\"></i>{{ 'ROOT.logout' | translate }}</a></li>\n        </ul>\n        <app-card [hidHeader]=\"true\" cardClass=\"text-center bg-inverse mb-0\">\n          <div class=\"col text-center\">\n            <span class=\"d-block mt-1\">{{ 'ROOT.change_theme' | translate }}</span>\n            <div class=\"form-group mb-1\">\n              <label class=\"m-r-10 f-24 mb-0\" [class.text-warning]=\"layoutTypeStorage == 'dark'\"><i class=\"icofont icofont-moon\"></i></label>\n              <div class=\"switch switch-warning d-inline\">\n                <input type=\"checkbox\" id=\"switch-a-1\" [checked]=\"layoutTypeStorage != 'dark'\" (change)=\"changeLayout($event)\">\n                <label for=\"switch-a-1\" class=\"cr\"></label>\n              </div>\n              <label class=\"m-l-10 f-26 mb-0\" [class.text-warning]=\"layoutTypeStorage == 'reset'\"><i class=\"icofont icofont-sun-alt\"></i></label>\n            </div>\n            <hr class=\"mt-0 mb-2\">\n            <div class=\"form-group form-check pl-4 mb-0\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" [checked]=\"autoTheme == 'true' || autoTheme == true\" (change)=\"checkAutoTheme($event)\">\n              <label class=\"form-check-label f-12 text-left\" for=\"exampleCheck1\">{{ 'ROOT.toogle_theme' | translate }}</label>\n            </div>\n          </div>\n        </app-card>\n        <app-card [hidHeader]=\"true\" cardClass=\"bg-inverse mt-2 mb-0\">\n          <div class=\"m-style-scroller\">\n            <div class=\"text-center\">\n              <span class=\"d-block mb-2\">Header</span>\n            </div>\n            <div class=\"theme-color background-color image mb-2 nav\">\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-7'}\" (click)=\"setHeaderBackground('background-img-7');\" data-value=\"background-img-7\"><span></span><span></span></a>\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-5'}\" (click)=\"setHeaderBackground('background-img-5');\" data-value=\"background-img-5\"><span></span><span></span></a>\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-4'}\" (click)=\"setHeaderBackground('background-img-4');\" data-value=\"background-img-4\"><span></span><span></span></a>\n            </div>\n            <div class=\"theme-color background-color image mb-2 nav\">\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-1'}\" (click)=\"setHeaderBackground('background-img-1');\" data-value=\"background-img-1\"><span></span><span></span></a>\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-3'}\" (click)=\"setHeaderBackground('background-img-3');\" data-value=\"background-img-3\"><span></span><span></span></a>\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-img-6'}\" (click)=\"setHeaderBackground('background-img-6');\" data-value=\"background-img-6\"><span></span><span></span></a>\n            </div>\n            <div class=\"theme-color background-color gradient mb-2 nav\">\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-telu'}\" (click)=\"setHeaderBackground('background-grd-telu');\" data-value=\"background-grd-telu\"><span></span><span></span></a>\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-red'}\" (click)=\"setHeaderBackground('background-grd-red');\" data-value=\"background-grd-red\"><span></span><span></span></a>\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-blue'}\" (click)=\"setHeaderBackground('background-grd-blue');\" data-value=\"background-grd-blue\"><span></span><span></span></a>\n            </div>\n            <div class=\"theme-color background-color gradient nav mb-0\">\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-purple'}\" (click)=\"setHeaderBackground('background-grd-purple');\" data-value=\"background-grd-purple\"><span></span><span></span></a>\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-green'}\" (click)=\"setHeaderBackground('background-grd-green');\" data-value=\"background-grd-green\"><span></span><span></span></a>\n              <a href=\"javascript:\" [ngClass]=\"{'active': headerBackgroundColor === 'background-grd-dark'}\" (click)=\"setHeaderBackground('background-grd-dark');\" data-value=\"background-grd-dark\"><span></span><span></span></a>\n            </div>\n          </div>\n        </app-card>\n      </div>\n    </div>\n    <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </div>\n</perfect-scrollbar>\n\n<div *ngIf=\"this.nextConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\" id=\"layout-sidenav\">\n  <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\n  <div  class=\"sidenav-horizontal-wrapper\"><!-- add 14-4 viral -->\n    <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\" (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </div>\n  <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-group/nav-group.component.html": (
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-group/nav-group.component.html ***!
    \******************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_navigation_navContent_navGroup_navGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\n  <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title | translate}}</label></li>\n  <ng-container *ngFor=\"let item of item.children\">\n    <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n    <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n    <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n  </ng-container>\n</ng-container>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-item/nav-item.component.html": (
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-item/nav-item.component.html ***!
    \****************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_navigation_navContent_navItem_navItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && !item.external\" [routerLinkActive]=\"['active']\">\n    <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\" [routerLink]=\"[item.url]\" (click)=\"closeOtherMenu($event)\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title | translate }}</span>\n      <ng-template #directTitle>\n        {{item.title | translate}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && item.external\">\n    <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.url\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title | translate }}</span>\n      <ng-template #directTitle>\n        {{item.title | translate}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <ng-template #itemIcon>\n    <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"\" [ngClass]=\"item.icon\"></i></span>\n  </ng-template>\n  <ng-template #itemBadge>\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title | translate}}\n    </span>\n    <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title | translate}}\n    </span>\n  </ng-template>\n</ng-container>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/navigation.component.html": (
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/navigation.component.html ***!
    \*********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_admin_navigation_navigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"navbar-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\n  <app-nav-content (NavMobCollapse)=\"navMobCollapse()\"></app-nav-content>\n</div>\n\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/auth/auth.component.html": (
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/auth/auth.component.html ***!
    \***************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_layout_auth_authComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/alert/alert.component.html": (
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/alert/alert.component.html ***!
    \****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_alert_alertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div #alert class=\"alert alert-{{type}}\" role=\"alert\" [ngClass]=\"{'alert-dismissible': dismiss}\">\n  <ng-content></ng-content>\n  <button *ngIf=\"dismiss\" (click)=\"dismissAlert(alert)\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html": (
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
    \**************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_breadcrumb_breadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ng-container *ngIf=\"this.navigationList\">\n  <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\">\n    <div class=\"page-header\" *ngIf=\"last && breadcrumb.breadcrumbs !== false\">\n      <div class=\"page-block\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-12\">\n            <div class=\"page-header-title\">\n              <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\"><h5 class=\"m-b-10\" *ngIf=\"last\">{{breadcrumb.title | translate }}</h5></ng-container>\n            </div>\n            <ul class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\">\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme2'\"><i class=\"feather icon-home\"></i></a>\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme1'\">Home</a>\n              </li>\n              <ng-container *ngFor=\"let breadcrumb of navigationList\">\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url !== false\"><a [routerLink]=\"breadcrumb.url\">{{breadcrumb.title | translate }}</a></li>\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url === false\"><a href=\"javascript:\">{{breadcrumb.title | translate }}</a></li>\n              </ng-container>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/card/card.component.html": (
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/card/card.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_card_cardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"card {{addClass + ' ' + (loading?'card-load':'expanded')}} shadow-sm\" [ngClass]=\"cardClass\" [@cardRemove]=\"cardRemove\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false, disabled: true}\">\n  <div class=\"card-header\" *ngIf=\"!hidHeader\" [ngClass]=\"headerClass\">\n    <img *ngIf=\"isRector\" id=\"main-logo\" src=\"assets/images/rector.png\" alt=\"\" class=\"logo situ-main rector\">\n    <h5 [class.ml-5]=\"isRector\" *ngIf=\"!customHeader\"><i class=\"icon-header f-18 mr-1\" [ngClass]=\"iconHeader\"></i> {{ cardTitle }}</h5>\n    <p *ngIf=\"!customHeader && cardCaption\" [ngClass]=\"captionClass\">{{cardCaption}}</p>\n    <div class=\"card-header-right\" *ngIf=\"this.options && !customHeader\" [ngSwitch]=\"isCollapseMenu\">\n      <div *ngSwitchCase=\"false\" class=\"btn-group card-option dropdown\" ngbDropdown>\n        <button type=\"button\" class=\"btn dropdown-toggle btn-icon\" ngbDropdownToggle>\n          <i class=\"feather icon-more-horizontal\"></i>\n        </button>\n        <ul class=\"list-unstyled card-option dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\n          <li class=\"dropdown-item full-card\" (click)=\"fullCardToggle(toAnimate, '', true)\">\n            <a href=\"javascript:\">\n              <span>\n                <i class=\"feather\" [ngClass]=\"fullIcon\"></i> {{this.cardClass === 'full-card' ? 'Restore' : 'Maximize'}}\n              </span>\n            </a>\n          </li>\n          <li class=\"dropdown-item minimize-card\" (click)=\"collapsedCardToggle()\">\n            <a href=\"javascript:\">\n              <span><i class=\"feather\" [ngClass]=\"collapsedIcon\"></i> {{this.collapsedCard === 'collapsed' ? 'Expand' : 'Collapse'}} </span>\n              <span style=\"display:none\"><i class=\"feather icon-plus\"></i></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <a href=\"javascript:\" class=\"collapse-expand f-18\" *ngSwitchCase=\"true\" (click)=\"collapsedCardToggle()\">\n        <span><i class=\"feather\" [ngClass]=\"collapsedIcon\"></i></span>\n        <!-- <span style=\"display:none\"><i class=\"feather icon-plus\"></i></span> -->\n      </a>\n      <!-- </div> -->\n    </div>\n    <ng-content *ngIf=\"customHeader\" select=\".app-card-header\"></ng-content>\n  </div>\n  <div class=\"content-collapse\" [ngClass]=\"collapsedCard\" [@collapsedCard]=\"collapsedCard\" *ngIf=\"this.options; else subMenuContent\">\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </div>\n  <ng-template #subMenuContent>\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </ng-template>\n  <div *ngIf=\"isCardFooter\" class=\"card-footer\" [ngClass]=\"footerClass\">\n    <ng-content select=\".app-card-footer\"></ng-content>\n  </div>\n  <!-- <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"pct-loader1 anim-rotate\"></i></div> -->\n  <!-- <div class=\"card-loader\" *ngIf=\"loading\" ><i class=\"spinner-border text-primary\"></i></div> -->\n  <div class=\"card-loader\" *ngIf=\"loading\" >\n    <img class=\"spinner-infinite\" alt=\"spinner\" src=\"assets/images/infinity-situ-transp.svg\">\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chart/apex-chart/apex-chart.component.html": (
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chart/apex-chart/apex-chart.component.html ***!
    \********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_chart_apexChart_apexChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div id=\"{{this.chartID}}\"></div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/filter-container/filter-container.component.html": (
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/filter-container/filter-container.component.html ***!
    \**************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_filterContainer_filterContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"row p-1 border rounded m-0 filter-case align-items-center\" [class.card-load]=\"loading\">\n  <div class=\"col-filter-header\">\n    <div class=\"filter-icon\">\n      <i class=\"icofont icofont-filter\"></i> <span> Filter</span>\n    </div>\n  </div>\n  <ng-content></ng-content>\n  <div class=\"card-loader\" *ngIf=\"loading\">\n    <img class=\"spinner-infinite\" src=\"assets/images/infinity-situ-transp.svg\">\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/gallery/gallery.component.html": (
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/gallery/gallery.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_gallery_galleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"column has-text-centered\">\n  <div class=\"img-row\" *ngFor=\"let image of albums; let i=index\">\n    <img class=\"img-frame\" [src]=\"image.thumb\" (click)=\"open(i)\"/>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/animation-modal/animation-modal.component.html": (
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/animation-modal/animation-modal.component.html ***!
    \******************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_modal_animationModal_animationModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"md-modal\" [ngClass]=\"modalClass\" id=\"{{modalID}}\">\n  <div class=\"md-content\" [ngClass]=\"contentClass\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div *ngIf=\"(backDrop); else backDropOver\" class=\"md-overlay\"></div>\n<ng-template #backDropOver>\n  <div class=\"md-overlay\" (click)=\"close(modalID)\"></div>\n</ng-template>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/ui-modal/ui-modal.component.html": (
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/ui-modal/ui-modal.component.html ***!
    \****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_modal_uiModal_uiModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade card-load\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\" role=\"document\" [ngClass]=\"dialogClass\">\n    <div class=\"modal-content\">\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\n        <ng-content select=\".app-modal-header\"></ng-content>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\".app-modal-body\"></ng-content>\n      </div>\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\n        <ng-content select=\".app-modal-footer\"></ng-content>\n      </div>\n      <!-- <div class=\"card-loader\" *ngIf=\"loading\" ><i class=\"pct-loader1 anim-rotate\"></i></div> -->\n      <!-- <div class=\"card-loader\" *ngIf=\"loading\" ><i class=\"spinner-border text-primary\"></i></div> -->\n      <div class=\"card-loader\" *ngIf=\"loading\" >\n        <img class=\"spinner-infinite\" src=\"assets/images/infinity-situ-transp.svg\">\n      </div>\n    </div>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/no-data-found/no-data-found.component.html": (
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/no-data-found/no-data-found.component.html ***!
    \********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_noDataFound_noDataFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-12 p-2\">\n    <svg class=\"dita-float\" style=\"z-index: auto;\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 287.544 586.495\">\n      <defs>\n        <radialGradient id=\"radial-gradient\" cx=\"0.5\" cy=\"0.5\" r=\"0.5\" gradientUnits=\"objectBoundingBox\">\n          <stop offset=\"0\" stop-color=\"#8aefff\" stop-opacity=\"0.988\"/>\n          <stop offset=\"1\" stop-color=\"#15e0ff\" stop-opacity=\"0\"/>\n        </radialGradient>\n        <radialGradient id=\"radial-gradient-2\" cx=\"0.5\" cy=\"0.5\" r=\"0.5\" gradientUnits=\"objectBoundingBox\">\n          <stop offset=\"0\" stop-color=\"#ff6060\"/>\n          <stop offset=\"1\" stop-color=\"#f3ecec\" stop-opacity=\"0\"/>\n        </radialGradient>\n      </defs>\n      <g id=\"Group_53\" data-name=\"Group 53\" transform=\"translate(-1557.131 -343.505)\">\n        <g id=\"Group_47\" data-name=\"Group 47\" transform=\"matrix(0.966, 0.259, -0.259, 0.966, 1339.269, 72.481)\">\n          <g id=\"Group_46\" data-name=\"Group 46\" transform=\"translate(34 -0.08)\">\n            <g id=\"Ellipse_31\" data-name=\"Ellipse 31\" transform=\"translate(570 535.08)\" fill=\"#99dde8\" stroke=\"#393535\" stroke-width=\"3\">\n              <circle cx=\"12.5\" cy=\"12.5\" r=\"12.5\" stroke=\"none\"/>\n              <circle cx=\"12.5\" cy=\"12.5\" r=\"11\" fill=\"none\"/>\n            </g>\n            <path id=\"Path_111\" data-name=\"Path 111\" d=\"M.014,10.842c.154,2.152,3.812,8.469,3.812,8.469s-2.5,4.832-2.08,9.345c1.042,11.316.378,27.066,4.546,33.732s13.784,11.719,18.323,11.63,16.317-4.758,20.161-8.645,7.248-15.567,4.145-23.5-7.576-18.3-14.244-24.914c-2.947-2.924-9.921-6.112-9.921-6.112l-5.443-9.4S16.075-1.792,8.464,1.427-.14,8.69.014,10.842Z\" transform=\"translate(537.962 484.748) rotate(-10)\" fill=\"#edf5fa\" stroke=\"#393535\" stroke-width=\"3\"/>\n            <path id=\"Path_125\" data-name=\"Path 125\" d=\"M-.182,9.009c-.2,3.309,3.339,7.518,3.339,7.518a8.343,8.343,0,0,0-1.685,5.89C2.35,31.267,1.79,43.587,5.3,48.8s11.618,9.167,15.444,9.1,1.7-2.524,5.22-6.61,3.6-16.486.115-23.646S23.828,11.955,22.836,11.6s-1.97-3.123-1.97-3.123L16.279,1.127s-2.836-1.659-8.209.263S.015,5.7-.182,9.009Z\" transform=\"translate(539.798 485.489) rotate(-10)\" fill=\"#a1bacc\"/>\n            <g id=\"Path_112\" data-name=\"Path 112\" transform=\"translate(529.038 477.131) rotate(-30)\" fill=\"#8d8b8b\">\n              <path d=\"M 12.02867031097412 33.46894836425781 C 9.865090370178223 33.46894836425781 7.621550559997559 32.39789199829102 6.81001091003418 30.97758102416992 C 6.289750576019287 30.06703948974609 6.258580684661865 29.38442993164062 6.238510608673096 27.36387062072754 C 6.222740650177002 25.77634048461914 6.201140880584717 23.60214996337891 5.821090698242188 20.25754928588867 C 5.089861392974854 13.82240962982178 2.526542663574219 7.755681991577148 1.643736243247986 5.813239097595215 C 1.844809293746948 5.380742073059082 2.168875694274902 4.745984077453613 2.602310657501221 4.097229957580566 C 3.230410814285278 3.157110214233398 4.224710941314697 1.982880115509033 5.394680500030518 1.727680087089539 C 6.08733081817627 1.576610088348389 6.741710662841797 1.50000011920929 7.339630603790283 1.50000011920929 C 9.249910354614258 1.50000011920929 10.64935111999512 2.247510194778442 11.74374103546143 3.852460145950317 C 12.51993083953857 4.99077033996582 13.34507083892822 6.3196702003479 14.12033081054688 8.318599700927734 C 14.89961051940918 10.32789039611816 15.5942907333374 12.89618015289307 16.3065013885498 16.40117073059082 C 17.00601005554199 19.84362983703613 17.45551109313965 23.27923011779785 17.57221031188965 26.07509994506836 C 17.72799110412598 29.80756950378418 17.2475700378418 30.68597030639648 17.24270057678223 30.69441032409668 C 16.6103401184082 31.78969955444336 15.11647033691406 33.07931900024414 12.82021045684814 33.41397857666016 C 12.56995105743408 33.45045852661133 12.30365085601807 33.46894836425781 12.02867031097412 33.46894836425781 Z\" stroke=\"none\"/>\n              <path d=\"M 7.339631080627441 3 C 6.848990440368652 3 6.302170753479004 3.065010070800781 5.714341163635254 3.193229675292969 C 5.524331092834473 3.234670639038086 4.830340385437012 3.4793701171875 3.87821102142334 4.887880325317383 C 3.652180671691895 5.222248077392578 3.458743095397949 5.554664611816406 3.300876617431641 5.850318908691406 C 4.392650604248047 8.361003875732422 6.627080917358398 14.0650463104248 7.311500549316406 20.08819007873535 C 7.700301170349121 23.50976943969727 7.72234058380127 25.72874069213867 7.73844051361084 27.34897041320801 C 7.757570266723633 29.27547073364258 7.786991119384766 29.66390991210938 8.112401008605957 30.2334098815918 C 8.591300964355469 31.07155990600586 10.27924060821533 31.96895027160645 12.02867126464844 31.96895027160645 C 12.23149108886719 31.96895027160645 12.42501068115234 31.95573043823242 12.60388088226318 31.92966079711914 C 14.30547332763672 31.68166732788086 15.4047155380249 30.80276298522949 15.89111137390137 30.03141403198242 C 15.95633411407471 29.79693984985352 16.21149826049805 28.65971565246582 16.05146026611328 25.67612075805664 C 15.95181083679199 23.81834030151367 15.66014099121094 20.75299072265625 14.83654022216797 16.69985961914062 C 13.3217306137085 9.24513053894043 12.03248023986816 6.938430786132812 10.50444030761719 4.697519302368164 C 9.693090438842773 3.507669448852539 8.746610641479492 3 7.339631080627441 3 M 7.339633941650391 -3.814697265625e-06 C 9.606104850769043 -3.814697265625e-06 11.54150009155273 0.8933486938476562 12.98304080963135 3.007400512695312 C 14.88436126708984 5.795730590820312 16.24603080749512 8.570859909057617 17.77646064758301 16.10247039794922 C 19.3068904876709 23.63407897949219 19.44278144836426 29.88376045227051 18.54174041748047 31.44441032409668 C 17.64071083068848 33.00505065917969 15.73435020446777 34.50511169433594 13.03654098510742 34.89830017089844 C 10.33873081207275 35.29150009155273 6.81941032409668 34.01755905151367 5.507620811462402 31.72174072265625 C 4.195820808410645 29.42591094970703 5.180641174316406 27.90684127807617 4.330680847167969 20.42691040039062 C 3.480731010437012 12.94699096679688 0 5.839229583740234 0 5.839229583740234 C 0 5.839229583740234 1.829259872436523 0.9701004028320312 5.075020790100098 0.2621383666992188 C 5.859914779663086 0.09093856811523438 6.616742134094238 -3.814697265625e-06 7.339633941650391 -3.814697265625e-06 Z\" stroke=\"none\" fill=\"#393535\"/>\n            </g>\n            <path id=\"Path_113\" data-name=\"Path 113\" d=\"M.671,7.2S4.312,6.97,6.312,4.969A6.683,6.683,0,0,0,8,0\" transform=\"matrix(0.998, -0.07, 0.07, 0.998, 535.894, 477.408)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"3\"/>\n            <path id=\"Path_114\" data-name=\"Path 114\" d=\"M-.466,6.671s4.426.346,6.427-1.654A8,8,0,0,0,8,0\" transform=\"matrix(0.998, -0.07, 0.07, 0.998, 542.537, 483.182)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"3\"/>\n            <path id=\"Path_115\" data-name=\"Path 115\" d=\"M0,8s4.406.033,6.406-1.968S8,0,8,0\" transform=\"matrix(0.998, -0.07, 0.07, 0.998, 547.343, 488.194)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"3\"/>\n            <g id=\"Path_117\" data-name=\"Path 117\" transform=\"matrix(0.342, 0.94, -0.94, 0.342, 587.053, 550.051)\" fill=\"#99dde8\">\n              <path d=\"M 8.001890182495117 8.280082702636719 C 6.163700103759766 8.280082702636719 4.386459827423096 7.83826208114624 3.125869989395142 7.067902088165283 C 2.092609882354736 6.43646240234375 1.49999988079071 5.642662525177002 1.49999988079071 4.890042304992676 C 1.49999988079071 4.13742208480835 2.092609882354736 3.343622207641602 3.125869989395142 2.712182283401489 C 4.386459827423096 1.941822290420532 6.163700103759766 1.500002264976501 8.001890182495117 1.500002264976501 C 9.626649856567383 1.500002264976501 10.75679969787598 1.818362355232239 11.36093997955322 2.446232318878174 C 11.83623027801514 2.940202236175537 12.06727981567383 3.722532272338867 12.06727981567383 4.837922096252441 C 12.06727981567383 5.973462104797363 11.83127021789551 6.778072357177734 11.34576034545898 7.297732353210449 C 10.7367696762085 7.949572086334229 9.611729621887207 8.280082702636719 8.001890182495117 8.280082702636719 Z\" stroke=\"none\"/>\n              <path d=\"M 8.001890182495117 3.000002384185791 C 6.431920051574707 3.000002384185791 4.939769744873047 3.361612319946289 3.908049583435059 3.992102146148682 C 3.223549842834473 4.410412311553955 3 4.802122116088867 3 4.890042304992676 C 3 4.977962493896484 3.223549842834473 5.369672298431396 3.908049583435059 5.787981986999512 C 4.939769744873047 6.418472290039062 6.431920051574707 6.780082225799561 8.001890182495117 6.780082225799561 C 9.310379981994629 6.780082225799561 10.0209903717041 6.518502235412598 10.24969005584717 6.273712158203125 C 10.45151996612549 6.057682037353516 10.56727981567383 5.53435230255127 10.56727981567383 4.837922096252441 C 10.56727981567383 4.168642520904541 10.46259021759033 3.675982475280762 10.28003978729248 3.48627233505249 C 10.0538501739502 3.251192092895508 9.336599349975586 3.000002384185791 8.001890182495117 3.000002384185791 M 8.001890182495117 1.9073486328125e-06 C 12.42121028900146 1.9073486328125e-06 13.56727981567383 2.137232303619385 13.56727981567383 4.837922096252441 C 13.56727981567383 7.538622379302979 12.42121028900146 9.780082702636719 8.001890182495117 9.780082702636719 C 3.58257007598877 9.780082702636719 0 7.590742111206055 0 4.890042304992676 C 0 2.189342498779297 3.58257007598877 1.9073486328125e-06 8.001890182495117 1.9073486328125e-06 Z\" stroke=\"none\" fill=\"#393535\"/>\n            </g>\n            <g id=\"Path_116\" data-name=\"Path 116\" transform=\"matrix(0.559, 0.829, -0.829, 0.559, 590.73, 545.741)\" fill=\"#99dde8\">\n              <path d=\"M 8.001890182495117 8.280082702636719 C 6.163700103759766 8.280082702636719 4.386459827423096 7.83826208114624 3.125869989395142 7.067902088165283 C 2.092609882354736 6.43646240234375 1.49999988079071 5.642662525177002 1.49999988079071 4.890042304992676 C 1.49999988079071 4.13742208480835 2.092609882354736 3.343622207641602 3.125869989395142 2.712182283401489 C 4.386459827423096 1.941822290420532 6.163700103759766 1.500002264976501 8.001890182495117 1.500002264976501 C 9.626649856567383 1.500002264976501 10.75679969787598 1.818362355232239 11.36093997955322 2.446232318878174 C 11.83623027801514 2.940202236175537 12.06727981567383 3.722532272338867 12.06727981567383 4.837922096252441 C 12.06727981567383 5.973462104797363 11.83127021789551 6.778072357177734 11.34576034545898 7.297732353210449 C 10.7367696762085 7.949572086334229 9.611729621887207 8.280082702636719 8.001890182495117 8.280082702636719 Z\" stroke=\"none\"/>\n              <path d=\"M 8.001890182495117 3.000002384185791 C 6.431920051574707 3.000002384185791 4.939769744873047 3.361612319946289 3.908049583435059 3.992102146148682 C 3.223549842834473 4.410412311553955 3 4.802122116088867 3 4.890042304992676 C 3 4.977962493896484 3.223549842834473 5.369672298431396 3.908049583435059 5.787981986999512 C 4.939769744873047 6.418472290039062 6.431920051574707 6.780082225799561 8.001890182495117 6.780082225799561 C 9.310379981994629 6.780082225799561 10.0209903717041 6.518502235412598 10.24969005584717 6.273712158203125 C 10.45151996612549 6.057682037353516 10.56727981567383 5.53435230255127 10.56727981567383 4.837922096252441 C 10.56727981567383 4.168642520904541 10.46259021759033 3.675982475280762 10.28003978729248 3.48627233505249 C 10.0538501739502 3.251192092895508 9.336599349975586 3.000002384185791 8.001890182495117 3.000002384185791 M 8.001890182495117 1.9073486328125e-06 C 12.42121028900146 1.9073486328125e-06 13.56727981567383 2.137232303619385 13.56727981567383 4.837922096252441 C 13.56727981567383 7.538622379302979 12.42121028900146 9.780082702636719 8.001890182495117 9.780082702636719 C 3.58257007598877 9.780082702636719 0 7.590742111206055 0 4.890042304992676 C 0 2.189342498779297 3.58257007598877 1.9073486328125e-06 8.001890182495117 1.9073486328125e-06 Z\" stroke=\"none\" fill=\"#393535\"/>\n            </g>\n            <g id=\"Ellipse_30\" data-name=\"Ellipse 30\" transform=\"matrix(0.883, -0.469, 0.469, 0.883, 582.216, 549.128)\" fill=\"#99dde8\" stroke=\"#393535\" stroke-width=\"3\">\n              <ellipse cx=\"8.002\" cy=\"4.89\" rx=\"8.002\" ry=\"4.89\" stroke=\"none\"/>\n              <ellipse cx=\"8.002\" cy=\"4.89\" rx=\"6.502\" ry=\"3.39\" fill=\"none\"/>\n            </g>\n            <g id=\"Path_118\" data-name=\"Path 118\" transform=\"matrix(0.225, 0.974, -0.974, 0.225, 579.972, 550.717)\" fill=\"#99dde8\">\n              <path d=\"M 8.001890182495117 8.280082702636719 C 6.163700103759766 8.280082702636719 4.386459827423096 7.83826208114624 3.125869989395142 7.067902088165283 C 2.092609882354736 6.43646240234375 1.49999988079071 5.642662525177002 1.49999988079071 4.890042304992676 C 1.49999988079071 4.13742208480835 2.092609882354736 3.343622207641602 3.125869989395142 2.712182283401489 C 4.386459827423096 1.941822290420532 6.163700103759766 1.500002264976501 8.001890182495117 1.500002264976501 C 9.626649856567383 1.500002264976501 10.75679969787598 1.818362355232239 11.36093997955322 2.446232318878174 C 11.83623027801514 2.940202236175537 12.06727981567383 3.722532272338867 12.06727981567383 4.837922096252441 C 12.06727981567383 5.973462104797363 11.83127021789551 6.778072357177734 11.34576034545898 7.297732353210449 C 10.7367696762085 7.949572086334229 9.611729621887207 8.280082702636719 8.001890182495117 8.280082702636719 Z\" stroke=\"none\"/>\n              <path d=\"M 8.001890182495117 3.000002384185791 C 6.431920051574707 3.000002384185791 4.939769744873047 3.361612319946289 3.908049583435059 3.992102146148682 C 3.223549842834473 4.410412311553955 3 4.802122116088867 3 4.890042304992676 C 3 4.977962493896484 3.223549842834473 5.369672298431396 3.908049583435059 5.787981986999512 C 4.939769744873047 6.418472290039062 6.431920051574707 6.780082225799561 8.001890182495117 6.780082225799561 C 9.310379981994629 6.780082225799561 10.0209903717041 6.518502235412598 10.24969005584717 6.273712158203125 C 10.45151996612549 6.057682037353516 10.56727981567383 5.53435230255127 10.56727981567383 4.837922096252441 C 10.56727981567383 4.168642520904541 10.46259021759033 3.675982475280762 10.28003978729248 3.48627233505249 C 10.0538501739502 3.251192092895508 9.336599349975586 3.000002384185791 8.001890182495117 3.000002384185791 M 8.001890182495117 1.9073486328125e-06 C 12.42121028900146 1.9073486328125e-06 13.56727981567383 2.137232303619385 13.56727981567383 4.837922096252441 C 13.56727981567383 7.538622379302979 12.42121028900146 9.780082702636719 8.001890182495117 9.780082702636719 C 3.58257007598877 9.780082702636719 0 7.590742111206055 0 4.890042304992676 C 0 2.189342498779297 3.58257007598877 1.9073486328125e-06 8.001890182495117 1.9073486328125e-06 Z\" stroke=\"none\" fill=\"#393535\"/>\n            </g>\n          </g>\n          <path id=\"Path_119\" data-name=\"Path 119\" d=\"M578.89,2069.783s6.956,5.072,14.662,1.022.567-12.556,8.915-10.415,8.131,19.288,13.134,32.91,16.4,3.2,12.337,11.12-8.89,10.847-16.043,13.714-11.972-1.158-11.972-1.158-7.737-.607-12.367-9.519c-2.517-4.845-5.179-19.063-7.345-28.481S578.89,2069.783,578.89,2069.783Z\" transform=\"translate(0 -1567)\" fill=\"#b2e6ef\"/>\n          <path id=\"Path_126\" data-name=\"Path 126\" d=\"M0,18s9.838-1.057,16.588-5.557S27,0,27,0\" transform=\"translate(585.5 510.5)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n          <path id=\"Path_127\" data-name=\"Path 127\" d=\"M0,0S-1.25,7.571,0,12.071A9.074,9.074,0,0,0,5,18\" transform=\"translate(607.5 492.5)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n        </g>\n        <path id=\"Path_124\" data-name=\"Path 124\" d=\"M119.669-2.75C165.253-9.261,166.72,2.7,158,7.5S122.63,15,79,15,0,11.642,0,7.5,74.085,3.762,119.669-2.75Z\" transform=\"translate(1602.766 915)\" fill=\"rgba(0,0,0,0.18)\"/>\n        <g id=\"Group_51\" data-name=\"Group 51\" transform=\"matrix(0.978, 0.208, -0.208, 0.978, 174.124, -313.17)\">\n          <g id=\"Path_3\" data-name=\"Path 3\" transform=\"translate(1622.138 603.774)\" fill=\"#edf5fa\">\n            <path d=\"M 77.47884368896484 179.2206726074219 C 73.51234436035156 179.2206726074219 70.28676605224609 178.7529907226562 68.85047149658203 177.9695739746094 L 68.79884338378906 177.94140625 L 68.74563598632812 177.9163360595703 C 65.54821014404297 176.4089660644531 61.88931655883789 174.1197052001953 57.87063217163086 171.1121520996094 C 53.85968399047852 168.1103668212891 49.56763076782227 164.4503631591797 45.11368560791016 160.2338104248047 C 35.90834426879883 151.5190734863281 26.47526359558105 140.8759613037109 17.83428955078125 129.4550476074219 C 13.28434276580811 123.4413070678711 9.005684852600098 117.2767791748047 5.117132663726807 111.1326751708984 C 1.020342946052551 104.6595153808594 -2.653709650039673 98.19104766845703 -5.802972793579102 91.90693664550781 C -12.70920944213867 78.12606811523438 -17.06852531433105 65.36130523681641 -18.75984191894531 53.9671745300293 C -19.65192031860352 47.95725631713867 -19.3339729309082 42.21901702880859 -17.81481552124023 36.91188812255859 C -16.4014720916748 31.97443962097168 -13.91121006011963 27.2774658203125 -10.41320991516113 22.95141220092773 C -5.965578079223633 17.45096588134766 0.2021061182022095 12.42167663574219 7.918500900268555 8.003281593322754 C 14.80165863037109 4.061992168426514 22.95357894897461 0.5812814831733704 32.14789581298828 -2.34219217300415 C 40.16968536376953 -4.892849922180176 48.89681625366211 -6.997428894042969 58.08689498901367 -8.597508430480957 C 65.91063690185547 -9.959697723388672 74.00987243652344 -10.9319486618042 81.51081085205078 -11.40931606292725 C 84.71974182128906 -11.5916166305542 87.70650482177734 -11.68024444580078 90.64155578613281 -11.68024444580078 C 101.9061584472656 -11.68024444580078 111.8169708251953 -10.3892707824707 120.0986557006836 -7.843192100524902 C 125.5207138061523 -6.176297664642334 130.2307434082031 -3.95832371711731 134.0979156494141 -1.250928997993469 C 138.4705047607422 1.81028151512146 141.8631286621094 5.57070255279541 144.1816101074219 9.925912857055664 L 144.2395477294922 10.03478145599365 L 144.3104553222656 10.13570213317871 C 145.9230346679688 12.43138694763184 147.5480499267578 16.01741218566895 149.0098419189453 20.50612449645996 C 150.6112670898438 25.42354393005371 151.9382629394531 31.23925590515137 152.8473968505859 37.32454299926758 C 153.8789520263672 44.22922897338867 154.3784790039062 51.37880706787109 154.3320770263672 58.57464981079102 C 154.2798919677734 66.66570281982422 153.5315856933594 74.67283630371094 152.1078948974609 82.37359619140625 C 149.2636108398438 97.75870513916016 143.3844146728516 113.8186264038086 134.6337127685547 130.1072235107422 C 130.6723175048828 137.4809875488281 126.1115036010742 144.90576171875 121.0779495239258 152.1752777099609 C 116.3832702636719 158.9554443359375 111.2462310791016 165.6473236083984 105.8071746826172 172.0683135986328 C 102.9640274047852 174.2138061523438 98.54000854492188 176.0401000976562 92.99300384521484 177.3563385009766 C 87.99994659423828 178.5411529541016 82.34526062011719 179.2206726074219 77.47884368896484 179.2206726074219 Z\" stroke=\"none\"/>\n            <path d=\"M 90.64159393310547 -9.68023681640625 C 87.74745941162109 -9.68023681640625 84.80066680908203 -9.592849731445312 81.63307189941406 -9.413040161132812 C 74.20478057861328 -8.940093994140625 66.18161010742188 -7.976806640625 58.42995452880859 -6.627151489257812 C 49.32856750488281 -5.042510986328125 40.68989562988281 -2.9595947265625 32.75392913818359 -0.43621826171875 C 23.69429016113281 2.444427490234375 15.67281341552734 5.867813110351562 8.912284851074219 9.738876342773438 C 1.411895751953125 14.03359985351562 -4.566879272460938 18.90200805664062 -8.858016967773438 24.20892333984375 C -12.18638610839844 28.32514953613281 -14.55296325683594 32.78424072265625 -15.89204406738281 37.46226501464844 C -17.33218383789062 42.49334716796875 -17.6314697265625 47.94759368896484 -16.78152465820312 53.67350769042969 C -15.12135314941406 64.85768127441406 -10.82608032226562 77.41976165771484 -4.014938354492188 91.01087188720703 C -0.895355224609375 97.23578643798828 2.7457275390625 103.6458740234375 6.807121276855469 110.0630950927734 C 10.66603851318359 116.160400390625 14.91270446777344 122.2787933349609 19.42922973632812 128.2483215332031 C 28.00489807128906 139.5829315185547 37.36190032958984 150.1410980224609 46.4886474609375 158.7814331054688 C 50.8868408203125 162.9452056884766 55.11948394775391 166.5551147460938 59.06898498535156 169.5108947753906 C 62.98003387451172 172.4378967285156 66.52265167236328 174.6572265625 69.59848022460938 176.1072540283203 L 69.70487213134766 176.1574249267578 L 69.80812072753906 176.2137603759766 C 69.99709320068359 176.3168182373047 71.81767272949219 177.2206726074219 77.47886657714844 177.2206726074219 C 82.196533203125 177.2206726074219 87.68292236328125 176.5608520507812 92.53123474121094 175.4103698730469 C 97.622314453125 174.2023010253906 101.8245010375977 172.5012969970703 104.4298095703125 170.5998840332031 C 109.7721710205078 164.2817535400391 114.8184051513672 157.7021484375 119.4336471557617 151.0367279052734 C 124.4245910644531 143.8287353515625 128.9458465576172 136.4685668945312 132.8718414306641 129.1607055664062 C 141.5243682861328 113.0548706054688 147.3346557617188 97.19109344482422 150.1412658691406 82.010009765625 C 151.5435943603516 74.42462158203125 152.2807006835938 66.53548431396484 152.3321228027344 58.56175994873047 C 152.3778381347656 51.46878814697266 151.8857116699219 44.42298126220703 150.8693389892578 37.62007141113281 C 149.9763488769531 31.64276123046875 148.6757659912109 25.93901062011719 147.108154296875 21.12542724609375 C 145.7270660400391 16.8846435546875 144.1522827148438 13.3900146484375 142.6738433837891 11.28532409667969 L 142.5320587158203 11.08345031738281 L 142.4161529541016 10.86573791503906 C 140.2472534179688 6.79150390625 137.0626983642578 3.266128540039062 132.9508972167969 0.387451171875 C 129.2549743652344 -2.20001220703125 124.7331466674805 -4.326019287109375 119.5109558105469 -5.931488037109375 C 111.4198455810547 -8.418991088867188 101.706787109375 -9.68023681640625 90.64159393310547 -9.68023681640625 M 90.64158630371094 -13.68023681640625 C 107.5364761352539 -13.68023681640625 135.4309997558594 -10.76811218261719 145.9470062255859 8.986099243164062 C 152.663818359375 18.54817199707031 160.1968383789062 49.62145233154297 154.0745849609375 82.73717498779297 C 147.9523162841797 115.8529052734375 128.6797943115234 148.2026977539062 107.1934814453125 173.52587890625 C 97.62193298339844 180.9468994140625 73.84239196777344 182.970458984375 67.89278411865234 179.7253723144531 C 41.03489685058594 167.0637054443359 -13.44818115234375 103.3722610473633 -20.7381591796875 54.26081848144531 C -28.02815246582031 5.149368286132812 43.25386810302734 -10.9801025390625 81.39142608642578 -13.40576171875 C 83.74118804931641 -13.53932189941406 86.92546081542969 -13.68023681640625 90.64158630371094 -13.68023681640625 Z\" stroke=\"none\" fill=\"#393535\"/>\n          </g>\n          <path id=\"Path_5\" data-name=\"Path 5\" d=\"M2.176,46.913c1.642-.985,2.688-5.147,2.753-5.573,1.51-9.62-1.424-22.675,3.138-29.419A24.338,24.338,0,0,1,28.381.945\" transform=\"translate(1626.153 665.985)\" fill=\"none\" stroke=\"#d30000\" stroke-width=\"3\"/>\n          <path id=\"Path_6\" data-name=\"Path 6\" d=\"M0,.089S11.42-2.942,20.5,9.544c4.659,6.406,3.812,20.884,13.168,34.32S61.327,52.97,61.327,52.97\" transform=\"translate(1665.363 666.921)\" fill=\"none\" stroke=\"#d30000\" stroke-width=\"3\"/>\n          <path id=\"Path_7\" data-name=\"Path 7\" d=\"M.175,56.709S18.032,53.5,17.6,23.651,29.743-6.2,29.743-6.2\" transform=\"translate(1740.837 661.428)\" fill=\"none\" stroke=\"#d30000\" stroke-width=\"3\"/>\n          <path id=\"Path_8\" data-name=\"Path 8\" d=\"M0-.1s.6,0,1.275,0S2.332-.111,2.332-.111\" transform=\"translate(1774.29 655.082)\" fill=\"none\" stroke=\"#d30000\" stroke-width=\"3\"/>\n          <path id=\"Path_9\" data-name=\"Path 9\" d=\"M-.2,3.084S.743-8.091,17.938-9.3,39.97,4.927,39.97,4.927\" transform=\"translate(1641.846 732.403)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n          <path id=\"Path_10\" data-name=\"Path 10\" d=\"M-2.882,17.886s6.342.222,10.775-6.9S9.908-3.924,9.908-3.924\" transform=\"translate(1673.923 748.253)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n          <path id=\"Path_11\" data-name=\"Path 11\" d=\"M-.426,10.4S-1.842,10.165-1.9,5.783-.426-.637-.426-.637\" transform=\"translate(1749.358 736.431)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n          <path id=\"Path_12\" data-name=\"Path 12\" d=\"M-3.091,4.072A8.642,8.642,0,0,1,2.456.98c3.414-.3,3.98,1.177,3.98,1.177\" transform=\"translate(1751.886 729.752) rotate(-11)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n          <path id=\"Path_26\" data-name=\"Path 26\" d=\"M0,57.846a50.44,50.44,0,0,1-15.69-30.7c-1.7-21.7,8.463-73.337,15.41-73.44C2.4-48.97-7.938-2.631,3.144,20.767c11.447,24.166,42.1,32.793,45.37,32.634a589.734,589.734,0,0,0,78.468-8.667,64.454,64.454,0,0,0,17.641-6.575c9.763-5.454,7.866-18.314,11.006-25.53C160.076,2.422,165.256,0,165.256,0a46.136,46.136,0,0,1,5.294,12.477c1.571,6.647-6.27,27.57-10.034,31.066-8.733,8.111-21.117,16.047-80.272,25.021-23.563.988-28.817,1.366-54.9-1.813C8.789,64.585,0,57.846,0,57.846Z\" transform=\"matrix(0.469, 0.883, -0.883, 0.469, 1656.229, 618.667)\" fill=\"#99dde8\" opacity=\"0.49\"/>\n          <g id=\"Intigritas\" transform=\"translate(541.766 99.084)\">\n            <path id=\"Path_53\" data-name=\"Path 53\" d=\"M42.209,0C65.385,0,83.927,19.366,83.927,47.821S65.139,99.344,41.963,99.344,0,76.276,0,47.821,19.033,0,42.209,0Z\" transform=\"translate(1141.778 495.449)\" fill=\"url(#radial-gradient)\"/>\n            <g id=\"Path_81\" data-name=\"Path 81\" transform=\"translate(1152.213 513.713)\" fill=\"#19c1dc\">\n              <path d=\"M 28.01866340637207 51.54690551757812 C 27.7485237121582 51.54690551757812 27.48631286621094 51.54215621948242 27.2170524597168 51.53238677978516 C 20.67639350891113 51.29494476318359 14.59651374816895 48.60640716552734 10.09739303588867 43.96201705932617 C 5.552313327789307 39.27016448974609 3.049223184585571 32.99675750732422 3.049223184585571 26.29739570617676 C 3.049223184585571 22.91060638427734 3.689403295516968 19.69769668579102 4.951963424682617 16.74791526794434 C 6.155153274536133 13.93685626983643 7.896213531494141 11.42095565795898 10.12675285339355 9.270115852355957 C 14.54573345184326 5.009036064147949 20.62153244018555 2.464806079864502 27.23493385314941 2.106096029281616 C 27.6428337097168 2.083976030349731 28.05760383605957 2.072756052017212 28.46770286560059 2.072756052017212 C 34.69460296630859 2.072756052017212 40.98771286010742 4.651056289672852 45.73340225219727 9.146546363830566 C 48.10362243652344 11.39180564880371 49.97107315063477 13.98358631134033 51.28389358520508 16.84988594055176 C 52.66252517700195 19.85987663269043 53.36154174804688 23.03848648071289 53.36154174804688 26.29739570617676 C 53.36154174804688 29.60391616821289 52.65191268920898 32.86130523681641 51.25237274169922 35.97908782958984 C 49.91350173950195 38.96170425415039 48.01435470581055 41.6712760925293 45.6076545715332 44.03254699707031 C 40.74028396606445 48.80802536010742 34.32935333251953 51.54690551757812 28.01866340637207 51.54690551757812 Z\" stroke=\"none\"/>\n              <path d=\"M 28.46770286560059 3.072757720947266 C 28.07552337646484 3.072757720947266 27.67898368835449 3.083477020263672 27.28909301757812 3.104625701904297 C 20.91550445556641 3.450325012207031 15.06697463989258 5.895587921142578 10.82088470458984 9.989967346191406 C 8.686954498291016 12.04764556884766 7.021675109863281 14.4537353515625 5.871292114257812 17.14140701293945 C 4.662254333496094 19.96612548828125 4.049224853515625 23.04664611816406 4.049224853515625 26.29739570617676 C 4.049224853515625 32.73562622070312 6.452251434326172 38.76193618774414 10.81565475463867 43.2662353515625 C 15.13425445556641 47.72428512573242 20.97193145751953 50.30501556396484 27.25334358215332 50.53304672241211 C 27.51025390625 50.54237747192383 27.76059341430664 50.54690551757812 28.01866340637207 50.54690551757812 C 34.06964111328125 50.54690551757812 40.22532272338867 47.91233444213867 44.90731430053711 43.3187370300293 C 47.22463226318359 41.04515838623047 49.05248260498047 38.43795776367188 50.34007263183594 35.56956481933594 C 51.68142318725586 32.58142852783203 52.36154174804688 29.46181678771973 52.36154174804688 26.29739570617676 C 52.36154174804688 23.18320655822754 51.69308471679688 20.14471435546875 50.37472534179688 17.26630783081055 C 49.11546325683594 14.51694488525391 47.32252502441406 12.02932739257812 45.04569244384766 9.872535705566406 C 40.48383331298828 5.551174163818359 34.44139099121094 3.072757720947266 28.46770286560059 3.072757720947266 M 28.46770286560059 1.072757720947266 C 41.8183479309082 1.072757720947266 54.36154174804688 12.25869750976562 54.36154174804688 26.29739570617676 C 54.36154174804688 40.49527359008789 41.66635894775391 52.54690933227539 28.01866722106934 52.54690933227539 C 27.7389965057373 52.54690933227539 27.46114349365234 52.54190444946289 27.18077278137207 52.5317268371582 C 13.21850204467773 52.02487564086914 2.049224853515625 40.78621673583984 2.049224853515625 26.29739570617676 C 2.049224853515625 11.80857467651367 13.36111450195312 1.857135772705078 27.18077278137207 1.107566833496094 C 27.610107421875 1.084278106689453 28.03964233398438 1.072757720947266 28.46770286560059 1.072757720947266 Z\" stroke=\"none\" fill=\"#393535\"/>\n            </g>\n            <path id=\"Path_77\" data-name=\"Path 77\" d=\"M22.265,20.755C41.686,15.041,43.139-9.666,43.011,3.785S31.383,26.709,18.7,26.539.22,18.185-.608,14.15,2.844,26.469,22.265,20.755Z\" transform=\"translate(1160.618 538.593) rotate(-3)\" fill=\"#12b4ce\"/>\n            <path id=\"Path_79\" data-name=\"Path 79\" d=\"M0,9.357S.938,6.476,4.725,3s6.558-4.111,6.558-4.111\" transform=\"translate(1194.526 520.053) rotate(81)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/>\n            <path id=\"Path_80\" data-name=\"Path 80\" d=\"M.675,0A7.184,7.184,0,0,0,.136,1.6,9.86,9.86,0,0,0-.058,2.981\" transform=\"translate(1200.933 538.609) rotate(151)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\"/>\n            <path id=\"Path_82\" data-name=\"Path 82\" d=\"M1187.976,552.828s-4.65-5.221-7.649-5.065-3.906,3.194-3.86,5.065.594,6.631,4.529,5.687c2.058-.494,4.844-4.292,8.139-8.365,2.853-3.526,6.181-7.332,8.872-8.21,5.642-1.84,6.164,4.272,5.557,9.215-.024.193-.05.382-.117.788-.693,4.347-3.213,6.654-6.737,6.906C1193.043,559.113,1187.976,552.828,1187.976,552.828Z\" transform=\"translate(-34.829 51.797) rotate(-3)\" fill=\"none\" stroke=\"#707070\" stroke-width=\"3\" opacity=\"0.3\"/>\n          </g>\n          <g id=\"Group_49\" data-name=\"Group 49\" transform=\"matrix(0.996, -0.087, 0.087, 0.996, 420.784, 116.235)\">\n            <g id=\"Path_104\" data-name=\"Path 104\" transform=\"translate(1176 791.208)\" fill=\"#99dde8\">\n              <path d=\"M 30.5 30.29207992553711 C 26.49694061279297 30.29207992553711 22.61714935302734 29.86104011535645 18.9683895111084 29.01092910766602 C 15.47039985656738 28.19594955444336 12.33759021759033 27.03402900695801 9.656970024108887 25.55743980407715 C 7.038300037384033 24.11496925354004 4.995920181274414 22.45293045043945 3.586570024490356 20.61748886108398 C 2.202019929885864 18.81435012817383 1.5 16.92148971557617 1.5 14.99146938323975 C 1.5 12.9220495223999 2.308579921722412 11.84913921356201 4.383930206298828 11.16475009918213 C 6.653739929199219 10.41622924804688 10.09465980529785 10.29838943481445 14.07892036437988 10.16193962097168 C 18.8485107421875 9.998589515686035 24.78441047668457 9.795299530029297 30.84153938293457 8.37891960144043 C 35.37530136108398 7.318759441375732 39.89907073974609 6.758389472961426 43.92378997802734 6.758389472961426 C 48.71794891357422 6.758389472961426 52.70582962036133 7.531869411468506 55.4563102722168 8.995199203491211 C 56.78834915161133 9.703889846801758 57.80537033081055 10.56487941741943 58.47912979125977 11.55425930023193 C 59.15652847290039 12.54898929595947 59.5 13.70543003082275 59.5 14.99146938323975 C 59.5 16.92148971557617 58.79798126220703 18.81435012817383 57.41342926025391 20.61748886108398 C 56.00408172607422 22.45293045043945 53.96170043945312 24.11496925354004 51.3430290222168 25.55743980407715 C 48.66241073608398 27.03402900695801 45.52959823608398 28.19594955444336 42.03160858154297 29.01092910766602 C 38.38285064697266 29.86104011535645 34.50305938720703 30.29207992553711 30.5 30.29207992553711 Z\" stroke=\"none\"/>\n              <path d=\"M 43.92378997802734 8.258378982543945 C 40.01225280761719 8.258378982543945 35.60659027099609 8.805124282836914 31.1830883026123 9.839513778686523 C 24.98274612426758 11.28937911987305 18.96533203125 11.49545669555664 14.13026809692383 11.66104698181152 C 10.26113510131836 11.79355812072754 6.919631958007812 11.90800094604492 4.85369873046875 12.58927917480469 C 4.134677886962891 12.82639122009277 3.639331817626953 13.11176872253418 3.381443023681641 13.43749046325684 C 3.287101745605469 13.5566349029541 3 13.91922378540039 3 14.99146842956543 C 3 16.58343505859375 3.597633361816406 18.16894721984863 4.776298522949219 19.70394515991211 C 6.040767669677734 21.3507022857666 7.978733062744141 22.92047882080078 10.38069915771484 24.24357986450195 C 12.94085693359375 25.65382385253906 15.9446907043457 26.76627922058105 19.30875396728516 27.55005645751953 C 22.84607696533203 28.37420272827148 26.61135482788086 28.79207992553711 30.5 28.79207992553711 C 34.38864517211914 28.79207992553711 38.15392303466797 28.37420272827148 41.69124603271484 27.55005645751953 C 45.05531311035156 26.76627922058105 48.05914306640625 25.65382385253906 50.61930084228516 24.24357986450195 C 53.02126693725586 22.92047882080078 54.95923233032227 21.3507022857666 56.22370147705078 19.70394515991211 C 57.40236663818359 18.16894721984863 58 16.58343505859375 58 14.99146842956543 C 58 13.99835777282715 57.75117874145508 13.15021324157715 57.23931121826172 12.39856910705566 C 56.7038459777832 11.61224555969238 55.86691284179688 10.91273498535156 54.75176620483398 10.3194465637207 C 52.21741104125977 8.971078872680664 48.4731559753418 8.258378982543945 43.92378997802734 8.258378982543945 M 43.92378997802734 5.258380889892578 C 53.78766250610352 5.258380889892578 61 8.447546005249023 61 14.99146842956543 C 61 24.27019119262695 47.34467697143555 31.79207992553711 30.5 31.79207992553711 C 13.65532302856445 31.79207992553711 0 24.27019119262695 0 14.99146842956543 C 0 5.712745666503906 14.50408935546875 10.65874671936035 30.5 6.918312072753906 C 35.21461486816406 5.815862655639648 39.80153656005859 5.258380889892578 43.92378997802734 5.258380889892578 Z\" stroke=\"none\" fill=\"#393535\"/>\n            </g>\n            <path id=\"Path_106\" data-name=\"Path 106\" d=\"M22.641,5.868c15.4-6.507,23.3-2.505,23.3.9s-10.8,8.727-23.3,8.727S-.716,11.513-.659,8.912,7.245,12.375,22.641,5.868Z\" transform=\"translate(1184.795 804.475)\" fill=\"#62c3d3\"/>\n          </g>\n          <g id=\"Path_121\" data-name=\"Path 121\" transform=\"translate(1653.766 842)\" fill=\"#99dde8\">\n            <path d=\"M 20.99999809265137 15.5 C 9.73588752746582 15.5 4.953197956085205 10.55531978607178 4.165847778320312 8.823149681091309 C 3.653408050537109 7.695779800415039 2.910727977752686 4.633279800415039 4.041788101196289 2.876739978790283 C 4.708417892456055 1.841459989547729 6.042947769165039 1.316529989242554 8.008297920227051 1.316529989242554 C 10.04128837585449 1.316529989242554 12.67459774017334 1.877810001373291 15.83508777618408 2.984770059585571 C 20.79327774047852 4.721369743347168 25.48724746704102 5.565559864044189 30.18524742126465 5.565559864044189 C 33.11331939697266 5.565559864044189 35.49156951904297 5.22992992401123 37.22808837890625 4.984869956970215 C 38.22104644775391 4.84473991394043 39.07858657836914 4.723720073699951 39.64839935302734 4.723720073699951 C 39.74324035644531 4.723720073699951 39.81908416748047 4.727107048034668 39.87888717651367 4.731886386871338 C 39.88077163696289 4.784749507904053 39.88082885742188 4.849816799163818 39.87739944458008 4.928750038146973 C 39.83809661865234 5.832540035247803 39.36014938354492 6.940529823303223 38.53158950805664 8.048629760742188 C 37.59568786621094 9.300290107727051 36.24689865112305 10.52523994445801 34.63104629516602 11.59105968475342 C 30.80947875976562 14.11178016662598 25.96853828430176 15.5 20.99999809265137 15.5 Z\" stroke=\"none\"/>\n            <path d=\"M 8.008296966552734 2.816530227661133 C 7.030368804931641 2.816530227661133 5.767189025878906 2.967860221862793 5.302947998046875 3.688819885253906 C 4.60125732421875 4.778540134429932 5.078689575195312 7.206490039825439 5.531387329101562 8.20244026184082 C 5.789466857910156 8.770230293273926 6.927066802978516 10.19073009490967 9.385227203369141 11.50290012359619 C 11.519287109375 12.64206981658936 15.26665878295898 14 20.99999809265137 14 C 25.67825698852539 14 30.22587776184082 12.69979953765869 33.80513000488281 10.3389196395874 C 35.27798843383789 9.367420196533203 36.49696731567383 8.264840126037598 37.33027648925781 7.15038013458252 C 37.52867889404297 6.885043621063232 37.68981170654297 6.640120506286621 37.82065200805664 6.416348457336426 C 37.69602584838867 6.433760643005371 37.56838607788086 6.451773643493652 37.43824768066406 6.470139980316162 C 35.65760803222656 6.721419811248779 33.21893692016602 7.065559864044189 30.18524932861328 7.065559864044189 C 25.31561660766602 7.065559864044189 20.45944786071777 6.193789958953857 15.33924865722656 4.400440216064453 C 12.3385181427002 3.34943962097168 9.872028350830078 2.816530227661133 8.008296966552734 2.816530227661133 M 8.00830078125 -0.1834716796875 C 10.06575965881348 -0.1834716796875 12.77745246887207 0.3244838714599609 16.33092880249023 1.569089889526367 C 28.8633975982666 5.958589553833008 36.47130966186523 3.223981857299805 39.64839553833008 3.223718643188477 C 40.86919403076172 3.223617553710938 41.43539428710938 3.627240180969238 41.3759765625 4.993899822235107 C 41.16192626953125 9.917240142822266 32.59797668457031 17 20.99999809265137 17 C 9.402017593383789 17 3.924556732177734 11.91724014282227 2.800289154052734 9.443849563598633 C 1.906314849853516 7.477094173431396 0.02124404907226562 -0.1834716796875 8.00830078125 -0.1834716796875 Z\" stroke=\"none\" fill=\"#393535\"/>\n          </g>\n          <path id=\"Path_122\" data-name=\"Path 122\" d=\"M6.092,2.406c9.2,2.506,17.876-1.131,17.763.9S15.374,7.109,12.933,6.9,7.548,7.425,1.807,5.114-3.1-.1,6.092,2.406Z\" transform=\"translate(1662.766 849.075)\" fill=\"#62c3d3\"/>\n        </g>\n        <g id=\"Group_52\" data-name=\"Group 52\" transform=\"translate(317.456 -517.657) rotate(20)\">\n          <g id=\"Path_2\" data-name=\"Path 2\" transform=\"matrix(0.951, -0.309, 0.309, 0.951, 1602.339, 438.52)\" fill=\"#cfcfcf\">\n            <path d=\"M 2.267471790313721 20.29259872436523 C 2.155546903610229 19.20329284667969 2.039892911911011 17.75480461120605 2.008408784866333 16.20852279663086 C 1.930338859558105 12.37401294708252 2.419288873672485 9.456692695617676 3.349878787994385 8.204612731933594 C 3.962049007415771 7.380952835083008 6.276689052581787 6.015442848205566 10.06775856018066 4.821512699127197 C 13.80230903625488 3.645382881164551 17.83107948303223 2.970842838287354 21.12105941772461 2.970842838287354 C 24.8227481842041 2.970842838287354 26.33570861816406 3.804183006286621 26.90810966491699 4.300932884216309 C 28.78224945068359 5.927392959594727 30.66275978088379 8.843592643737793 32.34634017944336 12.73427295684814 C 32.88801193237305 13.98605442047119 33.32668304443359 15.14921855926514 33.65519714355469 16.08407592773438 L 2.267471790313721 20.29259872436523 Z\" stroke=\"none\"/>\n            <path d=\"M 21.12105941772461 4.970843315124512 C 18.11324882507324 4.970843315124512 14.39418983459473 5.583493232727051 10.91745948791504 6.651713371276855 C 6.978618621826172 7.86191463470459 5.255228042602539 9.070248603820801 4.942832946777344 9.414495468139648 C 4.55171012878418 9.964534759521484 3.927038192749023 11.97386169433594 4.007158279418945 16.12545394897461 C 4.019903182983398 16.78579711914062 4.048831939697266 17.42839431762695 4.086462020874023 18.03080940246582 L 30.89242744445801 14.43661689758301 C 30.77194213867188 14.14137649536133 30.64471244812012 13.83795738220215 30.51081848144531 13.52853298187256 C 28.9678783416748 9.962882995605469 27.22286987304688 7.222232818603516 25.59723854064941 5.811443328857422 C 25.23748016357422 5.499233245849609 23.88987922668457 4.970843315124512 21.12105941772461 4.970843315124512 M 21.12105560302734 0.9708404541015625 C 24.13322067260742 0.9708404541015625 26.73061180114746 1.498767852783203 28.21897888183594 2.790431976318359 C 33.35274887084961 7.245722770690918 36.29441070556641 17.74810218811035 36.29441070556641 17.74810218811035 L 0.5301284790039062 22.54344367980957 C 0.5301284790039062 22.54344367980957 -1.262332916259766 11.05742263793945 1.744678497314453 7.01157283782959 C 3.879905700683594 4.138690948486328 13.74347305297852 0.9708404541015625 21.12105560302734 0.9708404541015625 Z\" stroke=\"none\" fill=\"#393535\"/>\n          </g>\n          <path id=\"Path_18\" data-name=\"Path 18\" d=\"M360.15,492.474a9.081,9.081,0,0,1,7.674,2.843c3.544,3.617,8.826,35.763,7.291,44.712s-7.291,12.928-7.291,12.928Z\" transform=\"matrix(0.996, 0.087, -0.087, 0.996, 1460.035, -33.664)\" fill=\"#c7ddec\" stroke=\"#393535\" stroke-width=\"3\"/>\n          <path id=\"Path_1\" data-name=\"Path 1\" d=\"M243.078,494.684c7.242-4.609,16.508-11.552,33.625-17.8,8.23-3.007,18.181-6.692,32.215-8.134,18.7-1.921,65.161-3.024,88.676,14.378s28.141,98.192,16.175,121.568-89.389,32.646-125.3,33.643a150.983,150.983,0,0,1-28.57-1.516,43.786,43.786,0,0,1-28.292-16.939c-8.475-11.222-15.1-72.173-12.989-89.041S240.082,496.591,243.078,494.684Z\" transform=\"translate(1358.476 -38.688)\" fill=\"#edf5fa\" stroke=\"#393535\" stroke-width=\"4\"/>\n          <path id=\"Path_25\" data-name=\"Path 25\" d=\"M220.768,569.725s-12.146-48.013-10.575-86.546c.608-14.905,21.029-32.123,23.654-33.394,1.051-.509,22.418-6.957,22.541,54.544,5.463,33.9,2.9,65.039,4.453,63.864,1.948,9.881,119.269-4.742,129.028-7.357,9.911-2.656,14.787-8.135,8.444,0-12.245,15.705-55.2,21.1-87.938,26s-31.664,5.6-56.09,3.15c-8.261-.892-19.206-5.785-26-11.079A24.858,24.858,0,0,1,220.768,569.725Z\" transform=\"translate(1369.55 8.318)\" fill=\"#99dde8\" opacity=\"0.49\"/>\n          <g id=\"Path_4\" data-name=\"Path 4\" transform=\"translate(1572.839 498.43)\" fill=\"#e2f3ff\">\n            <path d=\"M 16.52291679382324 73.67024993896484 C 15.75340557098389 73.67024993896484 15.1650915145874 73.63619232177734 14.7306547164917 73.59375 L 0.03062746115028858 1.495423078536987 C 1.329726099967957 0.6839776039123535 3.699273824691772 -0.735771119594574 6.793404579162598 -2.331189632415771 C 10.51632308959961 -4.250823020935059 12.46649837493896 -4.544006824493408 12.91186714172363 -4.587698459625244 C 13.19243240356445 -4.53366756439209 13.94194889068604 -4.358583927154541 14.98299217224121 -3.880464553833008 C 16.21701622009277 -3.31370210647583 18.12503051757812 -2.192864656448364 20.20691680908203 -0.07173959165811539 C 22.58420372009277 2.35036039352417 24.69237899780273 5.547722816467285 26.47287940979004 9.431535720825195 C 28.72915458679199 14.3531608581543 30.45656776428223 20.38319778442383 31.60711669921875 27.35417366027832 C 32.79501724243164 34.55146026611328 33.41458129882812 41.19857406616211 33.44856643676758 47.11087417602539 C 33.47551727294922 51.79576110839844 33.13714218139648 56.02267456054688 32.44284057617188 59.67419815063477 C 31.32435417175293 65.55670166015625 29.69437980651855 67.83267211914062 29.67823028564453 67.85399627685547 L 29.55142974853516 68.02146911621094 L 29.47647476196289 68.18161010742188 C 29.42958831787109 68.27212524414062 28.83833503723145 69.38680267333984 27.60126686096191 70.55065155029297 C 25.93564224243164 72.11768341064453 23.91287994384766 73.05159759521484 21.58917999267578 73.32644653320312 C 19.66040420532227 73.55457305908203 17.95586776733398 73.67024993896484 16.52291679382324 73.67024993896484 Z\" stroke=\"none\"/>\n            <path d=\"M 12.83111381530762 -2.555648803710938 C 12.21466064453125 -2.439979553222656 10.55447006225586 -2.020278930664062 7.709999084472656 -0.5535964965820312 C 5.45477294921875 0.6092605590820312 3.59442138671875 1.675712585449219 2.270431518554688 2.469757080078125 L 16.37952423095703 71.66980743408203 C 16.42642211914062 71.67009735107422 16.47427558898926 71.67024230957031 16.52292823791504 71.67024230957031 C 17.87767028808594 71.67024230957031 19.5031566619873 71.55922698974609 21.35427093505859 71.34027099609375 C 25.63286972045898 70.83422088623047 27.486328125 67.65439605712891 27.68398666381836 67.29276275634766 L 27.81129837036133 67.00650024414062 L 28.0837287902832 66.64669799804688 C 28.08559799194336 66.64421081542969 28.37362670898438 66.16505432128906 28.71072769165039 65.39342498779297 C 29.20252799987793 64.26765441894531 29.90835571289062 62.29678344726562 30.47804260253906 59.30059814453125 C 31.14825630187988 55.77571487426758 31.47480010986328 51.6783561706543 31.44859886169434 47.12237167358398 C 31.41521453857422 41.31501388549805 30.80462837219238 34.77361297607422 29.63381385803223 27.67987060546875 C 28.53887176513672 21.04584121704102 26.91534233093262 15.30052947998047 24.80832672119141 10.60348510742188 C 23.16732788085938 6.945327758789062 21.23848533630371 3.928413391113281 19.07535552978516 1.636558532714844 C 16.17547225952148 -1.435905456542969 13.69791603088379 -2.324409484863281 12.83111381530762 -2.555648803710938 M 13.00275421142578 -6.595108032226562 C 13.0171012878418 -6.595108032226562 13.024169921875 -6.594856262207031 13.024169921875 -6.594856262207031 C 13.024169921875 -6.594856262207031 28.29758453369141 -4.979240417480469 33.58041381835938 27.02848434448242 C 38.86325836181641 59.03620147705078 31.27274322509766 69.06127166748047 31.27274322509766 69.06127166748047 C 31.27274322509766 69.06127166748047 28.62765502929688 74.50788879394531 21.82410049438477 75.31258392333984 C 15.02053642272949 76.11730194091797 13.03994178771973 75.31258392333984 13.03994178771973 75.31258392333984 L -2.202770233154297 0.5525283813476562 C -2.202770233154297 0.5525283813476562 0.9047698974609375 -1.545059204101562 5.876827239990234 -4.108802795410156 C 10.56454658508301 -6.525909423828125 12.76626014709473 -6.595108032226562 13.00275421142578 -6.595108032226562 Z\" stroke=\"none\" fill=\"#393535\"/>\n          </g>\n          <path id=\"Path_20\" data-name=\"Path 20\" d=\"M1.186.827s14.128,6.85,22.9,34.678,9.2,47.736,9.2,47.736\" transform=\"translate(1617.2 445.825)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n          <path id=\"Path_19\" data-name=\"Path 19\" d=\"M9.631,1.337s2.373,28.489,0,42.1-18.008,21.1-18.008,21.1\" transform=\"translate(1641.507 534.58)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n          <path id=\"Path_22\" data-name=\"Path 22\" d=\"M-6.133-33.046S1.177-.32,2.108,29.194s-4.63,59.242-4.63,59.242\" transform=\"translate(1769.012 483.124)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n          <path id=\"Path_23\" data-name=\"Path 23\" d=\"M-1.239.56s11.7-5.673,18.43,9.972,9.792,60.644,11.882,80.943c5.372,52.181-16.024,48.6-16.024,48.6\" transform=\"translate(1600.558 457.428)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"2\"/>\n          <g id=\"Group_5\" data-name=\"Group 5\" transform=\"translate(1558.898 496.413)\">\n            <g id=\"Ellipse_4\" data-name=\"Ellipse 4\" transform=\"translate(0 4.901) rotate(-11)\" fill=\"#ececec\" stroke=\"#393535\" stroke-width=\"4\">\n              <ellipse cx=\"12.843\" cy=\"37.969\" rx=\"12.843\" ry=\"37.969\" stroke=\"none\"/>\n              <ellipse cx=\"12.843\" cy=\"37.969\" rx=\"10.843\" ry=\"35.969\" fill=\"none\"/>\n            </g>\n            <path id=\"Path_34\" data-name=\"Path 34\" d=\"M0,8.516l15.69-9.1\" transform=\"translate(6.251 9.978)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"3\"/>\n            <path id=\"Path_68\" data-name=\"Path 68\" d=\"M0,9.723,21.288.408\" transform=\"translate(6.251 21.135)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"3\"/>\n            <line id=\"Line_3\" data-name=\"Line 3\" y1=\"7.817\" x2=\"23.452\" transform=\"translate(8.056 35.73)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"3\"/>\n            <line id=\"Line_4\" data-name=\"Line 4\" y1=\"5.628\" x2=\"20.962\" transform=\"translate(11.407 49.087)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"3\"/>\n            <path id=\"Path_120\" data-name=\"Path 120\" d=\"M0,2.233,15.3-1.99\" transform=\"translate(15.874 63.649)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"3\"/>\n            <path id=\"Path_69\" data-name=\"Path 69\" d=\"M0,5.82,14.016.408\" transform=\"translate(10.405 25.038)\" fill=\"none\" stroke=\"#a09c9c\" stroke-linecap=\"round\" stroke-width=\"2\"/>\n            <path id=\"Path_71\" data-name=\"Path 71\" d=\"M0,5.041,9.645-.579\" transform=\"translate(9.754 14.033)\" fill=\"none\" stroke=\"#a09c9c\" stroke-linecap=\"round\" stroke-width=\"2\"/>\n            <path id=\"Path_72\" data-name=\"Path 72\" d=\"M1.248,3.411l14.226-3.8\" transform=\"translate(14.428 52.499)\" fill=\"none\" stroke=\"#a09c9c\" stroke-linecap=\"round\" stroke-width=\"2\"/>\n            <path id=\"Path_73\" data-name=\"Path 73\" d=\"M0,3.071,10.12.408\" transform=\"translate(19.782 63.882)\" fill=\"none\" stroke=\"#a09c9c\" stroke-linecap=\"round\" stroke-width=\"2\"/>\n            <path id=\"Path_74\" data-name=\"Path 74\" d=\"M0,5.654,16.115.408\" transform=\"translate(12.354 38.773)\" fill=\"none\" stroke=\"#a09c9c\" stroke-linecap=\"round\" stroke-width=\"2\"/>\n          </g>\n          <path id=\"Path_91\" data-name=\"Path 91\" d=\"M0,6.057A11.607,11.607,0,0,1,3.235,1.708a11.372,11.372,0,0,1,4.49-2.814\" transform=\"translate(1576.608 386.075)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"2\" opacity=\"0.48\"/>\n          <path id=\"Path_92\" data-name=\"Path 92\" d=\"M.5,0A4.918,4.918,0,0,0,.133,1.094,6.75,6.75,0,0,0,0,2.041\" transform=\"matrix(0.996, -0.087, 0.087, 0.996, 1575.069, 395.799)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"2\" opacity=\"0.48\"/>\n          <g id=\"Group_48\" data-name=\"Group 48\" transform=\"translate(481.766 245.38)\">\n            <g id=\"lampu_ide\" data-name=\"lampu ide\" transform=\"translate(1058 111)\">\n              <ellipse id=\"Ellipse_17\" data-name=\"Ellipse 17\" cx=\"46.5\" cy=\"45\" rx=\"46.5\" ry=\"45\" transform=\"translate(0 -0.38)\" fill=\"url(#radial-gradient-2)\"/>\n              <g id=\"Ellipse_16\" data-name=\"Ellipse 16\" transform=\"translate(25 24.62)\" fill=\"#ff6060\" stroke=\"#393535\" stroke-width=\"3\">\n                <ellipse cx=\"20\" cy=\"20.5\" rx=\"20\" ry=\"20.5\" stroke=\"none\"/>\n                <ellipse cx=\"20\" cy=\"20.5\" rx=\"18.5\" ry=\"19\" fill=\"none\"/>\n              </g>\n              <path id=\"Path_75\" data-name=\"Path 75\" d=\"M5.586,17.039c12.44-3.1,10.686-15.11,11.394-10.387a16.823,16.823,0,0,1-2.548,11.288c-3.787,4.829-3.515,4.038-6.653,5.886s-8.592,2.088-13.915-.175a14.956,14.956,0,0,1-7.476-7.625S-6.854,20.136,5.586,17.039Z\" transform=\"translate(45.186 36.637)\" fill=\"#fd3838\"/>\n            </g>\n            <path id=\"Path_89\" data-name=\"Path 89\" d=\"M0,5.725A11.251,11.251,0,0,1,2.672,1.577,9.183,9.183,0,0,1,6.38-1.106\" transform=\"matrix(0.978, 0.208, -0.208, 0.978, 1093.669, 142.962)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\" opacity=\"0.48\"/>\n            <path id=\"Path_90\" data-name=\"Path 90\" d=\"M.58,0A5.687,5.687,0,0,0,.154,1.266,7.805,7.805,0,0,0,0,2.36\" transform=\"matrix(0.996, -0.087, 0.087, 0.996, 1089.341, 154.274)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-width=\"3\" opacity=\"0.48\"/>\n          </g>\n          <path id=\"Path_132\" data-name=\"Path 132\" d=\"M1692.135,545.649c16.122-7.038,22.222,2.175,22.222,2.175\" transform=\"matrix(0.978, -0.208, 0.208, 0.978, -62.524, 382.339)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"3\"/>\n          <path id=\"Path_133\" data-name=\"Path 133\" d=\"M1697.783,547.64c12.6-14.737,28.967.436,18.394,13.587\" transform=\"translate(3360.335 -135.277) rotate(141)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"4\"/>\n          <path id=\"Path_134\" data-name=\"Path 134\" d=\"M1697.783,547.173c10.375-13.6,23.844.4,15.14,12.538\" transform=\"translate(3404.318 -137.742) rotate(141)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"3.5\"/>\n        </g>\n        <g id=\"Group_45\" data-name=\"Group 45\" transform=\"translate(629.515 109.705)\">\n          <g id=\"Group_8\" data-name=\"Group 8\" transform=\"translate(929.726 548.774)\">\n            <path id=\"Path_48\" data-name=\"Path 48\" d=\"M697.847,689.591a36.827,36.827,0,0,0,7.615,10.795c5.113,4.914,10.4,7.5,14.145,7.737s10.639-7.737,10.639-7.737,5.829.885,8.221-1.813,1.346-8.981,1.346-8.981l-37.495-20.518Z\" transform=\"translate(-690.607 -583.015)\" fill=\"#edf5fa\" stroke=\"#393535\" stroke-width=\"4\"/>\n            <g id=\"Group_7\" data-name=\"Group 7\" transform=\"translate(33.82 0)\">\n              <g id=\"Group_2\" data-name=\"Group 2\" transform=\"translate(0 0)\">\n                <g id=\"Path_16\" data-name=\"Path 16\" transform=\"translate(21.825 0) rotate(34)\" fill=\"#8d8b8b\">\n                  <path d=\"M 18.52095603942871 37.96002197265625 L 3.17142915725708 37.19657135009766 C 2.61623740196228 34.47868728637695 0.7856850028038025 24.8645133972168 1.020902752876282 17.34816932678223 C 1.137922763824463 13.60886001586914 1.706062793731689 10.11384963989258 2.663912773132324 7.240960121154785 C 3.428592681884766 4.94743013381958 4.240142822265625 3.626600027084351 4.599112510681152 3.207730054855347 C 5.155902862548828 2.558020114898682 7.361252784729004 1 9.515102386474609 1 C 9.882122993469238 1 10.23178291320801 1.047190070152283 10.55439281463623 1.140240073204041 C 12.8768424987793 1.810130000114441 13.95290279388428 2.947630167007446 14.81876277923584 5.648119926452637 C 15.14157295227051 6.654910087585449 14.96520233154297 7.901520252227783 14.72109317779541 9.626879692077637 C 14.39024257659912 11.96533966064453 13.93713283538818 15.16796970367432 14.44352245330811 19.85898017883301 C 15.15376091003418 26.43839836120605 17.53454208374023 34.71789932250977 18.52095603942871 37.96002197265625 Z\" stroke=\"none\"/>\n                  <path d=\"M 9.51511287689209 2 C 7.739532470703125 2 5.797062873840332 3.34661865234375 5.358432769775391 3.858440399169922 C 5.125042915344238 4.130771636962891 4.356442451477051 5.326141357421875 3.612573623657227 7.557260513305664 C 2.965742111206055 9.497280120849609 2.164463043212891 12.7761402130127 2.020402908325195 17.37944030761719 C 1.8067626953125 24.20643997192383 3.329378128051758 32.82384490966797 3.99907112121582 36.23650741577148 L 17.15822410583496 36.89101028442383 C 16.02541160583496 33.02931976318359 14.08320617675781 25.8386344909668 13.44929313659668 19.96630096435547 C 12.92952251434326 15.15133094787598 13.39273262023926 11.87734985351562 13.73095321655273 9.486789703369141 C 13.95641326904297 7.893239974975586 14.11931228637695 6.741880416870117 13.86651229858398 5.953441619873047 C 13.10376262664795 3.574550628662109 12.26515293121338 2.674449920654297 10.27724266052246 2.101058959960938 C 10.04476261138916 2.034000396728516 9.788352966308594 2 9.51511287689209 2 M 9.515117645263672 -3.814697265625e-06 C 9.957671165466309 -3.814697265625e-06 10.39973735809326 0.05485153198242188 10.83153247833252 0.1794013977050781 C 13.6727123260498 0.9989204406738281 14.88227272033691 2.570960998535156 15.7710132598877 5.342800140380859 C 16.65976333618164 8.114639282226562 14.55422210693359 11.5669994354248 15.43774223327637 19.75164985656738 C 16.32126235961914 27.936279296875 19.90156364440918 39.02993011474609 19.90156364440918 39.02993011474609 L 2.351282119750977 38.15702056884766 C 2.351282119750977 38.15702056884766 -0.2612781524658203 26.34952926635742 0.02138328552246094 17.31687927246094 C 0.3040523529052734 8.28424072265625 2.982872009277344 3.556919097900391 3.839802742004395 2.556991577148438 C 4.566498756408691 1.709033966064453 7.045701026916504 -3.814697265625e-06 9.515117645263672 -3.814697265625e-06 Z\" stroke=\"none\" fill=\"#393535\"/>\n                </g>\n              </g>\n              <path id=\"Path_30\" data-name=\"Path 30\" d=\"M0,.135a8.8,8.8,0,0,1,6.421,2.77c3.211,3.083,2.7,6.121,2.7,6.121\" transform=\"translate(18.545 8.315)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"2\"/>\n              <path id=\"Path_31\" data-name=\"Path 31\" d=\"M0,.088S3.977-1.5,7.429,3.193s2.435,7.494,2.435,7.494\" transform=\"translate(11.631 16.052)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"2\"/>\n              <path id=\"Path_32\" data-name=\"Path 32\" d=\"M0,.1S4.9-1.551,9.161,3.319s3,7.774,3,7.774\" transform=\"translate(5.377 24.578)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"2\"/>\n            </g>\n            <path id=\"Path_100\" data-name=\"Path 100\" d=\"M697.847,684.544a28.1,28.1,0,0,0,6.947,8.139c4.664,3.705,10.361,2.593,13.78,2.776s8.829-2.776,8.829-2.776,5.568,1.518,6.8-.894-.751-4.664-.751-4.664l-31.528-18.051Z\" transform=\"translate(-686.906 -580.184)\" fill=\"#99dde8\"/>\n            <path id=\"Path_47\" data-name=\"Path 47\" d=\"M687.726,635.78a240.439,240.439,0,0,1,17.334-38.359c10.773-18.741,25.759-36.6,25.759-36.6s11.11,4.638,14.813,11.371c1.518,2.761-1.6,5.765-2.324,8.765a16.146,16.146,0,0,0,0,7.172l7.711,12.643s.266,39.063-2.4,46.323-10.9,11.085-17.8,13.378-16.845,1.559-27.618-4.613S687.726,635.78,687.726,635.78Z\" transform=\"translate(-687.726 -552.202)\" fill=\"#edf5fa\" stroke=\"#393535\" stroke-width=\"4\"/>\n            <path id=\"Path_49\" data-name=\"Path 49\" d=\"M.131,11.219A38.836,38.836,0,0,0,4.12,5.536,15.646,15.646,0,0,0,5.76,0\" transform=\"translate(39.146 106.393)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"5\"/>\n          </g>\n          <path id=\"Path_67\" data-name=\"Path 67\" d=\"M211.89,688.888s8.287,8.67,17.706,11.56,23.1-4.739,19.662-1.213-7.725,7.487-18.215,9.185-18.786-3.066-22.348-4.244c-1.8-.6-9.786-7.43-11.688-10.873s-6.9-6.572-1.78-14.107S211.89,688.888,211.89,688.888Z\" transform=\"translate(738.966 -52.495)\" fill=\"#99dde8\" opacity=\"0.44\"/>\n          <path id=\"Path_85\" data-name=\"Path 85\" d=\"M5.151,3S4.623,6.515,3.336,11.9,0,23.031,0,23.031\" transform=\"translate(978.925 582.061)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n          <path id=\"Path_84\" data-name=\"Path 84\" d=\"M-1.176-.931a13.087,13.087,0,0,1,5.21,5.683A16.68,16.68,0,0,1,5.912,12.8\" transform=\"translate(980.1 606.023)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n          <path id=\"Path_83\" data-name=\"Path 83\" d=\"M-1.075.189,4.472,3.918\" transform=\"translate(987.1 618.63)\" fill=\"none\" stroke=\"#393535\" stroke-width=\"1\"/>\n        </g>\n        <line id=\"Line_18\" data-name=\"Line 18\" y1=\"4\" x2=\"32\" transform=\"translate(1712.5 497.5)\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"4\"/>\n        <line id=\"Line_19\" data-name=\"Line 19\" x2=\"20.332\" y2=\"16.613\" transform=\"translate(1776.168 509.887)\" fill=\"none\" stroke=\"#1d1818\" stroke-width=\"4\"/>\n      </g>\n    </svg>\n\n    <img class=\"text-no-data ml-4\" src=\"assets/images/dev-server.png\" alt=\"image-greeting\">\n    <!-- <svg class=\"text-no-data\">\n      <symbol id=\"s-text\">\n        <text text-anchor=\"middle\" x=\"50%\" y=\"80%\">No data</text>\n      </symbol>\n      <g class = \"g-ants\">\n        <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n        <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n        <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n        <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n        <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n      </g>\n    </svg> -->\n  </div>\n  <div class=\"col-12 no-data\">\n    <h5>{{ message }}</h5>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html": (
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_spinner_spinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"loader-bg\">\n        <!-- material-line -->\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n        </div>\n    </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toast-show/toast-show.component.html": (
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toast-show/toast-show.component.html ***!
    \**************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_toastShow_toastShowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ng2-toasty [position]=\"position\" change></ng2-toasty>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toast/toast.component.html": (
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toast/toast.component.html ***!
    \****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_shared_components_toast_toastComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div id=\"{{uID}}\" class=\"toast\" [ngClass]=\"toastClass\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n  <div class=\"toast-header\">\n    <img src=\"./favicon.ico\" alt=\"\" class=\"img-fluid m-r-5\" style=\"width:20px;\">\n    <strong class=\"mr-auto\">{{this.toastTitle}}</strong>\n    <small>{{this.toastCaption}}</small>\n    <button type=\"button\" class=\"m-l-5 mb-1 mt-1 close\" data-dismiss=\"toast\" aria-label=\"Close\" (click)=\"closeToast(uID)\">\n      <span>&times;</span>\n    </button>\n  </div>\n  <div class=\"toast-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
  /***/
  function _node_modules_tslib_tslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    /***/
  }),
  /***/"./src/app/_classes/auth.guard.ts": (
  /*!****************************************!*\
    !*** ./src/app/_classes/auth.guard.ts ***!
    \****************************************/
  /*! exports provided: AuthGuard, LoginGuard, RectorGuard */
  /***/
  function _src_app__classes_authGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RectorGuard", function () {
      return RectorGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_oauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../_services/oauth.service */"./src/app/_services/oauth.service.ts");
    /* harmony import */
    var _token_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./token.factory */"./src/app/_classes/token.factory.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, oauthService) {
        _classCallCheck(this, AuthGuard);
        this.router = router;
        this.oauthService = oauthService;
      }
      return _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.oauthService.retrieveAccessToken().token) {
            return true;
          } else {
            this.router.navigate(['auth/login']);
            return false;
          }
        }
      }]);
    }();
    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_oauth_service__WEBPACK_IMPORTED_MODULE_2__["OauthService"]
      }];
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_oauth_service__WEBPACK_IMPORTED_MODULE_2__["OauthService"]])], AuthGuard);
    var LoginGuard = /*#__PURE__*/function () {
      function LoginGuard(router, oauthService) {
        _classCallCheck(this, LoginGuard);
        this.router = router;
        this.oauthService = oauthService;
        this.tokenFactory = new _token_factory__WEBPACK_IMPORTED_MODULE_3__["TokenFactory"]();
      }
      return _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.oauthService.retrieveAccessToken().token) {
            this.router.navigate(['']);
            return false;
          } else {
            return true;
          }
        }
      }]);
    }();
    LoginGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_oauth_service__WEBPACK_IMPORTED_MODULE_2__["OauthService"]
      }];
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_oauth_service__WEBPACK_IMPORTED_MODULE_2__["OauthService"]])], LoginGuard);
    var RectorGuard = /*#__PURE__*/function () {
      function RectorGuard(router, oauthService) {
        _classCallCheck(this, RectorGuard);
        this.router = router;
        this.oauthService = oauthService;
      }
      return _createClass(RectorGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.oauthService.checkScope('old-rektor')) {
            return true;
          } else {
            this.router.navigate(['/error/403']);
            return false;
          }
        }
      }]);
    }();
    RectorGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_oauth_service__WEBPACK_IMPORTED_MODULE_2__["OauthService"]
      }];
    };
    RectorGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_oauth_service__WEBPACK_IMPORTED_MODULE_2__["OauthService"]])], RectorGuard);

    /***/
  }),
  /***/"./src/app/_classes/endpoint.ts": (
  /*!**************************************!*\
    !*** ./src/app/_classes/endpoint.ts ***!
    \**************************************/
  /*! exports provided: Endpoint */
  /***/
  function _src_app__classes_endpointTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Endpoint", function () {
      return Endpoint;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./../../environments/environment */"./src/environments/environment.ts");

    /**
     * Academic System Base Endpoint class
     * Defined by: Aditya Zulkarnain
     * https://www.trisakti.ac.id
     * jumpalitan.jumpalitan@gmail.ac.id
     */
    // Define API URL and API Version Here
    /**
     * IG2 API Live
     *
     */
    var API = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    var APP_CODE = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appCode;
    var BLOB = "https://jsonblob.com/api/jsonBlob";
    // const APP_CODE = 114;
    /**
     * General Config
     */
    // const API_VERSION = 'v1';
    var Endpoint = /*#__PURE__*/function () {
      function Endpoint() {
        _classCallCheck(this, Endpoint);
      }
      return _createClass(Endpoint, [{
        key: "getUrl",
        value: function getUrl(namespace, key, context) {
          /*
          * Endpoint Object you can create object based on endpoint namespace
              * example the namespace of endpoint is user you can create user object on endpoint base object
              * You can create key inside endpoint namespace, key is defined as endpoint namespace key
              * example url is user/profile
              * you can create object like this
              * user : {
              *   profile:`${API}/user/profile`
              * }
          */
          var ENDPOINT = {
            oauth: {
              access_token: "".concat(API, "/issueauth"),
              user_profile: "".concat(API, "/issueprofile"),
              user_scope: "".concat(API, "/issuescope/").concat(APP_CODE),
              par_profile: "".concat(API, "/d3b1b0f38e11d357db8a6ae20b09ff23?username=").concat(context)
            },
            app: {
              faq: "".concat(API, "/fc95f9c89cc77a721dbd4048a7d72341/").concat(APP_CODE, "/").concat(context)
            },
            admin_manage: {
              re_program_data: "".concat(API, "/db552dfa8d25c56ab12dfd43190f7871"),
              cr_program_data: "".concat(API, "/8cf2fe76a516529d75ee2512ea08f9f8"),
              up_program_data: "".concat(API, "/d42e4892298b2a087ae0c372d71447f8"),
              re_exam_location_data: "".concat(API, "/2a84bb2b56e1d469fdafdcf372028269"),
              cr_exam_location_data: "".concat(API, "/800d50385dcc6c8205eff5925f87d418"),
              up_exam_location_data: "".concat(API, "/abe29a206e1d0e1b97640f38ad41bbb6"),
              re_nationality: "".concat(API, "/311db1865a71b1d45aae2e58665e446b"),
              re_city: "".concat(API, "/bcefb7938abeb097cfd7d464d66d7740").concat(context),
              re_questionnaire: "".concat(API, "/95cb27bc4452fb465c6af2c4dbb7fa5e").concat(context),
              cr_questionnaire: "".concat(API, "/6c78ad8ae3b3d2a47c5eea454612af71"),
              up_questionnaire: "".concat(API, "/139a937af80ffb31035f9ab6e73683ce"),
              re_question_answer: "".concat(API, "/033f9cb4a5883fcd011a25e063252b88?questionare_id=").concat(context),
              re_selection_path: "".concat(API, "/abb8791ca091313ec28e725afd837cd5").concat(context),
              cr_selection_path: "".concat(API, "/62df509a25a36a7fa09aa8784fe988ea"),
              up_selection_path: "".concat(API, "/3d8b8da5e6223aee0fc494aff44df5f8"),
              re_selection_path_detail: "".concat(API, "/abb8791ca091313ec28e725afd837cd5?selection_path_id=").concat(context),
              re_registration_step: "".concat(API, "/6a53e5d58c175ee5cd94c7f4bfcba0a4"),
              re_selection_step: "".concat(API, "/8582c2867a906b6ee1d62b371927fd1b?").concat(context),
              cr_registration_step: "".concat(API, "/d230d8398f44631da31b45e3bfbdd1f3"),
              up_registration_step: "".concat(API, "/163915a3e8bac8f6d35b6e7e2df16e0e"),
              re_document_type: "".concat(API, "/f0f474110b5744a890eeb0244d9d08ca"),
              re_selection_document: "".concat(API, "/4dadc5e40fcfaeec032647979ff2862b?").concat(context),
              cr_selection_document: "".concat(API, "/b0115214ddc12a00171b9b514db1e18c"),
              up_selection_document: "".concat(API, "/a32542bb9f8203e6a637f272d1c2f1a8"),
              re_mapp_selection_location: "".concat(API, "/ad8b08187d611e2738077c842a281d26"),
              re_gender: "".concat(API, "/f6c4e989599bda56b68f0c6e065cb16c"),
              re_exam_location_selection: "".concat(API, "/b5a9c8cd8aee63ca643cfe8f9c5bf14e?selection_path_id=").concat(context),
              re_exam_location_selections: "".concat(API, "/b5a9c8cd8aee63ca643cfe8f9c5bf14e?").concat(context),
              cr_exam_location_selection: "".concat(API, "/ad8b08187d611e2738077c842a281d26"),
              up_exam_location_selection: "".concat(API, "/0e1208d9c224a89d6074cf18950b7727"),
              re_exam_time: "".concat(API, "/86aed4758d078b0d286675251406339a?selection_path_id=").concat(context),
              re_exam_times: "".concat(API, "/86aed4758d078b0d286675251406339a?").concat(context),
              cr_exam_time: "".concat(API, "/666e255413c31e9d96580eafaafceacf"),
              up_exam_time: "".concat(API, "/4371af747f20438a5770ac3019572e5d"),
              re_pin_price: "".concat(API, "/88f81ce203cfe4da9a80b7904305016d?").concat(context),
              cr_pin_price: "".concat(API, "/562c83b60ac1babd0f2c384d93045253"),
              up_pin_price: "".concat(API, "/9a50e998f50192181a2cd077487c48dd"),
              re_mapp_study_program: "".concat(API, "/a11a6c379cd4e02b4c82250a25688f64?").concat(context),
              cr_mapp_study_program: "".concat(API, "/1bf80c10bab3decd38ffe4f185b85a8d"),
              up_mapp_study_program: "".concat(API, "/c4190f2ad22a972b3c64525fb85637ec"),
              re_study_program: "".concat(API, "/fcaeadaddfa118acdbed73107cf666ca").concat(context),
              re_faculty: "".concat(API, "/b5ba5ce3e24c50d17d3f42a5c8f44a8f"),
              re_participant_list: "".concat(API, "/2b0e673f0c6756580982116ad00743fd?").concat(context),
              re_participant_list_detail: "".concat(API, "/2b0e673f0c6756580982116ad00743fd?registration_number=").concat(context),
              re_participant_payment_list: "".concat(API, "/93ef77e2423a3f41405953b3dc9c2558?").concat(context),
              re_participant_approve: "".concat(API, "/d8b14289843a4d403a066f94af4c6758?").concat(context),
              re_registration_program_study: "".concat(API, "/132eb16327d0b10c2be8cfdd8d3a1a58?registration_number=").concat(context),
              re_registration_document: "".concat(API, "/a5c42eff89704bb6b184c4673d283274?registration_number=").concat(context),
              re_participant_detail: "".concat(API, "/d3b1b0f38e11d357db8a6ae20b09ff23?participant_id=").concat(context),
              re_payment_method: "".concat(API, "/97f82256ba49d5ef71ae1feb03865d27"),
              re_question_type: "".concat(API, "/b73d30ef631a9bc381a791d197598eb7"),
              re_question: "".concat(API, "/b9ae0cfc5a4776c44005e1835f11fb34?").concat(context),
              cr_question: "".concat(API, "/c50c905f47d52177867017e5396b4ccc"),
              up_question: "".concat(API, "/bb69ca9eb9305797fbf4e474b21e08a8"),
              re_payment_status: "".concat(API, "/f7c5a72ca2b1e7f77e9a9dcb985324f5"),
              re_participant_pass: "".concat(API, "/057523cb2b7aa9847c35ca97a17e3059?").concat(context),
              up_registration: "".concat(API, "/358fbdc63a944e76ca5d30d7da8b8d36"),
              cr_answer_option: "".concat(API, "/7348462df9ca84d9ba9eef29a2c69b60"),
              re_answer_option: "".concat(API, "/bdab791360317a503380bfd25d802ad1?question_id=").concat(context),
              up_answer_option: "".concat(API, "/397bf81c46171e24cf2716fdf76eb7f3"),
              cr_up_registration_result: "".concat(API, "/753b351ed46ce677fb20284e1167fa83"),
              re_exam_type: "".concat(API, "/b3e6df28e22eaf19b225ae3b6eea4fe7"),
              re_category_id: "".concat(API, "/1618e83cb0431be048c62a3f91720674"),
              dwn_excel_participant_list: "".concat(API, "/6f6eb3995a95101cb9e7028d2cff06b2").concat(context),
              dwn_excel_participant_payment: "".concat(API, "/6720cdea3cf8d9673bcf217dbb51a9f0").concat(context),
              dwn_excel_participant_result: "".concat(API, "/f04c0e742709880dfe41f8ab85b874f7").concat(context),
              re_active_status: "".concat(API, "/88eef5d8d2c8e0d8773d3bc40b91e3d6"),
              re_reporting_participant_per_path: "".concat(API, "/ce4693e82289d4a2fa874c6268ccf9bf"),
              re_reporting_participant_per_stupro: "".concat(API, "/84c89f886a2249b35a87e09de3d9a5c0"),
              re_reporting_participant_per_stupro_filters: "".concat(API, "/84c89f886a2249b35a87e09de3d9a5c0?selection_path_id=").concat(context),
              re_reporting_participant_per_gender: "".concat(API, "/7830b0aa5288d27f92ffe90e7de9f86a"),
              re_reporting_participant_per_prov: "".concat(API, "/214393d4d1f4575a0770fbc4a57619ee"),
              re_reporting_participant_per_city: "".concat(API, "/f22de8332e16a9d40609802d9c5a1ae3"),
              re_reporting_participant_per_school: "".concat(API, "/fc58a64680cd6ec9b0a2f2ce279feabd"),
              re_reporting_selection_path_active: "".concat(API, "/f5478c85751a68626b8c48938d137196"),
              re_reporting_buyer_PIN: "".concat(API, "/bdef773a1b08c6f69b17159abc321eb5"),
              re_reporting_program_active: "".concat(API, "/80ece404f78781edcd970da04668924d"),
              re_reporting_participant_per_step: "".concat(API, "/86fa72663033d6568259a6d91984cf79"),
              re_reporting_participant_per_step_filters: "".concat(API, "/86fa72663033d6568259a6d91984cf79?selection_path_id=").concat(context),
              re_reporting_active_program_study: "".concat(API, "/cefa6db938d3000c83db469244aadbc6"),
              cr_insert_bulk_reg_result: "".concat(API, "/e51ba55edb29d1d98dbaf3c64b9748d4"),
              cr_export_participant_reg_excel: "".concat(API, "/a74a2f26f3793af7ffdb8f0ba3bba503"),
              re_education_last: "".concat(API, "/9987e6e7511e6adb34eba5b1d667ce9a").concat(context),
              re_participant_pagination: "".concat(API, "/eec1e1868149149a1889a19ed56f0dc5").concat(context),
              re_payment_pagination: "".concat(API, "/244bfa6bf8885ee2e637860fa6374981").concat(context),
              re_result_pagination: "".concat(API, "/a2f9f8b8b19f9cefaf03477df54389ed").concat(context),
              re_path_year: "".concat(API, "/46006c1c91334a1ac3e075bb3dae912e").concat(context),
              re_category_program: "".concat(API, "/255c480f6a57d1c2ca9e6fd70c5ab3af"),
              re_selection_path_admin: "".concat(API, "/c2a949b3993c2c3951ceaa55f5882e87").concat(context),
              re_study_program_all: "".concat(API, "/7fc1cd1c9bd3f74d572260881b753ab3"),
              re_mapping_path_year: "".concat(API, "/46006c1c91334a1ac3e075bb3dae912e"),
              cr_mapping_path_year: "".concat(API, "/969c19a0322f72c5af6337614be6ec3d"),
              upd_mapping_path_year: "".concat(API, "/b8f98c4dd61c25676e1a83cb5af41b5b"),
              del_mapping_path_year: "".concat(API, "/41c33d3893e13de34708aa2d6d11929d"),
              cr_export_postgraduate_excel: "".concat(API, "/d71f3f100f68d7ffc5c8a92c745b02f4"),
              re_announcement_card: "".concat(API, "/e0a0a44c69408050cd9b56c2825127a6").concat(context),
              cr_announcement_card: "".concat(API, "/231466537d6840951fe1be88014c8822"),
              up_announcement_card: "".concat(API, "/65301f880c4370fb174eaab16001696c"),
              del_announcement_card: "".concat(API, "/f9d045a92c818d755f6a0df51f3eb836"),
              re_session_path_exam: "".concat(API, "/2f5a247e1045afe6ae2a8eb261de5188").concat(context),
              cr_session_path_exam: "".concat(API, "/98c720c3a55736c20b0a2f47f877255e"),
              cr_raport_requirement_document: "".concat(API, "/afe300b04ed45963dbf71ef447e375fa"),
              upd_raport_requirement_document: "".concat(API, "/16fd72c78648a567b28d80b6640d8cd6"),
              re_raport_requirement_document: "".concat(API, "/57ec42bb2ae97a20af34bade3ecf7d70").concat(context),
              re_utbk_requirement_document: "".concat(API, "/8de0d2f9c89eaa034e23761c4e3c43e7").concat(context),
              cr_utbk_requirement_document: "".concat(API, "/2a9daee0f8ca66e57b65dcde00df6af0"),
              upd_utbk_requirement_document: "".concat(API, "/d59b2b01e7e8b6214b489729722af39d"),
              cr_mapping_path_year_intake: "".concat(API, "/0e1e7fae56095399cdb51498a2bc26cf"),
              del_mapping_path_year_intake: "".concat(API, "/896c67baa581d4fe642ea5865cddb60d"),
              get_mapping_path_year_intake: "".concat(API, "/c6551eee083c5e39e3745619b2cb84da").concat(context),
              upd_mapping_path_year_intake: "".concat(API, "/896c67baa581d4fe642ea5865cddb60d"),
              re_verification_transaction_picklist: "".concat(API, "/94dcccb74f99943401494ffa960cf2b3"),
              re_passing_grade: "".concat(API, "/86d65fb4ee5e4431db1311df95197869").concat(context),
              cr_passing_grade: "".concat(API, "/3137455dc66897c0237111aa602c7479"),
              upd_passing_grade: "".concat(API, "/70cd50ca733b7ba4adde27a2237e261b"),
              re_participant_score: "".concat(API, "/828e6eae32d9823a79233b165c88cfb0").concat(context),
              cr_participant_passinggrade_faculty: "".concat(API, "/1fc078316646d46f6250347ecc5c2dae"),
              re_approval_participant_score: "".concat(API, "/c3d735150629dead4fe270c3076aecd0").concat(context),
              cr_participant_passinggrade_university: "".concat(API, "/98746bf7c56e36333aa0df5f796dd47e"),
              cr_moodle_category: "".concat(API, "/4d3bacbc2cdf3da3ea2c8b1dcca74dc0"),
              del_moodle_category: "".concat(API, "/6a7ec7e1a36a3202e156a9b8c03f49ce"),
              re_categories_moodle: "".concat(API, "/48ee0ea2b7d287ba685587a70a4492c2").concat(context),
              cr_moodle_course: "".concat(API, "/a1af3415cb75c801d5c3d5b167685584"),
              del_moodle_course: "".concat(API, "/52e5afe33159c0b5db8c8b4184f1045e"),
              re_moodle_course: "".concat(API, "/c0da0e23e0a207dbb9e5a7cb3fcc9d5a").concat(context),
              re_moodle_quiz: "".concat(API, "/8537fdb163f73d2f6278b86e5b0d54ac").concat(context),
              cr_moodle_quiz: "".concat(API, "/f3aa0b89eea17edd39d2c67d7fc21b88"),
              del_moodle_quiz: "".concat(API, "/50c3c9ac3389f4525f4f1e7e7e8deca1"),
              re_moodle_section: "".concat(API, "/bacb479dec1c18c4e18cdfa7695b7195").concat(context),
              cr_moodle_section: "".concat(API, "/dee5a3ff5ea3394ede6c3a214b69d785"),
              cr_moodle_group: "".concat(API, "/22f3bc18e2f6181e003772798a04cfdb"),
              re_moodle_group: "".concat(API, "/d8e83416f5acf52a84c7675c49cdc609").concat(context),
              re_new_student_doc_type: "".concat(API, "/1bbb4ac7342ac4bab84632ddceb5c515"),
              get_document_newstudent: "".concat(API, "/8a073f8610fd47c5e223b9f1efa7ce02").concat(context),
              cr_mapping_doc_new_student: "".concat(API, "/e7c69e3c1c5a59bb290d7136ac3c534f"),
              del_mapping_doc_new_student: "".concat(API, "/733be36554a81522e5311653b86df593"),
              cr_registration_result_prodi: "".concat(API, "/aa2414b1ecbb4d79b9501827d9a9f41d"),
              up_approval_status_new_student: "".concat(API, "/e41aebef297de181311f6c3c9e0f20a1"),
              up_rejected_status_new_student: "".concat(API, "/45c6a79618d84284e54c09143ea6098a"),
              re_program_study_by_admin_faculty: "".concat(API, "/ce7534cc0a7a21b3f476d3755eb4e8de").concat(context),
              get_credit_transfer_equalization: "".concat(API, "/35fa8f7cda0f700f2db358e80f8be48d").concat(context),
              up_mapping_credit_transfer: "".concat(API, "/bcf171a135d9f6d82bbf9a9c4c277a5e"),
              get_program_study_passing_grade_with_selection_path: "".concat(API, "/3318a60dbe29b15bd100fdd9db8a9544").concat(context),
              insert_student_id_and_email: "".concat(API, "/25382650bc7853bf5993da8e1fc032ca"),
              get_moodle_exam_grades: "".concat(API, "/d44e4f1771f7791bcbdc9e1942499962").concat(context),
              // dummy
              get_participant_score: "".concat(BLOB, "/984659753678684160")
            },
            participant: {
              register_account: "".concat(API, "/6665f8e3664599495c01ce5663fc6615"),
              send_email_conf: "".concat(API, "/61395e6d99c854c40307f867b730cddb"),
              reset_password: "".concat(API, "/4e374a7443c209ffcdcb722eb1b0e989"),
              forgot_password: "".concat(API, "/036bb5ee491f8e69b07cc76dee6cd6a9"),
              re_participant_detail: "".concat(API, "/d3b1b0f38e11d357db8a6ae20b09ff23?username=").concat(context),
              up_participant_detail: "".concat(API, "/4192ae398ebb16e71474f3c19b7cb28f"),
              re_religion: "".concat(API, "/033f3365775e7758d63211e954f02ad0"),
              re_marriage_status: "".concat(API, "/d7d43680dae28149f345e1039fd63092"),
              re_country: "".concat(API, "/3bfcf56dd90250d22c8aa13055e50340"),
              re_province: "".concat(API, "/b66658287ee8c8592d582e664adb9bc0").concat(context),
              re_district: "".concat(API, "/bb1e92d4a9b193df6a0d44a763e001d9").concat(context),
              re_education_history: "".concat(API, "/a7e48b4e5d1261ae7ca9ced91eb8fb48?participant_id=").concat(context),
              cr_education_history: "".concat(API, "/1b86408dae88bd7dd0cf5895ef53150c"),
              up_education_history: "".concat(API, "/846b36f1b9a996fef528b8878c9a808c"),
              del_education_history: "".concat(API, "/73f3e00bc1a7ea65d3a80d21159e3871"),
              re_family_parents: "".concat(API, "/c2a3fb74016bbd2b4addb99fd6ff8725?category=parent&participant_id=").concat(context),
              cr_family_parents: "".concat(API, "/f96333d36f793df141ffe6ea54af4b89"),
              up_family_parents: "".concat(API, "/924f5e0bdea016b4f91abde8862d8bbb"),
              del_family_parents: "".concat(API, "/9eecd289741341678724b487584ebeda"),
              re_family_siblings: "".concat(API, "/c2a3fb74016bbd2b4addb99fd6ff8725?category=sibling&participant_id=").concat(context),
              re_work_history: "".concat(API, "/e39c4ed4c38e652c7a18c3ffc2568a53?participant_id=").concat(context),
              cr_work_history: "".concat(API, "/5b9793203cebc5dc1195c6f8393b5f35"),
              up_work_history: "".concat(API, "/e60a3718a1c8bcb0061d62b2bc9c9c7c"),
              del_work_history: "".concat(API, "/cd8695d5cc0ad0f4a793b24fd3591514"),
              re_personal_document: "".concat(API, "/c35a9addcec219548443a760ff290c93?participant_id=").concat(context),
              cr_personal_document: "".concat(API, "/153463eed0e348e08a4dc0915f34c450"),
              up_doc_participant: "".concat(API, "/5dff2d603842a0062a0473eb75771e6a"),
              del_personal_document: "".concat(API, "/82d6185e59d19c31bb4cb2dd5063107c"),
              re_education_degree: "".concat(API, "/5f8c050ae7f6acf01e11f45a6c682801"),
              re_family_relation: "".concat(API, "/7d78938263604bf461782ec050cbde91?filter=").concat(context),
              re_work_field: "".concat(API, "/d6ce10f1582c06875790be01f88cbb99"),
              re_work_type: "".concat(API, "/5c6b6e69399e91ef847504df1ccfb8d9?").concat(context),
              re_income_range: "".concat(API, "/dee982f07f3d560c0a1a66be701c2440"),
              re_school: "".concat(API, "/55189ef062a1ac7df1a428421039de76?").concat(context),
              re_school_major: "".concat(API, "/78d82f6e4c58dfe61767e785fbac1a16"),
              re_registration: "".concat(API, "/75d8e92f64cf9db5404b4fb332380d2b?").concat(context),
              cr_study_program_reg: "".concat(API, "/2a5af9b6de8b58ed7e71a53cd2afa108"),
              up_study_program_reg: "".concat(API, "/24995f583f7c4ffacc2686a89e5b33de"),
              del_study_program_reg: "".concat(API, "/a39d449db5954e742886c429cf2fc80d"),
              cr_registration: "".concat(API, "/363a15d15c827b5cf3790c2c10debea8"),
              cr_doc_report_card: "".concat(API, "/9c8aee9d8f2291ae6229fa4e4f86aae6"),
              re_doc_report_card: "".concat(API, "/5d71cd08e7b981fde92dcf490acb93a4?").concat(context),
              up_doc_report_card: "".concat(API, "/74dca8ab9ecf1639dddc78293da7edf1"),
              del_doc_report_card: "".concat(API, "/d3ad6022502b22c287bb7855f345f9a5"),
              cr_doc_certificate: "".concat(API, "/53ad22bd04733bbce6aeba677e331b6f"),
              re_doc_certificate: "".concat(API, "/a929cc86c748ecc6be54e31b84f34f54?").concat(context),
              up_doc_certificate: "".concat(API, "/6f5147ac8bcec7b4e14b3eb590d0ce0b"),
              del_doc_certificate: "".concat(API, "/956b1d8eaf58c0885f1129d4ef61719e"),
              cr_doc_supporting: "".concat(API, "/64e74c9c86339bd6a2c8e9559d4c158e"),
              up_doc_supporting: "".concat(API, "/d783382ae22b371f2a54ec34627266a5"),
              re_doc_supporting: "".concat(API, "/30cbc61eed17aa4244a185e9fd689a95?").concat(context),
              del_doc_supporting: "".concat(API, "/8e2db4d6a7adb12878fc9fd431d7eccd"),
              re_semester: "".concat(API, "/2ef8b0c01cfeffbfc4104b38a50f2752"),
              re_range: "".concat(API, "/ca6c918c2ab001dd08f5b712e5f8c330"),
              re_certificate_level: "".concat(API, "/4575738bd7e943d92e9556277962a68a"),
              re_certificate_type: "".concat(API, "/8e33ab177c516020ec50e2a914b79b0f"),
              re_selection_path: "".concat(API, "/abb8791ca091313ec28e725afd837cd5?").concat(context),
              re_active_questionnaire: "".concat(API, "/29c6292a391c2a96dc8c1230abaaed05?").concat(context),
              re_status_questionnaire: "".concat(API, "/3170ade7d7aa47b276be7a9c2c16aeda?").concat(context),
              cr_registration_history: "".concat(API, "/30c8295944ed364061e26ebcc0acf908"),
              cr_answer_question: "".concat(API, "/e5cb0652bf026b308b03a8cf37f0b3cf"),
              pr_registration_card: "".concat(API, "/cb25acad45c3cdc62fafadd2aee1ca0b?").concat(context),
              re_registration_history: "".concat(API, "/ad74ffb1590c4cb023313cff2cf92e56?").concat(context),
              re_doc_participant_status: "".concat(API, "/e50fa5c6f3eeb4ec253542d5295d8b79").concat(context),
              del_mapping_study_program: "".concat(API, "/3f390b29e0ca9b3e3f2cbeddab044a16"),
              cr_reset_password: "".concat(API, "/e52f66124cbddc9e25b5c71e0d407146/").concat(context),
              re_sofId: "".concat(API, "/6f8957136d4bc35455ffa5ab91963926").concat(context),
              re_pin_transaction: "".concat(API, "/7c9dadd21bc9eb965a1cf4401f61f57b?").concat(context),
              re_status_pin_transaction: "".concat(API, "/a421a4cf4040e8019c9a4fc7c062cfc4?").concat(context),
              cr_pin_transaction: "".concat(API, "/9671f08e951a331ac2fd674b929f4fa0").concat(context),
              cr_transaction_voucher: "".concat(API, "/56d1cc5c4fdc7a499e7ea39780d60030"),
              re_transaction_voucher: "".concat(API, "/0788660f1edb8c1d8c3c70da57cd9658").concat(context),
              re_exam_session: "".concat(API, "/505e025b245d0e31335bc4c46a55b04e").concat(context),
              re_check_technic_major: "".concat(API, "/ac6576b6dad5af65aa17f55c24a44ce2").concat(context),
              del_registration_history_steps: "".concat(API, "/8b8c94068d57a9fa5a75f31314597f0e"),
              re_generate_exam_pass_letter: "".concat(API, "/497a8022db5bf949dc7fc5f31ac51a5f").concat(context),
              cr_answer_questionnaire: "".concat(API, "/66d20b3554b85241a683bb82f55f8545"),
              re_registration_doc_raport: "".concat(API, "/e3fcd7946fcd3f31eb87a5b57f441556").concat(context),
              re_validate_participant_with_program_and_path: "".concat(API, "/418ba24d0bbb3eda8382b1973996ad81").concat(context),
              re_document_study: "".concat(API, "/2bf86548e56eda54c2069c39eb923866").concat(context),
              up_document_study: "".concat(API, "/99d2ab7af7ee427665f7938e3abe77db"),
              cr_document_study: "".concat(API, "/474062a5a092d360694ca248913f6748"),
              del_document_study: "".concat(API, "/875a2fc7a04ba930dca00534a4082755"),
              re_document_recommendation: "".concat(API, "/1f9c0a5476bc5ec2cf34ebafa0ef97db").concat(context),
              cr_document_recommendation: "".concat(API, "/760c65cd11c3cba328dcf061f9b6935c"),
              up_document_recommendation: "".concat(API, "/61d4f08679156f2887d63ca01649fed2").concat(context),
              del_document_recommendation: "".concat(API, "/1f9c0a5476bc5ec2cf34ebafa0ef97db").concat(context),
              re_study_program_specialization: "".concat(API, "/b7c2e2974162349aa2fe73ad3bfaa44a").concat(context),
              re_payment_method_check: "".concat(API, "/97f82256ba49d5ef71ae1feb03865d27").concat(context),
              cr_url_recommendation: "".concat(API, "/1c3eb0991ba93fcacd2121fae6a189c4"),
              re_detail_recommendation: "".concat(API, "/64ac7abca9eb0baa48a6c1c30d59a464").concat(context),
              up_document_proposal: "".concat(API, "/85117ab9e41a2ada282d76aa2863fe0f"),
              cr_document_proposal: "".concat(API, "/825cacd4554135a17046e023330e7f2e"),
              del_document_proposal: "".concat(API, "/22759fda176d48642722053e573ceb11"),
              get_postgraduate: "".concat(API, "/31d88d7ca4f5b08e0aa972455f5ace28").concat(context),
              view_specialization_name: "".concat(API, "/6e0fef36dd107ad421b445283e12fb6b").concat(context),
              get_class: "".concat(API, "/f19f28a72bb6369f7924e40ad6d73abe").concat(context),
              get_raport_semesters: "".concat(API, "/4da06bfd7e840563b6ed17e9f45f1e3d").concat(context),
              get_specialization_name: "".concat(API, "/5ae2e5ebfab5c6f0762d777097861ba0").concat(context),
              get_classtype_specialization: "".concat(API, "/4f47f35ba9f42d026d8ac10498c34443").concat(context),
              get_utbk_document: "".concat(API, "/fbfa598cb4c9ecebc33d25642e7fb6f4").concat(context),
              cr_utbk_document: "".concat(API, "/72478fcbf6c1c8aff4c7e4677d3615c0"),
              up_utbk_document: "".concat(API, "/399653ec67cfd9659a415d5cf2dc1376"),
              cr_transcript_document: "".concat(API, "/1b39d52f313c37523b6d5675235c82c5"),
              del_transcript_document: "".concat(API, "/85904dd157162ad73df8619c93c73e4c"),
              re_transcript_document_details: "".concat(API, "/a054404f92791850755af3d138e93b57").concat(context),
              re_transcript_document: "".concat(API, "/2f29f8809fea5ece3d45e2c0874f253a").concat(context),
              re_average_participant_raport_card: "".concat(API, "/f9184febbc8ec3bd950d1a927b73998c").concat(context),
              cr_average_participant_raport_card: "".concat(API, "/3ef20fb309d82e42de5ae59065e772bc"),
              re_study_programs_with_pin: "".concat(API, "/04397f93a36c25e5dbdbbdc2c90a51da").concat(context),
              re_group_with_path_exam_detail: "".concat(API, "/bc7ea0cb05706355bf7f1bc94181b8b3").concat(context),
              cr_moodle_user: "".concat(API, "/b9a1d598cbdc70a383bfe537e0506847"),
              cr_moodle_enrolment: "".concat(API, "/34f88e481bac2003b0caf50b4ca5593e"),
              cr_moodle_member: "".concat(API, "/ca07d05e4e13548d38a72b49e5eaa23c"),
              re_validate_participant_with_selection_path: "".concat(API, "/d3f5762db72958815ecb99b3805dc635").concat(context),
              re_document_publication: "".concat(API, "/57e8cf91f19eb9e6efd234f131657d30").concat(context),
              up_document_publication: "".concat(API, "/9e935b5fefefcf5695fdc53ebf130d08"),
              cr_document_publication: "".concat(API, "/df3531d63f065348c6ccc635d59528b1"),
              del_document_publication: "".concat(API, "/f2516b49bd03a843f84aab9dd061145d"),
              re_publication_position: "".concat(API, "/7535564b841df8f414aed41f76db7008"),
              re_publication_type: "".concat(API, "/63c549065fb22ac7a5072795c86e51ee"),
              get_participant_detail: "".concat(API, "/f693de0865769d68806672e28eed84db").concat(context),
              get_new_student_data: "".concat(API, "/74ce2066a5f9c02412df03a75bc6312a").concat(context),
              cr_mapping_new_student_step: "".concat(API, "/be13ba8894838a0e0a2bb6cc770bfc4d"),
              get_new_student_participant: "".concat(API, "/f7b837e27210de50fbc4ccf35fef2a10").concat(context),
              up_new_student_participant: "".concat(API, "/446116ac32756d3c01dbf76fe477e896"),
              get_relationship_participant: "".concat(API, "/7e9805530793e2c1049f8e776ec57cc0").concat(context),
              up_relationship_participant: "".concat(API, "/6f8652d7c6d48570215fc375c9c496a8"),
              get_newstudent_document: "".concat(API, "/e9c105f9ef538e635cf27db9e97f051e").concat(context),
              up_doc_new_student_participant: "".concat(API, "/fb60a16897048316d67aa73b53af1978"),
              get_new_student_doc_status: "".concat(API, "/694d4edf468bb6827224d70a9bef0a58").concat(context),
              cr_billing_new_student: "".concat(API, "/58a8f0305333de08f41aa829486e8fe5"),
              // dummydata
              get_new_student_document: "".concat(BLOB, "/1004251496346566656")
            }
          };
          return ENDPOINT[namespace] && ENDPOINT[namespace][key];
        }
      }]);
    }();
    /***/
  }),
  /***/"./src/app/_classes/menu.resolver.ts": (
  /*!*******************************************!*\
    !*** ./src/app/_classes/menu.resolver.ts ***!
    \*******************************************/
  /*! exports provided: MenuResolver */
  /***/
  function _src_app__classes_menuResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MenuResolver", function () {
      return MenuResolver;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/_services/oauth.service */"./src/app/_services/oauth.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var MenuResolver = /*#__PURE__*/function () {
      function MenuResolver(oauthService) {
        _classCallCheck(this, MenuResolver);
        this.oauthService = oauthService;
      }
      return _createClass(MenuResolver, [{
        key: "resolve",
        value: function resolve() {
          return;
          // return this.oauthService.getDynamicMenu();
        }
      }]);
    }();
    MenuResolver.ctorParameters = function () {
      return [{
        type: src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OauthService"]
      }];
    };
    MenuResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OauthService"]])], MenuResolver);

    /***/
  }),
  /***/"./src/app/_classes/shortenerString.ts": (
  /*!*********************************************!*\
    !*** ./src/app/_classes/shortenerString.ts ***!
    \*********************************************/
  /*! exports provided: ShortenerString */
  /***/
  function _src_app__classes_shortenerStringTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ShortenerString", function () {
      return ShortenerString;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ShortenerString = /*#__PURE__*/function () {
      function ShortenerString() {
        _classCallCheck(this, ShortenerString);
      }
      return _createClass(ShortenerString, [{
        key: "transform",
        value: function transform(value, args) {
          var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
          var trail = args.length > 1 ? args[1] : '...';
          return value.length > limit ? value.substring(0, limit) + trail : value;
        }
      }]);
    }();
    ShortenerString = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'shortener'
    })], ShortenerString);

    /***/
  }),
  /***/"./src/app/_classes/token.factory.ts": (
  /*!*******************************************!*\
    !*** ./src/app/_classes/token.factory.ts ***!
    \*******************************************/
  /*! exports provided: TokenFactory */
  /***/
  function _src_app__classes_tokenFactoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TokenFactory", function () {
      return TokenFactory;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var TokenFactory = /*#__PURE__*/function () {
      function TokenFactory() {
        _classCallCheck(this, TokenFactory);
        this.lang = null;
        this.credentials = {
          token: null,
          expires_in: null
        };
        this.scope = [];
      }
      return _createClass(TokenFactory, [{
        key: "setAccessToken",
        value: function setAccessToken(args) {
          this.credentials = {
            token: args.token,
            expires_in: args.expired
          };
          localStorage.setItem('token', JSON.stringify(this.credentials));
        }
      }, {
        key: "setScope",
        value: function setScope(args) {
          localStorage.setItem('scope', JSON.stringify(args));
        }
      }, {
        key: "setProfileSitu",
        value: function setProfileSitu(args) {
          localStorage.setItem('profile_situ', JSON.stringify(args));
        }
      }, {
        key: "setLang",
        value: function setLang(lang) {
          localStorage.setItem('lang', lang);
        }
      }, {
        key: "retrieveAccessToken",
        value: function retrieveAccessToken() {
          var storedToken;
          var token;
          var storedUserData = localStorage.getItem('token');
          if (!storedUserData) {
            return false;
          }
          try {
            storedToken = JSON.parse(storedUserData);
            token = storedToken;
          } catch (error) {
            console.error(error);
            this.destroyToken();
            return false;
          }
          return token;
        }
      }, {
        key: "retrieveProfile",
        value: function retrieveProfile() {
          var storedProfile;
          var profile;
          var storedProfileData = localStorage.getItem('profile_situ');
          if (!storedProfileData) {
            return false;
          }
          try {
            storedProfile = JSON.parse(storedProfileData);
            profile = storedProfile;
          } catch (error) {
            console.error(error);
            this.destroyProfile();
            return false;
          }
          return profile;
        }
      }, {
        key: "retrieveScope",
        value: function retrieveScope() {
          var storedScope;
          var scope;
          var storedScopeData = localStorage.getItem('scope');
          if (!storedScopeData) {
            return false;
          }
          try {
            storedScope = JSON.parse(storedScopeData);
            scope = storedScope;
          } catch (error) {
            console.error(error);
            this.destroyScope();
            return false;
          }
          return scope;
        }
      }, {
        key: "retrieveRefreshToken",
        value: function retrieveRefreshToken() {
          var storedToken;
          var token;
          var storedUserData = localStorage.getItem('token');
          if (!storedUserData) {
            return false;
          }
          try {
            storedToken = JSON.parse(storedUserData);
            token = storedToken;
          } catch (error) {
            console.error(error);
            this.destroyToken();
            return false;
          }
          return token;
        }
      }, {
        key: "destroyToken",
        value: function destroyToken() {
          var storedUserData = localStorage.getItem('token');
          if (storedUserData) {
            localStorage.removeItem('token');
            this.destroyScope();
            this.destroyProfile();
            return true;
          }
        }
      }, {
        key: "destroyProfile",
        value: function destroyProfile() {
          var storedProfileData = localStorage.getItem('profile_situ');
          if (storedProfileData) {
            localStorage.removeItem('profile_situ');
            return true;
          }
        }
      }, {
        key: "destroyScope",
        value: function destroyScope() {
          var storedScopeData = localStorage.getItem('scope');
          if (storedScopeData) {
            localStorage.removeItem('scope');
            return true;
          }
        }
      }]);
    }();
    /***/
  }),
  /***/"./src/app/_services/app.service.ts": (
  /*!******************************************!*\
    !*** ./src/app/_services/app.service.ts ***!
    \******************************************/
  /*! exports provided: AppService */
  /***/
  function _src_app__services_appServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./base.service */"./src/app/_services/base.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppService = /*#__PURE__*/function (_base_service__WEBPAC) {
      function AppService(http) {
        var _this;
        _classCallCheck(this, AppService);
        _this = _callSuper(this, AppService, [http]);
        _this.namespace = 'app';
        return _this;
      }
      _inherits(AppService, _base_service__WEBPAC);
      return _createClass(AppService, [{
        key: "getFakeData",
        value: function getFakeData() {
          return this.getApi('fake-data/datatable-data.json');
        }
      }, {
        key: "getFaqData",
        value: function getFaqData(param) {
          var url = this.getUrl(this.namespace, 'faq', this.dtParam(param));
          return this.getApi(url);
        }
      }]);
    }(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);
    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AppService);

    /***/
  }),
  /***/"./src/app/_services/base.interceptor.ts": (
  /*!***********************************************!*\
    !*** ./src/app/_services/base.interceptor.ts ***!
    \***********************************************/
  /*! exports provided: BaseInterceptor */
  /***/
  function _src_app__services_baseInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BaseInterceptor", function () {
      return BaseInterceptor;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _broadcaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _oauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./oauth.service */"./src/app/_services/oauth.service.ts");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var BaseInterceptor = /*#__PURE__*/function () {
      function BaseInterceptor(broadcasterService, injector, router) {
        _classCallCheck(this, BaseInterceptor);
        this.broadcasterService = broadcasterService;
        this.injector = injector;
        this.router = router;
      }
      return _createClass(BaseInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this2 = this;
          var authReq = this.authenticateRequest(req);
          return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 401) {
              _this2.injector.get(_oauth_service__WEBPACK_IMPORTED_MODULE_4__["OauthService"]).broadcastLogout();
              _this2.broadcasterService.notifBroadcast(true, {
                title: 'Failed',
                msg: "You're not authenticate",
                timeout: 5000,
                theme: 'bootstrap',
                position: 'top-right',
                type: 'error'
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            } else if (error.status === 403) {
              _this2.router.navigate(['/error/403']);
            } else if (error.status === 405) {
              _this2.injector.get(_oauth_service__WEBPACK_IMPORTED_MODULE_4__["OauthService"]).broadcastLogout();
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            } else if (error.status === 504) {
              _this2.broadcasterService.notifBroadcast(true, {
                title: 'Failed',
                msg: "Gateway Time-out",
                timeout: 5000,
                theme: 'bootstrap',
                position: 'top-right',
                type: 'error'
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            } else {
              _this2.broadcasterService.notifBroadcast(true, {
                title: 'Failed',
                msg: "Error API",
                timeout: 5000,
                theme: 'bootstrap',
                position: 'top-right',
                type: 'error'
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            }
          }));
        }
      }, {
        key: "authenticateRequest",
        value: function authenticateRequest(request) {
          var token = this.injector.get(_oauth_service__WEBPACK_IMPORTED_MODULE_4__["OauthService"]).retrieveAccessToken();
          if (token) {
            var duplicate = request.clone({
              // headers: request.headers.set('Authorization', 'Basic ' + btoa('tracerstudy:tr4c3rstuDy4pi')),
              headers: request.headers.set('Authorization', 'Bearer ' + token.token)
            });
            return duplicate;
          }
          return request;
        }
      }]);
    }();
    BaseInterceptor.ctorParameters = function () {
      return [{
        type: _broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };
    BaseInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], BaseInterceptor);

    /***/
  }),
  /***/"./src/app/_services/base.service.ts": (
  /*!*******************************************!*\
    !*** ./src/app/_services/base.service.ts ***!
    \*******************************************/
  /*! exports provided: BaseService */
  /***/
  function _src_app__services_baseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BaseService", function () {
      return BaseService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _classes_endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../_classes/endpoint */"./src/app/_classes/endpoint.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    var BaseService = /*#__PURE__*/function () {
      function BaseService(http) {
        _classCallCheck(this, BaseService);
        this.http = http;
        this.endpoint = new _classes_endpoint__WEBPACK_IMPORTED_MODULE_2__["Endpoint"]();
      }
      return _createClass(BaseService, [{
        key: "getFormUrlEncoded",
        value: function getFormUrlEncoded(toConvert) {
          var formBody = [];
          for (var property in toConvert) {
            if (toConvert.hasOwnProperty(property)) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = encodeURIComponent(toConvert[property]);
              formBody.push(encodedKey + '=' + encodedValue);
            }
          }
          return formBody.join('&');
        }
      }, {
        key: "loopParam",
        value: function loopParam(params) {
          var query = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          var parameter = params !== null ? params : {};
          var result = Object.entries(parameter);
          for (var i = 0; i < result.length; i++) {
            query = query.set(result[i][0].toString(), result[i][1].toString());
          }
          return query;
        }
      }, {
        key: "getUrl",
        value: function getUrl(namespace, key) {
          var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          return this.endpoint.getUrl(namespace, key, context);
        }
      }, {
        key: "getApi",
        value: function getApi(url) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
          var query = this.loopParam(params);
          return this.http.get(url, {
            headers: headers,
            params: query
          });
        }
      }, {
        key: "postApiPlain",
        value: function postApiPlain(url, request) {
          return this.http.post(url, request);
        }
      }, {
        key: "postApi",
        value: function postApi(url, request) {
          var query = this.getFormUrlEncoded(request);
          return this.http.post(url, query, httpOptions);
        }
      }, {
        key: "putApi",
        value: function putApi(url, request) {
          return this.http.put(url, request);
        }
      }, {
        key: "delApi",
        value: function delApi(url) {
          return this.http["delete"](url);
        }
      }, {
        key: "extractData",
        value: function extractData(res) {
          var body = res;
          return body || {};
        }
      }, {
        key: "dtParam",
        value: function dtParam(param) {
          var perPage = param.length;
          var page = param.start / param.length + 1;
          var keyword = param.search.value;
          return "".concat(perPage, "/").concat(keyword, "?page=").concat(page);
        }
      }]);
    }();
    BaseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };
    BaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], BaseService);

    /***/
  }),
  /***/"./src/app/_services/broadcaster.service.ts": (
  /*!**************************************************!*\
    !*** ./src/app/_services/broadcaster.service.ts ***!
    \**************************************************/
  /*! exports provided: BroadcasterService */
  /***/
  function _src_app__services_broadcasterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BroadcasterService", function () {
      return BroadcasterService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var BroadcasterService = /*#__PURE__*/function () {
      function BroadcasterService(injector) {
        _classCallCheck(this, BroadcasterService);
        this.injector = injector;
        this.changeTheme$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scopeBroadcast$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notifBroadcast$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.profileBroadcast$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getMenuBroadcast$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resetMenuBroadcast$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeLangBroadcast$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hideProfileMenuBroadcast$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      return _createClass(BroadcasterService, [{
        key: "notifBroadcast",
        value: function notifBroadcast(result, data) {
          if (result) {
            this.notifBroadcast$.emit({
              event: result,
              data: data
            });
          }
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(result, layout) {
          if (result) {
            this.changeTheme$.emit({
              event: result,
              layout: layout
            });
          }
        }
      }, {
        key: "changeLangBroadcast",
        value: function changeLangBroadcast(result, lang) {
          if (result === true) {
            this.changeLangBroadcast$.emit({
              event: result,
              lang: lang
            });
          }
        }
      }, {
        key: "profileLoaded",
        value: function profileLoaded(result) {
          if (result === true) {
            this.profileBroadcast$.emit({
              event: result
            });
          }
        }
      }, {
        key: "getMenuBroadcast",
        value: function getMenuBroadcast(result) {
          if (result === true) {
            this.getMenuBroadcast$.emit({
              event: result
            });
          }
        }
      }, {
        key: "resetMenuBroadcast",
        value: function resetMenuBroadcast(result) {
          if (result === true) {
            this.resetMenuBroadcast$.emit({
              event: result
            });
          }
        }
      }, {
        key: "hideProfileMenuBroadcast",
        value: function hideProfileMenuBroadcast(result) {
          if (result === true) {
            this.hideProfileMenuBroadcast$.emit({
              event: result
            });
          }
        }
      }, {
        key: "scopeLoaded",
        value: function scopeLoaded(result) {
          if (result === true) {
            this.scopeBroadcast$.emit({
              event: result
            });
          }
        }
      }]);
    }();
    BroadcasterService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };
    BroadcasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], BroadcasterService);

    /***/
  }),
  /***/"./src/app/_services/oauth.service.ts": (
  /*!********************************************!*\
    !*** ./src/app/_services/oauth.service.ts ***!
    \********************************************/
  /*! exports provided: OauthService */
  /***/
  function _src_app__services_oauthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OauthService", function () {
      return OauthService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _classes_token_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../_classes/token.factory */"./src/app/_classes/token.factory.ts");
    /* harmony import */
    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ngx-cookie-service */"./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./base.service */"./src/app/_services/base.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! underscore */"./node_modules/underscore/underscore.js");
    /* harmony import */
    var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
    var OauthService = /*#__PURE__*/function (_base_service__WEBPAC2) {
      function OauthService(http, router, cookieService) {
        var _this3;
        _classCallCheck(this, OauthService);
        _this3 = _callSuper(this, OauthService, [http]);
        _this3.router = router;
        _this3.cookieService = cookieService;
        _this3.namespace = 'oauth';
        _this3.tokenFactory = new _classes_token_factory__WEBPACK_IMPORTED_MODULE_1__["TokenFactory"]();
        return _this3;
      }
      _inherits(OauthService, _base_service__WEBPAC2);
      return _createClass(OauthService, [{
        key: "getScope",
        value: function getScope() {
          var url = this.getUrl(this.namespace, 'user_scope');
          return this.getApi(url);
        }
      }, {
        key: "getAccessToken",
        value: function getAccessToken(body) {
          var url = this.getUrl(this.namespace, 'access_token');
          return this.postApi(url, body);
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var url = this.getUrl(this.namespace, 'user_profile');
          return this.getApi(url);
        }
      }, {
        key: "setLang",
        value: function setLang(args) {
          this.tokenFactory.setLang(args);
        }
      }, {
        key: "broadcastLogin",
        value: function broadcastLogin(token, lang) {
          this.setAccessToken(token);
          this.setLang(lang);
          this.router.navigate(['home']);
        }
      }, {
        key: "getParticipantProfile",
        value: function getParticipantProfile(contextParams) {
          var url = this.getUrl(this.namespace, 'par_profile', contextParams);
          return this.getApi(url);
        }
        // ====================== cookies ======================
        // broadcastLogout() {
        //   // stored in cookie
        //   if (this.cookieService.check('token_situ')) {
        //     this.cookieService.delete('token_situ');
        //     this.cookieService.delete('scope_situ');
        //     this.cookieService.delete('profile_situ');
        //     this.router.navigate(['auth/login']);
        //     location.reload();
        //   }
        // }
        // checkScope(param) {
        //   return _.contains(this.retrieveScope(), param);
        // }
        // setAccessToken(args) {
        //   // set token into cookies
        //   this.cookieService.set('token_situ', JSON.stringify(args));
        // }
        // setProfile(args) {
        //   this.cookieService.set('profile_situ', JSON.stringify(args));
        // }
        // retrieveProfile() {
        //   // retrieve scope from cookies
        //   if (this.cookieService.check('profile_situ')) {
        //     return JSON.parse(this.cookieService.get('profile_situ'));
        //   } else {
        //     return false;
        //   }
        // }
        // setScope(args) {
        //   this.cookieService.set('scope_situ', JSON.stringify(args));
        // }
        // retrieveScope() {
        //   // retrieve scope from cookies
        //   if (this.cookieService.check('scope_situ')) {
        //     return JSON.parse(this.cookieService.get('scope_situ'));
        //   } else {
        //     return false;
        //   }
        // }
        // retrieveAccessToken() {
        //   // retrieve token from cookies
        //   if (this.cookieService.check('token_situ')) {
        //     return JSON.parse(this.cookieService.get('token_situ'));
        //   } else {
        //     this.broadcastLogout();
        //     return false;
        //   }
        // }
        // ====================== localstorage ======================
      }, {
        key: "setAccessToken",
        value: function setAccessToken(args) {
          this.tokenFactory.setAccessToken(args);
        }
      }, {
        key: "retrieveAccessToken",
        value: function retrieveAccessToken() {
          return this.tokenFactory.retrieveAccessToken();
        }
      }, {
        key: "setScope",
        value: function setScope(args) {
          this.tokenFactory.setScope(args);
        }
      }, {
        key: "retrieveScope",
        value: function retrieveScope() {
          return this.tokenFactory.retrieveScope();
        }
      }, {
        key: "checkScope",
        value: function checkScope(param) {
          return underscore__WEBPACK_IMPORTED_MODULE_7__["contains"](this.tokenFactory.retrieveScope(), param);
        }
      }, {
        key: "setProfile",
        value: function setProfile(args) {
          this.tokenFactory.setProfileSitu(args);
        }
      }, {
        key: "retrieveProfile",
        value: function retrieveProfile() {
          return this.tokenFactory.retrieveProfile();
        }
      }, {
        key: "broadcastLogout",
        value: function broadcastLogout() {
          this.tokenFactory.destroyToken();
          this.router.navigate(['auth/login']);
          location.reload();
        }
      }]);
    }(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]);
    OauthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }];
    };
    OauthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])], OauthService);

    /***/
  }),
  /***/"./src/app/animations.ts": (
  /*!*******************************!*\
    !*** ./src/app/animations.ts ***!
    \*******************************/
  /*! exports provided: slideInAnimation */
  /***/
  function _src_app_animationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "slideInAnimation", function () {
      return slideInAnimation;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(-100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(100%)'
    }))], {
      optional: true
    })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(-100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(100%)'
    }))], {
      optional: true
    })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('2 => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(-100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(100%)'
    }))], {
      optional: true
    })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('3 => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(-100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(100%)'
    }))], {
      optional: true
    })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('3 => 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(-100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(100%)'
    }))], {
      optional: true
    })])])]);

    /***/
  }),
  /***/"./src/app/app-config.ts": (
  /*!*******************************!*\
    !*** ./src/app/app-config.ts ***!
    \*******************************/
  /*! exports provided: DefaultConfig */
  /***/
  function _src_app_appConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DefaultConfig", function () {
      return DefaultConfig;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var DefaultConfig = /*#__PURE__*/_createClass(function DefaultConfig() {
      _classCallCheck(this, DefaultConfig);
    });
    DefaultConfig.Application = {
      appName: 'Penerimaan Mahasiswa Baru' // set Application name test
    };
    DefaultConfig.config = {
      layout: 'vertical',
      subLayout: '',
      collapseMenu: false,
      layoutType: 'menu-light',
      headerBackColor: 'background-img-7',
      rtlLayout: false,
      navFixedLayout: true,
      headerFixedLayout: false,
      boxLayout: false,
      breadcumb: true
    };
    DefaultConfig.lang = {
      defaultLang: 'id' // set default languange for all component
    };

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./layout/auth/auth.component */"./src/app/layout/auth/auth.component.ts");
    /* harmony import */
    var _classes_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./_classes/auth.guard */"./src/app/_classes/auth.guard.ts");
    /* harmony import */
    var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./layout/admin/admin.component */"./src/app/layout/admin/admin.component.ts");
    var routes = [{
      path: '',
      component: _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
      canActivate: [_classes_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      children: [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: './theme/_home/home.module#HomeModule',
        data: {
          animation: '1'
        }
      }, {
        path: 'adm-dashboard',
        loadChildren: './theme/adm-dashboard/adm-dashboard.module#AdmDashboardModule',
        data: {
          animation: '1'
        }
      }, {
        path: 'sample-page',
        loadChildren: './theme/sample-page/sample-page.module#SamplePageModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'student-profile',
        loadChildren: './theme/student-profile/student-profile.module#StudentProfileModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-map-prodi-category-document',
        loadChildren: './theme/adm-map-prodi-category-document/adm-map-prodi-category-document.module#AdmMapProdiCategoryDocumentModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-master-document',
        loadChildren: './theme/adm-master-document/adm-master-document.module#AdmMasterDocumentModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-master-type-examp',
        loadChildren: './theme/adm-master-type-examp/adm-master-type-examp.module#AdmMasterTypeExampModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-master-student-interes',
        loadChildren: './theme/adm-master-student-interes/adm-master-student-interes.module#AdmMasterStudentInteresModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-master-selection-category',
        loadChildren: './theme/adm-master-selection-category/adm-master-selection-category.module#AdmMasterSelectionCategoryModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-master-form-category',
        loadChildren: './theme/adm-master-form-category/adm-master-form-category.module#AdmMasterFormCategoryModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'new-registration',
        loadChildren: './theme/new-registration/new-registration.module#NewRegistrationModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'registration-history',
        loadChildren: './theme/registration-history/registration-history.module#RegistrationHistoryModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'registration-report',
        loadChildren: './theme/registration-report/registration-report.module#RegistrationReportModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'questionnaire-data-participant',
        loadChildren: './theme/questionnaire-data-participant/questionnaire-data-participant.module#QuestionnaireDataParticipantModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-ms-program-data',
        loadChildren: './theme/adm-ms-program-data/adm-ms-program-data.module#AdmMsProgramDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-ms-passing-grade-data',
        loadChildren: './theme/adm-ms-passing-grade-data/adm-ms-passing-grade-data.module#AdmMsPassingGradeDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-ms-selection-schedule-data',
        loadChildren: './theme/adm-ms-selection-schedule-data/adm-ms-selection-schedule-data.module#AdmMsSelectionScheduleDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-ms-selection-intake-data',
        loadChildren: './theme/adm-ms-selection-intake-data/adm-ms-selection-intake-data.module#AdmMsSelectionIntakeDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-ms-selection-data',
        loadChildren: './theme/adm-ms-selection-data/adm-ms-selection-data.module#AdmMsSelectionDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-ms-questionnaire-data',
        loadChildren: './theme/adm-ms-questionnaire-data/adm-ms-questionnaire-data.module#AdmMsQuestionnaireDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-ms-exam-detail-data',
        loadChildren: './theme/adm-ms-exam-detail-data/adm-ms-exam-detail-data.module#AdmMsExamDetailDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-mp-approval-data',
        loadChildren: './theme/adm-mp-approval-data/adm-mp-approval-data.module#AdmMpApprovalDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-mp-participant-data',
        loadChildren: './theme/adm-mp-participant-data/adm-mp-participant-data.module#AdmMpParticipantDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-mp-document-data',
        loadChildren: './theme/adm-mp-document-data/adm-mp-document-data.module#AdmMpDocumentDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-mp-payment-data',
        loadChildren: './theme/adm-mp-payment-data/adm-mp-payment-data.module#AdmMpPaymentDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-mp-participant-score-data',
        loadChildren: './theme/adm-mp-participant-score-data/adm-mp-participant-score-data.module#AdmMpParticipantScoreDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-mp-approval-participant-score-data',
        loadChildren: './theme/adm-mp-approval-participant-score-data/adm-mp-approval-participant-score-data.module#AdmMpApprovalParticipantScoreDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-mr-new-student-data',
        loadChildren: './theme/adm-mr-new-student-data/adm-mr-new-student-data.module#AdmMrNewStudentDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-mp-credit-transfer/:registration_number',
        loadChildren: './theme/adm-mp-credit-transfer/adm-mp-credit-transfer.module#AdmMpCreditTransferModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'adm-mr-verification-document-data',
        loadChildren: './theme/adm-mr-verification-document-data/adm-mr-verification-document-data.module#AdmMrVerificationDocumentDataModule',
        data: {
          animation: '2'
        }
      }, {
        path: 'new-student-registration',
        loadChildren: './theme/new-student-registration/new-student-registration.module#NewStudentRegistrationModule',
        data: {
          animation: '2'
        }
      }]
    }, {
      path: '',
      component: _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
      children: [{
        path: 'auth',
        canActivate: [_classes_auth_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]],
        loadChildren: './theme/auth/authentication.module#AuthenticationModule'
      }, {
        path: 'recommendation',
        loadChildren: './theme/recommendation/recommendation.module#RecommendationModule'
      }, {
        path: 'postgraduate-participant',
        loadChildren: './theme/postgraduate-participant/postgraduate-participant.module#PostgraduateParticipantModule'
      }, {
        path: 'error',
        loadChildren: './theme/error/error.module#ErrorModule'
      }, {
        path: 'adm-master-schedules',
        loadChildren: './theme/adm-master-schedules/adm-master-schedules.module#AdmMasterSchedulesModule',
        data: {
          animation: '2'
        }
      }]
    }, {
      path: '**',
      redirectTo: '/error/404'
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.scss": (
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function _src_app_appComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _services_oauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./_services/oauth.service */"./src/app/_services/oauth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app-config */"./src/app/app-config.ts");
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, oauthService) {
        _classCallCheck(this, AppComponent);
        this.router = router;
        this.oauthService = oauthService;
        this.oauthService.setLang(_app_config__WEBPACK_IMPORTED_MODULE_4__["DefaultConfig"].lang.defaultLang);
      }
      return _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
              return;
            }
            window.scrollTo(0, 0);
          });
        }
      }]);
    }();
    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OauthService"]
      }];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OauthService"]])], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: createTranslateLoader, AppModule, HttpLoaderFactory */
  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var _layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */"./src/app/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
    /* harmony import */
    var _layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./layout/admin/navigation/nav-content/nav-group/nav-group.component */"./src/app/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts");
    /* harmony import */
    var _layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./layout/admin/navigation/nav-content/nav-item/nav-item.component */"./src/app/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");
    /* harmony import */
    var _layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./layout/admin/nav-bar/nav-left/nav-search/nav-search.component */"./src/app/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts");
    /* harmony import */
    var _layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./layout/admin/navigation/nav-content/nav-content.component */"./src/app/layout/admin/navigation/nav-content/nav-content.component.ts");
    /* harmony import */
    var _layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./layout/admin/configuration/configuration.component */"./src/app/layout/admin/configuration/configuration.component.ts");
    /* harmony import */
    var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./shared/components/breadcrumb/breadcrumb.component */"./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */
    var _layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./layout/admin/nav-bar/nav-right/nav-right.component */"./src/app/layout/admin/nav-bar/nav-right/nav-right.component.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./layout/admin/nav-bar/nav-left/nav-left.component */"./src/app/layout/admin/nav-bar/nav-left/nav-left.component.ts");
    /* harmony import */
    var _layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./layout/admin/navigation/navigation.component */"./src/app/layout/admin/navigation/navigation.component.ts");
    /* harmony import */
    var _shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./shared/full-screen/toggle-full-screen */"./src/app/shared/full-screen/toggle-full-screen.ts");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./layout/admin/nav-bar/nav-bar.component */"./src/app/layout/admin/nav-bar/nav-bar.component.ts");
    /* harmony import */
    var _classes_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./_classes/auth.guard */"./src/app/_classes/auth.guard.ts");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./layout/admin/navigation/navigation */"./src/app/layout/admin/navigation/navigation.ts");
    /* harmony import */
    var _services_broadcaster_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! @ngx-translate/http-loader */"./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */
    var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./layout/admin/admin.component */"./src/app/layout/admin/admin.component.ts");
    /* harmony import */
    var _services_base_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./_services/base.interceptor */"./src/app/_services/base.interceptor.ts");
    /* harmony import */
    var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ./layout/auth/auth.component */"./src/app/layout/auth/auth.component.ts");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _services_oauth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ./_services/oauth.service */"./src/app/_services/oauth.service.ts");
    /* harmony import */
    var _classes_menu_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ./_classes/menu.resolver */"./src/app/_classes/menu.resolver.ts");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! ./shared/shared.module */"./src/app/shared/shared.module.ts");
    /* harmony import */
    var _services_app_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! ./_services/app.service */"./src/app/_services/app.service.ts");
    /* harmony import */
    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__( /*! ngx-cookie-service */"./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_33__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_31__["AppComponent"], _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"], _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_23__["AuthComponent"], _layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"], _layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_6__["NavContentComponent"], _layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_3__["NavGroupComponent"], _layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_2__["NavCollapseComponent"], _layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_4__["NavItemComponent"], _layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavBarComponent"], _layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_11__["NavLeftComponent"], _layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_5__["NavSearchComponent"], _layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_9__["NavRightComponent"], _layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_7__["ConfigurationComponent"], _shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_13__["ToggleFullScreenDirective"], _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_28__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
        }
      })],
      providers: [_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_19__["BroadcasterService"], _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_18__["NavigationItem"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_30__["CookieService"], _classes_menu_resolver__WEBPACK_IMPORTED_MODULE_26__["MenuResolver"], _services_oauth_service__WEBPACK_IMPORTED_MODULE_25__["OauthService"], _classes_auth_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"], _classes_auth_guard__WEBPACK_IMPORTED_MODULE_16__["RectorGuard"], _services_app_service__WEBPACK_IMPORTED_MODULE_29__["AppService"], _classes_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _services_base_interceptor__WEBPACK_IMPORTED_MODULE_22__["BaseInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_31__["AppComponent"]]
    })], AppModule);

    // AoT requires an exported function for factories
    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    /***/
  }),
  /***/"./src/app/layout/admin/admin.component.scss": (
  /*!***************************************************!*\
    !*** ./src/app/layout/admin/admin.component.scss ***!
    \***************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_adminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  }),
  /***/"./src/app/layout/admin/admin.component.ts": (
  /*!*************************************************!*\
    !*** ./src/app/layout/admin/admin.component.ts ***!
    \*************************************************/
  /*! exports provided: AdminComponent */
  /***/
  function _src_app_layout_admin_adminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var src_app_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/animations */"./src/app/animations.ts");
    /* harmony import */
    var src_app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/app-config */"./src/app/app-config.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(translateService, broadcasterService, location, zone) {
        _classCallCheck(this, AdminComponent);
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.location = location;
        this.zone = zone;
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translateService.setDefaultLang(res.lang);
        });
        this.nextConfig = src_app_app_config__WEBPACK_IMPORTED_MODULE_5__["DefaultConfig"].config;
        var currentURL = this.location.path();
        var baseHerf = this.location['_baseHref'];
        if (baseHerf) {
          currentURL = baseHerf + this.location.path();
        }
        this.windowWidth = window.innerWidth;
        if ((currentURL === baseHerf + '/layout/collapse-menu' || currentURL === baseHerf + '/layout/box') && this.windowWidth >= 992 && this.windowWidth <= 1024) {
          this.nextConfig.collapseMenu = true;
        }
        this.navCollapsed = this.windowWidth >= 992 ? this.nextConfig.collapseMenu : false;
        this.navCollapsedMob = false;
      }
      return _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var el = document.querySelector('.pcoded-main-container');
          el.style.height = 'auto';
          el.style.minHeight = "".concat(window.innerHeight - 190, "px");
          if (this.windowWidth < 992) {
            this.nextConfig.layout = 'vertical';
            setTimeout(function () {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('#nav-ps-next').style.maxHeight = '100%'; // 100% amit
            }, 500);
          }
        }
      }, {
        key: "navMobClick",
        value: function navMobClick() {
          var _this4 = this;
          if (this.windowWidth < 992) {
            if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              this.navCollapsedMob = !this.navCollapsedMob;
              setTimeout(function () {
                _this4.navCollapsedMob = !_this4.navCollapsedMob;
              }, 100);
            } else {
              this.navCollapsedMob = !this.navCollapsedMob;
            }
          }
        }
      }, {
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        }
      }]);
    }();
    AdminComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }];
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./admin.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/admin.component.html"))["default"],
      animations: [src_app_animations__WEBPACK_IMPORTED_MODULE_4__["slideInAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./admin.component.scss */"./src/app/layout/admin/admin.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])], AdminComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/configuration/configuration.component.scss": (
  /*!*************************************************************************!*\
    !*** ./src/app/layout/admin/configuration/configuration.component.scss ***!
    \*************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_configuration_configurationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none; }\n\nbody.able-pro-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03); }\n\nbody.able-pro-dark .menu-styler h1,\nbody.able-pro-dark .menu-styler h2,\nbody.able-pro-dark .menu-styler h3,\nbody.able-pro-dark .menu-styler h4,\nbody.able-pro-dark .menu-styler h5,\nbody.able-pro-dark .menu-styler p,\nbody.able-pro-dark .menu-styler h6 {\n  color: #222; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFHTSxtQ0FBa0MsRUFBQTs7QUFIeEM7Ozs7Ozs7RUFZTSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtc3R5bGVyIHtcbiAgLm5hdi1waWxscyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxufVxuYm9keS5hYmxlLXByby1kYXJre1xuICAubWVudS1zdHlsZXJ7XG4gICAgLnRhYi1jb250ZW50e1xuICAgICAgYmFja2dyb3VuZDpyZ2JhKDQsIDE2OSwgMjQ1LCAwLjAzKTtcbiAgICB9XG4gICAgaDEsXG4gICAgaDIsXG4gICAgaDMsXG4gICAgaDQsXG4gICAgaDUsXG4gICAgcCxcbiAgICBoNntcbiAgICAgIGNvbG9yOiAjMjIyO1xuICAgIH1cbiAgfVxufVxuIl19 */";

    /***/
  }),
  /***/"./src/app/layout/admin/configuration/configuration.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/layout/admin/configuration/configuration.component.ts ***!
    \***********************************************************************/
  /*! exports provided: ConfigurationComponent */
  /***/
  function _src_app_layout_admin_configuration_configurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
      return ConfigurationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/app-config */"./src/app/app-config.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    var ConfigurationComponent = /*#__PURE__*/function () {
      function ConfigurationComponent(zone, location, broadcasterService) {
        var _this5 = this;
        _classCallCheck(this, ConfigurationComponent);
        this.zone = zone;
        this.location = location;
        this.broadcasterService = broadcasterService;
        this.scroll = function () {
          if (_this5.headerFixedLayout === false) {
            document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh)';
            var el = document.querySelector('.pcoded-navbar.menupos-fixed');
            var scrollPosition = window.pageYOffset;
            if (scrollPosition > 60) {
              el.style.position = 'fixed';
              el.style.transition = 'none';
              el.style.minHeight = "".concat(window.innerHeight, "px");
              el.style.marginTop = '0';
              // el.style.transition = 'min-height 0.15s ease-out';
            } else {
              el.style.position = 'absolute';
              el.style.marginTop = '60px';
              el.style.minHeight = "".concat(window.innerHeight - 60, "px");
              // el.style.transition = 'min-height 0.15s ease-out';
            }
          } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
            document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
            document.querySelector('.nav.pcoded-inner-navbar').classList.add('telu');
          }
        };
        this.nextConfig = src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["DefaultConfig"].config;
        this.setThemeLayout();
        this.layoutTypeStorage = localStorage.getItem('layoutType') ? localStorage.getItem('layoutType') : this.nextConfig.layoutType;
        this.headerBackColorStorage = localStorage.getItem('headerBackColor') ? localStorage.getItem('headerBackColor') : this.nextConfig.headerBackColor;
      }
      return _createClass(ConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.styleSelectorToggle = false;
          // this.layoutType = this.nextConfig.layoutType;
          this.layoutType = this.layoutTypeStorage;
          this.setLayout(this.layoutType);
          // this.headerBackgroundColor = this.nextConfig.headerBackColor;
          this.headerBackgroundColor = this.headerBackColorStorage;
          this.setHeaderBackground(this.headerBackgroundColor);
          this.rtlLayout = this.nextConfig.rtlLayout;
          this.changeRtlLayout(this.rtlLayout);
          this.menuFixedLayout = this.nextConfig.navFixedLayout;
          if (this.nextConfig.layout === 'vertical') {
            this.changeMenuFixedLayout(this.menuFixedLayout);
          }
          this.headerFixedLayout = this.nextConfig.headerFixedLayout;
          this.changeHeaderFixedLayout(this.headerFixedLayout);
          this.boxLayout = this.nextConfig.boxLayout;
          this.breadcumb = this.nextConfig.breadcumb;
          this.changeBoxLayout(this.boxLayout);
          this.changeBreadcumb(this.breadcumb);
        }
      }, {
        key: "setThemeLayout",
        value: function setThemeLayout() {
          var currentURL = this.location.path();
          var baseHref = this.location['_baseHref'];
          if (baseHref) {
            currentURL = baseHref + this.location.path();
          }
          switch (currentURL) {
            case baseHref + '/layout/static':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.navFixedLayout = false;
              this.nextConfig.headerFixedLayout = false;
              break;
            case baseHref + '/layout/fixed':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.navFixedLayout = true;
              this.nextConfig.headerFixedLayout = true;
              break;
            case baseHref + '/layout/nav-fixed':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.navFixedLayout = true;
              this.nextConfig.headerFixedLayout = false;
              break;
            case baseHref + '/layout/collapse-menu':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.collapseMenu = true;
              break;
            case baseHref + '/layout/vertical-rtl':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.rtlLayout = true;
              break;
            case baseHref + '/layout/horizontal':
              this.nextConfig.layout = 'horizontal';
              this.nextConfig.navFixedLayout = false;
              this.nextConfig.headerFixedLayout = false;
              this.nextConfig.collapseMenu = false;
              break;
            case baseHref + '/layout/horizontal-l2':
              this.nextConfig.layout = 'horizontal';
              this.nextConfig.subLayout = 'horizontal-2';
              this.nextConfig.navFixedLayout = false;
              this.nextConfig.headerFixedLayout = false;
              this.nextConfig.collapseMenu = false;
              break;
            case baseHref + '/layout/horizontal-rtl':
              this.nextConfig.layout = 'horizontal';
              this.nextConfig.subLayout = 'horizontal-2';
              this.nextConfig.navFixedLayout = false;
              this.nextConfig.headerFixedLayout = false;
              this.nextConfig.rtlLayout = true;
              this.nextConfig.collapseMenu = false;
              break;
            case baseHref + '/layout/box':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.boxLayout = true;
              this.nextConfig.navFixedLayout = true;
              this.nextConfig.headerFixedLayout = false;
              this.nextConfig.collapseMenu = true;
              break;
            case baseHref + '/layout/light':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.layoutType = 'menu-light';
              this.nextConfig.headerBackColor = 'background-blue';
              break;
            case baseHref + '/layout/dark':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.layoutType = 'dark';
              this.nextConfig.headerBackColor = 'background-blue';
              break;
            default:
              break;
          }
        }
      }, {
        key: "setHeaderBackColor",
        value: function setHeaderBackColor(color) {
          this.headerBackColor = color;
          document.querySelector('body').style.background = color;
        }
        // change main layout
      }, {
        key: "setLayout",
        value: function setLayout(layout) {
          this.isConfig = true;
          document.querySelector('.pcoded-navbar').classList.remove('menu-light');
          document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
          document.querySelector('body').classList.remove('able-pro-dark');
          this.layoutType = layout;
          if (layout === 'menu-light' || layout === 'reset') {
            document.querySelector('.pcoded-navbar').classList.add('menu-light');
            this.setHeaderBackground('background-img-7');
            localStorage.setItem('layoutType', layout);
          }
          if (layout === 'dark') {
            this.setHeaderBackground('background-img-7');
            document.querySelector('body').classList.add('able-pro-dark');
            localStorage.setItem('layoutType', layout);
          }
          // if (layout === 'reset') {
          //   this.reset();
          // }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.ngOnInit();
        }
      }, {
        key: "setRtlLayout",
        value: function setRtlLayout(e) {
          var flag = !!e.target.checked;
          this.changeRtlLayout(flag);
        }
      }, {
        key: "changeRtlLayout",
        value: function changeRtlLayout(flag) {
          if (flag) {
            document.querySelector('body').classList.add('able-pro-rtl');
          } else {
            document.querySelector('body').classList.remove('able-pro-rtl');
          }
        }
      }, {
        key: "setMenuFixedLayout",
        value: function setMenuFixedLayout(e) {
          var flag = !!e.target.checked;
          this.changeMenuFixedLayout(flag);
        }
      }, {
        key: "changeMenuFixedLayout",
        value: function changeMenuFixedLayout(flag) {
          var _this6 = this;
          setTimeout(function () {
            if (flag) {
              document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
              document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
              if (_this6.nextConfig.layout === 'vertical') {
                document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
              }
              window.addEventListener('scroll', _this6.scroll, true);
              window.scrollTo(0, 0);
            } else {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
              if (_this6.nextConfig.layout === 'vertical') {
                document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
              }
              if (_this6.nextConfig.layout === 'vertical') {
                window.removeEventListener('scroll', _this6.scroll, true);
              }
            }
          }, 100);
        }
      }, {
        key: "setHeaderFixedLayout",
        value: function setHeaderFixedLayout(e) {
          var flag = !!e.target.checked;
          this.changeHeaderFixedLayout(flag);
        }
      }, {
        key: "changeHeaderFixedLayout",
        value: function changeHeaderFixedLayout(flag) {
          if (flag) {
            document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
          } else {
            document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
            // static
            if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
              window.addEventListener('scroll', this.scroll, true);
              window.scrollTo(0, 0);
            } else {
              window.removeEventListener('scroll', this.scroll, true);
            }
          }
        }
      }, {
        key: "setBoxLayout",
        value: function setBoxLayout(e) {
          var flag = !!e.target.checked;
          this.changeBoxLayout(flag);
        }
      }, {
        key: "setBreadcumb",
        value: function setBreadcumb(e) {
          var flag = !!e.target.checked;
          this.changeBreadcumb(flag);
        }
      }, {
        key: "changeBoxLayout",
        value: function changeBoxLayout(flag) {
          if (flag) {
            document.querySelector('body').classList.add('container');
            document.querySelector('body').classList.add('box-layout');
          } else {
            document.querySelector('body').classList.remove('box-layout');
            document.querySelector('body').classList.remove('container');
          }
        }
      }, {
        key: "changeBreadcumb",
        value: function changeBreadcumb(flag) {
          if (flag) {
            document.querySelector('.change-breadcrum').classList.add('breadcumb-sticky');
          } else {
            document.querySelector('.change-breadcrum').classList.remove('breadcumb-sticky');
          }
        }
      }, {
        key: "setHeaderBackground",
        value: function setHeaderBackground(background) {
          this.headerBackgroundColor = background;
          document.querySelector('body').classList.remove('background-blue');
          document.querySelector('body').classList.remove('background-red');
          document.querySelector('body').classList.remove('background-purple');
          document.querySelector('body').classList.remove('background-info');
          document.querySelector('body').classList.remove('background-green');
          document.querySelector('body').classList.remove('background-dark');
          document.querySelector('body').classList.remove('background-grd-blue');
          document.querySelector('body').classList.remove('background-grd-red');
          document.querySelector('body').classList.remove('background-grd-purple');
          document.querySelector('body').classList.remove('background-grd-info');
          document.querySelector('body').classList.remove('background-grd-green');
          document.querySelector('body').classList.remove('background-grd-dark');
          document.querySelector('body').classList.remove('background-grd-telu');
          document.querySelector('body').classList.remove('background-img-1');
          document.querySelector('body').classList.remove('background-img-2');
          document.querySelector('body').classList.remove('background-img-3');
          document.querySelector('body').classList.remove('background-img-4');
          document.querySelector('body').classList.remove('background-img-5');
          document.querySelector('body').classList.remove('background-img-6');
          document.querySelector('body').classList.remove('background-img-7');
          document.querySelector('body').classList.add(background);
          this.setNavbarColor(background);
          localStorage.setItem('headerBackColor', background);
        }
      }, {
        key: "setNavbarColor",
        value: function setNavbarColor(param) {
          var select = param.split('-');
          var color = select[select.length - 1];
          document.querySelector('.pcoded-header').classList.remove('header-telu');
          document.querySelector('.pcoded-header').classList.remove('header-blue');
          document.querySelector('.pcoded-header').classList.remove('header-red');
          document.querySelector('.pcoded-header').classList.remove('header-green');
          document.querySelector('.pcoded-header').classList.remove('header-purple');
          document.querySelector('.pcoded-header').classList.remove('header-blue');
          document.querySelector('.pcoded-header').classList.remove('header-dark');
          document.querySelector('.pcoded-header').classList.remove('header-info');
          if (color === '1' || color === '2' || color === '3' || color === '4' || color === '5' || color === '6' || color === '7') {
            document.querySelector('.pcoded-header').classList.add('header-dark');
          } else {
            document.querySelector('.pcoded-header').classList.add('header-' + color);
          }
        }
      }]);
    }();
    ConfigurationComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"]
      }];
    };
    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./configuration.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/configuration/configuration.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./configuration.component.scss */"./src/app/layout/admin/configuration/configuration.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_4__["BroadcasterService"]])], ConfigurationComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/nav-bar/nav-bar.component.scss": (
  /*!*************************************************************!*\
    !*** ./src/app/layout/admin/nav-bar/nav-bar.component.scss ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_navBar_navBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "img.logo.situ-main {\n  max-width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5sb2dvLnNpdHUtbWFpbiB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/layout/admin/nav-bar/nav-bar.component.ts": (
  /*!***********************************************************!*\
    !*** ./src/app/layout/admin/nav-bar/nav-bar.component.ts ***!
    \***********************************************************/
  /*! exports provided: NavBarComponent */
  /***/
  function _src_app_layout_admin_navBar_navBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/app-config */"./src/app/app-config.ts");
    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(broadcasterService) {
        _classCallCheck(this, NavBarComponent);
        this.broadcasterService = broadcasterService;
        this.NavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.NavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.appName = src_app_app_config__WEBPACK_IMPORTED_MODULE_3__["DefaultConfig"].Application.appName;
        this.nextConfig = src_app_app_config__WEBPACK_IMPORTED_MODULE_3__["DefaultConfig"].config;
        this.menuClass = false;
        this.collapseStyle = 'none';
        this.windowWidth = window.innerWidth;
      }
      return _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleMobOption",
        value: function toggleMobOption() {
          this.menuClass = !this.menuClass;
          this.collapseStyle = this.menuClass ? 'block' : 'none';
        }
      }, {
        key: "navCollapse",
        value: function navCollapse() {
          if (this.windowWidth >= 992) {
            this.NavCollapse.emit();
            this.broadcasterService.hideProfileMenuBroadcast(true);
          } else {
            this.NavHeaderMobCollapse.emit();
          }
        }
      }]);
    }();
    NavBarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NavBarComponent.prototype, "NavHeaderMobCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NavBarComponent.prototype, "NavCollapse", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./nav-bar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./nav-bar.component.scss */"./src/app/layout/admin/nav-bar/nav-bar.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"]])], NavBarComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/nav-bar/nav-left/nav-left.component.scss": (
  /*!***********************************************************************!*\
    !*** ./src/app/layout/admin/nav-bar/nav-left/nav-left.component.scss ***!
    \***********************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_navBar_navLeft_navLeftComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/layout/admin/nav-bar/nav-left/nav-left.component.ts": (
  /*!*********************************************************************!*\
    !*** ./src/app/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
    \*********************************************************************/
  /*! exports provided: NavLeftComponent */
  /***/
  function _src_app_layout_admin_navBar_navLeft_navLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function () {
      return NavLeftComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var NavLeftComponent = /*#__PURE__*/function () {
      function NavLeftComponent() {
        _classCallCheck(this, NavLeftComponent);
      }
      return _createClass(NavLeftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    NavLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-left',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./nav-left.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-left/nav-left.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./nav-left.component.scss */"./src/app/layout/admin/nav-bar/nav-left/nav-left.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavLeftComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss": (
  /*!************************************************************************************!*\
    !*** ./src/app/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_navBar_navLeft_navSearch_navSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  }),
  /***/"./src/app/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts": (
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
    \**********************************************************************************/
  /*! exports provided: NavSearchComponent */
  /***/
  function _src_app_layout_admin_navBar_navLeft_navSearch_navSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function () {
      return NavSearchComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var NavSearchComponent = /*#__PURE__*/function () {
      function NavSearchComponent() {
        _classCallCheck(this, NavSearchComponent);
        this.isSearch = false;
      }
      return _createClass(NavSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    NavSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./nav-search.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./nav-search.component.scss */"./src/app/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavSearchComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/nav-bar/nav-right/nav-right.component.scss": (
  /*!*************************************************************************!*\
    !*** ./src/app/layout/admin/nav-bar/nav-right/nav-right.component.scss ***!
    \*************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_navBar_navRight_navRightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "select-dropdown > div .filter {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LXJpZ2h0L25hdi1yaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LXJpZ2h0L25hdi1yaWdodC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdC1kcm9wZG93biA+IGRpdiAuZmlsdGVyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */";

    /***/
  }),
  /***/"./src/app/layout/admin/nav-bar/nav-right/nav-right.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
    \***********************************************************************/
  /*! exports provided: NavRightComponent */
  /***/
  function _src_app_layout_admin_navBar_navRight_navRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavRightComponent", function () {
      return NavRightComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/_services/oauth.service */"./src/app/_services/oauth.service.ts");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    var NavRightComponent = /*#__PURE__*/function () {
      function NavRightComponent(translateService, broadcasterService, oauthService) {
        var _this7 = this;
        _classCallCheck(this, NavRightComponent);
        this.translateService = translateService;
        this.broadcasterService = broadcasterService;
        this.oauthService = oauthService;
        this.selectedCountry = localStorage.getItem('lang');
        this.countries = [{
          value: 'en',
          label: 'United States',
          lang: 'us'
        }, {
          value: 'id',
          label: 'Indonesia',
          lang: 'id'
        }];
        this.userProfile = {
          fullname: 'Loading...',
          numberid: 'Loading...',
          photo: 'assets/images/infinity-situ.svg'
        };
        this.broadcasterService.profileBroadcast$.subscribe(function (res) {
          _this7.loadProfile();
        });
      }
      return _createClass(NavRightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadProfile();
        }
      }, {
        key: "loadProfile",
        value: function loadProfile() {
          var _this8 = this;
          this.participantData = JSON.parse(localStorage.getItem('userProfile'));
          if (this.participantData.username.includes("@")) {
            this.oauthService.getParticipantProfile("".concat(this.participantData.email)).subscribe(function (data) {
              if (data) {
                _this8.userProfile = data;
                _this8.userProfile = {
                  fullname: data.fullname,
                  numberid: data.username,
                  photo: data.photo_url
                  // photo: 'https://cdndata.telkomuniversity.ac.id/situ-round.png'
                };
              } else {
                _this8.userProfile = {
                  fullname: 'No Data',
                  numberid: '000000000',
                  photo: 'https://cdndata.telkomuniversity.ac.id/situ-round.png'
                };
              }
            });
          } else if (this.oauthService.retrieveProfile()) {
            this.userProfile = this.oauthService.retrieveProfile();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          document.querySelector('ng-select').classList.add('lang');
        }
      }, {
        key: "changeLang",
        value: function changeLang() {
          this.broadcasterService.changeLangBroadcast(true, this.selectedCountry);
          this.translateService.setDefaultLang(this.selectedCountry);
          this.translateService.use(this.selectedCountry);
          this.oauthService.setLang(this.selectedCountry);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.oauthService.broadcastLogout();
        }
      }]);
    }();
    NavRightComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"]
      }, {
        type: src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_4__["OauthService"]
      }];
    };
    NavRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-nav-right',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./nav-right.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/nav-bar/nav-right/nav-right.component.html"))["default"],
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownConfig"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./nav-right.component.scss */"./src/app/layout/admin/nav-bar/nav-right/nav-right.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"], src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_4__["OauthService"]])], NavRightComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss": (
  /*!**********************************************************************************************!*\
    !*** ./src/app/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_navigation_navContent_navCollapse_navCollapseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts": (
  /*!********************************************************************************************!*\
    !*** ./src/app/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
    \********************************************************************************************/
  /*! exports provided: NavCollapseComponent */
  /***/
  function _src_app_layout_admin_navigation_navContent_navCollapse_navCollapseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function () {
      return NavCollapseComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/app-config */"./src/app/app-config.ts");
    /* harmony import */
    var _navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../navigation */"./src/app/layout/admin/navigation/navigation.ts");
    var NavCollapseComponent = /*#__PURE__*/function () {
      function NavCollapseComponent(broadcasterService) {
        _classCallCheck(this, NavCollapseComponent);
        this.broadcasterService = broadcasterService;
        this.visible = false;
        this.nextConfig = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["DefaultConfig"].config;
        this.themeLayout = this.nextConfig.layout;
        broadcasterService.hideProfileMenuBroadcast$.subscribe(function (res) {
          var parent = document.querySelector('#nav-link-id');
          // console.log(parent.classList.contains('pcoded-trigger'));
          // console.log(parent.parentElement);
          if (parent.parentElement.classList.contains('pcoded-trigger')) {
            setTimeout(function () {
              parent.classList.remove('pcoded-trigger');
              parent.parentElement.classList.remove('pcoded-trigger');
            }, 200);
          }
        });
      }
      return _createClass(NavCollapseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navCollapse",
        value: function navCollapse(e) {
          this.visible = !this.visible;
          var parent = e.target;
          if (this.themeLayout === 'vertical') {
            parent = parent.parentElement;
          }
          var sections = document.querySelectorAll('.pcoded-hasmenu');
          for (var i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
              sections[i].classList.remove('pcoded-trigger');
            }
          }
          var firstParent = parent.parentElement;
          var preParent = parent.parentElement.parentElement;
          if (firstParent.classList.contains('pcoded-hasmenu')) {
            do {
              firstParent.classList.add('pcoded-trigger');
              // firstParent.parentElement.classList.toggle('pcoded-trigger');
              firstParent = firstParent.parentElement.parentElement.parentElement;
            } while (firstParent.classList.contains('pcoded-hasmenu'));
          } else if (preParent.classList.contains('pcoded-submenu')) {
            do {
              preParent.parentElement.classList.add('pcoded-trigger');
              preParent = preParent.parentElement.parentElement.parentElement;
            } while (preParent.classList.contains('pcoded-submenu'));
          }
          parent.classList.toggle('pcoded-trigger');
        }
      }]);
    }();
    NavCollapseComponent.ctorParameters = function () {
      return [{
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_5__["NavigationItem"])], NavCollapseComponent.prototype, "item", void 0);
    NavCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-nav-collapse',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./nav-collapse.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-100%)',
        display: 'block'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-100%)'
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./nav-collapse.component.scss */"./src/app/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"]])], NavCollapseComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/nav-content/nav-content.component.scss": (
  /*!********************************************************************************!*\
    !*** ./src/app/layout/admin/navigation/nav-content/nav-content.component.scss ***!
    \********************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_navigation_navContent_navContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "input[type=\"checkbox\"] {\n  top: -14px !important;\n  left: 20px; }\n\n.participant-email-custom {\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvbGF5b3V0L2FkbWluL25hdmlnYXRpb24vbmF2LWNvbnRlbnQvbmF2LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluL25hdmlnYXRpb24vbmF2LWNvbnRlbnQvbmF2LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICB0b3A6IC0xNHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbi5wYXJ0aWNpcGFudC1lbWFpbC1jdXN0b217XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/nav-content/nav-content.component.ts": (
  /*!******************************************************************************!*\
    !*** ./src/app/layout/admin/navigation/nav-content/nav-content.component.ts ***!
    \******************************************************************************/
  /*! exports provided: NavContentComponent */
  /***/
  function _src_app_layout_admin_navigation_navContent_navContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavContentComponent", function () {
      return NavContentComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/_services/oauth.service */"./src/app/_services/oauth.service.ts");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var src_app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/app-config */"./src/app/app-config.ts");
    /* harmony import */
    var _navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../navigation */"./src/app/layout/admin/navigation/navigation.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    var NavContentComponent = /*#__PURE__*/function () {
      function NavContentComponent(nav, broadcasterService, translateService, oauthService, location, zone) {
        var _this9 = this;
        _classCallCheck(this, NavContentComponent);
        this.nav = nav;
        this.broadcasterService = broadcasterService;
        this.translateService = translateService;
        this.oauthService = oauthService;
        this.location = location;
        this.zone = zone;
        this.NavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.hideProfileMenuBroadcast$.subscribe(function (res) {
          _this9.isNavProfile = false;
        });
        this.nextConfig = src_app_app_config__WEBPACK_IMPORTED_MODULE_5__["DefaultConfig"].config;
        this.windowWidth = window.innerWidth;
        // this.navigation = this.nav.get();
        this.navigation = [];
        this.prevDisabled = 'disabled';
        this.nextDisabled = '';
        this.scrollWidth = 0;
        this.contentWidth = 0;
        this.userProfile = {
          fullname: 'Loading...',
          numberid: 'Loading...',
          photo: 'assets/images/infinity-situ.svg'
        };
        this.isNavProfile = false;
        this.headerBackColorStorage = localStorage.getItem('headerBackColor') ? localStorage.getItem('headerBackColor') : src_app_app_config__WEBPACK_IMPORTED_MODULE_5__["DefaultConfig"].config.headerBackColor;
        broadcasterService.changeTheme$.subscribe(function (res) {
          _this9.setLayout(res.layout);
        });
        broadcasterService.getMenuBroadcast$.subscribe(function (res) {
          _this9.loadMenu();
        });
        this.broadcasterService.profileBroadcast$.subscribe(function (res) {
          _this9.broadcasterService.scopeBroadcast$.subscribe(function (res) {
            _this9.loadProfile();
          });
        });
        // auto theme constructor
        this.layoutTypeStorage = localStorage.getItem('layoutType') ? localStorage.getItem('layoutType') : this.nextConfig.layoutType;
        this.autoTheme = localStorage.getItem('autoTheme') ? localStorage.getItem('autoTheme') : this.nextConfig.autoTheme;
        var now = new Date();
        var start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0);
        var end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0);
        this.timeStart = start / 1000;
        this.timeEnd = end / 1000;
      }
      return _createClass(NavContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;
          this.headerBackgroundColor = this.headerBackColorStorage;
          this.setHeaderBackground(this.headerBackgroundColor);
          if (this.windowWidth < 992) {
            this.nextConfig['layout'] = 'vertical';
            setTimeout(function () {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('#nav-ps-next').style.maxHeight = '100%';
            }, 500);
          }
          this.loadProfile();
          this.navigation = this.nav.get();
          // Auto theme on init
          this.setAutoTheme(this.autoTheme);
          setTimeout(function () {
            _this10.checkTimeNow(_this10.timeStart, _this10.timeEnd);
          }, 1000);
          setTimeout(function () {
            var el = document.querySelector('.pcoded-navbar.menupos-fixed');
            if (el) {
              el.style.height = 'auto';
              el.style.minHeight = "".concat(window.innerHeight - 50, "px");
              el.style.borderRadius = '0 0.50rem 0.50rem 0';
            }
          }, 1000);
        }
      }, {
        key: "adjustContainer",
        value: function adjustContainer() {
          var el = document.querySelector('.pcoded-main-container');
          el.style.height = 'auto';
          if (this.isNavProfile) {
            el.style.minHeight = "".concat(window.innerHeight - 190 + 60, "px");
          } else {
            // el.style.minHeight = `${(window.innerHeight - 190) - 60}px`;
          }
        }
      }, {
        key: "loadMenu",
        value: function loadMenu() {
          var _this11 = this;
          setTimeout(function () {
            _this11.navigation = _this11.nav.get();
          }, 100);
        }
      }, {
        key: "loadProfile",
        value: function loadProfile() {
          var _this12 = this;
          this.participantData = JSON.parse(localStorage.getItem('userProfile'));
          this.scope = JSON.parse(localStorage.getItem('scope'));
          if (this.participantData.username.includes("@")) {
            this.oauthService.getParticipantProfile("".concat(this.participantData.email)).subscribe(function (data) {
              if (data) {
                _this12.userProfile = data;
                _this12.userProfile = {
                  fullname: data.fullname,
                  email: data.username.toLowerCase(),
                  photo: data.photo_url ? data.photo_url : 'https://cdndata.telkomuniversity.ac.id/situ-round.png'
                  // photo: 'https://cdndata.telkomuniversity.ac.id/situ-round.png'
                };
                _this12.getScopeSuperAdmin();
              } else {
                _this12.userProfile = {
                  fullname: 'No Data',
                  numberid: '000000000',
                  photo: 'https://cdndata.telkomuniversity.ac.id/situ-round.png'
                };
              }
            });
          } else if (this.oauthService.retrieveProfile()) {
            this.userProfile = this.oauthService.retrieveProfile();
            this.getScopeSuperAdmin();
          }
        }
      }, {
        key: "getScopeSuperAdmin",
        value: function getScopeSuperAdmin() {
          this.scope = JSON.parse(localStorage.getItem('scope'));
          var x = this.scope.toString();
          if (x == 'admission-participant,admission-new-participant' || x == 'admission-new-participant,admission-participant') {
            this.isNewstudent = true;
            this.isParticipant = false;
            this.isAdminAdmission = false;
            this.isAdminUniversity = false;
            this.isAdminFaculty = false;
            this.isAdminParticipant = false;
            this.isSuperadmin = false;
          } else if (x == 'admission-participant') {
            this.isNewstudent = false;
            this.isParticipant = true;
            this.isAdminAdmission = false;
            this.isAdminUniversity = false;
            this.isAdminFaculty = false;
            this.isAdminParticipant = false;
            this.isSuperadmin = false;
          } else if (x == 'admission-faculty') {
            this.isNewstudent = false;
            this.isAdminFaculty = true;
            this.isAdminUniversity = false;
            this.isAdminAdmission = false;
            this.isAdminParticipant = false;
            this.isParticipant = false;
            this.isSuperadmin = false;
          } else if (x == 'admission-admisi') {
            this.isNewstudent = false;
            this.isAdminAdmission = true;
            this.isAdminUniversity = false;
            this.isAdminFaculty = false;
            this.isAdminParticipant = false;
            this.isSuperadmin = false;
            this.isParticipant = false;
          } else if (x == 'admission-university') {
            this.isNewstudent = false;
            this.isAdminUniversity = true;
            this.isAdminFaculty = false;
            this.isAdminAdmission = false;
            this.isAdminParticipant = false;
            this.isParticipant = false;
            this.isSuperadmin = false;
          } else if (x == 'admission-admin-participant') {
            this.isNewstudent = false;
            this.isAdminParticipant = true;
            this.isAdminAdmission = false;
            this.isAdminUniversity = false;
            this.isAdminFaculty = false;
            this.isParticipant = false;
            this.isSuperadmin = false;
          } else if (x == 'admission-admin') {
            this.isNewstudent = false;
            this.isSuperadmin = true;
            this.isParticipant = false;
            this.isAdminAdmission = false;
            this.isAdminUniversity = false;
            this.isAdminFaculty = false;
            this.isAdminParticipant = false;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.oauthService.broadcastLogout();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.nextConfig['layout'] === 'horizontal') {
            this.contentWidth = this.navbarContent.nativeElement.clientWidth;
            this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
          }
        }
      }, {
        key: "scrollPlus",
        value: function scrollPlus() {
          this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);
          if (this.scrollWidth > this.contentWidth - this.wrapperWidth) {
            this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
            this.nextDisabled = 'disabled';
          }
          this.prevDisabled = '';
          if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
          } else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
          }
        }
      }, {
        key: "scrollMinus",
        value: function scrollMinus() {
          this.scrollWidth = this.scrollWidth - this.wrapperWidth;
          if (this.scrollWidth < 0) {
            this.scrollWidth = 0;
            this.prevDisabled = 'disabled';
          }
          this.nextDisabled = '';
          if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
          } else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
          }
        }
      }, {
        key: "fireLeave",
        value: function fireLeave() {
          var sections = document.querySelectorAll('.pcoded-hasmenu');
          for (var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
            sections[i].classList.remove('pcoded-trigger');
          }
          var current_url = this.location.path();
          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }
          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);
          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              last_parent.classList.add('active');
            }
          }
        }
      }, {
        key: "navMob",
        value: function navMob() {
          if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.NavMobCollapse.emit();
          }
        }
      }, {
        key: "fireOutClick",
        value: function fireOutClick() {
          var current_url = this.location.path();
          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }
          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);
          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                parent.classList.add('pcoded-trigger');
              }
              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                up_parent.classList.add('pcoded-trigger');
              }
              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                last_parent.classList.add('pcoded-trigger');
              }
              last_parent.classList.add('active');
            }
          }
        }
        // Auto theme method
      }, {
        key: "checkAutoTheme",
        value: function checkAutoTheme(event) {
          if (event.target.checked) {
            this.setAutoTheme(true);
          } else {
            this.setAutoTheme(false);
          }
        }
      }, {
        key: "autoThemeTrigger",
        value: function autoThemeTrigger(start, end) {
          var now = new Date();
          var sekarang = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
          var val = sekarang / 1000;
          if (this.autoTheme == 'true' || this.autoTheme == true) {
            if (start == val) {
              this.broadcasterService.changeTheme(true, 'reset');
              this.layoutTypeStorage = 'reset';
            } else if (end == val) {
              this.broadcasterService.changeTheme(true, 'dark');
              this.layoutTypeStorage = 'dark';
            }
          }
        }
      }, {
        key: "checkTimeNow",
        value: function checkTimeNow(start, end) {
          var now = new Date();
          var sekarang = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
          var val = sekarang / 1000;
          if (this.autoTheme == 'true' || this.autoTheme == true) {
            if (val > start && val < end) {
              this.broadcasterService.changeTheme(true, 'reset');
              this.layoutTypeStorage = 'reset';
            } else {
              this.broadcasterService.changeTheme(true, 'dark');
              this.layoutTypeStorage = 'dark';
            }
          }
        }
      }, {
        key: "changeLayout",
        value: function changeLayout(event) {
          if (event.target.checked) {
            this.broadcasterService.changeTheme(true, 'reset');
            this.layoutTypeStorage = 'reset';
          } else {
            this.broadcasterService.changeTheme(true, 'dark');
            this.layoutTypeStorage = 'dark';
          }
        }
      }, {
        key: "setAutoTheme",
        value: function setAutoTheme(mode) {
          if (mode == true || mode == 'true') {
            localStorage.setItem('autoTheme', 'true');
            this.autoTheme = 'true';
          } else {
            localStorage.setItem('autoTheme', 'false');
            this.autoTheme = 'false';
          }
        }
      }, {
        key: "setHeaderBackground",
        value: function setHeaderBackground(background) {
          this.headerBackgroundColor = background;
          document.querySelector('body').classList.remove('background-blue');
          document.querySelector('body').classList.remove('background-red');
          document.querySelector('body').classList.remove('background-purple');
          document.querySelector('body').classList.remove('background-info');
          document.querySelector('body').classList.remove('background-green');
          document.querySelector('body').classList.remove('background-dark');
          document.querySelector('body').classList.remove('background-grd-blue');
          document.querySelector('body').classList.remove('background-grd-red');
          document.querySelector('body').classList.remove('background-grd-purple');
          document.querySelector('body').classList.remove('background-grd-info');
          document.querySelector('body').classList.remove('background-grd-green');
          document.querySelector('body').classList.remove('background-grd-dark');
          document.querySelector('body').classList.remove('background-grd-telu');
          document.querySelector('body').classList.remove('background-img-1');
          document.querySelector('body').classList.remove('background-img-2');
          document.querySelector('body').classList.remove('background-img-3');
          document.querySelector('body').classList.remove('background-img-4');
          document.querySelector('body').classList.remove('background-img-5');
          document.querySelector('body').classList.remove('background-img-6');
          document.querySelector('body').classList.remove('background-img-7');
          document.querySelector('body').classList.add(background);
          this.setNavbarColor(background);
          localStorage.setItem('headerBackColor', background);
        }
      }, {
        key: "setNavbarColor",
        value: function setNavbarColor(param) {
          var select = param.split('-');
          var color = select[select.length - 1];
          document.querySelector('.pcoded-header').classList.remove('header-telu');
          document.querySelector('.pcoded-header').classList.remove('header-blue');
          document.querySelector('.pcoded-header').classList.remove('header-red');
          document.querySelector('.pcoded-header').classList.remove('header-green');
          document.querySelector('.pcoded-header').classList.remove('header-purple');
          document.querySelector('.pcoded-header').classList.remove('header-blue');
          document.querySelector('.pcoded-header').classList.remove('header-dark');
          document.querySelector('.pcoded-header').classList.remove('header-info');
          if (color === '1' || color === '2' || color === '3' || color === '4' || color === '5' || color === '6' || color === '7') {
            document.querySelector('.pcoded-header').classList.add('header-dark');
          } else {
            document.querySelector('.pcoded-header').classList.add('header-' + color);
          }
        }
        // change main layout
      }, {
        key: "setLayout",
        value: function setLayout(layout) {
          this.isConfig = true;
          document.querySelector('.pcoded-navbar').classList.remove('menu-light');
          document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
          document.querySelector('body').classList.remove('able-pro-dark');
          this.layoutType = layout;
          if (layout === 'menu-light' || layout === 'reset') {
            document.querySelector('.pcoded-navbar').classList.add('menu-light');
            // this.setHeaderBackground('background-img-7');
            localStorage.setItem('layoutType', layout);
          }
          if (layout === 'dark') {
            // this.setHeaderBackground('background-img-7');
            document.querySelector('body').classList.add('able-pro-dark');
            localStorage.setItem('layoutType', layout);
          }
          // if (layout === 'reset') {
          //   this.reset();
          // }
        }
      }]);
    }();
    NavContentComponent.ctorParameters = function () {
      return [{
        type: _navigation__WEBPACK_IMPORTED_MODULE_6__["NavigationItem"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__["BroadcasterService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_3__["OauthService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NavContentComponent.prototype, "NavMobCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarContent', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], NavContentComponent.prototype, "navbarContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarWrapper', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], NavContentComponent.prototype, "navbarWrapper", void 0);
    NavContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./nav-content.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-content.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./nav-content.component.scss */"./src/app/layout/admin/navigation/nav-content/nav-content.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navigation__WEBPACK_IMPORTED_MODULE_6__["NavigationItem"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__["BroadcasterService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_3__["OauthService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], NavContentComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss": (
  /*!****************************************************************************************!*\
    !*** ./src/app/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_navigation_navContent_navGroup_navGroupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts": (
  /*!**************************************************************************************!*\
    !*** ./src/app/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
    \**************************************************************************************/
  /*! exports provided: NavGroupComponent */
  /***/
  function _src_app_layout_admin_navigation_navContent_navGroup_navGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function () {
      return NavGroupComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/app-config */"./src/app/app-config.ts");
    /* harmony import */
    var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../navigation */"./src/app/layout/admin/navigation/navigation.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    var NavGroupComponent = /*#__PURE__*/function () {
      function NavGroupComponent(zone, location) {
        _classCallCheck(this, NavGroupComponent);
        this.zone = zone;
        this.location = location;
        this.layout1 = false;
        this.nextConfig = src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["DefaultConfig"].config;
      }
      return _createClass(NavGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // at reload time active and trigger link
          var current_url = this.location.path();
          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }
          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);
          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                parent.classList.add('pcoded-trigger');
              }
              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                up_parent.classList.add('pcoded-trigger');
              }
              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                last_parent.classList.add('pcoded-trigger');
              }
              last_parent.classList.add('active');
            }
          }
        }
      }]);
    }();
    NavGroupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_3__["NavigationItem"])], NavGroupComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], NavGroupComponent.prototype, "layout1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NavGroupComponent.prototype, "activeId", void 0);
    NavGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./nav-group.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-group/nav-group.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./nav-group.component.scss */"./src/app/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])], NavGroupComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss": (
  /*!**************************************************************************************!*\
    !*** ./src/app/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_navigation_navContent_navItem_navItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts": (
  /*!************************************************************************************!*\
    !*** ./src/app/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
    \************************************************************************************/
  /*! exports provided: NavItemComponent */
  /***/
  function _src_app_layout_admin_navigation_navContent_navItem_navItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavItemComponent", function () {
      return NavItemComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/app-config */"./src/app/app-config.ts");
    /* harmony import */
    var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../navigation */"./src/app/layout/admin/navigation/navigation.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    var NavItemComponent = /*#__PURE__*/function () {
      function NavItemComponent(location) {
        _classCallCheck(this, NavItemComponent);
        this.location = location;
        this.nextConfig = src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["DefaultConfig"].config;
        this.themeLayout = this.nextConfig['layout'];
      }
      return _createClass(NavItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeOtherMenu",
        value: function closeOtherMenu(event) {
          var _this13 = this;
          if (this.nextConfig['layout'] === 'vertical') {
            var ele = event.target;
            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;
              var sections = document.querySelectorAll('.pcoded-hasmenu');
              for (var i = 0; i < sections.length; i++) {
                sections[i].classList.remove('active');
                sections[i].classList.remove('pcoded-trigger');
              }
              if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('pcoded-trigger');
                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('pcoded-trigger');
                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('pcoded-trigger');
                last_parent.classList.add('active');
              }
            }
            if (document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
            }
          } else {
            setTimeout(function () {
              var sections = document.querySelectorAll('.pcoded-hasmenu');
              for (var _i = 0; _i < sections.length; _i++) {
                sections[_i].classList.remove('active');
                sections[_i].classList.remove('pcoded-trigger');
              }
              var current_url = _this13.location.path();
              if (_this13.location['_baseHref']) {
                current_url = _this13.location['_baseHref'] + _this13.location.path();
              }
              var link = "a.nav-link[ href='" + current_url + "' ]";
              var ele = document.querySelector(link);
              if (ele !== null && ele !== undefined) {
                var _parent = ele.parentElement;
                var _up_parent = _parent.parentElement.parentElement;
                var _last_parent = _up_parent.parentElement;
                if (_parent.classList.contains('pcoded-hasmenu')) {
                  _parent.classList.add('active');
                } else if (_up_parent.classList.contains('pcoded-hasmenu')) {
                  _up_parent.classList.add('active');
                } else if (_last_parent.classList.contains('pcoded-hasmenu')) {
                  _last_parent.classList.add('active');
                }
              }
            }, 500);
          }
        }
      }]);
    }();
    NavItemComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_3__["NavigationItem"])], NavItemComponent.prototype, "item", void 0);
    NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./nav-item.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/nav-content/nav-item/nav-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./nav-item.component.scss */"./src/app/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])], NavItemComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/navigation.component.scss": (
  /*!*******************************************************************!*\
    !*** ./src/app/layout/admin/navigation/navigation.component.scss ***!
    \*******************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_admin_navigation_navigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/navigation.component.ts": (
  /*!*****************************************************************!*\
    !*** ./src/app/layout/admin/navigation/navigation.component.ts ***!
    \*****************************************************************/
  /*! exports provided: NavigationComponent */
  /***/
  function _src_app_layout_admin_navigation_navigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/app-config */"./src/app/app-config.ts");
    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
        this.NavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextConfig = src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["DefaultConfig"].config;
        this.windowWidth = window.innerWidth;
      }
      return _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navMobCollapse",
        value: function navMobCollapse() {
          if (this.windowWidth < 992) {
            this.NavMobCollapse.emit();
          }
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NavigationComponent.prototype, "NavMobCollapse", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./navigation.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/navigation/navigation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./navigation.component.scss */"./src/app/layout/admin/navigation/navigation.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavigationComponent);

    /***/
  }),
  /***/"./src/app/layout/admin/navigation/navigation.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/layout/admin/navigation/navigation.ts ***!
    \*******************************************************/
  /*! exports provided: NavigationItem */
  /***/
  function _src_app_layout_admin_navigation_navigationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavigationItem", function () {
      return NavigationItem;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/_services/oauth.service */"./src/app/_services/oauth.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var Participants = [{
      id: 3,
      title: 'MENU.student_profile',
      type: 'item',
      url: '/student-profile',
      classes: 'nav-item',
      icon: 'icofont icofont-user-alt-2'
    }, {
      id: 2,
      title: 'MENU.registration_data',
      type: 'collapse',
      classes: 'nav-item',
      icon: 'icofont icofont-prescription',
      children: [{
        id: 'new-registration',
        title: 'MENU.new_registration',
        type: 'item',
        url: '/new-registration',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: [{
          id: 'form-payment',
          title: 'MENU.form-payment',
          type: 'item',
          url: '/registration/form-payment',
          external: false,
          classes: 'nav-item',
          breadcrumbs: false,
          hidden: true
        }]
      }, {
        id: 'registration-history',
        title: 'MENU.registration_history',
        type: 'item',
        url: '/registration-history',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true
      }, {
        id: 'registration-report',
        title: 'MENU.registration_report',
        type: 'item',
        url: '/registration-report',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true
      }]
    }, {
      id: 'questionnaire-data-participant',
      title: 'MENU.questionnaire-data-participant',
      type: 'item',
      url: '/questionnaire-data-participant',
      classes: 'nav-item',
      hidden: true,
      breadcrumbs: true
    }];
    var NewStudent = [{
      id: 11,
      title: 'MENU.new-student-data',
      type: 'item',
      url: '/new-student-registration',
      classes: 'nav-item',
      icon: 'icofont icofont-hat',
      hidden: false,
      breadcrumbs: true,
      children: [{
        id: 'new-student-registration-detail',
        external: false,
        title: 'MENU.new-student-detail',
        type: 'item',
        url: '/new-student-registration/new-student-registration-detail',
        classes: 'nav-item',
        breadcrumbs: false,
        hidden: true
      }]
    }];
    var Admins = [{
      id: 'selection-data',
      title: 'MENU.add-selection-data',
      type: 'item',
      url: '/adm-ms-selection-data/selection-data',
      external: false,
      classes: 'nav-item',
      hidden: true
    }, {
      id: 5,
      title: 'MENU.manage-selection-data',
      type: 'collapse',
      classes: 'nav-item',
      icon: 'icofont icofont-connection',
      children: [{
        id: 'adm-ms-selection-data',
        title: 'MENU.selection-data',
        type: 'item',
        url: '/adm-ms-selection-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: [{
          id: 'selection-data',
          external: false,
          title: 'MENU.selection-data',
          type: 'item',
          url: '/adm-ms-selection-data/selection-data',
          classes: 'nav-item',
          breadcrumbs: false,
          hidden: true
        }]
      }, {
        id: 'adm-ms-selection-schedule-data',
        title: 'MENU.selection-schedule',
        type: 'item',
        url: '/adm-ms-selection-schedule-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true
      }, {
        id: 'adm-ms-selection-intake-data',
        title: 'MENU.selection-intake',
        type: 'item',
        url: '/adm-ms-selection-intake-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true
      }, {
        id: 'adm-ms-passing-grade-data',
        title: 'MENU.passing-grade',
        type: 'item',
        url: '/adm-ms-passing-grade-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true
      }, {
        id: 'adm-ms-questionnaire-data',
        title: 'MENU.questionnaire-data',
        type: 'item',
        url: '/adm-ms-questionnaire-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: [{
          id: 'questionnaire-data-step',
          title: 'MENU.questionnaire-data',
          type: 'item',
          url: '/adm-ms-questionnaire-data/questionnaire-data-step',
          external: false,
          classes: 'nav-item',
          breadcrumbs: false,
          hidden: true
        }]
      }]
    }];
    var AdminUniversity = [{
      id: 8,
      title: 'MENU.manage-participant-data',
      type: 'collapse',
      classes: 'nav-item',
      icon: 'icofont icofont-users-alt-2',
      children: []
    }, {
      id: 9,
      title: 'MENU.manage-master-data',
      type: 'collapse',
      classes: 'nav-item',
      icon: 'icofont icofont-users-alt-2',
      children: [{
        id: 'adm-mr-new-student-data',
        title: 'MENU.manage-master-mapping',
        type: 'collapse',
        classes: 'nav-item',
        icon: 'icofont icofont-site-map',
        children: [{
          id: 'adm-mr-new-student-data',
          title: 'MENU.mapping-doc-kategory',
          type: 'item',
          url: '/adm-map-prodi-category-document',
          classes: 'nav-item',
          hidden: false,
          breadcrumbs: true
        }]
      }, {
        id: 'adm-mr-new-student-data',
        title: 'MENU.master-documents',
        type: 'item',
        url: '/adm-master-document',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: false
      }, {
        id: 'adm-mr-new-student-data',
        title: 'MENU.master-selection-category',
        type: 'item',
        url: '/adm-master-selection-category',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: false
      }, {
        id: 'adm-mr-new-student-data',
        title: 'MENU.master-type-examp',
        type: 'item',
        url: '/adm-master-type-examp',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: false
      }, {
        id: 'adm-mr-new-student-data',
        title: 'MENU.master-form-selection',
        type: 'item',
        url: '/adm-master-form-category',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: false
      }, {
        id: 'adm-mr-new-student-data',
        title: 'MENU.master-stundent-interes',
        type: 'item',
        url: '/adm-master-student-interes',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: false
      }]
    }];
    var AdminNewStudent = [{
      id: 12,
      title: 'MENU.manage-new-student-data',
      type: 'collapse',
      classes: 'nav-item',
      icon: 'icofont icofont-social-slidshare',
      children: [{
        id: 'adm-mr-new-student-data',
        title: 'MENU.document-new-student',
        type: 'item',
        url: '/adm-mr-new-student-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: []
      }, {
        id: 'adm-mr-verification-document-data',
        title: 'MENU.verification-document',
        type: 'item',
        url: '/adm-mr-verification-document-data',
        classes: 'nav-item',
        hidden: false,
        breadcrumbs: true,
        children: []
      }]
    }];
    var NavigationItems = [{
      id: 0,
      title: 'Menu',
      type: 'group',
      icon: 'ti-home',
      children: [{
        id: 'home',
        title: 'HOME.dashboard',
        type: 'item',
        url: '/home',
        classes: 'nav-item',
        icon: 'ti-home'
      }]
    }];
    var participants = {
      id: 'adm-mp-participant-data',
      title: 'MENU.participant-data',
      type: 'item',
      url: '/adm-mp-participant-data',
      classes: 'nav-item',
      hidden: false,
      breadcrumbs: true,
      children: [{
        id: 'participant-data-detail',
        title: 'MENU.participant-data-detail',
        type: 'item',
        url: '/adm-mp-participant-data/participant-data-detail',
        external: false,
        classes: 'nav-item',
        breadcrumbs: false,
        hidden: true
      }]
    };
    var pembayaran = {
      id: 'adm-mp-payment-data',
      title: 'MENU.payment-data',
      type: 'item',
      url: '/adm-mp-payment-data',
      classes: 'nav-item',
      hidden: false,
      breadcrumbs: true
    };
    var Dashboard = [{
      id: 4,
      title: 'MENU.dashboard',
      type: 'item',
      url: '/adm-dashboard',
      classes: 'nav-item',
      icon: 'icofont icofont-chart-bar-graph'
    }];
    var dokumen = {
      id: 'adm-mp-document-data',
      title: 'MENU.document-data',
      type: 'item',
      url: '/adm-mp-document-data',
      classes: 'nav-item',
      hidden: false,
      breadcrumbs: true,
      children: [{
        id: 'document-data-detail',
        title: 'MENU.document-data-detail',
        type: 'item',
        url: '/adm-mp-document-data/document-data-detail',
        external: false,
        classes: 'nav-item',
        breadcrumbs: false,
        hidden: true
      }]
    };
    var kelulusan = {
      id: 'adm-mp-approval-data',
      title: 'MENU.approval-data',
      type: 'item',
      url: '/adm-mp-approval-data',
      classes: 'nav-item',
      hidden: false,
      breadcrumbs: true
    };
    var persetujuan = {
      id: 'adm-mp-approval-participant-score-data',
      title: 'MENU.approval-participant-score-data',
      type: 'item',
      url: '/adm-mp-approval-participant-score-data',
      classes: 'nav-item',
      hidden: false,
      breadcrumbs: true
    };
    var score = {
      id: 'adm-mp-participant-score-data',
      title: 'MENU.participant-score-data',
      type: 'item',
      url: '/adm-mp-participant-score-data',
      classes: 'nav-item',
      hidden: false,
      breadcrumbs: true
    };
    var NavigationItem = /*#__PURE__*/function () {
      function NavigationItem(oauthService) {
        _classCallCheck(this, NavigationItem);
        this.oauthService = oauthService;
        this.items = [];
      }
      return _createClass(NavigationItem, [{
        key: "addOrReplace",
        value: function addOrReplace(item) {
          if (this.items.indexOf(item) === -1) {
            this.items.push(item);
            NavigationItems[0]['children'].push(item);
          }
        }
      }, {
        key: "addOrReplaceSubAdmin",
        value: function addOrReplaceSubAdmin(item) {
          if (this.items.indexOf(item) === -1) {
            this.items.push(item);
            AdminUniversity[0]['children'].push(item);
          }
        }
      }, {
        key: "get",
        value: function get() {
          if (this.oauthService.checkScope('admission-participant')) {
            Participants.forEach(function (participant) {
              this.addOrReplace(participant);
            }, this);
          }
          if (this.oauthService.checkScope('admission-new-participant')) {
            NewStudent.forEach(function (newStudent) {
              this.addOrReplace(newStudent);
            }, this);
          }
          if (this.oauthService.checkScope('admission-participant')) {
            Participants.forEach(function (participant) {
              this.addOrReplace(participant);
            }, this);
          }
          if (this.oauthService.checkScope('admission-admisi')) {
            Dashboard.forEach(function (dashboard) {
              this.addOrReplace(dashboard);
            }, this);
          }
          if (this.oauthService.checkScope('admission-admin')) {
            Dashboard.forEach(function (dashboard) {
              this.addOrReplace(dashboard);
            }, this);
          }
          if (this.oauthService.checkScope('admission-admisi' || false)) {
            Admins.forEach(function (admin) {
              this.addOrReplace(admin);
            }, this);
          }
          if (this.oauthService.checkScope('admission-admin')) {
            Admins.forEach(function (admin) {
              this.addOrReplace(admin);
            }, this);
          }
          if (this.oauthService.checkScope('admission-admisi')) {
            AdminUniversity.forEach(function (adminUniversity) {
              this.addOrReplace(adminUniversity);
              this.addOrReplaceSubAdmin(participants);
              this.addOrReplaceSubAdmin(dokumen);
              this.addOrReplaceSubAdmin(pembayaran);
            }, this);
          }
          if (this.oauthService.checkScope('admission-admin')) {
            AdminUniversity.forEach(function (adminUniversity) {
              this.addOrReplace(adminUniversity);
              this.addOrReplaceSubAdmin(participants);
              this.addOrReplaceSubAdmin(dokumen);
              this.addOrReplaceSubAdmin(pembayaran);
              this.addOrReplaceSubAdmin(persetujuan);
              this.addOrReplaceSubAdmin(kelulusan);
            }, this);
          }
          if (this.oauthService.checkScope('admission-admin')) {
            AdminNewStudent.forEach(function (adminNewstudent) {
              this.addOrReplace(adminNewstudent);
            }, this);
          }
          if (this.oauthService.checkScope('admission-admin-participant')) {
            AdminUniversity.forEach(function (adminUniversity) {
              this.addOrReplace(adminUniversity);
              this.addOrReplaceSubAdmin(participants);
              this.addOrReplaceSubAdmin(dokumen);
              this.addOrReplaceSubAdmin(pembayaran);
            }, this);
          }
          if (this.oauthService.checkScope('admission-faculty')) {
            Dashboard.forEach(function (dashboard) {
              this.addOrReplace(dashboard);
            }, this);
          }
          if (this.oauthService.checkScope('admission-faculty')) {
            AdminUniversity.forEach(function (adminUniversity) {
              this.addOrReplace(adminUniversity);
              this.addOrReplaceSubAdmin(participants);
              this.addOrReplaceSubAdmin(dokumen);
              this.addOrReplaceSubAdmin(score);
              this.addOrReplaceSubAdmin(kelulusan);
            }, this);
          }
          if (this.oauthService.checkScope('admission-university')) {
            Dashboard.forEach(function (dashboard) {
              this.addOrReplace(dashboard);
            }, this);
          }
          if (this.oauthService.checkScope('admission-university')) {
            AdminUniversity.forEach(function (adminUniversity) {
              this.addOrReplace(adminUniversity);
              this.addOrReplaceSubAdmin(participants);
              this.addOrReplaceSubAdmin(dokumen);
              this.addOrReplaceSubAdmin(persetujuan);
              this.addOrReplaceSubAdmin(kelulusan);
            }, this);
          }
          if (this.oauthService.checkScope('admission-university')) {
            AdminNewStudent.forEach(function (adminNewstudent) {
              this.addOrReplace(adminNewstudent);
            }, this);
          }
          return NavigationItems;
        }
      }]);
    }();
    NavigationItem.ctorParameters = function () {
      return [{
        type: src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OauthService"]
      }];
    };
    NavigationItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_oauth_service__WEBPACK_IMPORTED_MODULE_1__["OauthService"]])], NavigationItem);

    /***/
  }),
  /***/"./src/app/layout/auth/auth.component.scss": (
  /*!*************************************************!*\
    !*** ./src/app/layout/auth/auth.component.scss ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_layout_auth_authComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  }),
  /***/"./src/app/layout/auth/auth.component.ts": (
  /*!***********************************************!*\
    !*** ./src/app/layout/auth/auth.component.ts ***!
    \***********************************************/
  /*! exports provided: AuthComponent */
  /***/
  function _src_app_layout_auth_authComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent() {
        _classCallCheck(this, AuthComponent);
      }
      return _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./auth.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/auth/auth.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./auth.component.scss */"./src/app/layout/auth/auth.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AuthComponent);

    /***/
  }),
  /***/"./src/app/shared/components/alert/alert.component.scss": (
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/alert/alert.component.scss ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_alert_alertComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/shared/components/alert/alert.component.ts": (
  /*!************************************************************!*\
    !*** ./src/app/shared/components/alert/alert.component.ts ***!
    \************************************************************/
  /*! exports provided: AlertComponent */
  /***/
  function _src_app_shared_components_alert_alertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AlertComponent = /*#__PURE__*/function () {
      function AlertComponent() {
        _classCallCheck(this, AlertComponent);
      }
      return _createClass(AlertComponent, [{
        key: "dismissAlert",
        value: function dismissAlert(element) {
          element.parentElement.removeChild(element);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AlertComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AlertComponent.prototype, "dismiss", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./alert.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/alert/alert.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./alert.component.scss */"./src/app/shared/components/alert/alert.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AlertComponent);

    /***/
  }),
  /***/"./src/app/shared/components/alert/alert.module.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/shared/components/alert/alert.module.ts ***!
    \*********************************************************/
  /*! exports provided: AlertModule */
  /***/
  function _src_app_shared_components_alert_alertModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
      return AlertModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./alert.component */"./src/app/shared/components/alert/alert.component.ts");
    var AlertModule = /*#__PURE__*/_createClass(function AlertModule() {
      _classCallCheck(this, AlertModule);
    });
    AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
      exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
    })], AlertModule);

    /***/
  }),
  /***/"./src/app/shared/components/breadcrumb/breadcrumb.component.scss": (
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.scss ***!
    \************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_breadcrumb_breadcrumbComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".not-active {\n  pointer-events: none;\n  cursor: default; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/shared/components/breadcrumb/breadcrumb.component.ts": (
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
    \**********************************************************************/
  /*! exports provided: BreadcrumbComponent */
  /***/
  function _src_app_shared_components_breadcrumb_breadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var src_app_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/layout/admin/navigation/navigation */"./src/app/layout/admin/navigation/navigation.ts");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var src_app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/app-config */"./src/app/app-config.ts");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! rxjs/add/operator/filter */"./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent(nav, broadcasterService, translateService, route, title) {
        var _this14 = this;
        _classCallCheck(this, BreadcrumbComponent);
        this.nav = nav;
        this.broadcasterService = broadcasterService;
        this.translateService = translateService;
        this.route = route;
        this.title = title;
        this.breadcrumbList = [];
        this.navigationList = [];
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translateService.setDefaultLang(res.lang);
          _this14.loadTitle();
        });
        broadcasterService.getMenuBroadcast$.subscribe(function (res) {
          setTimeout(function () {
            _this14.navigation = _this14.nav.get();
          }, 100);
        });
        this.type = 'theme2';
        this.setBreadcrumb();
        this.navigation = this.nav.get();
      }
      return _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadTitle();
        }
      }, {
        key: "loadTitle",
        value: function loadTitle() {
          var routerUrl;
          routerUrl = this.route.url;
          if (routerUrl && typeof routerUrl === 'string') {
            this.filterNavigation(routerUrl);
          }
        }
      }, {
        key: "setBreadcrumb",
        value: function setBreadcrumb() {
          var _this15 = this;
          var routerUrl;
          this.route.events.subscribe(function (router) {
            routerUrl = router.urlAfterRedirects;
            if (routerUrl && typeof routerUrl === 'string') {
              _this15.breadcrumbList.length = 0;
              var activeLink = router.url;
              _this15.filterNavigation(activeLink);
            }
          });
        }
      }, {
        key: "filterNavigation",
        value: function filterNavigation(activeLink) {
          var _this16 = this;
          var result = [];
          var title = 'Welcome';
          this.navigation.forEach(function (a) {
            if (a.type === 'item' && 'url' in a && a.url === activeLink) {
              result = [{
                url: 'url' in a ? a.url : false,
                title: a.title,
                breadcrumbs: 'breadcrumbs' in a ? a.breadcrumbs : true,
                type: a.type
              }];
              title = a.title;
            } else {
              if (a.type === 'group' && 'children' in a) {
                a.children.forEach(function (b) {
                  if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                    result = [{
                      url: 'url' in b ? b.url : false,
                      title: b.title,
                      breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                      type: b.type
                    }];
                    title = b.title;
                  } else {
                    if (b.type === 'collapse' && 'children' in b) {
                      b.children.forEach(function (c) {
                        if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                          result = [{
                            url: 'url' in b ? b.url : false,
                            title: b.title,
                            breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                            type: b.type
                          }, {
                            url: 'url' in c ? c.url : false,
                            title: c.title,
                            breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                            type: c.type
                          }];
                          title = c.title;
                        } else {
                          if (c.type === 'collapse' && 'children' in c) {
                            c.children.forEach(function (d) {
                              if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                result = [{
                                  url: 'url' in b ? b.url : false,
                                  title: b.title,
                                  breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                                  type: b.type
                                }, {
                                  url: 'url' in c ? c.url : false,
                                  title: c.title,
                                  breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                                  type: c.type
                                }, {
                                  url: 'url' in d ? d.url : false,
                                  title: d.title,
                                  breadcrumbs: 'breadcrumbs' in c ? d.breadcrumbs : true,
                                  type: d.type
                                }];
                                title = d.title;
                              }
                            });
                          }
                        }
                      });
                    }
                  }
                });
              }
            }
          });
          this.navigationList = result;
          this.translateService.get(title).subscribe(function (text) {
            _this16.title.setTitle(text + ' | ' + src_app_app_config__WEBPACK_IMPORTED_MODULE_5__["DefaultConfig"].Application.appName);
          });
        }
      }]);
    }();
    BreadcrumbComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__["NavigationItem"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__["BroadcasterService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], BreadcrumbComponent.prototype, "type", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-breadcrumb',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./breadcrumb.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./breadcrumb.component.scss */"./src/app/shared/components/breadcrumb/breadcrumb.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__["NavigationItem"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__["BroadcasterService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])], BreadcrumbComponent);

    /***/
  }),
  /***/"./src/app/shared/components/card/card.component.scss": (
  /*!************************************************************!*\
    !*** ./src/app/shared/components/card/card.component.scss ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_card_cardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".card.full-card {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important; }\n\n.logo.situ-main.rector {\n  width: 85px;\n  position: absolute;\n  bottom: -1px;\n  left: 15px; }\n\na.collapse-expand {\n  color: #888888;\n  top: 7px;\n  position: relative;\n  padding-right: 10px; }\n\n.spinner-infinite {\n  display: inline-block;\n  width: 3rem;\n  height: 3rem;\n  vertical-align: text-bottom;\n  margin: 0 auto; }\n\n.card .card-header.thin .card-header-right {\n  top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0UsY0FBYztFQUNkLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLmZ1bGwtY2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IGNhbGMoMTAwdncpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cblxuLmxvZ28uc2l0dS1tYWluLnJlY3RvciB7XG4gIHdpZHRoOiA4NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTFweDtcbiAgbGVmdDogMTVweDtcbn1cblxuYS5jb2xsYXBzZS1leHBhbmQge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgdG9wOiA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnNwaW5uZXItaW5maW5pdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYXJkIC5jYXJkLWhlYWRlci50aGluIC5jYXJkLWhlYWRlci1yaWdodCB7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/shared/components/card/card.component.ts": (
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/card/card.component.ts ***!
    \**********************************************************/
  /*! exports provided: CardComponent */
  /***/
  function _src_app_shared_components_card_cardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var css_animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! css-animator */"./node_modules/css-animator/index.js");
    /* harmony import */
    var css_animator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    var CardComponent = /*#__PURE__*/function () {
      function CardComponent(broadcasterService, translateService, animationService, config) {
        _classCallCheck(this, CardComponent);
        config.placement = 'bottom-right';
        this.customHeader = false;
        this.options = true;
        this.hidHeader = false;
        this.isCardFooter = false;
        this.cardTitle = '';
        this.isCollapseMenu = false;
        this.animator = animationService.builder();
        this.animators = animationService.builder();
        this.animator.useVisibility = true;
        this.fullIcon = 'icon-maximize';
        this.isAnimating = false;
        this.collapsedCard = 'expanded';
        this.collapsedIcon = 'icofont icofont-rounded-up';
        this.loading = false;
        this.loadCard = false;
        this.cardRemove = 'open';
        this.lang = localStorage.getItem('lang');
        translateService.setDefaultLang(localStorage.getItem('lang'));
        broadcasterService.changeLangBroadcast$.subscribe(function (res) {
          translateService.setDefaultLang(res.lang);
        });
      }
      return _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isCollapsedCard) {
            this.collapsedCard = 'collapsed';
            this.collapsedIcon = 'icofont icofont-rounded-down';
          }
          if (this.hidHeader) {
            this.options = false;
          }
          if (!this.options || this.hidHeader || this.customHeader) {
            this.collapsedCard = 'false';
          }
        }
      }, {
        key: "loadingCard",
        value: function loadingCard(param) {
          if (param) {
            this.loadCard = true;
            this.cardClass = 'card-load';
          } else {
            this.cardClass = 'expanded';
            this.loadCard = false;
          }
        }
      }, {
        key: "fullCardToggle",
        value: function fullCardToggle(element, animation, status) {
          var _this17 = this;
          animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
          this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize';
          // const duration = this.cardClass === 'full-card' ? 300 : 600;
          this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';
          if (status) {
            this.animation = animation;
          }
          this.isAnimating = true;
          this.animators.setType(this.animation).setDuration(500).setDirection('alternate').setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)').animate(element).then(function () {
            _this17.isAnimating = false;
          })["catch"](function () {
            _this17.isAnimating = false;
          });
          setTimeout(function () {
            _this17.cardClass = animation === 'zoomOut' ? '' : _this17.cardClass;
            if (_this17.cardClass === 'full-card') {
              document.querySelector('body').style.overflow = 'hidden';
            } else {
              document.querySelector('body').removeAttribute('style');
            }
          }, 500);
        }
      }, {
        key: "collapsedCardToggle",
        value: function collapsedCardToggle() {
          this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
          this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
        }
      }, {
        key: "cardRefresh",
        value: function cardRefresh() {
          var _this18 = this;
          this.loadCard = true;
          this.cardClass = 'card-load';
          setTimeout(function () {
            _this18.loadCard = false;
            _this18.cardClass = 'expanded';
          }, 3000);
        }
      }, {
        key: "cardRemoveAction",
        value: function cardRemoveAction() {
          this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
        }
      }]);
    }();
    CardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__["BroadcasterService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: css_animator__WEBPACK_IMPORTED_MODULE_3__["AnimationService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CardComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CardComponent.prototype, "cardTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CardComponent.prototype, "cardClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CardComponent.prototype, "addClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CardComponent.prototype, "blockClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CardComponent.prototype, "headerClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CardComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CardComponent.prototype, "hidHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CardComponent.prototype, "customHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CardComponent.prototype, "cardCaption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CardComponent.prototype, "captionClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CardComponent.prototype, "isCardFooter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CardComponent.prototype, "footerClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CardComponent.prototype, "isCollapseMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CardComponent.prototype, "isCollapsedCard", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./card.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/card/card.component.html"))["default"],
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('collapsedCard', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        overflow: 'hidden',
        height: '0px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        overflow: 'hidden',
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"]
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardRemove', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        display: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./card.component.scss */"./src/app/shared/components/card/card.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_2__["BroadcasterService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], css_animator__WEBPACK_IMPORTED_MODULE_3__["AnimationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]])], CardComponent);

    /***/
  }),
  /***/"./src/app/shared/components/card/card.module.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/shared/components/card/card.module.ts ***!
    \*******************************************************/
  /*! exports provided: CardModule */
  /***/
  function _src_app_shared_components_card_cardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return CardModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./card.component */"./src/app/shared/components/card/card.component.ts");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var css_animator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! css-animator */"./node_modules/css-animator/index.js");
    /* harmony import */
    var css_animator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_5__);
    var CardModule = /*#__PURE__*/_createClass(function CardModule() {
      _classCallCheck(this, CardModule);
    });
    CardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimatorModule"]],
      declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      providers: [css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]]
    })], CardModule);

    /***/
  }),
  /***/"./src/app/shared/components/chart/apex-chart/apex-chart.component.scss": (
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/chart/apex-chart/apex-chart.component.scss ***!
    \******************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_chart_apexChart_apexChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0L2FwZXgtY2hhcnQvYXBleC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  }),
  /***/"./src/app/shared/components/chart/apex-chart/apex-chart.component.ts": (
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/chart/apex-chart/apex-chart.component.ts ***!
    \****************************************************************************/
  /*! exports provided: ApexChartComponent */
  /***/
  function _src_app_shared_components_chart_apexChart_apexChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function () {
      return ApexChartComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! apexcharts/dist/apexcharts.common.js */"./node_modules/apexcharts/dist/apexcharts.common.js");
    /* harmony import */
    var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./apex-chart.service */"./src/app/shared/components/chart/apex-chart/apex-chart.service.ts");
    var ApexChartComponent = /*#__PURE__*/function () {
      function ApexChartComponent(apexEvent) {
        _classCallCheck(this, ApexChartComponent);
        this.apexEvent = apexEvent;
      }
      return _createClass(ApexChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;
          setTimeout(function () {
            _this19.chart = new apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default.a(document.querySelector('#' + _this19.chartID), _this19.chartConfig);
            _this19.chart.render();
          });
          this.apexEvent.changeTimeRange.subscribe(function () {
            if (_this19.xAxis) {
              _this19.chart.updateOptions({
                xaxis: _this19.xAxis
              });
            }
          });
          this.apexEvent.changeSeriesData.subscribe(function () {
            if (_this19.newData) {
              _this19.chart.updateSeries([{
                data: _this19.newData
              }]);
            }
          });
        }
      }]);
    }();
    ApexChartComponent.ctorParameters = function () {
      return [{
        type: _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ApexChartComponent.prototype, "chartID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ApexChartComponent.prototype, "chartConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ApexChartComponent.prototype, "xAxis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ApexChartComponent.prototype, "newData", void 0);
    ApexChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-apex-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./apex-chart.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chart/apex-chart/apex-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./apex-chart.component.scss */"./src/app/shared/components/chart/apex-chart/apex-chart.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"]])], ApexChartComponent);

    /***/
  }),
  /***/"./src/app/shared/components/chart/apex-chart/apex-chart.service.ts": (
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/chart/apex-chart/apex-chart.service.ts ***!
    \**************************************************************************/
  /*! exports provided: ApexChartService */
  /***/
  function _src_app_shared_components_chart_apexChart_apexChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ApexChartService", function () {
      return ApexChartService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ApexChartService = /*#__PURE__*/function () {
      function ApexChartService() {
        _classCallCheck(this, ApexChartService);
        this.changeTimeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeSeriesData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      return _createClass(ApexChartService, [{
        key: "eventChangeTimeRange",
        value: function eventChangeTimeRange() {
          this.changeTimeRange.emit();
        }
      }, {
        key: "eventChangeSeriesData",
        value: function eventChangeSeriesData() {
          this.changeSeriesData.emit();
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ApexChartService.prototype, "changeTimeRange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ApexChartService.prototype, "changeSeriesData", void 0);
    ApexChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ApexChartService);

    /***/
  }),
  /***/"./src/app/shared/components/data-table/data-filter.pipe.ts": (
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/data-table/data-filter.pipe.ts ***!
    \******************************************************************/
  /*! exports provided: DataFilterPipe */
  /***/
  function _src_app_shared_components_dataTable_dataFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function () {
      return DataFilterPipe;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! lodash */"./node_modules/lodash/lodash.js");
    /* harmony import */
    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var DataFilterPipe = /*#__PURE__*/function () {
      function DataFilterPipe() {
        _classCallCheck(this, DataFilterPipe);
      }
      return _createClass(DataFilterPipe, [{
        key: "transform",
        value: function transform(array, query) {
          if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](array, function (row) {
              return row.name.indexOf(query) > -1;
            });
          }
          return array;
        }
      }]);
    }();
    DataFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
      name: 'dataFilter'
    })], DataFilterPipe);

    /***/
  }),
  /***/"./src/app/shared/components/filter-container/filter-container.component.scss": (
  /*!************************************************************************************!*\
    !*** ./src/app/shared/components/filter-container/filter-container.component.scss ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_filterContainer_filterContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".card-load {\n  position: relative;\n  overflow: hidden; }\n  .card-load .card-loader {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.7);\n    z-index: 999; }\n  .card-load .card-loader .spinner-infinite {\n      width: 4rem;\n      height: 4rem; }\n  .card-load .card-loader i {\n      margin: 0 auto;\n      color: #000000;\n      font-size: 24px;\n      align-items: center;\n      display: flex; }\n  .filter-case div[class*=\"col-\"] {\n  padding-left: 2.5px;\n  padding-right: 2.5px; }\n  .filter-case .filter-icon {\n  margin: 6px;\n  color: #c1c1c1 !important;\n  border-right: 1px solid #ddd; }\n  .filter-case .filter-icon span {\n    font-size: 13px; }\n  @media (max-width: 768px) {\n  .filter-case .filter-icon {\n    border: none;\n    text-align: center; }\n  .filter-case div {\n    padding: 0px; }\n    .filter-case div .filter, .filter-case div .btn {\n      margin-top: 5px; } }\n  @media (min-width: 768px) {\n  .col-filter-header {\n    width: 75px; } }\n  @media (max-width: 768px) {\n  .col-filter-header {\n    margin: 0 auto; } }\n  body.able-pro-dark .border, body.able-pro-dark ng-select.filter > div {\n  border: 1px solid #000 !important; }\n  body.able-pro-dark .filter-case .filter-icon {\n  margin: 6px;\n  color: #000 !important;\n  border-right: 1px solid #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmlsdGVyLWNvbnRhaW5lci9maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBRmxCO0lBS0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxZQUFZLEVBQUE7RUFiaEI7TUFnQk0sV0FBVztNQUNYLFlBQVksRUFBQTtFQWpCbEI7TUFxQk0sY0FBYztNQUNkLGNBQWM7TUFDZCxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGFBQWEsRUFBQTtFQUtuQjtFQUVJLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTtFQUh4QjtFQU1JLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsNEJBQTRCLEVBQUE7RUFSaEM7SUFVTSxlQUFlLEVBQUE7RUFLckI7RUFDRTtJQUVJLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQUh0QjtJQU1JLFlBQVksRUFBQTtJQU5oQjtNQVFNLGVBQWUsRUFBQSxFQUNoQjtFQU1MO0VBREY7SUFFSSxXQUFXLEVBQUEsRUFLZDtFQUhDO0VBSkY7SUFLSSxjQUFjLEVBQUEsRUFFakI7RUFFRDtFQUVJLGlDQUFpQyxFQUFBO0VBRnJDO0VBTU0sV0FBVztFQUNYLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbHRlci1jb250YWluZXIvZmlsdGVyLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWxvYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmNhcmQtbG9hZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNyk7XG4gICAgei1pbmRleDogOTk5O1xuXG4gICAgLnNwaW5uZXItaW5maW5pdGUge1xuICAgICAgd2lkdGg6IDRyZW07XG4gICAgICBoZWlnaHQ6IDRyZW07XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG59XG5cbi5maWx0ZXItY2FzZSB7XG4gIGRpdltjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNXB4O1xuICB9XG4gIC5maWx0ZXItaWNvbiB7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgY29sb3I6ICNjMWMxYzEgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZpbHRlci1jYXNlIHtcbiAgICAuZmlsdGVyLWljb24ge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgLmZpbHRlciwgLmJ0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNvbC1maWx0ZXItaGVhZGVyIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDc1cHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuYm9keS5hYmxlLXByby1kYXJrIHtcbiAgLmJvcmRlciwgbmctc2VsZWN0LmZpbHRlciA+IGRpdiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xuICB9XG4gIC5maWx0ZXItY2FzZSB7XG4gICAgLmZpbHRlci1pY29uIHtcbiAgICAgIG1hcmdpbjogNnB4O1xuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XG4gICAgfVxuICB9XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/shared/components/filter-container/filter-container.component.ts": (
  /*!**********************************************************************************!*\
    !*** ./src/app/shared/components/filter-container/filter-container.component.ts ***!
    \**********************************************************************************/
  /*! exports provided: FilterContainerComponent */
  /***/
  function _src_app_shared_components_filterContainer_filterContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FilterContainerComponent", function () {
      return FilterContainerComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FilterContainerComponent = /*#__PURE__*/function () {
      function FilterContainerComponent() {
        _classCallCheck(this, FilterContainerComponent);
        this.loading = false;
      }
      return _createClass(FilterContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FilterContainerComponent.prototype, "loading", void 0);
    FilterContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filter-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./filter-container.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/filter-container/filter-container.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./filter-container.component.scss */"./src/app/shared/components/filter-container/filter-container.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FilterContainerComponent);

    /***/
  }),
  /***/"./src/app/shared/components/gallery/gallery.component.scss": (
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/gallery/gallery.component.scss ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_gallery_galleryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  }),
  /***/"./src/app/shared/components/gallery/gallery.component.ts": (
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/gallery/gallery.component.ts ***!
    \****************************************************************/
  /*! exports provided: GalleryComponent */
  /***/
  function _src_app_shared_components_gallery_galleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ngx-lightbox */"./node_modules/ngx-lightbox/index.js");
    /* harmony import */
    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__);
    var GalleryComponent = /*#__PURE__*/function () {
      function GalleryComponent(lightbox, lightboxEvent, lighboxConfig) {
        _classCallCheck(this, GalleryComponent);
        this.lightbox = lightbox;
        this.lightboxEvent = lightboxEvent;
        this.lighboxConfig = lighboxConfig;
        this.albums = this.albums ? this.albums : [];
        lighboxConfig.fadeDuration = 1;
      }
      return _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(index) {
          var _this20 = this;
          this.subscription = this.lightboxEvent.lightboxEvent$.subscribe(function (event) {
            return _this20._onReceivedEvent(event);
          });
          this.lightbox.open(this.albums, index, {
            wrapAround: true,
            showImageNumberLabel: true
          });
        }
      }, {
        key: "_onReceivedEvent",
        value: function _onReceivedEvent(event) {
          if (event.id === ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["LIGHTBOX_EVENT"].CLOSE) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();
    GalleryComponent.ctorParameters = function () {
      return [{
        type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["Lightbox"]
      }, {
        type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["LightboxEvent"]
      }, {
        type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["LightboxConfig"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], GalleryComponent.prototype, "albums", void 0);
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./gallery.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/gallery/gallery.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./gallery.component.scss */"./src/app/shared/components/gallery/gallery.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["Lightbox"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["LightboxEvent"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["LightboxConfig"]])], GalleryComponent);

    /***/
  }),
  /***/"./src/app/shared/components/index.ts": (
  /*!********************************************!*\
    !*** ./src/app/shared/components/index.ts ***!
    \********************************************/
  /*! exports provided: AlertModule, CardModule, ModalModule */
  /***/
  function _src_app_shared_components_indexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _alert_alert_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./alert/alert.module */"./src/app/shared/components/alert/alert.module.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
      return _alert_alert_module__WEBPACK_IMPORTED_MODULE_1__["AlertModule"];
    });

    /* harmony import */
    var _card_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./card/card.module */"./src/app/shared/components/card/card.module.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return _card_card_module__WEBPACK_IMPORTED_MODULE_2__["CardModule"];
    });

    /* harmony import */
    var _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./modal/modal.module */"./src/app/shared/components/modal/modal.module.ts");
    /* harmony reexport (safe) */
    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["ModalModule"];
    });

    // export * from './breadcrumb/breadcrumb.module';

    /***/
  }),
  /***/"./src/app/shared/components/modal/animation-modal/animation-modal.component.scss": (
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/components/modal/animation-modal/animation-modal.component.scss ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_modal_animationModal_animationModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".md-perspective {\n  height: 100%;\n  overflow: hidden; }\n  .md-perspective body {\n    height: 100%;\n    overflow: hidden;\n    perspective: 600px; }\n  .container {\n  min-height: 100%; }\n  .md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateX(-50%) translateY(-50%); }\n  .md-show {\n  visibility: visible; }\n  .md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1030;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.55);\n  transition: all 0.3s; }\n  .md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible; }\n  /* Content styles */\n  .md-content {\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto; }\n  .md-content h3 {\n    margin: 0;\n    padding: 0.4em;\n    text-align: center;\n    opacity: 0.8;\n    color: #fff;\n    border-radius: 3px 3px 0 0; }\n  .md-content > div {\n    padding: 15px 40px 30px;\n    margin: 0; }\n  .md-content > div p {\n      margin: 0;\n      padding: 10px 0;\n      line-height: 1.5; }\n  .md-content > div ul {\n      margin: 0;\n      padding: 0 0 30px 20px; }\n  .md-content > div ul li {\n        padding: 5px 0; }\n  .md-content button {\n    display: block;\n    margin: 0 auto;\n    font-size: 0.8em; }\n  /* Individual modal styles with animations/transitions */\n  /* Effect 1: Fade in and scale up */\n  .md-effect-1 .md-content {\n  transform: scale(0.7);\n  opacity: 0;\n  transition: all 0.3s; }\n  .md-show.md-effect-1 .md-content {\n  transform: scale(1);\n  opacity: 1; }\n  /* Effect 2: Slide from the right */\n  .md-effect-2 .md-content {\n  transform: translateX(20%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9); }\n  .md-show.md-effect-2 .md-content {\n  transform: translateX(0);\n  opacity: 1; }\n  /* Effect 3: Slide from the bottom */\n  .md-effect-3 .md-content {\n  transform: translateY(20%);\n  opacity: 0;\n  transition: all 0.3s; }\n  .md-show.md-effect-3 .md-content {\n  transform: translateY(0);\n  opacity: 1; }\n  /* Effect 4: Newspaper */\n  .md-effect-4 .md-content {\n  transform: scale(0) rotate(720deg);\n  opacity: 0; }\n  .md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  transition: all 0.5s; }\n  .md-show.md-effect-4 .md-content {\n  transform: scale(1) rotate(0deg);\n  opacity: 1; }\n  /* Effect 5: fall */\n  .md-effect-5.md-modal {\n  perspective: 1300px; }\n  .md-effect-5 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0; }\n  .md-show.md-effect-5 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1; }\n  /* Effect 6: side fall */\n  .md-effect-6.md-modal {\n  perspective: 1300px; }\n  .md-effect-6 .md-content {\n  transform-style: preserve-3d;\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0; }\n  .md-show.md-effect-6 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1; }\n  /* Effect 7:  slide and stick to top */\n  .md-effect-7 {\n  top: 0;\n  transform: translateX(-50%); }\n  .md-effect-7 .md-content {\n    transform: translateY(-200%);\n    transition: all .3s;\n    opacity: 0; }\n  .md-show.md-effect-7 .md-content {\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1; }\n  /* Effect 8: 3D flip horizontal */\n  .md-effect-8.md-modal {\n  perspective: 1300px; }\n  .md-effect-8 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateY(-70deg);\n  transition: all 0.3s;\n  opacity: 0; }\n  .md-show.md-effect-8 .md-content {\n  transform: rotateY(0deg);\n  opacity: 1; }\n  /* Effect 9: 3D flip vertical */\n  .md-effect-9.md-modal {\n  perspective: 1300px; }\n  .md-effect-9 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-70deg);\n  transition: all 0.3s;\n  opacity: 0; }\n  .md-show.md-effect-9 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1; }\n  /* Effect 10: 3D sign */\n  .md-effect-10.md-modal {\n  perspective: 1300px; }\n  .md-effect-10 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-60deg);\n  transform-origin: 50% 0;\n  opacity: 0;\n  transition: all 0.3s; }\n  .md-show.md-effect-10 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1; }\n  /* Effect 11: Super scaled */\n  .md-effect-11 .md-content {\n  transform: scale(2);\n  opacity: 0;\n  transition: all 0.3s; }\n  .md-show.md-effect-11 .md-content {\n  transform: scale(1);\n  opacity: 1; }\n  /* Effect 12:  Just me */\n  .md-effect-12 .md-content {\n  transform: scale(0.8);\n  opacity: 0;\n  transition: all 0.3s;\n  color: #fff;\n  background: transparent; }\n  .md-effect-12 .md-content h3 {\n    background: transparent; }\n  .md-show.md-effect-12 .md-content {\n  transform: scale(1);\n  opacity: 1; }\n  /* Effect 13: 3D slit */\n  .md-effect-13.md-modal {\n  perspective: 1300px; }\n  .md-effect-13 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0; }\n  .md-show.md-effect-13 .md-content {\n  -webkit-animation: slit .7s forwards ease-out;\n  animation: slit .7s forwards ease-out; }\n  @-webkit-keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n    opacity: .5;\n    -webkit-animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n    opacity: 1; } }\n  @keyframes slit {\n  50% {\n    transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  100% {\n    transform: translateZ(0) rotateY(0deg);\n    opacity: 1; } }\n  /* Effect 14:  3D Rotate from bottom */\n  .md-effect-14.md-modal {\n  perspective: 1300px; }\n  .md-effect-14 .md-content {\n  transform-style: preserve-3d;\n  transform: translateY(100%) rotateX(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s ease-out; }\n  .md-show.md-effect-14 .md-content {\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1; }\n  /* Effect 15:  3D Rotate in from left */\n  .md-effect-15.md-modal {\n  perspective: 1300px; }\n  .md-effect-15 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s; }\n  .md-show.md-effect-15 .md-content {\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1; }\n  /* Effect 16:  Blur */\n  body.modal-16 > nav, body.modal-16 > header, body.modal-16 > section {\n  -webkit-filter: blur(3px);\n  filter: blur(3px); }\n  .md-effect-16 .md-content {\n  transform: translateY(-5%);\n  opacity: 0; }\n  .md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  transition: all 0.3s; }\n  .md-show.md-effect-16 .md-content {\n  transform: translateY(0);\n  opacity: 1; }\n  /* Effect 17:  Slide in from bottom with perspective on container */\n  body.modal-17 > nav, body.modal-17 > section, body.modal-17 > .md-overlay {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s; }\n  .md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s; }\n  body.modal-17 > header {\n  height: 70px; }\n  body.modal-17 > nav {\n  overflow: hidden;\n  height: calc(100vh - 70px); }\n  body.modal-17 .pcoded-main-container {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d; }\n  body.modal-17 > .header-chat, body.modal-17 > .header-user-list {\n  display: none; }\n  body.modal-17 > nav, body.modal-17 > .md-overlay, body.modal-17 > section {\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d; }\n  .md-effect-17 .md-content {\n  opacity: 0;\n  transform: translateY(200%); }\n  .md-show.md-effect-17 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s 0.2s; }\n  /* Effect 18:  Slide from right with perspective on container */\n  body.modal-18 {\n  height: 100%;\n  overflow: hidden; }\n  .md-show.md-effect-18 ~ .md-overlay {\n  transition: all 0.5s; }\n  body.modal-18 > .header-chat, body.modal-18 > .header-user-list {\n  display: none; }\n  body.modal-18 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in; }\n  body.modal-18 > nav, body.modal-18 > header, body.modal-18 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in; }\n  @-webkit-keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(-200px); } }\n  @keyframes rotateRightSideFirst {\n  50% {\n    transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  100% {\n    transform: translateZ(-200px); } }\n  .md-effect-18 .md-content {\n  transform: translateX(200%);\n  opacity: 0; }\n  .md-show.md-effect-18 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s; }\n  .md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden; }\n  .md-show.md-effect-19 ~ .md-overlay {\n  transition: all 0.5s; }\n  /* Effect 19:  Slip in from the top with perspective on container */\n  body.modal-19 > .header-chat, body.modal-19 > .header-user-list {\n  display: none; }\n  body.modal-19 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in; }\n  body.modal-19 > nav, body.modal-19 > header, body.modal-19 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in; }\n  @-webkit-keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out; } }\n  @keyframes OpenTop {\n  50% {\n    transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; } }\n  .md-effect-19 .md-content {\n  transform: translateY(-200%);\n  opacity: 0; }\n  .md-show.md-effect-19 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s; }\n  @media screen and (max-width: 32em) {\n  body {\n    font-size: 75%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvYW5pbWF0aW9uLW1vZGFsL2FuaW1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUZsQjtJQUlJLFlBQVk7SUFDWixnQkFBZ0I7SUFFaEIsa0JBQWtCLEVBQUE7RUFJdEI7RUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQywyQkFBMkI7RUFFM0IsNENBQTRDLEVBQUE7RUFHOUM7RUFDRSxtQkFBbUIsRUFBQTtFQUdyQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixVQUFVO0VBQ1YsK0JBQStCO0VBRS9CLG9CQUFvQixFQUFBO0VBR3RCO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQixFQUFBO0VBR3JCLG1CQUFBO0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7RUFKaEI7SUFNSSxTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLDBCQUEwQixFQUFBO0VBWDlCO0lBY0ksdUJBQXVCO0lBQ3ZCLFNBQVMsRUFBQTtFQWZiO01BaUJNLFNBQVM7TUFDVCxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFuQnRCO01Bc0JNLFNBQVM7TUFDVCxzQkFBc0IsRUFBQTtFQXZCNUI7UUF5QlEsY0FBYyxFQUFBO0VBekJ0QjtJQThCSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQixFQUFBO0VBSXBCLHdEQUFBO0VBRUEsbUNBQUE7RUFFQTtFQUVFLHFCQUFxQjtFQUNyQixVQUFVO0VBRVYsb0JBQW9CLEVBQUE7RUFHdEI7RUFFRSxtQkFBbUI7RUFDbkIsVUFBVSxFQUFBO0VBR1osbUNBQUE7RUFFQTtFQUVFLDBCQUEwQjtFQUMxQixVQUFVO0VBRVYsc0RBQXNELEVBQUE7RUFHeEQ7RUFFRSx3QkFBd0I7RUFDeEIsVUFBVSxFQUFBO0VBR1osb0NBQUE7RUFFQTtFQUVFLDBCQUEwQjtFQUMxQixVQUFVO0VBRVYsb0JBQW9CLEVBQUE7RUFHdEI7RUFFRSx3QkFBd0I7RUFDeEIsVUFBVSxFQUFBO0VBR1osd0JBQUE7RUFFQTtFQUlFLGtDQUFrQztFQUNsQyxVQUFVLEVBQUE7RUFHWjtFQUdFLG9CQUFvQixFQUFBO0VBR3RCO0VBSUUsZ0NBQWdDO0VBQ2hDLFVBQVUsRUFBQTtFQUdaLG1CQUFBO0VBRUE7RUFJSSxtQkFBbUIsRUFBQTtFQUp2QjtFQVNJLDRCQUE0QjtFQUk1QiwyQ0FBMkM7RUFDM0MsVUFBVSxFQUFBO0VBSWQ7RUFHRSw0QkFBNEI7RUFJNUIsd0NBQXdDO0VBQ3hDLFVBQVUsRUFBQTtFQUdaLHdCQUFBO0VBRUE7RUFJSSxtQkFBbUIsRUFBQTtFQUp2QjtFQVNJLDRCQUE0QjtFQUk1Qix5REFBeUQ7RUFDekQsVUFBVSxFQUFBO0VBSWQ7RUFHRSw0QkFBNEI7RUFJNUIsbURBQW1EO0VBQ25ELFVBQVUsRUFBQTtFQUdaLHNDQUFBO0VBRUE7RUFDRSxNQUFNO0VBSU4sMkJBQTJCLEVBQUE7RUFMN0I7SUFVSSw0QkFBNEI7SUFHNUIsbUJBQW1CO0lBQ25CLFVBQVUsRUFBQTtFQUlkO0VBSUUseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixVQUFVLEVBQUE7RUFHWixpQ0FBQTtFQUVBO0VBSUksbUJBQW1CLEVBQUE7RUFKdkI7RUFTSSw0QkFBNEI7RUFJNUIsMEJBQTBCO0VBRzFCLG9CQUFvQjtFQUNwQixVQUFVLEVBQUE7RUFJZDtFQUlFLHdCQUF3QjtFQUN4QixVQUFVLEVBQUE7RUFHWiwrQkFBQTtFQUVBO0VBSUksbUJBQW1CLEVBQUE7RUFKdkI7RUFTSSw0QkFBNEI7RUFJNUIsMEJBQTBCO0VBRzFCLG9CQUFvQjtFQUNwQixVQUFVLEVBQUE7RUFJZDtFQUlFLHdCQUF3QjtFQUN4QixVQUFVLEVBQUE7RUFHWix1QkFBQTtFQUVBO0VBSUksbUJBQW1CLEVBQUE7RUFKdkI7RUFTSSw0QkFBNEI7RUFJNUIsMEJBQTBCO0VBRzFCLHVCQUF1QjtFQUN2QixVQUFVO0VBR1Ysb0JBQW9CLEVBQUE7RUFJeEI7RUFJRSx3QkFBd0I7RUFDeEIsVUFBVSxFQUFBO0VBR1osNEJBQUE7RUFFQTtFQUlFLG1CQUFtQjtFQUNuQixVQUFVO0VBR1Ysb0JBQW9CLEVBQUE7RUFHdEI7RUFJRSxtQkFBbUI7RUFDbkIsVUFBVSxFQUFBO0VBR1osd0JBQUE7RUFFQTtFQUlFLHFCQUFxQjtFQUNyQixVQUFVO0VBR1Ysb0JBQW9CO0VBQ3BCLFdBQVc7RUFJWCx1QkFBdUIsRUFBQTtFQWJ6QjtJQVdJLHVCQUF1QixFQUFBO0VBSzNCO0VBSUUsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTtFQUdaLHVCQUFBO0VBRUE7RUFJSSxtQkFBbUIsRUFBQTtFQUp2QjtFQVNJLDRCQUE0QjtFQUk1Qiw2Q0FBNkM7RUFDN0MsVUFBVSxFQUFBO0VBSWQ7RUFDRSw2Q0FBNkM7RUFFN0MscUNBQXFDLEVBQUE7RUFHdkM7RUFDRTtJQUNFLG9EQUFvRDtJQUNwRCxXQUFXO0lBQ1gsMkNBQTJDLEVBQUE7RUFHN0M7SUFDRSw4Q0FBOEM7SUFDOUMsVUFBVSxFQUFBLEVBQUE7RUFtQmQ7RUFDRTtJQUNFLDRDQUE0QztJQUM1QyxVQUFVO0lBQ1YsMENBQWtDO1lBQWxDLGtDQUFrQyxFQUFBO0VBR3BDO0lBQ0Usc0NBQXNDO0lBQ3RDLFVBQVUsRUFBQSxFQUFBO0VBS2Qsc0NBQUE7RUFFQTtFQUlJLG1CQUFtQixFQUFBO0VBSnZCO0VBU0ksNEJBQTRCO0VBSTVCLDBDQUEwQztFQUcxQyx3QkFBd0I7RUFDeEIsVUFBVTtFQUdWLDZCQUE2QixFQUFBO0VBSWpDO0VBSUUsdUNBQXVDO0VBQ3ZDLFVBQVUsRUFBQTtFQUdaLHVDQUFBO0VBRUE7RUFJSSxtQkFBbUIsRUFBQTtFQUp2QjtFQVNJLDRCQUE0QjtFQUk1Qiw0REFBNEQ7RUFHNUQsd0JBQXdCO0VBQ3hCLFVBQVU7RUFHVixvQkFBb0IsRUFBQTtFQUl4QjtFQUlFLHVEQUF1RDtFQUN2RCxVQUFVLEVBQUE7RUFHWixxQkFBQTtFQUVBO0VBRUkseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBO0VBSXJCO0VBRUUsMEJBQTBCO0VBQzFCLFVBQVUsRUFBQTtFQUdaO0VBRUUsb0JBQW9CLEVBQUE7RUFHdEI7RUFFRSx3QkFBd0I7RUFDeEIsVUFBVSxFQUFBO0VBR1osbUVBQUE7RUFFQTtFQUVJLFlBQVk7RUFDWixnQkFBZ0I7RUFHaEIsMEJBQTBCLEVBQUE7RUFJOUI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBR2hCLDBCQUEwQixFQUFBO0VBRzVCO0VBR00sWUFBWSxFQUFBO0VBSGxCO0VBTU0sZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFBO0VBUGhDO0VBV0ksZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUUxQix5QkFBeUI7RUFFekIsd0JBQXdCO0VBRXhCLDRCQUE0QixFQUFBO0VBbEJoQztFQXNCTSxhQUFhLEVBQUE7RUF0Qm5CO0VBNEJNLHlCQUF5QjtFQUV6Qix3QkFBd0I7RUFFeEIsNEJBQTRCLEVBQUE7RUFLbEM7RUFDRSxVQUFVO0VBRVYsMkJBQTJCLEVBQUE7RUFHN0I7RUFFRSx3QkFBd0I7RUFDeEIsVUFBVTtFQUdWLHlCQUF5QixFQUFBO0VBRzNCLCtEQUFBO0VBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFHbEI7RUFFRSxvQkFBb0IsRUFBQTtFQUd0QjtFQUdNLGFBQWEsRUFBQTtFQUhuQjtFQU9JLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyw2REFBNkQ7RUFDN0QsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixxREFBcUQsRUFBQTtFQWR6RDtFQWtCTSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0VBQ2hDLDZEQUE2RDtFQUM3RCw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLHFEQUFxRCxFQUFBO0VBSzNEO0VBQ0U7SUFDRSxrREFBa0Q7SUFDbEQsMkNBQTJDLEVBQUE7RUFHN0M7SUFDRSxxQ0FBcUMsRUFBQSxFQUFBO0VBS3pDO0VBQ0U7SUFDRSwwQ0FBMEM7SUFDMUMsMkNBQW1DO1lBQW5DLG1DQUFtQyxFQUFBO0VBR3JDO0lBQ0UsNkJBQTZCLEVBQUEsRUFBQTtFQUtqQztFQUVFLDJCQUEyQjtFQUMzQixVQUFVLEVBQUE7RUFHWjtFQUdJLHdCQUF3QjtFQUN4QixVQUFVO0VBRVYseUJBQXlCLEVBQUE7RUFON0I7RUFVTSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFYdEI7RUFnQk0sb0JBQW9CLEVBQUE7RUFLMUIsbUVBQUE7RUFFQTtFQUdNLGFBQWEsRUFBQTtFQUhuQjtFQU9JLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGtDQUFrQztFQUNsQyxnREFBZ0Q7RUFDaEQsaUNBQWlDO0VBQ2pDLCtCQUErQjtFQUMvQiw2Q0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQix3Q0FBd0MsRUFBQTtFQWpCNUM7RUFxQk0sb0NBQW9DO0VBQ3BDLGtDQUFrQztFQUNsQyxnREFBZ0Q7RUFDaEQsaUNBQWlDO0VBQ2pDLCtCQUErQjtFQUMvQiw2Q0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQix3Q0FBd0MsRUFBQTtFQUs5QztFQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLDJDQUEyQyxFQUFBLEVBQUE7RUFhL0M7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QiwyQ0FBbUM7WUFBbkMsbUNBQW1DLEVBQUEsRUFBQTtFQUt2QztFQUlFLDRCQUE0QjtFQUM1QixVQUFVLEVBQUE7RUFHWjtFQUlFLHdCQUF3QjtFQUN4QixVQUFVO0VBR1YseUJBQXlCLEVBQUE7RUFHM0I7RUFDRTtJQUNFLGNBQWMsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvYW5pbWF0aW9uLW1vZGFsL2FuaW1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZC1wZXJzcGVjdGl2ZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNjAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ubWQtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNjMwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogMjAwMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLm1kLXNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubWQtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMzA7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdyB+IC5tZC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLyogQ29udGVudCBzdHlsZXMgKi9cblxuLm1kLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMC40ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgfVxuICA+IGRpdiB7XG4gICAgcGFkZGluZzogMTVweCA0MHB4IDMwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG4gICAgdWwge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMCAwIDMwcHggMjBweDtcbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxufVxuXG4vKiBJbmRpdmlkdWFsIG1vZGFsIHN0eWxlcyB3aXRoIGFuaW1hdGlvbnMvdHJhbnNpdGlvbnMgKi9cblxuLyogRWZmZWN0IDE6IEZhZGUgaW4gYW5kIHNjYWxlIHVwICovXG5cbi5tZC1lZmZlY3QtMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDI6IFNsaWRlIGZyb20gdGhlIHJpZ2h0ICovXG5cbi5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNSwgMC41LCAwLjkpO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAzOiBTbGlkZSBmcm9tIHRoZSBib3R0b20gKi9cblxuLm1kLWVmZmVjdC0zIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA0OiBOZXdzcGFwZXIgKi9cblxuLm1kLWVmZmVjdC00IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCB+IC5tZC1vdmVybGF5LCAubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNTogZmFsbCAqL1xuXG4ubWQtZWZmZWN0LTUge1xuICAmLm1kLW1vZGFsIHtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIH1cbiAgLm1kLWNvbnRlbnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA2OiBzaWRlIGZhbGwgKi9cblxuLm1kLWVmZmVjdC02IHtcbiAgJi5tZC1tb2RhbCB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xuICB9XG4gIC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDc6ICBzbGlkZSBhbmQgc3RpY2sgdG8gdG9wICovXG5cbi5tZC1lZmZlY3QtNyB7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTcgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgODogM0QgZmxpcCBob3Jpem9udGFsICovXG5cbi5tZC1lZmZlY3QtOCB7XG4gICYubWQtbW9kYWwge1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgfVxuICAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDk6IDNEIGZsaXAgdmVydGljYWwgKi9cblxuLm1kLWVmZmVjdC05IHtcbiAgJi5tZC1tb2RhbCB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xuICB9XG4gIC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtOSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTA6IDNEIHNpZ24gKi9cblxuLm1kLWVmZmVjdC0xMCB7XG4gICYubWQtbW9kYWwge1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgfVxuICAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xMCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTE6IFN1cGVyIHNjYWxlZCAqL1xuXG4ubWQtZWZmZWN0LTExIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMik7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTExIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTI6ICBKdXN0IG1lICovXG5cbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGNvbG9yOiAjZmZmO1xuICBoMyB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xMiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDEzOiAzRCBzbGl0ICovXG5cbi5tZC1lZmZlY3QtMTMge1xuICAmLm1kLW1vZGFsIHtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIH1cbiAgLm1kLWNvbnRlbnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xMyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcbiAgLW1vei1hbmltYXRpb246IHNsaXQgLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IHNsaXQgLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpdCB7XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTtcbiAgICBvcGFjaXR5OiAuNTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cblxuQC1tb3ota2V5ZnJhbWVzIHNsaXQge1xuICA1MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5cbkBrZXlmcmFtZXMgc2xpdCB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5cbi8qIEVmZmVjdCAxNDogIDNEIFJvdGF0ZSBmcm9tIGJvdHRvbSAqL1xuXG4ubWQtZWZmZWN0LTE0IHtcbiAgJi5tZC1tb2RhbCB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xuICB9XG4gIC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICB9XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTU6ICAzRCBSb3RhdGUgaW4gZnJvbSBsZWZ0ICovXG5cbi5tZC1lZmZlY3QtMTUge1xuICAmLm1kLW1vZGFsIHtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIH1cbiAgLm1kLWNvbnRlbnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE1IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTY6ICBCbHVyICovXG5cbmJvZHkubW9kYWwtMTYgPiB7XG4gIG5hdiwgaGVhZGVyLCBzZWN0aW9uIHtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigzcHgpO1xuICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICB9XG59XG5cbi5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE2IH4gLmNvbnRhaW5lciwgLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTc6ICBTbGlkZSBpbiBmcm9tIGJvdHRvbSB3aXRoIHBlcnNwZWN0aXZlIG9uIGNvbnRhaW5lciAqL1xuXG5ib2R5Lm1vZGFsLTE3ID4ge1xuICBuYXYsIHNlY3Rpb24sIC5tZC1vdmVybGF5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICB9XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyB+IC5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuYm9keS5tb2RhbC0xNyB7XG4gID4ge1xuICAgIGhlYWRlciB7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgfVxuICAgIG5hdiB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgfVxuICB9XG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG4gID4ge1xuICAgIC5oZWFkZXItY2hhdCwgLmhlYWRlci11c2VyLWxpc3Qge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgPiB7XG4gICAgbmF2LCAubWQtb3ZlcmxheSwgc2VjdGlvbiB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIH1cbiAgfVxufVxuXG4ubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XG59XG5cbi8qIEVmZmVjdCAxODogIFNsaWRlIGZyb20gcmlnaHQgd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cblxuYm9keS5tb2RhbC0xOCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE4IH4gLm1kLW92ZXJsYXkge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuYm9keS5tb2RhbC0xOCB7XG4gID4ge1xuICAgIC5oZWFkZXItY2hhdCwgLmhlYWRlci11c2VyLWxpc3Qge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLnBjb2RlZC1tYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICBhbmltYXRpb246IHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbiAgfVxuICA+IHtcbiAgICBuYXYsIGhlYWRlciwgc2VjdGlvbiB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xuICAgICAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gICAgfVxuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcbiAgfVxufVxuXG5cbi5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdyB7XG4gICYubWQtZWZmZWN0LTE4IC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcbiAgfVxuICAmLm1kLWVmZmVjdC0xOSB+IHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5tZC1vdmVybGF5IHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgfVxuICB9XG59XG5cbi8qIEVmZmVjdCAxOTogIFNsaXAgaW4gZnJvbSB0aGUgdG9wIHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXG5cbmJvZHkubW9kYWwtMTkge1xuICA+IHtcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIC1tb3otYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIGFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gIH1cbiAgPiB7XG4gICAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbiAgICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgICAtbW96LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgICBhbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICAgIH1cbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgT3BlblRvcCB7XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cblxuXG5ALW1vei1rZXlmcmFtZXMgT3BlblRvcCB7XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIE9wZW5Ub3Age1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cblxuXG4ubWQtZWZmZWN0LTE5IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyZW0pIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gIH1cbn1cbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/shared/components/modal/animation-modal/animation-modal.component.ts": (
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/components/modal/animation-modal/animation-modal.component.ts ***!
    \**************************************************************************************/
  /*! exports provided: AnimationModalComponent */
  /***/
  function _src_app_shared_components_modal_animationModal_animationModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AnimationModalComponent", function () {
      return AnimationModalComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AnimationModalComponent = /*#__PURE__*/function () {
      function AnimationModalComponent() {
        _classCallCheck(this, AnimationModalComponent);
        this.backDrop = false;
      }
      return _createClass(AnimationModalComponent, [{
        key: "close",
        value: function close(event) {
          document.querySelector('#' + event).classList.remove('md-show');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AnimationModalComponent.prototype, "modalClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AnimationModalComponent.prototype, "contentClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AnimationModalComponent.prototype, "modalID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AnimationModalComponent.prototype, "backDrop", void 0);
    AnimationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-animation-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./animation-modal.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/animation-modal/animation-modal.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./animation-modal.component.scss */"./src/app/shared/components/modal/animation-modal/animation-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AnimationModalComponent);

    /***/
  }),
  /***/"./src/app/shared/components/modal/modal.module.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/shared/components/modal/modal.module.ts ***!
    \*********************************************************/
  /*! exports provided: ModalModule */
  /***/
  function _src_app_shared_components_modal_modalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return ModalModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./ui-modal/ui-modal.component */"./src/app/shared/components/modal/ui-modal/ui-modal.component.ts");
    /* harmony import */
    var _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./animation-modal/animation-modal.component */"./src/app/shared/components/modal/animation-modal/animation-modal.component.ts");
    var ModalModule = /*#__PURE__*/_createClass(function ModalModule() {
      _classCallCheck(this, ModalModule);
    });
    ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__["AnimationModalComponent"]],
      exports: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__["AnimationModalComponent"]]
    })], ModalModule);

    /***/
  }),
  /***/"./src/app/shared/components/modal/ui-modal/ui-modal.component.scss": (
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/modal/ui-modal/ui-modal.component.scss ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_modal_uiModal_uiModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.basic.fade {\n  opacity: 0;\n  transition: opacity .15s linear; }\n\n.basic.fade.in {\n    opacity: 1; }\n\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0); }\n\n.basic.modal.fade .modal-dialog {\n  transition: all .3s ease-out;\n  transform: translate(0, -25%); }\n\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px; }\n\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none; }\n\n.card-load {\n  position: relative;\n  overflow: hidden; }\n\n.card-load .card-loader {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.7);\n    z-index: 999; }\n\n.card-load .card-loader i {\n      margin: 0 auto;\n      color: #000000;\n      font-size: 24px;\n      align-items: center;\n      display: flex; }\n\n.card.full-card {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important; }\n\n.spinner-infinite {\n  display: inline-block;\n  width: 6rem;\n  height: 6rem;\n  vertical-align: text-bottom;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvdWktbW9kYWwvdWktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFBO0VBQ0EsaUNBQWlDO0VBQ2pDLFVBQVUsRUFBQTs7QUFaZDtFQWVJLFVBQVU7RUFHViwrQkFBK0IsRUFBQTs7QUFsQm5DO0lBb0JNLFVBQVUsRUFBQTs7QUFwQmhCO0VBNEJNLDBCQUEwQixFQUFBOztBQTVCaEM7RUFpQ00sNEJBQTRCO0VBSTVCLDZCQUE2QixFQUFBOztBQXJDbkM7RUF5Q0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBM0NmO0VBOENJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUF5QjtFQUN6QixpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRmxCO0lBS00sa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBDQUF5QztJQUN6QyxZQUFZLEVBQUE7O0FBYmxCO01BZ0JVLGNBQWM7TUFDZCxjQUFjO01BQ2QsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixhQUFhLEVBQUE7O0FBS3ZCO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL3VpLW1vZGFsL3VpLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2ljIHtcbiAgJi5tb2RhbCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTA1MDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gICYuZmFkZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuICAgICYuaW4ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgJi5tb2RhbC5mYWRlIHtcbiAgICAmLmluIC5tb2RhbC1kaWFsb2cge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgfVxuICAgIC5tb2RhbC1kaWFsb2cge1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICB9XG4gIH1cbiAgLmJhc2ljLWNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNnB4O1xuICAgIHJpZ2h0OiAxNnB4O1xuICB9XG4gIC5iYXNpYy1jbG9zZS1saWdodC1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zMXB4O1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG4uY2FyZC1sb2FkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5jYXJkLWxvYWRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LCAyNTYsIDI1NiwwLjcpO1xuICAgICAgei1pbmRleDogOTk5O1xuXG4gICAgICBpIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICB9XG59XG5cbi5jYXJkLmZ1bGwtY2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IGNhbGMoMTAwdncpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cblxuLnNwaW5uZXItaW5maW5pdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/shared/components/modal/ui-modal/ui-modal.component.ts": (
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/modal/ui-modal/ui-modal.component.ts ***!
    \************************************************************************/
  /*! exports provided: UiModalComponent */
  /***/
  function _src_app_shared_components_modal_uiModal_uiModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UiModalComponent", function () {
      return UiModalComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var UiModalComponent = /*#__PURE__*/function () {
      function UiModalComponent() {
        _classCallCheck(this, UiModalComponent);
        this.hideHeader = false;
        this.hideFooter = false;
        this.containerClick = true;
        this.loading = false;
        this.visible = false;
        this.visibleAnimate = false;
      }
      return _createClass(UiModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "show",
        value: function show() {
          var _this21 = this;
          this.visible = true;
          setTimeout(function () {
            return _this21.visibleAnimate = true;
          }, 100);
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this22 = this;
          this.visibleAnimate = false;
          setTimeout(function () {
            return _this22.visible = false;
          }, 300);
          document.querySelector('body').classList.remove('modal-open');
        }
      }, {
        key: "onContainerClicked",
        value: function onContainerClicked(event) {
          if (event.target.classList.contains('modal') && this.containerClick === true) {
            this.hide();
          }
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], UiModalComponent.prototype, "dialogClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UiModalComponent.prototype, "hideHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UiModalComponent.prototype, "hideFooter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UiModalComponent.prototype, "containerClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UiModalComponent.prototype, "loading", void 0);
    UiModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./ui-modal.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/ui-modal/ui-modal.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./ui-modal.component.scss */"./src/app/shared/components/modal/ui-modal/ui-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UiModalComponent);

    /***/
  }),
  /***/"./src/app/shared/components/no-data-found/no-data-found.component.scss": (
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/no-data-found/no-data-found.component.scss ***!
    \******************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_noDataFound_noDataFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Montserrat);\n.no-data\nh1, h2, h3, h4, h5, h6 {\n  color: #0a7ed6;\n  font-family: Ubuntu;\n  text-transform: capitalize;\n  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);\n  letter-spacing: 0px; }\n@media (max-width: 680px) {\n  svg.dita-float {\n    width: 130px;\n    -webkit-animation: float 5s ease-in-out infinite;\n            animation: float 5s ease-in-out infinite;\n    position: absolute;\n    top: -15px;\n    left: calc(50% - 140px);\n    z-index: 1; }\n  svg.text-no-data {\n    font: 5.5em 'Ubuntu';\n    width: auto;\n    margin: 0 auto;\n    left: 0px;\n    position: relative; }\n  .text-no-data {\n    width: 160px;\n    margin: 0 auto;\n    left: 50px;\n    position: relative; } }\n@media (min-width: 681px) {\n  svg.dita-float {\n    width: 130px;\n    -webkit-animation: float 5s ease-in-out infinite;\n            animation: float 5s ease-in-out infinite;\n    position: absolute;\n    top: -15px;\n    left: calc(50% - 160px);\n    z-index: 1; }\n  svg.text-no-data {\n    font: 5.5em 'Ubuntu';\n    width: auto;\n    margin: 0 auto;\n    left: 60px;\n    position: relative; }\n  .text-no-data {\n    width: 160px;\n    margin: 0 auto;\n    left: 30px;\n    position: relative; } }\n@-webkit-keyframes float {\n  0% {\n    transform: translatey(0px); }\n  50% {\n    transform: translatey(-20px); }\n  100% {\n    transform: translatey(0px); } }\n@keyframes float {\n  0% {\n    transform: translatey(0px); }\n  50% {\n    transform: translatey(-20px); }\n  100% {\n    transform: translatey(0px); } }\n@media (min-width: 992px) {\n  .middle-content {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%); } }\n.text-copy {\n  fill: none;\n  stroke: white;\n  stroke-dasharray: 6% 29%;\n  stroke-width: 2.5px;\n  stroke-dashoffset: 0%;\n  -webkit-animation: stroke-offset 8.5s infinite linear;\n          animation: stroke-offset 8.5s infinite linear; }\n.text-copy:nth-child(1) {\n  stroke: #e01a3f;\n  -webkit-animation-delay: -1;\n          animation-delay: -1; }\n.text-copy:nth-child(2) {\n  stroke: #a7a7a7;\n  -webkit-animation-delay: -2s;\n          animation-delay: -2s; }\n.text-copy:nth-child(3) {\n  stroke: #BD0034;\n  -webkit-animation-delay: -3s;\n          animation-delay: -3s; }\n.text-copy:nth-child(4) {\n  stroke: #ccc;\n  -webkit-animation-delay: -4s;\n          animation-delay: -4s; }\n.text-copy:nth-child(5) {\n  stroke: #e01a3f;\n  -webkit-animation-delay: -5s;\n          animation-delay: -5s; }\n@-webkit-keyframes stroke-offset {\n  100% {\n    stroke-dashoffset: -35%; } }\n@keyframes stroke-offset {\n  100% {\n    stroke-dashoffset: -35%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm8tZGF0YS1mb3VuZC9uby1kYXRhLWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFQSwrREFBWTtBQTdFWjs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQiwyQ0FBMkM7RUFDM0MsbUJBQW1CLEVBQUE7QUFHckI7RUFDRTtJQUNFLFlBQVk7SUFDWixnREFBd0M7WUFBeEMsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFVBQVUsRUFBQTtFQUVaO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQixFQUFBO0VBRXBCO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUEsRUFDbkI7QUFHSDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdEQUF3QztZQUF4Qyx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsVUFBVSxFQUFBO0VBRVo7SUFDRSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7SUFDVixrQkFBa0IsRUFBQSxFQUNuQjtBQUdIO0VBQ0M7SUFDQywwQkFBMEIsRUFBQTtFQUUzQjtJQUNDLDRCQUE0QixFQUFBO0VBRTdCO0lBQ0MsMEJBQTBCLEVBQUEsRUFBQTtBQVI1QjtFQUNDO0lBQ0MsMEJBQTBCLEVBQUE7RUFFM0I7SUFDQyw0QkFBNEIsRUFBQTtFQUU3QjtJQUNDLDBCQUEwQixFQUFBLEVBQUE7QUFJNUI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsMkJBQTJCLEVBQUEsRUFDNUI7QUFLSDtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIscURBQTZDO1VBQTdDLDZDQUE2QyxFQUFBO0FBRy9DO0VBQ0EsZUFBZTtFQUNmLDJCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtBQUduQjtFQUNBLGVBQWU7RUFDZiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUFHcEI7RUFDQSxlQUFlO0VBQ2YsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBO0FBR3BCO0VBQ0EsWUFBWTtFQUNaLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTtBQUdwQjtFQUNBLGVBQWU7RUFDZiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUFHcEI7RUFDQTtJQUFNLHVCQUF1QixFQUFBLEVBQUE7QUFEN0I7RUFDQTtJQUFNLHVCQUF1QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uby1kYXRhLWZvdW5kL25vLWRhdGEtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tZGF0YSBcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBjb2xvcjogIzBhN2VkNjtcbiAgZm9udC1mYW1pbHk6IFVidW50dTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xuICBzdmcuZGl0YS1mbG9hdCB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGFuaW1hdGlvbjogZmxvYXQgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE1cHg7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxNDBweCk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBzdmcudGV4dC1uby1kYXRhIHtcbiAgICBmb250OiA1LjVlbSAnVWJ1bnR1JztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBsZWZ0OiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC50ZXh0LW5vLWRhdGEge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBsZWZ0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjgxcHgpIHtcbiAgc3ZnLmRpdGEtZmxvYXQge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBhbmltYXRpb246IGZsb2F0IDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTYwcHgpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgc3ZnLnRleHQtbm8tZGF0YSB7XG4gICAgZm9udDogNS41ZW0gJ1VidW50dSc7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGVmdDogNjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnRleHQtbm8tZGF0YSB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmxvYXQge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XG5cdH1cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xuXHR9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubWlkZGxlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbn1cblxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQpO1xuXG4udGV4dC1jb3B5IHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiB3aGl0ZTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNiUgMjklO1xuICBzdHJva2Utd2lkdGg6IDIuNXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMCU7XG4gIGFuaW1hdGlvbjogc3Ryb2tlLW9mZnNldCA4LjVzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLnRleHQtY29weTpudGgtY2hpbGQoMSl7XG5zdHJva2U6ICNlMDFhM2Y7XG5hbmltYXRpb24tZGVsYXk6IC0xO1xufVxuXG4udGV4dC1jb3B5Om50aC1jaGlsZCgyKXtcbnN0cm9rZTogI2E3YTdhNztcbmFuaW1hdGlvbi1kZWxheTogLTJzO1xufVxuXG4udGV4dC1jb3B5Om50aC1jaGlsZCgzKXtcbnN0cm9rZTogI0JEMDAzNDtcbmFuaW1hdGlvbi1kZWxheTogLTNzO1xufVxuXG4udGV4dC1jb3B5Om50aC1jaGlsZCg0KXtcbnN0cm9rZTogI2NjYztcbmFuaW1hdGlvbi1kZWxheTogLTRzO1xufVxuXG4udGV4dC1jb3B5Om50aC1jaGlsZCg1KXtcbnN0cm9rZTogI2UwMWEzZjtcbmFuaW1hdGlvbi1kZWxheTogLTVzO1xufVxuXG5Aa2V5ZnJhbWVzIHN0cm9rZS1vZmZzZXR7XG4xMDAlIHtzdHJva2UtZGFzaG9mZnNldDogLTM1JTt9XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/shared/components/no-data-found/no-data-found.component.ts": (
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/no-data-found/no-data-found.component.ts ***!
    \****************************************************************************/
  /*! exports provided: NoDataFoundComponent */
  /***/
  function _src_app_shared_components_noDataFound_noDataFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NoDataFoundComponent", function () {
      return NoDataFoundComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var NoDataFoundComponent = /*#__PURE__*/function () {
      function NoDataFoundComponent() {
        _classCallCheck(this, NoDataFoundComponent);
      }
      return _createClass(NoDataFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], NoDataFoundComponent.prototype, "message", void 0);
    NoDataFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-no-data-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./no-data-found.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/no-data-found/no-data-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./no-data-found.component.scss */"./src/app/shared/components/no-data-found/no-data-found.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NoDataFoundComponent);

    /***/
  }),
  /***/"./src/app/shared/components/select/select-option.service.ts": (
  /*!*******************************************************************!*\
    !*** ./src/app/shared/components/select/select-option.service.ts ***!
    \*******************************************************************/
  /*! exports provided: SelectOptionService */
  /***/
  function _src_app_shared_components_select_selectOptionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SelectOptionService", function () {
      return SelectOptionService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    var SelectOptionService_1;

    // import {IOption} from 'ng-select';
    var SelectOptionService = SelectOptionService_1 = /*#__PURE__*/function () {
      function SelectOptionService() {
        _classCallCheck(this, SelectOptionService);
      }
      return _createClass(SelectOptionService, [{
        key: "cloneOptions",
        value: function cloneOptions(options) {
          return options.map(function (option) {
            return {
              value: option.value,
              label: option.label
            };
          });
        }
      }, {
        key: "getCharacters",
        value: function getCharacters() {
          return this.cloneOptions(SelectOptionService_1.PLAYER_ONE);
        }
      }, {
        key: "loadCharacters",
        value: function loadCharacters() {
          return this.loadOptions(SelectOptionService_1.PLAYER_ONE);
        }
      }, {
        key: "getCharactersWithDisabled",
        value: function getCharactersWithDisabled() {
          var characters = this.cloneOptions(SelectOptionService_1.PLAYER_ONE);
          characters[1].disabled = true;
          characters[4].disabled = true;
          return characters;
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return this.cloneOptions(SelectOptionService_1.COUNTRIES);
        }
      }, {
        key: "loadCountries",
        value: function loadCountries() {
          return this.loadOptions(SelectOptionService_1.COUNTRIES);
        }
      }, {
        key: "loadOptions",
        value: function loadOptions(options) {
          var _this23 = this;
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
            setTimeout(function () {
              obs.next(_this23.cloneOptions(options));
              obs.complete();
            }, 5000);
          });
        }
      }]);
    }();
    SelectOptionService.PLAYER_ONE = [{
      value: '0',
      label: 'Alabama'
    }, {
      value: '1',
      label: 'Wyoming'
    }, {
      value: '2',
      label: 'Coming'
    }, {
      value: '3',
      label: 'Henry Die'
    }, {
      value: '4',
      label: 'John Doe'
    }];
    SelectOptionService.COUNTRIES = [{
      value: 'ID',
      label: 'Indonesia'
    }, {
      value: 'US',
      label: 'United States'
    }];
    SelectOptionService = SelectOptionService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SelectOptionService);

    /***/
  }),
  /***/"./src/app/shared/components/spinner/spinkit-css/sk-line-material.scss": (
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/components/spinner/spinkit-css/sk-line-material.scss ***!
    \*****************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_spinner_spinkitCss_skLineMaterialScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%; }\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both; }\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    transform: scaleX(0); }\n  40% {\n    transform: scaleX(1); } }\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0); }\n  100% {\n    transform: scaleX(1); } }\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.6);\n  transition: background-color 2s ease-out; }\n\n.colored-parent, .colored > div {\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFLO0VBQ0wscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtRUFBbUU7RUFDbkUsMkRBQTJELEVBQUE7O0FBRy9EO0VBQ0k7SUFFSSxvQkFBb0IsRUFBQTtFQUV4QjtJQUVJLG9CQUFvQixFQUFBLEVBQUE7O0FBSTVCO0VBQ0k7SUFFSSxvQkFBb0IsRUFBQTtFQUV4QjtJQUVJLG9CQUFvQixFQUFBLEVBQUE7O0FBSTVCO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsd0NBQXdDLEVBQUE7O0FBRzVDO0VBQ0ksdUJBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1saW5lLW1hdGVyaWFsIHtcbiAgICB0b3A6IDAgIDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2stbGluZS1tYXRlcmlhbCAuc2stY2hpbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbiAgICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xuICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB9XG59XG5cbiNodHRwLWxvYWRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9hZGVyLWJnIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAycyBlYXNlLW91dDtcbn1cblxuLmNvbG9yZWQtcGFyZW50LCAuY29sb3JlZCA+IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuIl19 */";

    /***/
  }),
  /***/"./src/app/shared/components/spinner/spinkits.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/shared/components/spinner/spinkits.ts ***!
    \*******************************************************/
  /*! exports provided: Spinkit */
  /***/
  function _src_app_shared_components_spinner_spinkitsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Spinkit", function () {
      return Spinkit;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Spinkit = {
      skChasingDots: 'sk-chasing-dots',
      skCubeGrid: 'sk-cube-grid',
      skDoubleBounce: 'sk-double-bounce',
      skRotatingPlane: 'sk-rotationg-plane',
      skSpinnerPulse: 'sk-spinner-pulse',
      skThreeBounce: 'sk-three-bounce',
      skWanderingCubes: 'sk-wandering-cubes',
      skWave: 'sk-wave',
      skLine: 'sk-line-material'
    };

    /***/
  }),
  /***/"./src/app/shared/components/spinner/spinner.component.scss": (
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/spinner/spinner.component.scss ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_spinner_spinnerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: .7;\n  background-color: #f1f1f1; }\n\n.colored-parent, .colored > div {\n  background-color: #333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1Byb2plY3QvdHJpc2FrdGkvYWRtLXRyaXNha3RpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNodHRwLWxvYWRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9hZGVyLWJnIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLmNvbG9yZWQtcGFyZW50LCAuY29sb3JlZCA+IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/shared/components/spinner/spinner.component.ts": (
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
    \****************************************************************/
  /*! exports provided: SpinnerComponent */
  /***/
  function _src_app_shared_components_spinner_spinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _spinkits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./spinkits */"./src/app/shared/components/spinner/spinkits.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent(router, document) {
        var _this24 = this;
        _classCallCheck(this, SpinnerComponent);
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"];
        this.backgroundColor = 'rgb(255, 255, 255, 0.8)';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"].skLine;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            _this24.isSpinnerVisible = true;
          } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            _this24.isSpinnerVisible = false;
          }
        }, function () {
          _this24.isSpinnerVisible = false;
        });
      }
      return _createClass(SpinnerComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isSpinnerVisible = false;
        }
      }]);
    }();
    SpinnerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SpinnerComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SpinnerComponent.prototype, "spinner", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./spinner.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./spinner.component.scss */"./src/app/shared/components/spinner/spinner.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./spinkit-css/sk-line-material.scss */"./src/app/shared/components/spinner/spinkit-css/sk-line-material.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Document])], SpinnerComponent);

    /***/
  }),
  /***/"./src/app/shared/components/toast-show/toast-show.component.scss": (
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/toast-show/toast-show.component.scss ***!
    \************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_toastShow_toastShowComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvYXN0LXNob3cvdG9hc3Qtc2hvdy5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  }),
  /***/"./src/app/shared/components/toast-show/toast-show.component.ts": (
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/toast-show/toast-show.component.ts ***!
    \**********************************************************************/
  /*! exports provided: ToastShowComponent */
  /***/
  function _src_app_shared_components_toastShow_toastShowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ToastShowComponent", function () {
      return ToastShowComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/_services/broadcaster.service */"./src/app/_services/broadcaster.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var ng2_toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ng2-toasty */"./node_modules/ng2-toasty/index.js");
    var ToastShowComponent = /*#__PURE__*/function () {
      function ToastShowComponent(toastyService, broadcasterService) {
        var _this25 = this;
        _classCallCheck(this, ToastShowComponent);
        this.toastyService = toastyService;
        this.broadcasterService = broadcasterService;
        this.position = 'top-right';
        this.closeOther = false;
        this.theme = 'default';
        this.type = 'default';
        this.showClose = true;
        this.broadcasterService.notifBroadcast$.subscribe(function (res) {
          _this25.addToast(res.data);
        });
      }
      return _createClass(ToastShowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addToast",
        value: function addToast(options) {
          if (options.closeOther) {
            this.toastyService.clearAll();
          }
          this.position = options.position ? options.position : this.position;
          var toastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: function onAdd(toast) {
              /* added */
            },
            onRemove: function onRemove(toast) {
              /* removed */
            }
          };
          switch (options.type) {
            case 'default':
              this.toastyService["default"](toastOptions);
              break;
            case 'info':
              this.toastyService.info(toastOptions);
              break;
            case 'success':
              this.toastyService.success(toastOptions);
              break;
            case 'wait':
              this.toastyService.wait(toastOptions);
              break;
            case 'error':
              this.toastyService.error(toastOptions);
              break;
            case 'warning':
              this.toastyService.warning(toastOptions);
              break;
          }
        }
      }]);
    }();
    ToastShowComponent.ctorParameters = function () {
      return [{
        type: ng2_toasty__WEBPACK_IMPORTED_MODULE_3__["ToastyService"]
      }, {
        type: src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ToastShowComponent.prototype, "options", void 0);
    ToastShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-toast-show',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./toast-show.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toast-show/toast-show.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./toast-show.component.scss */"./src/app/shared/components/toast-show/toast-show.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_3__["ToastyService"], src_app_services_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"]])], ToastShowComponent);

    /***/
  }),
  /***/"./src/app/shared/components/toast/toast.component.scss": (
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/toast/toast.component.scss ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_shared_components_toast_toastComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5zY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/shared/components/toast/toast.component.ts": (
  /*!************************************************************!*\
    !*** ./src/app/shared/components/toast/toast.component.ts ***!
    \************************************************************/
  /*! exports provided: ToastComponent */
  /***/
  function _src_app_shared_components_toast_toastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return ToastComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./toast.service */"./src/app/shared/components/toast/toast.service.ts");
    var ToastComponent = /*#__PURE__*/function () {
      function ToastComponent(toastEvent) {
        _classCallCheck(this, ToastComponent);
        this.toastEvent = toastEvent;
        this.isShow = false;
      }
      return _createClass(ToastComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.toastEvent.toggleToast.subscribe(function (toast) {
            document.querySelector('#' + toast.uid).classList.add('show');
            setTimeout(function () {
              document.querySelector('#' + toast.uid).classList.remove('show');
            }, toast.delay ? toast.delay : 500);
          });
        }
      }, {
        key: "closeToast",
        value: function closeToast(uid) {
          document.querySelector('#' + uid).classList.remove('show');
        }
      }]);
    }();
    ToastComponent.ctorParameters = function () {
      return [{
        type: _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ToastComponent.prototype, "uID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ToastComponent.prototype, "toastTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ToastComponent.prototype, "toastCaption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ToastComponent.prototype, "toastClass", void 0);
    ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toast',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./toast.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toast/toast.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./toast.component.scss */"./src/app/shared/components/toast/toast.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])], ToastComponent);

    /***/
  }),
  /***/"./src/app/shared/components/toast/toast.service.ts": (
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/toast/toast.service.ts ***!
    \**********************************************************/
  /*! exports provided: ToastService */
  /***/
  function _src_app_shared_components_toast_toastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ToastService = /*#__PURE__*/function () {
      function ToastService() {
        _classCallCheck(this, ToastService);
        this.toggleToast = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      return _createClass(ToastService, [{
        key: "toast",
        value: function toast(event) {
          this.toggleToast.emit(event);
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ToastService.prototype, "toggleToast", void 0);
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ToastService);

    /***/
  }),
  /***/"./src/app/shared/components/todo/todo-card-complete.directive.ts": (
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/todo/todo-card-complete.directive.ts ***!
    \************************************************************************/
  /*! exports provided: TodoCardCompleteDirective */
  /***/
  function _src_app_shared_components_todo_todoCardCompleteDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TodoCardCompleteDirective", function () {
      return TodoCardCompleteDirective;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TodoCardCompleteDirective = /*#__PURE__*/function () {
      function TodoCardCompleteDirective(elements) {
        _classCallCheck(this, TodoCardCompleteDirective);
        this.elements = elements;
      }
      return _createClass(TodoCardCompleteDirective, [{
        key: "onToggle",
        value: function onToggle($event) {
          $event.preventDefault();
          this.elements.nativeElement.classList.toggle('complete');
        }
      }]);
    }();
    TodoCardCompleteDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], TodoCardCompleteDirective.prototype, "onToggle", null);
    TodoCardCompleteDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appTodoCardComplete]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], TodoCardCompleteDirective);

    /***/
  }),
  /***/"./src/app/shared/components/todo/todo-list-remove.directive.ts": (
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/todo/todo-list-remove.directive.ts ***!
    \**********************************************************************/
  /*! exports provided: TodoListRemoveDirective */
  /***/
  function _src_app_shared_components_todo_todoListRemoveDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TodoListRemoveDirective", function () {
      return TodoListRemoveDirective;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TodoListRemoveDirective = /*#__PURE__*/function () {
      function TodoListRemoveDirective(elements) {
        _classCallCheck(this, TodoListRemoveDirective);
        this.elements = elements;
      }
      return _createClass(TodoListRemoveDirective, [{
        key: "onToggle",
        value: function onToggle($event) {
          $event.preventDefault();
          var parent = this.elements.nativeElement.parentElement.parentElement;
          parent.remove();
        }
      }]);
    }();
    TodoListRemoveDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], TodoListRemoveDirective.prototype, "onToggle", null);
    TodoListRemoveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appTodoListRemove]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], TodoListRemoveDirective);

    /***/
  }),
  /***/"./src/app/shared/full-screen/toggle-full-screen.ts": (
  /*!**********************************************************!*\
    !*** ./src/app/shared/full-screen/toggle-full-screen.ts ***!
    \**********************************************************/
  /*! exports provided: ToggleFullScreenDirective */
  /***/
  function _src_app_shared_fullScreen_toggleFullScreenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function () {
      return ToggleFullScreenDirective;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! screenfull */"./node_modules/screenfull/dist/screenfull.js");
    /* harmony import */
    var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);
    var ToggleFullScreenDirective = /*#__PURE__*/function () {
      function ToggleFullScreenDirective(elements) {
        _classCallCheck(this, ToggleFullScreenDirective);
        this.elements = elements;
      }
      return _createClass(ToggleFullScreenDirective, [{
        key: "onClick",
        value: function onClick() {
          /*if (screenfull.enabled) {
            (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
            (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
            screenfull.toggle();
          }*/
          if (isScreenFull(screenfull__WEBPACK_IMPORTED_MODULE_2__)) {
            if (screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"]) {
              screenfull__WEBPACK_IMPORTED_MODULE_2__["exit"]();
            } else {
              screenfull__WEBPACK_IMPORTED_MODULE_2__["request"]();
            }
          }
        }
      }]);
    }();
    ToggleFullScreenDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ToggleFullScreenDirective.prototype, "onClick", null);
    ToggleFullScreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appToggleFullScreen]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ToggleFullScreenDirective);
    function isScreenFull(sf) {
      return sf.isFullscreen;
    }

    /***/
  }),
  /***/"./src/app/shared/shared.module.ts": (
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/
  /*! exports provided: SharedModule, HttpLoaderFactory */
  /***/
  function _src_app_shared_sharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var ng_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ng-click-outside */"./node_modules/ng-click-outside/lib/index.js");
    /* harmony import */
    var ng_click_outside__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! angular-ng-autocomplete */"./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components */"./src/app/shared/components/index.ts");
    /* harmony import */
    var _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/data-table/data-filter.pipe */"./src/app/shared/components/data-table/data-filter.pipe.ts");
    /* harmony import */
    var _components_toast_show_toast_show_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components/toast-show/toast-show.component */"./src/app/shared/components/toast-show/toast-show.component.ts");
    /* harmony import */
    var _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./components/todo/todo-list-remove.directive */"./src/app/shared/components/todo/todo-list-remove.directive.ts");
    /* harmony import */
    var _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/todo/todo-card-complete.directive */"./src/app/shared/components/todo/todo-card-complete.directive.ts");
    /* harmony import */
    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ngx-perfect-scrollbar */"./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */
    var _components_filter_container_filter_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./components/filter-container/filter-container.component */"./src/app/shared/components/filter-container/filter-container.component.ts");
    /* harmony import */
    var _components_no_data_found_no_data_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./components/no-data-found/no-data-found.component */"./src/app/shared/components/no-data-found/no-data-found.component.ts");
    /* harmony import */
    var _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./components/chart/apex-chart/apex-chart.component */"./src/app/shared/components/chart/apex-chart/apex-chart.component.ts");
    /* harmony import */
    var _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./components/chart/apex-chart/apex-chart.service */"./src/app/shared/components/chart/apex-chart/apex-chart.service.ts");
    /* harmony import */
    var _components_select_select_option_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./components/select/select-option.service */"./src/app/shared/components/select/select-option.service.ts");
    /* harmony import */
    var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./components/spinner/spinner.component */"./src/app/shared/components/spinner/spinner.component.ts");
    /* harmony import */
    var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./components/gallery/gallery.component */"./src/app/shared/components/gallery/gallery.component.ts");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./components/toast/toast.component */"./src/app/shared/components/toast/toast.component.ts");
    /* harmony import */
    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! @ngx-translate/http-loader */"./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */
    var _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./components/toast/toast.service */"./src/app/shared/components/toast/toast.service.ts");
    /* harmony import */
    var _classes_shortenerString__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ../_classes/shortenerString */"./src/app/_classes/shortenerString.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ngx-lightbox */"./node_modules/ngx-lightbox/index.js");
    /* harmony import */
    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_25__);
    /* harmony import */
    var ng2_toasty__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ng2-toasty */"./node_modules/ng2-toasty/index.js");
    /* harmony import */
    var ng_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! ng-select */"./node_modules/ng-select/fesm2015/ng-select.js");

    /*import 'hammerjs';
    import 'mousetrap';
    import { GalleryModule } from '@ks89/angular-modal-gallery';*/
    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };
    var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
      _classCallCheck(this, SharedModule);
    });
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [ng_select__WEBPACK_IMPORTED_MODULE_27__["SelectModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CardModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_4__["AutocompleteLibModule"], _components__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_3__["ClickOutsideModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_25__["LightboxModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_26__["ToastyModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"]]
        }
      })],
      exports: [ng_select__WEBPACK_IMPORTED_MODULE_27__["SelectModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_6__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_6__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_9__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_10__["TodoCardCompleteDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_3__["ClickOutsideModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_17__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_14__["ApexChartComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__["GalleryComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_20__["ToastComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"], _classes_shortenerString__WEBPACK_IMPORTED_MODULE_23__["ShortenerString"], _components_toast_show_toast_show_component__WEBPACK_IMPORTED_MODULE_8__["ToastShowComponent"], _components_no_data_found_no_data_found_component__WEBPACK_IMPORTED_MODULE_13__["NoDataFoundComponent"], _components_filter_container_filter_container_component__WEBPACK_IMPORTED_MODULE_12__["FilterContainerComponent"]],
      declarations: [_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_9__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_10__["TodoCardCompleteDirective"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_17__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_14__["ApexChartComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_20__["ToastComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__["GalleryComponent"], _classes_shortenerString__WEBPACK_IMPORTED_MODULE_23__["ShortenerString"], _components_toast_show_toast_show_component__WEBPACK_IMPORTED_MODULE_8__["ToastShowComponent"], _components_no_data_found_no_data_found_component__WEBPACK_IMPORTED_MODULE_13__["NoDataFoundComponent"], _components_filter_container_filter_container_component__WEBPACK_IMPORTED_MODULE_12__["FilterContainerComponent"]],
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_15__["ApexChartService"], _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_22__["ToastService"], _components_select_select_option_service__WEBPACK_IMPORTED_MODULE_16__["SelectOptionService"]]
    })], SharedModule);
    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false,
      apiUrl: 'http://103.181.182.247:8000',
      appCode: 206
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! /Users/macbook/Project/trisakti/adm-trisakti/src/main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map