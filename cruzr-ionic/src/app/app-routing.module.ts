import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'movejoint',
    loadChildren: () => import('./movejoint/movejoint.module').then(m => m.MovejointPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'colors',
    loadChildren: () => import('./colors/colors.module').then(m => m.ColorsPageModule)
  },
  {
    path: 'displays',
    loadChildren: () => import('./displays/displays.module').then(m => m.DisplaysPageModule)
  },
  {
    path: 'dances',
    loadChildren: () => import('./dances/dances.module').then(m => m.DancesPageModule)
  },
  {
    path: 'actions',
    loadChildren: () => import('./actions/actions.module').then(m => m.ActionsPageModule)
  },
  {
    path: 'speech',
    loadChildren: () => import('./speech/speech.module').then(m => m.SpeechPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
