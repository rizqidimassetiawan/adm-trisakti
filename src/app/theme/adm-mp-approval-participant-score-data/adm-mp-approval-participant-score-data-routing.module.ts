import { NgModule } from '@angular/core';
import { AdmMpApprovalParticipantScoreDataComponent } from './adm-mp-approval-participant-score-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMpApprovalParticipantScoreDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMpApprovalParticipantScoreDataRoutingModule { }
