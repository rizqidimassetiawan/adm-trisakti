import { PasswordStrengthModule } from './../signup/password-strength/password-strength.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParticlesModule } from 'angular-particle';
import { ResetPasswordComponent } from './reset-password.component';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { NgModule } from '@angular/core';
import { PasswordStrengthComponent } from './../signup/password-strength/password-strength.component';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule,
  ],
  // entryComponents: [ResetPasswordComponent, PasswordStrengthComponent],
  // exports: [PasswordStrengthComponent]
})
export class ResetPasswordModule { }
