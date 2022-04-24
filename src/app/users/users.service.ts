import { User } from './user.model';

export class UsersService {
  private users: User[] = [];

  getUsers() {
    return [...this.users];
  }
}
