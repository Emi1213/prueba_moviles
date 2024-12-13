import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { AssignmentSubmission } from 'src/mock/IInterface'

@Injectable({
  providedIn: 'root',
})
export class SubmissionsService {
  apiURL = environment.apiURL + '/submissions'

  constructor() {}

  async getSubmissions() {
    const response = await fetch(this.apiURL)
    return response.json() as Promise<AssignmentSubmission[]>
  }

  async getSubmission(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`)
    return response.json() as Promise<AssignmentSubmission>
  }

  async createSubmission(submission: Omit<AssignmentSubmission, 'id'>) {
    const response = await fetch(this.apiURL, {
      method: 'POST',
      body: JSON.stringify(submission),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<AssignmentSubmission>
  }

  async updateSubmission(submission: AssignmentSubmission) {
    const response = await fetch(`${this.apiURL}/${submission.id}`, {
      method: 'PATCH',
      body: JSON.stringify(submission),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<AssignmentSubmission>
  }

  async deleteSubmission(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`, {
      method: 'DELETE',
    })
    return response.json() as Promise<AssignmentSubmission>
  }
}
