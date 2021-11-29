import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtNuclearPageRoutingModule } from './art-nuclear-routing.module';

import { ArtNuclearPage } from './art-nuclear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtNuclearPageRoutingModule
  ],
  declarations: [ArtNuclearPage]
})
export class ArtNuclearPageModule {}
