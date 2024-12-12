import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '../../../models/academic.interface';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.page.html',
  styleUrls: ['./subject-detail.page.scss']
})
export class SubjectDetailPage implements OnInit {
  subject: Subject | undefined;
  activeSegment = 'info';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // En una app real, obtendríamos los datos del servicio
    this.subject; 
  }

  segmentChanged(ev: any) {
    this.activeSegment = ev.detail.value;
  }
}