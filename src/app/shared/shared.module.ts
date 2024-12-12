import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { IonicModule } from '@ionic/angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CustomInputComponent } from './components/custom-input/custom-input.component'
import { LogoComponent } from './components/logo/logo.component'
import { TasksComponent } from './components/tasks/tasks.component'

@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    TasksComponent,
  ],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    ReactiveFormsModule,
    FormsModule,
    LogoComponent,
    TasksComponent,
  ],
})
export class SharedModule {}
