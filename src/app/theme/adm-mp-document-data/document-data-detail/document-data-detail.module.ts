import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentDataDetailComponent } from './document-data-detail.component';
import { DocumentDataDetailRoutingModule } from './document-data-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbTooltipModule ,NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DocumentDataDetailComponent],
  imports: [
    CommonModule,
    DocumentDataDetailRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbTooltipModule,
    NgbPaginationModule
  ]
})
export class DocumentDataDetailModule { }
