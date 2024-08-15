import { OauthService } from './../../../_services/oauth.service';
import { Component, OnInit, ViewChild, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { any, uniq } from 'underscore';
import { WizardComponent } from 'ng2-archwizard/dist';
import * as _ from 'underscore';
import { findIndex } from 'rxjs/operators';
import { TextAttribute } from '@angular/compiler/src/render3/r3_ast';
import { Injectable, Injector } from '@angular/core';

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrls: ['./registration-data.component.scss']
})
export class RegistrationDataComponent implements OnInit {
  @ViewChild('modalOrderForm', { static: true }) public modalOrderForm: any;

  public studyProgramDataForm: FormGroup;
  public registration_number: any;
  public loadingSemester: boolean;
  public selection_path_id: any;
  public loading: boolean;
  public loadingCard: boolean;
  public loadStudyProgram: boolean;
  public edit: any;
  public loadFilter: boolean;
  public selectionProgramId: any;
  public selectionPathId: any;
  public userProfile: any;
  public userData: any;
  public documentUrl: any;
  public documentTypeId: any;
  public documentTypePersonal: any;
  public documentTypeStudy: any;
  public documentidPersonal: string;
  public dataAbilityUrl: any;
  public dataRecommendationUrl: any;
  public dataStudyUrl: any;
  public dataProposal: any;
  public mappingStudyProgramReg: any;
  public documentSupportingId: any;
  public documentAbilitySupportingId: any;
  public documentReportCardId: any;
  public documentCertificateId: any;
  public documentParticipantId: any;
  public documentTranscriptId: any;
  public documentAbilitytId: any;
  public docid: any;
  public payment_code: any;
  public url_payment: any;
  public documentReportTranscriptId: any;
  public documentRecommendationId: any;
  public documentStudyId: any;
  public documentAbilityid: any;
  public listSpecialization: any;
  public documentIdCheck: any;
  public isMaxStudy: boolean;
  public isIdGet: boolean;
  public noEducationFund: boolean;
  public minDonation: string;
  public dataSession: any;
  public isOtherProgram: boolean;
  public isPjjProgram: boolean;
  public isPascasarjanaProgram: boolean;
  public viewRecommendationS2: boolean;
  public idRecommendation1: number;
  public idRecommendation2: number;
  public isNotFinpay: boolean;
  public loadingData: boolean;
  public isSaintek: boolean;
  public keyName: any;
  public isMathStudy: boolean;
  public isBahasaStudy: boolean;
  public isEnglishStudy: boolean;
  public chemicalStudy: boolean;
  public biologyStudy: boolean;
  public physicsStudy: boolean;
  public economyStudy: boolean;
  public sociologicalStudy: boolean;
  public geographyStudy: boolean;
  public isVirtualAccount: boolean;
  public courseTotal: boolean;
  public paymentMethodId: string;
  public pathExamDetailSelected: string;
  public listPathExamDetail: any;
  public loadingStudyPrograms:boolean;
  //for filtering (dropdown)
  public listPaymentMethod: any;
  public paymentMethod: string;
  public listFaculty: any;
  public dataProdi: any;
  public faculty: string;
  public listStudyProgram: any;
  public studyProgram: string;
  public sks: string;
  public studyProgram1: string;
  public listSemester: any;
  public semester: string;
  public listRangeScore: any;
  public rangeScore: string;
  public listCertificateLevel: any;
  public certificateLevel: string;
  public listCertificateType: any;
  public certificateType: string;
  public listExamLocation: any;
  public examLocation: string;
  public listExamDate: any;
  public examDate: string;
  public isViewData: boolean;
  public dataMappingProdi: any;
  public minimumDonation: string;
  public studyProgramId: string;
  public isShowIdentityNumber: boolean;
  public semesterList: Array<any>;
  public loadingRecommendation: boolean;
  public educationFundHidden: boolean;
  public idPinPrice: string;
  public showPassport: boolean;
  public email: any;
  public fullname: any;
  public phonenumber: any;
  public isCollapse: boolean;
  public isCollapseReg: boolean;
  public tableDataTranscript: Array<any>;
  public loadTableTranscript: boolean;
  public disabledNextStepDocument: boolean;
  public disabledPayment: boolean;
  public formDataUtbk = new FormData();
  public formDataUtbkUpd = new FormData();
  public formDataTranscript = new FormData();
  public formTypeUtbk: any;
  public isUtbkUpdated: boolean;
  public documentUtbkId: any;
  public documentTypeUtbk: any;
  public dataUtbkUrl: any;
  public selectedCategoryUtbk: string;
  public listCategoryUtbk: any;
  public loadingDocumentCard: boolean;
  public tableTranscript: Array<any>;
  public isRaportCategory: boolean;
  public loadingRegCard: boolean;
  public loadingPinPriceCard: boolean;
  public hiddenStudyProgram: boolean;
  public tableDataPublication: Array<any>;
  public listWriterPosition: any;
  public listPublicationType: any;
  public publicationID: number;
  public documentPublicationTypeId: number;
  public selectedWriterPosition: string;
  public selectedPublicationType: string;
  public publicationiD: number;
  public haveDocumentPersonal: boolean;
  public haveTranscriptDoc: boolean;
  public haveDocumentStudy: boolean;
  public haveProposalDocument: boolean;
  public haveLinkPublication: boolean;
  public haveLinkRecommendationS2: boolean;
  public haveAbilityDocument: boolean;
  public haveSupportingDocument: boolean;
  public loadingMaximunStudy: boolean;
  public rangeScoreIndex: boolean;
  public isNotHaveMappingData: boolean;
  @ViewChild(WizardComponent, { static: true }) public wizard: WizardComponent;

  @ViewChildren(DataTableDirective)
  dtElements: QueryList<DataTableDirective>;
  dtOptions: any = [];

  /*Document Selection Table*/
  // @ViewChild(DataTableDirective, {static: true}) public dtElement: DataTableDirective;
  public loadtableSelectionDocumentData: boolean;
  public dataTableSelectionDocumentData: any;
  // public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  /*Registration Program Study Table*/
  // @ViewChild(DataTableDirective, {static: true}) public dtElement1: DataTableDirective;
  public loadtableRegistrationProgramStudyData: boolean;
  public dataTableRegistrationProgramStudyData: any;
  // public dtOptions1: any;
  public tableData3: Array<any>;
  public dtTrigger3 = new Subject();
  public tableData4: Array<any>;
  public dtTrigger4 = new Subject();

  /*Report Card Document Table*/
  // @ViewChild(DataTableDirective, {static: true}) public dtElement2: DataTableDirective;
  public loadtableReportCardData: boolean;
  public dataTableReportCardData: any;
  // public dtOptions2: any;
  public tableData1: Array<any>;
  public dtTrigger1 = new Subject();

  /*Certificate Document Table*/
  // @ViewChild(DataTableDirective, {static: true}) public dtElement3: DataTableDirective;
  public loadtableCertificateData: boolean;
  public dataTableCertificateData: any;
  // public dtOptions3: any;
  public tableData2: Array<any>;
  public dtTrigger2 = new Subject();
  public dtTrigger5 = new Subject();

  // document
  public formType: any;
  public formTypeCertificate: any;
  public formTypePersonal: any;
  public formTypeAbility: any;
  public formTypeRecommendation: any;
  public formTypeStudy: any;
  public formTypeRecommendationS2: any;
  public formTypeProposal: any;
  public type = 'default';
  public listDocumentReport: any;
  public listDocumentCertificate: any;
  public listDocumentStudy: any;
  public dataRequirementUrl: any;
  public dataTranscriptUrl: any;
  public dataTranscriptUrlDoc: any;
  public isViewRaport: boolean;
  public isViewCertificate: boolean;
  public isUpdatedRequirement: boolean;
  public isUpdatedTranscript: boolean;
  public isUpdatedAbilityPayment: boolean;
  public isUisRecommendationUpdated: boolean;
  public isEprtUpdated: boolean;
  public isTPADocument: boolean;
  public isIPKDocument: boolean;
  public isEPRTDocument: boolean;
  public isPromotor: boolean;
  public isCoPromotor: boolean;
  public isSuratIjinAtasan: boolean;
  public isResidensi: boolean;
  public isProposal: boolean;
  public haveDocumentData: boolean;
  public USD: string;
  public USD_currency: string;
  public mappingPathYearId: any;
  public isCollapsed: boolean;
  public selectedUtbk: string;
  public listUtbk: Array<any>;
  public participantId: number;
  public moodleGroupId: number;
  public pathExamDetailID: number;
  public courseId: number;
  public formTypeIjazah: any;
  public isIjazahS1: boolean;
  public isIjazahS2: boolean;
  public isPortofolio: boolean;
  public isIjazahUpdated: boolean;
  public haveDocumentIjazah: boolean;
  public documentTypeIjazah: any;
  public documentId: any;
  public dataIjazah: any;
  public isTranscript: boolean;
  public loadTablePublication: boolean;
  @ViewChild('documentRequirementModal', { static: true }) public documentRequirementModal: any;
  @ViewChild('reportCardRequirementModal', { static: true }) public reportCardRequirementModal: any;
  @ViewChild('certificateRequirementModal', { static: true }) public certificateRequirementModal: any;
  @ViewChild('transcriptRequirementModal', { static: true }) public transcriptRequirementModal: any;
  @ViewChild('transcriptCreditTransferRequirementModal', { static: true }) public transcriptCreditTransferRequirementModal: any;
  @ViewChild('paymentAbilityModal', { static: true }) public paymentAbilityModal: any;
  @ViewChild('recommendationLetterRequirementModal', { static: true }) public recommendationLetterRequirementModal: any;
  @ViewChild('studyProgramModal', { static: true }) public studyProgramModal: any;
  @ViewChild('deleteStudyProgramMappingModal', { static: true }) public deleteStudyProgramMappingModal: any;
  @ViewChild('reportCardDetailModal', { static: true }) public reportCardDetailModal: any;
  @ViewChild('certificateDetailModal', { static: true }) public certificateDetailModal: any;
  @ViewChild('eprtAndTpaModal', { static: true }) public eprtAndTpaModal: any;
  @ViewChild('ipkModal', { static: true }) public ipkModal: any;
  @ViewChild('recommendationS2Modal', { static: true }) public recommendationS2Modal: any;
  @ViewChild('proposalModal', { static: true }) public proposalModal: any;
  @ViewChild('utbkModals', { static: true }) public utbkModals: any;
  @ViewChild('transcriptRequirementModalView', { static: true }) public transcriptRequirementModalView: any;
  @ViewChild('ijazahModals', { static: true }) public ijazahModals: any;
  @ViewChild('publikasiModals', { static: true }) public publikasiModals: any;
  @ViewChild('publicationDataModals', { static: true }) public publicationDataModals: any;

  //for upload
  public errType: boolean;
  public errSize: boolean;
  public formData = new FormData();
  public formDataUpdate = new FormData();
  public formData1 = new FormData();
  public formDataCertificateUpdated = new FormData();
  public formData2 = new FormData();
  public formData2Update = new FormData();
  public formData3 = new FormData();
  public formData3Updated = new FormData();
  public formDataPersonal = new FormData();
  public formDataPersonalUpdated = new FormData();
  public formDataPersonalUpd = new FormData();
  public formDataAbilityUpd = new FormData();
  public formDataAbility = new FormData();
  public formDataRaport = new FormData();
  public formDataStudy = new FormData();
  public formDataStudyUpd = new FormData();
  public formDataRecommendationS2 = new FormData();
  public formDataProposal = new FormData();
  public formDataProposalUpd = new FormData();
  public formDataIjazah  = new FormData();
  public formDataIjazahUpd = new FormData();
  public listClass: any;
  public hiddenLoc: boolean;
  public hiddenTime: boolean;
  public loadingCardCheckDoc: boolean;
  public disabledNextStep: boolean;
  public loadDisableNextStep: boolean;
  public disabledNextStepProdi: boolean;
  public disabledRaportDoc: boolean;
  public isPaid: boolean;
  public showMapel: boolean;
  public isPaymentMethodNull: boolean;
  public selectedSpecialization: string;
  public selectedClass: string;
  public dynamicForm: FormGroup;
  public submitted = false;
  public reportSemestersArray: Array<any>;
  // LANG
  public confirmation: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;
  public successSendEmail: string;
  public rows: FormArray;
  public addForm: FormGroup;
  public itemForm: FormGroup;
  public totalRecord: number;
  public pageDocument: number = 1;


