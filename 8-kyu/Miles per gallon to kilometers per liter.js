function converter (mpg) {
	return Number((mpg / 4.54609188 * 1.609344 ).toFixed(2));
}

console.log(converter(10))