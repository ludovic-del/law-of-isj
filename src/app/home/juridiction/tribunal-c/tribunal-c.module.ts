import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TribunalCPageRoutingModule } from './tribunal-c-routing.module';

import { TribunalCPage } from './tribunal-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TribunalCPageRoutingModule
  ],
  declarations: [TribunalCPage]
})
export class TribunalCPageModule {}
