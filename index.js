{
	let worker = {
		slow(min, max) {
			console.log(`Call with ${min}, ${max}`);
			return min + max;
		},
	};

	function cachingDecorator(func, hash) {
		let cache = new Map();
		return function () {
			let key = hash(arguments);
			if (cache.has(key)) {
				return cache.get(key);
			}

			let result = func.apply(this, arguments);

			cache.set(key, result);
			return result;
		};
	}

	function hash(args) {
		return [...args].join();
	}

	worker.slowCached = cachingDecorator(worker.slow, hash);

	// console.log(worker.slowCached(3, 5))
	// console.log(worker.slowCached(3, 5))
}

{
	function spy(func) {
		func.calls = [];

		return function () {
			func.calls.push([...arguments]);
			return work.apply(this, arguments);
		};
	}

	function work(a, b) {
		console.log(a + b);
	}

	let workSpy = spy(work);

	// workSpy(1, 2)
	// workSpy(4, 5)

	// for (let args of work.calls) {
	// 	console.log("Call: " + args.join(", "))
	// }
}

{
	function delay(func, ms) {
		return function () {
			setTimeout(() => func.apply(this, arguments), ms);
		};
	}

	function f(x) {
		console.log(x);
	}

	let f1000 = delay(f, 1000);
	let f2000 = delay(f, 2000);

	// f1000("test1");
	// f2000("test2");
}

{
	function debounce(func, ms) {
		let counter;
		return function () {
			if (counter) clearTimeout(counter);
			counter = setTimeout(() => {
				func.apply(this, arguments);
			}, ms);
		};
	}

	function print(x) {
		console.log(x);
	}

	let f = debounce(print, 1000);

	// f("a");
	// setTimeout(() => f("b"), 200);
	// setTimeout(() => f("c"), 500);
}

{
	function throttle(func, ms) {
		let flag = true;

		return function() {
			if (flag) {
				flag = false;
				func.apply(this, arguments);
				setTimeout(() => {flag = true}, ms)
			}
		}
	}

	function print(x) {
		console.log(x);
	}

	let printThrottle = throttle(print, 1000);

	for (let i = 0; i < 100; i++) {
		setTimeout(printThrottle, i * 100, i)
	}
}