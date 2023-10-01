import { TokenGenerator } from "../../domain/service/TokenGenerator";

export class CheckAuth {
  constructor() {}

  async execute(token: string): Promise<CheckAuthOutputDto> {
    const tokenGenerator = new TokenGenerator("secret");
    const payload = tokenGenerator.verify(token);
    return {
      email: payload.email,
    };
  }
}

export interface CheckAuthOutputDto {
  email: string;
}
