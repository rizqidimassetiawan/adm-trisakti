import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmMapProdiFormulirComponent } from './adm-map-prodi-formulir.component';


const routes: Routes = [
   {
    path: '',
    component: AdmMapProdiFormulirComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMapProdiFormulirRoutingModule { }
