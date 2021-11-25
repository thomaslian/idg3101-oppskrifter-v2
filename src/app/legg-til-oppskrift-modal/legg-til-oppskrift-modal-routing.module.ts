import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeggTilOppskriftModalPage } from './legg-til-oppskrift-modal.page';

const routes: Routes = [
  {
    path: '',
    component: LeggTilOppskriftModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeggTilOppskriftModalPageRoutingModule {}
