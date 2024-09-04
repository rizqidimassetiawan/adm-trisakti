import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Component, OnInit, QueryList, ViewChild, ViewChildren, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { DocumentService } from 'src/app/_services/document.service';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adm-master-document',
  templateUrl: './adm-master-document.component.html',
  styleUrls: ['./adm-master-document.component.scss']
})
export class AdmMasterDocumentComponent implements OnInit {
  
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement: DataTableDirective;
  public dtOptions: any;
  public documentRequirementsForm: FormGroup;
  public tableData: Array<any>;
  public dtTrigger = new Subject();
  public selectionScheduleId = '';
  public loadtableProgramData: boolean;

  public confirmation: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;

  constructor(
    public translate: TranslateService,
    private broadcasterService: BroadcasterService,
    private DocumentService : DocumentService,
    private fb: FormBuilder
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
  }

  DataFormDocument = this.fb.group({
    name:['',Validators.required],
  });

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
    this.loadScheduleDataTable()
    // this.DocumentService.getDocuments().subscribe(item => {
    //    this.dataSource = item.data;
    // })
  }

  loadScheduleDataTable() {
    this.loadtableProgramData = true;
    this.DocumentService.getDocuments().subscribe(response => {
      if (response !== null) {
        console.log(response)
        this.tableData = response.data;
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
    console.log(this.tableData)
  }

  renderProgramDataTable(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: any) => {
          dtInstance.destroy();
        });
      }
    });
  }

  createDataDocument(){
    let nama = this.DataFormDocument.get('name').value;
    // Memeriksa apakah ID ada untuk menentukan apakah ini operasi edit atau tambah
    if (this.selectionScheduleId !== undefined && this.selectionScheduleId !== '') {
      // Mengedit data yang ada berdasarkan ID
      this.tableData = this.tableData.map(item => {
        if (item.id === this.selectionScheduleId) {
          return { ...item, title: nama, status: 1 }; // Update data yang sesuai dengan ID
        }
        return item; // Kembalikan data lainnya tanpa perubahan
      });
    } else {
      // Menambah data baru jika ID tidak ada
      this.tableData.push({
        id :  this.tableData.length + 1,
        title: nama,
        status: 1
      });
    }
   
    this.DataFormDocument.reset();
  }

  editData(e:any){
    this.DataFormDocument.patchValue({
      id: e.id,
      name: e.title,
    });

  }

  batal(){
    this.selectionScheduleId = ''
     this.DataFormDocument.reset();
  }

  deleteDataDocument(data) {
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
         this.tableData = this.tableData.filter(item => item.id !== data.id);
      }
    });
  }

}
