'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
	// constructor
	constructor(name, age) {
		//fields
		this.name = name;
		this.age = age;
	}

	//methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

const amy = new Person('amy', 30);
amy.speak();

// 2. Getter and setter
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	get age() {
		return this._age;
	}

	set age(value) {
		if (value < 0) {
			throw Error('age can not be negative');
		}
		this._age = value < 0 ? 0 : value;
	}
}

const user1 = new User('amy', 'lee', 1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
	#privateField;

	constructor(privateField) {
		this.#privateField = privateField;
	}

	get privateField() {
		return this.#privateField;
	}
}
const experiment = new Experiment(10);
console.log(experiment.privateField);







