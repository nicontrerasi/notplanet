import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnerNoRenovPage } from './ener-no-renov.page';

const routes: Routes = [
  {
    path: '',
    component: EnerNoRenovPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnerNoRenovPageRoutingModule {}
