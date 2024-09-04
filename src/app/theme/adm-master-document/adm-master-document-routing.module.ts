import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmMasterDocumentComponent } from './adm-master-document.component';


const routes: Routes = [
   {
    path: '',
    component: AdmMasterDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMasterDocumentRoutingModule { }
