import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore'
import {
  Assignment,
  Resource,
  Semester,
  Subject,
  User,
} from 'src/mock/IInterface'

@Injectable({
  providedIn: 'root',
})
export class FirebaseDocumentService {
  private usersCollection: AngularFirestoreCollection<User>
  private semestersCollection: AngularFirestoreCollection<Semester>
  private subjectsCollection: AngularFirestoreCollection<Subject>
  private assignmentsCollection: AngularFirestoreCollection<Assignment>
  private resourcesCollection: AngularFirestoreCollection<Resource>
  private notificationsCollection: AngularFirestoreCollection<Notification>

  constructor(private firestore: AngularFirestore) {
    this.usersCollection = this.firestore.collection('users')
    this.semestersCollection = this.firestore.collection('semesters')
    this.subjectsCollection = this.firestore.collection('subjects')
    this.assignmentsCollection = this.firestore.collection('assignments')
    this.resourcesCollection = this.firestore.collection('resources')
    this.notificationsCollection = this.firestore.collection('notifications')
  }

  // 📘 CRUD de USERS
  addUser(user: User): Promise<DocumentReference<User>> {
    return this.usersCollection.add(user)
  }

  getUsers(): Observable<User[]> {
    return this.usersCollection.valueChanges({ idField: 'id' })
  }

  updateUser(userId: string, data: Partial<User>): Promise<void> {
    return this.usersCollection.doc(userId).update(data)
  }

  deleteUser(userId: string): Promise<void> {
    return this.usersCollection.doc(userId).delete()
  }

  // 📘 CRUD de SEMESTERS
  addSemester(semester: Semester): Promise<DocumentReference<Semester>> {
    return this.semestersCollection.add(semester)
  }

  getSemesters(): Observable<Semester[]> {
    return this.semestersCollection.valueChanges({ idField: 'id' })
  }

  updateSemester(semesterId: string, data: Partial<Semester>): Promise<void> {
    return this.semestersCollection.doc(semesterId).update(data)
  }

  deleteSemester(semesterId: string): Promise<void> {
    return this.semestersCollection.doc(semesterId).delete()
  }

  // 📘 CRUD de SUBJECTS
  addSubject(subject: Subject): Promise<DocumentReference<Subject>> {
    return this.subjectsCollection.add(subject)
  }

  getSubjects(): Observable<Subject[]> {
    return this.subjectsCollection.valueChanges({ idField: 'id' })
  }

  // getSubjectWithDetails(subjectId: string): Observable<any> {
  //   const subjectRef = doc(this.firestoreM, `subjects/${subjectId}`)

  //   return from(getDoc(subjectRef)).pipe(
  //     switchMap(async (subjectSnap) => {
  //       if (!subjectSnap.exists()) throw new Error('Subject not found')

  //       const subjectData = subjectSnap.data() as Subject

  //       // Obtener schedules
  //       const schedulesRef = collection(
  //         this.firestoreM,
  //         `subjects/${subjectId}/schedules`,
  //       )
  //       const schedulesSnap = await getDocs(schedulesRef)
  //       const schedules: Schedule[] = schedulesSnap.docs.map(
  //         (doc) => doc.data() as Schedule,
  //       )

  //       // Resolver assignments
  //       const assignments: Assignment[] = await Promise.all(
  //         subjectData.assignments.map(async (assignmentRef: any) => {
  //           const assignmentSnap = await getDoc(assignmentRef) // Resuelve la referencia
  //           if (assignmentSnap.exists()) {
  //             return assignmentSnap.data() as Assignment
  //           }
  //           throw new Error('Assignment not found')
  //         }),
  //       )

  //       // Retornar el subject con todos los detalles
  //       return {
  //         ...subjectData,
  //         schedule: schedules,
  //         assignments: assignments,
  //       }
  //     }),
  //   )
  // }

  updateSubject(subjectId: string, data: Partial<Subject>): Promise<void> {
    return this.subjectsCollection.doc(subjectId).update(data)
  }

  deleteSubject(subjectId: string): Promise<void> {
    return this.subjectsCollection.doc(subjectId).delete()
  }

  // 📘 CRUD de ASSIGNMENTS
  addAssignment(
    assignment: Assignment,
  ): Promise<DocumentReference<Assignment>> {
    return this.assignmentsCollection.add(assignment)
  }

  getAssignments(): Observable<Assignment[]> {
    return this.assignmentsCollection.valueChanges({ idField: 'id' })
  }

  updateAssignment(
    assignmentId: string,
    data: Partial<Assignment>,
  ): Promise<void> {
    return this.assignmentsCollection.doc(assignmentId).update(data)
  }

  deleteAssignment(assignmentId: string): Promise<void> {
    return this.assignmentsCollection.doc(assignmentId).delete()
  }

  // 📘 CRUD de RESOURCES
  addResource(resource: Resource): Promise<DocumentReference<Resource>> {
    return this.resourcesCollection.add(resource)
  }

  getResources(): Observable<Resource[]> {
    return this.resourcesCollection.valueChanges({ idField: 'id' })
  }

  updateResource(resourceId: string, data: Partial<Resource>): Promise<void> {
    return this.resourcesCollection.doc(resourceId).update(data)
  }

  deleteResource(resourceId: string): Promise<void> {
    return this.resourcesCollection.doc(resourceId).delete()
  }

  // 📘 CRUD de NOTIFICATIONS
  addNotification(
    notification: Notification,
  ): Promise<DocumentReference<Notification>> {
    return this.notificationsCollection.add(notification)
  }

  getNotifications(): Observable<Notification[]> {
    return this.notificationsCollection.valueChanges({ idField: 'id' })
  }

  updateNotification(
    notificationId: string,
    data: Partial<Notification>,
  ): Promise<void> {
    return this.notificationsCollection.doc(notificationId).update(data)
  }

  deleteNotification(notificationId: string): Promise<void> {
    return this.notificationsCollection.doc(notificationId).delete()
  }
}
