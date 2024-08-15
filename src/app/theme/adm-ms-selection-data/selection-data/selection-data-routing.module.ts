import { NgModule } from '@angular/core';
import { SelectionDataComponent } from './selection-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SelectionDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectionDataRoutingModule { }
