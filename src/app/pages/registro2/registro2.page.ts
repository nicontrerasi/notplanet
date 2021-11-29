import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.page.html',
  styleUrls: ['./registro2.page.scss'],
})
export class Registro2Page implements OnInit {

  usuario = {
    nombre: '',
    profesion: '',
    empresa: '',
    email: '',
    password: '',
  }

  constructor(public navCtrl: NavController, private authSvc: AuthService) { }

  onSubmit() {
    console.log('submit');
    console.log(this.usuario);
    this.navCtrl.navigateRoot('ini-sesion2');
  }

  ngOnInit() {
  }

  async onRegister(email, password) {
    try{
      const user = await this.authSvc.register(email.value, password.value);
      if (user){
        console.log('User: ', user)
      }
    }
    catch(error) {
      console.log('Error: ',error)
    }
  }

}
