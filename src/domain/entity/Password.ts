import { pbkdf2, randomBytes } from "crypto";

export class Password {
  constructor(readonly value: string, readonly salt: string) {}

  static create(password: string, salt?: string): Promise<Password> {
    if (password.length < 8) {
      throw new Error("Invalid password");
    }

    const generateSalt = salt || randomBytes(20).toString("hex");

    return new Promise((resolve) => {
      pbkdf2(password, generateSalt, 100, 64, "sha512", (error, value) => {
        resolve(new Password(value.toString("hex"), generateSalt));
      });
    });
  }

  async validate(plainPassword: string) {
    return new Promise((resolve) => {
      pbkdf2(plainPassword, this.salt, 100, 64, "sha512", (error, value) => {
        resolve(this.value === value.toString("hex"));
      });
    });
  }
}
