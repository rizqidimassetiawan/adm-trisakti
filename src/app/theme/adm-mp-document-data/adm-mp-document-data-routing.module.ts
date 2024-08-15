import { NgModule } from '@angular/core';
import { AdmMpDocumentDataComponent } from './adm-mp-document-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMpDocumentDataComponent
  },
  {
    path: 'document-data-detail/:registration_number/:participantId',
    loadChildren: './document-data-detail/document-data-detail.module#DocumentDataDetailModule',
    data: { animation: '1' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMpDocumentDataRoutingModule { }
