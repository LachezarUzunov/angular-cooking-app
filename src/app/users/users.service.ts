import { User } from './user.model';

export class UsersService {
  private users: User[] = [];

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
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    this.users.push(newUser);
  }
}
