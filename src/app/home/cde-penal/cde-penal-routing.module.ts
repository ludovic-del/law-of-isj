import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdePenalPage } from './cde-penal.page';

const routes: Routes = [
  {
    path: '',
    component: CdePenalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdePenalPageRoutingModule {}
