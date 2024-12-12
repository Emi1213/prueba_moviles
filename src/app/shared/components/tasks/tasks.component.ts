import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Assignment } from 'src/mock/IInterface'
import { MOCK_DATA } from 'src/mock/data'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: false,
})
export class TasksComponent implements OnInit {
  task: Assignment | null = null

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const taskId = params['taskId']
      this.asingTask(taskId)
    })
  }

  asingTask(taskId: string) {
    const assignments = MOCK_DATA.semesters[0].subjects.reduce(
      (acc, subject) => acc.concat(subject.assignments),
      [] as Assignment[],
    )
    this.task =
      assignments.find((assignment) => assignment.id === taskId) || null
  }

  upload() {}
}
