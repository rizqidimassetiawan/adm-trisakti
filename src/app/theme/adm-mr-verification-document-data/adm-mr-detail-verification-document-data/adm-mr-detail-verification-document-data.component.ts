import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/_services/app.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ParticipantService } from 'src/app/_services/participant.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-adm-mr-detail-verification-document-data',
  templateUrl: './adm-mr-detail-verification-document-data.component.html',
  styleUrls: ['./adm-mr-detail-verification-document-data.component.scss']
})
export class AdmMrDetailVerificationDocumentDataComponent implements OnInit {
  public loadtableData: boolean;
  @ViewChildren(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild('showTableDoc', { static: true }) public showTableDoc: any;
  @ViewChild('showTableDocDetails', { static: true }) public showTableDocDetails: any;
  @ViewChild('revisedModals', { static: true }) public revisedModals: any;
  @ViewChild('revisedModalsInfo', { static: true }) public revisedModalsInfo: any;

  public dataTableProgram: any;
  // public dtOptions: any = [];
  public tableData: Array<any>;
  // public dtTrigger = new Subject();
  public registrationNumber: any;
  private newstudentId:any;
  private participantID:any;
  public dataBiodatas: any;
  public isIndonesianNationality: boolean;
  public hiddenAddressDetail: boolean;
  public dataParents: any;
  public haveParents: boolean;
  public tableDocument: Array<any>;
  public tableRaport: Array<any>;
  public loadTableDocument: boolean;
  public loadTableRaport: boolean;
  public loadingDownload: boolean;
  public loading: boolean;
  public rejectedForm: FormGroup;
  public pageDocument: number;
  public pageDocumentTable: number;
  public selectedTab: string;
  public loadingParent: boolean;
  public photoCard: any;
  public documentId: any;
  public idStudent: any;
  public isApprovalData: boolean;
  // LANG
  public confirmation: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;
  public approve: string;
  public rejected: string;
  public dataApproval: any;
  public dataEmailNim: any;

  constructor(
    public translate: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private appService: AppService,
    private userService: ParticipantService,
    private route: ActivatedRoute,
    public router: Router,
    private fb: FormBuilder,
    private http: HttpClient
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
    this.rejectedForm = this.fb.group({
      desc_rejected: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)]))
    });
    this.registrationNumber = this.route.snapshot.paramMap.get('registrationnumber');
    this.newstudentId = this.route.snapshot.paramMap.get('id');
    this.participantID = this.route.snapshot.paramMap.get('participantId');
    this.tableData = [];
    this.dataBiodatas = [];
    this.dataParents = [];
    this.tableDocument = [];
    this.tableRaport = [];
    this.dataApproval = [];
    this.photoCard = [];
    this.dataEmailNim = [];
    this.loadingDownload = false;
    this.loadTableDocument = false;
    this.loadingParent = false;
    this.isApprovalData = false;
    this.loading = false;
    this.pageDocument = 1;
    this.pageDocumentTable = 1;
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
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
    this.getBiodatas();
  }

  getBiodatas() {
    this.loading = true;
    this.userService.getPartcipantNewstudent(`?participant_id=${this.participantID}`).subscribe(res => {
      this.loading = false;
      this.dataBiodatas = res;
      if (res.nationality == 98) {
        this.isIndonesianNationality = true;
      } else {
        this.isIndonesianNationality = false;
      }
      if (res.address_country == 1) {
        this.hiddenAddressDetail = false;
      } else {
        this.hiddenAddressDetail = true;
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

  getParents() {
    this.loadingParent = true;
    this.userService.getFamilyNewstudent(`?participant_id=${this.participantID}`).subscribe(res => {
      this.dataParents = res;
      this.loadingParent = false;
      if (res.is_guardian == false) {
        this.haveParents = true;
      } else {
        this.haveParents = false;
      }
    }, (reason) => {
      this.loadingParent = false;
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

  getDocument() {
    this.getDocumentRegistrationTable();
  }

  getEmailNim() {
    this.loading = true;
    this.userService.getNewStudentRegistration(`?participant_id=${this.participantID}&registration_number=${this.registrationNumber}`).subscribe(res => {
      this.loading = false;
      this.dataEmailNim = res[0];
      this.idStudent = res[0].id;

    });
  }

  checkDocumentStatusApproval() {
    this.loading = true;
    this.userService.getNewStudentDocumentStatus(`?registration_number=${this.registrationNumber}`).subscribe( res => {
      if (res.length != 0) {
        const docAppovalFalse = _.findWhere(res, {approval_final_status: false });
        const docAppovalNull = _.findWhere(res, {approval_final_status: null });
        if (docAppovalNull == undefined) {
          if (docAppovalFalse == undefined) {
            this.loading = false;
            this.isApprovalData = true;
          } else {
            this.loadTableDocument = false;
            this.isApprovalData = false;
          }
        } else {
          this.loadTableDocument = false;
          this.isApprovalData = false;
        }
      } else {
        this.isApprovalData = false;
      }
    });
  }

  generateNimEmail() {
    this.loading = true;
    if (this.isApprovalData) {
      const payload = {
        id: this.idStudent
      }
      this.chartService.insertStudentIdEmailStudent(payload).subscribe(resp => {
        if (resp.status == 'Success') {
          this.loading = false;
          Swal.fire({
            title: resp.status,
            text: resp.message,
            type: 'success',
            allowOutsideClick: false,
          });
          this.getEmailNim();
        } else {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: resp.status,
            msg: resp.message,
            timeout: 5000,
            theme: 'default',
            position: 'top-right',
            type: 'error'
          });
        }
      },(reason) => {
        this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: "Gagal",
            msg: reason.error.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "error",
          });
          this.loadTableDocument = false;
        });
      } else {
        Swal.fire({
          title: 'Info!',
          text: 'Tidak dapat melakukan generate email karena dokumen Mahasiswa belum lengkap / belum di approved',
          type: 'info',
          allowOutsideClick: false,
        });
        this.loading = false;
      }
  }

    changeTab(event) {
    this.loading = true;
    if (event == 'tabParent') {
      this.loading = false;
      this.getParents();
    } else if (event == 'tabDocument') {
      this.loading = false;
      this.getDocument();
    } else if (event == 'tabBiodata') {
      this.loading = false;
      this.getBiodatas();
    } else if (event == 'tabNim') {
      this.loading = false;
      this.getEmailNim();
      this.checkDocumentStatusApproval();
    }
  }

  getDocumentRegistrationTable() {
    this.loadTableDocument = true;
    this.userService.getNewStudentDocument(`?id=${this.newstudentId}`).subscribe(response => {
      this.tableDocument = response;
      // this.dtTrigger.next();
      this.loadTableDocument = false;
    }, (reason) => {
      this.loadTableDocument = false;
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

  getRaportTableDocument() {
    this.loadTableRaport = true;
    this.userService.getNewStudentDocument(`?id=${this.newstudentId}&document_type_id=7`).subscribe(response => {
      this.tableRaport = response[0].document;
      this.loadTableRaport = false;
    }, (reason) => {
      this.loadTableDocument = false;
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

  submitDocumentApprovalRaport(data) {
    const payload = {
      document_id: data.document_id
    }
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
        this.loadTableDocument = true;
        this.chartService.updateApprovalStatusDocumentStudent(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Success',
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'success'
            });
            this.loadTableDocument = false;
            this.getRaportTableDocument();
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: res.status,
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loadTableDocument = false;
          }
        },
        (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: "Gagal",
            msg: reason.error.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "error",
          });
          this.loadTableDocument = false;
        });
      }
    });
  }

  submitDocumentApproval(data) {
    const payload = {
      document_id: data.document.document_id
    }
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
        this.loadTableDocument = true;
        this.chartService.updateApprovalStatusDocumentStudent(payload).subscribe(res => {
          if (res.status == 'Success') {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Success',
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'success'
            });
            this.loadTableDocument = false;
            this.getDocumentRegistrationTable();
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: res.status,
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loadTableDocument = false;
          }
        },
        (reason) => {
          this.broadcasterService.notifBroadcast(true, {
            title: "Gagal",
            msg: reason.error.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "error",
          });
          this.loadTableDocument = false;
        });
      }
    });
  }

  showRejectedReport(data) {
    this.revisedModals.show();
    this.documentId = data.document_id;
  }

  showRejected(data) {
    this.revisedModals.show();
    this.documentId = data.document.document_id;
  }

  submitDocumentRejected() {
    this.loading = true;
    const payload = {
      document_id: this.documentId,
      approval_final_comment: this.rejectedForm.controls.desc_rejected.value
    }
    this.chartService.updateRejectedStatusDocumentStudent(payload).subscribe(res => {
      if (res.status == 'Success') {
        this.broadcasterService.notifBroadcast(true, {
          title: 'Success',
          msg: res.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'success'
        });
        this.loading = false;
        this.getDocumentRegistrationTable();
        this.getRaportTableDocument();
        this.closeRevisedModals();
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
    },
    (reason) => {
      this.broadcasterService.notifBroadcast(true, {
        title: "Gagal",
        msg: reason.error.message,
        timeout: 5000,
        theme: "default",
        position: "top-right",
        type: "error",
      });
      this.loading = false;
    });
  }

  showTableDocument() {
    this.getRaportTableDocument();
    this.showTableDoc.show();
  }

  showTableDocClose() {
    document.querySelector('body').classList.add('modal-open');
    this.showTableDoc.hide();
  }

  showTableDocDetailsClose() {
    // this.isUpdatedRaport = false;
    this.showTableDocDetails.hide();
  }

  downloadDocument(data) {
    this.loadingDownload = true;
    if (data.document == null) {
      this.loadingDownload = false;
      Swal.fire({
        title: 'Failed',
        text: 'Tidak ada dokumen',
        type: 'error',
        allowOutsideClick: false,
      });
    } else {
      if (data.document.url != null) {
        this.loadingDownload = false;
        window.open(data.document.url, 'blank');
      } else {
        this.loadingDownload = false;
        Swal.fire({
          title: 'Failed',
          text: 'Tidak ada dokumen',
          type: 'error',
          allowOutsideClick: false,
        });
      }
    }
  }

  downloadDocumentRaport(data) {
    this.loadingDownload = true;
      if (data.url != null) {
        this.loadingDownload = false;
        window.open(data.url, 'blank');
      } else {
        this.loadingDownload = false;
        Swal.fire({
          title: 'Failed',
          text: 'Tidak ada dokumen',
          type: 'error',
          allowOutsideClick: false,
        });
      }
  }

  revisedData(data) {
    this.dataApproval = data;
    this.revisedModalsInfo.show();
  }

  revisedDataReport(data) {
    this.dataApproval = data;
    this.revisedModalsInfo.show();
  }

  closeRevisedModals() {
    this.revisedModals.hide();
    this.rejectedForm.reset();
  }

  closeRevisedInfoModals() {
    this.revisedModalsInfo.hide();
  }

  // renderDocument(): void {
  //   if (this.tableDocument.length == 0) {
  //     this.getDocumentRegistrationTable();
  //   } else {
  //     this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
  //       if (index == 0) {
  //         dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //           dtInstance.destroy();
  //           this.getDocumentRegistrationTable();
  //         });
  //       }
  //     });
  //   }
  // }

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

}
