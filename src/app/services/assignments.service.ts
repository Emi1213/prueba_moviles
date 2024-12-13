import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Assignment } from 'src/mock/IInterface'

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  apiURL = environment.apiURL + '/assignments'

  constructor() {}

  async getAssignments() {
    const response = await fetch(this.apiURL)
    return response.json() as Promise<Assignment[]>
  }

  async getAssignment(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`)
    return response.json() as Promise<Assignment>
  }

  async createAssignment(assignment: Omit<Assignment, 'id'>) {
    const response = await fetch(this.apiURL, {
      method: 'POST',
      body: JSON.stringify(assignment),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<Assignment>
  }

  async updateAssignment(assignment: Assignment) {
    const response = await fetch(`${this.apiURL}/${assignment.id}`, {
      method: 'PATCH',
      body: JSON.stringify(assignment),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<Assignment>
  }

  async deleteAssignment(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`, {
      method: 'DELETE',
    })
    return response.json() as Promise<Assignment>
  }
}
