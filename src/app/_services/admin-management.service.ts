import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenFactory } from '../_classes/token.factory';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminManagementService extends BaseService{
  private namespace = 'admin_manage';
  private tokenFactory = new TokenFactory();

  constructor(
    http: HttpClient,
    private router: Router
  ) {
    super(http);
  }

  getProgramData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 're_program_data');
    return this.http.post(url, body);
  }

  postProgramData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_program_data');
    return this.http.post(url, body);
  }

  updProgramData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_program_data');
    return this.http.post(url, body);
  }

  getSelectionPathData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_selection_path',contextParams);
    return this.http.get(url);
  }

  getSelectionPathDetailData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_selection_path_detail',contextParams);
    return this.http.get(url);
  }

  postSelectionPathData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_selection_path');
    return this.http.post(url, body);
  }

  updSelectionPathData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_selection_path');
    return this.http.post(url, body);
  }

  getExamLocationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 're_exam_location_data');
    return this.http.post(url, body);
  }

  postExamLocationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_exam_location_data');
    return this.http.post(url, body);
  }

  updExamLocationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_exam_location_data');
    return this.http.post(url, body);
  }

  getNationalityData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_nationality');
    return this.http.get(url);
  }

  getCityData(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_city', params);
    return this.http.get(url);
  }

  getRegistrationStepData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_registration_step');
    return this.http.get(url);
  }

  getSelectionStepData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_selection_step',contextParams);
    return this.http.get(url);
  }

  postSelectionStepData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_registration_step');
    return this.http.post(url, body);
  }

  updSelectionStepData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_registration_step');
    return this.http.post(url, body);
  }

  getDocumentTypeData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 're_document_type');
    return this.http.post(url, body);
  }

  getSelectionDocument(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_selection_document',contextParams);
    return this.http.get(url);
  }

  postSelectionDocument(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_selection_document');
    return this.http.post(url, body);
  }

  updSelectionDocument(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_selection_document');
    return this.http.post(url, body);
  }

  postMappSelectionLocationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 're_mapp_selection_location');
    return this.http.post(url, body);
  }

  getGender(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_gender');
    return this.http.get(url);
  }

  getQuestionnaireData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_questionnaire',contextParams);
    return this.http.get(url);
  }

  postQuestionnaireData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_questionnaire');
    return this.http.post(url, body);
  }

  updQuestionnaireData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_questionnaire');
    return this.http.post(url, body);
  }

  getQuestionAnswerData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_question_answer',contextParams);
    return this.http.get(url);
  }

  getExamLocationSelectionData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_exam_location_selection',contextParams);
    return this.http.get(url);
  }
  getExamLocationSelectionDatas(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_exam_location_selections',contextParams);
    return this.http.get(url);
  }

  postExamLocationSelectionData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_exam_location_selection');
    return this.http.post(url, body);
  }

  updExamLocationSelectionData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_exam_location_selection');
    return this.http.post(url, body);
  }

  getExamTimeData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_exam_time',contextParams);
    return this.http.get(url);
  }

  getExamTimeDatas(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_exam_times',contextParams);
    return this.http.get(url);
  }

  postExamTimeData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_exam_time');
    return this.http.post(url, body);
  }

  updExamTimeData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_exam_time');
    return this.http.post(url, body);
  }

  getPINPriceData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_pin_price',contextParams);
    return this.http.get(url);
  }

  postPINPriceData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_pin_price');
    return this.http.post(url, body);
  }

  updPINPriceData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_pin_price');
    return this.http.post(url, body);
  }

  getMappingProgramStudyData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_mapp_study_program',contextParams);
    return this.http.get(url);
  }

  postMappingProgramStudyData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_mapp_study_program');
    return this.http.post(url, body);
  }

  updMappingProgramStudyData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_mapp_study_program');
    return this.http.post(url, body);
  }

  getProgramStudyData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_study_program');
    return this.http.get(url);
  }

  getProgramStudyDataWithParams(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_study_program', params);
    return this.http.get(url);
  }

  getFacultyData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_faculty');
    return this.http.get(url);
  }

  getParticipantList(contextParams):Observable<any> {
    const url = this.getUrl(this.namespace, 're_participant_list',contextParams);
    return this.http.get(url);
  }

  getParticipantListDetail(contextParams):Observable<any> {
    const url = this.getUrl(this.namespace, 're_participant_list_detail',contextParams);
    return this.http.get(url);
  }

  getParticipantPaymentList(contextParams):Observable<any> {
    const url = this.getUrl(this.namespace, 're_participant_payment_list',contextParams);
    return this.http.get(url);
  }

  getParticipantRegistApprove(contextParams):Observable<any> {
    const url = this.getUrl(this.namespace, 're_participant_approve',contextParams);
    return this.http.get(url);
  }

  getRegistrationProgramStudy(contextParams):Observable<any> {
    const url = this.getUrl(this.namespace, 're_registration_program_study',contextParams);
    return this.http.get(url);
  }

  getRegistrationDocument(contextParams):Observable<any> {
    const url = this.getUrl(this.namespace, 're_registration_document',contextParams);
    return this.http.get(url);
  }

  getParticipantDetailData(contextParams):Observable<any> {
    const url = this.getUrl(this.namespace, 're_participant_detail',contextParams);
    return this.http.get(url);
  }

  getPaymentMethodData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_payment_method');
    return this.http.get(url);
  }

  getQuestionTypeData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_question_type');
    return this.http.get(url);
  }

  getQuestionData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_question',contextParams);
    return this.http.get(url);
  }

  postQuestionData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_question');
    return this.http.post(url, body);
  }

  upQuestionData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_question');
    return this.http.post(url, body);
  }

  getPaymentStatusData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_payment_status');
    return this.http.get(url);
  }

  getParticipantPassData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_participant_pass',contextParams);
    return this.http.get(url);
  }

  upRegistrationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_registration');
    return this.http.post(url, body);
  }

  getAnswerOptionData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_answer_option',contextParams);
    return this.http.get(url);
  }

  postAnswerOptionData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_answer_option');
    return this.http.post(url, body);
  }

  upAnswerOptionData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_answer_option');
    return this.http.post(url, body);
  }

  postupdRegistrationResultData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_up_registration_result');
    return this.http.post(url, body);
  }

  updDocumentRegistrationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_document_participant');

    return this.http.post(url, body);
  }

  getExamTypeData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_exam_type');
    return this.http.get(url);
  }

  getCategoryIdData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_category_id');
    return this.http.get(url);
  }

  getExcelParticipantListData(contextParams):Observable<any> {
    const url = this.getUrl(this.namespace, 'dwn_excel_participant_list',contextParams);
    return this.http.get(url);
  }

  getExcelParticipantPaymentListData(contextParams):Observable<any> {
    const url = this.getUrl(this.namespace, 'dwn_excel_participant_payment',contextParams);
    return this.http.get(url);
  }

  getExcelParticipantResultListData(contextParams):Observable<any> {
    const url = this.getUrl(this.namespace, 'dwn_excel_participant_result',contextParams);
    return this.http.get(url);
  }

  getActiveStatusData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_active_status');
    return this.http.get(url);
  }

  getReportingParticipantPerSelectionPathData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_participant_per_path');
    return this.http.get(url);
  }

  getReportingParticipantPerStudyProgramData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_participant_per_stupro');
    return this.http.get(url);
  }

  getReportingParticipantPerStudyProgramDataFilters(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_participant_per_stupro_filters', params);
    return this.http.get(url);
  }

  getReportingParticipantPerGenderData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_participant_per_gender');
    return this.http.get(url);
  }

  getReportingParticipantPerProvinceData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_participant_per_prov');
    return this.http.get(url);
  }

  getReportingParticipantPerCityData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_participant_per_city');
    return this.http.get(url);
  }

  getReportingParticipantPerSchoolData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_participant_per_school');
    return this.http.get(url);
  }

  getReportingSelectionPathActiveData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_selection_path_active');
    return this.http.get(url);
  }

  getReportingPINBuyerData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_buyer_PIN');
    return this.http.get(url);
  }

  getReportingProgramActiveData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_program_active');
    return this.http.get(url);
  }

  getReportingParticipantPerStepData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_participant_per_step');
    return this.http.get(url);
  }

  getReportingParticipantPerStepDataFilters(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_participant_per_step_filters', params);
    return this.http.get(url);
  }

  getReportingActiveProgramStudyData():Observable<any> {
    const url = this.getUrl(this.namespace, 're_reporting_active_program_study');
    return this.http.get(url);
  }

  getEducationLast(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_education_last', params);
    return this.http.get(url);
  }

  insertBulkRegistrationResult(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_insert_bulk_reg_result');
    return this.http.post(url, body);
  }

  exportParticipantRegistrationExcel(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_export_participant_reg_excel');
    return this.http.post(url, body);
  }

  getParticipantPagination(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_participant_pagination', params);
    return this.http.get(url);
  }

  getPaymentPagination(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_payment_pagination', params);
    return this.http.get(url);
  }

  getResultPagination(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_result_pagination', params);
    return this.http.get(url);
  }

  getSelectionYear(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_path_year', params);
    return this.http.get(url);
  }

  getCategorySelectionProgram(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_category_program');
    return this.http.get(url);
  }

  getSelectionPathAdmin(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_selection_path_admin', params);
    return this.http.get(url);
  }

  getStudyPrograms(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_study_program_all');
    return this.http.get(url);
  }

  getMappingPathYear(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_mapping_path_year');
    return this.http.get(url);
  }

  postMappingPathYear(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_mapping_path_year');
    return this.http.post(url, body);
  }

  updMappingPathYear(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'upd_mapping_path_year');
    return this.http.post(url, body);
  }

  delMappingPathYear(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_mapping_path_year');
    return this.http.post(url, body);
  }

  exportPostGraduateExcel(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_export_postgraduate_excel');
    return this.http.post(url, body);
  }

  getAnnouncementData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_announcement_card');
    return this.http.get(url);
  }

  postAnnouncementData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_announcement_card');
    return this.http.post(url, body);
  }

  updateAnnouncementData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_announcement_card');
    return this.http.post(url, body);
  }
  deleteAnnouncementData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_announcement_card');
    return this.http.post(url, body);
  }

  getSessionPathExamDetails(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_session_path_exam', params);
    return this.http.get(url);
  }

  createOrUpdateSessionPathExamDetails(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_session_path_exam');
    return this.http.post(url, body);
  }

  createRaportRequirementDocument(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_raport_requirement_document');
    return this.http.post(url, body);
  }

  updateRaportRequirementDocument(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'upd_raport_requirement_document');
    return this.http.post(url, body);
  }

  getRaportRequirementDocument(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_raport_requirement_document', params);
    return this.http.get(url);
  }
  
  createUtbkRequirementDocument(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_utbk_requirement_document');
    return this.http.post(url, body);
  }
  
  updateUtbkRequirementDocument(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'upd_utbk_requirement_document');
    return this.http.post(url, body);
  }

  getUtbkRequirementDocument(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_utbk_requirement_document', params);
    return this.http.get(url);
  }
  createMappingPathYearIntake(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_mapping_path_year_intake');
    return this.http.post(url, body);
  }

  updateMappingPathYearIntake(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'upd_mapping_path_year_intake');
    return this.http.post(url, body);
  }

  delMappingPathYearIntake(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_mapping_path_year_intake');
    return this.http.post(url, body);
  }

  getMappingPathYearIntake(params): Observable<any> {
    const url = this.getUrl(this.namespace, 'get_mapping_path_year_intake', params);
    return this.http.get(url);
  }

  getVerificationTransactionPicklist(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_verification_transaction_picklist');
    return this.http.get(url);
  }

  getPassingGradeData(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_passing_grade', params);
    return this.http.get(url);
  }

  updatePassingGrade(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'upd_passing_grade');
    return this.http.post(url, body);
  }

  createPassingGrade(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_passing_grade');
    return this.http.post(url, body);
  }

  createParticipantPassingGradeFaculty(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_participant_passinggrade_faculty');
    return this.http.post(url, body);
  }

  createParticipantPassingGradeUniversity(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_participant_passinggrade_university');
    return this.http.post(url, body);
  }

  
  getPassingGradeUniversity(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_approval_participant_score', params);
    return this.http.get(url);
  }
  
  createMoodleCategory(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_moodle_category');
    return this.http.post(url, body);
  }

  deleteMoodleCategory(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_moodle_category');
    return this.http.post(url, body);
  }

  getCategoryMoodle(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_categories_moodle', params);
    return this.http.get(url);
  }

  insertMoodleCourse(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_moodle_course');
    return this.http.post(url, body);
  }

  deleteMoodleCourse(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_moodle_course');
    return this.http.post(url, body);
  }

  getMoodleCourse(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_moodle_course', params);
    return this.http.get(url);
  }

  insertMoodleQuiz(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_moodle_quiz');
    return this.http.post(url, body);
  }

  deleteMoodleQuiz(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_moodle_quiz');
    return this.http.post(url, body);
  }

  getMoodleQuiz(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_moodle_quiz', params);
    return this.http.get(url);
  }

  insertMoodleSection(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_moodle_section');
    return this.http.post(url, body);
  }

  getMoodleSection(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_moodle_section', params);
    return this.http.get(url);
  }

  insertMoodleGroup(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_moodle_group');
    return this.http.post(url, body);
  }

  
  getMoodleGroup(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_moodle_group', params);
    return this.http.get(url);
  }

  getDocumentNewStudent(params): Observable<any> {
    const url = this.getUrl(this.namespace, 'get_document_newstudent', params);
    return this.http.get(url);
  }

  getNewStudentDocument(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_new_student_doc_type');
    return this.http.get(url);
  }

  createMappingDocNewStudent(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_mapping_doc_new_student');
    return this.http.post(url, body);
  }
  
  deleteMappingDocNewStudent(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_mapping_doc_new_student');
    return this.http.post(url, body);
  }
  
  createRegistrationResultProgramStudy(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_registration_result_prodi');
    return this.http.post(url, body);
  }

  updateApprovalStatusDocumentStudent(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_approval_status_new_student');
    return this.http.post(url, body);
  }

  updateRejectedStatusDocumentStudent(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_rejected_status_new_student');
    return this.http.post(url, body);
  }
  
  getProgramStudyByFacultyAdmin(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_program_study_by_admin_faculty', params);
    return this.http.get(url);
  }
  
  updateCreditTransferAdmin(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_mapping_credit_transfer');
    return this.http.post(url, body);
  }
  
  getCreditTransferResult(params): Observable<any> {
    const url = this.getUrl(this.namespace, 'get_credit_transfer_equalization', params);
    return this.http.get(url);
  }
  
  getStudyProgramPassingGrade(params): Observable<any> {
    const url = this.getUrl(this.namespace, 'get_program_study_passing_grade_with_selection_path', params);
    return this.http.get(url);
  }
  
  insertStudentIdEmailStudent(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'insert_student_id_and_email');
    return this.http.post(url, body);
  }

  getMoodleExamGrades(params): Observable<any> {
    const url = this.getUrl(this.namespace, 'get_moodle_exam_grades', params);
    return this.http.get(url);
  }
  // dummy data
  getParticipantScoreData(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_participant_score', params);
    return this.http.get(url);
  }

}
