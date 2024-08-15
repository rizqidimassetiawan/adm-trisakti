import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementDataComponent } from './announcement-data.component';
import { AnnouncementDataRoutingModule } from './announcement-data-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AnnouncementDataComponent],
  imports: [
    CommonModule,
    AnnouncementDataRoutingModule,
    DataTablesModule,
    SharedModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    NgbDatepickerModule,
    AngularDualListBoxModule,
    TagInputModule,
    SelectModule
  ]
})
export class AnnouncementDataModule { }
