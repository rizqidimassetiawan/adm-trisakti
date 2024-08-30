import { NgModule } from '@angular/core';
import { AdmMapProdiCategoryDocumentComponent } from './adm-map-prodi-category-document.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   {
    path: '',
    component: AdmMapProdiCategoryDocumentComponent
  }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMapProdiCategoryDocumentRoutingModule { }
