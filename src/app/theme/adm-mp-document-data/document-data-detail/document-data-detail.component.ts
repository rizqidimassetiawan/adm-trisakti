import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-document-data-detail',
  templateUrl: './document-data-detail.component.html',
  styleUrls: ['./document-data-detail.component.scss']
})
export class DocumentDataDetailComponent implements OnInit {
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  public listDocumentReport: any;
  public errType: boolean;
  public errSize: boolean;
  public dtOptions: any = [];
  public tableData: Array<any>;
  public dtTrigger = new Subject();
  public isUpdatedReport: boolean;
  public documentTypeStudy: any;
  public documentStudyId: any;
  public dataStudyUrl: any;
  public haveDocumentStudy: boolean;
  public approvedStatus: boolean;
  public loadtableRegistrationDocument: boolean;
  public dataTableRegistrationDocument: any;
  public tableData1: Array<any>;
  public loadFilter: any;
  public listReportCard: any;
  public dataRequirementUrl: any;
  public participantForm: boolean;
  public supportingForm: boolean;
  public transcripForm: boolean;
  public noDataDocument: boolean;
  public listSemester: any;
  public listRangeScore: any;
  public rangeScore: string;
  public searching: any;
  public formDataCertificateUpdated = new FormData();
  public documentCertificateId: any;
  public listDocumentCertificate: any;
  public semester: string;
  public listCertificateLevel: any;
  public certificateLevel: string;
  public listCertificateType: any;
  public certificateType: string;
  public registration_number: any;
  public edit: any;
  public participantBiodatas: any;
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
  public docid: any;
  public documentPublicationTypeId: any;
  public publicationID: any;
  public totalRecord: any;
  public selectedWriterPosition: string;
  public selectedPublicationType: string;
  public haveLinkPublication: boolean;
  public loadingDocumentCard: boolean;
  public loadTablePublication: boolean;
  public tableDataPublication: Array<any>;
  public listWriterPosition: any;
  public listPublicationType: any;
  public formDataUpdate = new FormData();
  public formData = new FormData();
  public formType: any;
  public formTypeCertificate: any;
  public formTypePersonal: any;
  public formTypeAbility: any;
  public formTypeRecommendation: any;
  public formTypeStudy: any;
  public formTypeRecommendationS2: any;
  public formTypeProposal: any;
  public type = 'default';
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
  public registrationNumberId: any;
  public participantId: any;
  public documentId: any;
  public documentUrl: any;
  public documentType: any;
  public documentNameTitleUrl: any;
  public formDataStudyUpd: FormData;
  public formDataIjazahUpd: FormData;
  public isIjazahS1: boolean;
  public isIjazahS2: boolean;
  public isPortofolio: boolean;
  public haveDocumentIjazah: boolean;
  public dataIjazah: any;
  public documentTypeIjazah: any;
  public isUpdatedTranscript: boolean;
  public haveTranscriptDoc: boolean;
  public isTranscript: boolean;
  public documentTranscriptId: any;
  public documentReportTranscriptId: any;
  public dataTranscriptUrlDoc: any;
  public formData3Updated: FormData;
  public documentTypePersonal: any;
  public documentidPersonal: any;
  public isUpdatedRequirement: boolean;
  public haveDocumentPersonal: boolean;
  public isShowIdentityNumber: boolean;
  public formDataPersonalUpd: FormData;
  public haveAbilityDocument: boolean;
  public documentAbilitytId: any;
  public documentAbilitySupportingId: any;
  public dataAbilityUrl: any;
  public documentRecommendationId: any;
  public formDataAbilityUpd: FormData;
  public formData2Update: FormData;
  public formDataUtbkUpd: FormData;
  public formDataProposalUpd: FormData;
  public dataRecommendationUrl: any;
  public haveSupportingDocument: boolean;
  public loadTableTranscript: boolean;
  public tableTranscript: Array<any>;
  public dataTranscriptUrl: any;
  public documentTypeUtbk: any;
  public documentUtbkId: any;
  public dataUtbkUrl: any;
  public selectedCategoryUtbk: string;
  public isSaintek: boolean;
  public listCategoryUtbk: any;
  public idRecommendation1: any;
  public idRecommendation2: any;
  public loadingRecommendation: boolean;
  public viewRecommendationS2: boolean;
  public dataProposal: any;
  public haveProposalDocument: boolean;
  public documentIdCheck: any;
  public documentReportCardId: any;
  public semesterID: any;
  public documentTypeId: any;
  public loadtableReportCardData: boolean;
  public dataTableReportCardData: any;
  public tableData2: Array<any>;
  public loadtableCertificateData: boolean;
  public dataTableCertificateData: any;
  public tableData3: Array<any>;
  public loadDownloadData: any;
  public documentSupportingId: any;
  public loadingCard: boolean;
  public loading: boolean;
  public isIndonesianNationality: boolean;
  public confirmation: string;
  public rejected: string;
  public approve: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;
  public warning: string;
  public loadingSemester: boolean;
  public showMapel: boolean;
  public isNotHaveMappingData: boolean;
  public pageDocument: number = 1;

  @ViewChild('reportCardDetailModal', { static: true }) public reportCardDetailModal: any;
  @ViewChild('certificateDetailModal', { static: true }) public certificateDetailModal: any;
  @ViewChild('publikasiModals', { static: true }) public publikasiModals: any;
  @ViewChild('publicationDataModals', { static: true }) public publicationDataModals: any;
  @ViewChild('eprtAndTpaModal', { static: true }) public eprtAndTpaModal: any;
  @ViewChild('ijazahModals', { static: true }) public ijazahModals: any;
  @ViewChild('transcriptRequirementModal', { static: true }) public transcriptRequirementModal: any;
  @ViewChild('paymentAbilityModal', { static: true }) public paymentAbilityModal: any;
  @ViewChild('recommendationLetterRequirementModal', { static: true }) public recommendationLetterRequirementModal: any;
  @ViewChild('transcriptRequirementModalView', { static: true }) public transcriptRequirementModalView: any;
  @ViewChild('utbkModals', { static: true }) public utbkModals: any;
  @ViewChild('recommendationS2Modal', { static: true }) public recommendationS2Modal: any;
  @ViewChild('proposalModal', { static: true }) public proposalModal: any;
  @ViewChild('reportCardRequirementModal', { static: true }) public reportCardRequirementModal: any;
  @ViewChild('certificateRequirementModal', { static: true }) public certificateRequirementModal: any;
  @ViewChild('documentRequirementModal', { static: true }) public documentRequirementModal: any;

