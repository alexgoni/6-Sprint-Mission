import { ERRORS } from "../lib/constants.js";
import {
  isEmpty,
  isEqualString,
  isValidEmail,
  isValidPassword,
} from "../lib/validate.js";

export default class AuthChecker {
  #email;
  #password;
  #submitBtn;
  #username;
  #pwConfirm;

  set saveDOMNodes(node) {
    const {
      email,
      password,
      submitBtn,
      username = null,
      pwConfirm = null,
    } = node;

    this.#email = email;
    this.#password = password;
    this.#submitBtn = submitBtn;
    this.#username = username;
    this.#pwConfirm = pwConfirm;
  }

  checkEmailInput() {
    const { input, errorMsgNode } = this.#email;
    const { value } = input;

    if (isEmpty(value)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.EMPTY_EMAIL);
    } else if (!isValidEmail(value)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.INVALID_EMAIL);
    } else this.#handleValid(input, errorMsgNode);
  }

  checkPasswordInput() {
    const { input, errorMsgNode } = this.#password;
    const { value } = input;

    if (isEmpty(value)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.EMPTY_PW);
    } else if (!isValidPassword(value)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.INVALID_PW);
    } else this.#handleValid(input, errorMsgNode);
  }

  checkUsernameInput() {
    const { input, errorMsgNode } = this.#username;
    const { value } = input;

    if (isEmpty(value)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.EMPTY_USERNAME);
    } else this.#handleValid(input, errorMsgNode);
  }

  checkPWConfirmInput() {
    const { input, errorMsgNode } = this.#pwConfirm;
    const password = this.#password.input.value;
    const pwConfirm = input.value;

    if (!isEqualString(password, pwConfirm)) {
      this.#handleInvalid(input, errorMsgNode, ERRORS.PW_NOT_MATCHED);
    } else this.#handleValid(input, errorMsgNode);
  }

  updateLoginBtn() {
    const email = this.#email.input.value;
    const password = this.#password.input.value;

    const emailValid = !isEmpty(email) && isValidEmail(email);
    const passwordValid = !isEmpty(password) && isValidPassword(password);

    this.#submitBtn.disabled = !(emailValid && passwordValid);
  }

  updateSignupBtn() {
    const email = this.#email.input.value;
    const password = this.#password.input.value;
    const username = this.#username.input.value;
    const pwConfirm = this.#pwConfirm.input.value;

    const emailValid = !isEmpty(email) && isValidEmail(email);
    const passwordValid = !isEmpty(password) && isValidPassword(password);
    const usernameValid = !isEmpty(username);
    const pwConfirmValid = isEqualString(password, pwConfirm);

    this.#submitBtn.disabled = !(
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
