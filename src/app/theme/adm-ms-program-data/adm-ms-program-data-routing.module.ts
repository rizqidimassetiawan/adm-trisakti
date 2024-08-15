import { NgModule } from '@angular/core';
import { AdmMsProgramDataComponent } from './adm-ms-program-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMsProgramDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMsProgramDataRoutingModule { }
