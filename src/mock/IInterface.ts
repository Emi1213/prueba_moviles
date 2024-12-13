// export interface User {
//   id: string
//   email: string
//   password: string
// }

// export interface Semester {
//   id: string
//   name: string
//   subjects: Subject[]
// }

// export interface Subject {
//   id: string
//   name: string
//   isRegistered: boolean
//   professor: string
//   credits: number
//   schedule: Schedule
//   status: string
//   assignments: Assignment[]
// }

// export interface Assignment {
//   id: string
//   title: string
//   description: string
//   dueDate: Date
//   status: string
//   grade?: number | null
//   feedback?: string
//   resources: Resource[]
// }

// export interface Resource {
//   id: string
//   name: string
//   type: string
//   url: string
// }

// export interface Schedule {
//   day: string
//   time: string
// }

// export interface Enrollment {
//   id: string
//   finalGrade?: number | null
//   isActive: boolean
//   createdAt: Date
//   updatedAt: Date
//   studentId: string
//   subjectId: string
// }

// export interface AssignmentSubmission {
//   id: string
//   isSubmitted: boolean
//   submittedAt?: Date | null
//   grade?: number | null
//   feedback?: string | null
//   createdAt: Date
//   updatedAt: Date
//   studentId: string
//   assignmentId: string
//   resources: Resource[]
// }

export interface IUser {
  id: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  enrollments: Enrollment[]
  submissions: AssignmentSubmission[]
}

export interface Semester {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  subjects: Subject[]
}

export interface Subject {
  id: string
  name: string
  professor: string
  credits: number
  status: string
  createdAt: Date
  updatedAt: Date
  semesterId: string
  schedules: Schedule[]
  assignments: Assignment[]
  enrollments: Enrollment[]
}

export interface Schedule {
  id: string
  day: string
  time: string
  createdAt: Date
  updatedAt: Date
  subjectId: string
}

export interface Enrollment {
  id: string
  finalGrade?: number | null
  isActive: boolean
  createdAt?: Date
  updatedAt?: Date
  studentId: string
  subjectId: string
}

export interface Assignment {
  id: string
  title: string
  description: string
  dueDate: Date
  status: string
  createdAt: Date
  updatedAt: Date
  subjectId: string
  resources: Resource[]
  submissions: AssignmentSubmission[]
}

export interface AssignmentSubmission {
  id: string
  isSubmitted: boolean
  submittedAt?: Date | null
  grade?: number | null
  feedback?: string | null
  createdAt?: Date
  updatedAt?: Date
  studentId: string
  assignmentId: string
  resources?: Resource[]
}

export interface Resource {
  id: string
  name: string
  type: string
  url: string
  createdAt: Date
  updatedAt: Date
  assignmentId?: string | null
  submissionId?: string | null
}
