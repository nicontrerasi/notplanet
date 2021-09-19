import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtPetroleoPage } from './art-petroleo.page';

const routes: Routes = [
  {
    path: '',
    component: ArtPetroleoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtPetroleoPageRoutingModule {}
