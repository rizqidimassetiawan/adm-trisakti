import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import Swal from 'sweetalert2';
import { data } from 'jquery';

@Component({
  selector: 'app-questionnaire-data-participant',
  templateUrl: './questionnaire-data-participant.component.html',
  styleUrls: ['./questionnaire-data-participant.component.scss']
})
export class QuestionnaireDataParticipantComponent implements OnInit {

  public loading: boolean;
  public edit: any;
  public questionnaireId: any;
  public loadFilter: any;
  public listDropdownAnswer: any;
  public dropdownAnswer: string;
  public questionnaireDesc: string;
  public questionnaireName: string;
  public questionId: any;
  public answerId: any;
  public isTextRequired: boolean;
  public answer: any;
  public answerSelected: any;
  public answerCheckBoxSelected: any;
  public selectedValue: string;
  public loadingQuestion: boolean;

  @ViewChild(DataTableDirective, { static: true }) public dtElement1: DataTableDirective;
  public loadtableQuestionData: boolean;
  public dataTableQuestion: any;
  public dtOptions1: any;
  public questionData: Array<any>;
  public dtTrigger1 = new Subject();
  public questionAnswerData: Array<any>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement2: DataTableDirective;
  public loadtableAnswerData: boolean;
  public answerData: Array<any>;
  public dtOptions2: any;
  public dtTrigger2 = new Subject();
  public quesAanswerData: Array<any>;

  public nonChecked: boolean;
  public untouched: boolean;
  public arrayCheck: any;
  public arrayIndex: any;

  public checkedBoxId: Array<any>;
  public checkedBoxIdWithoudId: Array<any>;
  public checkedList: Array<any>;
  public scalaLinearList: Array<any>;
  public arrayAll: Array<any>;
  public lastArray: Array<any>;
  public radioList: Array<any>;
  public textList: Array<any>;
  public paragraphTextList: Array<any>;
  public dateList: Array<any>;
  public timeList: Array<any>;
  public selectedLevel: any;
  public textBox: any;
  protected userProfile: any;
  public participantId: any;
  public MyArrayType: Array<{ question_id: number, answer_list: number }>;

  radioSelected: any;
  private radioButtonValues: Array<any> = [];
  public form: FormGroup;

  public confirmation: string;
  public error: string;
  public have_required_data: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;
  public dataFailedSave: string;

  @ViewChild('submitModal', { static: true }) public submitModal: any;

  constructor(
    public translate: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private userService: ParticipantService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public router: Router,
    private cdRef: ChangeDetectorRef
  ) {
    translate.setDefaultLang(localStorage.getItem('lang'));
    this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
    this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
    this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
    this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
    this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
    this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    this.translate.get('CONTENT.have-required-data').subscribe((l) => { this.have_required_data = l; });
    this.translate.get('CONTENT.data-failed').subscribe((l) => { this.dataFailedSave = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translate.setDefaultLang(res.lang);
      this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
      this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
      this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
      this.translate.get('CONTENT.have-required-data').subscribe((l) => { this.have_required_data = l; });
      this.translate.get('CONTENT.data-failed').subscribe((l) => { this.dataFailedSave = l; });
    });
    this.arrayAll = [];
    this.lastArray = [];
    this.checkedList = [];
    this.checkedBoxId = [];
    this.MyArrayType = [];
    this.radioList = [];
    this.textList = [];
    this.scalaLinearList = [];
    this.paragraphTextList = [];
    this.checkedBoxIdWithoudId = [];
    this.dateList = [];
    this.timeList = [];
    this.radioButtonValues = [];
    this.questionData = [];
    this.isTextRequired = true;
    this.loadingQuestion = false;
    this.form = fb.group({
      question_id: new FormControl('', Validators.required),
      answer_id: new FormControl('', Validators.required),
      participant_id: new FormControl('', Validators.required)
    });
    this.questionData.forEach(question => {
      this.form.addControl(question.id, fb.control(null, Validators.required));
    })
  }

  questionnaireDataForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    active_status: ['', Validators.required]
  });

  ngOnInit() {
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
      this.participantId = res.participant_id;
      this.userService.getStatusQuestionnaireData(`participant_id=${this.participantId}`).subscribe(res => {
        if (res.status == 1) {
          this.router.navigate(['/', 'home']);
        }
      }, (reason) => {
        this.router.navigate(['/', 'home']);
      });
    });
    this.loadQuestionData();
    this.loadQuestionnaireData();
  }

  loadQuestionnaireData() {
    this.userService.getActiveQuestionnaireData(`type=registration`).subscribe(res => {
      this.questionnaireName = res.data[0].name;
      this.questionnaireDesc = res.data[0].description;
    });
  }

  loadQuestionData() {
    this.loadtableQuestionData = true;
    this.userService.getActiveQuestionnaireData(`type=registration`).subscribe(res => {
      this.questionnaireId = res.data[0].id;
      this.chartService.getQuestionData(`questionare_id=${this.questionnaireId}&active_status=true`).subscribe(res => {
        setTimeout(() => {
          this.questionData = res;
          this.loadtableQuestionData = false;
        }, 3000);
      }, err => {
        this.loadtableQuestionData = false;
      });
    });
  }

  // loadAnswerData() {
  //   this.userService.getActiveQuestionnaireData(`type=registration`).subscribe(res => {
  //     this.questionnaireId = res.data[0].id;
  //     this.chartService.getQuestionData(`questionare_id=${this.questionnaireId}&active_status=true`).subscribe(res => {
  //       this.arrayCheck = res;
  //       for (let i = 0; i < this.arrayCheck.length; i++) {
  //         this.questionId = this.arrayCheck[i].id;
  //         this.chartService.getAnswerOptionData(this.questionId).subscribe(result => {
  //           setTimeout(() => {
  //             this.answerData = result;
  //             this.dtTrigger2.next();
  //           }, 3000);
  //         }, err => {
  //           this.loadtableAnswerData = false;
  //         });
  //       }
  //     });
  //   });
  // }

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

  onCheckboxChange(option, event) {
    const dataCheck = {
      id: option.id
    }
    const data = {
      question_id: option.question_id,
      answer_list: '',
      notes: null
    };
    if (event.target.checked) {
      if (this.arrayAll.length != 0) {
        const questionId = this.arrayAll.find(x => x.question_id == option.question_id);
        if (questionId !== undefined) {
          this.arrayAll.forEach(v => {
            if (v.question_id === option.question_id) v.answer_list.push(dataCheck);
          });
        } else {
          this.checkedBoxId = [];
          this.checkedBoxId.push(dataCheck)
          const question = {
            ...data,
            answer_list: this.checkedBoxId
          }
          this.arrayAll.push(question);
        }
      } else {
        this.checkedBoxId.push(dataCheck);
        const question = {
          ...data,
          answer_list: this.checkedBoxId
        }
        this.arrayAll.push(question);
      }
    } else {
      if (this.arrayAll.length > 0) {
        const check_question_id = this.arrayAll.find(x => x.question_id === option.question_id);
        if (check_question_id !== undefined) {
          if (this.checkedBoxId.length !== 0) {
            this.arrayAll.forEach(v => {

              if (v.question_id === option.question_id) {
                v.answer_list = _.without(v.answer_list, _.findWhere(v.answer_list, {
                  id: option.id
                }));

                if (v.answer_list.length === 0) {
                  this.arrayAll = _.without(this.arrayAll, _.findWhere(this.arrayAll, {
                    question_id: option.question_id
                  }))
                }

              };
            });
          }

        }
      }
    }
  }

  onRadioButtonChange(option, event) {
    if (event.target.checked) {
      this.radioList = [];
      const data = {
        question_id: option.question_id,
        answer_list: [{ id: option.id }],
        notes: null
      };
      if (this.arrayAll.length != 0) {
        const questionId = this.arrayAll.find(x => x.question_id == option.question_id);
        if (questionId !== undefined) {
          this.arrayAll.forEach(v => {
            if (v.question_id === option.question_id) v.answer_list = [{ id : option.id }];
          });
        } else {
          this.arrayAll.push(data);
        }
      } else {
        this.arrayAll.push(data);
      }
    }
  }

  onDropdownSelected(event, option) {
    if (event.target.value) {
      const data = {
        question_id: option[0].question_id,
        answer_list: [{ id: parseInt(event.target.value) }],
        notes: null
      }
      if (this.arrayAll.length != 0) {
        const questionId = this.arrayAll.find(x => x.question_id == option[0].question_id);
        if (questionId !== undefined) {
          this.arrayAll.push(data);
          this.arrayAll = _.without(this.arrayAll, _.findWhere(this.arrayAll, {
            question_id: option[0].question_id
          }));
        } else {
          this.arrayAll.push(data);
        }
      } else {
        this.arrayAll.push(data);
      }
    }
  }

  onText(option, event) {
    const textValue = event.target.value;
    if (textValue !== '') {
      this.isTextRequired = false;
      const data = {
        question_id: option,
        answer_list: null,
        notes: textValue
      };
      if (this.arrayAll.length != 0) {
        const questionId = this.arrayAll.find(x => x.question_id == option);
        if (questionId !== undefined) {
          this.arrayAll.forEach(v => {
            if (v.question_id === option) v.notes = event.target.value;
          });
        } else {
          this.arrayAll.push(data);
        }
      } else {
        this.arrayAll.push(data);
      }
    } else {
      if (this.arrayAll.length > 0) {
        const check_question_id = this.arrayAll.find(x => x.question_id === option);
        if (check_question_id !== undefined) {
          this.arrayAll = _.without(this.arrayAll, _.findWhere(this.arrayAll, {
            question_id: option
          }));
        }
      }
    }
  }

  onParagraphText(option, event) {
    const parValue = event.target.value;
    if (parValue !== '') {
      const dataPar = {
        question_id: option,
        answer_list: null,
        notes: parValue
      };
      if (this.arrayAll.length != 0) {
        const questionId = this.arrayAll.find(x => x.question_id == option);
        if (questionId !== undefined) {
          this.arrayAll.forEach(v => {
            if (v.question_id === option) v.notes = event.target.value;
          });
        } else {
          this.arrayAll.push(dataPar);
        }
      } else {
        this.arrayAll.push(dataPar);
      }
    } else {
      if (this.arrayAll.length > 0) {
        const check_question_id = this.arrayAll.find(x => x.question_id === option);
        if (check_question_id !== undefined) {
          this.arrayAll = _.without(this.arrayAll, _.findWhere(this.arrayAll, {
            question_id: option
          }));
        }
      }
    }
  }

  onDate(option, event) {
    const textValue = event.target.value
    if (textValue !== '') {
      const data = {
        question_id: option,
        answer_list: null,
        notes: textValue
      };
      if (this.arrayAll.length != 0) {
        const questionId = this.arrayAll.find(x => x.question_id == option);
        if ( questionId !== undefined) {
          this.arrayAll.forEach(v => {
            if (v.question_id === option) v.notes = event.target.value;
          });
        } else {
          this.arrayAll.push(data);
        }
      } else {
        this.arrayAll.push(data);
      }
    } else {
      if (this.arrayAll.length > 0) {
        const check_question_id = this.arrayAll.find(x => x.question_id === option);
        if (check_question_id !== undefined) {
          this.arrayAll = _.without(this.arrayAll, _.findWhere(this.arrayAll, {
            question_id: option
          }));
        }
      }
    }
  }

  changeLinear(option, event) {
    const linearValue = event.target.value;
    const data = {
      question_id: option,
      answer_list: null,
      notes: linearValue
    };
    if (this.arrayAll.length != 0) {
      const questionId = this.arrayAll.find(x => x.question_id == option);
      if ( questionId !== undefined) {
        this.arrayAll.forEach(v => {
          if (v.question_id === option) v.notes = event.target.value;
        });
      } else {
        this.arrayAll.push(data);
      }
    } else {
      this.arrayAll.push(data);
    }
  }

  onTime(option, event) {
    const textValue = event.target.value;
    if (textValue !== '') {
      const data = {
        question_id: option,
        answer_list: null,
        notes: textValue
      };
      if (this.arrayAll.length != 0) {
        const questionId = this.arrayAll.find(x => x.question_id == option);
        if ( questionId !== undefined) {
          this.arrayAll.forEach(v => {
            if (v.question_id === option) v.notes = event.target.value;
          });
        } else {
          this.arrayAll.push(data);
        }
      } else {
        this.arrayAll.push(data);
      }
    } else {
      if (this.arrayAll.length > 0) {
        const check_question_id = this.arrayAll.find(x => x.question_id === option);
        if (check_question_id !== undefined) {
          this.arrayAll = _.without(this.arrayAll, _.findWhere(this.arrayAll, {
            question_id: option
          }));
        }
      }
    }
  }

  sendQuistionnaire() {
    this.loadingQuestion = true;
    this.chartService.getQuestionData(`questionare_id=${this.questionnaireId}&active_status=true`).subscribe(res => {
      const dataQuestion = res;
      if (dataQuestion.length !== 0) {
        if (this.arrayAll.length !== 0) {
          if (this.arrayAll.length == dataQuestion.length) {
            this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
            if (this.userProfile.email !== undefined) {
              this.userService.getParticipantDetailData(this.userProfile.email).subscribe(res => {
                this.participantId = res.participant_id;
                const myJson = JSON.stringify(this.arrayAll);
                const payload = {
                  json: myJson,
                  participant_id: this.participantId
                }
                this.userService.postAnswerQuistionnaire(payload).subscribe((result) => {
                  if (result.status == 'Success') {
                    this.loadingQuestion = false;
                    this.loadSuccess();
                    this.submitModal.show();
                  } else {
                    this.loadError();
                    this.loadingQuestion = false;
                  }
                }, (reason) => {
                  this.broadcasterService.notifBroadcast(true, {
                    title: 'Gagal',
                    msg: reason.error.message,
                    timeout: 5000,
                    theme: 'default',
                    position: 'top-right',
                    type: 'error'
                  });
                });
              });
            }
          } else {
            Swal.fire({
              title: this.dataFailedSave,
              text: this.have_required_data,
              type: 'error',
              showCancelButton: false,
              showConfirmButton: true,
              allowOutsideClick: false
            });
            this.loadingQuestion = false;
          }
        } else {
          Swal.fire({
            title: this.dataFailedSave,
            text: this.have_required_data,
            type: 'error',
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false
          });
          this.loadingQuestion = false;
        }
      }
    });
  }

  gotoRegistration() {
    window.location.href = 'new-registration';
  }
}

