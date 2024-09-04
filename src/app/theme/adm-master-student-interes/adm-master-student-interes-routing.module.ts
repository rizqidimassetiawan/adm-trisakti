import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmMasterStudentInteresComponent } from './adm-master-student-interes.component';

const routes: Routes = [
   {
    path: '',
    component: AdmMasterStudentInteresComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMasterStudentInteresRoutingModule { }
