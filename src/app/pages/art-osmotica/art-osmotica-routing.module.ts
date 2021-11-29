import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtOsmoticaPage } from './art-osmotica.page';

const routes: Routes = [
  {
    path: '',
    component: ArtOsmoticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtOsmoticaPageRoutingModule {}
