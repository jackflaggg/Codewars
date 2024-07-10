// If you can't sleep, just count sheep!!
//
// Task:
// 	Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep =  (num) => {
	return num === 0 ? '' : Array
		.from({length: num}, (_, x) => x+1)
		.reduce((acc, b) => acc+ b + ` sheep...`, 0);
}

console.log(countSheep(0));