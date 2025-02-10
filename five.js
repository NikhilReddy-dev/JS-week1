let prompt = require("prompt-sync")();
while (true) {
  let a = Number(prompt("Enter your value of a: "));
  let b = Number(prompt("Enter your value of b: "));
  let c = Number(prompt("Enter your value of c: "));

  function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
  }

  let type;
  switch (true) {
    case !isValidTriangle(a, b, c):
      type = "Invalid Triangle";
      break;
    case a === b && b === c:
      type = "Equilateral Triangle";
      break;
    case a === b || b === c || a === c:
      type = "Isosceles Triangle";
      break;
    default:
      type = "Scalene Triangle";
  }

  console.log(type);
}
