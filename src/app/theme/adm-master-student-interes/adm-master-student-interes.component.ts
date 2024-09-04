import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Component, OnInit, QueryList, ViewChild, ViewChildren, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adm-master-student-interes',
  templateUrl: './adm-master-student-interes.component.html',
  styleUrls: ['./adm-master-student-interes.component.scss']
})
export class AdmMasterStudentInteresComponent implements OnInit {

  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement: DataTableDirective;
  public dtOptions: any;
  public documentRequirementsForm: FormGroup;
  public tableData: Array<any>;
  public dtTrigger = new Subject();
  public loadtableProgramData: boolean;
  public selectionScheduleId: any;

  public confirmation: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;

  constructor(
    
    public translate: TranslateService,
    private adminManagementService : AdminManagementService,
    private broadcasterService: BroadcasterService,
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

  DataStudentInteres = this.fb.group({
    name:['',Validators.required],
  });
  ngOnInit() {
    this.loadScheduleDataTable()
  }

  createDataDocument(){
    let nama = this.DataStudentInteres.get('name').value;
    // Memeriksa apakah ID ada untuk menentukan apakah ini operasi edit atau tambah
    if (this.selectionScheduleId !== undefined && this.selectionScheduleId !== '') {
      // Mengedit data yang ada berdasarkan ID
      this.tableData = this.tableData.map(item => {
        if (item.id === this.selectionScheduleId) {
          return { ...item, nama: nama, status: 1 }; // Update data yang sesuai dengan ID
        }
        return item; // Kembalikan data lainnya tanpa perubahan
      });
    } else {
      // Menambah data baru jika ID tidak ada
      this.tableData.push({
        id : this.tableData.length + 1,
        nama: nama,
        status: 1
      });
    }
    this.DataStudentInteres.reset();
  }

  loadScheduleDataTable() {
    this.loadtableProgramData = true;
    this.adminManagementService.getDataMinat().subscribe(response => {
      if (response !== null) {
        this.tableData = response.datas;
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

  renderProgramDataTable(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (index == 0) {
        dtElement.dtInstance.then((dtInstance: any) => {
          dtInstance.destroy();
        });
      }
    });
  }

  editData(e:any){
    this.selectionScheduleId = e.id
    this.DataStudentInteres.patchValue({name: e.nama});

  }

  batal(){
    this.selectionScheduleId = ''
     this.DataStudentInteres.reset();
  }

  deleteDataDocument(data) {
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
         this.tableData = this.tableData.filter(item => item.id !== data.id);
      }
    });
  }
}
