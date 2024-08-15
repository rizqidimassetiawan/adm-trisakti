import { NgModule } from '@angular/core';
import { AdmMpPaymentDataComponent } from './adm-mp-payment-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMpPaymentDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMpPaymentDataRoutingModule { }
