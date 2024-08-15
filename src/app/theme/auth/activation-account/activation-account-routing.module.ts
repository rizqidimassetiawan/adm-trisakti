import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationAccountComponent } from './activation-account.component';

const routes: Routes = [
  {
    path: '',
    component: ActivationAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivationAccountRoutingModule { }
