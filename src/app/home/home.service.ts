import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GamemodeModalComponent } from './gamemode-modal/gamemode-modal.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    public modalController: ModalController
  ) { }

  showGamemodeModal() {
    this.modalController.create({
      component: GamemodeModalComponent
    }).then(modalEl => {
      modalEl.present();
    })
  }
}
