import { NgModule } from '@angular/core';
import { NewStudentRegistrationComponent } from './new-student-registration.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NewStudentRegistrationComponent
  },
  {
    path: 'new-student-registration-detail/:registrationnumber/:id',
    loadChildren: './new-student-registration-detail/new-student-registration-detail.module#NewStudentRegistrationDetailModule',
    data: [
      {
        title: 'Detail Data Registrasi Mahasisiswa Baru',
        caption: 'Detail Data Registrasi Mahasisiswa Baru',
        status: true
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewStudentRegistrationRoutingModule { }
