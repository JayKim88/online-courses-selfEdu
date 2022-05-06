const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camero"]];

//Help with inference with extracting values
const aAar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(10);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];

importantDates.push("2030-10-10");
importantDates.push(new Date());
