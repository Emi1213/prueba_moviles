import { Component, inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { User } from 'src/app/models/user.interface'
import { FirebaseService } from 'src/app/services/firebase.service'
import { UsersService } from 'src/app/services/users.service'
import { UtilsService } from 'src/app/services/utils.service'
import { IUser as IUser } from 'src/mock/IInterface'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  protected isModal: boolean = false
  group = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  firebaseSrvc = inject(FirebaseService)
  userSrv = inject(UsersService)
  utilsSrvc = inject(UtilsService)

  submit() {
    if (this.group.valid) {
      this.firebaseSrvc
        .signIn(this.group.value as User)
        .then((res) => {
          this.utilsSrvc.presentToast({
            message: ` Bienvenido ${res.user.email}`,
            color: 'success',
            position: 'top',
            duration: 2000,
            icon: 'checkmark-circle-outline',
          })

          if (!res.user.email) {
            return
          }

          this.userSrv.getUserByEmail(res.user.email).then((user) => {
            this.getUserInfo(res.user.uid, user)
          })
        })
        .catch((err) => {
          this.utilsSrvc.presentToast({
            message: err.message,
            color: 'danger',
            position: 'top',
            duration: 2000,
            icon: 'alert-circle-outline',
          })
        })
    }
  }

  async getUserInfo(uid: string, user: IUser) {
    if (this.group.valid) {
      const loading = await this.utilsSrvc.presentLoading()
      loading.present()
      let path = `users/${uid}`
      console.log(path)
      this.firebaseSrvc
        .getDocumet(path)
        .then((res) => {
          this.utilsSrvc.saveInLocalStorage('user', user)
          this.utilsSrvc.routerLink('/main/home')
        })
        .catch((err) => {})
        .finally(() => {
          loading.dismiss()
        })
    }
  }
}
