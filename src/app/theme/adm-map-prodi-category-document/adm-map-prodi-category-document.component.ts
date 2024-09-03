import { Component, OnInit, ViewChild,QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BroadcasterService } from 'src/app/_services/broadcaster.service';
import { AdminManagementService } from 'src/app/_services/admin-management.service';
import { ParticipantService } from 'src/app/_services/participant.service';
import { FormGroup, FormBuilder, FormControl, Validators,FormArray } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Location } from '@angular/common';
import { MapCategoryDocumentService } from 'src/app/_services/map-category-document.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-adm-map-prodi-category-document',
  templateUrl: './adm-map-prodi-category-document.component.html',
  styleUrls: ['./adm-map-prodi-category-document.component.scss']
})
export class AdmMapProdiCategoryDocumentComponent implements OnInit {
  
  public loader: boolean;
  public loading: boolean;
  public loadChartParticipantPerSelectionPath: boolean;
  public chartParticipantPerSelectionPath: any;
  public selectionPathActive: any;
  public documentRequirementsForm: FormGroup;
  public selectionPathNonActive: any;
  public programActive: any;
  public programNonActive: any;
  public userData: any;
  public userType: any;
  public activeProgramStudy: any;
  public participantFlag: any;
  public listMappingPathYear: any;
  public documents: any = [];
  public terpilih: { dokumen_id: number, sifatdokumen: number }[] = [];
  public filteredData: any[] = [];
  public checkedDocuments : any = [];
  public listSelectionProdi: any;
  public listSelectionMap: any;
  public selectionProdiSelected: any;

  // Filters
  public selectedSelectionPath: any;
  public selectedMappingPath: string;
  public selectedSelectionPathParticipant: string;
  public listSelectionPath: any;

  @ViewChildren(DataTableDirective)
  dtElements: QueryList<DataTableDirective>;
  dtOptions: any = [];

 

  constructor(
    public translateService: TranslateService,
    private broadcasterService: BroadcasterService,
    private chartService: AdminManagementService,
    private userService: ParticipantService,
    private fb: FormBuilder,
    private location: Location,
    private mapCategoryDocumentService: MapCategoryDocumentService
    // private mapCategoryDocumentService: MapCategoryDocumentService
  ) {
    translateService.setDefaultLang(localStorage.getItem('lang'));
    broadcasterService.changeLangBroadcast$.subscribe(res => {
      translateService.setDefaultLang(res.lang);
    });
    this.documentRequirementsForm = this.fb.group({
      selectionProdi: [''],
      sifatDokumen: this.fb.array([]),
      selectedDocuments: this.fb.array([]) // FormArray untuk checkbox
    });
    this.programActive = 0;
    this.selectionPathActive = 0;
    this.loader = false;
    this.loading = false;
    // this.selectedSelectionPath = '';
    this.selectedSelectionPathParticipant = '';

    
  }

  ngOnInit() {
    this.loadProfile();
    this.loadDokument();
    this.mapCategoryDocumentService.getListProdi().subscribe(item => {
       this.listSelectionProdi = item.data.map((e)=>{
        return { value : e.id, label : e.nama_prodi}
       })
    })
    this.mapCategoryDocumentService.getListMap().subscribe(item => {
       this.listSelectionMap = item.datas
      //  this.listSelectionMap = item.data.map((e)=>{
      //   return { value : e.id, label : e.nama_prodi}
      //  })
    })
    
  }

  loadDokument(){
    this.mapCategoryDocumentService.getListDocument().subscribe(item => {
       this.documents = item.data;
    })
  }
  

// onRadioChange(event: Event, documentId: number) {
//     const input = event.target as HTMLInputElement;
//     const status = input.value;

//     const document = this.documents.find(doc => doc.id === documentId);
//     if (document) {
//       document.selectedStatus = status;
//     }

//     console.log(document)
//   }

