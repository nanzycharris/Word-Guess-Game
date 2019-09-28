// GLOBAL VARIABLES
// ========================================================================
// Arrays and variables for holding data

var wordOptions = ["mustang", "continental", "marker", "daisy", "parabellum", "bourbon", "boogeyman", "jonathan"];
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
        blanksAndSuccesses.push(" ");
    }

    // Change HTML to reflect game round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // Testing / Debugging

    console.log(selectedWord);
    console.log(wrongLetters);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    //Check where in word the letter exists
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
        else {
            wrongLetters.push(letter);
            guessesLeft--
        }

        // Testing and Debuggin
        console.log(blanksAndSuccesses);
    }
}


function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " Guesses Left " + guessesLeft);

    // Update the HTML to reflect the most recent count stats
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");

    // Check if user won
    if (isLetterInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won!")

        // Update the win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    // Check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lost!");
        // Update the HTML 
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }
}


// MAIN PROCESS 
// ========================================================================

// Register keyclicks

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}