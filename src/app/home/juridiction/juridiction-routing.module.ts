import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuridictionPage } from './juridiction.page';

const routes: Routes = [
  {
    path: '',
    component: JuridictionPage
  },
  {
    path: 'cour-sup',
    loadChildren: () => import('./cour-sup/cour-sup.module').then( m => m.CourSupPageModule)
  },
  {
    path: 'parquet-g',
    loadChildren: () => import('./parquet-g/parquet-g.module').then( m => m.ParquetGPageModule)
  },
  {
    path: 'tribunal-c',
    loadChildren: () => import('./tribunal-c/tribunal-c.module').then( m => m.TribunalCPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuridictionPageRoutingModule {}
