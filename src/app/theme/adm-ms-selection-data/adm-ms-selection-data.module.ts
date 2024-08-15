import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMsSelectionDataComponent } from './adm-ms-selection-data.component';
import { AdmMsSelectionDataRoutingModule } from './adm-ms-selection-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [AdmMsSelectionDataComponent],
  imports: [
    CommonModule,
    AdmMsSelectionDataRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class AdmMsSelectionDataModule { }
