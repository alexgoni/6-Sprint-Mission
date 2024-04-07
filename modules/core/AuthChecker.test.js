import AuthChecker from "./AuthChecker.js";

describe("AuthChecker", () => {
  test("updateLoginBtn - email error", () => {
    // given
    const email = { input: { value: "asdf" } };
    const password = { input: { value: "password" } };
    const submitBtn = { disabled: false };

    const authChecker = new AuthChecker();
    authChecker.saveDOMNodes = {
      email,
      password,
      submitBtn,
    };

    // when
    authChecker.updateLoginBtn();

    // then
    expect(submitBtn.disabled).toBe(true);
  });

  test("updateLoginBtn - button able", () => {
    // given
    const email = { input: { value: "asdf@gmail.com" } };
    const password = { input: { value: "password" } };
    const submitBtn = { disabled: false };

    const authChecker = new AuthChecker();
    authChecker.saveDOMNodes = {
      email,
      password,
      submitBtn,
    };

    // when
    authChecker.updateLoginBtn();

    // then
    expect(submitBtn.disabled).toBe(false);
  });

  test("updateSignupBtn - pw not matched", () => {
    // given
    const email = { input: { value: "asdf@gmail.com" } };
    const password = { input: { value: "password" } };
    const submitBtn = { disabled: false };
    const username = { input: { value: "alex" } };
    const pwConfirm = { input: { value: "password123" } };

    const authChecker = new AuthChecker();
    authChecker.saveDOMNodes = {
      email,
      password,
      submitBtn,
      username,
      pwConfirm,
    };

    // when
    authChecker.updateSignupBtn();

    // then
    expect(submitBtn.disabled).toBe(true);
  });
});
