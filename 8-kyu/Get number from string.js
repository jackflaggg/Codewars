function getNumberFromString(s) {
	const numberStr = s.match(/\d/g);
	if (!numberStr) {
		return 0;
	}
	return Number(numberStr.join(''));
}

console.log(getNumberFromString("this is number: 7")); // 7
console.log(getNumberFromString("100helloworld")); // 100