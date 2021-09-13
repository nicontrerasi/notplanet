import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalidAirePageRoutingModule } from './calid-aire-routing.module';

import { CalidAirePage } from './calid-aire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalidAirePageRoutingModule
  ],
  declarations: [CalidAirePage]
})
export class CalidAirePageModule {}
