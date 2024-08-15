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
  templateUrl: './new-student-registration.component.html',
  styleUrls: ['./new-student-registration.component.scss']
})
export class NewStudentRegistrationComponent implements OnInit {
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  public tableNewStudent: Array<any>;
  public loadNewStudentTable: boolean;
  public dtOptions: any = [];
  public dtTrigger = new Subject();
  private username: any;
  private participantId: any;

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
    const data = JSON.parse(localStorage.getItem('userProfile'));
    this.username = data.email;
    this.loadNewStudentTable = false;
    this.tableNewStudent = [];
  }
  
  ngOnInit() { 
    this.dtOptions[0] = {
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
    this.getParticipantId();
  }

  getParticipantId() {
    this.loadNewStudentTable = true;    
    this.userService.getParticipantDataInformation(`?username=${this.username}`).subscribe(resp => {
      if (resp.length !== 0) {
        this.participantId = resp.participant_id;
        this.getNewStudentTable();
      } else {
        this.tableNewStudent = [];
        this.loadNewStudentTable = false;
      }
    });
  }

  getNewStudentTable() {
      this.userService.getNewStudentRegistration(`?participant_id=${this.participantId}`).subscribe(response => {
          this.tableNewStudent = response;
          this.dtTrigger.next();
          this.loadNewStudentTable = false;
        }, (reason) => {
          this.loadNewStudentTable = false;
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
