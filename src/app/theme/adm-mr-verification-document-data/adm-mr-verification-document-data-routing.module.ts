import { NgModule } from '@angular/core';
import { AdmMrVerificationDocumentDataComponent } from './adm-mr-verification-document-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMrVerificationDocumentDataComponent
  },
  {
    path: 'adm-mr-detail-verification-document-data/:registrationnumber/:participantId/:id',
    loadChildren: './adm-mr-detail-verification-document-data/adm-mr-detail-verification-document-data.module#AdmMrDetailVerificationDocumentDataModule',
    data: [
      {
        title: 'Detail Data Registrasi Mahasisiswa Baru',
        caption: 'Detail Data Registrasi Mahasisiswa Baru',
        status: true
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMrVerificationDocumentDataRoutingModule { }
