import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Component, OnInit, QueryList, ViewChild, ViewChildren, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import Swal from 'sweetalert2';
import { MapProdiFormulitService } from 'src/app/_services/map-prodi-formulir.service';

@Component({
  selector: 'app-adm-map-prodi-formulir',
  templateUrl: './adm-map-prodi-formulir.component.html',
  styleUrls: ['./adm-map-prodi-formulir.component.scss']
})
export class AdmMapProdiFormulirComponent implements OnInit {

  
  @ViewChildren(DataTableDirective) dtElements: QueryList<DataTableDirective>;
  @ViewChild(DataTableDirective, { static: true }) public dtElement: DataTableDirective;
  public dtOptions: any;
  public documentRequirementsForm: FormGroup;
  public tableData: Array<any>;
  public dtTrigger = new Subject();
  public loadtableProgramData: boolean;
  public selectedProdi: any;
  public selectionScheduleId: any;
  public selectionProdiId: any;
  public listSelectionProdi: any;

  public confirmation: string;
  public sure: string;
  public yes: string;
  public no: string;
  public successDel: string;
  public failedDel: string;

  constructor(
    public translate: TranslateService,
    private serviceMapProdiFormulir : MapProdiFormulitService,
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

   DataFormFormulir = this.fb.group({
    name:['',Validators.required],
    harga:['',Validators.required],
    medicalType:['',Validators.required],
  });

  ngOnInit() {
     this.serviceMapProdiFormulir.getListProdi().subscribe(item => {
       this.listSelectionProdi = item.data.map((e)=>{
        return { value : e.id, label : e.nama_prodi}
       })
    })
    this.loadScheduleDataTable()
  }

    createDataDocument(){
    let nama = this.DataFormFormulir.get('name').value;
    let harga = this.DataFormFormulir.get('harga').value;
    let tipe = this.DataFormFormulir.get('medicalType').value;

    this.listSelectionProdi.forEach(element => {
          if (element.value === this.selectionProdiId) {
            this.selectedProdi = { nama: element.label, id: element.value }
            return 
          }
    })

    // Memeriksa apakah ID ada untuk menentukan apakah ini operasi edit atau tambah
    if (this.selectionScheduleId !== undefined && this.selectionScheduleId !== '') {
      // Mengedit data yang ada berdasarkan ID
      this.tableData = this.tableData.map(item => {
        if (item.id === this.selectionScheduleId) {
          console.log(item)
          return { 
            ...item, 
             nama_formulir: nama, 
             status: 1,
             nama_prodi : this.selectedProdi.nama,
             prodi_fk : this.selectedProdi.value,
             harga : harga,
             kategori_formulir : tipe
            };
        }
        return item;
      });
    } else {
      this.tableData.push({
        id : this.tableData.length + 1,
        nama: nama,
        nama_prodi : this.selectedProdi.nama,
        prodi_fk : this.selectedProdi.value,
        harga : harga,
        kategori_formulir : tipe
      });
    }
    this.DataFormFormulir.reset();
  }

  loadScheduleDataTable() {
    this.loadtableProgramData = true;
    this.serviceMapProdiFormulir.getListMap().subscribe(response => {
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

  editData(e:any){
    this.selectionScheduleId = e.id
    // this.listSelectionProdi.forEach(element => {
    //   console.log(e.prodi_fk)
    //   if (element.value == e.prodi_fk) {
    //     this.selectionProdiId = String(element.value)
    //     return 
    //   }
    // })
    
    this.DataFormFormulir.patchValue({
      name: e.nama_formulir,
      harga: String(e.harga),
      medicalType : e.kategori_formulir
    });
  }


  batal(){
    this.selectionProdiId = ''
    this.selectionScheduleId = ''
    this.DataFormFormulir.reset();
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
