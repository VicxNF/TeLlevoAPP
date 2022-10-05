import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle='home';
  isNotHome = false;

  constructor(private menu: MenuController) { this.menu.enable(true) }

  ionViewDidEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

}
