import { Component, OnInit } from '@angular/core'
import { Assignment, Subject } from 'src/mock/IInterface'
import { MOCK_DATA } from '../../../../mock/data'
import { Router } from '@angular/router'

@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.page.html',
  styleUrls: ['./semesters.page.scss'],
  standalone: false,
})
export class SemestersPage implements OnInit {
  currentSemester: string = 'Semestre 2024-1'
  semesters: string[] = ['Semestre 2024-1']
  selectedSegment: string = 'Semestre 2024-1'

  subjects: Subject[] = MOCK_DATA.semesters[0].subjects

  constructor(private router: Router) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value
  }

  onSubmitAssignment(subject: Subject, assignment: Assignment) {
    console.log(
      'Submitting assignment:',
      assignment.title,
      'for subject:',
      subject.name,
    )
  }

  navigateTarea(taskId: string) {
    this.router.navigate(['main/task/', taskId])
  }

  logout() {
    console.log('Logging out...')
  }

  registerSubject(subjectId: string) {
    console.log('Registering subject:', subjectId)
    const subject = this.subjects.find((subject) => subject.id === subjectId)
    subject!.isRegistered = true
  }
}
