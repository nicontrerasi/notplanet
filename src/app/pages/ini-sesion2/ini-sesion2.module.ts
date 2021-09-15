import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniSesion2PageRoutingModule } from './ini-sesion2-routing.module';

import { IniSesion2Page } from './ini-sesion2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniSesion2PageRoutingModule
  ],
  declarations: [IniSesion2Page]
})
export class IniSesion2PageModule {}
