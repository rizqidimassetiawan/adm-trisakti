import { NgModule } from '@angular/core';
import { AdmDashboardComponent } from './adm-dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmDashboardRoutingModule { }
