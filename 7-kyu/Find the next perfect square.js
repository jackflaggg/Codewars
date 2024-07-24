function findNextSquare(sq) {
	if (sq > 0 && (sq & (sq - 1)) === 0) {
		return Math.pow(Math.sqrt(sq) + 1, 2)
	}
	return -1;
}

console.log(findNextSquare(155));