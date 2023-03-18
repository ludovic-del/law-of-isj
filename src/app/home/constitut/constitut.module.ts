import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstitutPageRoutingModule } from './constitut-routing.module';

import { ConstitutPage } from './constitut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstitutPageRoutingModule
  ],
  declarations: [ConstitutPage]
})
export class ConstitutPageModule {}
