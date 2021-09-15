import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniSesion2Page } from './ini-sesion2.page';

const routes: Routes = [
  {
    path: '',
    component: IniSesion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniSesion2PageRoutingModule {}
