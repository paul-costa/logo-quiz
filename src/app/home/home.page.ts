import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private homeService: HomeService,
  ) {}


  onClickStart() {
    this.homeService.showGamemodeModal();
  }

  onClickSettings() {

  }
}
