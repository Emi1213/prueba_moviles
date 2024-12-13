import { Component, OnInit } from '@angular/core'
import { Assignment } from 'src/mock/IInterface'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}
}
