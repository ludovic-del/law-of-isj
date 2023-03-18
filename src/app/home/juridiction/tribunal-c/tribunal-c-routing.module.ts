import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TribunalCPage } from './tribunal-c.page';

const routes: Routes = [
  {
    path: '',
    component: TribunalCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TribunalCPageRoutingModule {}
