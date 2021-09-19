import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtCarbonPage } from './art-carbon.page';

const routes: Routes = [
  {
    path: '',
    component: ArtCarbonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtCarbonPageRoutingModule {}
