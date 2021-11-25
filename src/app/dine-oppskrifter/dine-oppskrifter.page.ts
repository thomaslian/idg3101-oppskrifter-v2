import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LeggTilOppskriftModalPage } from '../legg-til-oppskrift-modal/legg-til-oppskrift-modal.page';

export interface Recipe {
  name: string,
  cookingTime: number,
  description: string,
  imageUrl: string
}

@Component({
  selector: 'app-dine-oppskrifter',
  templateUrl: './dine-oppskrifter.page.html',
  styleUrls: ['./dine-oppskrifter.page.scss'],
})

export class DineOppskrifterPage implements OnInit {

  recipes: Recipe[] = [
    { name: "Kjøttboller", cookingTime: 30, description: "Slik lager du kjøttboller...", imageUrl: "https://images.matprat.no/2zn5t475t5-jumbotron/large" },
    { name: "Quesadillas", cookingTime: 10, description: "", imageUrl: "https://images.matprat.no/qd7cnhuqcn-jumbotron/large" },
    { name: "Laks", cookingTime: 90, description: "", imageUrl: "https://images.matprat.no/gsmcfpyzt3-jumbotron/large" },
    { name: "Pizza", cookingTime: 60, description: "", imageUrl: "https://images.matprat.no/ln3ht4kfvr-jumbotron/large" },
    { name: "Cupcakes", cookingTime: 50, description: "", imageUrl: "https://images.matprat.no/75sey4fee3-jumbotron/large" }
  ]

  constructor(
    private modalController: ModalController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: LeggTilOppskriftModalPage
    });

    modal.onWillDismiss().then(({ data }: any) => {
      console.log(data);
      if (data.addRecipe && data.recipe.name) {
        this.recipes.push(data.recipe);
        this.presentToast(`${data.recipe.name} ble lagt til i dine oppskrifter!`);
      } else {
        this.presentToast("Ingen oppskrift ble lagt til... Husk å legge til navn når du lager en oppskrift!");
      }
    });

    return await modal.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }

}

