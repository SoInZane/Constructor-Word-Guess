// Letter Constuctor to require the letter.js file
var Letter = require("./letter.js");

// Create function for the answer
function Word(answer) {
    //Letter objects array
    this.objectArray = [];
    
    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.objectArray.push(letter);
    }
    
    this.log = function () {
        answerLog = "";
        for (var i = 0; i < this.objectArray.length; i++) {
            answerLog += this.objectArray[i] + " ";
        }
        console.log(answerLog + "\n");
    }
    
    this.userGuess = function (input) {
        for (var i = 0; i < this.objectArray.length; i++) {
            this.objectArray[i].guess(input);
        }
    }
};

module.exports = Word;