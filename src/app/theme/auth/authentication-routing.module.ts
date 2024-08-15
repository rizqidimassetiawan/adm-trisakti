import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'signup',
        loadChildren: './signup/signup.module#SignupModule'
      },
      {
        path: 'reset-password/:id/:token',
        loadChildren: './reset-password/reset-password.module#ResetPasswordModule'
      },
      {
        path: 'activation-account',
        loadChildren: './activation-account/activation-account.module#ActivationAccountModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
