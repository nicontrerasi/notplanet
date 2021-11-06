import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivulgadoresPageRoutingModule } from './divulgadores-routing.module';

import { DivulgadoresPage } from './divulgadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivulgadoresPageRoutingModule
  ],
  declarations: [DivulgadoresPage]
})
export class DivulgadoresPageModule {}
