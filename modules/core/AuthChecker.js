import { ERRORS } from "../lib/constants.js";
import {
  isEmpty,
  isEqualString,
  isValidEmail,
  isValidPassword,
} from "../lib/validate.js";

export default class AuthChecker {
  #nodes;

  constructor(store) {
    this.store = store;
    this.#nodes = this.store.readDOMNodes;
  }

  checkEmailInput() {
    const { input, errorMsgNode } = this.#nodes.email;
    const { value } = input;

    if (isEmpty(value)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.EMPTY_EMAIL);
    } else if (!isValidEmail(value)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.INVALID_EMAIL);
    } else this.#handleValid(input, errorMsgNode);
  }

  checkPasswordInput() {
    const { input, errorMsgNode } = this.#nodes.password;
    const { value } = input;

    if (isEmpty(value)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.EMPTY_PW);
    } else if (!isValidPassword(value)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.INVALID_EMAIL);
    } else this.#handleValid(input, errorMsgNode);
  }

  checkUsernameInput() {
    const { input, errorMsgNode } = this.#nodes.username;
    const { value } = input;

    if (isEmpty(value)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.EMPTY_USERNAME);
    } else this.#handleValid(input, errorMsgNode);
  }

  checkPWConfirmInput() {
    const { input, errorMsgNode } = this.#nodes.pwConfirm;
    const password = this.#nodes.password.input.value;
    const pwConfirm = input.value;

    if (!isEqualString(password, pwConfirm)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.PW_NOT_MATCHED);
    } else this.#handleValid(input, errorMsgNode);
  }

  updateLoginBtn() {
    const email = this.#nodes.email.input.value;
    const password = this.#nodes.password.input.value;

    const emailValid = !isEmpty(email) && isValidEmail(email);
    const passwordValid = !isEmpty(password) && isValidPassword(password);

    this.#nodes.submitBtn.disabled = !(emailValid && passwordValid);
  }

  updateSignupBtn() {
    const email = this.#nodes.email.input.value;
    const password = this.#nodes.password.input.value;
    const username = this.#nodes.username.input.value;
    const pwConfirm = this.#nodes.pwConfirm.input.value;

    const emailValid = !isEmpty(email) && isValidEmail(email);
    const passwordValid = !isEmpty(password) && isValidPassword(password);
    const usernameValid = !isEmpty(username);
    const pwConfirmValid = isEqualString(password, pwConfirm);

    this.#nodes.submitBtn.disabled = !(
      emailValid &&
      passwordValid &&
      usernameValid &&
      pwConfirmValid
    );
  }

  #handleInvalid(input, errorMsgNode, errorMsg) {
    input.classList.add("error");
    errorMsgNode.textContent = errorMsg;
  }

  #handleValid(input, errorMsgNode) {
    input.classList.remove("error");
    errorMsgNode.textContent = "";
  }
}
