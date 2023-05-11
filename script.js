function evaluate() {
  const input = document.getElementById("expression").value.trim();
  const validChars = /^[-+*/\d\s]+$/;

  if (!validChars.test(input)) {
    throw new OutOfRangeError(input);
  }

  const result = eval(input);

  if (!Number.isInteger(result)) {
    throw new InvalidExprError();
  }

  alert(`Result: ${result}`);
}

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
    this.message = "Expression should only evaluate addition, subtraction, multiplication, division of positive and negative integers";
  }
}
