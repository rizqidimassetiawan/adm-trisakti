import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'app-recommendation',
  templateUrl: './postgraduate-participant.component.html',
  styleUrls: ['./postgraduate-participant.component.scss']
})
export class PostgraduateParticipantComponent implements OnInit {

  public participant_id: string;
  public registration_number: string;
  public loading: boolean;
  public dataPostGraduatePersonal: any;
  public dataPostGraduateTPA: any;
  public dataPostGraduateToefl: any;
  public dataPostGraduateProposal: any;
  public dataPostGraduateEducation: any;
  public dataPostGraduateRecommendation: Array<any>;
  public dataPostGraduateSpecialization: Array<any>;
  public dataPostGraduateWorkData: Array<any>;
  public dataPostGraduateWorkDataNow: Array<any>;
  public dataPostGraduateWorkDataExperience: Array<any>;
  public isTpaData: boolean;
  public isToeflData: boolean;
  public isProposalData: boolean;
  public isEducationData: boolean;

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
      this.participant_id = params['id'];
      this.registration_number = params['registration_number'];
    });
    this.loading = false;
    this.dataPostGraduatePersonal = [];
    this.dataPostGraduateToefl = [];
    this.dataPostGraduateTPA = [];
    this.dataPostGraduateProposal = [];
    this.dataPostGraduateEducation = [];
    this.isTpaData = false;
    this.isToeflData = false;
    this.isProposalData = false;
    this.isEducationData = false;
  }

  ngOnInit() {
    this.loadPostgraduate();
  }

  loadPostgraduate() {
    this.loading = true;
    this.userService.getPostGraduate(`?registration_number=${this.registration_number}&id=${this.participant_id}`).subscribe(response => {
      if (response.length !== 0) {
        this.loading = false;
        this.dataPostGraduatePersonal = response.personal_data;
        this.dataPostGraduateWorkData = response.work_data;
        this.dataPostGraduateRecommendation = response.recomendation_data;
        this.dataPostGraduateSpecialization = response.specialization_data;
        this.dataPostGraduateWorkDataNow = [];
        this.dataPostGraduateWorkDataExperience = [];
        const workdata = _.filter(this.dataPostGraduateWorkData, function(data){ return data.work_end_date === null; });
        const workdataex = _.filter(this.dataPostGraduateWorkData, function(data){ return data.work_end_date !== null; });

        // search data pekerjaan sekarang
        if (workdata !== undefined) {
          this.dataPostGraduateWorkDataNow = workdata;
        } else {
          this.dataPostGraduateWorkDataNow = [];
        }
        // search pengalaman pekerjaan
        if (workdataex !== undefined) {
          this.dataPostGraduateWorkDataExperience= workdataex;
        } else {
          this.dataPostGraduateWorkDataExperience = [];
        }
        if (response.tpa_data !== null) {
          this.dataPostGraduateTPA = response.tpa_data;
          this.isTpaData = false;
        } else {
          this.dataPostGraduateTPA = [];
          this.isTpaData = true;
        }
        if (response.toefl_data !== null) {
          this.dataPostGraduateToefl = response.toefl_data;
          this.isToeflData = false;
        } else {
          this.dataPostGraduateToefl = [];
          this.isToeflData = true;
        }
        if (response.proposal_data !== null) {
          this.isProposalData = false;
          this.dataPostGraduateProposal = response.proposal_data;
        } else {
          this.isProposalData = true;
          this.dataPostGraduateProposal = [];
        }
        if (response.education_data !== null) {
          this.dataPostGraduateEducation = response.education_data;
          if (response.education_data.url !== null) {
            this.isEducationData = false;
          } else {
            this.isEducationData = true;
          }
        } else {
          this.isEducationData = true;
          this.dataPostGraduateEducation = [];
        }
      } else {
        this.loading = false;
      }
    });
  }
}
