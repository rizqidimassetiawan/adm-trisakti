import { NgModule } from '@angular/core';
import { RegistrationReportComponent } from './registration-report.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:  RegistrationReportComponent
  },
  // {
  //     path: 'registration-history',
  //     loadChildren: './registration-history/registration-history.module#RegistrationHistoryModule',
  //     data: { animation: '1' }
  // },
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
export class  RegistrationReportRoutingModule { }
