import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { MainPage } from './main.page'

const routes: Routes = [
  {
    path: '',
    component: MainPage,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'semesters',
    loadChildren: () =>
      import('./semesters/semesters.module').then((m) => m.SemestersModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
