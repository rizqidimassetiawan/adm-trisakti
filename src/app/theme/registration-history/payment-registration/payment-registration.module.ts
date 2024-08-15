import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRegistrationComponent } from './payment-registration.component';
import { PaymentRegistrationRoutingModule } from './payment-registration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [PaymentRegistrationComponent],
  imports: [
    CommonModule,
    PaymentRegistrationRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class PaymentRegistrationModule { }
