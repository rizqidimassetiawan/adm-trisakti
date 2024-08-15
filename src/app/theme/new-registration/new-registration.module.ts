import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRegistrationComponent } from './new-registration.component';
import { NewRegistrationRoutingModule } from './new-registration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbAccordionModule, NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NewRegistrationComponent],
  imports: [
    CommonModule,
    NewRegistrationRoutingModule,
    SharedModule,
    NgbCollapseModule,
    NgbAccordionModule,
    NgbTooltipModule
  ]
})
export class NewRegistrationModule { }
