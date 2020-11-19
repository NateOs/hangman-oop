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


getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// //Converting getPuzzle and getCountry to the Fetch API

// getCountry('US').then((country) => {
//     console.log(country.name)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })


//The Fetch API can make requests but returns a promise
fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error ('Unable to fetch the puzzle')
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(error)
})

//Callback
// getCountry('US', (error, country) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(`Country: ${country.name}`)
//     }
// })