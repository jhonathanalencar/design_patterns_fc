import { UserWithSpecification } from "../entity/UserWithSpecification";
import { AbstractSpecification } from "./Specification";

export class UserPasswordSpecification extends AbstractSpecification<UserWithSpecification> {
  isSatisfiedBy(user: UserWithSpecification): boolean {
    return user.password.length >= 8;
  }
}
