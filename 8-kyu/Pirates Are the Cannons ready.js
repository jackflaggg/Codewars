const cannonsReady = (gunners) => {
	return Object.values(gunners).filter(elem => elem === 'aye').length === Object.values(gunners).length ? 'Fire!' : 'Shiver me timbers!';
}