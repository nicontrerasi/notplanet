import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtUndimotrizPageRoutingModule } from './art-undimotriz-routing.module';

import { ArtUndimotrizPage } from './art-undimotriz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtUndimotrizPageRoutingModule
  ],
  declarations: [ArtUndimotrizPage]
})
export class ArtUndimotrizPageModule {}
