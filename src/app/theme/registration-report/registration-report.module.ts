import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationReportComponent } from './registration-report.component';
import { RegistrationReportRoutingModule } from './registration-report-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ RegistrationReportComponent],
  imports: [
    CommonModule,
    RegistrationReportRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbTooltipModule
  ]
})
export class  RegistrationReportModule { }
