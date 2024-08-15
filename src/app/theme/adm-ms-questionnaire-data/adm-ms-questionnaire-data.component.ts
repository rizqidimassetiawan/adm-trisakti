import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-ms-questionnaire-data',
  templateUrl: './adm-ms-questionnaire-data.component.html',
  styleUrls: ['./adm-ms-questionnaire-data.component.scss']
})
export class AdmMsQuestionnaireDataComponent implements OnInit {
  public loadtableQuestionnaireData:boolean;

  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild(DataTableDirective, {static: true}) public dtElement: DataTableDirective;
  public dataTableProgram: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  @ViewChild('questionnaireDataModal', {static: true}) public questionnaireDataModal: any;
  public questionnaireId: any;
  public detailBeritaAcara: any;
  public formType: any;
  public type: string;

  // Field Add Program Data
  public loading: boolean;
  public edit: any;
  public program_name:string;
  public program_description:string;
  public program_active_status:boolean;

  //for filtering
  public loadFilter: any;
  public listSelectionPath: any;
  public selectionPath:string;
  public listActiveStatus:any;
  public listActiveStatusFilters:Array<any>;
  public activeStatus:string;
  public activeStatusBool:boolean;

  public questionData:Array<any>;
  public id: any;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private fb: FormBuilder
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));

    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.activeStatus = '1';
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
    this.type = 'default';
  }

  questionnaireDataForm = this.fb.group({
    name:['',Validators.required],
    description:['',Validators.required],
    active_status:['',Validators.required],
    selection_path_id:['']
  });

  get f() { return this.questionnaireDataForm.controls; }

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
      order:[[0, 'asc']]
    };
    this.loadQuestionnaireData();
    this.loadSelectionPathDataFilter();
    this.loadQuestionData(this.id);
  }

  loadQuestionnaireData() {
    this.loadtableQuestionnaireData = true;

    if (this.activeStatus == '1'){
      this.activeStatusBool = true;
      this.chartService.getQuestionnaireData(`?active_status=${this.activeStatusBool}`).subscribe(response => {
        setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
          this.tableData = response.data;
          this.dtTrigger.next(); // Trigger for load datatable
          this.loadtableQuestionnaireData = false;
        }, 3000);
      }, err => {
        // this.loadError();
        this.loadtableQuestionnaireData = false;
      });
    }
    else if (this.activeStatus == '0'){
      this.activeStatusBool = false;
      this.chartService.getQuestionnaireData(`?active_status=${this.activeStatusBool}`).subscribe(response => {
        setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
          this.tableData = response.data;
          this.dtTrigger.next(); // Trigger for load datatable
          this.loadtableQuestionnaireData = false;
        }, 3000);
      }, err => {
        // this.loadError();
        this.loadtableQuestionnaireData = false;
      });
    }
    else {
      this.chartService.getQuestionnaireData(`?active_status=${''}`).subscribe(response => {
        setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
          this.tableData = response.data;
          this.dtTrigger.next(); // Trigger for load datatable
          this.loadtableQuestionnaireData = false;
        }, 3000);
      }, err => {
        // this.loadError();
        this.loadtableQuestionnaireData = false;
      });
    }
  }


  applyFilterQuestionnare(activeStatus) {
    this.loadtableQuestionnaireData = true;
    if (activeStatus === '1') {
      this.activeStatusBool = true;
      this.chartService.getQuestionnaireData(`?active_status=${this.activeStatusBool}`).subscribe(response => {
        setTimeout (() => {
          this.tableData = response.data;
          this.dtTrigger.next();
          this.loadtableQuestionnaireData = false;
        }, 3000);
      }, err => {
        this.loadError();
        this.loadtableQuestionnaireData = false;
      });
    } else if (activeStatus === '0') {
      this.activeStatusBool = false;
      this.chartService.getQuestionnaireData(`?active_status=${this.activeStatusBool}`).subscribe(response => {
        setTimeout (() => {
          this.tableData = response.data;
          this.dtTrigger.next();
          this.loadtableQuestionnaireData = false;
        }, 3000);
      }, err => {
        this.loadError();
        this.loadtableQuestionnaireData = false;
      });
    } else {
      this.chartService.getQuestionnaireData(`/${activeStatus}`).subscribe(response => {
        setTimeout (() => {
          this.tableData = response.data;
          this.dtTrigger.next();
          this.loadtableQuestionnaireData = false;
        }, 3000);
      }, err => {
        this.loadError();
        this.loadtableQuestionnaireData = false;
      });
    }
    this.renderQuistionnaireTable();
  }

  renderQuistionnaireTable(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: any) => {
          dtInstance.destroy();
        });
      }
    });
}

  openformQuistionnaire(data, type) {
    this.formType = type;
    if (type === 'edit') {
      const {
        id,
        name,
        description,
        active_status,
        selection_path_id
      } = data;
      this.questionnaireId = data.id;
      this.questionnaireDataForm.patchValue({name: name});
      this.questionnaireDataForm.patchValue({description: description ? description : '-'});
      if (active_status === true) {
        this.questionnaireDataForm.patchValue({active_status: '1'});
      } else {
        this.questionnaireDataForm.patchValue({active_status: '0'});
      }
      this.questionnaireDataForm.patchValue({selection_path_id: selection_path_id && selection_path_id.toString()});
    } else {
      this.questionnaireDataForm.reset();
    }
    this.questionnaireDataModal.show();
  }

  createQuestionnaireData(){
    if (this.questionnaireDataForm.valid) {
      this.loading = true;
      switch (this.formType) {
        case 'input':
          const data = {
            name : this.questionnaireDataForm.controls['name'].value,
            description :this.questionnaireDataForm.controls['description'].value,
            active_status : this.questionnaireDataForm.controls['active_status'].value,
            selection_path_id: this.questionnaireDataForm.controls['selection_path_id'].value
          };
          this.chartService.postQuestionnaireData(data).subscribe(res => {
            if(res != null) {
              if(res.status == 'Success') {
                this.loadSuccess();
                this.questionnaireDataModal.hide();
                // this.render();
                this.loading = false;
                this.loadQuestionnaireData();
                this.renderQuistionnaireTable();
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
          const dataUpdate = {
            id: this.questionnaireId,
            name: this.questionnaireDataForm.value.name,
            description: this.questionnaireDataForm.value.description,
            active_status: this.questionnaireDataForm.value.active_status,
            selection_path_id: this.questionnaireDataForm.value.selection_path_id
          };
          this.chartService.updQuestionnaireData(dataUpdate).subscribe(res => {
            if(res != null) {
              if(res.status == 'Success') {
                this.loadSuccess();
                this.questionnaireDataModal.hide();
                this.loadQuestionnaireData();
                this.renderQuistionnaireTable();
                this.loading = false;
                // this.router.navigate(['/','program-data']);
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
        default:
          break;
      }
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

  onDeselected(val) {
    switch (val) {
      case 'selectionPath':
        this.selectionPath = '0';
        break;
      case 'activeStatus':
        this.activeStatus = '1';
        break;
    }
  }

  loadSelectionPathDataFilter(){
    this.loadFilter= true;
    this.chartService.getSelectionPathAdmin(`?active_status=true`).subscribe((filterArray) => {
      const dataSelectionPath = [];
      let x:any;
      for(let i = 0; i< filterArray.length; i++){
        x = {
          value: filterArray[i]['selection_path_id'].toString(),
          label: filterArray[i]['name']
        };
        dataSelectionPath.push(x);
        this.listSelectionPath = dataSelectionPath;
      }
      this.loadFilter = false;
    }, err =>{
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadQuestionData(id){
    this.loading = true;
    this.chartService.getQuestionData(id).subscribe(result => {
      if (result) {
          this.questionData = result;
      }
      this.loading = false;
    }, err => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: err.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loading = false;
    });
  }

}

