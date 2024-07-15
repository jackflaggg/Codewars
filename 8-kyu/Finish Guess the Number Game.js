class Guesser {
	constructor(number, lives) {
		this.number = number;
		this.lives = lives;
	}

	guess(n) {
		if (this.lives === 0){
			throw new Error("Guess can't guess");
		}
		if (n !== this.number){
			this.lives -= 1
			return false;
		}
		if (n === this.number){
			return true;
		}
	}
}

const user = new Guesser(4, 5);
console.log(user.guess(4));
console.log(user.lives);