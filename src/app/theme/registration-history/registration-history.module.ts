import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationHistoryComponent } from './registration-history.component';
import { RegistrationHistoryRoutingModule } from './registration-history-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'ng2-archwizard/dist';

@NgModule({
  declarations: [ RegistrationHistoryComponent],
  imports: [
    CommonModule,
    RegistrationHistoryRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbTooltipModule,
    ArchwizardModule,
    NgbPaginationModule
  ]
})
export class  RegistrationHistoryModule { }
