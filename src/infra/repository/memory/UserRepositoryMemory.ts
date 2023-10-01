import { UserRepositoy } from "../../../application/repository/UserRepository";
import { User } from "../../../domain/entity/User";

export class UserRepositoryMemory implements UserRepositoy {
  users: User[];

  constructor() {
    this.users = [];
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async getByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email.getValue() === email);
  }
}
