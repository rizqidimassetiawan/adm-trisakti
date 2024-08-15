import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantDataDetailComponent } from './participant-data-detail.component';
import { ParticipantDataDetailRoutingModule } from './participant-data-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbTooltipModule ,NgbDatepickerModule, NgbPaginationModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ParticipantDataDetailComponent],
  imports: [
    CommonModule,
    ParticipantDataDetailRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgbTabsetModule
  ]
})
export class ParticipantDataDetailModule { }
