// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task of calculates a value

// 1. Function declaration
// function name (param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function log(message) {
	console.log(message);
}
log('Hello');

// 2. Parameters
// Primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
	obj.name = 'coder';
}
const amy = {name: 'amy'};
changeName(amy);
console.log(amy);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
	console.log(`${message} by ${from}`);
}
showMessage('Hi!', 'yeongeun');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}

	for (const arg of args) {
		console.log(arg);
	}

	args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding');

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
	let message = 'hello';
	console.log(message); // local variable
	console.log(globalMessage);
	function printAnother() {
		console.log(message);
		let childMessage = 'hello, child.';
		console.log(childMessage);
	}
	printAnother();
}
printMessage();

// 6. Return value
function sum(a, b) {
	return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic...
	}
}

// good
function upgradeUser(user) {
	if (user.point <= 10) {
		return;
	}

	//long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() {
	console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
};

// anonymous function
const Yes = function() {
	console.log('yes!');
};

// named function
// better debugging in debugger;s stack traces
// recursions
const No = function printNo() {
	console.log('no!');
	//printNo();
};

randomQuiz('hate you', Yes, No);
randomQuiz('love you', Yes, No);


// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
	// do something more
	return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function IIFE() {
	console.log('IIFE');
})();


// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
	command(a, b);
}

const add = () => a + b;
const substract = () => a - b;
const divide = () => a / b;
const multiply = () => a * b;
const remainder = () => a % b;




