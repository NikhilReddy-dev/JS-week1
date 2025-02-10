let prompt = require("prompt-sync")();

while (true) {
  let userInput = Number(prompt("Enter your Number (type 0 to exit): "));
  if (isNaN(userInput)) {
    console.log("Invalid input ! Please enter a number ❌");
  } else {
    if (userInput > 0) {
      console.log(`You entered: ${userInput}`);
    } else if (userInput === 0) {
      console.log("End");
      break;
    } else {
      console.log("Negative numbers are not allowed ❌");
    }
  }
}

//   if (userInput > 0) {
//     console.log(`You entered: ${userInput}`);
//   } else if (userInput === 0) {
//     console.log("End");
//     break;
//   } else if (userInput !== Number || userInput < 0) {
//     console.log("Invalid input ! Please enter a number ❌");
//   } else {
//     console.log("Strings and special characters are not allowed ❌");
//   }
// }
