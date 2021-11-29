import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalentamientoGlobalPageRoutingModule } from './calentamiento-global-routing.module';

import { CalentamientoGlobalPage } from './calentamiento-global.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalentamientoGlobalPageRoutingModule
  ],
  declarations: [CalentamientoGlobalPage]
})
export class CalentamientoGlobalPageModule {}
