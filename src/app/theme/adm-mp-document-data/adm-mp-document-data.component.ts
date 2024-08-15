import { Component, OnInit, QueryList, ViewChild, ViewChildren, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adm-mp-document-data',
  templateUrl: './adm-mp-document-data.component.html',
  styleUrls: ['./adm-mp-document-data.component.scss']
})
export class AdmMpDocumentDataComponent implements OnInit {
  public loadtableParticipantData:boolean;
  public loadDownloadData:boolean;
  @ViewChild('changeSelectionPathModals', { static: true })
  public changeSelectionPathModals: any;
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;

  public dtOptions: any;
  public tableData: Array<any>;
  public dataParticipant: Array<any>;
  public dtTrigger = new Subject();

  //for filtering
  public loadFilter: any;
  public listSelectionProgram: any;
  public selectionProgram:string;
  public listSelectionPath: any;
  public listSelectionPathChange: any;
  public mappingPathYear: string;
  public paymentMethodChange: string;
  public listSelectionYear: any;
  public selectionPath:string;
  public selectionPathChange: string;
  public searching:string;
  public selectionYear:string;
  public selectionPaymentStatus:string;
  public listTelutizenStatus: any;
  public telutizenStatus:string;
  public listNationality: any;
  public listStatusPayment: any;
  public nationality:string;
  public filterClick: boolean;
  public isApplyFilter: boolean;
  public isChangePage: boolean;
  public loading: boolean;
  public isTabledata: boolean;
  public totalRecord: number;
  public currentPage: number;
  public page: any;
  public collectionSize: number;
  public pageSize: number;
  public pageNumber: number;
  public from: number;
  public changeSelectionPathForm: FormGroup;
  public mappingPathYearId: number;

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private fb: FormBuilder,
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));

    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.changeSelectionPathForm = fb.group({
      name: new FormControl(''),
      registration_number: new FormControl(''),
      selection_path_id: new FormControl('')
    });
    this.loadDownloadData = false;
    this.isApplyFilter = false;
    this.isTabledata = false;
    this.isChangePage = false;
    this.loading = false;
    this.tableData = [];
    // this.currentPage = 1;
  }

  get f() {
    return this.changeSelectionPathForm.controls;
  }

  ngOnInit() {
    this.filterClick = false;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy: true,
      language: {
        info: 'Show _START_ to _END_ from _TOTAL_ data',
        zeroRecords: 'No data found!',
        emptyTable: 'No data found!',
        lengthMenu: 'Show _MENU_ data',
        processing: 'Loading data. . . . .',
        infoFiltered: '',
        infoEmpty: ''
      },
      order:[[0, 'asc']]  ,
      initComplete: () => {
      }
    };
    // this.loadSelectionProgramDataFilter();
    // this.loadSelectionPathDataFilter();
    this.loadSellectionPathFilters();
    // this.loadTelutizenStatusDataFilter();
    this.loadNationalityDataFilter();
    this.loadParticipantDataDetail();
    this.selectionPathList();
  }

  // loadSelectionProgramDataFilter(){
  //   this.loadFilter= true;
  //   const data = {
  //     filter : ''
  //   };
  //   this.chartService.getProgramData(data).subscribe((filterArray) => {
  //     const dataProgram = [];
  //     let x:any;
  //     for(let i = 0; i< filterArray.data.length; i++){
  //       x = {
  //         value: filterArray.data[i]['id'],
  //         label: filterArray.data[i]['name']
  //       };
  //       dataProgram.push(x);
  //       this.listSelectionProgram = dataProgram;
  //     }
  //     this.loadFilter = false;
  //   }, err =>{
  //     this.loadError();
  //     this.loadFilter = false;
  //   });
  // }

  // loadSelectionPathDataFilter(){
  //   this.loadFilter= true;
  //   this.chartService.getSelectionPathData(`?active_status=1`).subscribe((filterArray) => {
  //     const dataSelectionPath = [];
  //     let x:any;
  //     for(let i = 0; i< filterArray.data.length; i++){
  //       x = {
  //         value: filterArray.data[i]['selection_path_id'].toString(),
  //         label: filterArray.data[i]['name']
  //       };
  //       dataSelectionPath.push(x);
  //       this.listSelectionPath = dataSelectionPath;
  //     }
  //     this.loadFilter = false;
  //   }, err =>{
  //     this.loadError();
  //     this.loadFilter = false;
  //   });
  // }

  loadTelutizenStatusDataFilter(){
    this.loadFilter= true;
    const data = {
      filter : ''
    };
    this.chartService.getProgramData(data).subscribe((filterArray) => {
      const dataTelutizenStatus = [];
      let x:any;
      for(let i = 0; i< filterArray.data.length; i++){
        x = {
          value: filterArray.data[i]['name'],
          label: filterArray.data[i]['name']
        };
        dataTelutizenStatus.push(x);
        this.listTelutizenStatus = dataTelutizenStatus;
      }
      this.loadFilter = false;
    }, err =>{
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadNationalityDataFilter(){
    this.loadFilter= true;
    this.chartService.getNationalityData().subscribe((filterArray) => {
      const dataNationality = [];
      let x:any;
      for(let i = 0; i< filterArray.length; i++){
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].nationality
        };
        dataNationality.push(x);
        this.listNationality = dataNationality;
      }
      this.loadFilter = false;
    }, err =>{
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadParticipantDataDetail(){
    this.dataParticipant = [];

    if (this.pageNumber !== undefined) {
      this.chartService.getParticipantPagination(`?page=${this.pageNumber}`).subscribe(response => {
        this.dataParticipant = response.data;
        this.isChangePage = false;
        this.currentPage =response.current_page;
        this.totalRecord = response.data.length;
        this.collectionSize = response.total;
        this.pageSize = response.per_page;
        this.dataParticipant.slice((response.current_page - response.current_page) * this.pageSize );
      });
    } else {
      this.chartService.getParticipantPagination(``).subscribe(response => {
        this.dataParticipant = response.data;
        this.from = response.from;
        this.isChangePage = false;
        this.currentPage =response.current_page;
        this.totalRecord = response.data.length;
        this.collectionSize = response.total;
        this.pageSize = response.per_page;
        const to = response.to;
      });

    }
  }

  loadSellectionPathFilters() {
      this.chartService.getSelectionPathAdmin(`?active_status=true`).subscribe((response) => {
        this.listSelectionPath = response && response.map((value) => {
          const { selection_path_id, name } = value;
          return { value: selection_path_id.toString(), label: name };
        });
      });
  }

  selectionPathList() {
      this.chartService.getSelectionPathAdmin(`?active_status=1`).subscribe((response) => {
        this.listSelectionPathChange = response.data && response.data.map((value) => {
          const { selection_path_id, name, mapping_path_year_id } = value;
          return { value: selection_path_id.toString(), label: name, mapping_path: mapping_path_year_id};
        });
      });
  }

  changeYear(value) {
    if (!value) {
      this.listSelectionYear = [];
    } else {
      this.chartService.getMappingPathYearIntake(`?active_status=true& selection_path_id=${value}`).subscribe((res) => {
        this.listSelectionYear = res && res.map((value) => {
          const {id, year, mapping_path_year_id} = value;
          return {value: id.toString(), label: year, pathYear: mapping_path_year_id};
        })
      });
    }
  }

  changePaymentStatus(event) {
    if (!event.value) {
      this.listStatusPayment = [];
    } else {
      this.mappingPathYearId = event.pathYear;
      this.chartService.getPaymentStatusData().subscribe((res) => {
        this.listStatusPayment = res && res.map((value) => {
          const {id, status} = value;
          return {value: id.toString(), label: status};
        })
      });
    }
  }

  loadSelectionYear() {
    this.chartService.getSelectionYear(`?active_status=true`).subscribe((res) => {
      this.listSelectionYear = res && res.map((value) => {
        const {id, year} = value;
        return {value: id.toString(), label: year};
      })
    });
  }

  applyFilter() {
    let { selectionProgram, selectionPath, selectionYear, selectionPaymentStatus, searching } = this;
    this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, selectionPaymentStatus, searching);
  }

  getAllDataPegawaiByFilters(listSelectionProgram: any, listSelectionPath: any, listSelectionYear: any, listStatusPayment: any, searching) {
    const program =  listSelectionProgram ? listSelectionProgram : '0';
    const path = listSelectionPath ? listSelectionPath : '0';
    const year = listSelectionYear ? listSelectionYear : '0';
    const pstatus = listStatusPayment ? listStatusPayment : '0';
    const regNumber = searching ? searching : '';
    const params = `?page=${this.pageNumber}&program=${program}&selection_path=${path}&payment_status_id=${pstatus}&registration_number=${regNumber}`
    const paramsNopage = `?program=${program}&selection_path=${path}&&payment_status_id=${pstatus}&registration_number=${regNumber}`
    this.loadtableParticipantData = true;
    this.dataParticipant = [];

    if (this.pageNumber !== undefined) {
      this.chartService.getParticipantPagination(params).subscribe(response => {
        this.dataParticipant = response.data;
        this.isChangePage = false;
        this.isApplyFilter = true;
        this.currentPage =response.current_page;
        this.totalRecord = response.data.length;
        this.collectionSize = response.total;
        this.pageSize = response.per_page;
        this.loadtableParticipantData = false;
        this.dataParticipant.slice((response.current_page - response.current_page) * this.pageSize );
      });
    } else {
      this.chartService.getParticipantPagination(paramsNopage).subscribe(response => {
        this.dataParticipant = response.data;
        this.from = response.from;
        this.isChangePage = false;
        this.isApplyFilter = true;
        this.loadtableParticipantData = false;
        this.currentPage =response.current_page;
        this.totalRecord = response.data.length;
        this.collectionSize = response.total;
        this.pageSize = response.per_page;
        const to = response.to;
      });

    }
  }

  changePage(e) {
    this.pageNumber = e;
    this.applyFilter();
  }

  updateSelectionPath(data) {
    this.changeSelectionPathModals.show();
    this.selectionPath = data.selection_path_id && data.selection_path_id.toString();
    this.paymentMethodChange = data.payment_method_id;
    this.changeSelectionPathForm.patchValue({ name: data.fullname });
    this.changeSelectionPathForm.patchValue({ registration_number: data.registration_number });
  }

  selectionPathSelected(event) {
    this.mappingPathYear = event.mapping_path;
  }

  createSelectionPathUpdate() {
    this.loading = true;
    const dataUpdate = {
      registration_number:this.changeSelectionPathForm.get('registration_number').value,
      selection_path_id:this.selectionPath,
      mapping_path_year_id:this.mappingPathYear,
      payment_method:this.paymentMethodChange
    }
    this.chartService.upRegistrationData(dataUpdate).subscribe(res => {
      if (res.status == 'Success') {
        this.broadcasterService.notifBroadcast(true, {
          title: 'Success',
          msg: res.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'success'
        });
        this.changeSelectionPathModals.hide();
        this.loading = false;
        let { selectionProgram, selectionPath, selectionYear, selectionPaymentStatus, searching } = this;
        this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, selectionPaymentStatus, searching);
      } else {
        this.loading = false;
        this.broadcasterService.notifBroadcast(true, {
          title: 'Error',
          msg: res.message,
          timeout: 5000,
          theme: 'default',
          position: 'top-right',
          type: 'error'
        });
      }
    })
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

  downloadExcelData(){
    this.loadDownloadData = true;
    this.chartService.getExcelParticipantListData(`/0/${this.selectionPath}/${0}`).subscribe(response =>{
      window.open(response.urls);
      this.loadDownloadData = false;
    }, err=>{
      this.loadDownloadData = false;
    });
  }

  renderTable(): void {
    if (this.tableData.length == 0) {

    } else {
      this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
        if (index == 0) {
          dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
          });
        }
      });
    }
  }
}
