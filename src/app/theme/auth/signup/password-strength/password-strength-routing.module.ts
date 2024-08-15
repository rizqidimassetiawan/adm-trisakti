import { NgModule } from '@angular/core';
import { PasswordStrengthComponent } from './password-strength.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PasswordStrengthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordStrengthRoutingModule { }
