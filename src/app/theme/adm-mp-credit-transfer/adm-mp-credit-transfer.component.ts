import { ParticipantService } from './../../_services/participant.service';
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

@Component({
  selector: 'app-adm-mp-credit-transfer',
  templateUrl: './adm-mp-credit-transfer.component.html',
  styleUrls: ['./adm-mp-credit-transfer.component.scss']
})
export class AdmMpCreditTransferComponent implements OnInit {
  public loadtableProgramData: boolean;

  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement: DataTableDirective;
  @ViewChild('showMatkulSetaraModals', { static: true }) public showMatkulSetaraModals: any;

  // LANG
  public confirmation: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;
  public loadCreditTransfer: boolean;
  public tableTranscript: Array<any>;
  public tableTransferCredit: Array<any>;
  public transcriptId: any;
  public registration_number: any;
  public formType: any;
  public type = 'default';
  public loading: boolean;
  public courseID: any;
  public gradeList: any;
  public isCreditTransferNodata: boolean;

  public coursesForm: FormGroup;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  constructor(
    public translate: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private appService: AppService,
    public router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    public userService: ParticipantService
  ) {
    translate.setDefaultLang(localStorage.getItem('lang'));
    this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
    this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
    this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
    this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
    this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
    this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translate.setDefaultLang(res.lang);
      this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
      this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
      this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    });
    this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
    this.loadCreditTransfer = false;
    this.tableTranscript = [];
    this.tableTransferCredit = [];
    this.coursesForm = fb.group({
      coursesCode: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10)])),
      coursesName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)])),
      coursesSKS: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(1), Validators.pattern('^[0-9]*$')])),
      // coursesScore: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(2), Validators.pattern('^[a-eA-E+-.]*$')])),
      coursesScore: new FormControl('', Validators.required)
    });
    this.gradeList = [
      {
        value:'A',
        label:'A'
      },
      {
        value:'A-',
        label:'A-'
      },
      {
        value:'B+',
        label:'B+'
      },
      {
        value:'B',
        label:'B'
      },
      {
        value:'B-',
        label:'B-'
      },
      {
        value:'C+',
        label:'C+'
      },
      {
        value:'C',
        label:'C'
      },
      {
        value:'D',
        label:'D'
      },
      {
        value:'E',
        label:'E'
      },
    ]
    this.loading = false;
    this.isCreditTransferNodata = false;
  }

  get f() {
    return this.coursesForm.controls;
  }

  ngOnInit() {
    this.dtOptions = {
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
    this.renderCreditTransferTable(); 
    // this.getTableCreditTransferSetara();
  }

  openCourseModal(data) {
      this.coursesForm.patchValue({ coursesCode: data.course_code_approved });
      this.coursesForm.patchValue({ coursesName: data.course_name_approved });
      this.coursesForm.patchValue({ coursesSKS: data.credit_hour_approved });
      this.coursesForm.patchValue({ coursesScore: data.grade_approved && data.grade_approved.toString() });
      this.courseID = data.id;
      this.showMatkulSetaraModals.show();      
  }

  closeCourses() {
    this.showMatkulSetaraModals.hide();
  }
  getTableCreditTransfer() {
    this.loadCreditTransfer = true;
    this.userService.getTranscriptDocument(`?registration_number=${this.registration_number}`).subscribe(response => {
      this.transcriptId = response[0].id;
      this.userService.getTranscriptDocumentDetails(`?document_transcript_id=${this.transcriptId}`).subscribe(response => {
          this.loadCreditTransfer = false;
          this.tableTranscript = response.courses;
          if (response.courses.length != 0) {
            this.isCreditTransferNodata = true;
          } else {
            this.isCreditTransferNodata = false;
          }
          this.dtTrigger.next(); // Trigger for load datatable

      });
    });
  }

  getTableCreditTransferSetara() {
    this.loadCreditTransfer = true;
    this.userService.getTranscriptDocument(`?registration_number=${this.registration_number}`).subscribe(response => {
      this.transcriptId = response[0].id;
      this.userService.getTranscriptDocumentDetails(`?document_transcript_id=${this.transcriptId}`).subscribe(response => {
          this.loadCreditTransfer = false;
          this.tableTransferCredit = response.courses;
      });
    });
  }

  generateEqualizationResult() {
    if (this.isCreditTransferNodata) {
      this.loading = true;
      this.chartService.getCreditTransferResult(`?document_transcript_id=${this.transcriptId}`).subscribe(response=> {
        if (response.length !== 0) {
        window.open(response.urls);
        this.loading = false;
      } else {
          this.loading = false;
          Swal.fire({
            title: 'Info',
            text: 'Tidak ada data ditemukan',
            type: 'error'
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Info',
        text: 'Tidak ada data ditemukan',
        type: 'error'
      });
    }
  }

  createCourses() {
    if (this.coursesForm.valid) {
      this.loading = true;
          const payloadEdit = [{
            id: this.courseID,
            course_code_approved: this.coursesForm.value.coursesCode.toUpperCase(),
            course_name_approved: this.coursesForm.value.coursesName,
            credit_hour_approved: this.coursesForm.value.coursesSKS,
            grade_approved: this.coursesForm.value.coursesScore
          }];
          const jsonGroup = JSON.stringify(payloadEdit);
          const payload = {
            document_transcript_id: this.transcriptId,
            json: jsonGroup
          }
          this.chartService.updateCreditTransferAdmin(payload).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.renderCreditTransferTable();
                this.closeCourses();
                this.loading = false;
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

  renderCreditTransferTable(): void {
    if (this.tableTranscript.length == 0 ) {
      this.getTableCreditTransfer();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 0) {
          dtElement.dtInstance.then((dtInstance: any) => {
            dtInstance.destroy();
            this.getTableCreditTransfer();
          });
        }
      });
    }
  }
}
