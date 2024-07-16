function getDrinkByProfession(param){
	let res = {
		"Jabroni": "Patron Tequila",
		"School Counselor": "Anything with Alcohol",
		"Programmer": "Hipster Craft Beer",
		"Bike Gang Member": "Moonshine",
		"Politician": "Your tax dollars",
		"Rapper": "Cristal",
	};
	const formattedParam = param.toLowerCase().split(' ').map((word, index) => index === 0 ? word[index].toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	return res.hasOwnProperty(formattedParam) ? res[formattedParam] : 'Beer';
}

console.log(getDrinkByProfession("bike ganG member"));