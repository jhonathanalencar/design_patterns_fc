import { Email } from "../../src/domain/entity/Email";

test("Deve criar um email válido", () => {
  const email = new Email("alice.doe@gmail.com");
  expect(email.getValue()).toBe("alice.doe@gmail.com");
});

test("Não deve criar um email inválido", () => {
  expect(() => new Email("alice.doe@gmail")).toThrow(
    new Error("Invalid email")
  );
});
