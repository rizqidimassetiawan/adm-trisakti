import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStudentRegistrationDetailComponent } from './new-student-registration-detail.component';
import { NewStudentRegistrationDetailRoutingModule } from './new-student-registration-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [NewStudentRegistrationDetailComponent],
  imports: [
    CommonModule,
    NewStudentRegistrationDetailRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    NgbDatepickerModule,
    AngularDualListBoxModule,
    TagInputModule,
    SelectModule,
    ArchwizardModule,
    NgbPaginationModule,
    TextMaskModule
  ]
})
export class NewStudentRegistrationDetailModule { }
