import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'cde-penal',
    loadChildren: () => import('./cde-penal/cde-penal.module').then( m => m.CdePenalPageModule)
  },
  {
    path: 'cde-procedure',
    loadChildren: () => import('./cde-procedure/cde-procedure.module').then( m => m.CdeProcedurePageModule)
  },
  {
    path: 'constitut',
    loadChildren: () => import('./constitut/constitut.module').then( m => m.ConstitutPageModule)
  },
  {
    path: 'juridiction',
    loadChildren: () => import('./juridiction/juridiction.module').then( m => m.JuridictionPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FAQPageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./apropos/apropos.module').then( m => m.AproposPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
