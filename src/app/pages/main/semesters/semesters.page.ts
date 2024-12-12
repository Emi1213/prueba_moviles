import { Component, OnInit } from '@angular/core'
import { Assignment, Subject } from 'src/mock/IInterface'
import { MOCK_DATA } from '../../../../mock/data'

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

  constructor() {}

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

  logout() {
    console.log('Logging out...')
  }
}
