import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtHidroelectricaPage } from './art-hidroelectrica.page';

const routes: Routes = [
  {
    path: '',
    component: ArtHidroelectricaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtHidroelectricaPageRoutingModule {}
