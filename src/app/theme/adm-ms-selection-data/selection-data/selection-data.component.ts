import { Component, OnInit, ViewChild, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe, formatDate, Location } from '@angular/common';
import Swal from 'sweetalert2';
import { forEach, identity } from 'underscore';
import { data } from 'jquery';
import { WizardComponent } from 'ng2-archwizard/dist';
import * as moment from 'moment/moment';
import * as _ from 'underscore';
@Component({
  selector: 'app-selection-data',
  templateUrl: './selection-data.component.html',
  styleUrls: ['./selection-data.component.scss']
})
export class SelectionDataComponent implements OnInit {
  @ViewChild(WizardComponent, { static: true }) public wizard: WizardComponent;
  @ViewChild('examLocModal', { static: true }) public examLocModal: any;
  @ViewChild('cbtModals', { static: true }) public cbtModals: any;
  @ViewChild('cbtDetailsModals', { static: true }) public cbtDetailsModals: any;
  @ViewChild('cbtSessionModals', { static: true }) public cbtSessionModals: any;
  @ViewChild('psikotestModals', { static: true }) public psikotestModals: any;
  @ViewChild('interviewModals', { static: true }) public interviewModals: any;
  @ViewChild('tpaModals', { static: true }) public tpaModals: any;
  @ViewChild('examTypeModals', { static: true }) public examTypeModals: any;
  @ViewChild('examTimeModal', { static: true }) public examTimeModal: any;
  @ViewChild('deleteExamTimeModal', { static: true }) public deleteExamTimeModal: any;
  @ViewChild('regStepModal', { static: true }) public regStepModal: any;
  @ViewChild('documentRequirementsModal', { static: true }) public documentRequirementsModal: any;
  @ViewChild('pinPriceDataModal', { static: true }) public pinPriceDataModal: any;
  @ViewChild('studyProgramDataModal', { static: true }) public studyProgramDataModal: any;
  @ViewChild('studyProgramMappingData', { static: true }) public studyProgramMappingData: any;
  public pageType: string;
  public pageTypeInit: string;
  public id: string;
  public activestatusid: string;
  public resetWizard: boolean;
  public checks: boolean;
  public checksTechnic: boolean;
  public checksTechnic2: boolean;
  public formDetailStep1: FormGroup;
  public examLocMappingDataForm: FormGroup;
  public examTimeMappingDataForm: FormGroup;
  public mappingStudyProgramForm: FormGroup;
  public registrationStepForm: FormGroup;
  public examCbtDataForm: FormGroup;
  public examCbtDetailsDataForm: FormGroup;
  public examTypeMappingDataForm: FormGroup;
  public examInterviewDataForm: FormGroup;
  public examPsikotestDataForm: FormGroup;
  public examTPADataForm: FormGroup;
  public documentRequirementsForm: FormGroup;
  public pinPriceForm: FormGroup;
  public studyProgramForm: FormGroup;
  public loading: boolean;
  public loadingCard: boolean;
  public loadFilter: boolean;
  public listSelectionProgram: any;
  public selectionProgram: string;
  public listCity: any;
  public city: string;
  public listExamLocation: any;
  public examLocation: string;
  public locationTime: string;
  public registrationStep: string;
  public listRegistrationStep: any;
  public documentType: string;
  public listDocumentType: any;
  public studyProgram: string;
  public listStudyProgram: any;
  public faculty: string;
  public listFaculty: any;
  public examType: string;
  public categoryId: string;
  public listExamType: any;
  public listCategoryId: Array<any>;
  public listMedical: Array<any>;
  public isLocHidden: boolean;
  public hiddenTime: boolean;
  public idSelectionPath: string;
  public toggleAll: boolean;
  public selectedData: Array<any>;
  public checkedData: Array<any>;
  public checkedTrue: boolean;
  public textValueQuota: string;
  public textValueStatus: string;
  public textValueSdp: string;
  public textValueSdpArray: any;
  public sdptamp: any;
  public textValueSdpID: any;
  public textListQuota: Array<any>;
  public checked: boolean;
  public idProdi: string;
  public arrayMapping: Array<any>;
  public listActiveStatusFilters: Array<any>;
  public type = 'default';
  public formType: any;
  public formTypeCBT: any;
  public formTypeselectionstep: any;
  public activeStatusStep3: string;
  public activeStatusStep4: string;
  public activeStatusStep5: string;
  public loc: any;
  public loadingModals: boolean;
  public examLocationSelectionAddress: any;
  @ViewChildren(DataTableDirective)
  dtElements: QueryList<DataTableDirective>;
  dtOptions: any = [];
  public dtTrigger = new Subject();
  public dtTrigger1 = new Subject();
  public dtTrigger2 = new Subject();
  public dtTrigger3 = new Subject();
  public dtTrigger4 = new Subject();
  public dtTrigger5 = new Subject();
  public dtTrigger6 = new Subject();
  public dtTrigger7 = new Subject();
  public tableExamPsikotest: Array<any>;
  public tableExamInterview: Array<any>;
  public tableExamCBT: Array<any>;
  public tableExamTPA: Array<any>;
  public tableExamCBTDetails: Array<any>;
  public tableSelectionPath: Array<any>;
  public tableDocumentReq: Array<any>;
  public tablePinPrice: Array<any>;
  public tableStudyProgram: Array<any>;
  public tableStudyProgramMapping: Array<any>;
  public loadtableExamLocData: boolean;
  public loadtableExamTimeData: boolean;
  public loadtableSelectionStepData: boolean;
  public loadtableSelectionDocumentData: boolean;
  public loadtableMappStudyProgramData: boolean;
  public loadTableMappingAllStudyProgramData: boolean;
  public isHiddenLoc: boolean;
  public loadtablePINPriceData: boolean;
  public loadTableMapping: boolean;
  public examLocationSelectionId: any;
  public statusChecked: string;
  public isTechnicChecked: string;
  public examLocId: any;
  public examTimeId: any;
  public selectionStepId: any;
  public documentSelectionId: any;
  public pinPriceId: any;
  public studyProgramId: any;
  public selectionPathId: any;
  public locationExamId: any;
  public examTimeStartDate: any;
  public examTimeEndDate: any;
  public examDate: any;
  public hideCheckBox: boolean;
  public selectedProdiMap: any;
  public selectedItems: any;
  public mappingAllId: string;
  public IDx: string;
  public statusfilter: string;
  public isMedical: string;
  public activeStatusBool: boolean;
  public isDataPinPriceActive: boolean;
  public loadtableExamTPA: boolean;
  public loadtableExamInterview: boolean;
  public loadtableExamPsikotest: boolean;
  public loadtableExamCBT: boolean;
  public formattedAmount: any;
  public session: string;
  public isTechnic: string;
  public isTechnicMapp: string;
  public listSession: Array<any>;
  public listTechnic: Array<any>;
  public isTechnicMapping: any;
  public studyProgramSelected: string;
  public examId: any;
  public loadtableExamCBTDetails: boolean;
  public isPsikotest: boolean;
  public isInterview: boolean;
  public isTPA: boolean;
  public isReport: boolean;
  public mappingTechnic: Array<any>;
  public mappingNonTechnic: Array<any>;
  public mappingUtbkScience: Array<any>;
  public mappingUtbkNonScience: Array<any>;
  public mappingTechnicId: any;
  public mappingNonTechnicId: any;
  public cbtId: any;
  public isTranscriptDocument: boolean;
  public disabledGotoMapingProdi: boolean;
  public isUtbkDocument: boolean;
  public isBackStep: boolean;
  public isApplyFilter: boolean;
  public typeCbtData: string;
  public isRaportCategory: boolean;
  public categoryMoodleId: number;
  public moodleCourseId: number;
  public moodleSectionSession1Id: number;
  public moodleSectionSession2Id: number;
  public moodleSectionSession3Id: number;
  public selectionPathName: string;
  public enableMoodleGroup: boolean;
  public sectionArrays: Array<any>;
  public isSessionOne: boolean;
  public isSessionTwo: boolean;
  public isSessionThree: boolean;
  public loadingSection: boolean;
  public dateCbt: string;
  public haveNoDataCbt: boolean;
  public moodleGroupArrays: Array<any>;
  public haveDataSessionOneTwoThree: boolean;
  public haveMoodleGroup: boolean;
  // LANG
  public confirmation: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;
  public warning: string;
  public mappingGrupText: string;
  constructor(
    public translate: TranslateService,
    private broadcasterService: BroadcasterService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private chartService: AdminManagementService,
    private currencyPipe: CurrencyPipe
  ) {
    translate.setDefaultLang(localStorage.getItem('lang'));
    this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
    this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
    this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
    this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
    this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
    this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    this.translate.get('CONTENT.warning').subscribe((l) => { this.warning = l; });
    this.translate.get('CONTENT.mapping-group-text').subscribe((l) => { this.mappingGrupText = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translate.setDefaultLang(res.lang);
      this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
      this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
      this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
      this.translate.get('CONTENT.warning').subscribe((l) => { this.warning = l; });
      this.translate.get('CONTENT.mapping-group-text').subscribe((l) => { this.mappingGrupText = l; });
    });
    this.formDetailStep1 = fb.group({
      selection_path_id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      category_id: new FormControl(''),
      // exam_type: new FormControl(''),
      active_status: new FormControl('', [Validators.required])
    });
    this.examLocMappingDataForm = fb.group({
      selection_path_id: new FormControl(''),
      exam_location_id: new FormControl(''),
    });
    this.examCbtDataForm = fb.group({
      selection_path_id: new FormControl(''),
      exam_type_id: new FormControl(''),
      exam_type: new FormControl(''),
      exam_date: new FormControl('', [Validators.required]),
      quota: new FormControl('', [Validators.required, Validators.min(0), Validators.maxLength(5), Validators.pattern('^[0-9]*$')]),
    });
    this.examCbtDetailsDataForm = fb.group({
      selection_path_id: new FormControl(''),
      session_start_time: new FormControl('', [Validators.required]),
      session_end_time: new FormControl('', [Validators.required]),
      session: new FormControl(''),
    });
    this.examTypeMappingDataForm = fb.group({
      selection_path_id: new FormControl(''),
      exam_type: new FormControl(''),
      exam_date: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      quota: new FormControl('', [Validators.required, Validators.min(1), Validators.maxLength(32767)]),
    });
    this.examInterviewDataForm = fb.group({
      selection_path_id: new FormControl(''),
      exam_type: new FormControl(''),
      exam_date: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      quota: new FormControl('', [Validators.required, Validators.min(1), Validators.maxLength(32767)]),
    });
    this.examPsikotestDataForm = fb.group({
      selection_path_id: new FormControl(''),
      exam_type: new FormControl(''),
      exam_date: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      quota: new FormControl('', [Validators.required, Validators.min(1), Validators.maxLength(32767)]),
    });
    this.examTPADataForm = fb.group({
      selection_path_id: new FormControl(''),
      exam_type: new FormControl(''),
      exam_date: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      quota: new FormControl('', [Validators.required, Validators.min(1), Validators.maxLength(32767)]),
    });
    this.examTimeMappingDataForm = fb.group({
      selection_path_id: new FormControl(''),
      session: new FormControl(''),
      exam_date: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      quota: new FormControl('', [Validators.required, Validators.min(1), Validators.maxLength(32767)]),
    });
    this.registrationStepForm = fb.group({
      selection_path_id: new FormControl(''),
      registration_step_id: new FormControl(''),
      ordering: new FormControl('', [Validators.required, Validators.min(1), Validators.maxLength(32767)]),
      active_status: new FormControl('', [Validators.required]),
    });
    this.documentRequirementsForm = fb.group({
      selection_path_id: new FormControl(''),
      document_type_id: new FormControl(''),
      active_status: new FormControl('', [Validators.required]),
      mandatory_doc: new FormControl('', [Validators.required]),
      math: new FormControl(''),
      eng: new FormControl(''),
      bahasa: new FormControl(''),
      math2: new FormControl(''),
      eng2: new FormControl(''),
      bahasa2: new FormControl(''),
      physics: new FormControl(''),
      biology: new FormControl(''),
      chemicals: new FormControl(''),
      geography: new FormControl(''),
      sosiology: new FormControl(''),
      economy: new FormControl(''),
      sejarah: new FormControl(''),
      is_technic: new FormControl(''),
      is_input_nilai: new FormControl(''),
    });
    this.mappingStudyProgramForm = fb.group({
      selection_path_id: new FormControl(''),
      is_technic_mapp: new FormControl(''),
      quota: new FormControl(''),
      sdp: new FormControl('', Validators.required),
      study_program: new FormControl(''),
      active_status: new FormControl(''),
    });
    this.listSession = [
      {
        value: '1',
        label: 'Sesi 1'
      },
      {
        value: '2',
        label: 'Sesi 2'
      },
      {
        value: '3',
        label: 'Sesi 3'
      }
    ];
    this.listTechnic = [
      {
        value: '1',
        label: 'Teknik'
      },
      {
        value: '2',
        label: 'Non Teknik'
      },
    ];
    this.listCategoryId = [
      {
        value: '1',
        label: 'Rapor'
      },
      {
        value: '2',
        label: 'CBT'
      }
    ];
    this.listMedical = [
      {
        value: '0',
        label: 'Non Medis'
      },
      {
        value: '1',
        label: 'Medis'
      }
    ];
    this.pageType = '';
    this.pageTypeInit = '';
    this.resetWizard = false;
    this.loading = false;
    this.loadingCard = false;
    this.loadFilter = false;
    this.loadtableExamTimeData = false;
    this.loadtableSelectionStepData = false;
    this.loadtableSelectionDocumentData = false;
    this.loadtableMappStudyProgramData = false;
    this.loadTableMappingAllStudyProgramData = false;
    this.loadtablePINPriceData = false;
    this.loadTableMapping = false;
    this.checks = true;
    this.checksTechnic = false;
    this.checksTechnic2 = false;
    this.isDataPinPriceActive = false;
    this.isHiddenLoc = false;
    this.isPsikotest = false;
    this.isInterview = false;
    this.isTPA = false;
    this.isReport = false;
    this.isTranscriptDocument = false;
    this.isUtbkDocument = false;
    this.isTranscriptDocument = false;
    this.isReport = false;
    this.isBackStep = false;
    this.isApplyFilter = false;
    this.haveDataSessionOneTwoThree = false;
    this.haveMoodleGroup = false;
    this.tableExamCBT = [];
    this.tableExamPsikotest = [];
    this.tableExamInterview = [];
    // this.tableExamCBTDetails = [];
    this.tableDocumentReq = [];
    this.tableExamTPA = [];
    this.tablePinPrice = [];
    this.tableStudyProgram = [];
    this.mappingTechnic = [
      {
        math: false,
        physics: false,
        biology: false,
        chemical: false,
        bahasa: false,
        english: false,
        economy: false,
        geography: false,
        sociological: false,
        historical: false
      }
    ];
    this.mappingNonTechnic = [
      {
        math: false,
        physics: false,
        biology: false,
        chemical: false,
        bahasa: false,
        english: false,
        economy: false,
        geography: false,
        sociological: false,
        historical: false
      }
    ];
    this.mappingUtbkScience = [
      {
        math: false,
        physics: false,
        biology: false,
        chemical: false,
        economy: false,
        geography: false,
        sociological: false,
        historical: false
      }
    ];
    this.mappingUtbkNonScience = [
      {
        math: false,
        physics: false,
        biology: false,
        chemical: false,
        economy: false,
        geography: false,
        sociological: false,
        historical: false
      }
    ];
    this.id = this.route.snapshot.paramMap.get('id');
    this.activestatusid = this.route.snapshot.paramMap.get('activestatusid');
    this.listActiveStatusFilters = [
      {
        label: 'ALL',
        value: '',
      },
      {
        label: 'ACTIVE',
        value: '1',
      },
      {
        label: 'NONACTIVE',
        value: '0',
      }
    ];
  }

