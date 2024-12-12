export interface User {
    email: string;
    password: string;
  }
  
  export interface Semester {
    name: string;
    user: User;
    subjects: Subject[];
  }
  
  export interface Subject {
    id: string;
    name: string;
    professor: string;
    credits: number;
    schedule: Schedule;
    status: string;
    finalGrade: number | null;
    assignments: Assignment[];
  }
  
  export interface Schedule {
    day: string;
    time: string;
  }
  
  export interface Assignment {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    status: string;
    grade: number | null;
    feedback?: string;
    resources: Resource[];
  }
  
  export interface Resource {
    id: string;
    name: string;
    type: string;
    url: string;
  }