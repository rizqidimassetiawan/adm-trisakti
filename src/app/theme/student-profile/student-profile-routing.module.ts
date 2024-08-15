import { NgModule } from '@angular/core';
import { StudentProfileComponent } from './student-profile.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StudentProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentProfileRoutingModule { }
