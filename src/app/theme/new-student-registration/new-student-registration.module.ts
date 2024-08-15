import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStudentRegistrationComponent } from './new-student-registration.component';
import { NewStudentRegistrationRoutingModule } from './new-student-registration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';

@NgModule({
  declarations: [NewStudentRegistrationComponent],
  imports: [
    CommonModule,
    NewStudentRegistrationRoutingModule,
    SharedModule,
    DataTablesModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    NgbDatepickerModule,
    AngularDualListBoxModule,
    TagInputModule,
    SelectModule
  ]
})
export class NewStudentRegistrationModule { }
