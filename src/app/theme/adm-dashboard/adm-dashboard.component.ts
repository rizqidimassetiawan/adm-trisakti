import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-adm-dashboard',
  templateUrl: './adm-dashboard.component.html',
  styleUrls: ['./adm-dashboard.component.scss']
})
export class AdmDashboardComponent implements OnInit {
  public loader: boolean;
  public loading: boolean;
  public loadChartParticipantPerSelectionPath: boolean;
  public chartParticipantPerSelectionPath: any;
  public selectionPathActive: any;
  public selectionPathNonActive: any;
  public programActive: any;
  public programNonActive: any;
  public userData: any;
  public userFullname: any;
  public userType: any;
  public activeProgramStudy: any;
  public participantFlag: any;
  public listMappingPathYear: any;

  // Filters
  public selectedSelectionPath: any;
  public selectedMappingPath: string;
  public selectedSelectionPathParticipant: string;
  public listSelectionPath: any;

  @ViewChildren(DataTableDirective)
  dtElements: QueryList<DataTableDirective>;
  dtOptions: any = [];

  public dataTableProgram: any;
  public loadtableParticipantPerSelectionPath: boolean;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  public loadtableParticipantPerStudyProgram: boolean;
  public tableData1: Array<any>;
  public dtTrigger1 = new Subject();

  public loadtableParticipantPerProvince: boolean;
  public tableData2: Array<any>;
  public dtTrigger2 = new Subject();

  public loadtablePINBuyer: boolean;
  public tableData3: Array<any>;
  public dtTrigger3 = new Subject();

  public loadtableParticipantperStep: boolean;
  public tableData4: Array<any>;
  public dtTrigger4 = new Subject();

  public loadtableActiveProgramStudy: boolean;
  public tableData5: Array<any>;
  public dtTrigger5 = new Subject();

  public loadtableRegistrationHistory: boolean;
  public tableData6: Array<any>;
  public dtTrigger6 = new Subject();

  public loadtableCityParticipant: boolean;
  public tableDataKota: Array<any>;
  public dtTriggerKota = new Subject();

  public loadtableSchoolParticipant: boolean;
  public tableDataSchool: Array<any>;
  public dtTriggerSchool = new Subject();

  public chartParticipantperGender: any;
  public loadParticipantperGender: boolean;
  public isMoreThanOneData: boolean;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private userService: ParticipantService
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.programActive = 0;
    this.selectionPathActive = 0;
    this.loader = false;
    this.loading = false;
    this.loadtableCityParticipant = false;
    this.isMoreThanOneData = false;
    // this.selectedSelectionPath = '';
    this.selectedSelectionPathParticipant = '';
  }

  ngOnInit() {
    this.loadProfile();
    // if (this.userType == 1) {
    //   this.dtOptions[0] = {
    //     pagingType: 'full_numbers',
    //     pageLength: 10,
    //     processing: true,
    //     // retrieve: true,
    //     destroy: true,
    //     language: {
    //       info: 'Show _START_ to _END_ from _TOTAL_ data',
    //       zeroRecords: 'No data found!',
    //       emptyTable: 'No data found!',
    //       lengthMenu: 'Show _MENU_ data',
    //       processing: 'Loading data. . . . .',
    //       infoFiltered: '',
    //       infoEmpty: ''
    //     },
    //     order: [[0, 'asc']],
    //     initComplete: () => { }
    //   };
    //   this.dtOptions[1] = {
    //     pagingType: 'full_numbers',
    //     pageLength: 10,
    //     processing: true,
    //     // retrieve: true,
    //     destroy: true,
    //     language: {
    //       info: 'Show _START_ to _END_ from _TOTAL_ data',
    //       zeroRecords: 'No data found!',
    //       emptyTable: 'No data found!',
    //       lengthMenu: 'Show _MENU_ data',
    //       processing: 'Loading data. . . . .',
    //       infoFiltered: '',
    //       infoEmpty: ''
    //     },
    //     order: [[0, 'asc']],
    //     initComplete: () => {
    //     }
    //   };
    //   this.dtOptions[2] = {
    //     pagingType: 'full_numbers',
    //     pageLength: 10,
    //     processing: true,
    //     // retrieve: true,
    //     destroy: true,
    //     language: {
    //       info: 'Show _START_ to _END_ from _TOTAL_ data',
    //       zeroRecords: 'No data found!',
    //       emptyTable: 'No data found!',
    //       lengthMenu: 'Show _MENU_ data',
    //       processing: 'Loading data. . . . .',
    //       infoFiltered: '',
    //       infoEmpty: ''
    //     },
    //     order: [[0, 'asc']],
    //     initComplete: () => {
    //     }
    //   };
    //   this.dtOptions[3] = {
    //     pagingType: 'full_numbers',
    //     pageLength: 10,
    //     processing: true,
    //     // retrieve: true,
    //     destroy: true,
    //     language: {
    //       info: 'Show _START_ to _END_ from _TOTAL_ data',
    //       zeroRecords: 'No data found!',
    //       emptyTable: 'No data found!',
    //       lengthMenu: 'Show _MENU_ data',
    //       processing: 'Loading data. . . . .',
    //       infoFiltered: '',
    //       infoEmpty: ''
    //     },
    //     order: [[0, 'asc']],
    //     initComplete: () => {
    //     }
    //   };
    //   this.dtOptions[4] = {
    //     pagingType: 'full_numbers',
    //     pageLength: 10,
    //     processing: true,
    //     // retrieve: true,
    //     destroy: true,
    //     language: {
    //       info: 'Show _START_ to _END_ from _TOTAL_ data',
    //       zeroRecords: 'No data found!',
    //       emptyTable: 'No data found!',
    //       lengthMenu: 'Show _MENU_ data',
    //       processing: 'Loading data. . . . .',
    //       infoFiltered: '',
    //       infoEmpty: ''
    //     },
    //     order: [[0, 'asc']],
    //     initComplete: () => {
    //     }
    //   };

    //   this.dtOptions[7] = {
    //     pagingType: 'full_numbers',
    //     pageLength: 10,
    //     processing: true,
    //     // retrieve: true,
    //     destroy: true,
    //     language: {
    //       info: 'Show _START_ to _END_ from _TOTAL_ data',
    //       zeroRecords: 'No data found!',
    //       emptyTable: 'No data found!',
    //       lengthMenu: 'Show _MENU_ data',
    //       processing: 'Loading data. . . . .',
    //       infoFiltered: '',
    //       infoEmpty: ''
    //     },
    //     order: [[0, 'asc']],
    //     initComplete: () => {
    //     }
    //   };
    //   this.dtOptions[8] = {
    //     pagingType: 'full_numbers',
    //     pageLength: 10,
    //     processing: true,
    //     // retrieve: true,
    //     destroy: true,
    //     language: {
    //       info: 'Show _START_ to _END_ from _TOTAL_ data',
    //       zeroRecords: 'No data found!',
    //       emptyTable: 'No data found!',
    //       lengthMenu: 'Show _MENU_ data',
    //       processing: 'Loading data. . . . .',
    //       infoFiltered: '',
    //       infoEmpty: ''
    //     },
    //     order: [[0, 'asc']],
    //     initComplete: () => {
    //     }
    //   };
    //   this.loadReportingSelectionPath();
    //   this.loadReportingParticipantPerSelectionPath();
    //   this.loadReportingParticipantPerStudyProgram();
    //   this.loadReportingParticipantPerProvince();
    //   this.loadReportingParticipantPerCity();
    //   this.loadReportingParticipantPerSchool();
    //   this.loadReportingParticipantPerGender();
    //   this.loadReportingSelectionPath();
    //   this.loadReportingPINBuyer();
    //   this.loadReportingProgram();
    //   this.loadReportingParticipantperStep();
    //   this.loadReportingActiveProgramStudy();
    //   // filters
    //   this.getSelectionPathFilters();
    //   this.getMappingPathYearFilters();
    // }
    // else {
    //   this.dtOptions[5] = {
    //     pagingType: 'full_numbers',
    //     pageLength: 10,
    //     processing: true,
    //     retrieve: true,
    //     language: {
    //       info: 'Show _START_ to _END_ from _TOTAL_ data',
    //       zeroRecords: 'No data found!',
    //       emptyTable: 'No data found!',
    //       lengthMenu: 'Show _MENU_ data',
    //       processing: 'Loading data. . . . .',
    //       infoFiltered: '',
    //       infoEmpty: ''
    //     },
    //     order: [[0, 'asc']],
    //     initComplete: () => {
    //     }
    //   };
    //   this.dtOptions[6] = {
    //     pagingType: 'full_numbers',
    //     pageLength: 10,
    //     processing: true,
    //     retrieve: true,
    //     language: {
    //       info: 'Show _START_ to _END_ from _TOTAL_ data',
    //       zeroRecords: 'No data found!',
    //       emptyTable: 'No data found!',
    //       lengthMenu: 'Show _MENU_ data',
    //       processing: 'Loading data. . . . .',
    //       infoFiltered: '',
    //       infoEmpty: ''
    //     },
    //     order: [[0, 'asc']],
    //     initComplete: () => {
    //     }
    //   };
    //   this.loadReportingRegistrationHistory();
    // }
  }

  loadProfile() {
    this.userData = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userData.username.includes("@")) {
      this.userType = 0;
      this.loading = true;
      this.userService.getParticipantDetailData(this.userData.email).subscribe(res => {
        this.userService.getRegistrationListParticipantData(`participant_id=${res.participant_id}`).subscribe(response => {
          if (response.data.length != 0) {
            this.participantFlag = 1;
            this.loading = false;
          }
          else {
            this.participantFlag = 0;
            this.loading = false;
          }
        });
      });
    }
    else {
      //as admin
      this.userType = 1;
    }
  }

  gotoAdmissionDashboard() {
    window.open('https://dev-fe.trisakti.ac.id/dashboard/login', "_blank");
  }



}
