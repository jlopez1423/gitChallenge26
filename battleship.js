var randomLoc = Math.floor(Math.random() * 5);
var location1 =  randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;


while(isSunk == false){
	//User's guess
	guess = prompt("Ready, aim, fire!Enter a number from 0 - 6:");

	if(guess < 0 || guess > 6){
		alert("Please enter a valid response.");
	} else {
		guesses = guesses + 1;  
	}
	if(guess == location1 || guess == location2 || guess == location3){
		hits = hits + 1;
		alert("You have a hit");		
		if( hits == 3){
		isSunk = true;
		alert("You sunk my battleship!");
		}
	} else { alert("you have a miss");}

	
}


var stats = "You took " + guesses + " gueses to sink the battleship, " + 
"which means your shoorint accuracy was " + (3/guesses);
alert(stats);
