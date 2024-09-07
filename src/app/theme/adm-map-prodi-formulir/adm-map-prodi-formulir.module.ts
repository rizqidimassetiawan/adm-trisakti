
import { AdmMapProdiFormulirRoutingModule } from './adm-map-prodi-formulir-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmMapProdiFormulirComponent } from './adm-map-prodi-formulir.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';
import { RupiahFormatDirective } from 'src/app/directive/rupiah-format.directive';


@NgModule({
  declarations: [
    AdmMapProdiFormulirComponent,
    RupiahFormatDirective
  ],
 imports: [
    CommonModule,
    AdmMapProdiFormulirRoutingModule,
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
export class AdmMapProdiFormulirModule { }
