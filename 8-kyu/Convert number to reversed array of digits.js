function digitize(n) {
	return String(n).split('').reverse().map(elem => Number(elem));
}

console.log(digitize(52321));