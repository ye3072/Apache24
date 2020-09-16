'use strict';
{
	const fruits = ['apple', 'banana', 'orange'];
	const result = fruits.join();
	console.log(result);
}

{
	const fruits = '🍎,🍌,🍋,🍒';
	const result = fruits.split(',');
	console.log(result);
}

{
	const array = [1, 2, 3, 4, 5];
	const result = array.reverse();
	console.log(result);
}

{
	const array = [1, 2, 3, 4, 5];
	const result = array.slice(0, 2);
	console.log(result);
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}

const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88),
]

{
	const result = students.find((student) => student.score === 90);
	console.log(result);
}

{
	const result = students.filter((student) => student.enrolled);
	console.log(result);
}

{
	const result = students.map((student) => student.score);
	console.log(result);
}

// check if there is a student with the score lower than 50
{
	const result = students.some((student) => student.score < 50);
	console.log(result);

	const result2 = students.every((student) => student.score < 50);
	console.log(result2);
}

// compute studens average score
{
	const result = students.reduce((prev, curr) => prev + curr.score, 0)
	console.log(result);
}

// make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'
{
	const result = students
	.map((student) => student.score)
	.filter((score) => score >= 50)
	.join();
	console.log(result);
}

{
	const result = students
	.map((student) => student.score)
	.sort((a, b) => b - a)
	.join();
	console.log(result);
}




















