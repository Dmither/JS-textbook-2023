let counter = 0;

label1: for (let i = 0; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
    counter++;
		if (i >= 5 && j >= 3) break label1;
	}
}
console.log(counter)