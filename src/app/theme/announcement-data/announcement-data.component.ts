import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment/moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-announcement-data',
  templateUrl: './announcement-data.component.html',
  styleUrls: ['./announcement-data.component.scss']
})
export class AnnouncementDataComponent implements OnInit {
  @ViewChild('announcementModal', { static: true })
  public announcementModal: any;
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  public dataTableProgram: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  public type = 'default';
  public formType: any;
  public loading: boolean;
  public loadTableAnnouncement: boolean;
  public announcementId: any;
  public announcementForm: FormGroup;
  public examType: string;
  public listExamType: any;
  public dateTime: string;

    // LANG
    public confirmation: string;
    public confirmationText: string;
    public sure: string;
    public yes: string;
    public no: string;
    public successDel: string;
    public failedDel: string;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private userService: ParticipantService,
    private fb: FormBuilder,
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));
    this.translateService.get('ROOT.no').subscribe((l) => { this.no = l; });
    this.translateService.get('ROOT.yes').subscribe((l) => { this.yes = l; });
    this.translateService.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
    this.translateService.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
    this.translateService.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
    this.translateService.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    this.translateService.get('ROOT.confirmationText').subscribe((l) => { this.confirmationText = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
      this.translateService.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translateService.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translateService.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
      this.translateService.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
      this.translateService.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translateService.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
      this.translateService.get('ROOT.confirmationText').subscribe((l) => { this.confirmationText = l; });
    });
    this.announcementForm = fb.group({
      id: new FormControl(''),
      title: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)])),
      start_date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      notes: new FormControl('', Validators.required),
      active_status: new FormControl(''),
      exam_type: new FormControl(''),
      ordering: new FormControl('', Validators.required),
    })
    this.loading = false;
    this.loadTableAnnouncement = false;
  }

  get f() {
    return this.announcementForm.controls;
  }

  ngOnInit() {
    this.dtOptions = {
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
    this.loadAnnouncementDataTable();
    this.loadCategoryFilter();
  }

  loadAnnouncementDataTable() {
    // this.loadTableAnnouncement = true;
    this.tableData = []
    this.loadTableAnnouncement = false;
    this.chartService.getAnnouncementData().subscribe(response => {
        this.tableData = response;
        this.dtTrigger.next();
        this.loadTableAnnouncement = false;
    }, err => {
      this.broadcasterService.notifBroadcast(true, {
        title: 'Gagal',
        msg: err.error.message,
        timeout: 5000,
        theme: 'default',
        position: 'top-right',
        type: 'error'
      });
      this.loadTableAnnouncement = false;
    });
  }

  // edit announcement data
  openFormAnnouncementData(data, type) {
    this.formType = type;
    if (type === 'edit') {
      this.announcementId = data.id;
      this.examType = data.exam_type_id && data.exam_type_id.toString();
      this.announcementForm.patchValue({ title: data.title });
      this.announcementForm.patchValue({ start_date: data.start_date && moment(data.start_date).format('YYYY-MM-DD') });
      this.announcementForm.patchValue({ time: data.start_date && moment(data.start_date).format('HH:mm') });
      this.announcementForm.patchValue({ notes: data.notes });
      this.announcementForm.patchValue({ ordering: data.ordering });
      this.announcementForm.patchValue({ active_status: data.active_status });
      if (data.active_status == true) {
        this.announcementForm.patchValue({ active_status: '1' });
      } else if (data.active_status == false) {
        this.announcementForm.patchValue({ active_status: '0' });
      } else {
        this.announcementForm.patchValue({ active_status: '0' });
      }
      const startdate = this.announcementForm.get('start_date').value;
      const time = this.announcementForm.get('time').value;
      this.dateTime = startdate.concat(" ", time);

    } else {
      this.announcementForm.reset();
      this.examType = '';
    }
    this.announcementModal.show();
  }

  createAnnouncement() {
    if (this.announcementForm.valid) {
      this.loading = true;
      switch (this.formType) {
        case 'input':
          const date = this.announcementForm.get('start_date').value;
          const time = this.announcementForm.get('time').value;
          this.dateTime = date.concat(" ", time);
          const data = {
            title: this.announcementForm.controls['title'].value,
            start_date: this.dateTime,
            notes: this.announcementForm.controls['notes'].value,
            ordering: this.announcementForm.controls['ordering'].value,
            exam_type: this.examType,
            active_status : this.announcementForm.controls['active_status'].value
          }
          this.chartService.postAnnouncementData(data).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.broadcasterService.notifBroadcast(true, {
                  title: 'Success',
                  msg: res.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'success'
                });
                this.announcementModal.hide();
                this.announcementForm.reset();
                this.loading = false;
                this.renderAnnouncementTable();
                this.loadAnnouncementDataTable();
              } else {
                this.broadcasterService.notifBroadcast(true, {
                  title: 'Gagal',
                  msg: res.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });
                this.loading = false;
              }
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: 'Terjadi kesalahan sistem',
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loading = false;
            }
          }, (reason) => {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
          break;
        case 'edit':
          const date1 = this.announcementForm.get('start_date').value;
          const time2 = this.announcementForm.get('time').value;
          this.dateTime = date1.concat(" ", time2);
          const dataUpdate = {
            id: this.announcementId,
            title: this.announcementForm.controls['title'].value,
            start_date: this.dateTime,
            notes: this.announcementForm.controls['notes'].value,
            ordering: this.announcementForm.controls['ordering'].value,
            exam_type: this.examType,
            active_status : this.announcementForm.controls['active_status'].value
          }
          this.chartService.updateAnnouncementData(dataUpdate).subscribe(res => {
            if (res != null) {
              if (res.status == 'Success') {
                this.broadcasterService.notifBroadcast(true, {
                  title: 'Success',
                  msg: res.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'success'
                });
                this.announcementModal.hide();
                this.announcementForm.reset();
                this.renderAnnouncementTable();
                this.loading = false;
                this.loadAnnouncementDataTable();
              } else {
                this.broadcasterService.notifBroadcast(true, {
                  title: 'Gagal',
                  msg: res.message,
                  timeout: 5000,
                  theme: 'default',
                  position: 'top-right',
                  type: 'error'
                });
                this.loading = false;
              }
            } else {
              this.broadcasterService.notifBroadcast(true, {
                title: 'Gagal',
                msg: 'Terjadi kesalahan sistem',
                timeout: 5000,
                theme: 'default',
                position: 'top-right',
                type: 'error'
              });
              this.loading = false;
            }
          }, (reason) => {
            this.loading = false;
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: reason.error.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
          });
          break;
        default:
          break;
      }
    }
  }

  deleteAnnouncement(data) {
    const datas = {
      id: data.id
    }
    Swal.fire({
      title: this.confirmation,
      text: this.confirmationText,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      allowOutsideClick: false
    }).then((confirm) => {
      if (confirm.value) {
        this.loading = true;
        this.chartService.deleteAnnouncementData(datas).subscribe(res => {
          if (res.status === 'Success') {
            this.announcementModal.hide();
            this.announcementForm.reset();
            this.renderAnnouncementTable();
            this.loading = false;
            this.loadAnnouncementDataTable();
          } else {
            this.broadcasterService.notifBroadcast(true, {
              title: 'Gagal',
              msg: res.message,
              timeout: 5000,
              theme: 'default',
              position: 'top-right',
              type: 'error'
            });
            this.loading = false;
          }
        });
      }
    });
  }

  loadCategoryFilter() {
    this.chartService.getExamTypeData().subscribe((resp) => {
      this.listExamType =
        resp &&
        resp.map((value) => {
          return {
            value: value.id.toString(),
            label: value.name,
          };
        });
    });
  }

  renderAnnouncementTable(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: any) => {
          dtInstance.destroy();
        });
      }
    });
}

}
