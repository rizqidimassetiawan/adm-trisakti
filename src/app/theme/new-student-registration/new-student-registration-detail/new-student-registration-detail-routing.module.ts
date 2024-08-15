import { NgModule } from '@angular/core';
import { NewStudentRegistrationDetailComponent } from './new-student-registration-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NewStudentRegistrationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewStudentRegistrationDetailRoutingModule { }
