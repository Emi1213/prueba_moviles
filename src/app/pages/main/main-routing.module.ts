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
      import('./semesters/semesters.module').then((m) => m.SemestersModule),
  },
  {
    path: 'task/:taskId',
    loadChildren: () =>
      import('./task/task.module').then((m) => m.TaskPageModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
