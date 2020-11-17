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
const game1 = new Hangman('Car Park', 2)

puzzleElement.textContent = game1.puzzle
guessesElement.textContent = game1.statusMessage

console.log(game1.puzzle)
console.log(game1.statusMessage)


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    
    game1.makeGuess(guess)
    game1.gameStatus()
    
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage
})