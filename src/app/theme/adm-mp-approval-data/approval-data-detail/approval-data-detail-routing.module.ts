import { NgModule } from '@angular/core';
import { ApprovalDataDetailComponent } from './approval-data-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ApprovalDataDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalDataDetailRoutingModule { }
