import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  public scope:any;
  public isSuperadmin: boolean;
  public isFacultyAdmin: boolean;
  public isUniversityAdmin: boolean;
  public isAdmissionAdmin: boolean;
  public isParticipantAdmin: boolean;
  public loadingAdmin: boolean;

  @ViewChildren(DataTableDirective)
  dtElements: QueryList<DataTableDirective>;
  dtOptions: any = [];
  public loadingParticipantHome: boolean;
  public loadtableRegistrationHistory: boolean;
  public tableData6: Array<any>;
  public dtTrigger6 = new Subject();
  public isMoreThanOneData: boolean;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private userService: ParticipantService,
    private router: Router,
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    // broadcasterService.scopeBroadcast$.subscribe(res => {
    //   this.loadProfile();
    // });
    this.programActive = 0;
    this.selectionPathActive = 0;
    this.loader = false;
    this.loading = false;
    this.isMoreThanOneData = false;
    this.isSuperadmin = false;
    this.isFacultyAdmin = false;
    this.isUniversityAdmin = false;
    this.isAdmissionAdmin = false;
    this.isParticipantAdmin = false;
    this.loadingAdmin = false;
  }
  
  ngOnInit() {    
    this.loadProfile();
    if (this.userType != 1) {
      this.dtOptions[6] = {
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
        order: [[0, 'asc']],
        initComplete: () => {
        }
      };
      this.loadReportingRegistrationHistory();
    }
    else {

    }
  }

  loadProfile() {
    this.userData = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userData.username.includes("@")) {
      this.userType = 0;
      this.loading = true;
    }
    else {
      this.loadingAdmin = true;
      //as admin
      this.userType = 1;
      this.getScope();
      this.broadcasterService.scopeBroadcast$.subscribe(res => {
        this.getScope();
      });
    }
  }

  getScope() {
    const scopeAccount = JSON.parse(localStorage.getItem('scope'));
    if (scopeAccount !== null) {      
      if (scopeAccount.length !=0 ) {
          this.loadingAdmin =  false;
          this.scope = scopeAccount.toString();
          if (this.scope == 'admission-faculty') {
            this.isFacultyAdmin = true;
          } else if (this.scope == 'admission-university') {
            this.isUniversityAdmin = true;
          } else if (this.scope == 'admission-admisi') {
            this.isAdmissionAdmin = true;
          } else if (this.scope == 'admission-admin-participant') {
            this.isParticipantAdmin = true;
          } else if (this.scope == 'admission-admin') {
            this.isSuperadmin = true;
            this.loadingAdmin =  false;

          }
        
      }
    }
  }

  loadReportingRegistrationHistory() {
    this.loadtableRegistrationHistory = true;
    this.userData = JSON.parse(localStorage.getItem('userProfile'));
    this.userService.getParticipantDetailData(this.userData.email).subscribe(res => {
      this.userFullname = res.fullname;      
      this.userService.getRegistrationListParticipantData(`participant_id=${res.participant_id}`).subscribe(response => {
        setTimeout(() => {
          this.tableData6 = response.data;
          this.dtTrigger6.next();
          this.loadtableRegistrationHistory = false;
          if (response.data.length > 0) {
            this.isMoreThanOneData = true;
            this.loadingParticipantHome = false;
          } else {
            this.loadingParticipantHome = false;
            this.isMoreThanOneData = false;
          }
        }, 3000);
      }, err => {
        this.loadError();
        this.loadtableRegistrationHistory = false;
      });
    });
  }

  goToNewRegistration() {
    this.router.navigate(['/new-registration'])
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

  renderTable6(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 6) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
    });
  }

}
