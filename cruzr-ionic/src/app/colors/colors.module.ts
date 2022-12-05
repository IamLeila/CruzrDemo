import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import {IonicModule} from '@ionic/angular';

import {ColorsPageRoutingModule} from './colors-routing.module';

import {ColorsPage} from './colors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorsPageRoutingModule,
    ColorPickerModule
  ],
  declarations: [ColorsPage]
})
export class ColorsPageModule {
}
