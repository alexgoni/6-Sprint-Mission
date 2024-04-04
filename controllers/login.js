import { isEmpty, isValidEmail, isValidPassword } from "../modules/validate.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".form__submit-btn");

const loginErrorMsg = document.createElement("span");
loginErrorMsg.classList.add("error-msg");
emailInput.after(loginErrorMsg);

const passwordErrorMsg = document.createElement("span");
passwordErrorMsg.classList.add("error-msg");
passwordInput.parentNode.after(passwordErrorMsg);

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

function updateSignUpButton() {
  const emailValid =
    !isEmpty(emailInput.value) && isValidEmail(emailInput.value);
  const passwordValid =
    !isEmpty(passwordInput.value) && isValidPassword(passwordInput.value);

  submitBtn.disabled = !(emailValid && passwordValid);
}

updateSignUpButton();
emailInput.addEventListener("input", updateSignUpButton);
passwordInput.addEventListener("input", updateSignUpButton);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/items.html";
});
