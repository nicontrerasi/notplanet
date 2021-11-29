import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtUndimotrizPage } from './art-undimotriz.page';

const routes: Routes = [
  {
    path: '',
    component: ArtUndimotrizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtUndimotrizPageRoutingModule {}
