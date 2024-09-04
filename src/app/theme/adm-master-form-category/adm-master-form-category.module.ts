import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMasterFormCategoryRoutingModule } from './adm-master-form-category-routing.module';
import { AdmMasterFormCategoryComponent } from './adm-master-form-category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [AdmMasterFormCategoryComponent],
  imports: [
    CommonModule,
    AdmMasterFormCategoryRoutingModule,
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
export class AdmMasterFormCategoryModule { }
