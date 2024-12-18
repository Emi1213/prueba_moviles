import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { TaskPageRoutingModule } from './task-routing.module'

import { TaskPage } from './task.page'
import { SharedModule } from '../../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPageRoutingModule,
    SharedModule,
  ],
  declarations: [TaskPage],
})
export class TaskPageModule {}
