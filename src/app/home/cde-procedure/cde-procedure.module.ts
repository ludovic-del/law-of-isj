import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdeProcedurePageRoutingModule } from './cde-procedure-routing.module';

import { CdeProcedurePage } from './cde-procedure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdeProcedurePageRoutingModule
  ],
  declarations: [CdeProcedurePage]
})
export class CdeProcedurePageModule {}
