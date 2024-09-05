function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2"], {
  /***/
  "./src/app/_services/admin-management.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/_services/admin-management.service.ts ***!
    \*******************************************************/

  /*! exports provided: AdminManagementService */

  /***/
  function srcApp_servicesAdminManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminManagementService", function () {
      return AdminManagementService;
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


    var _classes_token_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_classes/token.factory */
    "./src/app/_classes/token.factory.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/_services/base.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdminManagementService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(AdminManagementService, _base_service__WEBPAC);

      function AdminManagementService(http, router) {
        var _this;

        _classCallCheck(this, AdminManagementService);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminManagementService).call(this, http));
        _this.router = router;
        _this.namespace = 'admin_manage';
        _this.tokenFactory = new _classes_token_factory__WEBPACK_IMPORTED_MODULE_2__["TokenFactory"]();
        return _this;
      }

      _createClass(AdminManagementService, [{
        key: "getProgramData",
        value: function getProgramData(body) {
          var url = this.getUrl(this.namespace, 're_program_data');
          return this.http.post(url, body);
        }
      }, {
        key: "postProgramData",
        value: function postProgramData(body) {
          var url = this.getUrl(this.namespace, 'cr_program_data');
          return this.http.post(url, body);
        }
      }, {
        key: "updProgramData",
        value: function updProgramData(body) {
          var url = this.getUrl(this.namespace, 'up_program_data');
          return this.http.post(url, body);
        }
      }, {
        key: "getSelectionPathData",
        value: function getSelectionPathData(contextParams) {
          var url = this.getUrl(this.namespace, 're_selection_path', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getSelectionPathDetailData",
        value: function getSelectionPathDetailData(contextParams) {
          var url = this.getUrl(this.namespace, 're_selection_path_detail', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postSelectionPathData",
        value: function postSelectionPathData(body) {
          var url = this.getUrl(this.namespace, 'cr_selection_path');
          return this.http.post(url, body);
        }
      }, {
        key: "updSelectionPathData",
        value: function updSelectionPathData(body) {
          var url = this.getUrl(this.namespace, 'up_selection_path');
          return this.http.post(url, body);
        }
      }, {
        key: "getExamLocationData",
        value: function getExamLocationData(body) {
          var url = this.getUrl(this.namespace, 're_exam_location_data');
          return this.http.post(url, body);
        }
      }, {
        key: "postExamLocationData",
        value: function postExamLocationData(body) {
          var url = this.getUrl(this.namespace, 'cr_exam_location_data');
          return this.http.post(url, body);
        }
      }, {
        key: "updExamLocationData",
        value: function updExamLocationData(body) {
          var url = this.getUrl(this.namespace, 'up_exam_location_data');
          return this.http.post(url, body);
        }
      }, {
        key: "getNationalityData",
        value: function getNationalityData() {
          var url = this.getUrl(this.namespace, 're_nationality');
          return this.http.get(url);
        }
      }, {
        key: "getCityData",
        value: function getCityData(params) {
          var url = this.getUrl(this.namespace, 're_city', params);
          return this.http.get(url);
        }
      }, {
        key: "getRegistrationStepData",
        value: function getRegistrationStepData() {
          var url = this.getUrl(this.namespace, 're_registration_step');
          return this.http.get(url);
        }
      }, {
        key: "getSelectionStepData",
        value: function getSelectionStepData(contextParams) {
          var url = this.getUrl(this.namespace, 're_selection_step', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postSelectionStepData",
        value: function postSelectionStepData(body) {
          var url = this.getUrl(this.namespace, 'cr_registration_step');
          return this.http.post(url, body);
        }
      }, {
        key: "updSelectionStepData",
        value: function updSelectionStepData(body) {
          var url = this.getUrl(this.namespace, 'up_registration_step');
          return this.http.post(url, body);
        }
      }, {
        key: "getDocumentTypeData",
        value: function getDocumentTypeData(body) {
          var url = this.getUrl(this.namespace, 're_document_type');
          return this.http.post(url, body);
        }
      }, {
        key: "getSelectionDocument",
        value: function getSelectionDocument(contextParams) {
          var url = this.getUrl(this.namespace, 're_selection_document', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postSelectionDocument",
        value: function postSelectionDocument(body) {
          var url = this.getUrl(this.namespace, 'cr_selection_document');
          return this.http.post(url, body);
        }
      }, {
        key: "updSelectionDocument",
        value: function updSelectionDocument(body) {
          var url = this.getUrl(this.namespace, 'up_selection_document');
          return this.http.post(url, body);
        }
      }, {
        key: "postMappSelectionLocationData",
        value: function postMappSelectionLocationData(body) {
          var url = this.getUrl(this.namespace, 're_mapp_selection_location');
          return this.http.post(url, body);
        }
      }, {
        key: "getGender",
        value: function getGender() {
          var url = this.getUrl(this.namespace, 're_gender');
          return this.http.get(url);
        }
      }, {
        key: "getQuestionnaireData",
        value: function getQuestionnaireData(contextParams) {
          var url = this.getUrl(this.namespace, 're_questionnaire', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postQuestionnaireData",
        value: function postQuestionnaireData(body) {
          var url = this.getUrl(this.namespace, 'cr_questionnaire');
          return this.http.post(url, body);
        }
      }, {
        key: "updQuestionnaireData",
        value: function updQuestionnaireData(body) {
          var url = this.getUrl(this.namespace, 'up_questionnaire');
          return this.http.post(url, body);
        }
      }, {
        key: "getQuestionAnswerData",
        value: function getQuestionAnswerData(contextParams) {
          var url = this.getUrl(this.namespace, 're_question_answer', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getExamLocationSelectionData",
        value: function getExamLocationSelectionData(contextParams) {
          var url = this.getUrl(this.namespace, 're_exam_location_selection', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getExamLocationSelectionDatas",
        value: function getExamLocationSelectionDatas(contextParams) {
          var url = this.getUrl(this.namespace, 're_exam_location_selections', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postExamLocationSelectionData",
        value: function postExamLocationSelectionData(body) {
          var url = this.getUrl(this.namespace, 'cr_exam_location_selection');
          return this.http.post(url, body);
        }
      }, {
        key: "updExamLocationSelectionData",
        value: function updExamLocationSelectionData(body) {
          var url = this.getUrl(this.namespace, 'up_exam_location_selection');
          return this.http.post(url, body);
        }
      }, {
        key: "getExamTimeData",
        value: function getExamTimeData(contextParams) {
          var url = this.getUrl(this.namespace, 're_exam_time', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getExamTimeDatas",
        value: function getExamTimeDatas(contextParams) {
          var url = this.getUrl(this.namespace, 're_exam_times', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postExamTimeData",
        value: function postExamTimeData(body) {
          var url = this.getUrl(this.namespace, 'cr_exam_time');
          return this.http.post(url, body);
        }
      }, {
        key: "updExamTimeData",
        value: function updExamTimeData(body) {
          var url = this.getUrl(this.namespace, 'up_exam_time');
          return this.http.post(url, body);
        }
      }, {
        key: "getPINPriceData",
        value: function getPINPriceData(contextParams) {
          var url = this.getUrl(this.namespace, 're_pin_price', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postPINPriceData",
        value: function postPINPriceData(body) {
          var url = this.getUrl(this.namespace, 'cr_pin_price');
          return this.http.post(url, body);
        }
      }, {
        key: "updPINPriceData",
        value: function updPINPriceData(body) {
          var url = this.getUrl(this.namespace, 'up_pin_price');
          return this.http.post(url, body);
        }
      }, {
        key: "getMappingProgramStudyData",
        value: function getMappingProgramStudyData(contextParams) {
          var url = this.getUrl(this.namespace, 're_mapp_study_program', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postMappingProgramStudyData",
        value: function postMappingProgramStudyData(body) {
          var url = this.getUrl(this.namespace, 'cr_mapp_study_program');
          return this.http.post(url, body);
        }
      }, {
        key: "updMappingProgramStudyData",
        value: function updMappingProgramStudyData(body) {
          var url = this.getUrl(this.namespace, 'up_mapp_study_program');
          return this.http.post(url, body);
        }
      }, {
        key: "getProgramStudyData",
        value: function getProgramStudyData() {
          var url = this.getUrl(this.namespace, 're_study_program');
          return this.http.get(url);
        }
      }, {
        key: "getProgramStudyDataWithParams",
        value: function getProgramStudyDataWithParams(params) {
          var url = this.getUrl(this.namespace, 're_study_program', params);
          return this.http.get(url);
        }
      }, {
        key: "getFacultyData",
        value: function getFacultyData() {
          var url = this.getUrl(this.namespace, 're_faculty');
          return this.http.get(url);
        }
      }, {
        key: "getParticipantList",
        value: function getParticipantList(contextParams) {
          var url = this.getUrl(this.namespace, 're_participant_list', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getParticipantListDetail",
        value: function getParticipantListDetail(contextParams) {
          var url = this.getUrl(this.namespace, 're_participant_list_detail', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getParticipantPaymentList",
        value: function getParticipantPaymentList(contextParams) {
          var url = this.getUrl(this.namespace, 're_participant_payment_list', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getParticipantRegistApprove",
        value: function getParticipantRegistApprove(contextParams) {
          var url = this.getUrl(this.namespace, 're_participant_approve', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getRegistrationProgramStudy",
        value: function getRegistrationProgramStudy(contextParams) {
          var url = this.getUrl(this.namespace, 're_registration_program_study', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getRegistrationDocument",
        value: function getRegistrationDocument(contextParams) {
          var url = this.getUrl(this.namespace, 're_registration_document', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getParticipantDetailData",
        value: function getParticipantDetailData(contextParams) {
          var url = this.getUrl(this.namespace, 're_participant_detail', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getPaymentMethodData",
        value: function getPaymentMethodData() {
          var url = this.getUrl(this.namespace, 're_payment_method');
          return this.http.get(url);
        }
      }, {
        key: "getQuestionTypeData",
        value: function getQuestionTypeData() {
          var url = this.getUrl(this.namespace, 're_question_type');
          return this.http.get(url);
        }
      }, {
        key: "getQuestionData",
        value: function getQuestionData(contextParams) {
          var url = this.getUrl(this.namespace, 're_question', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postQuestionData",
        value: function postQuestionData(body) {
          var url = this.getUrl(this.namespace, 'cr_question');
          return this.http.post(url, body);
        }
      }, {
        key: "upQuestionData",
        value: function upQuestionData(body) {
          var url = this.getUrl(this.namespace, 'up_question');
          return this.http.post(url, body);
        }
      }, {
        key: "getPaymentStatusData",
        value: function getPaymentStatusData() {
          var url = this.getUrl(this.namespace, 're_payment_status');
          return this.http.get(url);
        }
      }, {
        key: "getParticipantPassData",
        value: function getParticipantPassData(contextParams) {
          var url = this.getUrl(this.namespace, 're_participant_pass', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "upRegistrationData",
        value: function upRegistrationData(body) {
          var url = this.getUrl(this.namespace, 'up_registration');
          return this.http.post(url, body);
        }
      }, {
        key: "getAnswerOptionData",
        value: function getAnswerOptionData(contextParams) {
          var url = this.getUrl(this.namespace, 're_answer_option', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postAnswerOptionData",
        value: function postAnswerOptionData(body) {
          var url = this.getUrl(this.namespace, 'cr_answer_option');
          return this.http.post(url, body);
        }
      }, {
        key: "upAnswerOptionData",
        value: function upAnswerOptionData(body) {
          var url = this.getUrl(this.namespace, 'up_answer_option');
          return this.http.post(url, body);
        }
      }, {
        key: "postupdRegistrationResultData",
        value: function postupdRegistrationResultData(body) {
          var url = this.getUrl(this.namespace, 'cr_up_registration_result');
          return this.http.post(url, body);
        }
      }, {
        key: "updDocumentRegistrationData",
        value: function updDocumentRegistrationData(body) {
          var url = this.getUrl(this.namespace, 'up_document_participant');
          return this.http.post(url, body);
        }
      }, {
        key: "getExamTypeData",
        value: function getExamTypeData() {
          var url = this.getUrl(this.namespace, 're_exam_type');
          return this.http.get(url);
        }
      }, {
        key: "getCategoryIdData",
        value: function getCategoryIdData() {
          var url = this.getUrl(this.namespace, 're_category_id');
          return this.http.get(url);
        }
      }, {
        key: "getExcelParticipantListData",
        value: function getExcelParticipantListData(contextParams) {
          var url = this.getUrl(this.namespace, 'dwn_excel_participant_list', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getExcelParticipantPaymentListData",
        value: function getExcelParticipantPaymentListData(contextParams) {
          var url = this.getUrl(this.namespace, 'dwn_excel_participant_payment', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getExcelParticipantResultListData",
        value: function getExcelParticipantResultListData(contextParams) {
          var url = this.getUrl(this.namespace, 'dwn_excel_participant_result', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getActiveStatusData",
        value: function getActiveStatusData() {
          var url = this.getUrl(this.namespace, 're_active_status');
          return this.http.get(url);
        }
      }, {
        key: "getReportingParticipantPerSelectionPathData",
        value: function getReportingParticipantPerSelectionPathData() {
          var url = this.getUrl(this.namespace, 're_reporting_participant_per_path');
          return this.http.get(url);
        }
      }, {
        key: "getReportingParticipantPerStudyProgramData",
        value: function getReportingParticipantPerStudyProgramData() {
          var url = this.getUrl(this.namespace, 're_reporting_participant_per_stupro');
          return this.http.get(url);
        }
      }, {
        key: "getReportingParticipantPerStudyProgramDataFilters",
        value: function getReportingParticipantPerStudyProgramDataFilters(params) {
          var url = this.getUrl(this.namespace, 're_reporting_participant_per_stupro_filters', params);
          return this.http.get(url);
        }
      }, {
        key: "getReportingParticipantPerGenderData",
        value: function getReportingParticipantPerGenderData() {
          var url = this.getUrl(this.namespace, 're_reporting_participant_per_gender');
          return this.http.get(url);
        }
      }, {
        key: "getReportingParticipantPerProvinceData",
        value: function getReportingParticipantPerProvinceData() {
          var url = this.getUrl(this.namespace, 're_reporting_participant_per_prov');
          return this.http.get(url);
        }
      }, {
        key: "getReportingParticipantPerCityData",
        value: function getReportingParticipantPerCityData() {
          var url = this.getUrl(this.namespace, 're_reporting_participant_per_city');
          return this.http.get(url);
        }
      }, {
        key: "getReportingParticipantPerSchoolData",
        value: function getReportingParticipantPerSchoolData() {
          var url = this.getUrl(this.namespace, 're_reporting_participant_per_school');
          return this.http.get(url);
        }
      }, {
        key: "getReportingSelectionPathActiveData",
        value: function getReportingSelectionPathActiveData() {
          var url = this.getUrl(this.namespace, 're_reporting_selection_path_active');
          return this.http.get(url);
        }
      }, {
        key: "getReportingPINBuyerData",
        value: function getReportingPINBuyerData() {
          var url = this.getUrl(this.namespace, 're_reporting_buyer_PIN');
          return this.http.get(url);
        }
      }, {
        key: "getReportingProgramActiveData",
        value: function getReportingProgramActiveData() {
          var url = this.getUrl(this.namespace, 're_reporting_program_active');
          return this.http.get(url);
        }
      }, {
        key: "getReportingParticipantPerStepData",
        value: function getReportingParticipantPerStepData() {
          var url = this.getUrl(this.namespace, 're_reporting_participant_per_step');
          return this.http.get(url);
        }
      }, {
        key: "getReportingParticipantPerStepDataFilters",
        value: function getReportingParticipantPerStepDataFilters(params) {
          var url = this.getUrl(this.namespace, 're_reporting_participant_per_step_filters', params);
          return this.http.get(url);
        }
      }, {
        key: "getReportingActiveProgramStudyData",
        value: function getReportingActiveProgramStudyData() {
          var url = this.getUrl(this.namespace, 're_reporting_active_program_study');
          return this.http.get(url);
        }
      }, {
        key: "getEducationLast",
        value: function getEducationLast(params) {
          var url = this.getUrl(this.namespace, 're_education_last', params);
          return this.http.get(url);
        }
      }, {
        key: "insertBulkRegistrationResult",
        value: function insertBulkRegistrationResult(body) {
          var url = this.getUrl(this.namespace, 'cr_insert_bulk_reg_result');
          return this.http.post(url, body);
        }
      }, {
        key: "exportParticipantRegistrationExcel",
        value: function exportParticipantRegistrationExcel(body) {
          var url = this.getUrl(this.namespace, 'cr_export_participant_reg_excel');
          return this.http.post(url, body);
        }
      }, {
        key: "getParticipantPagination",
        value: function getParticipantPagination(params) {
          var url = this.getUrl(this.namespace, 're_participant_pagination', params);
          return this.http.get(url);
        }
      }, {
        key: "getPaymentPagination",
        value: function getPaymentPagination(params) {
          var url = this.getUrl(this.namespace, 're_payment_pagination', params);
          return this.http.get(url);
        }
      }, {
        key: "getResultPagination",
        value: function getResultPagination(params) {
          var url = this.getUrl(this.namespace, 're_result_pagination', params);
          return this.http.get(url);
        }
      }, {
        key: "getSelectionYear",
        value: function getSelectionYear(params) {
          var url = this.getUrl(this.namespace, 're_path_year', params);
          return this.http.get(url);
        }
      }, {
        key: "getCategorySelectionProgram",
        value: function getCategorySelectionProgram() {
          var url = this.getUrl(this.namespace, 're_category_program');
          return this.http.get(url);
        }
      }, {
        key: "getSelectionPathAdmin",
        value: function getSelectionPathAdmin(params) {
          var url = this.getUrl(this.namespace, 're_selection_path_admin', params);
          return this.http.get(url);
        }
      }, {
        key: "getStudyPrograms",
        value: function getStudyPrograms() {
          var url = this.getUrl(this.namespace, 're_study_program_all');
          return this.http.get(url);
        }
      }, {
        key: "getMappingPathYear",
        value: function getMappingPathYear() {
          var url = this.getUrl(this.namespace, 're_mapping_path_year');
          return this.http.get(url);
        }
      }, {
        key: "postMappingPathYear",
        value: function postMappingPathYear(body) {
          var url = this.getUrl(this.namespace, 'cr_mapping_path_year');
          return this.http.post(url, body);
        }
      }, {
        key: "updMappingPathYear",
        value: function updMappingPathYear(body) {
          var url = this.getUrl(this.namespace, 'upd_mapping_path_year');
          return this.http.post(url, body);
        }
      }, {
        key: "delMappingPathYear",
        value: function delMappingPathYear(body) {
          var url = this.getUrl(this.namespace, 'del_mapping_path_year');
          return this.http.post(url, body);
        }
      }, {
        key: "exportPostGraduateExcel",
        value: function exportPostGraduateExcel(body) {
          var url = this.getUrl(this.namespace, 'cr_export_postgraduate_excel');
          return this.http.post(url, body);
        }
      }, {
        key: "getAnnouncementData",
        value: function getAnnouncementData() {
          var url = this.getUrl(this.namespace, 're_announcement_card');
          return this.http.get(url);
        }
      }, {
        key: "postAnnouncementData",
        value: function postAnnouncementData(body) {
          var url = this.getUrl(this.namespace, 'cr_announcement_card');
          return this.http.post(url, body);
        }
      }, {
        key: "updateAnnouncementData",
        value: function updateAnnouncementData(body) {
          var url = this.getUrl(this.namespace, 'up_announcement_card');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteAnnouncementData",
        value: function deleteAnnouncementData(body) {
          var url = this.getUrl(this.namespace, 'del_announcement_card');
          return this.http.post(url, body);
        }
      }, {
        key: "getSessionPathExamDetails",
        value: function getSessionPathExamDetails(params) {
          var url = this.getUrl(this.namespace, 're_session_path_exam', params);
          return this.http.get(url);
        }
      }, {
        key: "createOrUpdateSessionPathExamDetails",
        value: function createOrUpdateSessionPathExamDetails(body) {
          var url = this.getUrl(this.namespace, 'cr_session_path_exam');
          return this.http.post(url, body);
        }
      }, {
        key: "createRaportRequirementDocument",
        value: function createRaportRequirementDocument(body) {
          var url = this.getUrl(this.namespace, 'cr_raport_requirement_document');
          return this.http.post(url, body);
        }
      }, {
        key: "updateRaportRequirementDocument",
        value: function updateRaportRequirementDocument(body) {
          var url = this.getUrl(this.namespace, 'upd_raport_requirement_document');
          return this.http.post(url, body);
        }
      }, {
        key: "getRaportRequirementDocument",
        value: function getRaportRequirementDocument(params) {
          var url = this.getUrl(this.namespace, 're_raport_requirement_document', params);
          return this.http.get(url);
        }
      }, {
        key: "createUtbkRequirementDocument",
        value: function createUtbkRequirementDocument(body) {
          var url = this.getUrl(this.namespace, 'cr_utbk_requirement_document');
          return this.http.post(url, body);
        }
      }, {
        key: "updateUtbkRequirementDocument",
        value: function updateUtbkRequirementDocument(body) {
          var url = this.getUrl(this.namespace, 'upd_utbk_requirement_document');
          return this.http.post(url, body);
        }
      }, {
        key: "getUtbkRequirementDocument",
        value: function getUtbkRequirementDocument(params) {
          var url = this.getUrl(this.namespace, 're_utbk_requirement_document', params);
          return this.http.get(url);
        }
      }, {
        key: "createMappingPathYearIntake",
        value: function createMappingPathYearIntake(body) {
          var url = this.getUrl(this.namespace, 'cr_mapping_path_year_intake');
          return this.http.post(url, body);
        }
      }, {
        key: "updateMappingPathYearIntake",
        value: function updateMappingPathYearIntake(body) {
          var url = this.getUrl(this.namespace, 'upd_mapping_path_year_intake');
          return this.http.post(url, body);
        }
      }, {
        key: "delMappingPathYearIntake",
        value: function delMappingPathYearIntake(body) {
          var url = this.getUrl(this.namespace, 'del_mapping_path_year_intake');
          return this.http.post(url, body);
        }
      }, {
        key: "getMappingPathYearIntake",
        value: function getMappingPathYearIntake(params) {
          var url = this.getUrl(this.namespace, 'get_mapping_path_year_intake', params);
          return this.http.get(url);
        }
      }, {
        key: "getVerificationTransactionPicklist",
        value: function getVerificationTransactionPicklist() {
          var url = this.getUrl(this.namespace, 're_verification_transaction_picklist');
          return this.http.get(url);
        }
      }, {
        key: "getPassingGradeData",
        value: function getPassingGradeData(params) {
          var url = this.getUrl(this.namespace, 're_passing_grade', params);
          return this.http.get(url);
        }
      }, {
        key: "updatePassingGrade",
        value: function updatePassingGrade(body) {
          var url = this.getUrl(this.namespace, 'upd_passing_grade');
          return this.http.post(url, body);
        }
      }, {
        key: "createPassingGrade",
        value: function createPassingGrade(body) {
          var url = this.getUrl(this.namespace, 'cr_passing_grade');
          return this.http.post(url, body);
        }
      }, {
        key: "createParticipantPassingGradeFaculty",
        value: function createParticipantPassingGradeFaculty(body) {
          var url = this.getUrl(this.namespace, 'cr_participant_passinggrade_faculty');
          return this.http.post(url, body);
        }
      }, {
        key: "createParticipantPassingGradeUniversity",
        value: function createParticipantPassingGradeUniversity(body) {
          var url = this.getUrl(this.namespace, 'cr_participant_passinggrade_university');
          return this.http.post(url, body);
        }
      }, {
        key: "getPassingGradeUniversity",
        value: function getPassingGradeUniversity(params) {
          var url = this.getUrl(this.namespace, 're_approval_participant_score', params);
          return this.http.get(url);
        }
      }, {
        key: "createMoodleCategory",
        value: function createMoodleCategory(body) {
          var url = this.getUrl(this.namespace, 'cr_moodle_category');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteMoodleCategory",
        value: function deleteMoodleCategory(body) {
          var url = this.getUrl(this.namespace, 'del_moodle_category');
          return this.http.post(url, body);
        }
      }, {
        key: "getCategoryMoodle",
        value: function getCategoryMoodle(params) {
          var url = this.getUrl(this.namespace, 're_categories_moodle', params);
          return this.http.get(url);
        }
      }, {
        key: "insertMoodleCourse",
        value: function insertMoodleCourse(body) {
          var url = this.getUrl(this.namespace, 'cr_moodle_course');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteMoodleCourse",
        value: function deleteMoodleCourse(body) {
          var url = this.getUrl(this.namespace, 'del_moodle_course');
          return this.http.post(url, body);
        }
      }, {
        key: "getMoodleCourse",
        value: function getMoodleCourse(params) {
          var url = this.getUrl(this.namespace, 're_moodle_course', params);
          return this.http.get(url);
        }
      }, {
        key: "insertMoodleQuiz",
        value: function insertMoodleQuiz(body) {
          var url = this.getUrl(this.namespace, 'cr_moodle_quiz');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteMoodleQuiz",
        value: function deleteMoodleQuiz(body) {
          var url = this.getUrl(this.namespace, 'del_moodle_quiz');
          return this.http.post(url, body);
        }
      }, {
        key: "getMoodleQuiz",
        value: function getMoodleQuiz(params) {
          var url = this.getUrl(this.namespace, 're_moodle_quiz', params);
          return this.http.get(url);
        }
      }, {
        key: "insertMoodleSection",
        value: function insertMoodleSection(body) {
          var url = this.getUrl(this.namespace, 'cr_moodle_section');
          return this.http.post(url, body);
        }
      }, {
        key: "getMoodleSection",
        value: function getMoodleSection(params) {
          var url = this.getUrl(this.namespace, 're_moodle_section', params);
          return this.http.get(url);
        }
      }, {
        key: "insertMoodleGroup",
        value: function insertMoodleGroup(body) {
          var url = this.getUrl(this.namespace, 'cr_moodle_group');
          return this.http.post(url, body);
        }
      }, {
        key: "getMoodleGroup",
        value: function getMoodleGroup(params) {
          var url = this.getUrl(this.namespace, 're_moodle_group', params);
          return this.http.get(url);
        }
      }, {
        key: "getDocumentNewStudent",
        value: function getDocumentNewStudent(params) {
          var url = this.getUrl(this.namespace, 'get_document_newstudent', params);
          return this.http.get(url);
        }
      }, {
        key: "getNewStudentDocument",
        value: function getNewStudentDocument() {
          var url = this.getUrl(this.namespace, 're_new_student_doc_type');
          return this.http.get(url);
        }
      }, {
        key: "createMappingDocNewStudent",
        value: function createMappingDocNewStudent(body) {
          var url = this.getUrl(this.namespace, 'cr_mapping_doc_new_student');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteMappingDocNewStudent",
        value: function deleteMappingDocNewStudent(body) {
          var url = this.getUrl(this.namespace, 'del_mapping_doc_new_student');
          return this.http.post(url, body);
        }
      }, {
        key: "createRegistrationResultProgramStudy",
        value: function createRegistrationResultProgramStudy(body) {
          var url = this.getUrl(this.namespace, 'cr_registration_result_prodi');
          return this.http.post(url, body);
        }
      }, {
        key: "updateApprovalStatusDocumentStudent",
        value: function updateApprovalStatusDocumentStudent(body) {
          var url = this.getUrl(this.namespace, 'up_approval_status_new_student');
          return this.http.post(url, body);
        }
      }, {
        key: "updateRejectedStatusDocumentStudent",
        value: function updateRejectedStatusDocumentStudent(body) {
          var url = this.getUrl(this.namespace, 'up_rejected_status_new_student');
          return this.http.post(url, body);
        }
      }, {
        key: "getProgramStudyByFacultyAdmin",
        value: function getProgramStudyByFacultyAdmin(params) {
          var url = this.getUrl(this.namespace, 're_program_study_by_admin_faculty', params);
          return this.http.get(url);
        }
      }, {
        key: "updateCreditTransferAdmin",
        value: function updateCreditTransferAdmin(body) {
          var url = this.getUrl(this.namespace, 'up_mapping_credit_transfer');
          return this.http.post(url, body);
        }
      }, {
        key: "getCreditTransferResult",
        value: function getCreditTransferResult(params) {
          var url = this.getUrl(this.namespace, 'get_credit_transfer_equalization', params);
          return this.http.get(url);
        }
      }, {
        key: "getStudyProgramPassingGrade",
        value: function getStudyProgramPassingGrade(params) {
          var url = this.getUrl(this.namespace, 'get_program_study_passing_grade_with_selection_path', params);
          return this.http.get(url);
        }
      }, {
        key: "insertStudentIdEmailStudent",
        value: function insertStudentIdEmailStudent(body) {
          var url = this.getUrl(this.namespace, 'insert_student_id_and_email');
          return this.http.post(url, body);
        }
      }, {
        key: "getMoodleExamGrades",
        value: function getMoodleExamGrades(params) {
          var url = this.getUrl(this.namespace, 'get_moodle_exam_grades', params);
          return this.http.get(url);
        } // dummy data

      }, {
        key: "getParticipantScoreData",
        value: function getParticipantScoreData(params) {
          var url = this.getUrl(this.namespace, 're_participant_score', params);
          return this.http.get(url);
        }
      }, {
        key: "getDataTipeUjian",
        value: function getDataTipeUjian() {
          return this.getApi('fake-data/tipe-ujian.json');
        }
      }, {
        key: "getDataFormulir",
        value: function getDataFormulir() {
          return this.getApi('fake-data/list-formulir.json');
        }
      }, {
        key: "getDataMinat",
        value: function getDataMinat() {
          return this.getApi('fake-data/list-minat.json');
        }
      }]);

      return AdminManagementService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]);

    AdminManagementService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AdminManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AdminManagementService);
    /***/
  }
}]);
//# sourceMappingURL=default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~e6f7a6d2-es5.js.map