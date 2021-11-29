import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtGasNaturalPageRoutingModule } from './art-gas-natural-routing.module';

import { ArtGasNaturalPage } from './art-gas-natural.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtGasNaturalPageRoutingModule
  ],
  declarations: [ArtGasNaturalPage]
})
export class ArtGasNaturalPageModule {}
