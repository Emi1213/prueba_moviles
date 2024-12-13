import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { IUser } from 'src/mock/IInterface'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiURL = environment.apiURL + '/users'

  constructor() {}

  async getUsers() {
    const response = await fetch(this.apiURL)
    return response.json() as Promise<IUser[]>
  }

  async getUser(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`)
    return response.json() as Promise<IUser>
  }

  async getUserByEmail(email: string) {
    const response = await fetch(`${this.apiURL}/email/${email}`)
    return response.json() as Promise<IUser>
  }

  async createUser(user: any) {
    const response = await fetch(this.apiURL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json() as Promise<IUser>
  }

  async updateUser(user: IUser) {
    const response = await fetch(`${this.apiURL}/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  }

  async deleteUser(id: string) {
    const response = await fetch(`${this.apiURL}/${id}`, {
      method: 'DELETE',
    })
    return response.json()
  }
}
