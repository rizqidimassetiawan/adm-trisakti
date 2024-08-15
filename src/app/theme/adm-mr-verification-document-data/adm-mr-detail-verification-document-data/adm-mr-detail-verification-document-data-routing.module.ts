import { NgModule } from '@angular/core';
import { AdmMrDetailVerificationDocumentDataComponent } from './adm-mr-detail-verification-document-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMrDetailVerificationDocumentDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMrDetailVerificationDocumentDataRoutingModule { }
