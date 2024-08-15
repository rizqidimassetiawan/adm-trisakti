import { NgModule } from '@angular/core';
import { AdmMsQuestionnaireDataComponent } from './adm-ms-questionnaire-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdmMsQuestionnaireDataComponent
  },
  {
    path: 'questionnaire-data-step/:id',
    loadChildren: './questionnaire-data-step/questionnaire-data-step.module#QuestionnaireDataStepModule',
    data: { animation: '1' }
  },
  {
    path: 'questionnaire-data-step',
    loadChildren: './questionnaire-data-step/questionnaire-data-step.module#QuestionnaireDataStepModule',
    data: { animation: '1' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmMsQuestionnaireDataRoutingModule { }
