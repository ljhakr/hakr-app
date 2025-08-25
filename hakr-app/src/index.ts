//if you want to test this file with node.js ( prompt: npx tsc / node dist/index.js), use .js extension in the import statement

import { greetTest1 } from "./testOne.js"

const testOne: string = greetTest1("mmmmmWorld");
console.log(testOne);



function greet(name: string): string {
  return `aaaHello, ${name}!`;
}
const message: string = greet("üüüüüüüWorld");
console.log(message);
