function likes(names) {
    if (names.length > 0){
        if (names.length === 1){
            for (const name of names) {
                return name + " likes this";
            }
        } else if (names.length === 2){
            return names.join(" and ") + " like this";
        } else if (names.length === 3){
            let lastTwoNames = names.slice(-2).join(' and ');
            let otherNames = names.slice(0, -2);
            return otherNames.join(', ') + ', ' + lastTwoNames + ' like this';
        } else if (names.length >= 4){
            const numberArr = names.length - 2;
            return names[0] + ', ' + names[1] + ' and ' + numberArr + ' others like this'
        }
    } else{
        return "no one likes this";
    }
}

function switchCase(names) {
    const length = names.length;
    switch (length) {
        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names.join(" and ") + " like this";
        case 3:
            return names.slice(0, -1).join(", ") + " and " + names[length - 1] + " like this";
        default:
            return names.slice(0, 2).join(", ") + ` and ${length - 2} others like this`;
    }
}


let arr = ['Petya', 'Kolya', 'Vika', 'Sasha'];

let result = switchCase(arr);

console.log(result)