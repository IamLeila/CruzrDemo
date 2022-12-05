import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DancesPage} from './dances.page';

const routes: Routes = [
  {
    path: '',
    component: DancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DancesPageRoutingModule {
}
