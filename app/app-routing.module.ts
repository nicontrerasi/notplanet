import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ini-sesion',
    loadChildren: () => import('./pages/ini-sesion/ini-sesion.module').then( m => m.IniSesionPageModule)
  },
  {
    path: 'ini-sesion2',
    loadChildren: () => import('./pages/ini-sesion2/ini-sesion2.module').then( m => m.IniSesion2PageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro2',
    loadChildren: () => import('./pages/registro2/registro2.module').then( m => m.Registro2PageModule)
  },
  {
    path: 'ener-renov',
    loadChildren: () => import('./pages/ener-renov/ener-renov.module').then( m => m.EnerRenovPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'ener-no-renov',
    loadChildren: () => import('./pages/ener-no-renov/ener-no-renov.module').then( m => m.EnerNoRenovPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'calid-aire',
    loadChildren: () => import('./pages/calid-aire/calid-aire.module').then( m => m.CalidAirePageModule), canActivate:[AuthGuard],
  },
  {
    path: 'preg-frec',
    loadChildren: () => import('./pages/preg-frec/preg-frec.module').then( m => m.PregFrecPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'viabilidad',
    loadChildren: () => import('./pages/viabilidad/viabilidad.module').then( m => m.ViabilidadPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-eolica',
    loadChildren: () => import('./pages/art-eolica/art-eolica.module').then( m => m.ArtEolicaPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-geotermica',
    loadChildren: () => import('./pages/art-geotermica/art-geotermica.module').then( m => m.ArtGeotermicaPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-hidroelectrica',
    loadChildren: () => import('./pages/art-hidroelectrica/art-hidroelectrica.module').then( m => m.ArtHidroelectricaPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-solar',
    loadChildren: () => import('./pages/art-solar/art-solar.module').then( m => m.ArtSolarPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-undimotriz',
    loadChildren: () => import('./pages/art-undimotriz/art-undimotriz.module').then( m => m.ArtUndimotrizPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-biodiesel',
    loadChildren: () => import('./pages/art-biodiesel/art-biodiesel.module').then( m => m.ArtBiodieselPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-osmotica',
    loadChildren: () => import('./pages/art-osmotica/art-osmotica.module').then( m => m.ArtOsmoticaPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-petroleo',
    loadChildren: () => import('./pages/art-petroleo/art-petroleo.module').then( m => m.ArtPetroleoPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-carbon',
    loadChildren: () => import('./pages/art-carbon/art-carbon.module').then( m => m.ArtCarbonPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-nuclear',
    loadChildren: () => import('./pages/art-nuclear/art-nuclear.module').then( m => m.ArtNuclearPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'art-gas-natural',
    loadChildren: () => import('./pages/art-gas-natural/art-gas-natural.module').then( m => m.ArtGasNaturalPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'calentamiento-global',
    loadChildren: () => import('./pages/calentamiento-global/calentamiento-global.module').then( m => m.CalentamientoGlobalPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule), canActivate:[AuthGuard],
  },
  {
    path: 'divulgadores',
    loadChildren: () => import('./pages/divulgadores/divulgadores.module').then( m => m.DivulgadoresPageModule), canActivate:[AuthGuard],
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
