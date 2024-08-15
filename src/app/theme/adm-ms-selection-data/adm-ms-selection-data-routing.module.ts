import { NgModule } from '@angular/core';
import { AdmMsSelectionDataComponent } from './adm-ms-selection-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMsSelectionDataComponent
  },
  {
    path: 'selection-data',
    loadChildren: './selection-data/selection-data.module#SelectionDataModule',
    data: { animation: '1' }
  },
  {
    path: 'selection-data/:id/:activestatusid',
    loadChildren: './selection-data/selection-data.module#SelectionDataModule',
    data: [
      {
        title: 'Data Jalur Seleksi',
        caption: 'Data Jalur Seleksi',
        status: true
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMsSelectionDataRoutingModule { }
