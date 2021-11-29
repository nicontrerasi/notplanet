import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViabilidadPageRoutingModule } from './viabilidad-routing.module';

import { ViabilidadPage } from './viabilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViabilidadPageRoutingModule
  ],
  declarations: [ViabilidadPage]
})
export class ViabilidadPageModule {}
