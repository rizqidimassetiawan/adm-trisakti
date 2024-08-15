import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile.component';
import { StudentProfileRoutingModule } from './student-profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbPopoverModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';
import {TextMaskModule} from 'angular2-text-mask';

@NgModule({
  declarations: [StudentProfileComponent],
  imports: [
    CommonModule,
    StudentProfileRoutingModule,
    SharedModule,
    ArchwizardModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbDatepickerModule,
    AngularDualListBoxModule,
    TagInputModule,
    SelectModule,
    TextMaskModule
  ]
})

export class StudentProfileModule { }
