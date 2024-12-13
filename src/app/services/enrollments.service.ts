import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Enrollment } from 'src/mock/IInterface'

@Injectable({
  providedIn: 'root',
})
export class EnrollmentsService {
  apiURL = environment.apiURL + '/enrollments'

  constructor() {}

  async getEnrollments() {
    const response = await fetch(this.apiURL)
    return response.json() as Promise<Enrollment[]>
  }

  async getEnrollment(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`)
    return response.json() as Promise<Enrollment>
  }

  async createEnrollment(enrollment: Omit<Enrollment, 'id'>) {
    const response = await fetch(this.apiURL, {
      method: 'POST',
      body: JSON.stringify(enrollment),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<Enrollment>
  }

  async updateEnrollment(enrollment: Enrollment) {
    const response = await fetch(`${this.apiURL}/${enrollment.id}`, {
      method: 'PUT',
      body: JSON.stringify(enrollment),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<Enrollment>
  }

  async deleteEnrollment(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`, {
      method: 'DELETE',
    })
    return response.json() as Promise<Enrollment>
  }
}
