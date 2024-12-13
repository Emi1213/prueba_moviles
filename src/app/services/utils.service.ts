import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
  AlertController,
  AlertOptions,
  LoadingController,
  LoadingOptions,
  ModalController,
  ModalOptions,
  ToastController,
  ToastOptions,
} from '@ionic/angular'

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  alertCtrl = inject(AlertController)
  toastCtrl = inject(ToastController)
  loadingCtrl = inject(LoadingController)
  modalCtrl = inject(ModalController)
  router = inject(Router)

  async presentAlert(opts: AlertOptions) {
    const alert = await this.alertCtrl.create(opts)
    await alert.present()
    return alert
  }

  presentLoading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }

  async presentToast(opts: ToastOptions) {
    const toast = await this.toastCtrl.create(opts)
    return toast.present()
  }

  routerLink(url: string) {
    this.router.navigateByUrl(url)
  }

  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key)!)
  }

  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts)
    await modal.present()

    const { data } = await modal.onWillDismiss()

    if (data) {
      return data
    }
  }

  dismissModal(data?: any) {
    this.modalCtrl.dismiss(data)
  }

  async takePicture(promptLabelHeader: string) {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader: promptLabelHeader,
      promptLabelPhoto: 'Selecciona una imagen',
      promptLabelPicture: 'Tomar una foto',
    })
  }
}
