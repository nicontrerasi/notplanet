import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivulgadoresPage } from './divulgadores.page';

const routes: Routes = [
  {
    path: '',
    component: DivulgadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivulgadoresPageRoutingModule {}
