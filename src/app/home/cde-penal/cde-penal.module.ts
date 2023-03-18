import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdePenalPageRoutingModule } from './cde-penal-routing.module';

import { CdePenalPage } from './cde-penal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdePenalPageRoutingModule
  ],
  declarations: [CdePenalPage]
})
export class CdePenalPageModule {}
