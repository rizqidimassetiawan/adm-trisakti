import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmMasterTypeExampComponent } from './adm-master-type-examp.component';

const routes: Routes = [
   {
    path: '',
    component: AdmMasterTypeExampComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMasterTypeExampRoutingModule { }
