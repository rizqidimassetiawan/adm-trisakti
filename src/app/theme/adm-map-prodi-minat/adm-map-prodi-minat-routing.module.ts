import { NgModule } from '@angular/core';
import { AdmMapProdiMinatComponent } from './adm-map-prodi-minat.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    component: AdmMapProdiMinatComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMapProdiMinatRoutingModule { }
