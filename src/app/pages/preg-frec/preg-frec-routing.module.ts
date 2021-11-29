import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PregFrecPage } from './preg-frec.page';

const routes: Routes = [
  {
    path: '',
    component: PregFrecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PregFrecPageRoutingModule {}
