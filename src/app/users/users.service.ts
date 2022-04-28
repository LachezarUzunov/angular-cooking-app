import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users: User[] = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    return [...this.users];
  }

  addUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    const newUser: User = {
      id: null,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    this.http
      .post<{ message: string }>('http://localhost:3000/api/users', newUser)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.users.push(newUser);
      });
  }
}
