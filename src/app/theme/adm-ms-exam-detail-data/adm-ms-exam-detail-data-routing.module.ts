import { NgModule } from '@angular/core';
import { AdmMsExamDetailDataComponent } from './adm-ms-exam-detail-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMsExamDetailDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMsExamDetailDataRoutingModule { }
