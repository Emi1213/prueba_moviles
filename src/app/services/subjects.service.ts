import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Subject } from 'src/mock/IInterface'

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  apiURL = environment.apiURL + '/subjects'

  constructor() {}

  async getSubjects() {
    const response = await fetch(this.apiURL)
    return response.json() as Promise<Subject[]>
  }

  async getSubject(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`)
    return response.json() as Promise<Subject>
  }

  async createSubject(subject: Omit<Subject, 'id'>) {
    const response = await fetch(this.apiURL, {
      method: 'POST',
      body: JSON.stringify(subject),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<Subject>
  }

  async updateSubject(subject: Subject) {
    const response = await fetch(`${this.apiURL}/${subject.id}`, {
      method: 'PATCH',
      body: JSON.stringify(subject),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<Subject>
  }

  async deleteSubject(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`, {
      method: 'DELETE',
    })
    return response.json() as Promise<Subject>
  }
}
