import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtBiodieselPage } from './art-biodiesel.page';

const routes: Routes = [
  {
    path: '',
    component: ArtBiodieselPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtBiodieselPageRoutingModule {}
