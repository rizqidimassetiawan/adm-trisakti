import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { AdmMsProgramDataComponent } from './adm-ms-program-data.component';
import { AdmMsProgramDataRoutingModule } from './adm-ms-program-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [AdmMsProgramDataComponent],
  imports: [
    CommonModule,
    AdmMsProgramDataRoutingModule,
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
export class AdmMsProgramDataModule { }
