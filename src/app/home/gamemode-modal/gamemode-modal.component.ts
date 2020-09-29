import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamemode-modal',
  templateUrl: './gamemode-modal.component.html',
  styleUrls: ['./gamemode-modal.component.scss'],
})
export class GamemodeModalComponent implements OnInit {


  public selectionMade = false;
  public timerNumber = 5;

  public gameModes = [
    {
      id: 'single',
      header: 'single player mode',
      subtitle: 'play seven rounds against yourself',
    },
    {
      id: 'multi',
      header: 'two player mode',
      subtitle: 'play seven rounds against your opponent on one device',
    },
  ];


  constructor(
    private modalCtrl: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}


  onStartGame(gameMode: 'single' | 'multi') {
    this.selectionMade = true;

    setInterval(() => {
      this.timerNumber--;
    }, 1000);

    setTimeout(() => {
      if (gameMode === 'multi') {
        this.router.navigateByUrl('/game');
      } else {
        // this.router.navigateByUrl('/game-single');
      }

      this.modalCtrl.dismiss();
    }, 5000);

  }


  onCancel() {
    this.modalCtrl.dismiss();
  }

}
