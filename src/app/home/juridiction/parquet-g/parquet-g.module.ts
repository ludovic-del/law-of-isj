import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParquetGPageRoutingModule } from './parquet-g-routing.module';

import { ParquetGPage } from './parquet-g.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParquetGPageRoutingModule
  ],
  declarations: [ParquetGPage]
})
export class ParquetGPageModule {}
