'use strict';

let flag = false;
let moreBtn = document.querySelector('.moreBtn');
moreBtn.addEventListener('click', () => {
	moreBtn.classList.toggle('clicked');
	console.log(moreBtn.childNodes[1].className);
	let viewsAndDescription = document.querySelector('.viewsAndDescription');
	if (flag) {
		viewsAndDescription.style.display = 'block';
		flag = false;
	} else {
		moreBtn.childNodes[1].className = 'fas fa-caret-down';
		viewsAndDescription.style.display = 'none';
		flag = true;
	}
});