import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdeProcedurePage } from './cde-procedure.page';

const routes: Routes = [
  {
    path: '',
    component: CdeProcedurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdeProcedurePageRoutingModule {}
