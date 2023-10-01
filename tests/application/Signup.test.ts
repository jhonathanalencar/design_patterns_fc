import { Login } from "../../src/application/usecase/Login";
import { Signup } from "../../src/application/usecase/Signup";
import { UserRepositoryMemory } from "../../src/infra/repository/memory/UserRepositoryMemory";

test("Deve fazer o signup", async () => {
  const userRepository = new UserRepositoryMemory();

  const signup = new Signup(userRepository);
  const inputSignup = {
    name: "Alice Doe",
    email: "alice.doe@gmail.com",
    password: "12345678",
    age: 25,
  };
  await signup.execute(inputSignup);

  const login = new Login(userRepository);
  const inputLogin = {
    email: "alice.doe@gmail.com",
    password: "12345678",
  };
  const output = await login.execute(inputLogin);

  expect(output.name).toBe("Alice Doe");
  expect(output.token).toBe(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWNlLmRvZUBnbWFpbC5jb20iLCJpYXQiOjE2OTYxNjUyMDAwMDAsImV4cGlyZXNJbiI6MTAwMDAwMDAwMH0.V8_7WCBZnY6_n7sUGWUYkV7XMJDvFVtHpR67RfL02V0"
  );
});
