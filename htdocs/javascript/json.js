let rabbit = {
	name: 'tory',
	color: 'white',
	size: null,
	birthDate: new Date(),
	jump: () => {
		console.log(`I can jump!`);
	}
}

// 1. Object to JSON
let json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'amy' : value;
});
console.log(json);

// 2. JSON to Object
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => key === 'birthDate' ? new Date(value) : value);
console.log(obj);

rabbit.jump();

