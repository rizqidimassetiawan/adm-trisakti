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

  isChecked(documentId: number): boolean {
    return this.checkedDocuments.includes(documentId);
  }


  simpanMapping(){
    let data = {
      'prodi_id' : this.selectionProdiSelected,
      'documents_id' : this.documentRequirementsForm.value.selectedDocuments
    }
    
    const filePath = 'assets/fake-data/db.json';
    // if (typeof window === 'undefined') {
    //   // Server-side code
    //   const fs = require('fs');
    //   // ...
    // }
    // const newArray = ['item1', 'item2', 'item3'];

    // // Read the JSON file
    // fs.readFile(filePath, 'utf8', (err, data) => {
    //   if (err) {
    //     console.error('Error reading the file:', err);
    //     return;
    //   }

    //   try {
    //     // Parse the JSON data
    //     const json = JSON.parse(data);

    //     // Insert the array (assuming we want to add to an existing array)
    //     json.items = newArray;

    //     // Convert the JSON object back to a string
    //     const updatedData = JSON.stringify(json, null, 2);

    //     // Write the modified data back to the file
    //     fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    //       if (err) {
    //         console.error('Error writing to the file:', err);
    //         return;
    //       }
    //       console.log('Array inserted successfully!');
    //     });
    //   } catch (parseError) {
    //     console.error('Error parsing JSON:', parseError);
    //   }
    // });

  }

  onCheckboxChange(event: any) {
    const selectedDocuments = this.documentRequirementsForm.controls['selectedDocuments'] as FormArray;

    if (event.target.checked) {
      selectedDocuments.push(new FormControl(event.target.value));
    } else {
      const index = selectedDocuments.controls.findIndex(x => x.value === event.target.value);
      selectedDocuments.removeAt(index);
    }
  }

  filteredData: any[] = [];

  searchByProdiFk(prodi_fk:any) {
    this.filteredData = this.listSelectionMap.filter(item => item.prodi_fk === prodi_fk.value);
    if (this.filteredData.length > 0) {
        this.filteredData.forEach(element => {
          this.documents.forEach(el => {
            if(element.dokumen_fk == el.id){
              el.prodi_fk = element.prodi_fk
            }
          });
        });
      } 
      console.log( this.documents)
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
      //as admin
      this.userType = 1;
    }
  }

  goBack(): void {
    this.location.back();
  }


}
