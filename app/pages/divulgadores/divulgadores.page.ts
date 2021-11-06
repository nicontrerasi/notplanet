import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedatosService, Datos } from 'src/app/services/servicedatos.service';
import { Platform, ToastController, IonList } from '@ionic/angular'

@Component({
  selector: 'app-divulgadores',
  templateUrl: './divulgadores.page.html',
  styleUrls: ['./divulgadores.page.scss'],
})
export class DivulgadoresPage implements OnInit {

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};

  @ViewChild('mylist')mylist :IonList;

  constructor(private storageService: ServicedatosService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      this.loadDatos();
    });
   }

  ngOnInit() {
  }

  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    })
  }

  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('Datos Agregados');
      this.loadDatos();
    })
  }

  updateDatos(dato: Datos){
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento Actualizado');
      this.mylist.closeSlidingItems();
      this.loadDatos();
    })
  }

  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento Eliminado');
      this.mylist.closeSlidingItems();
      this.loadDatos();
    })
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    toast.present();
  }

}
