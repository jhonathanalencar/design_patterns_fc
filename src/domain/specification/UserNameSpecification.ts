import { UserWithSpecification } from "../entity/UserWithSpecification";
import { AbstractSpecification } from "./Specification";

export class UserNameSpecification extends AbstractSpecification<UserWithSpecification> {
  isSatisfiedBy(user: UserWithSpecification): boolean {
    return user.name.split(" ").length >= 2;
  }
}
