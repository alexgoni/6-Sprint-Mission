import { isEmpty, isValidEmail } from "../modules/auth.js";

const emailInput = document.querySelector("#email");
const errorMsg = document.createElement("span");
errorMsg.classList.add("error-msg");

emailInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;
  const errorCondition = isEmpty(value) || !isValidEmail(value);

  if (errorCondition) {
    input.classList.add("error");
    errorMsg.textContent = isEmpty(value)
      ? "이메일을 입력해주세요"
      : "잘못된 이메일입니다";
    input.after(errorMsg);
  } else {
    input.classList.remove("error");
    errorMsg.remove();
  }
});
