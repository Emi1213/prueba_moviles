import { Component, inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { User } from 'src/app/models/user.interface'
import { FirebaseService } from 'src/app/services/firebase.service'
import { UtilsService } from 'src/app/services/utils.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: false,
})
export class MainPage implements OnInit {
  pages = [{ title: 'Inicio', url: '/main/home', icon: 'home-outline' }]

  router = inject(Router)
  firebaseSrvc = inject(FirebaseService)
  utilsSrvc = inject(UtilsService)

  currentPath: string = ''

  constructor() {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event?.url) {
        this.currentPath = event.url
      }
    })
  }

  user(): User {
    return this.utilsSrvc.getFromLocalStorage('user')
  }

  signOut() {
    this.firebaseSrvc.signOut()
  }
}
