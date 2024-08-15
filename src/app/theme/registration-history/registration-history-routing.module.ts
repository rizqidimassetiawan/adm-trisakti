import { NgModule } from '@angular/core';
import { RegistrationHistoryComponent } from './registration-history.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:  RegistrationHistoryComponent
  },
  {
      path: 'payment-registration/:registration_number',
      loadChildren: './payment-registration/payment-registration.module#PaymentRegistrationModule',
      data: { animation: '1' }
  },
  {
      path: 'registration-data/:registration_number',
      loadChildren: './registration-data/registration-data.module#RegistrationDataModule',
      data: { animation: '1' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  RegistrationHistoryRoutingModule { }
