function htmlspecialchars(formData) {
	return formData.split('').map((elem) => {
		if (elem === '<'){
			return '&lt;';
		}
		if (elem === '>'){
			return '&gt;';
		}
		if (elem === '"'){
			return '&quot;';
		}
		if (elem === '&'){
			return '&amp;';
		}
		return elem
	}).join('')
}