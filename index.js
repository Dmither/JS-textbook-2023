function slow(x) {
	console.log(`Call from ${x}`);
	return x;
}

function cachingDecorator(func) {
	let cache = new Map();

	return function(x) {
		if (cache.has(x)) {
			return cache.get(x);
		}

		let result = func(x);

		cache.set(x, result);
		return result;
	};
}

let cachingSlow = cachingDecorator(slow);

console.log(cachingSlow(1));
console.log(cachingSlow(1));
console.log(cachingSlow(1));
console.log(cachingSlow(2));
console.log(cachingSlow(2));