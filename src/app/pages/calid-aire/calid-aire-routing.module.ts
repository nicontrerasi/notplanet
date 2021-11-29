import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalidAirePage } from './calid-aire.page';

const routes: Routes = [
  {
    path: '',
    component: CalidAirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalidAirePageRoutingModule {}
