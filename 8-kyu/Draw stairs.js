// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

function drawStairs(n) {
	return Array
		.from({ length: n }, (v, k) => ' '.repeat(k) + 'I')
		.join('\n')
}

console.log(drawStairs(4))

// function drawStairs2(n) {
// 	let str = '';
// 	for (let i = 0; i < n; i++) {
// 		str += n + n*i
// 	}
// 	return str
// }
//
// console.log(drawStairs2(4))