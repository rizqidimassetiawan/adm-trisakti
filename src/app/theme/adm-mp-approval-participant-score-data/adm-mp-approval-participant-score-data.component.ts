import { ParticipantService } from 'src/app/_services/participant.service';
import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/_services/app.service';
import { HttpClient } from '@angular/common/http';
import { SelectOptionService } from 'src/app/shared/components/select/select-option.service';
import { IOption } from 'ng-select';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import * as _ from 'underscore';

@Component({
  selector: 'app-adm-ms-selection-schedule-data',
  templateUrl: './adm-mp-approval-participant-score-data.component.html',
  styleUrls: ['./adm-mp-approval-participant-score-data.component.scss']
})
export class AdmMpApprovalParticipantScoreDataComponent implements OnInit {
  public loadtableProgramData: boolean;

  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement: DataTableDirective;
  @ViewChild('myPersistenceModal', { static: true }) public myPersistenceModal: any;
  @ViewChild('deleteProgramModal', { static: true }) public deleteProgramModal: any;
  @ViewChild('passingGradeModals', { static: true }) public passingGradeModals: any;

  public dataTableProgram: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();
  public passingGradeId: number;
  public listSelectionYear: any;
  public mappingPathYearSelected: string;
  public mappingPathYearId: string;
  public activeStatusPassingGradeSelected: string;
  public passingGradeFiltersForm: FormGroup;
  public passingGradeForm: FormGroup;
  public loading: boolean;
  public isApplyFilter: boolean;
  public tablePassingGrade: Array<any>;
  public studyProgramSelected: string;
  public selectionPathSelected: string;
  public studyProgramSelectedFilters: string;
  public facultySelectedFilters: string;
  public facultyApprovedSelectedFilters: string;
  public listSelectionPath: any;
  public formType: any;
  public type = 'default';
  public loadTablePassingGrade: boolean;
  public listStudyProgram: any;
  public id: string;
  public approvalUniversitySelectedFilters: string;
  public listApprovalUniversity: Array<any>;
  public listActiveStatusFilters: Array<any>;
  public listStudyProgramFilters: Array<any>;
  public arrayPassingGrade: Array<any>;
  public passingGradeID: Array<any>;
  public passingGradeCheckedData: any;
  public checked1: string;
  public checkedDataTable: boolean;
  public ischecked: boolean;
  public noData: boolean;
  public noCheck: boolean;
  public dataApproval: any;
  public studyprogramApprovedSelected: string;
  public listStudyProgramParticipant: Array<any>;
  public isPass: boolean;
  public registrationNumber: string;


  // LANG
  public confirmation: string;
  public sure: string;
  public yes: string;
  public no: string;
  public approve: string;
  public confirmationApproved: string;
  public confirmationApproved1: string;
  public reject: string;
  public successDel: string;
  public failedDel: string;
  public success: string;
  public failed: string;
  public listSpecialization: any;
  public specialization: string;

