function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d"], {
  /***/
  "./src/app/_services/participant.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/participant.service.ts ***!
    \**************************************************/

  /*! exports provided: ParticipantService */

  /***/
  function srcApp_servicesParticipantServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParticipantService", function () {
      return ParticipantService;
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

    var ParticipantService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(ParticipantService, _base_service__WEBPAC);

      function ParticipantService(http, router) {
        var _this;

        _classCallCheck(this, ParticipantService);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ParticipantService).call(this, http));
        _this.router = router;
        _this.namespace = 'participant';
        _this.tokenFactory = new _classes_token_factory__WEBPACK_IMPORTED_MODULE_2__["TokenFactory"]();
        return _this;
      }

      _createClass(ParticipantService, [{
        key: "postRegistrationData",
        value: function postRegistrationData(body) {
          var url = this.getUrl(this.namespace, 'register_account');
          return this.http.post(url, body);
        }
      }, {
        key: "postEmailConfirmationData",
        value: function postEmailConfirmationData(body) {
          var url = this.getUrl(this.namespace, 'send_email_conf');
          return this.http.post(url, body);
        }
      }, {
        key: "postResetPassword",
        value: function postResetPassword(params, body) {
          var url = this.getUrl(this.namespace, 'cr_reset_password', params);
          return this.http.post(url, body);
        }
      }, {
        key: "postForgotPassword",
        value: function postForgotPassword(body) {
          var url = this.getUrl(this.namespace, 'forgot_password');
          return this.http.post(url, body);
        }
      }, {
        key: "getParticipantDetailData",
        value: function getParticipantDetailData(contextParams) {
          var url = this.getUrl(this.namespace, 're_participant_detail', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postParticipantDetailData",
        value: function postParticipantDetailData(body) {
          var url = this.getUrl(this.namespace, 'up_participant_detail');
          return this.http.post(url, body);
        }
      }, {
        key: "getReligionData",
        value: function getReligionData() {
          var url = this.getUrl(this.namespace, 're_religion');
          return this.http.get(url);
        }
      }, {
        key: "getMarriageStatusData",
        value: function getMarriageStatusData() {
          var url = this.getUrl(this.namespace, 're_marriage_status');
          return this.http.get(url);
        }
      }, {
        key: "getCountryData",
        value: function getCountryData() {
          var url = this.getUrl(this.namespace, 're_country');
          return this.http.get(url);
        }
      }, {
        key: "getProvinceData",
        value: function getProvinceData(contextParams) {
          var url = this.getUrl(this.namespace, 're_province', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getDistrictData",
        value: function getDistrictData(contextParams) {
          var url = this.getUrl(this.namespace, 're_district', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getEducationHistoryData",
        value: function getEducationHistoryData(contextParams) {
          var url = this.getUrl(this.namespace, 're_education_history', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postEducationHistoryData",
        value: function postEducationHistoryData(body) {
          var url = this.getUrl(this.namespace, 'cr_education_history');
          return this.http.post(url, body);
        }
      }, {
        key: "updEducationHistoryData",
        value: function updEducationHistoryData(body) {
          var url = this.getUrl(this.namespace, 'up_education_history');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteEducationHistoryData",
        value: function deleteEducationHistoryData(body) {
          var url = this.getUrl(this.namespace, 'del_education_history');
          return this.http.post(url, body);
        }
      }, {
        key: "getParentsData",
        value: function getParentsData(contextParams) {
          var url = this.getUrl(this.namespace, 're_family_parents', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postParentsData",
        value: function postParentsData(body) {
          var url = this.getUrl(this.namespace, 'cr_family_parents');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteParentsData",
        value: function deleteParentsData(body) {
          var url = this.getUrl(this.namespace, 'del_family_parents');
          return this.http.post(url, body);
        } // updParentsData(body): Observable<any> {
        //   const url = this.getUrl(this.namespace, 'up_family_parents');
        //   return this.postApi(url, body);
        // }
        // updParentsData(body): Observable<any> {
        //   const url = this.getUrl(this.namespace, 'up_family_parents');
        //   return this.http.post(url, body);
        // }

      }, {
        key: "updParentsData",
        value: function updParentsData(body) {
          var url = this.getUrl(this.namespace, 'up_family_parents');
          return this.postApiPlain(url, body);
        }
      }, {
        key: "getSiblingsData",
        value: function getSiblingsData(contextParams) {
          var url = this.getUrl(this.namespace, 're_family_siblings', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getWorkHistoryData",
        value: function getWorkHistoryData(contextParams) {
          var url = this.getUrl(this.namespace, 're_work_history', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postWorkHistoryData",
        value: function postWorkHistoryData(body) {
          var url = this.getUrl(this.namespace, 'cr_work_history');
          return this.http.post(url, body);
        }
      }, {
        key: "updWorkHistoryData",
        value: function updWorkHistoryData(body) {
          var url = this.getUrl(this.namespace, 'up_work_history');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteWorkHistoryData",
        value: function deleteWorkHistoryData(body) {
          var url = this.getUrl(this.namespace, 'del_work_history');
          return this.http.post(url, body);
        }
      }, {
        key: "getPersonalDocumentData",
        value: function getPersonalDocumentData(contextParams) {
          var url = this.getUrl(this.namespace, 're_personal_document', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postPersonalDocumentData",
        value: function postPersonalDocumentData(body) {
          var url = this.getUrl(this.namespace, 'cr_personal_document');
          return this.http.post(url, body);
        }
      }, {
        key: "updPersonalDocumentData",
        value: function updPersonalDocumentData(body) {
          var url = this.getUrl(this.namespace, 'up_doc_participant');
          return this.http.post(url, body);
        }
      }, {
        key: "deletePersonalDocumentData",
        value: function deletePersonalDocumentData(body) {
          var url = this.getUrl(this.namespace, 'del_personal_document');
          return this.http.post(url, body);
        }
      }, {
        key: "getEducationDegreeData",
        value: function getEducationDegreeData() {
          var url = this.getUrl(this.namespace, 're_education_degree');
          return this.http.get(url);
        }
      }, {
        key: "getFamilyRelationshipData",
        value: function getFamilyRelationshipData(contextParams) {
          var url = this.getUrl(this.namespace, 're_family_relation', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getWorkFieldData",
        value: function getWorkFieldData() {
          var url = this.getUrl(this.namespace, 're_work_field');
          return this.http.get(url);
        }
      }, {
        key: "getWorkTypeData",
        value: function getWorkTypeData(contextParams) {
          var url = this.getUrl(this.namespace, 're_work_type', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getIncomeRangeData",
        value: function getIncomeRangeData() {
          var url = this.getUrl(this.namespace, 're_income_range');
          return this.http.get(url);
        }
      }, {
        key: "getSchoolData",
        value: function getSchoolData(contextParams) {
          var url = this.getUrl(this.namespace, 're_school', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getSchoolMajorData",
        value: function getSchoolMajorData() {
          var url = this.getUrl(this.namespace, 're_school_major');
          return this.http.get(url);
        }
      }, {
        key: "getRegistrationListParticipantData",
        value: function getRegistrationListParticipantData(contextParams) {
          var url = this.getUrl(this.namespace, 're_registration', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postStudyProgramRegistrationData",
        value: function postStudyProgramRegistrationData(body) {
          var url = this.getUrl(this.namespace, 'cr_study_program_reg');
          return this.http.post(url, body);
        }
      }, {
        key: "updStudyProgramRegistrationData",
        value: function updStudyProgramRegistrationData(body) {
          var url = this.getUrl(this.namespace, 'up_study_program_reg');
          return this.http.post(url, body);
        }
      }, {
        key: "delStudyProgramRegistrationData",
        value: function delStudyProgramRegistrationData(body) {
          var url = this.getUrl(this.namespace, 'del_study_program_reg');
          return this.http.post(url, body);
        }
      }, {
        key: "postRegistrationDetailData",
        value: function postRegistrationDetailData(body) {
          var url = this.getUrl(this.namespace, 'cr_registration');
          return this.http.post(url, body);
        }
      }, {
        key: "getReportCardData",
        value: function getReportCardData(contextParams) {
          var url = this.getUrl(this.namespace, 're_doc_report_card', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postDocumentReportCardData",
        value: function postDocumentReportCardData(body) {
          var url = this.getUrl(this.namespace, 'cr_doc_report_card');
          return this.http.post(url, body);
        }
      }, {
        key: "updDocumentReportCardData",
        value: function updDocumentReportCardData(body) {
          var url = this.getUrl(this.namespace, 'up_doc_report_card');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteReportCard",
        value: function deleteReportCard(body) {
          var url = this.getUrl(this.namespace, 'del_doc_report_card');
          return this.http.post(url, body);
        }
      }, {
        key: "getDocumentCertificateData",
        value: function getDocumentCertificateData(contextParams) {
          var url = this.getUrl(this.namespace, 're_doc_certificate', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postDocumentCertificateData",
        value: function postDocumentCertificateData(body) {
          var url = this.getUrl(this.namespace, 'cr_doc_certificate');
          return this.http.post(url, body);
        }
      }, {
        key: "updDocumentCertificateData",
        value: function updDocumentCertificateData(body) {
          var url = this.getUrl(this.namespace, 'up_doc_certificate');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteDocumentCertificate",
        value: function deleteDocumentCertificate(body) {
          var url = this.getUrl(this.namespace, 'del_doc_certificate');
          return this.http.post(url, body);
        }
      }, {
        key: "getDocumentSupportingData",
        value: function getDocumentSupportingData(contextParams) {
          var url = this.getUrl(this.namespace, 're_doc_supporting', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postDocumentSupportingData",
        value: function postDocumentSupportingData(body) {
          var url = this.getUrl(this.namespace, 'cr_doc_supporting');
          return this.http.post(url, body);
        }
      }, {
        key: "updDocumentSupportingData",
        value: function updDocumentSupportingData(body) {
          var url = this.getUrl(this.namespace, 'up_doc_supporting');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteDocumentSupportingData",
        value: function deleteDocumentSupportingData(body) {
          var url = this.getUrl(this.namespace, 'del_doc_supporting');
          return this.http.post(url, body);
        }
      }, {
        key: "getSemesterData",
        value: function getSemesterData() {
          var url = this.getUrl(this.namespace, 're_semester');
          return this.http.get(url);
        }
      }, {
        key: "getRangeScoreData",
        value: function getRangeScoreData() {
          var url = this.getUrl(this.namespace, 're_range');
          return this.http.get(url);
        }
      }, {
        key: "getCertificateLevelData",
        value: function getCertificateLevelData() {
          var url = this.getUrl(this.namespace, 're_certificate_level');
          return this.http.get(url);
        }
      }, {
        key: "getCertificateTypeData",
        value: function getCertificateTypeData() {
          var url = this.getUrl(this.namespace, 're_certificate_type');
          return this.http.get(url);
        }
      }, {
        key: "getSelectionPathData",
        value: function getSelectionPathData(contextParams) {
          var url = this.getUrl(this.namespace, 're_selection_path', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getActiveQuestionnaireData",
        value: function getActiveQuestionnaireData(contextParams) {
          var url = this.getUrl(this.namespace, 're_active_questionnaire', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getStatusQuestionnaireData",
        value: function getStatusQuestionnaireData(contextParams) {
          var url = this.getUrl(this.namespace, 're_status_questionnaire', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postRegistrationHistoryData",
        value: function postRegistrationHistoryData(body) {
          var url = this.getUrl(this.namespace, 'cr_registration_history');
          return this.http.post(url, body);
        }
      }, {
        key: "postAnswerQuestionData",
        value: function postAnswerQuestionData(body) {
          var url = this.getUrl(this.namespace, 'cr_answer_question');
          return this.http.post(url, body);
        }
      }, {
        key: "getRegistrationCard",
        value: function getRegistrationCard(contextParams) {
          var url = this.getUrl(this.namespace, 'pr_registration_card', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getRegistrationHistory",
        value: function getRegistrationHistory(contextParams) {
          var url = this.getUrl(this.namespace, 're_registration_history', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getDocumentParticipantStatus",
        value: function getDocumentParticipantStatus(contextParams) {
          var url = this.getUrl(this.namespace, 're_doc_participant_status', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "deleteMappingStudyProgram",
        value: function deleteMappingStudyProgram(body) {
          var url = this.getUrl(this.namespace, 'del_mapping_study_program');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteRegistrationSteps",
        value: function deleteRegistrationSteps(body) {
          var url = this.getUrl(this.namespace, 'del_registration_history_steps');
          return this.http.post(url, body);
        }
      }, {
        key: "getSofId",
        value: function getSofId(params) {
          var url = this.getUrl(this.namespace, 're_sofId', params);
          return this.http.get(url);
        }
      }, {
        key: "getPinTransaction",
        value: function getPinTransaction(contextParams) {
          var url = this.getUrl(this.namespace, 're_pin_transaction', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getStatusPinTransaction",
        value: function getStatusPinTransaction(contextParams) {
          var url = this.getUrl(this.namespace, 're_status_pin_transaction', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getTransactionVoucher",
        value: function getTransactionVoucher(contextParams) {
          var url = this.getUrl(this.namespace, 're_transaction_voucher', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postPinTransaction",
        value: function postPinTransaction(body) {
          var url = this.getUrl(this.namespace, 'cr_pin_transaction');
          return this.http.post(url, body);
        }
      }, {
        key: "postTransactionWithVoucher",
        value: function postTransactionWithVoucher(body) {
          var url = this.getUrl(this.namespace, 'cr_transaction_voucher');
          return this.http.post(url, body);
        }
      }, {
        key: "getExamSession",
        value: function getExamSession(contextParams) {
          var url = this.getUrl(this.namespace, 're_exam_session', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getCheckEducationMajor",
        value: function getCheckEducationMajor(contextParams) {
          var url = this.getUrl(this.namespace, 're_check_technic_major', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "getGenerateExamPassLetter",
        value: function getGenerateExamPassLetter(contextParams) {
          var url = this.getUrl(this.namespace, 're_generate_exam_pass_letter', contextParams);
          return this.http.get(url);
        }
      }, {
        key: "postAnswerQuistionnaire",
        value: function postAnswerQuistionnaire(body) {
          var url = this.getUrl(this.namespace, 'cr_answer_questionnaire');
          return this.http.post(url, body);
        }
      }, {
        key: "getDocumentRequirementRaport",
        value: function getDocumentRequirementRaport(params) {
          var url = this.getUrl(this.namespace, 're_registration_doc_raport', params);
          return this.http.get(url);
        }
      }, {
        key: "getValidateSelectionProgram",
        value: function getValidateSelectionProgram(params) {
          var url = this.getUrl(this.namespace, 're_validate_participant_with_program_and_path', params);
          return this.http.get(url);
        }
      }, {
        key: "getDocumentStudy",
        value: function getDocumentStudy(params) {
          var url = this.getUrl(this.namespace, 're_document_study', params);
          return this.http.get(url);
        }
      }, {
        key: "getStudyProgramSpecialization",
        value: function getStudyProgramSpecialization(params) {
          var url = this.getUrl(this.namespace, 're_study_program_specialization', params);
          return this.http.get(url);
        }
      }, {
        key: "postDocumentStudy",
        value: function postDocumentStudy(body) {
          var url = this.getUrl(this.namespace, 'cr_document_study');
          return this.http.post(url, body);
        }
      }, {
        key: "updDocumentStudy",
        value: function updDocumentStudy(body) {
          var url = this.getUrl(this.namespace, 'up_document_study');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteDocumentStudy",
        value: function deleteDocumentStudy(body) {
          var url = this.getUrl(this.namespace, 'del_document_study');
          return this.http.post(url, body);
        }
      }, {
        key: "getPaymentMethodParticipant",
        value: function getPaymentMethodParticipant(params) {
          var url = this.getUrl(this.namespace, 're_payment_method_check', params);
          return this.http.get(url);
        }
      }, {
        key: "getDocumentRecommendation",
        value: function getDocumentRecommendation(params) {
          var url = this.getUrl(this.namespace, 're_document_recommendation', params);
          return this.http.get(url);
        }
      }, {
        key: "postDocumentRecommendation",
        value: function postDocumentRecommendation(body) {
          var url = this.getUrl(this.namespace, 'cr_document_recommendation');
          return this.http.post(url, body);
        }
      }, {
        key: "postSendUrlRecommendation",
        value: function postSendUrlRecommendation(body) {
          var url = this.getUrl(this.namespace, 'cr_url_recommendation');
          return this.http.post(url, body);
        }
      }, {
        key: "getDetailRecommendation",
        value: function getDetailRecommendation(params) {
          var url = this.getUrl(this.namespace, 're_detail_recommendation', params);
          return this.http.get(url);
        }
      }, {
        key: "getPostGraduate",
        value: function getPostGraduate(params) {
          var url = this.getUrl(this.namespace, 'get_postgraduate', params);
          return this.http.get(url);
        }
      }, {
        key: "updDocumentRecommendation",
        value: function updDocumentRecommendation(body) {
          var url = this.getUrl(this.namespace, 'up_document_recommendation');
          return this.http.post(url, body);
        }
      }, {
        key: "postDocumentProposal",
        value: function postDocumentProposal(body) {
          var url = this.getUrl(this.namespace, 'cr_document_proposal');
          return this.http.post(url, body);
        }
      }, {
        key: "updDocumentProposal",
        value: function updDocumentProposal(body) {
          var url = this.getUrl(this.namespace, 'up_document_proposal');
          return this.http.post(url, body);
        }
      }, {
        key: "deleteDocumentProposal",
        value: function deleteDocumentProposal(body) {
          var url = this.getUrl(this.namespace, 'del_document_proposal');
          return this.http.post(url, body);
        }
      }, {
        key: "getStudyProgramSpecializationName",
        value: function getStudyProgramSpecializationName(params) {
          var url = this.getUrl(this.namespace, 'get_specialization_name', params);
          return this.http.get(url);
        }
      }, {
        key: "getClassPasca",
        value: function getClassPasca(params) {
          var url = this.getUrl(this.namespace, 'get_classtype_specialization', params);
          return this.http.get(url);
        }
      }, {
        key: "getRaportSemesters",
        value: function getRaportSemesters(params) {
          var url = this.getUrl(this.namespace, 'get_raport_semesters', params);
          return this.http.get(url);
        }
      }, {
        key: "getSpecializationName",
        value: function getSpecializationName(params) {
          var url = this.getUrl(this.namespace, 'get_specialization_name', params);
          return this.http.get(url);
        }
      }, {
        key: "getClasstypeSpecialization",
        value: function getClasstypeSpecialization(params) {
          var url = this.getUrl(this.namespace, 'get_classtype_specialization', params);
          return this.http.get(url);
        }
      }, {
        key: "getUtbkDocument",
        value: function getUtbkDocument(params) {
          var url = this.getUrl(this.namespace, 'get_utbk_document', params);
          return this.http.get(url);
        }
      }, {
        key: "postUtbkDocument",
        value: function postUtbkDocument(body) {
          var url = this.getUrl(this.namespace, 'cr_utbk_document');
          return this.http.post(url, body);
        }
      }, {
        key: "updUtbkdocument",
        value: function updUtbkdocument(body) {
          var url = this.getUrl(this.namespace, 'up_utbk_document');
          return this.http.post(url, body);
        }
      }, {
        key: "postTranscriptDocument",
        value: function postTranscriptDocument(body) {
          var url = this.getUrl(this.namespace, 'cr_transcript_document');
          return this.http.post(url, body);
        }
      }, {
        key: "delTranscriptDocument",
        value: function delTranscriptDocument(body) {
          var url = this.getUrl(this.namespace, 'del_transcript_document');
          return this.http.post(url, body);
        }
      }, {
        key: "getTranscriptDocumentDetails",
        value: function getTranscriptDocumentDetails(params) {
          var url = this.getUrl(this.namespace, 're_transcript_document_details', params);
          return this.http.get(url);
        }
      }, {
        key: "getTranscriptDocument",
        value: function getTranscriptDocument(params) {
          var url = this.getUrl(this.namespace, 're_transcript_document', params);
          return this.http.get(url);
        }
      }, {
        key: "getAverageParticipantRaportCard",
        value: function getAverageParticipantRaportCard(params) {
          var url = this.getUrl(this.namespace, 're_average_participant_raport_card', params);
          return this.http.get(url);
        }
      }, {
        key: "postParticipantGrade",
        value: function postParticipantGrade(body) {
          var url = this.getUrl(this.namespace, 'cr_average_participant_raport_card');
          return this.http.post(url, body);
        }
      }, {
        key: "getStudyProgramWithPin",
        value: function getStudyProgramWithPin(params) {
          var url = this.getUrl(this.namespace, 're_study_programs_with_pin', params);
          return this.http.get(url);
        }
      }, {
        key: "getGroupWithPathExamDetails",
        value: function getGroupWithPathExamDetails(params) {
          var url = this.getUrl(this.namespace, 're_group_with_path_exam_detail', params);
          return this.http.get(url);
        }
      }, {
        key: "postMoodleUser",
        value: function postMoodleUser(body) {
          var url = this.getUrl(this.namespace, 'cr_moodle_user');
          return this.http.post(url, body);
        }
      }, {
        key: "postMoodleMember",
        value: function postMoodleMember(body) {
          var url = this.getUrl(this.namespace, 'cr_moodle_member');
          return this.http.post(url, body);
        }
      }, {
        key: "postMoodleEnrollment",
        value: function postMoodleEnrollment(body) {
          var url = this.getUrl(this.namespace, 'cr_moodle_enrolment');
          return this.http.post(url, body);
        }
      }, {
        key: "getValidateParticipantWithSelectionPath",
        value: function getValidateParticipantWithSelectionPath(params) {
          var url = this.getUrl(this.namespace, 're_validate_participant_with_selection_path', params);
          return this.http.get(url);
        }
      }, {
        key: "postDocumentPublication",
        value: function postDocumentPublication(body) {
          var url = this.getUrl(this.namespace, 'cr_document_publication');
          return this.http.post(url, body);
        }
      }, {
        key: "updDocumentPublication",
        value: function updDocumentPublication(body) {
          var url = this.getUrl(this.namespace, 'up_document_publication');
          return this.http.post(url, body);
        }
      }, {
        key: "getDocumentPublication",
        value: function getDocumentPublication(params) {
          var url = this.getUrl(this.namespace, 're_document_publication', params);
          return this.http.get(url);
        }
      }, {
        key: "deleteDocumentPublication",
        value: function deleteDocumentPublication(body) {
          var url = this.getUrl(this.namespace, 'del_document_publication');
          return this.http.post(url, body);
        }
      }, {
        key: "getPublicationPositionList",
        value: function getPublicationPositionList() {
          var url = this.getUrl(this.namespace, 're_publication_position');
          return this.http.get(url);
        }
      }, {
        key: "getPublicationTypeList",
        value: function getPublicationTypeList() {
          var url = this.getUrl(this.namespace, 're_publication_type');
          return this.http.get(url);
        }
      }, {
        key: "getNewStudentRegistration",
        value: function getNewStudentRegistration(params) {
          var url = this.getUrl(this.namespace, 'get_new_student_data', params);
          return this.http.get(url);
        }
      }, {
        key: "getTableDocumentDummy",
        value: function getTableDocumentDummy() {
          var url = this.getUrl(this.namespace, 'get_new_student_document');
          return this.http.get(url);
        }
      }, {
        key: "getParticipantDataInformation",
        value: function getParticipantDataInformation(params) {
          var url = this.getUrl(this.namespace, 'get_participant_detail', params);
          return this.http.get(url);
        }
      }, {
        key: "createMappingNewStudentStep",
        value: function createMappingNewStudentStep(body) {
          var url = this.getUrl(this.namespace, 'cr_mapping_new_student_step');
          return this.http.post(url, body);
        }
      }, {
        key: "getPartcipantNewstudent",
        value: function getPartcipantNewstudent(params) {
          var url = this.getUrl(this.namespace, 'get_new_student_participant', params);
          return this.http.get(url);
        }
      }, {
        key: "updateParticipantNewStudent",
        value: function updateParticipantNewStudent(body) {
          var url = this.getUrl(this.namespace, 'up_new_student_participant');
          return this.http.post(url, body);
        }
      }, {
        key: "getFamilyNewstudent",
        value: function getFamilyNewstudent(params) {
          var url = this.getUrl(this.namespace, 'get_relationship_participant', params);
          return this.http.get(url);
        }
      }, {
        key: "updateFamilyNewStudent",
        value: function updateFamilyNewStudent(body) {
          var url = this.getUrl(this.namespace, 'up_relationship_participant');
          return this.http.post(url, body);
        }
      }, {
        key: "getNewStudentDocument",
        value: function getNewStudentDocument(params) {
          var url = this.getUrl(this.namespace, 'get_newstudent_document', params);
          return this.http.get(url);
        }
      }, {
        key: "updateDocumentNewStudent",
        value: function updateDocumentNewStudent(body) {
          var url = this.getUrl(this.namespace, 'up_doc_new_student_participant');
          return this.http.post(url, body);
        }
      }, {
        key: "getNewStudentDocumentStatus",
        value: function getNewStudentDocumentStatus(params) {
          var url = this.getUrl(this.namespace, 'get_new_student_doc_status', params);
          return this.http.get(url);
        }
      }, {
        key: "createBillingNewStudent",
        value: function createBillingNewStudent(body) {
          var url = this.getUrl(this.namespace, 'cr_billing_new_student');
          return this.http.post(url, body);
        }
      }]);

      return ParticipantService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]);

    ParticipantService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ParticipantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ParticipantService);
    /***/
  }
}]);
//# sourceMappingURL=default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d-es5.js.map