import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMasterSchedulesRoutingModule } from './adm-master-schedules-routing.module';
import { AdmMasterSchedulesComponent } from './adm-master-schedules.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [AdmMasterSchedulesComponent],
  imports: [
    CommonModule,
    AdmMasterSchedulesRoutingModule,
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
export class AdmMasterSchedulesModule { }
