// Write a function which calculates the average of the numbers in a given list.
//
// 	Note: Empty arrays should return 0.

function findAverage(array) {
	return !array.length ? 0 : array.reduce((acc, item) => acc + item, 0)/array.length;
}

console.log(findAverage([]));