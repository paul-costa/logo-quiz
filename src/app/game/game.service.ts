import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SolvedModalComponent } from './solved-modal/solved-modal.component';
import { GameData, LogoClass } from '../shared/data.model';
import { logoList } from 'src/assets/logos/logo-list';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private sevenLogos: LogoClass[];

  constructor(
    public modalController: ModalController
  ) { }



  public fetchLogos() {
    this.sevenLogos = logoList;

    for(const el of this.sevenLogos) {
      el.filename = '../../assets/logos/' + el.filename;
    }

    // shuffle array
    this.sevenLogos.sort(() => Math.random() - 0.5);
  }



  public fetchDataPerGame(noOfGame: number): LogoClass {
    return this.sevenLogos[noOfGame];
  }

  showSolvedModal(player: 1 | 2 | 0, solvedCorrect: boolean, gameData: GameData) {   // player 0 represents solved by timeout
    return this.modalController.create({
      component: SolvedModalComponent,
      componentProps: {
        'player': player,
        'solvedCorrect': solvedCorrect,
        'gameData': gameData,
      }
    }).then(modalEL => {
      modalEL.present();
      return modalEL.onDidDismiss();
    })
    .then(resultData => {
      return resultData;
    });
  }
}
