import AuthChecker from "../modules/core/AuthChecker.js";
import toggleIcon from "../modules/lib/toggleIcon.js";
import AuthStore from "../modules/DB/AuthStore.js";

const signupForm = document.querySelector(".signup-form");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const usernameInput = document.querySelector("#username");
const usernameError = document.querySelector("#username-error");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const passwordEye = document.querySelector("#password-eye");
const pwConfirmInput = document.querySelector("#password-confirm");
const pwConfirmError = document.querySelector("#pw-confirm-error");
const pwConfirmEye = document.querySelector("#pw-confirm-eye");
const submitBtn = document.querySelector(".form__submit-btn");

const email = {
  input: emailInput,
  errorMsgNode: emailError,
};

const password = {
  input: passwordInput,
  errorMsgNode: passwordError,
};

const username = {
  input: usernameInput,
  errorMsgNode: usernameError,
};

const pwConfirm = {
  input: pwConfirmInput,
  errorMsgNode: pwConfirmError,
};

const nodes = { email, password, submitBtn, username, pwConfirm };
const store = new AuthStore("signup");
store.saveDOMNodes = nodes;

const authChecker = new AuthChecker(store);

emailInput.addEventListener("focusout", () => {
  authChecker.checkEmailInput();
});

usernameInput.addEventListener("focusout", () => {
  authChecker.checkUsernameInput();
});

passwordInput.addEventListener("focusout", () => {
  authChecker.checkPasswordInput();
});

pwConfirmInput.addEventListener("input", () => {
  authChecker.checkPWConfirmInput();
});

const updateSignupBtn = () => {
  authChecker.updateSignupBtn();
};

updateSignupBtn();
emailInput.addEventListener("input", updateSignupBtn);
usernameInput.addEventListener("input", updateSignupBtn);
passwordInput.addEventListener("input", updateSignupBtn);
pwConfirmInput.addEventListener("input", updateSignupBtn);

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/login.html";
});

passwordEye.addEventListener("click", () => {
  toggleIcon(passwordInput, passwordEye);
});

pwConfirmEye.addEventListener("click", () => {
  toggleIcon(pwConfirmInput, pwConfirmEye);
});
