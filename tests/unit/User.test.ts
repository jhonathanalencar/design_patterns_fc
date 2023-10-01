import { User } from "../../src/domain/entity/User";

test("Deve criar um usuário", async () => {
  const user = await User.create(
    "Alice Doe",
    "alice.doe@gmail.com",
    "12345678",
    25
  );
  expect(user.name.getValue()).toBe("Alice Doe");
  expect(user.email.getValue()).toBe("alice.doe@gmail.com");
  expect(user.password.value).toBe(
    "f1fa680348802c16e610e0afa109ef9fd2ea21001bf0449ea4372229cee93a13c3eb08a30068a92b82d376d195f5ed4bebfd9b51413a0ae23dbb38da9141a4b4"
  );
  expect(user.age).toBe(25);
});

test("Não deve criar um usuário com nome inválido", () => {
  expect(() =>
    User.create("Alice", "alice.doe@gmail.com", "12345678", 25)
  ).rejects.toThrow(new Error("Invalid name"));
});

test("Não deve criar um usuário com email inválido", () => {
  expect(() =>
    User.create("Alice Doe", "alice.doe@gmail", "12345678", 25)
  ).rejects.toThrow(new Error("Invalid email"));
});

test("Não deve criar um usuário com password inválido", () => {
  expect(() =>
    User.create("Alice Doe", "alice.doe@gmail.com", "1234567", 25)
  ).rejects.toThrow(new Error("Invalid password"));
});

test("Não deve criar um usuário com idade inválida", () => {
  expect(() =>
    User.create("Alice Doe", "alice.doe@gmail.com", "12345678", 17)
  ).rejects.toThrow(new Error("Invalid age"));
});
