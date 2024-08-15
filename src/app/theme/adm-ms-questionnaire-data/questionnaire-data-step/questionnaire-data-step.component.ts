import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaire-data-step',
  templateUrl: './questionnaire-data-step.component.html',
  styleUrls: ['./questionnaire-data-step.component.scss']
})
export class QuestionnaireDataStepComponent implements OnInit {
  public loadtableQuestionnaireData:boolean;
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;

  @ViewChild(DataTableDirective, {static: true}) public dtElement: DataTableDirective;
  public dataTableProgram: any;
  public dtOptions: any = [];
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  public loadtableQuestionData:boolean;
  @ViewChild(DataTableDirective, {static: true}) public dtElement1: DataTableDirective;
  public dataTableQuestion: any;
  // public dtOptions1: any;
  public questionData:Array<any>;
  public dtTrigger1 = new Subject();
  public questionAnswerData:Array<any>;

  //for filtering
  public loadFilter: any;
  public listSelectionQuestionType: any;
  public questionType:string;

  // Field Add Program Data
  public loading: boolean;
  public edit: any;
  public program_name:string;
  public program_description:string;
  public program_active_status:boolean;
  @ViewChild('myPersistenceModal', {static: true}) public myPersistenceModal: any;
  public questionnaireId: any;
  public detailBeritaAcara: any;

  public id: any;
  public questionId: any;
  public answerOptionId:any;
  public activeStatus:any;
  @ViewChild('questionDataModal', {static: true}) public questionDataModal: any;
  @ViewChild('optionDataModal', {static: true}) public optionDataModal: any;
  public questionDetailData:Array<any>;
  public answerOptionDetailData:Array<any>;

