function Letter(letter) {
    this.letter = letter;
    this.guessedLetter = false;

    this.toString = function () {

        if (this.letter === " ") {
            this.guessedLetter = true;
            return " ";
        }
        else {
            if (this.guessedLetter === false) {
                return "_";
            }
            else {
                return this.letter;
            }
        }
    };

    this.guess = function (guess) {

        if (guess === this.letter) {
            this.guessedLetter = true;

        }
    }
}
module.exports = Letter;