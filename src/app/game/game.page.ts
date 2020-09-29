import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { GameData, LogoClass } from '../shared/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  public timer;
  public dataPerGame: LogoClass;

  public solved = false;          // if logo is solved at all
  public solvedCorrect: boolean;  // if logo is solved corretly

  public gameData: GameData;

  constructor(
    private gameService: GameService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadData(true);
    this.startTimer();
  }

  loadData(initial: boolean) {
    if(initial) {
      this.gameData = {
        noOfGame: 0,
        playerOneScore: 0,
        playerTwoScore: 0,
      };
      this.gameService.fetchLogos();
    } else {

    }

    this.dataPerGame = this.gameService.fetchDataPerGame(this.gameData.noOfGame);
  }


  startTimer() {
    this.timer = setTimeout(() => {
      this.logoSolved(0, false);
    }, 10000);
  }



  onClickItem(player: 1 | 2, selection: string) {
    if (selection === this.dataPerGame.solution) {
      this.logoSolved(player, true);
    } else {
      this.logoSolved(player, false);
    }
  }


  logoSolved(player: 1 | 2 | 0, correct: boolean) {
    clearTimeout(this.timer);
    this.solved = true;
    this.solvedCorrect = correct;

    this.presentModal(player, correct).then(resultData => {
      this.gameData = resultData.data;
      this.continueGame();
    });
  }

  presentModal(player: 1 | 2 | 0, solvedCorrect: boolean) {
    return this.gameService.showSolvedModal(player, solvedCorrect, this.gameData);
  }


  public continueGame() {
    if (this.gameData.noOfGame===7) {
      clearTimeout(this.timer);
      this.router.navigateByUrl('/home');
    } else {
      this.loadData(false);
      this.startTimer();

      this.solved = false;
      this.solvedCorrect = undefined;
    }
  }
}
