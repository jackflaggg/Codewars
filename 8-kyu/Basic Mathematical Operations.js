// Your task is to create a function that does four basic mathematical operations.
//
// 	The function should take three arguments - operation(string/char), value1(number), value2(number).
// 	The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2){
	let res = 0;
	switch (operation){
		case '+':
			res = value1+value2;
			break;
		case '-':
			res = value1 - value2;
			break;
		case '/':
			res = value1 / value2;
			break;
		case '*':
			res = value1 * value2;
			break
	}
	return res;
}

console.log(basicOp( '/',1,2));