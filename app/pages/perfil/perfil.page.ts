import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public alertController: AlertController) { }

  async closeSesionAlert() {
    const alert = await this.alertController.create({
      header: 'Cerrando Sesión',
      message: 'Estas seguro de Cerrar sesión?',
      buttons: ['Si', 'No']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

    async deactivateAccountAlert() {
      const alert = await this.alertController.create({
        header: 'Desactivando Cuenta',
        message: 'Estas seguro de Desactivar tu cuenta?',
        buttons: ['Si', 'No']
      });
      
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
  }
  
  async userChange() {
    const alert = await this.alertController.create({
      header: 'Cambiando nombre de usuario',
      inputs: [
        {
          name: 'usuario',
          type: 'text',
          placeholder: 'Nuevo nombre de usuario'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Listo',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async phoneChange() {
    const alert = await this.alertController.create({
      header: 'Cambiando teléfono',
      inputs: [
        {
          name: 'phone',
          type: 'number',
          placeholder: 'Nuevo teléfono'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Listo',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async mailChange() {
    const alert = await this.alertController.create({
      header: 'Cambiando teléfono',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Nuevo correo electrónico'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Listo',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async pwdChange() {
    const alert = await this.alertController.create({
      header: 'Cambiando contraseña',
      inputs: [
        {
          name: 'present-password',
          type: 'password',
          placeholder: 'Ingrese contraseña'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Nuevo contraseña'
        },
        {
          name: 'confirm-password',
          type: 'password',
          placeholder: 'Confirme nueva contraseña'
        }

      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Listo',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
