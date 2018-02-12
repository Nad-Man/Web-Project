var secretNumber = 4;

var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);

if(guess === secretNumber) {
	alert("You Got it Right");
}

else if (guess < secretNumber){
	alert("Number is Lower");
}

else {
	alert("Number is Higher");
}
