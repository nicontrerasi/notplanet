import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnerNoRenovPageRoutingModule } from './ener-no-renov-routing.module';

import { EnerNoRenovPage } from './ener-no-renov.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnerNoRenovPageRoutingModule
  ],
  declarations: [EnerNoRenovPage]
})
export class EnerNoRenovPageModule {}
