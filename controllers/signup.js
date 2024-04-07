import AuthChecker from "../modules/core/AuthChecker.js";
import toggleIcon from "../modules/lib/toggleIcon.js";

const signupForm = document.querySelector(".signup-form");
const inputs = document.getElementsByTagName("input");
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
const authChecker = new AuthChecker();
authChecker.saveDOMNodes = nodes;

const handleEmailFocusOut = () => {
  authChecker.checkEmailInput();
};

const handleUsernameFocusOut = () => {
  authChecker.checkUsernameInput();
};

const handlePWFocusOut = () => {
  authChecker.checkPasswordInput();
};

const handlePWConfirmInput = () => {
  authChecker.checkPWConfirmInput();
};

const handleInputChange = () => {
  authChecker.updateSignupBtn();
};

emailInput.addEventListener("focusout", handleEmailFocusOut);
usernameInput.addEventListener("focusout", handleUsernameFocusOut);
passwordInput.addEventListener("focusout", handlePWFocusOut);
pwConfirmInput.addEventListener("input", handlePWConfirmInput);

for (const input of inputs) {
  input.addEventListener("change", handleInputChange);
}

passwordEye.addEventListener("click", () => {
  toggleIcon(passwordInput, passwordEye);
});

pwConfirmEye.addEventListener("click", () => {
  toggleIcon(pwConfirmInput, pwConfirmEye);
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/login.html";
});
