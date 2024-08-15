import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionDataComponent } from './selection-data.component';
import { SelectionDataRoutingModule } from './selection-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { DataTablesModule } from 'angular-datatables';
import { NgbTooltipModule ,NgbDatepickerModule, NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';
@NgModule({
  declarations: [SelectionDataComponent],
  imports: [
    CommonModule,
    SelectionDataRoutingModule,
    SharedModule,
    ArchwizardModule,
    DataTablesModule,
    NgbTooltipModule,NgbDatepickerModule,
    FormsModule,ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [CurrencyPipe]
})
export class SelectionDataModule { }
