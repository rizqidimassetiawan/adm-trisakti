import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMpParticipantDataComponent } from './adm-mp-participant-data.component';
import { AdmMpParticipantDataRoutingModule } from './adm-mp-participant-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdmMpParticipantDataComponent],
  imports: [
    CommonModule,
    AdmMpParticipantDataRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgbPaginationModule,
  ]
})
export class AdmMpParticipantDataModule { }
