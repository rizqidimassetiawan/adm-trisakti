import { PasswordStrengthModule } from './password-strength/password-strength.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParticlesModule } from 'angular-particle';
import { SignupComponent } from './signup.component';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { NgModule } from '@angular/core';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@NgModule({
  declarations: [SignupComponent,PasswordStrengthComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule,
    ToastyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule,
    PasswordStrengthModule
  ],
  entryComponents: [PasswordStrengthComponent],
  exports: [PasswordStrengthComponent]
})
export class SignupModule { }
