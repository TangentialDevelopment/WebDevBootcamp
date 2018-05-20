function isEven(x) {
	return x % 2 === 0;
}

function factorial(x) {
	var final = 1;
	for (var y = 1; y <= x; y++) {
		final *= y;
	}
	return final;
}

function kebabToSnake(string) {
	var newString = string.replace(/-/g,"_");
	return newString;
}