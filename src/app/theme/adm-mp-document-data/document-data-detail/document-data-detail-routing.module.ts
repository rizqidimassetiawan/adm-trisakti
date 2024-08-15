import { NgModule } from '@angular/core';
import { DocumentDataDetailComponent } from './document-data-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DocumentDataDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentDataDetailRoutingModule { }
