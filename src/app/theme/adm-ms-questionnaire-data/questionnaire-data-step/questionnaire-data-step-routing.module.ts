import { NgModule } from '@angular/core';
import { QuestionnaireDataStepComponent } from './questionnaire-data-step.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireDataStepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireDataStepRoutingModule { }
