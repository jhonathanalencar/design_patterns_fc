import { UserWithSpecification } from "../entity/UserWithSpecification";
import { AbstractSpecification } from "./Specification";

export class UserEmailSpecification extends AbstractSpecification<UserWithSpecification> {
  isSatisfiedBy(user: UserWithSpecification): boolean {
    return !!String(user.email)
      .toLowerCase()
      .match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/);
  }
}