  public formType: any;
  public type: string;
  public loadingModal: boolean;
  public activeStatusFilter:string;
  public listActiveStatusFilters:Array<any>;
  public activeStatusBool: boolean;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));

    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.id = +this.route.snapshot.paramMap.get('id'); //questionnaire_id
    this.type = 'default';
    this.loadingModal = false;
    this.activeStatusFilter = '1';
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

  questionnaireDataForm = this.fb.group({
    name:['',Validators.required],
    description:['',Validators.required],
    active_status:['',Validators.required]
  });

  questionForm = this.fb.group({
    question_type_id:['',Validators.required],
    detail:['',Validators.required],
    active_status:['',Validators.required]
  });

  answerOptionForm = this.fb.group({
    option:['',Validators.required],
    ordering:['',Validators.required]
  });

  ngOnInit() {
    this.dtOptions[0] = {
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
    // this.loadQuestionnaireData();
    this.loadQuestionTypeFilter();
    this.loadQuestionData(this.id);
    // this.loadDetailAnswerOptionData(this.id);
  }

  onDeselected(val) {
    switch (val) {
      case 'questionType':
        this.questionType = '0';
        break;
      case 'activeStatusFilter':
        this.activeStatusFilter = '1';
        break;
    }
  }

   renderTable1(): void {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 0) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
          });
        }
      });
    }

  loadQuestionTypeFilter(){
    this.loadFilter= true;
    this.chartService.getQuestionTypeData().subscribe((filterArray) => {
      const dataQuestionType = [];
      let x:any;
      for(let i = 0; i< filterArray.length; i++){
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].type
        };
        dataQuestionType.push(x);
        this.listSelectionQuestionType = dataQuestionType;
      }
      this.loadFilter = false;
    }, err =>{
      this.loadError();
      this.loadFilter = false;
    });
  }

  // loadQuestionnaireData() {
  //   this.loadtableQuestionnaireData = true;
  //   this.chartService.getQuestionnaireData(`?active_status=1`).subscribe(response => {
  //       setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
  //         this.tableData = response.data;
  //         this.dtTrigger1.next(); // Trigger for load datatable
  //         this.loadtableQuestionnaireData = false;
  //       }, 3000);
  //     }, err => {
  //       // this.loadError();
  //       this.loadtableQuestionnaireData = false;
  //     });
  // }

  loadQuestionData(id){
    this.loadtableQuestionData = true;
    if (this.activeStatusFilter == '1'){
      this.activeStatusBool = true;
      this.chartService.getQuestionData(`questionare_id=${this.id}&active_status=${this.activeStatusBool}`).subscribe(result => {
        setTimeout(() => {
          this.questionData = result;
          this.dtTrigger.next();
          this.loadtableQuestionData = false;
        }, 3000);
      }, err => {
        this.loadtableQuestionData = false;
      });
    }
    else if (this.activeStatusFilter == '0'){
      this.activeStatusBool = false;
      this.chartService.getQuestionData(`questionare_id=${this.id}&active_status=${this.activeStatusBool}`).subscribe(result => {
        setTimeout(() => {
          this.questionData = result;
          this.dtTrigger.next();
          this.loadtableQuestionData = false;
        }, 3000);
      }, err => {
        this.loadtableQuestionData = false;
      });
    }
    else {
      this.chartService.getQuestionData(`questionare_id=${this.id}&active_status=${''}`).subscribe(result => {
        setTimeout(() => {
          this.questionData = result;
          this.dtTrigger.next();
          this.loadtableQuestionData = false;
        }, 3000);
      }, err => {
        this.loadtableQuestionData = false;
      });
    }

  }

  applyFilter(activeStatusFilter) {
    this.loadtableQuestionData = true;
    if (this.activeStatusFilter === '1'){
      this.activeStatusBool = true;
      this.chartService.getQuestionData(`questionare_id=${this.id}&active_status=${this.activeStatusBool}`).subscribe(result => {
        setTimeout(() => {
          this.questionData = result;
          this.dtTrigger.next();
          this.loadtableQuestionData = false;
        }, 3000);
      }, err => {
        this.loadtableQuestionData = false;
      });
    }
    else if (this.activeStatusFilter === '0'){
      this.activeStatusBool = false;
      this.chartService.getQuestionData(`questionare_id=${this.id}&active_status=${this.activeStatusBool}`).subscribe(result => {
        setTimeout(() => {
          this.questionData = result;
          this.dtTrigger.next();
          this.loadtableQuestionData = false;
        }, 3000);
      }, err => {
        this.loadtableQuestionData = false;
      });
    } else {
      this.chartService.getQuestionData(`questionare_id=${this.id}&active_status=${activeStatusFilter}`).subscribe(result => {
        setTimeout(() => {
          this.questionData = result;
          this.dtTrigger.next();
          this.loadtableQuestionData = false;
        }, 3000);
      }, err => {
        this.loadtableQuestionData = false;
      });
    }
    this.renderTable1();
  }

  openformDetailQuestionData(questionId, type) {
    this.formType = type;
    this.loadingModal = true;
    if (type === 'edit') {
      this.questionId = questionId;
      this.chartService.getQuestionData(`${this.id}&question_id=${this.questionId}`).subscribe(result => {
        setTimeout(() => {
          this.questionDetailData = result;
          this.loadingModal = false;
          this.questionForm.patchValue({questionare_id: this.id});
          this.questionForm.patchValue({question_type_id: this.questionDetailData[0].question_type_id.toString()});
          this.questionForm.patchValue({detail: this.questionDetailData[0].detail});
          if(this.questionDetailData[0].active_status.toString() == "true"){
            this.activeStatus = "1";
          }
          else if(this.questionDetailData[0].active_status.toString() == "false"){
            this.activeStatus = "0";
          }
          this.questionForm.patchValue({active_status: this.activeStatus});
        }, 3000);
      },err => {
        this.loadError();
      });
    } else {
      this.questionForm.reset();
      this.loadingModal = false;
    }
    this.questionDataModal.show();
  }

  createQuestionData(){
      this.loading = true;
      switch (this.formType) {
        case 'input':
        const data = {
          questionare_id : this.id,
          question_type_id :this.questionForm.controls['question_type_id'].value,
          detail :this.questionForm.controls['detail'].value,
          active_status : this.questionForm.controls['active_status'].value
        };
        this.chartService.postQuestionData(data).subscribe(res => {
          if(res != null) {
            if(res.status == 'Success') {
              this.loadSuccess();
              this.questionDataModal.hide();
              this.loadQuestionData(this.id);
              this.activeStatusFilter = '';
              this.renderTable1();
              this.loading = false;
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
          id: this.questionId,
          questionare_id : this.id,
          question_type_id: this.questionForm.value.question_type_id,
          detail: this.questionForm.value.detail,
          active_status: this.questionForm.value.active_status
        };
        this.chartService.upQuestionData(dataUpdate).subscribe(res => {
          if(res != null) {
            if(res.status == 'Success') {
              this.loadSuccess();
              this.questionDataModal.hide();
              this.loadQuestionData(this.id);
              this.renderTable1();
              this.loading = false;
              this.activeStatusFilter = '';
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

  openformDetailAsnwerOptionData(questionId, answerOptionId, type) {
    this.formType = type;
    this.loadingModal = true;
    if (type === 'edit') {
      this.questionId = questionId;
      this.answerOptionId = answerOptionId;
      this.chartService.getAnswerOptionData(`${this.questionId}&id=${this.answerOptionId}`).subscribe(result => {
        setTimeout(() => {
          this.loadingModal = false;
          this.answerOptionDetailData = result;
          this.answerOptionForm.patchValue({option: this.answerOptionDetailData[0].value});
          this.answerOptionForm.patchValue({ordering: this.answerOptionDetailData[0].ordering});
        }, 3000);
      },err => {
        this.loadError();
      });
    } else {
      this.questionId = questionId;
      this.loadingModal = false;
      this.answerOptionForm.reset();
    }
    this.optionDataModal.show();
  }

  createAnswerOptionData(){
      switch (this.formType) {
        case 'input':
        const data = {
          question_id :  this.questionId,
          value :this.answerOptionForm.controls['option'].value,
          ordering :this.answerOptionForm.controls['ordering'].value
        };
        this.chartService.postAnswerOptionData(data).subscribe(res => {
          if(res != null) {
            if(res.status == 'Success') {
              this.loadSuccess();
              this.renderTable1();
              this.loadQuestionData(this.id);
              this.optionDataModal.hide();
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
          id: this.answerOptionId,
          question_id: this.questionId,
          value: this.answerOptionForm.value.option,
          ordering: this.answerOptionForm.value.ordering
        };
        this.chartService.upAnswerOptionData(dataUpdate).subscribe(res => {
            if(res.status == 'Success') {
              this.loadSuccess();
              this.optionDataModal.hide();
              this.renderTable1();
              this.loadQuestionData(this.id);
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

  mode(param) {
    this.edit = param;
  }
}

