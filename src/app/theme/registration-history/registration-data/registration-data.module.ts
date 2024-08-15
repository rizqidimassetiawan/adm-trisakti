import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { RegistrationDataComponent } from './registration-data.component';
import { RegistrationDataRoutingModule } from './registration-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [RegistrationDataComponent],
  imports: [
    CommonModule,
    RegistrationDataRoutingModule,
    SharedModule,
    DataTablesModule,
    ArchwizardModule,
    NgbTooltipModule,
    CurrencyMaskModule,
    NgbCollapseModule,
    NgbPaginationModule
  ],
  providers: [CurrencyPipe]
})
export class RegistrationDataModule { }
