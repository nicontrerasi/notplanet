import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnerRenovPageRoutingModule } from './ener-renov-routing.module';

import { EnerRenovPage } from './ener-renov.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnerRenovPageRoutingModule
  ],
  declarations: [EnerRenovPage]
})
export class EnerRenovPageModule {}
