// Example of forEach()
const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => console.log(fruit));
// apple
// banana
// orange

// Example of filter()
const numbers = [10, 25, 30, 45, 50];
const above30 = numbers.filter(num => num > 30);
console.log(above30); // [45, 50]

// Example of find()
const ages = [15, 18, 21, 25];
const firstAdult = ages.find(age => age >= 18);
console.log(firstAdult); // 18

// Example of reduce()
const nums = [1, 2, 3, 4];
const sum = nums.reduce((total, n) => total + n, 0);
console.log(sum); // 10

// Example of some() and every()
const scores = [45, 60, 80, 90];

console.log(scores.some(score => score > 85)); // true (90 > 85)
console.log(scores.every(score => score >= 40)); // true (all >= 40)