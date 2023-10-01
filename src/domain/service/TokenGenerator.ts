import { sign, verify } from "jsonwebtoken";
import { CheckAuthOutputDto } from "../../application/usecase/CheckAuth";
import { User } from "../entity/User";

export class TokenGenerator {
  constructor(readonly key: string) {}

  generate(user: User, expiresIn: number, issueDate: Date) {
    return sign(
      { email: user.email.getValue(), iat: issueDate.getTime(), expiresIn },
      this.key
    );
  }

  verify(token: string) {
    return verify(token, this.key) as CheckAuthOutputDto;
  }
}
