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

@Component({
  selector: 'app-adm-ms-program-data',
  templateUrl: './adm-ms-program-data.component.html',
  styleUrls: ['./adm-ms-program-data.component.scss']
})
export class AdmMsProgramDataComponent implements OnInit {
  public loadtableProgramData:boolean;

  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild(DataTableDirective, {static: true}) public dtElement: DataTableDirective;
  @ViewChild('myPersistenceModal', {static: true}) public myPersistenceModal: any;
  @ViewChild('deleteProgramModal', {static: true}) public deleteProgramModal: any;

  public dataTableProgram: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  // Field Add Program Data
  public loading: boolean;
  public edit: any;
  public program_name:string;
  public program_description:string;
  public program_active_status:boolean;

  public programId: any;
  public programName:any;
  public programDesc:any;

  public loadFilter:boolean;
  public listActiveStatus:any;
  public listCategoryProgram:any;
  public activeStatus:string;
  public category:string;
  public modInput: any;
  public modUpdate: any;
  public listActiveStatusFilters: Array<any>;

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
    private http:HttpClient
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
    this.loading = false;
    this.edit = 'input';
    this.activeStatus = '1';
  }

  programDataForm = this.fb.group({
    name:['',Validators.required],
    category_program:['',Validators.required],
    description:['',Validators.required],
    active_status:['']
  });

  get f() { return this.programDataForm.controls; }

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
          initComplete: () => {
          }
        };
    // this.loadProgramData();
    this.loadProgramDataTable();
    this.loadActiveStatusDataFilter();
    this.loadCategoryFilter();
    // this.createProgramData();
  }

  createProgramData(){
    if (this.programDataForm.valid) {
      this.loading = true;
      if (this.edit == 'input') {
        const data = {
          name : this.programDataForm.controls['name'].value,
          description :this.programDataForm.controls['description'].value,
          active_status : '1',
          category: this.category
          // active_status : this.programDataForm.controls['active_status'].value
        };
        this.chartService.postProgramData(data).subscribe(res => {
          if(res != null) {
            if(res.status == 'Success') {
              this.loadSuccess();
              this.myPersistenceModal.hide();
              this.reset();
              this.renderProgramDataTable();
              this.loadProgramDataTable();
              this.loading=false;
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
      else if (this.edit == 'edit') {
        const data = {
          id: this.programId,
          name: this.programDataForm.value.name,
          description: this.programDataForm.value.description,
          active_status: '1',
          category: this.category
        };
        // console.warn(this.programDataForm.value);
        this.chartService.updProgramData(data).subscribe(res => {
          if(res != null) {
            if(res.status == 'Success') {
              this.loadSuccess();
              this.myPersistenceModal.hide();
              this.reset();
              this.loadProgramDataTable();
              this.renderProgramDataTable();
              this.loading=false;
            } else {
              this.loadError();
              this.loading=false;
            }
          } else {
            this.loadError();
          }
        }, (reason) => {
          this.loadError();
        });
      }
    }
  }

  loadProgramData() {
    this.loadtableProgramData = true;
      const data = {
      active_status : this.activeStatus
    }
    console.warn(data);
    this.chartService.getProgramData(data).subscribe(response => {
        setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
          this.tableData = response.data;
          this.dtTrigger.next(); // Trigger for load datatable
          this.loadtableProgramData = false;
        }, 3000);
      }, err => {
        // this.loadError();
        this.loadtableProgramData = false;
      });
  }

  loadProgramDataTable() {
    this.loadtableProgramData = true;
    const data = {
      active_status : this.activeStatus ? this.activeStatus : '1'
    };
    this.chartService.getProgramData(data).subscribe(response => {
      setTimeout (() => {
        this.tableData = response.data;
        this.dtTrigger.next();
        this.loadtableProgramData = false;
      }, 3000);
    }, err => {
      this.loadError();
      this.loadtableProgramData = false;
    });
  }

  applyProgramDataFilters(activeStatus) {
    const data = {
      active_status : activeStatus
    };
    this.loadtableProgramData = true;
    this.chartService.getProgramData(data).subscribe(response => {
      setTimeout (() => {
        this.tableData = response.data;
        this.dtTrigger.next();
        this.loadtableProgramData = false;
      }, 3000);
    }, err => {
      this.loadError();
      this.loadtableProgramData = false;
    });
    this.renderProgramDataTable();
  }

  loadDetailProgramData(data) {
        this.mode('edit');
        this.programId = data.id;
        this.category = data.category && data.category;
        this.programDataForm.patchValue({name: data.name});
        this.programDataForm.patchValue({description: data.description});
        if (data.active_status === false) {
          this.programDataForm.patchValue({active_status: '0'});
        } else {
          this.programDataForm.patchValue({active_status: data.active_status});
        }
        this.myPersistenceModal.show();
  }

  showModalInputProgramData(data) {
    this.mode('input');
    this.myPersistenceModal.show();
    this.reset();
    this.category = '';

  }

  mode(param) {
    this.edit = param;
  }

  reset() {
    this.programDataForm.reset();
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
    this.programId = data.id;
    this.programName = data.name;
    this.programDesc = data.description;
    this.deleteProgramModal.show();
  }

  deleteProgramData(data) {
    const datas = {
      id : data.id,
      active_status : "0",
      name: data.name,
      description: data.description
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
        this.chartService.updProgramData(datas).subscribe(res => {
          if(res != null) {
            if(res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              // this.deleteProgramModal.hide();
              this.renderProgramDataTable();
              this.loadProgramDataTable();
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
          this.loadError();
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

  loadActiveStatusDataFilter(){
    this.loadFilter= true;
    this.chartService.getActiveStatusData().subscribe((filterArray) => {
      const dataActiveStatus = [];
      let x:any;
      for(let i = 0; i< filterArray.data.length; i++){
        x = {
          value: filterArray.data[i]['pick_label'].toString(),
          label: filterArray.data[i]['pick_value']
        };
        dataActiveStatus.push(x);
        this.listActiveStatus = dataActiveStatus;

      }
      this.loadFilter = false;
    }, err =>{
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadCategoryFilter() {
    this.chartService.getCategorySelectionProgram().subscribe((resp) => {
      this.listCategoryProgram =
        resp &&
        resp.map((value) => {
          return {
            value: value.category,
            label: value.category,
          };
        });
    });
  }
}
