const puzzleElement  = document.querySelector('#puzzle')
const guessesElement  = document.querySelector('#guesses')
const game1 = new Hangman('Car Park', 2)

puzzleElement.textContent = game1.puzzle
guessesElement.textContent = game1.statusMessage

console.log(game1.puzzle)
console.log(game1.statusMessage)


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    
    game1.makeGuess(guess)
    game1.gameStatus()
    
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage
})

//
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})

getCountry('US').then((country) => {
    console.log(country.name)
}, (err) => {
    console.log(`Error: ${err}`)
})

//Callback
// getCountry('US', (error, country) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(`Country: ${country.name}`)
//     }
// })