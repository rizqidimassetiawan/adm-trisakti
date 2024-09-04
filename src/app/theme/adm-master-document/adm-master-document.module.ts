import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMasterDocumentComponent } from './adm-master-document.component';
import { AdmMasterDocumentRoutingModule } from './adm-master-document-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';


@NgModule({
  declarations: [AdmMasterDocumentComponent],
  imports: [
    CommonModule,
    AdmMasterDocumentRoutingModule,
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
export class AdmMasterDocumentModule { }
