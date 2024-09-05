(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~fffd3126"],{

/***/ "./src/app/_services/admin-management.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/admin-management.service.ts ***!
  \*******************************************************/
/*! exports provided: AdminManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminManagementService", function() { return AdminManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _classes_token_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_classes/token.factory */ "./src/app/_classes/token.factory.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/_services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AdminManagementService = class AdminManagementService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(http, router) {
        super(http);
        this.router = router;
        this.namespace = 'admin_manage';
        this.tokenFactory = new _classes_token_factory__WEBPACK_IMPORTED_MODULE_2__["TokenFactory"]();
    }
    getProgramData(body) {
        const url = this.getUrl(this.namespace, 're_program_data');
        return this.http.post(url, body);
    }
    postProgramData(body) {
        const url = this.getUrl(this.namespace, 'cr_program_data');
        return this.http.post(url, body);
    }
    updProgramData(body) {
        const url = this.getUrl(this.namespace, 'up_program_data');
        return this.http.post(url, body);
    }
    getSelectionPathData(contextParams) {
        const url = this.getUrl(this.namespace, 're_selection_path', contextParams);
        return this.http.get(url);
    }
    getSelectionPathDetailData(contextParams) {
        const url = this.getUrl(this.namespace, 're_selection_path_detail', contextParams);
        return this.http.get(url);
    }
    postSelectionPathData(body) {
        const url = this.getUrl(this.namespace, 'cr_selection_path');
        return this.http.post(url, body);
    }
    updSelectionPathData(body) {
        const url = this.getUrl(this.namespace, 'up_selection_path');
        return this.http.post(url, body);
    }
    getExamLocationData(body) {
        const url = this.getUrl(this.namespace, 're_exam_location_data');
        return this.http.post(url, body);
    }
    postExamLocationData(body) {
        const url = this.getUrl(this.namespace, 'cr_exam_location_data');
        return this.http.post(url, body);
    }
    updExamLocationData(body) {
        const url = this.getUrl(this.namespace, 'up_exam_location_data');
        return this.http.post(url, body);
    }
    getNationalityData() {
        const url = this.getUrl(this.namespace, 're_nationality');
        return this.http.get(url);
    }
    getCityData(params) {
        const url = this.getUrl(this.namespace, 're_city', params);
        return this.http.get(url);
    }
    getRegistrationStepData() {
        const url = this.getUrl(this.namespace, 're_registration_step');
        return this.http.get(url);
    }
    getSelectionStepData(contextParams) {
        const url = this.getUrl(this.namespace, 're_selection_step', contextParams);
        return this.http.get(url);
    }
    postSelectionStepData(body) {
        const url = this.getUrl(this.namespace, 'cr_registration_step');
        return this.http.post(url, body);
    }
    updSelectionStepData(body) {
        const url = this.getUrl(this.namespace, 'up_registration_step');
        return this.http.post(url, body);
    }
    getDocumentTypeData(body) {
        const url = this.getUrl(this.namespace, 're_document_type');
        return this.http.post(url, body);
    }
    getSelectionDocument(contextParams) {
        const url = this.getUrl(this.namespace, 're_selection_document', contextParams);
        return this.http.get(url);
    }
    postSelectionDocument(body) {
        const url = this.getUrl(this.namespace, 'cr_selection_document');
        return this.http.post(url, body);
    }
    updSelectionDocument(body) {
        const url = this.getUrl(this.namespace, 'up_selection_document');
        return this.http.post(url, body);
    }
    postMappSelectionLocationData(body) {
        const url = this.getUrl(this.namespace, 're_mapp_selection_location');
        return this.http.post(url, body);
    }
    getGender() {
        const url = this.getUrl(this.namespace, 're_gender');
        return this.http.get(url);
    }
    getQuestionnaireData(contextParams) {
        const url = this.getUrl(this.namespace, 're_questionnaire', contextParams);
        return this.http.get(url);
    }
    postQuestionnaireData(body) {
        const url = this.getUrl(this.namespace, 'cr_questionnaire');
        return this.http.post(url, body);
    }
    updQuestionnaireData(body) {
        const url = this.getUrl(this.namespace, 'up_questionnaire');
        return this.http.post(url, body);
    }
    getQuestionAnswerData(contextParams) {
        const url = this.getUrl(this.namespace, 're_question_answer', contextParams);
        return this.http.get(url);
    }
    getExamLocationSelectionData(contextParams) {
        const url = this.getUrl(this.namespace, 're_exam_location_selection', contextParams);
        return this.http.get(url);
    }
    getExamLocationSelectionDatas(contextParams) {
        const url = this.getUrl(this.namespace, 're_exam_location_selections', contextParams);
        return this.http.get(url);
    }
    postExamLocationSelectionData(body) {
        const url = this.getUrl(this.namespace, 'cr_exam_location_selection');
        return this.http.post(url, body);
    }
    updExamLocationSelectionData(body) {
        const url = this.getUrl(this.namespace, 'up_exam_location_selection');
        return this.http.post(url, body);
    }
    getExamTimeData(contextParams) {
        const url = this.getUrl(this.namespace, 're_exam_time', contextParams);
        return this.http.get(url);
    }
    getExamTimeDatas(contextParams) {
        const url = this.getUrl(this.namespace, 're_exam_times', contextParams);
        return this.http.get(url);
    }
    postExamTimeData(body) {
        const url = this.getUrl(this.namespace, 'cr_exam_time');
        return this.http.post(url, body);
    }
    updExamTimeData(body) {
        const url = this.getUrl(this.namespace, 'up_exam_time');
        return this.http.post(url, body);
    }
    getPINPriceData(contextParams) {
        const url = this.getUrl(this.namespace, 're_pin_price', contextParams);
        return this.http.get(url);
    }
    postPINPriceData(body) {
        const url = this.getUrl(this.namespace, 'cr_pin_price');
        return this.http.post(url, body);
    }
    updPINPriceData(body) {
        const url = this.getUrl(this.namespace, 'up_pin_price');
        return this.http.post(url, body);
    }
    getMappingProgramStudyData(contextParams) {
        const url = this.getUrl(this.namespace, 're_mapp_study_program', contextParams);
        return this.http.get(url);
    }
    postMappingProgramStudyData(body) {
        const url = this.getUrl(this.namespace, 'cr_mapp_study_program');
        return this.http.post(url, body);
    }
    updMappingProgramStudyData(body) {
        const url = this.getUrl(this.namespace, 'up_mapp_study_program');
        return this.http.post(url, body);
    }
    getProgramStudyData() {
        const url = this.getUrl(this.namespace, 're_study_program');
        return this.http.get(url);
    }
    getProgramStudyDataWithParams(params) {
        const url = this.getUrl(this.namespace, 're_study_program', params);
        return this.http.get(url);
    }
    getFacultyData() {
        const url = this.getUrl(this.namespace, 're_faculty');
        return this.http.get(url);
    }
    getParticipantList(contextParams) {
        const url = this.getUrl(this.namespace, 're_participant_list', contextParams);
        return this.http.get(url);
    }
    getParticipantListDetail(contextParams) {
        const url = this.getUrl(this.namespace, 're_participant_list_detail', contextParams);
        return this.http.get(url);
    }
    getParticipantPaymentList(contextParams) {
        const url = this.getUrl(this.namespace, 're_participant_payment_list', contextParams);
        return this.http.get(url);
    }
    getParticipantRegistApprove(contextParams) {
        const url = this.getUrl(this.namespace, 're_participant_approve', contextParams);
        return this.http.get(url);
    }
    getRegistrationProgramStudy(contextParams) {
        const url = this.getUrl(this.namespace, 're_registration_program_study', contextParams);
        return this.http.get(url);
    }
    getRegistrationDocument(contextParams) {
        const url = this.getUrl(this.namespace, 're_registration_document', contextParams);
        return this.http.get(url);
    }
    getParticipantDetailData(contextParams) {
        const url = this.getUrl(this.namespace, 're_participant_detail', contextParams);
        return this.http.get(url);
    }
    getPaymentMethodData() {
        const url = this.getUrl(this.namespace, 're_payment_method');
        return this.http.get(url);
    }
    getQuestionTypeData() {
        const url = this.getUrl(this.namespace, 're_question_type');
        return this.http.get(url);
    }
    getQuestionData(contextParams) {
        const url = this.getUrl(this.namespace, 're_question', contextParams);
        return this.http.get(url);
    }
    postQuestionData(body) {
        const url = this.getUrl(this.namespace, 'cr_question');
        return this.http.post(url, body);
    }
    upQuestionData(body) {
        const url = this.getUrl(this.namespace, 'up_question');
        return this.http.post(url, body);
    }
    getPaymentStatusData() {
        const url = this.getUrl(this.namespace, 're_payment_status');
        return this.http.get(url);
    }
    getParticipantPassData(contextParams) {
        const url = this.getUrl(this.namespace, 're_participant_pass', contextParams);
        return this.http.get(url);
    }
    upRegistrationData(body) {
        const url = this.getUrl(this.namespace, 'up_registration');
        return this.http.post(url, body);
    }
    getAnswerOptionData(contextParams) {
        const url = this.getUrl(this.namespace, 're_answer_option', contextParams);
        return this.http.get(url);
    }
    postAnswerOptionData(body) {
        const url = this.getUrl(this.namespace, 'cr_answer_option');
        return this.http.post(url, body);
    }
    upAnswerOptionData(body) {
        const url = this.getUrl(this.namespace, 'up_answer_option');
        return this.http.post(url, body);
    }
    postupdRegistrationResultData(body) {
        const url = this.getUrl(this.namespace, 'cr_up_registration_result');
        return this.http.post(url, body);
    }
    updDocumentRegistrationData(body) {
        const url = this.getUrl(this.namespace, 'up_document_participant');
        return this.http.post(url, body);
    }
    getExamTypeData() {
        const url = this.getUrl(this.namespace, 're_exam_type');
        return this.http.get(url);
    }
    getCategoryIdData() {
        const url = this.getUrl(this.namespace, 're_category_id');
        return this.http.get(url);
    }
    getExcelParticipantListData(contextParams) {
        const url = this.getUrl(this.namespace, 'dwn_excel_participant_list', contextParams);
        return this.http.get(url);
    }
    getExcelParticipantPaymentListData(contextParams) {
        const url = this.getUrl(this.namespace, 'dwn_excel_participant_payment', contextParams);
        return this.http.get(url);
    }
    getExcelParticipantResultListData(contextParams) {
        const url = this.getUrl(this.namespace, 'dwn_excel_participant_result', contextParams);
        return this.http.get(url);
    }
    getActiveStatusData() {
        const url = this.getUrl(this.namespace, 're_active_status');
        return this.http.get(url);
    }
    getReportingParticipantPerSelectionPathData() {
        const url = this.getUrl(this.namespace, 're_reporting_participant_per_path');
        return this.http.get(url);
    }
    getReportingParticipantPerStudyProgramData() {
        const url = this.getUrl(this.namespace, 're_reporting_participant_per_stupro');
        return this.http.get(url);
    }
    getReportingParticipantPerStudyProgramDataFilters(params) {
        const url = this.getUrl(this.namespace, 're_reporting_participant_per_stupro_filters', params);
        return this.http.get(url);
    }
    getReportingParticipantPerGenderData() {
        const url = this.getUrl(this.namespace, 're_reporting_participant_per_gender');
        return this.http.get(url);
    }
    getReportingParticipantPerProvinceData() {
        const url = this.getUrl(this.namespace, 're_reporting_participant_per_prov');
        return this.http.get(url);
    }
    getReportingParticipantPerCityData() {
        const url = this.getUrl(this.namespace, 're_reporting_participant_per_city');
        return this.http.get(url);
    }
    getReportingParticipantPerSchoolData() {
        const url = this.getUrl(this.namespace, 're_reporting_participant_per_school');
        return this.http.get(url);
    }
    getReportingSelectionPathActiveData() {
        const url = this.getUrl(this.namespace, 're_reporting_selection_path_active');
        return this.http.get(url);
    }
    getReportingPINBuyerData() {
        const url = this.getUrl(this.namespace, 're_reporting_buyer_PIN');
        return this.http.get(url);
    }
    getReportingProgramActiveData() {
        const url = this.getUrl(this.namespace, 're_reporting_program_active');
        return this.http.get(url);
    }
    getReportingParticipantPerStepData() {
        const url = this.getUrl(this.namespace, 're_reporting_participant_per_step');
        return this.http.get(url);
    }
    getReportingParticipantPerStepDataFilters(params) {
        const url = this.getUrl(this.namespace, 're_reporting_participant_per_step_filters', params);
        return this.http.get(url);
    }
    getReportingActiveProgramStudyData() {
        const url = this.getUrl(this.namespace, 're_reporting_active_program_study');
        return this.http.get(url);
    }
    getEducationLast(params) {
        const url = this.getUrl(this.namespace, 're_education_last', params);
        return this.http.get(url);
    }
    insertBulkRegistrationResult(body) {
        const url = this.getUrl(this.namespace, 'cr_insert_bulk_reg_result');
        return this.http.post(url, body);
    }
    exportParticipantRegistrationExcel(body) {
        const url = this.getUrl(this.namespace, 'cr_export_participant_reg_excel');
        return this.http.post(url, body);
    }
    getParticipantPagination(params) {
        const url = this.getUrl(this.namespace, 're_participant_pagination', params);
        return this.http.get(url);
    }
    getPaymentPagination(params) {
        const url = this.getUrl(this.namespace, 're_payment_pagination', params);
        return this.http.get(url);
    }
    getResultPagination(params) {
        const url = this.getUrl(this.namespace, 're_result_pagination', params);
        return this.http.get(url);
    }
    getSelectionYear(params) {
        const url = this.getUrl(this.namespace, 're_path_year', params);
        return this.http.get(url);
    }
    getCategorySelectionProgram() {
        const url = this.getUrl(this.namespace, 're_category_program');
        return this.http.get(url);
    }
    getSelectionPathAdmin(params) {
        const url = this.getUrl(this.namespace, 're_selection_path_admin', params);
        return this.http.get(url);
    }
    getStudyPrograms() {
        const url = this.getUrl(this.namespace, 're_study_program_all');
        return this.http.get(url);
    }
    getMappingPathYear() {
        const url = this.getUrl(this.namespace, 're_mapping_path_year');
        return this.http.get(url);
    }
    postMappingPathYear(body) {
        const url = this.getUrl(this.namespace, 'cr_mapping_path_year');
        return this.http.post(url, body);
    }
    updMappingPathYear(body) {
        const url = this.getUrl(this.namespace, 'upd_mapping_path_year');
        return this.http.post(url, body);
    }
    delMappingPathYear(body) {
        const url = this.getUrl(this.namespace, 'del_mapping_path_year');
        return this.http.post(url, body);
    }
    exportPostGraduateExcel(body) {
        const url = this.getUrl(this.namespace, 'cr_export_postgraduate_excel');
        return this.http.post(url, body);
    }
    getAnnouncementData() {
        const url = this.getUrl(this.namespace, 're_announcement_card');
        return this.http.get(url);
    }
    postAnnouncementData(body) {
        const url = this.getUrl(this.namespace, 'cr_announcement_card');
        return this.http.post(url, body);
    }
    updateAnnouncementData(body) {
        const url = this.getUrl(this.namespace, 'up_announcement_card');
        return this.http.post(url, body);
    }
    deleteAnnouncementData(body) {
        const url = this.getUrl(this.namespace, 'del_announcement_card');
        return this.http.post(url, body);
    }
    getSessionPathExamDetails(params) {
        const url = this.getUrl(this.namespace, 're_session_path_exam', params);
        return this.http.get(url);
    }
    createOrUpdateSessionPathExamDetails(body) {
        const url = this.getUrl(this.namespace, 'cr_session_path_exam');
        return this.http.post(url, body);
    }
    createRaportRequirementDocument(body) {
        const url = this.getUrl(this.namespace, 'cr_raport_requirement_document');
        return this.http.post(url, body);
    }
    updateRaportRequirementDocument(body) {
        const url = this.getUrl(this.namespace, 'upd_raport_requirement_document');
        return this.http.post(url, body);
    }
    getRaportRequirementDocument(params) {
        const url = this.getUrl(this.namespace, 're_raport_requirement_document', params);
        return this.http.get(url);
    }
    createUtbkRequirementDocument(body) {
        const url = this.getUrl(this.namespace, 'cr_utbk_requirement_document');
        return this.http.post(url, body);
    }
    updateUtbkRequirementDocument(body) {
        const url = this.getUrl(this.namespace, 'upd_utbk_requirement_document');
        return this.http.post(url, body);
    }
    getUtbkRequirementDocument(params) {
        const url = this.getUrl(this.namespace, 're_utbk_requirement_document', params);
        return this.http.get(url);
    }
    createMappingPathYearIntake(body) {
        const url = this.getUrl(this.namespace, 'cr_mapping_path_year_intake');
        return this.http.post(url, body);
    }
    updateMappingPathYearIntake(body) {
        const url = this.getUrl(this.namespace, 'upd_mapping_path_year_intake');
        return this.http.post(url, body);
    }
    delMappingPathYearIntake(body) {
        const url = this.getUrl(this.namespace, 'del_mapping_path_year_intake');
        return this.http.post(url, body);
    }
    getMappingPathYearIntake(params) {
        const url = this.getUrl(this.namespace, 'get_mapping_path_year_intake', params);
        return this.http.get(url);
    }
    getVerificationTransactionPicklist() {
        const url = this.getUrl(this.namespace, 're_verification_transaction_picklist');
        return this.http.get(url);
    }
    getPassingGradeData(params) {
        const url = this.getUrl(this.namespace, 're_passing_grade', params);
        return this.http.get(url);
    }
    updatePassingGrade(body) {
        const url = this.getUrl(this.namespace, 'upd_passing_grade');
        return this.http.post(url, body);
    }
    createPassingGrade(body) {
        const url = this.getUrl(this.namespace, 'cr_passing_grade');
        return this.http.post(url, body);
    }
    createParticipantPassingGradeFaculty(body) {
        const url = this.getUrl(this.namespace, 'cr_participant_passinggrade_faculty');
        return this.http.post(url, body);
    }
    createParticipantPassingGradeUniversity(body) {
        const url = this.getUrl(this.namespace, 'cr_participant_passinggrade_university');
        return this.http.post(url, body);
    }
    getPassingGradeUniversity(params) {
        const url = this.getUrl(this.namespace, 're_approval_participant_score', params);
        return this.http.get(url);
    }
    createMoodleCategory(body) {
        const url = this.getUrl(this.namespace, 'cr_moodle_category');
        return this.http.post(url, body);
    }
    deleteMoodleCategory(body) {
        const url = this.getUrl(this.namespace, 'del_moodle_category');
        return this.http.post(url, body);
    }
    getCategoryMoodle(params) {
        const url = this.getUrl(this.namespace, 're_categories_moodle', params);
        return this.http.get(url);
    }
    insertMoodleCourse(body) {
        const url = this.getUrl(this.namespace, 'cr_moodle_course');
        return this.http.post(url, body);
    }
    deleteMoodleCourse(body) {
        const url = this.getUrl(this.namespace, 'del_moodle_course');
        return this.http.post(url, body);
    }
    getMoodleCourse(params) {
        const url = this.getUrl(this.namespace, 're_moodle_course', params);
        return this.http.get(url);
    }
    insertMoodleQuiz(body) {
        const url = this.getUrl(this.namespace, 'cr_moodle_quiz');
        return this.http.post(url, body);
    }
    deleteMoodleQuiz(body) {
        const url = this.getUrl(this.namespace, 'del_moodle_quiz');
        return this.http.post(url, body);
    }
    getMoodleQuiz(params) {
        const url = this.getUrl(this.namespace, 're_moodle_quiz', params);
        return this.http.get(url);
    }
    insertMoodleSection(body) {
        const url = this.getUrl(this.namespace, 'cr_moodle_section');
        return this.http.post(url, body);
    }
    getMoodleSection(params) {
        const url = this.getUrl(this.namespace, 're_moodle_section', params);
        return this.http.get(url);
    }
    insertMoodleGroup(body) {
        const url = this.getUrl(this.namespace, 'cr_moodle_group');
        return this.http.post(url, body);
    }
    getMoodleGroup(params) {
        const url = this.getUrl(this.namespace, 're_moodle_group', params);
        return this.http.get(url);
    }
    getDocumentNewStudent(params) {
        const url = this.getUrl(this.namespace, 'get_document_newstudent', params);
        return this.http.get(url);
    }
    getNewStudentDocument() {
        const url = this.getUrl(this.namespace, 're_new_student_doc_type');
        return this.http.get(url);
    }
    createMappingDocNewStudent(body) {
        const url = this.getUrl(this.namespace, 'cr_mapping_doc_new_student');
        return this.http.post(url, body);
    }
    deleteMappingDocNewStudent(body) {
        const url = this.getUrl(this.namespace, 'del_mapping_doc_new_student');
        return this.http.post(url, body);
    }
    createRegistrationResultProgramStudy(body) {
        const url = this.getUrl(this.namespace, 'cr_registration_result_prodi');
        return this.http.post(url, body);
    }
    updateApprovalStatusDocumentStudent(body) {
        const url = this.getUrl(this.namespace, 'up_approval_status_new_student');
        return this.http.post(url, body);
    }
    updateRejectedStatusDocumentStudent(body) {
        const url = this.getUrl(this.namespace, 'up_rejected_status_new_student');
        return this.http.post(url, body);
    }
    getProgramStudyByFacultyAdmin(params) {
        const url = this.getUrl(this.namespace, 're_program_study_by_admin_faculty', params);
        return this.http.get(url);
    }
    updateCreditTransferAdmin(body) {
        const url = this.getUrl(this.namespace, 'up_mapping_credit_transfer');
        return this.http.post(url, body);
    }
    getCreditTransferResult(params) {
        const url = this.getUrl(this.namespace, 'get_credit_transfer_equalization', params);
        return this.http.get(url);
    }
    getStudyProgramPassingGrade(params) {
        const url = this.getUrl(this.namespace, 'get_program_study_passing_grade_with_selection_path', params);
        return this.http.get(url);
    }
    insertStudentIdEmailStudent(body) {
        const url = this.getUrl(this.namespace, 'insert_student_id_and_email');
        return this.http.post(url, body);
    }
    getMoodleExamGrades(params) {
        const url = this.getUrl(this.namespace, 'get_moodle_exam_grades', params);
        return this.http.get(url);
    }
    // dummy data
    getParticipantScoreData(params) {
        const url = this.getUrl(this.namespace, 're_participant_score', params);
        return this.http.get(url);
    }
    getDataTipeUjian() {
        return this.getApi('fake-data/tipe-ujian.json');
    }
    getDataFormulir() {
        return this.getApi('fake-data/list-formulir.json');
    }
    getDataMinat() {
        return this.getApi('fake-data/list-minat.json');
    }
};
AdminManagementService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AdminManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AdminManagementService);



/***/ })

}]);
//# sourceMappingURL=default~adm-mr-detail-verification-document-data-adm-mr-detail-verification-document-data-module~app~fffd3126-es2015.js.map