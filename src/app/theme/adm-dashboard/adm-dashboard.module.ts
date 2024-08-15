import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmDashboardComponent } from './adm-dashboard.component';
import { AdmDashboardRoutingModule } from './adm-dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [AdmDashboardComponent],
  imports: [
    CommonModule,
    AdmDashboardRoutingModule,
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
export class AdmDashboardModule { }
