const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Zielona mila', 8)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
    
})

// Making an HTTP request


/* const request = new XMLHttpRequest()

request.addEventListener('readystatechange', function(e) {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const myCountry = JSON.parse(e.target.responseText).find(country => country.alpha2Code === 'PL')
        console.log(myCountry.name)
    }
})

request.open('GET', 'http://restcountries.eu/rest/v2/all')
request.send() */