import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtGeotermicaPageRoutingModule } from './art-geotermica-routing.module';

import { ArtGeotermicaPage } from './art-geotermica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtGeotermicaPageRoutingModule
  ],
  declarations: [ArtGeotermicaPage]
})
export class ArtGeotermicaPageModule {}
