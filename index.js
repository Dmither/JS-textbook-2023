// function fetchUserById(id) {
// 	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
// 		.then(response => response.json())
// 		.then(user => user);
// }

// async function sayHello() {
// 	const user = await fetchUserById(1);
// 	console.log(`Hello, ${user.name}`);
// }

// sayHello();

// function loadScript(src) {
// 	return new Promise((resolve, reject) => {
// 		let script = document.createElement("script");
// 		script.src = src;

// 		script.onload = () => resolve(script);

// 		document.body.append(script);
// 	});
// }

// (async function () {
// 	await loadScript("./asyncScript.js");
// 	asyncFunction();
// })();

// async function fetchUser(id) {
//   let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//   let user = await response.json()
//   console.log(user.name)
// }

// fetchUser(3)

let usersBlock = document.querySelector(".users");
let usersFilter = document.querySelector(".users-filter");
let usersItems = [];

async function getUsers() {
	let response = await fetch(
		"https://jsonplaceholder.typicode.com/users"
	);
	return response.json();
}

(async function () {
	let users = await getUsers();
	createUsersList(users, usersBlock);
})();

usersFilter.addEventListener("keyup", function (event) {
	usersItems.forEach(item => {
		if (
			item.innerHTML.toLowerCase().includes(this.value.toLowerCase())
		) {
			item.hidden = false;
		} else {
			item.hidden = true;
		}
	});
});

function createUsersList(users, place) {
	users.forEach(user => {
		let filterValue = usersFilter.value.toLowerCase();
		let userName = document.createElement("li");
		userName.innerHTML = user.name;
		if (!userName.innerHTML.toLowerCase().includes(filterValue)) {
			userName.hidden = true;
		}
		usersItems.push(userName);
		place.append(userName);
	});
}