  constructor(public translate: TranslateService,
    private broadcasterService: BroadcasterService,
    private userService: ParticipantService,
    private chartService: AdminManagementService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    public router: Router,
    private currencyPipe: CurrencyPipe,
    private injector: Injector,
  ) {
    translate.setDefaultLang(localStorage.getItem('lang'));
    this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
    this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
    this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
    this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
    this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
    this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    this.translate.get('CONTENT.url-sent-to-recommender').subscribe((l) => { this.successSendEmail = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translate.setDefaultLang(res.lang);
      this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
      this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
      this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
      this.translate.get('CONTENT.url-sent-to-recommender').subscribe((l) => { this.successSendEmail = l; });
    });
    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });
    this.rows = this.fb.array([]);
    this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
    // this.examLocation = '0';
    this.edit = 'input';
    this.isMaxStudy = false;
    this.isIdGet = false;
    this.isViewData = false;
    this.loadingCard = false;
    this.loadingCardCheckDoc = false;
    this.isViewRaport = false;
    this.isViewCertificate = false;
    this.isUpdatedRequirement = false;
    this.isUpdatedTranscript = false;
    this.isUisRecommendationUpdated = false;
    this.isEprtUpdated = false;
    this.hiddenLoc = false;
    this.hiddenTime = false;
    this.noEducationFund = false;
    this.disabledNextStep = false;
    this.disabledNextStepProdi = false;
    this.disabledRaportDoc = false;
    this.loadDisableNextStep = false;
    this.isShowIdentityNumber = false;
    this.loadingSemester = false;
    this.loadStudyProgram = false;
    this.isPjjProgram = false;
    this.isOtherProgram = false;
    this.isPascasarjanaProgram = false;
    this.haveDocumentData = false;
    this.isPaid = false;
    this.loadingData = false;
    this.loadTableTranscript = false;
    this.isMathStudy = false;
    this.isBahasaStudy = false;
    this.isEnglishStudy = false;
    this.chemicalStudy = false;
    this.biologyStudy = false;
    this.physicsStudy = false;
    this.economyStudy = false;
    this.sociologicalStudy = false;
    this.geographyStudy = false;
    this.loadingDocumentCard = false;
    this.loadingRegCard = false;
    this.haveDocumentPersonal = false;
    this.haveTranscriptDoc = false;
    this.haveDocumentStudy = false;
    this.haveProposalDocument = false;
    this.loadingMaximunStudy = false;
    this.rangeScoreIndex = false;
    this.isNotHaveMappingData = false;
    this.listDocumentReport = [];
    this.dataRequirementUrl = [];
    this.dataAbilityUrl = [];
    this.dataRecommendationUrl = [];
    this.dataTranscriptUrl = [];
    this.dataTranscriptUrlDoc = [];
    this.listDocumentCertificate = [];
    this.listDocumentStudy = [];
    this.dataSession = [];
    this.semesterList = [];
    this.tableData = [];
    this.tableData1 = [];
    this.tableData2 = [];
    this.tableData3 = [];
    this.tableData4 = [];
    this.tableDataTranscript = [];
    this.keyName = [];
    this.tableTranscript = [];
    this.tableDataPublication = [];
    this.reportSemestersArray = [
      {
        semester_id: 1,
        range_score: 2,
        math: '',
        physics: '',
        bahasa: '',
        english: '',
        biology: '',
        economy: '',
        geography: '',
        sociological: '',
        historical: '',
        registration_number: ''
      }
    ],
      this.listCategoryUtbk = [
        {
          value: '1',
          label: 'SAINTEK'
        },
        {
          value: '2',
          label: 'SOSHUM'
        }
      ]
  }

  registrationDataForm = this.fb.group({
    registration_number: ({ value: '', disabled: true }),
    program: ({ value: '', disabled: true }),
    selection_path: ({ value: '', disabled: true }),
  });

  participantDetailDataForm = this.fb.group({
    registration_number: ({ value: '', disabled: true }),
    participant_id: [''],
    fullname: ({ value: '', disabled: true }),
    mobile_phone_number: ({ value: '', disabled: true }),
    selection_path: ({ value: '', disabled: true }),
    selection_program: ({ value: '', disabled: true }),
    exam_location: ({ value: '', disabled: true }),
    exam_address: ({ value: '', disabled: true }),
    exam_date: ({ value: '', disabled: true }),
    exam_start_time: ({ value: '', disabled: true }),
    exam_end_time: ({ value: '', disabled: true }),
    session: ({ value: '', disabled: true })
  });

  registrationParticipantDataForm = this.fb.group({
    fullname: ({ value: '', disabled: true }),
    NIK: ({ value: '', disabled: true }),
    registration_number: ({ value: '', disabled: true }),
    payment_methodd: ({ value: '', disabled: true }),
    payment_code: ({ value: '', disabled: true })
  });

  documentRequirementDataForm = this.fb.group({
    document_id: [''],
    document_name: ['', Validators.required]
  });

  reportCardDataForm = this.fb.group({
    registration_number: [''],
    name: [''],
    document_type_id: [''],
    description: [''],
    number: [''],
    url: [''],
    document_id: [''],
    semester_id: ['', Validators.required],
    semester_name: [''],
    range_score: [''],
    math: [''],
    physics: [''],
    bahasa: [''],
    english: [''],
    biology: [''],
    chemical: [''],
    sociological: [''],
    economy: [''],
    geography: [''],
  });

  participantDocumentForm = this.fb.group({
    document_type_id: [''],
    name: [''],
    description: [''],
    number: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(16)])),
    url: ['']
  })

  transcriptDataFormCredit = this.fb.group({
    document_id: [''],
    registration_number: [''],
    name: [''],
    sks: [''],
    total_mata_kuliah: [''],
    document_type_id: [''],
    url: ['']
  });

  transcriptDataForm = this.fb.group({
    document_id: [''],
    registration_number: [''],
    name: [''],
    document_type_id: [''],
    url: [''],
    gpa: ['', [Validators.required, Validators.maxLength(4), Validators.max(4), Validators.pattern('^[0-9.]*$')]]
  });

  utbkForm = this.fb.group({
    KPUScore: new FormControl('', [Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]),
    PKScore: new FormControl('', [Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]),
    PDPUScore: new FormControl('', [Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]),
    KMBDMScore: new FormControl('', [Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]),
    math: new FormControl(''),
    geography: new FormControl(''),
    historical: new FormControl(''),
    sociological: new FormControl(''),
    economy: new FormControl(''),
    physics: new FormControl(''),
    chemical: new FormControl(''),
    biological: new FormControl(''),
    url: new FormControl(''),
  });

  certificateDataForm = this.fb.group({
    registration_number: [''],
    document_type_id: [''],
    name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
    description: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    number: [''],
    url: [''],
    certificate_type_id: ['', Validators.required],
    certificate_level_id: ['', Validators.required],
    publication_year: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]*$')])),
    certificate_score: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(3)])),
  });

  eprtAndTpaForm = this.fb.group({
    registration_number: [''],
    document_type_id: [''],
    name: new FormControl(''),
    description: new FormControl(''),
    number: [''],
    url: [''],
    eprt_tpa_type_id: [''],
    eprt_tpa_level_id: [''],
    publication_year: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]*$')])),
    nameCoPromotor: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
    eprt_tpa_score: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')])),
    gpa: ['', [Validators.required, Validators.maxLength(4), Validators.max(4), Validators.pattern('^[0-9.]*$')]]
  });

  proposalForm = this.fb.group({
    registration_number: [''],
    document_type_id: [''],
    name: new FormControl(''),
    title: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(1000)])),
    description: new FormControl(''),
    number: [''],
    url: [''],
  })

  supportingDataForm = this.fb.group({
    registration_number: [''],
    document_type_id: [''],
    name: [''],
    description: [''],
    number: [''],
    url: [''],
    pic_name: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
    pic_phone_number: ['', Validators.compose([Validators.required,Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])],
    pic_email_address: ['', Validators.compose([Validators.required, Validators.maxLength(150)])],
    pic_address: ['', Validators.compose([Validators.required, Validators.maxLength(150)])],
  });

  abilityDataForm = this.fb.group({
    registration_number: [''],
    document_type_id: [''],
    name: [''],
    description: [''],
    number: [''],
    url: ['']
  });

  locationExamDataForm = this.fb.group({
    registration_number: [''],
    location_id: ['', Validators.required],
    location_address: [''],
    location_date: [''],
    path_exam_detail: ['']
  });

  registrationDataForm2 = this.fb.group({
    participant_id: [''],
    selection_path_id: [''],
    pin_price: [''],
    checklist: [''],
    payment_method: [''],
    payment_method_name: [''],

  });

  recommendationS2Form = this.fb.group({
    name_rec1: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    handphone_rec1: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])),
    email_rec1: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(150)])),
    name_rec2: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    handphone_rec2: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])),
    email_rec2: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
  });

  transcriptFormlView = this.fb.group({
    name: [''],
    totalCredit: [''],
    totalCourse: ['']
  });

  ijazahForm = this.fb.group({
    registration_number: [''],
    document_type_id: [''],
    name: new FormControl(''),
    url: [''],
    link_document: ['']
  });

  publikasiForm = this.fb.group({
    name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    position: new FormControl('', Validators.required),
    title: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(500)])),
    type: new FormControl('', Validators.required),
    publication_date: new FormControl('', Validators.required),
    link: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
  });

  get fpd() {
    return this.participantDocumentForm.controls;
  }

  get fsd() {
    return this.supportingDataForm.controls;
  }

  get fad() {
    return this.abilityDataForm.controls;
  }

  get frod() {
    return this.recommendationS2Form.controls;
  }

  get fpubd() {
    return this.publikasiForm.controls;
  }

  get fid() {
    return this.ijazahForm.controls;
  }

  get fprd() {
    return this.proposalForm.controls;
  }

  get fed() {
    return this.eprtAndTpaForm.controls;
  }

  get ftd() {
    return this.transcriptDataForm.controls;
  }

  get futbk() {
    return this.utbkForm.controls;
  }

  get fprodi() {
    return this.studyProgramDataForm.controls;
  }

  get fraport() {
    return this.reportCardDataForm.controls;
  }

  get fcertif() {
    return this.certificateDataForm.controls;
  }

  ngOnInit() {
    this.isCollapsed = true;
    this.isCollapse = true;
    this.isCollapseReg = true;
    this.dynamicForm = this.fb.group({
      url: [''],
      total_credit: ['', [Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]*$')]],
      document_name: [''],
      registration_number: [''],
      document_type_id: [''],
      document_description: [''],
      total_course: ['', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(1), Validators.pattern('^[0-9]*$')]],
      ticket: new FormArray([])
    });
    this.addForm.get("items").valueChanges.subscribe(val => {
      if (val === true) {
        this.addForm.get("items_value").setValue("yes");

        this.addForm.addControl('rows', this.rows);
      }
      if (val === false) {
        this.addForm.get("items_value").setValue("no");
        this.addForm.removeControl('rows');
      }
    });
    this.studyProgramDataForm = this.fb.group({
      mapping_path_program_study_id: [''],
      registration_number: [''],
      studyprogram_id: [''],
      studyprogram_name: [''],
      sks: [''],
      sdp_default: ({ value: '' }),
      specialization: [''],
      specialization_name: [''],
      class_name: [''],
      class_type: [''],
      minimum_donation: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])),
    });
    this.dtOptions[0] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => {
      }
    };
    this.dtOptions[1] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      // paging:true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => {
      }
    };
    this.dtOptions[2] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      order: [[0, 'asc']],
      initComplete: () => {
      }
    };
    this.dtOptions[3] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      order: [[0, 'asc']],
      destroy: true,
      // paging:true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => {
      }
    };
    this.dtOptions[4] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      order: [[0, 'asc']],
      destroy: true,
      // paging:true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => {
      }
    };
    this.dtOptions[5] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      order: [[0, 'asc']],
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => {
      }
    };
    this.loadDetailParticipantDatas();
    this.checkRegistrationData();
    this.chartService.getRegistrationDocument(`${this.registration_number}`).subscribe(response2 => {
    });
  }

  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.ticket as FormArray; }


  mode(param) {
    this.edit = param;
  }

  loadDetailParticipantDatas() {
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));

    this.userService.getParticipantDetailData(`${this.userProfile.email}`).subscribe(res => {
      this.userData = res.participant_id;
      this.email = res.username;
      this.fullname = res.fullname;
      this.phonenumber = res.mobile_phone_number;
    });

  }

  checkRegistrationData() {
    this.userService.getRegistrationHistory(`registration_number=${this.registration_number}`).subscribe(result => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].registration_step_id == 7 && result[i].status == "Done") {
      // if (result[i].registration_step_id == 7 && result[i].status != "Done") {
        this.router.navigate([`/registration-history`]);
      } else if (result[i].registration_step_id == 7 && result[i].status != "Done") {
      // } else if (result[i].registration_step_id == 7 && result[i].status == "Done") {
        this.loadPaymentMethodDataFilter();
        this.loadFacultyDataFilter();
        this.loadStudyProgramDataFilter();
        this.loadProgramStudyData();
        this.loadSemesterDataFilter();
        this.loadCertificateLevelDataFilter();
        this.loadCertificateTypeDataFilter();
        this.loadExamDetailData();
        this.loadProgramStudyData();
        this.loadDataSemesterFilter();
        //Data
        this.loadDetailRegistration(this.registration_number);
        this.renderSelectionDocumentData();
        this.loadRegistrationProgramStudyData(this.registration_number);
        this.loadRegistrationProgramStudyData2(this.registration_number);
        this.loadDetailParticipant();
        this.loadExamData(this.registration_number);
        this.checkRequiredDocument();

        //Table
        this.loadDetailCertificateFileDataTable(this.registration_number);
      }
    }
  });
  }

  loadExamData(registration_number) {
    this.userService.getRegistrationListParticipantData(`registration_number=${registration_number}`).subscribe(result => {
      if (result) {
        if (result.data[0].mapping_location_selection_id !== null) {
          this.examLocation = result.data[0].mapping_location_selection_id.toString();
        }
      }
    });
  }

  loadSuccess() {
    this.broadcasterService.notifBroadcast(true, {
      title: 'Success',
      msg: 'Data yang anda masukkan sudah tersimpan',
      timeout: 5000,
      theme: 'default',
      position: 'top-right',
      type: 'success'
    });
  }

  loadError() {
    this.broadcasterService.notifBroadcast(true, {
      title: 'Gagal',
      msg: 'Terjadi kesalahan sistem',
      timeout: 5000,
      theme: 'default',
      position: 'top-right',
      type: 'error'
    });
  }

  onDeselected(val) {
    switch (val) {
      case 'paymentMethod':
        this.paymentMethod = '0';
        break;
      case 'faculty':
        this.faculty = '0';
        break;
      case 'semester':
        this.semester = '0';
        break;
      case 'certificateLevel':
        this.certificateLevel = '0';
        break;
      case 'certificateType':
        this.certificateType = '0';
        break;
      case 'examLocation':
        this.examLocation = '0';
        break;
      case 'examDate':
        this.examDate = '0';
        break;
    }
  }

  changeTestType(event) {
    if (event.value === 'saintek') {
      this.isSaintek = true;
    } else {
      this.isSaintek = false;
    }
  }

  changeSemesters(event) {
    if (event.value) {
      this.showMapel = true;
    } else {
      this.showMapel = false;
    }
  }

  loadPinPrice() {
    this.loadingPinPriceCard = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
      const pMethod = result.data[0].payment_method_id;
      this.selectionPathId = result.data[0].selection_path_id;
      if (pMethod == null) {
        this.loadPayment();
        this.disabledPayment = false;
        this.disabledNextStepDocument = true;
        this.loading = false;
      } else {
        this.registrationDataForm2.patchValue({ selection_path_name: result.data[0]['selection_path'] });
        this.registrationDataForm2.patchValue({ pin_price: result.data[0]['price'] });
        this.registrationDataForm2.patchValue({ payment_method_name: result.data[0]['payment_method'] });
        this.paymentMethod = result.data[0].payment_method_id && result.data[0].payment_method_id.toString();
        this.disabledPayment = true;
        if (result.data[0]['payment_receipt_status'] === 'Belum Lunas' || result.data[0]['payment_receipt_status'] === 'In Progress') {
          this.disabledNextStepDocument = true;
          this.loading = false;
          this.loadingPinPriceCard = false;
        } else if (result.data[0].payment_receipt_status === 'Lunas') {
          this.disabledNextStepDocument = false;
          this.loading = false;
          this.loadingPinPriceCard = false;
        }
      }
    });
  }

  loadPaymentMethodDataFilter() {
    this.loadFilter = true;
    this.chartService.getPaymentMethodData().subscribe((filterArray) => {
      const dataPaymentMethod = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].method
        };
        dataPaymentMethod.push(x);
        this.listPaymentMethod = dataPaymentMethod;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadFacultyDataFilter() {
    this.loadFilter = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
      this.selectionPathId = result.data[0]['selection_path_id'];
      this.chartService.getMappingProgramStudyData(`${this.selectionPathId}`).subscribe((filterArray) => {
        const dataFaculty = [];
        let x: any;
        for (let i = 0; i < filterArray.data.length; i++) {
          x = {
            value: filterArray.data[i].faculty_id.toString(),
            label: filterArray.data[i].faculty_name
          };
          dataFaculty.push(x);
          this.listFaculty = dataFaculty;
        }
        this.loadFilter = false;
      }, err => {
        this.loadError();
        this.loadFilter = false;
      });
      this.loading = false;
    }, err => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: err.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loading = false;
    });
  }

  loadStudyProgramDataFilter() {
    this.loadFilter = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
      this.selectionPathId = result.data[0]['selection_path_id'];
      this.chartService.getMappingProgramStudyData(`selection_path_id=${this.selectionPathId}`).subscribe((filterArray) => {
        const dataStudyProgram = [];
        let x: any;
        for (let i = 0; i < filterArray.data.length; i++) {
          x = {
            value: filterArray.data[i].id.toString(),
            label: filterArray.data[i].study_program_name
          };
          dataStudyProgram.push(x);
          this.listStudyProgram = dataStudyProgram;
        }
        this.loadFilter = false;
      }, err => {
        this.loadError();
        this.loadFilter = false;
      });
      this.loading = false;
    }, err => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: err.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loading = false;
    });
  }

  loadProgramStudyData() {
    this.loadStudyProgram = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
      this.selectionPathId = result.data[0]['selection_path_id'];
      this.mappingPathYearId = result.data[0]['mapping_path_year_id']
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.userData = res.participant_id;
        this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(resp => {
          if (resp !== null) {
            if (resp.data.length !== 0) {
              const programStudyDataUser = resp.data;
              const obj = {};
              programStudyDataUser.forEach(o => obj[o.study_program_id] = o);

              const unique_array2 = Object.keys(obj).map(k => obj[k]);
              const matches = [];
              this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(response => {
                let prodi = response;
                prodi.forEach(o1 => unique_array2.forEach(o2 => {

                  if (o1.study_program_id == o2.study_program_id) {
                    matches.push(o1);
                    this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(res => {
                      let prodi1 = res;
                      var c = _.difference(prodi1.map(e => e.study_program_id), matches.map(e => e.study_program_id));
                      var array = [];
                      array = prodi1.map(e => {
                        if (c.includes(e.study_program_id)) {
                          return e;
                        }
                      }).filter(r => r);
                      this.dataProdi = array && array.map((value) => {
                        this.loadStudyProgram = false;
                        const { mapping_path_program_study_id, study_program_name } = value;
                        return { value: mapping_path_program_study_id.toString(), label: study_program_name };
                      });
                      this.loadStudyProgram = false;
                    });
                  } else {
                    this.loadStudyProgram = false;
                  }
                }));
              });
            } else {
              this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(response => {
                if (response.length !== 0) {
                  let prodi = response
                  this.dataProdi = response && response.map((value) => {
                    this.loadStudyProgram = false;
                    const { mapping_path_program_study_id, study_program_name } = value;
                    return { value: mapping_path_program_study_id.toString(), label: study_program_name };
                  });
                } else {
                  this.loadStudyProgram = false;
                }
              });
            }
          }
        });
      });
    });
  }

  loadStudyDataFilter() {
    this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
      this.selectionPathId = result.data[0]['selection_path_id'];
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.userData = res.participant_id;
        this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(resp => {
          if (resp.data.length !== 0) {
            const prodi2 = resp.data;
            const obj = {};
            prodi2.forEach(o => obj[o.study_program_id] = o);
            const unique_array2 = Object.keys(obj).map(k => obj[k]);
            const matches = [];
            this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}`).subscribe(response => {
              let prodi = response

              prodi.forEach(o1 => unique_array2.forEach(o2 => {
                if (o1.study_program_id == o2.study_program_id) {
                  matches.push(o1);
                  this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(response => {
                    let prodi1 = response;
                    if (matches.length !== 0) {
                      for (let i = 0; i < matches.length; i++) {
                        const findIndexPRodi = prodi1.findIndex(x => x.study_program_id === matches[i].study_program_id);
                        if (findIndexPRodi > -1) {
                          prodi1.splice(findIndexPRodi, 1);
                          // prodi1 = _.without(prodi1, _.findWhere(prodi1, {
                          //   id: id
                          // }));
                          this.dataProdi = prodi1 && prodi1.map((value) => {
                            const { mapping_path_program_study_id, study_program_name } = value;
                            return { value: mapping_path_program_study_id.toString(), label: study_program_name };
                          });
                        }
                      }
                    }
                  });
                }
              }));
            });
          } else {
            this.userService.getCheckEducationMajor(`?selection_path_id=${this.selectionPathId}&participant_id=${this.userData}&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(response => {
              let prodi = response
              this.dataProdi = response && response.map((value) => {
                const { mapping_path_program_study_id, study_program_name } = value;
                return { value: mapping_path_program_study_id.toString(), label: study_program_name };
              });
            });
          }
        });
      });
    }, err => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: 'Terjadi kesalahan sistem',
        timeout: 3000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  loadSemesterDataFilter() {
    this.loadFilter = true;
    this.userService.getSemesterData().subscribe((filterArray) => {
      const dataSemester = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].name
        };
        dataSemester.push(x);
        this.listSemester = dataSemester;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
    this.loading = false;
  }

  // loadRangeScore() {
  //   this.userService.getRangeScoreData().subscribe(res => {
  //     this.listRangeScore = res && res.map((value) => {
  //       const { id, name } = value;
  //       return { value: id.toString(), label: name }
  //     });
  //   })
  // }

  loadDataSemesterFilter() {
    this.loadingSemester = true;
    this.loadSemesterChecked();
    this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=7`).subscribe(response => {
      if (response.data.length !== 0) {
        const dataRaportUsers = response.data;

        const obj = {};
        dataRaportUsers.forEach(o => obj[o.semester_id] = o);

        const unique_array2 = Object.keys(obj).map(k => obj[k]);
        const matches = [];
        this.userService.getSemesterData().subscribe(resp => {
          let dataSemester = resp;

          dataSemester.forEach(o1 => unique_array2.forEach(o2 => {
            if (o1.id == o2.semester_id) {
              matches.push(o1);

              this.userService.getSemesterData().subscribe(res => {
                let dataSemester1 = res;
                var c = _.difference(dataSemester1.map(e => e.id), matches.map(e => e.id));
                var array = [];
                array = dataSemester1.map(e => {
                  if (c.includes(e.id)) {
                    return e;
                  }
                }).filter(r => r);
                this.listSemester = array && array.map((value) => {
                  this.loadingSemester = false;
                  const { id, name } = value;
                  return { value: id.toString(), label: name }
                });
              });
            } else {
              this.loadingSemester = false;
            }

          }));
        });
      } else {
        this.userService.getSemesterData().subscribe(res => {
          this.listSemester = res && res.map((value) => {
            this.loadingSemester = false;
            const { id, name } = value;
            return { value: id.toString(), label: name }
          });
        })
      }
    });
  }

  loadGroupWithPathExam() {
    this.userService.getGroupWithPathExamDetails(`?registration_number=${this.registration_number}&selection_path_id=${this.selectionPathId}`).subscribe(res => {
      this.listPathExamDetail = res && res.map((value) => {
        this.loadingSemester = false;
        const { id, fullname, moodle_group_ids, path_exam_detail_id } = value;
        return { value: id.toString(), label: fullname, group: moodle_group_ids, pathExam: path_exam_detail_id }
      });
    })
  }

  changeScheduleExamSelected(event) {
    this.courseId = event.value;
    this.moodleGroupId = event.group;
    this.pathExamDetailID = event.pathExam;
  }

  createMoodleUserMemberAndEnrol() {
    const payloadRegistration = {
      path_exam_detail: this.pathExamDetailID,
      registration_number: this.registration_number
    }
    this.loadingRegCard = true;
    this.chartService.upRegistrationData(payloadRegistration).subscribe(rspnse => {
      if (rspnse.status == 'Success') {
        const payloadMoodleUser = {
          participant_id: this.participantId
        }
        this.userService.postMoodleUser(payloadMoodleUser).subscribe(response1 => {
          if (response1.status == 'Success') {
            const moodleUserId = response1.moodle_user_id;
            const payloadMoodleMember = {
              moodle_group_ids: this.moodleGroupId,
              moodle_user_id: moodleUserId
            }
            const payloadMoodleEnrollment = {
              moodle_group_ids: this.moodleGroupId,
              moodle_user_id: moodleUserId,
              moodle_course_id: this.courseId
            }
            this.userService.postMoodleEnrollment(payloadMoodleEnrollment).subscribe(resp => {
              if (resp.status == 'Success') {
                this.userService.postMoodleMember(payloadMoodleMember).subscribe(res => {
                  if (res.status == 'Success') {
                    this.createRegistrationCard();
                    this.loadSuccess();
                    this.loadingRegCard = false;
                  } else {
                    this.broadcasterService.notifBroadcast(true, {
                      title: res.status,
                      msg: res.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });
                    this.loadingRegCard = false;
                  }
                }, (reason) => {
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                  this.loadingRegCard = false;
                });
              } else {
                this.broadcasterService.notifBroadcast(true, {
                  title: resp.status,
                  msg: resp.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });
                this.loadingRegCard = false;
              }
            }, (reason) => {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loadingRegCard = false;
            });
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: response1.status,
              msg: response1.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loadingRegCard = false;
          }
        }, (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loadingRegCard = false;
        });
      } else {
        this.loadingRegCard = false;
        this.broadcasterService.notifBroadcast(true, {
          title: rspnse.status,
          msg: rspnse.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
      }
    }, (reason) => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loadingRegCard = false;
    });
  }

  loadCertificateLevelDataFilter() {
    this.loadFilter = true;
    this.userService.getCertificateLevelData().subscribe((filterArray) => {
      if (filterArray !== null) {
        const dataCertificateLevel = [];
        let x: any;
        for (let i = 0; i < filterArray.length; i++) {
          x = {
            value: filterArray[i].id.toString(),
            label: filterArray[i].type
          };
          dataCertificateLevel.push(x);
          this.listCertificateLevel = dataCertificateLevel;
        }
        this.loadFilter = false;
      } else {
        this.listCertificateLevel = [];
        this.loadFilter = false;
      }
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
    this.loading = false;
  }

  loadCertificateTypeDataFilter() {
    this.loadFilter = true;
    this.userService.getCertificateTypeData().subscribe((filterArray) => {
      if (filterArray !== null) {
        const dataCertificateType = [];
        let x: any;
        for (let i = 0; i < filterArray.length; i++) {
          x = {
            value: filterArray[i].id.toString(),
            label: filterArray[i].type
          };
          dataCertificateType.push(x);
          this.listCertificateType = dataCertificateType;
        }
        this.loadFilter = false;
      } else {
        this.listCertificateType = [];
        this.loadFilter = false;

      }
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
    this.loading = false;
  }

  loadDetailRegistration(registration_number) {
    this.loadingStudyPrograms = true;
    this.edit = 'edit';
    this.userService.getRegistrationListParticipantData(`registration_number=${registration_number}`).subscribe(result => {
      if (result) {
        this.checkStudyProgramsWithPaymentReceiptStatus();
        this.registrationDataForm.patchValue({ registration_number: result.data[0]['registration_number'] });
        this.registrationDataForm.patchValue({ program: result.data[0]['selection_program'] });
        this.registrationDataForm.patchValue({ selection_path: result.data[0]['selection_path'] });
        this.registrationDataForm.patchValue({ payment_method: result.data[0]['payment_method'] });
      }
    }, err => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: err.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loadingCard = false;
    });
  }

  loadSelectionDocumentData(registration_number) {
    this.tableData1 = [];
    this.loadtableSelectionDocumentData = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${registration_number}`).subscribe(result => {
      this.chartService.getSelectionDocument(`selection_id=${result.data[0]['selection_path_id']}&active_status=true`).subscribe(response => {
        if (response.data.length > 0) {
          this.tableData1 = response.data;
          this.loadtableSelectionDocumentData = false;
          this.dtTrigger1.next(); // Trigger for load datatable
        } else {
          this.tableData1 = [];
          this.dtTrigger1.next(); // Trigger for load datatable
          this.loadtableSelectionDocumentData = false;
        }
      }, err => {
        this.loadtableSelectionDocumentData = false;
      });
    });
  }

  renderSelectionDocumentData(): void {
    if (this.tableData1.length == 0) {
      this.loadSelectionDocumentData(this.registration_number);
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 1) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.loadSelectionDocumentData(this.registration_number);
          });
        }
      });
    }
  }

  loadRegistrationProgramStudyData(registration_number) {
    this.loadtableRegistrationProgramStudyData = true;
    this.loading = true;
    this.edit = 'edit';
    this.chartService.getRegistrationProgramStudy(registration_number).subscribe(response => {
      if (response !== null) {
        this.tableData = response.data;
        if (response.data.length === 0) {
          this.disabledNextStepProdi = true;
        } else {
          this.disabledNextStepProdi = false;
        }
        this.dtTrigger.next(); // Trigger for load datatable
        this.loading = false;
        this.loadtableRegistrationProgramStudyData = false;
      } else {
        this.tableData = [];
        this.disabledNextStepProdi = false;
        this.loading = false;
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtableRegistrationProgramStudyData = false;
      }
    }, err => {
      this.loadError();
      this.loadtableRegistrationProgramStudyData = false;
    });
    this.loading = false;
  }

  loadRegistrationProgramStudyData2(registration_number) {
    this.loadtableRegistrationProgramStudyData = true;
    this.loading = true;
    this.chartService.getRegistrationProgramStudy(registration_number).subscribe(response => {
      if (response !== null) {
        this.tableData4 = response.data;
        this.loadtableRegistrationProgramStudyData = false;
      } else {
        this.tableData4 = [];
        this.loadtableRegistrationProgramStudyData = false;
        this.loading = false;
      }
    }, err => {
      this.loadError();
      this.loadtableRegistrationProgramStudyData = false;
    });
    this.loading = false;
  }

  loadDetailParticipant() {
    this.loading = true;
    this.edit = 'edit';
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userProfile.email !== undefined) {
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.userData = res.participant_id;
        this.participantDetailDataForm.patchValue({ fullname: res.fullname });
        this.fullname = res.fullname;
        this.phonenumber = res.mobile_phone_number;
        this.email = res.username;
        this.participantId = res.participant_id;
        this.participantDetailDataForm.patchValue({ mobile_phone_number: res.mobile_phone_number });
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
          this.participantDetailDataForm.patchValue({ registration_number: this.registration_number });
          this.participantDetailDataForm.patchValue({ selection_path: result.data[0].selection_path });
          if (result.data[0].exam_status == 1) {
            this.isRaportCategory = true;
          } else {
            this.isRaportCategory = false;
          }
          this.selectionPathId = result.data[0].selection_path_id;
          this.mappingPathYearId = result.data[0].mapping_path_year_id;
          // this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(response => {
          //   const data = response.data.length;
          //   if (data !== 0) {
          //     // this.getMaximunStudyPrograms();
          //   } else {
          //     this.isMaxStudy = false;
          //     this.loading = false;
          //   }
          // });
          // this.getSession();
        });
      });
    } else {
      const unameEx = this.userProfile.username + '@gmail.com';
      this.userService.getParticipantDetailData(unameEx).subscribe(res => {
        this.userData = res.participant_id;
        this.participantDetailDataForm.patchValue({ fullname: res.fullname });
        this.participantDetailDataForm.patchValue({ mobile_phone_number: res.mobile_phone_number });
        this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
          this.participantDetailDataForm.patchValue({ registration_number: this.registration_number });
          this.participantDetailDataForm.patchValue({ selection_path: result.data[0].selection_path });
          this.participantDetailDataForm.patchValue({ selection_program: result.data[0].selection_program });
          this.participantDetailDataForm.patchValue({ exam_location: result.data[0].location });
          this.participantDetailDataForm.patchValue({ exam_address: result.data[0].address });
          this.participantDetailDataForm.patchValue({ exam_date: result.data[0].exam_date });
          this.participantDetailDataForm.patchValue({ exam_start_time: result.data[0].exam_start_date });
          this.participantDetailDataForm.patchValue({ exam_end_time: result.data[0].exam_end_date });
          this.selectionPathId = result.data[0].selection_path_id;
          if (result.data[0].maks_study_program === '1') {
            this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(response => {
              const data = response.data.length;
              if (data === 1) {
                this.isMaxStudy = true;
              } else {
                this.isMaxStudy = false;
              }
            });
          } else if (result.data[0].maks_study_program === '5') {
            this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(response => {
              const data = response.data.length;
              if (data === 5) {
                this.isMaxStudy = true;
              } else {
                this.isMaxStudy = false;
              }
            });
            this.isMaxStudy = false;
          }
        });
      });
    }
  }

  checkStudyProgramsWithPaymentReceiptStatus() {
    this.loadingStudyPrograms = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
      if (result.length !== 0) {
        if (result.data[0].payment_receipt_status == 'Lunas') {
          this.hiddenStudyProgram = true;
          this.loadingStudyPrograms = false;
        }   else if (result.data[0].payment_receipt_status == 'Belum Lunas' || result.data[0].payment_receipt_status == 'In Progress') {
          this.loadingStudyPrograms = false;
          this.hiddenStudyProgram = false;
        }  else if (result.data[0].payment_receipt_status == null) {
          this.loadingStudyPrograms = false;
          this.hiddenStudyProgram = false;
        }
      } else {
        this.hiddenStudyProgram = false;
      }
    });
  }

  loadPayment() {
    this.loadingPinPriceCard = false;
    this.userService.getStudyProgramWithPin(`?registration_number=${this.registration_number}`).subscribe(response => {
      if (response.length !== 0) {
        if (response.mapping_registration_program_study.length !== 0) {
          if (response.maks_study_program == response.mapping_registration_program_study.length) {
            this.idPinPrice = response.mapping_path_price_id;
            this.loadingPinPriceCard = false;
            this.loading = false;
            this.registrationDataForm2.patchValue({ pin_price: response.price })
          } else {
            this.loading = false;
            this.loadingPinPriceCard = false;
            this.idPinPrice = response.mapping_path_price_id;
            this.registrationDataForm2.patchValue({ pin_price: response.price });
          }
        } else {
          this.loadingPinPriceCard = false;
        }
      } else {
        this.registrationDataForm2.patchValue({ pin_price: '0' });
      }
    });
  }

  getMaximunStudyPrograms() {
    this.loadingMaximunStudy = true;
    this.userService.getStudyProgramWithPin(`?registration_number=${this.registration_number}`).subscribe(response => {
      if (response.length !== 0) {
        if (response.mapping_registration_program_study.length !== 0) {
          if (response.maks_study_program == response.mapping_registration_program_study.length) {
            this.isMaxStudy = true;
            this.loadingMaximunStudy = false;
            this.loading = false;
            this.popUpMaxProdi();
          } else {
            this.loadingMaximunStudy = false;
            this.isMaxStudy = false;
            this.loading = false;
            this.showModalProgramStudy();
          }
        } else {
          this.loadingMaximunStudy = false;
          this.isMaxStudy = false;
          this.showModalProgramStudy();
        }
      } else {
        this.registrationDataForm2.patchValue({ pin_price: '0' });
        this.loadingMaximunStudy = false;
      }
    });
  }

  getSession() {
    this.userService.getExamSession(`?registration_number=${this.registration_number}`).subscribe(res => {
      this.dataSession = res;
      if (res.length !== 0) {
        this.participantDetailDataForm.patchValue({ exam_start_time: res[0].exam_start_date });
        this.participantDetailDataForm.patchValue({ exam_end_time: res[0].exam_end_date });
        this.participantDetailDataForm.patchValue({ session: res[0].session });
        this.loading = false;
      } else {
        this.loading = false;
      }
    })
  }

  popUpMaxProdi() {
    Swal.fire({
      title: 'Warning',
      text: 'Anda Tidak dapat menambahkan program studi lagi',
      type: 'warning'
    });
  }

  loadDetailDocumentRequirementData(data) {
    this.loadingDocumentCard = true;
    this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=${data}`).subscribe(response2 => {
      this.documentTypeId = data;
      if (this.documentTypeId == 6) {
        if (response2.data.length !== 0) {
          if (response2.data[0].document_id === null) {
            this.formTypePersonal = 'input';
            this.loadingDocumentCard = false;
            this.documentTypePersonal = this.documentTypeId;
            this.isUpdatedRequirement = false;
            if (this.documentTypePersonal == 1) {
              this.isShowIdentityNumber = true;
              this.participantDocumentForm.get('number').setValidators(Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(16)]));
              this.participantDocumentForm.get('number').updateValueAndValidity();
            } else {
              this.isShowIdentityNumber = false;
              this.participantDocumentForm.get('number').clearValidators();
              this.participantDocumentForm.get('number').updateValueAndValidity();
            }
            this.participantDocumentForm.get('url').setValidators(Validators.required);
            this.participantDocumentForm.get('url').updateValueAndValidity();
            this.participantDocumentForm.patchValue({ name: 'Ijazah Pendidikan Terakhir atau Surat Keterangan Lulus' });
            this.participantDocumentForm.patchValue({ url: '' });
            this.dataRequirementUrl = '';
            this.haveDocumentPersonal = false;
            this.documentRequirementModal.show();
          } else {
            this.formTypePersonal = 'edit';
            this.loadingDocumentCard = false;
            this.documentTypePersonal = response2.data[0].document_type_id;
            this.documentidPersonal = response2.data[0].document_id;
            this.isUpdatedRequirement = true;
            if (response2.data[0].url !== null) {
              this.haveDocumentPersonal = true;
            } else {
              this.haveDocumentPersonal = false;
            }
            this.participantDocumentForm.get('url').clearValidators();
            this.participantDocumentForm.get('url').updateValueAndValidity();
            this.dataRequirementUrl = response2.data;
            this.documentRequirementModal.show();
            this.participantDocumentForm.patchValue({ name: response2.data[0].document_type });
            this.participantDocumentForm.patchValue({ url: '' });
            this.participantDocumentForm.get('url').reset();
            if (this.documentTypePersonal == 1) {
              this.participantDocumentForm.patchValue({ number: '' });
              this.participantDocumentForm.get('number').setValidators(Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(16)]));
              this.participantDocumentForm.get('number').updateValueAndValidity();
              this.isShowIdentityNumber = true;
            } else {
              this.isShowIdentityNumber = false;
              this.participantDocumentForm.patchValue({ number: '' });
              this.participantDocumentForm.get('number').clearValidators();
              this.participantDocumentForm.get('number').updateValueAndValidity();
            }
            if (response2.data[0].document_url !== null) {
              this.haveDocumentPersonal = true;
            } else {
              this.haveDocumentPersonal = false;
            }
          }
        } else {
          this.formTypePersonal = 'input';
          this.documentTypePersonal = this.documentTypeId;
          this.isUpdatedRequirement = false;
          this.isShowIdentityNumber = false;
          this.participantDocumentForm.get('number').clearValidators();
          this.participantDocumentForm.get('number').updateValueAndValidity();
          this.participantDocumentForm.get('url').setValidators(Validators.required);
          this.participantDocumentForm.get('url').updateValueAndValidity();
          this.participantDocumentForm.patchValue({ name: 'Ijazah Pendidikan Terakhir atau Surat Keterangan Lulus' });
          this.participantDocumentForm.patchValue({ url: '' });
          this.dataRequirementUrl = '';
          this.haveDocumentPersonal = false;
          this.documentRequirementModal.show();
          this.loadingDocumentCard = false;
        }
      } else if (this.documentTypeId == 7) {
        this.mode('input');
        this.reportCardRequirementModal.show();
        this.loadingDocumentCard = false;
        this.loadDetailReportCardFileData();
      }
      else if (this.documentTypeId == 8) {
        this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=8`).subscribe(response => {
          if (response.data.length !== 0) {
            this.transcriptRequirementModal.show();
            this.formType = 'edit';
            this.loadingDocumentCard = false;
            this.isUpdatedTranscript = true;
            this.isTranscript =  true;
            this.documentTypeId = 8;
            this.documentTranscriptId = response.data[0].document_id;
            this.documentReportTranscriptId = response.data[0].document_report_card_id;
            this.transcriptDataForm.patchValue({ name: 'Transkrip Nilai Pendidikan Terakhir' });
            this.transcriptDataForm.get('url').clearValidators();
            this.transcriptDataForm.get('url').updateValueAndValidity();
            this.transcriptDataForm.get('gpa').clearValidators();
            this.transcriptDataForm.get('gpa').updateValueAndValidity();
            this.dataTranscriptUrlDoc = response.data;
            if (response.data[0].url !== null) {
              this.haveTranscriptDoc = true;
            } else {
              this.haveTranscriptDoc = false;
            }
          }
          else {
            this.formType = 'input';
            this.isTranscript =  true;
            this.isUpdatedTranscript = false;
            this.loadingDocumentCard = false;
            this.documentTypeId = 8;
            this.transcriptRequirementModal.show();
            this.transcriptDataForm.patchValue({ name: 'Transkrip Nilai Pendidikan Terakhir' });
            this.transcriptDataForm.get('gpa').clearValidators();
            this.transcriptDataForm.get('gpa').updateValueAndValidity();
            this.transcriptDataForm.get('url').setValidators(Validators.required);
            this.transcriptDataForm.get('url').updateValueAndValidity();
            this.dataTranscriptUrlDoc = [];
            this.haveTranscriptDoc = false;
            this.transcriptDataForm.patchValue({ url: '' });
          }
        });
      }
      else if (this.documentTypeId == 9) {
        this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=9`).subscribe(response => {
          if (response.data.length !== 0) {
            this.formTypeRecommendation = 'edit';
            this.isUisRecommendationUpdated = true;
            this.documentRecommendationId = response.data[0].document_id;
            this.documentSupportingId = response.data[0].document_supporting_id;
            this.supportingDataForm.patchValue({ name: 'Surat Rekomendasi' });
            this.supportingDataForm.patchValue({ pic_email_address: response.data[0].pic_email_address });
            this.supportingDataForm.patchValue({ pic_name: response.data[0].pic_name });
            this.supportingDataForm.patchValue({ pic_phone_number: response.data[0].pic_phone_number });
            this.supportingDataForm.patchValue({ pic_address: response.data[0].pic_address });
            this.supportingDataForm.get('url').clearValidators();
            this.supportingDataForm.get('url').updateValueAndValidity();
            this.dataRecommendationUrl = response.data;
            this.haveSupportingDocument = true;
            this.recommendationLetterRequirementModal.show();
            this.loadingDocumentCard = false;
          }
          else {
            this.formTypeRecommendation = 'input';
            this.isUisRecommendationUpdated = false;
            this.haveSupportingDocument = false;
            this.supportingDataForm.patchValue({ name: 'Surat Rekomendasi' });
            this.supportingDataForm.reset();
            this.supportingDataForm.get('url').setValidators(Validators.required);
            this.supportingDataForm.get('url').updateValueAndValidity();
            this.recommendationLetterRequirementModal.show();
            this.loadingDocumentCard = false;
          }
        });
      }
      else if (this.documentTypeId == 10) {
        this.loadDetailCertificateFileDataTable(this.registration_number)
        this.certificateRequirementModal.show();
        this.loadingDocumentCard = false;
      }
      else if (this.documentTypeId == 11) {
        this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=11`).subscribe(response => {
          if (response.data.length !== 0) {
            this.formTypeAbility = 'edit';
            this.isUpdatedAbilityPayment = true;
            this.documentAbilitytId = response.data[0].document_id;
            this.documentAbilitySupportingId = response.data[0].document_supporting_id;
            this.abilityDataForm.patchValue({ name: 'Surat Kemampuan Pembayaran' });
            this.abilityDataForm.get('url').clearValidators();
            this.abilityDataForm.get('url').updateValueAndValidity();
            this.dataAbilityUrl = response.data;
            this.loadingDocumentCard = false;
            this.haveAbilityDocument = true;
            this.paymentAbilityModal.show();
          }
          else {
            this.formTypeAbility = 'input';
            this.isUpdatedAbilityPayment = false;
            this.abilityDataForm.patchValue({ name: 'Surat Kemampuan Pembayaran' });
            this.abilityDataForm.get('url').setValidators(Validators.required);
            this.abilityDataForm.get('url').updateValueAndValidity();
            this.paymentAbilityModal.show();
            this.haveAbilityDocument = false;
            this.loadingDocumentCard = false;

          }
        });
      }
      else if (this.documentTypeId == 12) {
        this.userService.getUtbkDocument(`?registration_number=${this.registration_number}`).subscribe(response => {
          if (response.length !== 0) {
            this.formTypeUtbk = 'edit';
            this.documentTypeUtbk = 12;
            this.isUtbkUpdated = true;
            this.documentId = response[0].document_id;
            this.documentUtbkId = response[0].id;
            this.utbkForm.patchValue({ KPUScore: response[0].general_reasoning });
            this.utbkForm.patchValue({ PKScore: response[0].quantitative_knowledge });
            this.utbkForm.patchValue({ PDPUScore: response[0].comprehension_general_knowledge });
            this.utbkForm.patchValue({ KMBDMScore: response[0].comprehension_reading_knowledge });
            this.utbkForm.patchValue({ math: response[0].math });
            this.utbkForm.patchValue({ physics: response[0].physics });
            this.utbkForm.patchValue({ biological: response[0].biology });
            this.utbkForm.patchValue({ chemical: response[0].chemical });
            this.utbkForm.patchValue({ geography: response[0].geography });
            this.utbkForm.patchValue({ economy: response[0].economy });
            this.utbkForm.patchValue({ historical: response[0].historical });
            this.utbkForm.patchValue({ sociological: response[0].sociological });
            this.utbkForm.patchValue({ url: '' });
            this.dataUtbkUrl = response;
            this.selectedCategoryUtbk = response[0].major_type && response[0].major_type.toString();
            if (response[0].major_type === 1) {
              this.isSaintek = true;
            } else {
              this.isSaintek = false;
            }
            this.loadingDocumentCard = false;
            this.utbkModals.show();
          } else {
            this.formTypeUtbk = 'input';
            this.documentTypeUtbk = 12;
            this.isUtbkUpdated = false;
            this.dataUtbkUrl = '';
            this.loadingDocumentCard = false;
            this.utbkModals.show();
          }
        });
      }
      else if (this.documentTypeId == 13) {
        this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=13`).subscribe(response => {
          if (response.data.length !== 0) {
            this.formTypeStudy = 'edit';
            this.documentTypeStudy = response.data[0].document_type_id;
            this.isEprtUpdated = true;
            this.isTPADocument = true;
            this.isCoPromotor = false;
            this.isIPKDocument = false;
            this.isEPRTDocument = false;
            this.isPromotor = false;
            this.loadingDocumentCard = false;
            this.documentStudyId = response.data[0].document_study_id;
            this.docid = response.data[0].document_id;
            this.eprtAndTpaForm.patchValue({ name: 'TPA' });
            this.eprtAndTpaForm.patchValue({ eprt_tpa_score: response.data[0].score });
            this.eprtAndTpaForm.patchValue({ publication_year: response.data[0].year });
            this.eprtAndTpaForm.get('url').clearValidators();
            this.eprtAndTpaForm.get('url').updateValueAndValidity();
            this.eprtAndTpaForm.get('gpa').clearValidators();
            this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
            this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
            this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
            this.dataStudyUrl = response.data;
            if (response.data[0].document_url !== null) {
                  this.haveDocumentStudy = true;
              } else {
                  this.haveDocumentStudy = false;
                }
            this.eprtAndTpaModal.show();
          }
          else {
            this.formTypeStudy = 'input';
            this.documentTypeStudy = this.documentTypeId;
            this.isEprtUpdated = false;
            this.isTPADocument = true;
            this.isPromotor = false;
            this.isCoPromotor = false;
            this.isIPKDocument = false;
            this.isEPRTDocument = false;
            this.loadingDocumentCard = false;
            this.haveDocumentStudy = false;
            this.eprtAndTpaForm.patchValue({ name: 'TPA' });
            this.eprtAndTpaForm.get('url').setValidators(Validators.required);
            this.eprtAndTpaForm.get('url').updateValueAndValidity();
            this.eprtAndTpaForm.get('gpa').clearValidators();
            this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
            this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
            this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
            this.eprtAndTpaForm.reset();
            this.eprtAndTpaModal.show();
          }
        });
      }
      else if (this.documentTypeId == 14) {
        this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=14`).subscribe(response => {
          if (response.data.length !== 0) {
            this.formTypeStudy = 'edit';
            this.documentTypeStudy = response.data[0].document_type_id
            this.isEprtUpdated = true;
            this.isIPKDocument = true;
            this.isTPADocument = false;
            this.isEPRTDocument = false;
            this.isCoPromotor = false;
            this.isPromotor = false;
            this.loadingDocumentCard = false;
            this.documentStudyId = response.data[0].document_study_id;
            this.docid = response.data[0].document_id;
            this.eprtAndTpaForm.patchValue({ name: 'IPK' });
            this.eprtAndTpaForm.patchValue({ eprt_tpa_score:'' });
            this.eprtAndTpaForm.patchValue({ gpa: response.data[0].score });
            this.eprtAndTpaForm.get('url').clearValidators();
            this.eprtAndTpaForm.get('url').updateValueAndValidity();
            this.eprtAndTpaForm.get('gpa').setValidators([Validators.required, Validators.maxLength(4), Validators.max(4), Validators.pattern('^[0-9.]*$')]);
            this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
            this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
            this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
            this.eprtAndTpaForm.get('publication_year').clearValidators();
            this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
            this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
            this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
            this.dataStudyUrl = response.data;
            if (response.data[0].document_url !== null) {
                  this.haveDocumentStudy = true;
              } else {
                  this.haveDocumentStudy = false;
                }
            this.eprtAndTpaModal.show();
          }
          else {
            this.formTypeStudy = 'input';
            this.documentTypeStudy = this.documentTypeId;
            this.isEprtUpdated = false;
            this.isIPKDocument = true;
            this.isPromotor = false;
            this.isTPADocument = false;
            this.isEPRTDocument = false;
            this.isCoPromotor = false;
            this.loadingDocumentCard = false;
            this.haveDocumentStudy = false;
            this.eprtAndTpaForm.patchValue({ name: 'IPK' });
            this.eprtAndTpaForm.get('url').setValidators(Validators.required);
            this.eprtAndTpaForm.get('url').updateValueAndValidity();
            this.eprtAndTpaForm.get('gpa').setValidators([Validators.required, Validators.maxLength(4), Validators.max(4), Validators.pattern('^[0-9.]*$')]);
            this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
            this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
            this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
            this.eprtAndTpaForm.get('publication_year').clearValidators();
            this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
            this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
            this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
            this.eprtAndTpaForm.reset();
            this.eprtAndTpaModal.show();
          }
        });
      }
      else if (this.documentTypeId == 15) {
        this.userService.getDocumentRecommendation(`?registration_number=${this.registration_number}`).subscribe(response=> {
          if (response.length !== 0) {
            this.loading = false;
            this.loadingRecommendation = false;
            this.formTypeRecommendationS2 = 'view';
            this.viewRecommendationS2 = true;
            this.loadingDocumentCard = false;
            this.idRecommendation1 = response[0].id;
            this.idRecommendation2 = response[1].id;
            this.recommendationS2Form.patchValue({name_rec1: response[0].name});
            this.recommendationS2Form.patchValue({handphone_rec1: response[0].handphone});
            this.recommendationS2Form.patchValue({email_rec1: response[0].email});
            this.recommendationS2Form.patchValue({name_rec2: response[1].name});
            this.recommendationS2Form.patchValue({handphone_rec2: response[1].handphone});
            this.recommendationS2Form.patchValue({email_rec2: response[1].email});
            this.recommendationS2Modal.show();
          } else {
            this.formTypeRecommendationS2 = 'input';
            this.viewRecommendationS2 = false;
            this.loadingRecommendation = false;
            this.documentTypeId = 15;
            this.loadingDocumentCard = false;
            this.recommendationS2Modal.show();
          }
        })
      }
      else if (this.documentTypeId == 16) {
        this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=16`).subscribe(response => {
          if (response.data.length !== 0) {
            this.formTypeStudy = 'edit';
            this.haveDocumentData = true;
            this.documentTypeStudy = response.data[0].document_type_id
            this.isEprtUpdated = true;
            this.isCoPromotor = false;
            this.isPromotor = true;
            this.isIPKDocument = false;
            this.isTPADocument = false;
            this.isEPRTDocument = false;
            this.loadingDocumentCard = false;
            this.documentStudyId = response.data[0].document_study_id;
            this.docid = response.data[0].document_id;
            this.eprtAndTpaForm.patchValue({ name: 'Kesediaan Promotor' });
            this.eprtAndTpaForm.get('url').clearValidators();
            this.eprtAndTpaForm.get('url').updateValueAndValidity();
            this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
            this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
            this.eprtAndTpaForm.get('gpa').clearValidators();
            this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
            this.eprtAndTpaForm.get('publication_year').clearValidators();
            this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
            this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
            this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
            this.dataStudyUrl = response.data;
            if (response.data[0].document_url !== null) {
                  this.haveDocumentStudy = true;
              } else {
                  this.haveDocumentStudy = false;
                }
            this.eprtAndTpaModal.show();
          }
          else {
            this.formTypeStudy = 'input';
            this.documentTypeStudy = this.documentTypeId;
            this.isPromotor = true;
            this.isCoPromotor = false;
            this.isEprtUpdated = false;
            this.isIPKDocument = false;
            this.isTPADocument = false;
            this.isEPRTDocument = false;
            this.loadingDocumentCard = false;
            this.haveDocumentStudy = false;
            this.eprtAndTpaForm.patchValue({ name: 'Kesediaan Promotor' });
            this.eprtAndTpaForm.get('publication_year').clearValidators();
            this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
            this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
            this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
            this.eprtAndTpaForm.get('gpa').clearValidators();
            this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
            this.eprtAndTpaForm.get('url').setValidators(Validators.required);
            this.eprtAndTpaForm.get('url').updateValueAndValidity();
            this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
            this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
            this.eprtAndTpaForm.get('url').reset();
            this.eprtAndTpaModal.show();
          }
        });
      }
      else if (this.documentTypeId == 17) {
        this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=17`).subscribe(response => {
          if (response.data.length !== 0) {
            this.formTypeProposal = 'edit';
            this.haveDocumentData = true;
            this.documentTypeStudy = response.data[0].document_type_id
            this.isEprtUpdated = true;
            this.isProposal = true;
            this.loadingDocumentCard = false;
            this.documentStudyId = response.data[0].document_study_id;
            this.docid = response.data[0].document_id;
            this.proposalForm.patchValue({ title: response.data[0].title})
            this.proposalForm.get('url').clearValidators();
            this.proposalForm.get('url').updateValueAndValidity();
            this.proposalForm.get('title').setValidators(Validators.compose([Validators.required, Validators.maxLength(1000)]));
            this.proposalForm.get('title').updateValueAndValidity();
            this.dataProposal = response.data;
            if (response.data[0].document_url !== null) {
              this.haveProposalDocument = true;
            } else {
              this.haveProposalDocument = true;
            }
            this.proposalModal.show();
          }
          else {
            this.formTypeProposal = 'input';
            this.documentTypeStudy = this.documentTypeId;
            this.isProposal = true;
            this.loadingDocumentCard = false;
            this.proposalForm.get('url').setValidators(Validators.required);
            this.proposalForm.get('url').updateValueAndValidity();
            this.proposalForm.get('title').setValidators(Validators.compose([Validators.required, Validators.maxLength(1000)]));
            this.proposalForm.get('title').updateValueAndValidity();
            this.proposalModal.show();
            this.proposalForm.reset();
          }
        });
      }
      else if (this.documentTypeId == 18) {
        this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=18`).subscribe(response2 => {
          if (response2.data.length !== 0) {
            this.formTypeIjazah = 'edit';
            this.isIjazahS1 = true;
            this.isIjazahS2 = false;
            this.isPortofolio = false;
            this.isIjazahUpdated = true;
            this.loadingDocumentCard = false;
            this.documentTypeIjazah = response2.data[0].document_type_id;
            this.docid = response2.data[0].document_id;
            this.ijazahForm.patchValue({ name: response2.data[0].document_type});
            this.ijazahForm.get('url').clearValidators();
            this.ijazahForm.get('url').updateValueAndValidity();
            this.dataIjazah = response2.data;
            if (response2.data[0].document_url !== null) {
              this.haveDocumentIjazah = true;
            } else {
              this.haveDocumentIjazah = false;
            }
            this.ijazahModals.show();
          } else {
            this.formTypeIjazah = 'input';
            this.isIjazahS1 = true;
            this.isIjazahS2 = false;
            this.isPortofolio = false;
            this.isIjazahUpdated = false;
            this.haveDocumentIjazah = false;
            this.loadingDocumentCard = false;
            this.ijazahForm.patchValue({ name: 'Ijazah S1'});
            this.documentTypeIjazah = this.documentTypeId;
            this.ijazahForm.get('url').setValidators(Validators.required);
            this.ijazahForm.get('url').updateValueAndValidity();
            this.ijazahModals.show();
          }
        });
      }
      else if (this.documentTypeId == 19) {
        this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=19`).subscribe(response2 => {
          if (response2.data.length !== 0) {
            this.formTypeIjazah = 'edit';
            this.isIjazahS1 = false;
            this.isIjazahS2 = true;
            this.isPortofolio = false;
            this.isIjazahUpdated = true;
            this.haveDocumentIjazah = true;
            this.loadingDocumentCard = false;
            this.documentTypeIjazah = response2.data[0].document_type_id;
            this.docid = response2.data[0].document_id;
            this.ijazahForm.patchValue({ name: response2.data[0].document_type});
            this.ijazahForm.get('url').clearValidators();
            this.ijazahForm.get('url').updateValueAndValidity();
            this.dataIjazah = response2.data;
            this.ijazahModals.show();
          } else {
            this.formTypeIjazah = 'input';
            this.isIjazahUpdated = false;
            this.isIjazahS1 = false;
            this.isIjazahS2 = true;
            this.isPortofolio = false;
            this.haveDocumentIjazah = false;
            this.loadingDocumentCard = false;
            this.documentTypeIjazah = this.documentTypeId;
            this.ijazahForm.patchValue({ name: 'Ijazah S2'});
            this.ijazahForm.get('url').setValidators(Validators.required);
            this.ijazahForm.get('url').updateValueAndValidity();
            this.ijazahModals.show();
          }
        });
      }
      else if (this.documentTypeId == 20) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=20`).subscribe(response => {
        if (response.data.length !== 0) {
          this.formTypeStudy = 'edit';
          this.haveDocumentData = true;
          this.documentTypeStudy = response.data[0].document_type_id
          this.isEprtUpdated = true;
          this.isPromotor = false;
          this.isResidensi = true;
          this.isSuratIjinAtasan = false;
          this.isCoPromotor = false;
          this.isIPKDocument = false;
          this.isTPADocument = false;
          this.loadingDocumentCard = false;
          this.isEPRTDocument = false;
          this.documentStudyId = response.data[0].document_study_id;
          this.docid = response.data[0].document_id;
          this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
          this.eprtAndTpaForm.get('url').clearValidators();
          this.eprtAndTpaForm.get('url').updateValueAndValidity();
          this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
          this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
          this.eprtAndTpaForm.get('gpa').clearValidators();
          this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
          this.eprtAndTpaForm.get('publication_year').clearValidators();
          this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
          this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
          this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
          this.dataStudyUrl = response.data;
          if (response.data[0].document_url !== null) {
            this.haveDocumentStudy = true;
        } else {
            this.haveDocumentStudy = false;
          }
          this.eprtAndTpaModal.show();
        }
        else {
          this.formTypeStudy = 'input';
          this.documentTypeStudy = this.documentTypeId;
          this.isPromotor = false;
          this.isResidensi = true;
          this.isSuratIjinAtasan = false;
          this.isEprtUpdated = false;
          this.isIPKDocument = false;
          this.isTPADocument = false;
          this.isEPRTDocument = false;
          this.loadingDocumentCard = false;
          this.isCoPromotor = false;
          this.haveDocumentStudy = false;
          this.eprtAndTpaForm.patchValue({ name: 'Surat Kesediaan Residensi' });
          this.eprtAndTpaForm.get('publication_year').clearValidators();
          this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
          this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
          this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
          this.eprtAndTpaForm.get('gpa').clearValidators();
          this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
          this.eprtAndTpaForm.get('url').setValidators(Validators.required);
          this.eprtAndTpaForm.get('url').updateValueAndValidity();
          this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
          this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
          this.eprtAndTpaForm.get('url').reset();
          this.eprtAndTpaModal.show();
        }
      });
      }
      else if (this.documentTypeId == 21) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=21`).subscribe(response => {
        if (response.data.length !== 0) {
          this.formTypeStudy = 'edit';
          this.haveDocumentData = true;
          this.documentTypeId = response.data[0].document_type_id
          this.isEprtUpdated = true;
          this.isPromotor = false;
          this.isResidensi = false;
          this.isSuratIjinAtasan = true;
          this.isIPKDocument = false;
          this.isTPADocument = false;
          this.loadingDocumentCard = false;
          this.isEPRTDocument = false;
          this.isCoPromotor = false;
          this.documentStudyId = response.data[0].document_study_id;
          this.docid = response.data[0].document_id;
          this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
          this.eprtAndTpaForm.get('url').clearValidators();
          this.eprtAndTpaForm.get('url').updateValueAndValidity();
          this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
          this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
          this.eprtAndTpaForm.get('gpa').clearValidators();
          this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
          this.eprtAndTpaForm.get('publication_year').clearValidators();
          this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
          this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
          this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
          this.dataStudyUrl = response.data;
          if (response.data[0].document_url !== null) {
            this.haveDocumentStudy = true;
        } else {
            this.haveDocumentStudy = false;
          }
          this.eprtAndTpaModal.show();
        }
        else {
          this.formTypeStudy = 'input';
          this.documentTypeStudy = this.documentTypeId;
          this.isPromotor = false;
          this.isCoPromotor = false;
          this.isResidensi = false;
          this.isSuratIjinAtasan = true;
          this.isEprtUpdated = false;
          this.isIPKDocument = false;
          this.isTPADocument = false;
          this.loadingDocumentCard = false;
          this.isEPRTDocument = false;
          this.haveDocumentStudy = false;
          this.eprtAndTpaForm.patchValue({ name: 'Surat Ijin Atasan Langsung' });
          this.eprtAndTpaForm.get('publication_year').clearValidators();
          this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
          this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
          this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
          this.eprtAndTpaForm.get('gpa').clearValidators();
          this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
          this.eprtAndTpaForm.get('url').setValidators(Validators.required);
          this.eprtAndTpaForm.get('url').updateValueAndValidity();
          this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
          this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
          this.eprtAndTpaForm.get('url').reset();
          this.eprtAndTpaModal.show();
        }
      });
      }
      else if (this.documentTypeId == 22) {
        // Portofolio
        this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=22`).subscribe(response2 => {
          if (response2.data.length !== 0) {
            this.formTypeIjazah = 'edit';
            this.haveDocumentIjazah = true;
            this.isIjazahS1 = false;
            this.isIjazahS2 = false;
            this.isPortofolio = true;
            this.loadingDocumentCard = false;
            this.documentTypeIjazah = response2.data[0].document_type_id;
            this.docid = response2.data[0].document_id;
            this.ijazahForm.patchValue({ link_document: response2.data[0].document_url});
            this.ijazahForm.patchValue({ name: response2.data[0].document_type});
            this.ijazahForm.get('url').clearValidators();
            this.ijazahForm.get('url').updateValueAndValidity();
            this.ijazahForm.get('name').clearValidators();
            this.ijazahForm.get('name').updateValueAndValidity();
            this.isIjazahUpdated = true;
            this.dataIjazah = response2.data;
            this.ijazahModals.show();
          } else {
            this.formTypeIjazah = 'input';
            this.isIjazahS1 = false;
            this.isIjazahS2 = false;
            this.isPortofolio = true;
            this.loadingDocumentCard = false;
            this.haveDocumentIjazah = false;
            this.documentTypeIjazah = this.documentTypeId;
            this.ijazahForm.patchValue({ name: 'Portofolio'});
            this.ijazahForm.get('url').setValidators(Validators.required);
            this.ijazahForm.get('url').updateValueAndValidity();
            this.ijazahForm.get('name').clearValidators();
            this.ijazahForm.get('name').updateValueAndValidity();
            this.ijazahModals.show();
          }
        });
      }
      else if (this.documentTypeId == 23) {
        this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=23`).subscribe(response => {
          if (response.data.length !== 0) {
            this.transcriptRequirementModal.show();
            this.formType = 'edit';
            this.documentTypeId = 23;
            this.isTranscript = false;
            this.isUpdatedTranscript = true;
            this.loadingDocumentCard = false;
            this.documentTranscriptId = response.data[0].document_id;
            this.documentReportTranscriptId = response.data[0].document_report_card_id;
            this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S1' });
            this.transcriptDataForm.patchValue({ gpa: response.data[0].gpa });
            this.transcriptDataForm.get('url').clearValidators();
            this.transcriptDataForm.get('url').updateValueAndValidity();
            this.transcriptDataForm.get('gpa').setValidators([Validators.required, Validators.maxLength(4), Validators.max(4), Validators.pattern('^[0-9.]*$')]);
            this.transcriptDataForm.get('gpa').updateValueAndValidity();
            this.dataTranscriptUrlDoc = response.data;
            if (response.data[0].url !== null) {
              this.haveTranscriptDoc = true;
            } else {
              this.haveTranscriptDoc = false;
            }
          }
          else {
            this.formType = 'input';
            this.documentTypeId = 23;
            this.isUpdatedTranscript = false;
            this.isTranscript = false;
            this.loadingDocumentCard = false;
            this.haveTranscriptDoc = false;
            this.transcriptRequirementModal.show();
            this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S1' });
            this.transcriptDataForm.get('url').setValidators(Validators.required);
            this.transcriptDataForm.get('url').updateValueAndValidity();
            this.transcriptDataForm.get('gpa').setValidators([Validators.required, Validators.maxLength(4), Validators.max(4), Validators.pattern('^[0-9.]*$')]);
            this.transcriptDataForm.get('gpa').updateValueAndValidity();
            this.dataTranscriptUrlDoc = '';
            this.transcriptDataForm.patchValue({ url: '' });
          }
        });
      }
      else if (this.documentTypeId == 24) {
        this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=24`).subscribe(response => {
          if (response.data.length !== 0) {
            this.transcriptRequirementModal.show();
            this.formType = 'edit';
            this.isTranscript = false;
            this.isUpdatedTranscript = true;
            this.loadingDocumentCard = false;
            this.documentTranscriptId = response.data[0].document_id;
            this.documentTypeId = 24;
            this.documentReportTranscriptId = response.data[0].document_report_card_id;
            this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S2' });
            this.transcriptDataForm.patchValue({ gpa: response.data[0].gpa });
            this.transcriptDataForm.get('url').clearValidators();
            this.transcriptDataForm.get('url').updateValueAndValidity();
            this.transcriptDataForm.get('gpa').setValidators([Validators.required, Validators.maxLength(4), Validators.max(4), Validators.pattern('^[0-9.]*$')]);
            this.transcriptDataForm.get('gpa').updateValueAndValidity();
            this.dataTranscriptUrlDoc = response.data;
            if (response.data[0].url !== null) {
              this.haveTranscriptDoc = true;
            } else {
              this.haveTranscriptDoc = false;
            }
          }
          else {
            this.formType = 'input';
            this.isUpdatedTranscript = false;
            this.isTranscript = false;
            this.loadingDocumentCard = false;
            this.documentTypeId = 24;
            this.transcriptRequirementModal.show();
            this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S2' });
            this.transcriptDataForm.get('url').setValidators(Validators.required);
            this.transcriptDataForm.get('url').updateValueAndValidity();
            this.transcriptDataForm.get('gpa').setValidators([Validators.required, Validators.maxLength(4), Validators.max(4), Validators.pattern('^[0-9.]*$')]);
            this.transcriptDataForm.get('gpa').updateValueAndValidity();
            this.dataTranscriptUrlDoc = '';
            this.haveTranscriptDoc = false;
            this.transcriptDataForm.patchValue({ url: '' });
          }
        });
      }
      else if (this.documentTypeId == 25) {
          this.userService.getTranscriptDocument(`?registration_number=${this.registration_number}`).subscribe(response => {
            if (response.length !== 0) {
              const x = response[0].id;
              this.userService.getTranscriptDocumentDetails(`?document_transcript_id=${x}`).subscribe(response => {
                if (response.length !== 0) {
                  this.formType = 'view';
                  this.tableTranscript = response.courses;
                  this.isUpdatedTranscript = true;
                  this.documentTranscriptId = response.id;
                  this.transcriptFormlView.patchValue({ name: 'Transkrip Nilai Kredit Transfer' });
                  this.transcriptFormlView.patchValue({ totalCredit: response.total_credit });
                  this.transcriptFormlView.patchValue({ totalCourse: response.total_course });
                  this.dataTranscriptUrl = response.url;
                  this.loadingDocumentCard = false;
                  this.transcriptRequirementModalView.show();
                }
              });
            }
            else {
              this.formType = 'input';
              this.dynamicForm.patchValue({ registrationNumber: this.registration_number })
              this.dynamicForm.patchValue({ documentId: this.documentTypeId })
              this.dynamicForm.patchValue({ document_name: 'Transkrip Nilai Kredit Transfer' })
              this.transcriptCreditTransferRequirementModal.show();
              this.transcriptDataFormCredit.patchValue({ name: 'Transkrip Nilai Kredit Transfer' });
              this.transcriptDataFormCredit.get('url').setValidators(Validators.required);
              this.transcriptDataFormCredit.get('url').updateValueAndValidity();
              this.dataTranscriptUrl = '';
              this.transcriptDataFormCredit.patchValue({ url: '' });
              this.loadingDocumentCard = false;
            }
          });
      }
      else if (this.documentTypeId == 26) {
        this.getTablePublication();
        this.publicationDataModals.show();
        this.documentPublicationTypeId = 26;
        this.loadingDocumentCard = false;
      }
      else if (this.documentTypeId == 27) {
        this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=27`).subscribe(response => {
          if (response.data.length !== 0) {
            this.formTypeStudy = 'edit';
            this.haveDocumentData = true;
            this.documentTypeStudy = response.data[0].document_type_id;
            this.isEprtUpdated = true;
            this.isCoPromotor = true;
            this.isPromotor = false;
            this.isIPKDocument = false;
            this.isTPADocument = false;
            this.loadingDocumentCard = false;
            this.isEPRTDocument = false;
            this.isResidensi = false;
            this.isSuratIjinAtasan = false;
            this.documentStudyId = response.data[0].document_study_id;
            this.docid = response.data[0].document_id;
            this.eprtAndTpaForm.patchValue({ nameCoPromotor: response.data[0].document_name });
            this.eprtAndTpaForm.patchValue({ name: response.data[0].document_description });
            this.eprtAndTpaForm.get('url').clearValidators();
            this.eprtAndTpaForm.get('url').updateValueAndValidity();
            this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
            this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
        this.eprtAndTpaForm.get('gpa').clearValidators();
            this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
            this.eprtAndTpaForm.get('publication_year').clearValidators();
            this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
            this.dataStudyUrl = response.data;
            if (response.data[0].document_url !== null) {
                        this.haveDocumentStudy = true;
                    } else {
                        this.haveDocumentStudy = false;
                      }
            this.eprtAndTpaModal.show();
          }
          else {
            this.formTypeStudy = 'input';
            this.documentTypeStudy = this.documentTypeId;
            this.isPromotor = false;
            this.isCoPromotor = true;
            this.isEprtUpdated = false;
            this.isIPKDocument = false;
            this.isTPADocument = false;
            this.isEPRTDocument = false;
            this.loadingDocumentCard = false;
            this.haveDocumentStudy = false;
            this.isResidensi = false;
            this.isSuratIjinAtasan = false;
            this.eprtAndTpaForm.patchValue({ name: 'Kesediaan Co-Promotor' });
            this.eprtAndTpaForm.get('publication_year').clearValidators();
            this.eprtAndTpaForm.get('publication_year').updateValueAndValidity();
            this.eprtAndTpaForm.get('eprt_tpa_score').clearValidators();
            this.eprtAndTpaForm.get('eprt_tpa_score').updateValueAndValidity();
            this.eprtAndTpaForm.get('gpa').clearValidators();
            this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
            this.eprtAndTpaForm.get('url').setValidators(Validators.required);
            this.eprtAndTpaForm.get('url').updateValueAndValidity();
            this.eprtAndTpaForm.get('nameCoPromotor').setValidators(Validators.required);
            this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
            this.eprtAndTpaForm.get('url').reset();
            this.eprtAndTpaModal.show();
          }
        });
      }
      else if (this.documentTypeId == 28) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=28`).subscribe(response => {
        if (response.data.length !== 0) {
          this.formTypeStudy = 'edit';
          this.documentTypeStudy = response.data[0].document_type_id
          this.isEprtUpdated = true;
          this.isTPADocument = false;
          this.isEPRTDocument = true;
          this.isIPKDocument = false;
          this.loadingDocumentCard = false;
          this.isPromotor = false;
          this.isResidensi = false;
          this.isSuratIjinAtasan = false;
          this.isCoPromotor = false;
          this.documentStudyId = response.data[0].document_study_id;
          this.docid = response.data[0].document_id;
          this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
          this.eprtAndTpaForm.patchValue({ eprt_tpa_score: response.data[0].score });
          this.eprtAndTpaForm.patchValue({ publication_year: response.data[0].year });
          this.eprtAndTpaForm.get('url').clearValidators();
          this.eprtAndTpaForm.get('url').updateValueAndValidity();
      this.eprtAndTpaForm.get('gpa').clearValidators();
            this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
          this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
          this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
          this.dataStudyUrl = response.data;
          if (response.data[0].document_url !== null) {
                this.haveDocumentStudy = true;
            } else {
                this.haveDocumentStudy = false;
              }
          this.eprtAndTpaModal.show();
        }
        else {
          this.formTypeStudy = 'input';
          this.documentTypeStudy = this.documentTypeId;
          this.isEprtUpdated = false;
          this.isTPADocument = false;
          this.isPromotor = false;
          this.isResidensi = false;
          this.isSuratIjinAtasan = false;
          this.loadingDocumentCard = false;
          this.isIPKDocument = false;
          this.isEPRTDocument = true;
          this.isCoPromotor = false;
          this.haveDocumentStudy = false;
          this.eprtAndTpaForm.get('url').setValidators(Validators.required);
          this.eprtAndTpaForm.get('url').updateValueAndValidity();
          this.eprtAndTpaForm.get('gpa').clearValidators();
            this.eprtAndTpaForm.get('gpa').updateValueAndValidity();
          this.eprtAndTpaForm.get('nameCoPromotor').clearValidators();
          this.eprtAndTpaForm.get('nameCoPromotor').updateValueAndValidity();
          this.eprtAndTpaForm.reset();
          this.eprtAndTpaModal.show();
        }
      });
      }
      else if (this.documentTypeId == 1 || this.documentTypeId == 2 || this.documentTypeId == 3 || this.documentTypeId == 4 || this.documentTypeId == 5) {
        this.userService.getPersonalDocumentData(`${this.userData}&document_type_id=${this.documentTypeId}`).subscribe(res => {
          if (res.data.length !== 0) {
            if (res.data[0].document_id === null) {
              this.formTypePersonal = 'input';
              this.loadingDocumentCard = false;
              this.documentTypePersonal = this.documentTypeId;
              this.isUpdatedRequirement = false;
              if (this.documentTypePersonal == 1) {
                this.isShowIdentityNumber = true;
                this.participantDocumentForm.get('number').setValidators(Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(16)]));
                this.participantDocumentForm.get('number').updateValueAndValidity();
              } else {
                this.isShowIdentityNumber = false;
                this.participantDocumentForm.get('number').clearValidators();
                this.participantDocumentForm.get('number').updateValueAndValidity();
                this.participantDocumentForm.patchValue({ number: '' });
              }
              this.participantDocumentForm.get('url').setValidators(Validators.required);
              this.participantDocumentForm.get('url').updateValueAndValidity();
              this.participantDocumentForm.patchValue({ name: res.data[0].document_name });
              this.participantDocumentForm.patchValue({ url: '' });
              this.dataRequirementUrl = '';
              this.haveDocumentPersonal = false;
              this.documentRequirementModal.show();
            } else {
              this.formTypePersonal = 'edit';
              this.loadingDocumentCard = false;
              this.documentTypePersonal = res.data[0].document_type_id;
              this.documentidPersonal = res.data[0].document_id;
              this.isUpdatedRequirement = true;
              this.participantDocumentForm.get('url').clearValidators();
              this.participantDocumentForm.get('url').updateValueAndValidity();
              this.dataRequirementUrl = res.data;
              this.documentRequirementModal.show();
              this.participantDocumentForm.patchValue({ name: res.data[0].document_name });
              this.participantDocumentForm.patchValue({ url: '' });
              if (this.documentTypePersonal == 1) {
                this.participantDocumentForm.patchValue({ number: res.data[0].number });
                this.participantDocumentForm.get('number').setValidators(Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(16)]));
                this.participantDocumentForm.get('number').updateValueAndValidity();
                this.isShowIdentityNumber = true;
              } else {
                this.isShowIdentityNumber = false;
                this.participantDocumentForm.patchValue({ number: '' });
                this.participantDocumentForm.get('number').clearValidators();
                this.participantDocumentForm.get('number').updateValueAndValidity();
              }
              if (response2.data[0].document_url !== null) {
                this.haveDocumentPersonal = true;
              } else {
                this.haveDocumentPersonal = false;
              }
            }
          } else {
            this.formTypePersonal = 'input';
            this.loadingDocumentCard = false;
            this.documentTypePersonal = this.documentTypeId;
            this.isUpdatedRequirement = false;
            this.isShowIdentityNumber = false;
            this.participantDocumentForm.get('number').clearValidators();
            this.participantDocumentForm.get('number').updateValueAndValidity();
            this.participantDocumentForm.get('url').setValidators(Validators.required);
            this.participantDocumentForm.get('url').updateValueAndValidity();
            this.participantDocumentForm.patchValue({ name: 'Ijazah Pendidikan Terakhir atau Surat Keterangan Lulus' });
            this.participantDocumentForm.patchValue({ url: '' });
            this.dataRequirementUrl = '';
            this.documentRequirementModal.show();
            this.participantDocumentForm.reset();
          }
        });
      }
      else {
        this.noDataFoundAlert();
        this.loadingDocumentCard = false;
      }
    });
  }

  closeTranscriptModals() {
    this.transcriptRequirementModal.hide();
    this.isTranscript = false;
    this.transcriptDataForm.reset();
  }

  deleteTranscriptDocument() {
    const data = {
      document_transcript_id: this.documentTranscriptId
    };
    Swal.fire({
      title: this.confirmation,
      text: this.sure,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#ffba57',
      confirmButtonText: this.yes,
      cancelButtonText: this.no
    }).then((confirm) => {
      if (confirm.value) {
        this.loading = true;
        this.userService.delTranscriptDocument(data).subscribe(response => {
          if (response.status === 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.renderSelectionDocumentData();
            this.checkRequiredDocument();
            this.transcriptRequirementModalView.hide();
            this.loadingCard = false;
            this.dynamicForm.reset();
            this.courseTotal = false;
            for (let i = this.t.length; i >= 0; i--) {
              this.t.removeAt(i);
            }
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: response.status,
              msg: response.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loadingCard = false;
            this.loading = false;
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loadingCard = false;
        });
      }
    });

  }

  noDataFoundAlert() {
    Swal.fire({
      title: 'Info',
      text: 'Data Dokumen Tidak Ada / Belum ditambahkan ',
      type: 'error'
    });
  }

  closeEprtTpaModals() {
    this.eprtAndTpaModal.hide();
    this.eprtAndTpaForm.reset();
    this.isPromotor = false;
    this.isIPKDocument = false;
    this.isTPADocument = false;
    this.isEPRTDocument = false;
    this.isResidensi = false;
    this.isSuratIjinAtasan = false;
    this.isEprtUpdated = false;
    this.isCoPromotor = false;
  }

  deleteRequirementDocument(data) {
    this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=${data}`).subscribe(response => {
      this.documentTypeId = data;
      if (this.documentTypeId == 6) {
        if (response.data.length !== 0) {
          if (response.data[0].document_id === null) {
            Swal.fire({
              title: 'Warning',
              text: 'Anda harus mengunggah dokumen terlebih dahulu',
              type: 'warning'
            });
          } else {
            const data = {
              id: response.data[0].document_id
            };
            Swal.fire({
              title: this.confirmation,
              text: this.sure,
              type: 'question',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#ffba57',
              confirmButtonText: this.yes,
              cancelButtonText: this.no
            }).then((confirm) => {
              if (confirm.value) {
                this.loading = true;
                this.userService.deletePersonalDocumentData(data).subscribe(res => {
                  if (res.status == 'Success') {
                    this.loadSuccess();
                    this.loading = false;
                    this.renderSelectionDocumentData();
                    this.checkRequiredDocument();
                  } else {
                    this.broadcasterService.notifBroadcast(true, {
                      title: res.status,
                      msg: res.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });
                    this.loading = false;
                  }
                }, (reason) => {
                  this.loading = false;
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                });
              }
            });
          }
        } else {
          Swal.fire({
            title: 'Warning',
            text: 'Anda harus mengunggah dokumen terlebih dahulu',
            type: 'warning'
          });
        }
      } else if (this.documentTypeId == 7) {
        // raport
      } else if (this.documentTypeId == 8) {
        this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=8`).subscribe(response => {
          if (response.data.length !== 0) {
            const data = {
              id: response.data[0].document_report_card_id
            };
            Swal.fire({
              title: this.confirmation,
              text: this.sure,
              type: 'question',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#ffba57',
              confirmButtonText: this.yes,
              cancelButtonText: this.no
            }).then((confirm) => {
              if (confirm.value) {
                this.loading = true;
                this.userService.deletePersonalDocumentData(data).subscribe(res => {
                  if (res.status == 'Success') {
                    this.loadSuccess();
                    this.loading = false;
                    this.renderSelectionDocumentData();
                    this.checkRequiredDocument();
                  } else {
                    this.broadcasterService.notifBroadcast(true, {
                      title: res.status,
                      msg: res.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });
                    this.loading = false;
                  }
                }, (reason) => {
                  this.loading = false;
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                });
              }
            });
          } else {
            Swal.fire({
              title: 'Warning',
              text: 'Anda harus mengunggah dokumen terlebih dahulu',
              type: 'warning'
            });
          }
        });
      } else if (this.documentTypeId == 9) {
        this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=9`).subscribe(response => {
          if (response.data.length !== 0) {
            const data = {
              id: response.data[0].document_supporting_id
            };
            Swal.fire({
              title: this.confirmation,
              text: this.sure,
              type: 'question',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#ffba57',
              confirmButtonText: this.yes,
              cancelButtonText: this.no
            }).then((confirm) => {
              if (confirm.value) {
                this.loading = true;
                this.userService.deleteDocumentSupportingData(data).subscribe(res => {
                  if (res.status == 'Success') {
                    this.loadSuccess();
                    this.loading = false;
                    this.renderSelectionDocumentData();
                    this.checkRequiredDocument();
                  } else {
                    this.broadcasterService.notifBroadcast(true, {
                      title: res.status,
                      msg: res.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });
                    this.loading = false;
                  }
                }, (reason) => {
                  this.loading = false;
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                });
              }
            });
          } else {
            Swal.fire({
              title: 'Warning',
              text: 'Anda harus mengunggah dokumen terlebih dahulu',
              type: 'warning'
            });
          }
        });
      } else if (this.documentTypeId == 10) {
        // certificate
      } else if (this.documentTypeId == 11) {
        this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=11`).subscribe(response => {
          if (response.data.length !== 0) {
            const data = {
              id: response.data[0].document_supporting_id
            };
            Swal.fire({
              title: this.confirmation,
              text: this.sure,
              type: 'question',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#ffba57',
              confirmButtonText: this.yes,
              cancelButtonText: this.no
            }).then((confirm) => {
              if (confirm.value) {
                this.loading = true;
                this.userService.deleteDocumentSupportingData(data).subscribe(res => {
                  if (res.status == 'Success') {
                    this.loadSuccess();
                    this.loading = false;
                    this.renderSelectionDocumentData();
                    this.checkRequiredDocument();
                  } else {
                    this.broadcasterService.notifBroadcast(true, {
                      title: res.status,
                      msg: res.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });
                    this.loading = false;
                  }
                }, (reason) => {
                  this.loading = false;
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                });
              }
            });
          } else {
            Swal.fire({
              title: 'Warning',
              text: 'Anda harus mengunggah dokumen terlebih dahulu',
              type: 'warning'
            });
          }
        });
      } else if (this.documentTypeId == 12) {
        this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=12`).subscribe(response => {
          if (response.data.length !== 0) {
            const data = {
              id: response.data[0].document_study_id
            };
            Swal.fire({
              title: this.confirmation,
              text: this.sure,
              type: 'question',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#ffba57',
              confirmButtonText: this.yes,
              cancelButtonText: this.no
            }).then((confirm) => {
              if (confirm.value) {
                this.loading = true;
                this.userService.deleteDocumentStudy(data).subscribe(res => {
                  if (res.status == 'Success') {
                    this.loadSuccess();
                    this.loading = false;
                    this.renderSelectionDocumentData();
                    this.checkRequiredDocument();
                  } else {
                    this.broadcasterService.notifBroadcast(true, {
                      title: res.status,
                      msg: res.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });
                    this.loading = false;
                  }
                }, (reason) => {
                  this.loading = false;
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                });
              }
            });
          } else {
            Swal.fire({
              title: 'Warning',
              text: 'Anda harus mengunggah dokumen terlebih dahulu',
              type: 'warning'
            });
          }
        });
      } else if (this.documentTypeId == 13) {
        this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=13`).subscribe(response => {
          if (response.data.length !== 0) {
            const data = {
              id: response.data[0].document_study_id
            };
            Swal.fire({
              title: this.confirmation,
              text: this.sure,
              type: 'question',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#ffba57',
              confirmButtonText: this.yes,
              cancelButtonText: this.no
            }).then((confirm) => {
              if (confirm.value) {
                this.loading = true;
                this.userService.deleteDocumentStudy(data).subscribe(res => {
                  if (res.status == 'Success') {
                    this.loadSuccess();
                    this.loading = false;
                    this.renderSelectionDocumentData();
                    this.checkRequiredDocument();
                  } else {
                    this.broadcasterService.notifBroadcast(true, {
                      title: res.status,
                      msg: res.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });
                    this.loading = false;
                  }
                }, (reason) => {
                  this.loading = false;
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                });
              }
            });
          } else {
            Swal.fire({
              title: 'Warning',
              text: 'Anda harus mengunggah dokumen terlebih dahulu',
              type: 'warning'
            });
          }
        });
      } else if (this.documentTypeId == 14) {
        this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=14`).subscribe(response => {
          if (response.data.length !== 0) {
            const data = {
              id: response.data[0].document_study_id
            };
            Swal.fire({
              title: this.confirmation,
              text: this.sure,
              type: 'question',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#ffba57',
              confirmButtonText: this.yes,
              cancelButtonText: this.no
            }).then((confirm) => {
              if (confirm.value) {
                this.loading = true;
                this.userService.deleteDocumentStudy(data).subscribe(res => {
                  if (res.status == 'Success') {
                    this.loadSuccess();
                    this.loading = false;
                    this.renderSelectionDocumentData();
                    this.checkRequiredDocument();
                  } else {
                    this.broadcasterService.notifBroadcast(true, {
                      title: res.status,
                      msg: res.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });
                    this.loading = false;
                  }
                }, (reason) => {
                  this.loading = false;
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                });
              }
            });
          } else {
            Swal.fire({
              title: 'Warning',
              text: 'Anda harus mengunggah dokumen terlebih dahulu',
              type: 'warning'
            });
          }
        });
      } else if (this.documentTypeId == 16) {
        this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=16`).subscribe(response => {
          if (response.data.length !== 0) {
            const data = {
              id: response.data[0].document_study_id
            };
            Swal.fire({
              title: this.confirmation,
              text: this.sure,
              type: 'question',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#ffba57',
              confirmButtonText: this.yes,
              cancelButtonText: this.no
            }).then((confirm) => {
              if (confirm.value) {
                this.loading = true;
                this.userService.deleteDocumentStudy(data).subscribe(res => {
                  if (res.status == 'Success') {
                    this.loadSuccess();
                    this.loading = false;
                    this.renderSelectionDocumentData();
                    this.checkRequiredDocument();
                  } else {
                    this.broadcasterService.notifBroadcast(true, {
                      title: res.status,
                      msg: res.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });
                    this.loading = false;
                  }
                }, (reason) => {
                  this.loading = false;
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                });
              }
            });
          } else {
            Swal.fire({
              title: 'Warning',
              text: 'Anda harus mengunggah dokumen terlebih dahulu',
              type: 'warning'
            });
          }
        });
      } else {
        this.userService.getPersonalDocumentData(`${this.userData}&document_type_id=${this.documentTypeId}`).subscribe(res => {
          if (res.data.length !== 0) {
            if (res.data[0].document_id === null) {

            } else {
              Swal.fire({
                title: 'Warning',
                text: 'Anda harus mengunggah dokumen terlebih dahulu',
                type: 'warning'
              });
            }
          }
        });
      }
    });
  }

  changeCategoryUtbk(event) {
    if (event.value === '1') {
      this.isSaintek = true;
      this.utbkForm.get('math').setValidators([Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^.[0-9.]*$')]);
      this.utbkForm.get('math').updateValueAndValidity();
      this.utbkForm.get('physics').setValidators([Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]);
      this.utbkForm.get('physics').updateValueAndValidity();
      this.utbkForm.get('biological').setValidators([Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]);
      this.utbkForm.get('biological').updateValueAndValidity();
      this.utbkForm.get('chemical').setValidators([Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]);
      this.utbkForm.get('chemical').updateValueAndValidity();
      this.utbkForm.get('sociological').clearValidators();
      this.utbkForm.get('sociological').updateValueAndValidity();
      this.utbkForm.get('economy').clearValidators();
      this.utbkForm.get('economy').updateValueAndValidity();
      this.utbkForm.get('historical').clearValidators();
      this.utbkForm.get('historical').updateValueAndValidity();
      this.utbkForm.get('geography').clearValidators();
      this.utbkForm.get('geography').updateValueAndValidity();
      this.utbkForm.controls.historical.reset();
      this.utbkForm.controls.geography.reset();
      this.utbkForm.controls.economy.reset();
      this.utbkForm.controls.sociological.reset();
    } else {
      this.isSaintek = false;
      this.utbkForm.get('sociological').setValidators([Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]);
      this.utbkForm.get('sociological').updateValueAndValidity();
      this.utbkForm.get('historical').setValidators([Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]);
      this.utbkForm.get('historical').updateValueAndValidity();
      this.utbkForm.get('geography').setValidators([Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]);
      this.utbkForm.get('geography').updateValueAndValidity();
      this.utbkForm.get('economy').setValidators([Validators.required, Validators.max(1000), Validators.maxLength(6), Validators.min(0), Validators.pattern('^[0-9.]*$')]);
      this.utbkForm.get('geography').updateValueAndValidity();
      this.utbkForm.get('biological').clearValidators();
      this.utbkForm.get('biological').updateValueAndValidity();
      this.utbkForm.get('physics').clearValidators();
      this.utbkForm.get('physics').updateValueAndValidity();
      this.utbkForm.get('chemical').clearValidators();
      this.utbkForm.get('chemical').updateValueAndValidity();
      this.utbkForm.get('math').clearValidators();
      this.utbkForm.get('math').updateValueAndValidity();
      this.utbkForm.controls.chemical.reset();
      this.utbkForm.controls.biological.reset();
      this.utbkForm.controls.physics.reset();
      this.utbkForm.controls.math.reset();
    }
  }

  loadAllDocument() {
  }

  loadDetailDocumentRequirementUrlData(data) {
    this.mode('edit');
    this.documentRequirementDataForm.patchValue({ document_url: data.document_url });
    this.documentUrl = data.document_url;
  }


  showStudyProgram() {
    this.getMaximunStudyPrograms();
  }

  showModalProgramStudy() {
    this.mode('input');
    this.studyProgram = '';
    this.studyProgramModal.show();
    this.isViewData = false;
    this.loadProgramStudyData();
  }

  loadDetailStudyProgramData(data) {
    this.mode('edit');
    this.mappingStudyProgramReg = data.id;
    this.studyProgramDataForm.patchValue({ mapping_path_program_study_id: data.mapping_path_program_study_id.toString() });
    this.studyProgramDataForm.patchValue({ faculty_id: data.faculty_id.toString() });
    this.studyProgramDataForm.patchValue({ studyprogram_id: data.study_program_id.toString() });
    this.studyProgramDataForm.patchValue({ priority: data.priority });
    this.studyProgramDataForm.patchValue({ sdp_default: data.minimum_donation });
    this.studyProgramModal.show();
  }

  loadViewMappingStudyProgram(data) {
    this.loadStudyProgram = false;
    this.isViewData = true;
    this.studyProgramDataForm.get('minimum_donation').clearValidators();
    this.studyProgramDataForm.get('minimum_donation').updateValueAndValidity();
    this.studyProgramDataForm.get('mapping_path_program_study_id').clearValidators();
    this.studyProgramDataForm.get('mapping_path_program_study_id').updateValueAndValidity();
    this.studyProgramDataForm.get('specialization').clearValidators();
    this.studyProgramDataForm.get('specialization').updateValueAndValidity();
    this.studyProgramDataForm.get('class_name').clearValidators();
    this.studyProgramDataForm.get('class_name').updateValueAndValidity();
    this.dataMappingProdi = data;
    this.mappingStudyProgramReg = data.id;
    this.studyProgram = data.study_program_id.toString();
    this.studyProgramDataForm.patchValue({ studyprogram_name: data.study_program_name });
    this.studyProgramDataForm.patchValue({ sdp_default: data.minimum_donation });
    this.studyProgramDataForm.patchValue({ minimum_donation: data.education_fund ?  data.education_fund : '0'});
    if (data.education_fund == null) {
      this.educationFundHidden = true;
    } else {
      this.educationFundHidden = false;
    }
    this.studyProgramDataForm.patchValue({ specialization_name: data.specialization_name });
    this.studyProgramDataForm.patchValue({ class_type: data.class_type });
    this.studyProgramDataForm.patchValue({ class_name: data.class_type });
    this.studyProgramDataForm.patchValue({ specialization: data.specialization_name });
    this.studyProgramModal.show();
  }

  studyProgramModalClose() {
    this.studyProgramDataForm.reset();
    this.studyProgramModal.hide();
    this.educationFundHidden = false;
  }

  loadBesaranSdp(studyProgram) {
    const study_program = studyProgram ? studyProgram : '0';
    const selection_path = this.selectionPathId ? this.selectionPathId : '0';
    if (studyProgram !== undefined) {
      this.chartService.getMappingProgramStudyData(`selection_path_id=${selection_path}&id=${study_program}`).subscribe((res) => {
        if (res.data.length !== 0) {
          this.studyProgramId = res.data[0].study_program_id;
          this.getStudyProgramSpecial(this.studyProgramId);
          let idr = res.data[0].minimum_donation;
          this.getStudyProgramSpecial(this.studyProgramId);
          this.studyProgramDataForm.patchValue({ sdp_default: idr });
          if (idr == 0) {
            this.educationFundHidden = true;
            this.studyProgramDataForm.get('minimum_donation').clearValidators();
            this.studyProgramDataForm.get('minimum_donation').updateValueAndValidity();
          } else {
            this.educationFundHidden = false;
            this.studyProgramDataForm.get('minimum_donation').setValidators(Validators.required);
            this.studyProgramDataForm.get('minimum_donation').updateValueAndValidity();
          }
        } else {
          this.studyProgramDataForm.patchValue({ sdp_default: '10000000' });

        }
      });
    }
  }

  getStudyProgramSpecial(studyProgramId) {
    this.studyProgramId = studyProgramId;
    this.loadStudyProgram = true;
    this.userService.getStudyProgramSpecializationName(`?program_study_id=${studyProgramId}`).subscribe(response => {
      this.loadStudyProgram = false;
      this.listSpecialization = response && response.map((value) => {
        return { value: value.specialization_name.toString(), label: value.specialization_name }
      });
    }, err => {
      this.loadError();
    });
  }

  getStudyProgramClass(val) {
    const specialization_name = val.label;
    this.loadStudyProgram = true;
    this.userService.getClassPasca(`?program_study_id=${this.studyProgramId}&specialization_name=${specialization_name}`).subscribe(response => {
      this.loadStudyProgram = false;
      this.listClass = response && response.map((value) => {
        return { value: value.id.toString(), label: value.class_type }
      });
    }, err => {
      this.loadError();
    });
  }

  onChangeCourseTotal(event) {
    if (event.target.value !== '') {
      if (event.target.value == '0') {
        this.courseTotal = false;
      } else {
        this.courseTotal = true;
      }
    } else {
      this.courseTotal = false;
    }
    const coursesTotal = event.target.value || 0;
    if (this.t.length < coursesTotal) {
      for (let i = this.t.length; i < coursesTotal; i++) {
        this.t.push(this.fb.group({
          course_code: ['', Validators.required],
          course_name: ['', Validators.required],
          credit_hour: ['', Validators.required],
          grade: ['', [Validators.required, Validators.maxLength(2)]],
        }));
      }
    } else {
      for (let i = this.t.length; i >= coursesTotal; i--) {
        this.t.removeAt(i);
      }
    }

  }


  onReset() {
    this.submitted = false;
    this.dynamicForm.controls.total_credit.reset();
    this.dynamicForm.controls.total_course.reset();
    this.dynamicForm.controls.url.reset();
    this.t.clear();
    this.courseTotal = false;
  }

  onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    this.t.reset();
  }

  checkValueMinDonation(value) {
    if (value == '0') {
      this.studyProgramDataForm.get('minimum_donation').setValidators(Validators.compose([Validators.required, Validators.min(0), Validators.pattern('^[0-9]*$')]));
      this.studyProgramDataForm.get('minimum_donation').updateValueAndValidity();
    } else {
      this.studyProgramDataForm.get('minimum_donation').setValidators(Validators.compose([Validators.required, Validators.min(1000000), Validators.pattern('^[0-9]*$')]));
      this.studyProgramDataForm.get('minimum_donation').updateValueAndValidity();
    }
  }


  createStudyProgramData() {
    this.loading = true;
    if (this.edit == 'input') {
      this.chartService.getRegistrationProgramStudy(this.registration_number).subscribe(res => {
        const dataProdi = res.data.length + 1;
        let data = {
          program_study_id: this.studyProgramId,
          registration_number: this.registration_number,
          mapping_path_study_program_id: this.studyProgramDataForm.controls['mapping_path_program_study_id'].value,
          priority: dataProdi,
          education_fund: this.minimumDonation,
          study_program_specialization_id: this.selectedClass ? this.selectedClass : 0
        }
        this.userService.postStudyProgramRegistrationData(data).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.loadDetailParticipant();
              this.studyProgramModalClose();
              this.renderStudyProgramData();
              this.loadRegistrationProgramStudyData(this.registration_number);
              this.loading = false;
              this.loadProgramStudyData();
            } else {
              this.loadError();
              this.loading = false;
            }
          } else {
            this.loadError();
            this.loading = false;
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
      });
    }
    else if (this.edit == 'edit') {
      const data = {
        program_study_id: this.studyProgramId,
        id: this.mappingStudyProgramReg,
        registration_number: this.registration_number,
        mapping_path_study_program_id: this.studyProgramDataForm.controls['mapping_path_program_study_id'].value,
        education_fund: this.studyProgramDataForm.controls['minimum_donation'].value
      };
      this.userService.updStudyProgramRegistrationData(data).subscribe(res => {
        if (res != null) {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.studyProgramModalClose();
            this.renderStudyProgramData();
            this.loadProgramStudyData();
            this.loading = false;
          } else {
            this.loadError();
            this.loading = false;
          }
        } else {
          this.loadError();
          this.loading = false;
        }
      }, (reason) => {
        this.loading = false;
        this.broadcasterService.notifBroadcast(true, {
          title: 'Gagal',
          msg: reason.error.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
      });
    }
  }

  resetMappingstudyProgram() {
    Swal.fire({
      title: 'Warning',
      text: 'Apakah anda yakin ingin menghapus semua data program studi yang telah anda pilih ?',
      type: 'warning',
      showConfirmButton: true,
      showCloseButton: true,
      showCancelButton: true
    }).then((confirm) => {
      if (confirm.value) {
        this.loading = true;
        let payload = {
          registration_number: this.registration_number
        }
        this.userService.deleteMappingStudyProgram(payload).subscribe(res => {
          if (res.status == 'Success') {
            Swal.fire({
              title: res.status,
              text: res.message,
              type: 'success',
              showConfirmButton: false,
              timer: 2000
            });
            this.loading = false;
            this.renderStudyProgramData();
            this.loadRegistrationProgramStudyData(this.registration_number);
            this.loadProgramStudyData();
            this.loadDetailParticipant();
            this.deleteRegistrationHistorySteps6();
          } else {
            this.loading = false;
          }
        });
      } else {
        Swal.fire({
          title: 'Data anda aman',
          type: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  }

  loadForDeleteDetailStudyProgramData(data) {
    this.mappingStudyProgramReg = data.id;
    this.deleteStudyProgramMappingModal.show();
  }

  deleteDetailStudyProgramData() {
    this.loading = true;
    const data = {
      id: this.mappingStudyProgramReg
    };
    this.userService.delStudyProgramRegistrationData(data).subscribe(res => {
      if (res.status == 'Success') {
        this.loadSuccess();
        this.renderStudyProgramData();
        this.loadDetailParticipant();
        this.loadRegistrationProgramStudyData(this.registration_number);
        this.deleteRegistrationHistorySteps6();
        this.getMaximunStudyPrograms();
        this.loading = false;
      }
      else {
        this.loadError();
        this.loading = false;
      }
    },
      (reason) => {
        this.broadcasterService.notifBroadcast(true, {
          title: 'Gagal',
          msg: reason.error.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
        this.loading = false;
      });
    this.deleteStudyProgramMappingModal.hide();
  }

  deleteRegistrationHistorySteps6() {
    const data = {
      registration_number: this.registration_number,
      registration_step: 6
    }
    this.userService.deleteRegistrationSteps(data).subscribe(res => {
      if (res.status == 'Success') {
        this.loadSuccess();
      } else {
        this.loadError();

      }
    });
  }

  createTranscriptDocumentCreditTransfer() {
    this.loading = true;
    this.submitted = true;
    if (this.dynamicForm.valid) {
      this.submitted = false;
      const {
        total_course,
        total_credit,
        ticket
      } = this.dynamicForm.value;
      const objectJson =
      {
        document_type_id: '25',
        document_name: 'Transkrip Nilai Alih Kredit Transfer',
        document_description: 'Transkrip Nilai Alih Kredit Transfer',
        registration_number: this.registration_number,
        total_course: total_course,
        total_credit: total_credit,
        courses: ticket
      }
      const myJson = JSON.stringify(objectJson, null, 4);
      this.formDataTranscript.append('json', myJson)
      this.userService.postTranscriptDocument(this.formDataTranscript).subscribe(response => {
        if (response !== null) {
          if (response.status == 'Success') {
            this.loadSuccess();
            this.formDataTranscript.delete('url');
            this.formDataTranscript.delete('json');
            this.loading = false;
            this.submitted = false;
            this.renderSelectionDocumentData();
            this.checkRequiredDocument();
            this.transcriptCreditTransferRequirementModalClose();
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: response.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loading = false;
            this.submitted = false;
          }
        } else {
          this.loadError();
          this.loading = false;
          this.submitted = false;
        }
      }, (reason) => {
        this.broadcasterService.notifBroadcast(true, {
          title: 'Gagal',
          msg: reason.error.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
        this.loading = false;
        this.submitted = false;
      });
    } else {
      return;
    }
  }

  loadDetailParticipantData(registrationNumber) {
    this.loadingCard = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userProfile.email !== undefined) {
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.registrationParticipantDataForm.patchValue({ fullname: res.fullname });
        this.registrationParticipantDataForm.patchValue({ NIK: res.identify_number ? res.identify_number : res.passport_number });
        this.registrationParticipantDataForm.patchValue({ registration_number: registrationNumber });
        this.registrationParticipantDataForm.patchValue({ payment_code: this.payment_code });
        if (res.identify_number == null) {
          this.showPassport = true;
        } else {
          this.showPassport = false;
        }
        this.userService.getRegistrationListParticipantData(`registration_number=${registrationNumber}`).subscribe(result => {
          const {
            payment_method
          } = result.data[0];
          this.registrationParticipantDataForm.patchValue({ payment_methodd: payment_method });
          this.loadingCard = false;
        });
      });
    } else {
      const unameEx = this.userProfile.username + '@gmail.com';
      this.userService.getParticipantDetailData(unameEx).subscribe(res => {
        this.registrationParticipantDataForm.patchValue({ fullname: res.fullname });
        this.registrationParticipantDataForm.patchValue({ NIK: res.identify_number.toString() });
        this.registrationParticipantDataForm.patchValue({ registration_number: registrationNumber });
        this.registrationParticipantDataForm.patchValue({ payment_code: this.payment_code });
        this.userService.getRegistrationListParticipantData(`registration_number=${registrationNumber}`).subscribe(result => {
          const {
            payment_method
          } = result.data[0];
          this.registrationParticipantDataForm.patchValue({ payment_methodd: payment_method });
          this.loadingCard = false;
        });
      });
    }
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  onRemoveRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      name: null,
      description: null,
      qty: null
    });
  }

  renderStudyProgramData(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
    });
  }

  createReportCardDocument() {
    this.loading = true;
    if (this.documentTypeId == 7) {
      if (this.reportCardDataForm.valid) {
        switch (this.formType) {
          case 'input':
            this.formData.append('registration_number', this.registration_number);
            this.formData.append('document_type_id', this.documentTypeId);
            this.formData.append('semester_id', this.semester);
            this.formData.append('range_score', '2');
            this.formData.append('physics', this.reportCardDataForm.controls['physics'].value ? this.reportCardDataForm.controls['physics'].value : 0);
            this.formData.append('math', this.reportCardDataForm.controls['math'].value ? this.reportCardDataForm.controls['math'].value : 0);
            this.formData.append('bahasa', this.reportCardDataForm.controls['bahasa'].value ? this.reportCardDataForm.controls['bahasa'].value : 0);
            this.formData.append('english', this.reportCardDataForm.controls['english'].value ? this.reportCardDataForm.controls['english'].value : 0);
            this.formData.append('economy', this.reportCardDataForm.controls['economy'].value ? this.reportCardDataForm.controls['economy'].value : 0);
            this.formData.append('sociological', this.reportCardDataForm.controls['sociological'].value ? this.reportCardDataForm.controls['sociological'].value : 0);
            this.formData.append('geography', this.reportCardDataForm.controls['geography'].value ? this.reportCardDataForm.controls['geography'].value : 0);
            this.formData.append('chemical', this.reportCardDataForm.controls['chemical'].value ? this.reportCardDataForm.controls['chemical'].value : 0);
            this.formData.append('biology', this.reportCardDataForm.controls['biology'].value ? this.reportCardDataForm.controls['biology'].value : 0);
            this.userService.postDocumentReportCardData(this.formData).subscribe(res => {
              if (res != null) {
                if (res.status == 'Success') {
                  this.formData.delete('registration_number');
                  this.formData.delete('document_type_id');
                  this.formData.delete('semester_id');
                  this.formData.delete('range_score');
                  this.formData.delete('physics');
                  this.formData.delete('math');
                  this.formData.delete('bahasa');
                  this.formData.delete('english');
                  this.formData.delete('economy');
                  this.formData.delete('geography');
                  this.formData.delete('sociological');
                  this.formData.delete('biology');
                  this.formData.delete('chemical');
                  this.formData.delete('url');
                  this.loadSuccess();
                  this.documentReportCardId = res.report_id;
                  this.closeRaportModalDetail();
                  this.loadDetailReportCardFileData();
                  this.renderSelectionDocumentData();
                  this.checkRequiredDocument();
                  this.loading = false;
                } else {
                  this.loadError();
                  this.loading = false;
                  this.formData.delete('registration_number');
                  this.formData.delete('document_type_id');
                  this.formData.delete('semester_id');
                  this.formData.delete('range_score');
                  this.formData.delete('physics');
                  this.formData.delete('math');
                  this.formData.delete('bahasa');
                  this.formData.delete('english');
                  this.formData.delete('economy');
                  this.formData.delete('geography');
                  this.formData.delete('sociological');
                  this.formData.delete('biology');
                  this.formData.delete('chemical');
                  this.formData.delete('url');
                }
              } else {
                this.loadError();
                this.loading = false;
              }
            }, (reason) => {
              this.loading = false;
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
            });
            break;
          default: break;
        }
      }
    }
    else if (this.documentTypeId == 8 || this.documentTypeId == 23 || this.documentTypeId == 24) {
      if (this.transcriptDataForm.valid) {
        switch (this.formType) {
          case 'input':
            this.formData3.append('registration_number', this.registration_number);
            this.formData3.append('document_type_id', this.documentTypeId);
            if (this.documentTypeId == 23) {
              this.formData3.append('gpa', this.transcriptDataForm.value.gpa);
            } else if (this.documentTypeId == 24) {
              this.formData3.append('gpa', this.transcriptDataForm.value.gpa);
            }
            this.userService.postDocumentReportCardData(this.formData3).subscribe(res => {
              if (res != null) {
                if (res.status == 'Success') {
                  this.loadSuccess();
                  this.formData3.delete('registration_number');
                  this.formData3.delete('document_type_id');
                  this.formData3.delete('gpa');
                  this.documentTranscriptId = res.report_id;
                  this.renderSelectionDocumentData();
                  this.checkRequiredDocument();
                  this.closeTranscriptModals();
                  this.loading = false;
                } else {
                  this.loadError();
                  this.loading = false;
                }
              } else {
                this.loading = false;
                this.loadError();
              }
            }, (reason) => {
              this.loading = false;
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
            });
            break;
          case 'edit':
            this.formData3Updated.append('document_id', this.documentTranscriptId);
            this.formData3Updated.append('report_id', this.documentReportTranscriptId);
            this.formData3Updated.append('registration_number', this.registration_number);
            this.formData3Updated.append('document_type_id', this.documentTypeId);
            if (this.documentTypeId == 23) {
              this.formData3Updated.append('gpa', this.transcriptDataForm.value.gpa);
            } else if (this.documentTypeId == 24) {
              this.formData3Updated.append('gpa', this.transcriptDataForm.value.gpa);
            }
            this.userService.updDocumentReportCardData(this.formData3Updated).subscribe(res => {
              if (res != null) {
                if (res.status == 'Success') {
                  this.formData3Updated.delete('document_id');
                  this.formData3Updated.delete('report_id');
                  this.formData3Updated.delete('registration_number');
                  this.formData3Updated.delete('document_type_id');
                  this.formData3Updated.delete('gpa');
                  this.loadSuccess();
                  this.loading = false;
                  this.renderSelectionDocumentData();
                  this.closeTranscriptModals();
                } else {
                  this.loadError();
                  this.loading = false;
                }
              } else {
                this.loadError();
                this.loading = false;
              }
            }, (reason) => {
              this.loading = false;
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: reason.error.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
            });
            break;
            default: break;
        }
      }
    }
  }

  uploadReportCardFile(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (
      fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
      fileType == 'png') {
      if (size < 2000000) {
        this.formData.append('url', elem.files[0]);
      } else {
        this.errSize = true;
        this.reportCardDataForm.get('url').patchValue('');
      }
    } else {
      this.errType = true;
      this.reportCardDataForm.get('url').patchValue('');
    }
  }

  uploadRequirementDocument(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png'
      ) {
        if (size < 2000000) {
          if (this.isUpdatedRequirement === true) {
            this.formDataPersonalUpd.delete('url');
            this.formDataPersonalUpd.append('url', elem.files[0]);
          } else {
            this.formDataPersonal.delete('url');
            this.formDataPersonal.append('url', elem.files[0]);
          }
        } else {
          this.errSize = true;
          this.participantDocumentForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.participantDocumentForm.get('url').patchValue('');
      }
    }
  }

  uploadProposalDocument(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png'
      ) {
        if (size < 5000000) {
          if (this.isEprtUpdated === true) {
            this.formDataProposalUpd.append('url', elem.files[0]);
          } else {
            this.formDataProposal.append('url', elem.files[0]);
          }
        } else {
          this.errSize = true;
          this.proposalForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.proposalForm.get('url').patchValue('');
      }
    }
  }

  uploadUtbkDocument(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
        if (size < 2000000) {
          if (this.isUtbkUpdated) {
            this.formDataUtbkUpd.append('url', elem.files[0]);
          } else {
            this.formDataUtbk.append('url', elem.files[0]);
          }
        } else {
          this.errSize = true;
          this.utbkForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.utbkForm.get('url').patchValue('');
      }
    }
  }

  uploadTranscriptFile(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png'
      ) {
        if (size < 2000000) {
          this.formDataTranscript.append('url', elem.files[0]);
        } else {
          this.errSize = true;
        }
      } else {
        this.errType = true;
      }
    }
  }

  uploadTranscriptFiles(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
        if (size < 2000000) {
          if (this.isUpdatedTranscript) {
            this.formData3Updated.append('url', elem.files[0]);
          } else {
            this.formData3.append('url', elem.files[0]);
          }
        } else {
          this.errSize = true;
          this.transcriptDataForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.transcriptDataForm.get('url').patchValue('');
      }
    }
  }


  uploadIjazahDocument(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if  (fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
      fileType == 'png' || fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'PDF') {
        if (size < 2000000) {
          if (this.isIjazahUpdated) {
            this.formDataIjazahUpd.append('url', elem.files[0]);
          } else {
            this.formDataIjazah.append('url', elem.files[0]);
          }
        } else {
          this.errSize = true;
          this.ijazahForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.ijazahForm.get('url').patchValue('');
      }
    }
  }

  // edit data raport
  loadReportCardDetailFileData(data, type) {
    this.loadDataSemesterFilter();
    this.formType = type;
    if (type === 'view') {
      this.loadSemesterChecked();
      this.showMapel = true;
      this.documentTypeId = 7;
      this.isViewRaport = true;
      this.reportCardDataForm.get('url').clearValidators();
      this.reportCardDataForm.get('url').updateValueAndValidity();
      this.reportCardDataForm.get('semester_id').clearValidators();
      this.reportCardDataForm.get('semester_id').updateValueAndValidity();
      this.documentIdCheck = data.document_id;
      this.documentReportCardId = data.document_report_card_id;
      this.reportCardDataForm.patchValue({ registration_number: this.registration_number });
      this.reportCardDataForm.patchValue({ document_type_id: this.documentTypeId });
      // this.reportCardDataForm.patchValue({ semester_id: data.semester_id && data.semester_id.toString() });
      this.reportCardDataForm.patchValue({ semester_name: data.semesters });
      this.reportCardDataForm.patchValue({ range_score: data.range_score && data.range_score.toString() });
      this.reportCardDataForm.patchValue({ math: data.math });
      this.reportCardDataForm.patchValue({ physics: data.physics });
      this.reportCardDataForm.patchValue({ bahasa: data.bahasa });
      this.reportCardDataForm.patchValue({ english: data.english });
      this.reportCardDataForm.patchValue({ sociological: data.sociological });
      this.reportCardDataForm.patchValue({ economy: data.economy });
      this.reportCardDataForm.patchValue({ geography: data.geography });
      this.reportCardDataForm.patchValue({ biology: data.biology });
      this.reportCardDataForm.patchValue({ chemical: data.chemical });
      this.viewDocumentReport();
    } else {
      this.isViewRaport = false;
      this.documentTypeId = 7;
      this.reportCardDataForm.get('url').setValidators(Validators.required);
      this.reportCardDataForm.get('url').updateValueAndValidity();
      this.reportCardDataForm.get('semester_id').setValidators(Validators.required);
      this.reportCardDataForm.get('semester_id').updateValueAndValidity();
    }
    this.reportCardDetailModal.show();
  }

  loadSemesterChecked() {
    this.userService.getRaportSemesters(`?registration_number=${this.registration_number}&is_checked=1`).subscribe(res => {
      if (res.length !== 0) {
        this.isNotHaveMappingData = false;
          for (let i = 0; i < res.length; i++) {
            let x = res[i].key_name;

            if (x == 'math') {
              this.isMathStudy = true;
              this.reportCardDataForm.get('math').setValidators(Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*$')]));
              this.reportCardDataForm.get('math').updateValueAndValidity();
            }
            else if (x == 'bahasa') {
              this.isBahasaStudy = true;
              this.reportCardDataForm.get('bahasa').setValidators(Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*$')]));
              this.reportCardDataForm.get('bahasa').updateValueAndValidity();
            }
            else if (x == 'english') {
              this.isEnglishStudy = true;
              this.reportCardDataForm.get('english').setValidators(Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*$')]));
              this.reportCardDataForm.get('english').updateValueAndValidity();
            }
            else if (x == 'chemical') {
              this.chemicalStudy = true;
              this.reportCardDataForm.get('chemical').setValidators(Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*$')]));
              this.reportCardDataForm.get('chemical').updateValueAndValidity();
            }
            else if (x == 'biology') {
              this.biologyStudy = true;
              this.reportCardDataForm.get('biology').setValidators(Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*$')]));
              this.reportCardDataForm.get('biology').updateValueAndValidity();
            }
            else if (x == 'physics') {
              this.physicsStudy = true;
              this.reportCardDataForm.get('physics').setValidators(Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*$')]));
              this.reportCardDataForm.get('physics').updateValueAndValidity();
            }
            else if (x == 'economy') {
              this.economyStudy = true;
              this.reportCardDataForm.get('economy').setValidators(Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*$')]));
              this.reportCardDataForm.get('economy').updateValueAndValidity();
            }
            else if (x == 'sociological') {
              this.sociologicalStudy = true;
              this.reportCardDataForm.get('sociological').setValidators(Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*$')]));
              this.reportCardDataForm.get('sociological').updateValueAndValidity();
            }
            else if (x == 'geography') {
              this.geographyStudy = true;
              this.reportCardDataForm.get('geography').setValidators(Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*$')]));
              this.reportCardDataForm.get('geography').updateValueAndValidity();
            }

          }
          this.keyName = res;
      } else {
        this.isNotHaveMappingData = true;
      }
    });
  }

  deleteReportCardData(data) {
    const datas = {
      id: data.document_report_card_id
    };
    Swal.fire({
      title: this.confirmation,
      text: this.sure,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#ffba57',
      confirmButtonText: this.yes,
      cancelButtonText: this.no
    }).then((confirm) => {
      if (confirm.value) {
        this.loading = true;
        this.userService.deleteReportCard(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.closeRaportModalDetail();
              this.loadDetailReportCardFileData();
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
              this.loading = false;
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loading = false;
            }
          } else {
            this.loading = false;
            this.loadError();
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
      }
    });
  }

  viewDocumentReport() {
    this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=7&document_report_card_id=${this.documentReportCardId}`).subscribe(response => {
      if (response.data.length !== 0) {
        this.listDocumentReport = response.data;
      } else {
        this.listDocumentReport = '';
      }
    });
  }

  loadDetailReportCardFileData() {
    this.loadtableReportCardData = true;
    this.loadSemesterChecked();
    this.tableData2 = [];
    this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=7`).subscribe(response => {
      this.tableData2 = response.data;
      this.dtTrigger2.next(); // Trigger for load datatable
      this.loadtableReportCardData = false;
    }, err => {
      this.loadError();
      this.loadtableReportCardData = false;
    });
  }

  createCertificateDocument() {
    this.loading = true;
    if (this.certificateDataForm.valid) {
      switch (this.formTypeCertificate) {
        case 'input':
          this.formData1.append('registration_number', this.registration_number);
          this.formData1.append('certificate_id', this.documentCertificateId);
          this.formData1.append('name', this.certificateDataForm.controls['name'].value);
          this.formData1.append('description', this.certificateDataForm.controls['description'].value);
          this.formData1.append('certificate_type_id', this.certificateDataForm.controls['certificate_type_id'].value);
          this.formData1.append('certificate_level_id', this.certificateDataForm.controls['certificate_level_id'].value);
          this.formData1.append('publication_year', this.certificateDataForm.controls['publication_year'].value);
          this.formData1.append('certificate_score', this.certificateDataForm.controls['certificate_score'].value);
          this.formData1.append('document_type_id', this.documentTypeId);
          this.userService.postDocumentCertificateData(this.formData1).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.formData1.delete('registration_number');
                this.formData1.delete('certificate_id');
                this.formData1.delete('name');
                this.formData1.delete('description');
                this.formData1.delete('certificate_type_id');
                this.formData1.delete('certificate_level_id');
                this.formData1.delete('publication_year');
                this.formData1.delete('document_type_id');
                this.formData1.delete('url');
                this.documentCertificateId = res.document_certificate_id;
                this.loadDetailCertificateFileDataTable(this.registration_number);
                this.renderSelectionDocumentData();
                this.checkRequiredDocument();
                this.closeCertificateModalDetail();
                this.loading = false;
                this.certificateDataForm.reset();
              } else {
                this.loadError();
                this.loading = false;
              }
            } else {
              this.loadError();
              this.loading = false;
            }
          }, (reason) => {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loading = false;
          });
          break;
        default: break;
      }
    }
  }

  uploadCertificateFile(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png'
      ) {
        if (size < 2000000) {
          this.formData1.append('url', elem.files[0]);
        } else {
          this.errSize = true;
          this.certificateDataForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.certificateDataForm.get('url').patchValue('');
      }
    }
  }

  loadDetailCertificateFileDataTable(registration_number) {
    this.loadtableCertificateData = true;
    this.userService.getDocumentCertificateData(`registration_number=${registration_number}`).subscribe(response => {
        this.tableData3 = response.data;
        this.loadtableCertificateData = false;
    }, err => {
      this.loadError();
      this.loadtableCertificateData = false;
    });
  }

  loadCertificateDetailFileData(data, type) {
    this.formTypeCertificate = type;
    if (type === 'view') {
      this.isViewCertificate = true;
      this.certificateDataForm.get('url').clearValidators();
      this.certificateDataForm.get('url').updateValueAndValidity();
      this.documentIdCheck = data.document_id;
      this.documentCertificateId = data.document_certificate_id;
      this.certificateDataForm.patchValue({ registration_number: this.registration_number });
      this.certificateDataForm.patchValue({ document_type_id: this.documentTypeId });
      this.certificateDataForm.patchValue({ certificate_level_id: data.certificate_level_id.toString() });
      this.certificateDataForm.patchValue({ certificate_type_id: data.certificate_type_id && data.certificate_type_id.toString() });
      this.certificateDataForm.patchValue({ name: data.certificate_name });
      this.certificateDataForm.patchValue({ certificate_score: data.certificate_score });
      this.certificateDataForm.patchValue({ publication_year: data.publication_year });
      this.certificateDataForm.patchValue({ description: data.description });
      this.viewDocumentCertificate();
    } else {
      this.isViewCertificate = false;
      this.certificateDataForm.reset();
      this.certificateDataForm.get('url').setValidators(Validators.required);
      this.certificateDataForm.get('url').updateValueAndValidity();
    }
    this.certificateDetailModal.show();
  }

  deleteCertificateDocument(data) {
    const certificateData = {
      id: data.document_certificate_id
    };
    Swal.fire({
      title: this.confirmation,
      text: this.sure,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#ffba57',
      confirmButtonText: this.yes,
      cancelButtonText: this.no
    }).then((confirm) => {
      if (confirm.value) {
        this.loading = true;
        this.userService.deleteDocumentCertificate(certificateData).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loadDetailCertificateFileDataTable(this.registration_number);
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
              this.closeCertificateModalDetail();
              this.loading = false;
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loading = false;
            }
          } else {
            this.loading = false;
            this.loadError();
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
      }
    });
  }

  viewDocumentCertificate() {
    this.userService.getDocumentCertificateData(`registration_number=${this.registration_number}&document_certificate_id=${this.documentCertificateId}`).subscribe(response => {
      if (response.data.length !== 0) {
        this.listDocumentCertificate = response.data;
      } else {
        this.listDocumentCertificate = '';
      }
    });
  }

  createIjazahDocument() {
    switch (this.formTypeIjazah) {
      case 'input':
        this.loading = true;
        this.formDataIjazah.append('document_type_id', this.documentTypeIjazah);
        if (this.documentTypeId == 18) {
          this.formDataIjazah.append('name', 'Ijazah S1');
          this.formDataIjazah.append('participant_id', this.userData);
        } else if (this.documentTypeId == 19) {
          this.formDataIjazah.append('name', 'Ijazah S2');
          this.formDataIjazah.append('participant_id', this.userData);
        } else if (this.documentTypeId == 22) {
          this.formDataIjazah.append('name', 'Portofolio');
          this.formDataIjazah.append('participant_id', this.userData);
          // this.formDataIjazah.append('url_portofolio', this.ijazahForm.value.link_document);
        }
        this.userService.postPersonalDocumentData(this.formDataIjazah).subscribe(res => {
          if (res.status == 'Success') {
            this.formDataIjazah.delete('document_type_id');
              this.formDataIjazah.delete('name');
              this.formDataIjazah.delete('url');
              this.formDataIjazah.delete('url_portofolio');
              this.formDataIjazah.delete('participant_id');
              this.loadSuccess();
              this.loading = false;
              this.closeIjazahModals();
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: res.status,
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loading = false;
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
        break;
      case 'edit':
      this.loading = true;
        this.formDataIjazahUpd.append('document_type_id', this.documentTypeIjazah);
        this.formDataIjazahUpd.append('document_id', this.docid);
        if (this.documentTypeId == 18) {
          this.formDataIjazahUpd.append('name', 'Ijazah S1');
          this.formDataIjazahUpd.append('participant_id', this.userData);
        } else if (this.documentTypeId == 19) {
          this.formDataIjazahUpd.append('name', 'Ijazah S2');
          this.formDataIjazahUpd.append('participant_id', this.userData);
        } else if (this.documentTypeId == 22) {
          this.formDataIjazahUpd.append('name', 'Portofolio');
          this.formDataIjazahUpd.append('participant_id', this.userData);
          // this.formDataIjazahUpd.append('url_portofolio', this.ijazahForm.value.link_document);
        }
        this.userService.updPersonalDocumentData(this.formDataIjazahUpd).subscribe(res => {
          if (res.status == 'Success') {
            this.formDataIjazahUpd.delete('document_id');
            this.formDataIjazahUpd.delete('document_type_id');
              this.formDataIjazahUpd.delete('name');
              this.formDataIjazahUpd.delete('url');
              this.formDataIjazahUpd.delete('url_portofolio');
              this.formDataIjazahUpd.delete('participant_id');
              this.loadSuccess();
              this.loading = false;
              this.closeIjazahModals();
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: res.status,
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loading = false;
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
        break;
      default:
        break;
    }
  }

  closeIjazahModals() {
    this.ijazahModals.hide();
    this.ijazahForm.reset();
    this.isIjazahS1 = false;
    this.isIjazahS2 = false;
    this.isPortofolio = false;
  }


  getTablePublication() {
    this.loadTablePublication = true;
    this.userService.getDocumentPublication(`?participant_id=${this.userData}`).subscribe(response => {
        this.tableDataPublication = response;
        this.totalRecord = response.length;
        this.loadTablePublication = false;
    }, err => {
      this.loadError();
      this.loadTablePublication = false;
    });
  }

  loadPublicationDataDetails(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.docid = data.id;
      this.documentPublicationTypeId = data.document_type_id;
      this.publicationID = data.document_id;
      this.selectedWriterPosition = data.publication_writer_position_id && data.publication_writer_position_id.toString();
      this.selectedPublicationType = data.publication_type_id && data.publication_type_id.toString();
      this.publikasiForm.patchValue({ name: data.writer_name });
      this.publikasiForm.patchValue({ title: data.title });
      this.publikasiForm.patchValue({ publication_date: data.publish_date });
      this.publikasiForm.patchValue({ link: data.publication_link });
      this.haveLinkPublication = true;
    } else {
      this.selectedPublicationType = '';
      this.selectedWriterPosition = '';
      this.haveLinkPublication = false;
    }
    this.publikasiModals.show();
  }

  closePublikasiModals() {
    this.publikasiForm.reset();
    this.publikasiModals.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  deletePublicationData(data) {
    const datas = {
      document_publication_id: data.id
    }
    Swal.fire({
      title: this.confirmation,
      text: this.sure,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#ffba57',
      confirmButtonText: this.yes,
      cancelButtonText: this.no
    }).then((confirm) => {
      if (confirm.value) {
        this.loading = true;
        this.userService.deleteDocumentPublication(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.closePublikasiModals();
              this.getTablePublication();
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
              this.loading = false;
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loading = false;
            }
          } else {
            this.loading = false;
            this.loadError();
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
      }
    });
  }

  getPublicationTypeLists() {
    this.userService.getPublicationTypeList().subscribe(response => {
      this.listPublicationType = response && response.map((value) => {
        return { value: value.id.toString(), label: value.type }
      });
    }, err => {
      this.loadError();
    });
  }

  getPublicationPositionLists() {
    this.userService.getPublicationPositionList().subscribe(response => {
      this.listWriterPosition = response && response.map((value) => {
        return { value: value.id.toString(), label: value.type }
      });
    }, err => {
      this.loadError();
    });
  }

  createPublicationData() {
    switch (this.formType) {
      case 'input':
        this.loading = true;
        const payload = {
          document_type_id: this.documentPublicationTypeId,
          participant_id: this.userData,
          publication_type_id: this.selectedPublicationType,
          publication_writer_position_id: this.selectedWriterPosition,
          writer_name: this.publikasiForm.controls['name'].value,
          name: 'Dokumen Publikasi',
          title: this.publikasiForm.controls['title'].value,
          publish_date: this.publikasiForm.controls['publication_date'].value,
          publication_link: this.publikasiForm.controls['link'].value,
        }
        this.userService.postDocumentPublication(payload).subscribe(response => {
          if (response.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.getTablePublication();
            this.renderSelectionDocumentData();
            this.closePublikasiModals();
            this.checkRequiredDocument();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: response.status,
              msg: response.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
        break;
      case 'edit':
        this.loading = true;
        const payloadUpd = {
          document_publication_id: this.docid,
          participant_id: this.userData,
          document_id: this.publicationiD,
          document_type_id: this.documentPublicationTypeId,
          publication_type_id: this.selectedPublicationType,
          publication_writer_position_id: this.selectedWriterPosition,
          writer_name: this.publikasiForm.controls['name'].value,
          name: 'Dokumen Publikasi',
          title: this.publikasiForm.controls['title'].value,
          publish_date: this.publikasiForm.controls['publication_date'].value,
          publication_link: this.publikasiForm.controls['link'].value,
        }
        this.userService.updDocumentPublication(payloadUpd).subscribe(response => {
          if (response.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.getTablePublication();
            this.renderSelectionDocumentData();
            this.closePublikasiModals();
            this.checkRequiredDocument();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: response.status,
              msg: response.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
        break;
      default:
        break;
    }
  }

  createPersonalDocumentParticipant() {
    this.loading = true;
    switch (this.formTypePersonal) {
      case 'input':
        this.formDataPersonal.append('document_type_id', this.documentTypePersonal);
        this.formDataPersonal.append('name', this.participantDocumentForm.controls['name'].value);
        this.formDataPersonal.append('description', this.participantDocumentForm.controls['name'].value);
        this.formDataPersonal.append('number', this.participantDocumentForm.controls['number'].value);
        this.formDataPersonal.append('participant_id', this.userData);
        this.userService.postPersonalDocumentData(this.formDataPersonal).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.formDataPersonal.delete('document_type_id');
              this.formDataPersonal.delete('name');
              this.formDataPersonal.delete('description');
              this.formDataPersonal.delete('number');
              this.formDataPersonal.delete('url');
              this.formDataPersonal.delete('participant_id');
              this.loadSuccess();
              this.loading = false;
              this.renderSelectionDocumentData();
              this.documentRequirementModalClose();
              this.checkRequiredDocument();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: res.status,
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loading = false;
            }
          } else {
            this.loading = false;
            this.loadError();
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
        break;
      case 'edit':
        this.formDataPersonalUpd.append('document_id', this.documentidPersonal);
        this.formDataPersonalUpd.append('name', this.participantDocumentForm.controls['name'].value);
        this.formDataPersonalUpd.append('description', this.participantDocumentForm.controls['name'].value);
        this.formDataPersonalUpd.append('number', this.participantDocumentForm.controls['number'].value);
        this.userService.updPersonalDocumentData(this.formDataPersonalUpd).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.formDataPersonalUpd.delete('document_id');
              this.formDataPersonalUpd.delete('name');
              this.formDataPersonalUpd.delete('description');
              this.formDataPersonalUpd.delete('number');
              this.formDataPersonalUpd.delete('url');
              this.loadSuccess();
              this.documentRequirementModalClose();
              this.renderSelectionDocumentData();
              this.loading = false;
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: res.status,
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
            }
          } else {
            this.loadError();
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
        break;
      default: break;
    }
  }

  createUtbkDocument() {
    switch (this.formTypeUtbk) {
      case 'input':
        this.loading = true;
        this.formDataUtbk.append('document_type_id', this.documentTypeUtbk);
        this.formDataUtbk.append('name', 'Nilai UTBK');
        this.formDataUtbk.append('general_reasoning', this.utbkForm.controls['KPUScore'].value);
        this.formDataUtbk.append('quantitative_knowledge', this.utbkForm.controls['PKScore'].value);
        this.formDataUtbk.append('comprehension_general_knowledge', this.utbkForm.controls['PDPUScore'].value);
        this.formDataUtbk.append('comprehension_reading_knowledge', this.utbkForm.controls['KMBDMScore'].value);
        this.formDataUtbk.append('math', this.utbkForm.controls['math'].value ?  this.utbkForm.controls['math'].value : '0');
        this.formDataUtbk.append('physics', this.utbkForm.controls['physics'].value ? this.utbkForm.controls['physics'].value : '0');
        this.formDataUtbk.append('chemical', this.utbkForm.controls['chemical'].value ? this.utbkForm.controls['chemical'].value : '0');
        this.formDataUtbk.append('biology', this.utbkForm.controls['biological'].value ? this.utbkForm.controls['biological'].value : '0');
        this.formDataUtbk.append('geography', this.utbkForm.controls['geography'].value ? this.utbkForm.controls['geography'].value : '0');
        this.formDataUtbk.append('historical', this.utbkForm.controls['historical'].value ? this.utbkForm.controls['historical'].value : '0');
        this.formDataUtbk.append('sociological', this.utbkForm.controls['sociological'].value ? this.utbkForm.controls['sociological'].value : '0');
        this.formDataUtbk.append('economy', this.utbkForm.controls['economy'].value ? this.utbkForm.controls['economy'].value : '0');
        this.formDataUtbk.append('registration_number', this.registration_number);
        this.formDataUtbk.append('major_type', this.selectedCategoryUtbk);
        this.userService.postUtbkDocument(this.formDataUtbk).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.formDataUtbk.delete('registration_number');
              this.formDataUtbk.delete('name');
              this.formDataUtbk.delete('document_type_id');
              this.formDataUtbk.delete('description');
              this.formDataUtbk.delete('general_reasoning');
              this.formDataUtbk.delete('quantitative_knowledge');
              this.formDataUtbk.delete('comprehension_general_knowledge');
              this.formDataUtbk.delete('comprehension_reading_knowledge');
              this.formDataUtbk.delete('math');
              this.formDataUtbk.delete('geography');
              this.formDataUtbk.delete('historical');
              this.formDataUtbk.delete('sociological');
              this.formDataUtbk.delete('economy');
              this.formDataUtbk.delete('physics');
              this.formDataUtbk.delete('chemical');
              this.formDataUtbk.delete('biology');
              this.formDataUtbk.delete('major_type');
              this.formDataUtbk.delete('url');
              this.utbkModals.hide();
              this.loading = false;
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loading = false;
            }
          } else {
            this.loadError();
            this.loading = false;
          }
        }, (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loading = false;
        });
        break;
      case 'edit':
        this.loading = true;
        this.formDataUtbkUpd.append('utbk_id', this.documentUtbkId);
        this.formDataUtbkUpd.append('document_id', this.documentId);
        // this.formDataUtbkUpd.append('document_type_id', this.documentTypeId);
        this.formDataUtbkUpd.append('name', 'Nilai UTBK');
        this.formDataUtbkUpd.append('general_reasoning', this.utbkForm.controls['KPUScore'].value);
        this.formDataUtbkUpd.append('quantitative_knowledge', this.utbkForm.controls['PKScore'].value);
        this.formDataUtbkUpd.append('comprehension_general_knowledge', this.utbkForm.controls['PDPUScore'].value);
        this.formDataUtbkUpd.append('comprehension_reading_knowledge', this.utbkForm.controls['KMBDMScore'].value);
        this.formDataUtbkUpd.append('math', this.utbkForm.controls['math'].value ? this.utbkForm.controls['math'].value : '0');
        this.formDataUtbkUpd.append('registration_number', this.registration_number);
        this.formDataUtbkUpd.append('major_type', this.selectedCategoryUtbk);
        this.formDataUtbkUpd.append('physics', this.utbkForm.controls['physics'].value ? this.utbkForm.controls['physics'].value : '0');
        this.formDataUtbkUpd.append('chemical', this.utbkForm.controls['chemical'].value ? this.utbkForm.controls['chemical'].value : '0');
        this.formDataUtbkUpd.append('biology', this.utbkForm.controls['biological'].value ? this.utbkForm.controls['biological'].value : '0');
        this.formDataUtbkUpd.append('geography', this.utbkForm.controls['geography'].value ? this.utbkForm.controls['geography'].value : '0');
        this.formDataUtbkUpd.append('historical', this.utbkForm.controls['historical'].value ? this.utbkForm.controls['historical'].value : '0');
        this.formDataUtbkUpd.append('sociological', this.utbkForm.controls['sociological'].value ? this.utbkForm.controls['sociological'].value : '0');
        this.formDataUtbkUpd.append('economy', this.utbkForm.controls['economy'].value ? this.utbkForm.controls['economy'].value : '0');
        this.userService.updUtbkdocument(this.formDataUtbkUpd).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.formDataUtbkUpd.delete('registration_number');
              this.formDataUtbkUpd.delete('name');
              this.formDataUtbkUpd.delete('document_id');
              this.formDataUtbkUpd.delete('utbk_id');
              this.formDataUtbkUpd.delete('description');
              this.formDataUtbkUpd.delete('general_reasoning');
              this.formDataUtbkUpd.delete('quantitative_knowledge');
              this.formDataUtbkUpd.delete('comprehension_general_knowledge');
              this.formDataUtbkUpd.delete('comprehension_reading_knowledge');
              this.formDataUtbkUpd.delete('math');
              this.formDataUtbkUpd.delete('geography');
              this.formDataUtbkUpd.delete('historical');
              this.formDataUtbkUpd.delete('sociological');
              this.formDataUtbkUpd.delete('economy');
              this.formDataUtbkUpd.delete('physics');
              this.formDataUtbkUpd.delete('chemical');
              this.formDataUtbkUpd.delete('biology');
              this.formDataUtbkUpd.delete('major_type');
              this.formDataUtbkUpd.delete('url');
              this.utbkModals.hide();
              this.loading = false;
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loading = false;
            }
          } else {
            this.loadError();
            this.loading = false;
          }
        }, (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loading = false;
        });
        break;
      default:
        break;
    }
  }

  createSupportingDocument() {
    this.loading = true;
    if (this.documentTypeId == 9) {
      switch (this.formTypeRecommendation) {
        case 'input':
          this.formData2.append('registration_number', this.registration_number);
          this.formData2.append('document_type_id', this.documentTypeId);
          this.formData2.append('name', 'Surat Rekomendasi');
          this.formData2.append('description', 'Surat Rekomendasi');
          this.formData2.append('pic_name', this.supportingDataForm.controls['pic_name'].value);
          this.formData2.append('pic_phone_number', this.supportingDataForm.controls['pic_phone_number'].value);
          this.formData2.append('pic_email_address', this.supportingDataForm.controls['pic_email_address'].value);
          this.formData2.append('pic_address', this.supportingDataForm.controls['pic_address'].value);
          this.userService.postDocumentSupportingData(this.formData2).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.formData2.delete('registration_number');
                this.formData2.delete('name');
                this.formData2.delete('description');
                this.formData2.delete('pic_name');
                this.formData2.delete('pic_phone_number');
                this.formData2.delete('pic_email_address');
                this.formData2.delete('pic_address');
                this.formData2.delete('url');
                this.loadSuccess();
                this.documentRecommendationId = res.document_id;
                this.recommendationLetterRequirementModal.hide();
                this.renderSelectionDocumentData();
                this.checkRequiredDocument();
                this.loading = false;
              } else {
                this.loadError();
                this.loading = false;
              }
            } else {
              this.loadError();
              this.loading = false;
            }
          }, (reason) => {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
          break;
        case 'edit':
          this.formData2Update.append('registration_number', this.registration_number);
          this.formData2Update.append('support_id', this.documentSupportingId);
          this.formData2Update.append('document_id', this.documentRecommendationId);
          this.formData2Update.append('document_type_id', this.documentTypeId);
          this.formData2Update.append('name', 'Surat Rekomendasi');
          this.formData2Update.append('description', 'Surat Rekomendasi'); this.formData2Update.append('pic_name', this.supportingDataForm.controls['pic_name'].value);
          this.formData2Update.append('pic_phone_number', this.supportingDataForm.controls['pic_phone_number'].value);
          this.formData2Update.append('pic_email_address', this.supportingDataForm.controls['pic_email_address'].value);
          this.formData2Update.append('pic_address', this.supportingDataForm.controls['pic_address'].value);
          this.userService.updDocumentSupportingData(this.formData2Update).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.formData2Update.delete('registration_number');
                this.formData2Update.delete('support_id');
                this.formData2Update.delete('document_id');
                this.formData2Update.delete('name');
                this.formData2Update.delete('description');
                this.formData2Update.delete('pic_name');
                this.formData2Update.delete('pic_phone_number');
                this.formData2Update.delete('pic_email_address');
                this.formData2Update.delete('pic_address');
                this.formData2Update.delete('url');
                this.loadSuccess();
                this.recommendationLetterRequirementModal.hide();
                this.renderSelectionDocumentData();
                this.loading = false;
              } else {
                this.loadError();
                this.loading = false;
              }
            } else {
              this.loading = false;
              this.loadError();
            }
          }, (reason) => {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
          break;
        default: break;
      }
    } else if (this.documentTypeId == 11) {
      switch (this.formTypeAbility) {
        case 'input':
          this.formDataAbility.append('registration_number', this.registration_number);
          this.formDataAbility.append('document_type_id', this.documentTypeId);
          this.formDataAbility.append('name', this.abilityDataForm.controls['name'].value);
          this.formDataAbility.append('description', this.abilityDataForm.controls['name'].value);
          this.userService.postDocumentSupportingData(this.formDataAbility).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.formDataAbility.delete('registration_number');
                this.formDataAbility.delete('document_type_id');
                this.formDataAbility.delete('description');
                this.formDataAbility.delete('name');
                this.formDataAbility.delete('url');
                this.loadSuccess();
                this.documentAbilitytId = res.document_id;
                this.paymentAbilityModal.hide();
                this.renderSelectionDocumentData();
                this.loading = false;
              } else {
                this.loading = false;
                this.loadError();
              }
            } else {
              this.loading = false;
              this.loadError();
            }
          }, (reason) => {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
          break;
        case 'edit':
          this.formDataAbilityUpd.append('registration_number', this.registration_number);
          this.formDataAbilityUpd.append('support_id', this.documentAbilitySupportingId);
          this.formDataAbilityUpd.append('document_id', this.documentAbilitytId);
          this.formDataAbilityUpd.append('document_type_id', this.documentTypeId);
          this.formDataAbilityUpd.append('name', this.abilityDataForm.controls['name'].value);
          this.formDataAbilityUpd.append('description', this.abilityDataForm.controls['name'].value);
          this.userService.updDocumentSupportingData(this.formDataAbilityUpd).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.formDataAbilityUpd.delete('registration_number');
                this.formDataAbilityUpd.delete('support_id');
                this.formDataAbilityUpd.delete('document_id');
                this.formDataAbilityUpd.delete('document_type_id');
                this.formDataAbilityUpd.delete('description');
                this.formDataAbilityUpd.delete('name');
                this.formDataAbilityUpd.delete('url');
                this.loadSuccess();
                this.paymentAbilityModal.hide();
                this.renderSelectionDocumentData();
                this.loading = false;
              } else {
                this.loadError();
                this.loading = false;
              }
            } else {
              this.loadError();
              this.loading = false;
            }
          }, (reason) => {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
          break;
        default: break;
      }
    }
  }

  createEprtTpaDocument() {
    switch (this.formTypeStudy) {
      case 'input':
        this.loading = true;
        this.formDataStudy.append('document_type_id', this.documentTypeStudy);
        if (this.documentTypeId == 28) {
          this.formDataStudy.append('name', 'Dokumen TOEFL');
          this.formDataStudy.append('description', 'Dokumen TOEFL');
          this.formDataStudy.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
          this.formDataStudy.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
        } else if (this.documentTypeId == 13) {
          this.formDataStudy.append('name', 'Dokumen TPA');
          this.formDataStudy.append('description', 'Dokumen TPA');
          this.formDataStudy.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
          this.formDataStudy.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
        } else if (this.documentTypeId == 14) {
          this.formDataStudy.append('name', 'Dokumen IPK');
          this.formDataStudy.append('description', 'Dokumen IPK');
          this.formDataStudy.append('year', '');
          this.formDataStudy.append('score', this.eprtAndTpaForm.controls['gpa'].value);
        } else if (this.documentTypeId == 16) {
          this.formDataStudy.append('name', 'Kesediaan Promotor');
          this.formDataStudy.append('description', 'Kesediaan Promotor');
          this.formDataStudy.append('year', '');
          this.formDataStudy.append('score', '');
        } else if (this.documentTypeId == 20) {
          this.formDataStudy.append('name', 'Surat Kesediaan Residensi');
          this.formDataStudy.append('description', 'Surat Kesediaan Residensi');
          this.formDataStudy.append('year', '');
          this.formDataStudy.append('score', '');
        } else if (this.documentTypeId == 21) {
          this.formDataStudy.append('name', 'Surat Ijin Atasan Langsung');
          this.formDataStudy.append('description', 'Surat Ijin Atasan Langsung');
          this.formDataStudy.append('year', '');
          this.formDataStudy.append('score', '');
        } else if (this.documentTypeId == 27) {
          this.formDataStudy.append('name', this.eprtAndTpaForm.controls['nameCoPromotor'].value);
          this.formDataStudy.append('description', 'Kesediaan Co-Promotor');
          this.formDataStudy.append('year', '');
          this.formDataStudy.append('score', '');
        }
        this.formDataStudy.append('number', '');
        this.formDataStudy.append('registration_number', this.registration_number);
        this.userService.postDocumentStudy(this.formDataStudy).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.loading = false;
              this.formDataStudy.delete('registration_number');
              this.formDataStudy.delete('name');
              this.formDataStudy.delete('document_type_id');
              this.formDataStudy.delete('description');
              this.formDataStudy.delete('score');
              this.formDataStudy.delete('year');
              this.formDataStudy.delete('url');
              this.closeEprtTpaModals();
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loading = false;
            }
          } else {
            this.loadError();
            this.loading = false;
          }
        }, (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loading = false;
        });
        break;
      case 'edit':
        this.loading = true;
        if (this.documentTypeId == 28) {
          this.formDataStudyUpd.append('document_type_id', '28');
          this.formDataStudyUpd.append('name', 'Document TOEFL');
          this.formDataStudyUpd.append('description', 'Dokumen TOEFL');
          this.formDataStudyUpd.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
          this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);

        } else if (this.documentTypeId == 13) {
          this.formDataStudyUpd.append('document_type_id', '13');
          this.formDataStudyUpd.append('name', 'Dokumen TPA');
          this.formDataStudyUpd.append('description', 'Dokumen TPA');
          this.formDataStudyUpd.append('year', this.eprtAndTpaForm.controls['publication_year'].value);
          this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['gpa'].value);

        } else if (this.documentTypeId == 14) {
          this.formDataStudyUpd.append('document_type_id', '14');
          this.formDataStudyUpd.append('name', 'Dokumen IPK');
          this.formDataStudyUpd.append('description', 'Dokumen IPK');
          this.formDataStudyUpd.append('year', '');
          this.formDataStudyUpd.append('score', this.eprtAndTpaForm.controls['eprt_tpa_score'].value);
        } else if (this.documentTypeId == 16) {
          this.formDataStudyUpd.append('document_type_id', '16');
          this.formDataStudyUpd.append('name', 'Kesediaan Promotor');
          this.formDataStudyUpd.append('description', 'Kesediaan Promotor');
          this.formDataStudyUpd.append('year', '');
          this.formDataStudyUpd.append('score', '');
        } else if (this.documentTypeId == 20) {
          this.formDataStudyUpd.append('document_type_id', '20');
          this.formDataStudyUpd.append('name', 'Surat Kesediaan Residensi');
          this.formDataStudyUpd.append('description', 'Surat Kesediaan Residensi');
          this.formDataStudyUpd.append('year', '');
          this.formDataStudyUpd.append('score', '');
        } else if (this.documentTypeId == 21) {
          this.formDataStudyUpd.append('document_type_id', '21');
          this.formDataStudyUpd.append('name', 'Surat Ijin Atasan Langsung');
          this.formDataStudyUpd.append('description', 'Surat Ijin Atasan Langsung');
          this.formDataStudyUpd.append('year', '');
          this.formDataStudyUpd.append('score', '');
        } else if (this.documentTypeId == 27) {
          this.formDataStudyUpd.append('name', this.eprtAndTpaForm.controls['nameCoPromotor'].value);
          this.formDataStudyUpd.append('description', 'Kesediaan Co-Promotor');
          this.formDataStudyUpd.append('year', '');
          this.formDataStudyUpd.append('score', '');
        }
        this.formDataStudyUpd.append('document_id', this.docid);
        this.formDataStudyUpd.append('document_study_id', this.documentStudyId);
        this.formDataStudyUpd.append('number', '');
        // this.formDataStudy.append('url', this.documentTypeStudy);
        this.formDataStudyUpd.append('registration_number', this.registration_number);
        this.userService.updDocumentStudy(this.formDataStudyUpd).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.formDataStudyUpd.delete('registration_number');
              this.formDataStudyUpd.delete('name');
              this.formDataStudyUpd.delete('document_type_id');
              this.formDataStudyUpd.delete('document_id');
              this.formDataStudyUpd.delete('number');
              this.formDataStudyUpd.delete('description');
              this.formDataStudyUpd.delete('score');
              this.formDataStudyUpd.delete('year');
              this.formDataStudyUpd.delete('url');
              this.loading = false;
              this.closeEprtTpaModals();
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loading = false;
            }
          } else {
            this.loadError();
            this.loading = false;
          }
        }, (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loading = false;
        });
        break;
    }
  }

  createProposalDocument() {
    switch (this.formTypeProposal) {
      case 'input':
        this.loading = true;
        this.formDataProposal.append('name', 'Dokumen Proposal');
        this.formDataProposal.append('description', 'Dokumen Proposal');
        this.formDataProposal.append('title', this.proposalForm.controls['title'].value);
        this.formDataProposal.append('registration_number', this.registration_number);
        this.formDataProposal.append('document_type_id', this.documentTypeId);
        this.userService.postDocumentProposal(this.formDataProposal).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.formDataProposal.delete('name');
              this.formDataProposal.delete('description');
              this.formDataProposal.delete('title');
              this.formDataProposal.delete('registration_number');
              this.formDataProposal.delete('document_type_id');
              this.formDataProposal.delete('url');
              this.proposalModal.hide();
              this.loading = false;
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loading = false;
            }
          } else {
            this.loadError();
            this.loading = false;
          }
        }, (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loading = false;
        });
        break;
      case 'edit':
        this.loading = true;
        this.formDataProposalUpd.append('title', this.proposalForm.controls['title'].value);
        this.formDataProposalUpd.append('document_id', this.docid);
        this.formDataProposalUpd.append('document_study_id', this.documentStudyId);
        this.userService.updDocumentProposal(this.formDataProposalUpd).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.formDataProposalUpd.delete('title');
              this.formDataProposalUpd.delete('document_study_id');
              this.formDataProposalUpd.delete('document_id');
              this.formDataProposalUpd.delete('url');
              this.proposalModal.hide();
              this.loading = false;
              this.renderSelectionDocumentData();
              this.checkRequiredDocument();
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loading = false;
            }
          } else {
            this.loadError();
            this.loading = false;
          }
        }, (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loading = false;
        });
        break;
      default:
        break;
    }
  }

  createRecommendationdocument() {
    switch (this.formTypeRecommendationS2) {
      case 'input':
        this.loading = true;
        const { name_rec1, handphone_rec1, email_rec1, name_rec2, handphone_rec2, email_rec2 } = this.recommendationS2Form.value;
        const dataRec1 = {
          document_type_id: this.documentTypeId,
          document_name: 'Rekomendasi S2',
          description: 'Rekomendasi S2',
          registration_number: this.registration_number,
          name: name_rec1,
          handphone: handphone_rec1,
          email: email_rec1
        }
        const dataRec2 = {
          document_type_id: this.documentTypeId,
          document_name: 'Rekomendasi S2',
          description: 'Rekomendasi S2',
          registration_number: this.registration_number,
          name: name_rec2,
          handphone: handphone_rec2,
          email: email_rec2
        }
        this.userService.postDocumentRecommendation(dataRec1).subscribe(res => {
          if (res.status == 'Success') {
            this.userService.postDocumentRecommendation(dataRec2).subscribe(res => {
              if (res.status == 'Success') {
                // this.broadcasterService.notifBroadcast(true, {
                //   title: 'Success',
                //   msg: 'Data yang anda masukkan sudah tersimpan',
                //   timeout: 5000,
                //   theme: 'default',
                //   position: 'top-right',
                //   type: 'success'
                // });
                Swal.fire({
                  title: res.status,
                  text: 'Anda telah berhasil mengisi form rekomendasi. Selanjutnya anda harus mengirimkan link rekomendasi kepada rekomendator dengan mengklik button kirim email pada form ini',
                  type: 'success',
                  showConfirmButton: true
                });
                this.loading = true;
                this.loadingRecommendation = true;
                this.userService.getDocumentRecommendation(`?registration_number=${this.registration_number}`).subscribe(response => {
                  this.formTypeRecommendationS2 = 'view';
                  this.loadingRecommendation = false;
                  this.loading = false;
                  this.viewRecommendationS2 = true;
                  this.idRecommendation1 = response[0].id;
                  this.idRecommendation2 = response[1].id;
                  this.recommendationS2Form.patchValue({ name_rec1: response[0].name });
                  this.recommendationS2Form.patchValue({ handphone_rec1: response[0].handphone });
                  this.recommendationS2Form.patchValue({ email_rec1: response[0].email });
                  this.recommendationS2Form.patchValue({ name_rec2: response[1].name });
                  this.recommendationS2Form.patchValue({ handphone_rec2: response[1].handphone });
                  this.recommendationS2Form.patchValue({ email_rec2: response[1].email });
                  this.recommendationS2Modal.show();
                });
                // this.recommendationS2Modal.hide();
                this.renderSelectionDocumentData();
                this.checkRequiredDocument();
              } else {
                this.broadcasterService.notifBroadcast(true, {
                  title: 'Success',
                  msg: res.status,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });
                this.loading = false;
              }
            });
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.status,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loading = false;
          }
        });
        break;
      default:
        break;
    }
  }

  sendEmailRecommendationS2() {
    const dataRec1 = {
      id: this.idRecommendation1
    };
    const dataRec2 = {
      id: this.idRecommendation2
    };
    this.loading = true;
    this.userService.postSendUrlRecommendation(dataRec1).subscribe(res => {
      if (res.status == 'Success') {
        this.userService.postSendUrlRecommendation(dataRec2).subscribe(res => {
          if (res.status == 'Success') {
            Swal.fire({
              position: 'center',
              type: 'success',
              title: res.status,
              text: this.successSendEmail,
              showConfirmButton: false,
              timer: 2000
            });
            this.loading = false;
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.status,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loading = false;
          }
        });
      } else {
        this.broadcasterService.notifBroadcast(true, {
          title: 'Gagal',
          msg: res.status,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
        this.loading = false;
      }
    });
  }

  uploadSupportingFile(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png'
      ) {
        if (size < 2000000) {
          if (this.isUisRecommendationUpdated) {
            this.formData2Update.append('url', elem.files[0]);
          } else {
            this.formData2.append('url', elem.files[0]);
          }
        } else {
          this.errSize = true;
          this.supportingDataForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.supportingDataForm.get('url').patchValue('');
      }
    }
  }

  uploadStudyDocumentEprt(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png'
      ) {
        if (size < 2000000) {
          if (this.isEprtUpdated) {
            this.formDataStudyUpd.append('url', elem.files[0]);
          } else {
            this.formDataStudy.append('url', elem.files[0]);
          }
        } else {
          this.errSize = true;
          this.eprtAndTpaForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.eprtAndTpaForm.get('url').patchValue('');
      }
    }
  }

  uploadAbilityPayment(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png'
      ) {
        if (size < 2000000) {
          if (this.isUpdatedAbilityPayment) {
            this.formDataAbilityUpd.append('url', elem.files[0]);
          } else {
            this.formDataAbility.append('url', elem.files[0]);
          }
        } else {
          this.errSize = true;
          this.abilityDataForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.abilityDataForm.get('url').patchValue('');
      }
    }
  }

  uploadFile(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png'
      ) {
        if (size < 2000000) {
          this.formDataRaport.append('url', elem.files[0]);
        } else {
          this.errSize = true;
          // this.supportingDataForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        // this.supportingDataForm.get('url').patchValue('');
      }
    }
  }

  semesters1Changed(key, event) {
    const data = event.target.value;
  }

  loadDetailSupportingFileData(registration_number) {
    this.mode('edit');
    this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=${this.documentTypeId}`).subscribe(res => {
      this.documentSupportingId = res.data[0].document_supporting_id;
      this.supportingDataForm.patchValue({ pic_name: res.data[0].pic_name });
      this.supportingDataForm.patchValue({ pic_phone_number: res.data[0].pic_phone_number });
      this.supportingDataForm.patchValue({ pic_email_address: res.data[0].pic_email_address });
      this.supportingDataForm.patchValue({ pic_address: res.data[0].pic_address });
      this.supportingDataForm.patchValue({ url: res.data[0].url });
      if (this.documentTypeId == 9) {
        this.recommendationLetterRequirementModal.show();
      }
      else if (this.documentTypeId == 11) {
        this.paymentAbilityModal.show();
      }
    }, (reason) => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  popUpPrintRegistrationCard() {
    Swal.fire({
      title: 'Warning',
      text: 'Apakah anda yakin ingin mencetak kartu peserta ? Setelah mencetak kartu peserta, anda tidak dapat mengubah data apapun lagi',
      type: 'warning',
      showConfirmButton: true,
      showCloseButton: true,
      showCancelButton: true
    }).then((confirm) => {
      if (confirm.value) {
        this.printRegistrationCard();
      } else {
        Swal.fire({
          title: 'Data anda aman',
          type: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  }

  createRegistrationHistory_7() {
    const datax = {
      registration_number: this.registration_number.toString(),
      registration_step_id: 7
    }
    this.userService.postRegistrationHistoryData(datax).subscribe(result => {
      if (result != null) {
        if (result.status != 'Success') {
          this.loadError();
        }
      } else {
        this.loadError();
      }
    }, (reason) => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: reason.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  createRegistrationPayment() {
    this.loading = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userProfile.email !== undefined) {
      this.userService.getParticipantDetailData(`${this.userProfile.email}`).subscribe(res => {
        this.userData = res.participant_id;
        this.email = res.username;
        this.fullname = res.fullname;
        this.phonenumber = res.mobile_phone_number;
        let dataPasca = {};
        dataPasca = {
          registration_number: this.registration_number,
          payment_method: this.registrationDataForm2.controls['payment_method'].value,
          payment_status: 2,
          selection_path_id: this.selectionPathId,
          mapping_path_price_id: this.idPinPrice,
        };
        this.paymentMethodId = this.registrationDataForm2.controls['payment_method'].value;
        let pinprice = this.registrationDataForm2.controls['pin_price'].value;

        // edit data registrasi
        this.chartService.upRegistrationData(dataPasca).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.registration_number = res.registration_number;
              // Cek Get Payment Method terlebih dahulu
              if (this.paymentMethodId === '1') {
                // Hit api RequestPinTransaction
                const token = this.injector.get(OauthService).retrieveAccessToken();
                const dataPin = {
                  registration_number: this.registration_number,
                  amount: pinprice,
                  add_info1: 'Pembelian Pin Admisi Trisakti',
                  participant_phone_number: this.phonenumber,
                  participant_name: this.fullname,
                  participant_email: this.email,
                  token: token.token,
                };
                this.userService.postPinTransaction(dataPin).subscribe(resp => {
                  if (resp !== null) {
                    if (resp.status == 'Success') {
                      this.payment_code = resp.result.request_body.virtual_account;
                      this.loadSuccess();
                      this.isVirtualAccount = true;
                      this.loadDetailParticipantData(this.registration_number);
                      this.modalOrderForm.show();
                      this.loading = false;
                    } else {
                      this.loading = false;
                      this.loadError();
                    }
                  }
                }, (reason) => {
                  this.loading = false;
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                });
              } else {
                this.loadSuccess();
                this.loadDetailParticipantData(this.registration_number);
                this.modalOrderForm.show();
                this.loading = false;
                this.isVirtualAccount = false;
              }
            } else {
              this.loadError();
              this.loading = false;
            }
          } else {
            this.loadError();
            this.loading = false;
          }
        }, (reason) => {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.error.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
      });
    }

  }

  /*Choose Exam Location */
  loadExamDetailData() { //Pilihan Lokasi Ujian
    this.loadFilter = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
      if (result) {
        this.selection_path_id = result.data[0]['selection_path_id'];
        this.chartService.getExamTimeDatas(`selection_path_id=${this.selection_path_id}&active_status=1`).subscribe((filterArray) => {
          const dataExamLocation = [];
          let x: any;
          for (let i = 0; i < filterArray.data.length; i++) {
            x = {
              value: filterArray.data[i].id,
              label: filterArray.data[i].exam_date.concat(" ", filterArray.data[i].exam_hour),
            };
            dataExamLocation.push(x);
            this.listExamLocation = dataExamLocation;
          }
          this.loadFilter = false;
        }, err => {
          this.loadError();
          this.loadFilter = false;
        });
      }
    });

  }

  printRegistrationCard() {
    if (this.isRaportCategory) {
      this.getAverageParticipantReportCard();
    } else {
      this.createMoodleUserMemberAndEnrol();
    }
  }

  getAverageParticipantReportCard() {
    this.loadingRegCard = true;
    this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=7`).subscribe((res) => {
      if (res.data.length !== 0) {
        const raportCountData = res.data.length;
        this.userService.getAverageParticipantRaportCard(`?registration_number=${this.registration_number}&required_total_semester=${raportCountData}`).subscribe((resp) => {
          if (resp.length !== 0) {
            const biology = resp.biology;
            const chemistry = resp.chemical;
            const physics = resp.physics;
            const sociology = resp.sociological;
            const historical = resp.historical;
            const economy = resp.economy;
            const geography = resp.geography;
            const english = resp.english;
            const math = resp.math;
            const bahasa = resp.bahasa;
            const payload = {
              registration_number: this.registration_number,
              math: math,
              physics: physics,
              bahasa: bahasa,
              english: english,
              biology: biology,
              economy: economy,
              geography: geography,
              sociological: sociology,
              historical: historical,
              chemical: chemistry,
              general_knowledge: 0,
              photography_knowledge: 0,
              tpa: 0,
              grade_final: 0,
            }
            this.userService.postParticipantGrade(payload).subscribe((response) => {
              if (response.status == 'Success') {
                this.createRegistrationCard();
                this.loadSuccess();
              } else {
                this.broadcasterService.notifBroadcast(true, {
                  title: response.status,
                  msg: response.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });
                this.loadingRegCard = false;
              }
            });
          }
        });
      }
    });
  }

  createRegistrationCard() {
    this.loadingRegCard = true;
    this.userService.getRegistrationCard(`registration_number=${this.registration_number}`).subscribe((res) => {
      window.open(res.urls, "_blank");
      this.router.navigate([`/registration-history`]);
      this.createRegistrationHistory_7();
      this.loadingRegCard = false;
    }, err => {
      this.broadcasterService.notifBroadcast(true, {
        title: err.response.status,
        msg: err.response.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loadingRegCard = false;
    });
  }

  // loadExamDateData() {
  //   this.loadFilter = true;
  //   this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
  //     if (result) {
  //       this.selection_path_id = result.data[0]['selection_path_id'];
  //       this.chartService.getExamTimeData(`${this.selection_path_id}`).subscribe((filterArray) => {
  //         const dataExamDate = [];
  //         let x: any;
  //         for (let i = 0; i < filterArray.data.length; i++) {
  //           x = {
  //             value: filterArray.data[i].id,
  //             label: filterArray.data[i].exam_date + '-' + filterArray.data[i].exam_hour,
  //           };
  //           dataExamDate.push(x);
  //           this.listExamDate = dataExamDate;
  //         }
  //         this.loadFilter = false;
  //       }, err => {
  //         this.loadError();
  //         this.loadFilter = false;
  //       });
  //     }
  //   });
  // }

  changeExamLocation(val) {
    this.examLocation = val
    this.loadFilter = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
      if (result) {
        this.selection_path_id = result.data[0]['selection_path_id'];
        this.chartService.getExamTimeData(`${this.selection_path_id}&exam_location_id=${this.examLocation}`).subscribe((filterArray) => {
          (filterArray);
          const dataExamDate = [];
          let x: any;
          for (let i = 0; i < filterArray.data.length; i++) {
            x = {
              value: filterArray.data[i].id,
              label: filterArray.data[i].exam_date + '-' + filterArray.data[i].exam_hour,
            };
            dataExamDate.push(x);
            this.listExamDate = dataExamDate;
          }
          this.loadFilter = false;
        }, err => {
          this.loadError();
          this.loadFilter = false;
        });
      }
    });

  }

  checkRequiredDocument() {
    this.loadingCardCheckDoc = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
      this.selectionPathId = result.data[0]['selection_path_id'];
      this.selectionProgramId = result.data[0]['selection_program_id'];
      // Jika selection program adalah pascasarjana & ekstensi
      if (result.data[0].category === 'PASCASARJANA' || result.data[0].category === 'EKSTENSI') {
        this.userService.getDocumentParticipantStatus(`?selection_path_id=${this.selectionPathId}&registration_number=${this.registration_number}&required=true`).subscribe(res => {
          let dataDocument = res;
          const dataNull = dataDocument.find(x => x.document_id === null)
          const doctype = dataDocument.find(y => y.document_type_id == 10)
          const doctypeRecommendation = dataDocument.find(data => data.document_type_id == 15);
          if (dataNull !== undefined) {
            if (dataNull.document_id === null) {
              this.disabledNextStep = true;
              this.loadingCardCheckDoc = false;
            } else {
              this.disabledNextStep = false;
              this.loadingCardCheckDoc = false;
            }
          } else {
            if (doctype !== undefined) {
              this.userService.getDocumentCertificateData(`registration_number=${this.registration_number}`).subscribe(res => {
                if (res.length !== 0) {
                  const typeCertificate = res.data.find(x => x.certificate_type_id == 1);
                  const typeCertificate2 = res.data.find(x => x.certificate_type_id == 2);
                  if (typeCertificate !== undefined) {
                    if (typeCertificate2 != undefined) {
                      this.disabledNextStep = false;
                      this.loadingCardCheckDoc = false;
                    } else {
                      this.disabledNextStep = true;
                      this.loadingCardCheckDoc = false;
                    }
                  } else if (typeCertificate2.length !== 0) {
                    if (typeCertificate.length !== 0) {
                      this.disabledNextStep = false;
                      this.loadingCardCheckDoc = false;
                    } else {
                      this.disabledNextStep = true;
                      this.disabledRaportDoc = false;
                      this.loadingCardCheckDoc = false;
                    }
                  } else {
                    this.disabledNextStep = true;
                    this.loadingCardCheckDoc = false;
                  }
                } else {
                  this.disabledNextStep = true;
                  this.loadingCardCheckDoc = false;
                }
              });
            } else {
              this.disabledNextStep = false;
              this.loadingCardCheckDoc = false;
            }
          }
        });
      } else {
        this.userService.getDocumentParticipantStatus(`?selection_path_id=${this.selectionPathId}&registration_number=${this.registration_number}&required=true`).subscribe(res => {
          let dataDocument = res;

          // Check apakah ada document id ada yang null
          const dataNull = dataDocument.find(x => x.document_id === null)
          if (dataNull !== undefined) {
            if (dataNull.document_id === null) {
              this.disabledNextStep = true;
              this.loadingCardCheckDoc = false;
            } else {
              this.disabledNextStep = false;
              this.loadingCardCheckDoc = false;
            }
          } else {
            // Check document raport
            this.userService.getDocumentParticipantStatus(`?selection_path_id=${this.selectionPathId}&registration_number=${this.registration_number}&required=true`).subscribe(res => {
              if (res.length !== 0) {
                const documentTypeRaport = _.find(res, { document_type_id: 7 });
                if (documentTypeRaport !== undefined) {
                  this.userService.getDocumentRequirementRaport(`?registration_number=${this.registration_number}&semester_id=1`).subscribe(res => {
                    if (res[0].status == false) {
                      this.disabledNextStep = true;
                      this.loadingCardCheckDoc = true;
                    } else {
                      this.userService.getDocumentRequirementRaport(`?registration_number=${this.registration_number}&semester_id=2`).subscribe(res => {
                        if (res[0].status == false) {
                          this.disabledNextStep = true;
                          this.loadingCardCheckDoc = true;
                        } else {
                          this.userService.getDocumentRequirementRaport(`?registration_number=${this.registration_number}&semester_id=3`).subscribe(res => {
                            if (res[0].status == false) {
                              this.disabledNextStep = true;
                              this.loadingCardCheckDoc = true;
                            } else {
                              this.userService.getDocumentRequirementRaport(`?registration_number=${this.registration_number}&semester_id=4`).subscribe(res => {
                                if (res[0].status == false) {
                                  this.disabledNextStep = true;
                                  this.loadingCardCheckDoc = true;
                                } else {
                                  this.disabledNextStep = false;
                                  this.loadingCardCheckDoc = false;
                                }
                              });
                            }
                          });
                        }

                      });
                    }
                  });
                } else {
                  this.disabledNextStep = false;
                  this.loadingCardCheckDoc = false;
                }
              } else {
                this.disabledNextStep = false;
                this.loadingCardCheckDoc = false;
              }
            });
          }
        });
      }
    });
  }

  goToProdiStep() {
    this.wizard.navigation.goToStep(1);
    this.loadDetailParticipant();
    this.loading = false;
  }

  gotoStep1() {
    this.wizard.navigation.goToStep(1);
    this.loadPinPrice();
  }

  gotoStep2() {
    this.wizard.navigation.goToStep(2);
    this.loadDetailParticipant();
    this.getPublicationPositionLists();
    this.getPublicationTypeLists();
    this.loading = false;
  }

  goToExamTime() {
    this.wizard.navigation.goToStep(2);
    this.loadDetailParticipant();
    this.loading = false;
  }

  goTopPaymentStep() {
    this.wizard.navigation.goToStep(3);
    this.loadDetailParticipant();
    this.loading = false;
  }

  goToCetakKartuPeserta() {
    this.wizard.navigation.goToStep(3);
    this.loadGroupWithPathExam();
    this.loadRegistrationProgramStudyData2(this.registration_number);
    this.loadDetailParticipant();
    this.loading = false;
  }

  closeUtbkModals() {
    this.utbkForm.reset();
    this.utbkModals.hide();
    this.dataUtbkUrl = [];
  }

  transcriptCreditTransferRequirementModalClose() {
    this.dynamicForm.reset();
    this.courseTotal = false;
    for (let i = this.t.length; i >= 0; i--) {
      this.t.removeAt(i);
    }
    this.transcriptCreditTransferRequirementModal.hide();
  }

  closeRaportModalDetail() {
    this.reportCardDetailModal.hide();
    this.showMapel = false;
    this.reportCardDataForm.reset();
    // this.isMathStudy = false;
    // this.isBahasaStudy = false;
    // this.isEnglishStudy = false;
    // this.chemicalStudy = false;
    // this.biologyStudy = false;
    // this.physicsStudy = false;
    // this.economyStudy = false;
    // this.sociologicalStudy = false;
    // this.geographyStudy = false;
    this.reportCardDataForm.get('math').clearValidators();
    this.reportCardDataForm.get('math').updateValueAndValidity();
    this.reportCardDataForm.get('bahasa').clearValidators();
    this.reportCardDataForm.get('bahasa').updateValueAndValidity();
    this.reportCardDataForm.get('english').clearValidators();
    this.reportCardDataForm.get('english').updateValueAndValidity();
    this.reportCardDataForm.get('biology').clearValidators();
    this.reportCardDataForm.get('biology').updateValueAndValidity();
    this.reportCardDataForm.get('chemical').clearValidators();
    this.reportCardDataForm.get('chemical').updateValueAndValidity();
    this.reportCardDataForm.get('physics').clearValidators();
    this.reportCardDataForm.get('physics').updateValueAndValidity();
    this.reportCardDataForm.get('chemical').clearValidators();
    this.reportCardDataForm.get('economy').updateValueAndValidity();
    this.reportCardDataForm.get('economy').clearValidators();
    this.reportCardDataForm.get('geography').updateValueAndValidity();
    this.reportCardDataForm.get('geography').clearValidators();
    this.reportCardDataForm.get('sociological').updateValueAndValidity();
    this.reportCardDataForm.get('sociological').clearValidators();
    document.querySelector('body').classList.add('modal-open');
  }

  closeCertificateModalDetail() {
    this.certificateDetailModal.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  documentRequirementModalClose() {
    this.documentRequirementModal.hide();
    this.participantDocumentForm.reset();
    !this.haveDocumentPersonal;
  }

}
