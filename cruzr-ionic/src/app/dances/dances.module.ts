import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DancesPageRoutingModule} from './dances-routing.module';

import {DancesPage} from './dances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DancesPageRoutingModule
  ],
  declarations: [DancesPage]
})
export class DancesPageModule {
}
