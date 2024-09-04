import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmMasterSelectionCategoryRoutingModule } from './adm-master-selection-category-routing.module';
import { AdmMasterSelectionCategoryComponent } from './adm-master-selection-category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [AdmMasterSelectionCategoryComponent],
  imports: [
    CommonModule,
    AdmMasterSelectionCategoryRoutingModule,
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
export class AdmMasterSelectionCategoryModule { }
