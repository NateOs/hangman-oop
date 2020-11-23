const puzzleElement  = document.querySelector('#puzzle')
const guessesElement  = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = e.key
    console.log(guess)
    game1.makeGuess(guess)
    game1.gameStatus()
    render()
})

// window.addEventListener('load', () => {
//     startGame()
//     render()
// });


// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// Getting locationData using ipinfo API chained with getCountry promise
getLocation().then((ipInfo) => {
    return getCountry(ipInfo.country)
}).then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

const render = () => {
    puzzleElement.innerHTML = ''
    guessesElement.textContent = game1.statusMessage

    //adding span to each letter 
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleElement.appendChild(letterEl)
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}  



document.querySelector('#reset').addEventListener('click', () => {
    startGame()
})

startGame() // this actually starts the game

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })