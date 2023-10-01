import { User } from "../../domain/entity/User";

export interface UserRepositoy {
  save(user: User): Promise<void>;
  getByEmail(email: string): Promise<User | undefined>;
}
