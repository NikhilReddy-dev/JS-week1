let prompt = require("prompt-sync")();
let userName = prompt("Enter your name: ");
console.log(`Hey ${userName} 👋 select a shape from the following options:`);
let options = ["Circle", "Rectangle", "Triangle", "Square"];
options = options.map((option) => option.toLowerCase());
for (let i = 0; i < options.length; i++) {
  console.log(`${options[i]}`);
}

while (true) {
  let userOption = String(prompt("Enter the shape: ")).toLowerCase();

  if (options.includes(userOption)) {
    if (userOption === "circle") {
      let raidus = Number(prompt("Enter the radius of the circle: "));
      let area = Math.PI * raidus * raidus;
      console.log(`The area of the circle is ${area.toFixed(2)} 🟢`);
    } else if (userOption === "rectangle") {
      let length = Number(prompt("Enter the length of the rectangle: "));
      let width = Number(prompt("Enter the width of the rectangle: "));
      let area = length * width;
      console.log(`The area of the rectangle is ${area} ⬜`);
    } else if (userOption === "triangle") {
      let base = Number(prompt("Enter the base of the triangle: "));
      let height = Number(prompt("Enter the height of the triangle: "));
      let area = 0.5 * base * height;
      console.log(`The area of the triangle is ${area} 🔺`);
    } else if (userOption === "square") {
      let side = Number(prompt("Enter the side of the square: ◼️"));
      let area = side * side;
      console.log(`The area of the square is ${area}`);
    }
  } else {
    console.log("Invalid shape selected. Please try again ❌");
  }

  let continueInput = prompt(
    "Do you want to enter another shape? (yes/no): "
  ).toLowerCase();
  if (continueInput !== "yes") {
    break;
  }
}
