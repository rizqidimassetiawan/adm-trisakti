import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMsExamDetailDataComponent } from './adm-ms-exam-detail-data.component';
import { AdmMsExamDetailDataRoutingModule } from './adm-ms-exam-detail-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdmMsExamDetailDataComponent],
  imports: [
    CommonModule,
    AdmMsExamDetailDataRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbTooltipModule
  ]
})
export class AdmMsExamDetailDataModule { }
