import { isEmpty, isValidEmail, isValidPassword } from "../modules/auth.js";

describe("isEmpty function", () => {
  test("empty test", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty(" ")).toBe(true);
    expect(isEmpty("\n")).toBe(true);
    expect(isEmpty("\t")).toBe(true);
  });

  test("not empty test", () => {
    expect(isEmpty("hello")).toBe(false);
    expect(isEmpty("  hello  ")).toBe(false);
  });
});

describe("isValidEmail function", () => {
  test("valid email test", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user123@test.co.uk")).toBe(true);
  });

  test("not valid email test", () => {
    expect(isValidEmail("invalidemail@")).toBe(false);
    expect(isValidEmail("invalidemail@test")).toBe(false);
    expect(isValidEmail("invalidemail@test.")).toBe(false);
  });
});

describe("isValidPassword function", () => {
  test("valid password test", () => {
    expect(isValidPassword("12345678")).toBe(true);
    expect(isValidPassword("alexgoni1234")).toBe(true);
  });

  test("not valid password test", () => {
    expect(isValidPassword("1234567")).toBe(false);
    expect(isValidPassword("1234")).toBe(false);
  });
});
