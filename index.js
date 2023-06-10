async function func() {
	let promise = new Promise((res, rej) => {
		res(1);
	});
	promise.then(console.log);
}

func();

async function func2() {
	let promise = new Promise((res, rej) => {
		res(1);
	});
	console.log(await promise);
}
func2();

// =============================================

async function loadJson(url) {
  let response = await fetch(url);
	if (response.status == 200) {
		return await response.json();
	}
	
	throw new Error(response.status);

}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404