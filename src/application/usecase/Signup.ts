import { User } from "../../domain/entity/User";
import { UserRepositoy } from "../repository/UserRepository";

export class Signup {
  constructor(readonly userRepository: UserRepositoy) {}

  async execute(input: SignupInputDto): Promise<void> {
    const user = await User.create(
      input.name,
      input.email,
      input.password,
      input.age
    );
    await this.userRepository.save(user);
  }
}

export interface SignupInputDto {
  name: string;
  email: string;
  password: string;
  age: number;
}
