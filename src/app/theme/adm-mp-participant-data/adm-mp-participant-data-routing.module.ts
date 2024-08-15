import { NgModule } from '@angular/core';
import { AdmMpParticipantDataComponent } from './adm-mp-participant-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMpParticipantDataComponent
  },
  {
    path: 'participant-data-detail/:registration_number',
    loadChildren: './participant-data-detail/participant-data-detail.module#ParticipantDataDetailModule',
    data: { animation: '1' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMpParticipantDataRoutingModule { }
