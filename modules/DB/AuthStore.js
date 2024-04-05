export default class AuthStore {
  #email;
  #password;
  #submitBtn;
  #username;
  #pwConfirm;

  constructor(formType) {
    this.formType = formType;
  }

  set saveDOMNodes(node) {
    this.#email = node.email;
    this.#password = node.password;
    this.#submitBtn = node.submitBtn;

    if (this.formType === "signup") {
      this.#username = node.username;
      this.#pwConfirm = node.pwConfirm;
    }
  }

  get readDOMNodes() {
    const result = {
      email: this.#email,
      password: this.#password,
      submitBtn: this.#submitBtn,
    };

    if (this.formType === "signup") {
      result.username = this.#username;
      result.pwConfirm = this.#pwConfirm;
    }

    return result;
  }
}
