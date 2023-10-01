import { TokenGenerator } from "../../domain/service/TokenGenerator";
import { UserRepositoy } from "../repository/UserRepository";

export class Login {
  constructor(readonly userRepository: UserRepositoy) {}

  async execute(input: LoginInputDto): Promise<LoginOutputDto> {
    const user = await this.userRepository.getByEmail(input.email);

    if (!user) throw new Error("Authentication failed");

    const isValidPassword = await user.validatePassword(input.password);

    if (!isValidPassword) throw new Error("Authentication failed");

    const tokenGenerator = new TokenGenerator("secret");
    const token = tokenGenerator.generate(
      user,
      1000000000,
      new Date("2023-10-01T10:00:00")
    );

    return {
      name: user.name.getValue(),
      token,
    };
  }
}

export interface LoginInputDto {
  email: string;
  password: string;
}

export interface LoginOutputDto {
  name: string;
  token: string;
}
