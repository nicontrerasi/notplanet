import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ener-renov',
  templateUrl: './ener-renov.page.html',
  styleUrls: ['./ener-renov.page.scss'],
})
export class EnerRenovPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  goEolica() {
    this.navCtrl.navigateRoot('art-eolica');
  }

  goGeotermica() {
    this.navCtrl.navigateRoot('art-geotermica');
  }

  goHidro() {
    this.navCtrl.navigateRoot('art-hidroelectrica');
  }

  goSolar() {
    this.navCtrl.navigateRoot('art-solar');
  }

  goBiodiesel() {
    this.navCtrl.navigateRoot('art-biodiesel');
  }

  goUndimotriz() {
    this.navCtrl.navigateRoot('art-undimotriz');
  }

  goOsmotica() {
    this.navCtrl.navigateRoot('art-osmotica');
  }

  ngOnInit() {
  }

}
