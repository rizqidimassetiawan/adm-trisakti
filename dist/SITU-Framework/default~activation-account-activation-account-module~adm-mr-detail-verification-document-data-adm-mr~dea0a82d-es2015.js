(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d"],{

/***/ "./src/app/_services/participant.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/participant.service.ts ***!
  \**************************************************/
/*! exports provided: ParticipantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantService", function() { return ParticipantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _classes_token_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_classes/token.factory */ "./src/app/_classes/token.factory.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/_services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ParticipantService = class ParticipantService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(http, router) {
        super(http);
        this.router = router;
        this.namespace = 'participant';
        this.tokenFactory = new _classes_token_factory__WEBPACK_IMPORTED_MODULE_2__["TokenFactory"]();
    }
    postRegistrationData(body) {
        const url = this.getUrl(this.namespace, 'register_account');
        return this.http.post(url, body);
    }
    postEmailConfirmationData(body) {
        const url = this.getUrl(this.namespace, 'send_email_conf');
        return this.http.post(url, body);
    }
    postResetPassword(params, body) {
        const url = this.getUrl(this.namespace, 'cr_reset_password', params);
        return this.http.post(url, body);
    }
    postForgotPassword(body) {
        const url = this.getUrl(this.namespace, 'forgot_password');
        return this.http.post(url, body);
    }
    getParticipantDetailData(contextParams) {
        const url = this.getUrl(this.namespace, 're_participant_detail', contextParams);
        return this.http.get(url);
    }
    postParticipantDetailData(body) {
        const url = this.getUrl(this.namespace, 'up_participant_detail');
        return this.http.post(url, body);
    }
    getReligionData() {
        const url = this.getUrl(this.namespace, 're_religion');
        return this.http.get(url);
    }
    getMarriageStatusData() {
        const url = this.getUrl(this.namespace, 're_marriage_status');
        return this.http.get(url);
    }
    getCountryData() {
        const url = this.getUrl(this.namespace, 're_country');
        return this.http.get(url);
    }
    getProvinceData(contextParams) {
        const url = this.getUrl(this.namespace, 're_province', contextParams);
        return this.http.get(url);
    }
    getDistrictData(contextParams) {
        const url = this.getUrl(this.namespace, 're_district', contextParams);
        return this.http.get(url);
    }
    getEducationHistoryData(contextParams) {
        const url = this.getUrl(this.namespace, 're_education_history', contextParams);
        return this.http.get(url);
    }
    postEducationHistoryData(body) {
        const url = this.getUrl(this.namespace, 'cr_education_history');
        return this.http.post(url, body);
    }
    updEducationHistoryData(body) {
        const url = this.getUrl(this.namespace, 'up_education_history');
        return this.http.post(url, body);
    }
    deleteEducationHistoryData(body) {
        const url = this.getUrl(this.namespace, 'del_education_history');
        return this.http.post(url, body);
    }
    getParentsData(contextParams) {
        const url = this.getUrl(this.namespace, 're_family_parents', contextParams);
        return this.http.get(url);
    }
    postParentsData(body) {
        const url = this.getUrl(this.namespace, 'cr_family_parents');
        return this.http.post(url, body);
    }
    deleteParentsData(body) {
        const url = this.getUrl(this.namespace, 'del_family_parents');
        return this.http.post(url, body);
    }
    // updParentsData(body): Observable<any> {
    //   const url = this.getUrl(this.namespace, 'up_family_parents');
    //   return this.postApi(url, body);
    // }
    // updParentsData(body): Observable<any> {
    //   const url = this.getUrl(this.namespace, 'up_family_parents');
    //   return this.http.post(url, body);
    // }
    updParentsData(body) {
        const url = this.getUrl(this.namespace, 'up_family_parents');
        return this.postApiPlain(url, body);
    }
    getSiblingsData(contextParams) {
        const url = this.getUrl(this.namespace, 're_family_siblings', contextParams);
        return this.http.get(url);
    }
    getWorkHistoryData(contextParams) {
        const url = this.getUrl(this.namespace, 're_work_history', contextParams);
        return this.http.get(url);
    }
    postWorkHistoryData(body) {
        const url = this.getUrl(this.namespace, 'cr_work_history');
        return this.http.post(url, body);
    }
    updWorkHistoryData(body) {
        const url = this.getUrl(this.namespace, 'up_work_history');
        return this.http.post(url, body);
    }
    deleteWorkHistoryData(body) {
        const url = this.getUrl(this.namespace, 'del_work_history');
        return this.http.post(url, body);
    }
    getPersonalDocumentData(contextParams) {
        const url = this.getUrl(this.namespace, 're_personal_document', contextParams);
        return this.http.get(url);
    }
    postPersonalDocumentData(body) {
        const url = this.getUrl(this.namespace, 'cr_personal_document');
        return this.http.post(url, body);
    }
    updPersonalDocumentData(body) {
        const url = this.getUrl(this.namespace, 'up_doc_participant');
        return this.http.post(url, body);
    }
    deletePersonalDocumentData(body) {
        const url = this.getUrl(this.namespace, 'del_personal_document');
        return this.http.post(url, body);
    }
    getEducationDegreeData() {
        const url = this.getUrl(this.namespace, 're_education_degree');
        return this.http.get(url);
    }
    getFamilyRelationshipData(contextParams) {
        const url = this.getUrl(this.namespace, 're_family_relation', contextParams);
        return this.http.get(url);
    }
    getWorkFieldData() {
        const url = this.getUrl(this.namespace, 're_work_field');
        return this.http.get(url);
    }
    getWorkTypeData(contextParams) {
        const url = this.getUrl(this.namespace, 're_work_type', contextParams);
        return this.http.get(url);
    }
    getIncomeRangeData() {
        const url = this.getUrl(this.namespace, 're_income_range');
        return this.http.get(url);
    }
    getSchoolData(contextParams) {
        const url = this.getUrl(this.namespace, 're_school', contextParams);
        return this.http.get(url);
    }
    getSchoolMajorData() {
        const url = this.getUrl(this.namespace, 're_school_major');
        return this.http.get(url);
    }
    getRegistrationListParticipantData(contextParams) {
        const url = this.getUrl(this.namespace, 're_registration', contextParams);
        return this.http.get(url);
    }
    postStudyProgramRegistrationData(body) {
        const url = this.getUrl(this.namespace, 'cr_study_program_reg');
        return this.http.post(url, body);
    }
    updStudyProgramRegistrationData(body) {
        const url = this.getUrl(this.namespace, 'up_study_program_reg');
        return this.http.post(url, body);
    }
    delStudyProgramRegistrationData(body) {
        const url = this.getUrl(this.namespace, 'del_study_program_reg');
        return this.http.post(url, body);
    }
    postRegistrationDetailData(body) {
        const url = this.getUrl(this.namespace, 'cr_registration');
        return this.http.post(url, body);
    }
    getReportCardData(contextParams) {
        const url = this.getUrl(this.namespace, 're_doc_report_card', contextParams);
        return this.http.get(url);
    }
    postDocumentReportCardData(body) {
        const url = this.getUrl(this.namespace, 'cr_doc_report_card');
        return this.http.post(url, body);
    }
    updDocumentReportCardData(body) {
        const url = this.getUrl(this.namespace, 'up_doc_report_card');
        return this.http.post(url, body);
    }
    deleteReportCard(body) {
        const url = this.getUrl(this.namespace, 'del_doc_report_card');
        return this.http.post(url, body);
    }
    getDocumentCertificateData(contextParams) {
        const url = this.getUrl(this.namespace, 're_doc_certificate', contextParams);
        return this.http.get(url);
    }
    postDocumentCertificateData(body) {
        const url = this.getUrl(this.namespace, 'cr_doc_certificate');
        return this.http.post(url, body);
    }
    updDocumentCertificateData(body) {
        const url = this.getUrl(this.namespace, 'up_doc_certificate');
        return this.http.post(url, body);
    }
    deleteDocumentCertificate(body) {
        const url = this.getUrl(this.namespace, 'del_doc_certificate');
        return this.http.post(url, body);
    }
    getDocumentSupportingData(contextParams) {
        const url = this.getUrl(this.namespace, 're_doc_supporting', contextParams);
        return this.http.get(url);
    }
    postDocumentSupportingData(body) {
        const url = this.getUrl(this.namespace, 'cr_doc_supporting');
        return this.http.post(url, body);
    }
    updDocumentSupportingData(body) {
        const url = this.getUrl(this.namespace, 'up_doc_supporting');
        return this.http.post(url, body);
    }
    deleteDocumentSupportingData(body) {
        const url = this.getUrl(this.namespace, 'del_doc_supporting');
        return this.http.post(url, body);
    }
    getSemesterData() {
        const url = this.getUrl(this.namespace, 're_semester');
        return this.http.get(url);
    }
    getRangeScoreData() {
        const url = this.getUrl(this.namespace, 're_range');
        return this.http.get(url);
    }
    getCertificateLevelData() {
        const url = this.getUrl(this.namespace, 're_certificate_level');
        return this.http.get(url);
    }
    getCertificateTypeData() {
        const url = this.getUrl(this.namespace, 're_certificate_type');
        return this.http.get(url);
    }
    getSelectionPathData(contextParams) {
        const url = this.getUrl(this.namespace, 're_selection_path', contextParams);
        return this.http.get(url);
    }
    getActiveQuestionnaireData(contextParams) {
        const url = this.getUrl(this.namespace, 're_active_questionnaire', contextParams);
        return this.http.get(url);
    }
    getStatusQuestionnaireData(contextParams) {
        const url = this.getUrl(this.namespace, 're_status_questionnaire', contextParams);
        return this.http.get(url);
    }
    postRegistrationHistoryData(body) {
        const url = this.getUrl(this.namespace, 'cr_registration_history');
        return this.http.post(url, body);
    }
    postAnswerQuestionData(body) {
        const url = this.getUrl(this.namespace, 'cr_answer_question');
        return this.http.post(url, body);
    }
    getRegistrationCard(contextParams) {
        const url = this.getUrl(this.namespace, 'pr_registration_card', contextParams);
        return this.http.get(url);
    }
    getRegistrationHistory(contextParams) {
        const url = this.getUrl(this.namespace, 're_registration_history', contextParams);
        return this.http.get(url);
    }
    getDocumentParticipantStatus(contextParams) {
        const url = this.getUrl(this.namespace, 're_doc_participant_status', contextParams);
        return this.http.get(url);
    }
    deleteMappingStudyProgram(body) {
        const url = this.getUrl(this.namespace, 'del_mapping_study_program');
        return this.http.post(url, body);
    }
    deleteRegistrationSteps(body) {
        const url = this.getUrl(this.namespace, 'del_registration_history_steps');
        return this.http.post(url, body);
    }
    getSofId(params) {
        const url = this.getUrl(this.namespace, 're_sofId', params);
        return this.http.get(url);
    }
    getPinTransaction(contextParams) {
        const url = this.getUrl(this.namespace, 're_pin_transaction', contextParams);
        return this.http.get(url);
    }
    getStatusPinTransaction(contextParams) {
        const url = this.getUrl(this.namespace, 're_status_pin_transaction', contextParams);
        return this.http.get(url);
    }
    getTransactionVoucher(contextParams) {
        const url = this.getUrl(this.namespace, 're_transaction_voucher', contextParams);
        return this.http.get(url);
    }
    postPinTransaction(body) {
        const url = this.getUrl(this.namespace, 'cr_pin_transaction');
        return this.http.post(url, body);
    }
    postTransactionWithVoucher(body) {
        const url = this.getUrl(this.namespace, 'cr_transaction_voucher');
        return this.http.post(url, body);
    }
    getExamSession(contextParams) {
        const url = this.getUrl(this.namespace, 're_exam_session', contextParams);
        return this.http.get(url);
    }
    getCheckEducationMajor(contextParams) {
        const url = this.getUrl(this.namespace, 're_check_technic_major', contextParams);
        return this.http.get(url);
    }
    getGenerateExamPassLetter(contextParams) {
        const url = this.getUrl(this.namespace, 're_generate_exam_pass_letter', contextParams);
        return this.http.get(url);
    }
    postAnswerQuistionnaire(body) {
        const url = this.getUrl(this.namespace, 'cr_answer_questionnaire');
        return this.http.post(url, body);
    }
    getDocumentRequirementRaport(params) {
        const url = this.getUrl(this.namespace, 're_registration_doc_raport', params);
        return this.http.get(url);
    }
    getValidateSelectionProgram(params) {
        const url = this.getUrl(this.namespace, 're_validate_participant_with_program_and_path', params);
        return this.http.get(url);
    }
    getDocumentStudy(params) {
        const url = this.getUrl(this.namespace, 're_document_study', params);
        return this.http.get(url);
    }
    getStudyProgramSpecialization(params) {
        const url = this.getUrl(this.namespace, 're_study_program_specialization', params);
        return this.http.get(url);
    }
    postDocumentStudy(body) {
        const url = this.getUrl(this.namespace, 'cr_document_study');
        return this.http.post(url, body);
    }
    updDocumentStudy(body) {
        const url = this.getUrl(this.namespace, 'up_document_study');
        return this.http.post(url, body);
    }
    deleteDocumentStudy(body) {
        const url = this.getUrl(this.namespace, 'del_document_study');
        return this.http.post(url, body);
    }
    getPaymentMethodParticipant(params) {
        const url = this.getUrl(this.namespace, 're_payment_method_check', params);
        return this.http.get(url);
    }
    getDocumentRecommendation(params) {
        const url = this.getUrl(this.namespace, 're_document_recommendation', params);
        return this.http.get(url);
    }
    postDocumentRecommendation(body) {
        const url = this.getUrl(this.namespace, 'cr_document_recommendation');
        return this.http.post(url, body);
    }
    postSendUrlRecommendation(body) {
        const url = this.getUrl(this.namespace, 'cr_url_recommendation');
        return this.http.post(url, body);
    }
    getDetailRecommendation(params) {
        const url = this.getUrl(this.namespace, 're_detail_recommendation', params);
        return this.http.get(url);
    }
    getPostGraduate(params) {
        const url = this.getUrl(this.namespace, 'get_postgraduate', params);
        return this.http.get(url);
    }
    updDocumentRecommendation(body) {
        const url = this.getUrl(this.namespace, 'up_document_recommendation');
        return this.http.post(url, body);
    }
    postDocumentProposal(body) {
        const url = this.getUrl(this.namespace, 'cr_document_proposal');
        return this.http.post(url, body);
    }
    updDocumentProposal(body) {
        const url = this.getUrl(this.namespace, 'up_document_proposal');
        return this.http.post(url, body);
    }
    deleteDocumentProposal(body) {
        const url = this.getUrl(this.namespace, 'del_document_proposal');
        return this.http.post(url, body);
    }
    getStudyProgramSpecializationName(params) {
        const url = this.getUrl(this.namespace, 'get_specialization_name', params);
        return this.http.get(url);
    }
    getClassPasca(params) {
        const url = this.getUrl(this.namespace, 'get_classtype_specialization', params);
        return this.http.get(url);
    }
    getRaportSemesters(params) {
        const url = this.getUrl(this.namespace, 'get_raport_semesters', params);
        return this.http.get(url);
    }
    getSpecializationName(params) {
        const url = this.getUrl(this.namespace, 'get_specialization_name', params);
        return this.http.get(url);
    }
    getClasstypeSpecialization(params) {
        const url = this.getUrl(this.namespace, 'get_classtype_specialization', params);
        return this.http.get(url);
    }
    getUtbkDocument(params) {
        const url = this.getUrl(this.namespace, 'get_utbk_document', params);
        return this.http.get(url);
    }
    postUtbkDocument(body) {
        const url = this.getUrl(this.namespace, 'cr_utbk_document');
        return this.http.post(url, body);
    }
    updUtbkdocument(body) {
        const url = this.getUrl(this.namespace, 'up_utbk_document');
        return this.http.post(url, body);
    }
    postTranscriptDocument(body) {
        const url = this.getUrl(this.namespace, 'cr_transcript_document');
        return this.http.post(url, body);
    }
    delTranscriptDocument(body) {
        const url = this.getUrl(this.namespace, 'del_transcript_document');
        return this.http.post(url, body);
    }
    getTranscriptDocumentDetails(params) {
        const url = this.getUrl(this.namespace, 're_transcript_document_details', params);
        return this.http.get(url);
    }
    getTranscriptDocument(params) {
        const url = this.getUrl(this.namespace, 're_transcript_document', params);
        return this.http.get(url);
    }
    getAverageParticipantRaportCard(params) {
        const url = this.getUrl(this.namespace, 're_average_participant_raport_card', params);
        return this.http.get(url);
    }
    postParticipantGrade(body) {
        const url = this.getUrl(this.namespace, 'cr_average_participant_raport_card');
        return this.http.post(url, body);
    }
    getStudyProgramWithPin(params) {
        const url = this.getUrl(this.namespace, 're_study_programs_with_pin', params);
        return this.http.get(url);
    }
    getGroupWithPathExamDetails(params) {
        const url = this.getUrl(this.namespace, 're_group_with_path_exam_detail', params);
        return this.http.get(url);
    }
    postMoodleUser(body) {
        const url = this.getUrl(this.namespace, 'cr_moodle_user');
        return this.http.post(url, body);
    }
    postMoodleMember(body) {
        const url = this.getUrl(this.namespace, 'cr_moodle_member');
        return this.http.post(url, body);
    }
    postMoodleEnrollment(body) {
        const url = this.getUrl(this.namespace, 'cr_moodle_enrolment');
        return this.http.post(url, body);
    }
    getValidateParticipantWithSelectionPath(params) {
        const url = this.getUrl(this.namespace, 're_validate_participant_with_selection_path', params);
        return this.http.get(url);
    }
    postDocumentPublication(body) {
        const url = this.getUrl(this.namespace, 'cr_document_publication');
        return this.http.post(url, body);
    }
    updDocumentPublication(body) {
        const url = this.getUrl(this.namespace, 'up_document_publication');
        return this.http.post(url, body);
    }
    getDocumentPublication(params) {
        const url = this.getUrl(this.namespace, 're_document_publication', params);
        return this.http.get(url);
    }
    deleteDocumentPublication(body) {
        const url = this.getUrl(this.namespace, 'del_document_publication');
        return this.http.post(url, body);
    }
    getPublicationPositionList() {
        const url = this.getUrl(this.namespace, 're_publication_position');
        return this.http.get(url);
    }
    getPublicationTypeList() {
        const url = this.getUrl(this.namespace, 're_publication_type');
        return this.http.get(url);
    }
    getNewStudentRegistration(params) {
        const url = this.getUrl(this.namespace, 'get_new_student_data', params);
        return this.http.get(url);
    }
    getTableDocumentDummy() {
        const url = this.getUrl(this.namespace, 'get_new_student_document');
        return this.http.get(url);
    }
    getParticipantDataInformation(params) {
        const url = this.getUrl(this.namespace, 'get_participant_detail', params);
        return this.http.get(url);
    }
    createMappingNewStudentStep(body) {
        const url = this.getUrl(this.namespace, 'cr_mapping_new_student_step');
        return this.http.post(url, body);
    }
    getPartcipantNewstudent(params) {
        const url = this.getUrl(this.namespace, 'get_new_student_participant', params);
        return this.http.get(url);
    }
    updateParticipantNewStudent(body) {
        const url = this.getUrl(this.namespace, 'up_new_student_participant');
        return this.http.post(url, body);
    }
    getFamilyNewstudent(params) {
        const url = this.getUrl(this.namespace, 'get_relationship_participant', params);
        return this.http.get(url);
    }
    updateFamilyNewStudent(body) {
        const url = this.getUrl(this.namespace, 'up_relationship_participant');
        return this.http.post(url, body);
    }
    getNewStudentDocument(params) {
        const url = this.getUrl(this.namespace, 'get_newstudent_document', params);
        return this.http.get(url);
    }
    updateDocumentNewStudent(body) {
        const url = this.getUrl(this.namespace, 'up_doc_new_student_participant');
        return this.http.post(url, body);
    }
    getNewStudentDocumentStatus(params) {
        const url = this.getUrl(this.namespace, 'get_new_student_doc_status', params);
        return this.http.get(url);
    }
    createBillingNewStudent(body) {
        const url = this.getUrl(this.namespace, 'cr_billing_new_student');
        return this.http.post(url, body);
    }
};
ParticipantService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ParticipantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ParticipantService);



/***/ })

}]);
//# sourceMappingURL=default~activation-account-activation-account-module~adm-mr-detail-verification-document-data-adm-mr~dea0a82d-es2015.js.map