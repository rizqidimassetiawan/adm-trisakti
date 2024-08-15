import { NgModule } from '@angular/core';
import { RecommendationComponent } from './recommendation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RecommendationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationRoutingModule { }
