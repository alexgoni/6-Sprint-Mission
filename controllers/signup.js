import { isEmpty, isValidEmail, isValidPassword } from "../modules/validate.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const usernameInput = document.querySelector("#username");
const submitBtn = document.querySelector(".form__submit-btn");

const loginErrorMsg = document.createElement("span");
loginErrorMsg.classList.add("error-msg");
emailInput.after(loginErrorMsg);

const passwordErrorMsg = document.createElement("span");
passwordErrorMsg.classList.add("error-msg");
passwordInput.parentNode.after(passwordErrorMsg);

const usernameMsg = document.createElement("span");
usernameMsg.classList.add("error-msg");
usernameInput.after(usernameMsg);

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
