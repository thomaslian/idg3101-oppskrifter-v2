import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DineOppskrifterPage } from './dine-oppskrifter.page';

const routes: Routes = [
  {
    path: '',
    component: DineOppskrifterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DineOppskrifterPageRoutingModule {}
