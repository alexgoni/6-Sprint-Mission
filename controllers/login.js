import { isEmpty, isValidEmail, isValidPassword } from "../modules/auth.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".form__submit-btn");

const loginErrorMsg = document.createElement("span");
loginErrorMsg.classList.add("error-msg");
emailInput.after(loginErrorMsg);
const passwordErrorMsg = document.createElement("span");
passwordErrorMsg.classList.add("error-msg");
passwordInput.after(passwordErrorMsg);

emailInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;

  if (isEmpty(value)) {
    input.classList.add("error");
    loginErrorMsg.textContent = "이메일을 입력해주세요";
  } else if (!isValidEmail(value)) {
    input.classList.add("error");
    loginErrorMsg.textContent = "잘못된 이메일입니다";
  } else {
    input.classList.remove("error");
    loginErrorMsg.textContent = "";
  }
});

passwordInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;

  if (isEmpty(value)) {
    input.classList.add("error");
    passwordErrorMsg.textContent = "비밀번호를 입력해주세요";
  } else if (!isValidPassword(value)) {
    input.classList.add("error");
    passwordErrorMsg.textContent = "비밀번호를 8자 이상 입력해주세요";
  } else {
    input.classList.remove("error");
    passwordErrorMsg.textContent = "";
  }
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
