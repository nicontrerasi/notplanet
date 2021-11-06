import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente [] = [
    {
      icon: '',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
  ];

  constructor(private menuController: MenuController, public navCtrl: NavController) { }

  ngOnInit() {
    document.getElementById('nombre')
  }

  mostrarMenu(){
    
    this.menuController.open('first');

  }

  goNuclear() {
    this.navCtrl.navigateRoot('art-nuclear')
  }

  goPetroleo() {
    this.navCtrl.navigateRoot('art-petroleo')
  }

  goEolica() {
    this.navCtrl.navigateRoot('art-eolica')
  }

  goCalentamiento() {
    this.navCtrl.navigateRoot('calentamiento-global')
  }

  goHidro() {
    this.navCtrl.navigateRoot('art-hidroelectrica')
  }

  goBiodiesel() {
    this.navCtrl.navigateRoot('art-biodiesel')
  }

}
