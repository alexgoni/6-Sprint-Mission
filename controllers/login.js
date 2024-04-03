import { isEmpty, isValidEmail } from "../modules/auth.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorInputMsg = document.createElement("span");
const passwordInputMsg = document.createElement("span");
errorInputMsg.classList.add("error-msg");
passwordInputMsg.classList.add("error-msg");

emailInput.addEventListener("focusout", (e) => {
  const input = e.currentTarget;
  const { value } = input;
  const errorCondition = isEmpty(value) || !isValidEmail(value);

  if (errorCondition) {
    input.classList.add("error");
    errorInputMsg.textContent = isEmpty(value)
      ? "이메일을 입력해주세요"
      : "잘못된 이메일입니다";
    input.after(errorInputMsg);
  } else {
    input.classList.remove("error");
    errorInputMsg.remove();
  }
});

// passwordInput.addEventListener("focusout", (e) => {
//   const input = e.currentTarget;
//   const { value } = input;
//   const errorCondition = isEmpty(value) || !isValidEmail(value);

//   if (errorCondition) {
//     input.classList.add("error");
//     passwordInputMsg.textContent = isEmpty(value)
//       ? "비밀번호를 입력해주세요"
//       : "비밀번호를 8자 이상 입력해주세요";
//     input.after(passwordInputMsg);
//   } else {
//     input.classList.remove("error");
//     passwordInputMsg.remove();
//   }
// });