  constructor(
    public translate: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private userService: ParticipantService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    translate.setDefaultLang(localStorage.getItem('lang'));
    this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
    this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
    this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
    this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
    this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
    this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    this.translate.get('CONTENT.approve-question').subscribe((l) => { this.approve = l; });
    this.translate.get('CONTENT.rejected-question').subscribe((l) => { this.rejected = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translate.setDefaultLang(res.lang);
      this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
      this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
      this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
      this.translate.get('CONTENT.approve-question').subscribe((l) => { this.approve = l; });
      this.translate.get('CONTENT.rejected-question').subscribe((l) => { this.rejected = l; });
    });
    this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
    this.participantId = +this.route.snapshot.paramMap.get('participantId');
    this.loading = false;
    this.loadingCard = false;
    this.supportingForm = false;
    this.transcripForm = false;
    this.participantForm = false;
    this.noDataDocument = false;
    this.errSize = false;
    this.errType = false;
    this.isUpdatedReport = false;
    this.isMathStudy = false;
    this.isBahasaStudy = false;
    this.isEnglishStudy = false;
    this.chemicalStudy = false;
    this.biologyStudy = false;
    this.physicsStudy = false;
    this.economyStudy = false;
    this.sociologicalStudy = false;
    this.geographyStudy = false;
    this.approvedStatus = false;
    this.isUpdatedTranscript = false;
    this.loadTableTranscript = false;
    this.dataTranscriptUrl = false;
    this.haveProposalDocument = false;
    this.dataRecommendationUrl = [];
    this.formDataStudyUpd = new FormData();
    this.formDataIjazahUpd = new FormData();
    this.formData3Updated = new FormData();
    this.formDataPersonalUpd = new FormData();
    this.formDataAbilityUpd = new FormData();
    this.formData2Update = new FormData();
    this.formDataUtbkUpd = new FormData();
    this.formDataProposalUpd = new FormData();
    this.dataRequirementUrl = [];
    this.dataProposal = [];
    this.listDocumentReport = [];
    this.listDocumentCertificate = [];
    this.participantBiodatas = [];
    this.tableDataPublication = [];
    this.dataIjazah = [];
    this.tableTranscript = [];
    this.dataTranscriptUrlDoc = [];
    this.dataAbilityUrl = [];
    this.dataUtbkUrl = [];
    this.dataStudyUrl = [];
    this.searching = '';
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

  registrationParticipantDataForm = this.fb.group({
    registration_number: [''],
    fullname: [''],
    gender: [''],
    nationality: [''],
    religion: [''],
    country_birth: [''],
    province_birth: [''],
    city_birth: [''],
    birthdate: [''],
    country_origin: [''],
    NIK: [''],
    passport_number: [''],
    passport_expiry_date: [''],
    color_blind: [''],
    special_needs: [''],
    email: [''],
    phone_number: ['']
  });

  reportDocumentApproved = this.fb.group({
    name: ['', Validators.required],
    url: [''],
    description: ['', Validators.required],
    approval_final_status: ['', Validators.required]
  });

  certificateDocumentApproved = this.fb.group({
    name: ['', Validators.required],
    url: [''],
    description: ['', Validators.required],
    approval_final_status: ['', Validators.required]
  });

  reportCardDataForm = this.fb.group({
    registration_number: [''],
    name: [''],
    document_type_id: [''],
    description: [''],
    number: [''],
    url: [''],
    document_id: [''],
    semester_id: [''],
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

  certificateDataForm = this.fb.group({
    registration_number: [''],
    document_type_id: [''],
    name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
    description: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    number: [''],
    url: [''],
    certificate_type_id: [''],
    certificate_level_id: [''],
    publication_year: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]*$')])),
    certificate_score: ['', Validators.required],
  });

  publikasiForm = this.fb.group({
    name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    position: new FormControl('', Validators.required),
    title: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(500)])),
    type: new FormControl('', Validators.required),
    publication_date: new FormControl('', Validators.required),
    link: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
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

  ijazahForm = this.fb.group({
    registration_number: [''],
    document_type_id: [''],
    name: new FormControl(''),
    url: [''],
    link_document: ['']
  });

  transcriptDataForm = this.fb.group({
    document_id: [''],
    registration_number: [''],
    name: [''],
    document_type_id: [''],
    url: [''],
    gpa: ['', [Validators.required, Validators.maxLength(4), Validators.max(4), Validators.pattern('^[0-9.]*$')]]
  });

  participantDocumentForm = this.fb.group({
    document_type_id: [''],
    name: [''],
    description: [''],
    number: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(16)])),
    url: ['']
  });

  abilityDataForm = this.fb.group({
    registration_number: [''],
    document_type_id: [''],
    name: [''],
    description: [''],
    number: [''],
    url: ['']
  });

  supportingDataForm = this.fb.group({
    registration_number: [''],
    document_type_id: [''],
    name: [''],
    description: [''],
    number: [''],
    url: [''],
    pic_name: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
    pic_phone_number: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])],
    pic_email_address: ['', Validators.compose([Validators.required, Validators.maxLength(150)])],
    pic_address: ['', Validators.compose([Validators.required, Validators.maxLength(150)])],
  });

  transcriptFormlView = this.fb.group({
    name: [''],
    totalCredit: [''],
    totalCourse: ['']
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

  recommendationS2Form = this.fb.group({
    name_rec1: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    handphone_rec1: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])),
    email_rec1: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    name_rec2: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    handphone_rec2: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('^[0-9]*$')])),
    email_rec2: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
  });

  get fraport() {
    return this.reportCardDataForm.controls;
  }

  get fcertif() {
    return this.certificateDataForm.controls;
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

  get fpd() {
    return this.participantDocumentForm.controls;
  }

  get fad() {
    return this.participantDocumentForm.controls;
  }

  get fsd() {
    return this.supportingDataForm.controls;
  }

  get futbk() {
    return this.utbkForm.controls;
  }

  get frod() {
    return this.recommendationS2Form.controls;
  }

  ngOnInit() {
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
      order: [[0, 'asc']],
      initComplete: () => {
      }
    };
    this.loadRegistrationDocumentData();
    this.loadSemesterDataFilter();
    this.loadRangeScoreDataFilter();
    this.loadCertificateLevelDataFilter();
    this.loadCertificateTypeDataFilter();
  }

  changeSemesters(event) {
    if (event.value) {
      this.showMapel = true;
    } else {
      this.showMapel = false;
    }
  }

  loadSemesterChecked() {
    this.userService.getRaportSemesters(`?registration_number=${this.registration_number}&is_checked=1`).subscribe(res => {
      if (res.length !== 0) {
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

  loadCertificateLevelDataFilter() {
    this.loadFilter = true;
    this.userService.getCertificateLevelData().subscribe((filterArray) => {
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
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
    this.loading = false;
  }

  loadCertificateTypeDataFilter() {
    this.loadFilter = true;
    this.userService.getCertificateTypeData().subscribe((filterArray) => {
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
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
    this.loading = false;
  }

  loadRegistrationDocumentData() {
    this.loadtableRegistrationDocument = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
      this.chartService.getSelectionDocument(`selection_id=${result.data[0]['selection_path_id']}&active_status=true`).subscribe(response => {
          this.tableData1 = response.data;
          this.dtTrigger.next();
          this.loadtableRegistrationDocument = false;
      }, err => {
        this.loadtableRegistrationDocument = false;
      });
    });
  }

  loadDetailRegistrationDocumentData(data) {
    this.loading = true;
    this.documentId = data.document_id;
    if (data.document_type_id == 6) {
      this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=6`).subscribe(response2 => {
        if (response2.data.length !== 0) {
          this.loading = false;
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
          if (response2.data[0].document_url !== null) {
            this.haveDocumentPersonal = true;
          } else {
            this.haveDocumentPersonal = false;
          }
          if (response2.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 7) {
      this.loading = false;
      this.documentTypeId = data.document_type_id;
      this.loadDetailReportCardFileData(this.registration_number);
      this.loadSemesterChecked();
      this.reportCardRequirementModal.show();
    }
    else if (data.document_type_id == 8) {
      this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=8`).subscribe(res => {
        if (res.data.length !== 0) {
          this.loading = false;
          this.transcriptRequirementModal.show();
          this.formType = 'edit';
          this.loadingDocumentCard = false;
          this.isUpdatedTranscript = true;
          this.isTranscript = true;
          this.documentTypeId = 8;
          this.documentTranscriptId = res.data[0].document_id;
          this.documentReportTranscriptId = res.data[0].document_report_card_id;
          this.transcriptDataForm.patchValue({ name: 'Transkrip Nilai Pendidikan Terakhir' });
          this.transcriptDataForm.get('url').clearValidators();
          this.transcriptDataForm.get('url').updateValueAndValidity();
          this.transcriptDataForm.get('gpa').clearValidators();
          this.transcriptDataForm.get('gpa').updateValueAndValidity();
          this.dataTranscriptUrlDoc = res.data;
          if (res.data[0].url !== null) {
            this.haveTranscriptDoc = true;
          } else {
            this.haveTranscriptDoc = false;
          }
          if (res.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
        } else {
          this.noDataFoundAlert();
        }
      }, (reason) => {
        this.loadError();
        this.loading = false;
      });
    }
    else if (data.document_type_id == 9) {
      this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=9`).subscribe(response => {
        if (response.data.length !== 0) {
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
          this.loading = false;
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 10) {
      this.documentTypeId = data.document_type_id;
      this.loading = false;
      this.loadDetailCertificateFileData(this.registration_number);
      this.certificateRequirementModal.show();
    }
    else if (data.document_type_id == 11) {
      this.userService.getDocumentSupportingData(`registration_number=${this.registration_number}&document_type_id=${11}`).subscribe(res => {
        if (res.data.length !== 0) {
          this.loading = false;
          this.documentAbilitytId = res.data[0].document_id;
          this.documentAbilitySupportingId = res.data[0].document_supporting_id;
          this.abilityDataForm.patchValue({ name: 'Surat Kemampuan Pembayaran' });
          this.abilityDataForm.get('url').clearValidators();
          this.abilityDataForm.get('url').updateValueAndValidity();
          this.dataAbilityUrl = res.data;
          this.loadingDocumentCard = false;
          this.haveAbilityDocument = true;
          this.paymentAbilityModal.show();
          if (res.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
        } else {
          this.noDataFoundAlert();
        }
      }, (reason) => {
        this.loadError();
        this.loading = false;
      });
    }
    else if (data.document_type_id == 12) {
      this.userService.getUtbkDocument(`?registration_number=${this.registration_number}`).subscribe(response => {
        if (response.length !== 0) {
          this.loading = false;
          this.documentTypeUtbk = 12;
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
          if (response[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.utbkModals.show();
        }
      });
    }
    else if (data.document_type_id == 13) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=13`).subscribe(response => {
        if (response.data.length !== 0) {
          this.documentTypeStudy = response.data[0].document_type_id;
          this.isTPADocument = true;
          this.isCoPromotor = false;
          this.isIPKDocument = false;
          this.isEPRTDocument = false;
          this.isPromotor = false;
          this.loadingDocumentCard = false;
          this.loading = false;
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
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.eprtAndTpaModal.show();
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 14) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=14`).subscribe(response => {
        if (response.data.length !== 0) {
          this.documentTypeStudy = response.data[0].document_type_id
          this.isIPKDocument = true;
          this.isTPADocument = false;
          this.isEPRTDocument = false;
          this.isCoPromotor = false;
          this.isPromotor = false;
          this.loadingDocumentCard = false;
          this.loading = false;
          this.documentStudyId = response.data[0].document_study_id;
          this.docid = response.data[0].document_id;
          this.eprtAndTpaForm.patchValue({ name: 'IPK' });
          this.eprtAndTpaForm.patchValue({ eprt_tpa_score: '' });
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
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.eprtAndTpaModal.show();
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 15) {
      this.userService.getDocumentRecommendation(`?registration_number=${this.registration_number}`).subscribe(response => {
        if (response.length !== 0) {
          this.loading = false;
          this.loadingRecommendation = false;
          this.formTypeRecommendationS2 = 'view';
          this.viewRecommendationS2 = true;
          this.loadingDocumentCard = false;
          this.idRecommendation1 = response[0].id;
          this.idRecommendation2 = response[1].id;
          this.recommendationS2Form.patchValue({ name_rec1: response[0].name });
          this.recommendationS2Form.patchValue({ handphone_rec1: response[0].handphone });
          this.recommendationS2Form.patchValue({ email_rec1: response[0].email });
          this.recommendationS2Form.patchValue({ name_rec2: response[1].name });
          this.recommendationS2Form.patchValue({ handphone_rec2: response[1].handphone });
          this.recommendationS2Form.patchValue({ email_rec2: response[1].email });
          this.recommendationS2Modal.show();
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 16) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=16`).subscribe(response => {
        if (response.data.length !== 0) {
          this.documentTypeStudy = response.data[0].document_type_id
          this.isCoPromotor = false;
          this.isPromotor = true;
          this.isIPKDocument = false;
          this.isTPADocument = false;
          this.isEPRTDocument = false;
          this.loading = false;
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
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.eprtAndTpaModal.show();
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 17) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=17`).subscribe(response => {
        if (response.data.length !== 0) {
          this.haveDocumentData = true;
          this.documentTypeStudy = response.data[0].document_type_id
          this.isEprtUpdated = true;
          this.isProposal = true;
          this.loadingDocumentCard = false;
          this.loading = false;
          this.documentStudyId = response.data[0].document_study_id;
          this.docid = response.data[0].document_id;
          this.proposalForm.patchValue({ title: response.data[0].title })
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
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.proposalModal.show();
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 18) {
      this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=18`).subscribe(response2 => {
        if (response2.data.length !== 0) {
          this.isIjazahS1 = true;
          this.isIjazahS2 = false;
          this.isPortofolio = false;
          this.loadingDocumentCard = false;
          this.loading = false;
          this.documentTypeIjazah = response2.data[0].document_type_id;
          this.docid = response2.data[0].document_id;
          this.ijazahForm.patchValue({ name: response2.data[0].document_type });
          this.ijazahForm.get('url').clearValidators();
          this.ijazahForm.get('url').updateValueAndValidity();
          this.dataIjazah = response2.data;
          if (response2.data[0].document_url !== null) {
            this.haveDocumentIjazah = true;
          } else {
            this.haveDocumentIjazah = false;
          }
          if (response2.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.ijazahModals.show();
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 19) {
      this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=19`).subscribe(response2 => {
        if (response2.data.length !== 0) {
          this.isIjazahS1 = false;
          this.isIjazahS2 = true;
          this.isPortofolio = false;
          this.loadingDocumentCard = false;
          this.loading = false;
          this.documentTypeIjazah = response2.data[0].document_type_id;
          this.docid = response2.data[0].document_id;
          this.ijazahForm.patchValue({ name: response2.data[0].document_type });
          this.ijazahForm.get('url').clearValidators();
          this.ijazahForm.get('url').updateValueAndValidity();
          this.dataIjazah = response2.data;
          if (response2.data[0].document_url !== null) {
            this.haveDocumentIjazah = true;
          } else {
            this.haveDocumentIjazah = false;
          }
          if (response2.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.ijazahModals.show();
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 20) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=20`).subscribe(response => {
        if (response.data.length !== 0) {
          this.loading = false;
          this.formTypeStudy = 'edit';
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
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
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 21) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=21`).subscribe(response => {
        if (response.data.length !== 0) {
          this.loading = false;
          this.formTypeStudy = 'edit';
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.haveDocumentData = true;
          this.documentTypeStudy = response.data[0].document_type_id
          this.isEprtUpdated = true;
          this.isPromotor = false;
          this.isResidensi = false;
          this.isSuratIjinAtasan = true;
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
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 22) {
      this.chartService.getRegistrationDocument(`${this.registration_number}&document_type_id=22`).subscribe(response2 => {
        if (response2.data.length !== 0) {
          this.haveDocumentIjazah = true;
          this.loading = false;
          this.isIjazahS1 = false;
          this.isIjazahS2 = false;
          this.isPortofolio = true;
          this.loadingDocumentCard = false;
          if (response2.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.documentTypeIjazah = response2.data[0].document_type_id;
          this.docid = response2.data[0].document_id;
          this.ijazahForm.patchValue({ link_document: response2.data[0].document_url });
          this.ijazahForm.patchValue({ name: response2.data[0].document_type });
          this.ijazahForm.get('url').clearValidators();
          this.ijazahForm.get('url').updateValueAndValidity();
          this.ijazahForm.get('name').clearValidators();
          this.ijazahForm.get('name').updateValueAndValidity();
          this.dataIjazah = response2.data;
          this.ijazahModals.show();
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 23) {
      this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=23`).subscribe(response => {
        if (response.data.length !== 0) {
          this.transcriptRequirementModal.show();
          this.documentTypeId = 23;
          this.loading = false;
          this.isTranscript = false;
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
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
        }
        else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 24) {
      this.userService.getReportCardData(`registration_number=${this.registration_number}&document_type_id=24`).subscribe(response => {
        if (response.data.length !== 0) {
          this.transcriptRequirementModal.show();
          this.documentTypeId = 24;
          this.loading = false;
          this.isTranscript = false;
          this.loadingDocumentCard = false;
          this.documentTranscriptId = response.data[0].document_id;
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
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
        }
        else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 25) {
      this.userService.getTranscriptDocument(`?registration_number=${this.registration_number}`).subscribe(response => {
        if (response.length !== 0) {
          const x = response[0].id;
          this.userService.getTranscriptDocumentDetails(`?document_transcript_id=${x}`).subscribe(response => {
            if (response.length !== 0) {
              this.formType = 'view';
              this.tableTranscript = response.courses;
              this.isUpdatedTranscript = true;
              this.documentTranscriptId = response.id;
              this.transcriptFormlView.patchValue({ name: 'Transkrip Nilai Kredit Transfer ' });
              this.transcriptFormlView.patchValue({ totalCredit: response.total_credit });
              this.transcriptFormlView.patchValue({ totalCourse: response.total_course });
              this.dataTranscriptUrl = response.url;
              this.loadingDocumentCard = false;
              this.transcriptRequirementModalView.show();
              this.loading = false;
            }
          });
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 26) {
      this.getTablePublication();
      this.publicationDataModals.show();
      this.documentPublicationTypeId = 26;
      this.loadingDocumentCard = false;
      this.loading = false;
    }
    else if (data.document_type_id == 27) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=27`).subscribe(response => {
        if (response.data.length !== 0) {
          this.haveDocumentData = true;
          this.documentTypeStudy = response.data[0].document_type_id;
          this.isCoPromotor = true;
          this.isPromotor = false;
          this.isIPKDocument = false;
          this.isTPADocument = false;
          this.loadingDocumentCard = false;
          this.isEPRTDocument = false;
          this.isResidensi = false;
          this.isSuratIjinAtasan = false;
          this.loading = false;
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
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.eprtAndTpaModal.show();
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 28) {
      this.userService.getDocumentStudy(`?registration_number=${this.registration_number}&document_type_id=28`).subscribe(response => {
        if (response.data.length !== 0) {
          this.haveDocumentData = true;
          this.documentTypeStudy = response.data[0].document_type_id;
          this.isCoPromotor = false;
          this.isPromotor = false;
          this.isIPKDocument = false;
          this.isTPADocument = false;
          this.loadingDocumentCard = false;
          this.isEPRTDocument = true;
          this.isResidensi = false;
          this.isSuratIjinAtasan = false;
          this.loading = false;
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
          if (response.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
          this.eprtAndTpaModal.show();
        } else {
          this.noDataFoundAlert();
        }
      });
    }
    else if (data.document_type_id == 1 || data.document_type_id == 2 || data.document_type_id == 3 || data.document_type_id == 4 || data.document_type_id == 5) {
      this.userService.getPersonalDocumentData(`${this.participantId}&document_type_id=${data.document_type_id}`).subscribe(res => {
        if (res.data.length !== 0) {
          this.loading = false;
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
          if (res.data[0].document_url !== null) {
            this.haveDocumentPersonal = true;
          } else {
            this.haveDocumentPersonal = false;
          }
          if (res.data[0].document_status == 'approved') {
            this.approvedStatus = true;
          } else {
            this.approvedStatus = false;
          }
        } else {
          this.noDataFoundAlert();
        }
      });
    }
  }

  getTablePublication() {
    this.loadTablePublication = true;
    this.userService.getDocumentPublication(`?participant_id=${this.participantId}`).subscribe(response => {
      this.tableDataPublication = response;
      this.totalRecord = response.length;
      this.loadTablePublication = false;
    }, err => {
      this.loadError();
      this.loadTablePublication = false;
    });
  }

  loadPublicationDataDetails(data) {
    this.loading = false;
    this.docid = data.id;
    this.documentPublicationTypeId = data.document_type_id;
    this.getPublicationPositionLists();
    this.getPublicationTypeLists();
    this.publicationID = data.document_id;
    this.selectedWriterPosition = data.publication_writer_position_id && data.publication_writer_position_id.toString();
    this.selectedPublicationType = data.publication_type_id && data.publication_type_id.toString();
    this.publikasiForm.patchValue({ name: data.writer_name });
    this.publikasiForm.patchValue({ title: data.title });
    this.publikasiForm.patchValue({ publication_date: data.publish_date });
    this.publikasiForm.patchValue({ link: data.publication_link });
    this.haveLinkPublication = true;
    this.publikasiModals.show();
  }

  loadDetailReportCardFileData(registration_number) {
    this.loadtableReportCardData = true;
    this.userService.getReportCardData(`registration_number=${registration_number}&document_type_id=7`).subscribe(response => {
      this.tableData2 = response.data;
      this.loadtableReportCardData = false;
      if (response.data.length !== 0) {
        this.noDataDocument = false;
      } else {
        this.noDataDocument = true;
      }
    }, err => {
      this.loadError();
      this.loadtableReportCardData = false;
    });
  }

  loadDetailCertificateFileData(registration_number) {
    this.loadtableCertificateData = true;
    this.userService.getDocumentCertificateData(`registration_number=${registration_number}`).subscribe(response => {
      this.tableData3 = response.data;
      this.loadtableCertificateData = false;
      if (response.data.length !== 0) {
        this.noDataDocument = false;
      } else {
        this.noDataDocument = true;
      }
    }, err => {
      this.loadError();
      this.loadtableCertificateData = false;
    });
  }

  submitReportApprovedDocument(data) {
    Swal.fire({
      title: this.confirmation,
      text: this.approve,
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
        const payload = {
          document_id: data.document_id,
          approval_final_status: 1
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.loadDetailReportCardFileData(this.registration_number);
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitRejectReportApprovedDocument(data) {
    Swal.fire({
      title: this.confirmation,
      text: this.rejected,
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
        const payload = {
          document_id: data.document_id,
          approval_final_status: 'false'
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.loadDetailReportCardFileData(this.registration_number);
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitCertificateApprovedDocument(data) {
    Swal.fire({
      title: this.confirmation,
      text: this.approve,
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
        const payload = {
          document_id: data.document_id,
          approval_final_status: 1
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.loadDetailCertificateFileDataTable(this.registration_number);
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitRejectCertificateApprovedDocument(data) {
    Swal.fire({
      title: this.confirmation,
      text: this.rejected,
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
        const payload = {
          document_id: data.document_id,
          approval_final_status: 'false'
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.loadDetailCertificateFileDataTable(this.registration_number);
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitStudyDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.approve,
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
        const payload = {
          document_id: this.docid,
          approval_final_status: 1
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.closeEprtTpaModals();
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitRejectStudyDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.rejected,
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
        const payload = {
          document_id: this.docid,
          approval_final_status: 'false'
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.closeEprtTpaModals();
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitIjazahDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.approve,
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
        const payload = {
          document_id: this.docid,
          approval_final_status: 1
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.closeIjazahModals();
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitIjazahRejectedDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.rejected,
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
        const payload = {
          document_id: this.docid,
          approval_final_status: 'false'
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.closeIjazahModals();
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitApprovalTranscriptDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.approve,
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
        const payload = {
          document_id: this.documentTranscriptId,
          approval_final_status: 1
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.closeTranscriptModals();
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitRejectTranscriptDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.rejected,
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
        const payload = {
          document_id: this.documentTranscriptId,
          approval_final_status: 'false'
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.closeTranscriptModals();
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitApprovalParticipantDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.approve,
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
        const payload = {
          document_id: this.documentidPersonal,
          approval_final_status: 1
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.documentRequirementModalClose();
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitRejectParticipantDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.rejected,
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
        const payload = {
          document_id: this.documentidPersonal,
          approval_final_status: 'false'
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.documentRequirementModalClose();
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitApprovalAbilityDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.approve,
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
        const payload = {
          document_id: this.documentAbilitytId,
          approval_final_status: 1
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.paymentAbilityModal.hide();
            this.abilityDataForm.reset();
            this.approvedStatus = false;
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitRejectAbilityDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.rejected,
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
        const payload = {
          document_id: this.documentAbilitytId,
          approval_final_status: 'false'
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.paymentAbilityModal.hide();
            this.abilityDataForm.reset();
            this.approvedStatus = false;
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitSupportingApproved() {
    Swal.fire({
      title: this.confirmation,
      text: this.approve,
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
        const payload = {
          document_id: this.documentRecommendationId,
          approval_final_status: 1
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.recommendationLetterRequirementModal.hide();
            this.supportingDataForm.reset();
            this.approvedStatus = false;
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitSupportingRejected() {
    Swal.fire({
      title: this.confirmation,
      text: this.rejected,
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
        const payload = {
          document_id: this.documentRecommendationId,
          approval_final_status: 'false'
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.recommendationLetterRequirementModal.hide();
            this.supportingDataForm.reset();
            this.approvedStatus = false;
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitApprovalProposalDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.approve,
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
        const payload = {
          document_id: this.docid,
          approval_final_status: 1
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.proposalModal.hide();
            this.proposalForm.reset();
            this.approvedStatus = false;
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  submitRejectProposalDocument() {
    Swal.fire({
      title: this.confirmation,
      text: this.rejected,
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
        const payload = {
          document_id: this.docid,
          approval_final_status: 'false'
        }
        this.userService.updPersonalDocumentData(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.loading = false;
            this.proposalModal.hide();
            this.proposalForm.reset();
            this.approvedStatus = false;
            this.renderTable1();
            this.loadRegistrationDocumentData();
          } else {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
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
      }
    });
  }

  createCertificateDocument() {
    if (this.certificateDataForm.valid) {
      this.loading = true;
      this.formDataCertificateUpdated.append('registration_number', this.registration_number);
      this.formDataCertificateUpdated.append('document_type_id', this.documentTypeId);
      this.formDataCertificateUpdated.append('certificate_id', this.documentCertificateId);
      this.formDataCertificateUpdated.append('document_id', this.documentIdCheck);
      this.formDataCertificateUpdated.append('name', this.certificateDataForm.controls['name'].value);
      this.formDataCertificateUpdated.append('description', this.certificateDataForm.controls['description'].value);
      this.formDataCertificateUpdated.append('certificate_type_id', this.certificateDataForm.controls['certificate_type_id'].value);
      this.formDataCertificateUpdated.append('certificate_level_id', this.certificateDataForm.controls['certificate_level_id'].value);
      this.formDataCertificateUpdated.append('publication_year', this.certificateDataForm.controls['publication_year'].value);
      this.formDataCertificateUpdated.append('certificate_score', this.certificateDataForm.controls['certificate_score'].value);
      this.userService.updDocumentCertificateData(this.formDataCertificateUpdated).subscribe(res => {
        if (res != null) {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.formDataCertificateUpdated.delete('registration_number');
            this.formDataCertificateUpdated.delete('document_type_id');
            this.formDataCertificateUpdated.delete('certificate_id');
            this.formDataCertificateUpdated.delete('document_id');
            this.formDataCertificateUpdated.delete('name');
            this.formDataCertificateUpdated.delete('description');
            this.formDataCertificateUpdated.delete('certificate_type_id');
            this.formDataCertificateUpdated.delete('certificate_level_id');
            this.formDataCertificateUpdated.delete('publication_year');
            this.formDataCertificateUpdated.delete('certificate_score');
            this.formDataCertificateUpdated.delete('url');
            this.loading = false;
            this.closeCertificateModalDetail();
            this.loadDetailCertificateFileDataTable(this.registration_number)
          } else {
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
        this.loading = false;
      });
    }
  }

  createEprtTpaDocument() {
    if (this.eprtAndTpaForm.valid) {
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
            this.renderTable1();
            this.loadRegistrationDocumentData();
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
    }
  }

  createIjazahDocument() {
    if (this.ijazahForm.valid) {
      this.loading = true;
      this.formDataIjazahUpd.append('document_type_id', this.documentTypeIjazah);
      this.formDataIjazahUpd.append('document_id', this.docid);
      if (this.documentTypeId == 18) {
        this.formDataIjazahUpd.append('name', 'Ijazah S1');
        this.formDataIjazahUpd.append('participant_id', this.participantId);
      } else if (this.documentTypeId == 19) {
        this.formDataIjazahUpd.append('name', 'Ijazah S2');
        this.formDataIjazahUpd.append('participant_id', this.participantId);
      } else if (this.documentTypeId == 22) {
        this.formDataIjazahUpd.append('name', 'Portofolio');
        this.formDataIjazahUpd.append('participant_id', this.participantId);
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
          this.renderTable1();
          this.loadRegistrationDocumentData();
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
  }

  createUtbkDocument() {
    this.loading = true;
    this.formDataUtbkUpd.append('utbk_id', this.documentUtbkId);
    this.formDataUtbkUpd.append('document_id', this.documentId);
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
          this.renderTable1();
          this.loadRegistrationDocumentData();
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
  }

  createPublicationData() {
    this.loading = true;
    const payloadUpd = {
      document_publication_id: this.docid,
      participant_id: this.participantId,
      document_id: this.publicationID,
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
        this.closePublikasiModals();
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
  }

  createPersonalDocumentParticipant() {
    this.loading = true;
    if (this.participantDocumentForm.valid) {
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
            this.renderTable1();
            this.loadRegistrationDocumentData();
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
    }
  }

  createSupportingDocument() {
    this.loading = true;
    if (this.documentTypeId == 9) {
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
            this.renderTable1();
            this.loadRegistrationDocumentData();
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
    } else if (this.documentTypeId == 11) {
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
            this.renderTable1();
            this.loadRegistrationDocumentData();
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

  createProposalDocument() {
    if (this.proposalForm.valid) {
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
            this.renderTable1();
            this.loadRegistrationDocumentData();
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
    }
  }

  downloadReportCardData(data) {
    window.open(data.url);
  }

  openformRaport(data) {
    this.reportCardDetailModal.show();
    this.documentIdCheck = data.document_id;
    this.semesterID = data.semester_id;
    this.showMapel = true;
    this.reportCardDataForm.get('url').clearValidators();
    this.reportCardDataForm.get('url').updateValueAndValidity();
    this.reportCardDataForm.patchValue({ registration_number: this.registration_number });
    this.reportCardDataForm.patchValue({ document_type_id: this.documentTypeId });
    this.reportCardDataForm.patchValue({ semester_name: data.semesters });
    this.reportCardDataForm.patchValue({ range_score: data.range_score && data.range_score.toString() });
    this.reportCardDataForm.patchValue({ math: data.math });
    this.reportCardDataForm.patchValue({ physics: data.physics });
    this.reportCardDataForm.patchValue({ bahasa: data.bahasa });
    this.reportCardDataForm.patchValue({ english: data.english });
    this.reportCardDataForm.patchValue({ biology: data.biology });
    this.reportCardDataForm.patchValue({ chemical: data.chemical });
    this.reportCardDataForm.patchValue({ geography: data.geography });
    this.reportCardDataForm.patchValue({ sociological: data.sociological });
    this.reportCardDataForm.patchValue({ economy: data.economy });
    this.reportCardDataForm.patchValue({ url: '' });
    this.documentReportCardId = data.document_report_card_id;
    this.viewDocumentReport();
  }

  changeRangeScore(dataScore) {
    if (dataScore === '1') {
      this.reportCardDataForm.get('math').reset();
      this.reportCardDataForm.get('physics').reset();
      this.reportCardDataForm.get('bahasa').reset();
      this.reportCardDataForm.get('english').reset();
      this.reportCardDataForm.get('math').setValidators(Validators.compose([Validators.required, Validators.maxLength(1), Validators.min(1), Validators.max(4), Validators.pattern('^[0-9]*$')]));
      this.reportCardDataForm.get('math').updateValueAndValidity();
      this.reportCardDataForm.get('physics').setValidators(Validators.compose([Validators.required, Validators.maxLength(1), Validators.min(1), Validators.max(4), Validators.pattern('^[0-9]*$')]));
      this.reportCardDataForm.get('physics').updateValueAndValidity();
      this.reportCardDataForm.get('bahasa').setValidators(Validators.compose([Validators.required, Validators.maxLength(1), Validators.min(1), Validators.max(4), Validators.pattern('^[0-9]*$')]));
      this.reportCardDataForm.get('bahasa').updateValueAndValidity();
      this.reportCardDataForm.get('english').setValidators(Validators.compose([Validators.required, Validators.maxLength(1), Validators.min(1), Validators.max(4), Validators.pattern('^[0-9]*$')]));
      this.reportCardDataForm.get('english').updateValueAndValidity();
    } else {
      this.reportCardDataForm.get('math').reset();
      this.reportCardDataForm.get('physics').reset();
      this.reportCardDataForm.get('bahasa').reset();
      this.reportCardDataForm.get('english').reset();
      this.reportCardDataForm.get('math').setValidators(Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(10), Validators.max(100), Validators.pattern('^[0-9]*$')]));
      this.reportCardDataForm.get('math').updateValueAndValidity();
      this.reportCardDataForm.get('physics').setValidators(Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(10), Validators.max(100), Validators.pattern('^[0-9]*$')]));
      this.reportCardDataForm.get('physics').updateValueAndValidity();
      this.reportCardDataForm.get('bahasa').setValidators(Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(10), Validators.max(100), Validators.pattern('^[0-9]*$')]));
      this.reportCardDataForm.get('bahasa').updateValueAndValidity();
      this.reportCardDataForm.get('english').setValidators(Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(10), Validators.max(100), Validators.pattern('^[0-9]*$')]));
      this.reportCardDataForm.get('english').updateValueAndValidity();
    }
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

  loadRangeScoreDataFilter() {
    this.loadFilter = true;
    this.userService.getRangeScoreData().subscribe((filterArray) => {
      const dataRangeScore = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].name
        };
        dataRangeScore.push(x);
        this.listRangeScore = dataRangeScore;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
    this.loading = false;
  }

  createReportCardDocument() {
    this.loading = true;
    if (this.documentTypeId == 7) {
      this.formDataUpdate.append('registration_number', this.registration_number);
      this.formDataUpdate.append('document_type_id', this.documentTypeId);
      this.formDataUpdate.append('report_id', this.documentReportCardId);
      this.formDataUpdate.append('document_id', this.documentIdCheck);
      this.formDataUpdate.append('semester_id', this.semesterID);
      this.formDataUpdate.append('physics', this.reportCardDataForm.controls['physics'].value ? this.reportCardDataForm.controls['physics'].value : 0);
      this.formDataUpdate.append('math', this.reportCardDataForm.controls['math'].value ? this.reportCardDataForm.controls['math'].value : 0);
      this.formDataUpdate.append('bahasa', this.reportCardDataForm.controls['bahasa'].value ? this.reportCardDataForm.controls['bahasa'].value : 0);
      this.formDataUpdate.append('english', this.reportCardDataForm.controls['english'].value ? this.reportCardDataForm.controls['english'].value : 0);
      this.formDataUpdate.append('economy', this.reportCardDataForm.controls['economy'].value ? this.reportCardDataForm.controls['economy'].value : 0);
      this.formDataUpdate.append('sociological', this.reportCardDataForm.controls['sociological'].value ? this.reportCardDataForm.controls['sociological'].value : 0);
      this.formDataUpdate.append('geography', this.reportCardDataForm.controls['geography'].value ? this.reportCardDataForm.controls['geography'].value : 0);
      this.formDataUpdate.append('chemical', this.reportCardDataForm.controls['chemical'].value ? this.reportCardDataForm.controls['chemical'].value : 0);
      this.formDataUpdate.append('biology', this.reportCardDataForm.controls['biology'].value ? this.reportCardDataForm.controls['biology'].value : 0);

      this.userService.updDocumentReportCardData(this.formDataUpdate).subscribe(res => {
        if (res != null) {
          if (res.status == 'Success') {
            this.formDataUpdate.delete('registration_number');
            this.formDataUpdate.delete('document_type_id');
            this.formDataUpdate.delete('report_id');
            this.formDataUpdate.delete('document_id');
            this.formDataUpdate.delete('semester_id');
            this.formDataUpdate.delete('physics');
            this.formDataUpdate.delete('math');
            this.formDataUpdate.delete('bahasa');
            this.formDataUpdate.delete('english');
            this.formDataUpdate.delete('economy');
            this.formDataUpdate.delete('geography');
            this.formDataUpdate.delete('sociological');
            this.formDataUpdate.delete('biology');
            this.formDataUpdate.delete('chemical');
            this.formDataUpdate.delete('url');
            this.formDataUpdate.delete('url');
            this.loadSuccess();
            this.reportCardDetailModal.hide();
            this.loadDetailReportCardFileData(this.registration_number);
            this.loading = false;
            this.closeRaportModalDetail();
          } else {
            this.loadError();
            this.loading = false;
          }
        } else {
          this.loadError();
          this.loading = false;
        }
      }, (reason) => {
        this.loadError();
        this.loading = false;
      });
    }
    else if (this.documentTypeId == 8 || this.documentTypeId == 23 || this.documentTypeId == 24) {
      if (this.transcriptDataForm.valid) {
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
              this.renderTable1();
              this.loadRegistrationDocumentData();
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
      }
    }
  }

  closeTranscriptModals() {
    this.transcriptRequirementModal.hide();
    this.isTranscript = false;
    this.transcriptDataForm.reset();
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

  loadCertificateDetailFileData(data) {
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
    this.certificateDetailModal.show();
  }

  downloadCertificateData(data) {
    window.open(data.certificate_url);
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
          this.formDataCertificateUpdated.append('url', elem.files[0]);
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

  uploadReportCardFile(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png' || fileType == 'doc' || fileType == 'docx'
      ) {
        if (size < 2000000) {
          this.formDataUpdate.append('url', elem.files[0]);
        } else {
          this.errSize = true;
          this.reportCardDataForm.get('url').patchValue('');
        }
      } else {
        this.errType = true;
        this.reportCardDataForm.get('url').patchValue('');
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
          this.formDataStudyUpd.append('url', elem.files[0]);
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

  uploadIjazahDocument(event) {
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
          this.formDataIjazahUpd.append('url', elem.files[0]);
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
          this.formData3Updated.append('url', elem.files[0]);
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
          this.formDataPersonalUpd.delete('url');
          this.formDataPersonalUpd.append('url', elem.files[0]);
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
          this.formDataAbilityUpd.append('url', elem.files[0]);
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
          this.formData2Update.append('url', elem.files[0]);
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
          this.formDataUtbkUpd.append('url', elem.files[0]);
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
          this.formDataProposalUpd.append('url', elem.files[0]);

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

  renderTable1(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
    });
  }

  closeRaportModalDetail() {
    this.reportCardDetailModal.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  closeCertificateModalDetail() {
    this.certificateDetailModal.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  closeUtbkModals() {
    this.utbkForm.reset();
    this.utbkModals.hide();
    this.dataUtbkUrl = [];
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

  closeIjazahModals() {
    this.ijazahModals.hide();
    this.ijazahForm.reset();
    this.isIjazahS1 = false;
    this.isIjazahS2 = false;
    this.isPortofolio = false;
  }

  closePublikasiModals() {
    this.publikasiForm.reset();
    this.publikasiModals.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  documentRequirementModalClose() {
    this.documentRequirementModal.hide();
    this.participantDocumentForm.reset();
    !this.haveDocumentPersonal;
  }

  noDataFoundAlert() {
    this.loading = false;
    this.loadingDocumentCard = false;
    Swal.fire({
      title: 'Info',
      text: 'Tidak ada data ditemukan',
      type: 'error'
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
}
