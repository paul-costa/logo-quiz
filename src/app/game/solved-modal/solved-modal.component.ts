import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameData } from 'src/app/shared/data.model';

@Component({
  selector: 'app-solved-modal',
  templateUrl: './solved-modal.component.html',
  styleUrls: ['./solved-modal.component.scss'],
})
export class SolvedModalComponent implements OnInit {

  // Data passed in by componentProps
  @Input() player: 1 | 2 | 0;
  @Input() solvedCorrect: boolean;
  @Input() gameData: GameData;

  constructor(
    private modalCtrl: ModalController,

  ) { }

  ngOnInit() {
    // console.log(this.player);
    // console.log(this.solvedCorrect)
  }

  onNextLogo() {
    this.gameData.noOfGame++;
    this.modalCtrl.dismiss(this.gameData);
  }

}
