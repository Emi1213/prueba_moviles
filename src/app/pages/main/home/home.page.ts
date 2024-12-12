// home.page.ts
import { Component, OnInit } from '@angular/core';

interface Course {
  id: string;
  name: string;
  academicPeriod: string;
  subjects: Subject[];
}

interface Subject {
  id: string;
  name: string;
  professor: string;
  credits: number;
  schedule: Schedule;
  assignments: Assignment[];
}

interface Schedule {
  day: string;
  time: string;
}

interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
  grade: number | null;
  maxGrade: number;
  feedback?: string;
  resources: Resource[];
}

interface Resource {
  id: string;
  name: string;
  type: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  courses: Course[] = [];
  expandedCourse: string | null = null;
  expandedSubject: string | null = null;

  constructor() {
    // Simular datos - En un caso real, esto vendría de un servicio
    this.courses = [
      {
        "id": "MCA2024",
        "name": "Maestría en Computación Aplicada",
        "academicPeriod": "2024-A",
        "subjects": [
          {
            "id": "MAT101",
            "name": "Matemáticas Avanzadas",
            "professor": "Dr. Juan Pérez",
            "credits": 4,
            "schedule": {
              "day": "Lunes",
              "time": "08:00-10:00"
            },
            "assignments": [
              {
                "id": "ASG001",
                "title": "Ecuaciones Diferenciales",
                "description": "Resolver el conjunto de ejercicios del capítulo 3",
                "dueDate": "2024-04-15T23:59:59",
                "status": "submitted",
                "grade": 18.5,
                "maxGrade": 20,
                "feedback": "Excelente trabajo en la resolución de problemas",
                "resources": [
                  {
                    "id": "REC001",
                    "name": "Guía de ejercicios.pdf",
                    "type": "pdf",
                    "url": "/resources/guide001.pdf"
                  }
                ]
              },
              // ... otros assignments
            ]
          },
          // ... otras materias
        ]
      },
      // ... otros cursos
    ];
  }

  ngOnInit() {}

  toggleCourse(courseId: string) {
    this.expandedCourse = this.expandedCourse === courseId ? null : courseId;
    if (this.expandedCourse !== courseId) {
      this.expandedSubject = null;
    }
  }

  toggleSubject(subjectId: string) {
    this.expandedSubject = this.expandedSubject === subjectId ? null : subjectId;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'submitted': return 'warning';
      case 'graded': return 'success';
      case 'pending': return 'danger';
      default: return 'medium';
    }
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }
}