// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
	const setArr = new Set(a);
	console.log([...setArr]);
	return [...new Set(a.concat(b))].sort((a, b) => a - b)
}
console.log(mergeArrays([2, 4, 8], [2, 4, 6]))