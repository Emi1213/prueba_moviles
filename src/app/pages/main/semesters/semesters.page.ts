import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core'
import { Assignment, Subject, IUser, Semester } from 'src/mock/IInterface'
import { Router } from '@angular/router'
import { UtilsService } from 'src/app/services/utils.service'
import { EnrollmentsService } from 'src/app/services/enrollments.service'
import { SemestersService } from 'src/app/services/semesters.service'
import { UsersService } from 'src/app/services/users.service'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.page.html',
  styleUrls: ['./semesters.page.scss'],
  standalone: false,
})
export class SemestersPage implements OnInit {
  private semestersSubject = new BehaviorSubject<Semester[]>([])

  semesters$ = this.semestersSubject.asObservable()
  selectedSegment: Semester | undefined = undefined
  utils = inject(UtilsService)
  user = {} as IUser

  subjects: Subject[] = []

  enrollmentSrv = inject(EnrollmentsService)
  semestersSrv = inject(SemestersService)

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  async ngOnInit() {
    this.user = this.utils.getFromLocalStorage('user') as IUser
    await this.fetchData()
  }

  async fetchData() {
    const semesters = await this.semestersSrv.getSemesters()
    this.semestersSubject.next(semesters)

    this.selectedSegment = this.selectedSegment ?? semesters[0]
    console.log('Semesters:', semesters)
    this.subjects = this.selectedSegment.subjects
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value
    if (this.selectedSegment) {
      this.subjects = this.selectedSegment.subjects
    }
  }

  onSubmitAssignment(subject: Subject, assignment: Assignment) {
    console.log(
      'Submitting assignment:',
      assignment.title,
      'for subject:',
      subject.name,
    )
  }

  isEnrolled(subject: Subject) {
    return subject.enrollments.some(
      (enrollment) =>
        enrollment.studentId === this.user.id && enrollment.isActive,
    )
  }

  navigateTarea(taskId: string) {
    this.router.navigate(['main/task/', taskId])
  }

  logout() {
    console.log('Logging out...')
  }

  async registerSubject(subject: Subject) {
    this.utils.presentToast({
      message: `Matriculado`,
      color: 'success',
      position: 'top',
      duration: 2000,
      icon: 'checkmark-circle-outline',
    })

    const enrollment = {
      studentId: this.user.id,
      subjectId: subject.id,
      isActive: true,
    }

    const newEnrollment = await this.enrollmentSrv.createEnrollment(enrollment)
    subject.enrollments.push(newEnrollment)

    await this.fetchData()
  }
}
