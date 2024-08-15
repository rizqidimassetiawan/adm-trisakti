import { NgModule } from '@angular/core';
import { AdmMsPassingGradeDataComponent } from './adm-ms-passing-grade-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMsPassingGradeDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMsPassingGradeDataRoutingModule { }
