import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ener-no-renov',
  templateUrl: './ener-no-renov.page.html',
  styleUrls: ['./ener-no-renov.page.scss'],
})
export class EnerNoRenovPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  goPetroleo() {
    this.navCtrl.navigateRoot('art-petroleo');
  }

  goCarbon() {
    this.navCtrl.navigateRoot('art-carbon');
  }

  goNuclear() {
    this.navCtrl.navigateRoot('art-nuclear');
  }

  goGasNatural() {
    this.navCtrl.navigateRoot('art-gas-natural');
  }

  ngOnInit() {
  }

}
