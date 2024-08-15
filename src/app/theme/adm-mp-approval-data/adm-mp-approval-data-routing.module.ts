import { NgModule } from '@angular/core';
import { AdmMpApprovalDataComponent } from './adm-mp-approval-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMpApprovalDataComponent
  },
  {
    path: 'approval-data-detail/:id',
    loadChildren: './approval-data-detail/approval-data-detail.module#ApprovalDataDetailModule',
    data: { animation: '1' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMpApprovalDataRoutingModule { }
