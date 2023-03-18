import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuridictionPageRoutingModule } from './juridiction-routing.module';

import { JuridictionPage } from './juridiction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuridictionPageRoutingModule
  ],
  declarations: [JuridictionPage]
})
export class JuridictionPageModule {}
