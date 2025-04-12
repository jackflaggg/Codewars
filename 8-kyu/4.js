class Animal {
	constructor(name) {
		this.name = name;
	}
	speak(){
		console.log('say ' + this.name)
	}
}

class Cat extends Animal {
	constructor(name){
		super(name)
	}
	speak(){
		return `${this.name} meows.`;
	}
}
const cat = new Cat('Mr Whiskers');
cat.speak()