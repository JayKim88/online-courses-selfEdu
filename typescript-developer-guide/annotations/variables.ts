let apples: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMatch: null = null;

let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array;
let color: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, true];

//Classes
class Car {}

let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
