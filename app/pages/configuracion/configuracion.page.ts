import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  goPerfil() {
    this.navCtrl.navigateRoot('perfil');
  }

  ngOnInit() {
  }

}
