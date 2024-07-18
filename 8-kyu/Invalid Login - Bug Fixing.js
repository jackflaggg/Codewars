
function validate(username, password){
	const database = new Database();
	if(password.includes('||') || password.includes('//'))return 'Wrong username or password!';
	return database.login(username, password);
}

const database = new Database();
database.login('Timmy', 'password');