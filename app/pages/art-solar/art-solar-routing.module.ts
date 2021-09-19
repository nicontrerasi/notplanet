import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtSolarPage } from './art-solar.page';

const routes: Routes = [
  {
    path: '',
    component: ArtSolarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtSolarPageRoutingModule {}
