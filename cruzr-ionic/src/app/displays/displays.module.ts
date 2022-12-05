import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DisplaysPageRoutingModule} from './displays-routing.module';

import {DisplaysPage} from './displays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplaysPageRoutingModule
  ],
  declarations: [DisplaysPage]
})
export class DisplaysPageModule {
}
