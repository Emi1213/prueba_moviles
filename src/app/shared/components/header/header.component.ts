import { Component, inject, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent   {

  @Input() title!: string
  @Input() backButton!: string
  @Input() isModal!: boolean
  @Input() showMenu!: boolean;
  utilsSrvc = inject(UtilsService);


  dismiss(){
    if (this.isModal) {
      this.utilsSrvc.dismissModal();
   }
  }

}
