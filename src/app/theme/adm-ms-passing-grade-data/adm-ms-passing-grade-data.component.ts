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
  templateUrl: './adm-ms-passing-grade-data.component.html',
  styleUrls: ['./adm-ms-passing-grade-data.component.scss']
})
export class AdmMsPassingGradeDataComponent implements OnInit {
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
  public passingGradeForm: FormGroup;
  public loading: boolean;
  public isApplyFilter: boolean;
  public tablePassingGrade: Array<any>;
  public studyProgramSelected: string;
  public selectionPathSelected: string;
  public listSelectionPath: any;
  public formType: any;
  public type = 'default';
  public loadTablePassingGrade: boolean;
  public listStudyProgram: any;
  public id: string;
  public listActiveStatusFilters: Array<any>;
  public mappingPathYearId: number;
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
    this.passingGradeForm = fb.group({
      program_study_id: new FormControl(''),
      general_knowledge: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      math: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      english: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      physics: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      chemical: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      biology: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      drawing: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      bahasa: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      economy: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      sociological: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      historical: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      geography: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      tpa: new FormControl('', [Validators.required, Validators.max(800), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      photography_knowledge: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      minimum_grade_value: new FormControl('', [Validators.required, Validators.max(100), Validators.maxLength(3), Validators.min(0), Validators.pattern('^[0-9]*$')]),
      active_status: new FormControl(''),
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
    this.isApplyFilter = false;
    this.loadTablePassingGrade = false;
    this.loading = false;
    this.tablePassingGrade = [];
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

  openPassingGradeModals(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.loading = false;
      this.passingGradeId = data.id;
      this.studyProgramSelected = data.program_study_id && data.program_study_id.toString();
      this.passingGradeForm.patchValue({ general_knowledge: data.general_knowledge });
      this.passingGradeForm.patchValue({ math: data.math });
      this.passingGradeForm.patchValue({ english: data.english });
      this.passingGradeForm.patchValue({ physics: data.physics });
      this.passingGradeForm.patchValue({ chemical: data.chemical });
      this.passingGradeForm.patchValue({ biology: data.biology });
      this.passingGradeForm.patchValue({ economy: data.economy });
      this.passingGradeForm.patchValue({ bahasa: data.bahasa });
      this.passingGradeForm.patchValue({ geography: data.geography });
      this.passingGradeForm.patchValue({ sociological: data.sociological });
      this.passingGradeForm.patchValue({ historical: data.historical });
      this.passingGradeForm.patchValue({ tpa: data.tpa });
      this.passingGradeForm.patchValue({ drawing: data.drawing });
      this.passingGradeForm.patchValue({ photography_knowledge: data.photography_knowledge });
      this.passingGradeForm.patchValue({ minimum_grade_value: data.min_grade_value });
      if (data.active_status == true) {
        this.passingGradeForm.patchValue({ active_status: '1' });
      } else {
        this.passingGradeForm.patchValue({ active_status: '0' });
      }      
    } else {
      this.loading = false;
      this.passingGradeForm.patchValue({ general_knowledge: '0' });
      this.passingGradeForm.patchValue({ math: '0' });
      this.passingGradeForm.patchValue({ english: '0' });
      this.passingGradeForm.patchValue({ physics: '0' });
      this.passingGradeForm.patchValue({ chemical: '0' });
      this.passingGradeForm.patchValue({ biology: '0' });
      this.passingGradeForm.patchValue({ historical: '0' });
      this.passingGradeForm.patchValue({ sociological: '0' });
      this.passingGradeForm.patchValue({ bahasa: '0' });
      this.passingGradeForm.patchValue({ tpa: '0' });
      this.passingGradeForm.patchValue({ economy: '0' });
      this.passingGradeForm.patchValue({ geography: '0' });
      this.passingGradeForm.patchValue({ drawing: '0' });
      this.passingGradeForm.patchValue({ photography_knowledge: '0' });
      this.passingGradeForm.patchValue({ minimum_grade_value: '0' });
    }
    this.passingGradeModals.show();
  }

  closePassingGradeModals() {
    this.studyProgramSelected = '';
    this.passingGradeModals.hide();
    this.passingGradeForm.reset();
    this.loading = false;
  }

  loadFiterMappingPath(event) {
    this.id = event.value;
    this.mappingPathYearSelected = '';
    this.chartService.getMappingPathYearIntake(`?active_status=true&selection_path_id=${this.id}`).subscribe((res) => {
      this.listSelectionYear = res && res.map((value) => {
        const { id, year, mapping_path_year_id } = value;
      return { value: id.toString(), label: year, mapping_path_year_id: mapping_path_year_id };
      });
    });
  }

  loadMappingPathYearId(event) {
    this.mappingPathYearId = event.mapping_path_year_id;
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

  loadStudyProgramData(id) { // Pilihan Registration Step
    this.chartService.getStudyProgramPassingGrade(`?selection_path_id=${id}`).subscribe((response) => {
    // this.chartService.getMappingProgramStudyData(`selection_path_id=${id}&active_status=true`).subscribe((response) => {
      this.listStudyProgram = response && response.map((value) => {
        const { id, study_program_name } = value;
        return { value: id.toString(), label: study_program_name };
      });
     }, err => {
      this.loadError();
    });
  }

  resetFilters() {
    this.selectionPathSelected = '';
    this.mappingPathYearSelected = '';
  }

  applyFilters(year) {
    this.mappingPathYearSelected = year;
    this.getTablePassingGrade();
    this.loadStudyProgramData(this.id);
    this.isApplyFilter = true;
  }

   // load table step 7
   getTablePassingGrade() {
    this.loadTablePassingGrade = true;
    this.chartService.getPassingGradeData(`?active_status=true&mapping_path_year_id=${this.mappingPathYearId}`).subscribe(response => {
    // this.chartService.getPassingGradeData(`?active_status=${this.activeStatusPassingGradeSelected}&mapping_path_year_id=${this.mappingPathYearSelected}&study_program_id=${this.studyProgramSelected}`).subscribe(response => {
      this.tablePassingGrade = response;
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
            bahasa,
            economy,
            sociological,
            historical,
            tpa,
            drawing,
            geography,
            photography_knowledge,
            minimum_grade_value,
            active_status
          } = this.passingGradeForm.value;
          let payloadInput = {
            program_study_id : this.studyProgramSelected,
            mapping_path_year_id: this.mappingPathYearId,
            general_knowledge: general_knowledge,
            math: math,
            english: english,
            physics: physics,
            chemical: chemical,
            biology: biology,
            bahasa: bahasa,
            economy: economy,
            sociological: sociological,
            historical: historical,
            geography: geography,
            tpa: tpa,
            drawing: drawing,
            photography_knowledge: photography_knowledge,
            min_grade_value: minimum_grade_value,
            active_status: '1'
          };
          this.chartService.createPassingGrade(payloadInput).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.loadSuccess();
                this.passingGradeModals.hide();
                this.passingGradeForm.reset();
                this.renderPassingGradeTable();
                this.loadStudyProgramData(this.id);
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
          program_study_id : this.studyProgramSelected,
          mapping_path_year_id: this.mappingPathYearId,
          general_knowledge: this.passingGradeForm.controls['general_knowledge'].value,
          bahasa: this.passingGradeForm.controls['bahasa'].value,
          math: this.passingGradeForm.controls['math'].value,
          english: this.passingGradeForm.controls['english'].value,
          physics: this.passingGradeForm.controls['physics'].value,
          chemical: this.passingGradeForm.controls['chemical'].value,
          biology: this.passingGradeForm.controls['biology'].value,
          economy: this.passingGradeForm.controls['economy'].value,
          sociological: this.passingGradeForm.controls['sociological'].value,
          geography: this.passingGradeForm.controls['geography'].value,
          historical: this.passingGradeForm.controls['historical'].value,
          tpa: this.passingGradeForm.controls['tpa'].value,
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
              this.passingGradeForm.reset();
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

  deletePassingGrade(data) {
    const datas = {
      id: data.id,
      active_status: 'false'
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
        this.chartService.updatePassingGrade(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.renderPassingGradeTable();
              this.loadStudyProgramData(this.id);
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
            Swal.fire({
              position: 'center',
              type: 'error',
              title: this.failedDel,
              showConfirmButton: false,
              timer: 2000
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
