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
		// if (value < 0) {
		// 	throw Error('age can not be negative');
		// }
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

	// get privateField() {
	// 	return this.#privateField;
	// }
}
const experiment = new Experiment(10);
console.log(experiment.privateField);

// 4. Static properties and methos
// Too soon!
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined
console.log(Article.publisher); //Dream Coding
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color of`);
	}

	getArea() {
		return this.width * this.height;
	}
}

class Rectangle extends Shape {}
class Triangle extends Shape {
	draw() {
		super.draw();
		console.log('△');
	}

	getArea() {
		return (this.width * this.height) / 2;
	}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);








