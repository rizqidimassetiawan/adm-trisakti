import { NgModule } from '@angular/core';
import { AdmMpParticipantScoreDataComponent } from './adm-mp-participant-score-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMpParticipantScoreDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMpParticipantScoreDataRoutingModule { }
