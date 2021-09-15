import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PregFrecPageRoutingModule } from './preg-frec-routing.module';

import { PregFrecPage } from './preg-frec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PregFrecPageRoutingModule
  ],
  declarations: [PregFrecPage]
})
export class PregFrecPageModule {}