  constructor(
    public translate: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private userService: ParticipantService,
    private appService: AppService,
    public router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    translate.setDefaultLang(localStorage.getItem('lang'));
    this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
    this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
    this.translate.get('CONTENT.confirmation-approved').subscribe((l) => { this.confirmationApproved = l; });
    this.translate.get('CONTENT.confirmation-approved-1').subscribe((l) => { this.confirmationApproved1 = l; });
    this.translate.get('ROOT.accepted').subscribe((l) => { this.approve = l; });
    this.translate.get('ROOT.rejected').subscribe((l) => { this.reject = l; });
    this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
    this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
    this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
    this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    this.translate.get('ROOT.failed').subscribe((l) => { this.failed = l; });
    this.translate.get('ROOT.success').subscribe((l) => { this.success = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translate.setDefaultLang(res.lang);
      this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translate.get('CONTENT.confirmation-approved').subscribe((l) => { this.confirmationApproved = l; });
      this.translate.get('CONTENT.confirmation-approved-1').subscribe((l) => { this.confirmationApproved1 = l; });
      this.translate.get('ROOT.accepted').subscribe((l) => { this.approve = l; });
      this.translate.get('ROOT.rejected').subscribe((l) => { this.reject = l; });
      this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
      this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
      this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
      this.translate.get('ROOT.failed').subscribe((l) => { this.failed = l; });
      this.translate.get('ROOT.success').subscribe((l) => { this.success = l; });
    });
    this.passingGradeFiltersForm = fb.group({
      passing_grade: new FormControl('')
    });
    this.passingGradeForm = fb.group({
      selection_path_id: new FormControl(''),
      name: new FormControl(''),
      registration_number: new FormControl(''),
      score: new FormControl(''),
      study_program: new FormControl('', Validators.required),
      specialization_id: new FormControl('', Validators.required),
      rank: new FormControl(''),
      status_approval: new FormControl('', [Validators.required])
    });
    this.listActiveStatusFilters = [
      {
        label: 'ACTIVE',
        value: '1',
      },
      {
        label: 'NONACTIVE',
        value: '0',
      }
    ];
    this.listApprovalUniversity = [
      {
        label: 'Semua Data',
        value: ''
      },
      {
        label: 'Tidak Disetujui',
        value: 'false'
      },
      {
        label: 'Disetujui',
        value: '1'
      }
    ];
    this.passingGradeCheckedData = {
      registration_number: '',
      approval_university: '',
    }
    this.isApplyFilter = false;
    this.loadTablePassingGrade = false;
    this.loading = false;
    this.checkedDataTable = false;
    this.ischecked = false;
    this.noCheck = false;
    this.isPass = false;
    this.tablePassingGrade = [];
    this.arrayPassingGrade = [];
    this.passingGradeID = [];
    this.dataApproval = [];
  }

  get fpg() {
    return this.passingGradeForm.controls;
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
    this.loadFilterSelectionPath();
  }

