import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViabilidadPage } from './viabilidad.page';

const routes: Routes = [
  {
    path: '',
    component: ViabilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViabilidadPageRoutingModule {}
