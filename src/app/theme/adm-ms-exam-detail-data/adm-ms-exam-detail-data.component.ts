import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/_services/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adm-ms-exam-detail-data',
  templateUrl: './adm-ms-exam-detail-data.component.html',
  styleUrls: ['./adm-ms-exam-detail-data.component.scss']
})
export class AdmMsExamDetailDataComponent implements OnInit {
  public loadtableExamDetailData:boolean;
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;

  @ViewChild('myPersistenceModal', {static: true}) public myPersistenceModal: any;
  public dataTableExamDetail: any;
  public dtOptions: any = [];
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  // Field Add Program Data
  public loading: boolean;
  public edit: any;
  public program_name:string;
  public program_description:string;
  public program_active_status:boolean;

  //for filtering
  public loadFilter: any;
  public listCity: any;
  public city:string;
  public cityChoose:any;

  public examDetailId: any;
  public listActiveStatus:any;
  public activeStatus:string;
  public activeStatusBool:boolean;
  public listActiveStatusFilters: Array<any>;

  public formType: any;
  public type: string;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private appService: AppService,
    public router: Router,
    private fb: FormBuilder,
    private http:HttpClient
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));

    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.loading = false;
    this.edit = 'input';
    this.activeStatus = '1';
    this.type = 'default';
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

  examDetailDataForm = this.fb.group({
    city:['',Validators.required],
    location:['',Validators.required],
    address:['',Validators.required],
    active_status:['',Validators.required]
  });

  ngOnInit() {
    this.dtOptions[0] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      // retrieve:true,
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
    this.loadExamDetailData();
    this.loadCityData();
    this.loadActiveStatusDataFilter();
  }

  onDeselected(val) {
    switch (val) {
      case 'city':
        this.city = '0';
        break;
      case 'activeStatus':
        this.activeStatus = '1';
        break;
    }
  }

  onSelected(val) {
    switch (val) {
      case 'city':
        this.city = this.cityChoose;
        break;
    }
  }

  loadCityData(){
    this.loadFilter= true;
    this.chartService.getCityData('').subscribe((filterArray) => {
      const dataCity = [];
      let x:any;
      for(let i = 0; i< filterArray.length; i++){
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].city
        };
        dataCity.push(x);
        this.listCity = dataCity;
      }
      this.loadFilter = false;
    }, err =>{
      this.loadError();
      this.loadFilter = false;
    });
  }

  createExamDetailData(){
    if (this.examDetailDataForm.valid) {
      this.loading = true;
      switch (this.formType) {
        case 'input':
        const data = {
          city : this.examDetailDataForm.controls['city'].value,
          location :this.examDetailDataForm.controls['location'].value,
          address :this.examDetailDataForm.controls['address'].value,
          active_status : this.examDetailDataForm.controls['active_status'].value
        };
        this.chartService.postExamLocationData(data).subscribe(res => {
          if(res != null) {
            if(res.status == 'Success') {
              this.loadSuccess();
              this.loading = false;
              this.myPersistenceModal.hide();
              this.renderTable();
              this.loadExamDetailData();
              // this.router.navigate(['/','exam-detail-data']);
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
          id : this.examDetailId,
          city : this.examDetailDataForm.value.city,
          location : this.examDetailDataForm.value.location,
          address : this.examDetailDataForm.value.address,
          active_status : this.examDetailDataForm.value.active_status
        };
        this.chartService.updExamLocationData(dataUpdate).subscribe(res => {
          if(res != null) {
            if(res.status == 'Success') {
              this.loading = false;
              this.loadSuccess();
              this.myPersistenceModal.hide();
              this.renderTable();
              this.loadExamDetailData();
              // this.router.navigate(['/','exam-detail-data']);
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
        default:
          break;
      }
    }
  }

  openformDetailExamDetailData(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.examDetailId = data.id;
      this.examDetailDataForm.patchValue({city: data.city_id});
      this.examDetailDataForm.patchValue({location: data.location});
      this.examDetailDataForm.patchValue({address: data.address});
      if (data.active_status === '1') {
        this.examDetailDataForm.patchValue({active_status: '1'});
      } else {
        this.examDetailDataForm.patchValue({active_status: '0'});
      }
    } else {
      this.examDetailDataForm.reset();
    }
    this.myPersistenceModal.show();
  }

  loadExamDetailData() {
    this.loadtableExamDetailData = true;
    const data = {
      active_status : this.activeStatus
    }
    this.chartService.getExamLocationData(data).subscribe(response => {
        setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
          this.tableData = response.data;
          this.dtTrigger.next(); // Trigger for load datatable
          this.loadtableExamDetailData = false;
        }, 3000);
      }, err => {
        // this.loadError();
        this.loadtableExamDetailData = false;
      });
  }

  loadExamDEtailDataFilters(activeStatus) {
    this.loadtableExamDetailData = true;
    const data = {
      active_status : activeStatus
    }
    this.chartService.getExamLocationData(data).subscribe(response => {
        setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
          this.tableData = response.data;
          this.dtTrigger.next(); // Trigger for load datatable
          this.loadtableExamDetailData = false;
        }, 3000);
      }, err => {
        // this.loadError();
        this.loadtableExamDetailData = false;
      });
    this.renderTable();
  }

  mode(param) {
    this.edit = param;
  }

  renderTable(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
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
}

