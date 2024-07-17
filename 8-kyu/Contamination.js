function contamination(text, char){
	return !text.length || !char.length ? '' : char.repeat(text.length);
}

console.log(contamination("//case"," "));