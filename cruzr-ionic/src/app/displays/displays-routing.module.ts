import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DisplaysPage} from './displays.page';

const routes: Routes = [
  {
    path: '',
    component: DisplaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplaysPageRoutingModule {
}
