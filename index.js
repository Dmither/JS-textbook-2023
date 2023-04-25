function sum(a) {
	let csum = a;
	function f(b) {
		csum += b;
		return f;
	};

	f.toString = function() {
		return csum;
	}

	return f
}

console.log(sum(2)(3)(4)(5).toString());
