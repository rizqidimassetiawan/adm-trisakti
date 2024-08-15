import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  public recommendationForm:FormGroup;
  public selectedRecommendation: string;
  public selectedKnowledge: string;
  public selectedIntelektual: string;
  public selectedLisanEkspression: string;
  public selectedNonLisanEkspression: string;
  public selectedIndependent: string;
  public selectedTeamwork: string;
  public selectedMaturity: string;
  public categoryList: any;
  public code: string;
  public hash: string;
  public loading: boolean;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private userService: ParticipantService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
      this.hash = params['hash'];
   });
    this.recommendationForm = this.fb.group({
      studentName: new FormControl(''),
      recommendationName: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      position: new FormControl('', Validators.required),
      instantion: new FormControl('', Validators.required),
      rangeTime: new FormControl('', Validators.required),
      knowledge: new FormControl(''),
      intelektual: new FormControl(''),
      lisanEkspression: new FormControl(''),
      nonLisanEkspression: new FormControl(''),
      independent: new FormControl(''),
      teamwork: new FormControl(''),
      maturity: new FormControl(''),
      isRecommendation: new FormControl(''),
      opinion: new FormControl('', Validators.required),
    });
    this.categoryList = [
      {
        value: 'sangat baik',
        label: 'Sangat Baik'
      },
      {
        value: 'baik',
        label: 'Baik'
      },
      {
        value: 'cukup',
        label: 'Cukup'
      },
      {
        value: 'kurang',
        label: 'Kurang'
      }
    ];
    this.loading = false;
  }

  ngOnInit() {
    this.loadDetailRecommendation();
  }

  loadDetailRecommendation() {
    this.userService.getDetailRecommendation(`?code=${this.code}&hash=${this.hash}`).subscribe(response => {
      if (response.length !== 0) {
        this.recommendationForm.patchValue({studentName: response.participant_name});
        this.recommendationForm.patchValue({recommendationName: response.name});
        this.recommendationForm.patchValue({phoneNumber: response.handphone});
        this.recommendationForm.patchValue({email: response.email});
        this.recommendationForm.patchValue({position: response.position});
        this.recommendationForm.patchValue({instantion: response.institution});
        this.recommendationForm.patchValue({rangeTime: response.long_capacity_knowing_student});
        this.recommendationForm.patchValue({opinion: response.opinion});
        this.selectedKnowledge = response.knowledge && response.knowledge.toString();
        this.selectedIntelektual = response.intellectual && response.intellectual.toString();
        this.selectedLisanEkspression = response.verbal_expression && response.verbal_expression.toString();
        this.selectedNonLisanEkspression = response.written_expression && response.written_expression.toString();
        this.selectedIndependent = response.work_independently && response.work_independently.toString();
        this.selectedTeamwork = response.work_cooperate && response.work_cooperate.toString();
        this.selectedMaturity = response.maturity && response.maturity.toString();
        this.selectedRecommendation = response.recomendation && response.recomendation.toString();
      }
    })
  }

  updateDocumentRecommendation() {
    this.loading = true;
    const { studentName, recommendationName, phoneNumber, email, position, instantion, rangeTime, opinion } = this.recommendationForm.value;
    const data = {
      name: studentName,
      handphone: phoneNumber,
      email: email,
      position: position,
      institution: instantion,
      long_capacity_knowing_student: rangeTime,
      knowledge: this.selectedKnowledge,
      intellectual: this.selectedIntelektual,
      verbal_expression: this.selectedLisanEkspression,
      written_expression: this.selectedNonLisanEkspression,
      work_independently: this.selectedIndependent,
      work_cooperate: this.selectedTeamwork,
      maturity: this.selectedMaturity,
      recomendation: this.selectedRecommendation,
      opinion: opinion,
      code: this.code,
      hash: this.hash
    }
    this.userService.updDocumentRecommendation(data).subscribe(response => {
      if (response.status == 'Success') {
        this.broadcasterService.notifBroadcast(true, {
          title: 'Success',
          msg: response.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'success'
        });
        this.loading = false;
      } else {
        this.loadError();
        this.loading = false;
      }
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
