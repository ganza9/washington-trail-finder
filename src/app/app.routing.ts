import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
// import { TrailDetailComponent } from './trail-detial/trail-detail.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MapComponent
  },
//   {
//     path: 'trail-detail',
//     component: TrailDetailComponent
//   },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
