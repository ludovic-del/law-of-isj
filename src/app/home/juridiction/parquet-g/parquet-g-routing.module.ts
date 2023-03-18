import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParquetGPage } from './parquet-g.page';

const routes: Routes = [
  {
    path: '',
    component: ParquetGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquetGPageRoutingModule {}
