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

// When to use annotations
// 1) Function that returns the 'any' type. typescript can't check for correct property references(추론이 불가능할 경우)
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

const makeParse = (v: any) => JSON.parse(v);

console.log(makeParse("false")); //any type
console.log(makeParse("4")); //any type
console.log(makeParse('{"value": 5}')); //any type
console.log(makeParse('{"name": "alex"}')); //any type

// 2) when we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variables whose types cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
