import { Component, OnInit } from '@angular/core'
import { FirebaseDocumentService } from 'src/app/services/firebase-documents.service'
import { User } from 'src/mock/IInterface'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: User[] = []

  constructor(private firebaseService: FirebaseDocumentService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.firebaseService.getUsers().subscribe((users) => {
      this.users = users
      console.log('Users:', this.users)
    })
    this.firebaseService.getSubjects().subscribe((res) => {
      console.log('Res:', res)
    })
  }

  addUser(): void {
    const newUser: User = { email: 'test@example.com', password: '123456' }
    this.firebaseService
      .addUser(newUser)
      .then(() => console.log('Usuario añadido'))
      .catch((err) => console.error('Error:', err))
  }

  updateUser(userId: string): void {
    this.firebaseService
      .updateUser(userId, { email: 'updated@example.com' })
      .then(() => console.log('Usuario actualizado'))
      .catch((err) => console.error('Error:', err))
  }

  deleteUser(userId: string): void {
    this.firebaseService
      .deleteUser(userId)
      .then(() => console.log('Usuario eliminado'))
      .catch((err) => console.error('Error:', err))
  }
}
