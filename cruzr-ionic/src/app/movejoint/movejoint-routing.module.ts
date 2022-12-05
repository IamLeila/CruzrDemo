import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MovejointPage} from './movejoint.page';

const routes: Routes = [
  {
    path: '',
    component: MovejointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovejointPageRoutingModule {
}
