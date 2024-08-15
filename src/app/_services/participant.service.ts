import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenFactory } from '../_classes/token.factory';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Router } from '@angular/router';

export interface userData{
  data: [],

}
@Injectable({
  providedIn: 'root'
})
export class ParticipantService extends BaseService{
  private namespace = 'participant';
  private tokenFactory = new TokenFactory();

  constructor(
    http: HttpClient,
    private router: Router
  ) {
    super(http);
  }

  postRegistrationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'register_account');
    return this.http.post(url, body);
  }

  postEmailConfirmationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'send_email_conf');
    return this.http.post(url, body);
  }

  postResetPassword(params, body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_reset_password', params);
    return this.http.post(url, body);
  }

  postForgotPassword(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'forgot_password');
    return this.http.post(url, body);
  }

  getParticipantDetailData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_participant_detail',contextParams);
    return this.http.get(url);
  }

  postParticipantDetailData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_participant_detail');
    return this.http.post(url, body);
  }

  getReligionData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_religion');
    return this.http.get(url);
  }

  getMarriageStatusData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_marriage_status');
    return this.http.get(url);
  }

  getCountryData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_country');
    return this.http.get(url);
  }

  getProvinceData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_province',contextParams);
    return this.http.get(url);
  }

  getDistrictData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_district',contextParams);
    return this.http.get(url);
  }

  getEducationHistoryData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_education_history',contextParams);
    return this.http.get(url);
  }

  postEducationHistoryData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_education_history');
    return this.http.post(url, body);
  }

  updEducationHistoryData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_education_history');
    return this.http.post(url, body);
  }

  deleteEducationHistoryData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_education_history');
    return this.http.post(url, body);
  }

  getParentsData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_family_parents',contextParams);
    return this.http.get(url);
  }

  postParentsData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_family_parents');
    return this.http.post(url, body);
  }

  deleteParentsData(body): Observable<any> {
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

  updParentsData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_family_parents');
    return this.postApiPlain(url, body);
  }

  getSiblingsData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_family_siblings',contextParams);
    return this.http.get(url);
  }

  getWorkHistoryData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_work_history',contextParams);
    return this.http.get(url);
  }

  postWorkHistoryData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_work_history');
    return this.http.post(url, body);
  }

  updWorkHistoryData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_work_history');
    return this.http.post(url, body);
  }

  deleteWorkHistoryData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_work_history');
    return this.http.post(url, body);
  }

  getPersonalDocumentData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_personal_document',contextParams);
    return this.http.get(url);
  }

  postPersonalDocumentData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_personal_document');
    return this.http.post(url, body);
  }

  updPersonalDocumentData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_doc_participant');
    return this.http.post(url, body);
  }

  deletePersonalDocumentData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_personal_document');
    return this.http.post(url, body);
  }

  getEducationDegreeData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_education_degree');
    return this.http.get(url);
  }

  getFamilyRelationshipData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_family_relation',contextParams);
    return this.http.get(url);
  }

  getWorkFieldData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_work_field');
    return this.http.get(url);
  }

  getWorkTypeData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_work_type',contextParams);
    return this.http.get(url);
  }

  getIncomeRangeData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_income_range');
    return this.http.get(url);
  }

  getSchoolData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_school',contextParams);
    return this.http.get(url);
  }

  getSchoolMajorData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_school_major');
    return this.http.get(url);
  }

  getRegistrationListParticipantData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_registration',contextParams);
    return this.http.get(url);
  }

  postStudyProgramRegistrationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_study_program_reg');
    return this.http.post(url, body);
  }

  updStudyProgramRegistrationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_study_program_reg');
    return this.http.post(url, body);
  }

  delStudyProgramRegistrationData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_study_program_reg');
    return this.http.post(url, body);
  }

  postRegistrationDetailData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_registration');
    return this.http.post(url, body);
  }

  getReportCardData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_doc_report_card',contextParams);
    return this.http.get(url);
  }

  postDocumentReportCardData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_doc_report_card');
    return this.http.post(url, body);
  }

  updDocumentReportCardData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_doc_report_card');
    return this.http.post(url, body);
  }

  deleteReportCard(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_doc_report_card');
    return this.http.post(url, body);
  }

  getDocumentCertificateData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_doc_certificate',contextParams);
    return this.http.get(url);
  }

  postDocumentCertificateData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_doc_certificate');
    return this.http.post(url, body);
  }

  updDocumentCertificateData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_doc_certificate');
    return this.http.post(url, body);
  }

  deleteDocumentCertificate(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_doc_certificate');
    return this.http.post(url, body);
  }

  getDocumentSupportingData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_doc_supporting',contextParams);
    return this.http.get(url);
  }

  postDocumentSupportingData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_doc_supporting');
    return this.http.post(url, body);
  }

  updDocumentSupportingData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_doc_supporting');
    return this.http.post(url, body);
  }

  deleteDocumentSupportingData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_doc_supporting');
    return this.http.post(url, body);
  }

  getSemesterData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_semester');
    return this.http.get(url);
  }

  getRangeScoreData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_range');
    return this.http.get(url);
  }

  getCertificateLevelData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_certificate_level');
    return this.http.get(url);
  }

  getCertificateTypeData(): Observable<any> {
    const url = this.getUrl(this.namespace, 're_certificate_type');
    return this.http.get(url);
  }

  getSelectionPathData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_selection_path',contextParams);
    return this.http.get(url);
  }

  getActiveQuestionnaireData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_active_questionnaire',contextParams);
    return this.http.get(url);
  }

  getStatusQuestionnaireData(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_status_questionnaire',contextParams);
    return this.http.get(url);
  }

  postRegistrationHistoryData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_registration_history');
    return this.http.post(url, body);
  }

  postAnswerQuestionData(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_answer_question');
    return this.http.post(url, body);
  }

  getRegistrationCard(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 'pr_registration_card',contextParams);
    return this.http.get(url);
  }

  getRegistrationHistory(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_registration_history',contextParams);
    return this.http.get(url);
  }

  getDocumentParticipantStatus(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_doc_participant_status',contextParams);
    return this.http.get(url);
  }

  deleteMappingStudyProgram(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_mapping_study_program');
    return this.http.post(url, body);
  }

  deleteRegistrationSteps(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_registration_history_steps');
    return this.http.post(url, body);
  }

  getSofId(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_sofId', params);
    return this.http.get(url);
  }

  getPinTransaction(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_pin_transaction', contextParams);
    return this.http.get(url);
  }

  getStatusPinTransaction(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_status_pin_transaction', contextParams);
    return this.http.get(url);
  }

  getTransactionVoucher(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_transaction_voucher', contextParams);
    return this.http.get(url);
  }

  postPinTransaction(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_pin_transaction');
    return this.http.post(url, body);
  }
  postTransactionWithVoucher(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_transaction_voucher');
    return this.http.post(url, body);
  }

  getExamSession(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_exam_session', contextParams);
    return this.http.get(url);
  }

  getCheckEducationMajor(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_check_technic_major', contextParams);
    return this.http.get(url);

  }
  getGenerateExamPassLetter(contextParams): Observable<any> {
    const url = this.getUrl(this.namespace, 're_generate_exam_pass_letter', contextParams);
    return this.http.get(url);
  }

  postAnswerQuistionnaire(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_answer_questionnaire');
    return this.http.post(url, body);
  }

  getDocumentRequirementRaport(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_registration_doc_raport', params);
    return this.http.get(url);
  }

  getValidateSelectionProgram(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_validate_participant_with_program_and_path', params);
    return this.http.get(url);
  }

  getDocumentStudy(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_document_study', params);
    return this.http.get(url);
  }

  getStudyProgramSpecialization(params): Observable<any> {
    const url = this.getUrl(this.namespace, 're_study_program_specialization', params);
    return this.http.get(url);
  }

  postDocumentStudy(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_document_study');
    return this.http.post(url, body);
  }

  updDocumentStudy(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_document_study');
    return this.http.post(url, body);
  }

  deleteDocumentStudy(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_document_study');
    return this.http.post(url, body);
  }


  getPaymentMethodParticipant(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_payment_method_check', params);
    return this.http.get(url);
  }

  getDocumentRecommendation(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_document_recommendation', params);
    return this.http.get(url);
  }

  postDocumentRecommendation(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_document_recommendation');
    return this.http.post(url, body);
  }

  postSendUrlRecommendation(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_url_recommendation');
    return this.http.post(url, body);
  }

  getDetailRecommendation(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_detail_recommendation', params);
    return this.http.get(url);
  }

  getPostGraduate(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_postgraduate', params);
    return this.http.get(url);
  }

  updDocumentRecommendation(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_document_recommendation');
    return this.http.post(url, body);
  }

  postDocumentProposal(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_document_proposal');
    return this.http.post(url, body);
  }

  updDocumentProposal(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_document_proposal');
    return this.http.post(url, body);
  }

  deleteDocumentProposal(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_document_proposal');
    return this.http.post(url, body);
  }

  getStudyProgramSpecializationName(params): Observable<any> {
    const url = this.getUrl(this.namespace, 'get_specialization_name', params);
    return this.http.get(url);
  }

  getClassPasca(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_classtype_specialization', params);
    return this.http.get(url);
  }

  getRaportSemesters(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_raport_semesters', params);
    return this.http.get(url);
  }

  getSpecializationName(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_specialization_name', params);
    return this.http.get(url);
  }

  getClasstypeSpecialization(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_classtype_specialization', params);
    return this.http.get(url);
  }

  getUtbkDocument(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_utbk_document', params);
    return this.http.get(url);
  }

  postUtbkDocument(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_utbk_document');
    return this.http.post(url, body);
  }

  updUtbkdocument(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_utbk_document');
    return this.http.post(url, body);
  }

  postTranscriptDocument(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_transcript_document');
    return this.http.post(url, body);
  }

  delTranscriptDocument(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_transcript_document');
    return this.http.post(url, body);
  }

  getTranscriptDocumentDetails(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_transcript_document_details', params);
    return this.http.get(url);
  }

  getTranscriptDocument(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_transcript_document', params);
    return this.http.get(url);
  }

  getAverageParticipantRaportCard(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_average_participant_raport_card', params);
    return this.http.get(url);
  }

  postParticipantGrade(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_average_participant_raport_card');
    return this.http.post(url, body);
  }

  getStudyProgramWithPin(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_study_programs_with_pin', params);
    return this.http.get(url);
  }

  getGroupWithPathExamDetails(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_group_with_path_exam_detail', params);
    return this.http.get(url);
  }
  
  postMoodleUser(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_moodle_user');
    return this.http.post(url, body);
  }
  
  postMoodleMember(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_moodle_member');
    return this.http.post(url, body);
  }
  
  postMoodleEnrollment(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_moodle_enrolment');
    return this.http.post(url, body);
  }

  getValidateParticipantWithSelectionPath(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_validate_participant_with_selection_path', params);
    return this.http.get(url);
  }

  postDocumentPublication(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_document_publication');
    return this.http.post(url, body);
  }

  updDocumentPublication(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_document_publication');
    return this.http.post(url, body);
  }
  
  getDocumentPublication(params):Observable<any> {
    const url = this.getUrl(this.namespace, 're_document_publication', params);
    return this.http.get(url);
  }

  deleteDocumentPublication(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'del_document_publication');
    return this.http.post(url, body);
  }

  getPublicationPositionList():Observable<any> {
    const url = this.getUrl(this.namespace, 're_publication_position');
    return this.http.get(url);
  }

  getPublicationTypeList():Observable<any> {
    const url = this.getUrl(this.namespace, 're_publication_type');
    return this.http.get(url);
  }

  getNewStudentRegistration(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_new_student_data', params);
    return this.http.get(url);
  }

  getTableDocumentDummy():Observable<any> {
    const url = this.getUrl(this.namespace, 'get_new_student_document');
    return this.http.get(url);
  }

  getParticipantDataInformation(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_participant_detail', params);
    return this.http.get(url);
  }
  
  createMappingNewStudentStep(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_mapping_new_student_step');
    return this.http.post(url, body);
  }
  
  getPartcipantNewstudent(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_new_student_participant', params);
    return this.http.get(url);
  }
  
  updateParticipantNewStudent(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_new_student_participant');
    return this.http.post(url, body);
  }

  getFamilyNewstudent(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_relationship_participant', params);
    return this.http.get(url);
  }
  
  updateFamilyNewStudent(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_relationship_participant');
    return this.http.post(url, body);
  }
  
  getNewStudentDocument(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_newstudent_document', params);
    return this.http.get(url);
  }

  updateDocumentNewStudent(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'up_doc_new_student_participant');
    return this.http.post(url, body);
  }
  
  getNewStudentDocumentStatus(params):Observable<any> {
    const url = this.getUrl(this.namespace, 'get_new_student_doc_status', params);
    return this.http.get(url);
  }

  createBillingNewStudent(body): Observable<any> {
    const url = this.getUrl(this.namespace, 'cr_billing_new_student');
    return this.http.post(url, body);
  }
}


