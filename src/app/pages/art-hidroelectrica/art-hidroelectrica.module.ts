import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtHidroelectricaPageRoutingModule } from './art-hidroelectrica-routing.module';

import { ArtHidroelectricaPage } from './art-hidroelectrica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtHidroelectricaPageRoutingModule
  ],
  declarations: [ArtHidroelectricaPage]
})
export class ArtHidroelectricaPageModule {}
