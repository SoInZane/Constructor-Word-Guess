//// Constructor initialize
var Word = require("./word.js");
var inquirer = require("inquirer");

// letters entry
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of words to choose from
var superHeroNames = ["Batman", "Superman", "The Flash", "Wonder Woman", "Aqua Man", "Cyborg", "Iron Man", "Captain America", "Thor", "The Hulk", "Silver Surfer", "Spider Man", "Black Panther", "Wolverine", "Gambit", "Cyclops", "Professor Xavier", "DeadPool", "Collossus", "Martian Manhunter", "Green Lantern", "Mr Fantasic", "Human Torch", "Daredevil", "Raven", "Beast Boy", "Robin", "Starfire", "Doctor Strange", "Jean Gray"];

// Pick Random name from Super Hero Names array
var randomIndex = Math.floor(Math.random() * superHeroNames.length);
var randomWord = superHeroNames[randomIndex];

// Pass random word through Word constructor
computerWord = new Word(randomWord);

var requireNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Set the number of guesses
var guessesLeft = 10;

function information() {

    // Generates new word for Word constructor if true
    if (requireNewWord) {
        // Grabs new Super Hero Names array
        var randomIndex = Math.floor(Math.random() * superHeroNames.length);
        var randomWord = superHeroNames[randomIndex];

        // Passes random word through the Word constructor
        computerWord = new Word(randomWord);


        requireNewWord = false;
    }

    // Tests if a letter guessed is correct
    var wordComplete = [];
    computerWord.objectArray.forEach(completeCheck);

    // letters remaining to be guessed
    if (wordComplete.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter of the alphabet between A-Z!",
                    name: "userinput"
                }
            ])
            .then(function (input) {

                if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
                    console.log("\nPlease try again!\n");
                    information();
                } else {

                    if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                        console.log("\nAlready Guessed or Incorrect Key Entered\n");
                        information();
                    } else {

                        // Checks if guess is correct
                        var wordCheckArray = [];

                        computerWord.userGuess(input.userinput);

                        // Checks if the guess is correct
                        computerWord.objectArray.forEach(wordCheck);
                        if (wordCheckArray.join('') === wordComplete.join('')) {
                            console.log("\nIncorrect\n");

                            incorrectLetters.push(input.userinput);
                            guessesLeft--;
                        } else {
                            console.log("\nCorrect!\n");

                            correctLetters.push(input.userinput);
                        }

                        computerWord.log();

                        // Display the number of guesses left
                        console.log("Number of Guesses Left: " + guessesLeft + "\n");

                        // Display what letters have been guessed
                        console.log("Letters You've Guessed: " + incorrectLetters.join(" ") + "\n");

                        // Check the number of guesses left
                        if (guessesLeft > 0) {
                            // Call function 
                            information();
                        } else {
                            console.log("Sorry, you lose!\n");

                            restartGame();
                        }

                        function wordCheck(key) {
                            wordCheckArray.push(key.guessed);
                        }
                    }
                }
            })
    } else {
        console.log("Winner, Winner!\n");

        restartGame();
    }

    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }

}
// Function to restart the game
function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to:",
                choices: ["Play Again", "Stop Playing and Exit"],
                name: "restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "Play Again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                knowledge();
            } else {
                return
            }
        })
}

information();