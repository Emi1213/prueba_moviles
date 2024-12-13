import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Semester } from 'src/mock/IInterface'

@Injectable({
  providedIn: 'root',
})
export class SemestersService {
  apiURL = environment.apiURL + '/semesters'

  constructor() {}

  async getSemesters() {
    const response = await fetch(this.apiURL)

    return response.json() as Promise<Semester[]>
  }
  async getSemester(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`)
    return response.json() as Promise<Semester>
  }
  async createSemester(semester: Omit<Semester, 'id'>) {
    const response = await fetch(this.apiURL, {
      method: 'POST',
      body: JSON.stringify(semester),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<Semester>
  }
  async updateSemester(semester: Semester) {
    const response = await fetch(`${this.apiURL}/${semester.id}`, {
      method: 'PATCH',
      body: JSON.stringify(semester),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<Semester>
  }
  async deleteSemester(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`, {
      method: 'DELETE',
    })
    return response.json() as Promise<Semester>
  }
}
