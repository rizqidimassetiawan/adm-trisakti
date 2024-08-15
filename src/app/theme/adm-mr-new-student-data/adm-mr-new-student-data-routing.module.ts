import { NgModule } from '@angular/core';
import { AdmMrNewStudentDataComponent } from './adm-mr-new-student-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMrNewStudentDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMrNewStudentDataRoutingModule { }
