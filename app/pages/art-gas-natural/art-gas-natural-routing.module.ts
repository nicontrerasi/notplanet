import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtGasNaturalPage } from './art-gas-natural.page';

const routes: Routes = [
  {
    path: '',
    component: ArtGasNaturalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtGasNaturalPageRoutingModule {}
