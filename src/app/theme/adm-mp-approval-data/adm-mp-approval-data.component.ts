import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';

@Component({
  selector: 'app-adm-mp-approval-data',
  templateUrl: './adm-mp-approval-data.component.html',
  styleUrls: ['./adm-mp-approval-data.component.scss']
})
export class AdmMpApprovalDataComponent implements OnInit {
  public loadtableApprovalData: boolean;
  public loadDownloadData: boolean;
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  public dataTableProgram: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  //for filtering
  public loadFilter: any;
  public listSelectionProgram: any;
  public selectionProgram: string;
  public listSelectionPath: any;
  public selectionPath: string;
  public listPaymentStatus: any;
  public paymentStatus: string;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));

    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.loadDownloadData = false;
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
    this.loadApprovalData();
    this.loadSelectionPathDataFilter();
    // this.loadPaymentStatusDataFilter();
  }


  loadSelectionPathDataFilter() {
    this.loadFilter = true;
    this.chartService.getSelectionPathAdmin(`?active_status=true`).subscribe((filterArray) => {
      const dataSelectionPath = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i]['selection_path_id'].toString(),
          label: filterArray[i]['name']
        };
        dataSelectionPath.push(x);
        this.listSelectionPath = dataSelectionPath;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  // loadPaymentStatusDataFilter() {
  //   this.loadFilter = true;
  //   const data = {
  //     filter: ''
  //   };
  //   this.chartService.getProgramData(data).subscribe((filterArray) => {
  //     const dataSelectionPath = [];
  //     let x: any;
  //     for (let i = 0; i < filterArray.data.length; i++) {
  //       x = {
  //         value: filterArray.data[i]['name'],
  //         label: filterArray.data[i]['name']
  //       };
  //       dataSelectionPath.push(x);
  //       this.listPaymentStatus = dataSelectionPath;
  //     }
  //     this.loadFilter = false;
  //   }, err => {
  //     this.loadError();
  //     this.loadFilter = false;
  //   });
  // }

  loadApprovalData() {
    this.loadtableApprovalData = true;
    this.chartService.getParticipantRegistApprove('').subscribe(response => {
      if (response !== null) {
        this.tableData = response.data;
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtableApprovalData = false;
      } else {
        this.tableData = [];
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtableApprovalData = false;
      }
    }, err => {
      this.loadError();
      this.loadtableApprovalData = false;
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

  // downloadExcelData() {
  //   this.loadDownloadData = true;
  //   this.chartService.getExcelParticipantResultListData(`/${this.selectionProgram}/${this.selectionPath}`).subscribe(response => {
  //     window.open(response.urls);
  //     this.loadDownloadData = false;
  //   }, err => {
  //     this.loadDownloadData = false;
  //   });
  // }

  resetFilter() {
    this.selectionProgram = '';
    this.selectionPath = '';
    this.renderTable();
    this.loadApprovalData();
  }

  applyFilter() {
    let { selectionProgram, selectionPath } = this;
    this.getAllDataPegawaiByFilters(selectionProgram, selectionPath);
    selectionProgram = '';
    selectionPath = '';
    this.renderTable();
  }

  getAllDataPegawaiByFilters(listSelectionProgram: any, listSelectionPath: any) {
    const program = listSelectionProgram ? listSelectionProgram : '0';
    const path = listSelectionPath ? listSelectionPath : '0';
    const params = `?program=${program}&selection_path=${path}`
    this.loadtableApprovalData = true;
    this.chartService.getParticipantRegistApprove(params).subscribe(response => {
      setTimeout(() => {
        this.tableData = response.data;
        this.dtTrigger.next();
        this.loadtableApprovalData = false;
      }, 3000);
    }, err => {
      this.loadError();
      this.loadtableApprovalData = false;
    });
  }

  renderTable(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
    });
  }
}
