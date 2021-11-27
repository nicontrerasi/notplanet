import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ini-sesion2',
  templateUrl: './ini-sesion2.page.html',
  styleUrls: ['./ini-sesion2.page.scss'],
})
export class IniSesion2Page implements OnInit {

  constructor(public navCtrl: NavController, private authSvc: AuthService, private router: Router, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
  }

  async onLogin(email, password){
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        console.log(isVerified)
        this.presentToast("Bienvenido a NotPlanet "+user.email);
        if (isVerified === false) {
          this.VerifiedAlert()
        }
      }
    }
    catch(error){
      console.log('Error: ',error)
    }
  }

  private redirectUser(isVerified: boolean): void {
    if(isVerified){
      this.navCtrl.navigateRoot('inicio');
    } else {
      this.navCtrl.navigateRoot('ini-sesion2');
    }
  }

  async VerifiedAlert() {
    const alert = await this.alertController.create({
      header: 'Correo no verificado',
      message: 'Aún no verificas tu correo, antes de seguir debes hacerlo!',
      buttons: ['Ok']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async sayHiAlert(email) {
    const alert = await this.alertController.create({
      header: 'Que bueno verte de vuelta',
      message: 'Bienvenido ',
      buttons: ['Gracias']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentToast(message:string,position?:any, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2500,
        position: 'bottom'
      }
    );
    toast.present();
  }

}
