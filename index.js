let date = new Date();

function getDateAgo(date, days) {
	let newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate;
}

console.log(getDateAgo(date, 366));
