import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { SemestersRoutingModule } from './semesters-routing.module'
import { SemestersPage } from './semesters.page'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  imports: [CommonModule, IonicModule, SemestersRoutingModule, SharedModule],
  declarations: [SemestersPage],
})
export class SemestersModule {}
