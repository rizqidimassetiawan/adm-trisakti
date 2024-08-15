import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireDataStepComponent } from './questionnaire-data-step.component';
import { QuestionnaireDataStepRoutingModule } from './questionnaire-data-step-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { ArchwizardModule } from 'ng2-archwizard/dist';

@NgModule({
  declarations: [QuestionnaireDataStepComponent],
  imports: [
    CommonModule,
    QuestionnaireDataStepRoutingModule,
    SharedModule,
    DataTablesModule,
    ArchwizardModule
  ]
})
export class QuestionnaireDataStepModule { }
