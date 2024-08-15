import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalDataDetailComponent } from './approval-data-detail.component';
import { ApprovalDataDetailRoutingModule } from './approval-data-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ApprovalDataDetailComponent],
  imports: [
    CommonModule,
    ApprovalDataDetailRoutingModule,
    SharedModule,
    DataTablesModule,
    CurrencyMaskModule,
    NgbPaginationModule
  ]
})
export class ApprovalDataDetailModule { }
