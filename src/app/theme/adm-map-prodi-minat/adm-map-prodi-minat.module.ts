import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMapProdiMinatRoutingModule } from './adm-map-prodi-minat-routing.module';
import { AdmMapProdiMinatComponent } from './adm-map-prodi-minat.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';



@NgModule({
  declarations: [AdmMapProdiMinatComponent],
  imports: [
    CommonModule,
    AdmMapProdiMinatRoutingModule,
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
export class AdmMapProdiMinatModule { }
