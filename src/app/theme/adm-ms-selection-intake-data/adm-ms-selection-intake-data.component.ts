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
import * as moment from 'moment/moment';

@Component({
  selector: 'app-adm-ms-selection-intake-data',
  templateUrl: './adm-ms-selection-intake-data.component.html',
  styleUrls: ['./adm-ms-selection-intake-data.component.scss']
})
export class AdmMsSelectionIntakeDataComponent implements OnInit {
  public loadtableProgramData: boolean;

  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement: DataTableDirective;
  @ViewChild('myPersistenceModal', { static: true }) public myPersistenceModal: any;
  @ViewChild('deleteProgramModal', { static: true }) public deleteProgramModal: any;

  public dataTableProgram: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  public loading: boolean;
  public edit: any;
  public program_name: string;
  public selectedSelectionPath: any;
  public selectedSelectionProgram: string;
  public selectedSchoolYear: string;
  public selectedSemester: string;

  public selectionScheduleId: any;
  public programId: number;
  public intakeId: any;

  public loadFilter: boolean;
  public listProgram: any;
  public listSelectionPath: any;
  public listSchoolYear: any;
  public listSemester: any;
  public listMappingPathYear: any;
  public activeStatus: string;
  public category: string;
  public mappingPathYear: string;
  public modInput: any;
  public modUpdate: any;

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
    this.listSemester = [
      {
        label: 'GANJIL',
        value: '1',
      },
      {
        label: 'GENAP',
        value: '2',
      }
    ];
    this.loading = false;
    this.edit = 'input';
    this.activeStatus = '1';
  }

  selectionIntakeForm = this.fb.group({
    mappingPathYear: new FormControl('', Validators.required),
    school_year: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    semester: new FormControl('', Validators.required),
    description: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
    active_status: ['']
  });

  get f() { return this.selectionIntakeForm.controls; }

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
    this.loadIntakeDataTable();
    this.loadSelectionPathFilter();
    this.getMappingPathYearList();
  }

  createMappingYearIntake() {
    if (this.selectionIntakeForm.valid) {
      this.loading = true;
      if (this.edit == 'input') {
        const schoolyear = this.selectionIntakeForm.get('school_year').value;
        let str_1 = schoolyear.substring(2, 4);
        let str_2 = schoolyear.substring(7, 9);
        let result = str_1.concat(str_2);
        const data = {
          mapping_path_year_id: this.mappingPathYear,
          year: this.selectionIntakeForm.controls['school_year'].value,
          school_year: result,
          active_status: true,
          semester: this.selectedSemester,
          notes: this.selectionIntakeForm.controls['description'].value,
        };
        this.chartService.createMappingPathYearIntake(data).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.myPersistenceModal.hide();
              this.reset();
              this.renderProgramDataTable();
              this.loadIntakeDataTable();
              this.loading = false;
            } else {
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
      }
      else if (this.edit == 'edit') {
        const schoolyear = this.selectionIntakeForm.get('school_year').value;
        let str_1 = schoolyear.substring(2, 4);
        let str_2 = schoolyear.substring(7, 9);
        let result = str_1.concat(str_2);
        const data = {
          id: this.intakeId,
          mapping_path_year_id: this.mappingPathYear,
          year: this.selectionIntakeForm.controls['school_year'].value,
          school_year: result,          
          active_status: this.selectionIntakeForm.controls['active_status'].value,
          notes: this.selectionIntakeForm.controls['description'].value,
          semester: this.selectedSemester,
        };
        this.chartService.updateMappingPathYearIntake(data).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.myPersistenceModal.hide();
              this.reset();
              this.loadIntakeDataTable();
              this.renderProgramDataTable();
              this.loading = false;
            } else {
              this.loadError();
              this.loading = false;
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
  }

  getMappingPathYearList() {
    this.chartService.getSelectionYear(`?active_status=true`).subscribe(response => {
      this.loading = false;
      this.listMappingPathYear = response && response.map((value) => {
        const { id, name, start_date } = value;
        const startdate = moment(start_date).format("DD MMMM YYYY");        
        return { value: id.toString(), label: name + ' - ' + startdate  };
      });
    });
  }

  loadIntakeDataTable() {
    this.loadtableProgramData = true;
    this.chartService.getMappingPathYearIntake(`?active_status=true`).subscribe(response => {
      if (response !== null) {
        this.tableData = response;
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtableProgramData = false;
      } else {
        this.loadtableProgramData = false;
        this.tableData = [];
        this.dtTrigger.next(); // Trigger for load datatable
      }
    }, err => {
      this.loadtableProgramData = false;
    });
  }

  loadDetailProgramData(data) {
    this.mode('edit');
    this.intakeId = data.id;
    this.mappingPathYear= data.mapping_path_year_id && data.mapping_path_year_id.toString();
    this.selectedSemester = data && data.semester.toString();
    this.selectionIntakeForm.patchValue({ school_year: data.year });
    this.selectionIntakeForm.patchValue({ description: data.notes });
    if (data.active_status === false) {
      this.selectionIntakeForm.patchValue({ active_status: '0' });
    } else {
      this.selectionIntakeForm.patchValue({ active_status: data.active_status });
    }
    this.myPersistenceModal.show();
  }

  showModalInputProgramData(data) {
    this.mode('input');
    this.myPersistenceModal.show();
    this.reset();
    this.selectedSemester = '';
  }

  mode(param) {
    this.edit = param;
  }

  reset() {
    this.selectionIntakeForm.reset();
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

  renderProgramDataTable(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: any) => {
          dtInstance.destroy();
        });
      }
    });
  }

  loadForDeleteProgramData(data) {
    this.selectionScheduleId = data.id;
    this.deleteProgramModal.show();
  }

  deleteIntakeData(data) {
    const datas = {
      id: data.id,
      active_status: '0'
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
        this.loadtableProgramData = true;
        this.chartService.updateMappingPathYearIntake(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              // this.deleteProgramModal.hide();
              this.renderProgramDataTable();
              this.loadIntakeDataTable();
              this.loadtableProgramData = false;
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loadtableProgramData = false;
            }
          } else {
            Swal.fire({
              position: 'center',
              type: 'error',
              title: this.failedDel,
              showConfirmButton: false,
              timer: 2000
            });
            this.loadtableProgramData = false;
          }
        }, (reason) => {
          this.loadtableProgramData = false;
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

  onDeselected(val) {
    switch (val) {
      case 'activeStatus':
        this.activeStatus = '1';
        break;
    }
  }

  loadProgramFilter() {
    const data = {
      filter: ''
    }
    this.chartService.getProgramData(data).subscribe((resp) => {
      this.listProgram =
        resp.data &&
        resp.data.map((value) => {
          return {
            value: value.id,
            label: value.name,
          };
        });
    });
  }

  loadSelectionPathFilter() {
    this.loading = true;
    this.chartService.getSelectionPathAdmin(`?active_status=1`).subscribe((response) => {
      this.loading = false;
      this.listSelectionPath = response && response.map((value) => {
        const { selection_path_id, name } = value;
        return { value: selection_path_id.toString(), label: name };
      });
    });
  }
}
