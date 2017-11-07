import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
// import { TrailDetailComponent } from './trail-detial/trail-detail.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
      path: '',
      component: ResultComponent
  }
//   {
//     path: 'trail-detail',
//     component: TrailDetailComponent
//   },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
