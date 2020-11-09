// Primitive value : string,  number, boolean, null, undefined

//Object: myObject --> Object.prototype --> null
//Array: myArray --> array.prototype --> Object.prototype --> null
//Function: myFunc = --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const team = new Array(['Luke', 'Maddison'])
// console.log(team.hasOwnProperty('length'))


const puzzleElement  = document.querySelector('#puzzle')
const guessesElement  = document.querySelector('#guesses')

const game1 = new Hangman('Cat', 2)

puzzleElement.textContent = game1.getPuzzle()
guessesElement.textContent = `You have ${game1.remainingGuesses} remaining guesses` 

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.gameStatus()
    puzzleElement.textContent = game1.getPuzzle()
    guessesElement.textContent = `You have ${game1.remainingGuesses} remaining guesses` 
})