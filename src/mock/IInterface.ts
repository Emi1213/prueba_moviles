
export interface Course {
  courses: CourseElement[];
}

export interface CourseElement {
  id:             string;
  name:           string;
  academicPeriod: string;
  subjects:       Subject[];
}

export interface Subject {
  id:          string;
  name:        string;
  professor:   string;
  credits:     number;
  schedule:    Schedule;
  assignments: Assignment[];
}

export interface Assignment {
  id:          string;
  title:       string;
  description: string;
  dueDate:     Date;
  status:      string;
  grade:       number | null;
  maxGrade:    number;
  feedback?:   string;
  resources:   Resource[];
}

export interface Resource {
  id:   string;
  name: string;
  type: string;
  url:  string;
}

export interface Schedule {
  day:  string;
  time: string;
}
