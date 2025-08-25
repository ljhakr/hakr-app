export function greetTest1(name: string): string {
  return `Helloß098, ${name}!`;
}

export function helloThere(name: string): string {
  return `Hello there, ${name}!`;
}
console.log(helloThere("My name is Harry!"));

const user: { name: string; age: number } = {
  name: "John",
  age: 30,
};
console.log(`User name is: ${user.name}, age is: ${user.age}`); // Output: User name is: John, age is: 30



const multiply: (x: number, y: number) => number = function (x: number, y:number): number {
  return x * y;
}
console.log(`Multiplication result is: ${multiply(5, 10)}`); // Output: Multiplication result is: 50


enum Color {
  Red, // 0 by default
  Green, // 1
  Blue // 2
}
const myColor: Color = Color.Green; // myColor will be 1
console.log(`My color is: ${myColor}`); // Output: My color is: 1

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
const requestStatus: StatusCode = StatusCode.Success; // requestStatus will be 200
console.log(`Request status code is: ${requestStatus}`); // Output: Request status code is: 200