  get fd() {
    return this.formDetailStep1.controls;
  }
  get fcbt() {
    return this.examCbtDataForm.controls;
  }
  get fcbtdet() {
    return this.examCbtDetailsDataForm.controls;
  }
  get fps() {
    return this.examPsikotestDataForm.controls;
  }
  get fint() {
    return this.examInterviewDataForm.controls;
  }
  get ftpa() {
    return this.examTPADataForm.controls;
  }
  get fet() {
    return this.examTimeMappingDataForm.controls;
  }
  get frs() {
    return this.registrationStepForm.controls;
  }
  get fdr() {
    return this.documentRequirementsForm.controls;
  }
  get fpp() {
    return this.pinPriceForm.controls;
  }
  get fsp() {
    return this.studyProgramForm.controls;
  }

  ngOnInit() {
    this.pageType = this.id ? 'edit' : 'create';
    this.pageTypeInit = this.id ? 'edit' : 'create';
    this.pinPriceForm = this.fb.group({
      selection_path_id: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      maks_study_program: new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.max(5), Validators.maxLength(1)])),
      active_status: new FormControl('', [Validators.required]),
      is_medical: new FormControl('', [Validators.required])
    });
    this.studyProgramForm = this.fb.group({
      selection_path_id: new FormControl(''),
      program_study_id: new FormControl('', [Validators.required]),
      is_technic: new FormControl('', [Validators.required]),
      minimum_donation: new FormControl('', [Validators.required]),
      quota: new FormControl('', [Validators.required]),
      active_status: new FormControl('', [Validators.required]),
    });
    this.dtOptions[0] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'Data yang anda cari tidak ditemukan!',
        emptyTable: 'Data tidak ditemukan!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading . . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => { }
    };
    this.dtOptions[1] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'Data yang anda cari tidak ditemukan!',
        emptyTable: 'Data tidak ditemukan!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading . . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => { }
    };
    this.dtOptions[2] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'Data yang anda cari tidak ditemukan!',
        emptyTable: 'Data tidak ditemukan!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading . . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => { }
    };
    this.dtOptions[3] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'Data yang anda cari tidak ditemukan!',
        emptyTable: 'Data tidak ditemukan!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading . . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => { }
    };
    this.dtOptions[4] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'Data yang anda cari tidak ditemukan!',
        emptyTable: 'Data tidak ditemukan!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading . . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => { }
    };
    this.dtOptions[5] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'Data yang anda cari tidak ditemukan!',
        emptyTable: 'Data tidak ditemukan!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading . . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => { }
    };
    this.dtOptions[6] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'Data yang anda cari tidak ditemukan!',
        emptyTable: 'Data tidak ditemukan!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading . . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => { }
    };
    this.dtOptions[7] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'Data yang anda cari tidak ditemukan!',
        emptyTable: 'Data tidak ditemukan!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading . . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => { }
    };
    this.dtOptions[8] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'Data yang anda cari tidak ditemukan!',
        emptyTable: 'Data tidak ditemukan!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading . . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => { }
    };
    this.dtOptions[9] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'Data yang anda cari tidak ditemukan!',
        emptyTable: 'Data tidak ditemukan!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading . . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      initComplete: () => { }
    };
    // this.dtTrigger.next();
    // this.dtTrigger1.next();
    // this.dtTrigger2.next();
    // this.dtTrigger3.next();
    // this.dtTrigger4.next();
    // this.dtTrigger5.next();
    // this.dtTrigger6.next();
    // this.dtTrigger7.next();
    // this.dtTrigger8.next();
    // this.dtTrigger9.next();
    // filtering list dropdown
    this.loadRegistrationStepData();
    this.loadDocumentTypeData();
    this.loadFacultyData();
    // this.loadExamTypeDataFilter();
    this.pageType === 'edit' && this.loadDetailSelectionPath();
  }

  addTechnic(val) {
    this.isTechnicMapp = val.value;
  }

  onDeselected(val) {
    switch (val) {
      case 'activeStatusStep3':
        this.activeStatusStep3 = '1';
    }
  }

  loadCityData() { // Pilihan Kota
    this.loadFilter = true;
    this.chartService.getCityData('').subscribe((filterArray) => {
      const dataCity = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id,
          label: filterArray[i].city
        };
        dataCity.push(x);
        this.listCity = dataCity;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadExamDetailData() { // Pilihan Lokasi Ujian
    this.loadFilter = true;
    const data = {
      filter: ''
    };
    this.chartService.getExamLocationData(data).subscribe((filterArray) => {
      const dataExamLocation = [];
      let x: any;
      for (let i = 0; i < filterArray.data.length; i++) {
        x = {
          value: filterArray.data[i].id,
          label: filterArray.data[i].location,
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

  loadRegistrationStepData() { // Pilihan Registration Step
    this.loadFilter = true;
    this.chartService.getRegistrationStepData().subscribe((filterArray) => {
      const dataRegistrationStep = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].step
        };
        dataRegistrationStep.push(x);
        this.listRegistrationStep = dataRegistrationStep;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadDocumentTypeData() { // Pilihan Tipe-tipe Dokumen
    this.loadFilter = true;
    const data = {
      nama_dokumen: ''
    };
    this.chartService.getDocumentTypeData(data).subscribe((filterArray) => {
      const dataDocumentType = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].name,
        };
        dataDocumentType.push(x);
        this.listDocumentType = dataDocumentType;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadStudyProgramData() { // Pilihan Registration Step
    this.loadFilter = true;
    this.chartService.getProgramStudyDataWithParams(`?selection_path_id=${this.id}&show_all=1`).subscribe((filterArray) => {
      const dataStudyProgram = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].study_program_name
        };
        dataStudyProgram.push(x);
        this.listStudyProgram = dataStudyProgram;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadFacultyData() { // Pilihan Registration Step
    this.loadFilter = true;
    this.chartService.getFacultyData().subscribe((filterArray) => {
      const dataFaculty = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].faculty_name
        };
        dataFaculty.push(x);
        this.listFaculty = dataFaculty;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadExamDetailAdressData() { // Pilihan Lokasi Ujian
    this.loadFilter = true;
    const data = {
      filter: ''
    };
    this.chartService.getExamLocationData(data).subscribe((result) => {
      this.examLocationSelectionAddress = result.address;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadExamTypeDataFilter() { // Pilihan Selection Program
    this.loadFilter = true;
    this.chartService.getExamTypeData().subscribe((filterArray) => {
      const dataExamType = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].name
        };
        dataExamType.push(x);
        this.listExamType = dataExamType;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  // loadCategoryIdDataFilter() { // Pilihan CategoryId
  //   this.loadFilter = true;
  //   this.chartService.getCategoryIdData().subscribe((filterArray) => {
  //     const dataCategoryId = [];
  //     let x: any;
  //     for (let i = 0; i < filterArray.length; i++) {
  //       x = {
  //         value: filterArray[i].id.toString(),
  //         label: filterArray[i].name
  //       };
  //       dataCategoryId.push(x);
  //       this.listCategoryId = dataCategoryId;
  //     }
  //     this.loadFilter = false;
  //   }, err => {
  //     this.loadError();
  //     this.loadFilter = false;
  //   });
  // }

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

  changeSelectionTestType() {
    if (this.examType !== '') {
      if (this.examType === '1') {
        this.isLocHidden = false;
        this.hiddenTime = false;
      } else if (this.examType === '2') {
        this.isLocHidden = true;
        this.hiddenTime = false;
      } else {
        this.isLocHidden = true;
        this.hiddenTime = true;
      }
    } else {
      this.isLocHidden = true;
    }
  }

  examStatusChanged(event) {
    const value = event.value;
    if (value == '1') {
      this.isRaportCategory = true;
    } else {
      this.isRaportCategory = false;
    }
  }

  // for Edit mode step 1
  loadDetailSelectionPath() {
    this.loadingCard = true;
    if (this.id == '0') {
      this.pageType = 'input';
      this.loadingCard = false;
    }
    else if (this.id != '0') {
      this.pageType = 'edit';
      this.loadStudyProgramData();
      this.chartService.getSelectionPathAdmin(`?selection_path_id=${this.id}&active_status=${this.activestatusid === '1' ? true : false}`).subscribe(result => {
        if (result) {
          this.loadingCard = false;
          const {
            selection_path_id,
            category_id,
            name,
            exam_status_id,
            active_status,
            active_status_name,
          } = result[0];
          this.formDetailStep1.patchValue({ name: name });
          this.selectionPathName = name;
          if (active_status === '1') {
            this.formDetailStep1.patchValue({ active_status: '1' });
          } else if (active_status === '0') {
            this.formDetailStep1.patchValue({ active_status: '0' });
          } else {
            this.formDetailStep1.patchValue({ active_status: '0' });
          }
          this.examType = exam_status_id && exam_status_id.toString();
          if (exam_status_id == 1) {
            this.isRaportCategory = true;
          } else {
            this.isRaportCategory = false;
          }
        }
        this.loadingCard = false;
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
  }

  // edit step 2 location
  openFormExamLocData(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.loading = false;
      this.loadExamDetailData();
      this.id = data.selection_path_id;
      this.examLocMappingDataForm.patchValue({ selection_path_id: this.id });
      this.locationTime = data.location_exam_id && data.location_exam_id.toString();
    } else {
      this.loadExamDetailData();
      this.examLocModal.show();
      this.examLocMappingDataForm.reset();
    }
    this.examLocModal.show();
  }

  openFormCBTData(data, type) {
    this.formType = type;
    if (type === 'view') {
      this.examId = data.id;
      this.loading = false;
      this.id = data.selection_path_id;
      this.cbtModals.show();
      this.examCbtDataForm.patchValue({ exam_type: data.exam_type });
      this.examCbtDataForm.patchValue({ exam_date: data.exam_date });
      this.examCbtDataForm.patchValue({ start_date: data.exam_start_date });
      this.examCbtDataForm.patchValue({ quota: data.quota });
    } else {
      this.examCbtDataForm.patchValue({ exam_type: 'CBT' });
      this.cbtModals.show();
      this.loading = false;
    }
  }

  closeModalCBT() {
    this.examCbtDataForm.reset();
    this.cbtModals.hide();
  }

  changeDateCbt(evnt) {
    this.loading = true;
    const x = new Date(evnt.target.value);
    const dateMonth = x.getMonth() + 1;
    const dateYear = x.getFullYear();
    const dateYearMonth = dateYear + ' ' + dateMonth;
    this.chartService.getExamTimeDatas(`selection_path_id=${this.id}&active_status=1&exam_type_id=1`).subscribe(response => {
      if (response.data !== 0) {
        const getYearMonth = _.findWhere(response.data, { exam_month_year: dateYearMonth });
        if (getYearMonth !== undefined) {
          this.haveNoDataCbt = true;
          Swal.fire({
            position: 'center',
            type: 'warning',
            title: 'Perhatian!',
            text: 'Anda telah memiliki data CBT di bulan dan tahun yang sama. Silakan menambahkan data di bulan selanjutnya atau menghapus data yang sudah ada!',
            showConfirmButton: true,
          });
          this.examCbtDataForm.controls.exam_date.reset();
          this.loading = false;
        } else {
          this.haveNoDataCbt = false
          this.loading = false;
        }
      }
    });
  }

  openDetailsCBTDatas(data) {
    this.examId = data.id;
    this.loadDetailsCBTData(this.examId);
    this.cbtDetailsModals.show();
  }

  loadMoodleCourse() {
    this.chartService.getMoodleCourse(`?selection_path_id=${this.id}&path_exam_detail_id=${this.examId}`).subscribe(resp => {
      if (resp.length !== 0) {
        this.moodleCourseId = resp[0].id;
        const moodleCourseId = resp[0].id;
        this.loadSectionId(moodleCourseId);
        this.loadMoodleGroup();
      }
    });
  }

  loadMoodleGroup() {
    this.chartService.getMoodleGroup(`?moodle_course_id=${this.moodleCourseId}`).subscribe(resp => {
      if (resp.length !== 0) {
        this.haveMoodleGroup = true;
        this.loadtableExamCBTDetails = false;
      } else {
        this.haveMoodleGroup = false;
        this.loadtableExamCBTDetails = false;
      }
    });
  }

  closeCbtModalsDetails() {
    this.cbtDetailsModals.hide();
    this.haveDataSessionOneTwoThree = false;
    this.enableMoodleGroup = false;
    this.haveMoodleGroup = false;
  }

  openDetailsCBTForm(data, type) {
    this.cbtId = data.id;
    this.typeCbtData = data.type;
    this.formType = type;
    if (this.formType == 'edit') {
      this.loading = false;
      this.examCbtDetailsDataForm.patchValue({ session: data.type });
      this.examCbtDetailsDataForm.patchValue({ session_start_time: data.session_start });
      this.examCbtDetailsDataForm.patchValue({ session_end_time: data.session_end });
      this.cbtSessionModals.show();
    } else {
      this.loading = false;
      this.examCbtDetailsDataForm.patchValue({ session: data.type });
      this.examCbtDetailsDataForm.patchValue({ session_start_time: data.session_start });
      this.examCbtDetailsDataForm.patchValue({ session_end_time: data.session_end });
      this.cbtSessionModals.show();
    }
  }

  closeDetailsCBTSession() {
    this.cbtSessionModals.hide();
    this.examCbtDetailsDataForm.reset();
    this.typeCbtData = '';
    document.querySelector('body').classList.add('modal-open');
  }

  loadDetailsCBTData(id) {
    this.loadtableExamCBTDetails = true;
    this.chartService.getSessionPathExamDetails(`?selection_path_id=${this.id}&active_status=1&exam_type_id=1&id=${id}`).subscribe(response => {
      this.tableExamCBTDetails = response ? response : [];
      if (this.isRaportCategory) {
        this.loadingSection = false;
      } else {
        if (response.length != 0) {
          this.loadMoodleCourse();
        } else {
          this.loadingSection = false;
        }
      }
      this.loadtableExamCBTDetails = false;
      this.loadingSection = false;
    }, err => {
      this.loadtableExamCBTDetails = false;
      this.loadingSection = false;
    });
  }

  openFormTypeDataPsikotest(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.loading = false;
      this.examId = data.id;
      this.id = data.selection_path_id;
      this.examPsikotestDataForm.patchValue({ exam_type: data.exam_type });
      this.examPsikotestDataForm.patchValue({ exam_date: data.exam_date });
      this.examPsikotestDataForm.patchValue({ start_date: data.exam_start_date });
      this.examPsikotestDataForm.patchValue({ end_date: data.exam_end_date });
      this.examPsikotestDataForm.patchValue({ quota: data.quota });
      this.psikotestModals.show();
    } else {
      this.examPsikotestDataForm.patchValue({ exam_type: 'Psikotest' });
      this.psikotestModals.show();
      this.loading = false;
    }
  }

  closePsikotestModals() {
    this.examPsikotestDataForm.reset();
    this.psikotestModals.hide();
  }

  openFormTypeDataInterview(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.loading = false;
      this.examId = data.id;
      this.id = data.selection_path_id;
      this.examInterviewDataForm.patchValue({ exam_type: data.exam_type });
      this.examInterviewDataForm.patchValue({ exam_date: data.exam_date });
      this.examInterviewDataForm.patchValue({ start_date: data.exam_start_date });
      this.examInterviewDataForm.patchValue({ end_date: data.exam_end_date });
      this.examInterviewDataForm.patchValue({ quota: data.quota });
      this.interviewModals.show();
    } else {
      this.loading = false;
      this.examInterviewDataForm.patchValue({ exam_type: 'Interview' });
      this.interviewModals.show();
    }
  }

  closeInterviewModals() {
    this.examInterviewDataForm.reset();
    this.interviewModals.hide();
  }

  openFormTypeDataTPA(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.examId = data.id;
      this.loading = false;
      this.id = data.selection_path_id;
      this.examTPADataForm.patchValue({ exam_type: data.exam_type });
      this.examTPADataForm.patchValue({ exam_date: data.exam_date });
      this.examTPADataForm.patchValue({ start_date: data.exam_start_date });
      this.examTPADataForm.patchValue({ end_date: data.exam_end_date });
      this.examTPADataForm.patchValue({ quota: data.quota });
      this.tpaModals.show();
    } else {
      this.loading = false;
      this.examTPADataForm.patchValue({ exam_type: 'TPA' });
      this.tpaModals.show();
    }
  }

  closeTPAModals() {
    this.examTPADataForm.reset();
    this.tpaModals.hide();
  }

  // edit step 2 time
  openFormExamTimeData(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.loadExamDetailData();
      this.examTimeId = data.id;
      this.examTimeMappingDataForm.patchValue({ selection_path_id: this.id });
      this.examTimeMappingDataForm.patchValue({ exam_date: data.exam_date });
      this.examTimeMappingDataForm.patchValue({ start_date: data.exam_start_date });
      this.examTimeMappingDataForm.patchValue({ end_date: data.exam_end_date });
      this.examTimeMappingDataForm.patchValue({ quota: data.quota });
      this.session = data && data.session.toString();
    } else {
      this.loadExamDetailData();
      this.examTimeModal.show();
      this.session = '';
      this.examTimeMappingDataForm.reset();
    }
    this.examTimeModal.show();
  }

  // edit step 3
  openFormDetailRegStep(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.selectionStepId = data.id;
      this.registrationStepForm.patchValue({ registration_step_id: data.step_id });
      this.registrationStepForm.patchValue({ ordering: data.ordering });
      if (data.active_status === '1') {
        this.registrationStepForm.patchValue({ active_status: '1' });
      } else {
        this.registrationStepForm.patchValue({ active_status: '0' });
      }
    } else {
      this.registrationStepForm.reset();
      this.regStepModal.show();
    }
    this.regStepModal.show();
  }


  // edit step 4
  openFormDocument(data, type) {
    this.formType = type;
    this.loadingModals = true;
    if (type === 'edit') {
      this.documentSelectionId = data.id;
      this.documentRequirementsForm.patchValue({ document_type_id: data.document_type_id && data.document_type_id.toString() });
      if (data.active_status === true) {
        this.documentRequirementsForm.patchValue({ active_status: '1' });
      } else {
        this.documentRequirementsForm.patchValue({ active_status: '0' });
      }
      if (data.required === true) {
        this.documentRequirementsForm.patchValue({ mandatory_doc: '1' });
      } else {
        this.documentRequirementsForm.patchValue({ mandatory_doc: '0' });
      }
      if (data.document_type_id === 7) {
        this.isReport = true;
        this.isTranscriptDocument = false;
        this.isUtbkDocument = false;
        this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
        this.documentRequirementsForm.get('is_input_nilai').clearValidators();
        this.documentRequirementsForm.controls.is_input_nilai.reset();
        this.chartService.getRaportRequirementDocument(`?selection_path_id=${this.id}&document_type_id=7&active_status=true`).subscribe(response => {
          this.mappingTechnicId = response.mapping_report_subject_path_technic.id;
          this.mappingNonTechnicId = response.mapping_report_subject_path_non_technic.id;
          this.loadingModals = false;
          if (response.mapping_report_subject_path_non_technic.math === true) {
            this.documentRequirementsForm.patchValue({ math2: '1' });
            this.mappingNonTechnic.map(x => {
              x.math = true
            });
          } else {
            this.mappingNonTechnic.map(x => {
              x.math = false
            });
          }
          if (response.mapping_report_subject_path_non_technic.bahasa === true) {
            this.documentRequirementsForm.patchValue({ bahasa2: '1' });
            this.mappingNonTechnic.map(x => {
              x.bahasa = true
            });
          } else {
            this.mappingNonTechnic.map(x => {
              x.bahasa = false
            });
          }
          if (response.mapping_report_subject_path_non_technic.english === true) {
            this.documentRequirementsForm.patchValue({ eng2: '1' });
            this.mappingNonTechnic.map(x => {
              x.english = true
            });
          } else {
            this.mappingNonTechnic.map(x => {
              x.english = false
            });
          }
          if (response.mapping_report_subject_path_non_technic.sociological === true) {
            this.documentRequirementsForm.patchValue({ sosiology: '1' });
            this.mappingNonTechnic.map(x => {
              x.sociological = true
            });
          } else if (response.mapping_report_subject_path_non_technic.sociological === false) {
            this.mappingNonTechnic.map(x => {
              x.sociological = false
            });
          }
          if (response.mapping_report_subject_path_non_technic.economy === true) {
            this.documentRequirementsForm.patchValue({ economy: '1' });
            this.mappingNonTechnic.map(x => {
              x.economy = true
            });
          } else {
            this.mappingNonTechnic.map(x => {
              x.economy = false
            });
          }
          if (response.mapping_report_subject_path_non_technic.geography === true) {
            this.documentRequirementsForm.patchValue({ geography: '1' });
            this.mappingNonTechnic.map(x => {
              x.geography = true
            });
          } else {
            this.mappingNonTechnic.map(x => {
              x.geography = false
            });
          }
          if (response.mapping_report_subject_path_technic.math === true) {
            this.documentRequirementsForm.patchValue({ math: '1' });
            this.mappingTechnic.map(x => {
              x.math = true
            });
          } else {
            this.mappingTechnic.map(x => {
              x.math = false
            });
          }
          if (response.mapping_report_subject_path_technic.english === true) {
            this.documentRequirementsForm.patchValue({ eng: '1' });
            this.mappingTechnic.map(x => {
              x.english = true
            });
          } else {
            this.mappingTechnic.map(x => {
              x.english = false
            });
          }
          if (response.mapping_report_subject_path_technic.bahasa === true) {
            this.documentRequirementsForm.patchValue({ bahasa: '1' });
            this.mappingTechnic.map(x => {
              x.bahasa = true
            });
          } else {
            this.mappingTechnic.map(x => {
              x.bahasa = false
            });
          }
          if (response.mapping_report_subject_path_technic.physics === true) {
            this.documentRequirementsForm.patchValue({ physics: '1' });
            this.mappingTechnic.map(x => {
              x.physics = true
            });
          } else {
            this.mappingTechnic.map(x => {
              x.physics = false
            });
          }
          if (response.mapping_report_subject_path_technic.chemical === true) {
            this.documentRequirementsForm.patchValue({ chemicals: '1' });
            this.mappingTechnic.map(x => {
              x.chemical = true
            });
          } else {
            this.mappingTechnic.map(x => {
              x.chemical = false
            });
          }
          if (response.mapping_report_subject_path_technic.biology === true) {
            this.documentRequirementsForm.patchValue({ biology: '1' });
            this.mappingTechnic.map(x => {
              x.biology = true
            });
          } else {
            this.mappingTechnic.map(x => {
              x.biology = false
            });
          }
          if (response.mapping_report_subject_path_technic.historical === true) {
            this.documentRequirementsForm.patchValue({ sejarah: '1' });
            this.mappingTechnic.map(x => {
              x.historical = true
            });
          } else {
            this.mappingTechnic.map(x => {
              x.historical = false
            });
          }
        });
      } else if (data.document_type_id === 25) {
        this.isUtbkDocument = false;
        this.isReport = false;
        this.isTranscriptDocument = true;
        this.loadingModals = false;
        if (data.is_value === true) {
          this.documentRequirementsForm.patchValue({ is_input_nilai: '1' });
        } else {
          this.documentRequirementsForm.patchValue({ is_input_nilai: '0' });
        }
      } else if (data.document_type_id === 12) {
        this.isUtbkDocument = true;
        this.isReport = false;
        this.isTranscriptDocument = false;
        this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
        this.documentRequirementsForm.get('is_input_nilai').clearValidators();
        this.documentRequirementsForm.controls.is_input_nilai.reset();
        this.chartService.getUtbkRequirementDocument(`?selection_path_id=${this.id}&document_type_id=12&active_status=true`).subscribe(response => {
          this.mappingTechnicId = response.mapping_utbk_path_science.id;
          this.mappingNonTechnicId = response.mapping_utbk_path_non_science.id;
          this.loadingModals = false;
          if (response.mapping_utbk_path_non_science.math === true) {
            this.documentRequirementsForm.patchValue({ math2: '1' });
            this.mappingUtbkNonScience.map(x => {
              x.math = true
            });
          } else {
            this.mappingUtbkNonScience.map(x => {
              x.math = false
            });
          }
          if (response.mapping_utbk_path_non_science.sociological === true) {
            this.documentRequirementsForm.patchValue({ sosiology: '1' });
            this.mappingUtbkNonScience.map(x => {
              x.sociological = true
            });
          } else {
            this.mappingUtbkNonScience.map(x => {
              x.sociological = false
            });
          }
          if (response.mapping_utbk_path_non_science.economy === true) {
            this.documentRequirementsForm.patchValue({ economy: '1' });
            this.mappingUtbkNonScience.map(x => {
              x.economy = true
            });
          } else {
            this.mappingUtbkNonScience.map(x => {
              x.economy = false
            });
          }
          if (response.mapping_utbk_path_non_science.geography === true) {
            this.documentRequirementsForm.patchValue({ geography: '1' });
            this.mappingUtbkNonScience.map(x => {
              x.geography = true
            });
          } else {
            this.mappingUtbkNonScience.map(x => {
              x.geography = false
            });
          }
          if (response.mapping_utbk_path_non_science.historical === true) {
            this.documentRequirementsForm.patchValue({ sejarah: '1' });
            this.mappingUtbkNonScience.map(x => {
              x.historical = true
            });
          } else {
            this.mappingUtbkNonScience.map(x => {
              x.historical = false
            });
          }
          if (response.mapping_utbk_path_science.math === true) {
            this.documentRequirementsForm.patchValue({ math: '1' });
            this.mappingUtbkScience.map(x => {
              x.math = true
            });
          } else {
            this.mappingUtbkScience.map(x => {
              x.math = false
            });
          }
          if (response.mapping_utbk_path_science.physics === true) {
            this.documentRequirementsForm.patchValue({ physics: '1' });
            this.mappingUtbkScience.map(x => {
              x.physics = true
            });
          } else {
            this.mappingUtbkScience.map(x => {
              x.physics = false
            });
          }
          if (response.mapping_utbk_path_science.chemical === true) {
            this.documentRequirementsForm.patchValue({ chemicals: '1' });
            this.mappingUtbkScience.map(x => {
              x.chemical = true
            });
          } else {
            this.mappingUtbkScience.map(x => {
              x.chemical = false
            });
          }
          if (response.mapping_utbk_path_science.biology === true) {
            this.documentRequirementsForm.patchValue({ biology: '1' });
            this.mappingUtbkScience.map(x => {
              x.biology = true
            });
          } else {
            this.mappingUtbkScience.map(x => {
              x.biology = false
            });
          }
        });
      } else {
        this.loadingModals = false;
        this.isUtbkDocument = false;
        this.isReport = false;
        this.isTranscriptDocument = false;
        this.documentRequirementsForm.get('is_input_nilai').clearValidators();
        this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
      }
    } else {
      this.loadingModals = false;
      this.documentRequirementsForm.reset();
    }
    this.documentRequirementsModal.show();
  }

  changeDocumentRequirementType(event) {
    if (event.value === '7') {
      this.isReport = true;
      this.isTranscriptDocument = false;
      this.isUtbkDocument = false;
      this.documentRequirementsForm.controls.math.reset();
      this.documentRequirementsForm.controls.eng.reset();
      this.documentRequirementsForm.controls.bahasa.reset();
      this.documentRequirementsForm.controls.math2.reset();
      this.documentRequirementsForm.controls.eng2.reset();
      this.documentRequirementsForm.controls.bahasa2.reset();
      this.documentRequirementsForm.controls.physics.reset();
      this.documentRequirementsForm.controls.biology.reset();
      this.documentRequirementsForm.controls.chemicals.reset();
      this.documentRequirementsForm.controls.geography.reset();
      this.documentRequirementsForm.controls.sosiology.reset();
      this.documentRequirementsForm.controls.economy.reset();
      this.documentRequirementsForm.controls.sejarah.reset();
      this.documentRequirementsForm.controls.active_status.reset();
      this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
      this.documentRequirementsForm.get('is_input_nilai').clearValidators();
      this.documentRequirementsForm.get('sejarah').updateValueAndValidity();
      this.documentRequirementsForm.get('sejarah').clearValidators();
      this.documentRequirementsForm.controls.is_input_nilai.reset();
      this.documentRequirementsForm.controls.is_technic.reset();
      this.documentRequirementsForm.controls.mandatory_doc.reset();
    } else if (event.value === '25') {
      this.isReport = false;
      this.isTranscriptDocument = true;
      this.isUtbkDocument = false;
      this.documentRequirementsForm.controls.mandatory_doc.reset();
      this.documentRequirementsForm.controls.active_status.reset();
      this.documentRequirementsForm.controls.is_input_nilai.reset();
      this.documentRequirementsForm.controls.is_technic.reset();
      this.documentRequirementsForm.controls.math.reset();
      this.documentRequirementsForm.controls.eng.reset();
      this.documentRequirementsForm.controls.bahasa.reset();
      this.documentRequirementsForm.controls.math2.reset();
      this.documentRequirementsForm.controls.eng2.reset();
      this.documentRequirementsForm.controls.bahasa2.reset();
      this.documentRequirementsForm.controls.physics.reset();
      this.documentRequirementsForm.controls.biology.reset();
      this.documentRequirementsForm.controls.chemicals.reset();
      this.documentRequirementsForm.controls.geography.reset();
      this.documentRequirementsForm.controls.sosiology.reset();
      this.documentRequirementsForm.controls.economy.reset();
      this.documentRequirementsForm.controls.sejarah.reset();
      this.documentRequirementsForm.controls.active_status.reset();
      this.documentRequirementsForm.get('math2').updateValueAndValidity();
      this.documentRequirementsForm.get('math2').clearValidators();
      this.documentRequirementsForm.get('bahasa2').updateValueAndValidity();
      this.documentRequirementsForm.get('bahasa2').clearValidators();
      this.documentRequirementsForm.get('eng2').updateValueAndValidity();
      this.documentRequirementsForm.get('eng2').clearValidators();
      this.documentRequirementsForm.get('math').updateValueAndValidity();
      this.documentRequirementsForm.get('math').clearValidators();
      this.documentRequirementsForm.get('bahasa').updateValueAndValidity();
      this.documentRequirementsForm.get('bahasa').clearValidators();
      this.documentRequirementsForm.get('eng').updateValueAndValidity();
      this.documentRequirementsForm.get('eng').clearValidators();
      this.documentRequirementsForm.get('physics').updateValueAndValidity();
      this.documentRequirementsForm.get('physics').clearValidators();
      this.documentRequirementsForm.get('biology').updateValueAndValidity();
      this.documentRequirementsForm.get('biology').clearValidators();
      this.documentRequirementsForm.get('chemicals').updateValueAndValidity();
      this.documentRequirementsForm.get('chemicals').clearValidators();
      this.documentRequirementsForm.get('sosiology').updateValueAndValidity();
      this.documentRequirementsForm.get('sosiology').clearValidators();
      this.documentRequirementsForm.get('geography').updateValueAndValidity();
      this.documentRequirementsForm.get('geography').clearValidators();
      this.documentRequirementsForm.get('economy').updateValueAndValidity();
      this.documentRequirementsForm.get('economy').clearValidators();
      this.documentRequirementsForm.get('sejarah').updateValueAndValidity();
      this.documentRequirementsForm.get('sejarah').clearValidators();
      this.documentRequirementsForm.get('is_input_nilai').setValidators(Validators.required);
      this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
    } else if (event.value === '12') {
      this.isReport = false;
      this.isTranscriptDocument = false;
      this.isUtbkDocument = true;
      this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
      this.documentRequirementsForm.get('is_input_nilai').clearValidators();
      this.documentRequirementsForm.controls.mandatory_doc.reset();
      this.documentRequirementsForm.controls.active_status.reset();
      this.documentRequirementsForm.controls.is_input_nilai.reset();
      this.documentRequirementsForm.controls.math.reset();
      this.documentRequirementsForm.controls.eng.reset();
      this.documentRequirementsForm.controls.bahasa.reset();
      this.documentRequirementsForm.controls.math2.reset();
      this.documentRequirementsForm.controls.eng2.reset();
      this.documentRequirementsForm.controls.bahasa2.reset();
      this.documentRequirementsForm.controls.physics.reset();
      this.documentRequirementsForm.controls.biology.reset();
      this.documentRequirementsForm.controls.chemicals.reset();
      this.documentRequirementsForm.controls.geography.reset();
      this.documentRequirementsForm.controls.sosiology.reset();
      this.documentRequirementsForm.controls.economy.reset();
      this.documentRequirementsForm.controls.sejarah.reset();
      this.documentRequirementsForm.controls.active_status.reset();
    } else {
      this.isReport = false;
      this.isTranscriptDocument = false;
      this.isUtbkDocument = false;
      this.documentRequirementsForm.get('math2').updateValueAndValidity();
      this.documentRequirementsForm.get('math2').clearValidators();
      this.documentRequirementsForm.get('bahasa2').updateValueAndValidity();
      this.documentRequirementsForm.get('bahasa2').clearValidators();
      this.documentRequirementsForm.get('eng2').updateValueAndValidity();
      this.documentRequirementsForm.get('eng2').clearValidators();
      this.documentRequirementsForm.get('math').updateValueAndValidity();
      this.documentRequirementsForm.get('math').clearValidators();
      this.documentRequirementsForm.get('bahasa').updateValueAndValidity();
      this.documentRequirementsForm.get('bahasa').clearValidators();
      this.documentRequirementsForm.get('eng').updateValueAndValidity();
      this.documentRequirementsForm.get('eng').clearValidators();
      this.documentRequirementsForm.get('physics').updateValueAndValidity();
      this.documentRequirementsForm.get('physics').clearValidators();
      this.documentRequirementsForm.get('biology').updateValueAndValidity();
      this.documentRequirementsForm.get('biology').clearValidators();
      this.documentRequirementsForm.get('chemicals').updateValueAndValidity();
      this.documentRequirementsForm.get('chemicals').clearValidators();
      this.documentRequirementsForm.get('sosiology').updateValueAndValidity();
      this.documentRequirementsForm.get('sosiology').clearValidators();
      this.documentRequirementsForm.get('geography').updateValueAndValidity();
      this.documentRequirementsForm.get('geography').clearValidators();
      this.documentRequirementsForm.get('economy').updateValueAndValidity();
      this.documentRequirementsForm.get('economy').clearValidators();
      this.documentRequirementsForm.get('is_input_nilai').updateValueAndValidity();
      this.documentRequirementsForm.get('is_input_nilai').clearValidators();
      this.documentRequirementsForm.controls.mandatory_doc.reset();
      this.documentRequirementsForm.controls.active_status.reset();
      this.documentRequirementsForm.controls.math.reset();
      this.documentRequirementsForm.controls.eng.reset();
      this.documentRequirementsForm.controls.bahasa.reset();
      this.documentRequirementsForm.controls.math2.reset();
      this.documentRequirementsForm.controls.eng2.reset();
      this.documentRequirementsForm.controls.bahasa2.reset();
      this.documentRequirementsForm.controls.physics.reset();
      this.documentRequirementsForm.controls.biology.reset();
      this.documentRequirementsForm.controls.chemicals.reset();
      this.documentRequirementsForm.controls.geography.reset();
      this.documentRequirementsForm.controls.sosiology.reset();
      this.documentRequirementsForm.controls.economy.reset();
      this.documentRequirementsForm.controls.sejarah.reset();
      this.documentRequirementsForm.controls.active_status.reset();
      this.documentRequirementsForm.controls.is_input_nilai.reset();
    }
  }

  onCheckMath(event) {
    if (event.target.checked) {
      if (this.isReport) {
        this.mappingTechnic.map(x => {
          x.math = true;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkScience.map(x => {
          x.math = true;
        });
      }
    } else {
      if (this.isReport) {
        this.mappingTechnic.map(x => {
          x.math = false;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkScience.map(x => {
          x.math = false;
        });
      }
    }
  }

  onCheckBahasa(event) {
    if (event.target.checked) {
      this.mappingTechnic.map(x => {
        x.bahasa = true;
      });
    } else {
      this.mappingTechnic.map(x => {
        x.bahasa = false;
      });
    }
  }

  onCheckEnglish(event) {
    if (event.target.checked) {
      this.mappingTechnic.map(x => {
        x.english = true;
      });
    } else {
      this.mappingTechnic.map(x => {
        x.english = false;
      });
    }
  }

  onCheckBiology(event) {
    if (event.target.checked) {
      if (this.isReport) {
        this.mappingTechnic.map(x => {
          x.biology = true;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkScience.map(x => {
          x.biology = true;
        });
      }
    } else {
      if (this.isReport) {
        this.mappingTechnic.map(x => {
          x.biology = false;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkScience.map(x => {
          x.biology = false;
        });
      }
    }
  }

  onCheckPhysics(event) {
    if (event.target.checked) {
      if (this.isReport) {
        this.mappingTechnic.map(x => {
          x.physics = true;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkScience.map(x => {
          x.physics = true;
        });
      }
    } else {
      if (this.isReport) {
        this.mappingTechnic.map(x => {
          x.physics = false;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkScience.map(x => {
          x.physics = false;
        });
      }
    }
  }

  onCheckChemical(event) {
    if (event.target.checked) {
      if (this.isReport) {
        this.mappingTechnic.map(x => {
          x.chemical = true;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkScience.map(x => {
          x.chemical = true;
        });
      }
    } else {
      if (this.isReport) {
        this.mappingTechnic.map(x => {
          x.chemical = false;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkScience.map(x => {
          x.chemical = false;
        });
      }
    }
  }

  onCheckMathNonTechnic(event) {
    if (event.target.checked) {
      if (this.isReport) {
        this.mappingNonTechnic.map(x => {
          x.math = true;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkNonScience.map(x => {
          x.math = true;
        });
      }
    } else {
      if (this.isReport) {
        this.mappingNonTechnic.map(x => {
          x.math = false;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkNonScience.map(x => {
          x.math = false;
        });
      }
    }
  }

  onCheckBahasaNonTechnic(event) {
    if (event.target.checked) {
      this.mappingNonTechnic.map(x => {
        x.bahasa = true;
      });
    } else {
      this.mappingNonTechnic.map(x => {
        x.bahasa = false;
      });
    }
  }

  onCheckEnglishNonTechnic(event) {
    if (event.target.checked) {
      this.mappingNonTechnic.map(x => {
        x.english = true;
      });
    } else {
      this.mappingNonTechnic.map(x => {
        x.english = false;
      });
    }
  }

  onCheckEconomyNonTechnic(event) {
    if (event.target.checked) {
      if (this.isReport) {
        this.mappingNonTechnic.map(x => {
          x.economy = true;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkNonScience.map(x => {
          x.economy = true;
        });
      }
    } else {
      if (this.isReport) {
        this.mappingNonTechnic.map(x => {
          x.economy = false;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkNonScience.map(x => {
          x.economy = false;
        });
      }
    }
  }

  onCheckGeographyNonTechnic(event) {
    if (event.target.checked) {
      if (this.isReport) {
        this.mappingNonTechnic.map(x => {
          x.geography = true;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkNonScience.map(x => {
          x.geography = true;
        });
      }
    } else {
      if (this.isReport) {
        this.mappingNonTechnic.map(x => {
          x.geography = false;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkNonScience.map(x => {
          x.geography = false;
        });
      }
    }
  }

  onCheckSociologicalNonTechnic(event) {
    if (event.target.checked) {
      if (this.isReport) {
        this.mappingNonTechnic.map(x => {
          x.sociological = true;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkNonScience.map(x => {
          x.sociological = true;
        });
      }
    } else {
      if (this.isReport) {
        this.mappingNonTechnic.map(x => {
          x.sociological = false;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkNonScience.map(x => {
          x.sociological = false;
        });
      }
    }
  }

  onSejarahNonTechnic(event) {
    if (event.target.checked) {
      if (this.isReport) {
        this.mappingNonTechnic.map(x => {
          x.historical = true;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkNonScience.map(x => {
          x.historical = true;
        });
      }
    } else {
      if (this.isReport) {
        this.mappingNonTechnic.map(x => {
          x.historical = false;
        });
      } else if (this.isUtbkDocument) {
        this.mappingUtbkNonScience.map(x => {
          x.historical = false;
        });
      }
    }
  }

  closeDocumentReqModals() {
    this.documentRequirementsModal.hide();
    this.isReport = false;
    this.isTranscriptDocument = false;
    this.isUtbkDocument = false;
    this.loadingModals = false;
    this.mappingTechnicId = [];
    this.mappingNonTechnicId = [];
  }

  // edit step 5
  openFormPinPrice(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.pinPriceId = data.id;
      if (data.is_medical === false) {
        this.isMedical = '0';
      } else {
        this.isMedical = '1';
      }
      this.pinPriceForm.patchValue({ price: data.price })
      this.pinPriceForm.patchValue({ price: data.price });
      this.pinPriceForm.patchValue({ maks_study_program: data.maks_study_program });
      if (data.active_status === true) {
        this.pinPriceForm.patchValue({ active_status: '1' });
      } else {
        this.pinPriceForm.patchValue({ active_status: '0' });
      }
    } else {
      this.pinPriceForm.reset();
      this.pinPriceDataModal.show();
    }
    this.pinPriceDataModal.show();
  }

  // edit step 6
  openFormStudyProgram(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.studyProgramId = data.id;
      if (data.is_technic === true) {
        this.isTechnic = '1';
      } else if (data.is_technic === false) {
        this.isTechnic = '2';
      }
      this.studyProgramForm.patchValue({ program_study_id: data.study_program_id.toString() });
      this.studyProgramForm.patchValue({ minimum_donation: data.minimum_donation });
      this.studyProgramForm.patchValue({ quota: data.quota });
      if (data.active_status === true) {
        this.studyProgramForm.patchValue({ active_status: '1' });
      } else {
        this.studyProgramForm.patchValue({ active_status: '0' });
      }
    } else {
      this.studyProgramForm.reset();
    }
    this.studyProgramDataModal.show();
  }

  // tambah data study program all
  openFormMappingDataProdi(type) {
    this.formType = type;
    if (type === 'input') {
      this.studyProgramMappingData.show();
      this.mappingStudyProgramForm.patchValue({ quota: '' })
      this.mappingStudyProgramForm.patchValue({ sdp: '' })
      this.mappingStudyProgramForm.patchValue({ is_technic_mapp: '' })
      this.getTableStudyProgramAll();
    }
  }

  // create step 1
  createSelectionData() {
    this.loadingCard = true;
    switch (this.pageType) {
      case 'create':
        this.activeStatusStep3 = '1';
        const data = {
          name: this.formDetailStep1.controls['name'].value,
          active_status: this.formDetailStep1.controls['active_status'].value,
          selection_program_id: this.selectionProgram,
          exam_status: this.examType,
          category_id: this.categoryId,
        };
        this.chartService.postSelectionPathData(data).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.idSelectionPath = res.selection_path_id;
              this.id = res.selection_path_id;
              this.selectionPathName = this.formDetailStep1.controls['name'].value;
              if (!this.isRaportCategory) {
                const payloadMoodle = {
                  selection_path_id: res.selection_path_id
                }
                this.chartService.createMoodleCategory(payloadMoodle).subscribe(resp => {
                  if (resp.status == 'Success') {
                    this.loadSuccess();
                    this.pageType = 'edit';
                    this.createSelectionData();
                    this.loadingCard = false;
                  } else {
                    this.loadingCard = false;
                    this.broadcasterService.notifBroadcast(true, {
                      title: resp.status,
                      msg: resp.message,
                      timeout: 5000,
                      theme: 'default',
                      position: 'top-right',
                      type: 'error'
                    });
                  }
                });
              } else {
                this.loadSuccess();
                this.pageType = 'edit';
                this.createSelectionData();
                this.loadingCard = false;
              }
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: res.status,
                msg: res.message,
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loadingCard = false;
            }
          } else {
            this.loadingCard = false;
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
          this.broadcasterService.notifBroadcast(true, {
            title: 'Gagal',
            msg: reason.err.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        });
        break;
      case 'edit':
        this.activeStatusStep3 = '1';
        const dataUpdate = {
          id: this.id,
          name: this.formDetailStep1.value.name,
          active_status: this.formDetailStep1.value.active_status,
          exam_status: this.examType,
        };
        this.chartService.updSelectionPathData(dataUpdate).subscribe(res => {
          if (res != null) {
            if (res.status === 'Success') {
              if (!this.isRaportCategory) {
                this.chartService.getCategoryMoodle(`?selection_path_id=${this.id}`).subscribe(resp => {
                  if (resp.length == 0) {
                    const payloadMoodle = {
                      selection_path_id: this.id
                    }
                    this.chartService.createMoodleCategory(payloadMoodle).subscribe(response => {
                      if (response.status == 'Success') {
                        this.loadSuccess();
                        this.goToStep1();
                        this.loadingCard = false;
                      } else {
                        this.loadingCard = false;
                        this.broadcasterService.notifBroadcast(true, {
                          title: resp.status,
                          msg: resp.message,
                          timeout: 5000,
                          theme: 'default',
                          position: 'top-right',
                          type: 'error'
                        });
                      }
                    });
                  } else {
                    this.loadSuccess();
                    this.goToStep1();
                    this.loadingCard = false;
                  }
                });
              } else {
                this.chartService.getCategoryMoodle(`?selection_path_id=${this.id}`).subscribe(resp => {
                  if (resp.length == 0) {
                    this.loadSuccess();
                    this.goToStep1();
                    this.loadingCard = false;
                  } else {
                    const deleteMoodle = {
                      selection_path_id: this.id
                    }
                    this.chartService.deleteMoodleCategory(deleteMoodle).subscribe(resp => {
                      if (resp.status == 'Success') {
                        this.loadSuccess();
                        this.goToStep1();
                        this.loadingCard = false;
                      } else {
                        this.loadingCard = false;
                        this.broadcasterService.notifBroadcast(true, {
                          title: resp.status,
                          msg: resp.message,
                          timeout: 5000,
                          theme: 'default',
                          position: 'top-right',
                          type: 'error'
                        });
                      }
                    });
                  }
                });
              }
            } else {
              this.loadError();
              this.loadingCard = false;
            }
          } else {
            this.loadError();
            this.loading = false;
          }
        }, (reason) => {
          this.loadError();
          this.loadingCard = false;
        });
        break;
      default: break;
    }
  }

  // create step 2
  createExamLocationData() {
    if (this.examLocMappingDataForm.valid) {
      this.loading = true;
      switch (this.formType) {
        case 'input':
          const data = {
            selection_path_id: this.id,
            location_exam_id: this.locationTime,
            active_status: '1'
          };
          this.chartService.postExamLocationSelectionData(data).subscribe(res => {
            if (res.status == 'Success') {
              this.loadSuccess();
              // this.examLocModal.hide();
              this.createSelectionData();
            } else {
              this.loadError();
            }
          });
          break;
        case 'edit':
          const datas = {
            id: this.examLocationSelectionId,
            selection_path_id: this.id,
            location_exam_id: this.locationTime,
            active_status: '1'
          };
          this.chartService.updExamLocationSelectionData(datas).subscribe(res => {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.examLocModal.hide();
              // this.renderLocation();
              this.createSelectionData();
            } else {
              this.loadError();
            }
          });
          break;
        default:
          break;
      }
    }
  }

  // create step 2
  createCBTData() {
    if (this.examCbtDataForm.valid) {
      this.loading = true;
      const dataCreate = {
        selection_path_id: this.id,
        exam_type_id: 1,
        start_date: this.examCbtDataForm.controls['exam_date'].value,
        quota: this.examCbtDataForm.controls['quota'].value,
        active_status: '1',
      };
      let startdate = this.examCbtDataForm.controls['exam_date'].value;
      let enddate = this.examCbtDataForm.controls['exam_date'].value;
      let timestartdate = startdate.concat(" ", '00:00:00');
      let timeenddate = enddate.concat(" ", '23:59:59');
      this.chartService.postExamTimeData(dataCreate).subscribe(res => {
        if (res != null) {
          if (res.status == 'Success') {
            this.examId = res.id;
            if (!this.isRaportCategory) {
              this.chartService.getCategoryMoodle(`?selection_path_id=${this.id}`).subscribe(resp => {
                if (resp.length !== 0) {
                  this.categoryMoodleId = resp[0].id;
                  const payloadMoodleCategory = {
                    moodle_category_id: this.categoryMoodleId,
                    start_date: timestartdate,
                    end_date: timeenddate,
                    path_exam_detail_id: this.examId
                  }
                  this.chartService.insertMoodleCourse(payloadMoodleCategory).subscribe(response => {
                    if (response.status == 'Success') {
                      this.moodleCourseId = response.response.data[0].id;
                      this.loadSuccess();
                      this.closeModalCBT();
                      this.renderExamTimeCBT();
                    } else {
                      this.loadSuccess();
                      this.closeModalCBT();
                      this.renderExamTimeCBT();
                    }
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
                  this.loading = false;
                }
              });
            } else {
              this.loadSuccess();
              this.renderExamTimeCBT();
              this.closeModalCBT();
            }
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
          this.loadError();
          this.loading = false;
        }
      }, (reason) => {
        this.loading = false;
        this.broadcasterService.notifBroadcast(true, {
          title: reason.err.status,
          msg: reason.err.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
      });
    }
  }

  deleteExamsCBTDatas(data) {
    const datas = {
      id: data.id,
      active_status: "0",
      selection_path_id: data.selection_path_id,
      start_date: data.origin_start_date,
      exam_type_id: 1
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
        this.loadtableExamCBT = true;
        this.chartService.updExamTimeData(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              if (!this.isRaportCategory) {
                this.chartService.getMoodleCourse(`?selection_path_id=${this.id}`).subscribe(resp => {
                  if (resp.length !== 0) {
                    const deleteCourse = {
                      moodle_course_id: resp[0].id
                    }
                    this.chartService.deleteMoodleCourse(deleteCourse).subscribe(response => {
                      if (response.status == 'Success') {
                        Swal.fire({
                          position: 'center',
                          type: 'success',
                          title: this.successDel,
                          showConfirmButton: false,
                          timer: 2000
                        });
                        this.examCbtDataForm.reset();
                        this.renderExamTimeCBT();
                        this.loadtableExamCBT = false;
                        this.haveDataSessionOneTwoThree = false;
                        this.enableMoodleGroup = false;
                      } else {
                        Swal.fire({
                          position: 'center',
                          type: 'error',
                          title: this.failedDel,
                          showConfirmButton: false,
                          timer: 2000
                        });
                        this.examCbtDataForm.reset();
                        this.loadtableExamCBT = false;
                        this.haveDataSessionOneTwoThree = false;
                        this.enableMoodleGroup = false;
                      }
                    });
                  } else {
                    Swal.fire({
                      position: 'center',
                      type: 'success',
                      title: this.successDel,
                      showConfirmButton: false,
                      timer: 2000
                    });
                    this.renderExamTimeCBT();
                    this.loadtableExamCBT = false;
                    this.examCbtDataForm.reset();
                  }
                })
              } else {
                Swal.fire({
                  position: 'center',
                  type: 'success',
                  title: this.successDel,
                  showConfirmButton: false,
                  timer: 2000
                });
                this.renderExamTimeCBT();
                this.loadtableExamCBT = false;
                this.examCbtDataForm.reset();
              }
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loadtableExamCBT = false;
            }
          } else {
            this.loadError();
          }
        }, (reason) => {
          Swal.fire({
            position: 'center',
            type: 'error',
            text: reason.err.message,
            title: this.failedDel,
            showConfirmButton: false,
            timer: 2000
          });
          this.loadtableExamCBT = false;
        });
      }
    });
  }

  createCBTDetailsDataSession() {
    if (this.examCbtDetailsDataForm.valid) {
      this.loading = true;
      let data = {
        id: this.cbtId,
      };
      let dataCreate = {};
      let moodleSection1 = {
        moodle_course_id: this.moodleCourseId,
      }
      let moodleSection2 = {};
      if (this.typeCbtData == '1') {
        dataCreate = {
          ...data,
          session_one_start: this.examCbtDetailsDataForm.value.session_start_time,
          session_one_end: this.examCbtDetailsDataForm.value.session_end_time
        }
        moodleSection2 = {
          ...moodleSection1,
          section_name: 'Sesi 1'
        }
      } else if (this.typeCbtData == '2') {
        dataCreate = {
          ...data,
          session_two_start: this.examCbtDetailsDataForm.value.session_start_time,
          session_two_end: this.examCbtDetailsDataForm.value.session_end_time
        }
        moodleSection2 = {
          ...moodleSection1,
          section_name: 'Sesi 2'
        }
      } else if (this.typeCbtData == '3') {
        dataCreate = {
          ...data,
          session_three_start: this.examCbtDetailsDataForm.value.session_start_time,
          session_three_end: this.examCbtDetailsDataForm.value.session_end_time
        }
        moodleSection2 = {
          ...moodleSection1,
          section_name: 'Sesi 3'
        }
      }
      this.chartService.createOrUpdateSessionPathExamDetails(dataCreate).subscribe(res => {
        if (res != null) {
          if (res.status == 'Success') {
            if (!this.isRaportCategory) {
              this.chartService.insertMoodleSection(moodleSection2).subscribe(response => {
                if (response.status == 'Success') {
                  const sectionMoodleId = response.response.data[0].id;
                  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];;
                  const date = new Date();
                  const getCurrentMonth = months[date.getMonth()];
                  const payloadQuizMoodle = {
                    moodle_course_id: this.moodleCourseId,
                    moodle_section_id: sectionMoodleId,
                    name: 'Moodle Section' + ' ' + this.selectionPathName + ' ' + getCurrentMonth,
                    description: 'Moodle Section' + ' ' + this.selectionPathName + ' ' + getCurrentMonth,
                    timeopen: this.examCbtDetailsDataForm.value.session_start_time,
                    timeclose: this.examCbtDetailsDataForm.value.session_end_time
                  }
                  this.chartService.insertMoodleQuiz(payloadQuizMoodle).subscribe(response2 => {
                    if (response2.status == 'Success') {
                      this.loadSuccess();
                      this.loading = false;
                      this.closeDetailsCBTSession();
                      this.loadDetailsCBTData(this.cbtId);
                    } else {
                      this.broadcasterService.notifBroadcast(true, {
                        title: response.status,
                        msg: response.message,
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
                    title: response.status,
                    msg: response.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                  this.loading = false;
                }
              });
            } else {
              this.loadSuccess();
              this.loading = false;
              this.closeDetailsCBTSession();
              this.loadDetailsCBTData(this.cbtId);
            }
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
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loading = false;
          this.loading = false;
        }
      }, (reason) => {
        this.broadcasterService.notifBroadcast(true, {
          title: reason.err.status,
          msg: reason.err.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
        this.loading = false;
      });
    }
  }

  loadSectionId(moodleCourseId) {
    this.loadingSection = true;
    this.chartService.getMoodleSection(`?moodle_course_id=${moodleCourseId}`).subscribe(response => {
      if (response.length !== 0) {
        for (let i = 0; i < response.length; i++) {
          if (response[i].name == 'Sesi 1') {
            this.moodleSectionSession1Id = response[i].id;
          } else if (response[i].name == 'Sesi 2') {
            this.moodleSectionSession2Id = response[i].id;
          } else if (response[i].name == 'Sesi 3') {
            this.moodleSectionSession3Id = response[i].id;
          }
        }
        if (response.length == 3) {
          this.loadingSection = false;
          this.loadtableExamCBTDetails = false;
          this.haveDataSessionOneTwoThree = true;
          this.enableMoodleGroup = true;
        }
        else {
          this.loadingSection = false;
          this.loadtableExamCBTDetails = false;
          this.haveDataSessionOneTwoThree = false;
          this.enableMoodleGroup = false;
        }
      } else {
        this.loadingSection = false;
        this.loadtableExamCBTDetails = false;
      }
    });
  }

  createMoodleGroup() {
    this.loading = true;
    if (this.enableMoodleGroup) {
      const moodleGroupArrays =
      {
        moodle_course_id: this.moodleCourseId,
        path_exam_detail_id: this.examId,
        sections: [
          {
            moodle_section_id: this.moodleSectionSession1Id,
            increment: 1
          },
          {
            moodle_section_id: this.moodleSectionSession2Id,
            increment: 2
          },
          {
            moodle_section_id: this.moodleSectionSession3Id,
            increment: 3
          }
        ]
      }
      const jsonGroup = JSON.stringify(moodleGroupArrays);
      const payload = {
        json: jsonGroup
      }
      this.chartService.insertMoodleGroup(payload).subscribe(response => {
        if (response.status == 'Success') {
          Swal.fire({
            position: 'center',
            type: 'success',
            title: response.status,
            text: response.message,
            showConfirmButton: true,
            allowOutsideClick: false
          });
          this.loading = false;
          this.haveMoodleGroup = true;
        }
        else {
          this.broadcasterService.notifBroadcast(true, {
            title: response.status,
            msg: response.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
          this.loading = false;
        }
      }, (reason) => {
        this.broadcasterService.notifBroadcast(true, {
          title: reason.err.status,
          msg: reason.err.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
        this.loading = false;
      });
    } else {
      Swal.fire({
        position: 'center',
        type: 'warning',
        title: this.warning,
        text: this.mappingGrupText,
        showConfirmButton: true,
        allowOutsideClick: false
      });
      this.loading = false;
    }
  }

  createPsikotestData() {
    if (this.examPsikotestDataForm.valid) {
      this.loading = true;
      switch (this.formType) {
        case 'input':
          let dataCreate = {};
          dataCreate = {
            selection_path_id: this.id,
            exam_type_id: 2,
            start_date: this.examPsikotestDataForm.controls['exam_date'].value + " " + this.examPsikotestDataForm.controls['start_date'].value,
            end_date: this.examPsikotestDataForm.controls['exam_date'].value + " " + this.examPsikotestDataForm.controls['end_date'].value,
            quota: this.examPsikotestDataForm.controls['quota'].value,
            active_status: '1',
          };
          this.chartService.postExamTimeData(dataCreate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.renderExamTimePsikotest();
                this.closePsikotestModals();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          break;
        case 'edit':
          let dataUpdate = {};
          dataUpdate = {
            id: this.examId,
            selection_path_id: this.id,
            start_date: this.examPsikotestDataForm.value.exam_date + " " + this.examPsikotestDataForm.value.start_date,
            end_date: this.examPsikotestDataForm.value.exam_date + " " + this.examPsikotestDataForm.value.end_date,
            quota: this.examPsikotestDataForm.controls['quota'].value,
            active_status: '1',
            exam_type_id: 2,
          };
          this.chartService.updExamTimeData(dataUpdate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.renderExamTimePsikotest();
                this.closePsikotestModals();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          break;
        default: break;
      }
    }
  }

  deleteExamsPsikotestDatas(data) {
    const datas = {
      id: data.id,
      active_status: "0",
      selection_path_id: data.selection_path_id,
      start_date: data.origin_start_date,
      exam_type_id: 2
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
        this.loadtableExamPsikotest = true;
        this.chartService.updExamTimeData(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.renderExamTimePsikotest();
              this.loadtableExamPsikotest = false;
              this
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loadtableExamPsikotest = false;
            }
          } else {
            this.loadError();
          }
        }, (reason) => {
          this.loadError();
        });
      }
    });
  }

  createInterviewData() {
    if (this.examInterviewDataForm.valid) {
      this.loading = true;
      switch (this.formType) {
        case 'input':
          let dataCreate = {};
          dataCreate = {
            selection_path_id: this.id,
            exam_type_id: 3,
            start_date: this.examInterviewDataForm.controls['exam_date'].value + " " + this.examInterviewDataForm.controls['start_date'].value,
            end_date: this.examInterviewDataForm.controls['exam_date'].value + " " + this.examInterviewDataForm.controls['end_date'].value,
            quota: this.examInterviewDataForm.controls['quota'].value,
            active_status: '1',
          };
          this.chartService.postExamTimeData(dataCreate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.renderExamTimeInterview();
                this.closeInterviewModals();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          break;
        case 'edit':
          let dataUpdate = {};
          dataUpdate = {
            id: this.examId,
            selection_path_id: this.id,
            start_date: this.examInterviewDataForm.value.exam_date + " " + this.examInterviewDataForm.value.start_date,
            end_date: this.examInterviewDataForm.value.exam_date + " " + this.examInterviewDataForm.value.end_date,
            quota: this.examInterviewDataForm.controls['quota'].value,
            active_status: '1',
            exam_type_id: 3,
          };
          this.chartService.updExamTimeData(dataUpdate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.renderExamTimeInterview();
                this.closeInterviewModals();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          break;
        default: break;
      }
    }
  }

  deleteExamsInterviewDatas(data) {
    const datas = {
      id: data.id,
      active_status: "0",
      selection_path_id: data.selection_path_id,
      start_date: data.origin_start_date,
      exam_type_id: 3
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
        this.loadtableExamInterview = true;
        this.chartService.updExamTimeData(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.renderExamTimeInterview();
              this.loadtableExamInterview = false;
              this
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loadtableExamInterview = false;
            }
          } else {
            this.loadError();
          }
        }, (reason) => {
          this.loadError();
        });
      }
    });
  }

  createTPAData() {
    if (this.examTPADataForm.valid) {
      this.loading = true;
      switch (this.formType) {
        case 'input':
          let dataCreate = {};
          dataCreate = {
            selection_path_id: this.id,
            exam_type_id: 4,
            start_date: this.examTPADataForm.controls['exam_date'].value + " " + this.examTPADataForm.controls['start_date'].value,
            end_date: this.examTPADataForm.controls['exam_date'].value + " " + this.examTPADataForm.controls['end_date'].value,
            quota: this.examTPADataForm.controls['quota'].value,
            active_status: '1',
          };
          this.chartService.postExamTimeData(dataCreate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.renderExamTimeTPA();
                this.closeTPAModals();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          break;
        case 'edit':
          let dataUpdate = {};
          dataUpdate = {
            id: this.examId,
            selection_path_id: this.id,
            start_date: this.examTPADataForm.value.exam_date + " " + this.examTPADataForm.value.start_date,
            end_date: this.examTPADataForm.value.exam_date + " " + this.examTPADataForm.value.end_date,
            quota: this.examTPADataForm.controls['quota'].value,
            active_status: '1',
            exam_type_id: 4,
          };
          this.chartService.updExamTimeData(dataUpdate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.renderExamTimeTPA();
                this.closeTPAModals();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          break;
        default: break;
      }
    }
  }

  deleteExamsTPADatas(data) {
    const datas = {
      id: data.id,
      active_status: "0",
      selection_path_id: data.selection_path_id,
      start_date: data.origin_start_date,
      exam_type_id: 4
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
        this.loadtableExamTPA = true;
        this.chartService.updExamTimeData(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.renderExamTimeTPA();
              this.loadtableExamTPA = false;
              this
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loadtableExamTPA = false;
            }
          } else {
            this.loadError();
          }
        }, (reason) => {
          this.loadError();
        });
      }
    });
  }

  // create step 2
  createExamTimeData() {
    if (this.examTimeMappingDataForm.valid) {
      this.loading = true;
      switch (this.formType) {
        case 'input':
          const dataCreate = {
            selection_path_id: this.id,
            start_date: this.examTimeMappingDataForm.controls['exam_date'].value + " " + this.examTimeMappingDataForm.controls['start_date'].value,
            end_date: this.examTimeMappingDataForm.controls['exam_date'].value + " " + this.examTimeMappingDataForm.controls['end_date'].value,
            quota: this.examTimeMappingDataForm.controls['quota'].value,
            active_status: '1',
            session: this.session
          };
          this.chartService.postExamTimeData(dataCreate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.loading = false;
                this.examTimeModal.hide();
                // this.renderExamTime();
                // this.renderLocation();
                this.createSelectionData();
                this.activeStatusStep3 = '1';
                // this.loadExamLocationSelectionData();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          break;
        case 'edit':
          const data = {
            id: this.examTimeId,
            selection_path_id: this.id,
            start_date: this.examTimeMappingDataForm.value.exam_date + " " + this.examTimeMappingDataForm.value.start_date,
            end_date: this.examTimeMappingDataForm.value.exam_date + " " + this.examTimeMappingDataForm.value.end_date,
            quota: this.examTimeMappingDataForm.controls['quota'].value,
            active_status: '1',
            session: this.session
          };
          this.chartService.updExamTimeData(data).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.activeStatusStep3 = '1';
                this.examTimeModal.hide();
                // this.renderExamTime();
                // this.renderLocation();
                this.createSelectionData();
                this.loading = false;
                // this.renderExamLocation();
                // this.loadExamLocationSelectionData();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          break;
        default: break;
      }
    }
  }

  // delete step 2
  deleteExamsLocDatas(data) {
    const datas = {
      id: data.id,
      active_status: "0",
      selection_path_id: data.selection_path_id,
      location_exam_id: this.locationTime,
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
        this.loadtableExamLocData = true;
        this.chartService.updExamLocationSelectionData(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              // this.renderLocation();
              this.createSelectionData();
              this.loadtableExamLocData = false;
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loadtableExamLocData = false;
            }
          } else {
            this.loadError();
          }
        }, (reason) => {
          this.loadError();
        });
      }
    });
  }

  // delete step 2
  deleteExamsTimeDatas(data) {
    const datas = {
      id: data.id,
      active_status: "0",
      selection_path_id: data.selection_path_id,
      start_date: data.origin_start_date,
      end_date: data.origin_end_date
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
        this.loadtableExamTimeData = true;
        this.chartService.updExamTimeData(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              // this.renderExamTime();
              this.createSelectionData();
              this.loadtableExamTimeData = false;
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loadtableExamTimeData = false;
            }
          } else {
            this.loadError();
          }
        }, (reason) => {
          this.loadError();
        });
      }
    });
  }

  // create step 4
  createDocumentRequirementsData() {
    if (this.documentRequirementsForm.valid) {
      this.loading = true;
      if (this.isReport) {
        switch (this.formType) {
          case 'input':
            let arrayToObjectTechnic = Object.assign({}, ...this.mappingTechnic);
            let arrayToObjectNonTechnic = Object.assign({}, ...this.mappingNonTechnic);
            let dataCreate = {};
            dataCreate =
            {
              selection_path_id: this.id,
              document_type_id: this.documentType,
              active_status: this.documentRequirementsForm.value.active_status === '1' ? true : false,
              required: this.documentRequirementsForm.value.mandatory_doc === '1' ? true : false,
              mapping_report_subject_path_technic: arrayToObjectTechnic,
              mapping_report_subject_path_non_technic: arrayToObjectNonTechnic
            }
            const myJson = JSON.stringify(dataCreate);
            let payload = {
              json: myJson
            }
            this.chartService.createRaportRequirementDocument(payload).subscribe(res => {
              if (res != null) {
                if (res.status == 'Success') {
                  this.loadSuccess();
                  this.documentRequirementsModal.hide();
                  this.renderDocumentRequirements();
                  this.documentRequirementsForm.reset();
                } else {
                  this.loadError();
                }
              } else {
                this.loadError();
              }
            }, (reason) => {
              this.loadError();
            });
            break;
          case 'edit':
            this.mappingTechnic.map(x => {
              x.id = this.mappingTechnicId,
                x.selection_path_id = this.id,
                x.active_status = this.documentRequirementsForm.value.active_status === '1' ? true : false,
                x.is_technic = true
            });
            this.mappingNonTechnic.map(y => {
              y.id = this.mappingNonTechnicId,
                y.selection_path_id = this.id,
                y.active_status = this.documentRequirementsForm.value.active_status === '1' ? true : false,
                y.is_technic = false
            });
            let arrayToObjectTechnicUpd = Object.assign({}, ...this.mappingTechnic);
            let arrayToObjectNonTechnicUpd = Object.assign({}, ...this.mappingNonTechnic);
            let dataUpdate = {};
            dataUpdate =
            {
              id: this.documentSelectionId,
              selection_path_id: this.id,
              document_type_id: this.documentType,
              active_status: this.documentRequirementsForm.value.active_status === '1' ? true : false,
              required: this.documentRequirementsForm.value.mandatory_doc === '1' ? true : false,
              mapping_report_subject_path_technic: arrayToObjectTechnicUpd,
              mapping_report_subject_path_non_technic: arrayToObjectNonTechnicUpd
            }
            const myJsonUpdate = JSON.stringify(dataUpdate);
            let payloadUpdate = {
              json: myJsonUpdate
            }
            this.chartService.updateRaportRequirementDocument(payloadUpdate).subscribe(res => {
              if (res != null) {
                if (res.status == 'Success') {
                  this.loadSuccess();
                  this.documentRequirementsModal.hide();
                  this.renderDocumentRequirements();
                  this.documentRequirementsForm.reset();
                } else {
                  this.loadError();
                }
              } else {
                this.loadError();
              }
            }, (reason) => {
              this.loadError();
            });
            break;
          default: break;
        }
      } else if (this.isUtbkDocument) {
        switch (this.formType) {
          case 'input':
            let arrayToObjectScience = Object.assign({}, ...this.mappingUtbkScience);
            let arrayToObjectNonScience = Object.assign({}, ...this.mappingUtbkNonScience);
            let dataCreate = {};
            dataCreate =
            {
              selection_path_id: this.id,
              document_type_id: this.documentType,
              active_status: this.documentRequirementsForm.value.active_status === '1' ? true : false,
              required: this.documentRequirementsForm.value.mandatory_doc === '1' ? true : false,
              mapping_utbk_path_science: arrayToObjectScience,
              mapping_utbk_path_non_science: arrayToObjectNonScience
            }
            const myJson = JSON.stringify(dataCreate);
            let payload = {
              json: myJson
            }
            this.chartService.createUtbkRequirementDocument(payload).subscribe(res => {
              if (res != null) {
                if (res.status == 'Success') {
                  this.loadSuccess();
                  this.closeDocumentReqModals();
                  this.renderDocumentRequirements();
                } else {
                  this.loadError();
                }
              } else {
                this.loadError();
              }
            }, (reason) => {
              this.loadError();
            });
            break;
          case 'edit':
            this.mappingUtbkScience.map(x => {
              x.id = this.mappingTechnicId,
                x.selection_path_id = this.id,
                x.active_status = this.documentRequirementsForm.value.active_status === '1' ? true : false,
                x.is_science = true
            });
            this.mappingUtbkNonScience.map(y => {
              y.id = this.mappingNonTechnicId,
                y.selection_path_id = this.id,
                y.active_status = this.documentRequirementsForm.value.active_status === '1' ? true : false,
                y.is_science = false
            });
            let arrayToObjectTechnicUpd = Object.assign({}, ...this.mappingUtbkScience);
            let arrayToObjectNonTechnicUpd = Object.assign({}, ...this.mappingUtbkNonScience);
            let dataUpdate = {};
            dataUpdate =
            {
              id: this.documentSelectionId,
              selection_path_id: this.id,
              document_type_id: this.documentType,
              active_status: this.documentRequirementsForm.value.active_status === '1' ? true : false,
              required: this.documentRequirementsForm.value.mandatory_doc === '1' ? true : false,
              mapping_utbk_path_science: arrayToObjectTechnicUpd,
              mapping_utbk_path_non_science: arrayToObjectNonTechnicUpd
            }
            const myJsonUpdate = JSON.stringify(dataUpdate);
            let payloadUpdate = {
              json: myJsonUpdate
            }
            this.chartService.updateUtbkRequirementDocument(payloadUpdate).subscribe(res => {
              if (res != null) {
                if (res.status == 'Success') {
                  this.loadSuccess();
                  this.renderDocumentRequirements();
                  this.closeDocumentReqModals();
                } else {
                  this.loadError();
                }
              } else {
                this.loadError();
              }
            }, (reason) => {
              this.loadError();
            });
            break;
          default: break;
        }

      } else {
        switch (this.formType) {
          case 'input':
            let payload = {};
            const data = {
              selection_path_id: this.id,
              document_type_id: this.documentRequirementsForm.controls['document_type_id'].value,
              active_status: this.documentRequirementsForm.controls['active_status'].value,
              required: this.documentRequirementsForm.controls['mandatory_doc'].value,
              is_value: this.documentRequirementsForm.controls['is_input_nilai'].value,
            };
            this.chartService.postSelectionDocument(data).subscribe(res => {
              if (res != null) {
                if (res.status == 'Success') {
                  this.loadSuccess();
                  this.documentRequirementsModal.hide();
                  this.documentRequirementsForm.reset();
                  this.renderDocumentRequirements();
                } else {
                  this.loadError();
                }
              } else {
                this.loadError();
              }
            }, (reason) => {
              this.loadError();
            });
            break;
          case 'edit':
            const dataUpdate = {
              id: this.documentSelectionId,
              selection_path_id: this.id,
              document_type_id: this.documentRequirementsForm.value.document_type_id,
              active_status: this.documentRequirementsForm.value.active_status,
              required: this.documentRequirementsForm.value.mandatory_doc,
              is_value: this.documentRequirementsForm.controls['is_input_nilai'].value,
            };
            this.chartService.updSelectionDocument(dataUpdate).subscribe(res => {
              if (res != null) {
                if (res.status == 'Success') {
                  this.loadSuccess();
                  this.documentRequirementsModal.hide();
                  this.documentRequirementsForm.reset();
                  this.renderDocumentRequirements();
                } else {
                  this.loadError();
                }
              } else {
                this.loadError();
              }
            }, (reason) => {
              this.loadError();
            });
            break;
          default: break;
        }
      }
    }
  }

  // create step 5
  createDetailPINPriceData() {
    if (this.pinPriceForm.valid) {
      this.loading = true;
      switch (this.formType) {
        case 'input':
          const data = {
            selection_path_id: this.id,
            price: this.pinPriceForm.controls['price'].value,
            maks_study_program: this.pinPriceForm.controls['maks_study_program'].value,
            active_status: this.pinPriceForm.controls['active_status'].value,
            // category: this.categoryFormPrice,
            is_medical: this.isMedical
          };
          this.chartService.postPINPriceData(data).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.pinPriceDataModal.hide();
                this.renderDetailPINPrice();
                this.checkActivePinPrice();
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
            this.loadError();
          });
          break;
        case 'edit':
          const dataUpdate = {
            id: this.pinPriceId,
            selection_path_id: this.id,
            price: this.pinPriceForm.value.price,
            maks_study_program: this.pinPriceForm.value.maks_study_program,
            active_status: this.pinPriceForm.value.active_status,
            is_medical: this.isMedical
          };
          this.chartService.updPINPriceData(dataUpdate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.pinPriceDataModal.hide();
                this.renderDetailPINPrice();
                this.checkActivePinPrice();
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
            this.loadError();
          });
          break;
        default: break;
      }
    }
  }

  // create step 6
  createDetailStudyProgramMappingData1() {
    if (this.studyProgramForm.valid) {
      switch (this.formType) {
        case 'input':
          let dataCreate = {
            selection_path_id: this.id,
            program_study_id: this.studyProgramForm.controls['program_study_id'].value,
            is_technic: this.isTechnic === '1' ? 'true' : 'false',
            minimum_donation: this.studyProgramForm.controls['minimum_donation'].value,
            quota: this.studyProgramForm.controls['quota'].value,
            active_status: this.studyProgramForm.controls['active_status'].value
          };
          this.chartService.postMappingProgramStudyData(dataCreate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.studyProgramDataModal.hide();
                this.renderDetailStudyProgramMapping();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          break;
        case 'edit':
          const dataUpdate = {
            id: this.studyProgramId,
            selection_path_id: this.id,
            program_study_id: this.studyProgramForm.value.program_study_id,
            is_technic: this.isTechnic === '1' ? 'true' : 'false',
            minimum_donation: this.studyProgramForm.controls['minimum_donation'].value,
            quota: this.studyProgramForm.value.quota,
            active_status: this.studyProgramForm.value.active_status
          };
          this.chartService.updMappingProgramStudyData(dataUpdate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.studyProgramDataModal.hide();
                this.renderDetailStudyProgramMapping();
              } else {
                this.loadError();
              }
            } else {
              this.loadError();
            }
          }, (reason) => {
            this.loadError();
          });
          break;
      }
    }
  }

  // Change status aktif in modal mapping study program all
  changeSwitch(id, e) {
    if (e.target.checked === true) {
      this.statusChecked = '1';
    } else if (e.target.checked === false) {
      this.statusChecked = '0';
    } else {
      this.statusChecked = '1';
    }
  }

  // Change is technic in modal mapping study program all
  changeTechnic(id, e) {
    if (e.target.checked === true) {
      this.isTechnicChecked = '1';
      this.checksTechnic2 = true;
    } else if (e.target.checked === false) {
      this.isTechnicChecked = '0';
      this.checksTechnic2 = false;
    } else {
      this.isTechnicChecked = '0';
      this.checksTechnic2 = false;
    }
  }

  // Create data mapping all study program
  createMappingAllStudyProgram(data) {
    this.loadTableMapping = true;
    let dataCreate = {
      selection_path_id: this.id,
      program_study_id: data.id,
      is_technic: this.isTechnicMapp === '1' ? 'true' : 'false',
      quota: this.mappingStudyProgramForm.controls['quota'].value,
      minimum_donation: this.mappingStudyProgramForm.controls['sdp'].value,
      active_status: this.statusChecked ? this.statusChecked : '1'
    };
    this.chartService.postMappingProgramStudyData(dataCreate).subscribe(res => {
      if (res != null) {
        if (res.status == 'Success') {
          this.loadTableMapping = false;
          this.mappingStudyProgramForm.reset();
          this.loadSuccess();
          this.renderDetailStudyProgramMapping();
          this.getTableStudyProgramAll();
          this.renderMappStudyProgramForm();
          this.statusChecked = '1';
          this.checks = true;
        } else {
          this.loadError();
        }
      } else {
        this.loadError();
      }
    }, (reason) => {
      this.loadError();
    });
  }

  // apply filter step 4
  applyFiltersDocumentReq(activeStatusStep4) {
    this.loadtableSelectionDocumentData = true;
    if (this.activeStatusStep4 === '1') {
      this.renderDocumentRequirements();
    } else if (this.activeStatusStep4 === '0') {
      this.renderDocumentRequirements();
    } else {
      this.renderDocumentRequirements();
    }
  }

  // apply filter step 5
  applyFiltersPinPrice(activeStatusStep5) {
    this.loadtablePINPriceData = true;
    this.activeStatusStep5 = activeStatusStep5;
    this.renderDetailPINPrice();
  }

  // apply filter step 6
  applyFilter(statusfilter) {
    this.loadtableMappStudyProgramData = true;
    this.statusfilter = statusfilter;
    this.renderDetailStudyProgramMapping();
  }

  goToStep1() {
    this.wizard.navigation.goToStep(1);
    this.renderExamTimeCBT();
    this.renderExamTimePsikotest();
    this.renderExamTimeInterview();
    this.renderExamTimeTPA();
    // this.renderExamTimeCBTDetails();
    // this.dtTrigger5.next();
    this.tableExamCBTDetails = [];
  }

  goToStep2() {
    this.wizard.navigation.goToStep(1);
    this.loadtableExamTimeData = true;
    this.chartService.getExamTimeDatas(`selection_path_id=${this.id}&active_status=1`).subscribe(response => {
      setTimeout(() => {
        this.dtTrigger1.next();
        this.loadtableExamTimeData = false;
      }, 3000);
    }, err => {
      this.loadtableExamTimeData = false;
    });
  }

  goToStep3() {
    this.wizard.navigation.goToStep(2);
    this.activeStatusStep4 = '1';
    this.renderDocumentRequirements();
  }

  goToStep5() {
    this.wizard.navigation.goToStep(3);
    this.activeStatusStep5 = '1';
    this.renderDetailPINPrice();
    this.checkActivePinPrice();
  }

  goToStep6() {
    this.wizard.navigation.goToStep(4);
    this.statusfilter = '1';
    this.renderDetailStudyProgramMapping();
    this.loadStudyProgramData();
  }

  getTableExamCBT() {
    this.loadtableExamCBT = true;
    this.chartService.getExamTimeDatas(`selection_path_id=${this.id}&active_status=1&exam_type_id=1`).subscribe(response => {
      this.tableExamCBT = response.data;
      this.dtTrigger.next();
      this.loadtableExamCBT = false;
    }, err => {
      this.loadtableExamCBT = false;
    });
  }

  getTableExamPsikotest() {
    this.loadtableExamPsikotest = true;
    this.chartService.getExamTimeDatas(`selection_path_id=${this.id}&active_status=1&exam_type_id=2`).subscribe(response => {
      this.tableExamPsikotest = response.data;
      this.dtTrigger1.next();
      this.loadtableExamPsikotest = false;
    }, err => {
      this.loadtableExamPsikotest = false;
    });
  }

  getTableExamInterview() {
    this.loadtableExamInterview = true;
    this.chartService.getExamTimeDatas(`selection_path_id=${this.id}&active_status=1&exam_type_id=3`).subscribe(response => {
      this.tableExamInterview = response.data;
      this.dtTrigger2.next();
      this.loadtableExamInterview = false;
    }, err => {
      this.loadtableExamInterview = false;
    });
  }

  getTableExamTPA() {
    this.loadtableExamTPA = true;
    this.chartService.getExamTimeDatas(`selection_path_id=${this.id}&active_status=1&exam_type_id=4`).subscribe(response => {
      this.tableExamTPA = response.data;
      this.dtTrigger3.next();
      this.loadtableExamTPA = false;
    }, err => {
      this.loadtableExamTPA = false;
    });
  }

  // load table step 4
  getTableDocument() {
    this.loadtableSelectionDocumentData = true;
    if (this.activeStatusStep4 === '1') {
      this.chartService.getSelectionDocument(`selection_id=${this.id}&active_status=true`).subscribe(response => {
        this.tableDocumentReq = response.data;
        this.dtTrigger4.next();
        this.loadtableSelectionDocumentData = false;
      }, err => {
        this.loadtableSelectionDocumentData = false;
      });
    } else if (this.activeStatusStep4 === '0') {
      this.chartService.getSelectionDocument(`selection_id=${this.id}&active_status=false`).subscribe(response => {
        this.tableDocumentReq = response.data;
        this.dtTrigger4.next();
        this.loadtableSelectionDocumentData = false;
      }, err => {
        this.loadtableSelectionDocumentData = false;
      });
    } else {
      this.chartService.getSelectionDocument(`selection_id=${this.id}`).subscribe(response => {
        this.tableDocumentReq = response.data;
        this.dtTrigger4.next();
        this.loadtableSelectionDocumentData = false;
      }, err => {
        this.loadtableSelectionDocumentData = false;
      });
    }
  }

  // load table step 5
  getTablePinPrice() {
    this.loadtablePINPriceData = true;
    if (this.activeStatusStep5 === '1' || this.activeStatusStep5 === '0') {
      this.chartService.getPINPriceData(`selection_path_id=${this.id}&active_status=${this.activeStatusStep5 === '1' ? 'true' : 'false'}`).subscribe(response => {
        setTimeout(() => {
          this.tablePinPrice = response.data;
          this.dtTrigger5.next();
          this.loadtablePINPriceData = false;
        }, 3000);
      }, err => {
        this.loadtablePINPriceData = false;
      });
    } else {
      this.chartService.getPINPriceData(`selection_path_id=${this.id}`).subscribe(response => {
        setTimeout(() => {
          this.tablePinPrice = response.data;
          this.dtTrigger5.next();
          this.loadtablePINPriceData = false;
        }, 3000);
      }, err => {
        this.loadtablePINPriceData = false;
      });
    }
  }

  // load table step 6
  getTableStudyProgram() {
    this.loadtableMappStudyProgramData = true;
    if (this.statusfilter == '1' || this.statusfilter == '0') {
      this.chartService.getMappingProgramStudyData(`selection_path_id=${this.id}&active_status=${this.statusfilter === '1' ? 'true' : 'false'}`).subscribe(response => {
        setTimeout(() => {
          this.tableStudyProgram = response.data;
          this.dtTrigger6.next();
          this.loadtableMappStudyProgramData = false;
        }, 3000);
      }, err => {
        this.loadtableMappStudyProgramData = false;
      });
    } else {
      this.chartService.getMappingProgramStudyData(`selection_path_id=${this.id}`).subscribe(response => {
        setTimeout(() => {
          this.tableStudyProgram = response.data;
          this.dtTrigger6.next();
          this.loadtableMappStudyProgramData = false;
        }, 3000);
      }, err => {
        this.loadtableMappStudyProgramData = false;
      });
    }
  }

  getTableStudyProgramAll() {
    this.loadTableMapping = true;
    this.chartService.getProgramStudyDataWithParams(`?selection_path_id=${this.id}&show_all=0`).subscribe(response => {
      setTimeout(() => {
        this.tableStudyProgramMapping = response;
        this.dtTrigger7.next();
        this.loadTableMapping = false;
      }, 3000);
    }, err => {
      this.loadTableMapping = false;
    });
  }

  // check length active data pin price in step 4
  checkActivePinPrice() {
    this.chartService.getPINPriceData(`selection_path_id=${this.id}&active_status=true`).subscribe(response => {
      if (response.data.length === 2) {
        this.isDataPinPriceActive = true;
        this.disabledGotoMapingProdi = false;
      } else {
        this.isDataPinPriceActive = false;
        this.disabledGotoMapingProdi = true;
      }
    });
  }

  // load table step 6 -- button mapping all
  getTableStudyProgramMappingData() {
    this.loadTableMapping = true;

    // Check jika pada api ini ada studi program yg aktif
    this.chartService.getMappingProgramStudyData(`selection_path_id=${this.id}&active_status=true`).subscribe(response => {
      if (response.data.length !== 0) {
        const dataProdiMappingBefore = response.data;
        const obj = {};
        dataProdiMappingBefore.forEach(o => obj[o.id] = o);
        const unique_array2 = Object.keys(obj).map(k => obj[k]);
        const matches = [];

        // Check jika id prodi telah digunakan pada api diatas dan slice jika datanya sudah ada
        this.chartService.getProgramStudyData().subscribe(response => {
          let dataMappingProdiAfter = response;
          // this.dtTrigger5.next();
          dataMappingProdiAfter.forEach(o1 => unique_array2.forEach(o2 => {
            if (o1.id == o2.study_program_id) {
              matches.push(o1);
              this.chartService.getProgramStudyData().subscribe(resp => {
                let dataMappingCheck = resp;
                if (matches.length !== 0) {
                  for (let i = 0; i < matches.length; i++) {
                    const findIndexStudyProgram = dataMappingCheck.findIndex(x => x.id === matches[i].id);
                    if (findIndexStudyProgram > -1) {
                      dataMappingCheck.splice(findIndexStudyProgram, 1);
                      this.tableStudyProgramMapping = dataMappingCheck;
                      this.loadTableMapping = false;
                    }
                  }
                }
              });
            }
          }))
        });
      } else {
        this.chartService.getProgramStudyData().subscribe(response => {
          setTimeout(() => {
            this.tableStudyProgramMapping = response;
            this.dtTrigger7.next();
            this.loadTableMapping = false;
          }, 3000);
        }, err => {
          this.loadTableMapping = false;
        });
      }
    });
  }

  closeStudyProgramMapping() {
    this.studyProgramMappingData.hide();
    this.mappingStudyProgramForm.patchValue({ quota: '' })
    this.mappingStudyProgramForm.patchValue({ sdp: '' });
    this.renderMappStudyProgramForm();
  }

  // render table location step 2
  renderExamTimeCBT(): void {
    if (this.tableExamCBT.length === 0) {
      this.getTableExamCBT();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 0) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.getTableExamCBT();
          });
        }
      });
    }
  }

  // renderExamTimeCBTDetails(): void {
  //   if (this.tableExamCBTDetails.length == 0) {
  //     this.loadDetailsCBTData(this.examId);
  //   } else {
  //     this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
  //       if (index == 4) {
  //         dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //           dtInstance.destroy();
  //           this.loadDetailsCBTData(this.examId);
  //         });
  //       }
  //     });
  //   }
  // }

  // render table exam time step 2
  renderExamTimePsikotest(): void {
    if (this.tableExamPsikotest.length === 0) {
      this.getTableExamPsikotest();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 1) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.getTableExamPsikotest();
          });
        }
      });
    }
  }

  renderExamTimeInterview(): void {
    if (this.tableExamInterview.length === 0) {
      this.getTableExamInterview();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 2) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.getTableExamInterview();
          });
        }
      });
    }
  }

  renderExamTimeTPA(): void {
    if (this.tableExamTPA.length === 0) {
      this.getTableExamTPA();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 3) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.getTableExamTPA();
          });
        }
      });
    }
  }

  // render table registration steps step 3
  // renderRegStep(): void {
  //   this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
  //     if (index == 2) {
  //       dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //         dtInstance.destroy();
  //       });
  //     }
  //   });
  // }

  // render table document requirements step 4
  renderDocumentRequirements(): void {
    if (this.tableDocumentReq.length == 0) {
      this.getTableDocument();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 4) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.getTableDocument();
          });
        }
      });
    }
  }

  // render table pin price step 5
  renderDetailPINPrice(): void {
    if (this.tablePinPrice.length == 0) {
      this.getTablePinPrice();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 5) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.getTablePinPrice();
          });
        }
      });
    }
  }

  // render table mapping study step 6
  renderDetailStudyProgramMapping(): void {
    if (this.tableStudyProgram.length == 0) {
      this.getTableStudyProgram();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 6) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.getTableStudyProgram();
          });
        }
      });
    }
  }

  // render table mapping study all step 6
  renderMappStudyProgramForm(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 7) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
    });
  }

}

