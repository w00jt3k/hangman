const Hangman = function(word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const hangman1 = new Hangman('test', 10)
const hangman2 = new Hangman('another', 21)

console.log(hangman1, hangman2)