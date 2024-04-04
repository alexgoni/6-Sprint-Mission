import { ERRORS } from "../modules/constants.js";
import {
  handleInvalid,
  handleToggleIcon,
  handleValid,
} from "../modules/handlers.js";
import {
  isEmpty,
  isEqualString,
  isValidEmail,
  isValidPassword,
} from "../modules/validate.js";

const emailInput = document.querySelector("#email");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const pwConfirmInput = document.querySelector("#password-confirm");
const submitBtn = document.querySelector(".form__submit-btn");
const passwordEye = document.querySelector("#password-eye");
const pwConfirmEye = document.querySelector("#pw-confirm-eye");

const emailErrorNode = document.createElement("span");
emailErrorNode.classList.add("error-msg");
emailInput.after(emailErrorNode);

const usernameErrorNode = document.createElement("span");
usernameErrorNode.classList.add("error-msg");
usernameInput.after(usernameErrorNode);

const pwErrorNode = document.createElement("span");
pwErrorNode.classList.add("error-msg");
passwordInput.parentNode.after(pwErrorNode);

const pwConfirmErrorNode = document.createElement("span");
pwConfirmErrorNode.classList.add("error-msg");
pwConfirmInput.parentNode.after(pwConfirmErrorNode);

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

usernameInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;

  if (isEmpty(value)) {
    handleInvalid({
      input,
      errorMsgNode: usernameErrorNode,
      errorMsg: ERRORS.EMPTY_USERNAME,
    });
  } else handleValid({ input, errorMsgNode: usernameErrorNode });
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

pwConfirmInput.addEventListener("input", (e) => {
  const input = e.currentTarget;
  const { value } = input;
  const password = passwordInput.value;

  if (!isEqualString(password, value)) {
    handleInvalid({
      input,
      errorMsgNode: pwConfirmErrorNode,
      errorMsg: ERRORS.PW_NOT_MATCHED,
    });
  } else handleValid({ input, errorMsgNode: pwConfirmErrorNode });
});

function updateSignupBtn() {
  const emailValid =
    !isEmpty(emailInput.value) && isValidEmail(emailInput.value);
  const passwordValid =
    !isEmpty(passwordInput.value) && isValidPassword(passwordInput.value);
  const usernameValid = !isEmpty(usernameInput.value);
  const pwConfirmValid = isEqualString(
    passwordInput.value,
    pwConfirmInput.value
  );

  submitBtn.disabled = !(
    emailValid &&
    passwordValid &&
    usernameValid &&
    pwConfirmValid
  );
}

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
  handleToggleIcon(passwordInput, passwordEye);
});

pwConfirmEye.addEventListener("click", () => {
  handleToggleIcon(pwConfirmInput, pwConfirmEye);
});
