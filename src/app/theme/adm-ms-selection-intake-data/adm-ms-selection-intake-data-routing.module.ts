import { NgModule } from '@angular/core';
import { AdmMsSelectionIntakeDataComponent } from './adm-ms-selection-intake-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMsSelectionIntakeDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMsSelectionIntakeDataRoutingModule { }
