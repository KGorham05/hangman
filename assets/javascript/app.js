// Psuedo Code

// Display some things on the page
// game board

// Create variables for game board
// win tally
var wins = 0;
// blank spaces for each letter in the answer string
var answerString = [];
// reveal letters as the user guesses the correct letters
// Number of guesses remaining for the user
var guesses = 10;
// Letters already guessed displayed like L Z Y H.
var guessedLetters = [];

// Create variables that hold references to the places
// in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var answerStringText = document.getElementById("blank-spaces")
var guessesText = document.getElementById("remaining-guesses-text");
var previousGuessesText = document.getElementById("previous-guesses-text");

// Answer Array
var answers = ["Optimus Prime", "The Terminator", "Mega Man", "R2-D2", "Number Six", "Bender", "Flexo", "Calculon", "WALL-E", "C-3PO", "The Iron Giant", "Robocop", "Hal 9000", "Data", "Johnny 5" ];
// computer generates a starting answer from the robot list array.
var answer = answers[Math.floor(Math.random() * answers.length)];

// Populate the answerString with blanks for each character in the answer string
// I need to create spaces where there is a space in the string, and reveal the dash if there is a dash in the answer. 
answer.forEach(function() {
    console.log("sytax check in my forEach statement");
})
for (i = 0; i < answer.length; i++) {
        // check if a character is a space
        // check if a character is a dash
        answerString.push("_");
    console.log(answerString);
}

document.getElementById("blank-spaces").textContent = answerString;

// This will run whenever the user presses a key.
document.onkeyup = function (event) {
    console.log("Game function is running");
    
    console.log(answer);

    // determine which key is pressed
    var userGuess = event.key;

 
    // compare that key to all index positions of the answer string



};
//After the user wins/loses the game should auto choose another word +overwrite answer string with blanks

// BONUS see instructions

