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

@Component({
  selector: 'app-adm-ms-selection-schedule-data',
  templateUrl: './adm-mp-participant-score-data.component.html',
  styleUrls: ['./adm-mp-participant-score-data.component.scss']
})
export class AdmMpParticipantScoreDataComponent implements OnInit {
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
  public activeStatusPassingGradeSelected: string;
  public passingGradeFiltersForm: FormGroup;
  public passingGradeForm: FormGroup;
  public loading: boolean;
  public isApplyFilter: boolean;
  public tablePassingGrade: Array<any>;
  public studyProgramSelected: string;
  public selectionPathSelected: string;
  public studyProgramSelectedFilters: string;
  public mappingPathYearId: string;
  public listSelectionPath: any;
  public formType: any;
  public type = 'default';
  public loadTablePassingGrade: boolean;
  public loadFilterStatus: boolean;
  public listStudyProgram: any;
  public qualifiedStatus: any;
  public id: string;
  public listActiveStatusFilters: Array<any>;
  public listStudyProgramFilters: Array<any>;
  public listRank: any;
  public rankSelected: string;
  public isMedical: boolean;
  public isDesign: boolean;
  // LANG
  public confirmation: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;

  constructor(
    public translate: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private appService: AppService,
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
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translate.setDefaultLang(res.lang);
      this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
      this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
      this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    });
    this.passingGradeFiltersForm = fb.group({
      passing_grade: new FormControl({ value: '', disabled: true })
    });
    this.passingGradeForm = fb.group({
      selection_path_id: new FormControl(''),
      name: new FormControl(''),
      registration_number: new FormControl(''),
      score: new FormControl(''),
      rank: new FormControl('', [Validators.required]),
      status_approval: new FormControl('', [Validators.required]),
      tpa: new FormControl('', [Validators.required]),
      psikotest: new FormControl('', [Validators.required]),
      interview: new FormControl('', [Validators.required]),
      drawing: new FormControl('', [Validators.required]),
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
    this.listRank = [
      {
        label: 'Peringkat 1',
        value: '1'
      },
      {
        label: 'Peringkat 2',
        value: '2'
      },
      {
        label: 'Peringkat 3',
        value: '3'
      }
    ];
    this.isApplyFilter = false;
    this.loadTablePassingGrade = false;
    this.loading = false;
    this.tablePassingGrade = [];
    this.loadFilterStatus = false;
    this.qualifiedStatus = [];
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

  openParticipantScoreModals(data) {
      this.loading = false;
      this.passingGradeId = data.id;
      this.qualifiedStatus = data;
      this.passingGradeForm.patchValue({ name: data.fullname });
      this.passingGradeForm.patchValue({ score: data.grade_final });
      this.passingGradeForm.patchValue({ registration_number: data.registration_number });
      this.passingGradeForm.patchValue({ rank: data.rank && data.rank.toString() });
      if (data.approval_faculty == true) {
        this.passingGradeForm.patchValue({ status_approval: '1' });
      } else {
        this.passingGradeForm.patchValue({ status_approval: '0' });
      }
      if (data.is_medical == true) {
        this.isMedical = true;
        this.isDesign = false;
        this.passingGradeForm.patchValue({ tpa: data.tpa });
        this.passingGradeForm.patchValue({ interview: data.interview_test });
        this.passingGradeForm.patchValue({ psikotest: data.psychological_test });
        this.passingGradeForm.get('psikotest').setValidators(Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]));
        this.passingGradeForm.get('psikotest').updateValueAndValidity();
        this.passingGradeForm.get('interview').setValidators(Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]));
        this.passingGradeForm.get('interview').updateValueAndValidity();
        this.passingGradeForm.get('tpa').setValidators(Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]));
        this.passingGradeForm.get('tpa').updateValueAndValidity();
        this.passingGradeForm.get('drawing').clearValidators();
        this.passingGradeForm.get('drawing').updateValueAndValidity();
      } else {
        if (data.is_art == true) {
          this.isMedical = false;
          this.isDesign = true;
          this.passingGradeForm.patchValue({ drawing: data.drawing_test });
          this.passingGradeForm.get('psikotest').clearValidators();
          this.passingGradeForm.get('psikotest').updateValueAndValidity();
          this.passingGradeForm.get('interview').clearValidators();
          this.passingGradeForm.get('interview').updateValueAndValidity();
          this.passingGradeForm.get('tpa').clearValidators();
          this.passingGradeForm.get('tpa').updateValueAndValidity();
          this.passingGradeForm.get('drawing').setValidators(Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]));
          this.passingGradeForm.get('drawing').updateValueAndValidity();
        } else {
          this.isDesign = false;
          this.isMedical = false;
          this.passingGradeForm.get('psikotest').clearValidators();
          this.passingGradeForm.get('psikotest').updateValueAndValidity();
          this.passingGradeForm.get('interview').clearValidators();
          this.passingGradeForm.get('interview').updateValueAndValidity();
          this.passingGradeForm.get('tpa').clearValidators();
          this.passingGradeForm.get('tpa').updateValueAndValidity();
          this.passingGradeForm.get('drawing').clearValidators();
          this.passingGradeForm.get('drawing').updateValueAndValidity();
        }
      }

    this.passingGradeModals.show();
  }

  closePassingGradeModals() {
    this.studyProgramSelected = '';
    this.passingGradeModals.hide();
    this.passingGradeForm.reset();
    this.loading = false;
    this.isMedical = false;
    this.isDesign = false;
  }

  loadFiterMappingPath(event) {
    this.loadTablePassingGrade = true;
    this.id = event.value;
    this.activeStatusPassingGradeSelected = event.value;
    this.mappingPathYearSelected = '';
    this.studyProgramSelectedFilters = '';
    this.passingGradeFiltersForm.controls.passing_grade.reset();
    this.chartService.getMappingPathYearIntake(`?active_status=true&selection_path_id=${this.id}`).subscribe((res) => {
      this.loadTablePassingGrade = false;
      this.listSelectionYear = res && res.map((value) => {
        const { id, year, mapping_path_year_id } = value;
        return { value: id.toString(), label: year, mapping_path_year_id: mapping_path_year_id };
      });
    });
  }

  loadFiterStudyProgram(event) {
    this.loadTablePassingGrade = true;
    this.mappingPathYearId = event.mapping_path_year_id;
    this.chartService.getProgramStudyByFacultyAdmin(`?selection_path_id=${this.selectionPathSelected}`).subscribe((res) => {
      this.loadTablePassingGrade = false;
      this.listStudyProgramFilters = res && res.map((value) => {
        const { study_program_id, study_program_name} = value;
        return { value: study_program_id.toString(), label: study_program_name };
      });
    });
  }

  loadFilterPassingGrade(event) {
    this.loadTablePassingGrade = true;
    this.studyProgramSelected = event.value;
    this.chartService.getPassingGradeData(`?active_status=true&mapping_path_year_id=${this.mappingPathYearId}&program_study_id=${this.studyProgramSelected}`).subscribe(response => {
      if (response.length !== 0) {
        this.loadTablePassingGrade = false;
        this.passingGradeFiltersForm.patchValue({ passing_grade: 'Passing Grade: ' + response[0].min_grade_value});
      } else {
        this.loadTablePassingGrade = false;
        this.passingGradeFiltersForm.patchValue({ passing_grade: 'Passing Grade: 0'});
      }
    });
  }

  loadActiveStatusFilters(event) {
    this.id = event.value;
    this.activeStatusPassingGradeSelected = '';
    this.mappingPathYearSelected = '';
  }

  loadFilterSelectionPath() {
    this.chartService.getSelectionPathAdmin(`?active_status=1`).subscribe((res) => {
      this.listSelectionPath = res && res.map((value) => {
        const { selection_path_id, name } = value;
        return { value: selection_path_id.toString(), label: name };
      });
    });
  }

  resetFilters() {
    this.selectionPathSelected = '';
    this.activeStatusPassingGradeSelected = '';
    this.mappingPathYearSelected = '';
    this.studyProgramSelectedFilters = '';
    this.passingGradeFiltersForm.patchValue({ passing_grade: '0'});
  }

  applyFilters(status, year) {
    this.activeStatusPassingGradeSelected = status;
    this.mappingPathYearSelected = year;
    this.renderPassingGradeTable();
    this.isApplyFilter = true;
  }

   // load table step 7
   getTablePassingGrade() {
    this.loadTablePassingGrade = true;
    this.chartService.getParticipantScoreData(`?mapping_path_year_intake_id=${this.mappingPathYearSelected}&mapping_path_year_id=${this.mappingPathYearId}&study_program_id=${this.studyProgramSelectedFilters}`).subscribe(response => {
    // this.chartService.getPassingGradeData(`?active_status=${this.activeStatusPassingGradeSelected}&mapping_path_year_id=${this.mappingPathYearSelected}`).subscribe(response => {
      this.tablePassingGrade = response;
      this.dtTrigger.next();
      this.loadTablePassingGrade = false;
    }, err => {
      this.loadTablePassingGrade = false;
    });
  }

  createPassingGradeData() {
    if (this.passingGradeForm.valid) {
          this.loading = true;
          const {
            registration_number,
            score,
            status_approval,
            rank,
            tpa,
            psikotest,
            interview,
            drawing
          } = this.passingGradeForm.value;
          let payloadInput = {
            registration_number: registration_number,
            approval_faculty: status_approval === '1' ? true : '0',
            program_study_id: this.studyProgramSelectedFilters,
            grade_final: score,
            rank: rank,
            tpa: tpa,
            interview_test: interview,
            psychological_test: psikotest,
            drawing_test: drawing,
          }
          this.chartService.createParticipantPassingGradeFaculty(payloadInput).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.closePassingGradeModals()
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
    } else {
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
