import AuthChecker from "../modules/core/AuthChecker.js";
import toggleIcon from "../modules/lib/toggleIcon.js";

const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const passwordEye = document.querySelector(".password-eye");
const submitBtn = document.querySelector(".form__submit-btn");

const email = {
  input: emailInput,
  errorMsgNode: emailError,
};

const password = {
  input: passwordInput,
  errorMsgNode: passwordError,
};

const nodes = { email, password, submitBtn };
const authChecker = new AuthChecker();
authChecker.saveDOMNodes = nodes;

const handleEmailFocusOut = () => {
  authChecker.checkEmailInput();
};

const handlePWFocusOut = () => {
  authChecker.checkPasswordInput();
};

const handleInputChange = () => {
  authChecker.updateLoginBtn();
};

emailInput.addEventListener("focusout", handleEmailFocusOut);
passwordInput.addEventListener("focusout", handlePWFocusOut);
emailInput.addEventListener("change", handleInputChange);
passwordInput.addEventListener("change", handleInputChange);

passwordEye.addEventListener("click", () => {
  toggleIcon(passwordInput, passwordEye);
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/items.html";
});
