console.log("👇...................OUTPUT................👇");
let prompt = require("prompt-sync")();

while (true) {
  let userInput = Number(prompt("Enter a number: "));
  switch (userInput) {
    case 1:
      console.log("The day is Monday ✅");
      break;
    case 2:
      console.log("The day is Tuesday  ✅");
      break;
    case 3:
      console.log("The day is Wednesday ✅");
      break;
    case 4:
      console.log("The day is Thursday ✅");
      break;
    case 5:
      console.log("The day is Friday ✅");
      break;
    case 6:
      console.log("The day is Saturday ✅");
      break;
    case 7:
      console.log("The day is Sunday ✅");
      break;
    default:
      if (isNaN(userInput)) {
        console.log("Strings and special characters are not allowed ❌");
        continue;
      } else {
        console.log("Invalid input. Please enter a number between 1 and 7");
        continue;
      }
  }
  break;
}
