import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { AdmMsSelectionScheduleDataComponent } from './adm-ms-selection-schedule-data.component';
import { AdmMsSelectionScheduleDataRoutingModule } from './adm-ms-selection-schedule-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [AdmMsSelectionScheduleDataComponent],
  imports: [
    CommonModule,
    AdmMsSelectionScheduleDataRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    NgbDatepickerModule,
    AngularDualListBoxModule,
    TagInputModule,
    ToastyModule.forRoot(),
    SelectModule
  ]
})
export class AdmMsSelectionScheduleDataModule { }
