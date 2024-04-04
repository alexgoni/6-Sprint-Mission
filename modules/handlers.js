import { PW_EYE } from "./constants.js";

export const handleInvalid = ({ input, errorMsgNode, errorMsg }) => {
  input.classList.add("error");
  errorMsgNode.textContent = errorMsg;
};

export const handleValid = ({ input, errorMsgNode }) => {
  input.classList.remove("error");
  errorMsgNode.textContent = "";
};

export const handleToggleIcon = (inputNode, icon) => {
  const type =
    inputNode.getAttribute("type") === "password" ? "text" : "password";
  const img =
    inputNode.getAttribute("type") === "password" ? PW_EYE.open : PW_EYE.close;

  inputNode.setAttribute("type", type);
  icon.src = img;
};
