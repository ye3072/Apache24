// 1. Use Strict
	// added in ES 5
	// use this for Vanila Javascript
	'use strict';

	// 2. Variable, r/w(read/write)
	// let (added in ECMA Script 6)
	let globalName = 'global name';
	{
		let name = 'ellie';
		console.log(name); //allie

		name = 'hello';
		console.log(name); //hello
		console.log(globalName); //global name
	}

	console.log('name: ', name); //name: 
	console.log(globalName); //global name

	// var (don't ever use this!)
	// var hoistng (move declaration from bottom to top)
	// has no block scope
	{
		age = 4;
		var age;
	}
	console.log(age); //4

	// 3. Constant, r(read only)
	// use const whenever possible.
	// only use let if variable needs to change.
	const daysInWeek = 7;
	const maxNumber = 5;

	// Note!
	// Immutable data types: premitive types, frozen objects (i.e., object.freeze())
	// Mutable data types: all objects by default are mutable in JS
	// favor immutable data type always for a few reasons:
	// 	- security
	// 	- thread safety
	// 	- reduce human mistakes

	// 4. Variable types
	// primitive, single item: number, string, boolean, null, undefined, symbol
	// object, box container
	// function, first-class function 
	const count = 17; // integer
	const size = 17.1; // decimal number
	console.log(`value: ${count}, type: ${typeof count}`);
	console.log(`value: ${size}, type: ${typeof size}`);

	// number - special numeric values: infinity, -infinity, NaN
	const inf = 1 / 0;
	const n_inf = -1 / 0;
	const nAn = 'not a number' / 2;
	console.log(inf);
	console.log(n_inf);
	console.log(nAn);
	console.log(Number.MAX_SAFE_INTEGER);

	// boolean
	// false: 0, null, undefined, NaN, ''
	// true: any other value
	let test = null;
	if (test) {
		console.log('true');
	} else {
		console.log('false');
	}

	// 5. Dynamic typing: dynamically typed language
	let text = 'hello';
	console.log(text.charAt(0));
	console.log(`value: ${text}, type: ${typeof text}`);
	text = 1;
	console.log(`value: ${text}, type: ${typeof text}`);
	text = '7' + 5;
	console.log(`value: ${text}, type: ${typeof text}`);
	text = '7' / 5;
	console.log(`value: ${text}, type: ${typeof text}`);
	console.log(text.charAt(0));