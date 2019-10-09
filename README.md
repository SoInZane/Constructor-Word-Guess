# Constructor Word Guess

Constructor Word Guess is a word guess game that takes in a users input using node.js and is built with JavaScript. The user gets 10 guesses to correctly guess the random word the computer generates from a pre-defined list. If they user guesses it correctly before the 10th guess is used they win and if they don't they lose. After each game they can choose to restart and play again or exit.

## NPM Dependencies
* Inquirer

## How to play Constructor Word Guess

**node index.js**
This command will launch into the index .js file and ask the user to pick a letter of the alphabet (A-Z). The user gets 10 guesses which are tracked and will show them the number remaining. The letters guessed correctly will fill in the blanks where they are correct and incorrect guess decrement the number of guess and also show you which one you have already guessed. If you guess a letter that you have already guessed you will recieve a response it has already been guessed but it doesn't count against you. 