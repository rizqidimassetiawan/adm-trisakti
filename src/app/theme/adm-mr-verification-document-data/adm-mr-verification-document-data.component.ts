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
import { ParticipantService } from 'src/app/_services/participant.service';

@Component({
  selector: 'app-adm-mr-verification-document-data',
  templateUrl: './adm-mr-verification-document-data.component.html',
  styleUrls: ['./adm-mr-verification-document-data.component.scss']
})
export class AdmMrVerificationDocumentDataComponent implements OnInit {
  public loadtableData: boolean;

  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement: DataTableDirective;

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
  public id: any;
  public mappingPathYearSelected: string;
  public listSelectionYear: any;
  public mappingPathYearId: any;
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
    private userService: ParticipantService,
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

  loadFiterMappingPath(event) {
    this.id = event.value;
    this.mappingPathYearSelected = '';
    this.chartService.getMappingPathYearIntake(`?active_status=true&selection_path_id=${this.id}`).subscribe((res) => {
      this.listSelectionYear = res && res.map((value) => {
        const { id, year, mapping_path_year_id } = value;
        return { value: id.toString(), label: year, mapping_path_year_id: mapping_path_year_id };
      });
    });
  }

  loadMappingPathYearId(event) {
    this.mappingPathYearId = event.mapping_path_year_id;
  }

  loadFilterDocument() {
    this.chartService.getNewStudentDocument().subscribe((res) => {
      this.listDocuments = res && res.map((value) => {
        const { id, name } = value;
        return { value: id.toString(), label: name };
      });
    });
  }

  resetFilters() {
    this.selectionPathSelected = '';
    this.mappingPathYearSelected = '';
  }

  applyFilter(selectionpath, year) {
    this.isApplyFilter = true;
    this.selectionPathId = selectionpath;
    this.mappingPathYearSelected = year;
    this.renderDocumentDataTable();
  }

  loadDocumentDataTable() {
    this.loadtableData = true;
    this.userService.getNewStudentRegistration(`?selection_path_id=${this.selectionPathId}&mapping_path_year_id=${this.mappingPathYearId}&mapping_path_year_intake_id=${this.mappingPathYearSelected}`).subscribe(response => {
        this.tableData = response;
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtableData = false;
    }, err => {
      this.loadtableData = false;
    });
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
}
