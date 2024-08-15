import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-adm-ms-selection-data',
  templateUrl: './adm-ms-selection-data.component.html',
  styleUrls: ['./adm-ms-selection-data.component.scss']
})
export class AdmMsSelectionDataComponent implements OnInit {
  public loadtableSelectionData:boolean;
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  // @ViewChild('dataTableProgram', {static: true}) public dtElement: DataTableDirective;
  public dataTableProgram: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dtTrigger = new Subject();

  //for filtering
  public loadFilter: any;
  public listCity: any;
  public city:string;
  public listActiveStatusFilters:Array<any>;

  public loading: boolean;
  public id: any;
  public selectionDetailData:Array<any>;
  public listActiveStatus:any;
  public activeStatus:string;
  public activeStatusFilters:string;
  public activeStatusBool:boolean;

   // LANG
   public confirmation: string;
   public sure: string;
   public yes: string;
   public no: string;
   public successDel: string;
   public failedDel: string;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));
    translateService.setDefaultLang(localStorage.getItem('lang'));
    this.translateService.get('ROOT.no').subscribe((l) => { this.no = l; });
    this.translateService.get('ROOT.yes').subscribe((l) => { this.yes = l; });
    this.translateService.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
    this.translateService.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
    this.translateService.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
    this.translateService.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
      this.translateService.get('ROOT.no').subscribe((l) => { this.no = l; });
      this.translateService.get('ROOT.yes').subscribe((l) => { this.yes = l; });
      this.translateService.get('ROOT.delete_failed').subscribe((l) => { this.failedDel = l; });
      this.translateService.get('ROOT.delete_confirmation').subscribe((l) => { this.sure = l; });
      this.translateService.get('ROOT.confirmation').subscribe((l) => { this.confirmation = l; });
      this.translateService.get('ROOT.delete_success').subscribe((l) => { this.successDel = l; });
    });
    this.loading = false;
    this.activeStatus = '1';
    this.tableData = [];
    this.listActiveStatusFilters = [
      {
        label: 'ALL',
        value: '',
      },
      {
        label: 'ACTIVE',
        value: '1',
      },
      {
        label: 'NONACTIVE',
        value: '0',
      }
    ];
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve:true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      order:[[0, 'asc']],
      initComplete: () => {
      }
    };
    this.loadSelectionData();
  }

  loadSelectionData() {
    this.loadtableSelectionData = true;
    if (this.activeStatus == '1') {
      this.activeStatusFilters = 'true';
      this.chartService.getSelectionPathAdmin(`?active_status=${this.activeStatusFilters}`).subscribe(response => {
        this.tableData = response;
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtableSelectionData = false;
      }, err => {
        this.loadtableSelectionData = false;
      });
    }
    else if (this.activeStatus == '0') {
      this.activeStatusFilters = 'false';
      this.chartService.getSelectionPathAdmin(`?active_status=${this.activeStatusFilters}`).subscribe(response => {
        this.tableData = response;
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtableSelectionData = false;
      }, err => {
        this.loadtableSelectionData = false;
      });
    } 
    else if (this.activeStatus == '') {
      this.activeStatusFilters == '';
      this.chartService.getSelectionPathAdmin(`?active_status=`).subscribe(response => {
        this.tableData = response;        
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtableSelectionData = false;
      }, err => {
        this.loadtableSelectionData = false;
      });
    }
  }

  applyFilter(activeStatus) {
    this.activeStatus = activeStatus;
    this.loadtableSelectionData = true;
    if (this.activeStatus == '1') {
      this.activeStatusFilters = 'true';
    }
    else if (this.activeStatus == '0') {
      this.activeStatusFilters = 'false';
    } 
    else if (this.activeStatus == '') {
      this.activeStatusFilters == '';      
    }
    this.render();
  }

  render(): void {
    if (this.tableData.length == 0) {
      this.loadSelectionData();
    } else {

      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 0) {
          dtElement.dtInstance.then((dtInstance: any) => {
            dtInstance.destroy();
            this.loadSelectionData();
          });
        }
      });
    }
}

  onDeselected(val) {
    switch (val) {
      case 'activeStatus':
        this.activeStatus = '1';
        break;
    }
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

  loadSuccess() {
    this.broadcasterService.notifBroadcast(true, {
      title: "Success",
      msg: "Data yang anda masukkan sudah tersimpan",
      timeout: 5000,
      theme: "default",
      position: "top-right",
      type: "success",
    });
  }
}
