import { NgModule } from '@angular/core';
import { PostgraduateParticipantComponent } from './postgraduate-participant.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PostgraduateParticipantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostgraduateParticipantRoutingModule { }
