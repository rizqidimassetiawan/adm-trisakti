import { NgModule } from '@angular/core';
import { ParticipantDataDetailComponent } from './participant-data-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ParticipantDataDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantDataDetailRoutingModule { }
