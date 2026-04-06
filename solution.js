function calculate(a, op, b) {
  const x = Number(a);
  const y = Number(b);

  switch (op) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      if (y === 0) return 0; // wrong: should throw
      return x / y;
    default:
      return null; // wrong: should throw
  }
}

module.exports = { calculate };
