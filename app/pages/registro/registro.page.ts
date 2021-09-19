import { Component, OnInit } from '@angular/core';
import { IonNav, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  go_reg2() {
    this.navCtrl.navigateRoot('registro2')
  }

  go_iniSesion() {
    this.navCtrl.navigateRoot('ini-sesion')
  }

  ngOnInit() {
  }

}
