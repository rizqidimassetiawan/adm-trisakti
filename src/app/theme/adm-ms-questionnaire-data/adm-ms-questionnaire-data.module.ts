import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMsQuestionnaireDataComponent } from './adm-ms-questionnaire-data.component';
import { AdmMsQuestionnaireDataRoutingModule } from './adm-ms-questionnaire-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdmMsQuestionnaireDataComponent],
  imports: [
    CommonModule,
    AdmMsQuestionnaireDataRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbTooltipModule
  ]
})
export class AdmMsQuestionnaireDataModule { }
