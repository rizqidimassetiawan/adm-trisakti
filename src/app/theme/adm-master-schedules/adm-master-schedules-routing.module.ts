import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmMasterSchedulesComponent } from './adm-master-schedules.component';

const routes: Routes = [
   {
    path: '',
    component: AdmMasterSchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMasterSchedulesRoutingModule { }
