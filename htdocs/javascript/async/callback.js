'use strict';

// Javascript is synchronous
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

function show_own_props(obj, objName) {
  var result = "";
    
  for (var prop in obj) {
    if( obj.hasOwnProperty( prop ) ) {
      result += objName + "." + prop + " = " + obj[prop] + "\n";
    } 
  }
    
  return result;
}

let o = new ColoredTriangle();
//alert(show_own_props(o, "o")); /* alerts: o.color = red */ 


// Synchronous callback
function printImmediately(print) {
	print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if (
				(id === 'amy' && password === 'hayang') ||
				(id === 'coder' && password === 'dream')
			) {
				onSuccess(id);
			} else {
				onError(new Error('not found'));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (user === 'amy') {
				onSuccess({name: 'amy', role: 'admin'});
			} else {
				onError(new Error('no access'));
			}
		}, 1000);
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter you password');
userStorage.loginUser(
	id, 
	password, 
	user => {
		userStorage.getRoles(
			user,
			userWithRole => {
				alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
			},
			error => {
				console.log(error);
			}
		)
	}, 
	error => {console.log(error)}
);














