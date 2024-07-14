// Given an array of integers.
//
// 	Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
// 	If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
	if (!input || !input.length) {
		return [];
	}

	return [input.filter(item => item > 0 && typeof item === 'number').length, input.filter(item => item < 0 && typeof item === 'number').reduce((acc, curr) => acc + curr, 0)];
}