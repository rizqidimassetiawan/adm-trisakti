import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmMasterStudentInteresRoutingModule } from './adm-master-student-interes-routing.module';
import { AdmMasterStudentInteresComponent } from './adm-master-student-interes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [AdmMasterStudentInteresComponent],
  imports: [
    CommonModule,
    AdmMasterStudentInteresRoutingModule,
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
export class AdmMasterStudentInteresModule { }
