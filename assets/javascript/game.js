// GLOBAL VARIABLES
// ========================================================================
// Arrays and variables for holding data
// This variable contains an array with the possible hidden words:
var wordOptions = ["mustang", "continental", "marker", "daisy", "parabellum", "bourbon", "boogeyman", "jonathan", "excommunicado", "jardani", "jovanovich", "helen"];
// This variable contains the randomly selected word that the user has to guess
var selectedWord = "";
// This variable holds an array which contains the letters that compose the selected word to be guessed 
var lettersinWord = [];
// This variable holds the number of blanks or number of spaces for the letters that form the hidden word
var numBlanks = 0;
// This variable holds an array with the letters that the user will type which either will be right or wrong
var blanksAndSuccesses = [];
// This variable holds an array which will contain the letters the user typed but are a wrong guess
var wrongLetters = [];

// Game counters
// Variable for counter for the games won
var winCount = 0;
// Variable for counter for the games lost
var lossCount = 0;
// Variable for counter for the attempts left
var guessesLeft = 0;
// Variable for counter for the letters that the user typed but which were a wrong guess
var wrongLtr = "&nbsp";

// FUNCTIONS (reusable blocks of code that I will call upon when needed)
// ========================================================================

function play() {
    var audio = document.getElementById("audioYeah");
    audio.play();
}

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
        blanksAndSuccesses.push("_");
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
    isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    //Check or locate if the letter exists in the current word
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
    if (isLetterInWord === false) {
        wrongLetters.push(letter);
        guessesLeft--
    }

    // Testing and Debuggin
    console.log(blanksAndSuccesses);
}


function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " Guesses Left " + guessesLeft);

    // Update the HTML to reflect the most recent count stats
    var wordToGuess = document.getElementById("wordToGuess");
    wordToGuess.innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongGuess").innerHTML = wrongLtr;
    document.getElementById("winCounter").innerHTML = winCount;
    // Adding an If statement to keep the 'Wrong Guesses' cointainer on the webpage from shrinking before it is populated
    console.log(wrongLetters, " letters")
    if (wrongLetters.length >= 1) {
        document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");
    }

    // Check if user won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        wordToGuess.innerHTML = blanksAndSuccesses.join(" ");
        setTimeout(function () {
            play();
            alert("You won!");
            startGame();
        }, 00);
        // Update the win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCount;
    }

    // Check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        // Show the complete word
        wordToGuess.innerHTML = selectedWord;
        // Setting time out to show the complete word before alert
        setTimeout(function () {
            alert("You lost!");
            startGame();
        }, 00);
        // Update the HTML 
        document.getElementById("lossCounter").innerHTML = lossCount;
        document.getElementById("wrongGuess").innerHTML = wrongLtr;
    }
}


// MAIN PROCESS 
// ========================================================================

window.onload = function () {
    alert("Just type a letter to start the game, and away we go...");
    startGame();
    // checkLetters();
    roundComplete();
    document.getElementById("wrongGuess").innerHTML = wrongLtr;
    document.onkeyup = function (event) {
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(letterGuessed);
        roundComplete();


        console.log(letterGuessed);
    }
}




