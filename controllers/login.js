import AuthChecker from "../modules/core/AuthChecker.js";
import toggleIcon from "../modules/lib/toggleIcon.js";
import AuthStore from "../modules/DB/AuthStore.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".form__submit-btn");
const passwordEye = document.querySelector(".password-eye");

const emailError = document.createElement("span");
emailError.classList.add("error-msg");
emailInput.after(emailError);

const passwordError = document.createElement("span");
passwordError.classList.add("error-msg");
passwordInput.parentNode.after(passwordError);

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
