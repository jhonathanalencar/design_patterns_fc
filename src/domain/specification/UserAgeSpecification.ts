import { UserWithSpecification } from "../entity/UserWithSpecification";
import { AbstractSpecification } from "./Specification";

export class UserAgeSpecification extends AbstractSpecification<UserWithSpecification> {
  isSatisfiedBy(user: UserWithSpecification): boolean {
    return user.age >= 18;
  }
}
