// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.
//
// 	Make sure that your function does not return a false positive by only checking the day.

function isToday(date) {
	return new Date().toDateString() === new Date(date).toDateString()
}

console.log(isToday('2024-06-08'))