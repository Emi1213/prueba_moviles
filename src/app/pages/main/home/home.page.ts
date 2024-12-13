import { Component, OnInit } from '@angular/core'
import { Assignment } from 'src/mock/IInterface'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  task: Assignment = {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    dueDate: new Date(),
    grade: 100,
    status: 'done',
    resources: [],
  }

  ngOnInit() {}
}
