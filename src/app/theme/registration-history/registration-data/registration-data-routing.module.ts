import { NgModule } from '@angular/core';
import { RegistrationDataComponent } from './registration-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:  RegistrationDataComponent
  },
  // {
  //     path: 'registration-history',
  //     loadChildren: './registration-history/registration-history.module#RegistrationHistoryModule',
  //     data: { animation: '1' }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  RegistrationDataRoutingModule { }
