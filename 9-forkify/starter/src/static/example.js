// eslint-disable-next-line strict
'use strict';

const username = 'freddy';
typeof username === 'string';

if (!('serviceWorker' in navigator)) {
	// you have an old browser :-(
}

const greeting = 'hello';
console.log(`${greeting} world!`);
[1, 2, 3].forEach(x => console.log(x));