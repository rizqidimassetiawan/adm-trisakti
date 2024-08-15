import { NgModule } from '@angular/core';
import { AdmMsSelectionScheduleDataComponent } from './adm-ms-selection-schedule-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMsSelectionScheduleDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMsSelectionScheduleDataRoutingModule { }
