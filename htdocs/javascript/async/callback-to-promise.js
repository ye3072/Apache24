'use strict';

class UserStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (
					(id === 'amy' && password === 'hayang') ||
					(id === 'coder' && password === 'dream')
				) {
					resolve(id);
				} else {
					reject(new Error('not found'));
				}
			}, 2000);
		});
	}

	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (user === 'amy') {
					resolve({name: 'amy', role: 'admin'});
				} else {
					reject(new Error('no access'));
				}
			}, 1000);
		});
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter you password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.catch(console.log)
.then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);














