import { CheckAuth } from "../../src/application/usecase/CheckAuth";

test("Deve verificar se está autenticado", async () => {
  const checkAuth = new CheckAuth();
  const input =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWNlLmRvZUBnbWFpbC5jb20iLCJpYXQiOjE2OTYxOTczMjQsImV4cCI6MTcwNjE5NzMyNH0.euzqw0glOJtHgB6uvitrXOROyKDUBXq7oIhgl4XhWPo";
  const output = await checkAuth.execute(input);
  expect(output.email).toBe("alice.doe@gmail.com");
});
