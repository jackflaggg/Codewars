// Remove n exclamation marks in the sentence from left to right. n is positive integer.

function remove(s, n) {
	let result = '';
	s.split('').forEach(elem => {
		if (elem !== '!' || n <= 0) {
			result += elem;
		} else {
			n--;
		}
	});
	return result;
}

console.log(remove("!Hi",1))