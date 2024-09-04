import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmMasterTypeExampRoutingModule } from './adm-master-type-examp-routing.module';
import { AdmMasterTypeExampComponent } from './adm-master-type-examp.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [AdmMasterTypeExampComponent],
  imports: [
    CommonModule,
    AdmMasterTypeExampRoutingModule,
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
export class AdmMasterTypeExampModule { }
