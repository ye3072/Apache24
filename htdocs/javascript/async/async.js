'use strict';

// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
	return 'amy';
}
/*
  - 위와 동일
function fetchUser() {
	return new Promise((resolve, reject) => {
		resolve('amy');
	})
}
*/
const user = fetchUser();
user.then(console.log);

// 2. await
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(2000);
	return '🍒';
}

async function getBanana() {
	await delay(1000);
	return '🌸';
}

async function pickFruits() {
	try {
		// - serialization (2000ms)
		// const apple = await getApple();
		// const banana = await getBanana();

		// - parallelization (1000ms)
		const applePromise = getApple();
		const bananaPromise = getBanana();
		const apple = await applePromise;
		const banana = await bananaPromise;
		return `${apple} + ${banana}`;
	} catch {
		console.error('pickFruits Error');
	}
}

/*
  - 위와 동일
function pickFruits() {
	return getApple()
	.then(apple => {
		return getBanana()
		.then(banana => `${apple} + ${banana}`);
	});
}
*/

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
	return Promise.all([getApple(), getBanana()])
		.then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
	return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);






