import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtBiodieselPageRoutingModule } from './art-biodiesel-routing.module';

import { ArtBiodieselPage } from './art-biodiesel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtBiodieselPageRoutingModule
  ],
  declarations: [ArtBiodieselPage]
})
export class ArtBiodieselPageModule {}
