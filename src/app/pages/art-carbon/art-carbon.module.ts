import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtCarbonPageRoutingModule } from './art-carbon-routing.module';

import { ArtCarbonPage } from './art-carbon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtCarbonPageRoutingModule
  ],
  declarations: [ArtCarbonPage]
})
export class ArtCarbonPageModule {}
