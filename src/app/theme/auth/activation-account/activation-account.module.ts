import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivationAccountRoutingModule } from './activation-account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivationAccountComponent } from './activation-account.component';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ActivationAccountComponent],
  imports: [
    CommonModule,
    ActivationAccountRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ActivationAccountModule { }
