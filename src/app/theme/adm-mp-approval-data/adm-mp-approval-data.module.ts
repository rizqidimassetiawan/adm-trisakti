import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMpApprovalDataComponent } from './adm-mp-approval-data.component';
import { AdmMpApprovalDataRoutingModule } from './adm-mp-approval-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [AdmMpApprovalDataComponent],
  imports: [
    CommonModule,
    AdmMpApprovalDataRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class AdmMpApprovalDataModule { }
