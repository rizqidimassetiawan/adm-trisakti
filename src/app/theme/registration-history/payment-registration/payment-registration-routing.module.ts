import { NgModule } from '@angular/core';
import { PaymentRegistrationComponent } from './payment-registration.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PaymentRegistrationComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class  PaymentRegistrationRoutingModule { }
