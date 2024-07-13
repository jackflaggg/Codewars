// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
// 	Mind the input validation.

function sumArray(array) {
	if (!Array.isArray(array) || array.length <= 1) {
		return 0;
	}
	const sortedArray = array.slice().sort((a, b) => a - b);
	return sortedArray.slice(1, sortedArray.length-1).reduce((a, b) => a + b, 0);
}

console.log(sumArray([ 0, 1, 6, 10, 10 ]));