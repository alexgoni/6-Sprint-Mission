import AuthStore from "../modules/DB/AuthStore.js";
import AuthChecker from "../modules/core/AuthChecker.js";

describe("AuthStore", () => {
  test("login form", () => {
    // given
    const authStore = new AuthStore("login");
    authStore.saveDOMNodes = {
      email: { value: "test@test.com" },
      password: { value: "password" },
      submitBtn: { disabled: false },
    };

    // when
    const domNodes = authStore.readDOMNodes;

    // then
    expect(domNodes).toEqual({
      email: { value: "test@test.com" },
      password: { value: "password" },
      submitBtn: { disabled: false },
    });
  });

  test("signup form", () => {
    // given
    const authStore = new AuthStore("signup");
    authStore.saveDOMNodes = {
      email: { value: "test@test.com" },
      password: { value: "password" },
      submitBtn: { disabled: false },
      username: { value: "alex" },
      pwConfirm: { value: "password" },
    };

    // when
    const domNodes = authStore.readDOMNodes;

    // then
    expect(domNodes).toEqual({
      email: { value: "test@test.com" },
      password: { value: "password" },
      submitBtn: { disabled: false },
      username: { value: "alex" },
      pwConfirm: { value: "password" },
    });
  });

  test("외부 접근", () => {
    // given
    const authStore = new AuthStore("login");
    authStore.saveDOMNodes = {
      email: { value: "test@test.com" },
      password: { value: "password" },
      submitBtn: { disabled: false },
    };

    // when
    const password = authStore.password?.value;

    // then
    expect(password).toBeUndefined();
  });
});

describe("AuthChecker", () => {
  test("updateLoginBtn - email error", () => {
    // given
    const store = new AuthStore("login");
    const email = { input: { value: "asdf" } };
    const password = { input: { value: "password" } };
    const submitBtn = { disabled: false };

    store.saveDOMNodes = {
      email,
      password,
      submitBtn,
    };

    const authChecker = new AuthChecker(store);

    // when
    authChecker.updateLoginBtn();

    // then
    expect(submitBtn.disabled).toBe(true);
  });

  test("updateLoginBtn - button able", () => {
    // given
    const store = new AuthStore("login");
    const email = { input: { value: "asdf@gmail.com" } };
    const password = { input: { value: "password" } };
    const submitBtn = { disabled: false };

    store.saveDOMNodes = {
      email,
      password,
      submitBtn,
    };

    const authChecker = new AuthChecker(store);

    // when
    authChecker.updateLoginBtn();

    // then
    expect(submitBtn.disabled).toBe(false);
  });

  test("updateSignupBtn - pw not matched", () => {
    // given
    const store = new AuthStore("signup");
    const email = { input: { value: "asdf@gmail.com" } };
    const password = { input: { value: "password" } };
    const submitBtn = { disabled: false };
    const username = { input: { value: "alex" } };
    const pwConfirm = { input: { value: "password123" } };

    store.saveDOMNodes = {
      email,
      password,
      submitBtn,
      username,
      pwConfirm,
    };

    const authChecker = new AuthChecker(store);

    // when
    authChecker.updateSignupBtn();

    // then
    expect(submitBtn.disabled).toBe(true);
  });
});
