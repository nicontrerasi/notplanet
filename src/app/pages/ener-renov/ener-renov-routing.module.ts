import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnerRenovPage } from './ener-renov.page';

const routes: Routes = [
  {
    path: '',
    component: EnerRenovPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnerRenovPageRoutingModule {}
