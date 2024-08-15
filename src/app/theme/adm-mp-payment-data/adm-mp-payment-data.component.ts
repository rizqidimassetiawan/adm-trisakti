import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-mp-payment-data',
  templateUrl: './adm-mp-payment-data.component.html',
  styleUrls: ['./adm-mp-payment-data.component.scss']
})
export class AdmMpPaymentDataComponent implements OnInit {
  public loadtablePaymentData: boolean;
  public loadDownloadData: boolean;

  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;

  public dataTableProgram: any;
  public dtOptions: any;
  public tableData: Array<any>;
  public dataPayment: Array<any>;
  public dtTrigger = new Subject();
  public filterClick: boolean;
  public active: boolean;
  public status_active: boolean;
  public pinActivationSubmit: boolean;

  //for filtering
  public loadFilter: any;
  public listSelectionProgram: any;
  public listSelectionYear: any;
  public selectionProgram: string;
  public selectionVerification: string;
  public selectionYear: string;
  public listSelectionPath: any;
  public selectionPath: string;
  public listPaymentStatus: any;
  public paymentStatus: string;
  public searching: string;
  public listPaymentMethod: any;
  public listVerificationTr: any;
  public paymentMethod: string;
  public pin_activation1: string;
  public isChecked: boolean;
  public haveNoEvidence: boolean;
  public paymentDataForm: FormGroup;
  public pageNumber: number;
  public isChangePage: boolean;
  public isTabledata: boolean;
  public totalRecord: number;
  public currentPage: number;
  public page: any;
  public collectionSize: number;
  public pageSize: number;
  public from: number;
  public isApplyFilter: boolean;
  public loading: boolean;
  public edit: any;
  public paymentId: any;
  public paymentUrl: any;
  public formType: any;
  public paymentMethodID: number;
  public mappingPathYearId: number;
  public cantEditPayment: boolean;
  public hiddenDownloadPayment: boolean;
  @ViewChild('myPersistenceModal', { static: true }) public myPersistenceModal: any;

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
    this.paymentDataForm = this.fb.group({
      registration_number: new FormControl(''),
      selection_path_id: new FormControl(''),
      selection_path_name: new FormControl(''),
      payment_status: new FormControl(''),
      payment_method: new FormControl(''),
      price: new FormControl(''),
      pin_activation: new FormControl(''),
      payment_url: new FormControl('')
    });
    this.loadDownloadData = false;
    this.isChecked = false;
    this.haveNoEvidence = false;
    this.active = false;
    this.status_active = false;
    this.isApplyFilter = false;
    this.tableData = [];
    this.dataPayment = [];
    this.isTabledata = false;
    this.isChangePage = false;
    this.hiddenDownloadPayment = false;
    this.searching = '';
  }

  get fpay() {
    return this.paymentDataForm.controls;
  }

  ngOnInit() {
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
      order: [[0, 'asc']],
      initComplete: () => {
      }
    };
    this.loadPaymentStatusDataFilter();
    this.verificationPicklist();
    this.loadSelectionPath();
  }

  mode(param) {
    this.edit = param;
  }

  loadSelectionPath() {
      this.chartService.getSelectionPathAdmin(`?active_status=true`).subscribe((response) => {
        this.listSelectionPath = response && response.map((value) => {
          const { selection_path_id, name } = value;
          return { value: selection_path_id.toString(), label: name };
        });
      });
  }

  changeYear(value) {
    this.loadtablePaymentData = true;
    if (!value) {
      this.loadtablePaymentData = false;
      this.listSelectionYear = [];
    } else {
      this.chartService.getMappingPathYearIntake(`?active_status=true&selection_path_id=${value}`).subscribe((res) => {
        this.loadtablePaymentData = false;
        this.listSelectionYear = res && res.map((value) => {
          const { id, year, mapping_path_year_id } = value;
          return { value: id.toString(), label: year, pathYear: mapping_path_year_id };
        })
      });
    }
  }
  
  changePaymentMethod(event) {
    this.loadtablePaymentData = true;
    if (!event.value) {
      this.loadtablePaymentData = false;
      this.listPaymentMethod = [];
    } else {
      this.mappingPathYearId = event.pathYear;
      this.chartService.getPaymentMethodData().subscribe((resp) => {
        this.loadtablePaymentData = false;
        this.listPaymentMethod = resp && resp.map((value) => {
          const { id, method } = value;
          return { value: id.toString(), label: method };
        })
      });
    }
  }

  verificationPicklist() {
    this.chartService.getVerificationTransactionPicklist().subscribe((res) => {
      this.listVerificationTr = res && res.map((val) => {
        const { value, name } = val;
        return { value: value, label: name };
      });
    });
  }

  loadPaymentStatusDataFilter() {
    this.loadFilter = true;
    this.chartService.getPaymentStatusData().subscribe((filterArray) => {
      const dataSelectionPath = [];
      let x: any;
      for (let i = 0; i < filterArray.length; i++) {
        x = {
          value: filterArray[i].id.toString(),
          label: filterArray[i].status
        };
        dataSelectionPath.push(x);
        this.listPaymentStatus = dataSelectionPath;
      }
      this.loadFilter = false;
    }, err => {
      this.loadError();
      this.loadFilter = false;
    });
  }

  loadPaymentData() {
    this.loadtablePaymentData = true;
    this.chartService.getParticipantPaymentList('').subscribe(response => {
      // this.chartService.getParticipantPaymentList(`program=${this.selectionProgram}&selection_path=${this.selectionPath}&payment_method=${this.paymentMethod}&payment_status=${this.paymentStatus}`).subscribe(response => {
      setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
        this.tableData = response.data;
        this.dtTrigger.next(); // Trigger for load datatable
        this.loadtablePaymentData = false;
      }, 3000);
    }, err => {
      this.loadError();
      this.loadtablePaymentData = false;
    });
  }

  applyFilters() {
    let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
    this.paymentStatus = selectionVerification;
    // let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching } = this;
    this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
  }

  getAllDataPegawaiByFilters(listSelectionProgram: any, listSelectionPath: any, listSelectionYear: any, listPaymentMethod: any, listVerificationTr: any, search, mappingPathYearId: any) {
    const program = listSelectionProgram ? listSelectionProgram : 0;
    const path = listSelectionPath ? listSelectionPath : '0';
    const year = listSelectionYear ? listSelectionYear : '0';
    const payment = listPaymentMethod ? listPaymentMethod : '0';
    const verif = listVerificationTr ? listVerificationTr : null;
    const mappingPathYear = this.mappingPathYearId ? this.mappingPathYearId : null;
    const regNumb = search ? search : '';
    const params = `?page=${this.pageNumber}&program=${program}&selection_path=${path}&mapping_path_year_id=${mappingPathYear}&payment_method=${payment}&need_verification=${verif}&registration_number=${regNumb}`
    // const params = `?page=${this.pageNumber}&program=${program}&selection_path=${path}&payment_method=${payment}&payment_status=${verif}&registration_number=${regNumb}&mapping_path_year_id=${mappingPathYear}`
    const paramsNopage = `?program=${program}&selection_path=${path}&mapping_path_year_id=${mappingPathYear}&payment_method=${payment}&need_verification=${verif}&registration_number=${regNumb}`
    this.loadtablePaymentData = true;
    this.dataPayment = [];
    if (this.pageNumber !== undefined) {
      this.chartService.getPaymentPagination(params).subscribe(response => {
        this.dataPayment = response.data;
        if (this.dataPayment.length == 0) {
          this.hiddenDownloadPayment = true;
        } else {
          this.hiddenDownloadPayment = false;
        }
        this.isChangePage = false;
        this.isApplyFilter = true;
        this.currentPage = response.current_page;
        this.totalRecord = response.data.length;
        this.collectionSize = response.total;
        this.pageSize = response.per_page;
        this.loadtablePaymentData = false;
        this.dataPayment.slice((response.current_page - response.current_page) * this.pageSize);
      });
    } else {
      this.chartService.getPaymentPagination(paramsNopage).subscribe(response => {
        this.dataPayment = response.data;
        if (this.dataPayment.length == 0) {
          this.hiddenDownloadPayment = true;
        } else {
          this.hiddenDownloadPayment = false;
        }
        this.from = response.from;
        this.isChangePage = false;
        this.isApplyFilter = true;
        this.loadtablePaymentData = false;
        this.currentPage = response.current_page;
        this.totalRecord = response.data.length;
        this.collectionSize = response.total;
        this.pageSize = response.per_page;
        const to = response.to;
      });

    }
  }

  resetFilter() {
    this.selectionProgram = '';
    this.selectionPath = '';
    this.paymentMethod = '';
    this.render();
    // this.loadPaymentData();
  }

  resetFilters() {
    this.selectionProgram = '';
    this.selectionPath = '';
    this.paymentMethod = '';
    this.selectionYear = '';
    this.selectionVerification = '';
  }

  render(): void {
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

  changePage(e) {
    this.pageNumber = e;
    let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
    this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
  }

  setValue(x) {
    if (x === '0') {
      this.active = false;
      this.status_active = false;
    } else if (x === '1') {
      this.active = true;
      this.status_active = true;
    } else if (x === true) {
      this.active = true;
      this.status_active = true;
    } else if (x === false) {
      this.active = false;
      this.status_active = false;
    }

  }

  loadDetailPaymentData(data) {
    this.paymentId = data.id;
    this.paymentMethodID = data.payment_method;
    this.paymentDataForm.patchValue({ registration_number: data.registration_number });
    this.paymentDataForm.patchValue({ selection_path_name: data.selection_path_name });
    this.paymentDataForm.patchValue({ selection_path_id: data.selection_path_id });
    this.paymentDataForm.patchValue({ payment_status: data.payment_status });
    this.paymentDataForm.patchValue({ payment_method: data.payment_method_name });
    this.paymentDataForm.patchValue({ price: data.price ? data.price : '-' });
    if (data.activation_pin === false) {
      this.pin_activation1 = '0';
      this.active = false;
      this.cantEditPayment = false;
    } else if (data.activation_pin == '1') {
      this.pin_activation1 = '1';
      this.active = true;
      this.cantEditPayment = true;
    } else {
      this.pin_activation1 = '0';
      this.active = false;
    }
    this.paymentDataForm.patchValue({ payment_url: data.payment_url });
    this.paymentUrl = data.payment_url;
    if (this.paymentUrl === null) {
      this.haveNoEvidence = true;
    } else {
      this.haveNoEvidence = false;
    }
    this.myPersistenceModal.show();
  }

  submitApprovePayment() {
    if (this.paymentDataForm.valid) {
      let data = {
        registration_number: this.paymentDataForm.value.registration_number,
        payment_status: 1,
        payment_method: this.paymentMethodID,
        activation_pin: true,
      };
      this.chartService.upRegistrationData(data).subscribe(res => {
        if (res != null) {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.myPersistenceModal.hide();
            let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
            this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
        
            this.loading = false;
          } else {
            this.loadError();
          }
        } else {
          this.loadError();
        }
      }, (reason) => {
        this.loadError();
      });
    }
  }

  submitRejectPayment() {
    if (this.paymentDataForm.valid) {
      let data = {
        registration_number: this.paymentDataForm.value.registration_number,
        payment_status: 2,
        payment_method: this.paymentMethodID,
        activation_pin: false,
      };
      this.chartService.upRegistrationData(data).subscribe(res => {
        if (res != null) {
          if (res.status == 'Success') {
            this.loadSuccess();
            this.myPersistenceModal.hide();
            let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
            this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
        
            this.loading = false;
          } else {
            this.loadError();
          }
        } else {
          this.loadError();
        }
      }, (reason) => {
        this.loadError();
      });
    }
  }

  createDetailSelectionStepData() {
    this.loading = true;
    if (this.edit == 'edit') {
      if (this.status_active === true) {
        let data = {
          registration_number: this.paymentDataForm.value.registration_number,
          payment_status: 1,
          payment_method: this.paymentMethodID,
          activation_pin: true,
        };
        this.chartService.upRegistrationData(data).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.myPersistenceModal.hide();
              let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
              this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
          
              this.loading = false;
            } else {
              this.loadError();
            }
          } else {
            this.loadError();
          }
        }, (reason) => {
          this.loadError();
        });
      } else {
        let dataUpdate = {
          registration_number: this.paymentDataForm.value.registration_number,
          payment_status: 2,
          payment_method: this.paymentMethodID,
          activation_pin: 'false',
        };
        this.chartService.upRegistrationData(dataUpdate).subscribe(res => {
          if (res != null) {
            if (res.status == 'Success') {
              this.loadSuccess();
              this.myPersistenceModal.hide();
              let { selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId } = this;
    this.getAllDataPegawaiByFilters(selectionProgram, selectionPath, selectionYear, paymentMethod, selectionVerification, searching, mappingPathYearId);
              this.loading = false;
            } else {
              this.loadError();
            }
          } else {
            this.loadError();
          }
        }, (reason) => {
          this.loadError();
        });
      }

    }
    // }
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

  downloadExcelData(selectionVerification) {
    this.loadDownloadData = true;
    this.chartService.getExcelParticipantPaymentListData(`/${0}/${this.selectionPath}/${selectionVerification ? selectionVerification : '0'}/${this.paymentMethod}`).subscribe(response => {
      window.open(response.urls);
      this.loadDownloadData = false;
    }, err => {
      this.loadDownloadData = false;
    });
  }
}
