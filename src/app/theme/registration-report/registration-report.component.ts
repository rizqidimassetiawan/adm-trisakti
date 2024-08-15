import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { OauthService } from 'src/app/_services/oauth.service';

@Component({
  selector: 'app-registration-report',
  templateUrl: './registration-report.component.html',
  styleUrls: ['./registration-report.component.scss']
})
export class  RegistrationReportComponent implements OnInit {

  protected userProfile:any;
  public participantId:any;

  public edit:any;
  public registration_number: any;
  public loading:boolean;
  public passingResultId:any;
  public downloadProgress: boolean;
  public dataKelulusan: any;
  public dataKelulusanFailed: any;
  public dataKelulusanConfirmation: any;
  public dataSeleksi: any;
  public dataStudyProgram: any;
  public dataProgram: any;

  /*Participant Pass Table*/
  @ViewChild(DataTableDirective, {static: true}) public dtElement: DataTableDirective;
  public loadtableParticipantPassData:boolean;
  public dataTableParticipantPassData: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  @ViewChild('passDetailDataModal', {static: true}) public passDetailDataModal: any;
  @ViewChild('failedpassDetailDataModal', {static: true}) public failedpassDetailDataModal: any;
  @ViewChild('confirmationpassDetailDataModal', {static: true}) public confirmationpassDetailDataModal: any;
  @ViewChild('confirmationTransferDataModal', {static: true}) public confirmationTransferDataModal: any;

  constructor(public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private userService: ParticipantService,
    private chartService: AdminManagementService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private injector: Injector,
    private datePipe: DatePipe) {

    translateService.setDefaultLang(localStorage.getItem('lang'));
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.registration_number = +this.route.snapshot.paramMap.get('registration_number');
    this.downloadProgress = false;
    this.dataKelulusan = [];
    this.dataKelulusanFailed = [];
    this.dataKelulusanConfirmation = [];
  }

  passingResultDataForm = this.fb.group({
    result_id : [''],
    selection_path_id : [''],
    selection_path_name :[''],
    selection_program_id :[''],
    program_name :[''],
    registration_number :[''],
    total_score:[''],
    pass_status:[''],
    study_program_name:[''],
    faculty_name:['']
  });

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve:true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      order:[[0, 'asc']]  ,
      initComplete: () => {
      }
    };
    this.loadPassingData();
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

  loadPassingData() {
    this.loadtableParticipantPassData = true;
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userProfile.email !== undefined) {
      this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
        this.participantId = res.participant_id;
        this.chartService.getParticipantPassData(`participant_id=${this.participantId}`).subscribe(response => {
            this.tableData = response.data;
            this.dtTrigger.next(); // Trigger for load datatable
            this.loadtableParticipantPassData = false;
        }, err => {
          this.loadError();
          this.loadtableParticipantPassData = false;
        });
      });
    } else {
      const unameEx = this.userProfile.username + '@gmail.com';
      this.userService.getParticipantDetailData(unameEx).subscribe(res => {
        this.participantId = res.participant_id;
        this.chartService.getParticipantPassData(`registration_number=${this.registration_number}&participant_id=${this.participantId}`).subscribe(response => {
          setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
            this.tableData = response.data;
            this.dtTrigger.next(); // Trigger for load datatable
            this.loadtableParticipantPassData = false;
          }, 3000);
        }, err => {
          this.loadError();
          this.loadtableParticipantPassData = false;
        });
      });
    }
  }

  loadDetailPassingData(data) {
    this.dataKelulusan = data;
    this.passingResultId = data.result_id;
    this.dataSeleksi = data.selection_path_name;
    this.passingResultDataForm.patchValue({selection_path_id: data.selection_path_id.toString()});
    this.passingResultDataForm.patchValue({selection_path_name: data.selection_path_name});
    this.passingResultDataForm.patchValue({registration_number: data.registration_number});
    this.passingResultDataForm.patchValue({total_score: data.total_score});
    this.passingResultDataForm.patchValue({pass_status: data.pass_status});
    this.passingResultDataForm.patchValue({study_program_name: data.study_program_name});
    this.passingResultDataForm.patchValue({faculty_name: data.faculty_name});
    this.passDetailDataModal.show();
  }

  loadDetailTransferData(data) {
    this.dataKelulusan = data;
    this.passingResultId = data.result_id;
    this.dataSeleksi = data.selection_path_name;
    this.dataStudyProgram = data.transfer_program_study_name.replace('&amp;', '')
    this.passingResultDataForm.patchValue({selection_path_id: data.selection_path_id.toString()});
    this.passingResultDataForm.patchValue({selection_path_name: data.selection_path_name});
    this.passingResultDataForm.patchValue({registration_number: data.registration_number});
    this.passingResultDataForm.patchValue({total_score: data.total_score});
    this.passingResultDataForm.patchValue({pass_status: data.pass_status});
    this.passingResultDataForm.patchValue({study_program_name: data.transfer_program_study_name});
    this.passingResultDataForm.patchValue({faculty_name: data.transfer_faculty_name});
    this.confirmationTransferDataModal.show();
  }

  loadDetailFailedPassingData(data) {
    this.dataKelulusanFailed = data;
    this.passingResultId = data.result_id;
    this.passingResultDataForm.patchValue({selection_path_id: data.selection_path_id.toString()});
    this.passingResultDataForm.patchValue({selection_path_name: data.selection_path_name});
    this.passingResultDataForm.patchValue({registration_number: data.registration_number});
    this.passingResultDataForm.patchValue({total_score: data.total_score});
    this.passingResultDataForm.patchValue({pass_status: data.pass_status});
    this.passingResultDataForm.patchValue({study_program_name: data.study_program_name});
    this.passingResultDataForm.patchValue({faculty_name: data.faculty_name});
    this.failedpassDetailDataModal.show();
  }

  loadDetailConfirmationPassingData(data) {
    this.dataKelulusanConfirmation = data;
    this.confirmationpassDetailDataModal.show()
  }

  createBilling(regNumber) {
    this.downloadProgress = true;
    const token = this.injector.get(OauthService).retrieveAccessToken();
    const payload = {
      token: token.token,
      registration_number: regNumber
    }
    this.userService.createBillingNewStudent(payload).subscribe(res => {
      if (res.status == 'Success') {
        this.unduhSuratKelulusan(regNumber);
      } else {
        this.downloadProgress = false;
        this.broadcasterService.notifBroadcast(true, {
          title: res.status,
          msg:res.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
      }
    }, err => {
      this.downloadProgress = false;
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg:'Terjadi kesalahan',
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }

  unduhSuratKelulusan(registration_number) {
    this.downloadProgress = true;
    this.userService.getGenerateExamPassLetter(`?registration_number=${registration_number}`).subscribe(res => {
        this.downloadProgress = false;
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', res.urls);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }, err => {
      this.downloadProgress = false;
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg:'Terjadi kesalahan',
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
    });
  }
}
