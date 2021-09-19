import { Component, OnInit } from '@angular/core';
import { IonNav, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ini-sesion',
  templateUrl: './ini-sesion.page.html',
  styleUrls: ['./ini-sesion.page.scss'],
})
export class IniSesionPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  go_ini2() {
    this.navCtrl.navigateRoot('ini-sesion2');
  }

  go_registro() {
    this.navCtrl.navigateRoot('registro')
  }

  ngOnInit() {
  }
}
