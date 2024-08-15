import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMpDocumentDataComponent } from './adm-mp-document-data.component';
import { AdmMpDocumentDataRoutingModule } from './adm-mp-document-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbCollapseModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdmMpDocumentDataComponent],
  imports: [
    CommonModule,
    AdmMpDocumentDataRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbCollapseModule,
    NgbPaginationModule,
    NgbTooltipModule
  ]
})
export class AdmMpDocumentDataModule { }
