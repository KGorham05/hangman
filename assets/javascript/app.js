// Psuedo Code

// Display some things on the page

// Create variables for game board
// win tally
var wins = 0;
// blank spaces for each letter in the solution string (reveal as guessed correctly)
let blankAnswerArray = [];
// Number of guesses remaining for the user
var guesses = 10;
// Letters already guessed displayed like L Z Y H.
var guessedLetters = [];

// Create variables that hold references to the places
// in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var answerArrayText = document.getElementById("blank-spaces")
var guessesText = document.getElementById("remaining-guesses-text");
var previousGuessesText = document.getElementById("previous-guesses-text");

// Answer Array
var possibleAnswers = ["Optimus Prime", "The Terminator", "Mega Man", "R2-D2", "Number Six", "Bender", "Flexo", "Calculon", "WALL-E", "C-3PO", "The Iron Giant", "Robocop", "Hal 9000", "Data", "Johnny 5"];
// computer generates a starting solution from the robot list array.
var solution1 = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
var solution = solution1.toUpperCase();

// Populate the blankAnswerArray with blanks for each character in the solution string
// I need to create spaces where there is a space in the string, and reveal the dash if there is a dash in the solution.
// Ryan B. Solution
// solution.forEach(function(value, key) {
//     if (value == "-" || value == " ") {
//         solution[key]=value
//     } else {solution[key]="_";}
// }); 

for (i = 0; i < solution.length; i++) {
    if (solution.charAt(i) == " ") {
        blankAnswerArray.push(" ");
    } else if (solution.charAt(i) == "-") {
        blankAnswerArray.push("-");
    } else {
        blankAnswerArray.push("_");
    };
};
console.log(solution);

// display the blank answer array
answerArrayText.textContent = blankAnswerArray;

// This will run whenever the user presses a key.
document.onkeyup = function (event) {
    console.log("Game function is running");
    console.log(solution);

    // determine which key is pressed
    var userGuess = event.key;

    // compare that key to all index positions of the solution string
    for (j = 0; j < solution.length; j++) {
        if (solution[j] === userGuess.toUpperCase()) {
            blankAnswerArray[j] = userGuess.toUpperCase();
            // update the blankAnswerArray
            answerArrayText.textContent = blankAnswerArray;
        } else {
            // reduce guesses remaining 
            guesses--; 
            
        };
    };


};
//After the user wins/loses the game should auto choose another word +overwrite solution string with blanks

// BONUS see instructions

