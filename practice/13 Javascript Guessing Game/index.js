var secretNumber = 4;

var guess = Number(prompt("Guess a number: "));

if (guess === secretNumber) {
	alert("You got it right!");
} 

else if (guess > secretNumber) {
	alert("too high. Guess again.")
}

else (guess < secretNumber) {
	alert("too low. Guess again.")
}