import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../../models/academic.interface';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss']
})
export class AssignmentsPage implements OnInit {
  assignments: Assignment[] = [];
  filter: string = 'all';

  constructor() {
    // Collect all assignments from all subjects
  }

  ngOnInit() {}

  filterAssignments(status: ) {
    this.filter = status;
  }
}
