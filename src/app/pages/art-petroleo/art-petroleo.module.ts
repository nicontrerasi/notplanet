import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtPetroleoPageRoutingModule } from './art-petroleo-routing.module';

import { ArtPetroleoPage } from './art-petroleo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtPetroleoPageRoutingModule
  ],
  declarations: [ArtPetroleoPage]
})
export class ArtPetroleoPageModule {}
