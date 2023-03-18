import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourSupPageRoutingModule } from './cour-sup-routing.module';

import { CourSupPage } from './cour-sup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourSupPageRoutingModule
  ],
  declarations: [CourSupPage]
})
export class CourSupPageModule {}
