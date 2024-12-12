import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Semester } from '../../../models/academic.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  semesters: Semester[];
  activeSegment = 'overview';

  constructor(private router: Router) {
    // Simulated data - would come from a service in real app
    this.semesters = [/* ... data ... */];
  }

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.activeSegment = ev.detail.value;
  }

  navigateToSubject(subjectId: string) {
    this.router.navigate(['/subject', subjectId]);
  }

  navigateToAssignments() {
    this.router.navigate(['/assignments']);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'ongoing': return 'primary';
      case 'completed': return 'success';
      case 'pending': return 'warning';
      default: return 'medium';
    }
  }
}