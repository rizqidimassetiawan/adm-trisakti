import { NgModule } from '@angular/core';
import { QuestionnaireDataParticipantComponent } from './questionnaire-data-participant.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireDataParticipantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireDataParticipantRoutingModule { }
