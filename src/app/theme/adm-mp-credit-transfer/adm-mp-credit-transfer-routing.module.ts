import { NgModule } from '@angular/core';
import { AdmMpCreditTransferComponent } from './adm-mp-credit-transfer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMpCreditTransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMpCreditTransferRoutingModule { }
