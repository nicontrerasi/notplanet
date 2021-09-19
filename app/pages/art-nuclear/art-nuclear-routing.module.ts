import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtNuclearPage } from './art-nuclear.page';

const routes: Routes = [
  {
    path: '',
    component: ArtNuclearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtNuclearPageRoutingModule {}
