import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/_services/app.service';
import { HttpClient } from '@angular/common/http';
import { SelectOptionService } from 'src/app/shared/components/select/select-option.service';
import { IOption } from 'ng-select';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-adm-mr-new-student-data',
  templateUrl: './adm-mr-new-student-data.component.html',
  styleUrls: ['./adm-mr-new-student-data.component.scss']
})
export class AdmMrNewStudentDataComponent implements OnInit {
  public loadtableProgramData: boolean;

  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement: DataTableDirective;
  @ViewChild('myPersistenceModal', { static: true }) public myPersistenceModal: any;
  @ViewChild('deleteProgramModal', { static: true }) public deleteProgramModal: any;

  public dataTableProgram: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  public loading: boolean;
  public loadFilter: boolean;
  public listSelectionPath: any;
  public listDocuments: any;
  public selectionPathSelected: string;
  public documentSelected: string;
  public isApplyFilter: boolean;
  public selectionPathId: string;

  // LANG
  public confirmation: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;

  constructor(
    public translate: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private appService: AppService,
    public router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    translate.setDefaultLang(localStorage.getItem('lang'));
    this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
    this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
    this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
    this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
    this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
    this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translate.setDefaultLang(res.lang);
      this.translate.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translate.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translate.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
      this.translate.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
      this.translate.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translate.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    });
    this.loading = false;
    this.isApplyFilter = false;
    this.tableData = [];
  }

  documentForm = this.fb.group({
    docname: ['', Validators.required],
  });

  get f() { return this.documentForm.controls; }

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
      initComplete: () => {
      }
    };
    this.loadFilterSelectionPath();
    this.loadFilterDocument();
  }

  loadFilterSelectionPath() {
    this.chartService.getSelectionPathAdmin(`?active_status=1`).subscribe((res) => {
      this.listSelectionPath = res && res.map((value) => {
        const { selection_path_id, name } = value;
        return { value: selection_path_id.toString(), label: name };
      });
    });
  }

  loadFilterDocument() {
    this.chartService.getNewStudentDocument().subscribe((res) => {
      this.listDocuments = res && res.map((value) => {
        const { id, name } = value;
        return { value: id.toString(), label: name };
      });
    });
  }

  applyFilter(event) {
    this.isApplyFilter = true;
    this.selectionPathId = event.value;
    this.renderDocumentDataTable();
  }

  showModalDocument() {
    this.myPersistenceModal.show();
  }

  closeModalDocument() {
    this.myPersistenceModal.hide();
    this.documentForm.reset();
  }

  createDocumentData() {
    if (this.documentForm.valid) {
      this.loading = true;
      const payload = {
        selection_path_id: this.selectionPathId,
        new_student_document_type_id: this.documentSelected
      }
      this.chartService.createMappingDocNewStudent(payload).subscribe(res => {
        if (res.status == 'Success') {
          this.loading = false;
          this.renderDocumentDataTable();
          this.closeModalDocument();
          this.broadcasterService.notifBroadcast(true, {
            title: 'Sukses',
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "success",
          });

        } else {
          this.loading = false;
          this.broadcasterService.notifBroadcast(true, {
            title: res.status,
            msg: res.message,
            timeout: 5000,
            theme: "default",
            position: "top-right",
            type: "error",
          });
        }
      }, (reason) => {
        this.broadcasterService.notifBroadcast(true, {
          title: "Gagal",
          msg: reason.error.message,
          timeout: 5000,
          theme: "default",
          position: "top-right",
          type: "error",
        });
        this.loading = false;
      });
    } else {
      Swal.fire({
        title: 'Failed',
        text: 'Masih ada data yang belum lengkap',
        type: 'error',
        allowOutsideClick: false,
      });
    }
  }

  loadDocumentDataTable() {
    this.loadtableProgramData = true;
    this.chartService.getDocumentNewStudent(`?selection_path_id=${this.selectionPathId}`).subscribe(response => {
      if (response !== null) {
        this.tableData = response;
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtableProgramData = false;
      } else {
        this.loadtableProgramData = false;
        this.tableData = [];
        this.dtTrigger.next(); // Trigger for load datatable
      }
    }, err => {
      this.loadtableProgramData = false;
    });
  }

  reset() {
    this.documentForm.reset();
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

  renderDocumentDataTable(): void {
    if (this.tableData.length == 0) {
      this.loadDocumentDataTable();
    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 0) {
          dtElement.dtInstance.then((dtInstance: any) => {
            dtInstance.destroy();
            this.loadDocumentDataTable();
          });
        }
      });
    }
  }

  deleteDocumentData(data) {
    const datas = {
      id: data.id
    };
    Swal.fire({
      title: this.confirmation,
      text: this.sure,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#ffba57',
      confirmButtonText: this.yes,
      cancelButtonText: this.no
    }).then((confirm) => {
      if (confirm.value) {
        this.loadtableProgramData = true;
        this.chartService.deleteMappingDocNewStudent(datas).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: this.successDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.renderDocumentDataTable();
              this.loadtableProgramData = false;
            } else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: this.failedDel,
                showConfirmButton: false,
                timer: 2000
              });
              this.loadtableProgramData = false;
            }
          } else {
            Swal.fire({
              position: 'center',
              type: 'error',
              title: this.failedDel,
              showConfirmButton: false,
              timer: 2000
            });
            this.loadtableProgramData = false;
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
      }
    });
  }
}
