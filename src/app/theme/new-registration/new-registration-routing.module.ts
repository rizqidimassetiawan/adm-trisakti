import { NgModule } from '@angular/core';
import { NewRegistrationComponent } from './new-registration.component';
import { Routes, RouterModule } from '@angular/router';
// import { PaymentRegistrationComponent } from './payment-registration/payment-registration.component';

const routes: Routes = [
  {
    path: '',
    component: NewRegistrationComponent
  }
  // {
  //     path: 'formasi-jabatan',
  //     loadChildren: './formasi-jabatan/formasi-jabatan.module#FormasiJabatanModule',
  //     data: { animation: '2' }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRegistrationRoutingModule { }
