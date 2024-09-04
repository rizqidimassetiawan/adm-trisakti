import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmMasterSelectionCategoryComponent } from './adm-master-selection-category.component';

const routes: Routes = [
   {
    path: '',
    component: AdmMasterSelectionCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMasterSelectionCategoryRoutingModule { }
