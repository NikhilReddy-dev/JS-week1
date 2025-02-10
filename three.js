let prompt = require("prompt-sync")();
let userInput = Number(prompt("Enter your Number: "));
if (userInput > 0) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(userInput); i++) {
    if (userInput % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`The number ${userInput} is a prime number`);
  } else {
    console.log(`The number ${userInput} is not a prime number`);
  }
} else {
  console.log(`The number ${userInput} is not a prime number`);
}
