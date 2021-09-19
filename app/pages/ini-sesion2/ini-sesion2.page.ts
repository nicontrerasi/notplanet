import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ini-sesion2',
  templateUrl: './ini-sesion2.page.html',
  styleUrls: ['./ini-sesion2.page.scss'],
})
export class IniSesion2Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  enter() {
    this.navCtrl.navigateRoot('inicio');
  }

  ngOnInit() {
  }
}
