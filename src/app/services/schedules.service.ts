import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Schedule } from 'src/mock/IInterface'

@Injectable({
  providedIn: 'root',
})
export class SchedulesService {
  apiURL = environment.apiURL + '/schedules'

  constructor() {}

  async getSchedules() {
    const response = await fetch(this.apiURL)
    return response.json() as Promise<Schedule[]>
  }

  async getSchedule(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`)
    return response.json() as Promise<Schedule>
  }

  async createSchedule(schedule: Omit<Schedule, 'id'>) {
    const response = await fetch(this.apiURL, {
      method: 'POST',
      body: JSON.stringify(schedule),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<Schedule>
  }

  async updateSchedule(schedule: Schedule) {
    const response = await fetch(`${this.apiURL}/${schedule.id}`, {
      method: 'PATCH',
      body: JSON.stringify(schedule),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<Schedule>
  }

  async deleteSchedule(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`, {
      method: 'DELETE',
    })
    return response.json() as Promise<Schedule>
  }
}
