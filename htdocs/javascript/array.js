'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [];

// 2. Index position
const fruits = ['banana', 'apple'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

// 3. Looping over an array
// print all fruits
fruits.forEach((fruit) => {
	console.log(fruit);
});
// a. for
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
	console.log(fruit);
}

// 4. Addition, deletion, etc.
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);
// pop: remove an item from the end

fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('lemon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
let push = fruits.push('🍓', '🍋', '🍏', '🍍');
console.log(push);
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

const fruits2 = ['🍈', '🍉', '🍒'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits.indexOf('🍏'));
console.log(fruits.includes('🍏'));










