import { isEmpty, isValidEmail, isValidPassword } from "../modules/auth.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".form__submit-btn");
const loginErrorMsg = document.createElement("span");
const passwordErrorMsg = document.createElement("span");
loginErrorMsg.classList.add("error-msg");
passwordErrorMsg.classList.add("error-msg");

emailInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;
  const errorCondition = isEmpty(value) || !isValidEmail(value);

  if (errorCondition) {
    input.classList.add("error");
    loginErrorMsg.textContent = isEmpty(value)
      ? "이메일을 입력해주세요"
      : "잘못된 이메일입니다";
    input.after(loginErrorMsg);
  } else {
    input.classList.remove("error");
    loginErrorMsg.remove();
  }
});

passwordInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;
  const errorCondition = isEmpty(value) || !isValidPassword(value);

  if (errorCondition) {
    input.classList.add("error");
    passwordErrorMsg.textContent = isEmpty(value)
      ? "비밀번호를 입력해주세요"
      : "비밀번호를 8자 이상 입력해주세요";
    input.after(passwordErrorMsg);
  } else {
    input.classList.remove("error");
    passwordErrorMsg.remove();
  }
});

function updateSignUpButton() {
  const validFormConditions =
    !isEmpty(emailInput.value) &&
    isValidEmail(emailInput.value) &&
    !isEmpty(passwordInput.value) &&
    isValidPassword(passwordInput.value);

  if (validFormConditions) submitBtn.disabled = false;
  else submitBtn.disabled = true;
}

updateSignUpButton();
emailInput.addEventListener("input", updateSignUpButton);
passwordInput.addEventListener("input", updateSignUpButton);
// TODO: input / change 비교

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/items.html";
});
