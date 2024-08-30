import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMapProdiCategoryDocumentComponent } from './adm-map-prodi-category-document.component';
import { AdmMapProdiCategoryDocumentRoutingModule } from './adm-map-prodi-category-document-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [AdmMapProdiCategoryDocumentComponent],
  imports: [
    CommonModule,
    AdmMapProdiCategoryDocumentRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    NgbDatepickerModule,
    AngularDualListBoxModule,
    TagInputModule,
    SelectModule
  ]
})
export class AdmMapProdiCategoryDocumentModule { }
