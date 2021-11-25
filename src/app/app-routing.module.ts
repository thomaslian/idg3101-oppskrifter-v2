import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dine-oppskrifter',
    pathMatch: 'full'
  },
  {
    path: 'dine-oppskrifter',
    loadChildren: () => import('./dine-oppskrifter/dine-oppskrifter.module').then( m => m.DineOppskrifterPageModule)
  },
  {
    path: 'legg-til-oppskrift-modal',
    loadChildren: () => import('./legg-til-oppskrift-modal/legg-til-oppskrift-modal.module').then( m => m.LeggTilOppskriftModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
