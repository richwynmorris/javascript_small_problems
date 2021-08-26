let rlSync = require('readline-sync');

const oneSquareMeter = 10.7639;

let length = rlSync.question("Enter the length of the room in meters:");
let width = rlSync.question("Enter the width of the room in meters:");

let squareMeters = length * width;
let squareFeet = squareMeters * oneSquareMeter;

console.log(`The area of the room is ${squareMeters} square meters (${squareFeet.toFixed(2)} square feet).`);
