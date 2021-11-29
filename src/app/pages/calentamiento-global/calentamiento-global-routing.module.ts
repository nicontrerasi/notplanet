import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalentamientoGlobalPage } from './calentamiento-global.page';

const routes: Routes = [
  {
    path: '',
    component: CalentamientoGlobalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalentamientoGlobalPageRoutingModule {}
