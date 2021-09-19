import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.page.html',
  styleUrls: ['./registro2.page.scss'],
})
export class Registro2Page implements OnInit {


  constructor(public navCtrl: NavController) { }

  register() {
    this.navCtrl.navigateRoot('inicio');
  }

  ngOnInit() {
  }


}
