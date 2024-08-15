import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMpPaymentDataComponent } from './adm-mp-payment-data.component';
import { AdmMpPaymentDataRoutingModule } from './adm-mp-payment-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdmMpPaymentDataComponent],
  imports: [
    CommonModule,
    AdmMpPaymentDataRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbCollapseModule,
    NgbPaginationModule
  ]
})
export class AdmMpPaymentDataModule { }
