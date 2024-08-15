import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireDataParticipantComponent } from './questionnaire-data-participant.component';
import { QuestionnaireDataParticipantRoutingModule } from './questionnaire-data-participant-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { ArchwizardModule } from 'ng2-archwizard/dist';

@NgModule({
  declarations: [QuestionnaireDataParticipantComponent],
  imports: [
    CommonModule,
    QuestionnaireDataParticipantRoutingModule,
    SharedModule,
    DataTablesModule,
    ArchwizardModule
  ]
})
export class QuestionnaireDataParticipantModule { }
