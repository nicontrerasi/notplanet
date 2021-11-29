import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtEolicaPage } from './art-eolica.page';

const routes: Routes = [
  {
    path: '',
    component: ArtEolicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtEolicaPageRoutingModule {}
