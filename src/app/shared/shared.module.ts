import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  declarations: [HeaderComponent, CustomInputComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent,CustomInputComponent, ReactiveFormsModule,FormsModule ],
})
export class SharedModule {}
