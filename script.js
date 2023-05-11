class OutOfRangeError extends Error {
  constructor(arg) {
    super();
    this.name = "OutOfRangeError";
    this.message = `Expression should only consist of integers and +-/* characters and not ${arg}`;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = "InvalidExprError";
    this.message = "Expression should not have an invalid combination of expression";
  }
}