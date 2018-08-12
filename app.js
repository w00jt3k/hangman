const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

/* getPuzzle('3').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(err)
}) */

/* fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(error)
}) */