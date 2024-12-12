import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from 'src/mock/IInterface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent  implements OnInit {
  @Input() task?:Assignment;

  constructor() { }

  ngOnInit() {}

}
