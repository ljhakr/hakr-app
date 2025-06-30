import { greetTest1 } from "./testOne"

const testOne: string = greetTest1("mmmmmWorld");
console.log(testOne);



function greet(name: string): string {
  return `aaaHello, ${name}!`;
}
const message: string = greet("üüüüüüüWorld");
console.log(message);
