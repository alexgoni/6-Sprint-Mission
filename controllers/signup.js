import AuthChecker from "../modules/core/AuthChecker.js";
import toggleIcon from "../modules/lib/toggleIcon.js";
import AuthStore from "../modules/DB/AuthStore.js";

const emailInput = document.querySelector("#email");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const pwConfirmInput = document.querySelector("#password-confirm");
const submitBtn = document.querySelector(".form__submit-btn");
const passwordEye = document.querySelector("#password-eye");
const pwConfirmEye = document.querySelector("#pw-confirm-eye");

const emailError = document.createElement("span");
emailError.classList.add("error-msg");
emailInput.after(emailError);

const usernameError = document.createElement("span");
usernameError.classList.add("error-msg");
usernameInput.after(usernameError);

const passwordError = document.createElement("span");
passwordError.classList.add("error-msg");
passwordInput.parentNode.after(passwordError);

const pwConfirmError = document.createElement("span");
pwConfirmError.classList.add("error-msg");
pwConfirmInput.parentNode.after(pwConfirmError);

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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/login.html";
});

passwordEye.addEventListener("click", () => {
  toggleIcon(passwordInput, passwordEye);
});

pwConfirmEye.addEventListener("click", () => {
  toggleIcon(pwConfirmInput, pwConfirmEye);
});
