import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtOsmoticaPageRoutingModule } from './art-osmotica-routing.module';

import { ArtOsmoticaPage } from './art-osmotica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtOsmoticaPageRoutingModule
  ],
  declarations: [ArtOsmoticaPage]
})
export class ArtOsmoticaPageModule {}
