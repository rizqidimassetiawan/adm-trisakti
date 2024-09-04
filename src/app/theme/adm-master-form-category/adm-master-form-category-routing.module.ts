import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmMasterFormCategoryComponent } from './adm-master-form-category.component';

const routes: Routes = [
   {
    path: '',
    component: AdmMasterFormCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMasterFormCategoryRoutingModule { }
