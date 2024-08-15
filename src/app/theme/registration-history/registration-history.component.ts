import { data } from 'jquery';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { WizardComponent } from 'ng2-archwizard/dist';
import { OauthService } from 'src/app/_services/oauth.service';
import { Injectable, Injector } from '@angular/core';

@Component({
  selector: 'app-registration-history',
  templateUrl: './registration-history.component.html',
  styleUrls: ['./registration-history.component.scss']
})
export class RegistrationHistoryComponent implements OnInit {
  public educationHistoryId: any;
  @ViewChild('registrationDone', { static: true }) public registrationDone: any;
  @ViewChild(WizardComponent, { static: true }) public wizard: WizardComponent;
  @ViewChild('reportCardRequirementModal', { static: true }) public reportCardRequirementModal: any;
  @ViewChild('documentRequirementModal', { static: true }) public documentRequirementModal: any;
  @ViewChild('certificateRequirementModal', { static: true }) public certificateRequirementModal: any;
  @ViewChild('transcriptRequirementModal', { static: true }) public transcriptRequirementModal: any;
  @ViewChild('paymentAbilityModal', { static: true }) public paymentAbilityModal: any;
  @ViewChild('recommendationLetterRequirementModal', { static: true }) public recommendationLetterRequirementModal: any;
  @ViewChild('reportCardDetailModal', { static: true }) public reportCardDetailModal: any;
  @ViewChild('certificateDetailModal', { static: true }) public certificateDetailModal: any;
  @ViewChild('utbkModals', { static: true }) public utbkModals: any;
  protected userProfile: any;
  public participantId: any;
  public edit: any;
  public registration_number: any;
  public paymentStatus: any;
  public dataSession: any;
  public idPin: any;
  public dataDocumentPayment: any;
  public listDocumentPayment: any;
  public payment_method: any;
  public stepStatus: any;
  public idRegistrationNumber: any;
  public tableDataDocument: Array<any>;
  public tableDataProdi: Array<any>;
  public loadtableSelectionDocumentData: boolean;
  public loadtableRegistrationProgramStudyData: boolean;
  public documentTypeId: any;
  public transcriptDataForm: FormGroup;
  public certificateDataForm: FormGroup;
  public supportingDataForm: FormGroup;
  public abilityDataForm: FormGroup;
  public participantDocumentForm: FormGroup;
  public documentRequirementDataForm: FormGroup;
  public reportCardDataForm: FormGroup;
  public utbkForm: FormGroup;
  public eprtAndTpaForm: FormGroup;
  public proposalForm: FormGroup;
  public ijazahForm: FormGroup;
  public recommendationS2Form: FormGroup;
  public documentSupportingId: any;
  public documentAbilitySupportingId: any;
  public documentReportCardId: any;
  public documentCertificateId: any;
  public documentParticipantId: any;
  public documentTranscriptId: any;
  public documentAbilitytId: any;
  public documentReportTranscriptId: any;
  public documentRecommendationId: any;
  public documentAbilityid: any;
  public documentIdCheck: any;
  public documentUrl: any;
  public documentTypePersonal: any;
  public documentidPersonal: string;
  public dataAbilityUrl: any;
  public dataRecommendationUrl: any;
  public listDocumentReport: any;
  public listDocumentCertificate: any;
  public dataRequirementUrl: any;
  public dataTranscriptUrl: any;
  public listPaymentMethod: any;
  public isShowIdentityNumber: boolean;
  public loadtableCertificateData: boolean;
  public loadtableReportCardData: boolean;
  public paymentMethod: string;
  public loadFilter: boolean;
  public dataStatusBayar: any;
  public isLunas: boolean;
  public loadPayment: boolean;
  public isFinpay: boolean;
  public isVoucher: boolean;
  public isPaidOff: boolean;
  public loading: boolean;
  public isPinOfflineorVoucher: any;
  public tableDataCertificate: Array<any>;
  public tableDataRaport: Array<any>;
  public hiddenLoc: boolean;
  public hiddenTime: boolean;
  public isPjjProgram: boolean;
  public isPascasarjanaProgram: boolean;
  public isAnotherProgram: boolean;
  public isMathStudy: boolean;
  public isBahasaStudy: boolean;
  public isEnglishStudy: boolean;
  public chemicalStudy: boolean;
  public biologyStudy: boolean;
  public physicsStudy: boolean;
  public economyStudy: boolean;
  public sociologicalStudy: boolean;
  public geographyStudy: boolean;
  public tableTranscript: Array<any>;
  public keyName: any;
  public totalRecord: number;
  public totalRecordPub: number;
  public pageDocument: number = 1;
  public pageDocumentPub: number = 1;
  /*Registration History Table*/
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;

  public loadtableRegistrationHistory: boolean;
  public dataTableRegistrationHistory: any;
  public dtOptions: any = [];
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  public registrationDetail: FormGroup;
  public formType: any;
  public type = 'default';
  public userData: any;
  public selectionPathId: any;
  public loadingCard: boolean;
  public dataUtbkUrl: any;
  public isSaintek: boolean;
  public isTPADocument: boolean;
  public isIPKDocument: boolean;
  public isEPRTDocument: boolean;
  public isPromotor: boolean;
  public isCoPromotor: boolean;
  public isSuratIjinAtasan: boolean;
  public isResidensi: boolean;
  public isProposal: boolean;
  public isIjazahS1: boolean;
  public isIjazahS2: boolean;
  public isPortofolio: boolean;
  public isTranscript: boolean;
  public loadTablePublication: boolean;
  public dataStudyUrl: any;
  public dataProposal: any;
  public dataIjazah: any;
  public dataTranscriptUrlDoc: any;
  public tableDataPublication: any;

  @ViewChild('validationPaymentModal', { static: true }) public validationPaymentModal: any;
  @ViewChild('paymentConfirmation', { static: true }) public paymentConfirmation: any;
  @ViewChild('transcriptRequirementModalView', { static: true }) public transcriptRequirementModalView: any;
  @ViewChild('eprtAndTpaModal', { static: true }) public eprtAndTpaModal: any;
  @ViewChild('ipkModal', { static: true }) public ipkModal: any;
  @ViewChild('recommendationS2Modal', { static: true }) public recommendationS2Modal: any;
  @ViewChild('proposalModal', { static: true }) public proposalModal: any;
  @ViewChild('ijazahModals', { static: true }) public ijazahModals: any;
  @ViewChild('publikasiModals', { static: true }) public publikasiModals: any;
  @ViewChild('publicationDataModals', { static: true }) public publicationDataModals: any;
  //for upload
  public errType: boolean;
  public errSize: boolean;
  public formData = new FormData();

  constructor(public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private userService: ParticipantService,
    private chartService: AdminManagementService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    public router: Router,
    private injector: Injector,
  ) {

    translateService.setDefaultLang(localStorage.getItem('lang'));
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
    this.edit = 'input';
    this.listDocumentPayment = [];
    this.dataSession = [];
    this.loadFilter = false;
    this.isLunas = false;
    this.loadPayment = false;
    this.isFinpay = false;
    this.isVoucher = false;
    this.isPaidOff = false;
    this.loadingCard = false;
    this.isShowIdentityNumber = false;
    this.hiddenLoc = false;
    this.hiddenTime = false;
    this.loading = false;
    this.listDocumentReport = [];
    this.dataRequirementUrl = [];
    this.dataAbilityUrl = [];
    this.dataRecommendationUrl = [];
    this.dataTranscriptUrl = [];
    this.dataUtbkUrl = [];
    this.dataStudyUrl = [];
    this.dataProposal = [];
    this.dataIjazah = [];
    this.dataTranscriptUrlDoc = [];
    this.listDocumentCertificate = [];
    this.tableTranscript = [];
    this.keyName = [];
    this.tableDataDocument = [];
    this.tableDataPublication = [];
    this.isMathStudy = false;
    this.isBahasaStudy = false;
    this.isEnglishStudy = false;
    this.chemicalStudy = false;
    this.biologyStudy = false;
    this.physicsStudy = false;
    this.economyStudy = false;
    this.sociologicalStudy = false;
    this.geographyStudy = false;
    this.loadtableSelectionDocumentData = false;
    this.loadtableRegistrationProgramStudyData = false;
    this.loadtableCertificateData = false;
    this.isSaintek = false;
    this.isPinOfflineorVoucher = [];
    this.registrationDetail = this.fb.group({
      registration_number: ({ value: '', disabled: true }),
      participant_id: [''],
      program: ({ value: '', disabled: true }),
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
    this.transcriptDataForm = this.fb.group({
      document_id: ({ value: '', disabled: true }),
      registration_number: ({ value: '', disabled: true }),
      name: ({ value: '', disabled: true }),
      document_type_id: ({ value: '', disabled: true }),
      gpa: ({ value: '', disabled: true }),
      url: ['']
    });
    this.certificateDataForm = this.fb.group({
      registration_number: [''],
      document_type_id: [''],
      name: ({ value: '', disabled: true }),
      description: ({ value: '', disabled: true }),
      number: ({ value: '', disabled: true }),
      url: [''],
      certificate_type_id: ({ value: '', disabled: true }),
      certificate_level_id: ({ value: '', disabled: true }),
      publication_year: ({ value: '', disabled: true }),
      certificate_score: ({ value: '', disabled: true }),
    });
    this.supportingDataForm = this.fb.group({
      registration_number: [''],
      document_type_id: [''],
      name: ({ value: '', disabled: true }),
      description: ({ value: '', disabled: true }),
      number: ({ value: '', disabled: true }),
      url: [''],
      pic_name: ({ value: '', disabled: true }),
      pic_phone_number: ({ value: '', disabled: true }),
      pic_email_address: ({ value: '', disabled: true }),
      pic_address: ({ value: '', disabled: true }),
    });
    this.abilityDataForm = this.fb.group({
      registration_number: ({ value: '', disabled: true }),
      document_type_id: ({ value: '', disabled: true }),
      name: ({ value: '', disabled: true }),
      description: ({ value: '', disabled: true }),
      number: ({ value: '', disabled: true }),
      url: ['']
    });
    this.participantDocumentForm = this.fb.group({
      document_type_id: [''],
      name: ({ value: '', disabled: true }),
      description: ({ value: '', disabled: true }),
      number: ({ value: '', disabled: true }),
      url: ['']
    });
    this.documentRequirementDataForm = this.fb.group({
      document_id: [''],
      document_name: ({ value: '', disabled: true })
    });
    this.reportCardDataForm = this.fb.group({
      registration_number: [''],
      name: ({ value: '', disabled: true }),
      document_type_id: ({ value: '', disabled: true }),
      description: ({ value: '', disabled: true }),
      number: ({ value: '', disabled: true }),
      url: [''],
      document_id: [''],
      semester_id: [''],
      range_score: ({ value: '', disabled: true }),
    });
    this.utbkForm = this.fb.group({
      KPUScore: ({ value: '', disabled: true }),
      PKScore: ({ value: '', disabled: true }),
      PDPUScore: ({ value: '', disabled: true }),
      KMBDMScore:({ value: '', disabled: true }),
      math: ({ value: '', disabled: true }),
      geography: ({ value: '', disabled: true }),
      historical: ({ value: '', disabled: true }),
      sociological: ({ value: '', disabled: true }),
      economy: ({ value: '', disabled: true }),
      physics: ({ value: '', disabled: true }),
      chemical: ({ value: '', disabled: true }),
      biological: ({ value: '', disabled: true }),
      category: ({ value: '', disabled: true }),
      url: ({ value: ''}),
    });
    this.eprtAndTpaForm = this.fb.group({
      registration_number: ({ value: '', disabled: true }),
      name: new FormControl(''),
      description: new FormControl(''),
      number: ({ value: '', disabled: true }),
      url: ({ value: '' }),
      eprt_tpa_type_id: ({ value: '', disabled: true }),
      eprt_tpa_level_id: ({ value: '', disabled: true }),
      publication_year: ({ value: '', disabled: true }),
      nameCoPromotor: ({ value: '', disabled: true }),
      eprt_tpa_score: ({ value: '', disabled: true }),
      gpa: ({ value: '', disabled: true })
    });
    this.proposalForm = this.fb.group({
      registration_number: ({ value: '', disabled: true }),
      name: new FormControl(''),
      title: ({ value: '', disabled: true }),
      description: ({ value: '', disabled: true }),
      url: ({ value: '' }),
    });
    this.ijazahForm = this.fb.group({
      registration_number: ({ value: '' }),
      name: ({ value: '', disabled: true }),
      url: ({ value: '' }),
      link_document: ({ value: '' })
    });
    this.recommendationS2Form = this.fb.group({
      name_rec1: ({ value: '', disabled: true }),
      handphone_rec1: ({ value: '', disabled: true }),
      email_rec1: ({ value: '', disabled: true }),
      name_rec2: ({ value: '', disabled: true }),
      handphone_rec2: ({ value: '', disabled: true }),
      email_rec2: ({ value: '', disabled: true }),
    });
  }

  registrationDataForm = this.fb.group({
    registration_number: ({ value: '', disabled: true }),
    program: ({ value: '', disabled: true }),
    selection_path: ({ value: '', disabled: true }),
    payment_method: ({ value: '', disabled: true }),
    fullname: ({ value: '', disabled: true }),
    NIK: ({ value: '', disabled: true }),
    registration_fee: ({ value: '', disabled: true }),
    payment_url: ['', Validators.required]
  });

  paymentValidation = this.fb.group({
    registration_number: ({ value: '', disabled: true }),
    program: ({ value: '', disabled: true }),
    selection_path: ({ value: '', disabled: true }),
    payment_method: ({ value: '', disabled: true }),
    registration_fee: ({ value: '', disabled: true }),
    vcode: ({ value: '', disabled: true }),
    voucher_code: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8)])),
  });

  transcriptFormlView =  this.fb.group({
    name: [''],
    totalCredit: [''],
    totalCourse: ['']
  })

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
    this.loadRegistrationHistory();
    this.loadPaymentMethodDataFilter();
  }

  mode(param) {
    this.edit = param;
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

  loadRegistrationHistory() {
    this.loadtableRegistrationHistory = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userProfile.email !== undefined) {
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.participantId = res.participant_id;
        this.userService.getRegistrationListParticipantData(`participant_id=${this.participantId}`).subscribe(response => {
          setTimeout(() => {
            this.tableData = response.data;
            this.dtTrigger.next();
            this.loadtableRegistrationHistory = false;
          }, 3000);
        }, err => {
          this.loadError();
          this.loadtableRegistrationHistory = false;
        });
      });
    } else {
      const unameEx = this.userProfile.username + '@gmail.com';
      this.userService.getParticipantDetailData(unameEx).subscribe(res => {
        this.participantId = res[0].participant_id;
        this.userService.getRegistrationListParticipantData(`participant_id=${this.participantId}`).subscribe(response => {
          setTimeout(() => {
            this.tableData = response.data;
            this.dtTrigger.next();
            this.loadtableRegistrationHistory = false;
          }, 3000);
        }, err => {
          this.loadError();
          this.loadtableRegistrationHistory = false;
        });
      });
    }
  }

  openFormValidationPayment(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.loadPayment = true;
      this.registration_number = data.registration_number;
      this.payment_method = data.payment_method_id;
      this.paymentStatus = data.payment_status_id;
      this.paymentValidation.patchValue({ registration_number: data.registration_number });
      this.paymentValidation.patchValue({ program: data.selection_program ? data.selection_program : '-' });
      this.paymentValidation.patchValue({ selection_path: data.selection_path ? data.selection_path : '-' });
      if (data.price != null) {
        this.paymentValidation.patchValue({ registration_fee: 'Rp' + data.price.toString() });
      } else {
        this.paymentValidation.patchValue({ registration_fee: '-' });
      }
      this.userService.getRegistrationListParticipantData(`registration_number=${this.registration_number}`).subscribe(result => {
        this.paymentValidation.patchValue({ payment_method: result.data[0].payment_method });
        if (result.data[0].payment_method_id == 1) {
          this.isFinpay = true;
          this.isVoucher = false;
          if (this.paymentStatus == 1) {
            this.dataStatusBayar = 'Order has been paid';
            this.isLunas = true;
            this.loadPayment = false;
          } else {
            this.getPinTransactionCheck();
          }
        } else {
            this.isFinpay = false;
            this.isPinOfflineorVoucher = result.data[0].payment_method_id;
            if (result.data[0].payment_status_id == 1) {
              this.isPaidOff = true;
              this.userService.getTransactionVoucher(`?registration_number=${this.registration_number}`).subscribe(res => {
                this.paymentValidation.patchValue({ vcode: res.voucher });
                this.loadPayment = false;
              });
            } else {
              this.loadPayment = false;
              this.isPaidOff = false;
            }
            this.isFinpay = false;
            this.isVoucher = true;
          }
      });
    }
    this.validationPaymentModal.show();
  }

  hideFormValidationPayment() {
    this.loadRegistrationHistory();
    this.renderPayment();
    this.validationPaymentModal.hide();
  }

  voucherVerify() {
    this.loadPayment = true;
    const inputVoucher = {
      voucher: this.paymentValidation.controls['voucher_code'].value,
      registration_number: this.registration_number
    }
    this.userService.postTransactionWithVoucher(inputVoucher).subscribe(res => {
      if (res != null) {
        if (res.status == 'Success') {
          this.loadSuccess();
          this.paymentValidation.get('voucher_code').patchValue('');
          this.hideFormValidationPayment();
          this.loadPayment = false;
        } else {
          this.loadPayment = false;
        }
      } else {
        this.loadPayment = false;
        this.loadError();
      }
    }, (reason) => {
      this.loadPayment = false;
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

  getPinTransactionCheck() {
    this.loadPayment = true;
    this.userService.getPinTransaction(`registration_number=${this.registration_number}`).subscribe(res => {
      this.idPin = res.id;
      const token = this.injector.get(OauthService).retrieveAccessToken();
      if (res.length !== 0) {
        this.userService.getStatusPinTransaction(`id=${this.idPin}&token=${token.token}`).subscribe(res => {
          if (res.status == 'Success') {
            this.dataStatusBayar = res.message;
            this.loadPayment = false;
            if (this.dataStatusBayar == 'Pembayaran Belum Lunas') {
              this.isLunas = false;
            } else {
              this.isLunas = true;
            }
          } else {
            this.loadPayment = false;
            this.isLunas = false;
            this.dataStatusBayar = res.message;
          }
        });
      } else {
        this.loadPayment = false;
        this.isLunas = false;
        this.dataStatusBayar = 'Data pembayaran tidak ditemukan';
      }
    });
  }

  updatePaymentValidation() {
    const data = {
      registration_number: this.registration_number,
      payment_method: this.paymentValidation.controls['payment_method'].value,
      payment_status: 2
    };
    this.chartService.upRegistrationData(data).subscribe(res => {
      if (res != null) {
        if (res.status == 'Success') {
          this.loadSuccess();
          this.loadRegistrationHistory();
          this.renderPayment();
          this.validationPaymentModal.hide();
        } else {
          this.loadError();
          this.validationPaymentModal.hide();
        }
      }
    });
  }

  openFormPaymentConfirmation(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.registration_number = data.registration_number;
      this.viewParticipantPaymentList();
      this.payment_method = data.payment_method_id;
      this.registrationDataForm.patchValue({ registration_number: data.registration_number });
      this.registrationDataForm.patchValue({ payment_method: data.payment_method ? data.payment_method : '-' });
      this.registrationDataForm.patchValue({ registration_fee: 'Rp' + data.price.toString() });
      this.registrationDataForm.patchValue({ payment_url: '' })
    }
    this.paymentConfirmation.show();
  }

  viewParticipantPaymentList() {
    this.chartService.getParticipantPaymentList(`registration_number=${this.registration_number}`).subscribe(res => {
      if (res.data.length !== 0) {
        this.listDocumentPayment = res.data;
        this.dataDocumentPayment = res.data[0].payment_url;
      } else {
        this.listDocumentPayment = '';
      }
    })
  }

  submitPaymentConfirmation() {
    this.loading = true;
    this.chartService.upRegistrationData(this.formData).subscribe(res => {
      if (res != null) {
        if (res.status == 'Success') {
          this.loadSuccess();
            this.loading = false;
            this.renderPayment();
            this.loadRegistrationHistory();
            this.paymentConfirmation.hide();
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

  submitFilePaymentConfirmation(event) {
    this.errSize = false;
    this.errType = false;
    const elem = event.target;
    const files = elem.files[0].name;
    const fileType = files.substr(files.lastIndexOf('.') + 1);
    const size = elem.files[0].size;
    if (elem.files.length > 0) {
      if (
        fileType == 'pdf' || fileType == 'jpg' || fileType == 'jpeg' ||
        fileType == 'png' || fileType == 'doc' || fileType == 'docx' ||
        fileType == 'xls' || fileType == 'xlsx' || fileType == 'ppt' ||
        fileType == 'ppt' || fileType == 'pptx'
      ) {
        if (size < 5000000) {
          this.formData.append('payment_url', elem.files[0]);
          this.formData.append('registration_number', this.registration_number);
          this.formData.append('payment_method', this.payment_method);
        } else {
          this.errSize = true;
          this.registrationDataForm.get('payment_url').patchValue('');
        }
      } else {
        this.errType = true;
        this.registrationDataForm.get('payment_url').patchValue('');
      }
    }
  }

  createRegistrationHistory_4(data) {
    // const datax = {
    //   registration_number: data.registration_number,
    //   registration_step_id: 4
    // }

    this.userService.getRegistrationHistory(`registration_number=${data.registration_number}`).subscribe(result => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].registration_step_id == 7 && result[i].status == "Done") {
          this.stepStatus = 1;
          this.idRegistrationNumber = data.registration_number;
          this.completeRegistration();
          this.userService.getRegistrationCard(`registration_number=${data.registration_number}`).subscribe((res) => {
          }, err => {
            this.loadError();
          });
        } else if (result[i].registration_step_id == 7 && result[i].status == "Not Yet") {
          this.stepStatus = 0;
          this.router.navigate([`/registration-history/registration-data/${data.registration_number}`]);
        }
      }
    });
  }

  completeRegistration() {
    this.openModalDetailRegDataDone();
  }

  openModalDetailRegDataDone() {
    this.loadingCard = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
      this.userData = res.participant_id;
      this.registrationDetail.patchValue({ fullname: res.fullname });
      this.registrationDetail.patchValue({ mobile_phone_number: res.mobile_phone_number });
      this.userService.getRegistrationListParticipantData(`registration_number=${this.idRegistrationNumber}`).subscribe(result => {
        this.registrationDetail.patchValue({ registration_number: this.idRegistrationNumber });
        this.registrationDetail.patchValue({ selection_path: result.data[0].selection_path });
        this.registrationDetail.patchValue({ selection_program: result.data[0].selection_program });
        this.selectionPathId = result.data[0].selection_path_id;
        // this.registrationDetail.patchValue({ exam_location: result.data[0].location ? result.data[0].location : '-' });
        // this.registrationDetail.patchValue({ exam_address: result.data[0].address ? result.data[0].address : '-' });
        // if (result.data[0].exam_status == 1) {
        //   this.hiddenLoc = false;
        //   this.hiddenTime = false;
        //   this.getSession();
        // } else if (result.data[0].exam_status == 2) {
        //   this.hiddenLoc = true;
        //   this.hiddenTime = false;
        //   this.getSession();
        // } else {
        //   this.hiddenLoc = true;
        //   this.hiddenTime = true;
          this.loadingCard = false;
        // }
        // if (result.data[0].category === 'PJJ-ONLINE') {
        //   this.isPjjProgram = true;
        //   this.isPascasarjanaProgram = false;
        //   this.isAnotherProgram = false;
        // } else if (result.data[0].category === 'PASCASARJANA') {
        //   this.isPjjProgram = false;
        //   this.isPascasarjanaProgram = true;
        //   this.isAnotherProgram = false;
        // } else {
        //   this.isPjjProgram = true;
        //   this.isPascasarjanaProgram = false;
        //   this.isAnotherProgram = true;

        // }
      });
    });
    this.registrationDone.show();
  }

  getSession() {
    this.loadingCard = true;
    this.userService.getExamSession(`?registration_number=${this.idRegistrationNumber}`).subscribe(res => {
      this.dataSession = res;
      if (res.length !== 0) {
        this.loadingCard = false;
        this.registrationDetail.patchValue({ exam_start_time: res[0].exam_start_date });
        this.registrationDetail.patchValue({ exam_end_time: res[0].exam_end_date });
        this.registrationDetail.patchValue({ session: res[0].session });
      } else {
        this.loadingCard = false;
      }
    })
  }

  nextStepDocument() {
    this.loadSelectionDocumentData();
    this.loadRegistrationProgramStudyData2();
    this.wizard.navigation.goToStep(1);
  }

  loadSelectionDocumentData() {
    this.loadtableSelectionDocumentData = true;
    this.userService.getRegistrationListParticipantData(`registration_number=${this.idRegistrationNumber}`).subscribe(result => {
      this.chartService.getSelectionDocument(`selection_id=${result.data[0]['selection_path_id']}&active_status=true`).subscribe(response => {
        setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
          this.tableDataDocument = response.data;
          this.totalRecord = response.data.length;
          this.loadtableSelectionDocumentData = false;
        }, 3000);
      }, err => {
        // this.loadError();
        this.loadtableSelectionDocumentData = false;
      });
    });
  }

  loadRegistrationProgramStudyData2() {
    this.loadtableRegistrationProgramStudyData = true;
    this.chartService.getRegistrationProgramStudy(this.idRegistrationNumber).subscribe(response => {
      setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
        this.tableDataProdi = response.data;
        this.loadtableRegistrationProgramStudyData = false;
      }, 3000);
    }, err => {
      this.loadError();
      this.loadtableRegistrationProgramStudyData = false;
    });
  }

  loadDetailCertificateFileDataTable() {
    this.loadtableCertificateData = true;
    this.userService.getDocumentCertificateData(`registration_number=${this.idRegistrationNumber}`).subscribe(response => {
      setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
        this.tableDataCertificate = response.data;
        this.loadtableCertificateData = false;
      }, 3000);
    }, err => {
      this.loadError();
      this.loadtableCertificateData = false;
    });
  }

  loadCertificateDetailFileData(data) {
    window.open(data.certificate_url, '_blank');
    //   this.certificateDataForm.get('url').clearValidators();
    //   this.certificateDataForm.get('url').updateValueAndValidity();
    //   this.documentIdCheck = data.document_id;
    //   this.documentCertificateId = data.document_certificate_id;
    //   this.certificateDataForm.patchValue({ registration_number: this.idRegistrationNumber });
    //   this.certificateDataForm.patchValue({ document_type_id: this.documentTypeId });
    //   this.certificateDataForm.patchValue({ certificate_level_id: data.certificate_level });
    //   this.certificateDataForm.patchValue({ certificate_type_id: data.certificate_type });
    //   this.certificateDataForm.patchValue({ name: data.certificate_name });
    //   this.certificateDataForm.patchValue({ certificate_score: data.certificate_score });
    //   this.certificateDataForm.patchValue({ publication_year: data.publication_year });
    //   this.certificateDataForm.patchValue({ description: data.description });
    //   this.viewDocumentCertificate();
    // this.certificateDetailModal.show();
  }

  viewDocumentCertificate() {
    this.userService.getDocumentCertificateData(`registration_number=${this.idRegistrationNumber}&document_certificate_id=${this.documentCertificateId}`).subscribe(response => {
      if (response.data.length !== 0) {
        this.listDocumentCertificate = response.data;
      } else {
        this.listDocumentCertificate = '';
      }
    });
  }

  loadDetailReportCardFileData() {
    this.loadtableReportCardData = true;
    this.loadSemesterChecked();
    this.userService.getReportCardData(`registration_number=${this.idRegistrationNumber}&document_type_id=7`).subscribe(response => {
        this.tableDataRaport = response.data;
        this.loadtableReportCardData = false;
    }, err => {
      this.loadError();
      this.loadtableReportCardData = false;
    });
  }

  loadSemesterChecked() {
    this.userService.getRaportSemesters(`?registration_number=${this.idRegistrationNumber}&is_checked=1`).subscribe(res => {
      if (res.length !== 0) {
        for (let i = 0; i < res.length; i++) {
          let x = res[i].key_name;

          if (x == 'math') {
            this.isMathStudy =  true;
          }
          else if (x == 'bahasa') {
            this.isBahasaStudy = true;
          }
          else if (x == 'english') {
            this.isEnglishStudy = true;
          }
          else if (x == 'chemical') {
            this.chemicalStudy = true;
          }
          else if (x == 'biology') {
            this.biologyStudy = true;
          }
          else if (x == 'physics') {
            this.physicsStudy = true;
          }
          else if (x == 'economy') {
            this.economyStudy = true;
          }
          else if (x == 'sociological') {
            this.sociologicalStudy = true;
          }
          else if (x == 'geography') {
            this.geographyStudy = true;
          }

        }
      }
    });
  }

  loadReportCardDetailFileData(data) {
    window.open(data.url, '_blank');
    //   this.documentIdCheck = data.document_id;
    //   this.documentReportCardId = data.document_report_card_id;
    //   this.reportCardDataForm.patchValue({ registration_number: this.idRegistrationNumber });
    //   this.reportCardDataForm.patchValue({ document_type_id: this.documentTypeId });
    //   this.reportCardDataForm.patchValue({ semester_id: data.semesters });
    //   this.reportCardDataForm.patchValue({ range_score: data.range_scores });
    //   this.reportCardDataForm.patchValue({ math: data.math });
    //   this.reportCardDataForm.patchValue({ physics: data.physics });
    //   this.reportCardDataForm.patchValue({ bahasa: data.bahasa });
    //   this.reportCardDataForm.patchValue({ english: data.english });
    //   this.viewDocumentReport();
    // this.reportCardDetailModal.show();
  }

  viewDocumentReport() {
    this.userService.getReportCardData(`registration_number=${this.idRegistrationNumber}&document_type_id=7&document_report_card_id=${this.documentReportCardId}`).subscribe(response => {
      if (response.data.length !== 0) {
        this.listDocumentReport = response.data;
      } else {
        this.listDocumentReport = '';
      }
    });
  }

  loadDetailDocumentRequirementData(data) {
    this.chartService.getRegistrationDocument(`${this.idRegistrationNumber}&document_type_id=${data}`).subscribe(response2 => {
      this.documentTypeId = data;
      if (this.documentTypeId == 6) {
        if (response2.data.length !== 0) {
          this.documentTypePersonal = response2.data[0].document_type_id;
          this.documentidPersonal = response2.data[0].document_id;
          this.dataRequirementUrl = response2.data;
          this.documentRequirementModal.show();
          this.participantDocumentForm.patchValue({ name: response2.data[0].document_type });
          this.participantDocumentForm.patchValue({ url: '' });
          if (this.documentTypePersonal == 1) {
            this.participantDocumentForm.patchValue({ number: '' });
            this.isShowIdentityNumber = true;
          } else {
            this.isShowIdentityNumber = false;
          }
        } else {
          this.noDataFoundAlert();
        }
      } else if (this.documentTypeId == 7) {
        this.reportCardRequirementModal.show();
        this.loadDetailReportCardFileData();
      }
      else if (this.documentTypeId == 8) {
        this.userService.getReportCardData(`?registration_number=${this.idRegistrationNumber}&document_type_id=8`).subscribe(response => {
          if (response.length !== 0) {
            this.transcriptRequirementModal.show();
            this.transcriptDataForm.patchValue({ name: 'Transkrip Nilai Pendidikan Terakhir' });
            this.isTranscript =  true;
            this.dataTranscriptUrlDoc = response.data;
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 9) {
        this.userService.getDocumentSupportingData(`registration_number=${this.idRegistrationNumber}&document_type_id=9`).subscribe(response => {
          if (response.data.length !== 0) {
            this.documentRecommendationId = response.data[0].document_id;
            this.documentSupportingId = response.data[0].document_supporting_id;
            this.supportingDataForm.patchValue({ name: 'Surat Rekomendasi' });
            this.supportingDataForm.patchValue({ pic_email_address: response.data[0].pic_email_address });
            this.supportingDataForm.patchValue({ pic_name: response.data[0].pic_name });
            this.supportingDataForm.patchValue({ pic_phone_number: response.data[0].pic_phone_number });
            this.supportingDataForm.patchValue({ pic_address: response.data[0].pic_address });
            this.dataRecommendationUrl = response.data;
            this.recommendationLetterRequirementModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 10) {
        this.loadDetailCertificateFileDataTable()
        this.certificateRequirementModal.show();
      }
      else if (this.documentTypeId == 11) {
        this.userService.getDocumentSupportingData(`registration_number=${this.idRegistrationNumber}&document_type_id=11`).subscribe(response => {
          if (response.data.length !== 0) {
            this.documentAbilitytId = response.data[0].document_id;
            this.documentAbilitySupportingId = response.data[0].document_supporting_id;
            this.abilityDataForm.patchValue({ name: 'Surat Kemampuan Pembayaran' });
            this.dataAbilityUrl = response.data;
            this.paymentAbilityModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 12) {
        this.userService.getUtbkDocument(`?registration_number=${this.idRegistrationNumber}`).subscribe(response => {
          if (response.length !== 0) {
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
            this.utbkForm.patchValue({ category: response[0].major_type == 2 ? 'SOSHUM' : 'SAINTEK' });
            this.dataUtbkUrl = response;
            this.utbkModals.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 13) {
        this.userService.getDocumentStudy(`?registration_number=${this.idRegistrationNumber}&document_type_id=13`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isTPADocument = true;
            this.isCoPromotor = false;
            this.isIPKDocument = false;
            this.isEPRTDocument = false;
            this.isPromotor = false;
            this.eprtAndTpaForm.patchValue({ name: 'TPA' });
            this.eprtAndTpaForm.patchValue({ eprt_tpa_score: response.data[0].score });
            this.eprtAndTpaForm.patchValue({ publication_year: response.data[0].year });
            this.dataStudyUrl = response.data;
            this.eprtAndTpaModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 14) {
        this.userService.getDocumentStudy(`?registration_number=${this.idRegistrationNumber}&document_type_id=14`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isTPADocument = false;
            this.isCoPromotor = false;
            this.isIPKDocument = true;
            this.isEPRTDocument = false;
            this.isPromotor = false;
            this.eprtAndTpaForm.patchValue({ name: 'IPK' });
            this.eprtAndTpaForm.patchValue({ eprt_tpa_score: ''});
            this.eprtAndTpaForm.patchValue({ gpa: response.data[0].score });
            this.dataStudyUrl = response.data;
            this.eprtAndTpaModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 15) {
        this.userService.getDocumentRecommendation(`?registration_number=${this.idRegistrationNumber}`).subscribe(response=> {
          if (response.length !== 0) {
            this.loading = false;
            this.recommendationS2Form.patchValue({name_rec1: response[0].name});
            this.recommendationS2Form.patchValue({handphone_rec1: response[0].handphone});
            this.recommendationS2Form.patchValue({email_rec1: response[0].email});
            this.recommendationS2Form.patchValue({name_rec2: response[1].name});
            this.recommendationS2Form.patchValue({handphone_rec2: response[1].handphone});
            this.recommendationS2Form.patchValue({email_rec2: response[1].email});
            this.recommendationS2Modal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 16) {
        this.userService.getDocumentStudy(`?registration_number=${this.idRegistrationNumber}&document_type_id=16`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isTPADocument = false;
            this.isCoPromotor = false;
            this.isIPKDocument = false;
            this.isEPRTDocument = false;
            this.isPromotor = true;
            this.eprtAndTpaForm.patchValue({ name: 'Kesediaan Promotor' });
            this.dataStudyUrl = response.data;
            this.eprtAndTpaModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 17) {
        this.userService.getDocumentStudy(`?registration_number=${this.idRegistrationNumber}&document_type_id=17`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isProposal = true;
            this.proposalForm.patchValue({ title: response.data[0].title})
            this.dataProposal = response.data;
            this.proposalModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 18) {
        this.chartService.getRegistrationDocument(`${this.idRegistrationNumber}&document_type_id=18`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isIjazahS1 = true;
            this.isIjazahS2 = false;
            this.isPortofolio = false;
            this.ijazahForm.patchValue({ name: response2.data[0].document_type});
            this.dataIjazah = response2.data;
            this.ijazahModals.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 19) {
        this.chartService.getRegistrationDocument(`${this.idRegistrationNumber}&document_type_id=19`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isIjazahS1 = false;
            this.isIjazahS2 = true;
            this.isPortofolio = false;
            this.ijazahForm.patchValue({ name: response2.data[0].document_type});
            this.dataIjazah = response2.data;
            this.ijazahModals.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 20) {
        this.userService.getDocumentStudy(`?registration_number=${this.idRegistrationNumber}&document_type_id=20`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isPromotor = false;
            this.isResidensi = true;
            this.isSuratIjinAtasan = false;
            this.isCoPromotor = false;
            this.isIPKDocument = false;
            this.isTPADocument = false;
            this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
            this.dataStudyUrl = response.data;
            this.eprtAndTpaModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 21) {
        this.userService.getDocumentStudy(`?registration_number=${this.idRegistrationNumber}&document_type_id=21`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isPromotor = false;
            this.isResidensi = false;
            this.isSuratIjinAtasan = true;
            this.isCoPromotor = false;
            this.isIPKDocument = false;
            this.isTPADocument = false;
            this.isEPRTDocument = false;
            this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
            this.dataStudyUrl = response.data;
            this.eprtAndTpaModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 22) {
        this.chartService.getRegistrationDocument(`${this.idRegistrationNumber}&document_type_id=22`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isIjazahS1 = false;
            this.isIjazahS2 = false;
            this.isPortofolio = true;
            this.ijazahForm.patchValue({ link_document: response2.data[0].document_url});
            this.ijazahForm.patchValue({ name: response2.data[0].document_type});
            this.dataIjazah = response2.data;
            this.ijazahModals.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 23) {
        this.userService.getReportCardData(`registration_number=${this.idRegistrationNumber}&document_type_id=23`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isTranscript = false;
            this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S1' });
            this.transcriptDataForm.patchValue({ gpa: response.data[0].gpa });
            this.dataTranscriptUrlDoc = response.data;
            this.transcriptRequirementModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 24) {
        this.userService.getReportCardData(`registration_number=${this.idRegistrationNumber}&document_type_id=24`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isTranscript = false;
            this.transcriptDataForm.patchValue({ name: 'Transkrip Ijazah S2' });
            this.transcriptDataForm.patchValue({ gpa: response.data[0].gpa });
            this.dataTranscriptUrlDoc = response.data;
            this.transcriptRequirementModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 25) {
        this.userService.getTranscriptDocument(`?registration_number=${this.idRegistrationNumber}`).subscribe(response => {
          if (response.length !== 0) {
            const x = response[0].id;
            this.userService.getTranscriptDocumentDetails(`?document_transcript_id=${x}`).subscribe(response => {
              if (response.length !== 0) {
                this.formType = 'view';
                this.tableTranscript = response.courses;
                this.documentTranscriptId = response.id;
                this.transcriptFormlView.patchValue({ name: 'Transkrip Nilai Kredit Transfer ' });
                this.transcriptFormlView.patchValue({ totalCredit: response.total_credit });
                this.transcriptFormlView.patchValue({ totalCourse: response.total_course });
                this.dataTranscriptUrl = response.url;
                this.transcriptRequirementModalView.show();
              }
            });
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 26) {
        this.getTablePublication();
        this.publicationDataModals.show();
        this.loading = false;
      }
      else if (this.documentTypeId == 27) {
        this.userService.getDocumentStudy(`?registration_number=${this.idRegistrationNumber}&document_type_id=27`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isPromotor = false;
            this.isResidensi = false;
            this.isSuratIjinAtasan = false;
            this.isCoPromotor = true;
            this.isIPKDocument = false;
            this.isTPADocument = false;
            this.isEPRTDocument = false;
            this.eprtAndTpaForm.patchValue({ nameCoPromotor: response.data[0].document_name });
            this.eprtAndTpaForm.patchValue({ name: response.data[0].document_description });
            this.dataStudyUrl = response.data;
            this.eprtAndTpaModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else if (this.documentTypeId == 28) {
        this.userService.getDocumentStudy(`?registration_number=${this.idRegistrationNumber}&document_type_id=28`).subscribe(response => {
          if (response.data.length !== 0) {
            this.isPromotor = false;
            this.isResidensi = false;
            this.isSuratIjinAtasan = false;
            this.isCoPromotor = false;
            this.isIPKDocument = false;
            this.isTPADocument = false;
            this.isEPRTDocument = true;
            this.eprtAndTpaForm.patchValue({ name: response.data[0].document_name });
            this.eprtAndTpaForm.patchValue({ eprt_tpa_score: response.data[0].score });
            this.eprtAndTpaForm.patchValue({ publication_year: response.data[0].year });
            this.dataStudyUrl = response.data;
            this.eprtAndTpaModal.show();
          } else {
            this.noDataFoundAlert();
          }
        });
      }
      else {
        this.userService.getPersonalDocumentData(`${this.userData}&document_type_id=${this.documentTypeId}`).subscribe(res => {
          if (res.data.length !== 0) {
            if (res.data[0].document_id === null) {
              this.documentTypePersonal = this.documentTypeId;
              if (this.documentTypePersonal == 1) {
                this.isShowIdentityNumber = true;
              } else {
                this.isShowIdentityNumber = false;
              }
              this.participantDocumentForm.patchValue({ name: res.data[0].document_name });
              this.participantDocumentForm.patchValue({ url: '' });
              this.dataRequirementUrl = '';
              this.documentRequirementModal.show();
            } else {
              this.documentTypePersonal = res.data[0].document_type_id;
              this.documentidPersonal = res.data[0].document_id;
              this.dataRequirementUrl = res.data;
              this.documentRequirementModal.show();
              this.participantDocumentForm.patchValue({ name: res.data[0].document_name });
              this.participantDocumentForm.patchValue({ url: '' });
              if (this.documentTypePersonal == 1) {
                this.participantDocumentForm.patchValue({ number: res.data[0].number });
                this.isShowIdentityNumber = true;
              } else {
                this.participantDocumentForm.patchValue({ number: '' });
                this.isShowIdentityNumber = false;
              }
            }
          }
        });
      }
    });
  }

  closeRequirementDocumentModal() {
    this.documentRequirementModal.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  closeCertificateDocumentModal() {
    this.certificateRequirementModal.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  closeRaportDocumentModal() {
    this.reportCardRequirementModal.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  closeRecommendationLetterModal() {
    this.recommendationLetterRequirementModal.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  closePaymentAbilityModal() {
    this.paymentAbilityModal.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  closeTranscriptModal() {
    this.transcriptRequirementModal.hide();
    document.querySelector('body').classList.add('modal-open');
    this.isTranscript = false;
    this.transcriptDataForm.reset();
  }

  closeUtbkModals() {
    this.utbkForm.reset();
    this.utbkModals.hide();
    this.dataUtbkUrl = [];
    document.querySelector('body').classList.add('modal-open');
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
    this.isCoPromotor = false;
    document.querySelector('body').classList.add('modal-open');
  }

  closeProposal() {
    this.proposalModal.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  closeIjazahModals() {
    this.ijazahModals.hide();
    this.ijazahForm.reset();
    this.isIjazahS1 = false;
    this.isIjazahS2 = false;
    this.isPortofolio = false;
    document.querySelector('body').classList.add('modal-open');
  }

  closeTranscriptRequirementModalView() {
    this.transcriptRequirementModalView.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  closePublicationDataModals() {
    this.publicationDataModals.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  closeRecommendationS2Modal() {
    this.recommendationS2Modal.hide();
    document.querySelector('body').classList.add('modal-open');
  }

  resetWizard() {
    this.wizard.navigation.reset();
    this.registrationDone.hide();
    this.registrationDetail.reset();
  }

  getTablePublication() {
    this.loadTablePublication = true;
    this.userService.getDocumentPublication(`?participant_id=${this.participantId}`).subscribe(response => {
      this.tableDataPublication = response;
      this.totalRecordPub = response.length;
      this.loadTablePublication = false;
    }, err => {
      this.loadError();
      this.loadTablePublication = false;
    });
  }

  paymentAccepted(data) {
    // if (data.payment_receipt_status !== 'Lunas') {
    //   Swal.fire({
    //     title: 'Info!',
    //     text: "Mohon Maaf, Anda belum bisa melengkapi Data Registrasi sebelum melakukan pembayaran",
    //     type: 'info',
    //     showConfirmButton: true,
    //   });
    // } else {
      this.createRegistrationHistory_4(data);
    // }
  }

  renderPayment(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
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

  cetakKartuPeserta() {
    this.userService.getRegistrationCard(`registration_number=${this.idRegistrationNumber}`).subscribe((res) => {
      window.open(res.urls, "_blank");
    }, err => {
      this.loadError();
    });
  }

  panduanPembayaran() {
    const url = "https://smb.telkomuniversity.ac.id/wp-content/uploads/2020/11/PANDUAN-PEMBAYARAN-PIN-PENDAFTARAN.pdf";
    window.open(url).focus();
  }

  noDataFoundAlert() {
    Swal.fire({
      title: 'Info',
      text: 'Tidak ada data ditemukan',
      type: 'error'
    });
  }
}

