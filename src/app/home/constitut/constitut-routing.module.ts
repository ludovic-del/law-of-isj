import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstitutPage } from './constitut.page';

const routes: Routes = [
  {
    path: '',
    component: ConstitutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstitutPageRoutingModule {}
