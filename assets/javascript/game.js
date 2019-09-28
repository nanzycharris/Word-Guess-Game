// GLOBAL VARIABLES
// ========================================================================
// Arrays and variables for holding data

var wordOptions = ["mustang", "continental", "marker", "daisy", "parabellum", "bourbon", "boogeyman"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game counters

var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;

// FUNCTIONS (reusable blocks of code that I will call upon when needed)
// ========================================================================

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // Reset 

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with the right number of blanks

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("");
    }
    // Testing / Debugging

    console.log(selectedWord);
    console.log(wrongLetters);
    console.log(blanksAndSuccesses);
}


// MAIN PROCESS 
// ========================================================================

startGame();

