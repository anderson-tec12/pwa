class User {
  constructor() {
    this.name = "";
    this.genare = "";
  }

  validName() {
    if (
      typeof this.name == "string" &&
      this.name.length !== 0 &&
      this.name.length <= 40
    ) {
      return false;
    }

    return true;
  }

  validGenare() {
    return ["m", "f"].some((item) => item === this.genare);
  }
}

export default User;
