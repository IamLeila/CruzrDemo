import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MovejointPageRoutingModule} from './movejoint-routing.module';

import {MovejointPage} from './movejoint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovejointPageRoutingModule
  ],
  declarations: [MovejointPage]
})
export class MovejointPageModule {
}
