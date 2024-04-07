import AuthChecker from "../modules/core/AuthChecker.js";
import toggleIcon from "../modules/lib/toggleIcon.js";
import AuthStore from "../modules/DB/AuthStore.js";

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
const store = new AuthStore("login");
store.saveDOMNodes = nodes;

const authChecker = new AuthChecker(store);

emailInput.addEventListener("focusout", () => {
  authChecker.checkEmailInput();
});

passwordInput.addEventListener("focusout", () => {
  authChecker.checkPasswordInput();
});

const updateLoginBtn = () => {
  authChecker.updateLoginBtn();
};
authChecker.updateLoginBtn();
emailInput.addEventListener("input", updateLoginBtn);
passwordInput.addEventListener("input", updateLoginBtn);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/items.html";
});

passwordEye.addEventListener("click", () => {
  toggleIcon(passwordInput, passwordEye);
});
