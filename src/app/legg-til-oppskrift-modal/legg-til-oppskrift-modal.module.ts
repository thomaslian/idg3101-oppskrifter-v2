import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeggTilOppskriftModalPageRoutingModule } from './legg-til-oppskrift-modal-routing.module';

import { LeggTilOppskriftModalPage } from './legg-til-oppskrift-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeggTilOppskriftModalPageRoutingModule
  ],
  declarations: [LeggTilOppskriftModalPage]
})
export class LeggTilOppskriftModalPageModule {}
