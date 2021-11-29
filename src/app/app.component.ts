import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente [] = [
    {
      icon: 'person-outline',
      name: 'Iniciar Sesión',
      redirecTo: 'ini-sesion'
    },
    {
      icon: 'person-add-outline',
      name: 'Registrarse',
      redirecTo: '/registro'
    },
    {
      icon: 'battery-charging-outline',
      name: 'Energías Renovables',
      redirecTo: '/ener-renov'
    },
    {
      icon: 'bonfire-outline',
      name: 'Energías No Renovables',
      redirecTo: '/ener-no-renov'
    },
    {
      icon: 'leaf-outline',
      name: 'Feriados en Chile',
      redirecTo: '/calid-aire'
    },
    {
      icon: 'help-circle-outline',
      name: 'Preguntas Frecuentes',
      redirecTo: '/preg-frec'
    },
    {
      icon: 'thermometer-outline',
      name: 'Viabilidad de Energías',
      redirecTo: '/'
    },
    {
      icon: 'heart-outline',
      name: 'Donar',
      redirecTo: '/divulgadores'
    },
    {
      icon: 'settings-outline',
      name: 'Configuración',
      redirecTo: '/configuracion'
    },
    {
      icon: 'person-circle-outline',
      name: 'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon: 'close-circle-outline',
      name: 'Cerrar Sesión',
      redirecTo: '/perfil'
    },
  ];

}
