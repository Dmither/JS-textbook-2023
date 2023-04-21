let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

function printList(list) {
	let arr = [list.value];
	let current = list;
  while (current.next) {
    current = current.next;
    arr.push(current.value);
  }
  return arr;
}

console.log(printList(list));

function recursList(list) {
  if (!list.next) {
    return [list.value]
  } else {
    return recursList(list.next).concat(list.value);
  }
}

console.log(recursList(list));