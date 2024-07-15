function removeEveryOther(arr){
	let arrOdd = []
	for(let i=0; i<arr.length; i++){
		if (i % 2 === 0){
			arrOdd.push(arr[i])
		}
	}
	return arrOdd
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))