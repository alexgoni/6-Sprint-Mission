import { ERRORS } from "../modules/constants.js";
import {
  handleInvalid,
  handleToggleIcon,
  handleValid,
} from "../modules/handlers.js";
import { isEmpty, isValidEmail, isValidPassword } from "../modules/validate.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".form__submit-btn");
const passwordEye = document.querySelector(".password-eye");

const emailErrorNode = document.createElement("span");
emailErrorNode.classList.add("error-msg");
emailInput.after(emailErrorNode);

const pwErrorNode = document.createElement("span");
pwErrorNode.classList.add("error-msg");
passwordInput.parentNode.after(pwErrorNode);

emailInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;

  if (isEmpty(value)) {
    handleInvalid({
      input,
      errorMsgNode: emailErrorNode,
      errorMsg: ERRORS.EMPTY_EMAIL,
    });
  } else if (!isValidEmail(value)) {
    handleInvalid({
      input,
      errorMsgNode: emailErrorNode,
      errorMsg: ERRORS.INVALID_EMAIL,
    });
  } else handleValid({ input, errorMsgNode: emailErrorNode });
});

passwordInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;

  if (isEmpty(value)) {
    handleInvalid({
      input,
      errorMsgNode: pwErrorNode,
      errorMsg: ERRORS.EMPTY_PW,
    });
  } else if (!isValidPassword(value)) {
    handleInvalid({
      input,
      errorMsgNode: pwErrorNode,
      errorMsg: ERRORS.INVALID_PW,
    });
  } else handleValid({ input, errorMsgNode: pwErrorNode });
});

function updateLoginBtn() {
  const emailValid =
    !isEmpty(emailInput.value) && isValidEmail(emailInput.value);
  const passwordValid =
    !isEmpty(passwordInput.value) && isValidPassword(passwordInput.value);

  submitBtn.disabled = !(emailValid && passwordValid);
}

updateLoginBtn();
emailInput.addEventListener("input", updateLoginBtn);
passwordInput.addEventListener("input", updateLoginBtn);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/items.html";
});

passwordEye.addEventListener("click", () => {
  handleToggleIcon(passwordInput, passwordEye);
});