  openParticipantScoreModals(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.passingGradeId = data.id;
      this.registrationNumber = data.registration_number;
      if (data.pass_status == true) {
        this.isPass = true;
        this.passingGradeForm.patchValue({ status_approval: '1'});
        this.studyprogramApprovedSelected =  data.program_study_id && data.program_study_id.toString();
        if (data.program_study_id != null) {
          this.getSpecializationStudyProgram(data.program_study_id);
          this.loading = false;
        } else {
          this.loading = false;
        }
        this.specialization = data.specialization_id && data.specialization_id.toString();
        this.passingGradeForm.get('study_program').setValidators(Validators.required);
        this.passingGradeForm.get('study_program').updateValueAndValidity();
        this.passingGradeForm.get('specialization_id').setValidators(Validators.required);
        this.passingGradeForm.get('specialization_id').updateValueAndValidity();
      } else if (data.pass_status == false) {
        this.isPass = false;
        this.passingGradeForm.patchValue({ status_approval: '0'});
        this.studyprogramApprovedSelected = '';
        this.loading = false;
      }
      this.dataApproval = data;
      this.loadStudyProgramList();
      this.passingGradeForm.patchValue({ registration_number: data.registration_number });
      this.passingGradeForm.patchValue({ name: data.fullname });
      this.passingGradeForm.patchValue({ study_program: data.study_program_branding_name });
      this.passingGradeForm.patchValue({ score: data.grade_final });
      this.passingGradeForm.get('study_program').clearValidators();
      this.passingGradeForm.get('study_program').updateValueAndValidity();
      this.passingGradeForm.get('specialization_id').clearValidators();
      this.passingGradeForm.get('specialization_id').updateValueAndValidity();
    } else {
      this.loading = false;
    }
    this.passingGradeModals.show();
  }

  loadStudyProgramList() {
    this.chartService.getRegistrationProgramStudy(`${this.registrationNumber}`).subscribe((res) => {
      this.listStudyProgramParticipant = res && res.data.map((value) => {
        const { study_program_id, study_program_name, priority, approval_faculty } = value;
        let status;
        if (approval_faculty == true) {
          status = 'Lulus';
        } else {
          status = 'Tidak Lulus';
        }
        return { value: study_program_id.toString(), label:  priority + '. ' + study_program_name + ' : Dinyatakan ' + status + ' oleh Fakultas'};
      });
    });
  }

  closePassingGradeModals() {
    this.studyProgramSelected = '';
    this.passingGradeModals.hide();
    this.passingGradeForm.reset();
    this.loading = false;
    this.isPass = false;
  }

  changeRadioButton(event) {
    if (event.target.value == '1') {
      this.isPass = true;
      this.passingGradeForm.get('study_program').setValidators(Validators.required);
      this.passingGradeForm.get('study_program').updateValueAndValidity();
      this.passingGradeForm.get('specialization_id').setValidators(Validators.required);
      this.passingGradeForm.get('specialization_id').updateValueAndValidity();
    } else if (event.target.value == '0' || event.value == '') {
      this.isPass = false;
      this.passingGradeForm.get('study_program').clearValidators();
      this.passingGradeForm.get('study_program').updateValueAndValidity();
      this.passingGradeForm.get('specialization_id').clearValidators();
      this.passingGradeForm.get('specialization_id').updateValueAndValidity();
      this.passingGradeForm.controls.study_program.reset();
      this.passingGradeForm.controls.specialization_id.reset();
    }
  }

  loadFilterPassingGrade(event) {
    this.passingGradeFiltersForm.patchValue({ passing_grade: 78 });
  }

  loadFiterMappingPath(event) {
    this.id = event.value;
    this.chartService.getMappingPathYearIntake(`?active_status=true&selection_path_id=${this.id}`).subscribe((res) => {
      this.listSelectionYear = res && res.map((value) => {
        const { id, year, mapping_path_year_id } = value;
        return { value: id.toString(), label: year, pathYear: mapping_path_year_id};
      });
    });
  }

  loadFiterStudyProgram(event) {
    this.mappingPathYearSelected = event.value;
    this.mappingPathYearId = event.pathYear;
    this.chartService.getMappingProgramStudyData(`selection_path_id=${this.id}&active_status=true`).subscribe((res) => {
      this.listStudyProgramFilters = res.data && res.data.map((value) => {
        const { study_program_id, study_program_name } = value;
        return { value: study_program_id.toString(), label: study_program_name };
      });
    });
  }

  loadActiveStatusFilters(event) {
    this.id = event.value;
    this.activeStatusPassingGradeSelected = '';
    this.mappingPathYearSelected = '';
    this.loadStudyProgramData();
  }

  loadFilterSelectionPath() {
    this.chartService.getSelectionPathAdmin(`?active_status=1`).subscribe((res) => {
      this.listSelectionPath = res && res.map((value) => {
        const { selection_path_id, name } = value;
        return { value: selection_path_id.toString(), label: name };
      });
    });
  }

  loadStudyProgramData() { // Pilihan Registration Step
    this.chartService.getMappingProgramStudyData(`?selection_path_id=${this.id}&active_status=true`).subscribe((response) => {
      this.listStudyProgram = response.data && response.data.map((value) => {
        const { study_program_id, study_program_name } = value;
        return { value: study_program_id.toString(), label: study_program_name };
      });
     }, err => {
      this.loadError();
    });
  }

  getSpecializationStudyProgram(evt) {
    this.userService.getStudyProgramSpecialization(`?program_study_id=${evt}`).subscribe((res) => {
      this.listSpecialization = res && res.map((value) => {
        const { id, specialization_name } = value;
        return { value: id.toString(), label: specialization_name };
      });
    });
  }

  resetFilters() {
    this.selectionPathSelected = '';
    this.studyProgramSelectedFilters = '';
    this.mappingPathYearSelected = '';
    this.approvalUniversitySelectedFilters = '';
  }

  applyFilters(study, year, status) {
    this.studyProgramSelectedFilters = study;
    if (status === 'false' || status === '1') {
      this.approvalUniversitySelectedFilters = status;
    } else {
      this.approvalUniversitySelectedFilters = '';
    }
    this.mappingPathYearSelected = year;
    this.renderPassingGradeTable();
    this.isApplyFilter = true;
    this.arrayPassingGrade = [];
  }

  // load table step 7
  getTablePassingGrade() {
    this.loadTablePassingGrade = true;
    this.chartService.getPassingGradeUniversity(`?mapping_path_year_id=${this.mappingPathYearId}&study_program_id=${this.studyProgramSelectedFilters ? this.studyProgramSelectedFilters : ''}&approval_university=${this.approvalUniversitySelectedFilters}`).subscribe(response => {
      // this.chartService.getPassingGradeData(`?active_status=${this.activeStatusPassingGradeSelected}&mapping_path_year_id=${this.mappingPathYearSelected}`).subscribe(response => {
      this.tablePassingGrade = response;
      if (response.length === 0) {
        this.noData = true;
      } else {
        this.noData = false;
      }
      this.dtTrigger.next();
      this.loadTablePassingGrade = false;
    }, err => {
      this.loadTablePassingGrade = false;
    });
  }

  createPassingGradeData() {
    if (this.passingGradeForm.valid) {
      switch (this.formType) {
        case 'input':
          this.loading = true;
          const {
            general_knowledge,
            math,
            english,
            physics,
            chemical,
            biology,
            drawing,
            photography_knowledge,
            minimum_grade_value,
            active_status
          } = this.passingGradeForm.value;
          let payloadInput = {
            program_study_id: this.studyProgramSelected,
            mapping_path_year_id: this.mappingPathYearSelected,
            general_knowledge: general_knowledge,
            math: math,
            english: english,
            physics: physics,
            chemical: chemical,
            biology: biology,
            drawing: drawing,
            photography_knowledge: photography_knowledge,
            min_grade_value: minimum_grade_value,
            active_status: active_status
          };
          this.chartService.createPassingGrade(payloadInput).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.passingGradeModals.hide();
                this.renderPassingGradeTable();
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
            this.loading = false;
          });
          break;
        case 'edit':
          this.loading = true;
          let payloadEdit = {
            id: this.passingGradeId,
            program_study_id: this.studyProgramSelected,
            mapping_path_year_id: this.mappingPathYearSelected,
            general_knowledge: this.passingGradeForm.controls['general_knowledge'].value,
            math: this.passingGradeForm.controls['math'].value,
            english: this.passingGradeForm.controls['english'].value,
            physics: this.passingGradeForm.controls['physics'].value,
            chemical: this.passingGradeForm.controls['chemical'].value,
            biology: this.passingGradeForm.controls['biology'].value,
            drawing: this.passingGradeForm.controls['drawing'].value,
            photography_knowledge: this.passingGradeForm.controls['photography_knowledge'].value,
            min_grade_value: this.passingGradeForm.controls['minimum_grade_value'].value,
            active_status: this.passingGradeForm.controls['active_status'].value
          };
          this.chartService.updatePassingGrade(payloadEdit).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loading = false;
                this.loadSuccess();
                this.passingGradeModals.hide();
                this.renderPassingGradeTable();
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
          break;
          deafult:
          break;
      }
    }
  }

  createApprovalParticipantScore() {
    if(this.passingGradeForm.valid) {
      this.loading = true;
      const payload = {
        registration_number: this.registrationNumber,
        pass_status: this.passingGradeForm.value.status_approval,
        program_study_id: this.studyprogramApprovedSelected ? this.studyprogramApprovedSelected : '',
        specialization_id: this.passingGradeForm.value.specialization_id
      }
      this.chartService.createRegistrationResultProgramStudy(payload).subscribe(res => {
        if (res.status == 'Success') {
          this.loading = false;
          this.closePassingGradeModals();
          this.renderPassingGradeTable();
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "success",
          });
        } else {
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "error",
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
  }

  renderPassingGradeTable(): void {
    if (this.tablePassingGrade.length == 0) {
      this.getTablePassingGrade();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 0) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.getTablePassingGrade();
          });
        }
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
}
