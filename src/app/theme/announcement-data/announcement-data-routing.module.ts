import { NgModule } from '@angular/core';
import { AnnouncementDataComponent } from './announcement-data.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementDataRoutingModule { }
