import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/_services/app.service';
import { DataTableDirective } from 'angular-datatables';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {
  // Begin - Main Component of dataTable [mandatory]
  @ViewChild(DataTableDirective, {static: false}) public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger = new Subject();
  // End - Main Component of dataTable [mandatory]

  public loadTable: boolean; // Create property for spinner loading

  public dataFaq: Array<any>; // Create property for FAQ data list

  public playersOption: Array<any>; // Create property for option list

  public formPlayers: FormGroup; // Create FormGroup instance

  // notification property
  public toastData: any;

  constructor(
    public broadcasterService: BroadcasterService,
    public translateService: TranslateService,
    public appService: AppService,
    private fb: FormBuilder
  ) {
    this.toastData = {};
    this.loadTable = false;
    translateService.setDefaultLang(localStorage.getItem('lang'));
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.playersOption = [
      {value: '0', label: 'Lionel Messi'},
      {value: '1', label: 'Andres Iniesta'},
      {value: '2', label: 'Xavi Hernandes'},
      {value: '3', label: 'Carles Puyol'},
      {value: '4', label: 'Sergio Busquets'},
      {value: '5', label: 'Pedro'},
      {value: '6', label: 'David Villa'},
      {value: '7', label: 'Dani Alves'},
      {value: '8', label: 'Victor Valdes'},
      {value: '9', label: 'Jordi Alba'},
      {value: '10', label: 'Gerard Pique'},
      {value: '11', label: 'Cesc Fabregas'},
      {value: '12', label: 'Joseph Guardiola'}
    ];
    this.formPlayers = this.fb.group ({
      person: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.max(99)])
    });
  }

  get fp() { return this.formPlayers.controls; }

  ngOnInit() {
    // this.loadData();
  }

  // resetForm() {
  //   this.formPlayers.reset();
  // }

  // loadData() {
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 10,
  //     autoWidth: true,
  //     serverSide: true,
  //     processing: true,
  //     ordering: false,
  //     lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
  //     language: {
  //       info: 'Show _START_ to _END_ from _TOTAL_ data',
  //       processing: '',
  //       lengthMenu: 'Show _MENU_ data',
  //       zeroRecords: 'No data found!',
  //       emptyTable: 'No data found!',
  //       loadingRecords: '&nbsp;',
  //       infoFiltered: '',
  //       infoEmpty: ''
  //     },
  //     ajax: (dataTablesParameters: any, callback) => {
  //       this.loadTable = true;
  //       this.appService.getFaqData(dataTablesParameters).subscribe((resp) => {
  //         this.loadTable = false;
  //         this.dataFaq = resp;
  //         callback({
  //           recordsTotal: resp.total,
  //           recordsFiltered: resp.total,
  //           data: [],
  //         });
  //       }, err => {
  //           this.broadcasterService.notifBroadcast(true, {
  //             title: 'Gagal',
  //             msg: 'Terjadi kesalahan sistem',
  //             timeout: 5000,
  //             theme: 'bootstrap',
  //             position: 'top-right',
  //             type: 'error'
  //           });
  //           this.loadTable = false;
  //         });
  //     }
  //   };
  //   // this.appService.getFakeData().subscribe(response => {
  //   //   setTimeout(() => { // for fake loading for 3sec [just ignore if in development mode]
  //   //     this.dataFaq = response.data;
  //   //     this.dtTrigger.next(); // Trigger for load datatable
  //   //     this.broadcasterService.notifBroadcast(true, {
  //   //       title: 'Sukses',
  //   //       msg: 'Message sukses',
  //   //       timeout: 5000,
  //   //       theme: 'bootstrap',
  //   //       position: 'top-right',
  //   //       type: 'success'
  //   //     });
  //   //     this.loadTable = false;
  //   //   }, 3000);
  //   // }, err => {
  //   //   this.broadcasterService.notifBroadcast(true, {
  //   //     title: 'Gagal',
  //   //     msg: 'Terjadi kesalahan sistem',
  //   //     timeout: 5000,
  //   //     theme: 'bootstrap',
  //   //     position: 'top-right',
  //   //     type: 'error'
  //   //   });
  //   //   this.loadTable = false;
  //   // });
  // }

}
