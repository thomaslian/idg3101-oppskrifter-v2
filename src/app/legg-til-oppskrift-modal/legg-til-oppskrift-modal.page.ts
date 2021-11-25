import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Recipe } from '../dine-oppskrifter/dine-oppskrifter.page';

@Component({
  selector: 'app-legg-til-oppskrift-modal',
  templateUrl: './legg-til-oppskrift-modal.page.html',
  styleUrls: ['./legg-til-oppskrift-modal.page.scss'],
})
export class LeggTilOppskriftModalPage implements OnInit {

  name: string;
  description: string;
  minutes: number;
  url: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismissModal(addRecipe: boolean) {
    const recipe: Recipe = { name: this.name, cookingTime: this.minutes, description: this.description, imageUrl: this.url }
    this.modalController.dismiss({
      'dismissed': true,
      recipe,
      addRecipe
    });
  }
}
