import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./pages/ener-renov/ener-renov.module').then( m => m.EnerRenovPageModule)
  },
  {
    path: 'ener-no-renov',
    loadChildren: () => import('./pages/ener-no-renov/ener-no-renov.module').then( m => m.EnerNoRenovPageModule)
  },
  {
    path: 'calid-aire',
    loadChildren: () => import('./pages/calid-aire/calid-aire.module').then( m => m.CalidAirePageModule)
  },
  {
    path: 'preg-frec',
    loadChildren: () => import('./pages/preg-frec/preg-frec.module').then( m => m.PregFrecPageModule)
  },
  {
    path: 'viabilidad',
    loadChildren: () => import('./pages/viabilidad/viabilidad.module').then( m => m.ViabilidadPageModule)
  },
  {
    path: 'donaciones',
    loadChildren: () => import('./pages/donaciones/donaciones.module').then( m => m.DonacionesPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'art-eolica',
    loadChildren: () => import('./pages/art-eolica/art-eolica.module').then( m => m.ArtEolicaPageModule)
  },
  {
    path: 'art-geotermica',
    loadChildren: () => import('./pages/art-geotermica/art-geotermica.module').then( m => m.ArtGeotermicaPageModule)
  },
  {
    path: 'art-hidroelectrica',
    loadChildren: () => import('./pages/art-hidroelectrica/art-hidroelectrica.module').then( m => m.ArtHidroelectricaPageModule)
  },
  {
    path: 'art-solar',
    loadChildren: () => import('./pages/art-solar/art-solar.module').then( m => m.ArtSolarPageModule)
  },
  {
    path: 'art-undimotriz',
    loadChildren: () => import('./pages/art-undimotriz/art-undimotriz.module').then( m => m.ArtUndimotrizPageModule)
  },
  {
    path: 'art-biodiesel',
    loadChildren: () => import('./pages/art-biodiesel/art-biodiesel.module').then( m => m.ArtBiodieselPageModule)
  },
  {
    path: 'art-osmotica',
    loadChildren: () => import('./pages/art-osmotica/art-osmotica.module').then( m => m.ArtOsmoticaPageModule)
  },
  {
    path: 'art-petroleo',
    loadChildren: () => import('./pages/art-petroleo/art-petroleo.module').then( m => m.ArtPetroleoPageModule)
  },
  {
    path: 'art-carbon',
    loadChildren: () => import('./pages/art-carbon/art-carbon.module').then( m => m.ArtCarbonPageModule)
  },
  {
    path: 'art-nuclear',
    loadChildren: () => import('./pages/art-nuclear/art-nuclear.module').then( m => m.ArtNuclearPageModule)
  },
  {
    path: 'art-gas-natural',
    loadChildren: () => import('./pages/art-gas-natural/art-gas-natural.module').then( m => m.ArtGasNaturalPageModule)
  },
  {
    path: 'calentamiento-global',
    loadChildren: () => import('./pages/calentamiento-global/calentamiento-global.module').then( m => m.CalentamientoGlobalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
