import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DineOppskrifterPageRoutingModule } from './dine-oppskrifter-routing.module';

import { DineOppskrifterPage } from './dine-oppskrifter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DineOppskrifterPageRoutingModule
  ],
  declarations: [DineOppskrifterPage]
})
export class DineOppskrifterPageModule {}
