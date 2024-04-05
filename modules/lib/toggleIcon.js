import { PW_EYE } from "./constants.js";

export default function toggleIcon(inputNode, icon) {
  const type =
    inputNode.getAttribute("type") === "password" ? "text" : "password";
  const img =
    inputNode.getAttribute("type") === "password" ? PW_EYE.open : PW_EYE.close;

  inputNode.setAttribute("type", type);
  icon.src = img;
}
