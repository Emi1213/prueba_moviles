import { Component, inject, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AssignmentsService } from 'src/app/services/assignments.service'
import { SubmissionsService } from 'src/app/services/submissions.service'
import { UtilsService } from 'src/app/services/utils.service'
import { Assignment, AssignmentSubmission, IUser } from 'src/mock/IInterface'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: false,
})
export class TasksComponent implements OnInit {
  task: Assignment | null = null
  submission?: AssignmentSubmission = undefined
  utils = inject(UtilsService)
  user?: IUser

  taksSrv = inject(AssignmentsService)
  submissionSrv = inject(SubmissionsService)

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.user = this.utils.getFromLocalStorage('user') as IUser
    this.route.params.subscribe((params) => {
      const taskId = params['taskId']
      this.asingTask(taskId)
    })
  }

  asingTask(taskId: string) {
    this.taksSrv.getAssignment(taskId).then((task) => {
      this.task = task
      console.log('Task:', this.task)
      this.submissionSrv.getSubmissions().then((submissions) => {
        this.submission = submissions.find((submission) => {
          return (
            submission.studentId === this.user?.id &&
            submission.assignmentId === this.task?.id
          )
        })
      })
    })
  }

  async submitTask() {
    console.log('Submitting task:', this.task?.title)
    this.utils.presentToast({
      message: `Tarea subida con éxito `,
      color: 'success',
      position: 'top',
      duration: 2000,
      icon: 'checkmark-circle-outline',
    })

    const submission = await this.submissionSrv.createSubmission({
      assignmentId: this.task!.id,
      studentId: this.user!.id,
      grade: 10,
      isSubmitted: true,
    })

    this.submission = submission

    this.utils.routerLink('main/home')
  }
}
