'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
	console.log(person.name);
	console.log(person.age);
}

const amy = {name: 'amy', age: 30};
print(amy);

// with JavaScript magic (dynamically typed language)
// can add properties later
amy.hasJob = true;
console.log(amy.hasJob);

delete amy.hasJob;
console.log(amy.hasJob);

// 2. Computed properties
// key should be always string
console.log(amy.name);
console.log(amy['name']);

function printValue(obj, key) {
	console.log(obj[key]);
}
printValue(amy, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('amy', 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
	// this = {};
	this.name = name;
	this.age = age;
	// return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in amy);
console.log('age' in amy);
console.log('random' in amy);

// 6. for..in vs for..of
// for (key in obj)
for (const key in amy) {
	console.log(`${key} of amy: ${amy[key]}`);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}
for (const value of array) {
	console.log(value);
}

console.clear();

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'amy', age: '30' };
const user2 = user;
//user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (const key in user) {
	user3[key] = user[key];
}
console.log(user3);














