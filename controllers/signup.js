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

const loginErrorMsg = document.createElement("span");
loginErrorMsg.classList.add("error-msg");
emailInput.after(loginErrorMsg);

const usernameMsg = document.createElement("span");
usernameMsg.classList.add("error-msg");
usernameInput.after(usernameMsg);

const passwordErrorMsg = document.createElement("span");
passwordErrorMsg.classList.add("error-msg");
passwordInput.parentNode.after(passwordErrorMsg);

const pwConfirmMsg = document.createElement("span");
pwConfirmMsg.classList.add("error-msg");
pwConfirmInput.parentNode.after(pwConfirmMsg);

emailInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;

  const handleEmpty = () => {
    input.classList.add("error");
    loginErrorMsg.textContent = "이메일을 입력해주세요";
  };

  const handleInvalidEmail = () => {
    input.classList.add("error");
    loginErrorMsg.textContent = "잘못된 이메일입니다";
  };

  const handleValidEmail = () => {
    input.classList.remove("error");
    loginErrorMsg.textContent = "";
  };

  if (isEmpty(value)) handleEmpty();
  else if (!isValidEmail(value)) handleInvalidEmail();
  else handleValidEmail();
});

usernameInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;

  const handleEmpty = () => {
    input.classList.add("error");
    usernameMsg.textContent = "닉네임을 입력해주세요";
  };

  const handleValidUsername = () => {
    input.classList.remove("error");
    usernameMsg.textContent = "";
  };

  if (isEmpty(value)) handleEmpty();
  else handleValidUsername();
});

passwordInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;

  const handleEmpty = () => {
    input.classList.add("error");
    passwordErrorMsg.textContent = "비밀번호를 입력해주세요";
  };

  const handleInvalidPassword = () => {
    input.classList.add("error");
    passwordErrorMsg.textContent = "비밀번호를 8자 이상 입력해주세요";
  };

  const handleValidPassword = () => {
    input.classList.remove("error");
    passwordErrorMsg.textContent = "";
  };

  if (isEmpty(value)) handleEmpty();
  else if (!isValidPassword(value)) handleInvalidPassword();
  else handleValidPassword();
});

pwConfirmInput.addEventListener("input", (e) => {
  const input = e.currentTarget;
  const { value } = input;
  const password = passwordInput.value;

  const handleInvalidPWConfirm = () => {
    input.classList.add("error");
    pwConfirmMsg.textContent = "비밀번호가 일치하지 않습니다";
  };

  const handleValidPassword = () => {
    input.classList.remove("error");
    pwConfirmMsg.textContent = "";
  };

  if (!isEqualString(password, value)) handleInvalidPWConfirm();
  else handleValidPassword();
});
