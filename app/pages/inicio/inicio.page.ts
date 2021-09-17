import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

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
      name: 'Iniciar Sesión',
      redirecTo: '/configuracion'
    },
    {
      icon: 'magnet-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'bug-outline',
      name: 'task',
      redirecTo: '/task'
    },
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    
    this.menuController.open('first');

  }

}
