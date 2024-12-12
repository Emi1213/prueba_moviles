import { Component, inject, Input, OnInit } from '@angular/core'
import { FirebaseService } from 'src/app/services/firebase.service'
import { UtilsService } from 'src/app/services/utils.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
  @Input() isPage!: boolean
  @Input() title!: string
  @Input() backButton!: string
  @Input() isModal!: boolean
  @Input() showMenu!: boolean
  utilsSrvc = inject(UtilsService)
  firebaseSrvc = inject(FirebaseService)

  dismiss() {
    if (this.isModal) {
      this.utilsSrvc.dismissModal()
    }
  }

  signOut() {
    console.log('Signing out...')
    this.firebaseSrvc.signOut()
  }
}
