// Primitive value : string,  number, boolean, null, undefine

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


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    
    game1.makeGuess(guess)
    game1.gameStatus()
    
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage
})

//Making an HTTP Request

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place ')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3') //sets the request METHOD
request.send() //initiates the request

//Make a new Request for all countries
//Parse the responseText to get back the array of objects 
//Find the country object by it's country code (alpha2Code property)
//Print the full country name (name property)
countrycode = 'US'
const countryRequest = new XMLHttpRequest

countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
countryRequest.send()

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = (data.find(item => item.alpha2Code === countrycode))
        console.log(country.name)
    } else if (e.target.readyState === 4) {
        console.log('Unable to Fetch Data')
    }
})