  simpanMapping() {

    if(this.terpilih.length == 0){
      this.broadcasterService.notifBroadcast(true, {
          title: "Gagal",
          msg: "Mapping Dokumen Tidak Boleh Kosong !",
          timeout: 3000,
          theme: "default",
          position: "top-right",
          type: "error",
        });
        return
    }
    const result = {
      prodi: this.selectionProdiSelected,
      terpilih: this.terpilih
    };

    console.log(result);

  }

   onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const isChecked = input.checked;
    const documentId = Number(input.value);

    if (isChecked) {
      // Jika checkbox di-check, tambahkan dokumen ke array 'terpilih'
      const document = this.documents.find(doc => doc.id === documentId);
      if (document) {
        this.terpilih.push({
          dokumen_id: documentId,
          sifatdokumen: document.selectedStatus || 0 // Default to 0 if no status is selected
        });
        document.isChecked = true; // Track checkbox state
      }
    } else {
      // Jika checkbox di-uncheck, hapus dokumen dari array 'terpilih'
      this.terpilih = this.terpilih.filter(doc => doc.dokumen_id !== documentId);

      // Reset status dokumen dan nonaktifkan radio button
      const document = this.documents.find(doc => doc.id === documentId);
      if (document) {
        document.selectedStatus = 0; // Reset status
        document.isChecked = false; // Track checkbox state
      }
    }
  }

   onRadioChange(event: Event, documentId: number) {
    const input = event.target as HTMLInputElement;
    const status = Number(input.value);

    const document = this.documents.find(doc => doc.id === documentId);
    if (document) {
      document.selectedStatus = status;

      // Perbarui status dokumen di array 'terpilih'
      const index = this.terpilih.findIndex(doc => doc.dokumen_id === documentId);
      if (index !== -1) {
        this.terpilih[index].sifatdokumen = status;
      } else {
        // Jika dokumen belum ada dalam 'terpilih', tambahkan
        this.terpilih.push({
          dokumen_id: documentId,
          sifatdokumen: status
        });
      }
    }
  }

  searchByProdiFk(prodi_fk:any) {
    this.selectionProdiSelected = prodi_fk.value;
    
    this.filteredData = this.listSelectionMap.filter(item => item.prodi_fk === prodi_fk.value);  
    if (this.filteredData.length > 0) {
        this.documents.forEach(doc => {
        const match = this.filteredData.find(element => element.dokumen_fk === doc.id);
          if (match) {
            doc.prodi_fk = match.prodi_fk
            doc.isChecked = true
            doc.selectedStatus = match.selectedStatus
            // Update or add to terpilih
            const existingIndex = this.terpilih.findIndex(d => d.dokumen_id === doc.id);
            if (existingIndex !== -1) {
              this.terpilih[existingIndex].sifatdokumen = doc.selectedStatus;
            } else {
              this.terpilih.push({
                dokumen_id: doc.id,
                sifatdokumen: doc.selectedStatus
              });
            }
          }else{
            doc.isChecked = false
            doc.selectedStatus = 0 
          }
        });
    }else{
        this.documents.forEach(doc => {
          doc.selectedStatus = 0 // Reset status
          doc.isChecked = false
        });
        this.terpilih = [];
    }

    console.log(this.documents)

  }

  loadProfile() {
    this.userData = JSON.parse(localStorage.getItem('userProfile'));
    if (this.userData.username.includes("@")) {
      this.userType = 0;
      this.loading = true;
      this.userService.getParticipantDetailData(this.userData.email).subscribe(res => {
        this.userService.getRegistrationListParticipantData(`participant_id=${res.participant_id}`).subscribe(response => {
          if (response.data.length != 0) {
            this.participantFlag = 1;
            this.loading = false;
          }
          else {
            this.participantFlag = 0;
            this.loading = false;
          }
        });
      });
    }
    else {
      this.userType = 1;
    }
  }

  goBack(): void {
    this.location.back();
  }


}
